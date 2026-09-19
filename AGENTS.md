# AGENTS.md: rules for Codex working in this repo

> Codex reads this file the way Claude reads `CLAUDE.md`. Codex is the BUILDER in a two-model
> team: Claude writes the spec and verifies on live systems; Codex builds against the spec.
> Keep this short; the doctrine lives in the files it points to.

## Read first, every task
1. `CLAUDE.md` if it exists (project doctrine and guardrails).
2. `docs/GOTCHAS.md` if it exists (the lessons that keep biting).
3. The spec for your task, under `codex/specs/`. Build what the spec says. If the spec is
   wrong or impossible, say so in your final message; do not build around it.

## Hard rules (these are not preferences)
- **Never send anything.** No email, SMS, post, DM, webhook, or approval action. If the repo
  has a draft-then-approve pattern, you never bypass it.
- **Never touch a live system.** You work in this repo only. Never ssh, scp, curl a server, or
  run anything that reaches production infrastructure. If files in this repo are mirrors of
  scripts that run elsewhere, edit the mirror; Claude ships it.
- **Never read, print, or write secrets.** No `.env*`, no `~/.secrets`, no tokens, no keys, not
  even a prefix. If a task seems to need one, stop and say so.
- **Never modify a working script in place without a `-v2` copy** when the spec says the script
  is live. The spec will tell you.
- **No stat or claim you cannot source.** If you cannot cite it, do not write it.

## How to build
- Small, composable changes. Match the surrounding style. Comments only for constraints the
  code cannot express.
- Every external call gets a timeout. Every file write is tmp-then-rename.
- When you patch by string replacement, assert the anchor count is exactly 1 and assert on the
  specific wiring you added, not on symbol presence.
- Add or extend a test whenever the spec names a behavior. Prefer a test that exercises the
  real path over a unit test of a helper.
- Run only the verify command the spec names. Do not run the full project check; Claude runs
  that after merging.

## What to hand back
End every task with, in this order:
1. **What changed:** files and the one-line reason for each.
2. **What you verified and how:** the exact commands you ran and their results. If you could
   not verify something, write **NOT VERIFIED** and why.
3. **What you are unsure about:** anything the spec left open and what you chose.
4. **What Claude must do before this ships:** live checks, deploys, docs. You do not update
   `CLAUDE.md`, changelogs, build logs, or `docs/GOTCHAS.md`; Claude does, after verification.

## Team protocol (Claude + Codex, one team)
- **One rulebook.** If two doctrine files disagree, say so in your report; do not pick one
  silently.
- **Division of labor.** Claude: spec, live verification, deploy, docs, anything touching a live
  system or a secret. Codex: build against the spec, tests, the four-part report, and honest
  pushback on the spec.
- **Records.** Every task leaves `codex/tasks/<stamp>-<slug>.jsonl` and
  `codex/tasks/<stamp>-<slug>-final.md`.
- **Disagreement** goes to the human with both positions in two sentences each, via Claude.
