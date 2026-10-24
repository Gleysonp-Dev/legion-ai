# Prompt Optimizer

> Legion procedure `prompt-optimizer` · pack **LLMs, Agents & Prompting** (`legion-llm`)

## When to use
Improve a prompt with clear instructions, context, examples and output format, tested on sample inputs. Use when an AI gives inconsistent results.

## Procedure
1. Collect failing examples and the desired outputs.
2. Rewrite with role, context, task, constraints and format.
3. Add examples covering edge cases.
4. Test on 5–20 inputs; compare before and after.
5. Remove instructions that do not change output.

## Quality checklist
- [ ] Before/after comparison on same inputs

## Output
Improved prompt and test results.
