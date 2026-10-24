---
name: runbook-writer
description: "Write operational runbooks with detection, diagnosis, mitigation and escalation steps. Use for recurring incidents and on-call readiness."
---
# Runbook Writer

> Legion skill · category **Reliability & Observability**

## When to use
Write operational runbooks with detection, diagnosis, mitigation and escalation steps. Use for recurring incidents and on-call readiness.

## Procedure
1. Describe the symptom and how it is detected.
2. List diagnosis commands with expected output.
3. Give mitigation steps in order of safety.
4. Define escalation contacts and criteria.
5. Test the runbook during a drill.

## Quality checklist
- [ ] Commands copy-pasteable
- [ ] escalation defined

## Output
Runbook markdown.

## Works well with
Legion agents: `sre-engineer`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
