# Architecture Documentation

This project follows a scalable modular architecture inspired by Feature-Sliced Design (FSD), adapted for Astro.

## Directory Structure

```bash
src/
├── assets/         # Static assets managed by Vite (images, fonts, etc.)
├── features/       # Feature-specific logic (Domain Driven)
│   ├── blog/       # Blog feature
│   │   ├── components/
│   │   ├── layouts/
│   │   └── utils/
│   ├── portfolio/  # Portfolio feature
│   │   ├── components/
│   │   └── layouts/
│   └── about/      # About Me feature
├── shared/         # Shared code used across multiple features
│   ├── components/ # Generic UI components (Buttons, Cards, Inputs)
│   │   ├── ui/     # Primitive UI atoms
│   │   └── layout/ # Global layout components (Header, Footer)
│   ├── utils/      # Shared helper functions
│   └── styles/     # Global styles
├── pages/          # Astro File-based Routing (Delegates to features)
├── layouts/        # Global Layout Wrappers (App Shell)
└── content/        # Astro Content Collections (Data Layer)
```

## Key Principles

1.  **Separation of Concerns**: Features are isolated. Changes in the Blog feature shouldn't break the Portfolio.
2.  **Shared Foundation**: Common UI elements and utilities live in `shared`, ensuring consistency.
3.  **Clear Imports**: Use of path aliases (configured in `tsconfig.json`) for cleaner imports (e.g., `@shared/ui/Button.astro`).

## Path Aliases

- `@/*`: `src/*` (Legacy/Root)
- `@features/*`: `src/features/*`
- `@shared/*`: `src/shared/*`
- `@assets/*`: `src/assets/*`
