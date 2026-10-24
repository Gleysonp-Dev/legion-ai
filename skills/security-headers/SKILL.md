---
name: security-headers
description: "Configure security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors, referrer and permissions policies, CORS. Use when hardening a web app."
---
# Security Headers

> Legion skill · category **Security (defensive)**

## When to use
Configure security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors, referrer and permissions policies, CORS. Use when hardening a web app.

## Procedure
1. Audit current headers.
2. Add HSTS, nosniff, referrer policy and frame protections.
3. Build a CSP starting in report-only mode.
4. Configure CORS to exact allowed origins.
5. Verify with a header scanner.

## Quality checklist
- [ ] CSP tested in report-only first
- [ ] CORS not wildcard with credentials

## Output
Header configuration and scan results.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
