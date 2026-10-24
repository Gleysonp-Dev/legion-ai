---
name: slo-definition
description: "Define SLIs, SLOs and error budgets from user-facing behaviour. Use to set reliability targets."
---
# Slo Definition

> Legion skill · category **Reliability & Observability**

## When to use
Define SLIs, SLOs and error budgets from user-facing behaviour. Use to set reliability targets.

## Procedure
1. Identify critical user journeys.
2. Choose SLIs (availability, latency, correctness) measurable from data.
3. Set realistic SLO targets from history.
4. Define error budget policy.
5. Build dashboards and alerts on burn rate.

## Quality checklist
- [ ] SLIs measurable
- [ ] burn-rate alerts defined

## Output
SLO document and alert rules.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
