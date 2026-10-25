---
name: legion-marketing
description: "Marketing & Growth pack with 10 ready procedures: seo audit, keyword research, marketing plan, email campaign, ad copy, growth experiments, social content calendar, landing page copy, brand voice, analytics tracking plan. Use for any marketing & growth task."
---
# Marketing & Growth — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `seo-audit` | Audit a website's SEO: technical issues, on-page factors, content gaps and quick wins. Use to increase organic traffic. |
| `keyword-research` | Research keywords by intent, volume and difficulty and map them to pages. Use for content and SEO planning. |
| `marketing-plan` | Build a marketing plan: audience, positioning, channels, budget, calendar and KPIs. Use for launching or growing a business. |
| `email-campaign` | Write email campaigns and sequences (welcome, nurture, launch, re-engagement) with subject lines and CTAs. Use for email marketing. |
| `ad-copy` | Write ad copy for Google, Meta, LinkedIn and TikTok within platform limits, with variants for testing. Use for paid campaigns. |
| `growth-experiments` | Design growth experiments with hypotheses, metrics, sample sizes and ICE scores. Use to grow systematically. |
| `social-content-calendar` | Create a social media content calendar with post ideas, formats, captions and schedule. Use for consistent social presence. |
| `landing-page-copy` | Write conversion-focused landing page copy: headline, subhead, benefits, objections, proof and CTA. Use for product or campaign pages. |
| `brand-voice` | Define a brand voice and tone guide with traits, do/don't examples and vocabulary. Use to keep communication consistent. |
| `analytics-tracking-plan` | Create a marketing analytics tracking plan with UTM conventions, events, conversions and attribution. Use before campaigns. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`growth-strategist`, `seo-specialist`, `social-media-manager`, `content-strategist`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
