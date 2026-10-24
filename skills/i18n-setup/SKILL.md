---
name: i18n-setup
description: "Internationalise a frontend: extract strings, set up i18n library, locale routing, plurals, dates and currencies. Use when a product must support multiple languages (e.g. PT-BR and EN)."
---
# i18n Setup

> Legion skill · category **Frontend Development**

## When to use
Internationalise a frontend: extract strings, set up i18n library, locale routing, plurals, dates and currencies. Use when a product must support multiple languages (e.g. PT-BR and EN).

## Procedure
1. Choose an i18n library suited to the framework.
2. Extract hard-coded strings into message files with keys.
3. Handle plurals, interpolation, dates, numbers and currencies by locale.
4. Add locale detection and switching, with SEO-friendly routes.
5. Add a check for missing translation keys in CI.

## Quality checklist
- [ ] No hard-coded user-facing strings
- [ ] plurals correct
- [ ] missing keys detected

## Output
i18n setup with initial locale files.

## Works well with
Legion agents: `ui-engineer`, `react-specialist`, `css-stylist`, `frontend-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
