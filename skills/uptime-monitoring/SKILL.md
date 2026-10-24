---
name: uptime-monitoring
description: "Set up external uptime and synthetic monitoring for sites, APIs and SSL expiry. Use for any public service."
---
# Uptime Monitoring

> Legion skill · category **Reliability & Observability**

## When to use
Set up external uptime and synthetic monitoring for sites, APIs and SSL expiry. Use for any public service.

## Procedure
1. Choose endpoints and user journeys to check.
2. Configure checks from multiple regions.
3. Alert on consecutive failures.
4. Monitor TLS certificate and domain expiry.
5. Report uptime monthly.

## Quality checklist
- [ ] Multi-region checks
- [ ] cert expiry monitored

## Output
Monitoring configuration.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
