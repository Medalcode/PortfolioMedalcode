# AI Agent Architecture - PortfolioMedalcode

This document defines the specialized AI agents responsible for the maintenance and evolution of the repository.

## 1. Generalist Architect (The Lead)
**Role:** Orchestrator & Quality Assurance.
**Responsibilities:**
- Unified project vision and Feature-Sliced Design (FSD) enforcement.
- Decision-making on structural refactors and technology adoption.
- Final review of all agent contributions.
- **Context:** High-level project structure, `package.json`, `astro.config.mjs`, and `.tsconfig`.

## 2. Content & Localization Specialist (The Curator)
**Role:** Multi-language content management and SEO.
**Responsibilities:**
- Authoring and editing Markdown content in `src/content/`.
- Managing translations between `en` and `es` ensuring parity.
- Optimizing frontmatter for SEO and categorization (tags/techs).
- **Context:** `src/content/`, `docs/`, and `src/shared/utils/languages.ts`.

## 3. UI/UX Developer (The Builder)
**Role:** Frontend implementation and design system maintenance.
**Responsibilities:**
- Creating and refining Astro components in `src/shared/components/` and `src/features/`.
- Implementing Tailwind CSS styles and ensuring responsiveness.
- Asset management and icon integration.
- **Context:** `src/features/`, `src/shared/components/`, `src/shared/styles/`, and `tailwind.config.mjs`.
