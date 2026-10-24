---
name: rest-api-design
description: "Design a RESTful API with resources, methods, status codes, errors, pagination and filtering. Use before building endpoints."
---
# Rest API Design

> Legion skill · category **API Design & Integration**

## When to use
Design a RESTful API with resources, methods, status codes, errors, pagination and filtering. Use before building endpoints.

## Procedure
1. Model resources and relationships from use cases.
2. Assign HTTP methods and status codes consistently.
3. Standardise error responses (e.g. RFC 9457 problem details).
4. Define pagination (cursor preferred), filtering and sorting.
5. Provide request/response examples per endpoint.

## Quality checklist
- [ ] Consistent naming
- [ ] errors standardised
- [ ] pagination defined

## Output
An API design table and examples.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
