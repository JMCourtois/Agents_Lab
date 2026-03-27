# Codex Limitations

## What It Is Not

Codex is not best understood as a generic desktop coworker for all knowledge work.

This repo treats Codex as code-centered first.

## Practical Limits

### Coding-first bias

Codex is strongest when the artifact is:

- source code
- tests
- docs tied closely to code
- diffs, branches, and pull requests

If your task is mostly document synthesis, inbox handling, or broad desktop workflows, another tool may feel more natural.

### Parallelism adds overhead

Multiple agents, worktrees, or cloud tasks can help a lot, but they also create:

- more coordination work
- more review work
- more chance of duplicated effort

### Internet access needs care

OpenAI's cloud docs note that internet access is configurable and off by default for Codex cloud tasks after setup, because it raises security and prompt-injection risk.

### Not all orchestration needs Codex-native features

Some advanced orchestration ideas are better treated as workflow design patterns than as product primitives.

If you cannot explain the workflow in plain language first, adding more Codex structure will not save it.

## Smallest Useful Warning

Do not assume that "more agents" means "better result."

Usually the win comes from:

- better task boundaries
- clearer success criteria
- better review

## References

- [Agent internet access](https://platform.openai.com/docs/codex/agent-network)
- [Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)
- [Codex cloud overview](https://platform.openai.com/docs/codex/overview)

