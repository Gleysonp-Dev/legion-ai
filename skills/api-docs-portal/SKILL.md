---
name: api-docs-portal
description: "Produce developer-friendly API documentation: quickstart, auth guide, reference and code samples. Use when external developers will use the API."
---
# API Docs Portal

> Legion skill · category **API Design & Integration**

## When to use
Produce developer-friendly API documentation: quickstart, auth guide, reference and code samples. Use when external developers will use the API.

## Procedure
1. Write a 5-minute quickstart that ends with a successful call.
2. Explain authentication with a working example.
3. Generate reference docs from the spec.
4. Add samples in curl and the top 2 languages of the audience.
5. Document rate limits, errors and changelog.

## Quality checklist
- [ ] Quickstart works copy-paste
- [ ] samples tested

## Output
API docs pages.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
