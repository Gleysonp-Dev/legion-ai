---
name: root-cause-analysis
description: "Find the root cause of a bug systematically: reproduce, hypothesise, test, fix and prevent. Use for any bug whose cause is unclear."
---
# Root Cause Analysis

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Find the root cause of a bug systematically: reproduce, hypothesise, test, fix and prevent. Use for any bug whose cause is unclear.

## Procedure
1. Reproduce reliably and note exact steps, environment and inputs.
2. Write down hypotheses ranked by likelihood.
3. Test each with evidence: logs, debugger, minimal repro.
4. Fix the root cause with the smallest change.
5. Add a regression test and check for similar bugs.

## Quality checklist
- [ ] Root cause explained with evidence
- [ ] regression test added

## Output
Root-cause summary, fix and test.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
