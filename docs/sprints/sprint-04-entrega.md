# Sprint 04 — Entrega

**Estado:** Pendiente
**Rama:** `sprint/04-entrega`

## Objetivo

Congelar funcionalidad, corregir defectos relevantes y preparar exclusivamente las evidencias y entregables exigidos para la evaluación de la Etapa I.

## Fuentes y requerimientos

- Rúbrica Etapa 1.
- Evaluación práctica semana 6.
- Formato institucional del plan de pruebas.
- Evaluación de empleabilidad.
- Los ocho requerimientos oficiales.
- `docs/project/ESPECIFICACION_CANONICA.md`.

## Precondiciones

- Sprint 03 aprobado e integrado a `main`.
- Los ocho requerimientos implementados.
- No existen nuevas funciones autorizadas para esta etapa.

## Regla de feature freeze

Desde el inicio de este sprint:

- no se agregan funciones nuevas;
- no se cambia el stack;
- no se rediseña la arquitectura;
- no se hace refactorización estética amplia;
- solo se corrigen defectos, se completan pruebas, evidencias y documentación obligatoria.

## Bloques de trabajo

1. **QA de los ocho requerimientos**
   - recorrer CA-01, GU-01, GU-02, GU-03, RE-01, RE-02, RE-03 y AP-01;
   - corregir únicamente fallos que afecten requisitos, ejecución o demostración;
   - registrar limitaciones reales que no impidan el alcance docente.

2. **Plan de pruebas final**
   - completar `docs/academico/plan-pruebas.md` con resultados obtenidos reales;
   - incluir número/nombre de caso, módulo, entrada, esperado, obtenido y Correcto/Fallo;
   - adjuntar o referenciar evidencias simples: consola, capturas o reporte automático;
   - completar conclusión y observaciones.

3. **Trazabilidad requisito → código → prueba**
   - crear o completar una tabla de entrega que identifique, para cada ID oficial, los archivos/rutas principales donde está implementado y la prueba asociada;
   - esta trazabilidad cubre la necesidad de que el código de cada requerimiento sea claramente identificable;
   - no duplicar el código en ocho scripts independientes salvo instrucción expresa del docente.

4. **Documentación interna y externa mínima**
   - revisar nombres y comentarios necesarios en el código;
   - completar README con requisitos previos, variables, arranque, Docker Compose, ejecución de pruebas y recorrido básico de demostración;
   - no generar documentación empresarial adicional.

5. **Evidencias académicas y presentación**
   - organizar evidencias de actividades 1.2 a 1.5;
   - dejar disponible el script final de base de datos;
   - preparar contenido necesario para PPT del proyecto;
   - preparar el informe de empleabilidad con los puntos exigidos por la rúbrica.

6. **Prueba de entrega limpia**
   - comprobar que el proyecto pueda levantarse siguiendo el README;
   - ejecutar las pruebas automáticas;
   - comprobar MySQL y Docker Compose;
   - revisar secretos, archivos accidentales y estado Git;
   - realizar una demostración manual completa.

## Incluido

- correcciones de defectos relevantes;
- ejecución final de pruebas;
- plan de pruebas completo;
- evidencias 1.2 a 1.5;
- trazabilidad de los ocho requerimientos;
- README final;
- script de base de datos definitivo;
- material de PPT e informe de empleabilidad requeridos;
- instrucciones de ejecución y demostración.

## Fuera de alcance

- nuevas funcionalidades;
- rediseño visual;
- nuevas APIs;
- exportaciones;
- despliegue productivo;
- CI/CD complejo;
- refactorizaciones sin impacto en la rúbrica;
- mejoras pensadas para una etapa futura.

## Archivos o áreas esperadas

```text
README.md
docs/academico/requerimientos.md
docs/academico/plan-pruebas.md
docs/academico/trazabilidad-entrega.md
docs/academico/evidencias/
database/schema.sql
```

La presentación puede mantenerse fuera del código fuente si el formato final del Aula Virtual lo exige; el repositorio debe conservar al menos el contenido y evidencia necesaria para reconstruir la entrega.

## Criterios de aceptación

- los ocho requerimientos se demuestran sobre una instalación reproducible;
- `docker compose up` o las instrucciones equivalentes documentadas funcionan desde un entorno limpio razonable;
- las pruebas automáticas acordadas pasan o los fallos reales están documentados;
- el plan de pruebas usa el formato solicitado por el docente y contiene resultados reales;
- cada requisito tiene código y prueba claramente localizables;
- README contiene instrucciones suficientes;
- no hay secretos ni credenciales reales en Git;
- los entregables de semana 6 están preparados;
- no se agregó funcionalidad fuera de alcance.

## Pruebas y evidencia

Ejecutar y registrar:

- arranque completo;
- inicialización MySQL;
- login;
- gestión de usuarios;
- entrada/salida;
- tres reportes;
- AP-01;
- suite automática;
- recorrido manual de demostración;
- revisión final contra rúbrica.

## Condiciones de parada

Detenerse si una corrección exige rediseñar arquitectura, agregar una función nueva o interpretar una ambigüedad docente que cambie el alcance.

## Handoff obligatorio

Informar rama, último commit, fallos corregidos, pruebas ejecutadas, entregables preparados, limitaciones conocidas y estado de la demostración. Hacer push y detenerse; no hacer merge a `main` sin revisión final.

## Resultado

Pendiente. Se completa al cerrar la fase con hechos y pruebas reales.
