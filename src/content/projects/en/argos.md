---
title: "Argos"
description: "Intelligent monitoring engine that tracks website changes using custom CSS selectors, delivering real-time notifications upon detection."
image:
  url: "/images/projects/argos.png"
  alt: "Argos Dashboard Interface"
website: "https://argos-three.vercel.app/"
github: "https://github.com/Medalcode/Argos"
pubDate: 2026-02-01
languages:
  - node
  - javascript
  - html
  - ai
  - playwright
---

# Argos — Intelligent Web Surveillance

Argos is an automated monitoring system designed to track visual and content changes on arbitrary websites. It allows users to define specific CSS selectors to monitor prices, stock availability, or news updates, sending immediate alerts when relevant modifications are detected.

## Key Features

- **Custom Selectors**: Define exactly which part of the page to watch (e.g., `.price`, `#stock-status`).
- **Headless Engine**: Uses Playwright to render dynamic pages (SPAs) that require JavaScript execution.
- **Change History**: Stores snapshots of detected changes for visual auditing.
- **Real-Time Alerts**: Notifications via Email/Webhook when a change condition is met.
- **Anti-Blocking Mode**: Basic User-Agent rotation strategies to evade simple detection.

## Tech Stack

Built with **Node.js**, **Playwright** for headless navigation, and orchestrated via **GitHub Actions/Cron Jobs** for periodic execution.
