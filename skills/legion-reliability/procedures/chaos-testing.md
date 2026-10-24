# Chaos Testing

> Legion procedure `chaos-testing` · pack **Reliability & Observability** (`legion-reliability`)

## When to use
Run controlled chaos experiments (kill instances, add latency, drop dependencies) to validate resilience. Use for systems claiming high availability.

## Procedure
1. Form a hypothesis about steady state.
2. Start in staging with a small blast radius.
3. Inject one failure at a time.
4. Observe metrics and user impact.
5. Fix weaknesses and repeat.

## Quality checklist
- [ ] Blast radius limited
- [ ] abort plan ready

## Output
Experiment report and fixes.
