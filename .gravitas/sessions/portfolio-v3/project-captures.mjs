import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

assert.ok(process.argv[2], 'Pass the absolute path to Playwright index.mjs.');
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const browser = await chromium.launch({ headless: true });
const sites = [
  {
    id: 6,
    name: 'Herbs Magic',
    source: 'https://www.theherbsmagic.com/',
    output: 'public/assets/herbs-magic-v3.png',
  },
  {
    id: 8,
    name: 'GCON Nanded',
    source: 'https://gconnanded.in',
    output: 'public/assets/gcon-nanded-v3.png',
  },
];
const results = await Promise.all(
  sites.map(async (site) => {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const record = { ...site, capturedAt: new Date().toISOString(), attempts: [] };
    try {
      let response;
      try {
        response = await page.goto(site.source, { waitUntil: 'domcontentloaded', timeout: 35000 });
      } catch (error) {
        record.attempts.push({ source: site.source, error: error.message });
        const alternate = site.source.includes('www.')
          ? site.source.replace('www.', '')
          : site.source.replace('https://', 'https://www.');
        response = await page.goto(alternate, { waitUntil: 'domcontentloaded', timeout: 35000 });
        record.alternateSource = alternate;
      }
      record.httpStatus = response?.status();
      await page.waitForLoadState('networkidle', { timeout: 12000 }).catch(() => {});
      await page.evaluate(() =>
        Promise.race([
          Promise.all([
            document.fonts.ready,
            ...[...document.images].map((img) =>
              img.complete
                ? Promise.resolve()
                : new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve;
                  })
            ),
          ]),
          new Promise((resolve) => setTimeout(resolve, 8000)),
        ])
      );
      record.finalUrl = page.url();
      record.title = await page.title();
      record.bodyExcerpt = (await page.locator('body').innerText()).slice(0, 450);
      record.images = await page.evaluate(() => ({
        total: document.images.length,
        loaded: [...document.images].filter((img) => img.naturalWidth > 0).length,
      }));
      const credible =
        record.httpStatus < 400 &&
        record.bodyExcerpt.length > 200 &&
        !/domain (?:is )?for sale|checking your browser|verify you are human|this site can.t be reached|not found/i.test(
          record.title
        );
      record.status = credible ? 'captured-awaiting-visual-review' : 'unusable-render';
      if (credible)
        await page.screenshot({ path: site.output, fullPage: false, animations: 'disabled' });
    } catch (error) {
      record.status = 'navigation-failed';
      record.error = error.message;
    } finally {
      await context.close();
    }
    return record;
  })
);
await browser.close();
await writeFile(
  '.gravitas/sessions/portfolio-v3/project-captures.json',
  JSON.stringify(
    {
      policy: {
        planning: 'direct',
        context_depth: 'dependency',
        verification_depth: 'impact',
        delegation: 'none',
        reason_codes: ['scoped-public-screenshots'],
      },
      results,
    },
    null,
    2
  )
);
console.log(JSON.stringify(results, null, 2));
