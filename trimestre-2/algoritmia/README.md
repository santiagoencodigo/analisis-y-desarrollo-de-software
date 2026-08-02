# Algoritmia – Fundamentos de programación con Python

Este directorio reúne ejercicios prácticos de **lógica de programación y estructuras de datos** implementados en Python. Los ejercicios están organizados por temas, desde condicionales y ciclos hasta listas, diccionarios, tuplas, conjuntos, clases y objetos. El objetivo es desarrollar habilidades algorítmicas y comprender los conceptos fundamentales de la programación.

Los ejercicios fueron tomados de [pynative.com](https://pynative.com) y adaptados al contexto del tecnólogo en Análisis y Desarrollo de Software (ADSO).

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio)
- [Cómo ejecutar el programa](#cómo-ejecutar-el-programa)
- [Contenido de los módulos](#contenido-de-los-módulos)
- [Conceptos cubiertos](#conceptos-cubiertos)
- [Referencias](#referencias)

---

## Estructura del directorio

```
algoritmia/
├── santiagoencodigo.py          # Menú principal para ejecutar todos los ejercicios
├── 01_basicos.py                # Ejercicios básicos: condicionales, ciclos, operaciones
├── 02_listas.py                 # 23 ejercicios de listas
├── 03_diccionario.py            # 20 ejercicios de diccionarios
├── 04_tuplas.py                 # 19 ejercicios de tuplas
├── 05_conjuntos.py              # 16 ejercicios de conjuntos
├── 06_clases.py                 # 13 ejercicios de clases (POO básica)
├── 07_objetos.py                # 7 ejercicios de objetos (herencia, polimorfismo)
└── README.md                    # Este archivo
```

---

## Cómo ejecutar el programa

1. Asegúrate de tener Python instalado (versión 3.6 o superior).
2. Abre una terminal en la carpeta `algoritmia/`.
3. Ejecuta el archivo principal:

```bash
    python santiagoencodigo.py
```

4. Se mostrará un menú con las categorías disponibles. Selecciona una categoría (por ejemplo, `1` para "Básicos").
5. Dentro de cada categoría, aparecerá un submenú con los ejercicios numerados. Selecciona el número del ejercicio que deseas ejecutar.
6. Para volver al menú principal, presiona `0` en cualquier submenú. Para salir del programa, presiona `0` en el menú principal.

---

## Contenido de los módulos

### 01_basicos.py – Ejercicios básicos

| # | Ejercicio | Descripción |
|---|-----------|-------------|
| 1 | Año bisiesto | Determina si un año es bisiesto aplicando las reglas de divisibilidad. |
| 2 | Precio de venta | Calcula el precio final aplicando descuentos según costo y marca. |
| 3 | Distancia entre puntos | Calcula la distancia euclidiana entre dos puntos en el plano. |
| 4 | Puntaje de examen | Calcula la puntuación total con respuestas correctas (+3), incorrectas (-1) y en blanco (0). |
| 5 | Diccionario de operaciones | Usa un diccionario para mapear opciones (multiplicar, potencia, dividir). |
| 6 | Capital con interés compuesto | Calcula el capital final tras varios años con interés compuesto. |
| 7 | Nota y calificación | Convierte una nota numérica (0-20) en una letra (A, B, C, D, E). |
| 8 | Parqueadero | Calcula el costo de estacionamiento con tarifa por horas y fracciones. |

### 02_listas.py – 23 ejercicios de listas

Incluye ejercicios sobre:
- Creación y acceso a elementos.
- Métodos: `append()`, `insert()`, `remove()`, `pop()`, `clear()`, `copy()`.
- Funciones: `len()`, `sum()`, `max()`, `min()`, `count()`, `index()`, `sort()`, `reverse()`.
- Slicing, concatenación, búsqueda de elementos, eliminación de duplicados, comprensión de listas, `zip()` y `enumerate()`.

### 03_diccionario.py – 20 ejercicios de diccionarios

Incluye ejercicios sobre:
- Creación, modificación y eliminación de pares clave-valor.
- Métodos: `get()`, `keys()`, `values()`, `items()`, `update()`, `clear()`, `fromkeys()`.
- Diccionarios anidados y acceso profundo.
- Frecuencia de caracteres, fusión de diccionarios, inversión clave-valor, ordenación por claves y valores.

### 04_tuplas.py – 19 ejercicios de tuplas

Incluye ejercicios sobre:
- Creación de tuplas, tuplas de un solo elemento.
- Acceso por índice, slicing, concatenación y repetición.
- Métodos: `index()`, `count()`.
- Conversiones lista ↔ tupla.
- Desempaquetado (`zip(*lista)`).

### 05_conjuntos.py – 16 ejercicios de conjuntos

Incluye ejercicios sobre:
- Operaciones básicas: `add()`, `remove()`, `discard()`.
- Operaciones de teoría de conjuntos: unión (`union()`), intersección (`intersection()`), diferencia (`difference()`), diferencia simétrica (`symmetric_difference()`).
- Métodos in-place: `difference_update()`, `intersection_update()`, `symmetric_difference_update()`.
- Subconjuntos y superconjuntos (`issubset()`, `issuperset()`).
- Conjuntos inmutables (`frozenset`).

### 06_clases.py – 13 ejercicios de clases (POO básica)

Incluye ejercicios sobre:
- Definición de clases, constructores (`__init__`), atributos y métodos.
- Herencia simple, sobrescritura de métodos.
- Uso de `super()` para invocar métodos de la clase padre.
- Atributos de clase (compartidos por todas las instancias).
- Métodos especiales: `__str__`, `__del__`.
- Polimorfismo con clases geométricas.
- Encapsulación básica.

### 07_objetos.py – 7 ejercicios de objetos (herencia y polimorfismo)

Incluye ejercicios más avanzados sobre:
- Clase `Estudiante` con método `aprobo()`.
- Clase `Persona` con método `cumpleanos()`.
- Clase `Calculadora` con suma, resta, multiplicación y división.
- Herencia: `Persona → Estudiante`, `Fabrica → Carro/Moto`, `Marino → Pulpo/Foca`.
- Herencia múltiple: `Universidad + Carrera → Estudiante`.
- Sobrescritura de métodos y paso de parámetros personalizados.

---

## Conceptos cubiertos

| **Tema** | **Descripción** |
|----------|-----------------|
| **Condicionales** | `if`, `elif`, `else` para tomar decisiones. |
| **Ciclos** | `for` y `while` para iterar y repetir bloques de código. |
| **Funciones** | Definición, parámetros, retorno de valores. |
| **Listas** | Estructura mutable, ordenada y heterogénea. Métodos y operaciones. |
| **Diccionarios** | Estructura clave-valor, mutable y no ordenada. |
| **Tuplas** | Estructura inmutable, ordenada y heterogénea. |
| **Conjuntos** | Estructura no ordenada, sin duplicados. Operaciones de teoría de conjuntos. |
| **Clases y objetos** | Programación orientada a objetos: atributos, métodos, herencia, polimorfismo. |
| **Herencia** | Reutilización de código mediante herencia simple y múltiple. |
| **Polimorfismo** | Mismo método, diferente comportamiento según la clase. |

---

## Referencias

- [pynative.com – Python Data Structure Exercise for Beginners](https://pynative.com/python-data-structure-exercise-for-beginners/)
- [Python.org – Documentación oficial](https://docs.python.org/3/)

---

> Gracias por leer.