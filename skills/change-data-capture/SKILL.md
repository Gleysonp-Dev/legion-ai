---
name: change-data-capture
description: "Set up change data capture (Debezium, logical replication, Fivetran) to stream database changes downstream. Use to sync databases or feed warehouses in near real time."
---
# Change Data Capture

> Legion skill · category **Data Engineering**

## When to use
Set up change data capture (Debezium, logical replication, Fivetran) to stream database changes downstream. Use to sync databases or feed warehouses in near real time.

## Procedure
1. Choose CDC method supported by the database.
2. Configure replication slots and permissions.
3. Handle schema changes.
4. Monitor lag and slot growth.
5. Test recovery after outage.

## Quality checklist
- [ ] Slot growth monitored
- [ ] schema changes handled

## Output
CDC configuration.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
