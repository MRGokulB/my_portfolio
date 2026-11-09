# Portfolio v3 audit

Completed 9 November 2026 on `feat/portfolio-v3-interactive`. Baseline: `fbf2b30`, preserved on `snapshot/portfolio-v2-2026-11-08`. No remote push or deployment.

## Result

**VERDICT: PASS** — lint, production build, 64 browser checks, eight axe scans, Hallmark render sweep, and local skill validation completed. This is a Chromium and source audit, not a claim of universal device compatibility or perfect accessibility.

The custom Build Stack replaces the v2 ribbon with selectable, extruded CSS 3D layers representing interface, intelligence, and infrastructure work. Real project names, screenshots, tools, and destinations connect the object to Gangaprasad's portfolio. Framer Motion provides controlled depth transitions and bounded pointer rotation; native navigation remains independently usable. This version does not load Three.js or require WebGL, a paid provider, or additional dependencies.

## Executable evidence

| Check | Observed result |
| --- | --- |
| `npm run lint` | Exit 0 |
| Vite production build into `.gravitas/sessions/portfolio-v3/build` | Exit 0; 2,086 modules transformed |
| Production JavaScript | 413.15 kB, 133.22 kB gzip; no separate Three.js scene chunk |
| Production CSS | 43.76 kB, 9.07 kB gzip |
| `production-smoke.mjs` | 64 passing browser checks; preview closed after completion |
| Responsive checks | Home, Work, About, Contact at 1440, 1280, 1024, 768, 390 and 320px; no horizontal overflow, missing images, or duplicate h1 |
| axe-core 4.10.3 | Eight scans: four routes at 1440 and 390px; zero detected violations against the selected WCAG A/AA and best-practice rules |
| Hallmark `design-audit.mjs` | 18 source files and four production routes; 20 screenshots; 0 FAIL, 0 open REFLEX, 7 WARN reviewed, 11 instances of 3 documented waivers, 3 NOTE reviewed |
| Local `shrut-uiux` validator | `Skill is valid!`, exit 0 |

The complete browser assertions and results are in [audit.mjs](audit.mjs) and [evidence.json](evidence.json). The preview wrappers start and close their own servers, avoiding dependency on a development server surviving a chat interruption. Build and screenshot output is local and ignored; the repository's tracked `dist/` was preserved.

### Interaction coverage

- Every layer's native button and exposed 3D face select the correct real project and destination.
- Tab, Space, and Enter select layers; clicking a decorative face cannot focus content hidden from assistive technology.
- Dragging changes the actual 3D transform within its bounds without accidentally selecting another layer. Reset restores angle, expansion, and default project.
- Collapse/reopen preserves selection and reports its state.
- Phone gestures scroll across the object; native touch controls still select layers.
- Reduced motion removes animated travel, drag rotation, and the reading-progress animation while retaining useful selection.
- The explorer works without requesting a WebGL context. With JavaScript disabled, basic identity, email and résumé access remain.
- Route changes move focus to main content. The experience accordion, three project filters, grid/list views, résumé PDF, and favicon work.
- Contact validation rejects missing/invalid input. Compose requests a correctly addressed and encoded email draft; nothing is sent by the audit. Clipboard success and failure recovery work.
- Mobile screenshots retain their natural aspect ratios. No uncaught browser errors were recorded across the tested contexts.

## Visual review and fixes

An independent hero review returned four findings. All were resolved and inspected in subsequent captures:

1. **Mobile hero started too low:** shortened the introduction and reduced gaps and stage height while preserving usable controls. The entire stack is visible within the phone composition.
2. **Generic layer identity:** added actual project names and screenshot thumbnails to the faces, retaining the concise UI, AI and Cloud legends.
3. **Inconsistent desktop width:** resolved the Tailwind container collision; the page caps at 1440px and gains gutters on larger screens.
4. **Bottom layer crossed the divider:** removed the unnecessary vertical offset.

An independent finish review returned three findings. All were resolved and recaptured:

1. **Mobile image cropping:** use natural image height on phones, preserving interface edges and proposal columns. Browser assertions cover 390 and 320px.
2. **Too many generic project panels:** captured the live Herbs Magic and GCON Nanded sites, both HTTP 200, replacing their illustrative panels. Seven projects now have real captures. The two without public destinations retain visibly labeled system overviews.
3. **Generic closing copy:** replaced the closing slogan with a product/team invitation and a specific full stack and AI availability statement.

