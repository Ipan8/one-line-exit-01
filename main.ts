import * as fs from "node:fs";

// The One-Line Exit — make.fun entry (u-kreutzx-the-one-line-exit-1dc652d1)
// One line, max 200 chars: the funniest way to leave.
const ENTRY =
  "I came, I saw, I left a one-star review on my way out.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
