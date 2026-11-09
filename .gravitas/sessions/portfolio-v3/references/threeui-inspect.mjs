import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { writeFile } from 'node:fs/promises';
assert.ok(process.argv[2], 'Pass the absolute path to Playwright index.mjs.');
const { chromium } = await import(pathToFileURL(process.argv[2]).href);

const output = '.gravitas/sessions/portfolio-v3/references';
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const response = await page.goto('https://threeui.com/browse?sort=recent', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });
  await page.waitForTimeout(6500);
  const report = await page.evaluate(() => ({
    url: location.href,
    title: document.title,
    text: document.body.innerText.slice(0, 18000),
    links: [...document.querySelectorAll('a')]
      .map((a) => ({ text: a.innerText.trim().slice(0, 100), href: a.href }))
      .filter((a) => a.text || /\/design|\/inspiration|\/site|\/website|\/work/.test(a.href))
      .slice(0, 100),
    images: [...document.images]
      .slice(0, 30)
      .map((img) => ({
        alt: img.alt,
        src: img.currentSrc,
        loaded: img.complete && img.naturalWidth > 0,
      })),
  }));
  report.status = response?.status();
  await page.screenshot({ path: `${output}/threeui-recent-desktop.png`, fullPage: false });
  await page.screenshot({ path: `${output}/threeui-recent-full.png`, fullPage: true });
  await writeFile(`${output}/threeui-page.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
