---
title: "Chaos API Proxy"
description: "Un Web Proxy de última generación para Chaos Engineering. Intercepta tráfico y simula latencia, errores y condiciones adversas mediante scripting dinámico en TypeScript."
image:
  url: "/images/portfolio.webp"
  alt: "Chaos API Proxy Preview"
website: ""
github: "https://github.com/Medalcode/Chaos-API-Proxy"
pubDate: 2024-12-25
languages:
  - typescript
  - nodejs
  - docker
---

# Chaos API Proxy (Titanium Edition)

La evolución del proxy de caos, reescrito completamente en **TypeScript (Node.js)** para ofrecer máxima flexibilidad y rendimiento.

## Características Principales

- **Scripting Dinámico**: Define reglas de caos complejas usando JavaScript/TypeScript.
- **Inyección de Latencia**: Simula delays de red realistas y jitter.
- **Simulación de Fallos**: Fuerza códigos de estado HTTP (500, 503, 404) y payloads personalizados.
- **Observabilidad**: Dashboard integrado y métricas Prometheus.

## ¿Por qué Node.js?

Esta versión "Titanium" aprovecha el modelo de eventos no bloqueante de Node.js para manejar alto throughput de tráfico con baja latencia base, permitiendo inyecciones de caos precisas sin degradar el rendimiento del sistema bajo prueba.
