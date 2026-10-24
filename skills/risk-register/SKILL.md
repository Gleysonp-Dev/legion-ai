---
name: risk-register
description: "Build a risk register for a project with likelihood, impact, owners and mitigations. Use for launches, migrations or any project with deadlines."
---
# Risk Register

> Legion skill · category **Planning & Delivery**

## When to use
Build a risk register for a project with likelihood, impact, owners and mitigations. Use for launches, migrations or any project with deadlines.

## Procedure
1. Brainstorm risks across technical, people, vendor, legal, budget and schedule.
2. Score likelihood and impact from 1 to 5; multiply for priority.
3. Give each top risk a mitigation, trigger signal and owner.
4. Mark irreversible actions and plan rollbacks.
5. Schedule a review cadence.

## Quality checklist
- [ ] Top risks have owners
- [ ] triggers are observable
- [ ] irreversible items flagged

## Output
A risk register table sorted by score.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
