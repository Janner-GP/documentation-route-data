---
sidebar_position: 13
title: Triggers
---

# Triggers

Un trigger es una accion automatica que se ejecuta cuando ocurre un evento sobre una tabla o vista.

## En que eventos se activan

Normalmente en operaciones como:

- `INSERT`
- `UPDATE`
- `DELETE`

## Para que sirven

- Auditoria de cambios
- Validaciones automaticas
- Sincronizacion de datos
- Generacion de historicos
- Aplicar reglas de negocio dentro de la base

## Ejemplo conceptual

Imagina un trigger que guarda en una tabla de auditoria cada vez que se modifica el salario de un empleado.

## Ventajas

- Automatizan tareas repetitivas
- Aseguran reglas cerca del dato
- Ayudan a registrar cambios importantes

## Riesgos o desventajas

- Pueden ocultar logica dificil de rastrear
- Si se abusa de ellos, complican el mantenimiento
- Pueden afectar performance en operaciones masivas

## Recomendacion general

Usalos cuando aporten valor claro, especialmente en auditoria o integridad. Evita convertirlos en el lugar principal de toda la logica del negocio.
