# Project 03: Agent Routing

## Goal

Design a simple routing strategy for Codex work.

This is not about building a huge system. It is about learning when to use:

- one thread
- a review pass
- a separate specialist prompt
- a parallel path

## Suggested Workflow

1. Read [starter_assets/task_inbox.md](Agents_Lab/Codex/PROJECTS/03_Agent_Routing/starter_assets/task_inbox.md).
2. Ask Codex to group the tasks by workflow shape.
3. Turn the result into a small `AGENTS.md`-style routing note.

## Suggested Prompt

```text
Read the task inbox and turn it into a simple routing guide for Codex. For each task type, say whether it should use a single thread, a review loop, a parallel comparison, or a separate specialist prompt. Keep the guide short and practical.
```
