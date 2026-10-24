---
name: health-checks
description: "Implement liveness, readiness and dependency health checks and status pages. Use for any deployed service."
---
# Health Checks

> Legion skill · category **Reliability & Observability**

## When to use
Implement liveness, readiness and dependency health checks and status pages. Use for any deployed service.

## Procedure
1. Add a liveness endpoint that checks the process only.
2. Add readiness that checks critical dependencies.
3. Keep checks fast and cached.
4. Wire into orchestrator and load balancer.
5. Publish a status page for users if needed.

## Quality checklist
- [ ] Liveness does not depend on downstream services

## Output
Health endpoints and config.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
