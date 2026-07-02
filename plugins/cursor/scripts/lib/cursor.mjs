import { binaryAvailable, formatCommandFailure, runCommand } from "./process.mjs";

const BINARY = "agent";

export function getCursorAvailability(cwd) {
  return binaryAvailable(BINARY, ["--version"], { cwd });
}

export async function getCursorAuthStatus(cwd) {
  const availability = getCursorAvailability(cwd);
  if (!availability.available) {
    return {
      available: false,
      loggedIn: false,
      detail: `Cursor agent CLI is missing: ${availability.detail}`,
      source: "binary"
    };
  }
  return {
    available: true,
    loggedIn: true,
    detail: "Cursor agent CLI is available; command execution will surface any provider authentication errors.",
    source: "binary"
  };
}

export function ensureCursorAvailable(cwd) {
  const availability = getCursorAvailability(cwd);
  if (!availability.available) {
    throw new Error(
      `Cursor agent CLI is not installed or is missing required runtime support (${availability.detail}). Install Cursor agent and make sure the \`agent\` binary is on PATH, then rerun /cursor:setup.`
    );
  }
}

export async function runCursor(cwd, options = {}) {
  ensureCursorAvailable(cwd);
  const prompt = String(options.prompt ?? options.defaultPrompt ?? "").trim();
  const result = runCommand(BINARY, ["-p", prompt], { cwd });
  const failure = result.error
    ? result.error.message
    : result.status === 0
      ? ""
      : formatCommandFailure(result);
  return {
    status: result.error ? 1 : result.status,
    text: result.stdout.trim(),
    stderr: result.stderr.trim(),
    error: failure,
    sessionId: null
  };
}

export async function findLatestResumableSession() {
  return null;
}

export const AGENT_RUNTIME = {
  agent: "cursor",
  displayName: "Cursor Agent",
  cliLabel: "Cursor agent CLI",
  installHint: "Install Cursor agent and make sure the `agent` binary is on PATH.",
  authHint: "Authenticate Cursor agent with your configured provider, then rerun /cursor:setup.",
  getAvailability: getCursorAvailability,
  getAuthStatus: getCursorAuthStatus,
  ensureAvailable: ensureCursorAvailable,
  run: runCursor
};
