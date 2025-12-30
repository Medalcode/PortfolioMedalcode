---
layout: ../../../layouts/ProjectLayout.astro
title: "Chaos API Proxy"
description: "Herramienta avanzada de ingeniería del caos para simular fallos y latencia en APIs. Diseñada para probar la resiliencia de microservicios mediante la inyección controlada de errores."
image:
  url: "/images/portfolio.webp"
  alt: "Chaos API Proxy Preview"
website: ""
github: "https://github.com/Medalcode/Chaos-API-Proxy"
pubDate: 2024-12-25
languages:
  - go
  - docker
---

# Chaos API Proxy

Un proxy configurable diseñado para prácticas de **Chaos Engineering**, permitiendo a los desarrolladores simular condiciones adversas de red y fallos en servicios.

## Características

- **Latencia Controlada**: Inyecta delays precisos para probar timeouts.
- **Simulación de Errores**: Fuerza respuestas 500, 503, 404 bajo demanda.
- **Stealth Mode**: Funciona como un proxy transparente con overhead mínimo.

## ¿Qué lo hace especial?

Escrito en **Go**, es extremadamente ligero y rápido. Su diseño "Cloud Native" permite integrarlo fácilmente en pipelines de CI/CD o clusters de Kubernetes (vía Docker) para automatizar pruebas de resiliencia, algo crítico para arquitecturas de microservicios robustas.

## Uso

Ideal para entornos de prueba y CI/CD donde validar la resiliencia de la aplicación ante fallos externos es crítico.
