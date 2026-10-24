---
name: encryption-setup
description: "Apply encryption correctly: TLS everywhere, encryption at rest, key management and password hashing. Use when storing or transmitting sensitive data."
---
# Encryption Setup

> Legion skill · category **Security (defensive)**

## When to use
Apply encryption correctly: TLS everywhere, encryption at rest, key management and password hashing. Use when storing or transmitting sensitive data.

## Procedure
1. Enforce TLS 1.2+ for all traffic.
2. Enable at-rest encryption for databases, disks and backups.
3. Use a KMS for keys; rotate them.
4. Hash passwords with argon2id or bcrypt.
5. Never write custom crypto.

## Quality checklist
- [ ] No plaintext secrets at rest
- [ ] keys in KMS

## Output
Encryption configuration and notes.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
