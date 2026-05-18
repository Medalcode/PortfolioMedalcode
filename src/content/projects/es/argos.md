---
title: "Argos"
description: "Bot de trading algorítmico profesional para Binance Spot con estrategia de Triple Filtro, Trailing Stop dinámico y Dashboard Web integrado."
image:
  url: "/images/projects/argos.webp"
  alt: "Dashboard Analítico Argos"
website: ""
github: "https://github.com/Medalcode/Argos"
pubDate: 2026-02-01
languages:
  - python
  - docker
  - html
  - ai
  - linux
---

# Argos — Trading Algorítmico de Alta Frecuencia

Argos es una suite de trading automatizado diseñada para operar en **Binance Spot** bajo condiciones de mercado volátiles. Implementa una estrategia de "Triple Filtro" matemática para minimizar falsos positivos y maximizar el Sharpe Ratio, combinada con un sistema de ejecución resiliente que soporta caídas de red y re-conexión automática.

## Características Principales

- **Estrategia Triple Filtro**: Algoritmo propietario que cruza indicadores de tendencia y momento antes de ejecutar.
- **Gestión de Riesgo Dinámica**: Trailing Stop inteligente que ajusta la salida según la volatilidad del activo en tiempo real.
- **Soporte Edge**: Capacidad de despliegue en hardware limitado (incluyendo dispositivos Android/Termux) mediante "Modo Degradado".
- **Optimizador Genético**: Script de optimización (`optimize.py`) para encontrar parámetros ideales mediante backtesting.
- **Watchdog System**: Proceso guardián que reinicia automáticamente el motor en caso de crash inesperado.

## Tecnologías

Construido con **Python 3.13** (optimizado para async), **Docker** para despliegue containerizado, y **SQLite** para persistencia transaccional ligera.
