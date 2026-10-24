---
name: tech-stack-selection
description: "Choose a technology stack for a project based on requirements, team skills, ecosystem and cost. Use when starting something new or replacing a core technology."
---
# Tech Stack Selection

> Legion skill · category **Architecture & System Design**

## When to use
Choose a technology stack for a project based on requirements, team skills, ecosystem and cost. Use when starting something new or replacing a core technology.

## Procedure
1. List requirements and constraints (team skills, hosting, budget, timeline).
2. Shortlist 2–3 candidates per layer.
3. Compare maturity, community, hiring, performance and lock-in.
4. Prototype the riskiest part if uncertain.
5. Recommend a stack and document why in an ADR.

## Quality checklist
- [ ] Team skills weighed
- [ ] lock-in considered
- [ ] ADR written

## Output
A stack recommendation with comparison table.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
