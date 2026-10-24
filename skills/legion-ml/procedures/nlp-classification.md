# Nlp Classification

> Legion procedure `nlp-classification` · pack **Machine Learning** (`legion-ml`)

## When to use
Build text classification or extraction with classic NLP, embeddings or LLMs, choosing the cheapest approach that works. Use for tagging, sentiment, routing.

## Procedure
1. Define labels with examples.
2. Try zero-shot LLM or embedding baseline.
3. Compare with a fine-tuned small model if volume is high.
4. Evaluate on labelled set.
5. Choose by accuracy, cost and latency.

## Quality checklist
- [ ] Labelled eval set
- [ ] cost compared

## Output
Classifier and comparison.
