---
title: "DataWeaver"
description: "Motor de reglas paramétrico que transforma flujos de trabajo frágiles de Excel/VBA en activos de datos escalables, estructurados y versionables."
image:
  url: "/images/projects/dataweaver.png"
  alt: "DataWeaver Pipeline Interface"
github: "https://github.com/Medalcode/DataWeaver"
pubDate: 2026-02-20
languages:
  - python
  - fastapi
  - pandas
---

# DataWeaver — Modernización de Flujos de Datos

**DataWeaver** nació para resolver un problema corporativo clásico: la dependencia crítica de macros VBA y hojas de cálculo Excel frágiles, no versionables y difíciles de escalar. DataWeaver transforma estos flujos en procesos de ingeniería de datos robustos.

## Características Clave

- **Motor de Reglas Paramétrico**: Permite definir transformaciones complejas de datos mediante archivos de configuración (JSON/YAML), abstrayendo la lógica de negocio del código base.
- **Alta Densidad de Procesamiento**: Utiliza **Pandas** bajo el capó para procesar millones de filas en segundos, superando los límites de memoria y rendimiento de Excel.
- **API Moderna**: Expone todas las funcionalidades a través de una API RESTful rápida construida con **FastAPI**, permitiendo integraciones con otros sistemas corporativos.
- **Auditoría y Versionado**: Al ser basado en código y configuración, cada cambio en las reglas de negocio queda registrado en Git, asegurando trazabilidad total.

## Tech Stack

Desarrollado en **Python**, combinando el rendimiento analítico de **Pandas** con la velocidad y tipado estricto de **FastAPI** y **Pydantic**.
