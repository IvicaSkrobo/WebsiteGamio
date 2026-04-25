---
id: 260425-i2p
slug: update-gsd-package-dependency-to-publish
status: complete
completed: 2026-04-25
---

# Quick Task 260425-i2p: Update GSD Package Dependency to Published Version

## Changes

- Updated `get-shit-done-cc` from the GitHub dependency to the published `1.38.3` package.
- Reinstalled dependencies so `package-lock.json` resolves GSD from the npm registry tarball.
- Ran the GSD Codex installer, which updated the global Codex GSD installation to `1.38.3`.
- Built and installed the matching `gsd-sdk` CLI globally from the installed GSD SDK source.
- Persisted `GSD_AGENTS_DIR=C:\Users\Ico\.codex\agents` at the user environment level so SDK agent checks resolve Codex-installed agents.

## Verification

- `C:\Users\Ico\AppData\Roaming\npm\gsd-sdk.cmd query init.quick "final sdk verification"` reports `agents_installed: true`.
- `npm.cmd run lint` passes with existing warnings only.
- `npm.cmd run build` passes and regenerates the static export.

## Notes

- The current shell session may not find `gsd-sdk` by bare command until PATH is reloaded, but the user PATH already contains `C:\Users\Ico\AppData\Roaming\npm`.
- The SDK build still defaults some checks to Claude paths unless `GSD_AGENTS_DIR` is set, so that environment variable is part of this setup.
