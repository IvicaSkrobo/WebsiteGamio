---
status: complete
completed_at: "2026-04-25"
task: "Remove placeholder hero icons"
---

# Summary

Removed the desktop hero floating-icon layer that could show simplified placeholder-style SVG art.

The hero now relies on the real localized product imagery already in the composition: Originals thumbnails, Hogamba mascot/player artwork and Prediction Arena tablet imagery. The generic hero icon constants and idle animation refs were removed from the active code path.

Verification passed with `npm.cmd run build`, and localhost returned `200`.
