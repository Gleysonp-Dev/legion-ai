---
name: log-analysis
description: "Analyse logs to find errors, patterns and anomalies using grep, jq, or log query languages. Use when investigating behaviour from logs."
---
# Log Analysis

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Analyse logs to find errors, patterns and anomalies using grep, jq, or log query languages. Use when investigating behaviour from logs.

## Procedure
1. Narrow the time window and services involved.
2. Filter by error level and correlation IDs.
3. Count and group errors to find the dominant pattern.
4. Trace a single failing request end to end.
5. Summarise findings with sample log lines.

## Quality checklist
- [ ] Findings quantified
- [ ] sample evidence included

## Output
Log analysis summary with queries used.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
