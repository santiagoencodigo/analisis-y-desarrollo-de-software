# Codificar el Software

Este directorio contiene el material completo del módulo **Codificar el Software**, correspondiente al quinto trimestre del programa de formación. Aquí se abordan todos los aspectos del desarrollo backend: desde los fundamentos de Python hasta la implementación de aplicaciones web con Django, pasando por programación orientada a objetos, operaciones CRUD y manejo de bases de datos mediante ORM.

El contenido está organizado de forma secuencial para facilitar el aprendizaje progresivo, y cada subcarpeta incluye ejemplos prácticos, ejercicios y documentación de apoyo.

---

## Estructura del Repositorio

```
02-codificar-el-software/
├── 01-fundamentos-python-1/
│   ├── 0-python-essentials-1-certificate.pdf
│   ├── 01-introduccion.md
│   ├── 02-cadenas-y-maths.md
│   ├── 03-inputs-condicionales-bucle.md
│   ├── 04-bucle-y-bit-a-bit.md
│   ├── 05-bit-a-bit.md
│   ├── 06-listas.md
│   ├── 07-algoritmo-burbuja.md
│   ├── 08-operaciones-con-listas.md
│   ├── 09-aplicaciones-avanzadas-listas.md
│   ├── 10-prueba-de-modulo.md
│   ├── 11-funciones.md
│   └── README.md
│
├── 02-fundamentos-python-2/
│   ├── 0-python-essentials-2-certificate.pdf
│   ├── 01-modulo-paquetes-pip.md
│   ├── 02-caracteres-y-cadenas-vs-pc.md
│   ├── 03-prueba-modulo-caracteres.md
│   ├── 04-fundamentos-poo.md
│   ├── 05-miscelaneos.md
│   └── README.md
│
├── 03-CRUD/
│   ├── 01-crud-ejemplo-bd/
│   │   ├── config/
│   │   ├── models/
│   │   ├── services/
│   │   ├── ejemplo_db.sql
│   │   ├── main.py
│   │   └── README.md
│   └── 02-crud-operpan/
│       ├── assets/
│       ├── config/
│       ├── models/
│       ├── services/
│       ├── .gitignore
│       ├── main.py
│       ├── README.md
│       └── requirements.txt
│
├── 04-POO/
│   ├── POO-1.py
│   ├── POO-2.py
│   ├── POO-3-granja.py
│   └── README.md
│
├── 05-Django/
│   ├── django_santiagoencodigo/
│   │   ├── django_santiagoencodigo/
│   │   ├── projectApp/
│   │   ├── manage.py
│   │   └── requirements.txt
│   ├── miweb/
│   │   ├── inicio/
│   │   ├── miweb/
│   │   ├── templates/
│   │   ├── manage.py
│   │   └── requirements.txt
│   ├── .gitignore
│   └── README.md
│
├── 06-ORM/
│   ├── miweb2/
│   ├── miweb3/
│   ├── .gitignore
│   └── README.md
│
├── 07-CRUD-hojas-de-hielo/
│   ├── project/
│   │   ├── hojitas/
│   │   ├── imagenes/
│   │   ├── project/
│   │   ├── manage.py
│   │   └── requirements.txt
│   ├── .gitignore
│   └── README.md
│
├── 08-dos-apps/
│   ├── config/
│   ├── .gitignore
│   └── README.md
│
├── 09-SCRUM.md
├── 10-documentacion-django.md
├── README.md
├── .gitignore
└── index.html
```

---

## Módulos

### 1. Fundamentos de Python 1
Carpeta `01-fundamentos-python-1`

Introducción a la sintaxis y estructuras básicas del lenguaje:
- Variables, cadenas, operaciones matemáticas.
- Entrada de datos, condicionales, bucles.
- Operaciones bit a bit.
- Listas, algoritmos de ordenamiento (burbuja).
- Aplicaciones avanzadas con listas.
- Funciones y prueba de módulo.
- Incluye el certificado *Python Essentials 1* como referencia.

### 2. Fundamentos de Python 2
Carpeta `02-fundamentos-python-2`

Temas más avanzados:
- Módulos, paquetes y uso de pip.
- Manejo de caracteres y cadenas.
- Pruebas de módulos.
- Fundamentos de Programación Orientada a Objetos (POO).
- Misceláneos de utilidad.
- Incluye el certificado *Python Essentials 2*.

