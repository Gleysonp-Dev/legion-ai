---
name: llm-evals
description: "Build evaluation sets and automated graders for LLM features (exact match, rubric, LLM-as-judge). Use to measure AI quality before changes."
---
# LLM Evals

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Build evaluation sets and automated graders for LLM features (exact match, rubric, LLM-as-judge). Use to measure AI quality before changes.

## Procedure
1. Collect representative and edge-case inputs.
2. Define expected outputs or rubrics.
3. Implement graders (code checks first, LLM judges second).
4. Run baseline and store results.
5. Track scores across prompt/model changes.

## Quality checklist
- [ ] Graders validated against human judgement

## Output
Eval set, graders and baseline scores.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
