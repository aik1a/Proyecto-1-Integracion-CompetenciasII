# Plan de pruebas unitarias

## Introducción

Este plan organiza las comprobaciones del MVP de control de asistencia. Su propósito es detectar errores en cada módulo antes de integrarlo con el resto del sistema y dejar evidencia reproducible de los resultados.

## Objetivo de las pruebas unitarias

Validar de manera individual las reglas y funciones principales del sistema, comprobando que cada resultado coincida con lo esperado y que las entradas previsiblemente inválidas se rechacen de forma controlada.

## Alcance

Se planifican pruebas para:

- clases iniciales `Usuario` y `Marcacion`;
- acceso con correo y contraseña;
- creación, modificación y desactivación de usuarios;
- reglas de entrada, salida, atraso, salida anticipada e inasistencia;
- filtro de empleados por estado.

La conexión con MySQL y los recorridos HTTP completos se comprobarán mediante pruebas de integración en las fases correspondientes. No se incluyen pruebas de carga, seguridad avanzada ni una suite E2E extensa.

## Herramientas de prueba

- Lenguaje: JavaScript.
- Ejecutor unitario: módulo nativo `node:test` de Node.js.
- Aserciones: módulo nativo `node:assert`.
- Pruebas HTTP iniciales: `fetch` incorporado en Node.js.

## Casos de prueba

Los casos de las clases iniciales se ejecutaron en Sprint 00 y los casos funcionales se incorporaron en sus fases correspondientes.

| Caso N° | Nombre del caso | Módulo/Función | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| PU-001 | Crear usuario válido | `Usuario` | Identificador, nombre, correo y perfil válidos | Se construye un usuario activo | Se construyó un empleado activo | Correcto |
| PU-002 | Rechazar perfil inválido | `Usuario` | Perfil distinto de administrador o empleado | Se rechaza la creación | Se rechazó el perfil `supervisor` | Correcto |
| PU-003 | Crear marcación válida | `Marcacion` | Usuario, acción entrada y fecha válida | Se construye una marcación | Se construyó una entrada con objeto `Date` | Correcto |
| PU-004 | Rechazar acción inválida | `Marcacion` | Acción distinta de entrada o salida | Se rechaza la marcación | Se rechazó la acción `pausa` | Correcto |
| PU-005 | Validar credenciales | Acceso | Contraseña correcta e incorrecta frente a un hash `scrypt` | Se autoriza solo la contraseña correcta | Se validó la contraseña correcta y se rechazó la incorrecta | Correcto |
| PU-006 | Rechazar salida sin entrada | Regla de marcación | Salida sin entrada previa en la fecha | Se rechaza la salida | Se rechazó con mensaje controlado | Correcto |
| PU-007 | Detectar atraso | Regla de horario | Entradas 09:30 y 09:31 | 09:30 no es atraso y 09:31 sí | Los dos límites se clasificaron correctamente | Correcto |
| PU-008 | Detectar salida anticipada | Regla de horario | Salidas 17:29 y 17:30 | 17:29 es anticipada y 17:30 no | Los dos límites se clasificaron correctamente | Correcto |
| PU-009 | Filtrar usuarios activos | Filtro de estado | Estado Activo | Se retornan solo usuarios activos | Se aceptó el filtro y la integración devolvió solo activos | Correcto |
| PU-010 | Filtrar todos los usuarios | Filtro de estado | Estado Todos | Se retornan usuarios activos e inactivos | La integración devolvió activos e inactivos | Correcto |

## Criterios de aceptación

Una prueba se considera **Correcta** cuando:

- el resultado obtenido coincide exactamente con el esperado;
- no se generan errores no controlados;
- la prueba puede repetirse con el mismo resultado;
- la función cumple la especificación canónica sin añadir reglas nuevas.

Si cualquiera de estas condiciones no se cumple, su estado será **Fallo** y se registrará la causa.

## Evidencias del desarrollo de las pruebas unitarias

Para cada ejecución se incorporará evidencia verificable, según corresponda:

- salida de `npm test` en consola;
- fragmentos del código de prueba;
- capturas de pantalla;
- informes automáticos sencillos.

Evidencia de Sprint 00: `node --test` ejecutó cinco pruebas, incluidas PU-001 a PU-004 y la respuesta HTTP de `/salud`; resultado: cinco correctas y cero fallos.

Evidencia local de Sprint 01: `npm test` ejecutó las cinco pruebas anteriores más una comprobación estructural de `database/schema.sql`; resultado: seis correctas y cero fallos. La integración no pudo comprobarse localmente por ausencia de MySQL y Docker.

Evidencia reproducible de Sprint 01: el workflow `Sprint 01 - Validacion MySQL` se ejecutó en GitHub Actions run `35058288461` con MySQL 8.4 y Node 20.20.2. `database/schema.sql` se aplicó desde cero; `npm test` obtuvo 6/6 pruebas correctas; `npm run test:db` obtuvo 1/1 prueba correcta y verificó conexión, tablas, claves y restricciones principales; la aplicación inició, respondió en `/salud`, confirmó la conexión con MySQL y se cerró de forma controlada. GitHub Actions se usa únicamente como entorno de pruebas de este sprint, no como infraestructura productiva ni pipeline de despliegue.

Evidencia reproducible de Sprint 02: el workflow `Sprint 02 - Validacion funcional MySQL` run `35119603201` se ejecutó con MySQL 8.4 y Node 20.20.2. `npm test` obtuvo 11/11 pruebas correctas. `npm run test:db` obtuvo 2/2 pruebas correctas y comprobó schema, acceso correcto e incorrecto, pantallas autenticadas, creación, modificación y desactivación de usuarios, restricción de rol, entrada, salida, secuencias inválidas y persistencia MySQL. La aplicación inició y la pantalla `/login` respondió correctamente. `npm audit --audit-level=high` se ejecutó localmente después de actualizar `mysql2` y reportó 0 vulnerabilidades.

