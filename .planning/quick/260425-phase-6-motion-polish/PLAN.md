---
status: in-progress
created_at: "2026-04-25"
task: "Phase 6 motion polish"
entrypoint: "/gsd-quick"
---

# Plan: Phase 6 Motion Polish

## Goal

Give the redesigned product-led sections a more professional transition and animation layer without making mobile performance heavier.

## Scope

- Keep the existing GSAP architecture in `app/page.tsx`.
- Add scoped motion attributes to product sections instead of broad selectors.
- Add desktop-only product-scene motion for Originals, Hogamba, Prediction Arena support cards and Capabilities.
- Preserve reduced-motion behavior.
- Verify with production build and localhost check.

## Acceptance

- Product sections have subtle scene movement beyond basic reveal.
- Desktop motion uses transform/opacity only.
- Mobile remains simple and avoids pinned/heavy sequences.
- Build passes.
