---
sidebar_position: 2
title: Fundamentos de SQL
---

# Fundamentos de SQL

Aqui empieza todo. Antes de escribir consultas complejas, hay que entender como se organiza la informacion dentro de una base de datos relacional.

## Que es una base de datos relacional

Una base de datos relacional guarda la informacion en tablas relacionadas entre si.

Cada tabla representa una entidad del negocio, por ejemplo:

- `usuarios`
- `productos`
- `pedidos`

La relacion entre tablas suele construirse con claves primarias y claves foraneas.

## Tablas, filas y columnas

- Una **tabla** agrupa datos de un mismo tipo
- Una **fila** representa un registro
- Una **columna** representa un atributo de ese registro

Ejemplo:

| id | nombre | correo | fecha_registro |
|---|---|---|---|
| 1 | Ana | ana@correo.com | 2026-01-10 |

## Tipos de datos comunes

Los tipos de datos definen que clase de informacion se puede guardar en una columna.

| Tipo | Uso comun |
|---|---|
| `INT` | Numeros enteros |
| `VARCHAR(n)` | Texto corto |
| `TEXT` | Texto largo |
| `DATE` | Fechas |
| `TIMESTAMP` | Fecha y hora |
| `BOOLEAN` | Verdadero o falso |
| `DECIMAL` | Valores numericos exactos, como dinero |

## Conceptos clave

- **Primary Key**: identifica de forma unica cada fila
- **Foreign Key**: conecta una tabla con otra
- **NULL**: indica ausencia de valor
- **Schema**: contenedor logico de objetos en la base de datos

## Ejemplo de tabla

```sql
CREATE TABLE clientes (
  id INT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(150),
  fecha_registro DATE
);
```

## Que deberias dominar en esta etapa

- Entender que resuelve SQL
- Diferenciar tablas, filas y columnas
- Reconocer tipos de datos frecuentes
- Identificar relaciones entre tablas
