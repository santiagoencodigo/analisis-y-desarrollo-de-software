# Bases de datos

Este directorio contiene los materiales, apuntes y ejercicios relacionados con el diseño, modelado y gestión de bases de datos. El contenido aborda desde los conceptos fundamentales y el modelado de artefactos de software, hasta la sintaxis SQL, los procedimientos almacenados, los triggers y el uso de XAMPP como entorno de desarrollo local.

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio)
- [Descripción de contenidos](#descripción-de-contenidos)
- [Relación entre documentos](#relación-entre-documentos)
- [Herramientas y tecnologías](#herramientas-y-tecnologías)
- [Uso práctico](#uso-práctico)

---

## Estructura del directorio

```
03-databases/
├── 01-modelado-artefactos-software.md    # Modelado de artefactos del software
├── 02-introduccion-bases-de-datos.md     # Conceptos generales de bases de datos
├── 03-sintaxis-sql.md                    # Sintaxis SQL y procedimientos almacenados
├── 04-xampp.md                           # Entorno de desarrollo local con XAMPP
└── README.md                             # Este archivo
```

---

## Descripción de contenidos

### `01-modelado-artefactos-software.md`

Introducción al modelado de los artefactos del software. Aborda los conceptos y herramientas necesarias para representar los componentes de un sistema antes de su construcción, incluyendo el modelado de funciones, casos de uso, diagramas de clases y su relación con el diseño de la base de datos.

> Este documento conecta la fase de análisis y diseño del software con la construcción de la base de datos, estableciendo los cimientos para un diseño coherente y bien estructurado.

### `02-introduccion-bases-de-datos.md`

Conceptos generales de bases de datos. Explica qué es una base de datos, los metadatos y el diccionario de datos, los tipos de datos y la restricción de no nulidad, los tipos de bases de datos según su estructura (jerárquica, en red, relacional, multidimensional, orientada a objetos), la clasificación según la naturaleza de los datos (estáticas, dinámicas, documentales, deductivas) y los sistemas de gestión de bases de datos (SGBD).

También aborda el **modelo entidad-relación**, incluyendo entidades, atributos, relaciones, tuplas, claves (primaria, candidata, compuesta, foránea, superclave), y los tipos de relaciones (1:N, N:N, 1:1) con sus respectivas reglas de mapeo. Finalmente, introduce la **normalización** (1FN, 2FN, 3FN), las dependencias funcionales, las reglas de integridad y los lenguajes de los SGBD (DDL, DML, DCL, TCL).

### `03-sintaxis-sql.md`

Guía práctica de la sintaxis SQL utilizada en MySQL. Incluye:

| **Tema** | **Descripción** |
|----------|-----------------|
| **Crear base de datos** | `CREATE DATABASE` y `USE`. |
| **Crear tablas** | `CREATE TABLE` con tipos de datos y restricciones. |
| **Insertar registros** | `INSERT INTO` con múltiples valores y uso de `NOW()`. |
| **Editar registros** | `UPDATE` con cláusula `WHERE`. |
| **Procedimientos almacenados** | Creación de procedimientos básicos, con parámetros de entrada y para insertar datos. |
| **Triggers** | Triggers `BEFORE INSERT` y `AFTER INSERT` con ejemplos. |

### `04-xampp.md`

Guía completa sobre XAMPP como entorno de desarrollo local para bases de datos. Incluye:

| **Tema** | **Descripción** |
|----------|-----------------|
| **Introducción a XAMPP** | Componentes (Apache, MySQL/MariaDB, PHP, Perl) y su función. |
| **Bases de datos locales vs. remotas** | Diferencias entre entorno de desarrollo y producción. |
| **MariaDB** | Historia, diferencias con MySQL y por qué se usa en XAMPP. |
| **MySQL Workbench** | Herramienta visual para diseñar, administrar y consultar bases de datos. |
| **Normalización** | Formas normales (1FN, 2FN, 3FN) y su aplicación práctica. |
| **El archivo .sql** | Diferencia entre el archivo de instrucciones y la base de datos real. |
| **Consola SQL** | Uso de phpMyAdmin y categorías de sentencias SQL (DDL, DML, DQL, DCL, TCL). |
| **Sintaxis SQL** | Ejemplos de `SELECT`, `LIKE`, `IN` y subconsultas. |
| **Procedimientos almacenados** | Tipos de parámetros (IN, OUT, INOUT) y ejemplos de uso. |

---

## Relación entre documentos

La carpeta sigue una secuencia lógica que guía al lector desde el modelado del software hasta la implementación y gestión de la base de datos:

1. **`01-modelado-artefactos-software.md`** – Comprender cómo se modelan los artefactos del software y su relación con la base de datos.
2. **`02-introduccion-bases-de-datos.md`** – Entender los conceptos fundamentales de bases de datos, el modelo entidad-relación y la normalización.
3. **`03-sintaxis-sql.md`** – Aprender la sintaxis SQL para crear, consultar y manipular datos, así como procedimientos almacenados y triggers.
4. **`04-xampp.md`** – Aplicar todo lo aprendido en un entorno de desarrollo local con XAMPP y MySQL/MariaDB.

---

## Herramientas y tecnologías

| **Herramienta** | **Descripción** | **Enlace** |
|-----------------|-----------------|------------|
| **XAMPP** | Paquete de software que incluye Apache, MySQL/MariaDB, PHP y Perl. | [apachefriends.org](https://www.apachefriends.org/es/index.html) |
| **MariaDB** | Sistema de gestión de bases de datos relacional, alternativa libre a MySQL. | [mariadb.org](https://mariadb.org/) |
| **MySQL Workbench** | Herramienta visual para administrar, diseñar y desarrollar bases de datos MySQL. | [mysql.com](https://www.mysql.com/products/workbench/) |
| **phpMyAdmin** | Interfaz web para administrar MySQL/MariaDB. | [phpmyadmin.net](https://www.phpmyadmin.net/) |

---

> Gracias por leer.