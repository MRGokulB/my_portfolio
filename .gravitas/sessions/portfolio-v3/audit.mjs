import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

assert.ok(process.argv[2], 'Pass the absolute path to Playwright index.mjs as the first argument.');
const { chromium } = await import(pathToFileURL(process.argv[2]).href);
const baseURL = (process.env.PORTFOLIO_URL || 'http://127.0.0.1:3000/my_portfolio/').replace(
  /\/?$/,
  '/'
);
const output = '.gravitas/sessions/portfolio-v3';
await mkdir(`${output}/screenshots`, { recursive: true });
const results = [];
const errors = [];
const accessibility = [];
const layers = [
  {
    id: 'interface',
    label: 'Interface',
    project: 'JavaScript Universe',
    href: 'https://hub-bay-six-16.vercel.app/',
  },
  { id: 'intelligence', label: 'Intelligence', project: 'Proposal Capture Engine' },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    project: 'Enclavia.ai',
    href: 'https://enclavia.ai',
  },
];
const viewports = [
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 320, height: 740 },
];
let axeSource;
try {
  const response = await fetch('https://unpkg.com/axe-core@4.10.3/axe.min.js');
  assert.equal(response.ok, true, `HTTP ${response.status}`);
  axeSource = await response.text();
  assert.ok(axeSource.includes('axe'), 'Accessibility engine response is not axe-core.');
} catch (error) {
  throw new Error(`Accessibility engine unavailable: ${error.message}`);
}

function pass(name, details = '') {
  results.push({ name, passed: true, details });
  console.log(`PASS ${name}${details ? `: ${details}` : ''}`);
}

function watch(page) {
  page.setDefaultTimeout(10000);
  page.setDefaultNavigationTimeout(20000);
  page.on('pageerror', (error) => errors.push({ url: page.url(), message: error.message }));
}

async function openRoute(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.locator('h1').waitFor({ state: 'visible' });
  await page.evaluate(
    () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
  );
}

async function checkLayer(page, layer) {
  await page.waitForFunction(
    (id) => document.querySelector('.build-explorer')?.dataset.layer === id,
    layer.id
  );
  const selected = page.locator('.layer-option[aria-pressed="true"]');
  assert.equal(await selected.count(), 1, 'Exactly one stack layer must be selected.');
  assert.equal((await selected.innerText()).trim(), layer.label);
  assert.equal(await selected.getAttribute('aria-controls'), 'layer-detail');
  assert.equal(await page.locator('.proof-project').innerText(), layer.project);
  const link = page.locator('.stack-proof a');
  const href = await link.getAttribute('href');
  if (layer.href) {
    assert.equal(href, layer.href);
    assert.equal(await link.getAttribute('target'), '_blank');
    assert.match(await link.getAttribute('rel'), /noreferrer/);
  } else {
    const email = new URL(href);
    assert.equal(email.protocol, 'mailto:');
    assert.equal(email.pathname, 'boddawargokul@gmail.com');
    assert.equal(email.searchParams.get('subject'), `Tell me about ${layer.project}`);
  }
}

async function sceneTransform(page) {
  return page.locator('.stack-machine').evaluate((element) => element.style.transform);
}

async function waitForStableScene(page) {
  await page.waitForFunction(() => {
    const machine = document.querySelector('.stack-machine');
    if (!machine) return false;
    const transform = machine.style.transform;
    if (window.__lastStackTransform === transform)
      window.__stableStackFrames = (window.__stableStackFrames || 0) + 1;
    else window.__stableStackFrames = 0;
    window.__lastStackTransform = transform;
    return window.__stableStackFrames >= 4;
  });
}

async function dragStack(page, dx, dy) {
  await page.locator('.stack-stage').scrollIntoViewIfNeeded();
  const box = await page.locator('.stack-stage').boundingBox();
  const x = box.x + box.width * 0.5;
  const y = box.y + box.height * 0.5;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + dx, y + dy, { steps: 12 });
  await page.mouse.up();
  await waitForStableScene(page);
}

async function loadAllContent(page) {
  await page.evaluate(async () => {
    await Promise.race([
      document.fonts.ready,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Fonts did not settle within 15 seconds.')), 15000)
      ),
    ]);
    for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight * 0.8) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
    window.scrollTo(0, 0);
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})));
  });
  await page.waitForTimeout(750);
}

