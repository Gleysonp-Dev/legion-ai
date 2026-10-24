# Encryption Setup

> Legion procedure `encryption-setup` · pack **Security (defensive)** (`legion-security`)

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
