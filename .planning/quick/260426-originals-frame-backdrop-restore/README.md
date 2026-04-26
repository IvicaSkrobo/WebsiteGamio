# Originals Frame Backdrop Restore

Date: 2026-04-26

## Summary

Adjusted the Originals featured preview after review of the selected Dice state.

## Changes

- Restored the embedded background rectangle and subtle white stroke inside the featured game SVG.
- Kept the outer Originals featured card glow consistent across all selected games.
- Used the Dice-style magenta underglow as the fixed treatment instead of changing it per active game accent.

## Verification

- `npm.cmd run build` passes.
