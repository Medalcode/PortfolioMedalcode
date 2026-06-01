---
title: "FraudSense"
description: "Plataforma de análisis financiero en tiempo real que utiliza Machine Learning (XGBoost) para detectar transacciones sospechosas en sistemas de pagos digitales."
image:
  url: "/images/projects/fraudsense.png"
  alt: "FraudSense Detection Dashboard"
github: "https://github.com/Medalcode/FraudSense"
pubDate: 2025-11-10
languages:
  - python
  - machinelearning
  - sql
---

# FraudSense — Detección de Fraude con IA

**FraudSense** es una solución integral de Machine Learning diseñada para proteger ecosistemas de pagos digitales. Ingiere transacciones financieras, extrae características complejas en tiempo real y clasifica la probabilidad de fraude antes de que la transacción se consolide.

## Características Clave

- **Modelo XGBoost Optimizado**: Entrenado con grandes volúmenes de datos transaccionales desbalanceados, utilizando técnicas de ajuste de hiperparámetros para maximizar el *Recall* sin sacrificar demasiada precisión.
- **Feature Engineering en Tiempo Real**: Calcula métricas históricas del usuario al vuelo (ej. velocidad de transacciones, distancia geográfica entre IPs, cambios de comportamiento).
- **API de Baja Latencia**: Diseñada para responder en milisegundos y bloquear transacciones en el momento (Point-of-Sale).
- **Dashboard Analítico**: Interfaz para analistas de fraude que explica las decisiones del modelo (Explainable AI / SHAP values) permitiendo investigación manual de casos "zona gris".

## Tech Stack

Núcleo de Data Science construido con **Python (Scikit-Learn, XGBoost, Pandas)**, API servida de forma asíncrona y almacenamiento rápido en memoria para los cálculos de velocidad de transacciones.
