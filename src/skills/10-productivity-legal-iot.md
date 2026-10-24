# category: productivity | Productivity & Automation
agents: operations-automator, presentation-designer, project-manager

## automate-task
desc: Automate a repetitive computer task with a script (Python, Node, Bash, PowerShell) that runs on Windows, Mac or Linux. Use when someone repeats the same steps often.
- Document the manual steps and inputs.
- Choose a language available on the user's machine.
- Write the script with clear configuration and logging.
- Add dry-run mode and error handling.
- Test on samples and document usage.
check: Dry-run available; cross-platform paths
out: Script and usage notes.

## file-organizer
desc: Organise files and folders: rename in bulk, sort by type or date, deduplicate and archive. Use to clean up messy folders.
- Inventory the folder.
- Propose an organisation scheme.
- Preview changes before applying.
- Apply with collision-safe moves.
- Report what changed.
check: Preview before change; nothing deleted without approval
out: Organisation plan and change log.

## spreadsheet-builder
desc: Build spreadsheets with clean structure, formulas, validation, conditional formatting and charts. Use for trackers, calculators and reports.
- Define purpose and inputs.
- Structure tabs (inputs, calculations, outputs).
- Use formulas and named ranges.
- Add validation and formatting.
- Add charts and instructions.
check: No hard-coded results; inputs validated
out: Spreadsheet.

## presentation-builder
desc: Create presentation slides with storyline, headlines, visuals and speaker notes. Use for meetings, talks and pitches.
- Define audience and message.
- Outline storyline.
- Write headline per slide.
- Add visuals and data.
- Write speaker notes.
check: One idea per slide; headlines state the point
out: Slide deck or outline.

## meeting-notes
desc: Turn meeting transcripts or notes into summaries with decisions, action items, owners and dates. Use after meetings.
- Identify participants and purpose.
- Summarise discussion.
- List decisions.
- List action items with owners and dates.
- List open questions.
check: Actions owned and dated
out: Meeting summary.

## no-code-automation
desc: Design automations in Zapier, Make, n8n or Power Automate connecting apps with triggers, filters and error handling. Use for business workflows without code.
- Map trigger and actions.
- Choose platform.
- Add filters and data mapping.
- Add error notifications.
- Test with real data.
check: Error handling configured; tested
out: Automation design and setup steps.

## personal-planner
desc: Create a weekly plan or schedule balancing priorities, deadlines, energy and routines. Use for time management.
- List commitments and deadlines.
- Prioritise tasks.
- Block time.
- Add buffers.
- Review at week end.
check: Realistic load; buffers included
out: Weekly plan.

## sop-writer
desc: Write standard operating procedures with purpose, scope, steps, roles and checklists. Use to document how work is done.
- Define purpose and scope.
- List roles.
- Write numbered steps.
- Add checklists.
- Version and review.
check: Steps reproducible by a new person
out: SOP document.

## email-triage
desc: Triage an inbox: categorise, prioritise, draft replies and set up filters. Use when email is overwhelming.
- Categorise messages.
- Prioritise by urgency and importance.
- Draft replies for quick wins.
- Propose filters.
- List follow-ups.
check: Urgent items surfaced
out: Triage summary and drafts.

## shell-scripting
desc: Write robust shell scripts (Bash, PowerShell) with argument parsing, error handling, logging and portability. Use for command-line automation.
- Choose shell for target OS.
- Enable strict mode.
- Parse arguments with help text.
- Handle errors and cleanup.
- Test on target systems.
check: Strict mode; help text; quoting correct
out: Script.

# category: legal-privacy | Legal, Privacy & Compliance (not legal advice)
agents: legal-researcher, privacy-engineer, compliance-analyst

## privacy-policy
desc: Draft a privacy policy reflecting actual data practices, LGPD/GDPR/CCPA disclosures and user rights, marked for legal review. Use when launching an app or site.
- Inventory data collected, purposes, sharing and retention.
- Map legal bases.
- Describe user rights and how to exercise them.
- Write in plain language.
- Mark as draft for lawyer review.
check: Matches real data practices; review notice
out: Privacy policy draft.

## terms-of-service
desc: Draft terms of service covering usage, accounts, payments, IP, liability and termination, marked for legal review. Use for apps and SaaS.
- Identify business model and risks.
- Draft sections.
- Use plain language.
- Align with privacy policy.
- Mark for review.
check: Review notice; consistent with product
out: Terms draft.

## contract-review
desc: Review a contract for key terms, obligations, risks and unusual clauses, summarised in plain language (not legal advice). Use before signing.
- Identify parties, term and payment.
- Summarise obligations.
- Flag risky clauses.
- List questions for the counterparty.
- Recommend lawyer review for high stakes.
check: Risky clauses flagged; not-legal-advice notice
out: Contract summary and issue list.

## lgpd-gdpr-compliance
desc: Assess LGPD/GDPR compliance technically: data inventory, legal bases, consent, rights requests, DPAs and breach process. Use when processing personal data.
- Build data inventory.
- Check legal bases and consent.
- Check rights request processes.
- Check vendors and DPAs.
- Check breach procedure.
check: Gaps listed with owners
out: Compliance gap report.

## cookie-consent
desc: Implement cookie consent with categories, blocking before consent and records of consent. Use for websites with analytics or ads.
- Inventory cookies and scripts.
- Categorise.
- Block non-essential until consent.
- Store consent records.
- Allow changes.
check: Non-essential blocked before consent
out: Consent implementation.

