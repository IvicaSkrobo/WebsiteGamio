---
status: complete
completed_at: "2026-04-25"
task: "Phase 6 motion polish"
---

# Summary

Completed a scoped motion polish pass for the product-led sections.

Added `data-motion-section`, `data-motion-visual`, `data-motion-card`, and `data-motion-float` hooks to the lower page modules, then wired a desktop-only GSAP layer that gives product visuals a softer entrance, cards a tighter stagger, and select floating artwork a subtle scrubbed parallax.

The existing reduced-motion guard remains in place, mobile avoids the new desktop-only motion layer, and the Prediction Arena pinned sequence is unchanged.

Verification passed with `npm.cmd run build`, and localhost returned `200`.
