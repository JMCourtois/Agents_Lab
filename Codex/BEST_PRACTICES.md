# Codex Best Practices

## 1. Give Codex a bounded spec

Bad:

```text
Improve this project.
```

Better:

```text
Audit the checkout flow, fix the failing shipping edge case, run the checkout tests, and summarize what changed.
```

## 2. Separate creation from validation

Use one pass to produce work and another pass to check:

- correctness
- tests
- risks
- missing edge cases

## 3. Use the smallest safe surface

- one repo
- one thread
- one branch or worktree
- one clear output

Expand only when needed.

## 4. Prefer artifacts over memory

Save:

- a short spec
- acceptance criteria
- review notes
- implementation summary

This makes parallel work safer.

## 5. Use parallelism intentionally

Good uses:

- compare two implementations
- run independent reviews
- split independent tasks

Bad uses:

- multiple agents editing the same file
- vague "go explore everything" delegation

## 6. Restrict internet access unless required

If you enable cloud internet access, keep the allowed surface narrow and review outputs carefully.

## 7. Always ask for remaining risk

A strong finishing prompt is:

```text
What still worries you about this change?
```

That question often catches more than a larger prompt would.

