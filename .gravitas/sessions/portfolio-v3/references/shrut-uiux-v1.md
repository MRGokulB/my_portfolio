---
name: shrut-uiux
description: "Master UI/UX design language and aesthetic engineering skill based on @uxui_shrut and modern frontend micro-tools (@namansoni.ai). Enforces the Unexpected Accent 60-30-10 color rule, layered 3D typography, floating glass docks, kinetic motion primitives, and editorial layouts."
argument-hint: "<prompt> | apply <path> | audit <path>"
version: 1.0.0
metadata:
  opencode/slash: "true"
---

# Shrut UI/UX Design System Skill
*Aesthetic Web Architecture: High-Contrast Palettes, Kinetic Micro-Interactions, and Spatial Depth.*

Use this skill whenever building or refining web interfaces, landing pages, SaaS dashboards, or portfolios to guarantee they look bespoke, punchy, and modern rather than generic AI boilerplate.

---

## 💎 The 6 Core Commandments

### 1. The Unexpected Accent Rule (60-30-10 Architecture)
- **60% Dominant Canvas**: Never use pure flat white or generic grey. Use Deep Graphite (`#1C1D20`), Midnight Charcoal (`#17191C`), Jet Black (`#0A0A0A`), or Warm Ivory (`#F3EEE8`).
- **30% Structural Secondary**: Muted, sophisticated tones for cards, layout borders, and secondary text (e.g., Cool Steel Grey `#929DA7`, Mocha Brown `#5B4632`, Muted Sage `#A5A79B`).
- **10% High-Voltage Accent**: A single bold, unexpected punch applied strictly to primary CTAs, active pills, badges, and headline keywords:
  - *Sunshine Yellow* (`#FFC928` / `#FFF21A`) on Graphite/Black
  - *Cerulean Blue* (`#007BA7` / `#38BDF8`) on Jet Black
  - *Champagne Gold* (`#F4D9A0`) + *Burnt Amber* (`#C8792C`) on Mocha Brown
  - *Neon Emerald* (`#39FF88`) on Dark Moss Green
  - *Vibrant Coral Orange* (`#FF4B32` / `#FF6845`) on Steel Grey or Warm Ivory

### 2. Kinetic & Multi-Style Typography
- Contrast an ultra-bold display headline with high letter-spacing uppercase kickers (`letter-spacing: 0.18em - 0.25em`).
- Mix font weights or serifs deliberately: pair a modern geometric sans (`Inter`, `Plus Jakarta Sans`, `Syne`) with an editorial serif (`Playfair Display`, `Cinzel`, `Cormorant`) for luxury and depth.
- Highlight **one single word or period** in the accent color (e.g., `Turn Ideas Into ` `<span class="text-accent">Impact.</span>`).

### 3. Layered Spatial Depth (Z-Axis Interleaving)
- Place visual hero assets (3D models, sneaker cuts, photography, origami sculptures) **intertwined or overlapping the headline typography**.
- Text peeks from behind the subject, establishing an authentic 3D spatial field.

### 4. Floating Frosted Glass Capsules (HUD Docks & Pills)
- Floating navigation pills with `backdrop-filter: blur(16px); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);`.
- Segmented control toggles (e.g., `[ Buy | Rent ]`, `[ Monthly | Annual ]`).
- Floating vertical icon docks with tooltips.

### 5. Dual Action Hierarchy
- Never render a solitary generic rectangle button.
- Always pair:
  1. **Primary Action**: Pill-shaped solid or accented button with directional arrow `[ Explore Work → ]`.
  2. **Secondary Action**: Circular frosted glass icon button `( ▶ ) Watch Journey` or `( ↗ ) View Live`.

### 6. Curated Micro-Interactions & Motion
- Magnetic hover attraction on buttons and badges.
- Smooth spring transitions: `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
- Cards with subtle radial cursor spotlights or hover border glow.

---

## 🛠️ The 4 Core Developer Tools Integration

1. **Motion Primitives (`motion-primitives.com`)**:
   - Utilize Framer Motion spring physics, kinetic typography, magnetic cursor buttons, and animated entrance triggers.
2. **Haikei (`haikei.app`)**:
   - Clean, lightweight SVG background meshes, bezier curve dividers, and organic blob backdrops.
3. **Realtime Colors (`realtimecolors.com`)**:
   - Token mapping system: export and verify contrast tokens directly into Tailwind `colors` (`dominant`, `secondary`, `accent`).
4. **Aceternity UI & Magic UI**:
   - Bento grids, glowing border highlights, and subtle noise/grid overlays.

---

## 📋 Checklist Before Completing Any UI Screen
- [ ] Is there a clear 60-30-10 palette architecture?
- [ ] Is the accent color reserved strictly for focal actions (not spread everywhere)?
- [ ] Are headings paired with a wide-tracked eyebrow and distinct subtitle?
- [ ] Are buttons rounded pill shapes with directional arrow cues `( → )`?
- [ ] Are card surfaces distinct with subtle borders and frosted backdrops?
- [ ] Is there spatial depth (layering or light vignette)?
