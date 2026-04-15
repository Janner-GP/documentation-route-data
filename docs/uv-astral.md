---
id: uv-astral
title: uv — Gestor de paquetes Python (Astral)
sidebar_label: uv (Astral)
---

# uv — Gestor de paquetes de Python by Astral

## ¿Qué es uv?

**uv** es un gestor de paquetes y entornos virtuales para Python, desarrollado por la empresa **Astral**. Está escrito en **Rust**, lo que lo hace extremadamente rápido comparado con herramientas tradicionales como `pip` o `virtualenv`.

uv reemplaza en un solo comando herramientas como:

- `pip` → instalación de paquetes
- `virtualenv` / `venv` → creación de entornos virtuales
- `pip-tools` → gestión de dependencias con lockfile

---

## ¿Para qué sirve?

uv resuelve los problemas más comunes del ecosistema Python:

| Problema | Solución con uv |
|---|---|
| Instalar paquetes lentamente | Instalación hasta **10x más rápida** que pip |
| Conflictos entre proyectos | Entornos virtuales aislados por proyecto |
| Reproducibilidad | Genera `uv.lock` con versiones exactas |
| Múltiples versiones de Python | Gestión de versiones de Python integrada |

---

## Instalación

### En Windows (PowerShell)

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### En macOS / Linux

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Verificar instalación

```bash
uv --version
```

---

## Comandos principales

### Gestión de proyectos

```bash
# Iniciar un nuevo proyecto
uv init nombre-proyecto

# Entrar al proyecto
cd nombre-proyecto
```

### Entornos virtuales

```bash
# Crear un entorno virtual
uv venv

# Activar el entorno (Windows)
.venv\Scripts\activate

# Activar el entorno (macOS/Linux)
source .venv/bin/activate
```

### Instalar paquetes

```bash
# Instalar un paquete
uv add pandas

# Instalar múltiples paquetes
uv add fastapi uvicorn sqlalchemy

# Instalar dependencias de desarrollo
uv add --dev pytest black

# Instalar desde requirements.txt
uv pip install -r requirements.txt
```

### Eliminar paquetes

```bash
# Eliminar un paquete
uv remove pandas
```

### Sincronizar dependencias

```bash
# Instalar todo lo del lockfile (ideal al clonar un proyecto)
uv sync
```

### Gestión de versiones de Python

```bash
# Ver versiones disponibles
uv python list

# Instalar una versión específica de Python
uv python install 3.12

# Usar una versión específica en el proyecto
uv python pin 3.12
```

### Ejecutar scripts

```bash
# Ejecutar un archivo Python dentro del entorno
uv run main.py

# Ejecutar un comando dentro del entorno
uv run pytest
```

---

## Flujo de trabajo típico

```bash
# 1. Crear proyecto
uv init mi-proyecto
cd mi-proyecto

# 2. Crear entorno virtual
uv venv

# 3. Activar entorno (Windows)
.venv\Scripts\activate

# 4. Agregar dependencias
uv add fastapi pandas

# 5. Ejecutar el proyecto
uv run main.py
```

---

## ¿Por qué usar uv en lugar de pip?

- **Velocidad**: uv es significativamente más rápido en la resolución e instalación de dependencias.
- **Reproducibilidad**: el archivo `uv.lock` garantiza que todos instalen exactamente las mismas versiones.
- **Todo en uno**: no necesitas instalar `virtualenv`, `pip-tools` u otras herramientas por separado.
- **Compatible**: funciona con proyectos que ya usan `requirements.txt` o `pyproject.toml`.

---

## Referencias

- [Documentación oficial de uv](https://docs.astral.sh/uv/)
- [Repositorio en GitHub](https://github.com/astral-sh/uv)
- [Sitio de Astral](https://astral.sh)
