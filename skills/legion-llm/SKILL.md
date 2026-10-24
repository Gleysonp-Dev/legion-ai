---
name: legion-llm
description: "LLMs, Agents & Prompting playbook with 10 ready procedures: prompt optimizer, system prompt writer, agent builder, rag pipeline, llm evals, structured output, llm cost control, mcp server builder, claude skill writer, ai safety guardrails. Use for any llms, agents & prompting task."
---
# LLMs, Agents & Prompting — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `prompt-optimizer` | Improve a prompt with clear instructions, context, examples and output format, tested on sample inputs. Use when an AI gives inconsistent results. |
| `system-prompt-writer` | Write a system prompt for a chatbot or agent: role, tone, capabilities, boundaries, tools and response format. Use when building an assistant. |
| `agent-builder` | Build an AI agent with tool calling, a loop, memory and guardrails (Claude Agent SDK, OpenAI Agents SDK, LangGraph). Use for autonomous task automation. |
| `rag-pipeline` | Build a retrieval-augmented generation pipeline: ingestion, chunking, embeddings, vector store, retrieval, reranking and cited answers. Use for document Q&A. |
| `llm-evals` | Build evaluation sets and automated graders for LLM features (exact match, rubric, LLM-as-judge). Use to measure AI quality before changes. |
| `structured-output` | Get reliable structured output (JSON) from LLMs using schemas, tool calling and validation with retries. Use when parsing model output. |
| `llm-cost-control` | Reduce LLM costs with model routing, prompt caching, shorter prompts, batching and output limits. Use when AI bills are high. |
| `mcp-server-builder` | Build a Model Context Protocol (MCP) server exposing tools and resources to Claude, Codex and other clients. Use to connect AI assistants to your systems. |
| `claude-skill-writer` | Write a new Agent Skill (SKILL.md with name and description frontmatter) that works in Claude Code and Codex. Use to teach the assistant a repeatable procedure. |
| `ai-safety-guardrails` | Add guardrails to AI features: input/output filtering, prompt-injection defences, PII handling and human review. Use before exposing LLM features to users. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
