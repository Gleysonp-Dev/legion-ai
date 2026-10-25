# Contributing to Legion

Thanks for helping! Legion is plain text plus two small Node scripts, so contributing is easy.

## Add or improve a procedure
1. Open the right file in `src/skills/` (one file holds three categories; each category becomes a `legion-<category>` pack).
2. Add a block:
   ```
   ## my-skill-name
   desc: What it does. Use when <situation>.
   - Step one.
   - Step two.
   - Step three.
   check: first check; second check
   out: What the user receives.
   ```
   Names are lowercase-with-hyphens and must be unique. The description must say **what** and **when**.
3. Run `npm run build && npm test`.

## Add or improve an agent
Agents live in `src/agents/` (one file per team, 8 agents each). Each needs `desc`, `tools`, `mission`, at least three `- responsibilities`, `deliver` and optional `handoff` (names of other agents).

## Core skills
`src/core-skills/` holds hand-written skills (`legion`, `legion-memory`, `legion-help`) copied as-is.

## Rules
- Never edit `agents/`, `skills/`, `codex/agents/` or `docs/CATALOG.md` by hand — they are generated.
- Keep content defensive and honest: no offensive-security tooling, no claims of legal/financial advice.
- Memory must never store secrets or sensitive personal data; add tests in `tests/memory.test.js` for new detection rules.

## Playbooks
`src/core-skills/legion-playbooks/playbooks/*.md`. Reference procedures as `` `legion-<pack>` → procedure-a, procedure-b `` and agents by name in the first column; `npm test` checks that every reference exists.

## Council, memory and dashboard
`scripts/council.js`, `scripts/memory.js` and `scripts/mission-control.js` are zero-dependency Node scripts. Keep them that way, and add tests in `tests/`.
