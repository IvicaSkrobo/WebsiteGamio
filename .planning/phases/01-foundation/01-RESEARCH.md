# Phase 01: Foundation - Research

**Researched:** 2026-04-22
**Domain:** Next.js static export + Tailwind CSS v4 + GSAP project scaffolding
**Confidence:** HIGH

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SET-01 | Next.js project initialized with Tailwind CSS, GSAP, and static export configured | Next.js 16.2.4 with `output: 'export'` in next.config; Tailwind v4 via `@tailwindcss/postcss`; GSAP 3.15.0 installed as dependency |
| SET-02 | Project deploys as a static site (next export or Vercel) | `output: 'export'` in next.config produces `out/` directory — `next export` command is removed in Next.js 14+ |
| SET-03 | Dark theme base styles, font, and CSS variables match Figma design system | CSS variables in `globals.css`, Tailwind `@theme` block for gamio-* tokens, Sora via `next/font/google` |
</phase_requirements>

---

## Summary

Phase 1 is a pure scaffolding and token-wiring phase — no rendered UI components are expected. The three requirements are: (1) initialize a Next.js static project with the full dependency set, (2) verify static export works, and (3) wire design tokens (CSS variables, Tailwind theme, font). All three are configuration tasks, not component tasks.

**Critical discovery:** Tailwind CSS is now at v4.2.4 (published 2026-04-21). The `tailwind.config.js` JavaScript configuration file used in v3 is replaced by a CSS-first `@theme` directive in `globals.css`. The UI-SPEC's Tailwind Config Contract section specifies v3 `tailwind.config.js` syntax. The planner must decide whether to use Tailwind v4 (CSS `@theme`) or pin to Tailwind v3 (JavaScript config). Both approaches are viable; they differ only in how tokens are declared.

**Critical discovery:** The `next export` CLI command was removed in Next.js 14. Static export is now configured exclusively via `output: 'export'` in `next.config.ts`. Running `npm run build` handles everything.

**Primary recommendation:** Scaffold with `npx create-next-app@latest` (TypeScript, App Router, no default Tailwind prompt), then manually install `tailwindcss @tailwindcss/postcss` for v4 so the CSS `@theme` approach is used from day one. This avoids a future v3→v4 migration that would require rewriting every custom token declaration.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Static HTML generation | Frontend Server (Next.js build) | CDN / Static host | `output: 'export'` runs at build time; output is pure HTML/CSS/JS |
| Design token declaration | Frontend Server (CSS/Config) | — | CSS variables and Tailwind theme live in build-time config files |
| Font loading | Frontend Server (Next.js) | Browser | `next/font/google` self-hosts font at build time; zero runtime |
| Environment verification | Build toolchain | — | `npm run dev` and `npm run build` are the verification surfaces |

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | 16.2.4 | React framework with static export | Locked decision per STATE.md; app router, TypeScript, zero-config |
| react | (peer of next) | Component model | Required by Next.js |
| react-dom | (peer of next) | DOM rendering | Required by Next.js |
| tailwindcss | 4.2.4 | Utility CSS, design tokens | Locked decision per STATE.md; v4 is current stable as of 2026-04-21 |
| @tailwindcss/postcss | 4.2.4 | PostCSS integration for Tailwind v4 | Required plugin — v4 no longer uses `tailwindcss` as direct PostCSS plugin |
| gsap | 3.15.0 | Scroll animations, parallax, timelines | Locked decision per STATE.md; industry standard for marketing sites |
| typescript | (bundled by create-next-app) | Type safety | Default in create-next-app scaffold |

