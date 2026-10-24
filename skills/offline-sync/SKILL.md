---
name: offline-sync
description: "Design offline-first data and sync: local database, queues, conflict resolution and background sync. Use for apps used with unreliable connectivity."
---
# Offline Sync

> Legion skill · category **Mobile Development**

## When to use
Design offline-first data and sync: local database, queues, conflict resolution and background sync. Use for apps used with unreliable connectivity.

## Procedure
1. Choose local storage (SQLite, WatermelonDB, Realm).
2. Queue writes while offline.
3. Define conflict resolution rules.
4. Sync in background with retries.
5. Show sync status to users.

## Quality checklist
- [ ] Conflicts handled deterministically
- [ ] no data loss offline

## Output
Sync design and implementation.

## Works well with
Legion agents: `mobile-engineer`, `ui-designer`, `release-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
