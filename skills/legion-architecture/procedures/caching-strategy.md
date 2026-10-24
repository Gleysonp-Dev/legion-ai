# Caching Strategy

> Legion procedure `caching-strategy` · pack **Architecture & System Design** (`legion-architecture`)

## When to use
Design a caching strategy: what to cache, where, TTLs, invalidation and stampede protection. Use when reads are slow or expensive.

## Procedure
1. Identify hot read paths and their tolerance for staleness.
2. Choose cache layers (CDN, HTTP, application, database).
3. Define keys, TTLs and invalidation triggers.
4. Protect against stampedes and cache penetration.
5. Measure hit rate and latency after rollout.

## Quality checklist
- [ ] Staleness tolerance explicit
- [ ] invalidation defined
- [ ] metrics planned

## Output
A caching plan with keys, TTLs and invalidation rules.
