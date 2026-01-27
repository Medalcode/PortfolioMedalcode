# 📋 Bitácora de Desarrollo - PortfolioMedalcode

## ✅ Tareas Realizadas

### 1. Consolidación de Documentación

- [x] Unificación de historiales de Sprints 1 y 2 en `CHANGELOG.md`.
- [x] Creación de `ROADMAP.md` para planificación futura.
- [x] Eliminación de archivos temporales y redundantes (`SPRINT*_SUMMARY.md`, etc.).

### 2. Refactorización de Arquitectura (Escalabilidad)

- [x] Implementación de **Feature-Sliced Design**.
- [x] Reestructuración de directorios:
  - `src/features/` (blog, portfolio, about).
  - `src/shared/` (components, utils, icons, styles).
  - `src/layouts/` (Layout global).
- [x] Configuración de **Path Aliases** en `tsconfig.json` (`@features`, `@shared`, `@assets`).
- [x] Actualización masiva de importaciones en todo el proyecto.

### 3. Actualización de Portafolio

- [x] Eliminación del proyecto **BuyScraper**.
- [x] Incorporación del nuevo proyecto **Myna**:
  - Archivos de contenido en inglés y español.
  - Generación de imagen de portada (`myna.png`) con IA.
  - Descripción de tecnologías (FastAPI, Vanilla JS, Hexagonal Arch).
- [x] Sustitución del proyecto **Tuniforme** por **Toallaalacarta**:
  - Implementación de contenido para **Storeplate** (Astro + Shopify).
  - Actualización de URL de producción (Netlify).
  - Integración de captura real de la tienda como portada.

- [x] Incorporación del proyecto **GitSpy** (27/01/2026):
  - Archivos de contenido añadidos en `src/content/projects/en/gitspy.md` y `src/content/projects/es/gitspy.md`.
  - Descripción basada en README del repositorio https://github.com/Medalcode/GitSpy.
  - Imagen de portada pendiente — placeholder recomendado en `/public/files/images/projects/gitspy.png`.
  - Tecnologías: TypeScript, Node.js (Express), Redis, BullMQ, SQLite, Docker.

### 4. Corrección de Errores de Despliegue (Build Fixes)

- [x] **Error 404/Navegación**: Corrección de lógica de idioma por defecto en `Navigation.astro`.
- [x] **Iconos**: Configuración explícita de `iconDir` en `astro.config.mjs` para `src/shared/icons`.
- [x] **Rutas Rotas**: Corrección de importaciones relativas profundas en páginas dinámicas.
- [x] **Deprecaciones**: Migración de `<ViewTransitions />` a `<ClientRouter />` (Astro 5).
- [x] **Linting**: Limpieza de variables no utilizadas y advertencias de TypeScript.

### 5. UI/UX & Component Refactoring

- [x] **ChatInput**: Extracción a componente independiente con control imperativo de foco y estado.
- [x] **Diseño**: Generación de mockup UI conceptual para proyecto GITSPY (Dark/Mint aesthetic).

## ⏳ Tareas Pendientes (Roadmap)

### Sprint 3 - Performance y SEO

- [ ] **Optimización de Imágenes**: Implementar estrategias avanzadas de carga.
- [ ] **Fuentes Locales**: Self-hosting de tipografías para mejorar privacidad y velocidad.
- [ ] **SEO Avanzado**: Schema.org estructurado y Open Graph dinámico optimizado.
- [ ] **PWA Completa**: Finalizar configuración de Service Workers y Manifest.

### Sprint 4 - CI/CD y Automatización

- [ ] **GitHub Actions**: Workflows para testing y despliegue automático.
- [ ] **Dependabot**: Configuración de actualizaciones automáticas.
- [ ] **Tests E2E**: Implementación de pruebas end-to-end con Playwright o Cypress.
