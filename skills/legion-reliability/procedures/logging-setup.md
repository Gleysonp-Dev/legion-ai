# Logging Setup

> Legion procedure `logging-setup` · pack **Reliability & Observability** (`legion-reliability`)

## When to use
Set up structured logging with levels, correlation IDs, redaction and centralised collection. Use when logs are hard to search.

## Procedure
1. Choose a structured logger for the stack.
2. Add request/correlation IDs to every log line.
3. Redact secrets and personal data.
4. Set levels appropriately per environment.
5. Ship logs to a central store.

## Quality checklist
- [ ] JSON logs
- [ ] IDs present
- [ ] sensitive data redacted

## Output
Logging configuration.
