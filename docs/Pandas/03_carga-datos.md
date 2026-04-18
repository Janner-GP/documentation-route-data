---
sidebar_position: 4
---

# Carga de Datos: CSV y JSON

En el mundo real, los datos rara vez están escritos directamente en nuestro código. Lo más común es que necesitemos leerlos de archivos externos. Pandas brilla en esta tarea gracias a sus funciones `read_*`.

---

---

## 1. Carga de archivos CSV

El formato **CSV** (Comma Separated Values) es el estándar de oro para el intercambio de datos tabulares.

:::info Estructura de un CSV
Un archivo CSV organiza los datos en líneas, donde cada valor está separado por una coma (u otro delimitador).
```text
nombre,edad,ciudad
Juan,25,Bogotá
Ana,30,Medellín
```
:::

### Uso básico:
```python
import pandas as pd

# Cargar un archivo CSV simple
df = pd.read_csv("data/data.csv")

# Visualizar las primeras 5 filas
print(df.head())
```

### Parámetros comunes de `read_csv`:
A veces los archivos no vienen perfectos. Aquí algunos trucos:

- **`sep`**: Define el separador. Si tu archivo usa punto y coma (como `datos_sucios.csv`), usa `sep=';'`.
- **`header`**: Indica qué fila es el encabezado.
- **`index_col`**: Elige una columna para que sea el índice. Ejemplo: `index_col="id_dispositivo"`.
- **`nrows`**: Carga solo las primeras N filas.

---

## 2. Carga de archivos JSON

El formato **JSON** (JavaScript Object Notation) es muy común en APIs web y bases de datos NoSQL. Pandas lo convierte automáticamente en una tabla.

**Estructura JSON (Records)**
Los datos suelen venir como una lista de diccionarios.
```json
[
  {"nombre": "Juan", "edad": 25},
  {"nombre": "Ana", "edad": 30}
]
```

### Uso básico:
```python
# Cargar un archivo JSON
df_json = pd.read_json("data/data.json")

# Inspeccionar los datos
print(df_json.info())
```

### Formatos comunes de JSON:
- **Formato "Records"**: Es el esquema estándar de lista de objetos.
- **Formato "Split"**: Separa nombres de columnas, índices y datos en listas independientes para ahorrar espacio.

**Estructura JSON (Split)**
Los datos se separan en tres listas: índices, columnas y valores.
```json
{
  "index": [0, 1],
  "columns": ["nombre", "edad"],
  "data": [
    ["Juan", 25],
    ["Ana", 30]
  ]
}
```
Para leerlo en Pandas, activamos el parámetro `orient="split"`:
```python
# Cargar JSON con formato split
df_split = pd.read_json("data/json/json_split.json", orient="split")
```



---

## 3. Carga de archivos JSONL (JSON Lines)

El formato **JSONL** es una variante donde **cada línea del archivo es un objeto JSON independiente**. Es el formato preferido para datasets masivos porque permite leer el archivo línea por línea sin cargar todo en memoria.

**Estructura JSONL**
A diferencia del JSON estándar, no hay corchetes globales ni comas entre objetos.
```json
{"nombre": "Juan", "edad": 25}
{"nombre": "Ana", "edad": 30}
{"nombre": "Luis", "edad": 28}
```
Para cargar este formato, debemos activar el parámetro `lines=True`.

```python
# Cargar un archivo JSONL
df_jsonl = pd.read_json("data/data_lines.jsonl", lines=True)

# Inspeccionar los primeros 5 datos
print(df_jsonl.head())
```

### ¿Cuándo usar cada uno?
- **CSV**: Para datos puramente tabulares y máxima compatibilidad.
- **JSON**: Para datos jerárquicos, configuraciones o integraciones web.
- **JSONL**: Para logs, streaming de datos o archivos extremadamente grandes.

---


> [!IMPORTANT]
> **Rutas de archivos y el CWD:**
> En Python, las rutas relativas no se calculan desde donde está guardado el archivo `.py`, sino desde donde abriste la terminal (el **Current Working Directory** o CWD).
>
> Si tu terminal está en la raíz del proyecto (`pandas-doc-grupo/`), la ruta `data/csv/data.csv` funciona perfecto. Pero si entras a la carpeta `guia-pandas-ejercicios-apoyo/` en la terminal y ejecutas el script, esa misma ruta fallará porque ahí no existe una carpeta `data`.

### ¿Cómo hacer rutas "indestructibles"?

Para que tu código funcione siempre, sin importar desde dónde abras la terminal, puedes usar la librería `os` para construir rutas basadas en la ubicación del script:

```python
import pandas as pd
import os

# 1. Obtiene la carpeta donde está este script
base_path = os.path.dirname(__file__)

# 2. Construye la ruta subiendo niveles hasta llegar a la carpeta que contiene los archivos y a partir de aqui constuir la ruta hasta el archivo que se desea cargar
csv_path = os.path.join(base_path, "..", "data", "csv", "data.csv")

df = pd.read_csv(csv_path)
```

---

:::tip Ejercicio de Apoyo
Pon esto en práctica abriendo el archivo `guia-pandas-ejercicios-apoyo/03_carga-datos.py`.
:::
