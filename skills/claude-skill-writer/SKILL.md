---
name: claude-skill-writer
description: "Write a new Agent Skill (SKILL.md with name and description frontmatter) that works in Claude Code and Codex. Use to teach the assistant a repeatable procedure."
---
# Claude Skill Writer

> Legion skill · category **LLMs, Agents & Prompting**

## When to use
Write a new Agent Skill (SKILL.md with name and description frontmatter) that works in Claude Code and Codex. Use to teach the assistant a repeatable procedure.

## Procedure
1. Define when the skill should trigger in the description.
2. Write concise steps and examples in SKILL.md.
3. Move long references into references/ files.
4. Add scripts for deterministic steps.
5. Test triggering and results on sample tasks.

## Quality checklist
- [ ] Description says what and when
- [ ] tested on real tasks

## Output
Skill folder ready to install.

## Works well with
Legion agents: `llm-engineer`, `prompt-engineer`, `rag-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
