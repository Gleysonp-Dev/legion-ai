# Rate Limiting

> Legion procedure `rate-limiting` · pack **Backend Development** (`legion-backend`)

## When to use
Add rate limiting and throttling to APIs (token bucket, sliding window) per user, IP or key. Use to protect endpoints from abuse and overload.

## Procedure
1. Identify endpoints to protect and fair limits per tier.
2. Choose algorithm and storage (in-memory, Redis).
3. Return 429 with Retry-After and rate-limit headers.
4. Apply stricter limits to auth and expensive endpoints.
5. Monitor limit hits for tuning.

## Quality checklist
- [ ] Limits distributed-safe
- [ ] headers returned
- [ ] auth endpoints protected

## Output
Rate-limit middleware and configuration.
