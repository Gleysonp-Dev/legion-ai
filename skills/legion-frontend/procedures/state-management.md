# State Management

> Legion procedure `state-management` · pack **Frontend Development** (`legion-frontend`)

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
