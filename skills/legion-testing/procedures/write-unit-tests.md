# Write Unit Tests

> Legion procedure `write-unit-tests` · pack **Testing** (`legion-testing`)

## When to use
Write unit tests for a function, class or module covering behaviour, edge cases and errors. Use when code lacks tests.

## Procedure
1. Read the code and list inputs, outputs, side effects and error paths.
2. Write one test per behaviour with a descriptive name.
3. Cover edge cases: empty, null, boundaries, large inputs, unicode.
4. Mock only external boundaries (network, time, filesystem).
5. Run the tests and confirm they fail when the code is broken.

## Quality checklist
- [ ] Tests fail on a deliberately broken implementation
- [ ] no flaky time/network use

## Output
Test file with all tests passing.
