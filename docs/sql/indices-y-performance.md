---
sidebar_position: 10
title: Indices y performance
---

# Indices y performance

Cuando las tablas crecen, las consultas pueden volverse lentas. Los indices ayudan a encontrar datos mas rapido.

## Que es un indice

Es una estructura adicional que acelera busquedas sobre una o varias columnas, parecida al indice de un libro.

## Cuando ayudan

- Consultas con `WHERE`
- Ordenamientos con `ORDER BY`
- Joins sobre columnas frecuentes
- Busquedas por claves unicas

## Ejemplo

```sql
CREATE INDEX idx_clientes_email
ON clientes(email);
```

## Costo de los indices

No todo es ganancia. Tambien:

- Ocupan espacio
- Hacen mas lentos algunos `INSERT`, `UPDATE` y `DELETE`
- Deben elegirse con criterio

## Buenas practicas generales

- Indexa columnas muy consultadas
- Evita crear indices innecesarios
- Revisa planes de ejecucion cuando una consulta sea lenta
- Filtra y selecciona solo lo necesario
