---
status: complete
created_at: "2026-04-25"
task: "Phase 3 hero and What We Build transition redesign"
entrypoint: "/gsd-quick"
---

# Plan: Phase 3 Hero and What We Build Transition Redesign

## Goal

Create the first redesigned slice of the site: a product-led hero and a calmer "What We Build" transition that establishes the new visual language.

## Scope

- Preserve existing Gamio copy.
- Make real product/game imagery visible in the first viewport.
- Restyle hero stats as compact HUD counters.
- Reuse existing GSAP reveal/count/parallax setup.
- Keep later product sections mostly unchanged.
- Verify with production build.

## Acceptance

- Hero immediately shows Gamio product visuals.
- "Gamio" and "Game & Gain" remain the central brand signal.
- "We make things..." and "From prediction arenas..." copy are preserved.
- Mobile layout stacks without obvious overlap.
- Production build passes.

## Completed

- Reworked the hero into a product-led first viewport using Originals thumbnails, the Hogamba mascot, and Prediction Arena tablet imagery.
- Restyled the hero counters as compact HUD cards using the Phase 2 visual system.
- Replaced the old Figma-panel transition with a "What we build" section that preserves both existing copy lines.
- Moved the broad product copy out of the Markets section so it is not duplicated.
- Verified with `npm.cmd run build`.
- Confirmed the existing dev server responds at `http://localhost:3000`.
