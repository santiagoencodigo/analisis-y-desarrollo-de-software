# Python Essentials 1

En esta carpeta encontrará **Fundamentos de Python 1 | Python Essentials 1 (PE1)** impartido por **[Cisco Networking Academy](https://www.netacad.com/es/)** en colaboración con el **[Python Institute](https://pythoninstitute.org/)**.

Este material es de carácter divulgativo y académico, elaborado durante las sesiones de clase (Quinto Trimestre) en mi formación del tecnólogo en Análisis y Desarrollo de Software. Aquí se recogen los conceptos clave, ejemplos de código, laboratorios resueltos y reflexiones personales sobre el camino de aprendizaje del lenguaje Python.

> El enfoque son las bases, por lo que iniciaremos desde lo más básico hasta llegar a un nivel de buen entendimiento de la sintaxis de este lenguaje.

![Cisco Networking Academy](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM-2uFwcJdD9wOQZlQsd1y7L9lOqok2u1bQ&s)

*Imagen tomada de: https://cyberattacka.es/cisco-networking-academy/*

---

## Tabla de Contenido

1. [Herramientas y entorno recomendado](#herramientas-y-entorno-recomendado)
2. [Plataforma y certificación](#plataforma-y-certificacion)
3. [Estructura del repositorio](#estructura-del-repositorio)
4. [Cómo utilizar estos apuntes](#cómo-utilizar-estos-apuntes)
5. [Proyecto práctico: Tres en Raya](#proyecto-práctico-tres-en-raya)
6. [Referencias externas](#referencias-externas)
7. [Prueba Fundamentos de Python 1](#prueba-fundamentos-de-python-1)

---

## Herramientas y entorno recomendado

- **Python 3.x** (instalado desde python.org o mediante gestor de paquetes).
- **Editor de código**: VS Code (recomendado) o cualquier editor de texto con resaltado de sintaxis.

Para ejecutar los ejemplos, abre una terminal en la carpeta del repositorio y utiliza:

```bash
python3 nombre_del_script.py
```

---

## Plataforma y certificación

El curso se desarrolla en [Cisco Networking Academy](https://www.netacad.com/) y sigue el programa oficial del **Python Institute**. Al finalizar el módulo PE1 se obtienen las bases necesarias para presentar el examen de certificación **PCEP – Certified Entry‑Level Python Programmer** (examen PCEP‑30x).

> No presentaremos este examen porque es un apartado de pago.

> Sería interesante tener estos certificados para certificar realmente maestría con el lenguaje Python. | Developer IT, Bogotá, Colombia, PCEP, PCAP |

- [https://pythoninstitute.org/pcep](https://pythoninstitute.org/pcep)

---

## Estructura del repositorio

Las sesiones están documentadas en archivos Markdown independientes. Cada archivo contiene los apuntes tomados durante la clase, incluyendo:

- Resúmenes de teoría.
- Fragmentos de código comentados.
- Laboratorios y ejercicios prácticos.
- Cuestionarios y respuestas razonadas.

> En lo posible buscaré tener enlaces a recursos externos.

| Sesión | Archivo | Contenido principal |
| :----: | :-----: | ------------------- |
| 01 | [01-introduccion.md](./01-introduccion.md) | Módulo 1: Introducción a Python y a la programación informática. Instalación, compilación vs interpretación, filosofía del lenguaje. |
| 02 | [02-cadenas-y-maths.md](./02-cadenas-y-maths.md) | Módulo 2 (parte 1): Tipos de datos, variables, literales, operadores básicos. |
| 03 | [03-inputs-condicionales-bucle.md](./03-inputs-condicionales-bucle.md) | Módulo 2 (parte 2) y comienzo del Módulo 3: Entrada/salida, conversiones, condicionales (if, elif, else), bucles while. |
| 04 | [04-bucle-y-bit-a-bit.md](./04-bucle-y-bit-a-bit.md) | Módulo 3 (bucles y operadores lógicos): while, for, range, break, continue, operadores bit a bit. |
| 05 | [05-bit-a-bit.md](./05-bit-a-bit.md) | Final del Módulo 3: desplazamiento de bits, máscaras, y orientación al proyecto final. |
| 06 | [06-listas.md](./06-listas.md) | Módulo 3 (listas): creación, indexación, métodos básicos, operaciones con listas. |
| 07 | [07-algoritmo-burbuja.md](./07-algoritmo-burbuja.md) | Algoritmo de ordenamiento burbuja (bubble sort): implementación y análisis. |
| 08 | [08-operaciones-con-listas.md](./08-operaciones-con-listas.md) | Operaciones avanzadas con listas: slicing, comprensión de listas, funciones integradas. |
| 09 | [09-aplicaciones-avanzadas-listas.md](./09-aplicaciones-avanzadas-listas.md) | Aplicaciones prácticas: matrices, manipulación de datos con listas anidadas. |
| 10 | [10-prueba-de-modulo.md](./10-prueba-de-modulo.md) | Prueba de módulo: consolidación de conceptos de listas y estructuras de datos. |
| 11 | [11-funciones.md](./11-funciones.md) | Módulo 4: funciones, parámetros, return, alcances, recursividad, tuplas, diccionarios y excepciones. |

> Los archivos se actualizarán a medida que avancemos en el temario. El código fuente de algunos ejemplos se encuentra en la carpeta `code/`.

---

## Cómo utilizar estos apuntes

1. Lee los archivos de sesión en orden numérico.
2. Prueba por ti mismo cada fragmento de código. La mejor forma de aprender es modificar los ejemplos y observar los resultados.
3. Realiza los laboratorios propuestos (por ejemplo, la calculadora de impuestos, el juego del número secreto, la pirámide de bloques, el tres en raya).
4. Consulta las preguntas de los cuestionarios para autoevaluarte.

---

## Proyecto práctico: Tres en Raya

Aunque seguramente es básico, también es un reto excelente.

Tu tarea es escribir un simple programa que simule jugar a **tres en raya** (tic-tac-toe) con el usuario. Para hacerlo más fácil, hemos decidido simplificar el juego. Aquí están nuestras reglas:

- La máquina (el programa) jugará utilizando las **'X'**.
- El usuario jugará utilizando las **'O'**.
- El primer movimiento es de la máquina: siempre coloca una **'X'** en el centro del tablero.
- Todos los cuadros están numerados comenzando con el 1.
- El usuario ingresa su movimiento introduciendo el número de cuadro elegido. El número debe ser válido (un valor entero mayor que 0 y menor que 10) y no puede ser un cuadro que ya esté ocupado.
- El programa verifica si el juego ha terminado. Existen cuatro posibles veredictos: el juego continúa, el juego termina en empate, el usuario gana, o la máquina gana.
- La máquina responde con su movimiento y se verifica el estado del juego.
- No se debe implementar inteligencia artificial; la máquina elegirá un cuadro de manera aleatoria, eso es suficiente para este juego.

### Ejemplo de ejecución

```
+-------+-------+-------+
|       |       |       |
|   1   |   2   |   3   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   4   |   X   |   6   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   8   |   9   |
|       |       |       |
+-------+-------+-------+
Ingresa tu movimiento: 1
+-------+-------+-------+
|       |       |       |
|   O   |   2   |   3   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   4   |   X   |   6   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   8   |   9   |
|       |       |       |
+-------+-------+-------+
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   3   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   4   |   X   |   6   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   8   |   9   |
|       |       |       |
+-------+-------+-------+
Ingresa tu movimiento: 8
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   3   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   4   |   X   |   6   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   O   |   9   |
|       |       |       |
+-------+-------+-------+
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   3   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   4   |   X   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   O   |   9   |
|       |       |       |
+-------+-------+-------+
Ingresa tu movimiento: 4
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   3   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   O   |   9   |
|       |       |       |
+-------+-------+-------+
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   7   |   O   |   9   |
|       |       |       |
+-------+-------+-------+
Ingresa tu movimiento: 7
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   O   |   X   |   X   |
|       |       |       |
+-------+-------+-------+
|       |       |       |
|   O   |   O   |   9   |
|       |       |       |
+-------+-------+-------+
¡Has Ganado!
```

### Requerimientos

Implementa las siguientes características:

- El tablero debe ser almacenado como una lista de tres elementos, donde cada elemento es otra lista de tres elementos (la lista interna representa las filas), de manera que todos los cuadros puedan ser accedidos usando la sintaxis:

  ```python
  board[row][column]
  ```

- Cada uno de los elementos internos de la lista puede contener **'O'**, **'X'**, o un dígito representando el número del cuadro (dicho cuadro se considera como libre).
- La apariencia del tablero debe ser igual a la presentada en el ejemplo.
- Implementa las funciones definidas en el editor.

Para obtener un valor numérico aleatorio, puedes emplear la función integrada `randrange()` de Python. El siguiente ejemplo muestra cómo utilizarla (el programa imprime 10 números aleatorios del 1 al 8). Nota: la instrucción `from-import` provee acceso a la función `randrange` definida en el módulo `random`.

```python
from random import randrange

for i in range(10):
    print(randrange(8))
```

Tenemos este seguimiento o código inicial del cual se puede iniciar trabajando:

```python
def display_board(board):
    # La función acepta un parámetro el cual contiene el estado actual del tablero
    # y lo muestra en la consola.

def enter_move(board):
    # La función acepta el estado actual del tablero y pregunta al usuario acerca de su movimiento,
    # verifica la entrada y actualiza el tablero acorde a la decisión del usuario.

def make_list_of_free_fields(board):
    # La función examina el tablero y construye una lista de todos los cuadros vacíos.
    # La lista está compuesta por tuplas, cada tupla es un par de números que indican la fila y columna.

def victory_for(board, sign):
    # La función analiza el estatus del tablero para verificar si
    # el jugador que utiliza las 'O's o las 'X's ha ganado el juego.

def draw_move(board):
    # La función dibuja el movimiento de la máquina y actualiza el tablero.
```

---

## Referencias externas

- [Python Institute – PCEP certification](https://pythoninstitute.org/pcep)
- [Repositorio oficial de CPython](https://github.com/python/cpython)
- [Guido van Rossum's personal site](https://gvanrossum.github.io/)
- [TIOBE Index – Popularidad de lenguajes](https://www.tiobe.com/tiobe-index/)
- [PYPL PopularitY of Programming Language](https://pypl.github.io/PYPL.html)

![Python logo](https://1000marcas.net/wp-content/uploads/2020/11/Python-logo.png)

*Nota: Este repositorio es de uso personal y educativo. Todo el contenido se basa en los materiales oficiales de Cisco Networking Academy y en las explicaciones del instructor. Si encuentras algún error o quieres sugerir una mejora, eres bienvenido a abrir un issue o enviar un pull request.*






---






## Prueba Fundamentos de Python 1

### 1. Inserción con índice negativo en bucle for

¿Cuál es el resultado del siguiente fragmento de código?

```python
my_list = [1, 2]

for v in range(2):
    my_list.insert(-1, my_list[v])

print(my_list)

```

* [1, 2, 2, 2]
* [1, 2, 1, 2]
* [1, 1, 1, 2]
* [2, 1, 1, 2]

> Para mi la respuesta lógica es 1, 2, 1, 2
> Y no! Me equivoqué, me faltó recordar que claro, va a remplazar el ultimo número!

Analicemos:

- `my_list = [1, 2]`
- **v = 0**: `my_list[0]` es `1`. `insert(-1, 1)` inserta `1` **antes** del último elemento (índice -1). Lista actual: `[1, 2]` → insertar antes del `2` → `[1, 1, 2]`.
- **v = 1**: ahora `my_list = [1, 1, 2]`; `my_list[1]` es `1` (el segundo elemento). `insert(-1, 1)` inserta `1` antes del último elemento (`2`). Lista: `[1, 1, 2]` → `[1, 1, 1, 2]`.

Resultado final: `[1, 1, 1, 2]`.


---



### 2. Definición de argumento posicional

El significado de un *argumento posicional* está determinado por:

* su posición dentro de la lista de argumentos
* su valor
* el nombre del argumento especificado junto con su valor
* su conexión con variables existentes

> Seleccióno que esta determinado por su posición, es la opción más lógica.
> Y sí

Un argumento posicional se asigna al parámetro correspondiente según el orden en que se escribe en la llamada a la función. El primer argumento va al primer parámetro, el segundo al segundo, y así sucesivamente. Su significado no depende de su valor, ni de su nombre (porque no lleva nombre explícito), ni de variables externas.


---


### 3. Asignación y referencia de listas

¿Cuáles de los siguientes enunciados son verdaderos respecto al código? (Selecciona dos respuestas)

```python
nums = [1, 2, 3]
vals = nums

```

* vals es más larga que nums
* nums y vals son listas diferentes
* nums y vals son diferentes nombres de la misma lista
* nums tiene la misma longitud que vals

> Esta fue una de las preguntas que hubo en uno de los examenes anteriores.



---



### 4. Operador de desigualdad

Un operador capaz de verificar si dos valores no son iguales se codifica como:

* =/=
* <>
* not ==
* !=

> Aqui facilmente identificamos !=



---


### 5. Multiplicación de valores de retorno None

El siguiente fragmento de código:

```python
def function_1(a):
    return None


def function_2(a):
    return function_1(a) * function_1(a)


print(function_2(2))

```

* dará como salida 4
* provocará un error de ejecución
* dará como salida 16
* dará como salida 2

> Esta es muy similar a una pregunta anterior que habia a diferencia de que en este momento la función_1 retorna none. En consecuencia para mi esto provocará un error.
>
> Y sí.



---




### 6. Operador de división entera

El resultado de la siguiente división:

```python
1 // 2

```

* no se puede predecir
* es igual a 0.0
* es igual a 0.5
* es igual a 0

> Pues si fuera un / daria 0.5 en teoria. Pero como tenemos 2 para mi debe ser 0.
>
> Y sí

Recordemos que: El operador // realiza división entera (floor division) y devuelve el cociente redondeado hacia abajo al entero más cercano.




----




### 7. Argumentos faltantes en llamada a función

El siguiente fragmento de código:

```python
def func(a, b):
    return b**a


print(func(b=2, 2))

```

* dará como salida 4
* dará como salida 2
* es erróneo
* dará como salida None

> Fua, este es un poco complicado porque no me habia cruzado con esta situación. Pero creo que dará como salida 4 y no habrá problema con el posicoinamiento de los argumentos del print.
>
> Y me equivoqué, era mi segunda opción: Erroneo.

En Python, al mezclar argumentos posicionales y argumentos con palabra clave (keyword arguments), **todos los argumentos posicionales deben aparecer antes de cualquier argumento con palabra clave**. En la llamada `func(b=2, 2)`, el argumento con palabra clave `b=2` aparece antes del argumento posicional `2`, lo que viola esta regla y produce un error de sintaxis (SyntaxError) o TypeError. Por lo tanto, el código es erróneo y no se ejecutará correctamente.




----



### 8. Evaluación de expresiones lógicas encadenadas

¿Qué valor se asignará a la variable x?

```python
z = 0
y = 10
x = y < z and z > y or y < z and z < y

```

* True
* 1
* False
* 0

> Esta tambien fue una pregunta de una de las pruebas de modulo.



---



### 9. Nombres de variables ilegales y palabras clave

¿Cuáles de los siguientes nombres de variable son ilegales y provocarán una excepción de SyntaxError? (Selecciona dos respuestas)

* in
* In
* print
* for

> Esta es una pregunta interesante, pues en teoria in, print, for darian error. Pero alguna de estas 3 no da para variables. Entonces creo que for y print da errores
>
> Casi le atino! Me faltó pensar en algo.

La respuesta correcta es: **in** y **for**

En Python, las palabras clave reservadas (keywords) no pueden usarse como nombres de variables. Si se intenta, se genera un `SyntaxError`.

- `in` es una palabra clave (operador de pertenencia) → **ilegal**.
- `for` es una palabra clave (estructura de bucle) → **ilegal**.
- `In` es válido porque Python es sensible a mayúsculas/minúsculas; no es una palabra clave.
- `print` es un nombre de función integrada, pero **no** es una palabra clave, por lo que se permite (aunque no se recomienda su uso como variable).




---





### 10. List comprehension y eliminación por índice dinámico

¿Cuál es el resultado del siguiente fragmento de código?

```python
my_list = [x * x for x in range(5)]


def fun(lst):
    del lst[lst[2]]
    return lst


print(fun(my_list))

```

* [0, 1, 4, 9]
* [1, 4, 9, 16]
* [0, 1, 4, 16]
* [0, 1, 9, 16]

> Conté con mis dedos como iba a ser, para mi que es [0, 1, 4, 16]
>
> Estuve muy cerca, pero me faltó algún número.

La respuesta correcta es: **[0, 1, 4, 9]**

1. `my_list = [x * x for x in range(5)]` genera `[0, 1, 4, 9, 16]`.

> Esto lo pude pensar de forma efectiva en mi cabeza.

2. Dentro de `fun(lst)`, se evalúa `lst[2]`, que es `4` (el tercer elemento).

> Aqui fallé, me olvide contar desde 0.

> Tambien fallé en no entender que en list, se estaba eliminando el cuarto índice y no el segundo.

3. Luego se ejecuta `del lst[lst[2]]`, es decir, `del lst[4]`, eliminando el elemento en el índice `4` (que es `16`).

4. La lista queda `[0, 1, 4, 9]`, y esa es la que se imprime.




---





### 11. Asignación múltiple de tuplas encadenadas

¿Cuál es el resultado del siguiente fragmento de código?

```python
x = 1
y = 2
x, y, z = x, x, y
z, y, z = x, y, z

print(x, y, z)

```

* 2 1 2
* 1 2 1
* 1 1 2
* 1 2 2


> Este esta chevere. En teoria y según mi razonamiento es 1 2 1
> Y no, era 1 1 2. Me equivoqué.

¿Por qué?

1. `x = 1`, `y = 2`
2. `x, y, z = x, x, y`  
   - Lado derecho: `(1, 1, 2)`  
   - Asignación: `x = 1`, `y = 1`, `z = 2`
3. `z, y, z = x, y, z`  
   - Lado derecho: `(1, 1, 2)` (valores actuales de `x`, `y`, `z`)  
   - Asignación en orden: `z = 1`, `y = 1`, `z = 2` (el último valor sobrescribe el anterior de `z`)
4. Resultado final: `x = 1`, `y = 1`, `z = 2` → `1 1 2`

> Esto haberlo hecho en papel hubiera sido facil de resolver, pero estuve cerca. Me faltó hacerlo con más concentración por cada elemento de esa sintaxis.






---



### 12. Intercambio de variables mediante operador XOR bit a bit

¿Cuál es el resultado del siguiente fragmento de código?

```python
a = 1
b = 0
a = a ^ b
b = a ^ b
a = a ^ b

print(a, b)

```

* 1 0
* 1 1
* 0 1
* 0 0

> Siendo sincero, no recuerdo bien este tema! Me corchó! Pues mi intuición me dice que es 1 1, porque como b es 0 pues creo que no hay ningún cambio. Y luego toma el valor de 1.
>
> Mi intuición no funcionó.

La respuesta correcta es: 0 1

El código implementa el algoritmo clásico de intercambio de variables usando el operador XOR bit a bit (`^`):

- `a = 1`, `b = 0`
- `a = a ^ b` → `a = 1 ^ 0` → `a = 1`
- `b = a ^ b` → `b = 1 ^ 0` → `b = 1`

> Hasta este punto pensé bien, pero despues yo pensaba que a tomaba el valor de 1 y por ende 1 1... Es decir que si se movió hacia 0.

- `a = a ^ b` → `a = 1 ^ 1` → `a = 0`

Resultado final: `a = 0`, `b = 1` → impresión `0 1`.





---




### 13. Llamadas anidadas a función con operador módulo

¿Cuál es el resultado del siguiente fragmento de código?

```python
def fun(x):
    if x % 2 == 0:
        return 1
    else:
        return 2


print(fun(fun(2)))

```

* el código provocará un error de ejecución
* None
* 2
* 1

> Este era una pregunta que apareció anteriormente en una prueba de modulo.
>
> Para mi, ya de acuerdo a como recuerdo... Debido a que fun(2) va a retornar uno y se vuelve a ejecutar... Como resultado dara 1 % 2 y por ende retornará 2.
>
> Y sí.




---



### 14. Eliminación de elementos mediante slice en listas referenciadas

Observa el fragmento de código y elige la sentencia verdadera:

```python
nums = [1, 2, 3]
vals = nums
del vals[:]

```

* nums y vals tienen la misma longitud
* vals es más larga que nums
* el código provocará un error de ejecución
* nums es más larga que vals

> Pues en teoria, considero que el código provacará un error de ejecución debido a que lo que se eliminara de vals no tiene inicio ni fin.
>
> Resulto ser que me equivoque.

La respuesta correcta es: nums y vals tienen la misma longitud

¿Por qué?

- `nums = [1, 2, 3]` crea una lista.  
- `vals = nums` hace que ambas variables apunten al **mismo** objeto lista (no crea una copia).  
- `del vals[:]` elimina **todos los elementos** de la lista compartida usando slice assignment (borra el contenido in-place).  

> Entonces se eliminan todos, algo nuevo que aprendí.

- Después de la operación, tanto `nums` como `vals` referencian la misma lista vacía `[]`, por lo que ambas tienen longitud `0` (iguales). No se produce ningún error.

La clave está en que **`nums` y `vals` no son dos listas independientes, sino dos nombres que apuntan al mismo objeto lista en memoria.**

Al hacer `vals = nums`, no se esta creando una caja nueva, solo se esta pegando una segunda etiqueta (`vals`) a la misma caja que ya tiene la etiqueta `nums`.

En otras palabras: Cuando ejecutas `del vals[:]`, le estás diciendo a Python: **"vacía el contenido de la caja a la que apunta `vals`"**. Como `vals` y `nums` apuntan a la misma caja, al vaciarla, la caja queda vacía para ambos.



---






### 15. Operaciones consecutivas con el operador módulo %

¿Cuál es el resultado del siguiente fragmento de código si el usuario ingresa dos líneas que contienen 3 y 2 respectivamente?

```python
x = int(input())
y = int(input())
x = x % y
x = x % y
y = y % x
print(y)

```

* 3
* 0
* 1
* 2

> Para este tipo de preguntas un papel toma mucha importancia

Entonces aqui escribiré lo que pienso:

x = 3
y = 2
x = 3 / 2 = 1
x = 1 / 2 = 0
y = 2 / 0 = 0

Entonces según lo que pensé, el resultado será 0.

> Y sí, efectivamente asi fue.





----




### 16. Concatenación de cadenas con función input

¿Cuál es el resultado del siguiente fragmento de código si el usuario ingresa dos líneas que contienen 3 y 6 respectivamente?

```python
y = input()
x = input()
print(x + y)

```

* 3
* 36
* 6
* 63

> Como es 3 y 6, pero el input no toma el resultado como entero, será entonces 63.
>
> Y sí.






---







### 17. Uso del argumento de separación sep en función print

¿Cuál es el resultado del siguiente fragmento de código?

```python
print("a", "b", "c", sep="sep")

```

* asepbsepc
* asepbsepcsep
* a b c
* abc

> Esta pregunta sí es facil debido a que por cada letra, tendrá un sep a su lado y por ende asepbsepcsep
>
> ¿Facil? Y me equivoqué! Aunque estuve cerca. La ultima cadena, es decir C... Ya no tiene más separación porque finaliza. 
> La respuesta era asepbsepc






---






### 18. Combinación de división entera y división flotante

¿Cuál es el resultado del siguiente fragmento de código?

```python
x = 1 // 5 + 1 / 5
print(x)

```

* 0.4
* 0.2
* 0
* 0.5

> Aqui me confundí con la jerarquia de operaciones.

La respuesta correcta es: 0.2

¿Por qué?

- `1 // 5` → división entera, el cociente es `0`.  
- `1 / 5` → división flotante, el resultado es `0.2`.  
- `0 + 0.2 = 0.2`.  




---





### 19. Inmutabilidad de las tuplas y asignación de elementos

Suponiendo que my_tuple es una tupla creada correctamente, el hecho de que las tuplas sean inmutables significa que la siguiente instrucción:

```python
my_tuple[1] = my_tuple[1] + my_tuple[0]

```

* puede ser ilegal si la tupla contiene cadenas
* es completamente correcta
* es ilegal
* se puede ejecutar si y solo si la tupla contiene al menos dos elementos

> Es ilegal porque se esta queriendo editar el primer indice de la tupla.
> Y mi razonamiento fue correcto.





----





### 20. Cálculo de raíz mediante operador de exponenciación y división

¿Cuál es el resultado del siguiente fragmento de código si el usuario ingresa dos líneas que contienen 2 y 4 respectivamente?

```python
x = float(input())
y = float(input())
print(y ** (1 / x))
```

* 0.0
* 1.0
* 2.0
* 4.2

> Aqui vi que tengo una debilidad en potenciación porque... ¿Y si la potencia es 0.5? Pero por descarte le doy a 2.0
> Y sí.

- El usuario ingresa `2` y `4`, que se convierten en `x = 2.0` e `y = 4.0`.
- La operación es `y ** (1 / x)` → `4.0 ** (1 / 2.0)` → `4.0 ** 0.5`.
- Esto equivale a la raíz cuadrada de 4, que es `2.0`.







---





### 21. Bucle de indexación recursiva en diccionarios

¿Cuál es el resultado del siguiente fragmento de código?

```python
dct = {"one": "two", "three": "one", "two": "three"}
v = dct["three"]

for k in range(len(dct)):
    v = dct[v]

print(v)

```

* one
* ('one', 'two', 'three')
* two
* three

> Esta pregunta se parece mucho a una que aparecio en una prueba de modulo.
>
> Aun asi me corchó

Analicemos

1. `dct = {"one": "two", "three": "one", "two": "three"}`
2. `v = dct["three"]` → `v = "one"`
3. El bucle `for k in range(len(dct))` se ejecuta 3 veces (len = 3).
4. Iteraciones:
   - k=0: `v = dct[v]` → `v = dct["one"]` → `"two"`
   - k=1: `v = dct[v]` → `v = dct["two"]` → `"three"`
   - k=2: `v = dct[v]` → `v = dct["three"]` → `"one"`
5. Al finalizar el bucle, `v = "one"`. Se imprime `"one"`.







---







### 22. List comprehension con rangos vacíos o invertidos

¿Cuántos elementos contiene la lista `lst`?

```python
lst = [i for i in range(-1, -2)]

```

* [ ] `tres`
* [ ] `dos`
* [ ] `cero`
* [ ] `uno`

> Esta pregunta me confundé, aunque si son numeros negativos... Tal vez sea 0. Aunque esta pregunta realmente me corchó
>
> Resulto ser que sí

La función `range(start, stop)` genera números desde `start` hasta `stop - 1` (sin incluir `stop`), con un paso de `1` por defecto. Si `start` es mayor o igual a `stop`, el rango está vacío.

En `range(-1, -2)`:
- `start = -1`
- `stop = -2`
- Como `-1 > -2`, no genera ningún elemento.

Por lo tanto, la lista por comprensión `[i for i in range(-1, -2)]` produce una lista vacía `[]`, que contiene **cero** elementos.






---





### Pregunta 23

¿Cuáles de las siguientes líneas **correctamente** invocan la función definida a continuación? (Selecciona **dos** respuestas)

```python
def fun(a, b, c=0):
    # Cuerpo de la función.

```

* [ ] `fun(b=1)`
* [ ] `fun(b=0, a=0)`
* [ ] `fun()`
* [ ] `fun(0, 1, 2)`

> Siendo asi, por cuestiones de sintaxis es `fun(b=0, a=0)` y `fun(0, 1, 2)`






---




### Pregunta 24

¿Cuál es el resultado del siguiente fragmento de código?

```python
def fun(x, y):
    if x == y:
        return x
    else:
        return fun(x, y - 1)


print(fun(0, 3))

```

* [ ] `1`
* [ ] `2`
* [ ] `0`
* [ ] el código provocará un error de ejecución

> Esto es muy similar a un bucle por lo que veo y entonces no parara hasta que y tambien sea 0. Asi que creo que 0, pero no estoy totalmente seguro.
> Y sí.

La función `fun(x, y)` es recursiva:  
- Si `x == y`, retorna `x`.  
- Si no, retorna `fun(x, y - 1)` (reduce `y` en 1 en cada llamada).  

En la llamada `fun(0, 3)`:
1. `0 != 3` → llama a `fun(0, 2)`
2. `0 != 2` → llama a `fun(0, 1)`
3. `0 != 1` → llama a `fun(0, 0)`
4. `0 == 0` → retorna `0`.

El valor final es `0`, y se imprime correctamente. No hay error.





----






### Pregunta 25

¿Cuántos (`*`) imprimirá el siguiente fragmento de código en la consola?

```python
i = 0
while i < i + 2 :
    i += 1
    print("*")
else:
    print("*")

```

* [ ] `2`
* [ ] el fragmento entrará en un bucle infinito, imprimiendo un `*` por línea
* [ ] `1`
* [ ] `0`

> Debido al else es obvio que entra en un bucle infinito.
> Y sí.





---





### Pregunta 26

¿Cuál es el resultado del siguiente fragmento de código?

```python
tup = (1, 2, 4, 8)
tup = tup[-2:-1]
tup = tup[-1]
print(tup)

```

* [ ] `44`
* [ ] `(4)`
* [ ] `(4,)`
* [ ] `4`

> Esta fue bastante chistosa de mirar, porque todas las respuestas son 4, pero ya depende de lo que va a aparecer. Yo creo que unicamente '4'.
>
> De forma curiosa mi razonamiento si fue altamente efectivo.

1. `tup = (1, 2, 4, 8)`  
2. `tup = tup[-2:-1]` → el segmento toma los elementos desde el índice -2 hasta el -1 sin incluir este último, es decir, solo el elemento en índice -2, que es `4`. La variable `tup` pasa a ser la tupla `(4,)`.  
3. `tup = tup[-1]` → accede al último elemento de la tupla `(4,)`, que es `4` (un entero, no una tupla).  
4. `print(tup)` imprime `4`.





---






### Pregunta 27

¿Cuál es el resultado del siguiente fragmento de código?

```python
dd = {"1": "0", "0": "1"}
for x in dd.vals():
    print(x, end="")

```

* [ ] el código es erróneo (el objeto `dict` no contiene el método `vals()`)
* [ ] `1 0`
* [ ] `0 1`
* [ ] `0 0`

> No pensé que vals fuera una función. Y la verdad, primera vez que la veo asi que por eso mi intuición me dice que el código es erróneo. 
>
> Resulto ser que mi razonamiento fue efectivo.

El método correcto para obtener los valores de un diccionario es **`values()`**, no `vals()`. Al intentar ejecutar `dd.vals()`, Python lanza una excepción `AttributeError` porque el objeto `dict` no tiene un método con ese nombre. Por lo tanto, el código es errógeno y no imprime nada.





---






### Pregunta 28

¿Cuál es el resultado del siguiente fragmento de código?

```python
dct = {}
dct['1'] = (1, 2)
dct['2'] = (2, 1)

for x in dct.keys():
    print(dct[x][1], end="")

```

* [ ] `(1,2)`
* [ ] `21`
* [ ] `(2,1)`
* [ ] `12`

> Aqui se me viene los recuerdos de las matrices, y no distinguia .keys().
>
> Mi intuición al leer este código dice que la respuesta será (2,1) aunque me hace dudar... Más que todo porque el print no pondria parentesis y por ende la respuesta seria 21.
>
> Curioso de que efectivamente la respuesta correcta es: **`21`**

- El diccionario `dct` tiene las claves `'1'` y `'2'` en ese orden de inserción.
- El bucle `for x in dct.keys()` itera sobre las claves: primero `'1'`, luego `'2'`.
- `dct['1'][1]` → `(1, 2)[1]` → `2`
- `dct['2'][1]` → `(2, 1)[1]` → `1`
- Se imprimen concatenados: `"2" + "1"` → `"21"`.





---



### Pregunta 29

¿Cuál es el resultado del siguiente fragmento de código?

```python
def fun(inp=2, out=3):
    return inp * out


print(fun(out=2))

```

* [ ] el fragmento de código es erróneo y provocará un SyntaxError
* [ ] `6`
* [ ] `2`
* [ ] `4`

> Esta sencilla pues es unicamente hacer las operaciones aritmeticas, dará 4.
> Y sí.

La función `fun(inp=2, out=3)` tiene valores predeterminados. Al llamar con `fun(out=2)`, el argumento con palabra clave asigna `out=2`, mientras que `inp` mantiene su valor predeterminado `2`. La operación `inp * out` es `2 * 2 = 4`, y se imprime `4`. No hay error.





---












### Pregunta 30

¿Cuántos (`#`) imprimirá el siguiente fragmento de código en la consola?

```python
lst = [[x for x in range(3)] for y in range(3)]

for r in range(3):
    for c in range(3):
        if lst[r][c] % 2 != 0:
            print("#")

```

* [ ] nueve
* [ ] cero
* [ ] tres
* [ ] seis


> Nuevamente un tema de matrices. En teoria como es un bucle y sera de 3 * 3 mi razonamiento me dice que nueve.
> 
> Me faltó razonar algo y era que tenia la condición de que el modulo de 2 debia ser un numero que no sea 0.

> La respuesta correcta es: **tres**

El código genera una matriz de 3x3 donde cada fila contiene `[0, 1, 2]` (porque `[x for x in range(3)]` produce `[0,1,2]`, y esto se repite 3 veces con `for y in range(3)`).  

El bucle anidado recorre todas las 9 celdas.

Solo imprime `"#"` cuando el valor es impar, es decir, cuando `lst[r][c] % 2 != 0`.
 
En cada fila, el único valor impar es `1`, que aparece en la columna `1`. 

> Al principio me confundia, pero recordemos que los elementos de nuestra lista es 0, 1, y 2.

Como hay 3 filas, se imprimen 3 `#` (cada uno en una línea nueva).





---




### Pregunta 31

¿Cuál es el comportamiento esperado del siguiente programa si el usuario ingresa `0`?

```python
try:
    value = input("Ingresa un valor: ")
    print(int(value)/len(value))
except ValueError:
    print("Entrada incorrecta...")
except ZeroDivisionError:
    print("Entrada erronea...")
except TypeError:
    print("Entrada muy erronea...")
except:
    print("¡Buuu!")

```

* [ ] `Entrada incorrecta...`
* [ ] `Entrada errónea...`
* [ ] `Entrada muy errónea...`
* [ ] `¡Buuu!`
* [ ] `1.0`
* [ ] `0.0`

> Esta es una pregunta muy similar a una que aparecio en prueba de modulo.
>
> Debemos tener en cuenta que divide 0 en busqueda de la longitud de value, peo value es 0 y entonces según mi razonamiento eso da TypeError.
>
> Resulto ser que no. Me equivoqué.

La respuesta correcta es: `0.0`

Analicemos:

1. El usuario ingresa `0`. La función `input()` lo captura como una cadena: `value = "0"`.
2. `int(value)` convierte `"0"` en el entero `0`.
3. `len(value)` calcula la longitud de la cadena `"0"`, que es `1`.

> Eso quiere decir que si hay numeros, tambien cuenta la cantidad que hay. Aprendí algo nuevo.

4. La operación es `0 / 1`, que da como resultado `0.0`.
5. Se imprime `0.0`. No se genera ninguna excepción porque la conversión es válida y no hay división entre cero.







---






### Pregunta 32

¿Cuál es el comportamiento esperado del siguiente programa?

```python
try:
    print(5/0)
    break
except:
    print("Lo siento, algo salió mal...")
except (ValueError, ZeroDivisionError):
    print("Mala suerte...")

```

* [ ] El programa provocará una excepción `ValueError` y dará como salida un mensaje de error predeterminado.
* [ ] El programa generará una excepción y será manejada por el primer bloque `except`.
* [ ] El programa provocará una excepción `ZeroDivisionError` y dará como salida el siguiente mensaje: `Mala suerte...`
* [ ] El programa provocará una excepción `ZeroDivisionError` y dará como salida un mensaje de error predeterminado.
* [ ] El programa provocará una excepción `SyntaxError`.
* [ ] El programa provocará una excepción `ValueError` y dará como salida el siguiente mensaje: `Mala suerte...`

> Me sorprenden las opciones de respuesta porque inicialmente para mi no deberia generar error y hacer la división común y corriente. Por mi intuición seleccionaré que como resultado de Mala suerte...

> Aprendí algo nuevo! Claro que necesitamos un while o un for o algo de bucle para usar break. Por ende da un error de sintaxis.

El código contiene dos errores de sintaxis:
1. La instrucción `break` está fuera de un bucle (`for` o `while`), lo cual no está permitido.

> Y no me habia dado cuenta de que:

2. El bloque `except` genérico (`except:`) debe ser el último; aquí se coloca antes de un `except` específico, lo cual también es un error de sintaxis.

Estos errores impiden que el programa se ejecute; Python lanza una excepción `SyntaxError` al analizar el código, por lo que ninguna de las ramas `except` se ejecuta.






---





### Pregunta 33

¿Cuál es el comportamiento esperado del siguiente programa?

```python
foo = (1, 2, 3)
foo.index(0)

```

* [ ] El programa provocará una excepción `TypeError`.
* [ ] El programa provocará una excepción `AttributeError`.
* [ ] El programa provocará una excepción `ValueError`.
* [ ] El programa provocará una excepción `SyntaxError`.
* [ ] El programa dará como salida un `1` en la pantalla.

> Esta pregunta me corcho, no recuerdo que hace la función index. Aqui mi selección seria completamente aleatoria.

La respuesta correcta es: **El programa provocará una excepción `ValueError`.**

Analicemos

El método `index()` busca un elemento en la tupla y devuelve su índice. Si el elemento no se encuentra, lanza una excepción `ValueError`. En este caso, la tupla `(1, 2, 3)` no contiene el valor `0`, por lo que se genera `ValueError`. No hay `print`, así que no se muestra nada en consola, solo el error de ejecución.





---






### Pregunta 34

¿Cuál de los siguientes fragmentos muestra la forma correcta de manejar múltiples excepciones en una sola cláusula except?

```python
# A:
except (TypeError, ValueError, ZeroDivisionError):
    # Algo de código.

# B:
except TypeError, ValueError, ZeroDivisionError:
    # Algo de código.

# C:
except: (TypeError, ValueError, ZeroDivisionError)
    # Algo de código.

# D:
except: TypeError, ValueError, ZeroDivisionError
    # Algo de código.

# E:
except (TypeError, ValueError, ZeroDivisionError)
    # Algo de código.

# F:
except TypeError, ValueError, ZeroDivisionError
    # Algo de código.

```

* [ ] F solamente
* [ ] A y B
* [ ] A y F
* [ ] A, C, y D
* [ ] B y C
* [ ] A solamente
* [ ] D y E

> Esto ya es tema de sintaxis y para mi es unicamente la A.
>
> Y sí.



---




### Pregunta 35

¿Qué pasará cuando intentes ejecutar el siguiente código?

```python
print(¡Hola, Mundo!)

```

* [ ] El código generará la excepción *ValueError*.
* [ ] El código generará la excepción *SyntaxError*.
* [ ] El código imprimirá `¡Hola, Mundo!` en la consola.
* [ ] El código generará la excepción *AttributeError*.
* [ ] El código generará la excepción *TypeError*.

> Para mi, como faltan los '' entonces va a hacer una SyntaxError.
>
> Y sí.

En Python, las cadenas de texto deben estar delimitadas por comillas simples (`'`), dobles (`"`), triples (`'''` o `"""`), etc. El código `print(¡Hola, Mundo!)` no usa comillas, por lo que Python intenta interpretar `¡Hola,` y `Mundo!` como nombres de variables o expresiones, pero el carácter `¡` no es válido para identificadores. Además, falta un operador entre ellos. Esto produce un error de sintaxis que impide la ejecución del programa.




---

> Tube 97% de precisión por lo que en alguna de estas preguntas me equivoqué.

> Muchas gracias por leer.

