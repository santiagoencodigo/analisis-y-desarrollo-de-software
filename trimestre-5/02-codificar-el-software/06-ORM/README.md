# 06-ORM

[![Django Version](https://img.shields.io/badge/Django-5.x-092e20?logo=django)](https://www.djangoproject.com/)
[![Python Version](https://img.shields.io/badge/Python-3.10+-blue?logo=python)](https://www.python.org/)
[![Database SQLite](https://img.shields.io/badge/Database-SQLite-003b57?logo=sqlite)](https://www.sqlite.org/)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Repositorio educativo destinado al estudio, implementación y comprensión profunda del **Mapeo Objeto-Relacional (ORM)** utilizando el framework Django.

El proyecto documenta la evolución desde una aplicación clásica de gestión de tareas (CRUD) hasta la incorporación de un sistema completo de autenticación de usuarios.

Este repositorio funciona como un laboratorio práctico para explorar:

- Abstracción de bases de datos mediante ORM
- Panel administrativo de Django
- Modelos y migraciones
- Vistas basadas en funciones
- Gestión de usuarios y autenticación

---

# Estructura del Proyecto

La arquitectura del repositorio está organizada en dos subproyectos independientes, cada uno enfocado en un objetivo pedagógico específico.

```text
06-ORM/
├── miweb2/                      # Aplicación de gestión de tareas (CRUD)
│   ├── manage.py
│   ├── db.sqlite3
│   ├── tareas/                  # App principal (models, views, urls)
│   ├── miweb2/                  # Configuración del proyecto
│   ├── templates/               # Plantillas HTML del proyecto
│   └── README.md                # Documentación específica de miweb2
│
├── miweb3/                      # Sistema de autenticación de usuarios
│   ├── manage.py
│   ├── db.sqlite3
│   ├── usuarios/                # App de gestión de usuarios
│   ├── miweb3/                  # Configuración del proyecto
│   └── README.md                # Documentación específica de miweb3
│
├── assets/                      # Recursos gráficos (screenshots, diagramas)
└── README.md                    # Archivo principal del repositorio
```

---

# Propósito General

El objetivo principal de este repositorio es demostrar y documentar el uso del ORM de Django como una capa de abstracción entre el código Python y el motor de base de datos subyacente.

A través del desarrollo incremental de dos aplicaciones funcionales, se exploran conceptos fundamentales como:

- Definición de modelos como representación de tablas relacionales
- Generación y aplicación de migraciones (`makemigrations`, `migrate`)
- Operaciones CRUD sin escribir SQL explícito
- Integración con el panel administrativo de Django
- Gestión de usuarios y autenticación utilizando el sistema nativo de Django

---

# Subproyectos

| Subproyecto | Propósito | Tecnologías clave |
|---|---|---|
| `miweb2` | Aplicación de lista de tareas con operaciones CRUD completas | Modelos, vistas basadas en funciones, templates, ORM, SQLite |
| `miweb3` | Sistema de registro, inicio y cierre de sesión de usuarios | `UserCreationForm`, autenticación, sesiones, mensajes flash |

---

# miweb2 – Gestor de Tareas

Aplicación enfocada en la gestión de tareas mediante operaciones CRUD.

## Funcionalidades

- Crear tareas con título, descripción y estado
- Listar tareas disponibles
- Filtrar tareas completadas
- Editar tareas existentes
- Eliminar tareas

## Modelo principal

```python
class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    estado = models.BooleanField(default=True)
    fecha = models.DateTimeField(auto_now_add=True)
```

Para más detalles sobre vistas, URLs e implementación:

```text
miweb2/README.md
```

---

# miweb3 – Autenticación de Usuarios

Subproyecto enfocado en implementar un sistema básico de autenticación utilizando `django.contrib.auth`.

## Funcionalidades

- Registro de usuarios
- Inicio de sesión
- Cierre de sesión
- Validación de credenciales
- Mensajes contextuales de éxito y error

## Flujo de trabajo

```text
Registro → Login → Home → Logout
```

Para más información sobre formularios, vistas y templates:

```text
miweb3/README.md
```

---

# Primeros Pasos

## Requisitos Previos

- Python 3.10 o superior
- pip
- Entorno virtual recomendado

---

# Instalación y Ejecución

## 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/06-ORM.git
cd 06-ORM
```

---

## 2. Acceder al subproyecto deseado

```bash
cd miweb2
# o
cd miweb3
```

---

## 3. Crear y activar entorno virtual

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

---

## 4. Instalar dependencias

```bash
pip install -r requirements.txt
```

Si no existe `requirements.txt`:

```bash
pip install django
```

---

## 5. Aplicar migraciones

```bash
python manage.py migrate
```

---

## 6. Crear superusuario (Opcional)

```bash
python manage.py createsuperuser
```

---

## 7. Iniciar servidor de desarrollo

```bash
python manage.py runserver
```

---

## 8. Abrir en el navegador

```text
http://127.0.0.1:8000
```

---

# Conceptos ORM Aplicados

A lo largo de ambos proyectos se demuestra el funcionamiento del ORM de Django mediante operaciones equivalentes a SQL tradicional.

| SQL | ORM Django |
|---|---|
| `INSERT INTO ...` | `Tarea.objects.create(...)` |
| `SELECT * FROM ...` | `Tarea.objects.all()` |
| `UPDATE ... SET ...` | `tarea.save()` |
| `DELETE FROM ...` | `tarea.delete()` |
| `SELECT ... WHERE ...` | `Tarea.objects.filter(estado=True)` |

Durante el desarrollo no fue necesario escribir instrucciones SQL manualmente, demostrando la portabilidad y mantenibilidad del enfoque ORM.

---

# Recursos Complementarios

- Django Official Documentation – ORM
- Django: The web framework for perfectionists with deadlines
- What is Django? – AWS
- Repositorio oficial de Django en GitHub

---

# Contribuciones

Este repositorio tiene un propósito educativo.

Si deseas sugerir mejoras, reportar errores o ampliar los ejemplos, puedes abrir un issue o enviar un pull request.

---

# Licencia

Este proyecto se distribuye bajo la licencia MIT.

Puedes usarlo, modificarlo y distribuirlo libremente siempre que se mantenga la atribución correspondiente.

---

Documentación generada como parte del aprendizaje práctico de Django y el patrón ORM.