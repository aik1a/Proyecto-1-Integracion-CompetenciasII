# Sprint 01 — Base de datos

**Estado:** Pendiente
**Rama:** `sprint/01-base-datos`

## Objetivo

Construir la persistencia mínima del MVP: modelo relacional, script MySQL reproducible, datos ficticios mínimos, conexión desde la aplicación y ejecución reproducible con Docker Compose.

## Fuentes y requerimientos

- Pauta 1.3 — Avance #2.
- Datos necesarios para CA-01, GU-01, GU-02, GU-03, RE-01, RE-02, RE-03 y AP-01.
- `docs/project/ESPECIFICACION_CANONICA.md`.

## Precondiciones

- Sprint 00 aprobado e integrado a `main`.
- Proyecto base ejecutable.
- Documento de requerimientos y plan de pruebas creados.

## Bloques de trabajo

1. **Modelo relacional mínimo**
   - definir únicamente tablas y relaciones necesarias para usuarios y marcaciones;
   - permitir rol, estado, correo único y contraseña protegida;
   - permitir registrar usuario, tipo de marcación, fecha y hora;
   - documentar brevemente el modelo sin agregar módulos futuros.

2. **Script SQL reproducible**
   - crear `database/schema.sql`;
   - incluir claves, restricciones y tipos necesarios;
   - crear datos ficticios mínimos en un archivo separado solo si ayudan a demostrar o probar el sistema.

3. **Conexión de aplicación**
   - configurar conexión MySQL con variables de entorno;
   - usar SQL directo y parametrizado;
   - comprobar una operación simple de lectura o conexión.

4. **Docker Compose mínimo**
   - aplicación + MySQL únicamente;
   - permitir levantar el entorno siguiendo instrucciones breves;
   - no añadir proxy, cache, servicios cloud ni contenedores auxiliares.

5. **Pruebas y evidencia**
   - ejecutar el schema desde cero;
   - comprobar tablas y restricciones principales;
   - comprobar conexión de la aplicación a MySQL;
   - registrar resultados reales en el plan de pruebas cuando corresponda.

## Incluido

- modelo relacional mínimo;
- `schema.sql` ejecutable desde cero;
- datos ficticios mínimos si son útiles;
- conexión básica de la aplicación;
- Docker Compose con aplicación y MySQL.

## Fuera de alcance

- pantallas funcionales de usuarios;
- CRUD completo;
- login completo;
- reglas de entrada/salida;
- reportes;
- AP-01;
- optimización avanzada de consultas;
- ORM.

## Archivos o áreas esperadas

```text
database/schema.sql
database/seed.sql        # solo si se justifica
src/db/
docker-compose.yml       # o compose.yml
Dockerfile
.env.example
README.md                 # solo instrucciones necesarias para ejecutar
```

No se crean capas adicionales si la conexión puede mantenerse simple.

## Criterios de aceptación

- el script crea la base desde cero sin errores;
- el modelo soporta los ocho requerimientos sin tablas ajenas al alcance;
- correo puede ser único y el estado permite Activo/Inactivo;
- las marcaciones permiten identificar usuario, acción, fecha y hora;
- la aplicación se conecta a MySQL usando variables de entorno;
- Docker Compose levanta aplicación y MySQL;
- los datos de prueba no contienen información real.

## Pruebas y evidencia

Registrar comandos realmente ejecutados y resultados de:

- creación limpia de base;
- inspección de tablas/restricciones;
- conexión aplicación ↔ MySQL;
- arranque con Docker Compose.

## Condiciones de parada

Detenerse si el modelo requiere una decisión funcional no definida en la especificación o si aparece la necesidad de agregar entidades fuera del caso.

## Handoff obligatorio

Informar rama, último commit, modelo creado, scripts ejecutados, pruebas reales y cualquier limitación. Hacer push y detenerse; no hacer merge a `main`.

## Resultado

Pendiente. Se completa al cerrar la fase con hechos y pruebas reales.
