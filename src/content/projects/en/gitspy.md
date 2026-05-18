---
title: "GitSpy"
description: "API middleware that centralizes and optimizes GitHub calls with caching, queuing and intelligent rate limiting. Includes extensive testing and observability integrations."
image:
  url: "/images/projects/gitspy.webp"
  alt: "GitSpy Preview"
website: ""
github: "https://github.com/Medalcode/GitSpy"
pubDate: 2026-01-27
languages:
  - typescript
  - nodejs
  - redis
  - docker
---

# GitSpy — GitHub API Middleware

GitSpy is an intermediary API that centralizes and optimizes GitHub API calls through a multi-layer caching system, event queue, and intelligent rate limit control. It includes webhook handlers, Prometheus metrics, and a comprehensive test suite.

## Highlights

- Express Server with endpoints for webhooks, repositories, and metrics.
- GitHub Integration via adapter with rate limit handling.
- Redis Caching with **Fail-open Strategy**: Transparently bypasses Redis on connection failure to maintain availability.
- **Proactive Invalidation**: Removes stale keys after successful mutations, prioritizing eventual consistency.
- **Hard Limits**: Webhook payloads capped at 1MB to protect memory stability.
- Event Queue with BullMQ and workers for asynchronous processing.
- Metrics and monitoring (Prometheus) and 70+ tests strategy.
- **Non-Custodial Architecture**: Auth tokens are passed via encrypted headers and never persisted to disk.

## Tecnologías

Construido con **TypeScript**, **Node.js (Express)**, **Redis**, **BullMQ**, **SQLite** y **Docker**.
