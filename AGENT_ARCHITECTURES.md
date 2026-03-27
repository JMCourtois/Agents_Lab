# Agent Architectures

This document is the long-term reference for the repo.

It is broader than the rest of the learning path on purpose. You do not need to master every pattern before using agents well. You do need to know what exists, what problems each pattern solves, and what level of complexity is justified.

## Complexity Rule

Start at the simplest level that solves the task:

1. Direct model call
2. Single agent with tools
3. Structured workflow
4. Multi-agent orchestration
5. Long-running or adaptive orchestration

If level 2 works, do not jump to level 5.

## Quick Summary Table

| Pattern | Best for | Complexity | Beginner verdict |
| --- | --- | --- | --- |
| Direct model call | One clean transformation | Very low | Essential |
| Single agent with tools | General tasks in one domain | Low | Essential |
| Sequential pipeline | Draft, review, polish | Low | Essential |
| Router / supervisor | Mixed task types | Medium | Strong early pattern |
| Reviewer loop | Quality control | Medium | Essential |
| Parallel fan-out | Independent perspectives | Medium | Learn early, use carefully |
| Handoff | Dynamic specialist transfer | Medium | Learn later |
| Planner-executor | Plan first, then do | Medium | Useful once basics are stable |
| Planner-ledger | Long multi-step work | Medium-high | Excellent after fundamentals |
| Manager-worker | Modular project execution | Medium-high | Good for bigger repos |
| Map-reduce | Parallel analysis with synthesis | Medium-high | Useful for research and evaluation |
| Tree-of-thought | Explore branches before choosing | High | Mostly situational |
| Debate / council | Competing perspectives | High | Easy to overuse |
| Consensus / voting | Aggregate independent judgments | High | Good for evaluation, not everything |
| Reflection / self-critique | Improve one agent's reasoning | Medium | Very useful |
| Retrieval-centered agents | Knowledge-grounded work | Medium | Practical and common |
| Event-driven agents | Triggered automation | High | Better after manual workflows |
| Long-running background agents | Ongoing tasks | High | Advanced operational pattern |
| Graph / state-machine workflows | Deterministic control with loops | High | Powerful, but advanced |
| Hierarchical teams | Clear command chains | High | Strong for scale |
| Swarm / hive | Peer coordination | Very high | Usually not a starting point |
| Multi-session orchestration | Context isolation | High | Useful, but costly |
| Tool-specialist agents | Narrow execution roles | Medium | Practical in real projects |
| Role-based project agents | Stable repo-local roles | Medium | Great for learning |

## Foundations

### Agent vs workflow vs tool use

- A tool call alone is not an agent architecture.
- A workflow is a repeatable structure around one or more agent steps.
- An agent architecture defines how reasoning, delegation, state, and control move through the workflow.

### Context engineering

Most "multi-agent" problems are really context problems.

You usually gain more by deciding:

- what each agent sees
- what each agent ignores
- what gets summarized
- where state is stored

than by adding more agents.

### Source of truth

If several agents touch the same project, keep explicit state somewhere durable:

- `CLAUDE.md`
- `AGENTS.md`
- a project brief
- a ledger
- a decisions log
- a task board

Without that, the system becomes conversation-driven rather than project-driven.

### Memory boundaries

Every extra agent boundary trades one thing for another:

- better specialization
- cleaner context
- more coordination cost
- more failure modes

### Routing

Routing can be:

- deterministic: fixed sequence or fixed rules
- classifier-based: pick a path from a small menu
- dynamic: an agent decides which specialist should take over

### Evaluation

Agent systems improve dramatically when quality checks are explicit:

- pass / fail
- a short rubric
- required sections
- expected tests
- risk checks

### Human-in-the-loop

Human involvement matters most at:

- risky actions
- ambiguous goals
- final approval
- budget and time boundaries

## Core Patterns

### 1. Direct Model Call

**What it is**
A single prompt with no explicit agent loop.

**How it works**
You provide a good prompt and get one result.

**Strengths**
Fast, cheap, easy to debug.

**Weaknesses**
Weak memory, weak specialization, limited recovery.

**When to use it**
Summaries, transformations, classifications, first drafts.

**When not to use it**
Long projects, tool-heavy tasks, durable workflows.

**Simple Claude Code version**
One direct request in a repo session with no subagents.

**Simple Claude Cowork version**
One structured task against local files or a connector.

