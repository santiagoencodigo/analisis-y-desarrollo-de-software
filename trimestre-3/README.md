# Tercer Trimestre — ADSO

## Tabla de contenido

- [Descripción general](#descripción-general)
- [Información del trimestre](#información-del-trimestre)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Módulos y temas vistos](#módulos-y-temas-vistos)
  - [Modelado de los artefactos del software — Python](#modelado-de-los-artefactos-del-software--python)
  - [Modelado de los artefactos del software — JavaScript y POO](#modelado-de-los-artefactos-del-software--javascript-y-poo)
  - [Investigación](#investigación)
  - [Modelado de los artefactos del software — Bases de datos](#modelado-de-los-artefactos-del-software--bases-de-datos)
- [Reflexión personal](#reflexión-personal)
- [Notas finales](#notas-finales)

---

## Descripción general

Este repositorio agrupa todo el material, ejercicios, scripts y documentación generada durante el **tercer trimestre** del programa de formación **Análisis y Desarrollo de Software (ADSO)** del SENA.

A lo largo de estas semanas se abordaron tres grandes áreas: **programación con Python**, **fundamentos de JavaScript y Programación Orientada a Objetos**, e **introducción a las bases de datos relacionales** con sus respectivos modelos y consultas SQL. Cada una de estas áreas se trabajó de manera práctica y orientada a la construcción de un proyecto formativo.

---

## Información del trimestre

| Concepto | Detalle |
|---|---|
| **Trimestre** | 3 de 7 (9 contando prácticas) |
| **Programa** | Análisis y Desarrollo de Software |

### Horario semanal

| Día | Horario | Competencia |
|---|---|---|
| **Lunes** | 6:00 - 12:00 | Modelado de los artefactos del software |
| **Martes** | 6:00 - 9:00 | Investigación |
| **Martes** | 9:00 - 12:00 | Modelado de los artefactos del software |
| **Miércoles** | 6:00 - 9:00 | Actividad física y hábitos de vida saludable |
| **Miércoles** | 9:00 - 12:00 | Inglés |
| **Jueves** | 6:00 - 12:00 | Modelado de los artefactos del software |
| **Viernes** | 6:00 - 9:00 | Modelado de los artefactos del software |
| **Viernes** | 9:00 - 12:00 | Modelado de los artefactos del software |

---

## Estructura del repositorio

```
trimestre-3/
├── algoritmia/
│   ├── 1_condicionales.py
│   ├── 2_operadores.py
│   ├── 3_listas.py
│   ├── modulos/
│   │   ├── ejercicios_y_datos.py
│   │   ├── modulo-datos.py
│   │   └── modulo-tablas.py
│   └── modulos-2/
│       ├── calculadora.py
│       └── modulo.py
├── databases/
│   ├── README.md
│   ├── sintaxis-sql.md
│   ├── triggers.md
│   ├── xampp-2.md
│   └── xampp.md
├── investigacion/
│   └── README.md
├── javascript/
│   ├── index.html
│   └── main.js
│   └── README.js
├── poo/
│   ├── modulo.py
│   ├── poo-1.py
│   ├── poo-2.py
│   ├── usuario.py
│   └── README.md
├── prueba-tecnica/
│   ├── calculadora.png
│   ├── index.html
│   └── README.md
├── python/
│   └── (archivos y scripts varios)
└── README.md
```

---

## Módulos y temas vistos

### Modelado de los artefactos del software — Python

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

### Modelado de los artefactos del software — JavaScript y POO

> Clases de los días **martes** en el segundo bloque (9:00 - 12:00).

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

### Investigación

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

### Modelado de los artefactos del software — Bases de datos

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

## Reflexión personal

Este trimestre fue un punto de inflexión en mi formación. Pasé de escribir scripts sueltos a entender cómo se construye un proyecto de software desde sus cimientos: **datos, lógica de negocio e investigación**.

- **Python** me dio la base para pensar algorítmicamente y resolver problemas con código.
- **JavaScript y POO** me abrieron la puerta al desarrollo web y a la programación con un enfoque más estructurado.
- **Investigación** me enseñó que el código es solo una parte del proceso; entender el problema y validar su solución es igual de importante.
- **Bases de datos** fue el descubrimiento más gratificante. Diseñar un MER, ver cómo las tablas se relacionan y luego ejecutar consultas SQL que devuelven información valiosa me hizo sentir que realmente estaba construyendo algo útil.

Además, el hecho de trabajar con **XAMPP**, **MySQL Workbench** y **SQL Server** me permitió conocer el ecosistema de herramientas que se usan en el mundo real.

---

## Notas finales

En este trimestre **no se incluyeron** en el repositorio los contenidos de:

- **Inglés**: a pesar de su importancia en el sector tecnológico, decidí enfocar el repositorio únicamente en los temas de desarrollo de software.
- **Cultura Física**: aunque se abordaron temas de acondicionamiento físico, ergonomía y pausas activas, no considero que sea pertinente para un repositorio técnico de programación.

El foco de este repositorio es, y será siempre, el **conocimiento aplicado al desarrollo de software**.

---

> **Nota:** Este README forma parte del repositorio personal de seguimiento del programa ADSO. Todo el contenido aquí documentado fue desarrollado durante el tercer trimestre del año 2025.