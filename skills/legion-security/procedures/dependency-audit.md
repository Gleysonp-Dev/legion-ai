# Dependency Audit

> Legion procedure `dependency-audit` · pack **Security (defensive)** (`legion-security`)

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
