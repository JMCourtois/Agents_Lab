# Glossary

## Core Terms

**Agent**
A model-driven worker that can reason, decide what to do next, and often use tools or files as part of a task.

**Workflow**
A repeatable sequence of steps. Some workflows use one agent, some use many.

**Orchestrator**
The component, person, or lead agent that decides what happens next in a multi-step process.

**Tool**
A capability the agent can call, such as searching files, running commands, browsing, or using a connector.

**Prompt**
The instruction you give the model for one step.

**System instructions**
Higher-level instructions that shape the agent's behavior more persistently than a one-off prompt.

## Context And Memory

**Context window**
The amount of input the model can actively consider in one run.

**Context engineering**
The practice of deciding what information the model should see, in what form, and at what time.

**Source of truth**
The document or state store that the team treats as authoritative for current decisions.

**Ledger**
A running log of goals, subgoals, status, blockers, and next steps.

**Checkpoint**
A saved point in a workflow where a person or system can pause, review, and resume.

**Compaction**
Replacing raw history with a smaller summary so the next step stays efficient.

## Multi-Agent Terms

**Subagent**
A specialized agent invoked by a main agent for a narrower task.

**Handoff**
Control moves from one agent to another instead of always returning to the same coordinator.

**Supervisor**
An orchestrating agent that delegates work to specialists and combines the results.

**Fan-out / fan-in**
A pattern where one task is split into parallel branches and later combined.

**Maker-checker**
A loop where one agent produces output and another validates it against clear criteria.

**Swarm**
A looser multi-agent pattern with more peer-to-peer behavior and less rigid central control.

**Role-based project agents**
Agents named after persistent responsibilities, such as `planner`, `reviewer`, or `researcher`.

## Tooling Terms

**MCP**
Model Context Protocol, a standard way to connect models to tools and data sources.

**Connector**
A product-level integration to external apps, files, or services.

**Worktree**
A separate Git working directory attached to the same repository, useful for isolated parallel work.

**Approval gate**
A point where a human must confirm an action before execution continues.

**Sandbox**
An environment that limits what an agent can read, write, or execute.

## Evaluation Terms

**Acceptance criteria**
The minimum conditions required for a task to count as done.

**Rubric**
A short scoring guide used to evaluate quality more consistently.

**Human-in-the-loop**
A workflow where a person approves, edits, or redirects important steps.

**Observability**
The ability to inspect what the system did, why it did it, and where it failed.

