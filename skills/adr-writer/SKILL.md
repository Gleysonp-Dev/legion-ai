---
name: adr-writer
description: "Write Architecture Decision Records documenting context, options, decision and consequences. Use whenever a significant technical decision is made."
---
# ADR Writer

> Legion skill · category **Architecture & System Design**

## When to use
Write Architecture Decision Records documenting context, options, decision and consequences. Use whenever a significant technical decision is made.

## Procedure
1. State the context and forces driving the decision.
2. List options considered with pros and cons.
3. Record the decision in one clear sentence.
4. Describe consequences: positive, negative and follow-ups.
5. Number and date the ADR; link superseded ones.

## Quality checklist
- [ ] Options genuinely compared
- [ ] consequences include downsides

## Output
An ADR markdown file in docs/adr/.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
