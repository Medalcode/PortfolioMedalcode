# Contributing to PortfolioMedalcode

Thank you for your interest in contributing to PortfolioMedalcode! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 🤝 Code of Conduct

This project follows a Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and constructive in your interactions.

## 🚀 Getting Started

1. **Fork the repository**

   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/PortfolioMedalcode.git
   cd PortfolioMedalcode
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

### Running the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality Checks

Before submitting a PR, make sure to run:

```bash
# Type checking
npm run check

# Linting
npm run lint

# Format code
npm run format

# Run all checks
npm run check && npm run lint && npm run format:check
```

## 📝 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow ESLint rules (see `eslint.config.js`)
- Use meaningful variable and function names
- Add comments for complex logic

### Astro Components

- Keep components small and focused
- Use props for reusability
- Follow the existing component structure
- Use TypeScript for component props

### Styling

- Use TailwindCSS utility classes
- Follow the existing color scheme (mint/riptide)
- Ensure responsive design (mobile-first)
- Test in both light and dark modes

### File Organization

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── content/        # Markdown content
├── styles/         # Global styles
└── utils/          # Utility functions
```

## 📌 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(blog): add pagination to blog posts
fix(nav): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(components): format code with prettier
```

## 🔄 Pull Request Process

1. **Update your fork**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run quality checks**

   ```bash
   npm run check
   npm run lint
   npm run format
   ```

3. **Push your changes**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template

5. **PR Requirements**
   - Clear description of changes
   - Screenshots for UI changes
   - All checks must pass
   - At least one approval from maintainers

## 🐛 Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

## 💡 Suggesting Features

We welcome feature suggestions! Please:

- Check if the feature already exists
- Provide a clear use case
- Explain why it would be valuable
- Consider implementation complexity

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Preact Documentation](https://preactjs.com)

## ❓ Questions?

If you have questions, feel free to:

- Open a [GitHub Discussion](https://github.com/Medalcode/PortfolioMedalcode/discussions)
- Create an [Issue](https://github.com/Medalcode/PortfolioMedalcode/issues)

---

Thank you for contributing! 🙏
