# Gamio Website

## What This Is

Gamio ("Game & Gain") is a game/product studio that builds prediction arenas, instant games, multiplayer experiences and player-facing systems. This project is a public company/product showcase for people discovering Gamio through the team, LinkedIn, events or shared links. The site should make people understand what Gamio makes and what the products feel like without exposing the internal buyer/sales context too directly.

## Core Value

A visually stunning, animated single-page showcase that makes people quickly understand who Gamio is, what it builds, and why the products and player moments are memorable.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Fixed navigation bar with Gamio logo and section links (About, Reach, Originals, Hogamba, Prediction arena, Capabilities)
- [ ] Hero section: large "Gamio" metallic heading, floating 3D game icons, "Game & Gain" tagline, live stats bar (players + transactions)
- [ ] About section: dark background, large centered tagline text
- [ ] Product identity section: descriptive text + product/game visuals
- [ ] "Where our work travels" section: public reach and product context (Belgium, Poland, Romania, Greece, Turkey, Brazil)
- [ ] "Our Products" section: PLINKO, MINES, CHICKEN, DICE game cards on dark/purple gradient
- [ ] Product showcase section: game UI preview with multiplier display and bet controls
- [ ] "Gamio Prediction Arena" section: 3D phone/tablet mockups
- [ ] "Capabilities & supporting systems" section: 2×3 grid (F2P engagement, Scalable RNG, Affiliate & referral, Market analytics, Streaming-ready software, Enterprise solutions)
- [ ] Footer: office locations (Zagreb, Nicosia), contact email, GET IN TOUCH CTA, copyright
- [ ] Scroll-triggered animations on all sections (fade-in, slide-up)
- [ ] Parallax mouse effect on hero (game icons move with cursor)
- [ ] Responsive mobile layout (single-column, 3D asset above each heading)
- [ ] Glass effect cards throughout

### Out of Scope

- Backend/CMS — static site only, no dynamic content
- User authentication — marketing page, no login
- Real-time live stats — placeholder/animated counters only
- Multi-page routing — single page with anchor navigation

## Context

- Design source: Figma file "Gamio web" — inspected directly via browser
- Design source is now being verified directly via Figma MCP screenshots, metadata, and design-context extraction during implementation.
- Design dimensions: 1440px desktop, mobile responsive
- Color palette: near-black background (#0a0a0a range), orange/amber primary accent, white text
- Typography: `Nohemi` for display elements and `Kumbh Sans` for nav/body text
- Effect styles: "Icons glass effect" — frosted glass cards
- Text styles: "Typography Scale" design system
- Animation notes from Figma comments:
  - Mouse parallax on hero — icons move left as page scrolls
  - Sections animate in on scroll
  - Mobile: each segment has generated 3D asset above heading
- Brand: "Peppercorn" theme detected in Figma modes

## Constraints

- **Tech Stack**: Static site (HTML/CSS/JS or Next.js static export) — no backend required
- **Design Fidelity**: Must match Figma design closely — dark theme, orange accents, glass effects
- **Animations**: GSAP or CSS animations for scroll effects and parallax
- **Performance**: Animations must not degrade mobile performance
- **Assets**: 3D game icons (Bomb, Coin, Heart, Dice, Star) — use 3D renders or CSS/SVG approximations

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js static export | SSR not needed, but React component model simplifies animation wiring | — Pending |
| GSAP for animations | Industry standard for scroll-triggered animations, parallax, timeline control | — Pending |
| Tailwind CSS | Rapid utility styling matches dark theme token approach from Figma | — Pending |
| Local `Nohemi` + `Kumbh Sans` | Match the actual Figma typography and avoid font-metric drift during pixel alignment | Adopted 2026-04-22 |
| Second section owns hero mask | The `About Us` section shape should cut into the hero rather than a separate hero arc layer faking the transition | Adopted 2026-04-22 |
| Desktop-first Figma refinement before mobile | The highest-visibility desktop sections are being tightened section-by-section before Phase 4 mobile adaptation | In progress 2026-04-22 |
| Public showcase positioning | User clarified the page should explain Gamio for company/LinkedIn discovery and keep buyer/sales context quiet, not read like a direct B2B operator sales page | Adopted 2026-04-25 |

---
## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-22 after desktop Figma refinement pass*
