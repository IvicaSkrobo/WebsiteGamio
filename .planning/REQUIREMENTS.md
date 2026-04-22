# Requirements: Gamio Website

**Defined:** 2026-04-22
**Core Value:** A visually stunning, animated landing page that makes operators immediately understand what Gamio builds and want to get in touch.

## v1 Requirements

### Setup

- [ ] **SET-01**: Next.js project initialized with Tailwind CSS, GSAP, and static export configured
- [ ] **SET-02**: Project deploys as a static site (next export or Vercel)
- [ ] **SET-03**: Dark theme base styles, font, and CSS variables match Figma design system

### Navigation

- [ ] **NAV-01**: Visitor sees a fixed navigation bar with the Gamio logo on all scroll positions
- [ ] **NAV-02**: Visitor sees 6 nav links: About, Markets, Originals, Magarba, Prediction arena, Capabilities
- [ ] **NAV-03**: Visitor can click a nav link and the page smooth-scrolls to the corresponding section
- [ ] **NAV-04**: Active nav link highlights based on current scroll position

### Hero

- [ ] **HERO-01**: Visitor sees "Gamio" as a large metallic/gradient heading on a dark orange-gradient background
- [ ] **HERO-02**: Visitor sees "Game & Gain" subtitle below the heading
- [ ] **HERO-03**: Visitor sees 5 floating 3D game icons (Heart, Coin, Bomb, Dice, Star) around the heading
- [ ] **HERO-04**: Visitor sees a stats bar showing "Live number of players: 1,879" and "Total transactions: €303,980.99"
- [ ] **HERO-05**: Stats numbers animate (count up) on page load
- [ ] **HERO-06**: Floating icons shift position as user moves the mouse (parallax effect)

### Content Sections

- [ ] **CONT-01**: Visitor sees "We make things you actually want to play — and yes, sometimes there's money involved." in a dark full-width section
- [ ] **CONT-02**: Visitor sees "From prediction arenas to instant games and multiplayer chaos, we build interactive stuff people come back to." alongside a 3D network visualization
- [ ] **CONT-03**: Visitor sees "Where do we operate?" heading with body text about regulated markets (Belgium, Poland, Romania, Greece, Turkey, Brazil)

### Products

- [ ] **PROD-01**: Visitor sees an "Our Products" section with "ORIGINALS" badge on a dark/purple gradient background
- [ ] **PROD-02**: Visitor sees 4 game cards: PLINKO, MINES, CHICKEN, DICE — each with a 3D icon and label
- [ ] **PROD-03**: Visitor sees a product showcase section with a game UI preview (10.01x multiplier display, BET controls)
- [ ] **PROD-04**: Game cards have hover states (scale/glow effect)

### Arena & Capabilities

- [ ] **ARENA-01**: Visitor sees a "Gamio Prediction Arena" section with 3D phone/tablet mockup images
- [ ] **CAP-01**: Visitor sees a "Capabilities & supporting systems" section with a 2×3 grid of 6 capability cards
- [ ] **CAP-02**: Capability cards show: F2P engagement, Scalable RNG systems, Affiliate & referral systems, Market analytics, Streaming-ready software, Enterprise solutions
- [ ] **CAP-03**: Each capability card has an orange circular icon, title, and brief description

### Footer

- [ ] **FOOT-01**: Visitor sees footer with office locations (Zagreb and Nicosia)
- [ ] **FOOT-02**: Visitor sees contact email link
- [ ] **FOOT-03**: Visitor sees a "→ GET IN TOUCH" CTA button with orange gradient styling
- [ ] **FOOT-04**: Visitor sees "Gamio. All Rights reserved." copyright notice
- [ ] **FOOT-05**: Visitor sees large "GAMIO" text in the footer background (decorative)

### Animations

- [ ] **ANIM-01**: Each section fades/slides in as visitor scrolls into view (GSAP ScrollTrigger)
- [ ] **ANIM-02**: Hero floating icons have idle floating animation (subtle up/down loop)
- [ ] **ANIM-03**: Capability cards and game cards have hover states with smooth transitions

### Responsive

- [ ] **RESP-01**: Layout is responsive on mobile (375px+) — single column, stacked sections
- [ ] **RESP-02**: Mobile nav collapses to hamburger menu
- [ ] **RESP-03**: Hero floating icons are hidden or repositioned on mobile
- [ ] **RESP-04**: Game product cards display in a 2×2 grid on mobile

## v2 Requirements

### Enhancements

- **ENH-01**: Real-time live player count via WebSocket or polling
- **ENH-02**: CMS-driven content (Sanity or Contentful) for editable text
- **ENH-03**: Video background in hero section
- **ENH-04**: Multi-language support (EN/HR)
- **ENH-05**: Contact form in footer (currently email link only)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend / API | Static marketing site — no server required |
| User authentication | No user accounts — B2B marketing page |
| Real-time data | Counters use static values with animation |
| Multi-page routing | Single page with anchor nav |
| E-commerce / pricing | Not part of marketing page scope |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SET-01 | Phase 1 | Pending |
| SET-02 | Phase 1 | Pending |
| SET-03 | Phase 1 | Pending |
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Pending |
| NAV-03 | Phase 2 | Pending |
| NAV-04 | Phase 2 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| HERO-03 | Phase 2 | Pending |
| HERO-04 | Phase 2 | Pending |
| HERO-05 | Phase 3 | Pending |
| HERO-06 | Phase 3 | Pending |
| CONT-01 | Phase 2 | Pending |
| CONT-02 | Phase 2 | Pending |
| CONT-03 | Phase 2 | Pending |
| PROD-01 | Phase 2 | Pending |
| PROD-02 | Phase 2 | Pending |
| PROD-03 | Phase 2 | Pending |
| PROD-04 | Phase 3 | Pending |
| ARENA-01 | Phase 2 | Pending |
| CAP-01 | Phase 2 | Pending |
| CAP-02 | Phase 2 | Pending |
| CAP-03 | Phase 2 | Pending |
| FOOT-01 | Phase 2 | Pending |
| FOOT-02 | Phase 2 | Pending |
| FOOT-03 | Phase 2 | Pending |
| FOOT-04 | Phase 2 | Pending |
| FOOT-05 | Phase 2 | Pending |
| ANIM-01 | Phase 3 | Pending |
| ANIM-02 | Phase 3 | Pending |
| ANIM-03 | Phase 3 | Pending |
| RESP-01 | Phase 4 | Pending |
| RESP-02 | Phase 4 | Pending |
| RESP-03 | Phase 4 | Pending |
| RESP-04 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 36 total
- Mapped to phases: 36
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-22*
*Last updated: 2026-04-22 after initial definition*
