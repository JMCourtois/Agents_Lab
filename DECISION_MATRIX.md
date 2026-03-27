# Decision Matrix

Use this page when you know the task you want to do but do not yet know the right architecture or tool.

## Start With The Smallest Pattern

If a direct prompt or a single agent with tools can do the job reliably, stop there.

Escalate only when you need:

- specialization
- clearer boundaries
- independent parallel work
- stronger review
- durable state across many steps

## Pattern Selection

| Situation | Recommended Pattern | Good First Tool | Why |
| --- | --- | --- | --- |
| Clean one-shot transformation | Single-agent workflow | Claude Cowork or Codex | Lowest overhead, easy to learn |
| Draft, then critique, then improve | Sequential pipeline or review loop | Claude Code or Codex | Natural refinement flow |
| Unsure which specialist should own the task | Router / supervisor | Claude Code | Project-local roles fit well |
| Need multiple independent perspectives quickly | Parallel fan-out | Codex or Claude Code | Stronger parallel task mindset |
| Need a persistent project memory | Planner-ledger | Claude Code | Repo files work well as durable state |
| Need desktop synthesis across files and connectors | Single-agent plus structured review | Claude Cowork | Best fit for knowledge work |
| Need a code fix with validation | Review loop plus tool use | Codex | Strong coding and execution focus |
| Need one agent to transfer control dynamically | Handoff | Codex or API-level systems | Better once routing is mature |
| Need open-ended adaptive planning | Planner-ledger or manager-worker | Claude Code first | Easier to learn before swarm patterns |
| Need collaborative debate or council-style review | Group chat / debate | Usually advanced | High coordination overhead |

## Tool Selection

| If your center of gravity is... | Start here | Notes |
| --- | --- | --- |
| Editing code, running tasks, validating fixes | [Codex](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/Codex) | Best fit when the artifact is code |
| Building repo-local instructions, roles, and specialized task routing | [Claude_Code](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/Claude_Code) | Strong fit for subagents and project memory |
| Research, synthesis, desktop tasks, and file-based knowledge work | [Claude_Cowork](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/Claude_Cowork) | Best fit when the artifact is not mainly code |

## Practical Rules

### Use a single-agent workflow when:

- one artifact is being created
- the task fits in one conversation
- quality can be checked quickly

### Use a review loop when:

- quality matters more than speed
- a bad first draft is acceptable
- you can define pass/fail criteria

### Use routing when:

- the task type changes often
- you want specialist prompts or roles
- you do not want one giant universal prompt

### Use parallel fan-out when:

- branches can work independently
- outputs can be merged safely
- you are not letting multiple agents edit the same file at once

### Use planner-ledger patterns when:

- the project lasts more than one session
- state must survive interruptions
- you need a visible plan, not only a final answer

## What To Avoid Early

- Swarm patterns for simple tasks.
- Dynamic handoffs without clear stop conditions.
- Parallel writing into the same file.
- Letting architecture complexity become a substitute for clear prompts.

