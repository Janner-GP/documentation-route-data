---
sidebar_position: 8
---

# 08 - Agrupaciones y Uniones

En el análisis de datos, rara vez las respuestas se encuentran mirando filas individuales. Lo habitual es que necesitemos **resumir** la información por categorías (agrupaciones) o **combinar** datos provenientes de múltiples fuentes (uniones).

En este módulo, aprenderemos a utilizar las potentes herramientas de Pandas para segmentar datos, calcular estadísticas agregadas y unir diferentes tablas como si estuviéramos trabajando en una base de datos relacional (SQL).

---

## 1. Agrupación de Datos (`groupby`)

El método `groupby()` es una de las funciones más poderosas de Pandas. Sigue la lógica de "Dividir, Aplicar y Combinar" (Split-Apply-Combine): divide los datos en grupos según una clave, aplica una función a cada grupo (como suma o promedio) y combina los resultados en una nueva estructura.

```python
# 1. Agrupamos por una columna y sumamos otra
ventas_por_region = df.groupby('zona')['coste'].sum()

# 2. Agrupación por múltiples columnas calculando el promedio
promedio_zona_dep = df.groupby(['zona', 'departamento'])['coste'].mean()
```

**Explicación paso a paso:**
- `df.groupby('zona')`: Pandas separa internamente el DataFrame en pequeños "sub-DataFrames", uno para cada zona (ej: "Norteamérica", "Latam").
- `['coste']`: Seleccionamos específicamente sobre qué columna numérica queremos operar.
- `.sum()` o `.mean()`: Aplicamos la función matemática deseada para obtener el resultado final por cada grupo.

---

## 2. Agregaciones Múltiples (`agg`)

A menudo, necesitamos calcular más de una métrica a la vez (ej: el total y el promedio simultáneamente). Para esto usamos el método `agg()`.

```python
# Múltiples estadísticas para una sola columna
resumen_coste = df.groupby('zona')['coste'].agg(['sum', 'mean', 'count'])

# Diferentes estadísticas para diferentes columnas
resumen_complejo = df.groupby('zona').agg({
    'coste': ['sum', 'mean'],
    'prioridad_rank': 'max'
})
```

**Explicación:**
- `.agg(['sum', 'mean', 'count'])`: Le pasamos una lista de nombres de funciones que queremos calcular sobre cada grupo.
- `agg({ ... })`: Pasando un diccionario, podemos especificar exactamente qué cálculos hacer sobre qué columnas. Por ejemplo, sumar el 'coste' pero obtener el máximo de 'prioridad_rank'.

---

## 3. Uniones Horizontales (`merge`)

Cuando tenemos datos relacionados repartidos en varias tablas, usamos `merge()` para unirlos en base a una columna en común (clave). Esto es equivalente a los `JOIN` en SQL.

Supongamos que tenemos otro DataFrame `df_zonas` con detalles sobre cada zona:

```python
# Unimos el DataFrame principal (df) con el de detalles (df_zonas)
df_combinado = pd.merge(
    left=df, 
    right=df_zonas, 
    on='zona', 
    how='left'
)
```

**Parámetros clave:**
- `left` y `right`: Los DataFrames que queremos unir.
- `on='zona'`: La columna clave que existe en ambos DataFrames y sirve de vínculo.
- `how='left'`: El tipo de unión:
  - `'inner'` (por defecto): Solo conserva las filas donde la clave ("zona") exista en ambos DataFrames.
  - `'left'`: Conserva todas las filas del DataFrame izquierdo (`df`), rellenando con nulos (`NaN`) si no hay coincidencia en el derecho.
  - `'right'`: Conserva todo el derecho, rellenando nulos a la izquierda.
  - `'outer'`: Conserva todos los registros de ambos, haya coincidencia o no.

---

## 4. Concatenación (`concat`)

Mientras `merge()` une columnas (horizontalmente), `concat()` es ideal para apilar DataFrames que tienen las mismas columnas, uno encima del otro (verticalmente) o de lado a lado.

```python
# Concatenación vertical (apilar filas)
# Supongamos que df_enero y df_febrero tienen las mismas columnas
df_trimestre = pd.concat([df_enero, df_febrero], ignore_index=True)

# Concatenación horizontal (apilar columnas)
# Como agregar nuevas columnas lado a lado basadas en el índice
df_ancho = pd.concat([df_parte1, df_parte2], axis=1)
```

**Explicación:**
- `pd.concat([lista_de_dfs])`: Toma una lista de DataFrames y los une.
- `ignore_index=True`: Útil en la unión vertical para que Pandas regenere un nuevo índice continuo (0, 1, 2...) en lugar de mantener los índices originales duplicados.
- `axis=1`: Indica que queremos unir de forma horizontal (por columnas) en lugar de vertical (por filas, `axis=0` por defecto).

---

## Resumen del Tema

| Función | Propósito | Equivalente SQL |
| :--- | :--- | :--- |
| `groupby()` | Agrupar filas por categorías para aplicar métricas matemáticas | `GROUP BY` |
| `agg()` | Calcular múltiples estadísticas agregadas de una sola vez | Múltiples selects (`SUM(), AVG()`) |
| `merge()` | Unir DataFrames cruzando datos mediante columnas clave | `JOIN` (INNER, LEFT, RIGHT) |
| `concat()` | Apilar múltiples DataFrames vertical u horizontalmente | `UNION ALL` |
