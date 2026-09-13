# Sprint 03 — Reportes y API

**Estado:** Pendiente
**Rama:** `sprint/03-reportes-api`

## Objetivo

Implementar los tres reportes solicitados y AP-01 sobre la base ya funcional, con presentación visual simple y pruebas de integración.

## Fuentes y requerimientos

- RE-01, RE-02 y RE-03.
- AP-01.
- Pauta 1.5 — Avance #4.
- `docs/project/ESPECIFICACION_CANONICA.md`.

## Precondiciones

- Sprint 02 aprobado e integrado a `main`.
- Login, usuarios y marcaciones funcionando con MySQL.
- Datos de prueba suficientes para validar horarios, ausencias y estados.

## Decisión mínima de AP-01

Se fija para esta fase el contrato mínimo:

```http
GET /api/empleados?estado=activo
GET /api/empleados?estado=inactivo
GET /api/empleados?estado=todos
```

Respuesta: arreglo JSON de empleados con los campos mínimos `id`, `nombre`, `correo` y `estado`.

El endpoint es solo de lectura. Un filtro inválido debe responder con error de validación comprensible y no modificar datos.

## Bloques de trabajo

1. **RE-01 — Atrasos**
   - consultar entradas posteriores a las 09:30;
   - mostrar identificador/usuario y fecha correspondiente;
   - usar datos reales de MySQL.

2. **RE-02 — Salidas anticipadas**
   - consultar salidas anteriores a las 17:30;
   - mostrar identificador/usuario y fecha correspondiente.

3. **RE-03 — Inasistencias**
   - para una fecha consultada, identificar usuarios activos sin entrada ni salida;
   - no modelar turnos, feriados ni calendarios especiales.

4. **Presentación visual funcional**
   - mostrar los tres reportes mediante pantallas y tablas simples;
   - incluir selección de fecha o período solo en la medida mínima necesaria para ejecutar la consulta;
   - no agregar dashboard analítico ni gráficos estadísticos salvo confirmación docente posterior.

5. **AP-01**
   - implementar el endpoint definido arriba;
   - filtrar Activo, Inactivo o Todos;
   - devolver JSON y no alterar datos.

6. **Pruebas y evidencia**
   - probar límites horarios;
   - validar inasistencias con datos conocidos;
   - probar los tres filtros de AP-01 y filtro inválido;
   - ejecutar integración con MySQL;
   - registrar resultados reales y capturas mínimas.

## Incluido

- RE-01, RE-02 y RE-03;
- tablas/pantallas simples para reportes;
- AP-01 de solo lectura;
- pruebas unitarias e integración relevantes;
- evidencia de la pauta 1.5.

## Fuera de alcance

- gráficos estadísticos no confirmados;
- dashboard;
- exportar PDF/Excel;
- filtros avanzados;
- paginación avanzada;
- edición de marcaciones;
- tiempo real;
- endpoints adicionales a AP-01.

## Archivos o áreas esperadas

```text
src/routes/
src/services/
src/db/
src/views/ o src/public/
tests/
docs/academico/plan-pruebas.md
```

No se crean módulos generales de analítica ni capas nuevas si las consultas pueden mantenerse simples.

## Criterios de aceptación

- 09:30 exacto no se considera atraso; 09:31 sí;
- 17:29 se considera salida anticipada; 17:30 exacto no;
- RE-03 identifica correctamente usuarios activos sin marcaciones para la fecha consultada;
- cada reporte puede demostrarse desde una interfaz simple;
- AP-01 devuelve el conjunto correcto para Activo, Inactivo y Todos;
- AP-01 devuelve JSON con el contrato fijado y no modifica datos;
- existen pruebas unitarias e integración realmente ejecutadas.

## Pruebas y evidencia

Como mínimo registrar:

- borde 09:30 / 09:31;
- borde 17:29 / 17:30;
- usuario con y sin marcaciones;
- filtros `activo`, `inactivo`, `todos` e inválido;
- comprobación de respuesta JSON;
- consulta real contra MySQL;
- capturas de los tres reportes.

## Condiciones de parada

Detenerse si aparece una necesidad de dashboard, exportación, calendario laboral, nueva API o cualquier regla no contemplada por el caso.

## Handoff obligatorio

Informar rama, último commit, cuatro requerimientos completados, contrato real de AP-01, pruebas ejecutadas y limitaciones. Hacer push y detenerse; no hacer merge a `main`.

## Resultado

Pendiente. Se completa al cerrar la fase con hechos y pruebas reales.