**Simple Codex version**
One focused coding or docs request in a single thread.

**Complexity level**
Very low.

**Beginner verdict**
Start here more often than you think.

### 2. Single Agent With Tools

**What it is**
One agent handles the task, but it can search, read, run commands, or call external tools.

**How it works**
The same agent loops through reasoning and tool use until it has enough to answer or act.

**Strengths**
Low overhead, flexible, often the right default.

**Weaknesses**
Can become overloaded if the prompt, tools, and goals all sprawl.

**When to use it**
Most practical work where one artifact or task is central.

**When not to use it**
When you need strong role separation, parallelism, or different safety boundaries.

**Simple Claude Code version**
One session using repo files, commands, and MCP tools.

**Simple Claude Cowork version**
One task using local files, connectors, and desktop context.

**Simple Codex version**
One thread using codebase access, execution, and reviews.

**Complexity level**
Low.

**Beginner verdict**
This should probably be your default.

### 3. Sequential Pipeline

**What it is**
A fixed chain where one step feeds the next.

**How it works**
Example: research -> draft -> review -> polish.

**Strengths**
Predictable, reproducible, easy to explain.

**Weaknesses**
Bad early output can contaminate later steps.

**When to use it**
Linear tasks with clear dependencies.

**When not to use it**
Tasks needing dynamic routing, backtracking, or heavy collaboration.

**Simple Claude Code version**
One session or script calling specialized prompts or subagents in order.

**Simple Claude Cowork version**
A manual checklist across separate task prompts in one workspace.

**Simple Codex version**
Run staged tasks in order and save each artifact between steps.

**Complexity level**
Low.

**Beginner verdict**
One of the best first serious patterns.

### 4. Router / Supervisor

**What it is**
A coordinator decides which specialist should handle each task.

**How it works**
The supervisor inspects the request, delegates narrowly, then synthesizes.

**Strengths**
Reduces prompt bloat and improves specialization.

**Weaknesses**
The supervisor can become a bottleneck or bad classifier.

**When to use it**
Mixed task types, recurring roles, reusable specialist prompts.

**When not to use it**
Very small tasks where routing adds more work than value.

**Simple Claude Code version**
Project subagents in `.claude/agents/` plus a lead agent or explicit routing rules.

**Simple Claude Cowork version**
A manual routing checklist and separate task threads for each role.

**Simple Codex version**
An `AGENTS.md` file plus role prompts or multiple threads for specialist work.

**Complexity level**
Medium.

**Beginner verdict**
Excellent once single-agent workflows feel too crowded.

### 5. Reviewer Loop

**What it is**
One step creates output, another checks it, and the cycle repeats if needed.

**How it works**
Maker -> checker -> revise -> approve or stop.

**Strengths**
Very strong quality improvement for modest complexity.

**Weaknesses**
Can loop forever without clear criteria.

**When to use it**
Writing, coding, documentation, planning, and any task where quality matters.

**When not to use it**
Urgent low-stakes tasks where speed matters more than polish.

**Simple Claude Code version**
Writer and reviewer subagents with pass/fail criteria.

**Simple Claude Cowork version**
One task to create, another task to critique, then a revision pass.

**Simple Codex version**
Generate, review, run checks, revise, and summarize remaining risk.

**Complexity level**
Medium.

**Beginner verdict**
One of the highest-value patterns in this repo.

### 6. Parallel Fan-Out

**What it is**
Several branches work on the same problem independently, then results are merged.

**How it works**
One initiator sends the same task to multiple roles or perspectives and later synthesizes.

**Strengths**
Fast coverage, multiple viewpoints, useful for evaluation and ideation.

**Weaknesses**
Costs more, contradictions are common, and shared-file edits are dangerous.

**When to use it**
Independent analysis, critique from multiple angles, alternative proposals.

**When not to use it**
When branches depend heavily on each other or write to the same artifact.

**Simple Claude Code version**
Multiple subagents or sessions analyze the same file but write separate outputs.

**Simple Claude Cowork version**
Separate task threads produce independent summaries for later synthesis.

**Simple Codex version**
Parallel threads or cloud tasks inspect the same repo from different angles.

**Complexity level**
Medium.

**Beginner verdict**
Useful early, but only with clear ownership.

## Expanded Patterns

### 7. Handoff

**What it is**
Control moves from one specialist to another instead of returning to a central supervisor.

