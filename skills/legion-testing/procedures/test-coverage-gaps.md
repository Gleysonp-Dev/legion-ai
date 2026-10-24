# Test Coverage Gaps

> Legion procedure `test-coverage-gaps` · pack **Testing** (`legion-testing`)

## When to use
Find untested critical code using coverage reports and risk analysis, then add the most valuable tests. Use to improve confidence quickly.

## Procedure
1. Generate a coverage report.
2. Cross it with risk: business-critical, frequently changed, bug-prone files.
3. List the top 10 untested risky paths.
4. Write tests for them in priority order.
5. Report coverage before and after for those areas.

## Quality checklist
- [ ] Prioritised by risk, not raw percentage

## Output
Gap list and new tests.
