# Sprint 02 — Núcleo funcional

**Estado:** Pendiente
**Rama:** `sprint/02-nucleo-funcional`

## Objetivo

Implementar el núcleo usable del MVP: acceso con correo y contraseña, administración mínima de usuarios y registro de entrada/salida con persistencia MySQL.

## Fuentes y requerimientos

- CA-01.
- GU-01, GU-02 y GU-03.
- Pauta 1.4 — Avance #3.
- `docs/project/ESPECIFICACION_CANONICA.md`.

## Precondiciones

- Sprint 01 aprobado e integrado a `main`.
- Base de datos reproducible y conexión comprobada.
- Docker Compose funcional.

## Bloques de trabajo

1. **Acceso y sesión mínima**
   - login con correo y contraseña;
   - hash de contraseña y sesión tradicional;
   - diferenciar administrador y empleado;
   - impedir ingreso de usuarios inactivos.

2. **Gestión de usuarios**
   - GU-01: crear usuario con datos mínimos y validaciones previsibles;
   - GU-02: modificar datos permitidos de un usuario existente;
   - GU-03: desactivar lógicamente al usuario, conservando su historial;
   - restringir estas operaciones al administrador.

3. **Control de asistencia**
   - permitir una entrada y una salida por fecha;
   - guardar identificador, acción, fecha y hora;
   - rechazar salida sin entrada previa;
   - rechazar marcación repetida;
   - mostrar confirmación o error comprensible.

4. **Interfaz funcional mínima**
   - pantalla de login;
   - pantalla simple para entrada/salida del empleado;
   - pantallas o formularios simples para gestión de usuarios del administrador;
   - navegación suficiente para demostrar el flujo, sin sistema de diseño ni acabado avanzado.

5. **Pruebas y evidencia**
   - unitarias para reglas de marcación y validaciones principales;
   - integración mínima para acceso, persistencia y operaciones de usuario;
   - recorrido manual del flujo principal;
   - registrar resultados reales y evidencia.

## Incluido

- login;
- sesiones y roles mínimos;
- GU-01, GU-02 y GU-03;
- CA-01;
- pantallas necesarias para demostrar estos requisitos;
- pruebas unitarias e integración mínima.

## Fuera de alcance

- RE-01, RE-02 y RE-03;
- AP-01;
- recuperación de contraseña;
- verificación de correo;
- permisos configurables;
- edición de marcaciones;
- turnos, feriados o calendarios;
- rediseño visual avanzado.

## Archivos o áreas esperadas

```text
src/routes/
src/services/
src/db/
src/views/ o src/public/
tests/
docs/academico/plan-pruebas.md
```

No se obliga a crear controllers, repositories u otras capas si no son necesarias para mantener el código entendible.

## Criterios de aceptación

- un usuario existente puede iniciar sesión con credenciales válidas;
- un usuario inactivo no puede ingresar;
- solo el administrador gestiona usuarios;
- crear, modificar y desactivar usuarios persiste correctamente;
- un empleado puede registrar una entrada y después una salida válida;
- las secuencias inválidas definidas por la especificación se rechazan;
- las contraseñas no se guardan en texto plano;
- las pantallas permiten demostrar los cuatro requerimientos asignados;
- las pruebas acordadas fueron realmente ejecutadas.

## Pruebas y evidencia

Como mínimo cubrir:

- login correcto e incorrecto;
- usuario inexistente o inactivo;
- crear, modificar y desactivar usuario;
- restricción de rol administrador;
- entrada válida;
- salida válida;
- salida sin entrada;
- entrada o salida repetida;
- persistencia real en MySQL.

## Condiciones de parada

Detenerse si una solución exige adelantar reportes/API, crear permisos avanzados o cambiar decisiones canónicas del flujo de asistencia.

## Handoff obligatorio

Informar rama, último commit, requisitos completados, pantallas disponibles, pruebas ejecutadas y fallos/limitaciones reales. Hacer push y detenerse; no hacer merge a `main`.

## Resultado

Pendiente. Se completa al cerrar la fase con hechos y pruebas reales.