### 3. CRUD
Carpeta `03-CRUD`

Implementación de operaciones básicas sobre bases de datos. Dos ejemplos:

- **`01-crud-ejemplo-bd`**: CRUD básico con estructura de configuración, modelos y servicios. Incluye un script `main.py` y un archivo SQL de ejemplo.
- **`02-crud-operpan`**: CRUD aplicado al proyecto **OperPan**. Contiene modelos para `Usuario` y `SolicitudEmpleado`, servicios para cada uno, configuración de base de datos y un `main.py` ejecutable.

### 4. Programación Orientada a Objetos (POO)
Carpeta `04-POO`

Ejercicios prácticos que ilustran los pilares de la POO en Python:
- `POO-1.py`: clases, atributos, métodos, herencia simple.
- `POO-2.py`: encapsulamiento con atributos privados (`_` y `__`).
- `POO-3-granja.py`: polimorfismo mediante una función que opera sobre distintos tipos de objetos.
- Un `README.md` que explica cada archivo y los conceptos clave.

### 5. Django
Carpeta `05-Django`

Introducción al framework web Django. Contiene dos proyectos de ejemplo:

- **`django_santiagoencodigo`**: proyecto base con una aplicación `projectApp`. Muestra la estructura básica de Django (settings, urls, views, models).
- **`miweb`**: proyecto con dos aplicaciones (`inicio` y `miweb`), incluye templates y archivos de gestión. Proporciona una base para desarrollar aplicaciones web completas.

Ambos proyectos incluyen `requirements.txt` para instalar las dependencias necesarias.

### 6. ORM (Object-Relational Mapping)
Carpeta `06-ORM`

Uso del ORM de Django para interactuar con bases de datos. Se incluyen dos proyectos (`miweb2` y `miweb3`) que muestran la definición de modelos, consultas, relaciones y migraciones. El README de esta carpeta detalla los ejemplos.

### 7. CRUD Hojas de Hielo
Carpeta `07-CRUD-hojas-de-hielo`

Proyecto CRUD para el caso de estudio **Hojas de Hielo**. La aplicación `hojitas` contiene modelos, formularios, vistas y templates, y está integrada con el proyecto principal. Incluye archivos de migración y requerimientos.

### 8. Dos Apps
Carpeta `08-dos-apps`

Ejercicio que demuestra cómo estructurar un proyecto Django con dos aplicaciones independientes, fomentando la modularidad y reutilización de código.

### 9. Documentación de Scrum
Archivo `09-SCRUM.md`

Guía sobre el marco de trabajo Scrum: roles, eventos, artefactos y su aplicación en el desarrollo del proyecto formativo. Incluye recomendaciones para la planificación de sprints y la gestión del equipo.

### 10. Documentación de Django
Archivo `10-documentacion-django.md`

Resumen de buenas prácticas, comandos útiles y conceptos avanzados de Django, complementario a los proyectos de ejemplo.

### Archivos adicionales
- `README.md`: este archivo.
- `.gitignore`: reglas para ignorar archivos innecesarios (entornos virtuales, cachés, etc.).
- `index.html`: posible punto de entrada para pruebas de frontend (no central en este módulo).

---

## Tecnologías Utilizadas

- **Lenguajes**: Python 3.x, SQL, HTML/CSS (básico para templates).
- **Frameworks**: Django 4.x.
- **Bases de datos**: SQLite (por defecto) y MySQL (configurable en algunos ejemplos).
- **Control de versiones**: Git y GitHub.
- **Entorno**: Visual Studio Code, terminal, pip, entornos virtuales.

---

## Instrucciones de Ejecución

Cada subcarpeta contiene sus propias instrucciones en su respectivo `README.md`. A continuación, una guía general:

1. **Clonar el repositorio** y navegar a la carpeta deseada.
2. **Crear un entorno virtual** (recomendado):
   ```bash
   python -m venv venv
   source venv/bin/activate      # Linux/Mac
   venv\Scripts\activate         # Windows
   ```
3. **Instalar dependencias** (cuando exista `requirements.txt`):
   ```bash
   pip install -r requirements.txt
   ```
4. **Ejecutar scripts Python** (ej. `main.py`) o **servidores Django**:
   ```bash
   python manage.py runserver
   ```

Consulte la documentación específica de cada módulo para detalles adicionales.

---

*Última actualización: julio de 2026*