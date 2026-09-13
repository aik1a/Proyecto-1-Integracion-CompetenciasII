# Sprint 00 — Base y clases iniciales

**Estado:** En curso
**Rama:** `sprint/00-base-clases`

## Objetivo

Completar el avance 1.2 con una base técnica mínima ejecutable, clases iniciales simples, documento académico de requerimientos y plan de pruebas preparado según el formato docente.

## Fuentes y requerimientos

- Pauta 1.2 — Avance #1.
- Caso y listado de requerimientos.
- Formato docente del plan de pruebas unitarias.
- `docs/project/ESPECIFICACION_CANONICA.md`.

No se implementa todavía ningún requerimiento funcional completo.

## Precondiciones

- La consolidación documental debe estar aprobada e integrada a `main`.
- La rama se crea desde ese `main` estable.
- No debe existir otra fase activa.

## Bloques de trabajo

1. **Bootstrap mínimo del proyecto**
   - inicializar Node.js + Express + JavaScript;
   - crear la estructura mínima autorizada por la especificación;
   - agregar scripts básicos de arranque y pruebas;
   - crear `.env.example` sin secretos;
   - dejar una ruta o respuesta mínima que permita comprobar que la aplicación inicia.

2. **POO inicial**
   - crear únicamente las clases básicas necesarias para representar el caso, por ejemplo `Usuario` y `Marcacion`;
   - mantener atributos y métodos mínimos;
   - no crear jerarquías, interfaces ni patrones artificiales.

3. **Entregable académico de requerimientos**
   - crear `docs/academico/requerimientos.md`;
   - registrar los ocho IDs oficiales y su descripción sin ampliar el producto;
   - enlazar cada requisito con el sprint donde será implementado.

4. **Plan de pruebas preparado**
   - crear `docs/academico/plan-pruebas.md` siguiendo la plantilla institucional;
   - incluir introducción, objetivo, alcance, herramientas, casos planificados, criterios de aceptación, espacio para evidencias y conclusión/observaciones;
   - no inventar resultados de pruebas que todavía no se han ejecutado.

Los bloques se realizan en este orden y dentro de la misma rama.

## Incluido

- proyecto mínimo ejecutable;
- POO inicial sencilla;
- documento académico de requerimientos;
- estructura inicial del plan de pruebas;
- instrucciones breves de arranque para esta fase.

## Fuera de alcance

- login funcional completo;
- CRUD de usuarios;
- marcaciones persistidas;
- base de datos implementada;
- reportes;
- API AP-01;
- diseño visual avanzado;
- Docker Compose con MySQL, que se completa en Sprint 01.

## Archivos o áreas esperadas

```text
src/
tests/
docs/academico/requerimientos.md
docs/academico/plan-pruebas.md
package.json
.env.example
```

La estructura exacta puede ser más pequeña; no se crean carpetas vacías por anticipación.

## Criterios de aceptación

- la aplicación inicia sin errores siguiendo instrucciones breves;
- las clases iniciales usan POO sencilla y representan solo conceptos del caso;
- los ocho requerimientos aparecen correctamente en el documento académico;
- el plan de pruebas contiene todas las secciones exigidas por el formato docente;
- no existe implementación adelantada de Sprint 01, 02 o 03.

## Pruebas y evidencia

- ejecutar el arranque básico de la aplicación;
- ejecutar la suite de pruebas aunque inicialmente sea mínima;
- revisar manualmente las clases y documentos generados;
- registrar solo resultados reales en `Resultado`.

## Condiciones de parada

Detenerse si para continuar se necesita inventar un dato del caso, cambiar el stack autorizado o implementar una función perteneciente a otra fase.

## Handoff obligatorio

Informar rama, último commit, archivos creados, comandos ejecutados, resultados reales y cualquier pendiente. Hacer push y detenerse; no hacer merge a `main`.

## Resultado

Pendiente. Se completa al cerrar la fase con hechos y pruebas reales.
