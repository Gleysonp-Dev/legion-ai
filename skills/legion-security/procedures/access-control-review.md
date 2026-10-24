# Access Control Review

> Legion procedure `access-control-review` · pack **Security (defensive)** (`legion-security`)

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
