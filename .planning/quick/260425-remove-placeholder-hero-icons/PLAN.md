---
status: in-progress
created_at: "2026-04-25"
task: "Remove placeholder hero icons"
entrypoint: "/gsd-quick"
---

# Plan: Remove Placeholder Hero Icons

## Goal

Ensure the hero and visible showcase areas use real Gamio/Hogamba/Prediction/Originals imagery rather than simplified placeholder-style SVG icons.

## Scope

- Remove the desktop floating icon layer from the hero.
- Keep the real product artwork currently used in the hero: Originals thumbnails, Hogamba mascot and Prediction Arena tablet.
- Preserve fallback components for non-hero emergency rendering, but prevent them from driving the hero look.
- Verify with build and localhost check.

## Acceptance

- Hero no longer shows generic parachute/board/fallback-looking icons.
- Desktop hero keeps the liked premium composition.
- Build passes.
