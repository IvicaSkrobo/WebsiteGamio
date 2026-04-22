---
status: complete
quick_id: 260423-2dt
date: 2026-04-23
---

# Quick Task 260423-2dt: Redesign Hogamba section to match Figma single-view layout

## What was done

**Task 1 — Remove dead carousel scaffolding (commit b415fbb)**
- Deleted `magarbaSlides` const (3-slide array)
- Removed 4 unused refs: magarbaSectionRef, magarbaCopyRef, magarbaTrackRef, magarbaProgressRef
- Removed the GSAP pin/scrub animation block for the magarba carousel
- Removed unused `OriginalsPreviewFallback` component (originalsCashoutAsset block was removed in previous task)

**Task 2 — Added HogambaGameFallback and HogambaMascotFallback**
- `HogambaGameFallback`: CSS rocket crash game panel — dark navy bg, win toast, "10.01x" multiplier, balance, bet input row
- `HogambaMascotFallback`: CSS balloon dome with vertical black stripes + teal-eyed creature body below

**Task 3 — Replaced Hogamba section JSX**
- Swapped 3-slide carousel for single static split-panel layout
- Desktop: game panel left (~55%) + mascot right (~45%) in flex row
- Mobile: stacked vertically
- Full-width bottom controls: PLACE BET (green) + CASHOUT (orange) buttons, Auto bet/cashout labels

## Result

TypeScript compiles with zero errors. No magarba* or OriginalsPreviewFallback identifiers remain. The Hogamba section now matches the Figma single-view design structure.

Note: Real Figma asset UUIDs for the game screenshot and mascot are not yet wired — the CSS fallbacks are rendering directly. When the Figma MCP integration is available, add hogambaGameAsset and hogambaMascotAsset constants and wrap the components in AssetImage.
