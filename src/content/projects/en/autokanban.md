---
title: "AutoKanban"
description: "Advanced viewer that transforms generic Bitacora.md files hosted on GitHub into interactive Kanban boards. Adheres to the Viewer Pattern and consumes the GitSpy API."
image:
  url: "/images/projects/autokanban.png"
  alt: "AutoKanban Dashboard Interface"
website: "https://auto-kanban.vercel.app"
github: "https://github.com/Medalcode/AutoKanban"
pubDate: 2026-01-30
languages:
  - javascript
  - html
  - css
  - markdown
---

# AutoKanban — GitHub Bitacora Viewer

AutoKanban is an advanced visualization tool that automatically transforms `Bitacora.md` files hosted on **GitHub** into fully interactive **Kanban boards**. It follows the **Viewer Pattern**, acting as a 100% static, resilient client that consumes the **GitSpy API** to process and normalize data without a local backend.

## Key Features

- **Zero Backend**: Pure frontend architecture. No servers to manage.
- **GitSpy Integration**: Leveraging the GitSpy API for intelligent parsing.
- **Total Resilience**: Robust handling of network errors and empty repositories.
- **Smart UX**: Session persistence and shareable URLs (`?owner=X&repo=Y`).

## Tech Stack

Built with **Vanilla JavaScript**, **HTML5**, and **CSS3**, focusing on performance and simplicity.
