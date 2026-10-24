# API Versioning

> Legion procedure `api-versioning` · pack **API Design & Integration** (`legion-api`)

## When to use
Plan API versioning, deprecation and backward-compatible changes. Use before making breaking changes to a public API.

## Procedure
1. Classify the change as additive or breaking.
2. Choose a versioning scheme (URL, header, date-based).
3. Keep old behaviour working during a deprecation window.
4. Announce deprecation with headers, docs and changelog.
5. Track usage of old versions before removal.

## Quality checklist
- [ ] Breaking changes identified
- [ ] deprecation window defined
- [ ] usage tracked

## Output
A versioning and deprecation plan.
