---
sidebar_position: 3
title: Consultas basicas CRUD
---

# Consultas basicas CRUD

CRUD significa `Create`, `Read`, `Update` y `Delete`. Son las operaciones mas comunes cuando trabajas con datos.

## CREATE con `INSERT`

Sirve para agregar registros nuevos.

```sql
INSERT INTO clientes (id, nombre, email, fecha_registro)
VALUES (1, 'Ana', 'ana@correo.com', '2026-01-10');
```

## READ con `SELECT`

Sirve para consultar informacion.

```sql
SELECT id, nombre, email
FROM clientes;
```

### Filtrar resultados con `WHERE`

```sql
SELECT *
FROM clientes
WHERE fecha_registro >= '2026-01-01';
```

### Ordenar resultados con `ORDER BY`

```sql
SELECT nombre, fecha_registro
FROM clientes
ORDER BY fecha_registro DESC;
```

## UPDATE

Sirve para modificar datos existentes.

```sql
UPDATE clientes
SET email = 'ana.lopez@correo.com'
WHERE id = 1;
```

## DELETE

Sirve para eliminar registros.

```sql
DELETE FROM clientes
WHERE id = 1;
```

## Buenas practicas

- Usa `WHERE` en `UPDATE` y `DELETE` para evitar cambios masivos accidentales
- Selecciona solo las columnas que necesitas
- Prueba primero tus filtros con `SELECT`
