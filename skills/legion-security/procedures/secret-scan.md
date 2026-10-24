# Secret Scan

> Legion procedure `secret-scan` · pack **Security (defensive)** (`legion-security`)

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
