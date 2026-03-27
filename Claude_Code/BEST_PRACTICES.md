# Claude Code Best Practices

## 1. Keep `CLAUDE.md` useful

Good `CLAUDE.md` content:

- project purpose
- important commands
- style conventions
- risky areas
- workflow rules

Bad `CLAUDE.md` content:

- long essays
- stale status updates
- duplicated documentation

## 2. Give subagents narrow jobs

Good examples:

- `reviewer`
- `researcher`
- `test-runner`
- `planner`

Bad examples:

- `do-everything-agent`
- five nearly identical writer roles

## 3. Make outputs explicit

For each specialist, define:

- what to read
- what to return
- whether it edits files
- when it should stop

## 4. Use review loops more than you use fancy routing

Most beginners get more value from:

- draft -> review -> revise

than from:

- manager -> specialist A -> specialist B -> handoff -> swarm

## 5. Store real state outside the conversation

Use:

- `CLAUDE.md`
- task briefs
- decision logs
- project state notes

That is more durable than chat memory alone.

## 6. Avoid concurrent edits to the same file

Parallel analysis is good.

Parallel uncontrolled editing is not.

## 7. Let humans own risky decisions

Use human approval for:

- destructive changes
- ambiguous goals
- broad refactors
- workflow escalation

