# Convenciones de trabajo

## Identificadores

- Sprint: `S01`, `S02`, `S03`.
- Tarea: `S1-01`, `S1-02`, `S2-01`.
- Decisión: `ADR-001`, `ADR-002`.
- Requerimientos: se conservan los identificadores oficiales `CA-01`, `RE-01`, `GU-01` y `AP-01`.

## Nombres de ramas

- Sprint: `sprint/01-avance-1`.
- Tarea: `task/S1-01-descripcion-breve`.
- Corrección urgente, si llega a autorizarse: `fix/descripcion-breve`.

Los nombres se escriben en minúsculas, sin tildes, con palabras separadas por guiones.

## Commits

Cada commit debe representar un cambio coherente y relacionado con la tarea. El mensaje debe explicar la intención de forma breve; no debe usar expresiones genéricas como `cambios`, `avance` o `fix` sin contexto.

## Documentos

- Los documentos de proyecto se escriben en Markdown UTF-8.
- Los archivos institucionales originales conservan su nombre canónico y formato.
- No se duplican especificaciones: la Issue enlaza la ficha de tarea y el Pull Request enlaza ambos.
- Las decisiones técnicas relevantes se registran mediante ADR.

## Estados de trabajo

```text
BORRADOR -> APROBADO -> READY -> EN CURSO -> EN REVISIÓN -> TERMINADO
```

Un cambio de estado no amplía el alcance de una tarea.
