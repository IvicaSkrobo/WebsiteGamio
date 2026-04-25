---
status: complete
created_at: "2026-04-25"
task: "Phase 2 visual system reset"
entrypoint: "/gsd-quick"
---

# Plan: Phase 2 Visual System Reset

## Goal

Create the shared visual foundation for the redesign before rebuilding sections.

## Scope

- Expand Gamio CSS tokens for graphite backgrounds, brand orange, product accents, glass surfaces, HUD surfaces, and focus states.
- Add reusable component classes for future hero/product redesign work.
- Add reduced-motion base behavior.
- Preserve current page copy and layout behavior.
- Verify with production build.

## Acceptance

- `app/globals.css` exposes the new visual system tokens.
- Existing Tailwind token names keep working.
- Build passes.

## Completed

- Expanded Gamio tokens for graphite backgrounds, raised panels, brand orange, product accents, glass/HUD surfaces, grid lines, and focus state.
- Added reusable component classes: `gamio-surface`, `gamio-hud`, `gamio-section-label`, `gamio-product-frame`, and `gamio-product-rail`.
- Added reduced-motion defaults.
- Verified with `npm.cmd run build`.
