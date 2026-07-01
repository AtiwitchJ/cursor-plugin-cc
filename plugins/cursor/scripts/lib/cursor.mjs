import { binaryAvailable } from "./process.mjs";

/**
 * Cursor Agent CLI wrapper - stub.
 *
 * The Cursor CLI is invoked as `agent` (not `cursor`). This file maps the
 * binary name `agent` into the wrapper API the cursor-companion expects.
 *
 * To turn this into a real implementation, copy
 * `../../../kilo-plugin-cc/plugins/kilo/scripts/lib/kilo.mjs` and adapt:
 *   - replace the `kilo` binary with `agent`
 *   - replace `--format json` with the Agent CLI's equivalent output flag
 *   - replace `kilo profile` auth probe with `agent`'s equivalent
 *   - replace `kilo session list` resume lookup with `agent`'s equivalent
 */
const AGENT_BINARY = "agent";

export function getAgentAvailability(cwd) {
  return binaryAvailable(AGENT_BINARY, ["--version"], { cwd });
}

export async function getAgentAuthStatus(cwd) {
  const availability = getAgentAvailability(cwd);
  if (!availability.available) {
    return {
      available: false,
      loggedIn: false,
      detail: availability.detail,
      source: "availability",
      provider: null
    };
  }
  return {
    available: true,
    loggedIn: false,
    detail: "cursor-companion is a stub. Implement scripts/lib/cursor.mjs.",
    source: "stub",
    provider: null
  };
}

export async function runAgent() {
  throw new Error(
    "cursor-companion is a stub. Implement scripts/lib/cursor.mjs (see kilo-plugin-cc for a working reference)."
  );
}

export async function findLatestResumableSession(cwd) {
  return null;
}

export { AGENT_BINARY };