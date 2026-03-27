# Project 03: Agent Routing

## Goal

Design a staged Cowork workflow instead of a repo-local subagent system.

The routing lesson here is:

- when to do a single pass
- when to split work into extraction and synthesis
- when to add validation
- when to open a separate thread or task

## Suggested Workflow

1. Read [starter_assets/task_inbox.md](Agents_Lab/Claude_Cowork/PROJECTS/03_Agent_Routing/starter_assets/task_inbox.md).
2. Ask Cowork to group tasks by workflow shape.
3. Turn the result into a short routing memo.

## Suggested Prompt

```text
Read the task inbox and design a simple Cowork routing guide. For each task type, say whether it should be handled as a single pass, a staged extract-and-synthesize workflow, a validation-heavy workflow, or a separate thread.
```
