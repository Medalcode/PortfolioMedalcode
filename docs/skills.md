# AI Skills Registry - PortfolioMedalcode

This document defines the parametric "Super-Skills" available for agents to perform complex tasks.

## 1. Content Manager Super-Skill
**Description:** A parametric skill to handle any Markdown-based content operation.
**Params:**
- `action`: `create` | `update` | `fix` | `translate`
- `type`: `blog` | `project` | `about`
- `lang`: `es` | `en`
- `target`: File slug or directory path.
**Logic:** Replaces decentralized scripts like `fix-frontmatter.sh` and `add-languages-field.sh`.

## 2. UI Component Generator
**Description:** Standardized creation of Astro/Preact components.
**Params:**
- `name`: Component name (PascalCase).
- `feature`: `shared` | `blog` | `portfolio` | `about`
- `variant`: `ui` (primitive) | `layout` (structural)
**Logic:** Enforces the use of `src/shared/components/ui/` for atoms and `src/features/` for domain logic.

## 3. Asset & Repo Janitor
**Description:** Cleanup and validation of the repository state.
**Params:**
- `target`: `icons` | `images` | `scripts` | `links`
- `dry_run`: `true` | `false`
**Logic:** Integrates functionality from `verify-links.mjs` and duplicate detection logic. Replaces ad-hoc cleanup commands.
