---
name: metrics-dashboards
description: "Instrument metrics and build dashboards (Prometheus/Grafana, Datadog, CloudWatch) for services. Use to see system health at a glance."
---
# Metrics Dashboards

> Legion skill · category **Reliability & Observability**

## When to use
Instrument metrics and build dashboards (Prometheus/Grafana, Datadog, CloudWatch) for services. Use to see system health at a glance.

## Procedure
1. Instrument golden signals per service.
2. Add business metrics (signups, orders).
3. Build an overview dashboard with key numbers on top.
4. Add drill-down panels.
5. Share links in runbooks.

## Quality checklist
- [ ] Golden signals present
- [ ] dashboard readable at a glance

## Output
Instrumentation and dashboard definition.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
