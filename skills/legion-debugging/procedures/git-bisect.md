# Git Bisect

> Legion procedure `git-bisect` · pack **Debugging & Troubleshooting** (`legion-debugging`)

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
