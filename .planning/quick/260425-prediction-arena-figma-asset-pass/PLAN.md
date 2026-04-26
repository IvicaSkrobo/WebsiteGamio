---
status: complete
created_at: "2026-04-25"
task: "Prediction Arena Figma asset pass"
entrypoint: "/gsd-quick"
---

# Plan: Prediction Arena Figma Asset Pass

## Goal

Inspect the provided Prediction Arena Figma node and use any stronger exportable artwork in the Gamio site.

## Scope

- Inspect the provided Figma node: `13263:46067`.
- Identify exportable image/frame candidates for Prediction Arena.
- Localize useful assets under `public/images/prediction-arena` when possible.
- Wire the best candidate into the Prediction Arena section without regressing the desktop/mobile composition.
- Verify with build and localhost.

## Acceptance

- Prediction Arena uses stronger real artwork if available.
- Any new assets are local, not hotlinked.
- Build passes.
