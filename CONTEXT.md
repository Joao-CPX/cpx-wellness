# CellPowerX Wellness Center — Website

## Project Overview

Website for the CellPowerX Wellness Center, a physical clinic in Lisbon (Av. Fontes Pereira de Melo, 21, 8º — between Saldanha and Marquês de Pombal). Founded in 2009 as Integrative Medicine Lda, it is the original center where Nuno Nina's frequency-based protocols were developed. 70,000+ client journeys delivered.

This is a **sub-brand** of CellPowerX (cellpowerx.com). It shares the parent brand's DNA (typography, core palette, component shapes) but shifts the emotional register from technological advancement to restorative serenity.

## Stack

- **Framework**: Astro (static site generator) — zero JS by default, component-based `.astro` files
- **Hosting**: Cloudflare Pages — `cpx-wellness.pages.dev` (custom domain pending: `wellnesscenter.cellpowerx.com`)
- **Repo**: `Joao-CPX/cpx-wellness`
- **Animations**: GSAP + ScrollTrigger (planned, not yet implemented)
- **Icons**: Phosphor Icons (via CDN `@phosphor-icons/web`)
- **Newsletter**: Brevo API via Cloudflare Worker (`cpx-newsletter-api`) → list #19
- **Languages**: EN (default) + PT — JSON translation files (`/src/i18n/en.json`, `/src/i18n/pt.json`)
- **i18n Routing**: `/en/...` and `/pt/...` with globe dropdown in header
- **Max width**: 1440px (aligned with cellpowerx.com)

## Key Files

| File | Purpose |
|------|---------|
| `CONTEXT.md` | This file — architecture, decisions, current state |
| `DESIGN.md` | Full design system: typography, colours, spacing, components, motion |
| `SITEMAP.md` | Page structure, section-by-section content, copy, technical notes |

**Read DESIGN.md and SITEMAP.md before making any changes.**

## Design System Summary

- **Fonts**: Mulish 500 uppercase (headings/labels), Inter 300/400 (body/nav)
- **Palette**: Grayscale base + orange accent only
  - Accent: `#999999` (grey — for subtle elements)
  - Secondary/CTA: `#fb4616` (orange — primary action colour)
  - Light bg: `#f5f5f5`
  - Dark bg: `#1d1d1f`
  - Charcoal: `#2d2d2d` (text)
  - Warm white: `#fafafa`
  - Mist: `#e0e0e0`
- **Radii**: blocks/cards 18px, buttons 100px (pill), inputs 12px
- **Buttons**: Black primary (hover → orange), orange CTA for key actions, outline secondary
- **Motion**: GSAP ScrollTrigger reveals, slow and deliberate
- **Header**: Adaptive glassmorphism (light/dark based on section underneath), Inter for nav links (not uppercase)

## Pages

1. **Homepage** (`/en/`, `/pt/`) — fullwidth hero with image, value props, service cards carousel (mobile), Google Reviews (4.9★), Nuno Nina quote, "How It Begins" CTA, CellPowerX ecosystem banner
2. **Services** (`/en/services`, `/pt/servicos`) — sticky horizontal sub-nav, 4 service detail sections with images
3. **Our Science** (`/en/our-science`, `/pt/nossa-ciencia`) — educational page on cellular bioelectrics, membrane potential, pH environments, Tesla quote
4. **About** (`/en/about`, `/pt/sobre`) — history, Nuno Nina profile, stats, approach, CellPowerX ecosystem banner
5. **Contact** (`/en/contact`, `/pt/contacto`) — form, contact info, hours, Google Maps embed
6. **Privacy Policy** (`/en/privacy`, `/pt/privacidade`) — legal content
7. **Terms** (`/en/terms`, `/pt/termos`) — legal content

## Services (order)

1. **SLM Wave** — 532nm light frequencies for body harmonization
2. **NanoPulse** — pulsed magnetic fields, 3-20 min sessions
3. **Infrared Therapy** — IR warmth for relaxation and comfort
4. **TimeWaver Frequency** — frequency-based bioelectrical support

**Legal note**: Site uses "services" not "treatments" — a wellness center cannot legally claim to "treat" or call clients "patients".

## Contact Info

- Phone: +351 211 929 218
- WhatsApp: +351 912 051 564
- Email: geral@int-medicine.com
- Address: Av. Fontes Pereira de Melo, 21, 8º — 1050-116 Lisbon, Portugal
- Hours: Mon-Thu 9:30-18:30, Fri 9:00-18:00, Sat-Sun Closed

## Infrastructure

