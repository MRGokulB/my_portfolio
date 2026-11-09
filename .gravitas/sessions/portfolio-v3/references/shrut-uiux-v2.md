---
name: shrut-uiux
description: >-
  Design and refine websites, portfolios, product interfaces, and dashboards with
  a visual and motion approach matched to the user's brief. Supports standard,
  clean, professional, minimal, and immersive work while preserving existing
  design systems on scoped edits. Use for UI/UX implementation, redesign, and
  visual review; not backend-only work.
metadata:
  version: "2.0.0"
  argument-hint: "<prompt> | apply <path> | audit <path>"
  opencode/slash: "true"
---

# Shrut UI/UX

Make the interface fit its audience, content, and job. This skill supplies design
judgment, not a compulsory visual style. A portfolio, checkout, and operations
dashboard should not receive the same composition or motion treatment.

## Read the brief and the current product

Before editing, inspect the target screen, its components, content, existing
tokens, framework, and interaction behavior. Use an available local preview or
recent screenshots to understand the current design. Read a project design
document when present.

Identify the main user task, the audience, the requested tone, the material that
can actually be shown, and the scope of change. Infer routine choices from the
brief and project. Ask only when a missing fact materially affects the result;
continue independent work while clarification is pending. Routine design choices
do not require a separate approval step.

- **Small edit or polish:** keep the current brand, layout, copy, routes, and
  behavior except where the requested change needs a modification. Do not
  redesign a whole screen to fix one control.
- **Explicit redesign:** the composition and visual language may change; retain
  the product's real content and functional wiring unless the request changes
  them too.
- **New interface:** choose a coherent direction from the brief. If no visual
  direction is given, use Standard. A portfolio or a technology topic alone is
  not a request for immersive design.

## Choose the mode

These are working defaults, not rigid templates. Use the user's actual words and
the interaction needs to select a primary mode. State the direction briefly for
substantial work; do not burden a small edit with a design questionnaire.

| Mode | Use when | Design emphasis | Motion and density |
| --- | --- | --- | --- |
| **Standard** | The brief gives no special aesthetic, or asks for a conventional useful interface | Familiar navigation, clear hierarchy, readable content, consistent controls, one obvious primary action where needed | Quiet state transitions; density follows the task rather than a fixed card layout |
| **Clean** | The user asks for clarity, polish, or a clean UI | Strong alignment, purposeful whitespace, fewer competing colors and boundaries, clear grouping | Restrained feedback; retain useful information instead of creating empty screens |
| **Professional** | Business, enterprise, administration, or work that depends on precision and trust | Scanability, precise labels, predictable controls, credible content, tables or lists when comparison matters | Low distraction; allow useful information density with readable type and comfortable targets |
| **Minimal** | The user explicitly asks for minimal, simple, or stripped-back design | Remove redundant decoration and copy; make hierarchy do more work; use a small consistent palette | Little or no decorative motion; do not hide essential actions, labels, feedback, or navigation for visual purity |
| **Immersive** | The brief explicitly asks for playful, expressive, spatial, 3D, cinematic, or experimental work | One memorable concept tied to the real subject, a clear visual focal point, varied compositions that still support the visitor's task | Purposeful spatial or scroll effects with a performance budget and accessible alternatives; quieter content and forms around the focal interaction |

When a brief combines modes, choose a base and a specific exception: for example,
a professional product page with one interactive 3D product view. Do not spread
that exception across every control or section. When wording is ambiguous,
prefer the less intrusive interpretation and preserve the user's ability to act.

## Build one visual system

Honor explicit style choices. For a scoped edit, the existing brand and design
system remain authoritative. For a redesign, derive the replacement from the
brief rather than blending every referenced skill's preset.

- **Layout:** organize around the content and task. Use cards for independently
  meaningful items, tables for comparison, and plain sections where containment
  adds nothing. Keep primary actions easy to find without forcing two CTAs into
  every section. Cap wide layouts and use consistent alignment and spacing.
