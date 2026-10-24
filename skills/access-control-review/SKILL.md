---
name: access-control-review
description: "Review authorisation logic for broken access control: IDOR, privilege escalation and missing checks. Use for multi-user or multi-tenant apps."
---
# Access Control Review

> Legion skill · category **Security (defensive)**

## When to use
Review authorisation logic for broken access control: IDOR, privilege escalation and missing checks. Use for multi-user or multi-tenant apps.

## Procedure
1. List roles, resources and allowed actions as a matrix.
2. Find every endpoint and check its authorisation.
3. Test object-level access with another user's IDs.
4. Centralise checks in policies or middleware.
5. Add tests for each boundary.

## Quality checklist
- [ ] Every endpoint has an explicit check
- [ ] IDOR tests exist

## Output
Permission matrix and fixes.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
