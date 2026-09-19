#!/usr/bin/env python3
"""run-task: hand one spec to Codex (non-interactive) and keep the full record.

    python tools/codex/run-task.py <spec-slug> [--model <name>] [--sandbox read-only] [--search]

- prompt = "read AGENTS.md, then codex/specs/<slug>.md, do it, report per AGENTS.md"
- sandbox default workspace-write, no approval flow (it is a sandbox; nothing reaches a
  live system, a secret, or the network)
- every event Codex emits is saved to codex/tasks/<stamp>-<slug>.jsonl
- Codex's final message is saved to codex/tasks/<stamp>-<slug>-final.md and printed
- exit code = Codex's exit code
Claude runs this, reads the diff (`git diff`), verifies, and reports. The human never has
to open Codex."""
import argparse
import os
import shutil
import subprocess
import sys
import time

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("slug")
    ap.add_argument("--model", default=None)
    ap.add_argument("--sandbox", default="workspace-write",
                    choices=["read-only", "workspace-write"])
    ap.add_argument("--timeout", type=int, default=1800)
    # Codex has a provider-side web_search tool. This is NOT shell network access: the
    # workspace-write sandbox still blocks curl/ssh. Opt in for research tasks only; leave
    # it off for build tasks so a build cannot quietly take a dependency on something it
    # read on the internet.
    ap.add_argument("--search", action="store_true",
                    help="enable Codex's web_search tool (research tasks only)")
    a = ap.parse_args()

    spec = os.path.join(REPO, "codex", "specs", f"{a.slug}.md")
    if not os.path.isfile(spec):
        sys.exit(f"no spec at {spec}")
    stamp = time.strftime("%Y%m%d-%H%M%S")
    out_dir = os.path.join(REPO, "codex", "tasks")
    os.makedirs(out_dir, exist_ok=True)
    jsonl = os.path.join(out_dir, f"{stamp}-{a.slug}.jsonl")
    # "-final" so a report Codex itself writes to <stamp>-<slug>.md is never overwritten
    last = os.path.join(out_dir, f"{stamp}-{a.slug}-final.md")

    prompt = (f"Read AGENTS.md first. Then read codex/specs/{a.slug}.md and complete that task. "
              "Work only inside this repository. Finish with the four-part report AGENTS.md asks for.")
    exe = shutil.which("codex") or shutil.which("codex.cmd")  # Windows npm shim is codex.cmd
    if not exe:
        sys.exit("codex CLI not found on PATH")
    # exec is non-interactive by design (no approval prompts); the sandbox is the guard
    cmd = [exe, "exec", "--cd", REPO, "--sandbox", a.sandbox,
           "--json", "--output-last-message", last]
    if a.search:
        cmd += ["-c", "tools.web_search=true"]
    if a.model:
        cmd += ["--model", a.model]
    cmd.append(prompt)

    print(f"[run-task] {a.slug} model={a.model or 'default'} sandbox={a.sandbox}"
          f"{' web_search=on' if a.search else ''}", flush=True)
    with open(jsonl, "w", encoding="utf-8") as log:
        try:
            # stdin must be closed: with a piped (non-tty) stdin, codex exec waits to read it
            # as extra prompt input and never starts. This cost two hung runs before it was found.
            r = subprocess.run(cmd, stdin=subprocess.DEVNULL, stdout=log,
                               stderr=subprocess.STDOUT, timeout=a.timeout, cwd=REPO)
            rc = r.returncode
        except subprocess.TimeoutExpired as e:
            # On Windows the direct child is the codex.cmd shim; killing it leaves the real
            # Codex process still editing the tree. Kill the whole tree by PID.
            pid = getattr(getattr(e, "process", None), "pid", None) or getattr(e, "pid", None)
            if pid and os.name == "nt":
                subprocess.run(["taskkill", "/PID", str(pid), "/T", "/F"], capture_output=True)
            log.write("\n[run-task] TIMEOUT (process tree killed)\n")
            rc = 124
    print(f"[run-task] exit {rc}; events -> {os.path.relpath(jsonl, REPO)}")
    if os.path.isfile(last):
        print(f"[run-task] final message -> {os.path.relpath(last, REPO)}\n")
        text = open(last, encoding="utf-8").read()
        # Windows consoles default to cp1252; never let a report's arrow or dash crash the runner
        sys.stdout.buffer.write(text.encode(sys.stdout.encoding or "utf-8", errors="replace"))
        sys.stdout.buffer.write(b"\n")
    else:
        print("[run-task] no final message written")
    return rc


if __name__ == "__main__":
    sys.exit(main())
