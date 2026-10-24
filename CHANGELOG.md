# Changelog

## 1.1.0 — 2026-10-24
- **60% less always-on context**: the 300 procedures are grouped into 30 skill packs (`legion-<category>`) and read on demand (~22k → ~9k tokens per Claude Code session).
- **Model per agent**: Haiku for simple agents, Opus for deep reasoning, Sonnet for the rest (Codex: low/medium/high reasoning effort).
- **Modes**: solo / lite / full orchestration to keep cost proportional to the task.
- **No proof, not done**: every run ends with an evidence table; agents reply in under ~250 words with proof.
- **Cost report**: `node ~/.legion/bin/memory.js report` shows tokens for the main conversation and each agent (Claude Code and Codex).
- Installer removes files from the previous version and updates the plugin in place.

## 1.0.0 — 2026-10-24
- First release: 80 agents in 10 teams, 303 skills (30 categories + 3 core).
- Orchestration skill `legion` with parallel waves, integration and verification.
- Learning memory (`~/.legion/memory`) with Claude Code hooks and Codex `AGENTS.md` integration.
- Cross-platform installer for Claude Code (plugin or files) and Codex.
