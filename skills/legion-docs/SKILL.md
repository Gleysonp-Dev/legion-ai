---
name: legion-docs
description: "Documentation pack with 10 ready procedures: readme writer, api reference docs, tutorial writer, architecture docs, docstrings, user guide, onboarding guide, docs site, diagram as code, docs audit. Use for any documentation task."
---
# Documentation — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `readme-writer` | Write a great README: what it is, why, install, quick start, usage, configuration, contributing and licence. Use for any project. |
| `api-reference-docs` | Generate and polish API reference docs from code or OpenAPI specs. Use when developers need complete reference material. |
| `tutorial-writer` | Write step-by-step tutorials that take a beginner from zero to a working result. Use for onboarding users or developers. |
| `architecture-docs` | Document system architecture for developers: overview, components, data flow, decisions and operations. Use for onboarding and knowledge sharing. |
| `docstrings` | Add docstrings and inline documentation to public functions, classes and modules in the project's style. Use when code lacks documentation. |
| `user-guide` | Write end-user help documentation and FAQs in plain language with screenshots placeholders. Use for product help centres. |
| `onboarding-guide` | Write a developer onboarding guide: setup, architecture tour, workflows, conventions and first tasks. Use when new people join a project. |
| `docs-site` | Set up a documentation website (Docusaurus, MkDocs Material, VitePress, Starlight) with navigation, search and deployment. Use when docs outgrow a README. |
| `diagram-as-code` | Create diagrams as code with Mermaid, PlantUML or D2: flowcharts, sequence, ER, state and architecture diagrams. Use to explain flows visually. |
| `docs-audit` | Audit documentation for outdated content, broken links, gaps and inconsistencies. Use periodically. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`technical-writer`, `documentation-engineer`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
