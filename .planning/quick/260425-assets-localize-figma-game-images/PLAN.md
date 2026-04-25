---
status: complete
created_at: "2026-04-25"
task: "Localize Figma game images into public/images folders"
entrypoint: "/gsd-quick"
---

# Plan: Localize Figma Game Images

## Goal

Move existing Hogamba files into `public/images/hogamba`, download the requested Figma asset images for Originals, Prediction Arena, and the missing Hogamba mascot, then update the site constants to use stable local paths.

## Completed

- Created `public/images/originals`.
- Created `public/images/hogamba`.
- Created `public/images/prediction-arena`.
- Moved existing Hogamba assets into the new folder.
- Downloaded requested Figma assets before temporary MCP links expire.
- Updated `app/page.tsx` constants to use local paths.
- Switched the Hogamba visual to the real mascot asset from node `161:33806`.
- Verified with `npm.cmd run build`.
