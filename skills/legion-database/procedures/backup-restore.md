# Backup Restore

> Legion procedure `backup-restore` · pack **Databases & Data Modelling** (`legion-database`)

## When to use
Set up database backups, point-in-time recovery and tested restore procedures. Use for any production database.

## Procedure
1. Define RPO and RTO with the user.
2. Configure automated backups and PITR.
3. Store backups encrypted in a separate account or region.
4. Write and test the restore runbook.
5. Schedule periodic restore drills.

## Quality checklist
- [ ] Restore actually tested
- [ ] backups encrypted and off-site

## Output
Backup configuration and restore runbook.
