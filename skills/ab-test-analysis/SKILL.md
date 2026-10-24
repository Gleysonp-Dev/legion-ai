---
name: ab-test-analysis
description: "Analyse A/B tests correctly: sample size, significance, confidence intervals, guardrail metrics and peeking pitfalls. Use to decide if an experiment won."
---
# A/B Test Analysis

> Legion skill · category **Data Analysis & Visualisation**

## When to use
Analyse A/B tests correctly: sample size, significance, confidence intervals, guardrail metrics and peeking pitfalls. Use to decide if an experiment won.

## Procedure
1. Confirm randomisation and sample ratio.
2. Compute effect size with confidence intervals.
3. Check statistical significance with the pre-registered test.
4. Review guardrail metrics.
5. Recommend ship, iterate or stop.

## Quality checklist
- [ ] Sample ratio checked
- [ ] intervals reported
- [ ] no p-hacking

## Output
Experiment readout.

## Works well with
Legion agents: `data-analyst`, `data-visualizer`, `analytics-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
