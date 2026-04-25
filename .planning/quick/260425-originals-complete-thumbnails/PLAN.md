---
status: complete
created_at: "2026-04-25"
task: "Export complete Originals thumbnails from Figma"
entrypoint: "/gsd-quick"
---

# Plan: Export Complete Originals Thumbnails

## Goal

Replace the partial Originals object assets with exact full-tile thumbnail exports from Figma, including each tile background, overlays, and title treatment.

## Steps

- Export the four Figma tile nodes for Plinko, Mines, Chicken, and Dice.
- Save them under `public/images/originals`.
- Update `app/page.tsx` so the Originals section uses the complete thumbnail PNGs.
- Verify with a production build.

## Completed

- User provided the four complete thumbnail exports.
- Saved under `public/images/originals` as `plinko-thumbnail.png`, `mines-thumbnail.png`, `chicken-thumbnail.png`, and `dice-thumbnail.png`.
- Wired the Originals cards to those complete thumbnails in Phase 1.
