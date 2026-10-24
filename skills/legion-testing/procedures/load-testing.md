# Load Testing

> Legion procedure `load-testing` · pack **Testing** (`legion-testing`)

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
