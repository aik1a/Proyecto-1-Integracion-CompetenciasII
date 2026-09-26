# Trazabilidad de entrega

Esta tabla localiza cada requisito oficial sin duplicar el código en scripts separados.

| ID | Implementación principal | Interfaz o ruta | Prueba asociada | Evidencia histórica |
| --- | --- | --- | --- | --- |
| CA-01 | `src/app.js`, `src/services/asistenciaService.js`, `database/schema.sql` | `POST /login`, `GET /asistencia`, `POST /asistencia/marcar` | `tests/sprint02.unit.test.js`, `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-01 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js` | `GET /usuarios/nuevo`, `POST /usuarios` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-02 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js` | `GET /usuarios/:id/editar`, `POST /usuarios/:id` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-03 | Estado actual: `src/app.js` y `src/services/usuarioService.js` solo desactivan. Corrección pendiente: mantener la baja lógica y agregar eliminación física protegida. | Actual: `POST /usuarios/:id/desactivar`; operación Eliminar pendiente de implementación | Desactivación histórica: `tests/sprint02.integration.test.js`. Pruebas de eliminación y protección pendientes. | GitHub Actions `35119603201` solo evidencia desactivación; no acredita eliminación. |
| RE-01 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |
| RE-02 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |
| RE-03 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |
| AP-01 | `src/services/usuarioService.js`, `src/app.js` | `GET /api/empleados?estado=activo|inactivo|todos` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |

## Límites de la evidencia

- Los runs indicados son históricos y fueron verificados en GitHub; no son ejecuciones nuevas de Sprint 04.
- El recorrido manual completo, Docker Compose local y las capturas continúan pendientes.
- `database/schema.sql` es el script definitivo de creación de base de datos; `database/seed.sql` contiene datos ficticios de demostración.

## Hallazgos de QA pendientes de implementación

| Alcance | Hallazgo y decisión | Impacto en trazabilidad |
| --- | --- | --- |
| CA-01, RE-01, RE-02, RE-03 | Docker guarda o interpreta las marcaciones en UTC. Se debe unificar la operación en `America/Santiago`. | Requiere nueva evidencia de persistencia, cambio de día y límites horarios en Docker; los runs históricos no cubren la corrección. |
| RE-01, RE-02, RE-03 | Las fechas visibles se renderizan como objeto `Date` o GMT crudo. Se deben presentar como `dd-mm-aaaa`. | Requiere prueba de presentación; no cambia el valor técnico `AAAA-MM-DD` usado para consultar. |
| GU-03 | La fuente docente exige **Eliminar usuarios**. **Desactivar** se conserva como operación distinta; **Eliminar** será irreversible, con confirmación y rechazo si existen marcaciones históricas. | La relación `marcaciones.usuario_id` con `ON DELETE RESTRICT` respalda la protección. Falta implementar y vincular las pruebas nuevas. |

La precarga de la fecha actual en Reportes, calculada con `America/Santiago` y sin consulta automática, queda clasificada como mejora UX post-Sprint 04 de bajo riesgo, no como requisito docente. La aparición de `Administrador demo` en RE-03 permanece como decisión de dominio pendiente y no se registra como defecto confirmado.
