---
name: legion-council
description: "Cross-AI review: have other AIs (Codex, Claude, Gemini — whichever is installed besides you) independently review your changes, challenge a plan, or give second opinions, in read-only mode. Use before merging important changes, for risky or security-sensitive work, for architecture decisions, or when the user says 'council', 'second opinion' or 'have another AI check it'."
---

# Legion Council — AIs reviewing each other

One AI did the work; independent AIs from other vendors review it. They catch different mistakes than you do. The reviewers only read — they never change files.

> **Paths:** `~` means your home folder. In Windows PowerShell (Codex, Cursor) write `$HOME\.legion\bin\<file>.js` instead of `~/.legion/bin/<file>.js`; Claude Code's shell understands `~` everywhere.

## When to call the council
- Before finishing **full**-mode work, security or payment changes, data migrations, public APIs.
- Before building from a big plan (`plan` mode) — cheapest moment to catch a wrong direction.
- When the user asks for a second opinion, or you are unsure between two approaches (`ask` mode).
Skip it for trivial edits: each reviewer run costs the user tokens on that other tool.

## Run it
The CLI lives at `~/.legion/bin/council.js` (Windows: `%USERPROFILE%\.legion\bin\council.js`). Run from the project folder and pass who you are with `--host` (`claude`, `codex`, `gemini` or `cursor`) so you never review yourself.

```bash
node ~/.legion/bin/council.js status --host claude                       # who can review
node ~/.legion/bin/council.js review --host claude --focus "signup must validate email"
node ~/.legion/bin/council.js review --host claude --base main          # whole branch vs main
node ~/.legion/bin/council.js plan docs/plan.md --host claude
node ~/.legion/bin/council.js ask "Postgres or DynamoDB for this workload?" --host claude
```
Reviews can take a few minutes (default timeout 10 min per reviewer, `--timeout <s>` to change). Run it in the background if your tool allows, and keep working.

If `status` shows no other AI installed, say so in one line and use the `chief-reviewer` agent instead.
If a reviewer answers **"not logged in"**, tell the user the exact fix the report prints (e.g. run `claude` once and sign in) — do not count it as a review.
Do **not** set `LEGION_HOME` or move the report elsewhere: Mission Control reads the `Saved:` line in your output and files the verdict itself, even when your sandbox cannot write to `~/.legion`.

## Handle the verdict — you have the final word
For every finding (F1, F2…):
1. **Accept** → fix it, or
2. **Reject** → write one line why (reviewers lack context sometimes and can be wrong).
Blockers and majors must be fixed or explicitly rejected with a reason. After fixing, run `review` once more (max 2 rounds total).

## Report to the user
Add to the Legion evidence table:

| Check | Proof | Status |
|---|---|---|
| Council review (Codex + Gemini) | report `~/.legion/council/<file>.md` — 3 findings: F1 fixed, F2 fixed, F3 rejected (reason) | ✅ |

## Learn from it
If a reviewer caught something the responsible agent should have caught, save a lesson:
`node ~/.legion/bin/memory.js lesson <agent-name> "<what to check next time>"`.
