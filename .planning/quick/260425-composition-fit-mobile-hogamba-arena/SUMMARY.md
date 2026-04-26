---
status: complete
completed_at: "2026-04-25"
task: "Fix mobile composition for hero, Hogamba and Prediction Arena"
---

# Summary

Reworked the awkward screenshot-like compositions into more intentional scenes.

The desktop hero/nav treatment was preserved, while the small-screen hero now uses a layered collage: Plinko card, Prediction Arena panel and transparent Hogamba mascot artwork without boxing the character in a separate background.

The Hogamba section now centers on one integrated scene: game panel, rocket, parachute/player artwork, transparent mascot and controls are layered together inside a single product frame. The separate image-stack treatment and extra operator-branding screenshot block were removed.

Prediction Arena now has mobile-specific compact panels instead of reusing the large desktop pinned track, which removes the empty black/white-space panels on smaller aspect ratios. The desktop pinned sequence remains desktop-only.

Verification passed with `npm.cmd run build`, and localhost returned `200`.
