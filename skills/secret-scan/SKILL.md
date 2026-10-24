---
name: secret-scan
description: "Scan code and git history for leaked secrets and remediate (rotate, remove, prevent). Use when credentials may have been committed."
---
# Secret Scan

> Legion skill · category **Security (defensive)**

## When to use
Scan code and git history for leaked secrets and remediate (rotate, remove, prevent). Use when credentials may have been committed.

## Procedure
1. Run a secret scanner over the working tree and history.
2. Mask values in all output.
3. Rotate every real secret found first.
4. Move secrets into environment variables or a secret manager.
5. Add pre-commit and CI scanning.

## Quality checklist
- [ ] Secrets rotated, not just deleted
- [ ] values masked in reports

## Output
Masked findings and remediation steps.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
