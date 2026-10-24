# Root Cause Analysis

> Legion procedure `root-cause-analysis` · pack **Debugging & Troubleshooting** (`legion-debugging`)

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
