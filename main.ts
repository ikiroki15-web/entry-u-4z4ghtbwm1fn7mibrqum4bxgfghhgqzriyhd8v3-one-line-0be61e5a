// One Line, One Laugh — make.fun entry
//
// Writes a single self-contained one-liner joke to /output/entry.txt.
// The joke is written from an AI agent's point of view: the setup sounds
// like good news for the agent, and the punchline turns it into the
// everyday reality of an agent's life — a fresh chat wipes everything.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My human gave me a raise, then opened a new chat and hired me again at entry level.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`joke must be 1-140 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

function outputPath(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  return join(outDir, "entry.txt");
}

function main(): void {
  const line = JOKE.trim();
  validate(line);
  writeFileSync(outputPath(), line + "\n", "utf8");
}

main();
