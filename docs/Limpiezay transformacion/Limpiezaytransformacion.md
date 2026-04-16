# Guía Práctica: Limpieza y Transformación de Datos con Pandas

En el mundo real del Análisis de Datos, la información casi nunca llega perfecta. Viene con errores de digitación, espacios en blanco o formatos incorrectos. Si analizamos datos sucios, nuestras conclusiones y gráficos serán erróneos. 

A este proceso de preparación se le conoce como **Data Wrangling**. A continuación, veremos los pasos esenciales utilizando Python y la librería `pandas`.

---

###### Preparación
Primero, importamos nuestra herramienta principal y cargamos los datos. Imaginemos que trabajamos con un archivo de ventas (`ventas_tienda.csv`).

```python
import pandas as pd

# Cargamos el dataset
df = pd.read_csv('ventas_tienda.csv')

# Un buen hábito: echar un vistazo a las primeras 5 filas para entender qué tenemos
print(df.head())


```

## Fase 1: Limpieza de Datos
El objetivo aquí es corregir o eliminar todo aquello que distorsione nuestro análisis (errores, datos faltantes o repetidos).

1. Eliminar Duplicados
¿Por qué? Un error en el sistema o un usuario haciendo "doble clic" puede generar registros repetidos, lo que inflaría nuestras métricas de ventas.

```python
# Verificamos cuántos duplicados hay
print("Filas duplicadas:", df.duplicated().sum())

# Eliminamos las filas repetidas y guardamos el cambio
df = df.drop_duplicates()

```

2. Tratar Valores Nulos (Faltantes)
¿Por qué? A veces la gente no llena todos los campos en un formulario (ej. dejan la 'edad' en blanco). Pandas los muestra como NaN (Not a Number). Los algoritmos y muchos gráficos fallan si hay nulos.

¿Qué hacemos? O borramos la fila completa, o rellenamos el hueco con un valor lógico (como el promedio).

```python
# Opción A: Rellenar edades faltantes con la edad promedio de los demás clientes
promedio_edad = df['edad'].mean()
df['edad'] = df['edad'].fillna(promedio_edad)

# Opción B: Si a una venta le falta el 'id_cliente', ese dato no nos sirve. Borramos la fila.
df = df.dropna(subset=['id_cliente'])

```

3. Corregir Datos Ilógicos o Atípicos
¿Por qué? Si encontramos una venta con un total de "-$50" o un cliente de "200 años", sabemos que es un error humano. Debemos ajustarlo a la lógica del negocio.

```python
# Los precios no pueden ser negativos. Convertimos todo a números positivos (valor absoluto)
df['total_gastado'] = df['total_gastado'].abs()

# Las edades irreales las podemos poner en un límite máximo (ej. 90 años)
df.loc[df['edad'] > 90, 'edad'] = 90

```
***
## Fase 2: Transformación de Datos

Los datos ya no tienen errores graves, pero necesitamos cambiarles la forma o el formato para poder sacarles provecho analítico.

1. Estandarizar Textos (Strings)
¿Por qué? Si en la columna de ciudad dice "BOGOTÁ", "Bogota " y "bogotá", Pandas pensará que son 3 ciudades diferentes al momento de hacer un gráfico. Hay que unificar.


```python
# Convertimos todo a minúsculas y quitamos espacios vacíos al principio y al final
df['ciudad'] = df['ciudad'].str.lower().str.strip()

2.Corregir Tipos de Datos (Fechas)
¿Por qué? Las fechas suelen importarse como simple texto. Si queremos agrupar las ventas "por mes" o "por año", necesitamos que Python entienda que es una fecha real.

# Convertimos la columna de texto a formato fecha (datetime)
df['fecha_compra'] = pd.to_datetime(df['fecha_compra'])

# ¡Ahora podemos extraer nueva información fácilmente!
df['mes_compra'] = df['fecha_compra'].dt.mont 

```


3. Escalamiento de Datos (Estandarización)
¿Por qué? Si vas a usar Machine Learning (por ejemplo, para agrupar clientes similares), el algoritmo puede confundirse al comparar "Edad" (números del 18 al 90) con "Total Gastado" (números de miles o millones). El escalamiento pone todo en la misma proporción para que se comparen justamente.

Usamos la Estandarización: convierte el promedio en 0. Si estás por encima del promedio serás un número positivo (ej. 1.2), si estás por debajo, negativo (ej. -0.8).

```python
from sklearn.preprocessing import StandardScaler

escalador = StandardScaler()

# Elegimos las columnas numéricas con escalas muy distintas
columnas = ['edad', 'total_gastado']

# Aplicamos la transformación matemática
df[columnas] = escalador.fit_transform(df[columnas])


```
## Paso Final: Guardar el Trabajo
Una regla de oro en datos: nunca sobrescribas el archivo original. Guarda tus datos ya procesados en un archivo nuevo para conectarlo a tu base de datos o a tu dashboard.



```python
# Guardamos sin el índice numérico que agrega Pandas
df.to_csv('ventas_tienda_limpio.csv', index=False)
``` 