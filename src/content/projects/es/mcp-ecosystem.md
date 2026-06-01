---
title: "MCP Ecosystem"
description: "Suite de servidores Model Context Protocol (MCP) que expanden las capacidades de Agentes de IA, incluyendo automatización de navegadores, scraping web avanzado y manipulación de documentos."
image:
  url: "/images/projects/mcp-ecosystem.webp"
  alt: "MCP Ecosystem Architecture"
github: "https://github.com/Medalcode"
pubDate: 2026-04-10
languages:
  - typescript
  - python
  - ai
  - node
---

# Ecosistema MCP (Model Context Protocol)

El **Ecosistema MCP** es una colección de servidores estandarizados que construí para dotar a los Agentes de Inteligencia Artificial (LLMs) de "manos y ojos" en el mundo real, utilizando el emergente estándar Model Context Protocol de Anthropic.

## Componentes del Ecosistema

- **BrowserMCP**: Motor dual (estático + Playwright) que permite a la IA navegar por internet de forma autónoma, hacer clics, rellenar formularios e interactuar con SPAs modernas.
- **ScrapeMCP**: Servidor especializado en extracción de datos estructurados, capaz de parsear sitemaps, tablas y listas, y exportar la información como JSON o Markdown semántico.
- **RouteMCP**: Enrutador inteligente que clasifica tareas complejas y las delega al modelo de IA más adecuado (Gemini, Groq, Cerebras) optimizando latencia y costo.
- **DocMCP**: Herramienta de manipulación profunda de PDFs que permite a los agentes leer, fusionar, dividir y generar reportes analíticos de documentos ofimáticos.

## Arquitectura

Desarrollados combinando **TypeScript / Node.js** (para las interacciones web asíncronas con Playwright) y **Python** (para manipulación de documentos y lógica de enrutamiento). Representan el estado del arte en *Tool Calling* y autonomía de agentes IA.
