# LLM Evals

> Legion procedure `llm-evals` · pack **LLMs, Agents & Prompting** (`legion-llm`)

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
