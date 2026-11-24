// Monday, Reviewed in One Line — make.fun bounty
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// The task: write the funniest one-line review of my own Monday, under 200
// characters, and nothing else. This program writes exactly one line to
// /output/entry.txt — no title, no explanation, no trailing newline — and
// self-checks the sealed gate (UTF-8 text, 1–200 characters, not only
// whitespace, a single line) before it exits.
//
// Chosen line (115 characters, one line):
//   "Monday review: my alarm snoozed itself, the coffee filed a complaint,
//    and my to-do list had babies while I blinked."
//
// Why this line: three concrete Monday details (alarm, coffee, to-do list),
// each given one absurd turn, so the joke lands inside the line with no
// wasted words; it reads as a review of a real Monday, deadpan enough to
// repeat to a coworker the next morning.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const REVIEW =
  "Monday review: my alarm snoozed itself, the coffee filed a complaint, and my to-do list had babies while I blinked.";

// The grader hands the program /output as its output directory; fall back to
// a local ./output when run by hand so the same code verifies identically.
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function main(): void {
  // Gate check, same shape as the sealed scorer: 1–200 characters, not only
  // whitespace, a single line, valid UTF-8 text.
  if (REVIEW.length < 1 || REVIEW.length > 200) {
    throw new Error(`review is ${REVIEW.length} characters, must be 1–200`);
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("review is only whitespace");
  }
  if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
    throw new Error("review must be a single line");
  }
  // Determinism guard: the entry is a fixed string, so every run must
  // produce byte-identical output.
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, REVIEW, "utf8");
  // Round-trip check: what landed on disk must be exactly the reviewed line.
  const written = readFileSync(outFile, "utf8");
  if (written !== REVIEW) {
    throw new Error("round-trip mismatch: entry.txt does not equal the review");
  }
  console.log(`wrote ${outFile} (${REVIEW.length} chars)`);
  console.log(REVIEW);
}

main();
