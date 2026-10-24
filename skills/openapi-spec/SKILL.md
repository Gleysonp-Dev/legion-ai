---
name: openapi-spec
description: "Write or generate an OpenAPI 3 specification with schemas, examples, security schemes and validation. Use to document an API or generate clients."
---
# Openapi Spec

> Legion skill · category **API Design & Integration**

## When to use
Write or generate an OpenAPI 3 specification with schemas, examples, security schemes and validation. Use to document an API or generate clients.

## Procedure
1. Describe every path, parameter, request body and response.
2. Define reusable component schemas with required fields and formats.
3. Add security schemes and per-operation requirements.
4. Include realistic examples.
5. Validate the spec with a linter (Spectral or Redocly).

## Quality checklist
- [ ] Spec validates
- [ ] every response documented
- [ ] examples realistic

## Output
openapi.yaml validated.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
