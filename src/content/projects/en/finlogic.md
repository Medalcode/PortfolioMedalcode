---
title: "FinLogic"
description: "High-performance financial data engineering platform designed to eliminate friction between market data ingestion and quantitative analysis."
image:
  url: "/images/projects/finlogic.png"
  alt: "FinLogic Analytics Dashboard"
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

# FinLogic — Financial Data Engineering

FinLogic is a specialized platform that streamlines financial data pipelines. It follows a "Lightweight Ingest, Heavy Analysis" architecture, enabling teams to focus on modeling assets without maintaining fragile data infrastructure.

## Key Features

- **Scalable Ingestion**: Normalizes market price streams from various sources.
- **Embedded Analytics**: Uses **DuckDB** for lightning-fast OLAP queries on local files.
- **Financial Engine**: Optimized API endpoints for vectorized calculations (NPV, IRR, Volatility/VaR).
- **Audit Trail**: Preserves raw data (Bronze Layer) for full traceability.

## Tech Stack

Built with **Python**, **FastAPI**, **DuckDB**, and **Docker**. Designed for performance and reliability in financial contexts.
