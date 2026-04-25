---
status: planned
created_at: "2026-04-25"
task: "Plan full-site Gamio redesign"
entrypoint: "/gsd-quick --discuss --research"
research: "./RESEARCH.md"
---

# Plan: Full-Site Gamio Redesign

## Goal

Rebuild the Gamio single-page marketing site into a premium, fluid, product-led experience while keeping the current Gamio text and replacing generic/fragile visuals with Gamio-owned game imagery wherever possible.

## Implementation Phases

### 1. Asset Intake and Content Lock

- Inventory current copy in `app/page.tsx`.
- Mark copy as preserve-by-default.
- Add local owned assets to `public/` once provided.
- Replace unstable remote product imagery with local constants at the top of `app/page.tsx`.
- Decide which existing fallback visuals remain temporary.

### 2. Visual System Reset

- Update `app/globals.css` tokens for the new direction:
  - deeper graphite background
  - brand orange
  - product accent colors
  - glass borders and HUD surfaces
- Remove generic decorative blob dependency where possible.
- Define reusable utility class patterns for HUD counters, product rails, section labels, and glass panels.

### 3. Page Structure Redesign

- Keep single-page structure and anchor IDs.
- Reframe the page into:
  - Hero
  - What We Build
  - Product Universe
  - Originals
  - Hogamba
  - Prediction Arena
  - Markets and Trust
  - Capabilities
  - Footer CTA
- Preserve existing nav labels unless a later copy pass changes them.

### 4. Product-Led Sections

- Build a large visual product showcase instead of equal-weight product cards.
- Originals: active game panel plus compact selector.
- Hogamba: layered local asset scene.
- Prediction Arena: three-beat visual story with progress.
- Markets: calmer credibility layout.
- Capabilities: operator console/system grid.

### 5. Motion Architecture

- Rework `useEffect` animation setup around clear groups:
  - global reveal batch
  - hero depth/parallax
  - product universe sequence
  - Hogamba scene sequence
  - Prediction Arena pinned desktop sequence
  - stats count-up
- Use `gsap.context()` and `gsap.matchMedia()`.
- Desktop-only for pinning and parallax.
- Add reduced-motion guard.
- Animate transform/opacity first.

### 6. Responsive Pass

- Mobile-first layout with no pinned sections.
- Collapse nav into a hamburger menu.
- Stack product modules.
- Ensure every visual has stable dimensions with aspect ratios.
- Verify no text/visual overlap at 375px, 768px, 1024px, and 1440px.

### 7. QA and Polish

- Run lint/build.
- Start local dev server and inspect in browser.
- Check desktop and mobile scroll behavior.
- Check reduced-motion behavior.
- Check static export output.
- Replace any remaining remote Figma URLs that render unreliably.

## Recommended First Implementation Slice

Start with a structural redesign of the hero plus the "What We Build" transition. This creates the new art direction and motion language without touching every section at once.

Files:

- `app/page.tsx`
- `app/globals.css`
- `public/*` for any provided assets

Acceptance:

- Hero uses product visuals as first-viewport signal.
- Existing hero/about copy is preserved.
- Stats become compact HUD counters.
- Motion is limited to one calm depth/parallax system on desktop.
- Mobile hero stacks cleanly without overlap.

## Open Questions

- Which owned game screenshots/renders should be considered final?
- Should the redesign keep the exact current section anchors for external links?
- Should contact remain mailto-only, or should there be a more operator-specific lead form later?
- Are operator logos/partner marks available for trust proof?
