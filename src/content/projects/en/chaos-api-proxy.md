---
title: "Chaos API Proxy"
description: "Advanced chaos engineering tool to simulate failures and latency in APIs. Designed to test microservice resilience through controlled error injection."
image:
  url: "/images/portfolio.webp"
  alt: "Chaos API Proxy Preview"
website: ""
github: "https://github.com/Medalcode/Chaos-API-Proxy"
pubDate: 2024-12-25
languages:
  - go
  - docker
---

# Chaos API Proxy

A configurable proxy designed for **Chaos Engineering** practices, allowing developers to simulate adverse network conditions and service failures.

## Features

- **Controlled Latency**: Injects precise delays to test timeouts.
- **Error Simulation**: Forces 500, 503, 404 responses upon demand.
- **Stealth Mode**: Works as a transparent proxy with minimal overhead.

## What makes it special?

Written in **Go**, it is extremely lightweight and fast. Its "Cloud Native" design allows for easy integration into CI/CD pipelines or Kubernetes clusters (via Docker) to automate resilience testing, which is critical for robust microservice architectures.

## Usage

Ideal for testing and CI/CD environments where validating application resilience against external failures is critical.
