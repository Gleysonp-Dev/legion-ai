# Playbook: Security hardening (your own app)

**Goal:** find and fix the most important security weaknesses of an application the user owns.
**Mode:** full · **Council:** review of fixes (security work benefits most from a second AI)

## Ask first
- Confirm the user owns or is authorised to assess the system
- Where it runs, what sensitive data it holds, any compliance needs (LGPD, PCI…)

## Waves
| Wave | Agent | Uses | Deliverable | Proof |
|---|---|---|---|---|
| 1 | context-scout | — | map of entry points and data flows | file list |
| 1 | threat-modeler | `legion-security` → threat-model | STRIDE model | DFD + threat table |
| 2 | security-auditor | `legion-security` → security-review, owasp-checklist | findings by severity | evidence per finding |
| 2 | secrets-guardian | `legion-security` → secret-scan | leaked secrets (masked) | scanner output |
| 2 | dependency-auditor | `legion-security` → dependency-audit | vulnerable packages | audit output |
| 3 | appsec-engineer | `legion-security` → input-validation, security-headers | fixes for blockers/majors | regression tests pass |
| 3 | cloud-security-engineer | `legion-cloud` → iam-least-privilege | IAM/network fixes | policy diff |
| — | council | `legion-council` review --focus security | independent check | blockers fixed |
| 4 | qa-gatekeeper | — | re-test of every fixed finding | all closed with proof |

## Definition of done
No open blocker/major, secrets rotated, CI runs secret + dependency scanning.
