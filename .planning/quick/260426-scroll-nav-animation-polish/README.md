# Scroll Nav Animation Polish

Date: 2026-04-26

## Summary

Polished issues found during live browser review around navigation labels, anchored section positions, Prediction Arena sizing, contact email, and scroll reveal synchronization.

## Changes

- Replaced `hello@gamio.io` with `socials@gamio.gg` in desktop nav, mobile nav, footer email, and footer CTA mail links.
- Changed the navbar label from `Reach` to `Markets`.
- Added section-specific scroll offsets for Markets, Originals, Hogamba, and Prediction Arena so fixed navbar navigation lands cleaner.
- Kept Originals anchor behavior close to the current accepted position.
- Moved Hogamba only slightly higher relative to navbar navigation.
- Reduced Prediction Arena vertical padding, image width, top spacing, and fade height so the composition fits better in one screen.
- Reworked GSAP reveal behavior so each `data-motion-section` reveals its `[data-reveal]` children through one coordinated timeline instead of competing individual/card/visual triggers.

## Verification

- `npm.cmd run build` passes.
