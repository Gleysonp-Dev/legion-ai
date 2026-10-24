---
name: load-testing
description: "Run load and stress tests (k6, Locust, Artillery) to find capacity limits and bottlenecks. Use before launches or when scaling."
---
# Load Testing

> Legion skill · category **Testing**

## When to use
Run load and stress tests (k6, Locust, Artillery) to find capacity limits and bottlenecks. Use before launches or when scaling.

## Procedure
1. Define scenarios from real traffic patterns.
2. Set goals: throughput, p95 latency, error rate.
3. Ramp load gradually; run against a production-like environment.
4. Collect server metrics during the run.
5. Report the breaking point and the bottleneck.

## Quality checklist
- [ ] Production-like environment
- [ ] goals defined before running

## Output
Load test scripts and results report.

## Works well with
Legion agents: `test-architect`, `unit-tester`, `e2e-tester`, `qa-gatekeeper`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
