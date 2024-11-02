---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Conventional Commits"
pubDate: 2022-11-01
description: "Specification is a lightweight convention on top of commit messages"
author: "Lachicagladiadora"
image:
  url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt: "Git messages image"
tags: ["git", "dev", "learn"]
---

- **build** : cambios que afectan el sistema de compilación o las dependencias externas (alcances de ejemplo: gulp, broccoli, npm)
  ![[Pasted image 20231107190904.png]]
- **ci** : cambios que afectan archivos(ficheros) de configuración y scripts relacionados con la CI(integracion continua) (ámbitos de ejemplo: Travis, Circle, BrowserStack, SauceLabs)
- **docs** : cuando solo se modifica documentación.
  ![[Pasted image 20231107193306.png]]
- **feat** : añade una nueva funcionalidad o
  ![[Pasted image 20231107190827.png]]
- **fix** : una corrección de errores
  ![[Pasted image 20231107193152.png]]
- **chore**: tareas rutinarias que no sean específicas de una feature o un error como por ejemplo añadir contenido al fichero `.gitignore` o instalar una dependencia.
- **perf** : Un cambio de código que mejora el rendimiento.
  ![[Pasted image 20231107193429.png]]
- **refactor** : un cambio de código que no corrige un error ni agrega una característica, pero mejora el código.
  ![[Pasted image 20231107193118.png]]
- **style** : Cambios de legibilidad o formateo de código que no afecta a funcionalidad ni el significado del código (espacios en blanco, formato, punto y coma faltantes, etc.)
- **test** : agregar pruebas faltantes o corregir pruebas existentes (test)
  ![[Pasted image 20231107193508.png]]
- **wip** : work in progress
  ![[Pasted image 20231107192930.png]]
- **revert**: si el commit revierte un commit anterior. Debería indicarse el hash del commit que se revierte.

**For more information**
[article in Spanish](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an)  
[article in English](https://www.conventionalcommits.org/en/v1.0.0/)
