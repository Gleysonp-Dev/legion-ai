---
name: state-management
description: "Choose and implement state management: server cache (React Query/SWR), global store (Zustand/Redux) or local state. Use when app state is tangled or duplicated."
---
# State Management

> Legion skill · category **Frontend Development**

## When to use
Choose and implement state management: server cache (React Query/SWR), global store (Zustand/Redux) or local state. Use when app state is tangled or duplicated.

## Procedure
1. Classify state as server, URL, global client or local component state.
2. Move server data into a caching library with proper keys.
3. Keep global client state minimal and typed.
4. Derive values instead of duplicating them.
5. Remove prop drilling where it hurts readability.

## Quality checklist
- [ ] No duplicated sources of truth
- [ ] cache invalidation correct

## Output
Refactored state layer and a short explanation.

## Works well with
Legion agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
