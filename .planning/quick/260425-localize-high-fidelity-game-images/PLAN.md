---
status: complete
created_at: "2026-04-25"
task: "Localize high-fidelity game and app imagery"
entrypoint: "/gsd-quick"
---

# Plan: Localize High-Fidelity Game And App Imagery

## Goal

Remove direct Figma API image dependencies from the live page and replace placeholder-looking visuals with local, high-fidelity product/game/app imagery.

## Scope

- Audit all visible image constants in `app/page.tsx`.
- Replace Figma API URLs with local files under `public/images`.
- Prefer actual existing game/app captures and localized assets over CSS placeholder visuals.
- Add or generate local fallbacks only where no real product source exists.
- Verify build and visual output.

## Acceptance

- `app/page.tsx` no longer references `figma.com/api` image URLs.
- Hero, Originals, Hogamba, Prediction Arena, Markets/About, and Capabilities use local assets or deliberate CSS UI where appropriate.
- Build passes.
