---
title: "Pathwise"
description: "Intelligent career navigation ecosystem combining a Chrome Extension, Web Dashboard, and AI Engine to automate job tracking and optimize application strategies."
image:
  url: "/images/projects/pathwise.png"
  alt: "Pathwise Dashboard Interface"
website: "https://pathwise-theta.vercel.app/"
github: "https://github.com/Medalcode/Pathwise"
pubDate: 2026-01-31
languages:
  - node
  - javascript
  - html
  - ai
  - googlecloud
---

# Pathwise — Intelligent Career Navigation

**Pathwise** (formerly Panoptes) is a comprehensive ecosystem designed to navigate the complexity of modern job searching. It integrates a Chrome Extension for data capture with a premium Web Dashboard for strategy and analysis.

## Key Features

- **Resilient Extraction Engine**: Heuristic parsing prioritizes structure over brittle CSS selectors, with fallback to raw text extraction if the DOM changes.
- **Security & Throttling**: Extraction rate strictly limited (X profiles/min) to comply with ToS and prevent blocking.
- **Content Sanitization**: HTML cleaning upon ingestion to prevent stored XSS attacks.
- **Visual Career Timeline**: Interactive chart visualizing your professional trajectory.
- **ATS Compatibility Score**: Real-time analysis of how well your profile matches job requirements.
- **Job Tracking Kanban**: Organize applications with status tracking (Saved, Applied, Interview).
- **Eventual Consistency**: Background synchronization strategy to avoid blocking the browser UI.
- **Premium Strategy**: AI-generated career personas and salary market value estimation.

## Tech Stack

Powered by **Node.js**, **Express**, **SQLite**, **Google Cloud Storage**, and **Llama 3.3 (Groq)** for AI intelligence.
