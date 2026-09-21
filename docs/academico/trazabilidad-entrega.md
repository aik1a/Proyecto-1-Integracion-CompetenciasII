# Trazabilidad de entrega

Esta tabla localiza cada requisito oficial sin duplicar el código en scripts separados.

| ID | Implementación principal | Interfaz o ruta | Prueba asociada | Evidencia histórica |
| --- | --- | --- | --- | --- |
| CA-01 | `src/app.js`, `src/services/asistenciaService.js`, `database/schema.sql` | `POST /login`, `GET /asistencia`, `POST /asistencia/marcar` | `tests/sprint02.unit.test.js`, `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-01 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js` | `GET /usuarios/nuevo`, `POST /usuarios` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-02 | `src/app.js`, `src/services/usuarioService.js`, `src/views/pages.js` | `GET /usuarios/:id/editar`, `POST /usuarios/:id` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| GU-03 | `src/app.js`, `src/services/usuarioService.js` | `POST /usuarios/:id/desactivar` | `tests/sprint02.integration.test.js` | GitHub Actions `35119603201` |
| RE-01 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |
| RE-02 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |
| RE-03 | `src/services/reporteService.js`, `src/app.js`, `src/views/pages.js` | `GET /reportes?fecha=AAAA-MM-DD` | `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |
| AP-01 | `src/services/usuarioService.js`, `src/app.js` | `GET /api/empleados?estado=activo|inactivo|todos` | `tests/sprint03.unit.test.js`, `tests/sprint03.integration.test.js` | GitHub Actions `35303900433` |

## Límites de la evidencia

- Los runs indicados son históricos y fueron verificados en GitHub; no son ejecuciones nuevas de Sprint 04.
- El recorrido manual completo, Docker Compose local y las capturas continúan pendientes.
- `database/schema.sql` es el script definitivo de creación de base de datos; `database/seed.sql` contiene datos ficticios de demostración.
