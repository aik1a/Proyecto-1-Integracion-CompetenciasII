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

Los cuatro casos de las clases iniciales se ejecutaron en Sprint 00. Los casos con estado **Planificado** todavía no se han ejecutado porque corresponden a funciones de fases posteriores.

| Caso N° | Nombre del caso | Módulo/Función | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| PU-001 | Crear usuario válido | `Usuario` | Identificador, nombre, correo y perfil válidos | Se construye un usuario activo | Se construyó un empleado activo | Correcto |
| PU-002 | Rechazar perfil inválido | `Usuario` | Perfil distinto de administrador o empleado | Se rechaza la creación | Se rechazó el perfil `supervisor` | Correcto |
| PU-003 | Crear marcación válida | `Marcacion` | Usuario, acción entrada y fecha válida | Se construye una marcación | Se construyó una entrada con objeto `Date` | Correcto |
| PU-004 | Rechazar acción inválida | `Marcacion` | Acción distinta de entrada o salida | Se rechaza la marcación | Se rechazó la acción `pausa` | Correcto |
| PU-005 | Validar credenciales | Acceso | Correo y contraseña de usuario activo | Se autoriza el acceso | Pendiente de ejecución | Planificado |
| PU-006 | Rechazar salida sin entrada | Regla de marcación | Salida sin entrada previa en la fecha | Se rechaza la salida | Pendiente de ejecución | Planificado |
| PU-007 | Detectar atraso | Regla de horario | Entrada posterior a las 09:30 | Se clasifica como atraso | Pendiente de ejecución | Planificado |
| PU-008 | Detectar salida anticipada | Regla de horario | Salida anterior a las 17:30 | Se clasifica como salida anticipada | Pendiente de ejecución | Planificado |
| PU-009 | Filtrar usuarios activos | Filtro de estado | Estado Activo | Se retornan solo usuarios activos | Pendiente de ejecución | Planificado |
| PU-010 | Filtrar todos los usuarios | Filtro de estado | Estado Todos | Se retornan usuarios activos e inactivos | Pendiente de ejecución | Planificado |

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

Evidencia de Sprint 01: `npm test` ejecutó las cinco pruebas anteriores más una comprobación estructural de `database/schema.sql`; resultado: seis correctas y cero fallos. `npm run test:db` también fue ejecutado, pero su única prueba falló antes de consultar el schema con `ECONNREFUSED 127.0.0.1:3306`, porque el entorno no dispone de MySQL ni Docker. Por tanto, la creación real de la base, sus restricciones y la conexión exitosa siguen pendientes de ejecución en un entorno con Docker; no se declaran correctas.

Se agregó una validación reproducible en GitHub Actions para ejecutar el Sprint 01 con MySQL 8.4 real. Se usa únicamente como entorno de pruebas, no como infraestructura productiva ni pipeline de despliegue. Su resultado permanece pendiente hasta que el workflow se ejecute y sea revisado en GitHub.

## Conclusión y observaciones

Las clases iniciales, la ruta de comprobación y la estructura esperada del schema funcionaron sin fallos en las pruebas disponibles. La prueba de integración con MySQL quedó bloqueada por la ausencia del motor y debe repetirse antes de integrar Sprint 01. Los casos funcionales de fases posteriores continúan planificados.
