---
name: legion-help
description: "Explain Legion and help the user pick the right agents and skills: list teams, search the 300+ skill catalogue, suggest which specialist fits a task. Use when the user asks what Legion can do, which agent or skill to use, or types /legion-help."
---

# Legion help

1. Read `../legion/references/agents.md` (80 agents in 10 teams) and `../legion/references/skills.md` (skill catalogue by category).
2. If the user described a task, recommend:
   - the 1–4 most relevant **agents** (name + one line why),
   - the 1–5 most relevant **skills**,
   - whether to run the full `legion` orchestration (only for multi-part work).
3. If the user just wants an overview, show the 10 teams with one line each and the skill categories with counts.
4. Show how to invoke:
   - Claude Code: ask naturally ("use the debugger agent…"), `/legion:legion` for orchestration (or `/legion` if installed with `--files`), and `/legion:<skill>` for any skill.
   - Codex: `$<skill>` or `/skills`, and ask Codex to "spawn the backend_engineer agent".
5. Mention memory: `node ~/.legion/bin/memory.js show` displays what Legion has learned about the user.

Keep the answer short and in the user's language (check `node ~/.legion/bin/memory.js context` if available).
