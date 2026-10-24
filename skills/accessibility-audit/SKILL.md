---
name: accessibility-audit
description: "Audit a site or app for WCAG 2.2 AA issues with automated and manual checks, then fix them. Use before launch."
---
# Accessibility Audit

> Legion skill · category **UX, UI & Accessibility**

## When to use
Audit a site or app for WCAG 2.2 AA issues with automated and manual checks, then fix them. Use before launch.

## Procedure
1. Run automated tools (axe, Lighthouse).
2. Test keyboard-only navigation.
3. Test with a screen reader.
4. Check contrast and zoom to 200%.
5. Report issues with WCAG references and fixes.

## Quality checklist
- [ ] Manual and automated checks both done

## Output
Accessibility report and fixes.

## Works well with
Legion agents: `ux-designer`, `ui-designer`, `accessibility-expert`, `design-system-builder`, `ux-researcher`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
