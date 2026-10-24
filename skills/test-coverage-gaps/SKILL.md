---
name: test-coverage-gaps
description: "Find untested critical code using coverage reports and risk analysis, then add the most valuable tests. Use to improve confidence quickly."
---
# Test Coverage Gaps

> Legion skill · category **Testing**

## When to use
Find untested critical code using coverage reports and risk analysis, then add the most valuable tests. Use to improve confidence quickly.

## Procedure
1. Generate a coverage report.
2. Cross it with risk: business-critical, frequently changed, bug-prone files.
3. List the top 10 untested risky paths.
4. Write tests for them in priority order.
5. Report coverage before and after for those areas.

## Quality checklist
- [ ] Prioritised by risk, not raw percentage

## Output
Gap list and new tests.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
