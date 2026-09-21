# Proyecto 1 — Integración de Competencias II

MVP académico de segundo año para controlar la asistencia de una empresa de 25 personas.

## Fuente de verdad

La única especificación operativa canónica es:

- [`docs/project/ESPECIFICACION_CANONICA.md`](docs/project/ESPECIFICACION_CANONICA.md)

Ese documento reúne alcance docente, requerimientos, decisiones mínimas, fases, pruebas, entregables, empleabilidad y auditoría contra la rúbrica. Los archivos de `sources/originales/` se conservan sin cambios como evidencia institucional; ante un error de transcripción, prevalece el original.

## Forma de trabajo

- [`AGENTS.md`](AGENTS.md) contiene las reglas obligatorias para personas y agentes.
- `docs/sprints/` contiene las instrucciones subordinadas de cada fase.
- `docs/tasks/` se usa solo cuando una tarea paralela o riesgosa necesita una ficha propia.

```text
planificar -> actualizar la especificación si corresponde -> ejecutar una fase -> probar -> revisar -> integrar a main
```

El objetivo es cumplir lo solicitado con POO sencilla y buenas prácticas básicas. Se prohíben ampliaciones de alcance, arquitectura empresarial y documentación duplicada.

## Modelo de datos

- `usuarios`: identificador único, nombre, correo único, hash de contraseña, perfil y estado.
- `marcaciones`: usuario asociado, acción, fecha y hora.
- La clave foránea conserva la relación con el usuario. La restricción única `(usuario_id, fecha, accion)` admite como máximo una entrada y una salida por usuario y fecha.
- Los valores permitidos son `administrador`/`empleado`, `Activo`/`Inactivo` y `entrada`/`salida`.

## Requisitos previos

- Opción local: Node.js 20 o superior y MySQL 8.4.
- Opción recomendada para demostración: Docker Desktop con Docker Compose.
- Puerto disponible: `3000`.

## Variables de entorno

Copia `.env.example` como `.env` solo para ejecución local. `.env` está excluido de Git.

| Variable | Uso | Valor de demostración |
| --- | --- | --- |
| `PORT` | Puerto HTTP | `3000` |
| `DB_HOST` | Host MySQL | `127.0.0.1` local / `mysql` en Compose |
| `DB_PORT` | Puerto MySQL | `3306` |
| `DB_NAME` | Base de datos | `control_asistencia` |
| `DB_USER` | Usuario MySQL | `app` |
| `DB_PASSWORD` | Contraseña MySQL de demostración | `app_local_password` |
| `MYSQL_ROOT_PASSWORD` | Inicialización de MySQL en Compose | `root_local_password` |

Los valores publicados son exclusivamente locales y ficticios; no deben reutilizarse como credenciales reales.

## Ejecución local con Node.js y MySQL

```bash
cp .env.example .env
npm ci
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql
npm start
```

Ajusta `.env` a tu instalación. La aplicación queda disponible en <http://localhost:3000/login>.

## Ejecución con Docker Compose

Con Docker Desktop abierto, desde la raíz:

```bash
docker compose up --build
```

Acceso: <http://localhost:3000>. Para detener: `Ctrl+C` y luego `docker compose down`.

Solo ante contenedores huérfanos:

```bash
docker compose down --remove-orphans
```

## Datos de demostración

- Administrador: `admin@empresa.test` / `Admin1234`.
- Empleado: `empleado@empresa.test` / `Empleado1234`.

## Pruebas

```bash
npm test
npm run test:db
```

- `npm test`: pruebas unitarias y comprobaciones sin MySQL.
- `npm run test:db`: integración; requiere schema aplicado y MySQL disponible.
- Docker Compose local y recorrido manual son validaciones separadas de GitHub Actions.

## Recorrido básico de demostración

1. Iniciar la aplicación y abrir `/login`.
2. Ingresar como administrador; listar, crear, modificar y desactivar un usuario.
3. Ingresar como empleado; registrar entrada, comprobar repetición rechazada y registrar salida.
4. Ingresar como administrador; consultar `/reportes` para una fecha preparada.
5. Verificar RE-01, RE-02 y RE-03 en sus tablas.
6. Consultar `/api/empleados?estado=activo`, `inactivo` y `todos`; comprobar JSON y filtro inválido.

La demostración debe realizarse y registrarse manualmente en el equipo de entrega; las pruebas HTTP automatizadas no la sustituyen.

## Entregables

- Requerimientos: [`docs/academico/requerimientos.md`](docs/academico/requerimientos.md).
- Plan final de pruebas: [`docs/academico/plan-pruebas.md`](docs/academico/plan-pruebas.md).
- Trazabilidad: [`docs/academico/trazabilidad-entrega.md`](docs/academico/trazabilidad-entrega.md).
- Evidencias 1.2 a 1.5: [`docs/academico/evidencias/README.md`](docs/academico/evidencias/README.md).
- Contenido para PPT: [`docs/academico/contenido-presentacion.md`](docs/academico/contenido-presentacion.md).
- Informe de empleabilidad: [`docs/academico/informe-empleabilidad.md`](docs/academico/informe-empleabilidad.md).
- Script definitivo: [`database/schema.sql`](database/schema.sql).

## Estado

Sprint 00 a Sprint 03 están integrados en `main`. Sprint 04 se encuentra en `sprint/04-entrega`, preparado para revisión y todavía no integrado.
