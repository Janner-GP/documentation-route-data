---
sidebar_position: 8
title: Window Functions
---

# Window Functions

Las window functions permiten hacer calculos sobre un conjunto de filas relacionadas sin perder el detalle de cada fila. Son muy usadas en analitica y reporting.

## Diferencia frente a `GROUP BY`

- `GROUP BY` agrupa y reduce filas
- Una window function calcula sobre grupos logicos pero conserva cada fila original

## Ejemplos comunes

- `ROW_NUMBER()`
- `RANK()`
- `DENSE_RANK()`
- `SUM() OVER(...)`
- `AVG() OVER(...)`
- `LAG()` y `LEAD()`

## Ejemplo

```sql
SELECT
  vendedor_id,
  fecha,
  total,
  ROW_NUMBER() OVER (
    PARTITION BY vendedor_id
    ORDER BY fecha
  ) AS orden_venta
FROM ventas;
```

## Casos de uso

- Rankings
- Acumulados
- Comparaciones contra la fila anterior
- Deteccion de tendencias
- Analisis por particiones como cliente, ciudad o categoria