| Service | Purpose | Status |
|---------|---------|--------|
| Cloudflare Pages | Static site hosting | ✅ Live at cpx-wellness.pages.dev |
| Cloudflare Worker `cpx-newsletter-api` | Newsletter subscription → Brevo list #19 | ✅ Live |
| Brevo | Email marketing / newsletter | ✅ Connected (API key as Worker secret) |
| Google Maps | Embedded on contact page | ✅ Live |
| Google Reviews | Static widget (4.9★, 15 reviews) on homepage | ✅ Live |
| Custom domain | wellnesscenter.cellpowerx.com | ⏳ Waiting for IT team CNAME |
| Google Places API | Dynamic reviews fetch via Worker + KV cache | ⏳ Waiting for API key |
| GA4 | Analytics (blocked by cookie consent) | ⏳ Not yet implemented |
| WhatsApp Widget | Chat widget component | ⏳ Created but disabled — pending chat solution |

## Components

| Component | Purpose |
|-----------|---------|
| `Nav.astro` | Adaptive header with Services dropdown, globe language switcher, mobile hamburger |
| `Footer.astro` | 3-column: links + contact/hours + newsletter (Brevo), consent checkbox |
| `CookieBanner.astro` | GDPR cookie consent with categories (necessary/analytics/marketing) |
| `WhatsApp.astro` | Chat widget (disabled) — pure HTML/CSS/JS, business hours aware |

## Current State

- [x] All 7 pages built (EN + PT)
- [x] Cloudflare Pages deployed
- [x] Adaptive glassmorphism header (cellpowerx.com aligned)
- [x] Real CPX logo SVG integrated
- [x] Real service images
- [x] Fullwidth hero with gradient overlay
- [x] Service cards Apple-style with carousel on mobile
- [x] Sticky sub-nav on services page
- [x] Google Reviews widget (manual, 4.9★)
- [x] Newsletter → Brevo via Cloudflare Worker
- [x] GDPR cookie banner with categories
- [x] Google Maps embed on contact page
- [x] Privacy Policy + Terms pages
- [x] Operating hours throughout site
- [x] Mobile-responsive (hamburger nav, carousel, stacked layouts)
- [x] Grayscale palette with orange accent
- [ ] Custom domain (wellnesscenter.cellpowerx.com) — waiting CNAME
- [ ] Google Places API for dynamic reviews
- [ ] GA4 integration (cookie consent ready)
- [ ] Contact form backend (CF Worker → email)
- [x] Schema.org structured data (LocalBusiness)
- [ ] WhatsApp chat solution

## Decisions Log

| Date | Decision |
|------|----------|
| 2026-03-25 | Design system approved: Mulish + Inter, extended wellness palette, 36px radii |
| 2026-03-25 | 4-page scope + legal pages |
| 2026-03-25 | Bilingual EN + PT, EN as default |
| 2026-03-25 | No prices on site |
| 2026-03-25 | Scheduling app built in parallel, site launches with contact form |
| 2026-03-25 | Astro + GSAP + Phosphor Icons stack |
| 2026-03-26 | Header aligned with cellpowerx.com — adaptive glassmorphism, Inter nav links |
| 2026-03-26 | Nav font changed to Inter (not uppercase) to match cellpowerx.com |
| 2026-03-26 | "Treatments" renamed to "Services" (legal compliance) |
| 2026-03-26 | Service order: SLM Wave, NanoPulse, Infrared, TimeWaver |
| 2026-03-26 | Palette shifted to grayscale — orange as sole accent colour |
| 2026-03-26 | Block radius reduced from 36px to 18px |
| 2026-03-26 | Max width set to 1440px (aligned with cellpowerx.com) |
| 2026-03-26 | Year corrected from 2005 to 2009 |
| 2026-03-26 | Footer redesigned: 3-column with newsletter + consent checkbox + hours |
| 2026-03-26 | Newsletter connected to Brevo list #19 via Cloudflare Worker |
| 2026-03-26 | GDPR cookie banner implemented with analytics/marketing categories |
| 2026-03-26 | Google Reviews: manual widget (4.9★, 15 reviews), dynamic API pending |
| 2026-03-26 | WhatsApp widget created but disabled — needs proper chat solution |
| 2026-03-26 | Judge.me not viable (Shopify-only since 2026) |
| 2026-03-26 | Custom domain: wellnesscenter.cellpowerx.com (CNAME pending from IT) |
| 2026-03-26 | Phosphor Icons switched to Light weight |
| 2026-03-26 | Social icons in footer + mobile menu (Instagram, Facebook, YouTube) |
| 2026-03-26 | Schema.org LocalBusiness structured data implemented |
| 2026-03-26 | "Our Science" page added — cellular bioelectrics educational content |
| 2026-03-26 | Header sits above hero (not overlapping) — margin-top approach |
| 2026-03-26 | Em-dashes (—) replaced with hyphens (-) across all content |
