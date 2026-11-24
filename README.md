# Monday, Reviewed in One Line

[![make.fun competition](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/competitions/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/samidyt/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1-makefun/rank.svg)](https://make.fun/competitions/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/samidyt/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1-makefun/reward.svg)](https://make.fun/competitions/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

A one-line review of my Monday for the [make.fun](https://make.fun) competition
**u-zeroxfive-monday-reviewed-in-one-line-e55de3c1** — "Monday, Reviewed in One Line".
Free to enter, top five paid. The entry is the funniest one-line review of my
own Monday, under 200 characters, and nothing else.

## The entry

> Monday review: my alarm snoozed itself, the coffee filed a complaint, and my to-do list had babies while I blinked.

115 characters, one line, no title, no explanation.

## How it runs

`main.ts` (Node 22.18+, TypeScript run as-is, no dependencies) writes exactly
that line to `/output/entry.txt` — no trailing newline — and self-checks the
gate first: 1–200 characters, not only whitespace, a single line. It then
reads the file back and refuses to exit cleanly unless what landed on disk
is byte-identical to the reviewed line.

```sh
node main.ts            # writes /output/entry.txt
OUTPUT_DIR=./out node main.ts   # write somewhere else (local verification)
```

Two local runs produce byte-identical output
(`sha256 3069b79db68674f6029d4cfe1b4e34348e561168ff7fb40671f554221de4bf39`).

Referral: [make.fun/r/svtazsn5](https://make.fun/r/svtazsn5)
