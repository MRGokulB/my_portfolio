# Portfolio v2 — design and engineering audit

Date: 2026-11-08. Scope: the local React portfolio in `D:/FreeLance/Portfolio`.

## Preservation

The starting working tree was clean. The existing design was already committed at `b68ba4770609e45b65e2903de50960f40fdf0b13`. A new `snapshot/portfolio-v1-2026-11-08` branch preserves that exact commit. Implementation is isolated on `feat/portfolio-v2-spatial`. No original work was discarded, no remote operation was performed, and the tracked `dist/` deployment snapshot was not overwritten.

## Page-by-page review

| Page | Version 2 design | Review coverage |
| --- | --- | --- |
| Home | Oversized mixed-type headline, locally generated lilac Möbius ribbon, short introduction, three alternating project spreads on a dark canvas, arched portrait, experience accordion, large contact invitation | Desktop/mobile composition, scroll action, motion control, experience mouse/keyboard interaction, hero fallback |
| Work | Editorial heading, category filters, live project count, grid/list toggle, nine projects with existing screenshots and illustrative artwork | All categories return three projects; All work returns nine; changing layout preserves the active filter; mobile list fits |
| About | Portrait and biography, capability columns, education and certifications, contact invitation | Original information retained; desktop columns collapse on mobile; résumé remains reachable |
| Contact | Direct email and copy action beside a dark, labeled enquiry form | Required fields and email validity, clipboard success/failure, clear email-draft explanation, responsive form |

Desktop and phone screenshots were manually inspected for hierarchy, spacing, image treatment, type wrapping, and contrast. Baseline screenshots of the original four pages were captured before implementation. Screenshots are local, ignored artifacts in `screenshots/`.

## Design and motion decisions

- Warm light canvas, deep green-black project section, restrained lilac accent. Space Grotesk and Manrope provide structure; DM Serif Display adds contrast to short headline phrases.
- One meaningful 3D object. The ribbon is procedural geometry with local studio lights, not an external model, video, or paid service.
- Three.js responds to scroll and pointer position, damps toward its target, then stops drawing. Native browser scrolling remains intact. Mobile uses one device pixel per CSS pixel; desktop caps at 1.5.
- Framer Motion provides short route entrances, one-time section reveals, a reading-progress indicator, and 32px of project artwork travel. Reduced motion removes these translated effects and pauses the sculpture.
- The 3D scene stops outside the viewport or on hidden tabs. Context loss unmounts it and restores the CSS illustration. Rendering failures and absent WebGL also retain the page content and navigation.
- Real project URLs, résumé, original screenshots, biography, and data remain in use. Illustrative project graphics do not imply screenshots of running products. The contact form opens a draft in the visitor’s email client; it does not send or store messages.

## Issues found and resolved

1. A retained project screenshot label had insufficient contrast on its dark background. Its foreground was corrected; the subsequent axe audit passed.
2. The first ribbon lighting pass was too dark and its viewing angle hid the twist. Lighting, material, and orientation were refined after screenshot inspection.
3. R3F’s default scroll measurement caused an extra canvas redraw while the scene was paused. Disabling scroll-triggered resize measurements removed that work; actual WebGL draw-call instrumentation verifies it.
4. Losing a WebGL context previously left a dormant canvas mounted. The error path now releases the scene and restores the CSS fallback.

## Executable verification

Run from the project root:

```powershell
node node_modules/eslint/bin/eslint.js .
node node_modules/vite/bin/vite.js build --outDir .gravitas/sessions/portfolio-v2/build
node .gravitas/sessions/portfolio-v2/production-smoke.mjs C:/path/to/playwright/index.mjs
```

The production harness starts its own temporary server on port 4174 and closes it in `finally`. It runs both suites against the actual production bundle. Existing port 3000 development service is retained for preview.

- ESLint: passed.
- Production build: passed; main JS about 410 kB / 132 kB gzip, separately loaded 3D JS about 922 kB / 254 kB gzip, CSS about 36 kB / 9 kB gzip.
- Route/interaction/accessibility suite: 45 checks passed against the production build, with zero axe violations across the eight page/viewport audits and zero uncaught browser errors. See `evidence.json`.
- Scene/touch suite: 10 checks passed against the production build, with zero uncaught browser errors. The idle measurement recorded zero additional WebGL draw calls over 750 ms after initialization. See `scene-evidence.json`.
- Responsive widths: 1440, 1024, 768, 390, and 320 pixels across all four routes. Tests check one h1, no horizontal overflow, and no broken loaded images.
- Accessibility: axe-core 4.10.3, WCAG 2 A/AA, 2.1 A/AA, and best-practice rules, on all four pages at 1440px and 390px. The audit fails if axe cannot load.
- Graphics: real WebGL draws during initialization/input; zero additional draws in the measured idle window; pause and offscreen suspension; context-loss fallback; reduced-motion preference; WebGL-unavailable fallback.
- Mobile: touch scroll across the canvas, 3× device capped to canvas DPR 1, navigation/control/footer placement, and list layout.
- Git whitespace check and preservation checks performed before the local commit.

## Limits

The build retains Vite’s large-chunk warning for the lazily loaded Three.js bundle, plus existing stale browser-data warnings. Those are reported rather than hidden. These tests use Chromium with emulated viewports and touch; physical iOS/Android hardware and Safari/Firefox were not tested. Draw-call checks establish idle behavior, not a hardware FPS guarantee. External project uptime, third-party font availability, and launching a locally configured email application require live-device verification. Automated accessibility checks do not replace a screen-reader review.

## Guidance reviewed

- Workspace Gravitas reliability runtime, Shrut UI/UX, and Sites local-preview guidance.
- [Claude frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md).
- [3D web experience skill](https://github.com/sickn33/antigravity-awesome-skills/blob/main/skills/3d-web-experience/SKILL.md).
- [Three.js animation skill](https://github.com/CloudAI-X/threejs-skills/blob/main/skills/threejs-animation/SKILL.md). Only APIs compatible with this repository’s Three.js version were used.
- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), reviewed during the preceding portfolio work.

No skills were installed globally and no dependencies were added for v2.
