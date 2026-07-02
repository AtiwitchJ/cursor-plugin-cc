import { test } from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const COMPANION = path.join(ROOT, "plugins", "cursor", "scripts", "cursor-companion.mjs");

function runCompanion(args) {
  return spawnSync(process.execPath, [COMPANION, ...args], { encoding: "utf8" });
}

test("cursor-companion.mjs has no syntax errors", () => {
  const result = runCompanion(["--help"]);
  assert.equal(result.status, 0);
  assert.doesNotMatch(result.stderr, /SyntaxError/);
});

test("cursor-companion.mjs --help prints usage", () => {
  const result = runCompanion(["--help"]);
  assert.match(result.stdout, /Usage:/);
});

test("cursor-companion.mjs task no longer reports a stub error", () => {
  const result = runCompanion(["task", "hello"]);
  const output = `${result.stdout}\n${result.stderr}`;
  assert.doesNotMatch(output, /is a stub|not implemented/i);
  assert.match(output, /Cursor agent CLI|agent|not found|missing/i);
});
