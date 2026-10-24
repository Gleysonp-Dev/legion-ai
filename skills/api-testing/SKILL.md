---
name: api-testing
description: "Test APIs with integration and contract tests (Supertest, pytest, Postman/Newman, Pact). Use to verify endpoints and prevent breaking clients."
---
# API Testing

> Legion skill · category **API Design & Integration**

## When to use
Test APIs with integration and contract tests (Supertest, pytest, Postman/Newman, Pact). Use to verify endpoints and prevent breaking clients.

## Procedure
1. List endpoints and their success and failure cases.
2. Write integration tests against a test database.
3. Add contract tests for consumers where multiple teams depend on the API.
4. Test auth and permission boundaries explicitly.
5. Run in CI with seeded data.

## Quality checklist
- [ ] Auth boundaries tested
- [ ] failures tested, not just happy paths

## Output
API test suite and CI wiring.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
