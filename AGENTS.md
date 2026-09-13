# Reglas para agentes

Estas reglas aplican a todo el repositorio. El objetivo es entregar un MVP universitario funcional, comprensible y defendible por estudiantes de segundo año. Está prohibido convertirlo en un producto empresarial o ampliar su alcance por iniciativa del agente.

## Antes de trabajar

1. Confirmar checkout, remoto, rama, `HEAD` y estado del árbol.
2. Leer este archivo y el documento de la fase activa en `docs/sprints/`.
3. Identificar los requerimientos oficiales relacionados.
4. Detenerse si la rama, el alcance o una regla funcional no están definidos.

## Autoridad documental

1. `sources/originales/` contiene la evidencia académica canónica y no se modifica.
2. `sources/markdown/` facilita la consulta; ante diferencias prevalece el original.
3. `docs/project/` contiene el alcance y el plan consolidados.
4. `docs/decisions/` resuelve únicamente ambigüedades necesarias para construir el MVP.
5. `docs/sprints/` define qué puede ejecutarse en cada fase.

Una conversación o sugerencia no forma parte del proyecto hasta quedar aprobada y registrada en GitHub.

## Regla contra la sobreingeniería

Una actividad solo está autorizada si satisface un requerimiento oficial, una pauta, la rúbrica o una necesidad mínima para ejecutar y probar el MVP.

El agente no debe agregar:

- funcionalidades no solicitadas;
- capas, patrones o abstracciones para necesidades hipotéticas;
- microservicios, infraestructura productiva o automatización compleja;
- paneles, exportaciones, notificaciones o integraciones adicionales;
- documentación que repita otra fuente;
- refactorizaciones amplias no requeridas por la fase;
- story points, burndown, velocidad o porcentajes automáticos.

Una mejora opcional se informa como observación y no se implementa.

## Calidad esperada

La calidad corresponde a un buen proyecto de segundo año:

- funciona de extremo a extremo en los casos evaluados;
- el código es sencillo, legible y coherente;
- valida las entradas previsibles y muestra errores comprensibles;
- usa consultas SQL parametrizadas y no guarda contraseñas en texto plano;
- no contiene secretos, credenciales reales ni datos personales innecesarios;
- prueba las reglas de negocio importantes;
- puede ser explicado por el equipo;
- puede ejecutarse desde cero siguiendo instrucciones breves.

No se exige perfección empresarial, cobertura total, optimización prematura, compatibilidad masiva ni diseño visual avanzado.

## Forma de trabajo

- Solo puede existir una fase activa.
- La rama normal es `sprint/NN-nombre`.
- Las tareas pequeñas se trabajan directamente en esa rama.
- Se crea `task/*` únicamente para trabajo paralelo, riesgoso o claramente separable.
- No se adelanta trabajo de fases posteriores.
- No se modifica `main` directamente.
- Los cambios deben ser pequeños y relacionados con el objetivo de la fase.

## Pruebas y entrega

1. Ejecutar las validaciones definidas para la fase.
2. Registrar resultados reales; nunca afirmar una prueba no ejecutada.
3. Revisar el diff y confirmar que no existe ampliación de alcance.
4. Informar brevemente cambios, pruebas, limitaciones y pendientes.
5. Detenerse cuando se cumplen los criterios de aceptación.

Una fase termina cuando sus requerimientos funcionan, pasan las pruebas acordadas, existe evidencia suficiente y no quedan fallos relevantes para la siguiente fase.
