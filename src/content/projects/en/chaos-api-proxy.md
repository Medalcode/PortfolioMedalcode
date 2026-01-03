---
title: "Chaos API Proxy"
description: "A next-generation Web Proxy for Chaos Engineering. Intercepts traffic and simulates latency, errors, and adverse conditions via dynamic TypeScript scripting."
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

The evolution of the chaos proxy, completely rewritten in **TypeScript (Node.js)** to offer maximum flexibility and performance.

## Key Features

- **Dynamic Scripting**: Define complex chaos rules using JavaScript/TypeScript.
- **Latency Injection**: Simulate realistic network delays and jitter.
- **Failure Simulation**: Force HTTP status codes (500, 503, 404) and custom payloads.
- **Observability**: Integrated dashboard and Prometheus metrics.

## Why Node.js?

This "Titanium" version leverages Node.js's non-blocking event model to handle high traffic throughput with low base latency, allowing for precise chaos injections without unintentionally degrading the performance of the system under test.
