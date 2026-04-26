---
status: complete
completed_at: "2026-04-25"
task: "Visual repair for Originals, Hogamba, Prediction Arena, and Capabilities"
---

# Summary: Visual Repair Pass

## Completed

- Removed the heavy framed treatment around the small Originals thumbnails and switched them to edge-to-edge art tiles.
- Kept the Originals selector thumbnails small, but used the larger `OriginalsChickenFullGame Graphic.svg` as the featured image surface.
- Reworked the Markets media area into a cleaner two-up composition instead of the crowded mixed stack.
- Replaced the Hogamba collage with the full local `pchogamba.svg` and `mobilehogmaba.svg` viewport compositions.
- Removed the Prediction Arena slide track and rebuilt the section as one stable composed product frame.
- Simplified the Capabilities section by removing the faux window header and tightening the card layout.
- Swapped the `Our Products` selector previews to use the stronger full Chicken game art for all cards temporarily, per user direction.
- Rebuilt the Markets media block again as a single collage instead of nested framed screenshots.
- Tightened Hogamba to one stable viewport with a fixed aspect ratio and a light rocket accent instead of the broken tall mobile composition.
- Simplified Prediction Arena further into a centered heading plus one composed product scene, with the coin kept square to avoid aspect distortion.
- Opened the hero back up to full width on larger screens so the side void is reduced and the product thumbnails no longer tuck under the stats bar.
- Removed the stray Prediction Arena floating asset stack and kept the section to the actual core surfaces: tablet, chat, streamer, and odds card.

## Verification

- `npm.cmd run build` passed.
