---
name: decision-matrix
description: "Compare options with a weighted decision matrix and recommend one. Use when choosing between tools, vendors, designs or strategies."
---
# Decision Matrix

> Legion skill · category **Planning & Delivery**

## When to use
Compare options with a weighted decision matrix and recommend one. Use when choosing between tools, vendors, designs or strategies.

## Procedure
1. Define the decision and the options (include "do nothing" when sensible).
2. Choose 4–7 criteria and weight them by importance.
3. Score each option per criterion with a short justification.
4. Compute weighted totals and test sensitivity to weights.
5. Recommend, noting what would change the decision.

## Quality checklist
- [ ] Criteria agreed before scoring
- [ ] justification per score
- [ ] sensitivity checked

## Output
A decision matrix table and recommendation.

## Works well with
Legion agents: `conductor`, `task-splitter`, `project-manager`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
