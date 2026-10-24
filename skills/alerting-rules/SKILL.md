---
name: alerting-rules
description: "Write actionable alerts with clear thresholds, severities, routing and runbook links; remove noisy alerts. Use when on-call is noisy or blind."
---
# Alerting Rules

> Legion skill · category **Reliability & Observability**

## When to use
Write actionable alerts with clear thresholds, severities, routing and runbook links; remove noisy alerts. Use when on-call is noisy or blind.

## Procedure
1. List what should wake someone vs what can wait.
2. Alert on symptoms (SLO burn) rather than causes when possible.
3. Set severities and routing.
4. Link every alert to a runbook.
5. Review alert history and remove noise.

## Quality checklist
- [ ] Every alert actionable with runbook

## Output
Alert rules and routing config.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
