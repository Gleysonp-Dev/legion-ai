---
name: dark-mode
description: "Add light/dark theme support with CSS variables, system preference detection and a toggle. Use when a site needs a dark mode."
---
# Dark Mode

> Legion skill · category **Frontend Development**

## When to use
Add light/dark theme support with CSS variables, system preference detection and a toggle. Use when a site needs a dark mode.

## Procedure
1. Define semantic colour tokens (background, surface, text, border, accent).
2. Implement themes via CSS custom properties.
3. Respect prefers-color-scheme and persist the user's choice.
4. Prevent flash of wrong theme on load.
5. Check contrast in both themes.

## Quality checklist
- [ ] Both themes pass contrast
- [ ] no flash on load
- [ ] images/icons adapt

## Output
Theme tokens, toggle code and contrast check.

## Works well with
Legion agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
