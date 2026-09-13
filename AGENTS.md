# Reglas para agentes

Estas reglas aplican a todo el repositorio. El objetivo es un MVP funcional y defendible por estudiantes de segundo año. Está prohibido tratarlo como un producto empresarial.

## Antes de trabajar

1. Confirmar checkout, remoto, rama, `HEAD` y árbol limpio.
2. Leer `docs/project/ESPECIFICACION_CANONICA.md` completo.
3. Leer `docs/sprints/README.md` y el archivo de la fase activa en `docs/sprints/`.
4. Identificar los requerimientos autorizados para esa fase.
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

## Ejecución por sprint

- Solo puede existir una fase activa.
- Cada fase tiene una rama `sprint/NN-nombre` creada desde `main` estable.
- El archivo del sprint es el contrato de ejecución del agente para esa rama.
- Los bloques internos del sprint se realizan secuencialmente en la misma rama.
- `task/*` se usa solo si el orquestador lo autoriza para trabajo paralelo, riesgoso o claramente separable.
- No se adelantan requisitos de fases futuras.
- No se modifica `main` directamente.
- El agente de código no abre la fase siguiente por iniciativa propia.

## Ciclo obligatorio del agente de código

1. Verificar estado Git y leer la documentación obligatoria.
2. Confirmar la rama del sprint.
3. Implementar únicamente los bloques autorizados en el orden indicado.
4. Ejecutar las pruebas exigidas por el sprint.
5. Revisar `git diff` y detectar cambios accidentales o ampliaciones de alcance.
6. Actualizar en el mismo archivo del sprint la sección `Resultado` con pruebas reales, limitaciones y pendientes.
7. Hacer commits claros y push de la rama.
8. Detenerse y entregar el handoff al orquestador.

El handoff debe indicar como mínimo:

- rama y último commit;
- archivos principales modificados;
- qué bloques se completaron;
- comandos de pruebas ejecutados y resultado real;
- problemas o decisiones pendientes;
- confirmación de que no se adelantó trabajo de otra fase.

El agente no debe hacer merge a `main` salvo instrucción explícita del orquestador.

## Antes de commit o handoff

Obligatorio:

1. Revisar `git diff`.
2. Ejecutar las pruebas aplicables.
3. Ejecutar build o arranque cuando corresponda.
4. Comprobar el flujo afectado.
5. Revisar que no haya archivos accidentales.
6. Revisar que no haya secretos.

Nunca se debe afirmar una prueba no ejecutada. Si una prueba no pudo ejecutarse, se declara expresamente.

## Cierre de fase

Una fase solo se considera lista para revisión cuando:

- funciona todo su alcance autorizado;
- pasan las pruebas acordadas o se documentan fallos reales;
- existe evidencia suficiente para la pauta correspondiente;
- el diff fue revisado;
- no hay ampliaciones de alcance;
- el archivo del sprint refleja el resultado real.

Después del handoff, el orquestador revisa la rama. Solo tras aprobación y merge a `main` puede comenzar el sprint siguiente.
