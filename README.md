# Cursor agent plugin for Claude Code

This plugin is for Claude Code users who want to delegate code reviews or tasks to the
Cursor agent CLI (`agent`).

## What You Get

- `/cursor:review` for a normal read-only review
- `/cursor:adversarial-review` for a steerable challenge review
- `/cursor:rescue`, `/cursor:transfer`, `/cursor:status`, `/cursor:result`, and `/cursor:cancel`
- `/cursor:setup` to verify the CLI and authentication

## Requirements

- **`agent` CLI** installed locally. Install with: `npm install -g @cursor/cli`
- Authentication: run `!agent login`
- **Node.js 18.18 or later**

## Install in Claude Code

```bash
/plugin marketplace add <your-org>/cursor-plugin-cc
/plugin install cursor@agents-plugin-cc-cursor
```

## Install in Codex

```bash
codex plugin marketplace add ./.agents/plugins/marketplace.json
codex plugin add cursor@agents-plugin-cc-cursor
```

Start a new Codex thread after installing or updating the plugin. Codex-facing skills live
under `plugins/cursor/skills/` and call `plugins/cursor/scripts/cursor-companion.mjs`.

## Runtime

The companion invokes the local Cursor Agent CLI with `agent -p <prompt>`. `/cursor:setup`
or `node plugins/cursor/scripts/cursor-companion.mjs setup --json` reports missing
CLI/authentication steps without returning a placeholder error.

## Reference

See `../kilo-plugin-cc/` for the reference implementation this runtime follows.

## License

Apache-2.0
