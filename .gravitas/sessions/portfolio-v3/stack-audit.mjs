import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { preview } from 'vite';

assert.ok(process.argv[2], 'Pass the absolute path to Playwright index.mjs.');
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const baseline = process.argv.includes('--baseline');
const name = baseline ? 'stack-before' : 'stack-refined';
const folder = `.gravitas/sessions/portfolio-v3/screenshots/${name}`;
await mkdir(folder, { recursive: true });
const server = await preview({
  build: { outDir: '.gravitas/sessions/portfolio-v3/build' },
  preview: { host: '127.0.0.1', port: 4176, strictPort: true },
});
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  const page = await browser.newPage();
  for (const width of [1920, 1440, 1280, 768, 390, 320]) {
    await page.setViewportSize({ width, height: width < 500 ? 900 : 1000 });
    await page.goto('http://127.0.0.1:4176/my_portfolio/', { waitUntil: 'domcontentloaded' });
    await page.locator('.build-explorer').waitFor();
    await page.evaluate(() => document.fonts.ready);
    for (const label of ['Interface', 'Intelligence', 'Infrastructure']) {
      await page
        .locator('.layer-options')
        .getByRole('button', { name: label, exact: true })
        .click();
      await page.waitForTimeout(850);
      await page.locator('.stack-stage').scrollIntoViewIfNeeded();
      const visible = await page.locator('.stack-module.is-selected').evaluate((module) => {
        const face = module.querySelector('.module-face');
        return ['.module-header span', '.module-legend', '.module-screenshot', '.module-tools'].map(
          (selector) => {
            const box = face.querySelector(selector).getBoundingClientRect();
            const hit = document.elementFromPoint(box.x + box.width / 2, box.y + box.height / 2);
            return { selector, exposed: Boolean(hit && face.contains(hit)) };
          }
        );
      });
      const bounds = await page.locator('.stack-module.is-selected .module-face').boundingBox();
      const divider = await page.locator('.hero-bottom').boundingBox();
      const inBounds =
        bounds.x >= 0 && bounds.x + bounds.width <= width && bounds.y + bounds.height < divider.y;
      const scene = await page.locator('.stack-stage').evaluate((stage) => {
        const rect = stage.getBoundingClientRect();
        const boxes = [...stage.querySelectorAll('.module-face, .module-contour')].map((element) =>
          element.getBoundingClientRect()
        );
        const hint = stage.querySelector('.stack-drag-hint').getBoundingClientRect();
        const top = Math.min(...boxes.map((box) => box.top));
        const bottom = Math.max(...boxes.map((box) => box.bottom));
        return {
          topGap: top - rect.top,
          bottomGap: (hint.height ? hint.top : rect.bottom) - bottom,
        };
      });
      const fitsStage = scene.topGap >= 0 && scene.bottomGap >= 4;
      const passed = visible.every((item) => item.exposed) && inBounds && fitsStage;
      results.push({ width, layer: label, passed, inBounds, fitsStage, scene, visible });
      await page
        .locator('.build-explorer')
        .screenshot({ path: `${folder}/${width}-${label.toLowerCase()}.png` });
      console.log(
        `${passed ? 'PASS' : 'FAIL'} ${width}px ${label}: ${visible.filter((item) => item.exposed).length}/4 landmarks exposed; in bounds=${inBounds}; scene gaps=${scene.topGap.toFixed(1)}/${scene.bottomGap.toFixed(1)}px`
      );
      await page.getByRole('button', { name: 'Bring it together', exact: true }).click();
      await page.waitForTimeout(700);
      await page.locator('.stack-stage').scrollIntoViewIfNeeded();
      const collapsed = await page
        .locator('.stack-module.is-selected .module-legend')
        .evaluate((legend) => {
          const box = legend.getBoundingClientRect();
          const x = box.x + box.width / 2;
          const y = box.y + box.height / 2;
          const hit = document.elementFromPoint(x, y);
          return { exposed: legend.closest('.module-face').contains(hit), hit: hit?.className, x, y, viewportHeight: innerHeight };
        });
      results.push({ width, layer: label, state: 'collapsed', passed: collapsed.exposed, probe: collapsed });
      if (width === 1920 || width === 390) await page.locator('.stack-stage').screenshot({ path: `${folder}/${width}-${label.toLowerCase()}-collapsed.png` });
    }
  }
  const failed = results.filter((result) => !result.passed);
  await writeFile(
    `.gravitas/sessions/portfolio-v3/${name}.json`,
    JSON.stringify({ results, verdict: failed.length ? 'FAIL' : 'PASS' }, null, 2)
  );
  assert.equal(failed.length, 0, `${failed.length} selection visibility checks failed.`);
  console.log(`VERDICT: PASS — ${results.length} selected-layer visibility checks`);
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
