---
title: "FinLogic"
description: "Plataforma de ingeniería de datos financieros de alto rendimiento diseñada para eliminar la fricción entre la ingesta de datos de mercado y el análisis cuantitativo."
image:
  url: "/images/projects/finlogic.png"
  alt: "Dashboard Analítico FinLogic"
website: ""
github: "https://github.com/Medalcode/FinLogic"
pubDate: 2026-02-01
languages:
  - python
  - fastapi
  - duckdb
  - docker
  - kafka
---

# FinLogic — Ingeniería de Datos Financieros

FinLogic es una plataforma especializada que agiliza los pipelines de datos financieros. Sigue una arquitectura de "Ingesta Ligera, Análisis Pesado", permitiendo a los equipos centrarse en el modelado de activos sin mantener infraestructura de datos frágil.

## Características Principales

- **Ingesta Escalable**: Normaliza flujos de precios de mercado de múltiples fuentes.
- **Analítica Embebida**: Utiliza **DuckDB** para consultas OLAP ultrarrápidas sobre archivos locales.
- **Motor Financiero**: Endpoints de API optimizados para cálculos vectorizados (Valor Presente, Tasa Interna de Retorno, Volatilidad/VaR).
- **Trazabilidad**: Preserva los datos crudos (Capa Bronce) para una auditoría completa.

## Tecnologías

Construido con **Python**, **FastAPI**, **DuckDB** y **Docker**. Diseñado para rendimiento y fiabilidad en contextos financieros.
