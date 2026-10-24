---
name: threat-model
description: "Create a STRIDE threat model with data-flow diagram, threats and mitigations. Use when designing features that handle sensitive data or money."
---
# Threat Model

> Legion skill · category **Security (defensive)**

## When to use
Create a STRIDE threat model with data-flow diagram, threats and mitigations. Use when designing features that handle sensitive data or money.

## Procedure
1. Draw the data-flow diagram with trust boundaries.
2. Enumerate STRIDE threats per element.
3. Rate and map to mitigations.
4. Identify design changes that remove threats.
5. Record owners for mitigations.

## Quality checklist
- [ ] Trust boundaries explicit
- [ ] high threats mitigated

## Output
Threat model document.

## Works well with
Legion agents: `security-auditor`, `appsec-engineer`, `secrets-guardian`, `threat-modeler`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
