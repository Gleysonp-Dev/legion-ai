---
name: system-prompt-writer
description: "Write a system prompt for a chatbot or agent: role, tone, capabilities, boundaries, tools and response format. Use when building an assistant."
---
# System Prompt Writer

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Write a system prompt for a chatbot or agent: role, tone, capabilities, boundaries, tools and response format. Use when building an assistant.

## Procedure
1. Define the assistant's purpose and audience.
2. Describe tone and style with examples.
3. List tools and when to use them.
4. State boundaries and escalation behaviour.
5. Test with adversarial and typical inputs.

## Quality checklist
- [ ] Tested on edge cases
- [ ] clear scope

## Output
System prompt and test notes.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
