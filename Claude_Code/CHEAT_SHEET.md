# Claude Code Cheat Sheet

## Best Fit

Use Claude Code for:

- repo-local instructions
- subagent workflows
- coding tasks in the terminal
- project memory
- MCP-augmented coding or research

## Fast Start

```bash
npm install -g @anthropic-ai/claude-code
cd your-project
claude
```

## Commands To Remember

- `/init`
- `/memory`
- `/agents`
- `/mcp`
- `/permissions`
- `/config`

## Strong Starter Pattern

1. Put project rules in `CLAUDE.md`
2. Create one `reviewer`
3. Create one `researcher`
4. Use a review loop on meaningful tasks

## Prompt Shapes That Work Well

### Understand

```text
Read the repo and explain the current flow, important files, and likely risk points.
```

### Plan

```text
Before editing, make a short plan, name assumptions, and identify files likely to change.
```

### Review

```text
Review this change for bugs, regressions, missing tests, and unclear assumptions.
```

### Route

```text
Given this task, decide whether planner, researcher, reviewer, or direct execution is the best path and explain why.
```

## Common Mistakes

- giant `CLAUDE.md`
- vague subagent roles
- overlapping agent responsibilities
- skipping review because the first answer sounded confident

