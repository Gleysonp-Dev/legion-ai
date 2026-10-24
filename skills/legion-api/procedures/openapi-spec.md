# Openapi Spec

> Legion procedure `openapi-spec` · pack **API Design & Integration** (`legion-api`)

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
