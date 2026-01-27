---
title: "GitSpy"
description: "Middleware API que centraliza y optimiza llamadas a GitHub con caché, colas y rate limiting inteligente. Incluye testing y métricas para observabilidad."
image:
  url: "/images/projects/gitspy.png"
  alt: "Vista previa de GitSpy"
website: ""
github: "https://github.com/Medalcode/GitSpy"
pubDate: 2026-01-27
languages:
  - typescript
  - nodejs
  - redis
  - docker
---

# GitSpy — API intermedia para GitHub

GitSpy es una API intermedia que centraliza y optimiza llamadas al API de GitHub mediante un sistema multi-capa de caché, cola de eventos y control inteligente de rate limits. Incluye handlers para webhooks, métricas Prometheus y una amplia suite de tests.

## Destacado

- Servidor Express con endpoints para webhooks, repositorios y métricas.
- Integración con GitHub mediante adaptador y control de rate limits.
- Caché con Redis y persistencia opcional en SQLite.
- Cola de eventos con BullMQ y workers para procesamiento asíncrono.
- Métricas y monitoreo (Prometheus) y estrategia de testing con 70+ tests.

## Tecnologías

Construido con **TypeScript**, **Node.js (Express)**, **Redis**, **BullMQ**, **SQLite** y **Docker**.
