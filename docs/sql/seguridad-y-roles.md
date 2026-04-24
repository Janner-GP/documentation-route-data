---
sidebar_position: 12
title: Seguridad y roles
---

# Seguridad y roles

No todos los usuarios deben poder hacer todo en una base de datos. La seguridad define quien puede leer, escribir, modificar estructuras o administrar el sistema.

## Conceptos basicos

- **Usuario**: cuenta que se conecta a la base de datos
- **Rol**: conjunto de permisos asignables
- **Privilegio**: permiso especifico sobre un objeto

## Permisos comunes

- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`
- `EXECUTE`
- `CREATE`
- `ALTER`

## Principio recomendado

Aplica el menor privilegio posible. Cada usuario o servicio deberia tener solo los accesos estrictamente necesarios.

## Ejemplo general

```sql
GRANT SELECT ON clientes TO analista;
REVOKE DELETE ON clientes FROM analista;
```

## Riesgos que ayuda a evitar

- Cambios accidentales
- Exposicion de datos sensibles
- Escalamiento innecesario de privilegios
- Incidentes por malas practicas operativas