**How it works**
The current agent decides it is no longer the right owner and transfers control.

**Strengths**
Natural for evolving tasks where the right expert is discovered late.

**Weaknesses**
Harder to trace, easy to bounce, easy to loop.

**When to use it**
Support, triage, or mixed-domain tasks where the right owner emerges gradually.

**When not to use it**
When a simple classifier can choose the right path up front.

**Simple Claude Code version**
Approximate with routing rules and explicit "next owner" outputs.

**Simple Claude Cowork version**
Use staged threads and human-directed transfer, not implicit autonomous routing.

**Simple Codex version**
Use separate threads or agents where the current worker nominates the next one.

**Complexity level**
Medium.

**Beginner verdict**
Worth understanding, not a first implementation target.

### 8. Planner-Executor

**What it is**
One step plans the work and another step executes it.

**How it works**
The planner decomposes the task, then an executor follows the plan.

**Strengths**
Improves clarity and reduces random thrashing.

**Weaknesses**
Plans can be too abstract or stale.

**When to use it**
Medium-complexity tasks with multiple steps but stable objectives.

**When not to use it**
Tiny tasks or highly emergent work where the plan changes every minute.

**Simple Claude Code version**
Write a plan in repo docs first, then execute against it.

**Simple Claude Cowork version**
Create a structured plan document before doing the task in the desktop workspace.

**Simple Codex version**
Have Codex propose a task list, then work through it with checkpoints.

**Complexity level**
Medium.

**Beginner verdict**
Very practical once one-shot prompting becomes messy.

### 9. Planner-Ledger

**What it is**
A planner maintains a durable task ledger while specialists complete pieces of the work.

**How it works**
The manager updates goals, task status, and next steps as execution unfolds.

**Strengths**
Strong long-running memory, better resumability, clearer project state.

**Weaknesses**
Extra overhead; bad ledgers create false confidence.

**When to use it**
Multi-session projects, research programs, evolving implementation tasks.

**When not to use it**
Short tasks with no need for durable state.

**Simple Claude Code version**
Store the ledger in Markdown files inside the repo and let the lead agent update them.

**Simple Claude Cowork version**
Keep a living task memo or action log outside the chat history.

**Simple Codex version**
Maintain a project brief or progress log that threads update explicitly.

**Complexity level**
Medium-high.

**Beginner verdict**
One of the best advanced-but-practical patterns.

### 10. Manager-Worker

**What it is**
A manager owns scope, workers own bounded tasks.

**How it works**
The manager decomposes work into assignments with clear deliverables.

**Strengths**
Good scaling pattern, clear accountability, good for parallel work.

**Weaknesses**
Manager quality becomes critical.

**When to use it**
Projects with many independent subtasks.

**When not to use it**
Tasks too small to justify decomposition.

**Simple Claude Code version**
A lead session delegates bounded work to project subagents.

**Simple Claude Cowork version**
Manual assignment of task packets to separate focused threads.

**Simple Codex version**
Separate threads or cloud tasks per bounded change, with one lead summary thread.

**Complexity level**
Medium-high.

**Beginner verdict**
Great once you can define task boundaries clearly.

### 11. Map-Reduce

**What it is**
Many branches analyze slices of input, then one reducer combines them.

**How it works**
Map over chunks, reduce into one result.

**Strengths**
Efficient for large corpora, reviews, and comparison tasks.

**Weaknesses**
Reducers can miss nuance between chunks.

**When to use it**
Large documents, many tickets, many files, multi-source research.

**When not to use it**
Tasks where each part needs the full global context.

**Simple Claude Code version**
Assign files or sections to separate analyses, then synthesize.

**Simple Claude Cowork version**
Split a research pack into chunks and then merge the conclusions.

**Simple Codex version**
Chunk a large codebase or issue set into independent review batches.

**Complexity level**
Medium-high.

**Beginner verdict**
Useful once you are dealing with more material than one prompt should hold.

### 12. Tree-of-Thought / Branching Exploration

**What it is**
The system explores multiple reasoning branches before selecting one.

**How it works**
Generate alternatives, score them, continue promising branches, prune weak ones.

**Strengths**
Better search over possible solutions.

**Weaknesses**
Token-expensive and easy to overengineer.

**When to use it**
Ambiguous design problems, strategy options, difficult search spaces.

