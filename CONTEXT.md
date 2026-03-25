# CellPowerX Wellness Center — Website

## Project Overview

Website for the CellPowerX Wellness Center, a physical clinic in Lisbon (Av. Fontes Pereira de Melo, 21, 8º — between Saldanha and Marquês de Pombal). Founded in 2005 as Integrative Medicine Lda, it is the original center where Nuno Nina's frequency-based protocols were developed. 70,000+ client journeys delivered.

This is a **sub-brand** of CellPowerX (cellpowerx.com). It shares the parent brand's DNA (typography, core palette, component shapes) but shifts the emotional register from technological advancement to restorative serenity.

## Stack

- **Framework**: Astro (static site generator) — zero JS by default, component-based `.astro` files
- **Hosting**: Cloudflare Pages (auto-deploy from GitHub)
- **Repo**: `Joao-CPX/cpx-wellness`
- **Animations**: GSAP + ScrollTrigger (imported as ES module via npm)
- **Icons**: Phosphor Icons (via CDN `@phosphor-icons/web`)
- **Backend (phase 1)**: Static site, contact form via Cloudflare Worker → email
- **Backend (phase 2)**: Scheduling app integration (CPX scheduling app, built in parallel)
- **Newsletter**: Brevo integration (list ID TBD, separate from CPX quiz list 18)
- **Languages**: EN (default) + PT — JSON translation files (`/src/i18n/en.json`, `/src/i18n/pt.json`)
- **i18n Routing**: Astro built-in i18n — `/en/...` and `/pt/...` with prefix on default locale

## Key Files

| File | Purpose |
|------|---------|
| `CONTEXT.md` | This file — architecture, decisions, current state |
| `DESIGN.md` | Full design system: typography, colours, spacing, components, motion |
| `SITEMAP.md` | Page structure, section-by-section content, copy, technical notes |

**Read DESIGN.md and SITEMAP.md before making any changes.** They contain approved design tokens, component specs, and final copy.

## Design System Summary

- **Fonts**: Mulish 500 uppercase (headings/labels), Inter 300 (body), Inter 400 (captions/UI)
- **Core palette (inherited from CPX)**: accent `#c3d6dd`, secondary/CTA `#fb4616`, light bg `#f2f2f2`, dark bg `#282832`
- **Extended palette (Wellness Center)**: sand `#e8e0d4`, sage `#a8b5a0`, warm-white `#faf8f5`, charcoal `#3a3a46`, mist `#dce6ea`
- **Radii**: blocks/cards 36px, buttons 100px (pill), inputs 12px, tags 8px
- **Motion**: slow and deliberate, no bounce/overshoot, cubic-bezier easing
- **Orange rule**: `#fb4616` strictly for primary CTAs, max one per viewport, never as background fill
- **Text colour**: `#3a3a46` (charcoal), never pure black

## Pages (4 core + 1 optional)

1. **Homepage** — hero with credibility, value props, treatment preview, first appointment CTA, newsletter
2. **About / Philosophy** — history, Nuno Nina profile, approach, CellPowerX connection
3. **Treatments** — overview grid + 4 detailed sections (TimeWaver, NanoPulse, Infrared, SLM Wave)
4. **Contact / Booking** — form (phase 1) → scheduling widget (phase 2), contact info, map, hours
5. **Journal / Blog** — optional, phase 2 only if content exists

## Treatments

1. **TimeWaver Frequency** — frequency-based bioelectrical support (flagship treatment)
2. **NanoPulse** — pulsed magnetic fields, 3-20 min sessions
3. **Infrared Therapy** — IR warmth for relaxation and comfort
4. **SLM Wave** — 532nm light frequencies for body harmonization

All treatments have disclaimers. See SITEMAP.md sections 3.3–3.6 for full copy.

## Booking Flow

- **Phase 1**: Simple HTML form (name, email, phone, message) → sends email to geral@int-medicine.com via CF Worker or Brevo form
- **Phase 2**: Embed scheduling app (iframe or web component from CPX scheduling app)
- "Book Now" CTA in nav always points to active booking method

## Contact Info

- Phone: +351 211 929 218 | +351 912 051 564
- Email: geral@int-medicine.com
- Address: Av. Fontes Pereira de Melo, 21, 8º — 1050-116 Lisbon, Portugal
- Hours: TBD

## Branding

- **Logo**: wordmark "CellPowerX Wellness" in Mulish Medium uppercase (no separate logo file)
- **No prices** on the site for now
- **Images**: stock/placeholder for phase 1; follow photography direction in DESIGN.md section 6

## i18n Approach

- JSON translation files: `/src/i18n/en.json`, `/src/i18n/pt.json`
- URL structure: `/en/treatments`, `/pt/tratamentos`
- Default language: EN (with prefix)
- Toggle in header: PT / EN switch linking to equivalent page in other locale

## Current State

- [x] Design system defined (DESIGN.md)
- [x] Sitemap and content structure approved (SITEMAP.md)
- [x] Repo created (`Joao-CPX/cpx-wellness`) and pushed to GitHub
- [x] Homepage development (EN + PT)
- [x] About page (EN + PT)
- [x] Treatments page (EN + PT)
- [x] Contact/Booking page (EN + PT)
- [x] i18n implementation (full EN + PT translations)
- [x] GSAP ScrollTrigger animations
- [x] SEO (meta tags, OG tags, sitemap.xml via @astrojs/sitemap)
- [ ] Cloudflare Pages deployment connected
- [ ] Contact form backend (CF Worker → email)
- [ ] Scheduling app integration (phase 2)
- [ ] Photography / real assets (currently placeholders)
- [ ] Schema.org structured data (LocalBusiness)
- [ ] Newsletter backend (Brevo integration)
- [ ] Google Maps embed on contact page

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-25 | Design system approved: Mulish + Inter, extended wellness palette, 36px radii |
| 2026-03-25 | 4-page scope: Homepage, About, Treatments, Contact |
| 2026-03-25 | Bilingue EN + PT, EN as default |
| 2026-03-25 | No prices on site for now |
| 2026-03-25 | Scheduling app built in parallel, site launches with contact form |
| 2026-03-25 | Blog/Journal deferred to phase 2 |
| 2026-03-25 | Wordmark "CellPowerX Wellness" as logo (no separate logo file) |
| 2026-03-25 | Astro chosen as framework (static SSG, zero JS by default, built-in i18n) |
| 2026-03-25 | GSAP + ScrollTrigger for animations (imported via npm, not CDN) |
| 2026-03-25 | Phosphor Icons via CDN for iconography |
| 2026-03-25 | Repo moved to Joao-CPX/cpx-wellness (from rellagher) |
