---
name: manual-test-plan
description: "Write a manual QA test plan with test cases, steps, expected results and devices. Use before releases when automation is incomplete."
---
# Manual Test Plan

> Legion skill · category **Testing**

## When to use
Write a manual QA test plan with test cases, steps, expected results and devices. Use before releases when automation is incomplete.

## Procedure
1. List features in scope and risk areas.
2. Write test cases with preconditions, steps and expected results.
3. Include negative and edge cases.
4. Define devices, browsers and accounts to use.
5. Provide a results template to record pass/fail.

## Quality checklist
- [ ] Each case reproducible by someone else
- [ ] negative cases included

## Output
A test plan table ready to execute.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
