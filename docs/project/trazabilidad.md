# Trazabilidad

## Cadena obligatoria

```text
Fuente oficial
  -> requerimiento o criterio
  -> documento de sprint
  -> ficha de tarea
  -> Issue
  -> rama de tarea
  -> Pull Request
  -> evidencia de pruebas
  -> cierre del sprint
  -> main
```

## Identificación

El identificador de tarea debe repetirse en:

- nombre del archivo de tarea;
- título de la Issue;
- nombre de la rama;
- título del Pull Request;
- documento de cierre del sprint.

Ejemplo:

```text
Ficha: docs/tasks/S1-02-modelo-de-dominio.md
Issue: [S1-02] Implementar modelo de dominio
Rama: task/S1-02-modelo-de-dominio
PR: [S1-02] Implementar modelo de dominio
```

## Separación de responsabilidades

- Las fuentes prueban qué solicitó la institución.
- La planificación define cuándo y dentro de qué límites se trabajará.
- La tarea define qué puede modificar el agente.
- El Pull Request demuestra qué cambió y qué fue validado.
- El cierre del sprint registra el resultado integrado.

Las Issues y el tablero representan estado; no deben convertirse en una copia divergente de la especificación Markdown.
