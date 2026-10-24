---
name: c4-diagrams
description: "Produce C4 model diagrams (context, container, component) as Mermaid or PlantUML. Use to explain a system to new developers or stakeholders."
---
# C4 Diagrams

> Legion skill · category **Architecture & System Design**

## When to use
Produce C4 model diagrams (context, container, component) as Mermaid or PlantUML. Use to explain a system to new developers or stakeholders.

## Procedure
1. Draw the system context: users and external systems.
2. Draw containers: apps, services, databases and their protocols.
3. Draw components for the most important container.
4. Label every arrow with what flows and how.
5. Keep each diagram readable on one screen.

## Quality checklist
- [ ] Each level answers a different question
- [ ] arrows labelled

## Output
Diagram-as-code files plus short captions.

## Works well with
Legion agents: `software-architect`, `microservices-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
