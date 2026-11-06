# Gangaprasad Boddawar — Portfolio

A responsive React portfolio with a restrained Three.js hero, Framer Motion transitions, a filterable project collection, an experience accordion, and an email-draft contact form.

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
node node_modules/vite/bin/vite.js build --outDir .gravitas/sessions/immersive-portfolio/build
```

A repeatable Chromium audit is in `.gravitas/sessions/immersive-portfolio/audit.mjs`. It uses an existing Playwright installation; pass its absolute `index.mjs` path as the first argument. Start Vite on port 4173, or set `PORTFOLIO_URL` to the local server URL. The audit fetches pinned axe-core 4.10.3 for accessibility checks and writes an evidence record and ignored screenshots.

## Content and design

- Edit identity, projects, links, skills, experience, and education in `src/data/portfolio.js`.
- Project filter categories live in `src/data/projectGroups.js`.
- Typography, color tokens, responsive rules, and component styles live in `src/styles/globals.css`.
- The WebGL hero lives in `src/components/visuals/OrbitalScene.jsx`. It loads separately, caps pixel density, pauses outside the viewport and on hidden tabs, and respects reduced motion. Visitors can pause it. A CSS illustration remains when WebGL is unavailable.
- Original project screenshots and the portrait are retained. JavaScript and algorithm artwork is illustrative, not a claim to be a live application screenshot.
- The form opens a prefilled draft in the visitor's email app. It does not transmit or store messages. The visitor must send the draft.
- Fonts use Google Fonts with system fallbacks. No paid visual service, API key, remote 3D model, or generated video is required.

Design guidance reviewed: [Claude frontend design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), and the workspace's Shrut UI/UX and Gravitas skills.

## Deployment behavior

The existing Vite configuration uses `/my_portfolio/` by default and `/` when `VERCEL` is set. Résumé, favicon, and local image paths respect that base. This redesign is local only; no deployment or remote push is performed.
