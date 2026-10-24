---
name: api-latency
description: "Reduce API response time by finding slow dependencies, queries and serialisation, then caching or parallelising. Use when endpoints are slow."
---
# API Latency

> Legion skill · category **Performance**

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

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
