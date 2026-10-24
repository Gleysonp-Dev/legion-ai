---
name: ai-safety-guardrails
description: "Add guardrails to AI features: input/output filtering, prompt-injection defences, PII handling and human review. Use before exposing LLM features to users."
---
# AI Safety Guardrails

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Add guardrails to AI features: input/output filtering, prompt-injection defences, PII handling and human review. Use before exposing LLM features to users.

## Procedure
1. Treat all external content as untrusted data.
2. Separate instructions from data in prompts.
3. Limit tool permissions; confirm risky actions.
4. Filter or redact sensitive data.
5. Log and review flagged interactions.

## Quality checklist
- [ ] Least-privilege tools
- [ ] injection tested

## Output
Guardrail implementation and tests.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
