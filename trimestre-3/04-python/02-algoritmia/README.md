# Algoritmia en Python

> Este directorio contiene los ejercicios de algoritmia desarrollados durante el tercer trimestre del programa ADSO. Los ejercicios abarcan desde condicionales y operadores básicos hasta el manejo de listas y funciones matemáticas en Python, todos organizados por temas y con menús interactivos para su ejecución.

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio)
- [Descripción de contenidos](#descripción-de-contenidos)
  - [1_condicionales.py](#1_condicionalespy)
  - [2_operadores.py](#2_operadorespy)
  - [3_listas.py](#3_listaspy)
- [Conceptos clave abordados](#conceptos-clave-abordados)
- [Cómo ejecutar los ejercicios](#cómo-ejecutar-los-ejercicios)
- [Herramientas recomendadas](#herramientas-recomendadas)

---

## Estructura del directorio

```
02-algoritmia/
├── 1_condicionales.py     # Ejercicios de condicionales y lógica básica
├── 2_operadores.py        # Ejercicios de operadores y cálculo
├── 3_listas.py            # Ejercicios de listas, tuplas y funciones matemáticas
└── README.md              # Este archivo
```

---

## Descripción de contenidos

### `1_condicionales.py`

Contiene **11 ejercicios** que abordan desde la impresión básica de datos hasta la corrección de código con errores de indentación. Cada ejercicio se selecciona mediante un menú interactivo.

| **#** | **Ejercicio** | **Descripción** |
|-------|---------------|-----------------|
| 1 | Imprimir días | Muestra los días de la semana con sus fechas. |
| 2 | Suma de dos números | Solicita dos números y muestra su suma. |
| 3 | Número mayor | Compara dos números e indica cuál es mayor. |
| 4 | Número menor | Compara dos números e indica cuál es menor. |
| 5 | Conversión Celsius a Fahrenheit | Convierte una temperatura de Celsius a Fahrenheit. |
| 6 | Par o impar | Determina si un número es par o impar. |
| 7 | Nombre del proyecto letra por letra | Imprime las letras del nombre del proyecto usando `list()`. |
| 8 | Corrección de código | Corrige la sintaxis de varias sentencias `print()`. |
| 9 | Adivina el número | Juego para adivinar un número secreto. |
| 11 | Adivina la vocal | Juego para adivinar una vocal secreta. |

> **Nota:** El ejercicio 10 no está implementado en el archivo, por lo que se salta su numeración.

**Ejemplo de código:**

```python
if Seleccion_Ejercicio == 3:
    print("Vamos a comparar dos números viendo cuál es el mayor:")
    num1 = float(input("Ingresa el primer número: "))
    num2 = float(input("Ingresa el segundo número: "))
    if num1 > num2:
        print(f"El número {num1} es mayor que el número {num2}")
    else:
        print(f"El número {num2} es mayor que el número {num1}")
```

---

### `2_operadores.py`

Contiene **5 ejercicios** centrados en operadores aritméticos, condicionales y cálculos aplicados. Cada ejercicio se selecciona mediante un menú interactivo.

| **#** | **Ejercicio** | **Descripción** |
|-------|---------------|-----------------|
| 1 | Las 4 operaciones básicas | Realiza suma, resta, multiplicación y división. Incluye negación, división entera (`//`) y potencia (`**`). |
| 2 | Condicionales IF, ELIF y ELSE | Solicita nombre, edad y sexo; determina si es mayor de edad y muestra la información. |
| 3 | Cálculo del monto total por días trabajados | Calcula el pago multiplicando días trabajados por el valor del día. |
| 4 | Corrección de código | Corrige un error en una estructura condicional. |
| 5 | Tablas de multiplicar | Genera la tabla de multiplicar de un número del 1 al 10. |

**Ejemplo de código:**

```python
if seleccion_ejercicios == 5:
    print("Tablas de Multiplicar")
    numero = int(input("¿De qué número quieres ver la tabla de multiplicar?: "))
    for i in range(1, 11):
        resultado = numero * i
        print(f"{numero} x {i} = {resultado}")
```

**Operadores destacados:**

| **Operador** | **Nombre** | **Ejemplo** | **Resultado** |
|--------------|------------|-------------|---------------|
| `/` | División | `17 / 4` | `4.25` |
| `//` | División entera | `17 // 4` | `4` |
| `**` | Potencia | `3 ** 4` | `81` |
| `-` | Negación | `-5` | `-5` |

---

### `3_listas.py`

Contiene **6 ejercicios** sobre listas, tuplas, números aleatorios y funciones matemáticas integradas. Cada ejercicio se selecciona mediante un menú interactivo.

| **#** | **Ejercicio** | **Descripción** |
|-------|---------------|-----------------|
| 1 | Listas (A-E) | Accede a elementos de una lista por índices positivos y negativos. |
| 2 | Listas inmutables (tuplas) | Declara una tupla con valores mixtos y la imprime. |
| 3 | Número aleatorio | Genera un número aleatorio entre 1 y 10 usando `random.randrange()`. |
| 4 | Extracción de valores en cadena | Verifica si una palabra está contenida en una cadena con `in`. |
| 5 | Concatenar texto con números | Une cadenas de texto y variables numéricas usando f-strings. |
| 6 | Módulo 1 | Trabaja con `datetime`, funciones matemáticas (`min`, `max`, `sum`, `len`, `count`, `abs`) y concatenación. |

**Ejemplo de código:**

```python
elif seleccion_ejercicio == 6:
    import datetime
    Fecha = datetime.datetime.now()
    Nombre = "Santiago Muñeton Hernandez"
    Ficha = "3000000"
    print(f"Hola soy {Nombre} estoy en la ficha {Ficha} y hoy es {Fecha}")
    print(Fecha.year)
    print(Fecha.day)
```

**Funciones matemáticas utilizadas:**

| **Función** | **Descripción** | **Ejemplo** |
|-------------|-----------------|-------------|
| `min()` | Valor mínimo de una lista. | `min([5, 10, 25])` → `5` |
| `max()` | Valor máximo de una lista. | `max([5, 10, 25])` → `25` |
| `sum()` | Suma de todos los elementos. | `sum([5, 10, 25])` → `40` |
| `len()` | Cantidad de elementos. | `len([5, 10, 25])` → `3` |
| `count()` | Ocurrencias de un valor. | `[5, 10, 5].count(5)` → `2` |
| `abs()` | Valor absoluto. | `abs(-7.25)` → `7.25` |

---

## Conceptos clave abordados

| **Categoría** | **Conceptos** |
|---------------|---------------|
| **Condicionales** | `if`, `elif`, `else`, comparación de valores, par/impar. |
| **Operadores** | Aritméticos (`+`, `-`, `*`, `/`, `//`, `**`), negación, módulo (`%`). |
| **Listas** | Índices positivos y negativos, slicing, métodos (`count()`, `list()`). |
| **Tuplas** | Inmutabilidad, valores mixtos. |
| **Módulos** | `random`, `datetime`, `math` (funciones integradas). |
| **Entrada/Salida** | `input()`, `print()`, f-strings. |
| **Ciclos** | `for` con `range()`. |

---

## Cómo ejecutar los ejercicios

1. Abrir una terminal en la carpeta `02-algoritmia/`.
2. Ejecutar el archivo deseado:

```bash
python 1_condicionales.py
python 2_operadores.py
python 3_listas.py
```

3. Seguir las instrucciones del menú interactivo para seleccionar el ejercicio.
4. Ingresar los datos solicitados cuando el programa lo requiera.

---

## Herramientas recomendadas

| **Herramienta** | **Descripción** | **Enlace** |
|-----------------|-----------------|------------|
| **Python 3** | Lenguaje de programación utilizado. | [python.org](https://www.python.org/) |
| **Visual Studio Code** | Editor de código recomendado. | [code.visualstudio.com](https://code.visualstudio.com/) |
| **runjs.app** | Entorno online para probar código. | [runjs.app](https://runjs.app/) |

---

> Gracias por leer.