---
name: legion-help
description: "Explain Legion and help the user pick the right agents and procedures: list teams, search the 30 packs / 300 procedures, suggest which specialist fits a task. Use when the user asks what Legion can do, which agent or skill to use, or types /legion-help."
---

# Legion help

1. Read `../legion/references/agents.md` (80 agents in 10 teams) and `../legion/references/skills.md` (30 packs, 300 procedures).
2. If the user described a task, recommend:
   - the 1–4 most relevant **agents** (name + one line why),
   - the 1–3 most relevant **packs** and the procedure inside each (e.g. `legion-testing` → `flaky-test-fixer`),
   - the cheapest mode that fits: solo, lite or full (`legion` orchestration only for multi-part work).
3. If the user just wants an overview, show the 10 teams with one line each and the 30 packs.
4. Show how to invoke:
   - Claude Code: ask naturally ("use the debugger agent…"), `/legion:legion` for orchestration (or `/legion` if installed with `--files`), and `/legion:legion-<pack>` for a pack (e.g. `/legion:legion-security`).
   - Codex: `$<skill>` or `/skills`, and ask Codex to "spawn the backend_engineer agent".
5. Mention memory (`node ~/.legion/bin/memory.js show`) and the cost report (`node ~/.legion/bin/memory.js report`).

Keep the answer short and in the user's language (check `node ~/.legion/bin/memory.js context` if available).
