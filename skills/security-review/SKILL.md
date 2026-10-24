---
name: security-review
description: "Run a defensive security review of your own code against OWASP Top 10 with severity and fixes. Use before releases or after big changes."
---
# Security Review

> Legion skill · category **Security (defensive)**

## When to use
Run a defensive security review of your own code against OWASP Top 10 with severity and fixes. Use before releases or after big changes.

## Procedure
1. Map entry points, data flows and sensitive data.
2. Check auth, access control, input validation, output encoding and crypto usage.
3. Check dependencies and configuration.
4. Rate each finding by severity and exploitability.
5. Give concrete fixes and tests.

## Quality checklist
- [ ] Only the user's own or authorised systems
- [ ] every finding has a fix

## Output
Security review report ordered by severity.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
