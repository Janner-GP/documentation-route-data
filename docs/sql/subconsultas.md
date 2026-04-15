---
sidebar_position: 6
title: Subconsultas
---

# Subconsultas

Una subconsulta es una consulta dentro de otra consulta. Se usa cuando necesitas calcular algo primero para luego reutilizar ese resultado.

## Donde pueden aparecer

- En `SELECT`
- En `FROM`
- En `WHERE`

## Ejemplo en `WHERE`

```sql
SELECT nombre, total
FROM pedidos
WHERE total > (
  SELECT AVG(total)
  FROM pedidos
);
```

En este caso se listan los pedidos cuyo total es mayor que el promedio general.

## Ejemplo en `FROM`

```sql
SELECT categoria, promedio_precio
FROM (
  SELECT categoria, AVG(precio) AS promedio_precio
  FROM productos
  GROUP BY categoria
) resumen;
```

## Cuando usarlas

- Cuando el problema se entiende mejor por etapas
- Cuando necesitas comparar contra un promedio, maximo o minimo
- Cuando aun no quieres pasar a `CTE` o estructuras mas avanzadas

## Cuidado

Algunas subconsultas pueden ser menos eficientes que otras alternativas. Siempre conviene revisar performance cuando el volumen de datos crece.
