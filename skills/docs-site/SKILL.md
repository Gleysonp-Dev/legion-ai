---
name: docs-site
description: "Set up a documentation website (Docusaurus, MkDocs Material, VitePress, Starlight) with navigation, search and deployment. Use when docs outgrow a README."
---
# Docs Site

> Legion skill · category **Documentation**

## When to use
Set up a documentation website (Docusaurus, MkDocs Material, VitePress, Starlight) with navigation, search and deployment. Use when docs outgrow a README.

## Procedure
1. Pick a generator.
2. Structure navigation by doc type.
3. Enable search and versioning if needed.
4. Deploy via CI to GitHub Pages or similar.
5. Add link checking.

## Quality checklist
- [ ] Builds in CI
- [ ] search works

## Output
Docs site configuration.

## Works well with
Legion agents: `technical-writer`, `documentation-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
