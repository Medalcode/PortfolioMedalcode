# PortfolioMedalcode

## 🎯 Overview

**PortfolioMedalcode** is a minimalist and modern template designed for developers and digital creatives. Its dark-toned aesthetic with mint green accents offers a clean, elegant, and functional visual experience, ideal for portfolios, dashboards, or tech landing pages.

[![AutoKanban Compatible](https://img.shields.io/badge/AutoKanban-Compatible-blueviolet?style=flat-square&logo=github)](https://auto-kanban.vercel.app/?owner=Medalcode&repo=PortfolioMedalcode)
This repository adheres to the **Meta Project Standard**. All development progress is tracked automatically via the `Bitacora.md` file.

> 📋 **Development Log**: Check out the [Bitacora.md](Bitacora.md) to see the latest updates and roadmap.

## 🚀 Latest Updates

- **Data-Centric Profile**: Content and CV updated to reflect over 22 years of IT trajectory, combining Full Stack development with Data Analysis (Power BI, Python, SQL).
- **Interactive Easter Egg**: Press `Ctrl + \` (or `Cmd + \`) anywhere to open a fully functional hidden Terminal.
- **Next-Gen UI/UX**: Re-engineered with native CSS scroll-driven animations (`animation-timeline: view()`), interactive 3D particle Canvas background, and high-performance Glassmorphism hover states.
- **Performance Optimized**: Images eagerly loaded with `fetchpriority="high"` for instant Largest Contentful Paint (LCP).

## 📁 Project Structure

└── 📁PortfolioMedalcode
    └── 📁src
        ├── 📁features       # Feature modules (Domain logic)
        ├── 📁shared         # Shared resources (Core UI/Utils)
        ├── 📁layouts        # Global App Layouts
        ├── 📁pages          # Astro Routing
        └── 📁content        # Content Collections
    └── 📁docs               # Architecture & AI Governance
        ├── 📄 agents.md     # AI Agent Roles
        ├── 📄 skills.md     # Parametric AI Skills
        └── 📄 ARCHITECTURE.md
    └── 📁graphify-out        # Knowledge Graph (129 nodes, 188 edges)
    ├── astro.config.mjs
    ├── package.json
    └── tsconfig.json

## 🧠 Knowledge Graph

El proyecto incluye un knowledge graph pre-computado en `graphify-out/` con **129 nodos, 188 aristas, 12 comunidades**. Generado mediante análisis AST del código fuente, permite a agentes AI comprender la arquitectura sin escanear archivos manualmente.

| Insight | Findings |
|---|---|
| **God Nodes** | `<Icon>` (29 edges), `<Heading>` (21), `HeroIndex.astro` (15) |
| **Comunidad principal** | `src/features/` — 57 nodos (componentes + layouts) |
| **Componentes compartidos** | `src/shared/` — 31 nodos (Header, Footer, Social, Navbar) |
| **Tests** | `src/test/` — 5 nodos (4 test files + setup) |

## 🛠️ Technology Stack

- **Framework**: Astro v5.6.1
- **UI Library**: Preact v10.26.2
- **Styling**: TailwindCSS v4.0.8
- **Icons**: astro-icon v1.1.5
- **Syntax Highlighting**: PrismJS v1.30.0
- **Animations**: tailwindcss-animated v2.0.0
- **Analytics**: @vercel/speed-insights v1.2.0

## ✨ Key Features

1. **🚀 Pro Performance**
   - **New**: `astro:assets` image optimization with AVIF/WebP support.
   - **New**: Native View Transitions for smooth, app-like navigation.
   - Static site generation (SSG) for blazing fast load times.
   - Partial hydration with Preact.

2. **📱 PWA & Offline Ready**
   - **New**: Full Progressive Web App (PWA) support.
   - **New**: Service Worker for offline capabilities and caching.
   - **New**: Installable on mobile and desktop devices.

3. **💻 Modern Development Experience**
   - TypeScript support
   - Hot module replacement
   - ESLint & Prettier integration

4. **🔍 SEO & Analytics**
   - **New**: Enhanced JSON-LD Rich Snippets (Person Schema).
   - **New**: Dynamic RSS Feed generation using Content Collections.
   - Built-in sitemap generation
   - Vercel Speed Insights

5. **🎨 Styling & UI**
   - TailwindCSS v4 with utility-first styling.
   - **New**: Reading Time estimation for blog posts.
   - **New**: AJAX Contact Form with immediate feedback and security.
   - **New**: Copy Code functionality with visual feedback.
   - Animated components with `tailwindcss-animated` (Scroll Reveal).
   - Enhanced Dark Mode with anti-FOUC protection.
   - Custom 404 Error Page with auto-language detection.
   - Responsive design.

6. **🌐 Internationalization**
   - Multi-language support (English/Spanish)
   - **New**: Intuitive Language Picker (ES | EN toggle)
   - **New**: Smart Navigation with mobile support
   - JSON-LD Structured Data for SEO (Person Schema)

## 🛡️ Reliability & Security Standards

All projects in this portfolio adhere to strict engineering constraints to ensure production readiness:

### 🏗️ Quality Assurance

- **Type Safety**: 100% TypeScript codebase preventing runtime type errors.
- **Input Validation**: Runtime schema validation (Zod) on all API boundaries to reject malformed payloads early.
- **CI/CD Ready**: Automated pipelines ensure build integrity on every push.

### 🔒 Security & Limits

- **Non-Custodial Design**: No sensitive tokens (GitHub/AWS) are persisted on disk; everything is injected via process environment.
- **Hard Limits**: All gateways force payload caps (e.g., 1MB) and timeout enforcement (30s) to prevent resource exhaustion.
- **Fail-Open Strategy**: Critical services (like Cache) are designed to bypass silently on failure to maintain availability.

## 🚀 Getting Started

1. **📦 Installation**

   ### 🚀**Astro Installation**

   ```bash
   npm create astro@latest -- --template Medalcode/PortfolioMedalcode
   ```

   or

   ### 🔧**Manual Installation**

   #### Clone Repository

   ```bash
   git clone https://github.com/Medalcode/PortfolioMedalcode.git
   ```

   #### Install Dependencies

   ```bash
   npm install
   ```

2. **⚡ Development**

   ```bash
   npm run dev
   ```

3. **🏗️ Build**

   ```bash
   npm run build
   ```

4. **👀 Preview**
   ```bash
   npm run preview
   ```

## 🧰 Development Scripts

### Code Quality

```bash
# Lint your code
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Type checking
npm run check
npm run type-check

# Testing
npm run test          # Run unit tests
npm run test:coverage # Run tests with coverage
```

### Recommended Workflow

Before committing:

```bash
npm run format        # Format code
npm run lint:fix      # Fix linting issues
npm run check         # Verify types
npm run build         # Test build
```

## ⚙️ Configuration

The project is configured through several key files:

- `astro.config.mjs`: Main Astro configuration
- `tailwind.config.js`: TailwindCSS configuration
- `tsconfig.json`: TypeScript configuration

## 🎨 Customization

### 📄 Adding New Pages

Create new `.astro` files in the `src/pages` directory. The file name will determine the route.

### 🔧 Adding New Languages or Technologies

To incorporate a new programming language or technological tool into the site's capsules, follow these steps:

1.  **🖼️ Add the SVG icon**: Place the SVG file of the language or tool in the `src/icons` folder.

        > **💡 Recommendation**: For SVG icons, I recommend using [SVGL](https://svgl.app/), an excellent library of high-quality vectors that offers optimized icons for most popular languages and technologies.

2.  **📝 Register the language**: Open the `utils/languages.ts` file and add a new entry to the languages object following this format:

    ```typescript
    html: {
        name: "HTML 5",
        iconName: "html",
    },
    ```

    Where:
    - `html`: Is the unique identifier for the language
    - `name`: Is the name that will be displayed visibly in the interface
    - `iconName`: Is the name of the SVG file without the extension (must match exactly with the file name in `src/icons`)

Once these steps are completed, the new language or technology will be available for use in the site's capsules. You can select it when creating or editing projects or posts, and the corresponding icon will be displayed correctly in the interface.

If you encounter any issues during this process, try restarting the development server. In some cases, changes to configuration files or static resources require a restart to be detected correctly.

To verify that the new language has been added correctly, check the list of available technologies in the user interface after restarting the server.

---

### 🧷 Favicon Setup

To customize your site's favicon and web app icons, you can generate all the necessary variants using [favicon.io](https://favicon.io/favicon-converter/). Upload your logo or icon, and the tool will create a full set of optimized files for various devices and platforms.

Place the generated files in the `📂 public` directory as follows:

```bash
📂 public
├── 📄 android-chrome-192x192.png
├── 📄 android-chrome-512x512.png
├── 📄 apple-touch-icon.png
├── 📄 favicon-16x16.png
├── 📄 favicon-32x32.png
├── 📄 favicon.ico
└── 📄 site.webmanifest
```

> 💡 Don’t forget to update the contents of `site.webmanifest` to match your app’s name, description, and theme color for a complete PWA experience.

---

### 🎨 Styling

- Use TailwindCSS classes for styling
- Add custom styles in `src/styles/global.css`

### 🧩 Components

- Create reusable components in `src/components`
- Import icons using `astro-icon`

## 🚀 Deployment

The site is configured for deployment on Vercel, but can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🏆 Elite Data-Centric & AI Projects

The portfolio now showcases top-tier engineering projects focused on AI, Data Engineering, and robust Backend architecture:

- **DocuMind**: 100% offline, privacy-first Local AI Document Assistant using RAG and Ollama.
- **MCP Ecosystem**: A suite of Model Context Protocol servers (BrowserMCP, ScrapeMCP, RouteMCP, DocMCP) for expanding LLM agent capabilities.
- **DataWeaver**: Parametric rule engine replacing Excel/VBA with FastAPI and Pandas pipelines.
- **FraudSense**: Real-time Machine Learning (XGBoost) fraud detection system for digital payments.
- **FinLogic**: Financial data engineering platform with DuckDB and FastAPI.
- **Colabb**: Modern Linux Terminal in C++ powered by AI.
