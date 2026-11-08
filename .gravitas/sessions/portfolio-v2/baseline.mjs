import { pathToFileURL } from 'node:url';
import { mkdir } from 'node:fs/promises';
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
await mkdir('.gravitas/sessions/portfolio-v2/screenshots', { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  for (const route of ['', 'works', 'about', 'contact']) {
    await page.goto(`http://localhost:3000/my_portfolio/#/${route}`, { waitUntil: 'networkidle' });
    await page.screenshot({
      path: `.gravitas/sessions/portfolio-v2/screenshots/before-${route || 'home'}.png`,
      fullPage: true,
    });
    console.log(`${route || 'home'}: ${await page.locator('h1').innerText()}`);
  }
} finally {
  await browser.close();
}
