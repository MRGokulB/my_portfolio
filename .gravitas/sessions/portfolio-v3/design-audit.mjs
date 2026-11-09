import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { preview } from 'vite';

assert.ok(process.argv[2], 'Pass the absolute path to Hallmark scripts/sloplint.mjs.');
const files = [
  'src/styles/globals.css',
  'src/styles/tokens.css',
  'src/styles/base.css',
  'src/components/visuals/BuildStack.jsx',
  'src/components/Layout.jsx',
  'src/components/ProjectCard.jsx',
  'src/components/PageHeading.jsx',
  'src/components/ContactBanner.jsx',
  ...[
    'Hero',
    'Projects',
    'Introduction',
    'AboutPreview',
    'Experience',
    'About',
    'Skills',
    'Education',
    'WorksDirectory',
    'Contact',
  ].map((name) => `src/components/sections/${name}.jsx`),
];
const server = await preview({
  build: { outDir: '.gravitas/sessions/portfolio-v3/build' },
  preview: { host: '127.0.0.1', port: 4175, strictPort: true },
});
try {
  const args = [
    process.argv[2],
    ...files,
    '--genre',
    'playful',
    '--render',
    ...['', '#/works', '#/about', '#/contact'].flatMap((route) => [
      '--url',
      `http://127.0.0.1:4175/my_portfolio/${route}`,
    ]),
  ];
  let result;
  try {
    result = await promisify(execFile)(process.execPath, args, {
      timeout: 120000,
      maxBuffer: 2000000,
    });
  } catch (error) {
    result = error;
    process.exitCode = 1;
  }
  const output = `${result.stdout || ''}${result.stderr || ''}`;
  await writeFile('.gravitas/sessions/portfolio-v3/hallmark-all-routes.log', output);
  console.log(output);
  console.log(
    process.exitCode
      ? 'VERDICT: FAIL — inspect Hallmark findings'
      : 'VERDICT: PASS — Hallmark render sweep'
  );
} finally {
  await new Promise((resolve) => server.httpServer.close(resolve));
}
