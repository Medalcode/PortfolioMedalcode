---
title: "FraudSense"
description: "Real-time financial analysis platform leveraging Machine Learning (XGBoost) to detect suspicious transactions in digital payment ecosystems."
image:
  url: "/images/projects/fraudsense.webp"
  alt: "FraudSense Detection Dashboard"
github: "https://github.com/Medalcode/FraudSense"
pubDate: 2025-11-10
languages:
  - python
  - machinelearning
  - sql
---

# FraudSense — AI Fraud Detection

**FraudSense** is an end-to-end Machine Learning solution designed to secure digital payment ecosystems. It ingests financial transactions, extracts complex features in real-time, and scores fraud probability before the transaction clears.

## Key Features

- **Optimized XGBoost Model**: Trained on highly imbalanced transactional datasets, utilizing advanced hyperparameter tuning to maximize *Recall* while maintaining acceptable precision.
- **Real-Time Feature Engineering**: Computes historical user metrics on-the-fly (e.g., transaction velocity, geographic IP distance, behavioral drifts).
- **Low-Latency API**: Architected to return predictions in milliseconds, enabling synchronous blocking during the checkout flow.
- **Analytical Dashboard**: UI for fraud analysts that provides model explainability (Explainable AI / SHAP values), facilitating manual investigation of "grey-area" cases.

## Tech Stack

Data Science core built with **Python (Scikit-Learn, XGBoost, Pandas)**, asynchronously served API, and fast in-memory caching for transaction velocity calculations.
