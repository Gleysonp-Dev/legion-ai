---
name: web-scraping-ethical
description: "Collect public web data responsibly: respect robots.txt and terms, rate-limit, cache and parse robustly. Use when no API exists and scraping is permitted."
---
# Web Scraping Ethical

> Legion skill · category **Data Engineering**

## When to use
Collect public web data responsibly: respect robots.txt and terms, rate-limit, cache and parse robustly. Use when no API exists and scraping is permitted.

## Procedure
1. Check terms of service and robots.txt; prefer official APIs.
2. Rate-limit and identify the client.
3. Parse with robust selectors and handle layout changes.
4. Store raw responses for reprocessing.
5. Avoid collecting personal data unnecessarily.

## Quality checklist
- [ ] Terms respected
- [ ] rate-limited
- [ ] no unnecessary personal data

## Output
Scraper code and dataset.

## Works well with
Legion agents: `data-engineer`, `analytics-engineer`, `database-architect`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
