---
sidebar_position: 6
---

# Selección y Filtrado: El Corazón de Pandas

Dominar la selección y el filtrado es lo que diferencia a un usuario básico de un experto. Aquí es donde transformamos un dataset masivo en información útil para el análisis.

---

## 1. Selección de Columnas

A menudo no necesitamos todas las piezas de información de un dataset.

### Seleccionar una sola columna (Series)
```python
# Retorna una Series con los costos
costos = df['costo_usd']
```

### Seleccionar múltiples columnas (DataFrame)
Para seleccionar varias columnas, debemos pasar una **lista** de nombres. Nota los corchetes dobles `[[ ]]`.
```python
# Retorna un nuevo DataFrame con información clave
columnas = ['departamento', 'servicio', 'costo_usd']
sub_df = df[columnas]
```

---

## 2. Filtrar (Indexación Booleana)

Filtrar es como aplicar un tamiz. Pandas evalúa una condición para cada fila y devuelve solo las que son `True`.

### Filtro Básico (Comparación)
```python
# Queremos ver solo los eventos con prioridad Crítica
criticos = df[df['prioridad'] == 'Crítica']
```

### ¿Cómo funciona por dentro?
Si escribes `df['prioridad'] == 'Crítica'` por sí solo, Pandas genera una "Máscara Booleana": una lista de `True/False`. Al ponerla dentro de `df[...]`, el DataFrame solo nos muestra las filas con `True`.

---

## 3. Filtros Compuestos (Operadores Lógicos)

¿Qué pasa si queremos filtrar por dos cosas a la vez?

- **`&` (AND)**: Deben cumplirse AMBAS condiciones.
- **`|` (OR)**: Debe cumplirse AL MENOS UNA.
- **`~` (NOT)**: Lo contrario a la condición.

> [!IMPORTANT]
> **Usa paréntesis:** En Pandas, SIEMPRE debes envolver cada condición en paréntesis al usar operadores lógicos.

```python
# Eventos en 'Latam' que además sean de prioridad 'Crítica'
filtro_urgente = df[(df['region'] == 'Latam') & (df['prioridad'] == 'Crítica')]

# Eventos con costo muy bajo o costo muy alto
extremos = df[(df['costo_usd'] < 50) | (df['costo_usd'] > 1000)]
```

---

## 4. .loc y .iloc

Ya vimos que sirven para navegar, pero son vitales para **filtrar y seleccionar columnas al mismo tiempo**.

### Filtrar filas y elegir columnas específicas con `.loc`
```python
# Formato: df.loc[filas_filtradas, columnas_elegidas]
# Ver servicio y costo de los eventos del departamento 'DevOps'
resumen_devops = df.loc[df['departamento'] == 'DevOps', ['servicio', 'costo_usd']]
```

### Selección por posición con `.iloc`
Mientras que `.loc` usa nombres, `.iloc` usa exclusivamente **posiciones numéricas**.

```python
# Formato: df.iloc[filas_posicion, columnas_posicion]
# Obtener las primeras 3 filas y las primeras 2 columnas
primeros_datos = df.iloc[0:3, 0:2]
```

---

## 5. Métodos de Conveniencia: `isin` y `between`

Para evitar escribir muchos `OR` o comparaciones complejas:

- **`isin()`**: Busca valores dentro de una lista.
- **`between()`**: Busca valores dentro de un rango inclusivo.

```python
# Buscar eventos con prioridad Alta o Crítica
prioritarios = df[df['prioridad'].isin(['Alta', 'Crítica'])]

# Gastos entre 100 y 500 USD
rango_medio = df[df['costo_usd'].between(100, 500)]
```

---

:::tip Ejercicio de Apoyo
Abre el archivo `guia-pandas-ejercicios-apoyo/05_seleccion_filtrado.py` para practicar estas técnicas con el dataset real de infraestructura.
:::
