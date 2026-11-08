# Gangaprasad Boddawar — Portfolio

A responsive React portfolio with a scroll-reactive Three.js ribbon, Framer Motion reveals and project parallax, grid/list project views, an experience accordion, and an email-draft contact form. Version 2 pairs a warm light canvas and lilac accents with large dark project spreads and editorial typography.

The original design is preserved at `b68ba47` on `snapshot/portfolio-v1-2026-11-08`. Version 2 lives on `feat/portfolio-v2-spatial`.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL printed by Vite, normally **http://localhost:3000/my_portfolio/**. The app preserves the existing hash routes: Home, Work, About, and Contact.

## Checks

```powershell
npm run lint
npm run build
```

The repository already tracks `dist/`. To verify a build without changing that deployment snapshot:

```powershell
node node_modules/vite/bin/vite.js build --outDir .gravitas/sessions/portfolio-v2/build
```

Repeatable Chromium audits live in `.gravitas/sessions/portfolio-v2/`. They use an existing Playwright installation; pass its absolute `index.mjs` path as the first argument. For example, after building:

```powershell
node .gravitas/sessions/portfolio-v2/production-smoke.mjs C:/path/to/playwright/index.mjs
```

This starts a temporary preview on port 4174, runs the route, interaction, responsive, axe accessibility, WebGL lifecycle, and touch checks against the production output, then closes the server. The accessibility audit downloads pinned axe-core 4.10.3; it fails explicitly if the engine cannot be loaded. Evidence JSON is saved alongside the scripts; screenshots are ignored. To check an existing dev server instead, run `audit.mjs` or `scene-audit.mjs` with the same Playwright argument (default URL: port 3000; override with `PORTFOLIO_URL`).

## Content and design

- Edit identity, projects, links, skills, experience, and education in `src/data/portfolio.js`.
- Project filter categories live in `src/data/projectGroups.js`.
- Typography, color tokens, responsive rules, and component styles live in `src/styles/globals.css`.
- The WebGL hero lives in `src/components/visuals/OrbitalScene.jsx`. Its Möbius ribbon is generated locally, with no model downloads. It loads separately and renders on demand: scroll/pointer input starts a short damped movement, then rendering stops. Pixel density is capped at 1 on phones and 1.5 on larger screens. It pauses outside the viewport and on hidden tabs, respects reduced motion, and has a visitor pause control. A CSS illustration remains when WebGL is unavailable or its context is lost.
- Motion uses native scrolling. Section reveals run once; project artwork moves only 32px across a full viewport passage. Reduced motion disables the translated effects and progress indicator.
- Original project screenshots and the portrait are retained. JavaScript and algorithm artwork is illustrative, not a claim to be a live application screenshot.
- The form opens a prefilled draft in the visitor's email app. It does not transmit or store messages. The visitor must send the draft.
- Fonts use Google Fonts with system fallbacks. No paid visual service, API key, remote 3D model, or generated video is required.

Design guidance reviewed: [Claude frontend design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), [3D web experience](https://github.com/sickn33/antigravity-awesome-skills/blob/main/skills/3d-web-experience/SKILL.md), [Three.js animation](https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-animation/SKILL.md), [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), and the workspace's Shrut UI/UX, Sites local-preview, and Gravitas skills. The implementation uses the repository's existing React/Three.js/Motion packages and requires no paid visual provider.

See [the v2 audit](.gravitas/sessions/portfolio-v2/AUDIT.md) for verification and remaining limits.

## Deployment behavior

The existing Vite configuration uses `/my_portfolio/` by default and `/` when `VERCEL` is set. Résumé, favicon, and local image paths respect that base. This redesign is local only; no deployment or remote push is performed.
