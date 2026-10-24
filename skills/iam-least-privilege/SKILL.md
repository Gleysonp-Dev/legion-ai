---
name: iam-least-privilege
description: "Review and tighten IAM policies to least privilege, removing wildcards and unused permissions. Use for cloud security hardening."
---
# IAM Least Privilege

> Legion skill · category **Cloud & Infrastructure**

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

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
