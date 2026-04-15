---
sidebar_position: 5
---

# Exploración Inicial de Datos (EDA Básico)

Una vez que hemos cargado nuestros datos, el siguiente paso fundamental es la **Exploración Inicial**. Antes de limpiar o transformar, debemos entender qué tenemos entre manos. 

Este proceso se conoce como **EDA** (Exploratory Data Analysis) y es donde descubrimos la forma, el contenido y la calidad de nuestra información.

---

## 1. El Primer Contacto (`head` y `tail`)

¿Cómo se ven los datos? No podemos imprimir dos millones de filas en pantalla, así que usamos muestras:

- **`df.head(n)`**: Muestra las primeras `n` filas (por defecto 5).
- **`df.tail(n)`**: Muestra las últimas `n` filas.

```python
# Ver el principio
df.head()
```

**Salida con `data.csv`:**
```text
   Duration  Pulse  Maxpulse  Calories
0        60    110       130     409.1
1        60    117       145     479.0
2        60    103       135     340.0
3        45    109       175     282.4
4        45    117       148     406.0
```

```python
# Ver el final (útil para detectar si el archivo se cortó mal)
df.tail(10)
```

**Salida con `data.csv`:**
```text
     Duration  Pulse  Maxpulse  Calories
159        30     80       120     240.9
160        30     85       120     250.4
...
167        75    120       150     320.4
168        75    125       150     330.4
```
---

## 2. Radiografía Técnica (`info` y `shape`)

Aquí es donde revisamos "bajo el capó" del DataFrame.

### `df.info()`
Es la herramienta más completa para diagnosticar problemas rápidamente. Nos dice:
1. El número total de filas.
2. Los nombres de las columnas.
3. El conteo de valores **No-Nulos** (si este número es menor al total de filas, ¡tienes datos faltantes!).
4. El tipo de dato de cada columna (`Dtype`).
5. El uso de memoria.

**Salida con `data.csv`:**
```text
<class 'pandas.DataFrame'>
RangeIndex: 169 entries, 0 to 168
Data columns (total 4 columns):
 #   Column    Non-Null Count  Dtype  
---  ------    --------------  -----  
 0   Duration  169 non-null    int64  
 1   Pulse     169 non-null    int64  
 2   Maxpulse  169 non-null    int64  
 3   Calories  164 non-null    float64
dtypes: float64(1), int64(3)
memory usage: 5.4 KB
```

### `df.shape`
Devuelve una tupla `(filas, columnas)`. Es un atributo, no una función, por lo que no lleva paréntesis.

```python
print(f"Dimensiones del dataset: {df.shape}")
```

**Salida con `data.csv`:**
```text
Dimensiones del dataset: (169, 4)
```
---

## 3. Atributos de Identidad (`columns` y `dtypes`)

A veces solo necesitas una lista rápida para bucles o validaciones:

- **`df.columns`**: Lista de etiquetas de columnas.
- **`df.dtypes`**: Tipos de datos por columna.

```python
print(df.columns)
# Salida: Index(['Duration', 'Pulse', 'Maxpulse', 'Calories'], dtype='object')

print(df.dtypes)
# Salida:
# Duration      int64
# Pulse         int64
# Maxpulse      int64
# Calories    float64
# dtype: object
```
---

## 4. Resumen Estadístico (`describe`)

Si tienes columnas numéricas, `df.describe()` es magia pura. Calcula automáticamente:
- **count**: Cantidad de valores.
- **mean**: Promedio.
- **std**: Desviación estándar (qué tan dispersos están los datos).
- **min / max**: Valores extremos.
- **25%, 50%, 75%**: Percentiles (mediana en el 50%).

```python
# Resumen de columnas numéricas
df.describe()
```

**Salida con `data.csv`:**
```text
         Duration       Pulse    Maxpulse     Calories
count  169.000000  169.000000  169.000000   164.000000
mean    63.846154  107.461538  134.047337   375.800000
std     42.299949   14.510259   16.450434   266.377134
min     15.000000   80.000000  100.000000    50.300000
...
max    300.000000  159.000000  184.000000  1860.400000
```
> [!TIP]
> Si quieres ver estadísticas de columnas de texto (objetos), usa:
> `df.describe(include='object')`

---

## 5. Detectando "Agujeros" y Repeticiones

Antes de saltar al análisis, debemos saber si los datos están completos o si hay registros duplicados.

### Valores Nulos (`isnull`)
Indica qué celdas están vacías. Lo más útil es sumar los nulos por columna para ver dónde falta información.

```python
# ¿Cuántos nulos hay en cada columna?
df.isnull().sum()
```

**Salida con `data.csv`:**
```text
Duration    0
Pulse       0
Maxpulse    0
Calories    5
dtype: int64
```
*(Vemos que 5 registros tienen la columna 'Calories' vacía. Estos son nulos).*

### Registros Duplicados (`duplicated`)
Detecta si hay filas que son copias exactas de otras. Esto puede sesgar tus promedios y cargar el archivo innecesariamente.

```python
# Sumar el total de filas duplicadas en el dataset
df.duplicated().sum() 
# salida esperada 6
```
*(En este caso, tenemos 6 filas que son exactamente iguales a otras).*

---
> **El Checklist del Analista:**
> Cada vez que cargues un dataset, hazte estas 3 preguntas:
> 1. ¿El número de columnas es el que esperaba? (`shape`)
> 2. ¿Hay muchos valores `null`? (`info`)
> 3. ¿El tipo de dato es correcto? (Ej: ¿Es la columna 'Fecha' un `datetime` o un simple `object`?)

---

:::tip Ejercicio de Apoyo
Abre el archivo `guia-pandas-ejercicios-apoyo/04_exploracion_inicial.py` para practicar estas funciones con un dataset real.
:::
