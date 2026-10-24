---
name: mcp-server-builder
description: "Build a Model Context Protocol (MCP) server exposing tools and resources to Claude, Codex and other clients. Use to connect AI assistants to your systems."
---
# MCP Server Builder

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Build a Model Context Protocol (MCP) server exposing tools and resources to Claude, Codex and other clients. Use to connect AI assistants to your systems.

## Procedure
1. Define tools with clear names, descriptions and input schemas.
2. Implement with the official MCP SDK (TypeScript or Python).
3. Validate inputs and return helpful errors.
4. Keep secrets in environment variables.
5. Test with the MCP inspector and a real client.

## Quality checklist
- [ ] Tools documented
- [ ] inputs validated

## Output
MCP server code and config snippet.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
