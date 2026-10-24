# Frontend Testing

> Legion procedure `frontend-testing` · pack **Frontend Development** (`legion-frontend`)

## When to use
Test frontend components and pages with Testing Library, Vitest/Jest and mock APIs (MSW). Use when UI code lacks tests.

## Procedure
1. List user-visible behaviours for the component or page.
2. Query by role and label as a user would.
3. Mock network with MSW instead of stubbing fetch internals.
4. Test loading, error and empty states.
5. Avoid snapshot tests for logic; keep them for stable visuals only.

## Quality checklist
- [ ] Tests use accessible queries
- [ ] network mocked
- [ ] states covered

## Output
Test files with all behaviours passing.
