---
name: chaos-testing
description: "Run controlled chaos experiments (kill instances, add latency, drop dependencies) to validate resilience. Use for systems claiming high availability."
---
# Chaos Testing

> Legion skill · category **Reliability & Observability**

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

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
