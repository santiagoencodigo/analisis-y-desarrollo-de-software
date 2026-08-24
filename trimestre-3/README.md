# Tercer Trimestre — ADSO

> **Nota:** Este repositorio documenta únicamente los temas técnicos relacionados con el desarrollo de software. Los contenidos de **Inglés** y **Cultura Física**, aunque fueron parte de la formación, no se incluyen en este repositorio por estar fuera del enfoque técnico.

---

## Tabla de contenido

- [Descripción general](#descripción-general)
- [Horario de formación](#horario-de-formación)
- [Estructura del directorio](#estructura-del-directorio-trimestre-3)
- [Módulos y temas vistos](#módulos-y-temas-vistos)
  - [Algoritmia y fundamentos de Python](#algoritmia-y-fundamentos-de-python)
  - [JavaScript y Programación Orientada a Objetos](#javascript-y-programación-orientada-a-objetos)
  - [Investigación y análisis de proyectos](#investigación-y-análisis-de-proyectos)
  - [Bases de datos y modelado de datos](#bases-de-datos-y-modelado-de-datos)
- [Próximos pasos](#próximos-pasos)
- [Reflexión personal](#reflexión-personal)

---

## Descripción general

Este directorio agrupa todo el material, ejercicios, scripts y documentación generada durante el **tercer trimestre** del programa de formación **Análisis y Desarrollo de Software (ADSO)**.

A lo largo de estas semanas se abordaron tres grandes áreas: **programación con Python**, **fundamentos de JavaScript y Programación Orientada a Objetos**, e **introducción a las bases de datos relacionales** con sus respectivos modelos y consultas SQL. Cada una de estas áreas se trabajó de manera práctica y orientada a la construcción de un proyecto formativo.

---

## Horario de formación

El tercer trimestre se desarrolla en jornada matutina, de **6:00 a 12:00**, de lunes a viernes. La distribución de competencias y resultados de aprendizaje es la siguiente:

| **Día** | **Horario** | **Competencia** | **Resultado de Aprendizaje** |
|---------|-------------|-----------------|------------------------------|
| **Lunes** | 6:00 - 12:00 | Modelado de los artefactos del software. | **01** Elaborar los artefactos de diseño del software siguiendo las prácticas de la metodología seleccionada. |
| **Martes** | 6:00 - 9:00 | Investigación | **04** Proponer soluciones a las necesidades del contexto según resultados de la investigación. <br> **01** Analizar el contexto productivo según sus características y necesidades. <br> **03** Argumentar aspectos teóricos del proyecto según referentes nacionales e internacionales. <br> **02** Estructurar el proyecto de acuerdo a criterios de la investigación. |
| **Martes** | 9:00 - 12:00 | Modelado de los artefactos del software. | **04** Verificar los entregables de la fase de diseño del software de acuerdo con lo establecido en el informe de análisis. |
| **Miércoles** | 6:00 - 9:00 | Actividad física y hábitos de vida saludable | *(No documentado en este repositorio)* |
| **Miércoles** | 9:00 - 12:00 | Inglés | *(No documentado en este repositorio)* |
| **Jueves** | 6:00 - 12:00 | Modelado de los artefactos del software. | **02** Estructurar el modelo de datos del software de acuerdo con las especificaciones del análisis. |
| **Viernes** | 6:00 - 9:00 | Modelado de los artefactos del software. | **01** Elaborar los artefactos de diseño del software siguiendo las prácticas de la metodología seleccionada. |
| **Viernes** | 9:00 - 12:00 | Modelado de los artefactos del software. | **02** Estructurar el modelo de datos del software de acuerdo con las especificaciones del análisis. |

---

## Estructura del directorio `trimestre-3/`

```
trimestre-3/
├── algoritmia/                         # Ejercicios de fundamentos de Python
│   ├── 1_condicionales.py               # Condicionales
│   ├── 2_operadores.py                  # Operadores
│   ├── 3_listas.py                      # Listas
│   ├── modulos/                         # Módulos reutilizables
│   │   ├── ejercicios_y_datos.py
│   │   ├── modulo-datos.py
│   │   └── modulo-tablas.py
│   └── modulos-2/                       # Segundo conjunto de módulos
│       ├── calculadora.py
│       └── modulo.py
├── databases/                           # Bases de datos relacionales
│   ├── README.md
│   ├── sintaxis-sql.md                  # Sintaxis básica de SQL
│   ├── triggers.md                      # Disparadores
│   ├── xampp.md                         # Guía de XAMPP
│   └── xampp-2.md
├── investigacion/                       # Trabajo de investigación y análisis
│   └── README.md
├── javascript/                          # Ejercicios de JavaScript
│   ├── index.html
│   └── main.js
├── poo/                                 # Programación Orientada a Objetos
│   ├── modulo.py
│   ├── poo-1.py
│   ├── poo-2.py
│   ├── usuario.py
│   └── README.md
├── prueba-tecnica/                      # Evaluación práctica
│   ├── calculadora.png
│   ├── index.html
│   └── README.md
├── python/                              # Scripts varios de Python
│   └── (archivos y scripts varios)
└── README.md                            # Este archivo
```

---

## Módulos y temas vistos

### Algoritmia y fundamentos de Python

> Clases de los días **lunes** en horario completo (6:00 - 12:00).

En este bloque nos adentramos en el lenguaje Python desde sus bases. Fue un espacio netamente práctico donde escribimos código desde cero y aprendimos los fundamentos que luego nos servirían para proyectos más complejos.

**Temas principales:**

- Sintaxis básica de Python (variables, tipos de datos, estructuras de control).
- Condicionales (`if`, `elif`, `else`).
- Funciones: definición, parámetros, retorno y alcance de variables.
- Estructuras de datos: listas, tuplas, diccionarios.
- Manejo de módulos: importar y reutilizar código desde otros archivos.
- Creación de una **calculadora en terminal** (básica pero funcional).
- Simulación de un **sistema de login** con validación de credenciales.

**Archivos destacados:**

- `algoritmia/1_condicionales.py`
- `algoritmia/2_operadores.py`
- `algoritmia/3_listas.py`
- `algoritmia/modulos/calculadora.py`

---

### JavaScript y Programación Orientada a Objetos

> Clases de los días **martes** en el segundo bloque (9:00 - 12:00) y parte de los viernes.

Este espacio fue una extensión natural de lo visto en Python, pero ahora orientado a JavaScript y a los principios de la Programación Orientada a Objetos.

**Temas principales:**

- Sintaxis básica de JavaScript (variables, funciones, objetos).
- Programación Orientada a Objetos en JavaScript: clases, constructores, métodos y herencia.
- Integración de JS con HTML para construir interfaces simples.
- Práctica con ejercicios de POO aplicados a casos concretos.

**Archivos destacados:**

- `javascript/index.html`
- `javascript/main.js`
- `poo/poo-1.py` — ejercicios iniciales de POO en Python.
- `poo/usuario.py` — modelado de una clase `Usuario`.

---

### Investigación y análisis de proyectos

> Clases de los días **martes** en el primer bloque (6:00 - 9:00).

Este módulo fue uno de los que más disfruté. La metodología consistió en trabajar en parejas para investigar la viabilidad de un nuevo proyecto desde cero. No se trataba de programar, sino de **pensar como analista** y responder preguntas clave antes de escribir una sola línea de código.

**Lo que hicimos:**

- Documentación inicial de un proyecto: planteamiento del problema, objetivos, alcance y justificación.
- Análisis de contexto productivo y necesidades del entorno.
- Estructuración del proyecto según criterios de investigación.
- Argumentación teórica con referentes nacionales e internacionales.

**Archivos destacados:**

- `investigacion/README.md` — resumen del trabajo de investigación realizado.

---

### Bases de datos y modelado de datos

> Clases de los días **jueves** (6:00 - 12:00) y **viernes** (6:00 - 12:00).

Este fue el bloque más extenso y, personalmente, el que más me emocionó. Aquí dimos el salto del código a los datos, aprendiendo a diseñar, modelar y consultar bases de datos relacionales.

**Temas principales:**

- Introducción a las bases de datos relacionales: conceptos fundamentales.
- Tipos de datos en SQL (`INT`, `VARCHAR`, `DATE`, `DECIMAL`, etc.).
- Diseño de entidades y atributos.
- Relaciones: **uno a muchos**, **muchos a muchos** y **uno a uno**.
- Modelo Entidad-Relación (MER) aplicado al proyecto formativo.
- Inventario de entidades y diccionario de datos.
- Construcción de la base de datos del proyecto formativo.
- Consultas SQL: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`.
- Uso de **XAMPP** como entorno local para pruebas.
- Diferenciación de herramientas: **MySQL Workbench** y **Microsoft SQL Server**.

**Archivos destacados:**

- `databases/README.md`
- `databases/sintaxis-sql.md`
- `databases/triggers.md`
- `databases/xampp.md`
- `databases/xampp-2.md`

---

## Próximos pasos

El contenido técnico del trimestre está en proceso de organización y expansión. Próximamente se agregarán:

- Más ejercicios prácticos en Python y JavaScript.
- Documentación detallada sobre bases de datos y modelado de datos.
- Diagramas y casos de uso completos del proyecto formativo.
- Plantillas y ejemplos de historias de usuario y reglas de negocio.

---

## Reflexión personal

Este trimestre fue un punto de inflexión en mi formación. Pasé de escribir scripts sueltos a entender cómo se construye un proyecto de software desde sus cimientos: **datos, lógica de negocio e investigación**.

- **Python** me dio la base para pensar algorítmicamente y resolver problemas con código.
- **JavaScript y POO** me abrieron la puerta al desarrollo web y a la programación con un enfoque más estructurado.
- **Investigación** me enseñó que el código es solo una parte del proceso; entender el problema y validar su solución es igual de importante.
- **Bases de datos** fue el descubrimiento más gratificante. Diseñar un MER, ver cómo las tablas se relacionan y luego ejecutar consultas SQL que devuelven información valiosa me hizo sentir que realmente estaba construyendo algo útil.

Además, el hecho de trabajar con **XAMPP**, **MySQL Workbench** y **SQL Server** me permitió conocer el ecosistema de herramientas que se usan en el mundo real.

---

> Gracias por leer.