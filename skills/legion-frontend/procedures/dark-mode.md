# Dark Mode

> Legion procedure `dark-mode` · pack **Frontend Development** (`legion-frontend`)

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
