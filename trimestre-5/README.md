# Trimestre 5 – Análisis y Desarrollo de Software

## Introducción

El quinto trimestre del programa de formación en Análisis y Desarrollo de Software se centra en la construcción integral de aplicaciones funcionales, abarcando desde la creación de interfaces de usuario hasta la implementación del backend y la persistencia de datos. Este período consolida los conocimientos previos en programación, bases de datos y metodologías de desarrollo, orientándolos hacia la materialización de proyectos software completos.

A lo largo del trimestre se abordan secuencialmente los siguientes ejes:

- Desarrollo de componentes de interfaz con HTML, CSS y Bootstrap.
- Fundamentos y programación avanzada en Python.
- Manejo de operaciones CRUD con bases de datos.
- Programación Orientada a Objetos aplicada.
- Introducción al framework Django y su ORM.
- Aplicación del marco de trabajo Scrum para la gestión de proyectos.

El repositorio contiene mis apuntes de estudio, ejercicios prácticos y proyectos guía, organizados de manera modular para facilitar un aprendizaje progresivo y autónomo.

---

## Estructura del Repositorio

El repositorio se organiza en dos bloques principales: **Frontend** y **Backend**, cada uno con sus respectivos submódulos. La numeración indica el orden sugerido de estudio.

```
trimestre-5/
├── 01-crear-componentes-frontend/
├── 02-operations/
├── 06-project-blueprint/
├── 02-codificar-el-software/
├── README.md
├── .gitignore
├── LICENSE
└── index.html
```

### Bloque Frontend

| Carpeta | Descripción |
|---------|-------------|
| `01-crear-componentes-frontend` | Maquetación y estilizado con HTML y CSS nativo. Incluye `01-laika-native`, una réplica de e‑commerce de mascotas sin frameworks. |
| `02-aprendizaje-bootstrap` | Introducción a Bootstrap con ejemplos de formularios, tarjetas, media queries y clonación de Mercado Libre (con JavaScript). |
| `03-facebook-bootstrap` | Clonación de la interfaz de Facebook utilizando Bootstrap. |
| `04-laika-bootstrap` | Replicación de la interfaz de Laika con Bootstrap, organizada en subcarpetas (marcas, cabecera, landing, productos). |
| `05-operpan-v1` | Primera versión del proyecto integrador **OperPan**, con estructura de páginas y recursos gráficos. |
| `06-project-blueprint` | Planificación y diseño del proyecto final (activos, índice HTML y documentación). |
| `02-operations` | Módulo complementario sobre operaciones matemáticas o lógicas. |

### Bloque Backend: `02-codificar-el-software`

| Carpeta / Archivo | Contenido |
|-------------------|-----------|
| `01-fundamentos-python-1` | Sintaxis básica, cadenas, condicionales, bucles, listas, algoritmos de ordenamiento, funciones y certificado *Python Essentials 1*. |
| `02-fundamentos-python-2` | Módulos, paquetes, pip, manejo de caracteres, POO, misceláneos y certificado *Python Essentials 2*. |
| `03-CRUD` | Operaciones CRUD con bases de datos: ejemplos básico (`01-crud-ejemplo-bd`) y aplicado a OperPan (`02-crud-operpan`). |
| `04-POO` | Ejercicios prácticos: `POO-1.py`, `POO-2.py`, `POO-3-granja.py`. |
| `05-Django` | Proyecto `miweb` con aplicaciones `inicio` y `miweb`, templates y archivos de gestión. |
| `06-ORM` | Uso de Object‑Relational Mapping con Django (`miweb2`, `miweb3`). |
| `07-CRUD-hojas-de-hielo` | Proyecto CRUD para el caso de estudio **Hojas de Hielo**. |
| `08-dos-apps` | Ejercicio de creación de dos aplicaciones en un mismo proyecto Django. |
| `09-SCRUM.md` | Guía sobre el marco de trabajo Scrum. |
| `10-documentacion-django.md` | Documentación complementaria sobre Django. |

---

## Tecnologías y Herramientas

- **Frontend**: HTML5, CSS3, Flexbox, Grid, Bootstrap 5.
- **Backend**: Python 3.x, Django 4.x.
- **Bases de datos**: SQL (SQLite, MySQL) y ORM de Django.
- **Control de versiones**: Git y GitHub.
- **Metodología**: Scrum (instructor como Scrum Master).
- **Entorno de desarrollo**: Visual Studio Code, terminal, pip, entornos virtuales.

---

## Metodología de Trabajo

El trimestre se desarrolla bajo un esquema iterativo basado en Scrum, con entregas periódicas (aproximadamente cada semana). Los equipos definen roles y planifican sus sprints con el acompañamiento del instructor. Se promueve la autonomía, la investigación y la participación activa, así como el cumplimiento estricto de las fechas de entrega.

El uso de Git y GitHub es obligatorio para el control de versiones y la colaboración en equipo.

---

## Evidencias y Evaluación

Las evidencias a presentar son:

1. Taller #1 – Interfaz (caso de estudio)
2. Taller #2 – Interfaz (caso de estudio)
3. Cuestionario Frontend
4. Actividades de avance del proyecto (entregas parciales)
5. Maquetación completa del proyecto con usabilidad (integración frontend‑backend)
6. Otras actividades complementarias definidas por el instructor.

Cada evidencia debe alcanzar un mínimo del **70%** de cumplimiento y respetar las fechas límite. La asistencia y puntualidad son requisitos fundamentales; las inasistencias injustificadas o llegadas tardías recurrentes derivan en llamados de atención escritos.

---

## Instrucciones para Comenzar

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd trimestre-5
   ```

2. Explorar las carpetas en orden numérico para un aprendizaje progresivo.

3. Para los módulos de Python y Django, crear un entorno virtual e instalar las dependencias:
   ```bash
   python -m venv venv
   source venv/bin/activate   # En Windows: venv\Scripts\activate
   pip install -r requirements.txt   (cuando exista el archivo)
   ```

4. Ejecutar los scripts o servidores de desarrollo según las instrucciones particulares de cada módulo.

5. Mantener el repositorio sincronizado con GitHub para el control de versiones.

---

*Última actualización: Julio de 2026*