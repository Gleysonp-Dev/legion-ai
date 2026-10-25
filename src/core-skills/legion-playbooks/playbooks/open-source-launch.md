# Playbook: Open-source launch

**Goal:** publish a project on GitHub that people can install, trust and contribute to.
**Mode:** lite · **Council:** review of README + install path

## Ask first
- Licence preference, project name, GitHub account/organisation
- Who it is for and the one-command install you want

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | secrets-guardian | `legion-security` → secret-scan | clean history | scanner output clean |
| 1 | technical-writer | `legion-docs` → readme-writer | README with quick start | quick start works on a clean machine |
| 2 | ci-cd-engineer | `legion-devops` → github-actions-ci, release-automation | CI on 3 OSes + releases | CI green |
| 2 | documentation-engineer | `legion-git` → repo-setup, open-source-launch | licence, CONTRIBUTING, templates | files present |
| 3 | content-strategist | `legion-marketing` → social-content-calendar | launch posts | drafts approved |

## Definition of done
Fresh-machine install works from the README, CI green, licence and contribution guide present, launch posts ready.
