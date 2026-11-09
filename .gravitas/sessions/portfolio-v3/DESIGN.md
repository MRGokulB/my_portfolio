# Build Stack — portfolio design language

This is a custom direction for Gangaprasad Boddawar’s portfolio, derived with Hue’s design-model method and the user’s tactile interaction reference. It is a specification for the website, not a claim that a complete standalone Hue skill package or any external CLI has been installed.

## Product truth and purpose

The audience is a hiring manager, technical lead, or client evaluating a full stack and AI engineer. The primary action is to explore real work, followed by contacting Gangaprasad or opening his résumé. Keep the existing Home, Work, About, and Contact routes and their working links and fields.

Use identity, experience, education, projects, and links from the existing portfolio data. Do not turn illustrative concepts into production claims. Do not add client counts, success metrics, endorsements, certificates, or response-time promises. Existing numerical claims remain sourced to the supplied content; omit questionable legacy demo credentials rather than promoting them.

## Concept

A product is a stack of decisions. The hero makes that idea tangible: three compact, tactile layers represent interface, AI, and cloud work. Selecting a layer reveals how it connects to an actual project. The stack is a purposeful explorer of the portfolio, rather than a decorative toy. It borrows the physical response of a keycap without copying the reference’s sphere, rainbow keyboard, PORTFOLIO lettering, fictional name, or statistics.

The primary tension is playful material versus serious engineering. The object can be expressive; the surrounding website stays legible, calm, and precise. Its lineage is a small desktop instrument and an exploded product model, not a dashboard or a game interface.

## Falsifiable principles

1. **Every layer leads somewhere real.** Interface, AI, and cloud selections show actual capabilities and actual project destinations.
2. **The object owns the depth.** Bevels, perspective, and spatial movement belong to the interactive stack; ordinary page containers remain flat.
3. **Words establish the hierarchy.** A large, plain headline and one specific sentence explain the person’s work without a preliminary eyebrow.
4. **Color identifies the layer.** Lavender, yellow, and mint have stable semantic roles; coral identifies an action or selected control, never arbitrary decoration.
5. **Browsing never requires playing.** All work, résumé, and contact routes remain available without dragging, hovering, or discovering a hidden control.
6. **The gesture has an equivalent.** Pointer, tap, and keyboard selection produce the same result, with a static meaningful reduced-motion presentation.
7. **Evidence beats ornament.** Below the hero, existing screenshots, readable project details, and the real portrait carry the page.

## Hero stage, following Hue

| Layer | Decision |
| --- | --- |
| Background field | Flat cool near-white. No grid, noise, ambient glow, mesh, or purple/blue wash. |
| Subject | A local, interactive composition of three tactile stack modules. The rendered material is invented; the information represented is real. |
| Relation | Soft, offset contact shadow and controlled perspective. The stack feels placed in the composition, not pasted onto a gradient. |
| Safe zone | Keep the full headline, sentence, primary action, and ordinary navigation unobscured. At 1280 × 800 they fit above the fold. |
| Rest state | All three layer labels are understandable before any input. No perpetual spin or hidden initial state. |
| Mobile | Stack above its explanatory selection content; three clear tap targets. Keep native vertical scrolling. |

### Layer mapping

| Layer | Color role | Grounded material |
| --- | --- | --- |
| Interface | Lavender | React/Next.js, accessible interfaces, JavaScript Universe, DSA Universe, Mane Mess. |
| AI | Soft yellow | FastAPI, pgvector, structured output, the proposal capture and compliance engine. |
| Cloud | Mint | Docker, Brotli Nginx, Cloud Run and Cloud Build, Enclavia deployments. |

These are categories, not invented physical systems. Labels and descriptive copy must make the relationship clear without pretending the portfolio object is a deployed application.

## Tokens and type

Keep every color and font declaration in the CSS token block. Components consume semantic tokens. These starting values describe the direction; final tokens must reflect measured contrast and the rendered result.

| Role | Starting value | Usage |
| --- | --- | --- |
| Canvas | `#f6f7fa` | Overall background. |
| Pale surface | `#eceef2` | Quiet supporting surfaces. |
| Primary ink | `#252423` | Headings and normal text. |
| Secondary ink | `#626364` | Supporting text; verify at least 4.5:1 against its surface. |
| Structural line | `#d6d8dc` | Nonessential separators only; form boundaries need stronger contrast. |
| Action signal | `#eb563b` | Coral details and selected control. Use dark ink on its filled surface rather than small white text. |
| Interface module | `#b9a4f5` | The UI layer and corresponding selected state only. |
| AI module | `#f0d167` | The AI layer and corresponding selected state only. |
| Cloud module | `#a5d9c2` | The cloud layer and corresponding selected state only. |
| Reversed surface | `#252423` | A deliberate contrasting section or action. |
| Reversed ink | `#f6f7fa` | Readable text on the reversed surface. |

Typography: Clash Grotesk at 600/700 for display, Figtree at 400/600 for body and controls. Use licensed, self-hosted WOFF2 assets where available, with `font-display: swap`. Limit the active font budget to these roles; no third decorative face and no italic headline fragments. A system monospace fallback is permitted only inside real code snippets, not labels or navigation.

Use a compact role scale, approximately 12/14/16/20/24/32/48/72/96px, with fluid display sizes. Body copy is at least 16px; essential controls and project descriptions must not shrink to tiny specimen labels. Headline tracking stops at -0.04em. Set headings to balanced wrapping, minimum width zero, and overflow-wrap protection.

