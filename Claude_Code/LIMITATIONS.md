# Claude Code Limitations

## What It Is Not

Claude Code is not best understood as a broad desktop coworker for every non-technical task.

It is strongest when:

- a repo exists
- files matter
- commands matter
- project-local instructions matter

## Practical Limits

### More subagents do not automatically mean better work

Every extra role adds:

- more routing choices
- more context boundaries
- more coordination cost

### A bad `CLAUDE.md` can make everything worse

If project memory is:

- vague
- outdated
- too long
- contradictory

then the whole workflow degrades.

### Public docs are stronger on Claude Code than on Cowork for low-level orchestration

That is why this repo uses Claude Code, not Cowork, for the more explicit project-agent lessons.

### You still need ownership and review

Subagents do not remove the need for:

- file ownership
- review loops
- clear success criteria

## Smallest Useful Warning

Do not build project subagents until you can explain:

- what each role owns
- what each role should never do
- what output each role should return

## References

- [Subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents)
- [Manage Claude's memory](https://docs.anthropic.com/en/docs/claude-code/memory)
- [Slash commands](https://docs.anthropic.com/en/docs/claude-code/slash-commands)

