---
name: license-compliance
description: "Check open-source licence compatibility for a project and its dependencies. Use before distributing software."
---
# License Compliance

> Legion skill · category **Legal, Privacy & Compliance (not legal advice)**

## When to use
Check open-source licence compatibility for a project and its dependencies. Use before distributing software.

## Procedure
1. List dependencies and licences.
2. Identify copyleft obligations.
3. Check compatibility.
4. Generate notices file.
5. Flag issues.

## Quality checklist
- [ ] Notices generated
- [ ] conflicts flagged

## Output
Licence report.

## Works well with
Legion agents: `legal-researcher`, `privacy-engineer`, `compliance-analyst`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
