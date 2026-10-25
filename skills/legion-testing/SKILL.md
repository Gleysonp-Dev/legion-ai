---
name: legion-testing
description: "Testing pack with 10 ready procedures: write unit tests, tdd cycle, e2e playwright, test coverage gaps, flaky test fixer, mocking strategy, load testing, regression suite, property based testing, manual test plan. Use for any testing task."
---
# Testing — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `write-unit-tests` | Write unit tests for a function, class or module covering behaviour, edge cases and errors. Use when code lacks tests. |
| `tdd-cycle` | Develop a feature test-first with red-green-refactor cycles. Use when building logic-heavy code where correctness matters. |
| `e2e-playwright` | Write end-to-end browser tests with Playwright for critical user journeys. Use for signup, login, checkout or any key flow. |
| `test-coverage-gaps` | Find untested critical code using coverage reports and risk analysis, then add the most valuable tests. Use to improve confidence quickly. |
| `flaky-test-fixer` | Diagnose and fix flaky tests caused by timing, shared state, order dependence or network. Use when CI fails randomly. |
| `mocking-strategy` | Decide what to mock, stub or fake in tests and implement it cleanly (MSW, test doubles, in-memory fakes). Use when tests are brittle or slow because of dependencies. |
| `load-testing` | Run load and stress tests (k6, Locust, Artillery) to find capacity limits and bottlenecks. Use before launches or when scaling. |
| `regression-suite` | Build a regression test suite from past bugs and critical behaviours. Use after recurring bugs or before refactors. |
| `property-based-testing` | Use property-based testing (fast-check, Hypothesis) to find edge cases automatically. Use for parsers, algorithms, serializers and financial calculations. |
| `manual-test-plan` | Write a manual QA test plan with test cases, steps, expected results and devices. Use before releases when automation is incomplete. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
