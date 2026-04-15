---
sidebar_position: 5
title: Joins
---

# Joins

Los joins permiten combinar datos de varias tablas relacionadas. Son una de las habilidades mas importantes en SQL.

## Por que existen

En una base de datos relacional la informacion suele estar separada para evitar duplicados. Los joins permiten reconstruir esa informacion en una consulta.

## Tipos principales

### `INNER JOIN`

Devuelve solo las coincidencias entre ambas tablas.

```sql
SELECT c.nombre, p.total
FROM clientes c
INNER JOIN pedidos p ON c.id = p.cliente_id;
```

### `LEFT JOIN`

Devuelve todos los registros de la tabla izquierda y las coincidencias de la derecha.

```sql
SELECT c.nombre, p.total
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id;
```

### `RIGHT JOIN`

Devuelve todos los registros de la tabla derecha y las coincidencias de la izquierda.

### `FULL JOIN`

Devuelve coincidencias y tambien registros sin pareja de ambos lados. No todos los motores lo implementan igual.

## Claves para entender joins

- Define bien la relacion entre tablas
- Usa alias para que las consultas sean mas legibles
- Verifica que no estas generando duplicados inesperados

## Caso tipico

Quieres ver el nombre del cliente junto con sus pedidos. El nombre esta en `clientes` y el total del pedido en `pedidos`. Un join resuelve eso.
