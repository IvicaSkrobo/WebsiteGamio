---
status: complete
created_at: "2026-04-25"
task: "Research and plan full-site Gamio redesign"
entrypoint: "/gsd-quick --discuss --research"
---

# Full-Site Redesign Research

## Objective

Redesign the Gamio landing page from the ground up while preserving the current Gamio-specific copy and using Gamio-owned game visuals wherever product imagery is needed.

The new direction should feel premium, fluid, and game-native, but not overstimulating. Operators should quickly understand:

- Gamio builds prediction arenas, instant games, and multiplayer experiences.
- Gamio products are live, visual, and retention-oriented.
- Gamio is credible enough for regulated operators.
- The next action is to contact Gamio.

## Current Site Findings

The current page already has usable messaging:

- Hero: "Gamio" and "Game & Gain"
- Positioning line: "We make things you actually want to play..."
- Product breadth: prediction arenas, instant games, multiplayer chaos
- Market credibility: Belgium, Poland, Romania, Greece, Turkey, Brazil
- Product names: Originals, Hogamba, Gamio Prediction Arena
- Capabilities: F2P engagement, RNG systems, affiliate/referral systems, analytics, streaming-ready software, whitelabel solutions
- CTA: hello@gamio.io / Get in touch

The current design problems:

- Sections feel like separate Figma compositions rather than one directed story.
- Motion is scattered: several things can animate without a clear focal hierarchy.
- The hero does not yet show a concrete product/game moment in the first viewport.
- Product sections rely on card/panel layouts that feel more like a portfolio grid than a premium game platform.
- Remote Figma assets are fragile; owned/local product images should become the visual core.
- Mobile is still a risk area, especially pinned/scroll-driven interactions.

## Industry References

### iGaming and Game Provider Sites

BGaming uses a deep content system: game categories, upcoming releases, featured games, operator benefits, partner proof, promo tools, awards, news, FAQ, and clear "Contact us" paths. It strongly foregrounds game art and operator-facing proof: 3,000+ clients, 250+ games, certifications, and promotional tooling.

Useful takeaways:

- Use real game visuals as the main credibility layer.
- Put operator value next to product visuals, not in isolated text blocks.
- Show portfolio breadth through a horizontal or editorial product system, not only equal cards.
- Add proof beats: markets, systems, tools, metrics, partner readiness.

Source: https://bgaming.com/

GAMOMAT keeps the homepage direct and game-led: a strong headline, featured games, responsibility, newsletter, news, and clear games navigation.

Useful takeaways:

- A B2B game producer can still feel playful if the page is anchored by real game titles.
- News/updates are less important for this static landing page than strong product modules.
- "Explore games" style CTAs work well after the visitor sees product depth.

Source: https://gamomat.com/

Hacksaw Group's investor site is more corporate, but its positioning is useful: "B2B technology platform and game development company", scalable/modular platform, rapid development and distribution, and coverage across the B2B iGaming value chain.

Useful takeaways:

- Gamio should make the platform/system layer visible, not just the games.
- "Modular", "scalable", "distribution", and "operator integration" can be communicated visually through capability modules.

Source: https://www.hacksawgroup.com/en/

### Gaming, Web3, and Interactive Brand Sites

Zentry is highly immersive: large typographic chapters, cinematic scroll, product universe framing, sound toggle, trailer CTA, and a strong "metagame" narrative.

Useful takeaways:

- Use chapter-like scroll sections with one strong idea per viewport.
- Product universe framing fits Gamio: Originals, Hogamba, Prediction Arena, and supporting systems.
- Repetition can be stylish, but for Gamio it should be calmer and more operator-focused.

Sources:

- https://zentry.com/
- https://www.zentry.world/

Lusion/Awwwards WebGL references validate an immersive 3D/interaction vocabulary: WebGL, Three.js, scroll navigation, mouse interaction, and animation are common in top interactive studio sites.

Useful takeaways:

- A premium interactive site does not need many moving things at once; it needs one controlled focal animation at a time.
- Gamio can use GSAP/ScrollTrigger and light CSS/3D layers without adding a heavy WebGL dependency unless the design truly needs it.

Sources:

- https://www.awwwards.com/sites/lusion
- https://www.awwwards.com/awwwards/collections/webgl/
- https://www.awwwards.com/awwwards/collections/games/

### Animation and Performance Standards

GSAP `matchMedia()` is the right pattern for responsive animation setup because desktop-only animation can be automatically reverted when media queries stop matching. This matches the repo convention and should stay.

Source: https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29

ScrollTrigger is suitable for scroll-based reveals, scrubbed product transitions, and pinned desktop sequences. It should be used for a small number of large narrative moments, not every decorative element.

Source: https://gsap.com/docs/v3/Plugins/ScrollTrigger/

Animation performance should favor `transform` and `opacity`; layout and paint-heavy properties should not be animated. This matters especially for product art and mobile.

Source: https://web.dev/animations-and-performance/

The redesign must support `prefers-reduced-motion` so nonessential motion can be removed or replaced.

Source: https://mdn2.netlify.app/en-US/docs/Web/CSS/%40media/prefers-reduced-motion

## Recommended Creative Direction

Use a "playable operator showcase" concept:

