# Módulos en Python

> Este directorio contiene los ejercicios y ejemplos prácticos sobre **módulos en Python**, desarrollados durante el tercer trimestre del programa ADSO. Los módulos permiten organizar el código en archivos reutilizables, facilitando el mantenimiento, la legibilidad y la separación de responsabilidades en un proyecto.

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio)
- [¿Qué es un módulo en Python?](#qué-es-un-módulo-en-python)
- [Descripción de contenidos](#descripción-de-contenidos)
  - [calculadora.py](#calculadorapy)
  - [ejercicios_y_datos.py](#ejercicios_y_datospy)
  - [modulo.py](#modulopy)
  - [modulo-datos.py](#modulo-datospy)
  - [modulo-tablas.py](#modulo-tablaspy)
- [Conceptos clave abordados](#conceptos-clave-abordados)
- [Cómo ejecutar los ejercicios](#cómo-ejecutar-los-ejercicios)
- [Herramientas recomendadas](#herramientas-recomendadas)

---

## Estructura del directorio

```
03-modulos/
├── calculadora.py          # Módulo con operaciones aritméticas básicas
├── ejercicios_y_datos.py   # Módulo con funciones de práctica y datos
├── modulo.py               # Importa el módulo calculadora
├── modulo-datos.py         # Importa la función datos() y calcula promedio
├── modulo-tablas.py        # Importa la función multiplicar()
└── README.md               # Este archivo
```

---

## ¿Qué es un módulo en Python?

Un **módulo** en Python es un archivo que contiene definiciones de funciones, clases y variables. Los módulos permiten:

- **Reutilizar código:** Una función definida en un módulo puede ser importada y usada en otros archivos.
- **Organizar el proyecto:** Cada módulo agrupa funcionalidades relacionadas.
- **Evitar repetir código:** Se escribe una vez y se usa muchas veces.
- **Mantener el código limpio:** Se separan las responsabilidades en archivos independientes.

**Sintaxis para importar un módulo:**

```python
# Importar todo el módulo
import calculadora

# Importar una función específica
from ejercicios_y_datos import datos

# Importar con alias
import calculadora as calc
```

---

## Descripción de contenidos

### `calculadora.py`

Módulo que contiene cuatro funciones básicas de cálculo aritmético. Cada función recibe dos parámetros y retorna el resultado de la operación.

| **Función** | **Descripción** | **Retorna** |
|-------------|-----------------|-------------|
| `suma(num1, num2)` | Suma dos números. | `num1 + num2` |
| `resta(num1, num2)` | Resta dos números. | `num1 - num2` |
| `multiplicacion(num1, num2)` | Multiplica dos números. | `num1 * num2` |
| `division(num1, num2)` | Divide dos números. | `num1 / num2` |

**Ejemplo de código:**

```python
def suma(num1, num2):
    return num1 + num2

def resta(num1, num2):
    return num1 - num2

def multiplicacion(num1, num2):
    return num1 * num2

def division(num1, num2):
    return num1 / num2
```

**Uso en otro archivo:**

```python
import calculadora

resultado = calculadora.suma(5, 3)
print(resultado)  # 8
```

> Este módulo contiene un menú interactivo que permite al usuario ingresar dos números y seleccionar la operación que desea realizar. Sirve como ejemplo práctico de cómo organizar funciones en un módulo reutilizable.

---

### `ejercicios_y_datos.py`

Módulo que contiene dos funciones principales y un bloque de ejecución condicional con `if __name__ == "__main__":`.

| **Función** | **Descripción** | **Retorna** |
|-------------|-----------------|-------------|
| `datos()` | Solicita al usuario nombre, ficha y dos notas. | `nombre, ficha, nota1, nota2` |
| `multiplicar()` | Genera la tabla de multiplicar de un número del 1 al 10. | Ninguno (imprime en pantalla) |

**Ejemplo de código:**

```python
def datos():
    nombre = input("Digite su nombre: ")
    ficha = int(input("Digite la ficha: "))
    nota1 = float(input("Digite la primera nota: "))
    nota2 = float(input("Digite la segunda nota: "))
    return nombre, ficha, nota1, nota2

def multiplicar():
    numero = int(input("¿Qué número deseas mirar sus tablas de multiplicar? "))
    for i in range(1, 11):
        resultado = numero * i
        print(f"El número {numero} multiplicado por {i} da = {resultado}")
```

**Bloque `if __name__ == "__main__":`**

Este bloque asegura que las funciones de práctica (menú de ejercicios con `for`, `for in range`, `pass`, etc.) **solo se ejecuten cuando el archivo se corre directamente**, no cuando se importa desde otro archivo.

```python
if __name__ == "__main__":
    def ejercicios():
        # Menú de ejercicios de práctica
        ...
    ejercicios()
```

> **Importante:** Esta es una buena práctica en Python. Permite que un archivo sea tanto un módulo importable como un programa ejecutable.

---

### `modulo.py`

Archivo simple que importa el módulo `calculadora`.

```python
import calculadora
```

> Este archivo demuestra la forma más básica de importar un módulo completo. Al ejecutarlo, se carga el módulo `calculadora.py` y todas sus funciones quedan disponibles. Sin embargo, como `calculadora.py` tiene un menú interactivo fuera de funciones, al importarlo se ejecuta dicho menú.

---

### `modulo-datos.py`

Archivo que importa la función `datos()` desde el módulo `ejercicios_y_datos` y realiza un cálculo de promedio con validación.

```python
from ejercicios_y_datos import datos

nombre, ficha, nota1, nota2 = datos()

print(f"nombre {nombre}")
print(f"ficha {ficha}")
print(f"nota1 {nota1}")
print(f"nota2 {nota2}")

promedio = nota1 + nota2

print()
print("Su promedio es", promedio)

if promedio < 5:
    print(f"No aprobó, su nota es: {promedio}, vuelve a intentarlo...")
else:
    print(f"Felicitaciones, aprobó y su nota es: {promedio}")
```

**Análisis del código:**

| **Línea** | **Descripción** |
|-----------|-----------------|
| `from ejercicios_y_datos import datos` | Importa solo la función `datos` del módulo. |
| `nombre, ficha, nota1, nota2 = datos()` | Llama a la función y desempaqueta el retorno en cuatro variables. |
| `promedio = nota1 + nota2` | Suma las dos notas (en este caso, se comporta como suma, no como promedio real). |
| `if promedio < 5:` | Verifica si el resultado es menor a 5 para determinar si aprobó. |

> **Nota:** Aunque la variable se llama `promedio`, en realidad solo se está sumando. Un promedio real requeriría dividir entre 2: `(nota1 + nota2) / 2`.

---

### `modulo-tablas.py`

Archivo que importa la función `multiplicar()` desde el módulo `ejercicios_y_datos`.

```python
from ejercicios_y_datos import multiplicar
```

> Este archivo demuestra cómo importar una función específica de un módulo. Al ejecutarlo, se carga únicamente la función `multiplicar`, que genera la tabla de multiplicar del número que el usuario ingrese.

---

## Conceptos clave abordados

| **Concepto** | **Descripción** |
|--------------|-----------------|
| **Módulo** | Archivo `.py` que contiene funciones, clases o variables reutilizables. |
| **Importar módulo completo** | `import nombre_modulo` |
| **Importar función específica** | `from nombre_modulo import nombre_funcion` |
| **Importar con alias** | `import nombre_modulo as alias` |
| **`__name__ == "__main__"`** | Bloque que asegura la ejecución de código solo cuando el archivo se corre directamente. |
| **Reutilización** | Una función definida en un módulo puede usarse en múltiples archivos. |
| **Separación de responsabilidades** | Cada módulo agrupa funcionalidades relacionadas. |

---

## Cómo ejecutar los ejercicios

1. Abrir una terminal en la carpeta `03-modulos/`.
2. Ejecutar el archivo deseado:

```bash
python calculadora.py
python ejercicios_y_datos.py
python modulo-datos.py
python modulo-tablas.py
```

3. Seguir las instrucciones del menú interactivo o ingresar los datos solicitados.

> **Importante:** Los archivos `modulo.py`, `modulo-datos.py` y `modulo-tablas.py` dependen de los módulos `calculadora.py` y `ejercicios_y_datos.py`. Asegúrate de que todos los archivos estén en la misma carpeta para que las importaciones funcionen correctamente.

---

## Herramientas recomendadas

| **Herramienta** | **Descripción** | **Enlace** |
|-----------------|-----------------|------------|
| **Python 3** | Lenguaje de programación utilizado. | [python.org](https://www.python.org/) |
| **Visual Studio Code** | Editor de código recomendado. | [code.visualstudio.com](https://code.visualstudio.com/) |
| **Python Docs - Módulos** | Documentación oficial sobre módulos. | [docs.python.org/3/tutorial/modules.html](https://docs.python.org/3/tutorial/modules.html) |

---

> Gracias por leer.