[VERIFIED: npm registry — versions confirmed 2026-04-22]

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| postcss | (peer) | CSS transform pipeline | Required by @tailwindcss/postcss |
| @types/react | (peer) | TypeScript types | Always in TypeScript Next.js projects |
| eslint | (bundled) | Lint | Default in create-next-app; keep |
| eslint-config-next | (bundled) | Next.js ESLint rules | Default; enforces image/font best practices |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Tailwind v4 (@theme CSS) | Tailwind v3 (tailwind.config.js) | v3 syntax matches UI-SPEC verbatim but is one major version behind; v4 is current stable and avoids future migration |
| App Router (app/) | Pages Router (pages/) | Pages Router is legacy; App Router is the current default and required for next/font/google in layout.tsx |
| next/font/google | Google Fonts CDN `<link>` | next/font self-hosts automatically, eliminates external request, better LCP |

**Installation:**
```bash
npx create-next-app@latest gamio-website --typescript --eslint --app --no-tailwind --no-src-dir --import-alias "@/*"
cd gamio-website
npm install tailwindcss @tailwindcss/postcss postcss
npm install gsap
```

**Version verification:** [VERIFIED: npm registry 2026-04-22]
- `next`: 16.2.4 (published 2026-04-15)
- `tailwindcss`: 4.2.4 (published 2026-04-21)
- `@tailwindcss/postcss`: 4.2.4
- `gsap`: 3.15.0 (published 2025-12-12)

---

## Architecture Patterns

### System Architecture Diagram

```
  npm run build
       │
       ▼
  Next.js build (App Router)
       │
       ├── app/layout.tsx
       │     ├── Sora font (next/font/google — self-hosted)
       │     ├── globals.css (@import "tailwindcss" + CSS variables + @theme)
       │     └── body base styles (#0a0a0a bg, #FFFFFF text, Sora font)
       │
       └── output: 'export'
             │
             ▼
          out/ directory
          (static HTML + CSS + JS — no Node.js runtime)
               │
               ▼
         Vercel / any CDN
```

### Recommended Project Structure
```
gamio-website/
├── app/
│   ├── layout.tsx          # Root layout — font, globals.css import
│   ├── page.tsx            # Single page (placeholder in Phase 1)
│   └── globals.css         # @import "tailwindcss" + @theme tokens + CSS variables + body styles
├── public/                 # Static assets (images, icons added in Phase 2+)
├── next.config.ts          # output: 'export', images: { unoptimized: true }
├── postcss.config.mjs      # @tailwindcss/postcss plugin
├── tsconfig.json           # Generated by create-next-app
└── package.json
```

### Pattern 1: Tailwind v4 @theme Token Declaration

**What:** All custom design tokens declared in `globals.css` using the `@theme` directive. No `tailwind.config.js` file needed.
**When to use:** Tailwind v4 (current). Tokens become both CSS variables and utility classes automatically.
**Example:**
```css
/* Source: https://tailwindcss.com/docs/colors (verified via Context7 /tailwindlabs/tailwindcss.com) */
@import "tailwindcss";

@theme {
  /* Colors — generates bg-gamio-bg, text-gamio-orange, etc. */
  --color-gamio-bg:           #0a0a0a;
  --color-gamio-bg-secondary: #111111;
  --color-gamio-orange:       #FF6B35;
  --color-gamio-orange-dark:  #CC4400;
  --color-gamio-purple-bg:    #1a0028;
  --color-gamio-purple-end:   #2d0045;

  /* Font family */
  --font-sans: 'Sora', 'Space Grotesk', system-ui, sans-serif;

  /* Max-widths (spacing namespace in v4) */
  --width-container: 1440px;
  --width-inner:     1280px;
}

/* CSS variables for direct use in arbitrary values and GSAP targets */
:root {
  --gamio-bg:           #0a0a0a;
  --gamio-bg-secondary: #111111;
  --gamio-orange:       #FF6B35;
  --gamio-orange-dark:  #CC4400;
  --gamio-purple-bg:    #1a0028;
  --gamio-purple-end:   #2d0045;
  --gamio-glass:        rgba(255, 255, 255, 0.05);
  --gamio-glass-border: rgba(255, 255, 255, 0.10);
  --gamio-text:         #FFFFFF;
  --gamio-text-muted:   rgba(255, 255, 255, 0.70);
  --gamio-text-subtle:  rgba(255, 255, 255, 0.60);
}

body {
  background-color: var(--gamio-bg);
  color: var(--gamio-text);
}
```

