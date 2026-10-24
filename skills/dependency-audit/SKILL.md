---
name: dependency-audit
description: "Audit dependencies for vulnerabilities and licence issues and plan upgrades. Use regularly or before releases."
---
# Dependency Audit

> Legion skill · category **Security (defensive)**

## When to use
Audit dependencies for vulnerabilities and licence issues and plan upgrades. Use regularly or before releases.

## Procedure
1. Run the ecosystem audit tool.
2. Check whether vulnerable code paths are reachable.
3. Check licences against policy.
4. Group safe upgrades and test them.
5. Enable automated dependency update PRs.

## Quality checklist
- [ ] Critical issues addressed or justified
- [ ] tests pass after upgrades

## Output
Audit report and upgrade PR plan.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
