---
name: git-bisect
description: "Find the commit that introduced a bug using git bisect with an automated test. Use for regressions that \"used to work\"."
---
# Git Bisect

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Find the commit that introduced a bug using git bisect with an automated test. Use for regressions that "used to work".

## Procedure
1. Find a known good and known bad commit.
2. Write a script that exits 0 when good and 1 when bad.
3. Run git bisect run with the script.
4. Inspect the culprit commit's diff.
5. Fix and add a regression test.

## Quality checklist
- [ ] Test script reliable
- [ ] culprit confirmed by reverting

## Output
Culprit commit, explanation and fix.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
