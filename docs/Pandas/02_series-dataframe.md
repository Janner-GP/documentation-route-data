---
sidebar_position: 3
---

# Conceptos Básicos: Series y DataFrames

Para dominar Pandas, primero debemos entender sus dos estructuras de datos principales. Piensa en Pandas como **"Excel con superpoderes"** dentro de Python.

---

## 1. ¿Qué es una Series?

Una **Series** es un arreglo unidimensional (como una sola columna de Excel) que puede contener cualquier tipo de dato. La diferencia clave con una lista común es que tiene un **índice**, lo que permite acceder a los elementos por una etiqueta.

:::info Visualización de una Series
Una Series tiene una columna de **Índices** y una columna de **Datos**.
| Índice | Dato |
| :--- | :--- |
| **0** | 25 |
| **1** | 30 |
| **2** | 35 |
:::

### Creación de Series

- Importar la librería dentro de nuestro archivo `.py`.
```python
import pandas as pd
```
- Serie sin etiquetas explícitas
```python
edades_auto = pd.Series([25, 30, 35, 50, 33])
```
```python
0    25
1    30
2    35
3    50
4    33
dtype: int64
```
> [!NOTE]
> Por defecto, Pandas asigna un índice numérico empezando desde `0` si no se especifica uno.

- Con etiquetas explícitas
```python
edades_etiquetas = pd.Series([25, 30, 35, 50, 33], index=["Juan", "Ana", "Pedro", "Antonio", "Maria"])
```
```python
Juan       25
Ana        30
Pedro      35
Antonio    50
Maria      33
dtype: int64
```

#### Puedes llamar un elemento de tu DataFrame mediante su etiqueta.
```python
# Acceso por posición (como una lista)
print(edades_auto[0])  # Salida: 25

# Acceso por etiquetas múltiples
print(edades_etiquetas[["Juan", "Pedro"]])
# Salida:
# Juan     25
# Pedro    35
# dtype: int64
```

```python
print(edades_etiquetas["Antonio"]) # Salida: 50
```

## 2. ¿Qué es un DataFrame?

El **DataFrame** es la estructura reina de Pandas. Es una tabla bidimensional (filas y columnas). Puedes verlo como una colección de `Series` que comparten el mismo índice.

:::info Visualización de un DataFrame
Un DataFrame tiene **Filas** (registros) y **Columnas** (variables).
| | Producto | Precio | Stock |
| :--- | :--- | :--- | :--- |
| **0** | Laptop | 1200 | 15 |
| **1** | Mouse | 25 | 50 |
| **2** | Teclado | 80 | 100 |
:::


### Características principales:
- **Filas:** Representan registros (observaciones).
- **Columnas:** Representan variables (características).
- **Índice:** Las etiquetas de las filas.

### Ejemplo 1: Desde un Diccionario (El más común)
Ideal cuando tienes los datos organizados por columnas.

```python
data = {
    "Producto": ["Laptop", "Mouse", "Monitor", "Teclado"],
    "Precio": [1200, 25, 300, 80],
    "Stock": [15, 50, 20, 100]
}

df_productos = pd.DataFrame(data)
print(df_productos)
```

**Salida:**
```text
   Producto  Precio  Stock
0    Laptop    1200     15
1     Mouse      25     50
2   Monitor     300     20
3   Teclado      80    100
```

### Ejemplo 2: Desde una Lista de Diccionarios
Muy común cuando recibes datos de una API o un archivo JSON.

```python
ventas_data = [
    {"Vendedor": "Ana", "Monto": 500},
    {"Vendedor": "Luis", "Monto": 300},
    {"Vendedor": "Ana", "Monto": 150}
]

df_ventas = pd.DataFrame(ventas_data)
print(df_ventas)
```

**Salida:**
```text
  Vendedor  Monto
0      Ana    500
1     Luis    300
2      Ana    150
```

## 3. Navegando por el DataFrame (iloc vs loc)

Para acceder a datos específicos, Pandas nos ofrece dos herramientas poderosas. Aunque parecen similares, funcionan bajo lógicas diferentes.

