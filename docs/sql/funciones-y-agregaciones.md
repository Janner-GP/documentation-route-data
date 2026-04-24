---
sidebar_position: 4
title: Funciones y agregaciones
---

# Funciones y agregaciones

Las funciones ayudan a transformar datos. Las agregaciones resumen muchas filas en un solo resultado.

## Funciones de agregacion mas usadas

| Funcion | Para que sirve |
|---|---|
| `COUNT()` | Cuenta filas |
| `SUM()` | Suma valores |
| `AVG()` | Calcula promedios |
| `MIN()` | Devuelve el menor valor |
| `MAX()` | Devuelve el mayor valor |

```sql
SELECT COUNT(*) AS total_clientes
FROM clientes;
```

```sql
SELECT AVG(total) AS promedio_venta
FROM ventas;
```

## Agrupar datos con `GROUP BY`

```sql
SELECT ciudad, COUNT(*) AS total_clientes
FROM clientes
GROUP BY ciudad;
```

## Filtrar grupos con `HAVING`

```sql
SELECT ciudad, COUNT(*) AS total_clientes
FROM clientes
GROUP BY ciudad
HAVING COUNT(*) > 10;
```

## Funciones comunes sobre texto y fechas

- `UPPER()` y `LOWER()` para cambiar mayusculas y minusculas
- `ROUND()` para redondear valores
- `COALESCE()` para reemplazar `NULL`
- Funciones de fecha para extraer anio, mes o dia

```sql
SELECT nombre, UPPER(nombre) AS nombre_mayuscula
FROM clientes;
```
