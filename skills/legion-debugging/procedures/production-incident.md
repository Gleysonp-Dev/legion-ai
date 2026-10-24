# Production Incident

> Legion procedure `production-incident` · pack **Debugging & Troubleshooting** (`legion-debugging`)

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
