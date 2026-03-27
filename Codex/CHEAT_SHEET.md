# Codex Cheat Sheet

## Best Fit

Use Codex for:

- bug fixes
- feature work
- test writing
- code review
- codebase explanation
- parallel coding tasks

## Fast Start

1. Open a repo.
2. Give Codex one bounded task.
3. Ask for validation, not just a result.

## Prompt Shapes That Work Well

### Understand

```text
Explain how the auth flow works, name the key files, and call out any risky assumptions.
```

### Fix

```text
Find the smallest safe fix for this bug, run the relevant tests, and summarize remaining risk.
```

### Review

```text
Review these changes for correctness, tests, edge cases, and maintainability. Rank issues by severity.
```

### Compare

```text
Propose two implementation options, compare tradeoffs, and recommend one.
```

## Pattern Fit

- Single-agent workflow: excellent
- Review loop: excellent
- Router / supervisor: good
- Parallel fan-out: good
- Swarm-style experimentation: possible, but usually overkill

## Commands And Setup To Remember

```bash
npm i -g @openai/codex
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
codex mcp list
```

## Common Mistakes

- Asking for too much in one step
- Skipping validation
- Using multiple agents without clear ownership
- Treating coding work like a generic chat task

