---
name: legion-memory
description: "Legion's learning memory: show, add, correct or forget what Legion knows about how the user likes to work (language, tone, stack, conventions, workflow). Use when the user says 'remember…', 'always/never do…', 'I prefer…', 'forget…', asks what you know about them, or corrects your style."
---

# Legion memory

Legion keeps a small, local, human-readable memory of the user's working preferences in `~/.legion/memory/` (Windows: `%USERPROFILE%\.legion\memory\`). Nothing leaves the user's computer.

Files:
- `profile.md` — readable view of the active preference rules (this is what gets injected into sessions).
- `memory.json` — the store: rules, candidate observations detected automatically from the user's messages (promoted to rules once they repeat or are said explicitly, e.g. "remember…", "a partir de agora…"), the user's usual language, and which Legion agents and skills they use most.

In Claude Code this runs automatically through hooks (session start, every prompt, every agent/skill call). In Codex, follow the Legion block in `~/.codex/AGENTS.md`: run `context` at the start and `add` when the user states a lasting preference.

> **Paths:** `~` means your home folder. In Windows PowerShell (Codex, Cursor) write `$HOME\.legion\bin\<file>.js` instead of `~/.legion/bin/<file>.js`; Claude Code's shell understands `~` everywhere.

## Commands
All commands: `node ~/.legion/bin/memory.js <command>`

| Command | What it does |
|---|---|
| `context` | Print the profile + top tools, ready to inject into a prompt |
| `show` | Show rules (with ids), pending observations and usage stats |
| `add "<rule>" [--category <c>]` | Add or reinforce a rule immediately |
| `observe "<text>"` | Record a candidate preference (auto-promoted after it repeats) |
| `learn` | Promote repeated observations into rules |
| `forget <id or text>` | Remove a rule or observation |
| `report` | Token cost of the current session: main conversation + each Legion agent (`--codex` for Codex) |
| `export` / `reset --yes` | Export everything as JSON / wipe memory |

Categories: `language`, `style`, `stack`, `workflow`, `tools`, `general`.

## How to use it well
1. **When the user states a preference** ("always answer in Portuguese", "use pnpm, not npm", "no emojis"): run `add` right away with a short, imperative rule, then confirm in one line.
2. **When the user corrects you** ("too long", "I said TypeScript"): treat it as a preference only if it is clearly meant to last; otherwise just fix the current answer.
3. **When asked what you know**: run `show` and summarise plainly.
4. **When asked to forget**: run `forget` and confirm it is gone.
5. Keep rules short (< 120 characters), specific and non-contradictory. If a new rule contradicts an old one, `forget` the old one.

## Never store
Passwords, API keys, tokens, card or bank numbers, government IDs, health information, or other sensitive personal details — even if asked. Say plainly that Legion does not store that kind of information.
