# Sprint 05 — Correctivos POO

**Estado:** En curso
**Rama:** `sprint/05-correctivos-poo`
**Base estable:** `main` en `75e5e280695f4274d7b859b87326e78ba7e4e3f8`.
**Autorización:** correctivos de auditoría aprobados por el responsable el 04-10-2026; implementación secuencial y documentada.

## Objetivo y límites

Corregir los defectos confirmados de sesiones, formulario y POO manteniendo los ocho requisitos, stack, esquema y alcance de segundo año. No agregar funcionalidades ni reinterpretar RE-03. Main y Sprint04 se conservan como referencia histórica; no hacer merge sin revisión.

## Bloques secuenciales

0. Fijar este contrato y las decisiones en la especificación canónica antes de código.
1. **Seguridad básica:** vencimiento servidor de ocho horas; revalidación de estado/perfil del usuario en cada petición autenticada; logout efectivo; ID validado y atributo HTML seguro. Regresiones de sesión desactivada, eliminada, cambio de perfil, caducidad y marcado externo. Reutilizar workflow existente agregando únicamente esta rama a su disparador push para validar Node20/MySQL8.4.
2. **POO y contratos:** estado privado y getters de lectura en Usuario/Marcacion; copia defensiva de fecha y sesión; Marcacion utilizada en registrar; entradas obligatorias y longitudes coherentes con schema. Mantener API de lectura actual; no añadir setters ni jerarquías artificiales.
3. **Documentación y validación:** registrar resultados reales en este archivo y plan de pruebas; contrastar API de clases mediante un diagrama Mermaid en este archivo; actualizar README/trazabilidad necesarios. Revisar diff completo y entregar rama/commits/pruebas/pendientes.

Cada bloque se prueba antes de su commit. Si falla una regresión, no se avanza hasta resolverla. Todos los bloques pertenecen a esta única fase; no se abre otro sprint.

## Riesgos y contención

- Middleware asíncrono: verificar que un fallo de BD no permita acceso ni deje petición abierta.
- Modelo encapsulado: conservar getters usados por servicios/pruebas; no cambiar columnas ni seed.
- Formularios: comprobar recuperación de errores y operaciones CRUD normales.
- Reversión: commits separados por bloque; detenerse antes de merge. Un rollback se prepara como revert del bloque, nunca force-push ni borrado de datos.

## Pruebas exigidas

- npm ci y TZ=America/Santiago npm test.
- npm run test:db en MySQL8.4 y arranque mediante workflow existente sobre el SHA de esta rama.
- Regresiones HTTP con dobles y casos de modelos/sesiones; integración de sesión vigente y CRUD en BD real.
- Docker Compose y demostración manual: registrar como pendientes si no se ejecutan; no sustituir por CI.

## Pendientes fuera de estos bloques

- Carrera de medianoche detectada en auditoría: requiere corrección y prueba MySQL específica antes de declararla cerrada; no se añade una transacción nueva sin verificar necesidad.
- Clasificación/exposición de errores y protección CSRF: quedan registradas para un bloque posterior aprobado; no mezclar una refactorización de todas las rutas con los dos bloqueos iniciales.
- Coste criptográfico y decisión de administrador en RE-03: no cambiar en esta fase.

## Resultado

Bloque0: contrato preparado. Pruebas de correctivos aún no ejecutadas.