Spacing follows 4/8/12/16/24/32/48/64/96px. Related controls use the smaller gaps, independent sections the larger gaps. Use one capped centered content width with equal side gutters. Image tracks use `minmax(0, 1fr)` and images reserve their aspect ratios.

Ordinary controls use consistent 8–12px corners; large image surfaces may use 16px. Avoid turning every container into a pill. Shadow is reserved for the hero object and genuine overlays. Define each elevation once with offset and blur.

## Motion contract

The authored moment is selecting or opening the Build Stack. A layer moves only to explain its relationship to the whole and its associated work. Use the existing Framer Motion runtime and CSS transforms; a second animation framework is unnecessary. CSS perspective can provide the tactile geometry without another always-on WebGL scene.

| Behavior | Duration / character | Meaning |
| --- | --- | --- |
| Stack selection | About 350–500ms; controlled deceleration | Bring one layer forward and make its relationship readable. |
| Supporting copy change | About 150–200ms; minimal fade | Preserve continuity without showing two descriptions at once. |
| Button press | About 90–120ms; 1–2px physical depression | Immediate acknowledgment. |
| Routine hover | About 120–180ms; small state change | Indicate available action, fine pointers only. |
| Focus ring | Immediate, no transition | Make keyboard position unambiguous. |
| Reduced motion | Instant layout state or brief opacity-only feedback | Keep every selection and destination available without spatial travel. |

The default page is fully visible. Avoid repeated fade-and-rise entrances, text parallax, magnetic controls, cursor replacement, autoplay carousels, and scroll hijacking. If drag is supported, make it optional, bounded, and subordinate to native phone scrolling. No expensive work while idle, offscreen, or hidden. A small spring is acceptable only on the tactile stack or its actual press feedback; avoid elastic page choreography.

## Component and route rules

- Header: name/mark, ordinary route links, and a clear contact destination. Active route is visible without a decorative status dot.
- Hero: direct headline, one specific sentence, main work action, and the stack. Layer controls expose accessible names and selected state. Selection does not unexpectedly move keyboard focus.
- Work: preserve category filtering and grid/list state. Real screenshots remain distinguishable from illustrative diagrams. Never draw fake browser chrome to lend credibility.
- About: real portrait, clear biography, readable skills and education. Facts carry the page; remove repeated introductory labels before headings.
- Contact: preserve validation, copy success/failure, and the explicit email-draft behavior. Do not imply a backend submission.
- Buttons/links: support rest, hover, active, focus, disabled where applicable, and honest outcome states. No `href="#"` controls. Targets are comfortably usable on phones.
- Footer: a factual close and working destinations, without fabricated testimonials, counters, availability guarantees, or legal boilerplate that claims services the site does not have.

## Skill application and conflicts

| Source | Applied | Deliberate adaptation |
| --- | --- | --- |
| Impeccable 4.8.1 | Experience-mode artifact-first composition; one authored motion idea; contextual hierarchy; no eyebrows; verified contrast; real render and state review. | Its downloaded CLI is not run. Use local source context and existing browser tooling, explicitly reporting that substitution. |
| Taste Skill 2.5.1 | Purposeful first-screen artifact, equal edges, real supplied material, one focal interaction, clear hover/press feedback, reduced motion and performance limits. | Its forced random theme/kit, rigid viewport-height sections, `.example` contact replacement, and global lavender ban do not define this bespoke portfolio. Real contact details are required; lavender is a semantic module color. Do not claim a Taste CLI gate pass. |
| Hue 1.2 | Separate observed truth from derived design; explicit hero subject/background/relation; semantic tokens, typography roles, elevation and motion personality; portable specification. | This is the requested website system, not the separate eight-artifact skill-generator deliverable. The approved Clash/Figtree pairing replaces its generic Google-Fonts-only and always-three-font defaults. |
| AI-DESIGN-SKILLS landing-page-design | Clear audience/action, meaningful CTA, grounded proof, coherent spacing/type roles, control states, form validation, responsive checks, and content realism. | Mandatory FAQs/risk reversals/marketing claims, gradient heading text, floating glass nav, compulsory tagline word reveals, one font, and a narrow icon allowlist are inappropriate or conflict with Hallmark and the brief. |
| Hallmark | Custom direction, tokenized colors/fonts, capped container, no eyebrow or italic fragment, semantics, native scrolling, focus, readable first viewport, independent review. | The user explicitly requested tactile 3D interaction; bevel and perspective are confined to the actual interactive stack, never generic page decoration. |

These skills are not simultaneously executable specifications: several prescribe incompatible fonts, colors, navigation, and motion. The user’s bespoke portfolio goal and real data lead; Hallmark’s applicable floor provides the shared guardrails. Record the exact source URLs separately in `references/sources.json`.

## Review criteria

At 1440, 1280, 1024, 768, 390, and 320px: no hidden or clipped content, accidental overlaps, horizontal overflow, or unreachable actions. Test selection using mouse, touch, and keyboard; test reduced motion, long project titles, route focus, filters, list view, résumé, and contact errors. Inspect the actual mobile composition instead of relying on an overflow assertion. Contrast must pass 4.5:1 for body text and 3:1 for large text and essential control boundaries. Use the project’s executable build/lint checks and browser evidence; list any skill-specific checker that was not run instead of claiming it passed.