### Pattern 2: next.config.ts for Static Export

**What:** `output: 'export'` plus `images: { unoptimized: true }` because Next.js Image Optimization API is not available in static export.
**When to use:** Always when targeting static HTML output.
**Example:**
```typescript
/* Source: https://nextjs.org/docs/app/guides/static-exports (verified via Context7 /vercel/next.js) */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### Pattern 3: Sora Font Loading via next/font/google

**What:** Non-variable Google Font with explicit weight array. Apply via CSS variable so Tailwind's `@theme --font-sans` can reference it.
**When to use:** Any non-variable font (Sora requires explicit weights 400 and 700).
**Example:**
```typescript
/* Source: https://nextjs.org/docs/app/api-reference/components/font (verified via Context7 /vercel/next.js) */
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  )
}
```

Then in `globals.css @theme`:
```css
@theme {
  --font-sans: var(--font-sora), 'Space Grotesk', system-ui, sans-serif;
}
```

### Pattern 4: PostCSS Config for Tailwind v4

```javascript
/* Source: https://tailwindcss.com/docs/installation/using-postcss (verified via Context7) */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

### Anti-Patterns to Avoid

- **Using `tailwind.config.js` with Tailwind v4:** The `theme.extend.colors` JS object syntax is v3. With v4, use `@theme` in CSS. Mixing both causes token duplication and confusion.
- **Using `next export` CLI command:** Removed in Next.js 14+. Use `npm run build` with `output: 'export'` in next.config. The `next export` command will error.
- **Loading Sora via `<link>` tag in `<head>`:** Bypasses next/font self-hosting — adds external request, hurts LCP, prevents font display optimization.
- **Omitting `images: { unoptimized: true }` from next.config:** The Next.js `<Image>` component will throw build errors in static export mode because the image optimization API requires a Node.js server. [VERIFIED: Context7 /vercel/next.js]
- **Using Pages Router (`pages/`):** Legacy approach. `next/font/google` works best in App Router `app/layout.tsx`.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font self-hosting | Custom font download script | `next/font/google` | Handles subsetting, self-hosting, `font-display`, size-adjust automatically |
| CSS reset | Manual reset stylesheet | Tailwind's preflight (included in `@import "tailwindcss"`) | Tested cross-browser, removes inconsistencies |
| Static HTML generation | Custom webpack/rollup pipeline | Next.js `output: 'export'` | Code splitting, tree shaking, route pre-rendering all built-in |

**Key insight:** Phase 1 is configuration only — almost no hand-rolling is possible or needed. The value is in choosing the right initial configuration so Phase 2+ don't require restructuring.

---

## Common Pitfalls

### Pitfall 1: Tailwind v3 vs v4 Token Syntax Mismatch

**What goes wrong:** The UI-SPEC's Tailwind Config Contract is written in v3 syntax (`tailwind.config.js` with `theme.extend.colors`). If a developer follows this verbatim with Tailwind v4, the custom tokens will be declared in a JS config that Tailwind v4 may partially process but with unexpected behavior — utility classes may not generate.
**Why it happens:** UI-SPEC was authored before Tailwind v4 landed as stable; v3 syntax is still widely documented online.
**How to avoid:** Use either (a) Tailwind v4 with `@theme` in CSS — preferred, forward-compatible, or (b) pin `tailwindcss@3.4.19` and follow the UI-SPEC JS config verbatim. Do not mix both.
**Warning signs:** Custom `bg-gamio-*` utility classes missing from generated CSS; no errors during build but tokens silently absent.

### Pitfall 2: Missing `images: { unoptimized: true }` in Static Export

