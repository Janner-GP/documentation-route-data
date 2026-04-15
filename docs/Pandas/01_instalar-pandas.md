---
sidebar_position: 2
---

# Instalación y Entorno de Trabajo

Para trabajar en análisis de datos como un profesional, no basta con instalar librerías de forma global. Necesitamos **entornos virtuales** para mantener nuestros proyectos organizados y evitar conflictos de versiones.

En esta guía utilizaremos **`uv`**, un administrador de paquetes de Python extremadamente rápido (escrito en Rust) que simplifica drásticamente el flujo de trabajo.

## Configuración con UV (Recomendado)

### 1. Inicializar el proyecto
Abre tu terminal en la carpeta raíz de tu proyecto y ejecuta el siguiente comando para crear la estructura base:

```bash
uv init
```
*Esto creará un archivo `pyproject.toml` y un archivo `main.py` de prueba.*

### 2. Crear el Entorno Virtual
Crea un entorno aislado para que las librerías de este proyecto no afecten a otros:

```bash
uv venv
```

### 3. Activar el Entorno
Dependiendo de tu sistema operativo, el comando varía:

- **Windows:**
  ```powershell
  .venv\Scripts\activate
  ```
- **macOS / Linux:**
  ```bash
  source .venv/bin/activate
  ```

### 4. Instalar Pandas
Ahora instalamos la librería principal. `uv` se encargará de descargarla y registrarla en las dependencias de tu proyecto:

```bash
uv add pandas
```

**Con estos pasos ya puedes empezar a usar pandas en tu análisis**