---
title: "Argos"
description: "Motor de monitorización inteligente que permite vigilar cambios en sitios web utilizando selectores CSS personalizados y notificaciones en tiempo real."
image:
  url: "/images/projects/argos.png"
  alt: "Dashboard de Argos"
website: "https://argos-three.vercel.app/"
github: "https://github.com/Medalcode/Argos"
pubDate: 2026-02-01
languages:
  - node
  - javascript
  - html
  - ai
  - playwright
---

# Argos — Vigilancia Web Inteligente

Argos es un sistema de monitorización automatizada diseñado para rastrear cambios visuales y de contenido en sitios web arbitrarios. Permite definir selectores CSS específicos para vigilar precios, disponibilidad de stock o actualizaciones de noticias, enviando alertas inmediatas cuando se detectan modificaciones relevantes.

## Características Principales

- **Selectores Personalizados**: Define exactamente qué parte de la página vigilar (e.g., `.price`, `#stock-status`).
- **Motor Headless**: Utiliza Playwright para renderizar páginas dinámicas (SPA) que requieren ejecución de JavaScript.
- **Historial de Cambios**: Almacena snapshots de los cambios detectados para auditoría visual.
- **Alertas en Tiempo Real**: Notificaciones vía Email/Webhook cuando se cumple una condición de cambio.
- **Modo Anti-Bloqueo**: Estrategias básicas de rotación de User-Agent para evitar detección simple.

## Tecnologías

Construido con **Node.js**, **Playwright** para la navegación headless, y orquestado mediante **GitHub Actions/Cron Jobs** para la ejecución periódica.
