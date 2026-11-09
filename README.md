# Gangaprasad Boddawar — Build Stack portfolio

Version 3 is a responsive, four-page React portfolio built around an interactive CSS 3D stack. Interface, intelligence, and infrastructure layers connect to JavaScript Universe, the Proposal Capture Engine, and Enclavia. Framer Motion animates selection and restrained page transitions; real project screenshots and career information carry the rest of the site.

Version 2 is preserved at `fbf2b30` on `snapshot/portfolio-v2-2026-11-08`. This version lives on `feat/portfolio-v3-interactive`. Version 1 remains on `snapshot/portfolio-v1-2026-11-08`.

## Run locally

```powershell
npm install
npm run dev
```

Open the URL printed by Vite, normally **http://localhost:3000/my_portfolio/**. Home, Work, About, and Contact retain their existing hash routes.

## Checks

```powershell
npm run lint
node node_modules/vite/bin/vite.js build --outDir .gravitas/sessions/portfolio-v3/build
```

The custom output directory avoids overwriting the repository's tracked `dist/` deployment snapshot. `npm run build` still produces the normal deployment build when intended.

The Chromium audit accepts an installed Playwright module path:

```powershell
node .gravitas/sessions/portfolio-v3/production-smoke.mjs C:/path/to/playwright/index.mjs
```

It starts a temporary production preview on port 4174, checks routes, keyboard and pointer interactions, project filters, grid/list layouts, contact behavior, responsive widths, reduced motion, touch scrolling, and axe accessibility, then closes the preview. It downloads pinned axe-core 4.10.3 and fails explicitly if that engine cannot load. Evidence JSON is saved beside the scripts; screenshots and builds are ignored.

To check a running development server, use `audit.mjs` with the same Playwright argument. It defaults to `http://127.0.0.1:3000/my_portfolio/`; override with `PORTFOLIO_URL`.

## Editing the portfolio

- `src/data/portfolio.js`: identity, projects, links, career history, and education.
- `src/data/projectGroups.js`: project filter categories.
- `src/data/buildLayers.js`: the hero's three layers and their project mappings.
- `src/components/visuals/BuildStack.jsx`: rotation, layer selection, collapse, and reset.
- `src/styles/tokens.css`: color, typography, spacing, and motion roles.
- `src/styles/globals.css`: layouts, responsive rules, and component styling.

The hero uses actual CSS perspective, extruded faces, depth translation, and bounded pointer rotation. Its parallel native buttons provide keyboard access. Touch keeps vertical scrolling available, and reduced motion removes spring travel and drag rotation. No autonomous animation loop or WebGL context is required. The earlier Three.js implementation and dependencies remain available, but v3 does not import them into its production bundle.

Scrolling remains native. Section movement runs once and stays visible throughout; reduced motion removes translated effects. All essential routes remain available without interacting with the 3D object. A basic name, contact, and résumé fallback remains when JavaScript is disabled.

Seven projects have real website captures. The two projects without a public URL use explicitly labeled system overviews. Screenshots show the available public sites at capture time, not a claim that every current detail was authored by this portfolio's owner.

The contact form validates its fields and opens a prefilled draft in the visitor's email app. The visitor must send the draft; the site does not transmit or store messages. Fonts load from Fontshare and Google Fonts with system fallbacks. No paid visual provider, API key, model download, or generated video is needed.

## Design sources and local skill

The custom direction applies selected guidance from [Impeccable](https://impeccable.style/), [Taste Skill](https://www.tasteskill.dev/), [Hallmark](https://usehallmark.com/), [Hue](https://hueapp.io/), and [AI Design Skills](https://github.com/elayadesign/ai-design-skills). [ThreeUI's recent gallery](https://threeui.com/browse?sort=recent) informed the balance between a spatial focal point and quiet navigation. No ThreeUI package, paid source, or template was copied into this implementation.

The workspace skill at `D:/FreeLance/.agents/skills/shrut-uiux/SKILL.md` was updated to version 2.0.0. It now chooses standard, clean, professional, minimal, or immersive treatment from the actual brief and preserves an existing design system for scoped edits. Before/after copies are retained with the v3 design references; the active skill is outside this repository.

See [the design specification](.gravitas/sessions/portfolio-v3/DESIGN.md), [source provenance](.gravitas/sessions/portfolio-v3/references/sources.json), and [the audit](.gravitas/sessions/portfolio-v3/AUDIT.md) for decisions, verification, and limitations.

## Deployment

The existing Vite configuration uses `/my_portfolio/` by default and `/` when `VERCEL` is set. Local assets and résumé links respect that base. This redesign is local only; no deployment or remote push was performed.
