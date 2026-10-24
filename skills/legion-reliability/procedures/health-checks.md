# Health Checks

> Legion procedure `health-checks` · pack **Reliability & Observability** (`legion-reliability`)

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
