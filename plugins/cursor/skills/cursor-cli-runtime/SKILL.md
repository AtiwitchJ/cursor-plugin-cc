---
name: cursor-cli-runtime
description: Operational guidance for calling the Cursor Agent CLI from this plugin's companion script.
---

# Cursor Agent CLI runtime

The Cursor plugin wraps the local Cursor Agent CLI, invoked as the binary `agent`
(not `cursor`). The companion script is implemented and uses the same command surface
in Claude Code and Codex.

## Binary

- Command name: `agent`
- Install: `npm install -g @cursor/cli`
- Authentication: `agent login`

## Invocation

- Availability probe: `agent --version`
- Task/review execution: `agent -p <prompt>`
- Setup output: `node scripts/cursor-companion.mjs setup --json`

If `agent` is missing or unauthenticated, setup reports actionable next steps. Runtime
commands should not describe the companion as a placeholder.
