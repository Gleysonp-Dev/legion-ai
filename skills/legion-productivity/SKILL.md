---
name: legion-productivity
description: "Productivity & Automation pack with 10 ready procedures: automate task, file organizer, spreadsheet builder, presentation builder, meeting notes, no code automation, personal planner, sop writer, email triage, shell scripting. Use for any productivity & automation task."
---
# Productivity & Automation — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `automate-task` | Automate a repetitive computer task with a script (Python, Node, Bash, PowerShell) that runs on Windows, Mac or Linux. Use when someone repeats the same steps often. |
| `file-organizer` | Organise files and folders: rename in bulk, sort by type or date, deduplicate and archive. Use to clean up messy folders. |
| `spreadsheet-builder` | Build spreadsheets with clean structure, formulas, validation, conditional formatting and charts. Use for trackers, calculators and reports. |
| `presentation-builder` | Create presentation slides with storyline, headlines, visuals and speaker notes. Use for meetings, talks and pitches. |
| `meeting-notes` | Turn meeting transcripts or notes into summaries with decisions, action items, owners and dates. Use after meetings. |
| `no-code-automation` | Design automations in Zapier, Make, n8n or Power Automate connecting apps with triggers, filters and error handling. Use for business workflows without code. |
| `personal-planner` | Create a weekly plan or schedule balancing priorities, deadlines, energy and routines. Use for time management. |
| `sop-writer` | Write standard operating procedures with purpose, scope, steps, roles and checklists. Use to document how work is done. |
| `email-triage` | Triage an inbox: categorise, prioritise, draft replies and set up filters. Use when email is overwhelming. |
| `shell-scripting` | Write robust shell scripts (Bash, PowerShell) with argument parsing, error handling, logging and portability. Use for command-line automation. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences; if `~/.legion/lessons/<procedure>.md` exists, apply those lessons from past corrections.
5. If the procedure needed rework, save what to do differently: `node ~/.legion/bin/memory.js lesson <procedure> "<lesson>"`.

## Specialists for this pack
`operations-automator`, `presentation-designer`, `project-manager`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