- The page feels like moving through a dark premium game lobby.
- Each section reveals one product capability, anchored by Gamio's own screenshots/renders.
- Motion behaves like a camera system: slide, focus, depth, reveal, then rest.
- Orange remains the brand accent, but the palette expands with product-specific highlights:
  - Originals: magenta/red neon
  - Hogamba: acid green/gold
  - Prediction Arena: electric blue/orange
  - Capabilities/platform: cool white, graphite, subtle cyan
- Keep dark theme and glass, but reduce generic blurred blobs.
- Avoid nested cards and marketing-page bloat.

## Proposed Page Story

1. Hero: "Gamio" / "Game & Gain"
   - First viewport should show Gamio-owned game visuals immediately.
   - Use a layered game carousel or stacked product screenshots behind/around the wordmark.
   - Keep live stats, but restyle them as compact HUD counters.
   - Primary motion: one slow hero depth/parallax layer, not many floating icons.

2. What We Build
   - Preserve current text: "We make things you actually want to play..." and "From prediction arenas..."
   - Present as a short editorial transition with three product chips: Prediction arenas, instant games, multiplayer chaos.
   - Use a single flowing background trail or grid that connects into the products.

3. Product Universe
   - Replace the current "Our Products" card grid with a stronger showcase.
   - One active product at a time, with large owned visual, short preserved description, and neighboring product thumbnails.
   - Products: Originals, Hogamba, Prediction Arena.
   - Desktop: scrubbed horizontal narrative or snap sections.
   - Mobile: stacked modules with no pinning.

4. Originals
   - Use real game imagery/screenshots for Plinko, Mines, Chicken, Dice.
   - Instead of four equal cards, show a large active game panel plus a compact selector.
   - Motion: selector changes active visual with clip/reveal, no constant card drift.

5. Hogamba
   - Treat as a marquee product.
   - Use the local game panel, mascot/rocket, and controls as a layered scene.
   - Motion: rocket/panel depth on scroll, controls slide in after the main visual settles.

6. Prediction Arena
   - Make this the most cinematic scroll sequence.
   - Show three beats: join, track, outcome.
   - Use one pinned desktop section if performance remains good.
   - Keep copy from current slides, but make it legible and tied to visuals.

7. Markets and Trust
   - Preserve regulated markets list.
   - Make this a calm credibility section after product energy.
   - Consider a clean map/table hybrid instead of the current generic network visual.

8. Capabilities
   - Keep the six existing capability texts.
   - Change from icon cards to an operator console/system grid.
   - Each capability should read like infrastructure behind the games.

9. Contact Footer
   - Preserve "Let's build something players remember.", email, Zagreb, Nicosia.
   - Make the footer a strong final CTA with a subdued product visual strip or game-token rail.

## Animation Rules

- One dominant motion per viewport.
- Use `data-reveal` for small entrance reveals only.
- Use GSAP timelines for product narrative moments.
- Desktop-only:
  - hero depth/parallax
  - product universe horizontal/snap sequence
  - Prediction Arena pinned sequence
- Mobile:
  - no pinned sections
  - no heavy mouse/parallax logic
  - simple fade/translate reveals
- Add `prefers-reduced-motion` guard:
  - disable scrubbed/pinned timelines
  - keep opacity-only reveals or no motion
- Animate only transform and opacity unless there is a measured reason.

## Technical Plan

- Keep Next.js static export, React, TypeScript, Tailwind v4, GSAP.
- Keep single-file `app/page.tsx` unless implementation becomes genuinely unmanageable.
- Replace fragile remote Figma product imagery with local/owned files under `public/`.
- Keep asset URL constants at the top of `page.tsx`; add local owned asset constants there too.
- Add section-level data attributes/classes for animation targeting.
- Keep GSAP in `useEffect` with `gsap.context()` and `gsap.matchMedia()`.
- Add a reduced-motion media query in CSS and a GSAP motion guard in JS.
- Avoid adding Three.js unless a concrete 3D scene is required after assets are available.

## Asset Requests From User

Needed before final visual implementation:

- Screenshots/renders of Gamio Originals games: Plinko, Mines, Chicken, Dice.
- Hogamba final game interface, rocket/mascot, and controls if newer than current local assets.
- Prediction Arena screenshots or mockups for entry, live tracking, and outcome states.
- Any logo/brand export that should replace current Figma API links.

Implementation can start with existing local Hogamba assets and current remote/fallback art, then swap to owned assets as soon as they arrive.

## Risks

- Full redesign in the existing 1,300+ line `page.tsx` may become hard to maintain; still follow repo convention initially.
- Remote Figma URLs can fail at runtime; local owned assets should be prioritized.
- Pinned scroll can feel great on desktop and terrible on mobile; all pinned logic must be desktop-only.
- Too many glows/gradients will make the site feel generic. Product visuals should carry the page.
- Adding WebGL/Three.js without a strong need may hurt performance and delivery speed.

## Success Criteria

- First viewport immediately communicates Gamio as a game/product company.
- Current Gamio copy is preserved or only lightly repositioned.
- Product visuals are larger, more concrete, and preferably owned by Gamio.
- Each section has a clear focal point and one motion idea.
- Mobile has no horizontal overflow and no pinned-scroll jank.
- `npm run build` passes and static export remains valid.
- Lighthouse/mobile performance remains acceptable after motion is added.
