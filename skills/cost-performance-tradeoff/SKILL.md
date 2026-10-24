---
name: cost-performance-tradeoff
description: "Balance performance against infrastructure cost: right instance sizes, autoscaling and caching ROI. Use when scaling decisions affect budget."
---
# Cost Performance Tradeoff

> Legion skill · category **Performance**

## When to use
Balance performance against infrastructure cost: right instance sizes, autoscaling and caching ROI. Use when scaling decisions affect budget.

## Procedure
1. Measure current performance and cost per request.
2. Model options (bigger instances, more instances, caching).
3. Estimate cost and performance for each.
4. Recommend the best value option.
5. Define metrics to re-evaluate.

## Quality checklist
- [ ] Cost per request computed
- [ ] options compared with numbers

## Output
Trade-off analysis.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
