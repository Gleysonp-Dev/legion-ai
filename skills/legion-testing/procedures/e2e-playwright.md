# E2E Playwright

> Legion procedure `e2e-playwright` · pack **Testing** (`legion-testing`)

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
