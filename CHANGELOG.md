# Changelog

## 2.2.3 — 2026-10-30
- Council: overloaded (503) and quota (429) errors are explained; `LEGION_GEMINI_MODEL` lets the Gemini reviewer use a lighter model (e.g. Flash) when the default one is busy.

## 2.2.2 — 2026-10-30
- Council errors are readable: stack traces are dropped and known problems are explained — a Google account that cannot use Gemini's free login (`IneligibleOrProjectId`: use a `GEMINI_API_KEY`), and Gemini waiting for a browser login when called headless.
- Reviewer timeouts are never shorter than 4 minutes (short `--timeout` values were cutting Claude off mid-review); the council skill tells hosts to run it in the background instead.
- Dashboard: a verdict that one reviewer missed shows the reason next to it (e.g. `changes · ⚠️ gemini: …`).

## 2.2.1 — 2026-10-28
- **Council verdicts from Codex reach the dashboard.** Codex's sandbox may not let `council.js` write to `~/.legion`; the report now falls back to the temp folder and Mission Control's Codex watcher imports it from the `Saved:` line (rebuilding the summary from the printed report if the file is private). "No reviewer available" shows as *council skipped*.
- Reviewers that are **not logged in** are reported as such with the fix (`run claude once and sign in`), instead of an empty verdict. The dashboard shows failed councils and `ask` opinions instead of "—".
- The council finds Claude Code / Codex / Gemini even when their installer did not add them to PATH (`~/.local/bin`, npm global). On Windows `.exe` CLIs run without a shell (no Node DEP0190 warning).

## 2.2.0 — 2026-10-28
- **Codex watcher** (`codex-watch.js`, run by Mission Control): reads Codex's own session logs, so Codex subagents (e.g. `qa_gatekeeper`, `chief_reviewer`) appear live with their tokens, your prompts feed memory and the approval/correction scoreboard, and Codex's auto-review (guardian) threads are ignored. Only new bytes are read, even for multi-hundred-MB threads.
- Codex cost now shows the **current turn** (not the whole months-long thread) plus its subagents, and reads only the end of the log.
- Duplicate filter keeps parallel runs of the same agent (different ids); `<agent-message>`, `<environment_context>` and `<user_instructions>` blocks are ignored as user text.

## 2.1.2 — 2026-10-24
- Memory and the dashboard ignore instructions that apps inject into prompts (`<system-reminder>` blocks etc.): they are never shown as your words nor learned as preferences.

## 2.1.1 — 2026-10-24
- Fix: `legion.js event …` (and `observe`, `learn`, `export`, `reset`) are now forwarded to the memory CLI instead of printing the help.

## 2.1.0 — 2026-10-24
- **Mission Control without hooks:** the `legion` skill (and the Codex/Gemini instructions) now report agent start/end and pack usage with `memory.js event …`, so the dashboard shows activity from Codex, Gemini CLI and other tools without hooks. Events reported twice (hook + skill) are de-duplicated.
- Dashboard cost tile shows the most recent Claude Code **or Codex** session.

## 2.0.1 — 2026-10-24
- Fix CI: the build test now generates into a temp folder (it raced with the installer test) and also checks the committed generated files are up to date.
- Windows: correct dashboard/council commands for PowerShell (`$HOME\.legion\bin\legion.js`), `npm run dashboard|council|report|scores`, and safe argument quoting for council reviewers.
- Mission Control shows the installed version and lays out the empty activity feed correctly.

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
