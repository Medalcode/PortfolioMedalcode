# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-02

### Added

- ✨ ESLint configuration with Astro plugin for code quality
- ✨ Prettier configuration for consistent code formatting
- ✨ Comprehensive package.json scripts (lint, format, check, type-check)
- ✨ TailwindCSS explicit configuration file
- ✨ Environment variables example file (.env.example)
- ✨ Contributing guidelines (CONTRIBUTING.md)
- ✨ Changelog file (CHANGELOG.md)
- ✨ Complete package.json metadata (author, keywords, description)
- 🧪 **Vitest configuration** for unit testing with Astro and jsdom support
- 🧪 Initial unit tests for components and utility functions
- 🛡️ **Accessibility (A11y)** linting with `eslint-plugin-jsx-a11y`
- 🛡️ Improved TypeScript configuration (`typescript-eslint`)

### Changed

- 🔧 Updated build script to include type checking before build
- 🔧 Bumped version from 0.0.1 to 1.0.0
- 📝 Enhanced project documentation
- 🛡️ Replaced unsafe `set:html` usage with safer alternatives

### Removed

- 🗑️ Removed console.log statements from production code (NavArticle.astro)

### Fixed

- 🐛 Fixed missing metadata in package.json
- 🐛 Improved code quality and consistency
- ♿ **Fixed Accessibility issues**:
  - Empty links in `Hero.astro`
  - Image links in `BlogPost.astro`
  - Duplicate navigation in `LastPost.astro`
  - Anchor links in `NavArticle.astro`
  - Redundant roles in `Experience.astro` and `Capsule.astro`
  - Form labels in `ContactForm.astro`
  - Disabled links in `Button.astro`

## [0.0.1] - Initial Release

### Added

- 🎨 Modern portfolio template with Astro
- 🎨 Dark mode support with mint/blue color scheme
- 🎨 Blog functionality with markdown support
- 🎨 Portfolio projects showcase
- 🎨 Responsive design with TailwindCSS
- 🎨 Preact integration for interactive components
- 🎨 RSS feed support
- 🎨 Sitemap generation
- 🎨 Syntax highlighting with PrismJS
- 🎨 Vercel Speed Insights integration
- 🎨 Internationalization (i18n) support
- 🎨 Search functionality with Pagefind

---

## Legend

- ✨ Added
- 🔧 Changed
- 🗑️ Removed
- 🐛 Fixed
- 📝 Documentation
- 🎨 Style/UI
- ⚡ Performance
- 🔒 Security
