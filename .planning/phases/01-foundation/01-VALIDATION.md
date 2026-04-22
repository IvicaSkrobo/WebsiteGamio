---
phase: 1
slug: foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-22
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | next build (TypeScript compiler + ESLint) |
| **Config file** | next.config.ts |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npm run dev` |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build && npm run dev`
- **Before `/gsd-verify-work`:** Full suite must be green
- **Max feedback latency:** 60 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | SET-01 | — | N/A | build | `npm run build` | ✅ | ⬜ pending |
| 1-01-02 | 01 | 1 | SET-01 | — | N/A | build | `npm run build` | ✅ | ⬜ pending |
| 1-02-01 | 02 | 1 | SET-02 | — | N/A | build | `npm run build` | ✅ | ⬜ pending |
| 1-02-02 | 02 | 1 | SET-03 | — | N/A | visual | manual browser check | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- Existing infrastructure covers all phase requirements (no test framework install needed — build/type check is the validation gate for this phase).

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Dark background (#0a0a0a) visible | SET-03 | Visual check required | Open browser, verify background color matches design token |
| Orange accent (#F97316) visible | SET-03 | Visual check required | Open browser, inspect elements using accent color class |
| Bold typography (Sora font) renders | SET-03 | Font load check | Open browser, check Network tab for Sora font loaded |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 60s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
