---
name: llm-cost-control
description: "Reduce LLM costs with model routing, prompt caching, shorter prompts, batching and output limits. Use when AI bills are high."
---
# LLM Cost Control

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Reduce LLM costs with model routing, prompt caching, shorter prompts, batching and output limits. Use when AI bills are high.

## Procedure
1. Measure tokens and cost per feature.
2. Route simple tasks to smaller models.
3. Enable prompt caching for stable prefixes.
4. Batch offline workloads.
5. Cap output length.

## Quality checklist
- [ ] Quality checked after each change

## Output
Cost report with savings.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
