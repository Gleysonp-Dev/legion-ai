# Agent Builder

> Legion procedure `agent-builder` · pack **LLMs, Agents & Prompting** (`legion-llm`)

## When to use
Build an AI agent with tool calling, a loop, memory and guardrails (Claude Agent SDK, OpenAI Agents SDK, LangGraph). Use for autonomous task automation.

## Procedure
1. Define the goal, tools and stop conditions.
2. Implement tools with strict schemas and validation.
3. Build the loop with max steps and error handling.
4. Add memory only where needed.
5. Add guardrails and human approval for risky actions.

## Quality checklist
- [ ] Max steps enforced
- [ ] risky actions gated

## Output
Agent code and test runs.
