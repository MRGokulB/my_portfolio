import { preview } from 'vite';

const server = await preview({
  build: { outDir: '.gravitas/sessions/portfolio-v2/build' },
  preview: { host: '127.0.0.1', port: 4174, strictPort: true },
});
try {
  process.env.PORTFOLIO_URL = 'http://127.0.0.1:4174/my_portfolio/';
  await import('./audit.mjs');
  await import('./scene-audit.mjs');
  console.log('VERDICT: PASS — complete browser and scene audits against the production build');
} finally {
  await new Promise((resolve) => server.httpServer.close(resolve));
}
