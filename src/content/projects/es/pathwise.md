---
title: "Pathwise"
description: "Ecosistema inteligente de navegación profesional que combina extensión de Chrome, Dashboard Web y motor de IA para automatizar el seguimiento de empleos y optimizar estrategias."
image:
  url: "/images/projects/pathwise.webp"
  alt: "Interfaz Dashboard Pathwise"
website: "https://pathwise-theta.vercel.app/"
github: "https://github.com/Medalcode/Pathwise"
pubDate: 2026-01-31
languages:
  - node
  - javascript
  - html
  - ai
  - googlecloud
---

# Pathwise — Navegación Profesional Inteligente

**Pathwise** (anteriormente Panoptes) es un ecosistema integral diseñado para navegar la complejidad de la búsqueda de empleo moderna. Integra una Extensión de Chrome para la captura de datos con un Dashboard Web premium para estrategia y análisis.

## Características Principales

- **Motor de Extracción Resiliente**: Parsing heurístico que prioriza la estructura sobre selectores CSS frágiles, con fallback a extracción de texto crudo si el DOM cambia.
- **Seguridad y Throttling**: Tasa de extracción limitada estrictamente (X perfiles/min) para cumplir con términos de servicio y evitar bloqueos.
- **Sanitización de Contenido**: Limpieza de HTML en la ingesta para prevenir ataques XSS almacenados.
- **Línea de Tiempo Visual**: Gráfico interactivo que visualiza tu trayectoria profesional.
- **Puntaje de Compatibilidad ATS**: Análisis en tiempo real de la coincidencia entre tu perfil y los requisitos.
- **Kanban de Seguimiento**: Organiza postulaciones con estados (Guardado, Aplicado, Entrevista).
- **Consistencia Eventual**: Estrategia de sincronización background para no bloquear la UI del navegador.
- **Estrategia Premium**: Generación de "career personas" y estimación de valor de mercado salarial con IA.

## Tecnologías

Impulsado por **Node.js**, **Express**, **SQLite**, **Google Cloud Storage** y **Llama 3.3 (Groq)** para la inteligencia artificial.
