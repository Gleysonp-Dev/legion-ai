---
name: e2e-playwright
description: "Write end-to-end browser tests with Playwright for critical user journeys. Use for signup, login, checkout or any key flow."
---
# E2E Playwright

> Legion skill · category **Testing**

## When to use
Write end-to-end browser tests with Playwright for critical user journeys. Use for signup, login, checkout or any key flow.

## Procedure
1. List the critical journeys and their success conditions.
2. Use role- and label-based locators.
3. Isolate tests with fresh data and auth state.
4. Enable traces and screenshots on failure.
5. Run headless in CI across target browsers.

## Quality checklist
- [ ] No fixed sleeps
- [ ] tests independent
- [ ] runs in CI

## Output
Playwright specs and config.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
