# API Testing

> Legion procedure `api-testing` · pack **API Design & Integration** (`legion-api`)

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
