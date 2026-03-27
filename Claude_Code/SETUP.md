# Claude Code Setup

## What You Need

- Node.js 18 or newer.
- A Claude.ai or Anthropic Console account.
- A local project directory.

## Install

```bash
npm install -g @anthropic-ai/claude-code
```

Then open a project and start Claude Code:

```bash
cd your-project
claude
```

## First Useful Commands

- `/init`: bootstrap a project `CLAUDE.md`
- `/memory`: inspect or edit memory files
- `/agents`: manage custom subagents
- `/mcp`: manage MCP server connections
- `/permissions`: inspect or adjust permissions
- `/config`: inspect settings

## Project Memory

Anthropic documents `./CLAUDE.md` as project memory.

Use it for:

- common commands
- coding conventions
- architectural notes
- workflow rules

Do not turn it into a novel. Keep it operational.

## Project Subagents

Anthropic documents project subagents in `.claude/agents/`.

This is where Claude Code becomes especially useful for learning agent architecture:

- a `planner`
- a `reviewer`
- a `researcher`
- a `test-runner`

all make sense as stable project roles.

## Suggested First Setup For This Repo

1. Install Claude Code.
2. Read the first three root docs in this repo.
3. Start with `01_Single_Agent_Workflow`.
4. Create or inspect a `CLAUDE.md` before you design subagents.

## References

- [Claude Code getting started](https://docs.anthropic.com/en/docs/claude-code/getting-started)
- [Manage Claude's memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)

