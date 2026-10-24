# Memory Leak Hunt

> Legion procedure `memory-leak-hunt` · pack **Debugging & Troubleshooting** (`legion-debugging`)

## When to use
Find and fix memory leaks using heap snapshots, profilers and growth analysis. Use when memory grows until crashes.

## Procedure
1. Confirm the leak with memory metrics over time.
2. Take heap snapshots before and after load and diff them.
3. Identify retained objects and their retainers.
4. Fix common causes: listeners, caches without limits, closures, globals.
5. Verify memory stabilises under the same load.

## Quality checklist
- [ ] Leak reproduced
- [ ] memory flat after fix

## Output
Leak cause and fix with memory graphs or numbers.
