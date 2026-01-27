---
title: "GitSpy"
description: "API middleware that centralizes and optimizes GitHub calls with caching, queuing and intelligent rate limiting. Includes extensive testing and observability integrations."
image:
  url: "/images/projects/gitspy.png"
  alt: "GitSpy Preview"
website: ""
github: "https://github.com/Medalcode/GitSpy"
pubDate: 2026-01-27
languages:
  - typescript
  - nodejs
  - redis
  - docker
---

# GitSpy — API middleware para GitHub

GitSpy es una API intermedia que centraliza y optimiza llamadas al API de GitHub mediante un sistema multi-capa de caché, cola de eventos y control inteligente de rate limits. Incluye handlers para webhooks, métricas Prometheus y una suite de tests amplia.

## Destacado

- Servidor Express con endpoints para webhooks, repositorios y métricas.
- Integración con GitHub usando un adaptador con manejo de rate limits.
- Caché con Redis y persistencia opcional en SQLite.
- Cola de eventos con BullMQ y workers para procesamiento asíncrono.
- Métricas y monitoreo (Prometheus) y estrategia de testing con 70+ tests.

## Tecnologías

Construido con **TypeScript**, **Node.js (Express)**, **Redis**, **BullMQ**, **SQLite** y **Docker**.
