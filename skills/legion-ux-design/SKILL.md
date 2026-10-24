---
name: legion-ux-design
description: "UX, UI & Accessibility playbook with 10 ready procedures: user flow, wireframe, ui polish, design tokens, accessibility audit, usability heuristics, microcopy, persona builder, usability test plan, design critique. Use for any ux, ui & accessibility task."
---
# UX, UI & Accessibility — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `user-flow` | Map user flows for a task from entry to success, including errors and alternatives. Use before designing screens. |
| `wireframe` | Create low-fidelity wireframes (ASCII, Mermaid or simple HTML) for key screens with annotations. Use to agree layout before visual design. |
| `ui-polish` | Improve the visual quality of an interface: hierarchy, spacing, typography, colour and consistency. Use when a UI looks amateur. |
| `design-tokens` | Define design tokens (colour, type, spacing, radius, shadow, motion) and export them to CSS/Tailwind/JSON. Use to create a consistent design foundation. |
| `accessibility-audit` | Audit a site or app for WCAG 2.2 AA issues with automated and manual checks, then fix them. Use before launch. |
| `usability-heuristics` | Evaluate an interface against Nielsen's 10 usability heuristics and propose fixes. Use for quick UX reviews. |
| `microcopy` | Write UI microcopy: buttons, labels, errors, empty states, tooltips and confirmations. Use to make interfaces clearer. |
| `persona-builder` | Create evidence-based personas or jobs-to-be-done profiles from research data. Use to align a team on who the user is. |
| `usability-test-plan` | Plan and run usability tests: tasks, script, recruitment, metrics and synthesis. Use to validate designs with users. |
| `design-critique` | Critique a design or screenshot constructively: goals, hierarchy, clarity, consistency, accessibility. Use for feedback on mockups. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`ux-designer`, `ui-designer`, `accessibility-expert`, `design-system-builder`, `ux-researcher`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
