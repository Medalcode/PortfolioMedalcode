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

- **Simulación de Latencia**: Inyecta retardos configurables en las respuestas.
- **Inyección de Errores**: Devuelve códigos de error HTTP aleatorios o específicos.
- **Configuración Dinámica**: Soporte para identificación de configuración basada en headers.
- **Docker Ready**: Contenerizado para despliegue y pruebas inmediatas.

## Uso

Ideal para entornos de prueba y CI/CD donde validar la resiliencia de la aplicación ante fallos externos es crítico.
