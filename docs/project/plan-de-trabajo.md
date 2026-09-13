# Plan de trabajo reducido

## Principio

Se ejecuta una fase a la vez. Cada fase corresponde a un avance académico y produce un resultado demostrable. Las fechas calendario se registrarán solo cuando sean confirmadas; por ahora mandan el orden y las semanas indicadas por las pautas.

| Fase | Resultado | Requerimientos o entrega |
| --- | --- | --- |
| Sprint 00 — Base documental | Alcance, reglas, stack y plan de pruebas consolidados. | Pauta 1.2 |
| Sprint 01 — Base de datos | Modelo relacional, script MySQL y datos mínimos de demostración. | Pauta 1.3 |
| Sprint 02 — Núcleo funcional | Acceso, usuarios y marcaciones funcionando. | CA-01, GU-01, GU-02, GU-03; pauta 1.4 |
| Sprint 03 — Reportes y API | Tres reportes, gráficos sencillos y AP-01. | RE-01, RE-02, RE-03, AP-01; pauta 1.5 |
| Sprint 04 — Entrega | Pruebas finales, correcciones, evidencias y presentación. | Evaluación práctica semana 6 |

## Ciclo de una fase

1. Revisar las fuentes relacionadas.
2. Completar el archivo del sprint y aprobar su alcance.
3. Crear la rama `sprint/NN-nombre` desde `main`.
4. Implementar únicamente lo incluido.
5. Ejecutar las pruebas definidas y registrar resultados.
6. Revisar funcionamiento, diff y ausencia de ampliaciones.
7. Integrar a `main` y recién entonces preparar la fase siguiente.

## Ramas y tareas

- `main` contiene la versión estable.
- Existe como máximo una rama de sprint activa.
- Una tarea pequeña se describe dentro del documento del sprint.
- `task/*` y su ficha se usan solo para trabajo paralelo, riesgoso o claramente separable.
- No se exige Issue, tablero o archivo adicional para cada cambio.

## Estados

Solo se utilizan `Pendiente`, `En curso`, `Bloqueado` y `Terminado`.

## Bloqueos

Si una fuente no define una regla necesaria, no se inventa ni se construye una solución más amplia. Se registra la pregunta, se obtiene una decisión humana y se agrega una nota breve a `docs/decisions/`.
