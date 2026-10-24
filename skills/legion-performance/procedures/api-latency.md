# API Latency

> Legion procedure `api-latency` · pack **Performance** (`legion-performance`)

## When to use
Reduce API response time by finding slow dependencies, queries and serialisation, then caching or parallelising. Use when endpoints are slow.

## Procedure
1. Measure p50/p95/p99 latency per endpoint.
2. Trace a slow request to see time per step.
3. Fix slow queries, parallelise independent calls, add caching.
4. Reduce payload size and serialisation cost.
5. Verify with load tests.

## Quality checklist
- [ ] Percentiles measured before and after

## Output
Latency report and fixes.
