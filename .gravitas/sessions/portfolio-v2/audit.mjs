import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const baseURL = process.env.PORTFOLIO_URL || 'http://localhost:3000/my_portfolio/';
const output = '.gravitas/sessions/portfolio-v2';
await mkdir(`${output}/screenshots`, { recursive: true });
const results = [];
const errors = [];
let axeSource;
try {
  const response = await fetch('https://unpkg.com/axe-core@4.10.3/axe.min.js');
  assert.equal(response.ok, true);
  axeSource = await response.text();
} catch (error) {
  throw new Error(`Accessibility engine unavailable: ${error.message}`);
}
function pass(name, details = '') {
  results.push({ name, passed: true, details });
  console.log(`PASS ${name}${details ? `: ${details}` : ''}`);
}
const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.locator('.scene-ready canvas').waitFor();
  pass('Home and lazy Three.js scene render');
  await page.getByRole('button', { name: 'Pause 3D animation' }).click();
  await page.waitForFunction(
    () => document.querySelector('.webgl-host').dataset.animation === 'paused'
  );
  assert.equal(await page.locator('.webgl-host').getAttribute('data-animation'), 'paused');
  await page.getByRole('button', { name: 'Play 3D animation' }).click();
  await page.waitForFunction(
    () => document.querySelector('.webgl-host').dataset.animation === 'playing'
  );
  assert.equal(await page.locator('.webgl-host').getAttribute('data-animation'), 'playing');
  pass('3D pause and resume');
  await page.getByRole('button', { name: 'A few things I’ve built' }).click();
  await page.waitForFunction(() => window.scrollY > 250);
  assert.equal(new URL(page.url()).hash, '');
  pass('Scroll action preserves hash-router route');
  await page.locator('.experience-row summary').first().click();
  assert.equal(await page.locator('.experience-row').first().getAttribute('open'), '');
  assert.equal(await page.locator('.job-content').first().isVisible(), true);
  await page.locator('.experience-row summary').first().press('Enter');
  assert.equal(await page.locator('.experience-row').first().getAttribute('open'), null);
  pass('Experience expands with mouse and closes with keyboard');

  await page.getByRole('navigation').getByRole('link', { name: 'Work', exact: true }).click();
  await page.waitForURL(/#\/works$/);
  await page.locator('.directory').waitFor();
  await page.waitForFunction(() => document.activeElement?.id === 'main-content');
  assert.equal(await page.locator('.project-card').count(), 9);
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'main-content');
  pass('Route navigation resets focus and shows all 9 projects');
  for (const category of ['AI systems', 'Full stack', 'Interactive web']) {
    const button = page.getByRole('button', { name: category, exact: true });
    await button.click();
    await page.waitForFunction(
      (category) =>
        [...document.querySelectorAll('.project-filters button')].some(
          (button) =>
            button.textContent === category && button.getAttribute('aria-pressed') === 'true'
        ),
      category
    );
    assert.equal(await button.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.project-card').count(), 3);
    assert.equal(await page.getByRole('status').innerText(), '3 projects');
    pass(`Filter: ${category}`, '3 projects');
  }
  await page.getByRole('button', { name: 'All work', exact: true }).click();
  await page.waitForFunction(() => document.querySelectorAll('.project-card').length === 9);
  assert.equal(await page.locator('.project-card').count(), 9);
  pass('All-work filter restores complete collection');
  await page.getByRole('button', { name: 'List view', exact: true }).click();
  await page.locator('.project-list').waitFor();
  assert.equal(await page.locator('.project-list .project-card').count(), 9);
  await page.getByRole('button', { name: 'AI systems', exact: true }).click();
  await page.waitForFunction(
    () => document.querySelectorAll('.project-list .project-card').length === 3
  );
  await page.getByRole('button', { name: 'Grid view', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('.project-list'));
  assert.equal(await page.locator('.project-card').count(), 3);
  pass('Grid/list layout switch preserves active category');

  const resume = await context.request.get(`${baseURL}resume.pdf`);
  assert.equal(resume.status(), 200);
  assert.equal((await resume.body()).subarray(0, 4).toString(), '%PDF');
  const favicon = await context.request.get(`${baseURL}favicon.svg`);
  assert.equal(favicon.status(), 200);
  pass('Résumé and favicon load under /my_portfolio/');

  for (const viewport of [
    { width: 1440, height: 1000 },
    { width: 1024, height: 768 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 320, height: 740 },
  ]) {
    await page.setViewportSize(viewport);
    for (const route of ['', '#/works', '#/about', '#/contact']) {
      await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(350);
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 80));
        }
        window.scrollTo(0, 0);
        await document.fonts.ready;
      });
      await page.waitForTimeout(750);
      assert.equal(await page.locator('h1').count(), 1);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      );
      assert.equal(overflow, false, `${route || 'home'} overflows at ${viewport.width}px`);
      const brokenImages = await page
        .locator('img')
        .evaluateAll((images) =>
          images
            .filter((image) => image.complete && image.naturalWidth === 0)
            .map((image) => image.src)
        );
      assert.deepEqual(brokenImages, []);
      const label = route.replace('#/', '') || 'home';
      if (viewport.width === 1440 || viewport.width === 390) {
        await page.screenshot({
          path: `${output}/screenshots/${label}-${viewport.width}-viewport.png`,
        });
        await page.screenshot({
          path: `${output}/screenshots/${label}-${viewport.width}.png`,
          fullPage: true,
        });
        if (axeSource) {
          await page.addScriptTag({ content: axeSource });
          const audit = await page.evaluate(async () =>
            window.axe.run(document, {
              runOnly: {
                type: 'tag',
                values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
              },
            })
          );
          const violations = audit.violations.map(({ id, impact, nodes }) => ({
            id,
            impact,
            elements: nodes.map((node) => ({ target: node.target, summary: node.failureSummary })),
          }));
          if (violations.length)
            console.log(
              JSON.stringify({ route: label, width: viewport.width, violations }, null, 2)
            );
          assert.deepEqual(
            violations,
            [],
            `Accessibility violations: ${label} ${viewport.width}px`
          );
          pass(
            `Accessibility ${label} ${viewport.width}px`,
            `${audit.passes.length} checks passed`
          );
        }
      }
      pass(
        `Responsive ${label} ${viewport.width}px`,
        'one h1; no overflow or broken loaded images'
      );
    }
  }

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${baseURL}#/contact`, { waitUntil: 'networkidle' });
  assert.equal(await page.locator('form').evaluate((form) => form.checkValidity()), false);
  await page.getByLabel('Your name').fill('Portfolio reviewer');
  await page.getByLabel('Email address').fill('reviewer@example.com');
  await page
    .getByLabel('What do you have in mind?')
    .fill('Reviewing the portfolio contact experience.');
  assert.equal(await page.locator('form').evaluate((form) => form.checkValidity()), true);
  assert.match(await page.locator('.form-note').innerText(), /draft in your email app/);
  pass('Contact fields validate and explain email-draft behavior');
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await page.getByRole('status').filter({ hasText: 'Email address copied.' }).waitFor();
  assert.equal(await page.getByRole('status').innerText(), 'Email address copied.');
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    'boddawargokul@gmail.com'
  );
  pass('Copy-email action writes the correct address');
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, 'writeText', {
      configurable: true,
      value: () => Promise.reject(new Error('denied')),
    });
  });
  await page.getByRole('button', { name: 'Copy email address' }).click();
  await page.getByRole('status').filter({ hasText: 'Copy unavailable' }).waitFor();
  assert.match(await page.getByRole('status').innerText(), /Copy unavailable/);
  pass('Clipboard failure gives an honest fallback');

  const reducedContext = await browser.newContext({
    reducedMotion: 'reduce',
    viewport: { width: 390, height: 844 },
  });
  const reducedPage = await reducedContext.newPage();
  await reducedPage.goto(baseURL, { waitUntil: 'networkidle' });
  await reducedPage.locator('.scene-ready canvas').waitFor();
  assert.equal(await reducedPage.locator('.webgl-host').getAttribute('data-animation'), 'paused');
  assert.equal(await reducedPage.getByRole('button', { name: 'Pause 3D animation' }).count(), 0);
  pass('Reduced-motion preference pauses 3D');
  await reducedContext.close();

  const fallbackContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await fallbackContext.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type === 'webgl2' || type === 'webgl' ? null : original.call(this, type, ...args);
    };
  });
  const fallbackPage = await fallbackContext.newPage();
  fallbackPage.on('pageerror', (error) => errors.push(error.message));
  await fallbackPage.goto(baseURL, { waitUntil: 'networkidle' });
  assert.equal(await fallbackPage.locator('.orbital-fallback').isVisible(), true);
  assert.equal(await fallbackPage.locator('canvas').count(), 0);
  assert.equal(
    await fallbackPage.getByRole('link', { name: 'Explore my work', exact: true }).isVisible(),
    true
  );
  pass('WebGL-unavailable fallback retains content and navigation');
  await fallbackContext.close();

  assert.deepEqual(errors, []);
  pass('No uncaught browser errors');
  await writeFile(
    `${output}/evidence.json`,
    JSON.stringify(
      {
        baseURL,
        accessibilityEngine: axeSource ? 'axe-core 4.10.3' : 'unavailable',
        results,
        errors,
        verdict: 'PASS',
      },
      null,
      2
    )
  );
  console.log(`VERDICT: PASS — ${results.length} browser checks`);
} finally {
  await browser.close();
}