### `.iloc[]` - Localización por Índice Entero (Posición)
Se usa cuando conoces la **posición numérica** (fila, columna) empezando desde 0. Es como las coordenadas de una lista o matriz.

```python
# Obtener el valor de la fila 1, columna 0
print(df_productos.iloc[1, 0]) 
# Salida: 'Mouse'
```

### `.loc[]` - Localización por Etiquetas (Nombres)
Se usa cuando quieres buscar por el **nombre** de la fila (índice) o el nombre de la columna.

```python
# Obtener el precio de la primera fila (índice 0)
print(df_productos.loc[0, "Precio"])
# Salida: 1200
```

---

### Comparativa: iloc vs loc

Para entenderlo mejor, veamos cómo se comportan en casos específicos:

#### 1. Slicing (Rebanado)
Esta es la diferencia que más errores causa a los principiantes:
- **`iloc`**: Sigue el estándar de Python (**excluye** el último elemento).
- **`loc`**: **Incluye** el último elemento (porque buscas por nombre, no por rango numérico).

```python
# iloc[0:2] -> Devuelve filas 0 y 1 (2 elementos)
# loc[0:2]  -> Devuelve filas 0, 1 y 2 (3 elementos)
```

#### 2. Selección de Columnas
- Con `iloc` debes saber el número de la columna.
- Con `loc` usas el nombre directamente.

```python
# iloc[:, 0:2] -> Todas las filas, columnas 0 y 1
# loc[:, ["Producto", "Precio"]] -> Todas las filas, estas dos columnas
```

#### 3. Filtrado Condicional (Solo con `.loc`)
`.loc` es ideal para filtrar datos basados en una condición lógica.

```python
# Buscar productos con precio mayor a 100
caros = df_productos.loc[df_productos["Precio"] > 100]
```

### Tabla Comparativa

| Característica | `.iloc` | `.loc` |
| :--- | :--- | :--- |
| **Búsqueda por...** | Posición (Números) | Etiqueta (Nombres) |
| **Slicing [a:b]** | Excluye `b` | Incluye `b` |
| **Uso con booleanos** | No recomendado | Extremadamente potente |
| **Regla mnemotécnica** | **"i"** de **i**nteger | **"l"** de **l**ocation/label |

---

## 4. Tipos de Datos (Dtypes)

Pandas asigna un tipo de dato a cada columna según su contenido. Es vital conocerlos:

| Tipo Pandas | Tipo Python / Uso |
| :--- | :--- |
| `int64` | Números enteros |
| `float64` | Números con decimales |
| `object` | Cadenas de texto (Strings) o mezclas |
| `bool` | Valores lógicos (True/False) |
| `datetime64` | Fechas y horas |

## 5. Atributos Esenciales en Acción

Cuando tienes un DataFrame, puedes usar estos atributos para inspeccionarlo rápidamente. Veamos cómo se ejecutan y qué devuelven:

### `df.shape`
Devuelve una tupla con el número de **(filas, columnas)**.
```python
print(df_productos.shape) # Salida: (4, 3)
```

### `df.columns`
Muestra los nombres de todas las columnas. 
```python
print(df_productos.columns) 
# Salida: Index(['Producto', 'Precio', 'Stock'], dtype='object')
```

### `df.dtypes`
Muestra el tipo de dato de cada columna. Fundamental para saber si puedes operar matemáticamente.
```python
print(df_productos.dtypes)
# Salida:
# Producto    object
# Precio       int64
# Stock        int64
# dtype: object
```

### `df.values`
Extrae los datos puros en formato de matriz (Numpy array), quitando los nombres de filas y columnas.
```python
print(df_productos.values)
# Salida: [['Laptop' 1200 15] ['Mouse' 25 50] ...]
```

---

:::tip Ejercicio de Apoyo
Para ver esto en acción, abre el archivo `guia-pandas-ejercicios-apoyo/02_series-dataframe.py` en tu editor de código y ejecútalo.
:::