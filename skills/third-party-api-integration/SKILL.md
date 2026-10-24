---
name: third-party-api-integration
description: "Integrate any external API safely: read docs, auth, rate limits, error handling, adapters and mocks. Use when connecting to a new service."
---
# Third Party API Integration

> Legion skill · category **API Design & Integration**

## When to use
Integrate any external API safely: read docs, auth, rate limits, error handling, adapters and mocks. Use when connecting to a new service.

## Procedure
1. Read the official docs and note auth, limits, pagination and error codes.
2. Create an adapter interface so the rest of the code does not depend on the provider.
3. Handle timeouts, retries and rate limits.
4. Store credentials in secrets, never in code.
5. Write tests against recorded or mocked responses.

## Quality checklist
- [ ] Provider isolated behind adapter
- [ ] credentials in secrets
- [ ] failures handled

## Output
Adapter module with tests and setup notes.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
