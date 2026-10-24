---
name: api-client-sdk
description: "Build a typed API client or SDK with auth, retries, pagination helpers and error types. Use to make an API easy to consume."
---
# API Client SDK

> Legion skill · category **API Design & Integration**

## When to use
Build a typed API client or SDK with auth, retries, pagination helpers and error types. Use to make an API easy to consume.

## Procedure
1. Generate types from the OpenAPI spec when possible.
2. Wrap auth, base URL and timeouts in a client constructor.
3. Add retries with backoff for idempotent requests.
4. Provide pagination iterators and typed errors.
5. Write README examples and tests against a mock server.

## Quality checklist
- [ ] Types match spec
- [ ] retries only on idempotent calls
- [ ] examples run

## Output
SDK code, tests and README.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
