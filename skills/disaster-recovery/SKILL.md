---
name: disaster-recovery
description: "Plan disaster recovery: RPO/RTO, backups, multi-region failover and recovery drills. Use for business-critical systems."
---
# Disaster Recovery

> Legion skill · category **Cloud & Infrastructure**

## When to use
Plan disaster recovery: RPO/RTO, backups, multi-region failover and recovery drills. Use for business-critical systems.

## Procedure
1. Define RPO and RTO per system.
2. Choose strategy: backup/restore, pilot light, warm standby, active-active.
3. Automate backups and replication.
4. Write the failover runbook.
5. Schedule recovery drills.

## Quality checklist
- [ ] Strategy matches RTO/RPO
- [ ] drill scheduled

## Output
DR plan and runbook.

## Works well with
Legion agents: `cloud-architect`, `cloud-security-engineer`, `cost-optimizer`, `devops-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
