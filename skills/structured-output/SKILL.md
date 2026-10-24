---
name: structured-output
description: "Get reliable structured output (JSON) from LLMs using schemas, tool calling and validation with retries. Use when parsing model output."
---
# Structured Output

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Get reliable structured output (JSON) from LLMs using schemas, tool calling and validation with retries. Use when parsing model output.

## Procedure
1. Define a strict JSON schema.
2. Use native structured output or tool calling.
3. Validate output; retry with error feedback.
4. Handle refusals and partial output.
5. Test with diverse inputs.

## Quality checklist
- [ ] All outputs validated against schema

## Output
Structured output code.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
