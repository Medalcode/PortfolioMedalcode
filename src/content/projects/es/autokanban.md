---
title: "AutoKanban"
description: "Visualizador avanzado que transforma archivos Bitacora.md alojados en GitHub en tableros Kanban interactivos. Adhiere al Viewer Pattern y consume la API de GitSpy."
image:
  url: "/images/projects/autokanban.png"
  alt: "Interfaz de Tablero AutoKanban"
website: "https://auto-kanban.vercel.app"
github: "https://github.com/Medalcode/AutoKanban"
pubDate: 2026-01-30
languages:
  - javascript
  - html
  - css
  - markdown
---

# AutoKanban — Visualizador de Bitácoras GitHub

AutoKanban es una herramienta de visualización avanzada que transforma automáticamente archivos `Bitacora.md` alojados en **GitHub** en **tableros Kanban** totalmente interactivos. Sigue el **Patrón Viewer**, actuando como un cliente 100% estático y resiliente que consume la **API de GitSpy** para procesar y normalizar datos sin necesidad de backend propio.

## Características Principales

- **Zero Backend**: Arquitectura puramente frontend. Sin servidores que administrar.
- **Integración GitSpy**: Aprovecha la API de GitSpy para un parsing inteligente.
- **Resiliencia Total**: Manejo robusto de errores de red y repositorios vacíos.
- **Smart UX**: Persistencia de sesión y URLs compartibles (`?owner=X&repo=Y`).

## Tecnologías

Construido con **Vanilla JavaScript**, **HTML5** y **CSS3**, enfocándose en el rendimiento y la simplicidad.
