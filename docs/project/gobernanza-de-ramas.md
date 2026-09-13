# Gobernanza de ramas

## Modelo

```text
task/* -> Pull Request -> sprint/* -> Pull Request de cierre -> main
```

## Rama main

`main` contiene únicamente trabajo estable, revisado y trazable. No recibe implementaciones directas de tareas.

## Ramas de sprint

Cada sprint aprobado utiliza una rama `sprint/*` creada desde el último commit aceptado de `main`. Funciona como rama de integración y solo recibe Pull Requests de tareas pertenecientes a ese sprint.

El documento `docs/sprints/<ID>/SPRINT.md` debe existir y estar aprobado antes de crear la rama.

## Ramas de tarea

Cada tarea utiliza una rama `task/*` creada desde la rama de su sprint. Una rama de tarea corresponde a una sola ficha y una sola Issue.

La ficha debe definir:

- objetivo;
- rama base y rama destino;
- requerimientos relacionados;
- alcance incluido y excluido;
- archivos o módulos autorizados;
- dependencias;
- criterios de aceptación;
- pruebas obligatorias;
- evidencia esperada.

## Integración

1. El agente entrega un Pull Request desde `task/*` hacia `sprint/*`.
2. Se revisa alcance, diff, pruebas y evidencia.
3. Las tareas aprobadas se integran a la rama del sprint.
4. Cuando se cumplen los criterios del sprint, se redacta su cierre.
5. El sprint se integra mediante Pull Request hacia `main`.

## Restricciones

- No realizar push directo a `main`.
- No realizar push directo a `sprint/*` para implementar tareas.
- No mezclar tareas diferentes en una misma rama.
- No reutilizar una rama cerrada para un trabajo nuevo.
- No ampliar el alcance dentro de un Pull Request.
- No eliminar ramas históricas de sprint sin una decisión explícita.

Las protecciones técnicas de GitHub se configurarán en una fase posterior, después de aprobar esta política.
