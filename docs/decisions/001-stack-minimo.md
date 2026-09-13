# Decisión 001 — Stack mínimo

**Estado:** Aprobada para el MVP.

## Decisión

- aplicación web en JavaScript;
- Node.js con Express para el backend;
- HTML, CSS y JavaScript sencillo para la interfaz, sin framework frontend;
- vistas renderizadas en servidor cuando simplifiquen la implementación;
- MySQL mediante consultas SQL directas y parametrizadas;
- sin ORM;
- sesiones tradicionales para el acceso y hash de contraseñas;
- una sola herramienta de pruebas unitarias y una utilidad HTTP para integración;
- Docker Compose limitado a aplicación y base de datos para reproducibilidad.

Las dependencias concretas y sus versiones se fijan al crear el proyecto, evitando agregar alternativas que cumplan la misma función.

## Estructura orientativa máxima

```text
src/
├── routes/
├── services/
├── db/
├── views/
└── public/

tests/
database/
```

Solo se crea otra división si el código existente demuestra una necesidad real.

## No adoptado

React, TypeScript, ORM, microservicios, arquitectura hexagonal, nube, CI/CD complejo, monitoreo y sistema de diseño.