**When not to use it**
Routine tasks where a direct answer is good enough.

**Simple Claude Code version**
Ask for 3 to 5 candidate plans, compare, then choose one before editing files.

**Simple Claude Cowork version**
Generate multiple outlines or decisions and compare them manually.

**Simple Codex version**
Ask for alternative implementation approaches, then select before coding.

**Complexity level**
High.

**Beginner verdict**
Helpful as a thinking aid, not as a default system pattern.

### 13. Debate / Council / Group Chat

**What it is**
Multiple agents discuss the same problem in a shared thread.

**How it works**
A manager or turn-taking rule controls which agent speaks next.

**Strengths**
Good for idea stress-testing, validation, and perspective clashes.

**Weaknesses**
Conversation sprawl, loops, and high coordination cost.

**When to use it**
Brainstorming, adversarial review, judgment under uncertainty.

**When not to use it**
Tasks that need clean execution more than discussion.

**Simple Claude Code version**
Approximate with multiple reviewer roles and a final synthesis pass.

**Simple Claude Cowork version**
Separate perspective prompts plus a human-managed synthesis thread.

**Simple Codex version**
Multiple threads reviewing the same plan from different roles.

**Complexity level**
High.

**Beginner verdict**
Educational and sometimes powerful, but easy to romanticize.

### 14. Consensus / Voting

**What it is**
Independent agents score or classify options, then a decision rule aggregates the results.

**How it works**
Majority vote, weighted score, or final tie-breaker.

**Strengths**
Useful for selection and evaluation tasks.

**Weaknesses**
Weak when the underlying votes are low quality or highly correlated.

**When to use it**
Ranking options, binary judgments, candidate selection.

**When not to use it**
Tasks where a nuanced narrative is more important than a final score.

**Simple Claude Code version**
Collect multiple narrow judgments and aggregate with a rubric.

**Simple Claude Cowork version**
Run several scoring passes against the same template.

**Simple Codex version**
Multiple review threads score risk or code quality, then aggregate.

**Complexity level**
High.

**Beginner verdict**
More useful for evaluation than for creation.

### 15. Reflection / Self-Critique

**What it is**
The same agent or a paired critic reviews the reasoning or output and improves it.

**How it works**
Produce -> critique -> revise, often without spawning a large team.

**Strengths**
Quality gains with low overhead.

**Weaknesses**
Can become repetitive or self-confirming.

**When to use it**
Any medium-stakes task where one extra pass is worth it.

**When not to use it**
Low-value tasks where latency matters more than quality.

**Simple Claude Code version**
Ask for an initial result, then a critique, then a revised result.

**Simple Claude Cowork version**
Use a second pass prompt focused only on weaknesses and omissions.

**Simple Codex version**
Generate a fix, inspect risks, then revise before finalizing.

**Complexity level**
Medium.

**Beginner verdict**
One of the easiest upgrades to basic prompting.

### 16. Retrieval-Centered Agents

**What it is**
The architecture depends on pulling the right information into context at the right time.

**How it works**
Retrieve relevant files, docs, or records before reasoning.

**Strengths**
Grounded answers, lower hallucination risk, better recall.

**Weaknesses**
Bad retrieval means bad reasoning.

**When to use it**
Repos, wikis, documentation, support knowledge, research packs.

**When not to use it**
Tasks based mainly on current conversation intent and not external data.

**Simple Claude Code version**
Use repo search, docs, or MCP resources before planning or editing.

**Simple Claude Cowork version**
Gather files and connector results before asking for synthesis.

**Simple Codex version**
Read the codebase, specs, and issue context before coding.

**Complexity level**
Medium.

**Beginner verdict**
This is not exotic. It is core practice.

### 17. Event-Driven Agents

**What it is**
Agent work begins when an event occurs, not when a person starts a chat.

**How it works**
A file change, schedule, webhook, or ticket update triggers an agent workflow.

**Strengths**
Good for automation and recurring tasks.

**Weaknesses**
Harder to observe, test, and govern.

**When to use it**
Inbox triage, periodic reports, notifications, maintenance tasks.

**When not to use it**
When you still do not understand the manual version of the workflow.

**Simple Claude Code version**
Use hooks or scheduled routines only after the manual process is clear.

**Simple Claude Cowork version**
Use recurring desktop tasks cautiously where product support exists.

**Simple Codex version**
Use automations or recurring coding tasks with explicit scope and review.

