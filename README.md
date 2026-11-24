# The One-Line Exit

[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Ipan8/one-line-exit-01/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Ipan8/one-line-exit-01/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

## The entry

> I came, I saw, I left a one-star review on my way out.

One line, 54 characters. Caesar walks in, surveys the scene — and
instead of conquering, he leaves a one-star review on his way out.
The grandest exit in history, downgraded to the pettiest goodbye
of the modern age.

## How it works

`main.ts` builds the line from its three beats, checks it against
the 200-character limit, and writes it to `/output/entry.txt`.
Run it with `node main.ts`.

## Why this joke

The brief asks for the funniest way to leave in a single line.
Most exits are loud — slammed doors, dramatic speeches, a final
insult tossed over the shoulder. This one is quiet, which is what
makes it sting: the reviewer does not argue, does not explain,
does not even stay. The review is already posted before the door
closes, and it will outlast the visit by years. Petty, permanent,
and completely effortless — the perfect modern exit.

## The three beats

1. **"I came,"** — the arrival, calm and confident.
2. **"I saw,"** — the survey. Whatever was on offer has been seen.
3. **"I left a one-star review on my way out."** — the verdict.
   No conquest, no second chance, just a single star and a door
   closing behind it.

## Verifying the entry

```sh
node main.ts
cat /output/entry.txt
```

The output file should contain exactly the entry line, followed
by a single newline — nothing more, nothing less.

## License

MIT — see [LICENSE](LICENSE).
