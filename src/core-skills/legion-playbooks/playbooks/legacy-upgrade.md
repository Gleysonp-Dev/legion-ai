# Playbook: Legacy upgrade

**Goal:** move an old codebase to supported versions without breaking the business.
**Mode:** full · **Council:** review of the migration plan and of each major step

## Ask first
- Current and target versions, deadlines (end-of-support dates), freeze windows
- How it is tested today and how it is deployed

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | context-scout | — | inventory: versions, deprecated APIs, risky areas | report with paths |
| 1 | test-architect | `legion-testing` → test-coverage-gaps, regression-suite | safety-net tests on critical paths | tests pass on current version |
| — | council | `legion-council` plan | plan critique | resolved |
| 2 | legacy-modernizer | `legion-code-quality` → framework-upgrade | step-by-step upgrade (one major at a time) | tests green after each step |
| 2 | dependency-auditor | `legion-security` → dependency-audit | dependency upgrades | audit clean |
| 3 | performance-engineer | `legion-debugging` → performance-regression | before/after benchmarks | no regression > 10% |
| 3 | release-manager | `legion-git` → changelog-writer | staged rollout + rollback | rollback rehearsed |

## Definition of done
Running on supported versions, all tests green, performance unchanged or better, rollback proven.
