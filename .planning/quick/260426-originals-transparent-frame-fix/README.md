# Originals Transparent Frame Fix

Date: 2026-04-26

## Summary

Adjusted the Originals featured game preview after visual review showed the light gradient and white inner border competing with the image frame.

## Changes

- Removed the embedded dark background rectangle from `OriginalsChickenFullGame Graphic.svg`.
- Removed the embedded white SVG stroke that created the extra border around the image.
- Changed the page image render from `object-cover` to `object-contain` so the transparent art can sit inside the frame naturally.
- Replaced the plain pale image backing with a subtler dark/pink radial treatment.

## Verification

- `npm.cmd run build` passes.
- In-app browser screenshot verification was blocked by the browser runtime requiring a newer Node version than the available local Node runtime.