Additional fixes from the audit: brighter focus outlines in the dark contact band; no hidden focus target on duplicate visual faces; balanced two-column phone filters; a spanning final Work row instead of an empty half-row; one-column form fields at tablet widths; inline diagram arrows; a quieter secondary button.

### Hallmark findings reviewed

- **44c and 79:** the renderer measures the heading wrapper as the hero. Home's actual stack and project detail fill the area below it; inner-page content follows each short heading. Production CSS minification also removes the custom stamp used by its posture detector. These are documented layout-heuristic exceptions, verified against the captures, not hidden blank regions.
- **59:** the detected 48px space is the closing footer seam. The custom system uses larger internal section spacing and distinct surface changes; forcing the same 120px seam everywhere would weaken its rhythm.
- **77, four warnings:** the scanner treats the route's animation wrapper as one section and suppresses its nested sections. The full-page captures and component tree contain the intended portfolio sections.
- **28a, two warnings:** these are shared project and portrait components, principally below the Home fold. Lazy loading is retained; the hero's own images load normally. Browser checks verified the images load, but no Core Web Vitals claim is made.
- **F4:** the second filled recipe is the selected project filter, a state control with `aria-pressed`, rather than a competing primary action. Secondary action buttons were changed to an outline treatment.
- **58 notes:** Work and About contain useful comparison/career text. The Home DOM count includes detailed experience content; the default accordion is collapsed. These were reviewed against full-page captures; factual content was retained.

## Sources and content integrity

[DESIGN.md](DESIGN.md) records the original direction and adaptations of Impeccable, Taste Skill, Hue, Hallmark and AI Design Skills. [Source provenance](references/sources.json) records primary URLs, observed versions/revisions, and which tools were actually used. ThreeUI informed the single-focal-object approach; no paid component code or template was copied. The supplied keycap sphere was inspiration for tactility, not reproduced as the portfolio concept.

The existing portrait, Enclavia image, and proposal image were retained. JavaScript Universe, DSA Universe, Mane Mess, Herbs Magic, and GCON Nanded were captured from their public project URLs. [Capture provenance](project-captures.json) records the final two additions. Images show the available sites at capture time; they do not verify personal authorship of every current site detail.

The résumé PDF and `portfolio.js` contain inconsistent age-of-experience, education grades, employment dates, and LinkedIn details. The redesign leaves both source documents intact and omits disputed numeric highlights from the UI. Legacy placeholder certification IDs are not displayed. **The most useful content follow-up is an updated résumé reconciled with the current portfolio data.** No invented outcomes, clients, metrics, testimonials, or response-time promises were added.

## Adaptive local UI/UX skill

Updated `D:/FreeLance/.agents/skills/shrut-uiux/SKILL.md` to 2.0.0, with [before](references/shrut-uiux-v1.md) and [after](references/shrut-uiux-v2.md) copies retained here. It chooses Standard, Clean, Professional, Minimal, or Immersive from the brief, preserves existing systems for scoped work, and confines expressive effects to justified interactions. It no longer mandates glass navigation, fixed color ratios, 3D typography, or kinetic motion for every task.

The official local skill validator passed. Independent reading-based scenarios covered a localized billing edit, minimal photography portfolio, explicit immersive portfolio, standard leave form, and dense professional inventory interface. Those scenario reviews are instruction checks, not generated-app execution tests.

## Practical limits

- Tests used Chromium and mobile emulation. Physical iOS/Safari, Firefox, real screen-reader operation, and low-end hardware were not tested.
- No Lighthouse/Core Web Vitals or production CDN measurement was run. Fonts still depend on Fontshare/Google Fonts, with system fallbacks.
- The email draft requires the visitor's mail application. There is no message-submission backend.
- Full portfolio interaction requires JavaScript; the no-script content is deliberately a basic contact/résumé fallback.
- The build reports stale Browserslist/Baseline metadata. Those are non-failing tool-data notices, not a reason to change unrelated dependencies during this redesign.
- No remote publishing, external account changes, or messages to others were performed.
