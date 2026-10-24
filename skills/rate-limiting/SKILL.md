---
name: rate-limiting
description: "Add rate limiting and throttling to APIs (token bucket, sliding window) per user, IP or key. Use to protect endpoints from abuse and overload."
---
# Rate Limiting

> Legion skill · category **Backend Development**

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

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
