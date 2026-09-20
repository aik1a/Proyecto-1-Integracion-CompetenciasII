# Tarea de estabilización Docker

**Estado:** En curso  
**Rama:** `task/estabilizacion-docker`  
**Base:** `main` en `6f54c5dfbccf41902472d786102b7893bfb693fb`

## Problema

El repositorio contiene `Dockerfile` y `compose.yml`, pero las validaciones existentes ejecutan Node.js y MySQL por separado. No existe evidencia automática de que la imagen de la aplicación, MySQL y Docker Compose funcionen juntos desde cero.

Además, el servicio `app` no tiene un healthcheck propio y la exposición fija del puerto 3306 puede chocar con una instalación local de MySQL.

## Objetivo

Dejar una ruta reproducible y comprobada para construir, levantar, probar y detener el MVP mediante Docker Compose, sin agregar funciones al producto ni abrir Sprint 04.

## Alcance autorizado

- agregar healthcheck al servicio `app`;
- hacer configurable el puerto MySQL publicado en el equipo anfitrión;
- documentar inicio, estado, registros, pruebas, detención y reinicio limpio;
- agregar una validación de GitHub Actions que ejecute Docker Compose completo;
- comprobar arranque HTTP, pruebas unitarias y pruebas de integración contra MySQL;
- corregir únicamente el estado obsoleto de Sprint 03 en el README.

## Fuera de alcance

- nuevas funciones;
- cambios en reglas de negocio;
- rediseño de arquitectura o interfaz;
- despliegue productivo;
- integración a `main`;
- inicio de Sprint 04.

## Archivos previstos

- `compose.yml`
- `.env.example`
- `README.md`
- `.github/workflows/docker-compose-validation.yml`
- este documento

## Pruebas necesarias

1. `docker compose config`
2. `docker compose build`
3. `docker compose up -d --wait`
4. comprobación de `/salud` y `/login`
5. `docker compose exec -T app npm test`
6. `docker compose exec -T app npm run test:db`
7. `docker compose down -v`

## Criterio de terminado

La Action debe finalizar correctamente desde la rama de tarea, registrar el arranque saludable de ambos servicios y aprobar las suites unitarias y de integración. La rama se entrega para auditoría sin merge a `main`.

## Resultado

Pendiente de ejecución.
