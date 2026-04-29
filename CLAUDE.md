# CatchIQ Web Page — Claude Instructions

Static marketing/landing site for catchiq.fishing. Plain HTML, CSS, and SVG — no build step, no framework.

## Source Control

This project is maintained in GitHub at `winsteadben-hue/CatchIQ-Web-Page`. After every change, commit and push to keep the repository current. Do not leave changes uncommitted.

---

## Coding Principles

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No JavaScript where plain HTML/CSS works.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

- Don't "improve" adjacent markup, styles, or comments.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.
- Every changed line should trace directly to the request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

- Transform vague tasks into verifiable goals before starting.
- For multi-step tasks, state a brief plan with a verify step for each.
- Clarifying questions come before implementation, not after mistakes.