Evidencia reproducible de Sprint 03: el workflow `Sprint 03 - Reportes y API MySQL` run `35300816939` se ejecutó con MySQL 8.4 y Node 20.20.2. `npm test` obtuvo 15/15 pruebas correctas. `npm run test:db` obtuvo 3/3 pruebas correctas y mantuvo aprobadas las integraciones anteriores. La prueba de Sprint 03 verificó los límites 09:30/09:31 y 17:29/17:30, usuarios activos con y sin marcaciones, exclusión de inactivos en RE-03, acceso administrativo a reportes, filtros activo/inactivo/todos, filtro inválido, contrato JSON y ausencia de modificaciones por AP-01. La aplicación inició y confirmó la conexión con MySQL. La revisión local con `npm audit --audit-level=high` reportó 0 vulnerabilidades.

Validación final de Sprint 03: GitHub Actions run `35303900433`, ejecutado sobre el commit `f390f3d4b73211dbfd16bd7338d62b37dc30a350`, terminó con resultado `success`. `npm test` mantuvo 15/15 pruebas correctas y `npm run test:db` mantuvo 3/3 pruebas de integración correctas con MySQL 8.4. AP-01 con `estado=todos` comprobó explícitamente la presencia de usuarios activos e inactivos, además de conservar las validaciones de `activo`, `inactivo`, filtro inválido, contrato JSON y ausencia de modificación de datos.

El 16 de septiembre de 2026 se intentó el recorrido visual manual con navegador. No pudo ejecutarse porque el navegador remoto no admitía acceso al servidor local del checkout y, en ese momento, el entorno local no disponía de MySQL ni Docker. Posteriormente, Docker fue estabilizado e integrado en `main`. Esta mejora no constituye evidencia de que el recorrido visual manual completo se haya ejecutado; dicha evidencia continúa pendiente. La cobertura registrada corresponde a la integración HTTP automatizada del workflow indicado.

## Casos de integración y requisitos

Los resultados siguientes corresponden a ejecuciones históricas verificadas en GitHub Actions. No constituyen una nueva ejecución de Sprint 04.

| Caso N° | Nombre del caso | Módulo/Función | Datos de entrada | Resultado esperado | Resultado obtenido | Estado | Evidencia |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IT-001 | Acceso y asistencia | CA-01 | Credenciales válidas e inválidas; entrada, repetición y salida | Autenticar solo al activo, persistir secuencia válida y rechazar secuencias inválidas | Flujo HTTP y persistencia MySQL aprobados | Correcto | Run `35119603201` |
| IT-002 | Crear usuario | GU-01 | Datos válidos de empleado | Validar, proteger contraseña, guardar y confirmar | Creación y hash comprobados | Correcto | Run `35119603201` |
| IT-003 | Modificar usuario | GU-02 | Cambio de nombre conservando contraseña | Validar, guardar y permitir acceso posterior | Modificación y acceso aprobados | Correcto | Run `35119603201` |
| IT-004 | Desactivar usuario | GU-03 | Usuario activo | Cambiar a Inactivo e impedir ingreso | Desactivación e ingreso rechazado comprobados | Correcto | Run `35119603201` |
| IT-005 | Reporte de atrasos | RE-01 | Entradas 09:30 y 09:31 | Excluir 09:30 e incluir 09:31 | Límites y tabla HTML comprobados | Correcto | Run `35303900433` |
| IT-006 | Reporte de salidas anticipadas | RE-02 | Salidas 17:29 y 17:30 | Incluir 17:29 y excluir 17:30 | Límites y tabla HTML comprobados | Correcto | Run `35303900433` |
| IT-007 | Reporte de inasistencias | RE-03 | Activo sin marcas e inactivo sin marcas | Incluir solo al activo sin marcaciones | Inclusión y exclusión comprobadas | Correcto | Run `35303900433` |
| IT-008 | API de empleados por estado | AP-01 | `activo`, `inactivo`, `todos` e inválido | Retornar JSON filtrado, responder 400 al inválido y no modificar datos | Contrato, filtros y ausencia de modificación comprobados | Correcto | Run `35303900433` |

## Verificación de entrega de Sprint 04

| Verificación | Resultado real de esta fase | Estado |
| --- | --- | --- |
| Revisión estática de los ocho requisitos | Rutas, servicios y pruebas asociados quedaron localizados en la trazabilidad final | Completada |
| Revisión de secretos y archivos accidentales | Árbol remoto revisado; `.env` está ignorado y solo existe `.env.example` con valores ficticios | Completada |
| Suite `npm test` | No ejecutada en esta fase: el entorno disponible opera mediante API remota de GitHub y no ofrece ejecución de comandos | Pendiente |
| Integración `npm run test:db` | No ejecutada en esta fase por la misma limitación; se conservan separadamente los runs históricos | Pendiente |
| Docker Compose local | No ejecutado en esta fase; requiere Docker en un equipo local | Pendiente |
| Recorrido manual completo y capturas | No ejecutado; una prueba HTTP no equivale a demostración manual | Pendiente |
## Conclusión y observaciones

Las ejecuciones históricas registradas cubren las clases, el schema, el núcleo funcional y los ocho requisitos. En Sprint 04 se completó la revisión documental y de trazabilidad, pero no se ejecutaron nuevamente las suites, Docker Compose ni la demostración manual debido a las capacidades del entorno remoto. Antes de la entrega docente siguen pendientes una ejecución limpia local, el recorrido manual completo y sus capturas.
