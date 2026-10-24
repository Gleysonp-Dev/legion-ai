---
name: core-web-vitals
description: "Improve Core Web Vitals (LCP, INP, CLS) using Lighthouse and field data. Use when a site scores poorly or ranks badly."
---
# Core Web Vitals

> Legion skill · category **Performance**

## When to use
Improve Core Web Vitals (LCP, INP, CLS) using Lighthouse and field data. Use when a site scores poorly or ranks badly.

## Procedure
1. Measure lab and field data (PageSpeed Insights, CrUX).
2. Fix LCP: preload hero image, reduce server time, remove render-blocking.
3. Fix INP: break up long tasks, reduce JavaScript.
4. Fix CLS: reserve space for images, ads and fonts.
5. Re-measure and report.

## Quality checklist
- [ ] Each metric measured before and after

## Output
Web vitals report with fixes.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
