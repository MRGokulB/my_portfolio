import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { writeFile } from 'node:fs/promises';
assert.ok(process.argv[2], 'Pass the absolute path to Playwright index.mjs.');
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const output = '.gravitas/sessions/portfolio-v3/references';
const browser = await chromium.launch({ headless: true });
const reports = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  for (const [name, path] of [
    ['kage', '/landing-pages/kage-landing-page'],
    ['bestsellers', '/hero/bestsellers-book-showcase'],
    ['structure-flow', '/three-js/structure-flow'],
    ['sign-up', '/buttons/sign-up-button'],
  ]) {
    const page = await context.newPage();
    const response = await page.goto(`https://threeui.com${path}`, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    await page.waitForTimeout(5000);
    const report = await page.evaluate(() => ({
      url: location.href,
      title: document.title,
      text:
        document.querySelector('main')?.innerText.slice(0, 6000) ||
        document.body.innerText.slice(-6000),
      iframes: [...document.querySelectorAll('iframe')].map((frame) => ({
        src: frame.src,
        title: frame.title,
      })),
      buttons: [...document.querySelectorAll('button')]
        .map((button) => button.innerText)
        .filter(Boolean)
        .slice(-25),
    }));
    report.name = name;
    report.status = response?.status();
    reports.push(report);
    await page.screenshot({ path: `${output}/threeui-${name}.png`, fullPage: false });
    await page.close();
  }
  await writeFile(`${output}/threeui-previews.json`, JSON.stringify(reports, null, 2));
  console.log(JSON.stringify(reports, null, 2));
} finally {
  await browser.close();
}
