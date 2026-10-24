# Responsive Layout

> Legion procedure `responsive-layout` · pack **Frontend Development** (`legion-frontend`)

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
