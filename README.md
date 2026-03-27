# Agents Learning Lab

Agents Learning Lab is a beginner-first repository for learning how to work with modern agent tools in a practical way.

The project is organized around three tracks:

- `Codex/`: OpenAI Codex as a coding agent.
- `Claude_Code/`: Claude Code as a project-local coding and orchestration tool.
- `Claude_Cowork/`: Claude Cowork as a desktop and knowledge-work agent.

The goal is not to prove that all three tools are identical. The goal is to help you learn where each one shines, where it does not, and how to use agent patterns without getting lost in hype.

## Verified Baseline

This repo is written against public product information available on March 27, 2026.

Because these products change quickly, especially around orchestration, desktop features, and coding workflows, capability pages in this repo are written conservatively and linked back to official sources.

## How To Use This Repo

1. Read [LEARNING_PATH.md](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/LEARNING_PATH.md).
2. Skim [GLOSSARY.md](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/GLOSSARY.md) so the vocabulary is familiar.
3. Read [AGENT_ARCHITECTURES.md](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/AGENT_ARCHITECTURES.md) once for the big picture.
4. Use [DECISION_MATRIX.md](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/DECISION_MATRIX.md) whenever you are unsure which pattern or tool to choose.
5. Pick one tool track and complete its projects in order.
6. Come back later and compare the same project number across tools.

## Repo Map

- [Codex](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/Codex): setup, capabilities, limits, templates, and four guided projects.
- [Claude_Code](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/Claude_Code): setup, subagent-oriented workflows, templates, and four guided projects.
- [Claude_Cowork](/Users/jean/Documents/Halfway/Coding/Github Projects/Agents_Lab/Claude_Cowork): setup, desktop knowledge-work workflows, templates, and four guided projects.

## Design Principles

- Start with the lowest-complexity workflow that works.
- Keep a single source of truth for important decisions and task state.
- Treat multi-agent systems as context-management systems first.
- Prefer short reusable prompts, small artifacts, and explicit success criteria.
- Separate learning the tool from learning advanced orchestration.

## What This Repo Contains

- Practical explanations written for a beginner who still wants serious answers.
- A broad architecture survey you can revisit later.
- Small starter assets so you can practice with real prompts and files.
- Templates for project instructions, routing, review loops, and agent roles.

## What This Repo Does Not Try To Be

- A production framework.
- A benchmark proving one vendor is universally better.
- A replacement for official docs.
- A complete survey of every research paper in autonomous agents.

## Official Sources Used As Baseline

- Anthropic:
  - [Claude Code subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
  - [MCP docs](https://docs.anthropic.com/en/docs/mcp)
  - [Claude Desktop help](https://support.anthropic.com/en/articles/10065433-installing-claude-desktop)
  - [Desktop connectors guidance](https://support.anthropic.com/es/articles/11725091-cuando-usar-conectores-de-escritorio-y-web)
  - [Introducing Anthropic Labs](https://www.anthropic.com/news/introducing-anthropic-labs?mode=reply)
  - [Introducing Cowork webinar](https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork)
- OpenAI:
  - [Introducing Codex](https://openai.com/index/introducing-codex/)
  - [Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)
  - [Codex docs](https://platform.openai.com/docs/codex)
  - [Code generation guide](https://platform.openai.com/docs/guides/code-generation)
  - [Docs MCP](https://platform.openai.com/docs/docs-mcp)

