# Caching Implementation

> Legion procedure `caching-implementation` · pack **Performance** (`legion-performance`)

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
