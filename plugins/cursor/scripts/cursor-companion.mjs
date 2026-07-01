#!/usr/bin/env node
/**
 * cursor-companion - dispatcher stub for the Cursor Agent plugin.
 *
 * Implementation plan (copy from kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs):
 *   - swap `import "./lib/kilo.mjs"` for `import "./lib/cursor.mjs"`
 *   - swap `runKilo`/`getKiloAvailability`/`getKiloAuthStatus` calls for their
 *     `runAgent`/`getAgentAvailability`/`getAgentAuthStatus` equivalents
 *   - the CLI binary is `agent`, not `cursor`
 */
import process from "node:process";

function printUsage() {
  console.log(
    [
      "Usage:",
      "  node scripts/cursor-companion.mjs setup [--json]",
      "  node scripts/cursor-companion.mjs review [--wait|--background] [--base <ref>]",
      "  node scripts/cursor-companion.mjs adversarial-review [--wait|--background] [--base <ref>] [focus text]",
      "  node scripts/cursor-companion.mjs task [--background] [--write] [--resume|--fresh] [prompt]",
      "  node scripts/cursor-companion.mjs status [job-id] [--json]",
      "  node scripts/cursor-companion.mjs result [job-id] [--json]",
      "  node scripts/cursor-companion.mjs cancel [job-id] [--json]"
    ].join("\n")
  );
}

async function main() {
  const [subcommand] = process.argv.slice(2);
  if (!subcommand || subcommand === "help" || subcommand === "--help") {
    printUsage();
    return;
  }
  process.stderr.write(
    "`cursor-companion` is a stub. See ../../../kilo-plugin-cc/plugins/kilo/scripts/kilo-companion.mjs for a complete reference implementation. The CLI binary is `agent`.\n"
  );
  process.exitCode = 1;
}

main();