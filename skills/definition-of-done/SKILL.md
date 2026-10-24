---
name: definition-of-done
description: "Create a definition of done and acceptance criteria checklist for a team or task. Use to stop \"done\" from meaning different things to different people."
---
# Definition Of Done

> Legion skill · category **Planning & Delivery**

## When to use
Create a definition of done and acceptance criteria checklist for a team or task. Use to stop "done" from meaning different things to different people.

## Procedure
1. Gather quality expectations: code review, tests, docs, deploy, monitoring.
2. Write them as a short checklist that applies to every item.
3. Add item-specific acceptance criteria in Given/When/Then form.
4. Make every check verifiable by someone else.
5. Review with the team and publish it where work is tracked.

## Quality checklist
- [ ] Every check is verifiable
- [ ] checklist fits on one screen

## Output
A DoD checklist plus an acceptance-criteria template.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
