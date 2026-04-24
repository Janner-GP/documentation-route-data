---
sidebar_position: 7
title: Funciones avanzadas
---

# Funciones avanzadas

Cuando ya dominas lo basico, empiezas a usar funciones que resuelven limpieza, transformacion y logica de negocio dentro de la consulta.

## Ejemplos utiles

- `CASE` para reglas condicionales
- `COALESCE` para manejar nulos
- `CAST` o `CONVERT` para cambiar tipos de dato
- Funciones de fecha para calcular diferencias o truncar periodos

## `CASE`

```sql
SELECT nombre,
  CASE
    WHEN total_compras >= 1000 THEN 'Premium'
    WHEN total_compras >= 500 THEN 'Frecuente'
    ELSE 'Regular'
  END AS segmento
FROM clientes;
```

## `COALESCE`

```sql
SELECT nombre, COALESCE(telefono, 'Sin telefono') AS telefono
FROM clientes;
```

## `CAST`

```sql
SELECT CAST(total AS DECIMAL(10, 2)) AS total_formateado
FROM pedidos;
```

## Para que sirven en la practica

- Estandarizar datos
- Clasificar usuarios o ventas
- Preparar informacion para dashboards
- Reducir procesamiento posterior en aplicaciones
