# API Error Handling

> Legion procedure `api-error-handling` · pack **API Design & Integration** (`legion-api`)

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
