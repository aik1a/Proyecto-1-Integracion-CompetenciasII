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

## Ejecución de la base técnica

Requisitos: Node.js 20 o superior.

```bash
npm install
npm start
```

La comprobación mínima queda disponible en `http://localhost:3000/salud`. Para usar otro puerto, defina `PORT` en el entorno antes del arranque; `.env.example` documenta el valor predeterminado.

Para ejecutar las pruebas:

```bash
npm test
```

## Estado

Sprint 00 en curso en su rama de trabajo. La base técnica y las clases iniciales están preparadas para revisión; ningún requerimiento funcional está implementado de forma completa.
