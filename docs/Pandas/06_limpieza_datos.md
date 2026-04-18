---
sidebar_position: 7
---

# Limpieza de Datos con Pandas

En el mundo real, los datos son sucios. Tienen huecos, están repetidos o formateados de formas extrañas. La limpieza de datos (Data Cleaning) es el proceso de sanear el dataset para que el análisis sea confiable.

---

## 1. Detección de Valores Nulos (NaN)

Antes de arreglar algo, debemos saber qué está roto. Pandas usa `NaN` (Not a Number) para representar valores faltantes.

### Detectar nulos por columna
```python
# Retorna el conteo de nulos por cada columna
df.isna().sum()
```

### Visualización rápida
```python
# info() es vital para ver cuántos valores "non-null" tenemos comparado con el total
df.info()
```

---

## 2. Tratamiento de Valores Faltantes

Tenemos dos caminos principales: eliminar o rellenar.

### Opción A: Eliminar (`dropna`)
Útil cuando la cantidad de nulos es mínima o la fila no sirve sin ese dato.
```python
# Elimina cualquier fila que tenga al menos un nulo
df_limpio = df.dropna()

# Elimina filas solo si falta un valor en una columna específica
df_limpio = df.dropna(subset=['producto'])
```

### Opción B: Rellenar (`fillna`)
Útil para no perder datos, usando un valor por defecto o un cálculo (como el promedio).
```python
# Rellenar con un valor fijo
df['categoria'] = df['categoria'].fillna('Sin Categoría')

# Rellenar con la media (imputación)
df['precio'] = df['precio'].fillna(df['precio'].mean())

# Reemplazar un valor específico por otro (ej. corregir errores de carga)
# Sustituye 'Nan' (texto) por 'Desconocido'
df['categoria'] = df['categoria'].replace('Nan', 'Desconocido')
```
---

## 3. Gestión de Duplicados

Las filas repetidas pueden sesgar tus estadísticas (inflar ventas, por ejemplo).

### Identificar duplicados
```python
# Retorna True para las filas que ya aparecieron antes
df.duplicated().sum()
```

### Eliminar duplicados
```python
# Mantiene solo la primera aparición y borra el resto
df = df.drop_duplicates()
```

---

## 5. Atributos de String más comunes

Pandas permite manipular texto de forma masiva usando el accesorio `.str`.

| Método | Propósito | Sintaxis |
| :--- | :--- | :--- |
| `lower()` | Todo a minúsculas | `df['col'].str.lower()` |
| `upper()` | Todo a MAYÚSCULAS | `df['col'].str.upper()` |
| `capitalize()` | Primera letra en mayúscula | `df['col'].str.capitalize()` |
| `title()` | Formato De Título | `df['col'].str.title()` |
| `strip()` | Elimina espacios a los lados | `df['col'].str.strip()` |
| `replace()` | Reemplaza caracteres | `df['col'].str.replace('a', 'b')` |
| `contains()` | Busca una subcadena | `df['col'].str.contains('texto')` |

---

## 6. Regex y Reemplazos Avanzados

A veces los datos vienen con caracteres "ruido" que impiden que Pandas los reconozca como números. En nuestro ejercicio práctico, limpiamos la columna `precio` que tenía símbolos de dólar (`$`) y puntos decimales mal escritos como puntos y comas (`;`).

```python
# Pasos para limpiar una columna numérica "sucia":
df['precio'] = (
    df['precio']
    .astype(str)                         # 1. Aseguramos que sea texto (.str solo funciona en strings)
    .str.replace('$', '', regex=False)   # 2. Quitamos el símbolo '$'
    .str.replace(';', '.', regex=False)  # 3. Cambiamos ';' por '.' para que sea decimal válido
)

# Finalmente, convertimos el texto limpio a número real (float)
df['precio'] = pd.to_numeric(df['precio'], errors='coerce')
```

> [!IMPORTANT]
> **¿Qué es `regex=False`?**
> Por defecto, `str.replace` intenta interpretar lo que buscas como una "Expresión Regular" (un patrón complejo). Al poner `regex=False`, le decimos a Pandas: "busca exactamente este caracter literal y cámbialo", lo cual es más sencillo y rápido para caracteres básicos como `$` o `;`.

---

## 7. Limpieza Numérica Avanzada

### Redondeo (`round`)
```python
# Redondear a 2 decimales
df['precio'] = df['precio'].round(2)
```

### Manejo de Outliers (Valores Atípicos)
Si detectas valores imposibles (como una edad de 500 años), puedes usar `.loc` para corregirlos.

```python
# Reemplazar valores mayores a 1000 por 0 o por el promedio
df.loc[df['existencias'] > 1000, 'existencias'] = 0
```

---

## 8. Conversión de Tipos

A veces los números se cargan como texto, o las fechas no son reconocidas como tales.

### Cambiar tipo de dato (`astype`)
```python
# Convertir una columna a entero
df['existencias'] = df['existencias'].astype(int)
```

### Convertir a Fecha (`to_datetime`)

En datasets "sucios", es común encontrar diferentes formatos de fecha en la misma columna.

```python
# format='mixed' permite que Pandas detecte distintos formatos automáticamente
# dayfirst=True es vital si tus fechas vienen como DD/MM/AAAA
df['fecha'] = pd.to_datetime(df['fecha'], format='mixed', dayfirst=True, errors='coerce')
```

> [!TIP]
> Al usar `errors='coerce'`, cualquier fecha que sea imposible de leer se convertirá en `NaT` (Not a Time), lo que evita que el script se detenga por errores.

---

:::tip Ejercicio de Apoyo
Abre el archivo `guia-pandas-ejercicios-apoyo/06_limpieza_datos.py`. Allí encontrarás un dataset configurado para ser "sucio" a propósito, donde podrás aplicar todas estas técnicas.
:::
