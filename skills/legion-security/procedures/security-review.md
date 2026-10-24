# Security Review

> Legion procedure `security-review` · pack **Security (defensive)** (`legion-security`)

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
