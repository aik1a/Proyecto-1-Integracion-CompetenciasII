# Trazabilidad de entrega

Esta tabla localiza cada requisito oficial sin duplicar el código en scripts separados.

| ID | Implementación principal | Interfaz o ruta | Prueba asociada | Evidencia histórica |
| --- | --- | --- | --- | --- |
| CA-01 | `src/app.js`, `src/services/asistenciaService.js`, `src/db/connection.js`, `compose.yml`, `database/schema.sql` | `POST /login`, `GET /asistencia`, `POST /asistencia/marcar` | `tests/sprint02.unit.test.js`, `tests/sprint02.integration.test.js`, `tests/sprint04.integration.test.js` | GitHub Actions `35119603201`; QA-001/002 aún sin MySQL |
| GU-01 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js` | `GET /usuarios/nuevo`, `POST /usuarios` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-02 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js` | `GET /usuarios/:id/editar`, `POST /usuarios/:id` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-03 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js`; FK `ON DELETE RESTRICT` en `database/schema.sql` | `POST /usuarios/:id/desactivar` y `POST /usuarios/:id/eliminar`, confirmaciones distintas | `tests/sprint04.unit.test.js`, `tests/sprint04.integration.test.js` | Pruebas unitarias correctas; eliminación MySQL y cancelación manual pendientes |
| RE-01 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js`, `compose.yml` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.unit.test.js`, `tests/sprint04.unit.test.js`, `tests/sprint04.integration.test.js` | GitHub Actions `35303900433`; nuevo QA MySQL pendiente |
| RE-02 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js`, `compose.yml` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.unit.test.js`, `tests/sprint04.unit.test.js`, `tests/sprint04.integration.test.js` | GitHub Actions `35303900433`; nuevo QA MySQL pendiente |
| RE-03 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js`, `compose.yml` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.integration.test.js`, `tests/sprint04.unit.test.js`, `tests/sprint04.integration.test.js` | GitHub Actions `35303900433`; nuevo QA MySQL pendiente |
| AP-01 | `src/services/usuarioService.js`, `src/app.js` | `GET /api/empleados?estado=activo|inactivo|todos` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |

## Límites de la evidencia

- Los runs indicados son históricos y fueron verificados en GitHub; no son ejecuciones nuevas de Sprint 04.
- El run `35686264057` fue `success` sobre `sprint/04-entrega` en `fb6d3965c5acddd94d461218bfa0c42bb6a0c127`; no valida el HEAD de estas correcciones.
- El recorrido manual completo, Docker Compose local y las capturas continúan pendientes.
- `database/schema.sql` es el script definitivo de creación de base de datos; `database/seed.sql` contiene datos ficticios de demostración.

## Hallazgos de QA pendientes de implementación

| Alcance | Hallazgo y decisión | Impacto en trazabilidad |
| --- | --- | --- |
| CA-01, RE-01, RE-02, RE-03 | `TZ=America/Santiago` configurado en ambos contenedores; fechas MySQL leídas sin conversión de `Date`. | Pruebas QA-001/002/003 preparadas; falta ejecutarlas con Docker/MySQL. |
| RE-01, RE-02, RE-03 | Vista presenta `dd-mm-aaaa`, consulta mantiene `AAAA-MM-DD`. | QA-004 unitaria correcta; HTTP MySQL pendiente. |
| GU-03 | **Eliminar** físico y **Desactivar** lógica separados y confirmados. | QA-005/006/007 unitarias correctas; MySQL y cancelación manual pendientes. |

La precarga de la fecha actual en Reportes, calculada con `America/Santiago` y sin consulta automática, queda clasificada como mejora UX post-Sprint 04 de bajo riesgo, no como requisito docente. La aparición de `Administrador demo` en RE-03 permanece como decisión de dominio pendiente y no se registra como defecto confirmado.
