---
name: docstrings
description: "Add docstrings and inline documentation to public functions, classes and modules in the project's style. Use when code lacks documentation."
---
# Docstrings

> Legion skill · category **Documentation**

## When to use
Add docstrings and inline documentation to public functions, classes and modules in the project's style. Use when code lacks documentation.

## Procedure
1. Detect the docstring style used.
2. Document purpose, parameters, returns, errors and examples.
3. Explain why for non-obvious code.
4. Avoid comments that restate the code.
5. Generate docs to verify.

## Quality checklist
- [ ] Style consistent
- [ ] no redundant comments

## Output
Documented code.

## Works well with
Legion agents: `technical-writer`, `documentation-engineer`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
