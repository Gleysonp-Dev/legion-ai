# Distributed Tracing

> Legion procedure `distributed-tracing` · pack **Reliability & Observability** (`legion-reliability`)

## When to use
Add distributed tracing with OpenTelemetry across services, queues and databases. Use when requests span many services.

## Procedure
1. Install OpenTelemetry SDKs and auto-instrumentation.
2. Propagate context across HTTP and messaging.
3. Add custom spans for key business operations.
4. Configure sampling.
5. Export to a tracing backend and verify end-to-end traces.

## Quality checklist
- [ ] Traces connect across services
- [ ] sampling configured

## Output
Tracing setup and sample trace.
