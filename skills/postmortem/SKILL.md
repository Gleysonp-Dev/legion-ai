---
name: postmortem
description: "Write a blameless postmortem: summary, impact, timeline, root causes, what went well and action items. Use after any incident."
---
# Postmortem

> Legion skill · category **Reliability & Observability**

## When to use
Write a blameless postmortem: summary, impact, timeline, root causes, what went well and action items. Use after any incident.

## Procedure
1. Summarise impact in user terms and duration.
2. Build a precise timeline.
3. Find contributing causes with 5 whys.
4. Note what went well and what was lucky.
5. Define owned, dated action items.

## Quality checklist
- [ ] Blameless language
- [ ] actions owned and dated

## Output
Postmortem document.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
