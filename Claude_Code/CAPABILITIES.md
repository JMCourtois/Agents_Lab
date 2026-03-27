# Claude Code Capabilities

## What It Is Good At

### Repo-native work

Claude Code is built for terminal-native development work:

- reading code
- editing files
- running commands
- explaining the codebase
- fixing bugs
- implementing changes

### Project memory

Anthropic documents `CLAUDE.md` memory files at multiple levels.

That makes Claude Code especially good for:

- repo-specific instructions
- shared team context
- reusable workflow rules
- consistent project behavior across sessions

### Subagents

Anthropic publicly documents specialized subagents with:

- their own system prompts
- tool access
- separate context windows
- project or user scope

This is the strongest public feature match in the repo for learning project-local agent roles.

### MCP

Claude Code can use MCP to access external tools and data sources, which is useful when you want repo work informed by:

- documentation
- tickets
- design files
- external knowledge systems

## Smallest Useful Example

A very small but powerful setup is:

- one `CLAUDE.md`
- one `reviewer` subagent
- one `researcher` subagent
- one simple review loop

That already teaches most of the important lessons.

## Why This Matters

Claude Code is where "agent architecture in a repo" feels most concrete for a beginner because the artifacts are visible:

- `CLAUDE.md`
- `.claude/agents/`
- settings
- slash commands
- files

## References

- [Claude Code overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- [Manage Claude's memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [MCP docs](https://docs.anthropic.com/en/docs/mcp)

