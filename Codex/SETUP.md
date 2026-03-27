# Codex Setup

## What You Need

- A supported ChatGPT plan with Codex access.
- A local repository if you want to use the CLI or app against real code.
- Optional: an OpenAI API key if you later move from interactive use into SDK-level orchestration.

## Main Ways To Use Codex

### Codex app

Use the app when you want:

- multiple agent threads
- worktrees
- background work
- project-level visibility

According to OpenAI's February 2, 2026 Codex app announcement, the app is designed to manage multiple agents, run work in parallel, and support long-running tasks.

### Codex CLI

Use the CLI when you want:

- terminal-native coding work
- local file access
- execution in your current project
- quick one-off tasks

Install the CLI:

```bash
npm i -g @openai/codex
```

### Codex cloud

Use Codex cloud when you want:

- isolated background tasks
- repo-connected tasks that keep running
- reviewable cloud outputs and PR-oriented work

## Recommended First Configuration

1. Install Codex CLI.
2. Open a small repo you understand.
3. Start with a read-only question like "Explain the request flow in this project."
4. Then try a bounded edit with explicit success criteria.

## Useful Optional Setup

### Add the OpenAI docs MCP server

This gives Codex read-only access to official OpenAI developer docs from your editor.

```bash
codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp
codex mcp list
```

## Setup Advice For This Learning Repo

- Start with the first three projects in one thread each.
- Use separate threads or worktrees for parallel tasks.
- Keep each practice project small enough to finish in one sitting.

## References

- [Codex product page](https://openai.com/codex)
- [Codex docs overview](https://platform.openai.com/docs/codex/overview)
- [Docs MCP](https://platform.openai.com/docs/docs-mcp)

