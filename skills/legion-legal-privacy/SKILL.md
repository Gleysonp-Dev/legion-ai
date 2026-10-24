---
name: legion-legal-privacy
description: "Legal, Privacy & Compliance (not legal advice) playbook with 10 ready procedures: privacy policy, terms of service, contract review, lgpd gdpr compliance, cookie consent, data retention, dsar handler, soc 2 readiness, license compliance, security questionnaire. Use for any legal, privacy & compliance task."
---
# Legal, Privacy & Compliance (not legal advice) — Legion pack

Pick the procedure that matches the task, then **read only that file** from `procedures/<name>.md` (next to this SKILL.md) and follow it. Do not load the others — that keeps context small.

| Procedure | When to use |
|---|---|
| `privacy-policy` | Draft a privacy policy reflecting actual data practices, LGPD/GDPR/CCPA disclosures and user rights, marked for legal review. Use when launching an app or site. |
| `terms-of-service` | Draft terms of service covering usage, accounts, payments, IP, liability and termination, marked for legal review. Use for apps and SaaS. |
| `contract-review` | Review a contract for key terms, obligations, risks and unusual clauses, summarised in plain language (not legal advice). Use before signing. |
| `lgpd-gdpr-compliance` | Assess LGPD/GDPR compliance technically: data inventory, legal bases, consent, rights requests, DPAs and breach process. Use when processing personal data. |
| `cookie-consent` | Implement cookie consent with categories, blocking before consent and records of consent. Use for websites with analytics or ads. |
| `data-retention` | Define and implement data retention and deletion schedules. Use to reduce risk and comply with regulations. |
| `dsar-handler` | Build a process and tooling to handle data subject access, deletion and portability requests. Use for LGPD/GDPR obligations. |
| `soc2-readiness` | Prepare for SOC 2: control matrix, policies, evidence collection and gap remediation. Use for B2B SaaS selling to enterprises. |
| `license-compliance` | Check open-source licence compatibility for a project and its dependencies. Use before distributing software. |
| `security-questionnaire` | Answer customer security questionnaires accurately from existing policies and evidence. Use in enterprise sales. |

## How to run it
1. Choose the best-matching procedure (or combine two if the task clearly spans them).
2. Read `procedures/<name>.md` and follow its steps.
3. Finish with its quality checklist and show the evidence for each item — **no proof, not done**.
4. If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences.

## Specialists for this pack
`legal-researcher`, `privacy-engineer`, `compliance-analyst`. For large or multi-part work, use the `legion` skill so the conductor can split it across agents.
