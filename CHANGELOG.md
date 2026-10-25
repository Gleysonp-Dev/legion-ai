# Changelog

## 2.0.0 — 2026-10-24
- **AI Council** (`council.js`, `legion-council` skill): Codex, Claude and Gemini review each other's diffs, plans or questions in read-only mode; findings are merged, ranked and saved; the author fixes or rejects each one.
- **Learning from outcomes**: approvals and corrections right after Legion works score the agents/packs used; corrections become **lessons** (`~/.legion/lessons/<name>.md`) that agents and procedures read on every run; the conductor sees a team record.
- **Mission Control** (`legion.js dashboard`): live local dashboard with running agents, activity, cost per agent, scoreboard, council verdicts, lessons and memory.
- **Playbooks** (`legion-playbooks` skill): 10 end-to-end projects — SaaS MVP, landing page, IoT product, mobile app, API, AI assistant with RAG, security hardening, data dashboard, legacy upgrade, open-source launch.
- **Gemini CLI and Cursor support**: subagents, shared skills (`~/.agents/skills`), `GEMINI.md` instructions and Cursor hooks; the installer now handles 4 tools.
- New `legion.js` command line; hooks also record agent start/end and turn end.

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
