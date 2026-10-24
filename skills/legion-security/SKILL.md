---
name: legion-security
description: "Security (defensive) playbook with 10 ready procedures: security review, owasp checklist, secret scan, dependency audit, input validation, security headers, threat model, access control review, encryption setup, security incident response. Use for any security task."
---
# Security (defensive) — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `security-review` | Run a defensive security review of your own code against OWASP Top 10 with severity and fixes. Use before releases or after big changes. |
| `owasp-checklist` | Walk through the OWASP Top 10 and ASVS checklist for a web app and record pass/fail with evidence. Use for structured security assessments. |
| `secret-scan` | Scan code and git history for leaked secrets and remediate (rotate, remove, prevent). Use when credentials may have been committed. |
| `dependency-audit` | Audit dependencies for vulnerabilities and licence issues and plan upgrades. Use regularly or before releases. |
| `input-validation` | Add strict input validation and sanitisation at every trust boundary (schemas, allowlists, encoding). Use to prevent injection and bad data. |
| `security-headers` | Configure security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors, referrer and permissions policies, CORS. Use when hardening a web app. |
| `threat-model` | Create a STRIDE threat model with data-flow diagram, threats and mitigations. Use when designing features that handle sensitive data or money. |
| `access-control-review` | Review authorisation logic for broken access control: IDOR, privilege escalation and missing checks. Use for multi-user or multi-tenant apps. |
| `encryption-setup` | Apply encryption correctly: TLS everywhere, encryption at rest, key management and password hashing. Use when storing or transmitting sensitive data. |
| `security-incident-response` | Respond to a suspected security incident in your own systems: contain, preserve evidence, eradicate, recover and notify. Use when a breach or compromise is suspected. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
