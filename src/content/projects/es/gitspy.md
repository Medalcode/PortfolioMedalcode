---
title: "GitSpy"
description: "Middleware API que centraliza y optimiza llamadas a GitHub con caché, colas y rate limiting inteligente. Incluye testing y métricas para observabilidad."
image:
  url: "/images/projects/gitspy.png"
  alt: "Vista previa de GitSpy"
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

## Contexto

Diseñé GitSpy para resolver un problema concreto: **AutoKanban** quemaba rate limits de GitHub con llamadas redundantes. El caché del navegador no funcionaba porque no se compartía entre usuarios. Necesitaba un middleware stateful con invalidación inteligente.

**Decisión arquitectónica:** Monolito serverless sobre microservicios. Vercel auto-escala funciones, eliminando complejidad de service mesh para <1K req/min.

## Decisiones Técnicas Clave

### 1. **Caché Multi-Capa (Redis + SQLite)**

- **Redis:** Caché efímero (TTL=5min) con invalidación proactiva tras mutaciones
- **SQLite:** Event log durable para auditoría y replay
- **Trade-off aceptado:** Redis failure = service outage. No implementé fail-open porque el costo (circuit breaker, metrics, quota risk) excede el beneficio para uptime 99.9%

### 2. **Rate Limiter Inteligente**

- Parsea headers `x-ratelimit-remaining` de GitHub
- Bloquea requests cuando quota agotada, espera hasta reset
- Backoff exponencial con cap de 60s
- **Limitación conocida:** Estado in-process (no escala horizontalmente). Migración a Redis planificada para v2

### 3. **Webhook Processing con BullMQ**

- Desacopla recepción (fast) de procesamiento (slow: DB write, cache invalidation)
- Jobs idempotentes (upsert, no insert) para manejar retries
- **Riesgo aceptado:** Jobs pueden fallar permanentemente tras max retries. Mitigado por TTL de caché (eventual consistency)

### 4. **HMAC Webhook Verification**

- `crypto.timingSafeEqual()` previene timing attacks
- 100% test coverage en boundary de seguridad
- **Decisión de desarrollo:** Permito secret vacío en non-production para facilitar testing local

## Testing Strategy

**70+ tests | 85% coverage global | 100% en critical paths**

- **Unit tests:** Rate limiter, webhooks, DB, GitHub adapter
- **Integration tests:** Webhook flow completo (HMAC → Queue → DB → Cache)
- **No implementado:** E2E con GitHub real (costo de mantenimiento > beneficio)

**Qué NO testeo:**

- Redis connection pooling (confío en `ioredis`)
- GitHub API schema changes (confío en Octokit types)
- SQLite transaction isolation (confío en better-sqlite3)

**Filosofía:** Tests documentan failure modes, no prueban correctness absoluta.

## Security Posture

**Amenazas mitigadas:**

- ✅ Webhook spoofing (HMAC timing-safe)
- ✅ API quota exhaustion (rate limiter)
- ✅ SQL injection (prepared statements)
- ✅ Cache poisoning (proactive invalidation + TTL)

**Amenazas NO mitigadas:**

- ❌ Redis SPOF (monitoreado, alerta manual)
- ❌ Webhook replay attacks (idempotent processing limita daño)
- ❌ Per-client rate limiting (single trusted client actual)

**Justificación:** Priorizo amenazas high-impact/high-likelihood. Edge cases aceptados para MVP.

## Límites Actuales

1. **No horizontal scaling:** Rate limiter in-process
2. **No multi-tenancy:** Single GitHub token compartido
3. **No fail-open:** Redis failure = service outage
4. **No API versioning:** Breaking changes rompen clientes

## Qué Haría Diferente en v2

1. **Fail-open para Redis:** Bypass cache cuando unavailable (con circuit breaker)
2. **PostgreSQL:** Reemplazar SQLite (ACID, replication, scale)
3. **Distributed rate limiter:** Mover estado a Redis (horizontal scaling)
4. **OpenTelemetry:** Tracing distribuido para debug

## Métricas Reales

- **Latency:** p50=120ms (cache hit), p95=250ms
- **Cache hit rate:** 84% (post-warmup)
- **Uptime:** 99.8% (30 días)
- **Scale:** 5K req/día, 47 repos, 200 webhooks/día

## Tecnologías

**TypeScript**, **Node.js (Express)**, **Redis**, **BullMQ**, **SQLite**, **Vercel Serverless**

## Documentación Técnica

- [Case Study](https://github.com/Medalcode/GitSpy/blob/main/docs/CASE_STUDY.md)
- [Testing Strategy](https://github.com/Medalcode/GitSpy/blob/main/docs/TESTING_STRATEGY.md)
- [Security Posture](https://github.com/Medalcode/GitSpy/blob/main/docs/SECURITY_POSTURE.md)
