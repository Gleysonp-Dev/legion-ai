# category: data-analysis | Data Analysis & Visualisation
agents: data-analyst, data-visualizer, analytics-engineer

## exploratory-analysis
desc: Run exploratory data analysis: profile, distributions, correlations, outliers and first insights. Use when receiving a new dataset.
- Load data and report shape, types and missing values.
- Summarise distributions of key variables.
- Check correlations and segment differences.
- Flag outliers and data-quality issues.
- List 3–5 insights and questions for deeper analysis.
check: Data issues flagged; insights backed by numbers
out: EDA notebook or report.

## ab-test-analysis
desc: Analyse A/B tests correctly: sample size, significance, confidence intervals, guardrail metrics and peeking pitfalls. Use to decide if an experiment won.
- Confirm randomisation and sample ratio.
- Compute effect size with confidence intervals.
- Check statistical significance with the pre-registered test.
- Review guardrail metrics.
- Recommend ship, iterate or stop.
check: Sample ratio checked; intervals reported; no p-hacking
out: Experiment readout.

## cohort-retention
desc: Build cohort and retention analyses to see how user behaviour changes over time. Use for product engagement and churn questions.
- Define cohort (signup month) and activity event.
- Compute retention by period.
- Visualise as a heatmap or curves.
- Compare cohorts for trends.
- Explain drivers with segment cuts.
check: Definitions explicit; partial periods excluded
out: Cohort table, chart and insights.

## funnel-analysis
desc: Analyse conversion funnels to find where users drop off and why. Use for signup, onboarding or checkout optimisation.
- Define funnel steps and the time window.
- Compute conversion per step and overall.
- Segment by source, device and cohort.
- Identify the largest drop-off.
- Suggest hypotheses to test.
check: Step definitions consistent; segments compared
out: Funnel chart and recommendations.

## kpi-dashboard
desc: Design a KPI dashboard: metric definitions, layout, targets and refresh. Use to track business or product health.
- Choose 5–8 KPIs tied to goals.
- Define each precisely (formula, source, owner).
- Lay out key numbers first, trends next, details last.
- Show targets and comparisons.
- Set refresh schedule and data freshness indicator.
check: Every KPI defined; freshness shown
out: Dashboard spec or implementation.

## chart-maker
desc: Create a clear, honest chart from data with the right chart type, labels and a takeaway title. Use whenever data should be visualised.
- Identify the message (trend, comparison, distribution, relationship).
- Pick the matching chart type.
- Label axes with units; start bar axes at zero.
- Use colour to highlight the point.
- Title the chart with the takeaway.
check: Axes honest; accessible colours; takeaway title
out: Chart image or code.

## statistical-testing
desc: Choose and run the right statistical test (t-test, chi-square, Mann-Whitney, regression) and explain results plainly. Use when comparing groups or testing relationships.
- Clarify hypothesis and data types.
- Check assumptions (normality, independence, variance).
- Run the appropriate test.
- Report effect size and confidence interval, not just p-value.
- Explain in plain language with caveats.
check: Assumptions checked; effect size reported
out: Test results and interpretation.

## forecasting
desc: Forecast time series (sales, demand, traffic) with baselines, seasonality and uncertainty intervals. Use for planning.
- Plot the series and inspect trend and seasonality.
- Build a naive baseline.
- Fit models (ETS, Prophet, ARIMA, gradient boosting).
- Backtest on holdout periods.
- Report forecasts with intervals.
check: Beats baseline in backtest; intervals shown
out: Forecast with method and accuracy.

## survey-analysis
desc: Analyse survey results: response rates, Likert scales, cross-tabs, open-text themes and bias. Use after collecting survey data.
- Report response rate and respondent profile.
- Summarise closed questions with counts and percentages.
- Cross-tab by key segments.
- Code open-text answers into themes.
- Note biases and limits.
check: Sample size stated; bias discussed
out: Survey report.

## spreadsheet-analysis
desc: Analyse data in spreadsheets with formulas, pivot tables and charts. Use for Excel or Google Sheets analysis.
- Clean and structure data as a table.
- Use formulas for calculated columns.
- Build pivot tables for summaries.
- Add charts for key findings.
- Document assumptions in a notes tab.
check: Formulas, not hard-coded results; notes included
out: Analysed spreadsheet.

