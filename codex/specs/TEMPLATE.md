# Spec: <slug> (<one-line type: bug fix | feature | research>)

<Two to four sentences of context. What the human observed, or what is wanted, in their words.>

## Root cause (if a fix; already diagnosed by Claude, not left for Codex to find)
<What is actually wrong and why. Name the file and the line if known.>

## Own ONLY these files
- `path/to/file.ext` (edit)
- `path/to/new-file.ext` (create)
- `path/to/test.ext` (edit)

## Build
1. <Numbered, concrete step.>
2. <Next step.>
3. Do not touch <the things adjacent to this that must stay as they are>.

## Test
<What test to add or extend, and exactly what it must assert.>

## Verify
`<the exact command Codex should run, scoped to this change>`
Do NOT run the full project check; Claude runs that after merging.

## Constraints
Match surrounding style. Report per `AGENTS.md`: files changed, exact commands run with their
output summaries, anything NOT VERIFIED.
