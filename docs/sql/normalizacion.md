---
sidebar_position: 9
title: Normalizacion de bases de datos
---

# Normalizacion de bases de datos

La normalizacion es un proceso de diseno para organizar tablas y reducir duplicidad, inconsistencias y errores de mantenimiento.

## Objetivos

- Evitar datos repetidos
- Mejorar integridad de la informacion
- Facilitar actualizaciones
- Separar responsabilidades por entidad

## Formas normales a nivel general

### Primera forma normal

Cada columna debe guardar un valor atomico y cada fila debe ser unica.

### Segunda forma normal

Se eliminan dependencias parciales respecto a claves compuestas.

### Tercera forma normal

Se eliminan dependencias transitivas. Una columna no clave no debe depender de otra columna no clave.

## Ejemplo sencillo

En lugar de guardar la ciudad del cliente en cada pedido, suele ser mejor tener:

- Una tabla `clientes`
- Una tabla `pedidos`

Asi evitas repetir la misma informacion muchas veces.

## Importante

Normalizar mejora el orden del modelo, pero a veces se desnormaliza de forma controlada para acelerar consultas analiticas.