# category: ml | Machine Learning
agents: ml-engineer, data-engineer

## ml-baseline
desc: Build a quick, honest ML baseline with proper splits and metrics before trying complex models. Use at the start of any ML project.
- Define target and evaluation metric.
- Split data (time-based if temporal).
- Train a trivial baseline (mean, majority, simple rule).
- Train a simple model (logistic/linear, gradient boosting).
- Report metrics and next steps.
check: No leakage; baseline compared
out: Baseline results.

## feature-engineering
desc: Create and select features: encoding, scaling, aggregations, time features and leakage checks. Use to improve model performance.
- Understand domain signals.
- Create features with clear definitions.
- Encode categoricals and handle missing values.
- Check for target leakage.
- Measure importance and remove useless features.
check: Leakage checked; features documented
out: Feature pipeline code.

## model-evaluation
desc: Evaluate models thoroughly: metrics, confusion matrix, calibration, slices, fairness and error analysis. Use before shipping a model.
- Compute metrics on a held-out test set.
- Analyse errors by slice.
- Check calibration.
- Check fairness across relevant groups.
- Summarise risks.
check: Held-out data; slice analysis done
out: Evaluation report.

## hyperparameter-tuning
desc: Tune hyperparameters with cross-validation and Optuna/grid/random search within a budget. Use to squeeze performance.
- Define search space and budget.
- Use cross-validation appropriate to data.
- Run search with early stopping.
- Check for overfitting on validation.
- Retrain final model and report.
check: Test set untouched during tuning
out: Best parameters and scores.

## model-deployment
desc: Deploy a model as an API or batch job with versioning, monitoring and rollback. Use to put a model in production.
- Package model and preprocessing together.
- Serve via API (FastAPI, BentoML) or batch.
- Version models and data.
- Monitor latency, inputs and predictions for drift.
- Plan rollback.
check: Preprocessing identical in training and serving
out: Serving code and monitoring setup.

## computer-vision
desc: Build computer vision solutions: classification, detection, OCR with pretrained models and fine-tuning. Use for image or video tasks.
- Define task and label format.
- Start from a pretrained model.
- Prepare and augment data.
- Fine-tune and evaluate.
- Optimise for deployment target.
check: Evaluated on realistic images
out: Model and evaluation.

## nlp-classification
desc: Build text classification or extraction with classic NLP, embeddings or LLMs, choosing the cheapest approach that works. Use for tagging, sentiment, routing.
- Define labels with examples.
- Try zero-shot LLM or embedding baseline.
- Compare with a fine-tuned small model if volume is high.
- Evaluate on labelled set.
- Choose by accuracy, cost and latency.
check: Labelled eval set; cost compared
out: Classifier and comparison.

## recommendation-system
desc: Build recommendations: popularity, collaborative filtering, content-based and hybrid, with offline and online evaluation. Use for "you may also like".
- Start with popularity and co-occurrence baselines.
- Add collaborative or content-based models.
- Handle cold start.
- Evaluate offline (precision@k) and plan online test.
- Avoid feedback loops.
check: Cold start handled; baseline compared
out: Recommender and metrics.

## anomaly-detection
desc: Detect anomalies in metrics, transactions or sensor data with statistical and ML methods. Use for fraud, monitoring or IoT alerts.
- Understand normal patterns and seasonality.
- Start with statistical methods (z-score, IQR, seasonal decomposition).
- Try isolation forest or autoencoders if needed.
- Tune thresholds to acceptable false-positive rate.
- Route alerts with context.
check: False-positive rate measured
out: Detector and threshold rationale.

## ml-experiment-tracking
desc: Set up experiment tracking (MLflow, Weights & Biases) for parameters, metrics, artifacts and data versions. Use when experiments are hard to compare.
- Choose a tracking tool.
- Log parameters, metrics, code version and data version.
- Save artifacts and models.
- Compare runs in the UI.
- Document the workflow.
check: Every run reproducible
out: Tracking setup.

# category: llm | LLMs, Agents & Prompting
agents: llm-engineer, prompt-engineer, rag-specialist

