# CellPowerX Wellness Center — Design System

> Sub-brand identity guide. Shares the CellPowerX DNA (typography, core palette, component shapes) while shifting the emotional register from *technological advancement* to *restorative serenity*.

---

## 1. Brand Positioning

| | CellPowerX (Parent) | Wellness Center (Sub-brand) |
|---|---|---|
| **Feeling** | Cutting-edge, high-performance | Calm, restorative, grounded |
| **Voice** | Scientific authority | Warm expertise |
| **Imagery** | Light frequencies, tech textures | Natural light, breath, space |
| **Energy** | Energising, forward | Centring, present |

The Wellness Center lives *inside* the CellPowerX universe — a visitor should immediately sense the family resemblance, but feel a shift in tempo. Think of it as walking from a high-tech showroom into its adjoining garden lounge.

---

## 2. Typography

Inherited directly from CellPowerX. No changes — this is the strongest continuity thread.

### Headings & Labels

```
Font:       Mulish
Weight:     500 (Medium)
Transform:  uppercase
Tracking:   0.08em – 0.12em
```

### Body & UI Text

```
Font:       Inter
Weight:     300 (Light)
Tracking:   0.01em
Line-height: 1.65 – 1.75
```

### Wellness Center Nuances

- **Headings**: prefer the lower end of tracking (0.08em) — slightly tighter than the parent brand to feel less "loud" and more intimate.
- **Body**: increase line-height to 1.75 where space allows — more breathing room reinforces the serene tone.
- **Max body width**: cap at `620px` (vs. CellPowerX's typical `720px`) for a calmer reading rhythm.

### Font Loading

```html
<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@500&family=Inter:wght@300;400&display=swap" rel="stylesheet">
```

> Inter 400 (Regular) is included as a utility weight for captions, metadata, and interactive elements where Light feels too thin.

---

## 3. Colour Palette

### 3.1 Inherited Colours

| Token | Hex | Role |
|---|---|---|
| `--cpx-accent` | `#c3d6dd` | Primary accent — muted sky blue. Dominant surface colour for the Wellness Center. |
| `--cpx-secondary` | `#fb4616` | High-contrast CTA / alert. Used sparingly — a controlled spark of CellPowerX energy. |
| `--cpx-light-bg` | `#f2f2f2` | Light background base. |
| `--cpx-dark-bg` | `#282832` | Dark background base. |

### 3.2 Extended Wellness Palette

These additions don't replace the inherited colours — they expand the tonal range to support the softer mood.

| Token | Hex | Role |
|---|---|---|
| `--wc-sand` | `#e8e0d4` | Warm neutral — alternative surface colour. Adds earthiness alongside the cool accent. |
| `--wc-sage` | `#a8b5a0` | Muted green — nature cue. For tags, secondary badges, subtle highlights. |
| `--wc-warm-white` | `#faf8f5` | Off-white with warm undertone — preferred over pure `#f2f2f2` for full-bleed sections. |
| `--wc-charcoal` | `#3a3a46` | Softer dark — body text on light backgrounds. Less stark than pure black. |
| `--wc-mist` | `#dce6ea` | Lighter tint of accent — for hover states, subtle dividers, card backgrounds. |

### 3.3 Colour Application Rules

- **Primary surfaces**: alternate between `--wc-warm-white` and `--cpx-accent` (at 15–25% opacity) to create gentle visual rhythm.
- **The orange (`--cpx-secondary`)**: reserve strictly for primary CTAs and anchor links. Never use as a background fill. Maximum one orange element per viewport.
- **Dark mode / dark sections**: use `--cpx-dark-bg` with text in `--wc-warm-white`. Accent elements shift to `--cpx-accent` at full opacity.
- **Gradients**: soft, low-contrast only. Example: `linear-gradient(160deg, var(--wc-warm-white), var(--wc-mist))`. No hard colour stops.

### 3.4 Opacity Scale

For layering the accent and sand tones over backgrounds:

```css
--opacity-whisper:  0.06;
--opacity-soft:     0.12;
--opacity-medium:   0.25;
--opacity-visible:  0.45;
```

---

## 4. Spacing & Layout

### Grid

```css
--grid-max-width:   1200px;
--grid-padding:     clamp(24px, 5vw, 80px);
--grid-gap:         clamp(16px, 3vw, 40px);
```

### Vertical Rhythm

```css
--section-spacing:  clamp(80px, 10vh, 160px);
--block-spacing:    clamp(40px, 5vh, 80px);
--element-spacing:  clamp(16px, 2vh, 32px);
```

The Wellness Center uses **more generous vertical spacing** than the parent brand — white space is not emptiness, it's breath.

### Corner Radii

```css
--radius-block:     36px;     /* Cards, panels, image frames, text boxes */
--radius-button:    100px;    /* Fully round pill buttons — inherited */
--radius-input:     12px;     /* Form inputs, search bars */
--radius-tag:       8px;      /* Tags, badges, small chips */
```

---

## 5. Components

### 5.1 Buttons

#### Primary CTA
```css
.btn-primary {
  font-family: 'Mulish', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8125rem;           /* 13px */
  padding: 16px 40px;
  border-radius: 100px;           /* full pill */
  background: var(--cpx-secondary);
  color: #ffffff;
  border: none;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-primary:hover {
  background: #e03d12;
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(251, 70, 22, 0.2);
}
```

#### Secondary / Soft CTA
```css
.btn-secondary {
  /* Same typography as primary */
  padding: 16px 40px;
  border-radius: 100px;
  background: transparent;
  color: var(--wc-charcoal);
  border: 1.5px solid var(--cpx-accent);
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-secondary:hover {
  background: var(--cpx-accent);
  color: var(--cpx-dark-bg);
  border-color: var(--cpx-accent);
}
```

#### Ghost / Tertiary
```css
.btn-ghost {
  /* Same typography */
  padding: 12px 24px;
  border-radius: 100px;
  background: transparent;
  color: var(--wc-charcoal);
  border: none;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: var(--cpx-accent);
}
```

### 5.2 Cards

```css
.card {
  background: #ffffff;
  border-radius: var(--radius-block);    /* 36px */
  padding: clamp(28px, 4vw, 48px);
  border: 1px solid rgba(195, 214, 221, 0.3);
  box-shadow: 0 2px 20px rgba(40, 40, 50, 0.04);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.card:hover {
  box-shadow: 0 8px 40px rgba(40, 40, 50, 0.08);
  transform: translateY(-2px);
}
```

### 5.3 Section Blocks

```css
.section-block {
  border-radius: var(--radius-block);
  padding: clamp(48px, 6vw, 96px) clamp(32px, 5vw, 80px);
}

/* Light variant */
.section-block--light {
  background: var(--wc-warm-white);
}

/* Accent variant */
.section-block--accent {
  background: linear-gradient(
    160deg,
    rgba(195, 214, 221, 0.15),
    rgba(195, 214, 221, 0.06)
  );
}

/* Dark variant */
.section-block--dark {
  background: var(--cpx-dark-bg);
  color: var(--wc-warm-white);
}
```

### 5.4 Form Inputs

```css
.input {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  padding: 16px 24px;
  border-radius: var(--radius-input);
  border: 1.5px solid var(--wc-mist);
  background: #ffffff;
  color: var(--wc-charcoal);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: var(--cpx-accent);
  box-shadow: 0 0 0 4px rgba(195, 214, 221, 0.25);
}
```

---

## 6. Imagery & Texture

### Photography Direction

- **Dominant mood**: soft natural light, golden hour, gentle diffusion.
- **Subjects**: hands, breath, water, botanicals, quiet human moments. No tech close-ups.
- **Colour treatment**: slightly desaturated, warm-shifted. Shadows lifted (never crushed black).
- **Composition**: generous negative space. Subject off-centre. Room to breathe.

### Texture & Atmosphere

- Subtle grain overlay at low opacity (`0.03–0.06`) for warmth and tactility.
- Soft gradient washes behind content sections.
- No sharp geometric patterns (those belong to the parent brand).
- If using illustrative elements: organic, flowing lines — not circuitry or grid patterns.

### Image Treatment

```css
.img-frame {
  border-radius: var(--radius-block);   /* 36px */
  overflow: hidden;
}

.img-frame img {
  filter: saturate(0.85) contrast(0.95);
  transition: filter 0.5s ease;
}

.img-frame:hover img {
  filter: saturate(1) contrast(1);
}
```

---

## 7. Motion & Interaction

### Principles

- **Slow and deliberate**. Nothing snaps — everything eases.
- **Scroll-driven reveals**: content fades up gently, not slides in aggressively.
- **No bounce, no overshoot**. CellPowerX can be punchy; the Wellness Center breathes.

### Easing

```css
--ease-default:   cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-soft:      cubic-bezier(0.22, 0.61, 0.36, 1);
--ease-enter:     cubic-bezier(0, 0, 0.2, 1);
```

### Durations

```css
--duration-fast:     250ms;    /* Hover states, micro-interactions */
--duration-medium:   450ms;    /* Component transitions */
--duration-slow:     700ms;    /* Section reveals, page transitions */
```

### Scroll Reveal (CSS-only)

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity var(--duration-slow) var(--ease-soft),
              transform var(--duration-slow) var(--ease-soft);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

> For GSAP implementations (per BRAND.md): use `ScrollTrigger` with `start: "top 85%"` and `scrub: false`. Stagger groups at `0.12s` intervals.

---

## 8. CSS Custom Properties — Full Reference

```css
:root {
  /* === Inherited from CellPowerX === */
  --cpx-accent:       #c3d6dd;
  --cpx-secondary:    #fb4616;
  --cpx-light-bg:     #f2f2f2;
  --cpx-dark-bg:      #282832;

  /* === Wellness Center Extensions === */
  --wc-sand:          #e8e0d4;
  --wc-sage:          #a8b5a0;
  --wc-warm-white:    #faf8f5;
  --wc-charcoal:      #3a3a46;
  --wc-mist:          #dce6ea;

  /* === Opacity Scale === */
  --opacity-whisper:  0.06;
  --opacity-soft:     0.12;
  --opacity-medium:   0.25;
  --opacity-visible:  0.45;

  /* === Spacing === */
  --grid-max-width:   1200px;
  --grid-padding:     clamp(24px, 5vw, 80px);
  --grid-gap:         clamp(16px, 3vw, 40px);
  --section-spacing:  clamp(80px, 10vh, 160px);
  --block-spacing:    clamp(40px, 5vh, 80px);
  --element-spacing:  clamp(16px, 2vh, 32px);

  /* === Radii === */
  --radius-block:     36px;
  --radius-button:    100px;
  --radius-input:     12px;
  --radius-tag:       8px;

  /* === Motion === */
  --ease-default:     cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-soft:        cubic-bezier(0.22, 0.61, 0.36, 1);
  --ease-enter:       cubic-bezier(0, 0, 0.2, 1);
  --duration-fast:    250ms;
  --duration-medium:  450ms;
  --duration-slow:    700ms;

  /* === Typography === */
  --font-heading:     'Mulish', sans-serif;
  --font-body:        'Inter', sans-serif;
  --fw-heading:       500;
  --fw-body:          300;
  --fw-body-medium:   400;
  --tracking-heading: 0.08em;
  --tracking-body:    0.01em;
  --lh-body:          1.75;
  --max-prose-width:  620px;
}
```

---

## 9. Do's & Don'ts

### ✓ Do

- Use generous white space — let the layout breathe.
- Alternate warm and cool neutral sections for gentle rhythm.
- Keep the orange for one strong CTA per page section.
- Use the accent blue (`#c3d6dd`) liberally as a tint, border, or wash.
- Favour soft photography with warm, lifted shadows.
- Maintain Mulish uppercase for all headings — it's the brand signature.

### ✗ Don't

- Don't use the orange as a background fill or decorative colour.
- Don't use sharp geometric patterns, neon accents, or tech-forward imagery.
- Don't use pure black (`#000`) for text — use `--wc-charcoal` instead.
- Don't add bounce or elastic easing to animations.
- Don't crowd content — if it feels tight, add space.
- Don't introduce new typefaces. Mulish + Inter is the system.

---

## 10. Relationship to Parent Brand

```
CellPowerX (parent)
 └── Wellness Center (sub-brand)
      ├── Shares: Typography, core 4-colour palette, button shapes, corner radii
      ├── Extends: +5 warm/natural tones, wider spacing, softer motion
      └── Shifts: Tech authority → Warm expertise, Energy → Serenity
```

When the Wellness Center appears alongside CellPowerX materials (e.g. a shared website header), the accent colour (`#c3d6dd`) and Mulish uppercase headings create immediate visual continuity. The distinction comes through in pacing, warmth, and space — not through contradictory elements.

---

*Last updated: March 2026*
