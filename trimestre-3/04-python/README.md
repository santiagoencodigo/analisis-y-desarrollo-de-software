# Python – Tercer Trimestre

> Este directorio reúne los materiales, ejercicios y apuntes relacionados con el aprendizaje de **Python** durante el tercer trimestre del programa Análisis y Desarrollo de Software (ADSO). El contenido está organizado en tres módulos progresivos que abordan desde los fundamentos del lenguaje hasta la Programación Orientada a Objetos y la creación de módulos reutilizables.

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio)
- [Descripción de módulos](#descripción-de-módulos)
  - [01-poo/ – Programación Orientada a Objetos](#01-poo--programación-orientada-a-objetos)
  - [02-algoritmia/ – Algoritmia y lógica](#02-algoritmia--algoritmia-y-lógica)
  - [03-modulos/ – Módulos y reutilización de código](#03-modulos--módulos-y-reutilización-de-código)
- [Progresión de aprendizaje](#progresión-de-aprendizaje)
- [Herramientas utilizadas](#herramientas-utilizadas)
- [Cómo ejecutar los ejercicios](#cómo-ejecutar-los-ejercicios)

---

## Estructura del directorio

```
04-python/
├── 01-poo/                 # Programación Orientada a Objetos
│   ├── README.md
│   ├── usuario.py
│   ├── modulo.py
│   ├── poo-1.py
│   └── poo-2.py
├── 02-algoritmia/          # Algoritmia y lógica con Python
│   ├── README.md
│   ├── 1_condicionales.py
│   ├── 2_operadores.py
│   └── 3_listas.py
├── 03-modulos/             # Módulos y reutilización de código
│   ├── README.md
│   ├── calculadora.py
│   ├── ejercicios_y_datos.py
│   ├── modulo.py
│   ├── modulo-datos.py
│   └── modulo-tablas.py
└── README.md               # Este archivo
```

---

## Descripción de módulos

### `01-poo/` – Programación Orientada a Objetos

Módulo enfocado en los conceptos fundamentales del paradigma orientado a objetos: **abstracción, encapsulamiento, modularidad, jerarquía y polimorfismo**. Incluye la definición de clases y objetos, atributos y métodos, y ejercicios prácticos como la clase `Usuario`, `Coche`, `Planeta`, `Estudiante`, `Persona` y `Calculadora`.

| **Archivo** | **Descripción** |
|-------------|-----------------|
| `usuario.py` | Clase `Usuario` con métodos para iniciar sesión, cerrar sesión y publicar comentarios. |
| `modulo.py` | Ejemplo de uso de la clase `Usuario`. |
| `poo-1.py` | Ejercicios iniciales: funciones, decoradores, `match-case`, primeras clases. |
| `poo-2.py` | Ejercicios avanzados: clases con herencia, métodos y menú interactivo. |

> **Concepto clave:** La POO organiza el software en objetos que encapsulan datos y comportamientos, aproximando la programación a la representación del mundo real.

---

### `02-algoritmia/` – Algoritmia y lógica

Módulo con ejercicios de **lógica de programación y algoritmia** en Python. Aborda desde condicionales y operadores básicos hasta el manejo de listas, tuplas y funciones matemáticas integradas. Cada archivo contiene un menú interactivo para seleccionar el ejercicio deseado.

| **Archivo** | **Descripción** |
|-------------|-----------------|
| `1_condicionales.py` | 11 ejercicios de condicionales: suma, mayor/menor, conversión Celsius-Fahrenheit, par/impar, juegos de adivinanza. |
| `2_operadores.py` | 5 ejercicios: operadores aritméticos, condicionales `if/elif/else`, cálculo de pago por días trabajados, corrección de código, tablas de multiplicar. |
| `3_listas.py` | 6 ejercicios: listas, tuplas, números aleatorios, concatenación, funciones matemáticas (`min`, `max`, `sum`, `len`, `count`, `abs`). |

> **Concepto clave:** La algoritmia es la base de la programación. Estos ejercicios desarrollan el pensamiento lógico y la capacidad de resolver problemas con código.

---

### `03-modulos/` – Módulos y reutilización de código

Módulo enfocado en la **organización del código en módulos reutilizables**. Explica cómo importar módulos completos, importar funciones específicas y usar el bloque `if __name__ == "__main__"` para separar la ejecución directa de la importación.

| **Archivo** | **Descripción** |
|-------------|-----------------|
| `calculadora.py` | Módulo con funciones de suma, resta, multiplicación y división. |
| `ejercicios_y_datos.py` | Módulo con funciones de práctica y solicitud de datos (`datos()`, `multiplicar()`). |
| `modulo.py` | Importa el módulo `calculadora`. |
| `modulo-datos.py` | Importa la función `datos()` y calcula un promedio con validación. |
| `modulo-tablas.py` | Importa la función `multiplicar()`. |

> **Concepto clave:** Los módulos permiten reutilizar código, organizar el proyecto y evitar la repetición. Son una práctica fundamental en proyectos de software profesionales.

---

## Progresión de aprendizaje

Los tres módulos siguen una secuencia lógica que va de lo más básico a lo más avanzado:

```
+-------------------+     +-------------------+     +-------------------+
|                   |     |                   |     |                   |
|  02-ALGORITMIA    | --> |    01-POO         | --> |   03-MODULOS      |
|                   |     |                   |     |                   |
|  Lógica básica    |     |  Paradigma POO     |     |  Reutilización    |
|  Condicionales    |     |  Clases y objetos  |     |  Importación      |
|  Listas y tuplas  |     |  Herencia          |     |  Organización     |
|                   |     |  Polimorfismo      |     |                   |
+-------------------+     +-------------------+     +-------------------+
```

1. **02-algoritmia:** Se desarrolla la lógica de programación con ejercicios de condicionales, operadores y listas.
2. **01-poo:** Se introduce el paradigma orientado a objetos, aprendiendo a modelar el mundo real con clases y objetos.
3. **03-modulos:** Se aprende a organizar el código en módulos reutilizables, una práctica esencial para proyectos grandes.

---

## Herramientas utilizadas

| **Herramienta** | **Descripción** | **Enlace** |
|-----------------|-----------------|------------|
| **Python 3** | Lenguaje de programación utilizado. | [python.org](https://www.python.org/) |
| **Visual Studio Code** | Editor de código recomendado. | [code.visualstudio.com](https://code.visualstudio.com/) |
| **runjs.app** | Entorno online para probar código. | [runjs.app](https://runjs.app/) |
| **Python Docs** | Documentación oficial de Python. | [docs.python.org](https://docs.python.org/3/) |

---

## Cómo ejecutar los ejercicios

1. Asegúrate de tener Python 3 instalado.
2. Abre una terminal en la carpeta del módulo que quieras explorar:

```bash
cd 04-python/01-poo
python usuario.py
```

```bash
cd 04-python/02-algoritmia
python 1_condicionales.py
```

```bash
cd 04-python/03-modulos
python modulo-datos.py
```

3. Sigue las instrucciones del menú interactivo o ingresa los datos solicitados.

> **Nota:** Algunos archivos dependen de otros módulos dentro de la misma carpeta. Asegúrate de ejecutar los comandos desde la carpeta correcta para que las importaciones funcionen.

---

> Gracias por leer.