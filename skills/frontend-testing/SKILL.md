---
name: frontend-testing
description: "Test frontend components and pages with Testing Library, Vitest/Jest and mock APIs (MSW). Use when UI code lacks tests."
---
# Frontend Testing

> Legion skill · category **Frontend Development**

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

## Works well with
Legion agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
