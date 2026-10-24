---
name: production-incident
description: "Guide incident response: triage, mitigate, communicate, resolve and write a postmortem. Use when production is down or degraded."
---
# Production Incident

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Guide incident response: triage, mitigate, communicate, resolve and write a postmortem. Use when production is down or degraded.

## Procedure
1. Assess impact and severity; assign an incident lead.
2. Mitigate first: rollback, feature flag, scale up, failover.
3. Communicate status at a regular cadence.
4. Find root cause once stable.
5. Write a blameless postmortem with action items.

## Quality checklist
- [ ] Mitigation before deep debugging
- [ ] status communicated
- [ ] actions owned

## Output
Incident timeline and postmortem.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
