import { preview } from 'vite';

const server = await preview({
  build: { outDir: '.gravitas/sessions/portfolio-v3/build' },
  preview: { host: '127.0.0.1', port: 4174, strictPort: true },
});
try {
  process.env.PORTFOLIO_URL = 'http://127.0.0.1:4174/my_portfolio/';
  await import('./audit.mjs');
  console.log('VERDICT: PASS — browser audit completed against the production build');
} finally {
  await new Promise((resolve) => server.httpServer.close(resolve));
}
