# Roadmap: Gamio Website

## Overview

A fully animated, dark-themed marketing landing page for Gamio, built with Next.js static export, Tailwind CSS, and GSAP. The journey moves from project foundation through all static sections, then layers in animations and interactivity, then ensures the full mobile experience, and finally polishes to pixel-perfect fidelity.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - Next.js project setup, Tailwind config, design tokens, fonts, and CSS variables from Figma
- [x] **Phase 2: Static Sections** - All visible sections built without animation: nav, hero structure, content, products, arena, capabilities, footer
- [x] **Phase 3: Animations & Interactions** - GSAP scroll triggers, parallax mouse effect, count-up stats, idle float loops, hover states
- [ ] **Phase 4: Responsive & Mobile** - Mobile layouts, hamburger nav, hero icon repositioning, 2×2 product grid
- [ ] **Phase 5: Polish & QA** - Cross-browser checks, performance audit, pixel-perfect final pass against Figma

## Phase Details

### Phase 1: Foundation
**Goal**: The project environment is running locally and all design system tokens are in place so every subsequent section can be built without configuration detours
**Depends on**: Nothing (first phase)
**Requirements**: SET-01, SET-02, SET-03
**Success Criteria** (what must be TRUE):
  1. `npm run dev` starts a local Next.js server with no errors
  2. `next export` (or Vercel deploy) produces a fully static build with no server-side runtime
  3. The dark background (#0a0a0a), orange accent color, and bold typography from Figma are visible in the browser via CSS variables and Tailwind config
**Plans**: TBD
**UI hint**: yes

### Phase 2: Static Sections
**Goal**: Every section of the single-page site is visible and correctly structured at 1440px desktop width — content, layout, and visual hierarchy matching Figma, with no animations yet
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04, HERO-01, HERO-02, HERO-03, HERO-04, CONT-01, CONT-02, CONT-03, PROD-01, PROD-02, PROD-03, ARENA-01, CAP-01, CAP-02, CAP-03, FOOT-01, FOOT-02, FOOT-03, FOOT-04, FOOT-05
**Success Criteria** (what must be TRUE):
  1. Visitor sees a fixed nav bar with Gamio logo and all 6 section links; clicking any link smooth-scrolls to the target section; the active link highlights on scroll
  2. Visitor sees the hero with the large metallic "Gamio" heading, "Game & Gain" subtitle, 5 floating 3D game icons, and the live stats bar showing player count and total transactions
  3. Visitor can read all three content sections (tagline, platform description with network image, and the regulated markets section listing Belgium, Poland, Romania, Greece, Turkey, and Brazil)
  4. Visitor sees the "Our Products" section with ORIGINALS badge, 4 game cards (PLINKO, MINES, CHICKEN, DICE), and the game UI preview showing the 10.01x multiplier display and BET controls
  5. Visitor sees the Prediction Arena section with phone/tablet mockups, the 2×3 capabilities grid with all 6 capability cards, and the complete footer with Zagreb/Nicosia offices, contact email, GET IN TOUCH CTA, copyright notice, and decorative GAMIO background text
**Plans**: TBD
**UI hint**: yes

### Phase 3: Animations & Interactions
**Goal**: The site feels alive — every section animates in on scroll, the hero responds to mouse movement, stats count up on load, icons float continuously, and interactive elements have polished hover feedback
**Depends on**: Phase 2
**Requirements**: HERO-05, HERO-06, PROD-04, ANIM-01, ANIM-02, ANIM-03
**Success Criteria** (what must be TRUE):
  1. Scrolling into any section triggers a GSAP fade/slide-in entrance animation
  2. Moving the mouse over the hero causes the 5 floating icons to shift position with the cursor (parallax effect)
  3. Hero stats numbers count up from zero when the page first loads
  4. Floating icons continuously drift up and down with a subtle idle loop animation even when the mouse is still
  5. Hovering a game card or capability card produces a visible scale or glow transition
**Plans**: TBD
**UI hint**: yes

### Phase 4: Responsive & Mobile
**Goal**: The full experience works correctly on 375px+ mobile screens — layout is single-column, navigation is accessible via hamburger menu, and the hero adapts gracefully
**Depends on**: Phase 3
**Requirements**: RESP-01, RESP-02, RESP-03, RESP-04
**Success Criteria** (what must be TRUE):
  1. On a 375px viewport, all sections stack in a single column with no horizontal overflow
  2. The navigation collapses to a hamburger icon; tapping it opens and closes the menu
  3. The hero floating icons are hidden or repositioned so they do not obscure text on mobile
  4. The four game product cards display in a 2×2 grid on mobile
**Plans**: TBD
**UI hint**: yes

### Phase 5: Polish & QA
**Goal**: The site is production-ready — pixel-perfect against Figma at 1440px, performant on mobile, and rendering correctly across modern browsers
**Depends on**: Phase 4
**Requirements**: (no unassigned v1 requirements — this phase covers quality-of-finish goals implicit in all prior requirements)
**Success Criteria** (what must be TRUE):
  1. Visual diff against Figma at 1440px shows no layout or color deviations
  2. Lighthouse performance score on mobile is 80+ with no animation jank
  3. The site renders correctly in Chrome, Firefox, and Safari
**Plans**: TBD
**UI hint**: yes

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/2 | ✅ Complete | 2026-04-22 |
| 2. Static Sections | 1/1 | ✅ Complete | 2026-04-22 |
| 3. Animations & Interactions | 1/1 | ✅ Complete | 2026-04-22 |
| 4. Responsive & Mobile | 0/? | In progress | - |
| 5. Polish & QA | 0/? | Not started | - |
