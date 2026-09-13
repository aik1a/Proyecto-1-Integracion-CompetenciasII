# Definición de terminado

## Para una tarea

Una tarea puede declararse terminada cuando:

- se trabajó en la rama correcta;
- se cumplió todo el alcance incluido;
- no se implementó contenido fuera de alcance;
- los criterios de aceptación son verificables;
- se ejecutaron las pruebas exigidas y se registraron sus resultados;
- las pruebas no ejecutadas se declararon expresamente;
- el diff fue revisado por completo;
- no existen secretos ni archivos locales accidentales;
- la documentación afectada está actualizada;
- existe un Pull Request hacia la rama de sprint indicada;
- el Pull Request fue revisado y aprobado.

## Para un sprint

Un sprint puede cerrarse cuando:

- todas las tareas comprometidas están terminadas o se documentó su exclusión;
- la rama del sprint integra solamente trabajo perteneciente a su alcance;
- las validaciones del sprint fueron ejecutadas;
- se actualizó `CIERRE.md` con resultados, pendientes y riesgos;
- existe trazabilidad entre requerimientos, tareas y Pull Requests;
- el Pull Request hacia `main` fue revisado y aprobado.

## Evidencia mínima

Las afirmaciones de funcionamiento deben estar respaldadas por resultados reproducibles. Si una validación manual, prueba funcional o prueba en dispositivo no se ejecutó, debe indicarse de manera explícita.

Los comandos concretos de compilación, análisis y pruebas se definirán cuando se apruebe la arquitectura tecnológica.
