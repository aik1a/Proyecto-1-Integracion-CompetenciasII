# Decisión 002 — Reglas funcionales mínimas

**Estado:** Aprobada para evitar interpretaciones diferentes entre agentes.

## Usuarios

- existen dos perfiles mínimos: administrador y empleado;
- el administrador crea, modifica y desactiva usuarios;
- GU-03 se implementa como desactivación lógica porque AP-01 exige consultar empleados Activos e Inactivos;
- no se implementan permisos configurables ni recuperación de contraseña.

## Asistencia

- cada empleado registra como máximo una entrada y una salida por fecha;
- no se acepta una salida sin entrada previa;
- una marcación repetida se rechaza con un mensaje comprensible;
- atraso significa entrada posterior a las 09:30;
- salida anticipada significa salida anterior a las 17:30;
- inasistencia significa usuario activo sin entrada ni salida en la fecha consultada;
- no se modelan turnos, feriados ni calendarios laborales avanzados;
- no se incorpora edición avanzada de marcaciones.

## Reportes y API

- los reportes usan una fecha seleccionada y muestran solo los datos necesarios;
- los gráficos presentan conteos sencillos, sin tablero analítico;
- AP-01 es un endpoint de solo lectura con filtro Activo, Inactivo o Todos y respuesta JSON;
- el contrato exacto de ruta y nombres se fija en Sprint 03 antes de programarlo.

Estas reglas concretan ambigüedades necesarias; no agregan módulos nuevos al caso oficial.
