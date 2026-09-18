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

## Ejecución con Node.js y MySQL

Requisitos: Node.js 20 o superior y MySQL 8.4.

```bash
cp .env.example .env
npm install
mysql -u root -p < database/schema.sql
mysql -u root -p < database/seed.sql
npm start
```

Antes de iniciar, ajusta en `.env` el usuario y la contraseña de una cuenta MySQL local. La aplicación comprueba la conexión y queda disponible en `http://localhost:3000/login`.

Usuarios ficticios para la demostración:

- administrador: `admin@empresa.test` / `Admin1234`;
- empleado: `empleado@empresa.test` / `Empleado1234`.

## Ejecución con Docker Compose

Requisitos: Docker con el complemento Compose.

```bash
cp .env.example .env
docker compose up --build
```

El servicio MySQL crea el esquema automáticamente desde `database/schema.sql`. Para recrearlo desde cero junto con su volumen:

```bash
docker compose down -v
docker compose up --build
```

Para ejecutar las pruebas:

```bash
npm test
docker compose exec app npm run test:db
```

## Estado

Sprint 00, Sprint 01, Sprint 02 y Sprint 03 están integrados en `main`. Sprint 04 todavía no ha sido iniciado.