**What goes wrong:** Build succeeds but `next build` warns or fails at any page using `<Image>`. CI deploy breaks.
**Why it happens:** Next.js Image Optimization requires a server runtime. Static export has no server.
**How to avoid:** Add `images: { unoptimized: true }` to `next.config.ts` from the start. [VERIFIED: Context7 /vercel/next.js]
**Warning signs:** Error: `Error: Image Optimization using Next.js' default loader is not compatible with next export`.

### Pitfall 3: Using `next export` CLI Command

**What goes wrong:** `npm run build && next export` fails with `Error: The "next export" command has been removed in favor of "output: export"`.
**Why it happens:** Removed in Next.js 14. SEQ-02 uses the phrase "next export" which is the old pattern.
**How to avoid:** Only use `npm run build` — with `output: 'export'` in config, the static output to `out/` happens automatically.
**Warning signs:** Any script that calls `next export` directly.

### Pitfall 4: Sora as Variable Font

**What goes wrong:** Sora is not a variable font. Using it without explicit `weight: ['400', '700']` causes next/font to throw: `Error: ... does not support variable fonts`.
**Why it happens:** next/font has two paths — variable font (no weight needed) and static font (weights required).
**How to avoid:** Always specify `weight: ['400', '700']` for Sora.
**Warning signs:** Build error on font import.

### Pitfall 5: GSAP and SSR

**What goes wrong:** GSAP accesses `window`/`document` directly. In Next.js App Router with server components, importing GSAP at the top level causes `ReferenceError: window is not defined` during SSR.
**Why it happens:** Next.js renders components on the server first.
**How to avoid:** For Phase 1, GSAP is installed but not used yet. When first used in Phase 3, import GSAP inside `useEffect` or mark the component with `'use client'`. This is a Phase 3 concern — document here for planner awareness.
**Warning signs:** Build or dev error mentioning `window is not defined`.

---

## Code Examples

### Complete globals.css for Phase 1

```css
/* Source: Context7 /tailwindlabs/tailwindcss.com — @theme directive */
/* Source: Context7 /vercel/next.js — next/font CSS variable integration */
@import "tailwindcss";

@theme {
  /* Custom colors — generates bg-gamio-*, text-gamio-*, etc. */
  --color-gamio-bg:           #0a0a0a;
  --color-gamio-bg-secondary: #111111;
  --color-gamio-orange:       #FF6B35;
  --color-gamio-orange-dark:  #CC4400;
  --color-gamio-purple-bg:    #1a0028;
  --color-gamio-purple-end:   #2d0045;

  /* Font — references CSS variable injected by next/font */
  --font-sans: var(--font-sora), 'Space Grotesk', system-ui, sans-serif;

  /* Width tokens */
  --width-container: 1440px;
  --width-inner:     1280px;
}

/* Raw CSS variables for use in arbitrary Tailwind values and GSAP color targets */
:root {
  --gamio-bg:           #0a0a0a;
  --gamio-bg-secondary: #111111;
  --gamio-orange:       #FF6B35;
  --gamio-orange-dark:  #CC4400;
  --gamio-purple-bg:    #1a0028;
  --gamio-purple-end:   #2d0045;
  --gamio-glass:        rgba(255, 255, 255, 0.05);
  --gamio-glass-border: rgba(255, 255, 255, 0.10);
  --gamio-text:         #FFFFFF;
  --gamio-text-muted:   rgba(255, 255, 255, 0.70);
  --gamio-text-subtle:  rgba(255, 255, 255, 0.60);
}

body {
  background-color: var(--gamio-bg);
  color: var(--gamio-text);
}
```

### Complete next.config.ts

