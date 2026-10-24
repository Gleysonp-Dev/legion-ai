---
name: api-versioning
description: "Plan API versioning, deprecation and backward-compatible changes. Use before making breaking changes to a public API."
---
# API Versioning

> Legion skill · category **API Design & Integration**

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

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
