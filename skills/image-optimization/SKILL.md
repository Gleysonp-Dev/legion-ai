---
name: image-optimization
description: "Optimise images: modern formats (AVIF/WebP), responsive sizes, lazy loading and CDN transformation. Use when images slow down pages."
---
# Image Optimization

> Legion skill · category **Performance**

## When to use
Optimise images: modern formats (AVIF/WebP), responsive sizes, lazy loading and CDN transformation. Use when images slow down pages.

## Procedure
1. Inventory images and their sizes.
2. Convert to modern formats with fallbacks.
3. Serve responsive sizes with srcset.
4. Lazy-load below-the-fold images; prioritise the hero.
5. Set width/height to avoid layout shift.

## Quality checklist
- [ ] Bytes saved measured
- [ ] no layout shift

## Output
Optimised images and markup changes.

## Works well with
Legion agents: `performance-engineer`, `web-performance-tuner`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
