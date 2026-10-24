# AI Safety Guardrails

> Legion procedure `ai-safety-guardrails` · pack **LLMs, Agents & Prompting** (`legion-llm`)

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
