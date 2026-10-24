---
name: responsive-layout
description: "Make a layout work across phone, tablet and desktop using modern CSS (flex, grid, container queries, clamp). Use when a page breaks on some screen sizes."
---
# Responsive Layout

> Legion skill · category **Frontend Development**

## When to use
Make a layout work across phone, tablet and desktop using modern CSS (flex, grid, container queries, clamp). Use when a page breaks on some screen sizes.

## Procedure
1. Reproduce the issue at 360, 768, 1024 and 1440px widths.
2. Restructure with grid/flex and fluid sizes instead of fixed widths.
3. Use container queries for component-level responsiveness.
4. Fix overflow, long words and images without max-width.
5. Verify no horizontal scrolling at any width.

## Quality checklist
- [ ] No horizontal scroll
- [ ] tap targets ≥ 44px
- [ ] text readable without zoom

## Output
CSS changes with a checklist of widths verified.

## Works well with
Legion agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
