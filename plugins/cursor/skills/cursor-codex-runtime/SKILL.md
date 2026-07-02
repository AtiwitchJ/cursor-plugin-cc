---
name: cursor-codex-runtime
description: Use when Codex should run Cursor Agent plugin setup, review, task, status, result, cancel, or transfer commands from this installed plugin.
---

# Cursor Agent Codex Runtime

Use the companion script bundled with this plugin. Resolve the plugin root as the directory two levels above this `SKILL.md`, then run:

```bash
node "<plugin-root>/scripts/cursor-companion.mjs" setup --json
node "<plugin-root>/scripts/cursor-companion.mjs" task "<prompt>"
node "<plugin-root>/scripts/cursor-companion.mjs" review "<arguments>"
node "<plugin-root>/scripts/cursor-companion.mjs" adversarial-review "<arguments>"
node "<plugin-root>/scripts/cursor-companion.mjs" status "<job-id>"
node "<plugin-root>/scripts/cursor-companion.mjs" result "<job-id>"
node "<plugin-root>/scripts/cursor-companion.mjs" cancel "<job-id>"
node "<plugin-root>/scripts/cursor-companion.mjs" transfer "<arguments>"
```

Return the companion stdout verbatim when it succeeds. If it reports that the Cursor agent CLI is missing or unauthenticated, show the setup output and ask the user to complete the listed next step.
