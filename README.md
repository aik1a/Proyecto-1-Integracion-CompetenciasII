# Proyecto 1 Integración de Competencias II

Repositorio de planificación, desarrollo y evidencia del proyecto de Integración de Competencias II.

## Estado actual

El repositorio se encuentra en su fase base. Contiene las fuentes académicas, su versión de consulta en Markdown y las reglas iniciales de trabajo. Todavía no existe un sprint activo, no se ha seleccionado una arquitectura tecnológica y no se ha implementado código del producto.

## Producto solicitado

El caso plantea un producto mínimo viable para controlar la asistencia de una empresa de 25 personas. El sistema deberá cubrir registro de entradas y salidas, administración de usuarios, reportes de atrasos, salidas anticipadas e inasistencias, además de una API de consulta de empleados por estado.

El alcance completo y la transcripción trazable de los requerimientos se encuentran en [`docs/project/`](docs/project/).

## Fuentes

- `sources/originales/`: archivos institucionales canónicos. No se editan.
- `sources/markdown/`: copias derivadas para búsqueda y lectura por agentes.

Si existe una diferencia entre ambas versiones, prevalece el archivo original.

## Flujo de trabajo

```text
task/* -> Pull Request -> sprint/* -> Pull Request de cierre -> main
```

- `main` conserva la versión estable y revisada.
- `sprint/*` integra solamente el alcance aprobado para un sprint.
- `task/*` contiene una tarea acotada para una persona o agente.

Ninguna rama de sprint o tarea se crea hasta que su documentación sea revisada y aprobada.

## Documentación

- [`AGENTS.md`](AGENTS.md): reglas obligatorias para agentes de código.
- [`docs/project/alcance.md`](docs/project/alcance.md): alcance confirmado y límites pendientes.
- [`docs/project/requerimientos.md`](docs/project/requerimientos.md): registro trazable de requerimientos.
- [`docs/project/gobernanza-de-ramas.md`](docs/project/gobernanza-de-ramas.md): estrategia de ramas y Pull Requests.
- [`docs/project/definicion-de-terminado.md`](docs/project/definicion-de-terminado.md): condiciones mínimas de entrega.
- [`docs/project/trazabilidad.md`](docs/project/trazabilidad.md): relación entre fuentes, tareas, ramas y evidencias.

## Próximo hito

Revisar y aprobar esta base antes de definir el Sprint 1.
