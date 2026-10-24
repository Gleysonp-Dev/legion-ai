---
name: dns-domains
description: "Configure domains and DNS records (A, CNAME, MX, TXT, SPF, DKIM, DMARC) and TLS certificates. Use when connecting a domain to a site or email."
---
# DNS Domains

> Legion skill · category **Cloud & Infrastructure**

## When to use
Configure domains and DNS records (A, CNAME, MX, TXT, SPF, DKIM, DMARC) and TLS certificates. Use when connecting a domain to a site or email.

## Procedure
1. List services that need records (web, email, verification).
2. Create records with correct TTLs.
3. Configure email authentication records.
4. Issue TLS certificates (automatic where possible).
5. Verify propagation with dig.

## Quality checklist
- [ ] Email auth records valid
- [ ] HTTPS works on apex and www

## Output
DNS record table and verification output.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
