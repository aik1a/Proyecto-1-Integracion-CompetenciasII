# Sprint 04 — Entrega

**Estado:** En curso — validaciones pendientes
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
- Existe una implementación previa declarada para los ocho requerimientos, sujeta a la verificación final de QA de este sprint.
- No existen nuevas funciones autorizadas para esta etapa.

## Regla de feature freeze

Desde el inicio de este sprint:

- no se agregan funciones nuevas;
- no se cambia el stack;
- no se rediseña la arquitectura;
- no se hace refactorización estética amplia;
- solo se corrigen defectos, se completan pruebas, evidencias y documentación obligatoria.

La incorporación de **Eliminar** como operación distinta de **Desactivar** se considera una corrección de cumplimiento de GU-03, no una ampliación funcional: el documento docente exige literalmente eliminar usuarios y la implementación actual solo realiza baja lógica.

## Decisiones de QA autorizadas

### Correcciones obligatorias antes del cierre

1. **Zona horaria bloqueante:** las marcaciones en Docker se están guardando o interpretando en UTC. La aplicación y MySQL deben trabajar coherentemente con `America/Santiago`, incluyendo `NOW()`, `CURDATE()`, el día generado de la marcación y las comparaciones horarias. El defecto afecta CA-01 y puede alterar RE-01, RE-02 y RE-03.
2. **Presentación de fechas:** las fechas de los resultados de Reportes se muestran como objeto `Date` o texto GMT crudo. Deben mostrarse en formato humano `dd-mm-aaaa`, sin cambiar el formato técnico `AAAA-MM-DD` del control de búsqueda ni de las consultas internas.
3. **GU-03:** mantener **Desactivar** como baja lógica y agregar **Eliminar** como borrado físico real. Ambas acciones deben solicitar confirmación. **Eliminar** debe advertir que es irreversible y, si existen marcaciones históricas, debe rechazarse con un mensaje que indique que el usuario puede desactivarse para conservar el historial. La protección debe respetar la relación actual `marcaciones.usuario_id` con `ON DELETE RESTRICT`.

Los tres defectos ya están corregidos en la rama: zona horaria, fechas visibles y eliminación GU-03. La suite unitaria local pasó 19/19; la integración MySQL y Docker aún no se ha validado sobre estas correcciones. El workflow remoto ajustado para `America/Santiago` debe ejecutarse sobre el nuevo HEAD y su resultado real registrarse después.

### Mejora UX posterior / parche menor

- Precargar en Reportes la fecha actual calculada con `America/Santiago`, sin ejecutar la consulta automáticamente.
- Es una mejora de bajo riesgo y no un requisito docente obligatorio; no forma parte de las correcciones bloqueantes del cierre.

### Decisión de dominio pendiente

- La aparición de `Administrador demo` en el reporte de inasistencias queda pendiente de revisión. No se modifica ni se registra como bug confirmado hasta decidir si el perfil administrador pertenece al universo de RE-03.

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

### Bloques completados

1. QA documental de CA-01, GU-01, GU-02, GU-03, RE-01, RE-02, RE-03 y AP-01. Se corrigió el defecto de títulos descrito abajo sin cambiar funcionalidad y se registraron como pendientes los hallazgos posteriores de zona horaria, formato visible de fecha y cumplimiento literal de GU-03.
2. Plan de pruebas completado con casos de integración, evidencia histórica separada y estado real de las verificaciones de esta fase.
3. Trazabilidad requisito → código → ruta → prueba creada en `docs/academico/trazabilidad-entrega.md`.
4. README completado con requisitos previos, variables, ejecución local, Docker Compose, pruebas y recorrido de demostración.
5. Evidencias 1.2 a 1.5 organizadas; contenido de PPT e informe de empleabilidad preparados como material reconstruible.

### Bloque pendiente

6. Prueba de entrega limpia: parcial. La revisión de archivos accidentales y secretos y la suite unitaria se completaron en un checkout temporal. MySQL, Docker Compose y recorrido manual completo siguen pendientes por falta de entorno.

### Pruebas y estado real

- Validación remota histórica de Sprint 03 mediante `workflow_dispatch`: run `35686264057`, rama `sprint/04-entrega`, SHA `fb6d3965c5acddd94d461218bfa0c42bb6a0c127`, conclusión `success`. Ese run no valida el nuevo HEAD de estas correcciones.
- `npm test` en el checkout temporal de estas correcciones: 18/18 correctas en la primera ejecución; 19/19 tras añadir la comprobación de fecha y hora visible.
- `npm run test:db`: ejecutado; 0/4. Los cuatro casos fallaron al conectar por `ECONNREFUSED 127.0.0.1:3306` porque no hay servidor MySQL en este entorno. No son fallos funcionales acreditados.
- Arranque de la aplicación sobre este HEAD: no ejecutado.
- `docker compose config` y `docker compose up --build`: intentados; ambos devolvieron `docker: command not found`.
- Recorrido manual completo: no ejecutado; continúa pendiente junto con las capturas reales.
- Evidencia histórica verificada en GitHub: runs `35058288461`, `35119603201`, `35300816939` y `35303900433`, todos con conclusión `success`. No se presentan como ejecuciones nuevas ni como validación de este HEAD.

### Defectos y correcciones

Se corrigieron previamente los tres títulos visibles de reportes. En este cierre se fijó `TZ=America/Santiago` para app y MySQL en Compose; la conexión de la app obtiene cadenas de fecha/hora sin conversión implícita del driver, mientras `NOW()`, `CURDATE()` y la fecha generada operan sobre el día del servidor MySQL en Chile. Los reportes entregan fecha técnica `AAAA-MM-DD` y la vista la presenta como `dd-mm-aaaa`. Se agregó borrado físico protegido por la clave foránea existente, con confirmación separada de Desactivar. Se añadieron pruebas unitarias y una integración para los ocho casos QA.

### Entregables preparados

- plan final de pruebas;
- trazabilidad de ocho requisitos;
- README de ejecución y demostración;
- índice de evidencias 1.2 a 1.5;
- contenido para presentación;
- borrador verificable del informe de empleabilidad;
- referencia al script definitivo `database/schema.sql`.

### Limitaciones y pendientes

- Verificar `America/Santiago`, la fecha generada, el cambio de día y RE-01/RE-02/RE-03 con MySQL y Docker reales. Los registros históricos que se hubieran guardado antes con hora UTC requieren evaluación antes de interpretar sus fechas; este cambio no los migra.
- Ejecutar `npm run test:db`, `docker compose config` y `docker compose up --build` en un entorno con MySQL y Docker. La integración QA-001/QA-002 comprueba Docker solo cuando `TZ=America/Santiago`; fuera de él informa que falta esa evidencia.
- Ejecutar una validación remota sobre el nuevo HEAD; el run `35686264057` validó exclusivamente `fb6d3965c5acddd94d461218bfa0c42bb6a0c127`.
- Completar demostración manual y capturas.
- Completar datos personales/institucionales y validar experiencias reales del informe de empleabilidad.
- Generar ZIP, PPT y formatos finales exigidos por Aula Virtual.
- Revisar como decisión de dominio si `Administrador demo` debe incluirse en RE-03; no tratarlo como bug hasta resolverlo.
- Evaluar después de Sprint 04 el parche UX que precarga la fecha actual de Reportes sin consultar automáticamente.

No se agregó funcionalidad, no se inició una fase posterior y no se hizo merge a `main`.
