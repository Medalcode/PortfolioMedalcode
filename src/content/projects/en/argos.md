---
title: "Argos"
description: "Professional algorithmic trading bot for Binance Spot featuring Triple Filter strategy, dynamic Trailing Stop, and integrated Web Dashboard."
image:
  url: "/images/projects/argos.png"
  alt: "Argos Analytics Dashboard"
website: ""
github: "https://github.com/Medalcode/Argos"
pubDate: 2026-02-01
languages:
  - python
  - docker
  - html
  - ai
  - linux
---

# Argos — High-Frequency Algorithmic Trading

Argos is an automated trading suite designed for **Binance Spot** operations under volatile market conditions. It implements a proprietary "Triple Filter" mathematical strategy to minimize false positives and maximize Sharpe Ratio, combined with a resilient execution system that supports network drops and automatic reconnection.

## Key Features

- **Triple Filter Strategy**: Proprietary algorithm crossing trend and momentum indicators before execution.
- **Dynamic Risk Management**: Intelligent Trailing Stop adjusting exit points based on real-time asset volatility.
- **Edge Support**: Deployment capability on limited hardware (including Android/Termux devices) via "Degraded Mode".
- **Genetic Optimizer**: Optimization script (`optimize.py`) to find ideal parameters through extensive backtesting.
- **Watchdog System**: Guardian process that automatically restarts the engine upon unexpected crashes.

## Tech Stack

Built with **Python 3.13** (async optimized), **Docker** for containerized deployment, and **SQLite** for lightweight transactional persistence.