- **Typography:** choose a readable hierarchy, useful line lengths, and fonts
  appropriate to the tone. Reuse existing families where possible. Oversized
  display type, mixed serifs, tracked capitals, or emphasized words are options,
  not requirements. Check the actual copy at narrow widths.
- **Color and surfaces:** define reusable role tokens for background, text,
  muted text, borders, actions, and semantic states. Light, dark, neutral, or
  expressive palettes are all valid. Contrast and meaning determine accent
  usage; a fixed 60-30-10 ratio does not. Glass, gradients, shadows, pill shapes,
  glow, and layered depth need a reason in the selected direction.
- **Imagery and proof:** use actual project screenshots, supplied assets, and
  verified content. Label an illustrative diagram or provisional asset when it
  could be mistaken for product evidence. Never invent metrics, credentials,
  testimonials, clients, or delivery guarantees to fill a layout.
- **Skill composition:** use one primary design system. Borrow a technique from
  another skill only when it supports this brief; do not combine incompatible
  font, color, layout, and motion mandates. Document consequential exceptions
  briefly when they affect the implementation or audit.

## Motion serves the interaction

Start with focus, hover, press, selection, and state changes. Add decorative or
spatial motion only when the chosen mode and brief justify it. Buttons must stay
easy to target; cursor effects must not interfere with activation or reading.

Prefer explicit transition properties, usually transform and opacity, and avoid
`transition: all`. Do not animate layout dimensions for routine feedback. Reuse
the installed animation library rather than adding dependencies for effects
already supported by CSS or the current stack.

For immersive work, tie the main motion to an understandable action or story.
Keep native scrolling and touch gestures usable. Let visitors pause persistent
autonomous motion; suspend rendering outside the viewport or on hidden tabs when
practical. Respect reduced motion by removing nonessential movement and preserve
the meaning of the interaction in a static state. Essential content must not
depend on a reveal completing or a 3D renderer being available.

Use 3D only when it earns its cost. Prefer the lightest implementation that
supports the interaction, cap rendering resolution, load expensive scenes
separately, and provide a useful fallback. Do not replace ordinary navigation
with an interaction that requires dragging, hovering, or understanding a scene.

## Production and accessibility

- Preserve real links, routes, form names, validation, and data behavior. A local
  prototype must not claim a message was sent or a change saved without the
  corresponding action succeeding.
- Use semantic elements, visible labels, keyboard operation, predictable focus,
  and meaningful control names. Hover information must also be available on
  focus or tap. Expose selection, expanded, loading, success, and error states
  when the control actually supports them.
- Check WCAG AA contrast: ordinary text at least 4.5:1; large text and essential
  UI boundaries or focus indicators at least 3:1. Do not communicate state by
  color alone. Aim for 44px touch targets where practical, with adequate spacing.
- Recompose at smaller widths rather than merely shrinking the desktop. Check
  long text, keyboard-visible form controls, image sizing, horizontal overflow,
  and fixed UI obscuring content. Do not clip meaningful content to conceal a
  layout defect.
- For consequential workflows, preserve validation, understandable errors, and
  a recovery path. A polished surface must not conceal uncertainty or failure.

## Verify proportionately

For a small change, inspect the affected component and its relevant interaction
states. For a screen or redesign, inspect the real rendered result on desktop
and a narrow phone, plus breakpoints where the composition changes. Exercise the
primary flow, keyboard controls, and reduced-motion behavior where applicable.

Run the project's appropriate lint, type, build, or focused tests after changes.
Use browser and accessibility checks for the affected UI when available. Do not
add superficial tests that only repeat the implementation, or run an unrelated
exhaustive audit for a cosmetic edit. Fix findings in a coherent batch and verify
the affected behavior again.

Report what changed, the evidence actually observed, and any material limitation
that still needs live-device or service verification. Do not claim a design,
accessibility, performance, or cross-browser pass without the corresponding
check. No external service, paid asset, global skill installation, or new
dependency is mandatory to use this skill.