const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ viewport: viewports[0] });
  const page = await context.newPage();
  watch(page);
  await openRoute(page, baseURL);
  await page.locator('.build-explorer').waitFor();
  assert.equal(await page.locator('.layer-option').count(), 3);
  await checkLayer(page, layers[0]);
  pass('Home exposes three accessible layer controls and real default project');

  for (const layer of layers) {
    await page
      .locator('.layer-options')
      .getByRole('button', { name: layer.label, exact: true })
      .click();
    await checkLayer(page, layer);
    pass(`Layer selection: ${layer.label}`, layer.project);
  }
  await page.getByRole('button', { name: 'Bring it together', exact: true }).click();
  await page.waitForFunction(
    () => document.querySelector('.build-explorer').dataset.separated === 'false'
  );
  assert.equal(
    await page
      .getByRole('button', { name: 'Pull it apart', exact: true })
      .getAttribute('aria-pressed'),
    'true'
  );
  await checkLayer(page, layers[2]);
  await page.getByRole('button', { name: 'Pull it apart', exact: true }).click();
  await page.waitForFunction(
    () => document.querySelector('.build-explorer').dataset.separated === 'true'
  );
  await checkLayer(page, layers[2]);
  pass('Collapse and reopen preserve the selected project and announce state');

  const intelligence = page
    .locator('.layer-options')
    .getByRole('button', { name: 'Intelligence', exact: true });
  await intelligence.focus();
  await page.keyboard.press('Space');
  await checkLayer(page, layers[1]);
  await page.keyboard.press('Tab');
  assert.equal(
    await page.evaluate(() => document.activeElement?.textContent.trim()),
    'Infrastructure'
  );
  await page.keyboard.press('Enter');
  await checkLayer(page, layers[2]);
  pass('Layer selection works with Tab, Space, and Enter');

  await page.getByRole('button', { name: 'Reset stack view' }).click();
  await checkLayer(page, layers[0]);
  await waitForStableScene(page);
  const front = await sceneTransform(page);
  await page
    .locator('.layer-options')
    .getByRole('button', { name: 'Intelligence', exact: true })
    .click();
  await checkLayer(page, layers[1]);
  await dragStack(page, 650, -500);
  const rotated = await sceneTransform(page);
  assert.notEqual(rotated, front, 'Dragging must actually change the scene orientation.');
  const pitch = Number(rotated.match(/rotateX\(([-\d.]+)deg\)/)?.[1]);
  const yaw = Number(rotated.match(/rotateZ\(([-\d.]+)deg\)/)?.[1] || 0);
  assert.ok(
    Number.isFinite(pitch) && pitch >= 35 && pitch <= 68,
    `Pitch outside safe bounds: ${rotated}`
  );
  assert.ok(Number.isFinite(yaw) && yaw >= -52 && yaw <= 0, `Yaw outside safe bounds: ${rotated}`);
  await checkLayer(page, layers[1]);
  assert.equal(await page.locator('.stack-stage.is-dragging').count(), 0);
  pass('Mouse drag changes bounded orientation without selecting another layer');
  await page.getByRole('button', { name: 'Bring it together', exact: true }).click();
  await page.getByRole('button', { name: 'Reset stack view' }).click();
  await checkLayer(page, layers[0]);
  await page.waitForFunction(
    () => document.querySelector('.build-explorer').dataset.separated === 'true'
  );
  await waitForStableScene(page);
  assert.equal(await sceneTransform(page), front);
  pass('Reset restores the initial angle, default project, and expanded stack');

  for (const [index, layer] of layers.entries()) {
    await page.locator('.stack-stage').scrollIntoViewIfNeeded();
    // Find an exposed point on the transformed face instead of force-clicking
    // through another layer. This checks actual browser hit testing.
    const point = await page.evaluate((layerIndex) => {
      const face = document.querySelector(`[data-layer-index="${layerIndex}"] .module-face`);
      const rect = face.getBoundingClientRect();
      for (let row = 1; row < 20; row += 1) {
        for (let column = 1; column < 20; column += 1) {
          const x = rect.left + (rect.width * column) / 20;
          const y = rect.top + (rect.height * row) / 20;
          if (document.elementFromPoint(x, y)?.closest('.module-face') === face) return { x, y };
        }
      }
      return null;
    }, index);
    assert.ok(point, `The ${layer.label} face has no exposed clickable surface.`);
    await page.mouse.click(point.x, point.y);
    await checkLayer(page, layer);
    assert.equal(
      await page.evaluate(() => Boolean(document.activeElement?.closest('[aria-hidden="true"]'))),
      false,
      'Clicking a decorative face must not focus content hidden from assistive technology.'
    );
    await page.waitForTimeout(650);
  }
  pass('Visible 3D faces select each real project without focusing hidden content');

  await page.getByRole('button', { name: 'A few things I’ve built', exact: true }).click();
  await page.waitForFunction(() => window.scrollY > 250);
  assert.equal(new URL(page.url()).hash, '');
  pass('Home scroll action preserves the hash-router route');
  await page.locator('.experience-row summary').first().click();
  await page.waitForFunction(() => document.querySelector('.experience-row').open);
  assert.equal(await page.locator('.job-content').first().isVisible(), true);
  await page.locator('.experience-row summary').first().press('Enter');
  assert.equal(await page.locator('.experience-row').first().getAttribute('open'), null);
  pass('Experience details work with pointer and keyboard');

  await page.getByRole('navigation').getByRole('link', { name: 'Work', exact: true }).click();
  await page.waitForURL(/#\/works$/);
  await page.waitForFunction(() => document.activeElement?.id === 'main-content');
  assert.equal(await page.locator('.project-card').count(), 9);
  pass('Route navigation resets focus and opens all nine projects');
  for (const category of ['AI systems', 'Full stack', 'Interactive web']) {
    const button = page.getByRole('button', { name: category, exact: true });
    await button.click();
    await page.waitForFunction(() => document.querySelectorAll('.project-card').length === 3);
    assert.equal(await button.getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.project-count').innerText(), '3 projects');
    pass(`Project filter: ${category}`, '3 projects');
  }
  await page.getByRole('button', { name: 'All work', exact: true }).click();
  await page.waitForFunction(() => document.querySelectorAll('.project-card').length === 9);
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
  pass('All work restores nine projects; grid/list switching preserves filters');

  const resume = await context.request.get(`${baseURL}resume.pdf`);
  assert.equal(resume.status(), 200);
  assert.equal((await resume.body()).subarray(0, 4).toString(), '%PDF');
  const favicon = await context.request.get(`${baseURL}favicon.svg`);
  assert.equal(favicon.status(), 200);
  assert.match(await favicon.text(), /<svg/);
  pass('Résumé PDF and SVG favicon resolve under the deployment base');

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    for (const route of ['', '#/works', '#/about', '#/contact']) {
      await openRoute(page, `${baseURL}${route}`);
      await loadAllContent(page);
      const label = route.replace('#/', '') || 'home';
      assert.equal(await page.locator('h1').count(), 1, `${label} must have one h1.`);
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
        false,
        `${label} overflows at ${viewport.width}px.`
      );
      const brokenImages = await page
        .locator('img')
        .evaluateAll((images) =>
          images
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.src)
        );
      assert.deepEqual(brokenImages, [], `Image failures on ${label} at ${viewport.width}px.`);
      if (viewport.width <= 390 && (label === 'home' || label === 'works')) {
        const cropped = await page.locator('.project-image').evaluateAll((images) =>
          images
            .filter((image) => {
              const box = image.getBoundingClientRect();
              return (
                Math.abs(box.width / box.height - image.naturalWidth / image.naturalHeight) > 0.02
              );
            })
            .map((image) => image.src)
        );
        assert.deepEqual(
          cropped,
          [],
          `Mobile screenshots lose their natural aspect ratio on ${label}.`
        );
        pass(`Uncropped project screenshots: ${label} ${viewport.width}px`);
      }
      if (!route) {
        assert.equal(await page.locator('.stack-module').count(), 3);
        for (const layer of layers)
          assert.equal(
            await page
              .locator('.layer-options')
              .getByRole('button', { name: layer.label, exact: true })
              .isVisible(),
            true
          );
        if (viewport.width === 1280) {
          for (const selector of ['h1', '.hero-intro > p', '.hero-actions .button-primary']) {
            const rect = await page.locator(selector).boundingBox();
            assert.ok(
              rect.y >= 0 && rect.y + rect.height <= viewport.height,
              `${selector} does not fit the 1280×800 first screen.`
            );
          }
          pass('Hero heading, description, and primary action fit 1280×800');
        }
      }
      if (viewport.width === 768) {
        await page.screenshot({
          path: `${output}/screenshots/${label}-${viewport.width}-viewport.png`,
        });
      }
      if (viewport.width === 1440 || viewport.width === 390) {
        await page.screenshot({
          path: `${output}/screenshots/${label}-${viewport.width}-viewport.png`,
        });
        await page.screenshot({
          path: `${output}/screenshots/${label}-${viewport.width}.png`,
          fullPage: true,
        });
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
          elements: nodes.map(({ target, failureSummary }) => ({
            target,
            summary: failureSummary,
          })),
        }));
        accessibility.push({
          route: label,
          width: viewport.width,
          passedRules: audit.passes.length,
          violations,
        });
        if (violations.length) console.log(JSON.stringify(accessibility.at(-1), null, 2));
        assert.deepEqual(violations, [], `Accessibility violations: ${label} ${viewport.width}px.`);
        pass(`Accessibility ${label} ${viewport.width}px`, `${audit.passes.length} rules passed`);
      }
      pass(`Responsive ${label} ${viewport.width}px`, 'one h1; no overflow; all images loaded');
    }
  }

  await page.setViewportSize(viewports[0]);
  await openRoute(page, `${baseURL}#/contact`);
  assert.equal(await page.locator('form').evaluate((form) => form.checkValidity()), false);
  await page.getByLabel('Your name', { exact: true }).fill('Portfolio reviewer');
  await page.getByLabel('Email address', { exact: true }).fill('not-an-email');
  await page
    .getByLabel('What do you have in mind?', { exact: true })
    .fill('Reviewing the portfolio contact experience.');
  assert.equal(await page.locator('form').evaluate((form) => form.checkValidity()), false);
  await page.getByLabel('Email address', { exact: true }).fill('reviewer@example.com');
  assert.equal(await page.locator('form').evaluate((form) => form.checkValidity()), true);
  assert.match(await page.locator('.form-note').innerText(), /draft in your email app/);
  pass('Contact validates required fields and email format, and explains draft behavior');
  await page
    .getByRole('combobox', { name: 'What brings you here?', exact: true })
    .selectOption('A role or collaboration');
  const [draftRequest] = await Promise.all([
    page.waitForRequest((request) => request.url().startsWith('mailto:'), { timeout: 15000 }),
    page.getByRole('button', { name: 'Compose email', exact: true }).click({ noWaitAfter: true }),
  ]);
  const draft = new URL(draftRequest.url());
  assert.equal(draft.pathname, 'boddawargokul@gmail.com');
  assert.equal(draft.searchParams.get('subject'), 'Portfolio enquiry: A role or collaboration');
  assert.equal(
    draft.searchParams.get('body'),
    'Hi Gangaprasad,\n\nReviewing the portfolio contact experience.\n\nFrom: Portfolio reviewer\nReply to: reviewer@example.com'
  );
  pass('Compose email requests a correctly addressed and encoded draft without sending');
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.getByRole('button', { name: 'Copy email address', exact: true }).click();
  await page.locator('.copy-status').filter({ hasText: 'Email address copied.' }).waitFor();
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
  await page.getByRole('button', { name: 'Copy email address', exact: true }).click();
  await page.locator('.copy-status').filter({ hasText: 'Copy unavailable' }).waitFor();
  assert.match(
    await page.locator('.copy-status').innerText(),
    /Select the email address, or use the email link/
  );
  pass('Clipboard rejection offers an honest recovery path');

  const reducedContext = await browser.newContext({
    reducedMotion: 'reduce',
    viewport: { width: 390, height: 844 },
  });
  const reducedPage = await reducedContext.newPage();
  watch(reducedPage);
  await openRoute(reducedPage, baseURL);
  await reducedPage.waitForFunction(
    () => document.querySelector('.build-explorer')?.dataset.reducedMotion === 'true'
  );
  await reducedPage
    .locator('.layer-options')
    .getByRole('button', { name: 'Intelligence', exact: true })
    .click();
  await checkLayer(reducedPage, layers[1]);
  const transforms = await reducedPage.evaluate(async () => {
    const frame = () => new Promise((resolve) => requestAnimationFrame(resolve));
    await frame();
    await frame();
    const samples = [];
    for (let index = 0; index < 10; index += 1) {
      samples.push(
        [...document.querySelectorAll('.stack-module')]
          .map((element) => getComputedStyle(element).transform)
          .join('|')
      );
      await frame();
    }
    return samples;
  });
  assert.equal(
    new Set(transforms).size,
    1,
    'Reduced-motion selection must settle immediately, without animated travel.'
  );
  assert.equal(await reducedPage.locator('.reading-progress').count(), 0);
  const reducedAngle = await sceneTransform(reducedPage);
  await dragStack(reducedPage, 120, -80);
  assert.equal(await sceneTransform(reducedPage), reducedAngle);
  pass('Reduced motion preserves selection without travel, drag rotation, or progress animation');
  await reducedContext.close();

  const noWebglContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await noWebglContext.addInitScript(() => {
    window.__webglRequests = 0;
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') {
        window.__webglRequests += 1;
        return null;
      }
      return original.call(this, type, ...args);
    };
  });
  const noWebglPage = await noWebglContext.newPage();
  watch(noWebglPage);
  await openRoute(noWebglPage, baseURL);
  await noWebglPage
    .locator('.layer-options')
    .getByRole('button', { name: 'Infrastructure', exact: true })
    .click();
  await checkLayer(noWebglPage, layers[2]);
  assert.equal(await noWebglPage.locator('canvas').count(), 0);
  assert.equal(await noWebglPage.evaluate(() => window.__webglRequests), 0);
  pass('Stack interaction works without requesting a WebGL context');
  await noWebglContext.close();

  const touchContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });
  const touchPage = await touchContext.newPage();
  watch(touchPage);
  await openRoute(touchPage, baseURL);
  await touchPage
    .locator('.stack-stage')
    .evaluate((element) => element.scrollIntoView({ block: 'center', behavior: 'instant' }));
  await touchPage.waitForTimeout(500);
  const box = await touchPage.locator('.stack-stage').boundingBox();
  const startY = Math.min(box.y + box.height * 0.75, 744);
  const startX = box.x + box.width * 0.5;
  const beforeScroll = await touchPage.evaluate(() => window.scrollY);
  const beforeLayer = await touchPage.locator('.build-explorer').getAttribute('data-layer');
  const cdp = await touchContext.newCDPSession(touchPage);
  await cdp.send('Input.dispatchTouchEvent', {
    type: 'touchStart',
    touchPoints: [{ x: startX, y: startY }],
  });
  for (let step = 1; step <= 6; step += 1) {
    await cdp.send('Input.dispatchTouchEvent', {
      type: 'touchMove',
      touchPoints: [{ x: startX, y: startY - step * 35 }],
    });
    await touchPage.waitForTimeout(35);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await touchPage.waitForFunction((initial) => window.scrollY > initial + 80, beforeScroll);
  assert.equal(await touchPage.locator('.build-explorer').getAttribute('data-layer'), beforeLayer);
  assert.equal(await touchPage.locator('.stack-stage.is-dragging').count(), 0);
  await touchPage
    .locator('.layer-options')
    .getByRole('button', { name: 'Infrastructure', exact: true })
    .tap();
  await checkLayer(touchPage, layers[2]);
  pass('Touch gesture scrolls across the stack without selection; tapping controls still works');
  await openRoute(touchPage, `${baseURL}#/works`);
  await touchPage.getByRole('button', { name: 'List view', exact: true }).tap();
  await touchPage.locator('.project-list').waitFor();
  assert.equal(
    await touchPage.evaluate(() => document.documentElement.scrollWidth > innerWidth),
    false
  );
  assert.equal(await touchPage.locator('.project-list .project-card').count(), 9);
  pass('Mobile list view retains all projects without horizontal overflow');
  await touchContext.close();

  const noScriptContext = await browser.newContext({ javaScriptEnabled: false });
  const noScriptPage = await noScriptContext.newPage();
  await noScriptPage.goto(baseURL, { waitUntil: 'domcontentloaded' });
  assert.equal(
    await noScriptPage.getByRole('heading', { level: 1 }).innerText(),
    'Gangaprasad Boddawar'
  );
  assert.equal(
    await noScriptPage.locator('a[href="mailto:boddawargokul@gmail.com"]').isVisible(),
    true
  );
  assert.equal(await noScriptPage.locator('a[href$="resume.pdf"]').isVisible(), true);
  pass('JavaScript-disabled fallback exposes identity, contact, and résumé');
  await noScriptContext.close();

  assert.deepEqual(errors, []);
  pass('No uncaught browser errors across all contexts');
  await writeFile(
    `${output}/evidence.json`,
    JSON.stringify(
      {
        baseURL,
        testedAt: new Date().toISOString(),
        accessibilityEngine: 'axe-core 4.10.3',
        viewports,
        accessibility,
        results,
        errors,
        verdict: 'PASS',
      },
      null,
      2
    )
  );
  console.log(`VERDICT: PASS — ${results.length} browser checks`);
} catch (error) {
  await writeFile(
    `${output}/evidence.json`,
    JSON.stringify(
      {
        baseURL,
        testedAt: new Date().toISOString(),
        accessibilityEngine: 'axe-core 4.10.3',
        viewports,
        accessibility,
        results,
        errors,
        verdict: 'FAIL',
        failure: error.message,
      },
      null,
      2
    )
  );
  console.error(`VERDICT: FAIL — ${error.message}`);
  throw error;
} finally {
  await browser.close();
}