**Complexity level**
High.

**Beginner verdict**
Automate only after you trust the manual flow.

### 18. Long-Running Background Agents

**What it is**
Tasks continue across time, interrupts, or changing state.

**How it works**
State is stored externally and the workflow can resume later.

**Strengths**
Handles big work and asynchronous environments.

**Weaknesses**
Operational complexity rises sharply.

**When to use it**
Multi-day research, large implementation tasks, scheduled follow-up work.

**When not to use it**
Simple ad hoc work.

**Simple Claude Code version**
Use durable state files and explicit checkpoints, not implicit memory.

**Simple Claude Cowork version**
Use recurring tasks and saved artifacts where the product supports it.

**Simple Codex version**
Use long-running threads, cloud tasks, or automations with durable notes.

**Complexity level**
High.

**Beginner verdict**
Learn the ingredients before using the full pattern.

### 19. Graph / State-Machine Workflow

**What it is**
A workflow is modeled as nodes and controlled transitions instead of loose conversation.

**How it works**
Each state has allowed next states, guards, and failure paths.

**Strengths**
Reproducible, auditable, and strong for bounded processes.

**Weaknesses**
More design work up front.

**When to use it**
Sensitive processes, approval-heavy flows, deterministic business logic.

**When not to use it**
Open-ended exploratory work.

**Simple Claude Code version**
Represent states in Markdown and follow explicit transition rules.

**Simple Claude Cowork version**
Approximate with a checklist and human-controlled gates.

**Simple Codex version**
Use explicit step states in a task file or external orchestrator.

**Complexity level**
High.

**Beginner verdict**
Powerful, but usually beyond first practical use.

### 20. Hierarchical Teams

**What it is**
A chain of leaders and specialists organizes the work.

**How it works**
Upper layers decompose goals; lower layers execute bounded tasks.

**Strengths**
Scales better than flat peer groups.

**Weaknesses**
Slow, managerial, and sensitive to miscommunication between layers.

**When to use it**
Large projects with many distinct workstreams.

**When not to use it**
Small tasks or teams with only one or two meaningful roles.

**Simple Claude Code version**
Lead agent -> specialist subagents -> review agent.

**Simple Claude Cowork version**
Manual hierarchy across separate focused threads and deliverables.

**Simple Codex version**
Lead thread coordinating bounded worker threads.

**Complexity level**
High.

**Beginner verdict**
Useful for scale, but not a first pattern.

### 21. Swarm / Hive

**What it is**
A looser peer network where agents collaborate with less rigid central control.

**How it works**
Agents share context or messages and gradually converge, compete, or self-organize.

**Strengths**
Exploration, diversity, and emergent behavior.

**Weaknesses**
Hard to control, hard to debug, easy to overspend.

**When to use it**
Research experiments, idea generation, adversarial exploration.

**When not to use it**
Most beginner projects and most routine production tasks.

**Simple Claude Code version**
Experimental and best approximated through small multi-session teams, not default usage.

**Simple Claude Cowork version**
Usually emulate with multiple managed threads rather than true swarm behavior.

**Simple Codex version**
Parallel agents can approximate parts of it, but governance matters more than cleverness.

**Complexity level**
Very high.

**Beginner verdict**
Interesting to study, rarely the right first build.

### 22. Multi-Session Orchestration

**What it is**
Separate sessions or agents work with isolated context windows.

**How it works**
Each session gets only the information it needs, then returns a compact result.

**Strengths**
Context isolation, better specialization, less cross-contamination.

**Weaknesses**
More coordination, more token use, more artifact management.

**When to use it**
Parallel work, large context, strong role boundaries.

**When not to use it**
When one shared session is already manageable.

**Simple Claude Code version**
Use subagents or separate sessions with explicit handoff summaries.

**Simple Claude Cowork version**
Use multiple task threads and deliberate artifact-based handoffs.

**Simple Codex version**
Use multiple threads or cloud tasks against a shared repo.

**Complexity level**
High.

**Beginner verdict**
Very useful later; expensive if used too early.

### 23. Tool-Specialist Agents

**What it is**
Each agent is designed around a narrow tool domain rather than a broad subject area.

**How it works**
Examples: browser agent, reviewer agent, shell agent, research agent.

**Strengths**
Clear safety boundaries and sharper prompts.

**Weaknesses**
Can fragment the workflow too much.

