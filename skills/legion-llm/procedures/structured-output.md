# Structured Output

> Legion procedure `structured-output` · pack **LLMs, Agents & Prompting** (`legion-llm`)

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