```typescript
/* Source: Context7 /vercel/next.js — static export + image optimization */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

### Complete postcss.config.mjs

```javascript
/* Source: https://tailwindcss.com/docs/installation/using-postcss */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```

### Minimal app/layout.tsx for Phase 1

```typescript
/* Source: Context7 /vercel/next.js — next/font/google non-variable font */
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gamio',
  description: 'Game & Gain — B2B iGaming platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sora.variable}>
      <body>{children}</body>
    </html>
  )
}
```

### Minimal app/page.tsx placeholder

```typescript
export default function Home() {
  return (
    <main>
      {/* Sections added in Phase 2 */}
    </main>
  )
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.js` with `theme.extend` | `@theme` directive in CSS | Tailwind v4.0 (Jan 2026) | UI-SPEC config contract is v3 syntax — must be translated |
| `next export` CLI command | `output: 'export'` in next.config | Next.js 14 | Any docs/scripts using `next export` will fail |
| `tailwindcss` PostCSS plugin | `@tailwindcss/postcss` plugin | Tailwind v4.0 | Different install command and postcss.config format |
| `@tailwind base/components/utilities` directives | `@import "tailwindcss"` single import | Tailwind v4.0 | Three directives collapsed to one |
| Variable font (no weight needed) | Non-variable: explicit weights required | Sora font characteristic (unchanged) | Always specify `weight: ['400', '700']` |

**Deprecated/outdated in this stack:**
- `tailwind.config.js`: Still works if pinned to v3, but is the v3 pattern
- `next export` command: Removed — do not use
- `@tailwind base; @tailwind components; @tailwind utilities;`: Replaced by `@import "tailwindcss"` in v4

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Sora is available in `next/font/google` | Standard Stack / Code Examples | Planner tasks would need alternative font loading approach; low risk — Sora is a Google Font |
| A2 | Tailwind v4 `--font-sans` variable name generates `font-sans` utility in Next.js context | Architecture Patterns | Utility class name might differ; verify with `npm run dev` smoke test |
| A3 | `--width-*` token namespace generates `max-w-container` / `max-w-inner` utilities in Tailwind v4 | Architecture Patterns | Namespace may need to be `--max-width-*`; fallback: use arbitrary values `max-w-[1440px]` |

---

## Open Questions

1. **Tailwind v3 vs v4 — align with UI-SPEC or use current stable?**
   - What we know: UI-SPEC declares tokens in `tailwind.config.js` v3 syntax; Tailwind v4 uses `@theme` CSS syntax; both are functional
   - What's unclear: Whether the project should follow the UI-SPEC token format literally (v3) or adopt the current stable approach (v4)
   - Recommendation: Use Tailwind v4 (current stable). The token VALUES from the UI-SPEC are authoritative; the JS config FORMAT is a documentation artifact, not a locked decision. Translate tokens from JS to CSS `@theme` syntax.

2. **`--font-sans` token name in Tailwind v4 context**
   - What we know: Tailwind v4 uses `--font-sans` to define the `font-sans` utility; `next/font/google` injects `--font-sora` CSS variable
   - What's unclear: Whether `@theme { --font-sans: var(--font-sora) }` correctly resolves at build time in Next.js + Tailwind v4
   - Recommendation: Test in Wave 0 smoke task; fallback is to use `font-[var(--font-sora)]` arbitrary value or set `font-family` directly on body in CSS.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next.js build | ✓ | v22.15.0 | — |
| npm | Package install | ✓ | 10.9.2 | — |
| Internet (npm registry) | Package install | ✓ | — | — |
| Vercel CLI | SET-02 deploy verification | ✗ | — | `npm run build` + inspect `out/` locally; Vercel deploy via git push |

[VERIFIED: Bash — node --version, npm --version 2026-04-22]

**Missing dependencies with no fallback:** None — static export verification can be done locally.

**Missing dependencies with fallback:**
- Vercel CLI: Not installed. SET-02 can be verified by running `npm run build` and confirming `out/` directory exists with no errors. Full Vercel deploy not required for phase gate.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | None detected (greenfield project — no test infrastructure yet) |
| Config file | None — Wave 0 creates placeholder |
| Quick run command | `npm run build` (verifies static export compiles) |
| Full suite command | `npm run build && ls out/index.html` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SET-01 | `npm run dev` starts with no errors | smoke | `npm run dev -- --port 3001 &; sleep 3; curl -s http://localhost:3001 | grep -q "Gamio"; kill %1` | ❌ Wave 0 |
| SET-02 | `npm run build` produces `out/` directory | smoke | `npm run build && test -f out/index.html && echo "PASS"` | ❌ Wave 0 |
| SET-03 | CSS variables and dark background visible | smoke | `npm run build && grep -q "gamio-bg" out/_next/static/css/*.css && echo "PASS"` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `npm run build` — confirms no TypeScript or config errors
- **Per wave merge:** Full smoke suite above
- **Phase gate:** All three SET-* smoke commands pass before `/gsd-verify-work`

### Wave 0 Gaps
- [ ] No test infrastructure exists (greenfield) — smoke tests are shell commands, not a test framework
- [ ] No `package.json` yet — created in first task

*(No formal test framework needed for Phase 1 — it is configuration only. Smoke tests are build-time verification.)*

---

## Security Domain

Phase 1 is environment scaffolding with no user-facing endpoints, no form inputs, no authentication, and no data storage. ASVS categories do not apply to this phase.

| ASVS Category | Applies | Reason |
|---------------|---------|--------|
| V2 Authentication | No | No auth in Phase 1 |
| V3 Session Management | No | No sessions in Phase 1 |
| V4 Access Control | No | Static site, no access control |
| V5 Input Validation | No | No inputs in Phase 1 |
| V6 Cryptography | No | No cryptographic operations |

---

## Sources

### Primary (HIGH confidence)
- Context7 `/vercel/next.js` — static export configuration, next/font/google, Image unoptimized
- Context7 `/tailwindlabs/tailwindcss.com` — @theme directive, v4 token syntax, backdrop-filter utilities
- npm registry (verified 2026-04-22) — next@16.2.4, tailwindcss@4.2.4, gsap@3.15.0

### Secondary (MEDIUM confidence)
- [Install Tailwind CSS with Next.js — tailwindcss.com](https://tailwindcss.com/docs/guides/nextjs) — v4 installation steps
- [Next.js Static Exports — nextjs.org](https://nextjs.org/docs/app/guides/static-exports) — output: export configuration
- [GitHub Discussion: next export removed](https://github.com/vercel/next.js/discussions/58790) — confirmed removal of `next export` CLI

### Tertiary (LOW confidence — training knowledge)
- GSAP + Next.js SSR pattern (useEffect / 'use client') — widely documented but not verified in this session against GSAP 3.15 docs

---

## Project Constraints (from CLAUDE.md)

| Directive | Impact on Phase 1 |
|-----------|-------------------|
| Tech Stack: Static site (HTML/CSS/JS or Next.js static export) — no backend required | `output: 'export'` mandatory; no API routes |
| Design Fidelity: Must match Figma design closely — dark theme, orange accents, glass effects | All CSS variables and Tailwind tokens from UI-SPEC must be present by end of phase |
| Animations: GSAP or CSS animations | GSAP must be installed in this phase even though not used until Phase 3 |
| Performance: Animations must not degrade mobile performance | Phase 1 concern: ensure static export, no SSR overhead |
| GSD Workflow: No direct repo edits outside GSD commands | Planner must structure tasks as GSD-compatible units |

---

## Metadata

**Confidence breakdown:**
- Standard Stack: HIGH — verified against npm registry and Context7
- Architecture: HIGH — verified against official Next.js and Tailwind docs
- Pitfalls: HIGH for Next.js specifics (verified); MEDIUM for GSAP/SSR (training knowledge)

**Research date:** 2026-04-22
**Valid until:** 2026-05-22 (Tailwind and Next.js release frequently — re-verify versions before execution if > 30 days)
