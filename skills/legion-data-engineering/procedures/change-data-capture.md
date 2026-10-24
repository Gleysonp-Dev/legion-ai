# Change Data Capture

> Legion procedure `change-data-capture` · pack **Data Engineering** (`legion-data-engineering`)

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
