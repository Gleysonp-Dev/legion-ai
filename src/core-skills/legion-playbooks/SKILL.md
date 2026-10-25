---
name: legion-playbooks
description: "Ready end-to-end playbooks that run the Legion team through a whole project: SaaS MVP, landing page launch, IoT product (sensor to dashboard), mobile app, API service, AI assistant with RAG, security hardening, data dashboard, legacy upgrade, open-source launch. Use when the user wants to build or ship one of these from start to finish, or says 'playbook'."
---

# Legion playbooks

A playbook is a proven order of work for a whole project: who does what, in which wave, and what proves each step is done.

## How to run one
1. Pick the playbook that matches the goal (table below). If none fits, use the `legion` skill to plan from scratch.
2. Read **only** that file: `playbooks/<name>.md` (next to this SKILL.md).
3. Ask the user the questions in its **Ask first** section — in one message, skipping anything already known from memory (`node ~/.legion/bin/memory.js context`).
4. Run it with the `legion` skill rules: waves in parallel, briefs short, every deliverable with proof, `qa-gatekeeper` at the end. Use the council checkpoints it lists (`legion-council` skill).
5. Adapt freely — drop waves the user does not need, and say which ones you skipped.
6. Finish with the Legion report (result, evidence table, cost).

| Playbook | Use when the user wants to… |
|---|---|
| `saas-mvp` | build a subscription web product: auth, core feature, billing, deploy |
| `landing-page-launch` | launch a product page that converts, with analytics and SEO |
| `iot-product` | connect a device/sensor to the cloud with live dashboard and alerts |
| `mobile-app` | ship an iOS/Android app to the stores |
| `api-service` | build a documented, tested, deployed API |
| `ai-assistant-rag` | build a chatbot/assistant that answers from their documents |
| `security-hardening` | audit and fix the security of an existing app |
| `data-dashboard` | turn raw data into a trustworthy KPI dashboard |
| `legacy-upgrade` | upgrade an old codebase/framework safely |
| `open-source-launch` | publish a project on GitHub the right way |
