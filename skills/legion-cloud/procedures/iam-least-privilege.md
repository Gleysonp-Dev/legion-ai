# IAM Least Privilege

> Legion procedure `iam-least-privilege` · pack **Cloud & Infrastructure** (`legion-cloud`)

## When to use
Review and tighten IAM policies to least privilege, removing wildcards and unused permissions. Use for cloud security hardening.

## Procedure
1. List roles, users and their attached policies.
2. Use access analyser or last-used data to find unused permissions.
3. Replace wildcards with specific actions and resources.
4. Enforce MFA and remove long-lived keys.
5. Test that workloads still function.

## Quality checklist
- [ ] No unnecessary wildcards
- [ ] workloads verified

## Output
Updated policies and change log.
