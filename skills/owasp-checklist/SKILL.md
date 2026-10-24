---
name: owasp-checklist
description: "Walk through the OWASP Top 10 and ASVS checklist for a web app and record pass/fail with evidence. Use for structured security assessments."
---
# OWASP Checklist

> Legion skill · category **Security (defensive)**

## When to use
Walk through the OWASP Top 10 and ASVS checklist for a web app and record pass/fail with evidence. Use for structured security assessments.

## Procedure
1. List the checklist items relevant to the app.
2. Check each with code references or test evidence.
3. Mark pass, fail or not applicable.
4. Prioritise failures.
5. Create remediation tickets.

## Quality checklist
- [ ] Evidence recorded for every item

## Output
Completed checklist table.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