## prompt-optimizer
desc: Improve a prompt with clear instructions, context, examples and output format, tested on sample inputs. Use when an AI gives inconsistent results.
- Collect failing examples and the desired outputs.
- Rewrite with role, context, task, constraints and format.
- Add examples covering edge cases.
- Test on 5–20 inputs; compare before and after.
- Remove instructions that do not change output.
check: Before/after comparison on same inputs
out: Improved prompt and test results.

## system-prompt-writer
desc: Write a system prompt for a chatbot or agent: role, tone, capabilities, boundaries, tools and response format. Use when building an assistant.
- Define the assistant's purpose and audience.
- Describe tone and style with examples.
- List tools and when to use them.
- State boundaries and escalation behaviour.
- Test with adversarial and typical inputs.
check: Tested on edge cases; clear scope
out: System prompt and test notes.

## agent-builder
desc: Build an AI agent with tool calling, a loop, memory and guardrails (Claude Agent SDK, OpenAI Agents SDK, LangGraph). Use for autonomous task automation.
- Define the goal, tools and stop conditions.
- Implement tools with strict schemas and validation.
- Build the loop with max steps and error handling.
- Add memory only where needed.
- Add guardrails and human approval for risky actions.
check: Max steps enforced; risky actions gated
out: Agent code and test runs.

## rag-pipeline
desc: Build a retrieval-augmented generation pipeline: ingestion, chunking, embeddings, vector store, retrieval, reranking and cited answers. Use for document Q&A.
- Ingest and clean documents with metadata.
- Chunk by structure with overlap.
- Embed and index in a vector store.
- Retrieve with hybrid search and rerank.
- Generate answers with citations; refuse when unsupported.
check: Citations present; retrieval evaluated
out: RAG pipeline code.

## llm-evals
desc: Build evaluation sets and automated graders for LLM features (exact match, rubric, LLM-as-judge). Use to measure AI quality before changes.
- Collect representative and edge-case inputs.
- Define expected outputs or rubrics.
- Implement graders (code checks first, LLM judges second).
- Run baseline and store results.
- Track scores across prompt/model changes.
check: Graders validated against human judgement
out: Eval set, graders and baseline scores.

## structured-output
desc: Get reliable structured output (JSON) from LLMs using schemas, tool calling and validation with retries. Use when parsing model output.
- Define a strict JSON schema.
- Use native structured output or tool calling.
- Validate output; retry with error feedback.
- Handle refusals and partial output.
- Test with diverse inputs.
check: All outputs validated against schema
out: Structured output code.

## llm-cost-control
desc: Reduce LLM costs with model routing, prompt caching, shorter prompts, batching and output limits. Use when AI bills are high.
- Measure tokens and cost per feature.
- Route simple tasks to smaller models.
- Enable prompt caching for stable prefixes.
- Batch offline workloads.
- Cap output length.
check: Quality checked after each change
out: Cost report with savings.

## mcp-server-builder
desc: Build a Model Context Protocol (MCP) server exposing tools and resources to Claude, Codex and other clients. Use to connect AI assistants to your systems.
- Define tools with clear names, descriptions and input schemas.
- Implement with the official MCP SDK (TypeScript or Python).
- Validate inputs and return helpful errors.
- Keep secrets in environment variables.
- Test with the MCP inspector and a real client.
check: Tools documented; inputs validated
out: MCP server code and config snippet.

## claude-skill-writer
desc: Write a new Agent Skill (SKILL.md with name and description frontmatter) that works in Claude Code and Codex. Use to teach the assistant a repeatable procedure.
- Define when the skill should trigger in the description.
- Write concise steps and examples in SKILL.md.
- Move long references into references/ files.
- Add scripts for deterministic steps.
- Test triggering and results on sample tasks.
check: Description says what and when; tested on real tasks
out: Skill folder ready to install.

## ai-safety-guardrails
desc: Add guardrails to AI features: input/output filtering, prompt-injection defences, PII handling and human review. Use before exposing LLM features to users.
- Treat all external content as untrusted data.
- Separate instructions from data in prompts.
- Limit tool permissions; confirm risky actions.
- Filter or redact sensitive data.
- Log and review flagged interactions.
check: Least-privilege tools; injection tested
out: Guardrail implementation and tests.
