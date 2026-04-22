<!-- GSD:project-start source:PROJECT.md -->
## Project

**Gamio Website**

Gamio is a B2B iGaming platform company ("Game & Gain") that builds prediction arenas, instant games, and multiplayer experiences. This project is a marketing/landing website that showcases Gamio's products and capabilities to potential operator clients. The site is a fully animated, dark-themed single-page experience designed to convert operators into clients.

**Core Value:** A visually stunning, animated landing page that makes operators immediately understand what Gamio builds and want to get in touch.

### Constraints

- **Tech Stack**: Static site (HTML/CSS/JS or Next.js static export) — no backend required
- **Design Fidelity**: Must match Figma design closely — dark theme, orange accents, glass effects
- **Animations**: GSAP or CSS animations for scroll effects and parallax
- **Performance**: Animations must not degrade mobile performance
- **Assets**: 3D game icons (Bomb, Coin, Heart, Dice, Star) — use 3D renders or CSS/SVG approximations
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

- **Next.js 16.2.4** — App Router, static export (`output: "export"`) to `out/`
- **React 19.2.4** + **TypeScript 5** — single page component in `app/page.tsx`
- **Tailwind CSS v4.2.4** + **PostCSS 8.5.10** — utility-first, custom design tokens via `@theme` in `globals.css`
- **GSAP 3.15.0** with ScrollTrigger — all animations wired in `useEffect` via `gsap.context()`
- **Fonts**: Sora (Google Fonts), Kumbh Sans (local TTF in `app/fonts/`), Nohemi (WOFF, brand display font in `nohemi-font-family/`)
- **Assets**: All images served via Figma API URLs (no local image files except placeholder SVGs in `public/`)
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

- **Single-file component**: all sections live in `app/page.tsx` (~1,300 lines) — avoid splitting unless necessary
- **Animations**: register via `gsap.context()` in `useEffect`; clean up with `ctx.revert()` on unmount; guard desktop-only sequences with `gsap.matchMedia()` at `(min-width: 1024px)`
- **Scroll reveals**: add `data-reveal` attribute to elements; GSAP picks these up automatically (fade + slide-up, `once: true`)
- **Design tokens**: colours, spacing, and font sizes live as CSS variables in `app/globals.css` under `:root` and `@theme`; reference via `var(--gamio-*)` or Tailwind arbitrary values
- **Responsive**: mobile-first Tailwind classes; `lg:` prefix for desktop overrides
- **Asset URLs**: Figma API URLs are hardcoded constants at the top of `page.tsx`; do not inline them in JSX
- **cn() helper**: use for conditional className composition
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Single-page marketing site — no routing, no backend, no API.

```
app/
  layout.tsx      — root layout (fonts, metadata, html/body wrapper)
  page.tsx        — entire site: nav + all 7 sections + footer (~1,300 lines)
  globals.css     — design tokens (@theme, :root), base resets
  fonts/          — local Kumbh Sans TTF files
public/           — static SVG placeholders
nohemi-font-family/ — Nohemi WOFF files
out/              — static build output (git-ignored)
.planning/        — GSD project planning (roadmap, phases, state)
```

**Section order** (anchor IDs): `#about` → `#markets` → `#originals` → `#hogamba` → `#prediction-arena` → `#capabilities` → footer

**Animation phases** (in useEffect):
1. ScrollTrigger setup + `[data-reveal]` batch reveals
2. Stats count-up on scroll entry
3. Floating icon idle drift loops
4. Hero mouse parallax
5. Desktop pinned scroll sequences (Hogamba + Prediction Arena)
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
