---
name: api-error-handling
description: "Standardise API error handling: error codes, messages, logging, client guidance and mapping from exceptions. Use when errors are inconsistent or leak internals."
---
# API Error Handling

> Legion skill · category **API Design & Integration**

## When to use
Standardise API error handling: error codes, messages, logging, client guidance and mapping from exceptions. Use when errors are inconsistent or leak internals.

## Procedure
1. Define an error format with code, message, details and request ID.
2. Map domain and validation exceptions to status codes centrally.
3. Hide stack traces and internals from clients.
4. Log errors with context and correlation IDs.
5. Document error codes for clients.

## Quality checklist
- [ ] No internals leaked
- [ ] every error has a request ID
- [ ] codes documented

## Output
Error middleware and error catalogue.

## Works well with
Legion agents: `api-designer`, `backend-engineer`, `integration-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
