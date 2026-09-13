# Proyecto 1 — Integración de Competencias II

MVP académico para controlar la asistencia de una empresa de 25 personas. GitHub es la fuente de verdad; el chat se usa para analizar, pero las decisiones solo entran en vigor cuando quedan registradas aquí.

## Alcance

El sistema incluye únicamente acceso con correo y contraseña, administración básica de usuarios, marcación de entrada y salida, tres reportes con gráficos sencillos, la API REST AP-01 y los entregables académicos asociados.

No se agregan funcionalidades que no estén respaldadas por una fuente oficial o que no sean indispensables para ejecutar y probar el MVP.

## Documentación operativa

- [`AGENTS.md`](AGENTS.md): límites obligatorios.
- [`docs/project/alcance.md`](docs/project/alcance.md): alcance y exclusiones.
- [`docs/project/requerimientos.md`](docs/project/requerimientos.md): ocho requerimientos oficiales.
- [`docs/project/plan-de-trabajo.md`](docs/project/plan-de-trabajo.md): cinco fases.
- [`docs/project/pruebas-evidencias-entrega.md`](docs/project/pruebas-evidencias-entrega.md): calidad y entrega.
- [`docs/project/empleabilidad.md`](docs/project/empleabilidad.md): entrega transversal y pendientes oficiales.
- [`docs/decisions/`](docs/decisions/): decisiones mínimas aprobadas.
- [`docs/sprints/`](docs/sprints/): alcance de cada fase.

Los originales institucionales permanecen sin cambios en `sources/originales/`; `sources/markdown/` contiene copias consultables.

## Flujo reducido

```text
planificar -> documentar la fase -> trabajar en sprint/* -> probar -> revisar -> integrar a main
```

Solo se crea una rama `task/*` para trabajo paralelo o riesgoso. No se usan métricas Scrum, automatizaciones de progreso ni documentación duplicada.

## Estado

La base documental está en consolidación. El desarrollo comienza al aprobar y abrir el Sprint 01.
