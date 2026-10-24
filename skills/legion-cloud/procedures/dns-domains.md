# DNS Domains

> Legion procedure `dns-domains` · pack **Cloud & Infrastructure** (`legion-cloud`)

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
