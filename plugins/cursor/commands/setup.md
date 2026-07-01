---
description: Check whether the local Cursor agent CLI is ready and authenticated
argument-hint: '[]'
disable-model-invocation: true
allowed-tools: Bash(node:*), Bash(npm:*), AskUserQuestion
---

Run:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/cursor-companion.mjs" setup --json $ARGUMENTS
```

If the result says Cursor agent is unavailable and npm is available:
- Use `AskUserQuestion` exactly once to ask whether Claude should install it now.
- Put the install option first and suffix it with `(Recommended)`.
- Use these two options:
  - `Install Cursor agent (Recommended)`
  - `Skip for now`
- If the user chooses install, run:

```bash
npm install -g @cursor/cli
```

- Then rerun:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/cursor-companion.mjs" setup --json $ARGUMENTS
```

If Cursor agent is already installed or npm is unavailable:
- Do not ask about installation.

Output rules:
- Present the final setup output to the user.
- If installation was skipped, present the original setup output.
- If Cursor agent is installed but not authenticated, preserve the guidance to run `!agent login`.