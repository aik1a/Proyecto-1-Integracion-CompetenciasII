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

El 16 de septiembre de 2026 se intentó el recorrido visual manual con navegador. No pudo ejecutarse porque el navegador remoto no admite acceso al servidor local del checkout y el entorno local no dispone de MySQL ni Docker. Esta limitación no reemplaza el recorrido manual pendiente; la cobertura disponible corresponde a la integración HTTP automatizada del workflow indicado.

## Conclusión y observaciones

Las clases iniciales, el schema, el núcleo funcional de Sprint 02 y los reportes y API de Sprint 03 funcionaron sin fallos en las ejecuciones finales registradas. Las capturas visuales manuales de los tres reportes siguen pendientes por falta de un navegador conectado al entorno MySQL de prueba.
