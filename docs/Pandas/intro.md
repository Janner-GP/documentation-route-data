---
sidebar_position: 1
---

# Guía de Pandas: de cero a análisis de datos

Bienvenido a esta guía de Pandas, una de las herramientas más importantes en el análisis de datos con Python.

El objetivo de esta guía no es solo aprender funciones, sino entender cómo trabajar con datos de forma estructurada y lógica, como lo haría un analista en un entorno real.

**Se asumen conocimientos básicos de Python.**

---

## ¿Qué es Pandas?

Pandas es una librería de Python diseñada para la manipulación y análisis de datos. Permite trabajar con estructuras tabulares similares a hojas de cálculo o tablas de bases de datos.

Con Pandas puedes:

- Analizar datasets de gran tamaño.
- Limpiar y normalizar datos ruidosos.
- Filtrar información relevante bajo criterios complejos.
- Transformar estructuras de datos de forma eficiente.
- Unir múltiples fuentes de datos (SQL, CSV, JSON, Excel).
- Preparar datos para análisis estadístico o modelos de Machine Learning.

---

**¿Por qué usar pandas?**

Pandas es el estándar de la industria porque es extremadamente eficiente. Mientras que herramientas manuales como Excel tienen límites de memoria y procesamiento, Pandas puede manejar millones de filas con una sintaxis limpia y reproducible, integrándose perfectamente con todo el ecosistema de Ciencia de Datos en Python.

**¿Qué puedo hacer con pandas?**

Prácticamente cualquier tarea de manipulación de datos: desde calcular promedios por categorías y detectar errores en la entrada de datos, hasta resamplear series temporales y pivotar tablas dinámicas complejas con un solo comando.

## Estructura de la guía

La guía está dividida en dos secciones principales:

---

### 1. Guía (conceptos)

Aquí se desarrollan los temas de forma progresiva:

- **Instalación**: Configuración adecuada de Pandas en un entorno virtual.
- **Estructuras básicas**: Dominio de `DataFrame` y `Series`.
- **Carga de datos**: Importación desde CSV, JSON y otros formatos.
- **Exploración inicial**: Primeras inspecciones para entender la calidad del dato.
- **Selección y filtrado**: Cómo extraer exactamente lo que necesitas.
- **Limpieza de datos**: Manejo de nulos y duplicados (próximamente).
- **Agrupaciones y Uniones**: Resúmenes estadísticos y combinación de tablas (próximamente).

Cada tema incluye ejemplos prácticos y fragmentos de código listos para probar.

**Proyecto de ejemplo**: Puedes encontrar el código fuente y los datasets en el [repositorio oficial de este módulo](https://github.com/geissler01/documentation-route-data).

---

### 2. Práctica (aplicación)

En esta sección se aplica lo aprendido sobre un dataset real para replicar un flujo de trabajo profesional:

- Carga y validación.
- Exploración estadística.
- Limpieza profunda.
- Análisis de tendencias.

**Repo de Prácticas**: Accede al [repositorio de ejercicios prácticos](https://github.com/geissler01/documentation-route-data) para poner a prueba tus habilidades.

---

## Cómo usar esta guía

Se recomienda seguir este proceso:

1. Leer el concepto técnico.
2. Ejecutar el código en los archivos `.py` asociados.
3. Modificar los ejemplos para ver cómo cambia el resultado.
4. Probar con tus propios conjuntos de datos.

El aprendizaje real viene de la experimentación y la resolución de problemas.

---

## Estructura del proyecto

El código está organizado por temas para facilitar la consulta rápida:

```
docs/Pandas/
├── 01_instalar-pandas.md
├── 02_series-dataframe.md
├── 03_carga-datos.md
├── 04_exploracion_inicial.md
└── 05_seleccion_filtrado.md
```

└── recursos/
    ├── cheatsheet.md
    └── errores_comunes.md