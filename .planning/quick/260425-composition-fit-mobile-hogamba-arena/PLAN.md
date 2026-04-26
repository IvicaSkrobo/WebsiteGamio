---
status: in-progress
created_at: "2026-04-25"
task: "Fix mobile composition for hero, Hogamba and Prediction Arena"
entrypoint: "/gsd-quick"
---

# Plan: Fix Mobile Composition for Hero, Hogamba and Prediction Arena

## Goal

Keep the desktop hero direction, but make smaller/aspect-ratio layouts feel intentionally composed instead of stacked screenshots.

## Scope

- Preserve the desktop hero/nav treatment.
- Replace the mobile hero card trio with a layered mini-scene using transparent Hogamba/avatar artwork.
- Rebuild the Hogamba section around one integrated game scene rather than separate image stacks.
- Add compact mobile Prediction Arena panels and keep the desktop pinned track for large screens.
- Remove excessive mobile whitespace/cropping.
- Verify with build and localhost.

## Acceptance

- Small-screen hero uses transparent character artwork without a boxed background.
- Hogamba assets feel like one combined scene.
- Prediction Arena mobile no longer shows giant empty panels.
- Desktop hero remains unchanged.
- Build passes.
