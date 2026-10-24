# MCP Server Builder

> Legion procedure `mcp-server-builder` · pack **LLMs, Agents & Prompting** (`legion-llm`)

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
