# Portfolio redesign audit

## Git and scope

- Started from clean `feature/shrut-ui-elevation` at `72fcdb2`. There were no pre-existing uncommitted changes to discard.
- Created `feat/immersive-portfolio` before editing. All redesign changes belong to this branch.
- Preserved project data, portrait, résumé, original project screenshots, dependency versions, Vite hosting behavior, and tracked `dist/` artifacts.
- No deployment, push, paid visual service, or API credential was used.

## Design review and corrections

- Replaced the dense sidebar layout with a floating navigation capsule, stronger typography, readable project previews, and a consistent dark palette.
- Kept Three.js to one hero sculpture. Reduced its scale and softened reflections after inspecting desktop and mobile screenshots.
- Retained Framer Motion for the hero, active navigation, and project-filter transitions. No scroll hijacking or interactive 3D navigation.
- Added a pause control, reduced-motion support, offscreen/tab pausing, capped pixel density, lazy loading, and a static WebGL fallback.
- Moved the mobile pause button so the fixed navigation does not cover it. Verified its bounding box and click behavior in the production build.
- Replaced the unsupported “15+” project count with the actual nine-project collection.
- Removed the inaccurate “Current” badge from the role ending in October 2026 and removed arbitrary skill percentages from the presentation.
- Only actual repository URLs are labelled as source code. A GitHub profile is not presented as an individual project's repository.
- Fixed the résumé and favicon paths for the existing `/my_portfolio/` deployment base.
- Improved a low-contrast preview label found by axe-core; increased project copy and mobile input sizes.
- The contact form validates input and opens a draft in the visitor's email app. It does not claim to have sent a message. Clipboard success and failure both provide feedback.

## Executable evidence

- `npm run lint`: exit 0. Generated audit build output is explicitly excluded; source lint rules remain unchanged.
- `node node_modules/vite/bin/vite.js build --outDir .gravitas/sessions/immersive-portfolio/build`: exit 0; final production bundle generated successfully.
- `audit.mjs`: **40 browser checks passed**. See `evidence.json`.
- Four routes checked at 1440, 768, 390, and 320 pixels: one primary heading, no horizontal overflow, no broken loaded images.
- axe-core 4.10.3 checked all four routes at desktop and mobile sizes: **zero reported violations** across eight scans using WCAG A/AA and best-practice rules.
- Browser checks cover navigation/focus, filters, the experience accordion, résumé/PDF loading, favicon, clipboard success/failure, contact validation, reduced motion, and WebGL unavailability.
- `production-smoke.mjs`: final compiled routes, lazy Three.js loading, mobile control placement, pause interaction, and absence of uncaught browser errors passed. See `production-evidence.json`.
- `git diff --check`: exit 0.
- Final desktop and mobile screenshots were inspected. Screenshots and generated builds are ignored by Git.

## Limits and remaining observations

- Automated browser coverage uses Chromium, not physical iOS/Android devices or Safari/Firefox. On-device animation smoothness and the installed email handler still need live confirmation.
- External project destinations and actual email delivery were not tested. No messages were sent.
- The build retains a size warning for the separately loaded Three.js chunk: about 919 kB minified / 253 kB gzip. The main application is about 395 kB minified / 127 kB gzip. No Lighthouse or frame-rate score is claimed.
- Existing browser-compatibility datasets emit age warnings. Dependency versions were deliberately preserved for this design task.

VERDICT: PASS
