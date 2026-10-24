# Disaster Recovery

> Legion procedure `disaster-recovery` · pack **Cloud & Infrastructure** (`legion-cloud`)

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
