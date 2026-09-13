# Reglas para agentes

Estas instrucciones aplican a todo el repositorio.

## Antes de trabajar

1. Confirmar la ruta absoluta del checkout.
2. Confirmar el remoto `origin`.
3. Confirmar la rama actual y el commit `HEAD`.
4. Confirmar que el árbol de trabajo esté limpio.
5. Leer este archivo, el documento del sprint y la ficha específica de la tarea.
6. Detenerse si falta la ficha de tarea, si la rama no coincide o si existen instrucciones incompatibles.

## Autoridad documental

- Los archivos de `sources/originales/` son la evidencia académica canónica.
- Los archivos de `sources/markdown/` son copias operativas. Si difieren del original, prevalece el original.
- `docs/project/` define las reglas y límites vigentes del proyecto.
- `docs/sprints/<ID>/SPRINT.md` define el alcance aprobado de un sprint.
- `docs/tasks/<ID>.md` define el trabajo autorizado para una rama de tarea.
- Una tarea no puede ampliar el alcance oficial ni el alcance del sprint.

## Límites de ejecución

- Trabajar exclusivamente en la rama indicada por la ficha de tarea.
- No implementar requisitos que no aparezcan en la sección `Incluido`.
- No adelantar trabajo descrito como `Fuera de alcance`.
- No modificar `sources/originales/` ni `sources/markdown/` durante una tarea de código.
- No modificar documentación de otros sprints o tareas sin autorización explícita.
- No realizar push directo a `main` ni a una rama `sprint/*`.
- Entregar la tarea mediante Pull Request hacia la rama indicada.
- Si aparece trabajo necesario pero no autorizado, registrarlo como observación; no implementarlo.

## Calidad y evidencia

- Ejecutar las validaciones especificadas en la ficha de tarea.
- Registrar los comandos ejecutados y sus resultados reales.
- No afirmar que una prueba fue realizada si no existe evidencia de su ejecución.
- Mantener los cambios mínimos, trazables y relacionados con la tarea.
- Revisar el diff completo antes de entregar.
- No incluir secretos, credenciales, archivos `.env` ni datos personales innecesarios.

## Entrega

El Pull Request debe indicar:

- tarea y requerimientos relacionados;
- resumen de cambios;
- archivos principales modificados;
- pruebas ejecutadas y resultados;
- pruebas no ejecutadas y motivo;
- riesgos, limitaciones o pendientes;
- confirmación de que no se amplió el alcance.

Una tarea se considera terminada solamente cuando cumple su ficha, pasa las validaciones exigidas y su Pull Request ha sido revisado.
