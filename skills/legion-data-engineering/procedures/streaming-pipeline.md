# Streaming Pipeline

> Legion procedure `streaming-pipeline` · pack **Data Engineering** (`legion-data-engineering`)

## When to use
Build streaming pipelines with Kafka, Kinesis, Pub/Sub or Flink: topics, consumers, windows and exactly-once concerns. Use for real-time data.

## Procedure
1. Define events, keys and partitions.
2. Choose processing framework.
3. Handle late data with windows and watermarks.
4. Make consumers idempotent.
5. Monitor lag.

## Quality checklist
- [ ] Consumer lag monitored
- [ ] idempotency ensured

## Output
Streaming pipeline design and code.
