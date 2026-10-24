---
name: caching-strategy
description: "Design a caching strategy: what to cache, where, TTLs, invalidation and stampede protection. Use when reads are slow or expensive."
---
# Caching Strategy

> Legion skill · category **Architecture & System Design**

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

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
