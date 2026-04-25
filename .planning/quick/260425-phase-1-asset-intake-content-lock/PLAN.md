---
status: complete
created_at: "2026-04-25"
task: "Phase 1 asset intake and content lock"
entrypoint: "/gsd-quick"
---

# Plan: Phase 1 Asset Intake and Content Lock

## Goal

Prepare the redesign asset base so the next visual phases can move quickly without relying on temporary Figma URLs for product imagery.

## Scope

- Keep existing Gamio copy unchanged.
- Use the exact complete Originals thumbnails downloaded by the user.
- Keep Hogamba and Prediction Arena assets in `public/images`.
- Update page constants and product card rendering to prefer stable local assets.
- Verify the app still builds.

## Acceptance

- Originals cards use full thumbnail PNGs including backgrounds and titles.
- Asset paths are organized under `public/images/{originals,hogamba,prediction-arena}`.
- Production build passes.

## Completed

- Wired Originals cards to `plinko-thumbnail.png`, `mines-thumbnail.png`, `chicken-thumbnail.png`, and `dice-thumbnail.png`.
- Removed the duplicate card overlays/titles from the Originals render so the exact thumbnail exports display as designed.
- Preserved current Gamio copy.
- Verified with `npm.cmd run build`.
