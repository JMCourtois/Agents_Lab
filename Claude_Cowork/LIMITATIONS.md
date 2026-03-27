# Claude Cowork Limitations

## What It Is Not

This repo does not use Cowork as a substitute for:

- Claude Code's repo-local subagents
- Codex's coding-first execution workflows
- a fully documented SDK-style multi-agent platform

## Practical Limits

### Public docs are lighter on low-level orchestration details

That means you should be careful about assuming Cowork exposes the same primitives as Claude Code.

### Not ideal for codebase-first learning

If your main artifact is code, tests, diffs, and branches, another track in this repo will teach that more directly.

### Easy to blur research and execution

Desktop agent work can feel productive even when the output is still too vague.

That is why this track uses:

- briefs
- output templates
- validation checklists

### More context is not always better

Giving Cowork too many files without structure often makes the result less clear, not more powerful.

## Smallest Useful Warning

Do not assume a desktop agent should solve everything in one run.

For better results:

- extract first
- synthesize second
- validate third

## References

- [Introducing Anthropic Labs](https://www.anthropic.com/news/introducing-anthropic-labs?mode=reply)
- [Future of AI at Work: Introducing Cowork](https://www.anthropic.com/webinars/future-of-ai-at-work-introducing-cowork)

