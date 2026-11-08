import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const baseURL = process.env.PORTFOLIO_URL || 'http://localhost:3000/my_portfolio/';
const browser = await chromium.launch({ headless: true });
const results = [];
const errors = [];
const pass = (name, details = '') => {
  results.push({ name, details, passed: true });
  console.log(`PASS ${name}${details ? `: ${details}` : ''}`);
};
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  await context.addInitScript(() => {
    window.__webglDraws = 0;
    for (const method of [
      'drawElements',
      'drawArrays',
      'drawElementsInstanced',
      'drawArraysInstanced',
    ]) {
      const original = WebGL2RenderingContext.prototype[method];
      WebGL2RenderingContext.prototype[method] = function (...args) {
        window.__webglDraws += 1;
        return original.apply(this, args);
      };
    }
  });
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.locator('.scene-ready canvas').waitFor();
  await page.waitForTimeout(2000);
  const count = () => page.evaluate(() => window.__webglDraws);
  const initial = await count();
  assert.ok(initial > 0, 'The GPU actually drew the scene');
  await page.waitForTimeout(750);
  assert.equal(await count(), initial);
  pass(
    'Idle scene draws no new frames',
    `0 draw calls during 750 ms idle window; ${initial} initialization calls`
  );

  const rect = await page.locator('.scene-ready canvas').boundingBox();
  await page.mouse.move(rect.x + rect.width * 0.82, rect.y + rect.height * 0.3);
  await page.waitForFunction((before) => window.__webglDraws > before, initial);
  await page.waitForTimeout(2200);
  const afterPointer = await count();
  await page.waitForTimeout(750);
  assert.equal(await count(), afterPointer);
  pass('Pointer input renders then settles back to idle');

  await page.evaluate(() => window.scrollTo(0, 220));
  await page.waitForFunction((before) => window.__webglDraws > before, afterPointer);
  await page.waitForTimeout(2200);
  const afterScroll = await count();
  await page.waitForTimeout(750);
  assert.equal(await count(), afterScroll);
  pass('Native scroll rotates sculpture and settles back to idle');

  await page.getByRole('button', { name: 'Pause 3D animation' }).click();
  await page.waitForFunction(
    () => document.querySelector('.webgl-host').dataset.animation === 'paused'
  );
  await page.waitForTimeout(350);
  const paused = await count();
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.waitForTimeout(700);
  assert.equal(await count(), paused);
  pass('Pause control prevents scroll-driven WebGL work');
  await page.getByRole('button', { name: 'Play 3D animation' }).click();
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForFunction(
    () => document.querySelector('.webgl-host').dataset.animation === 'paused'
  );
  await page.waitForTimeout(500);
  const offscreen = await count();
  await page.evaluate(() => window.scrollTo(0, 1900));
  await page.waitForTimeout(700);
  assert.equal(await count(), offscreen);
  pass('Offscreen scene suspends drawing while document scrolls');

  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForFunction(
    () => document.querySelector('.webgl-host').dataset.animation === 'playing'
  );
  await page.waitForTimeout(2200);
  await page.screenshot({ path: '.gravitas/sessions/portfolio-v2/screenshots/final-desktop.png' });
  await page.locator('.scene-ready canvas').evaluate((canvas) => {
    canvas.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext();
  });
  await page.locator('.orbital-fallback').waitFor({ state: 'visible' });
  await page.waitForFunction(() => !document.querySelector('canvas'));
  assert.equal(
    await page.getByRole('link', { name: 'Explore my work', exact: true }).isVisible(),
    true
  );
  pass('Context loss releases WebGL and shows the CSS fallback');

  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobile.newPage();
  mobilePage.on('pageerror', (error) => errors.push(error.message));
  await mobilePage.goto(baseURL, { waitUntil: 'networkidle' });
  await mobilePage.locator('.scene-ready canvas').waitFor();
  await mobilePage.waitForTimeout(1000);
  const density = await mobilePage
    .locator('canvas')
    .evaluate((canvas) => canvas.width / canvas.clientWidth);
  assert.equal(density, 1);
  pass('Mobile GPU pixel density stays at 1 on a 3× device');
  const cdp = await mobile.newCDPSession(mobilePage);
  await cdp.send('Input.dispatchTouchEvent', {
    type: 'touchStart',
    touchPoints: [{ x: 220, y: 640 }],
  });
  await cdp.send('Input.dispatchTouchEvent', {
    type: 'touchMove',
    touchPoints: [{ x: 220, y: 420 }],
  });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await mobilePage.waitForFunction(() => window.scrollY > 100);
  pass('Native touch scrolling works across the 3D canvas');
  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await mobilePage.waitForTimeout(1200);
  await mobilePage.screenshot({
    path: '.gravitas/sessions/portfolio-v2/screenshots/final-mobile.png',
  });
  for (const route of ['', '#/works', '#/about', '#/contact']) {
    await mobilePage.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
    const navigation = mobilePage.getByRole('navigation');
    const nav = await navigation.boundingBox();
    assert.ok(nav.y > 700 && nav.y + nav.height <= 844, 'Mobile dock stays inside viewport');
    if (!route) {
      const pauseButton = mobilePage.getByRole('button', { name: 'Pause 3D animation' });
      await pauseButton.waitFor();
      await pauseButton.scrollIntoViewIfNeeded();
      const button = await pauseButton.boundingBox();
      assert.ok(
        button.y + button.height < nav.y || button.y > nav.y + nav.height,
        'Dock does not obscure pause control'
      );
    }
    if (route === '#/works') {
      await mobilePage.getByRole('button', { name: 'List view' }).click();
      await mobilePage.locator('.project-list').waitFor();
      assert.equal(
        await mobilePage.evaluate(() => document.documentElement.scrollWidth > innerWidth),
        false
      );
    }
    await mobilePage.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const footer = await mobilePage.locator('.copyright').boundingBox();
    assert.ok(footer.y + footer.height < nav.y, 'Footer content remains above mobile dock');
  }
  pass('Mobile dock clears controls and footer on all four routes; list view fits');
  await mobile.close();
  assert.deepEqual(errors, []);
  pass('No browser exceptions during scene, context-loss, or touch checks');
  await writeFile(
    '.gravitas/sessions/portfolio-v2/scene-evidence.json',
    JSON.stringify({ baseURL, results, errors, verdict: 'PASS' }, null, 2)
  );
  console.log(`VERDICT: PASS — ${results.length} scene and touch checks`);
} finally {
  await browser.close();
}
