---
name: legion-research
description: "Research & Analysis pack with 10 ready procedures: deep research, fact check, literature review, market sizing, competitor teardown, technology comparison, trend analysis, interview synthesis, swot analysis, source evaluation. Use for any research & analysis task."
---
# Research & Analysis — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `deep-research` | Research a question in depth using multiple sources, compare evidence and produce a cited report with confidence levels. Use for complex questions. |
| `fact-check` | Verify claims against reliable sources and rate them true, false, misleading or unverified. Use before publishing or deciding. |
| `literature-review` | Review academic or technical literature: search, screen, summarise and synthesise findings. Use for research projects. |
| `market-sizing` | Estimate TAM, SAM and SOM with top-down and bottom-up methods and explicit assumptions. Use for business plans and pitches. |
| `competitor-teardown` | Analyse a single competitor deeply: product, pricing, positioning, funnel, tech and weaknesses. Use to understand a rival. |
| `technology-comparison` | Compare technologies, tools or vendors on features, performance, cost, maturity and fit with sources. Use for tool selection. |
| `trend-analysis` | Identify and assess trends in an industry or technology with evidence and implications. Use for strategy. |
| `interview-synthesis` | Synthesise interview notes or transcripts into themes, quotes and insights. Use after customer or expert interviews. |
| `swot-analysis` | Build a SWOT analysis with evidence and turn it into strategic actions. Use for strategy planning. |
| `source-evaluation` | Evaluate the credibility of sources: authority, methodology, bias, recency and corroboration. Use when sources conflict. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`research-analyst`, `market-researcher`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
