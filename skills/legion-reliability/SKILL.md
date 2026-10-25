---
name: legion-reliability
description: "Reliability & Observability pack with 10 ready procedures: slo definition, logging setup, metrics dashboards, alerting rules, distributed tracing, runbook writer, postmortem, health checks, chaos testing, uptime monitoring. Use for any reliability & observability task."
---
# Reliability & Observability — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `slo-definition` | Define SLIs, SLOs and error budgets from user-facing behaviour. Use to set reliability targets. |
| `logging-setup` | Set up structured logging with levels, correlation IDs, redaction and centralised collection. Use when logs are hard to search. |
| `metrics-dashboards` | Instrument metrics and build dashboards (Prometheus/Grafana, Datadog, CloudWatch) for services. Use to see system health at a glance. |
| `alerting-rules` | Write actionable alerts with clear thresholds, severities, routing and runbook links; remove noisy alerts. Use when on-call is noisy or blind. |
| `distributed-tracing` | Add distributed tracing with OpenTelemetry across services, queues and databases. Use when requests span many services. |
| `runbook-writer` | Write operational runbooks with detection, diagnosis, mitigation and escalation steps. Use for recurring incidents and on-call readiness. |
| `postmortem` | Write a blameless postmortem: summary, impact, timeline, root causes, what went well and action items. Use after any incident. |
| `health-checks` | Implement liveness, readiness and dependency health checks and status pages. Use for any deployed service. |
| `chaos-testing` | Run controlled chaos experiments (kill instances, add latency, drop dependencies) to validate resilience. Use for systems claiming high availability. |
| `uptime-monitoring` | Set up external uptime and synthetic monitoring for sites, APIs and SSL expiry. Use for any public service. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`sre-engineer`, `observability-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