**When to use it**
When tool access differs by role or risk profile.

**When not to use it**
If one agent can already use the tools safely and clearly.

**Simple Claude Code version**
Subagents with restricted tool sets.

**Simple Claude Cowork version**
Separate tasks organized by connector, file set, or research step.

**Simple Codex version**
Agent roles scoped by coding, review, docs, or execution tasks.

**Complexity level**
Medium.

**Beginner verdict**
Very practical once you care about permissions and clarity.

### 24. Role-Based Project Agents

**What it is**
Named specialist roles live with the project and remain stable over time.

**How it works**
The project defines roles like `planner`, `reviewer`, `researcher`, or `architect`.

**Strengths**
Reusable, teachable, easy to version with the repo.

**Weaknesses**
Bad role design creates rigid, vague, or redundant agents.

**When to use it**
Repos with recurring workflows and clear responsibilities.

**When not to use it**
One-off tasks or projects that change shape constantly.

**Simple Claude Code version**
Project subagents in `.claude/agents/`.

**Simple Claude Cowork version**
Saved task templates and repeatable role prompts.

**Simple Codex version**
`AGENTS.md`, custom agent instructions, and reusable thread roles.

**Complexity level**
Medium.

**Beginner verdict**
One of the most useful project-level patterns to learn.

## Operational Concerns

### Shared state

- Keep one visible source of truth.
- Do not rely on chat history alone.
- If several agents touch the same work, record ownership.

### File ownership

- Avoid concurrent edits to the same file.
- Prefer separate output files plus synthesis.
- Merge deliberately.

### Context-window pressure

- Summarize aggressively between stages.
- Pass only what the next step needs.
- Keep long logs out of the main prompt unless they matter.

### Cost and latency

- Parallelism increases speed but usually raises cost.
- Extra agent boundaries multiply tokens and coordination overhead.
- Review loops are often worth the cost; swarms often are not.

### Determinism vs creativity

- Pipelines and graphs favor consistency.
- debate, branching, and swarm favor exploration.
- Match the architecture to the goal.

### Failure modes

- routing mistakes
- stale plans
- endless loops
- contradictory outputs
- hidden state drift
- tool misuse

### Observability

- Save plans, outputs, and decisions.
- Make handoffs explicit.
- Prefer artifacts over memory whenever the task matters.

### Safety

- Add approval gates before risky actions.
- Restrict tool access by role when possible.
- Validate before executing downstream steps.

### Rollback and reproducibility

- Keep prompts, templates, and task briefs in version control.
- Save intermediate outputs for important workflows.
- Be able to explain how the system reached the result.

## Practical Verdicts

### Best patterns for beginners

- Direct model call
- Single agent with tools
- Sequential pipeline
- Reviewer loop
- Router / supervisor
- Role-based project agents

### Best patterns for real work after the basics

- Planner-executor
- Planner-ledger
- Parallel fan-out
- Retrieval-centered agents
- Tool-specialist agents

### Patterns to study early but implement carefully

- Handoff
- Manager-worker
- Map-reduce
- Multi-session orchestration

### Patterns that are often more educational than necessary

- Swarm / hive
- large debate systems
- complex voting systems
- tree-of-thought as a default workflow

## Notes On Implementation Translation

These mappings are intentionally conservative:

- Claude Code has strong public support for project-local subagents, MCP, and repo-centered workflows.
- Claude Cowork is positioned publicly around desktop and knowledge-work execution, so this repo treats it as a desktop agent rather than as a clone of Claude Code.
- Codex is treated here as a coding agent with strong thread, repo, and execution workflows, not as a generic desktop assistant.

## Reference Baseline

- [Anthropic Claude Code subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [Anthropic MCP docs](https://docs.anthropic.com/en/docs/mcp)
- [Anthropic desktop connectors guidance](https://support.anthropic.com/es/articles/11725091-cuando-usar-conectores-de-escritorio-y-web)
- [Anthropic Labs announcement mentioning Cowork](https://www.anthropic.com/news/introducing-anthropic-labs?mode=reply)
- [Anthropic Cowork webinar](https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork)
- [OpenAI Introducing Codex](https://openai.com/index/introducing-codex/)
- [OpenAI Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)
- [OpenAI Codex docs](https://platform.openai.com/docs/codex)
- [Azure AI agent orchestration patterns](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns)

