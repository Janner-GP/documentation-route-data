---
sidebar_position: 7
---

# 07 - Transformación de Datos

La transformación de datos es una de las etapas más críticas en el análisis. Rara vez los datos vienen en el formato exacto que necesitamos. Transformar implica cambiar la estructura, el tipo o el valor de los datos para que sean útiles para nuestro análisis.

En este módulo aprenderemos a normalizar categorías, aplicar funciones personalizadas y categorizar datos numéricos de forma sencilla y clara.

---

## 1. Renombrado de Columnas e Índices

El método `rename()` permite cambiar nombres de columnas o índices de forma precisa mediante diccionarios.

```python
# 1. Definimos los cambios en un diccionario: { "nombre_actual": "nombre_nuevo" }
columnas_nuevas = {
    "costo_usd": "coste",
    "region": "zona"
}

# 2. Aplicamos el cambio usando el parámetro 'columns'
df = df.rename(columns=columnas_nuevas)
```

**Explicación paso a paso:**
- `columnas_nuevas`: Creamos un "mapa" donde la clave es el nombre original que queremos cambiar y el valor es el nuevo nombre que deseamos asignar.
- `df.rename(columns=...)`: Esta función busca en el DataFrame las columnas que coincidan con las llaves del diccionario y las reemplaza. Al asignar el resultado de nuevo a `df`, estamos sobreescribiendo el objeto con los nombres actualizados.

---

## 2. Reemplazo de Valores (Estandarización)

`replace()` es ideal para corregir términos específicos o unificar criterios sin necesidad de crear nuevas columnas.

```python
# 1. Reemplazamos un término específico en una columna
df['prioridad'] = df['prioridad'].replace("Crítica", "Urgente")

# 2. Reemplazo múltiple usando listas
df['zona'] = df['zona'].replace(["Latam", "USA-East"], ["Latinoamérica", "Norteamérica Este"])
```

**Explicación paso a paso:**
- `df['prioridad'].replace(...)`: Buscamos en la columna de prioridad la palabra "Crítica" y la sustituimos por "Urgente" para que el lenguaje sea más consistente.
- `replace([lista_vieja], [lista_nueva])`: Pandas busca el primer elemento de la primera lista y lo cambia por el primero de la segunda, y así sucesivamente. Es una forma muy eficiente de normalizar múltiples categorías ruidosas en un solo comando.

---

## 3. Mapeo de Categorías (`map`)

El método `map()` solo funciona en **Series** (columnas). Se usa principalmente para traducir valores de texto a una escala numérica o a etiquetas más simples.

```python
# 1. Definimos la escala de traducción (Diccionario)
niveles_prioridad = {
    "Baja": 1,
    "Media": 2,
    "Alta": 3,
    "Urgente": 4
}

# 2. Creamos una nueva columna con los valores traducidos
df['prioridad_rank'] = df['prioridad'].map(niveles_prioridad)
```

**Explicación paso a paso:**
- `niveles_prioridad`: Establecemos una jerarquía lógica donde asignamos un número a cada palabra.
- `df['prioridad'].map(...)`: Pandas recorre cada celda de la columna. Si encuentra una coincidencia en el diccionario, coloca el número correspondiente en la nueva columna `prioridad_rank`. Si el valor original no está en el diccionario, Pandas pondrá un valor nulo (`NaN`).

---

## 4. Aplicación de Funciones (`apply`)

`apply()` permite ejecutar funciones personalizadas o funciones "lambda" (rápidas) sobre nuestros datos.

### Transformación en una Columna
```python
# Convertimos el texto a mayúsculas asegurando que sea string
df['servicio'] = df['servicio'].apply(lambda x: str(x).upper())
```

**Explicación:**
- `lambda x:`: Define una función anónima donde `x` representa cada valor individual de la columna.
- `str(x).upper()`: Convierte el valor a tipo texto y luego a mayúsculas. El `apply` repite esta operación en cada fila de la columna de forma automática.

### Transformación usando Varias Columnas
```python
def calcular_iva(fila):
    # Si la zona es Latam aplicamos 19%, para otros 15%
    if fila['zona'] == 'Latam':
        return fila['coste'] * 0.19
    return fila['coste'] * 0.15

df['iva'] = df.apply(calcular_iva, axis=1)
```

**Explicación:**
- `def calcular_iva(fila)`: Creamos una función que recibe una **fila completa**, permitiéndonos comparar valores de distintas columnas (como `zona` y `coste`).
- `df.apply(..., axis=1)`: El parámetro `axis=1` es vital; le indica a Pandas que procese los datos **fila por fila**, enviando la información de todas las columnas a nuestra función.

---

## 5. Segmentación de Datos (`pd.cut`)

Útil para convertir valores numéricos continuos en categorías discretas (rangos).

```python
# 1. Definimos nombres para nuestros rangos
etiquetas = ["Económico", "Estándar", "Premium"]

# 2. Creamos 3 grupos basados en el rango de valores
df['segmento_gasto'] = pd.cut(df['coste'], bins=3, labels=etiquetas)
```

**Explicación paso a paso:**
- `etiquetas`: Son los nombres que daremos a los grupos resultantes.
- `pd.cut(...)`: Pandas identifica el valor mínimo y máximo de la columna `coste`, divide ese espacio en 3 intervalos iguales y asigna la etiqueta correspondiente según el valor de cada fila.

---

## 6. Variables de Indicador (Dummies)

Cuando tenemos categorías (como departamentos), generamos columnas separadas de 0 y 1 para indicar la presencia de dicha categoría.

```python
# 1. Generamos las columnas de indicadores
indicadores = pd.get_dummies(df['departamento'], prefix='dep')

# 2. Las pegamos al DataFrame principal
df_final = pd.concat([df, indicadores], axis=1)
```

**Explicación paso a paso:**
- `pd.get_dummies(...)`: Crea una columna nueva por cada departamento único (ej: `dep_Soporte`, `dep_DevOps`). Si una fila pertenece a DevOps, tendrá un 1 en esa columna y 0 en las demás.
- `pd.concat(..., axis=1)`: Une horizontalmente las nuevas columnas con los datos originales, permitiéndonos ver la relación entre los datos originales y sus nuevos indicadores.

---

## Resumen del Tema

| Función | Uso principal | Objeto |
| :--- | :--- | :--- |
| `rename()` | Cambiar nombres de columnas o índices | DataFrame/Series |
| `replace()` | Sustituir valores específicos (limpieza) | DataFrame/Series |
| `map()` | Traducir valores usando un diccionario | Series |
| `apply()` | Aplicar funciones personalizadas complejas | DataFrame/Series |
| `pd.cut()` | Segmentar números en rangos (bins) | Series |
| `get_dummies()` | Crear columnas de indicadores (0 y 1) | DataFrame |
