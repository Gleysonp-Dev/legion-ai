---
name: recommendation-system
description: "Build recommendations: popularity, collaborative filtering, content-based and hybrid, with offline and online evaluation. Use for \"you may also like\"."
---
# Recommendation System

> Legion skill · category **Machine Learning**

## When to use
Build recommendations: popularity, collaborative filtering, content-based and hybrid, with offline and online evaluation. Use for "you may also like".

## Procedure
1. Start with popularity and co-occurrence baselines.
2. Add collaborative or content-based models.
3. Handle cold start.
4. Evaluate offline (precision@k) and plan online test.
5. Avoid feedback loops.

## Quality checklist
- [ ] Cold start handled
- [ ] baseline compared

## Output
Recommender and metrics.

## Works well with
Legion agents: `ml-engineer`, `data-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
