# Reglas para agentes

Estas reglas aplican a todo el repositorio. El objetivo es un MVP funcional y defendible por estudiantes de segundo año. Está prohibido tratarlo como un producto empresarial.

## Antes de trabajar

1. Confirmar checkout, remoto, rama, `HEAD` y árbol limpio.
2. Leer `docs/project/ESPECIFICACION_CANONICA.md` completo.
3. Leer el archivo de la fase activa en `docs/sprints/`.
4. Identificar los requerimientos autorizados.
5. Detenerse si existe contradicción o falta una decisión necesaria.

## Autoridad

1. `sources/originales/` es evidencia institucional y no se modifica.
2. `docs/project/ESPECIFICACION_CANONICA.md` es la única interpretación operativa vigente.
3. `docs/sprints/` organiza la ejecución, pero no puede alterar la especificación.
4. `docs/tasks/` limita una tarea opcional, pero tampoco puede ampliar el alcance.

El chat sirve para analizar. Una idea solo entra al proyecto después de aprobación humana y actualización de la especificación canónica.

## Nivel de calidad

Aplicar POO sencilla y buenas prácticas básicas:

- pocas clases con responsabilidades claras;
- nombres comprensibles y código que el equipo pueda explicar;
- validaciones para entradas previsibles;
- consultas SQL parametrizadas;
- contraseñas protegidas y secretos fuera de Git;
- pruebas esenciales de reglas de negocio e integración;
- instrucciones breves para ejecutar desde cero.

No se exige calidad industrial, cobertura total, optimización prematura, compatibilidad masiva ni diseño visual avanzado.

## Prohibiciones

No agregar:

- requisitos o variantes no solicitadas;
- microservicios, arquitectura hexagonal o capas hipotéticas;
- infraestructura productiva, CI/CD complejo o monitoreo;
- ORM, framework frontend o sistema de diseño;
- exportaciones, notificaciones, tiempo real o integraciones extra;
- documentación duplicada, métricas Scrum o reportes automáticos;
- refactorizaciones amplias no requeridas por la fase.

Una mejora opcional se informa y no se implementa.

## Ejecución

- Solo puede existir una fase activa.
- La rama normal es `sprint/NN-nombre`.
- Las tareas pequeñas se trabajan directamente en esa rama.
- `task/*` se usa solo para trabajo paralelo, riesgoso o separable.
- No se adelantan fases ni se modifica `main` directamente.
- Al cumplir criterios y pruebas, el agente registra resultados y se detiene.

Nunca se debe afirmar una prueba no ejecutada. Antes de entregar se revisan el diff, las limitaciones y la ausencia de ampliaciones de alcance.
