# Cursor agent plugin for Claude Code

This plugin is for Claude Code users who want to delegate code reviews or tasks to the
Cursor agent CLI (`agent`).

## What You Get (once implemented)

- `/cursor:review` for a normal read-only review
- `/cursor:adversarial-review` for a steerable challenge review
- `/cursor:rescue`, `/cursor:transfer`, `/cursor:status`, `/cursor:result`, and `/cursor:cancel`
- `/cursor:setup` to verify the CLI and authentication

## Requirements

- **`agent` CLI** installed locally. Install with: `npm install -g @cursor/cli`
- Authentication: run `!agent login`
- **Node.js 18.18 or later**

## Installing the scaffold

```bash
/plugin marketplace add <your-org>/cursor-plugin-cc
/plugin install cursor@agents-plugin-cc-cursor
```

The scaffold ships with stub commands that will fail with a "not implemented" error
until you wire up `plugins/cursor/scripts/lib/cursor.mjs` and
`plugins/cursor/scripts/cursor-companion.mjs`.

## Implementing the plugin

1. Open `plugins/cursor/scripts/lib/cursor.mjs` and replace the stub functions with real
   implementations that:
   - detect `agent` availability (`binaryAvailable` is already imported)
   - probe authentication (`getCursorAuthStatus`)
   - invoke the CLI in the foreground and capture its output (`runCursor`)
   - discover a resumable session if available (`findLatestResumableSession`)
2. Open `plugins/cursor/scripts/cursor-companion.mjs` and copy the body of
   `../kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs`, renaming the imports from
   `./lib/kilo.mjs` to `./lib/cursor.mjs` and the `runKilo` calls to your new wrapper.
3. Add tests under `tests/` that cover argument parsing, state, and the new wrapper.

## Reference

See `../kilo-plugin-cc/` for a complete working example.

## License

Apache-2.0