## data-retention
desc: Define and implement data retention and deletion schedules. Use to reduce risk and comply with regulations.
- Inventory data types.
- Set retention periods with reasons.
- Implement automated deletion.
- Handle backups.
- Document schedule.
check: Automated deletion in place
out: Retention schedule and jobs.

## dsar-handler
desc: Build a process and tooling to handle data subject access, deletion and portability requests. Use for LGPD/GDPR obligations.
- Define intake and identity verification.
- Locate data across systems.
- Export or delete.
- Respond within deadlines.
- Log requests.
check: Identity verified; deadlines tracked
out: DSAR process and scripts.

## soc2-readiness
desc: Prepare for SOC 2: control matrix, policies, evidence collection and gap remediation. Use for B2B SaaS selling to enterprises.
- Define scope and criteria.
- Map controls.
- Draft policies.
- Plan evidence.
- Remediate gaps.
check: Every control has owner and evidence
out: Readiness plan.

## license-compliance
desc: Check open-source licence compatibility for a project and its dependencies. Use before distributing software.
- List dependencies and licences.
- Identify copyleft obligations.
- Check compatibility.
- Generate notices file.
- Flag issues.
check: Notices generated; conflicts flagged
out: Licence report.

## security-questionnaire
desc: Answer customer security questionnaires accurately from existing policies and evidence. Use in enterprise sales.
- Collect policies and evidence.
- Answer each question accurately.
- Mark gaps honestly.
- Reuse an answer library.
- Review before sending.
check: No overstated claims
out: Completed questionnaire.

# category: iot | IoT & Embedded
agents: iot-engineer, realtime-engineer, data-visualizer

## esp32-firmware
desc: Write ESP32 firmware (Arduino or ESP-IDF) with Wi-Fi reconnection, sensors, deep sleep, watchdog and OTA. Use for connected devices.
- Define sensors, pins and sampling rate.
- Implement Wi-Fi with reconnection and backoff.
- Read sensors with calibration and filtering.
- Add watchdog and deep sleep where useful.
- Add OTA updates with rollback.
check: Recovers from Wi-Fi loss; watchdog enabled
out: Firmware code and wiring notes.

## mqtt-architecture
desc: Design MQTT topic structure, payload schemas, QoS, retained messages and broker security. Use for IoT messaging.
- Design topic hierarchy.
- Define JSON payloads with timestamps and units.
- Choose QoS and retained usage.
- Secure broker with TLS and per-device credentials.
- Plan bridging to backend.
check: TLS and per-device auth; schemas versioned
out: Topic and payload spec.

## sensor-calibration
desc: Calibrate sensors (pH, temperature, ORP, chlorine, flow, pressure) with reference points, drift tracking and filtering. Use for accurate measurements.
- Identify sensor characteristics.
- Collect reference measurements.
- Fit calibration curve.
- Add filtering.
- Schedule recalibration.
check: Calibration error quantified
out: Calibration procedure and code.

## iot-dashboard
desc: Build a telemetry dashboard with live values, history charts, alerts and device status. Use to monitor devices.
- Define metrics per device.
- Choose stack (Grafana, custom web).
- Show live values and history.
- Add thresholds and alerts.
- Show device online status.
check: Stale data flagged; alerts work
out: Dashboard.

## device-provisioning
desc: Design secure device provisioning: unique identities, claiming, Wi-Fi setup (BLE/SoftAP) and certificate rotation. Use for shipping devices.
- Generate unique identity per device.
- Design claiming flow.
- Implement Wi-Fi onboarding.
- Store credentials securely.
- Plan rotation and revocation.
check: No shared credentials across devices
out: Provisioning design.

## ota-updates
desc: Implement over-the-air firmware updates with signing, staged rollout and automatic rollback. Use for device fleets.
- Sign firmware images.
- Use A/B partitions.
- Roll out in stages.
- Verify health and roll back.
- Track versions.
check: Signed images; rollback tested
out: OTA implementation.

## home-automation
desc: Integrate devices with Home Assistant, Node-RED or smart-home platforms with automations. Use for home or facility automation.
- Inventory devices and protocols.
- Integrate with platform.
- Create automations.
- Add notifications.
- Document.
check: Fail-safe defaults
out: Configuration and automations.

## hardware-bom
desc: Create a hardware bill of materials with components, suppliers, costs and alternatives. Use for prototyping or production.
- List components with specs.
- Find suppliers and prices.
- Identify alternatives.
- Compute total at quantities.
- Flag long lead times.
check: Alternatives for critical parts
out: BOM spreadsheet.

## edge-data-processing
desc: Process data on the device or gateway: filtering, aggregation, anomaly detection and buffering when offline. Use to reduce bandwidth and latency.
- Decide what runs on edge vs cloud.
- Filter and aggregate.
- Detect anomalies locally.
- Buffer offline.
- Sync when connected.
check: No data loss when offline
out: Edge processing code.

## iot-security
desc: Secure IoT devices and backends: secure boot, encrypted storage, TLS, least privilege and vulnerability disclosure. Use before shipping devices.
- Enable secure boot and flash encryption.
- Use TLS with certificate validation.
- Use per-device credentials with least privilege.
- Disable debug interfaces in production.
- Publish update and disclosure policy.
check: Debug disabled; per-device credentials
out: IoT security checklist.
