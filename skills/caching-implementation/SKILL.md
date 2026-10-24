---
name: caching-implementation
description: "Implement caching (Redis, in-memory, HTTP cache headers, CDN) with correct keys, TTLs and invalidation. Use after deciding what to cache."
---
# Caching Implementation

> Legion skill · category **Performance**

## When to use
Implement caching (Redis, in-memory, HTTP cache headers, CDN) with correct keys, TTLs and invalidation. Use after deciding what to cache.

## Procedure
1. Pick the layer for each cached item.
2. Implement cache-aside or write-through.
3. Set TTLs and invalidate on writes.
4. Add stampede protection.
5. Monitor hit rate.

## Quality checklist
- [ ] Invalidation correct
- [ ] hit rate monitored

## Output
Cache code and configuration.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
