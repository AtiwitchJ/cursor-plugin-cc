---
name: cursor-cli-runtime
description: Operational guidance for calling the Cursor Agent CLI from this plugin's companion script.
---

# Cursor Agent CLI runtime

The Cursor plugin wraps the **Cursor Agent CLI**, which is invoked as the binary `agent`
(not `cursor`). This skill explains how the companion should invoke `agent` so the wrapper
behaves predictably.

> **Status:** this is a scaffold skill. Once `scripts/lib/cursor.mjs` is implemented,
> replace the placeholder below with real operational notes pulled from
> `kilo-plugin-cc/plugins/kilo/skills/kilo-cli-runtime/SKILL.md`.

## Binary

- Command name: `agent`
- Install: `npm install -g @cursor/cli`
- Authentication: `agent login`

## Placeholder invocation shape

Until the wrapper is implemented, the companion stubs return:

- `getAgentAvailability(cwd)` -> `{ available, detail }` (probes `agent --version`)
- `getAgentAuthStatus(cwd)` -> `{ available, loggedIn, detail }`
- `runAgent(cwd, options)` -> throws (not implemented)
- `findLatestResumableSession(cwd)` -> `null`

## Next steps

1. Document the real `agent` flags (model selector, sandbox, session resume, etc.).
2. Capture the JSON event shape so `runAgent` can parse stdout the same way `kilo.mjs` does.
3. Update this file with the actual `agent <subcommand> [flags] "<prompt>"` shape.