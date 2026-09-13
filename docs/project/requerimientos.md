# Requerimientos del MVP

Este registro resume el alcance operativo. Ante diferencias prevalece la fuente oficial.

| ID | Resultado mínimo verificable | Fase |
| --- | --- | --- |
| CA-01 | Una persona ingresa con correo y contraseña, registra entrada o salida y el sistema guarda usuario, acción, fecha y hora. | Sprint 02 |
| GU-01 | El administrador crea un usuario con los datos mínimos requeridos. | Sprint 02 |
| GU-02 | El administrador modifica los datos permitidos de un usuario. | Sprint 02 |
| GU-03 | El administrador desactiva un usuario sin perder la información necesaria para AP-01. | Sprint 02 |
| RE-01 | Se listan las entradas posteriores a las 09:30 para la fecha consultada. | Sprint 03 |
| RE-02 | Se listan las salidas anteriores a las 17:30 para la fecha consultada. | Sprint 03 |
| RE-03 | Se listan usuarios activos sin entrada ni salida en la fecha consultada. | Sprint 03 |
| AP-01 | Un endpoint de solo lectura responde JSON con empleados filtrados por Activo, Inactivo o Todos. | Sprint 03 |

## Aceptación común

- Las operaciones válidas persisten en MySQL.
- Las entradas inválidas previsibles reciben una respuesta comprensible.
- Las reglas horarias se comprueban mediante pruebas.
- Las pantallas son funcionales y suficientes para la demostración.
- No se agregan variantes ni funciones no descritas.

## Fuentes

- [`sources/originales/01_caso_y_listado_de_requerimientos.docx`](../../sources/originales/01_caso_y_listado_de_requerimientos.docx)
- [`sources/originales/02_rubrica_etapa_1.docx`](../../sources/originales/02_rubrica_etapa_1.docx)
- Pautas 1.2 a 1.5 en `sources/originales/03_...` a `06_...`.
- [`sources/originales/07_evaluacion_practica_semana_6.docx`](../../sources/originales/07_evaluacion_practica_semana_6.docx)
