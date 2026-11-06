import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { writeFile } from 'node:fs/promises';
import { preview } from 'vite';

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const server = await preview({
  build: { outDir: '.gravitas/sessions/immersive-portfolio/build' },
  preview: { host: '127.0.0.1', port: 4174, strictPort: true },
});
const browser = await chromium.launch({ headless: true });
const errors = [];
const results = [];
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on('pageerror', (error) => errors.push(error.message));
  for (const route of ['', '#/works', '#/about', '#/contact']) {
    await page.goto(`http://127.0.0.1:4174/my_portfolio/${route}`, { waitUntil: 'networkidle' });
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    if (!route) {
      const pause = page.getByRole('button', { name: 'Pause 3D animation' });
      await pause.waitFor();
      const buttonRect = await pause.boundingBox();
      const navigationRect = await page.getByRole('navigation').boundingBox();
      assert.ok(buttonRect.y + buttonRect.height < navigationRect.y, 'Animation controls must clear the mobile navigation');
      await pause.click();
      assert.equal(await page.locator('.webgl-host').getAttribute('data-animation'), 'paused');
      await page.screenshot({ path: '.gravitas/sessions/immersive-portfolio/screenshots/final-mobile.png' });
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.screenshot({ path: '.gravitas/sessions/immersive-portfolio/screenshots/final-desktop.png' });
      await page.setViewportSize({ width: 390, height: 844 });
      results.push('Production Three.js chunk loads; mobile pause control clears navigation and works');
    }
    if (route === '#/works') assert.equal(await page.locator('.project-card').count(), 9);
    results.push(`Production route ${route || 'home'} renders without overflow`);
  }
  assert.deepEqual(errors, []);
  results.push('No production browser errors');
  await writeFile('.gravitas/sessions/immersive-portfolio/production-evidence.json', JSON.stringify({ results, errors, verdict: 'PASS' }, null, 2));
  console.log(JSON.stringify(results, null, 2));
  console.log('VERDICT: PASS — production build and final mobile control placement');
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
