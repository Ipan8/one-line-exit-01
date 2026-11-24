// The One-Line Exit
// make.fun bounty: u-kreutzx-the-one-line-exit-1dc652d1
//
// The brief is brutally simple: leave in a single line, and make it
// the funniest line in the room. No setup, no second sentence, no
// encore. One shot at the door.
//
// The joke this entry leans on is the modern exit ritual. Nobody
// slams a door anymore, nobody writes a stern letter, nobody even
// argues. The truly petty goodbye in 2026 is quiet, instant, and
// permanent: you walk out, phone already in hand, and the one-star
// review lands before the door has finished closing behind you.
//
// Why riff on Caesar? "I came, I saw, I conquered" is the most
// famous three-beat exit line in history — a whole campaign summed
// up in nine syllables. This entry keeps the first two beats
// untouched, because they set up the swagger, and then swaps the
// conquest for the pettiest possible modern revenge. The fall from
// emperor to disgruntled customer is the whole punchline, and it
// only works because the first half sounds so grand.
//
// The code below builds that line out of its three beats instead of
// hard-coding one long string. That keeps each beat readable, lets
// us count characters per beat, and makes the 200-character ceiling
// easy to police: if any future tweak pushes a beat over budget,
// the guard below refuses to write the file rather than shipping
// an entry that breaks the rules.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The three beats of the exit, in order. Beat one is the arrival,
// beat two is the survey of the scene, beat three is the revenge.
const BEATS: readonly string[] = [
  "I came,",
  "I saw,",
  "I left a one-star review on my way out.",
] as const;

// The competition allows at most 200 characters for the whole line.
// Our line is far shorter, but the guard below enforces the cap
// anyway so a careless edit can never silently break the rules.
const MAX_ENTRY_CHARS = 200;

// Where the judge reads the entry from.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

/**
 * Join the three beats into the single exit line.
 *
 * Each beat already carries its own trailing punctuation, so the
 * join is a plain space — no extra commas, no double spaces, and
 * no trailing whitespace sneaking in at the end of the line.
 */
function assembleExitLine(beats: readonly string[]): string {
  const cleaned = beats.map((beat) => beat.trim());
  return cleaned.join(" ");
}

/**
 * Refuse to ship a line that breaks the competition rules.
 *
 * A one-line exit that is two lines, or that runs past 200
 * characters, is not a clever entry — it is a disqualified one.
 * Throwing here is deliberate: a loud failure in the build beats
 * a quiet failure on the leaderboard.
 */
/**
 * Report how much of the character budget each beat uses.
 *
 * This is only a diagnostic for the console, not part of the
 * entry itself. It makes it obvious at a glance that the third
 * beat — the one-star review — does most of the comic work
 * while the first two beats stay short and punchy.
 */
function reportBeatLengths(beats: readonly string[]): void {
  for (const [index, beat] of beats.entries()) {
    console.log(`Beat ${index + 1}: ${beat.length} chars — ${beat}`);
  }
}

function guardExitLine(line: string): void {
  if (line.length === 0) {
    throw new Error("Exit line is empty — nothing to say on the way out.");
  }
  if (line.includes("\n")) {
    throw new Error("Exit line must be a single line, no line breaks.");
  }
  if (line.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `Exit line is ${line.length} chars, over the ${MAX_ENTRY_CHARS} limit.`,
    );
  }
}

/**
 * Persist the finished line for the judge.
 *
 * The file ends with exactly one newline: the line itself, then
 * the file is done. No extra blank lines, no trailing spaces.
 */
function publishExitLine(line: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, `${line}\n`, "utf8");
  console.log(`Exit line (${line.length} chars) written to ${OUTPUT_FILE}`);
}

// Build it, check it, ship it. The exit itself is one line;
// getting there takes a little more care than leaving does.
// First, show the shape of the line so a human reader can see
// the three beats and their lengths before the file is written.
const exitLine = assembleExitLine(BEATS);
reportBeatLengths(BEATS);
guardExitLine(exitLine);
publishExitLine(exitLine);
