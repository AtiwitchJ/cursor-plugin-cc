---
description: Delegate investigation, an explicit fix request, or follow-up rescue work to the Cursor agent rescue subagent
argument-hint: "[--background|--wait] [--resume|--fresh] [what Cursor agent should investigate, solve, or continue]"
allowed-tools: Bash(node:*), AskUserQuestion, Agent
---

Invoke the `cursor:cursor-rescue` subagent via the `Agent` tool (`subagent_type: "cursor:cursor-rescue"`), forwarding the raw user request as the prompt.
`cursor:cursor-rescue` is a subagent, not a skill — do not call `Skill(cursor:cursor-rescue)` (no such skill) or `Skill(cursor:rescue)` (that re-enters this command and hangs the session).
The final user-visible response must be Cursor agent's output verbatim.

Raw user request:
$ARGUMENTS

Operating rules:

- The subagent is a thin forwarder only. It should use one `Bash` call to invoke `node "${CLAUDE_PLUGIN_ROOT}/scripts/cursor-companion.mjs" task ...` and return that command's stdout as-is.
- Return the Cursor agent companion stdout verbatim to the user.
- If Cursor agent is missing or unauthenticated, stop and tell the user to run `/cursor:setup`.
- If the user did not supply a request, ask what Cursor agent should investigate or fix.