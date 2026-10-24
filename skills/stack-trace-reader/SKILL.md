---
name: stack-trace-reader
description: "Read and explain stack traces and error messages, locate the failing code and propose fixes. Use when the user pastes an error."
---
# Stack Trace Reader

> Legion skill · category **Debugging & Troubleshooting**

## When to use
Read and explain stack traces and error messages, locate the failing code and propose fixes. Use when the user pastes an error.

## Procedure
1. Identify the error type and message.
2. Find the first frame in the user's own code.
3. Read that code and the values involved.
4. Explain the cause in plain language.
5. Propose and, if asked, apply the fix.

## Quality checklist
- [ ] Points to the exact file and line
- [ ] explanation matches code

## Output
Explanation and fix.

## Works well with
Legion agents: `debugger`, `observability-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
