# Security Headers

> Legion procedure `security-headers` · pack **Security (defensive)** (`legion-security`)

## When to use
Configure security headers: CSP, HSTS, X-Content-Type-Options, frame-ancestors, referrer and permissions policies, CORS. Use when hardening a web app.

## Procedure
1. Audit current headers.
2. Add HSTS, nosniff, referrer policy and frame protections.
3. Build a CSP starting in report-only mode.
4. Configure CORS to exact allowed origins.
5. Verify with a header scanner.

## Quality checklist
- [ ] CSP tested in report-only first
- [ ] CORS not wildcard with credentials

## Output
Header configuration and scan results.
