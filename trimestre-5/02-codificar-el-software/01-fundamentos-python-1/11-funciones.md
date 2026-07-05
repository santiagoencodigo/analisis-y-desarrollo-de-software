# Funciones

Este documento cubre los fundamentos para crear, usar y llamar funciones propias en Python, abordando su necesidad para evitar código repetitivo, gestionar la complejidad de los algoritmos y facilitar el trabajo en equipo.

También se detalla cómo las funciones se comunican con su entorno a través de parámetros y argumentos, la devolución de resultados con la instrucción `return`, y el manejo de alcances (variables locales y globales) mediante la palabra clave `global`. Se exploran el valor `None`, el paso de listas como argumentos, la devolución de listas como resultados, y se incluyen laboratorios prácticos sobre años bisiestos, días por mes, día del año, números primos y conversión de consumo de combustible. Se presentan ejemplos de funciones con múltiples parámetros (cálculo de IMC, verificación de triángulos, área con fórmula de Herón, factorial, serie de Fibonacci) y se introduce el concepto de recursividad. Se abordan las estructuras de datos de tuplas (secuencias inmutables) y diccionarios (colecciones mutables de pares clave-valor), incluyendo sus métodos, operaciones y ejemplos de uso conjunto. Finalmente, se introduce el manejo de excepciones con `try-except`, los tipos de excepciones más comunes, y se ofrecen consejos sobre pruebas y depuración de código.

El material forma parte de mi proceso de formación como tecnólogo en Análisis y Desarrollo de Software (ADSO), documentando el repaso del curso de Cisco sobre fundamentos de programación.

---

## Tabla de Contenido

1. [La necesidad de las funciones](#la-necesidad-de-las-funciones)
2. [Descomposición y trabajo en equipo](#descomposicion-y-trabajo-en-equipo)
3. [Procedencia de las funciones](#procedencia-de-las-funciones)
4. [Definición y primera función](#definicion-y-primera-funcion)
5. [Mecanismo de invocación y restricciones](#mecanismo-de-invocacion-y-restricciones)
6. [Resumen y tipos de funciones (primera parte)](#resumen-y-tipos-de-funciones-primera-parte)
7. [Cómo se comunican las funciones con su entorno](#cómo-se-comunican-las-funciones-con-su-entorno)
8. [Devolviendo el resultado de una función](#devolviendo-el-resultado-de-una-función)
9. [Alcances en Python](#alcances-en-python)
10. [Creación de funciones con múltiples parámetros](#creación-de-funciones-con-múltiples-parámetros)
11. [Tuplas y diccionarios](#tuplas-y-diccionarios)
12. [Excepciones](#excepciones)
13. [Pruebas de Modulo](#pruebas-de-modulo)

---

## La necesidad de las funciones

Hasta ahora se han utilizado funciones integradas como `print()`, `input()`, `int()` o `float()` como herramientas para simplificar tareas. Sin embargo, llega el momento de escribir nuestras propias funciones para optimizar el código.

La primera razón para crear una función es la reutilización. Cuando un fragmento de código comienza a repetirse varias veces (ya sea de manera literal o con ligeras modificaciones), aislarlo en una función permite realizar cambios en un solo lugar en lugar de buscar y corregir cada aparición. Esto es especialmente crítico para evitar errores al copiar y pegar, ya que una corrección en el código duplicado debe replicarse en todos los sitios donde aparece.

> Este es un problema que solucionan las funciones, no lo habia pensado y ahora me parece todavia más interesante. ¿Qué tantos programadores se habran dado cuenta de esto? Muchas veces aprendemos ya directamente con estos paradigmas de programación que no entendemos realmente qué es lo que soluciona.

La segunda razón es el manejo de la complejidad. Cuando un algoritmo crece de manera descontrolada y el código se vuelve difícil de navegar, dividirlo en piezas aisladas (cada una codificada como una función) facilita la lectura y el entendimiento. Una función bien escrita debería ser comprensible con solo una mirada. Este proceso de división se conoce como **descomposición**.

## Descomposición y trabajo en equipo

La descomposición no solo ayuda a manejar la complejidad técnica, sino que es fundamental para el desarrollo colaborativo. En proyectos largos y complejos, el trabajo se divide entre varios desarrolladores. Es inconcebible que más de un programador escriba el mismo código al mismo tiempo.

Cada miembro del equipo escribe un conjunto bien definido de funciones que, al combinarse en módulos, construyen el producto final. Esto permite compartir no solo el trabajo, sino también la responsabilidad.

> Desde que empece a estudiar ADSO la descomposición ha sido un estandar de inicio a fin, tanto que actualmente es mi forma de solucionar mis problemas tambien en la vida tangible.

> Otro problema que soluciona entonces, tambien es potenciar el trabajo en equipo en un grupo de desarrolladores.

## Procedencia de las funciones

En Python, las funciones provienen principalmente de tres fuentes:

1. **Funciones integradas (built-in)** : Son parte integral del lenguaje y siempre están disponibles sin esfuerzo adicional (ej. `print()`).
2. **Módulos preinstalados** : Funciones disponibles al importar módulos que vienen con Python, aunque su uso requiere pasos adicionales.
3. **Código propio (definidas por el usuario)** : Escritas directamente por el programador para su uso libre dentro del programa.

Existe una cuarta categoría relacionada con clases (métodos) y también las funciones lambda, aunque estos temas se abordan más adelante.

## Definición y primera función

Para definir una función se utiliza la palabra reservada `def`. La sintaxis más simple es:

```python
def nombre_funcion():
    # cuerpo de la función
```

Reglas básicas:
- Después de `def` va el nombre de la función (mismas reglas que para nombrar variables).
- Le siguen paréntesis `()` que pueden contener parámetros.
- La línea termina con dos puntos `:`.
- El cuerpo de la función debe estar indentado (anidado) y se ejecuta únicamente cuando la función es invocada.

Ejemplo práctico: definir una función llamada `message` que imprime un mensaje fijo.

```python
def message():
    print("Ingresar valor: ")

# Uso en el programa
print("Inicia aqui.")
message()
print("Termina aqui.")
```

La definición de la función no ejecuta su código; Python la lee, la recuerda, pero solo la ejecuta cuando se invoca explícitamente con `message()`.

> Este es un ejemplo de función muy agradable y simple para entender.

## Mecanismo de invocación y restricciones

Cuando se invoca una función, Python recuerda el lugar donde ocurrió la llamada, salta al interior de la función, ejecuta su cuerpo y, al llegar al final, regresa al punto inmediato posterior a la invocación.

Existen dos restricciones fundamentales a tener en cuenta:

1. **No invocar antes de definir**: Python lee el código de arriba a abajo. Si se invoca una función antes de que haya sido definida, se genera un `NameError`.
2. **No compartir nombre con variables**: Una función y una variable no pueden tener el mismo nombre en el mismo ámbito. Asignar un valor a un nombre que antes era una función hace que Python olvide su rol anterior.

```python
# Esto genera NameError (invocación antes de definir)
# message()

def message():
    print("Hola")

message = 1  # Ahora message ya no es una función
```

> Esta pregunta casi me confunde. Pero bueno, ya sabemos que genera error.
> *Nota: Pasar argumentos a una función que no los acepta genera un `TypeError`.*

---

## Resumen y tipos de funciones (primera parte)

Las funciones son bloques de código reutilizables que mejoran la organización y legibilidad. Pueden contener parámetros y regresar valores mediante `return`.

Los cuatro tipos básicos de funciones en Python son:

- **Integradas**: Siempre disponibles (ej. `print()`, `len()`).
- **De módulos preinstalados**: Requieren importación.
- **Definidas por el usuario**: Escritas por los programadores.
- **Lambda**: Funciones anónimas de una sola línea (tratadas en niveles avanzados).

Sintaxis recordatoria:

```python
# Sin parámetros
def message():
    print("Hello")

# Con un parámetro
def hello(name):
    print("Hello,", name)

# Invocación
message()
user = input("Ingresa tu nombre: ")
hello(user)
```

> Esa documentación es bastante interesante, el momento en el que ya halla leido todo un documento de estos en internet... Será cuando ya me halla convertido en el desarrollador que quiero ser.

---

## Cómo se comunican las funciones con su entorno

Esta sección cubre el uso de parámetros para que las funciones reciban datos desde el exterior, haciendo posible la flexibilidad y reutilización. Se explican las distintas formas de pasar argumentos (posicionales, por palabra clave, mixtas) y el uso de valores predeterminados.

### Parámetros y paso posicional

Un **parámetro** es una variable definida dentro de los paréntesis de la definición de la función. Solo existe dentro de la función y recibe su valor del **argumento** proporcionado en la invocación.

```python
def message(number):
    print("Ingresa un número:", number)

message(1)  # number recibe el valor 1
```

Si una función tiene parámetros, debe recibir exactamente el mismo número de argumentos (a menos que use valores predeterminados, que se ven más adelante). De lo contrario, se produce un `TypeError`.

**Sombreado (shadowing)**: una variable fuera de la función con el mismo nombre que un parámetro no se ve afectada por el parámetro, y viceversa. El parámetro prevalece dentro de la función.

```python
def message(number):
    print(number)  # imprime el argumento recibido

number = 1234
message(1)   # imprime 1
print(number) # imprime 1234
```

**Múltiples parámetros**:

```python
def message(what, number):
    print("Ingresa", what, "número", number)

message("teléfono", 11)
message("precio", 5)
```

El paso de argumentos por posición (el primero al primer parámetro, el segundo al segundo, etc.) se denomina **paso posicional**.

### Paso de argumentos con palabra clave

Python permite pasar argumentos indicando explícitamente el nombre del parámetro, usando la sintaxis `parametro = valor`. El orden no importa, porque cada valor se asigna por su nombre.

```python
def introduction(first_name, last_name):
    print("Hola, mi nombre es", first_name, last_name)

introduction(first_name="James", last_name="Bond")
introduction(last_name="Skywalker", first_name="Luke")
```

No se puede usar un nombre de parámetro que no exista en la definición; esto produce un `TypeError`.

### Mezcla de argumentos posicionales y de palabra clave

Es posible combinar ambos estilos en una misma invocación, pero **los argumentos posicionales deben ir primero**, seguidos de los de palabra clave.

```python
def adding(a, b, c):
    print(a + b + c)

adding(1, 2, 3)          # posicionales
adding(c=1, a=2, b=3)    # solo palabra clave
adding(3, c=1, b=2)      # posicional + palabra clave (a=3, b=2, c=1)
```

Si se intenta pasar un valor posicional después de uno con palabra clave, o si se asigna dos veces al mismo parámetro, Python lanza un error.

### Valores predeterminados (parámetros opcionales)

Se puede asignar un valor por defecto a un parámetro en la definición. Si el argumento correspondiente se omite en la invocación, se usa ese valor predeterminado.

```python
def introduction(first_name, last_name="Smith"):
    print("Hola, mi nombre es", first_name, last_name)

introduction("Jorge", "Pérez")   # usa "Pérez"
introduction("Enrique")          # usa "Smith" por defecto
introduction(first_name="Guillermo")  # también usa "Smith"
```

También se pueden definir valores predeterminados para todos los parámetros, haciendo que la función pueda ser invocada sin argumentos.

```python
def introduction(first_name="Juan", last_name="González"):
    print("Hola, mi nombre es", first_name, last_name)

introduction()                      # Juan González
introduction(last_name="Rodríguez") # Juan Rodríguez
```

**Regla importante**: los parámetros con valores predeterminados deben aparecer **después** de los parámetros sin valor predeterminado en la definición. De lo contrario, se produce un `SyntaxError`.

### Resumen de la sección

- Los parámetros permiten pasar información a las funciones. Se definen entre paréntesis en `def`.
- Los argumentos se pueden pasar por posición, por palabra clave o mezclando ambos (primero posicionales, luego palabras clave).
- Los valores predeterminados hacen que un parámetro sea opcional; deben definirse al final de la lista de parámetros.

**Ejemplos de sintaxis**:

```python
# Un parámetro
def hi(name):
    print("Hola,", name)

# Dos parámetros
def hi_all(name_1, name_2):
    print("Hola,", name_2)
    print("Hola,", name_1)

# Tres parámetros con entrada de usuario
def address(street, city, postal_code):
    print("Tu dirección es:", street, city, postal_code)
```

**Prueba de comprensión**:

- ¿Qué imprime `intro()` si `def intro(a="James Bond", b="Bond"): print("Mi nombre es", b + ".", a + ".")`?  
  → `Mi nombre es Bond. James Bond.`
- Si se llama `intro(b="Sean Connery")` con la misma función, imprime `Mi nombre es Sean Connery. James Bond.`
- Con `def intro(a, b="Bond"):` y `intro("Susan")` imprime `Mi nombre es Bond. Susan.`
- Si se define `def add_numbers(a, b=2, c):` es error de sintaxis, porque un parámetro sin valor predeterminado (`c`) no puede ir después de uno con valor predeterminado.

---

## Devolviendo el resultado de una función

Esta sección cubre cómo las funciones pueden devolver valores utilizando la instrucción `return`, el significado del valor `None`, y cómo trabajar con listas como argumentos y resultados. Se incluyen ejercicios prácticos para afianzar estos conceptos.

### Efectos y resultados: la instrucción return

Todas las funciones anteriores producían un efecto (como imprimir en consola), pero las funciones también pueden tener un **resultado** (un valor que devuelven). Para ello se usa la palabra clave `return`.

**Primera variante: `return` sin expresión**

```python
def happy_new_year(wishes=True):
    print("Tres...")
    print("Dos...")
    print("Uno...")
    if not wishes:
        return
    print("¡Feliz año nuevo!")
```

- Si se invoca sin argumentos (`happy_new_year()`), imprime el mensaje completo.
- Si se invoca con `False` (`happy_new_year(False)`), `return` termina la función antes de imprimir el saludo.

**Segunda variante: `return` con expresión**

```python
def boring_function():
    return 123

x = boring_function()
print(x)  # 123
```

- La función evalúa la expresión y la devuelve al lugar de la llamada.
- El valor devuelto puede asignarse a una variable o ignorarse.
- Si se ignora, el valor se pierde, pero la función igual se ejecuta.

### Unas pocas palabras sobre None

`None` es un valor especial que representa "ningún valor" o "vacío". No debe usarse en expresiones aritméticas (lanza `TypeError`). Se usa para:

- Asignar a una variable para indicar que no tiene valor.
- Comparar con una variable para comprobar su estado interno.

```python
value = None
if value is None:
    print("No contiene ningún valor")
```

**Importante**: Si una función no tiene una instrucción `return` con expresión, devuelve `None` implícitamente.

```python
def strange_function(n):
    if n % 2 == 0:
        return True

print(strange_function(2))  # True
print(strange_function(1))  # None
```

### Efectos y resultados: listas y funciones

**Pasar una lista como argumento**:

```python
def list_sum(lst):
    s = 0
    for elem in lst:
        s += elem
    return s

print(list_sum([5, 4, 3]))  # 12
```

La función debe ser capaz de manejar el tipo de dato que recibe. Si se pasa un entero en lugar de una lista, se produce `TypeError`.

**Devolver una lista como resultado**:

```python
def create_list(n):
    my_list = []
    for i in range(n):
        my_list.append(i)
    return my_list

print(create_list(5))  # [0, 1, 2, 3, 4]
```

Cualquier entidad reconocible por Python puede ser tanto argumento como resultado de una función.

### Laboratorios

#### Año bisiesto

Escribe una función `is_leap_year(year)` que devuelva `True` si el año es bisiesto, `False` en caso contrario. Usa la lógica estándar: divisible por 4, pero no por 100, a menos que también sea divisible por 400.

```python
def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False
```

#### Días en un mes

Escribe una función `days_in_month(year, month)` que devuelva el número de días del mes dado, o `None` si los argumentos no son válidos. Utiliza la función anterior para febrero.

```python
def days_in_month(year, month):
    if month < 1 or month > 12:
        return None
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if month == 2 and is_leap_year(year):
        return 29
    return days[month - 1]
```

#### Día del año

Escribe una función `day_of_year(year, month, day)` que devuelva el número de día dentro del año (1‑365 o 366), o `None` si algún argumento no es válido. Usa las funciones anteriores.

```python
def day_of_year(year, month, day):
    if month < 1 or month > 12:
        return None
    if day < 1 or day > days_in_month(year, month):
        return None
    total = 0
    for m in range(1, month):
        total += days_in_month(year, m)
    total += day
    return total
```

#### Números primos

Escribe una función `is_prime(num)` que devuelva `True` si el número es primo, `False` en caso contrario. Un número primo es mayor que 1 y solo divisible por 1 y sí mismo. Para optimizar, itera hasta la raíz cuadrada.

```python
def is_prime(num):
    if num < 2:
        return False
    i = 2
    while i * i <= num:
        if num % i == 0:
            return False
        i += 1
    return True

# Prueba: imprime primos del 1 al 20
for i in range(1, 20):
    if is_prime(i):
        print(i, end=" ")
# Salida esperada: 2 3 5 7 11 13 17 19
```

#### Conversión de consumo de combustible

Escribe dos funciones:
- `liters_100km_to_miles_gallon(liters)` – convierte litros por 100 km a millas por galón.
- `miles_gallon_to_liters_100km(miles)` – convierte millas por galón a litros por 100 km.

Datos: 1 milla = 1609.344 m, 1 galón = 3.785411784 L.

```python
def liters_100km_to_miles_gallon(liters):
    miles = 100 * 1000 / 1609.344  # 100 km en millas
    gallons = liters / 3.785411784
    return miles / gallons

def miles_gallon_to_liters_100km(miles):
    km = miles * 1609.344 / 1000
    liters = 3.785411784
    return (liters / km) * 100

# Pruebas
print(liters_100km_to_miles_gallon(3.9))   # 60.31...
print(liters_100km_to_miles_gallon(7.5))   # 31.36...
print(liters_100km_to_miles_gallon(10.))   # 23.52...
print(miles_gallon_to_liters_100km(60.3))  # 3.90...
print(miles_gallon_to_liters_100km(31.4))  # 7.49...
print(miles_gallon_to_liters_100km(23.5))  # 10.00...
```

### Resumen de sección

1. La instrucción `return` sin expresión termina la función y devuelve `None` implícitamente. Con expresión devuelve el valor evaluado.
2. `None` es un valor especial que indica ausencia de valor. Se usa para comparaciones o asignaciones.
3. Las listas pueden ser pasadas como argumentos y devueltas como resultados de funciones.
4. Una función puede tener efectos (como imprimir) y también devolver un resultado.

**Ejemplos**:

```python
def multiply(a, b):
    return a * b

def wishes():
    return "Felíz Cumpleaños"

def hi_everybody(my_list):
    for name in my_list:
        print("Hola,", name)

def create_list(n):
    return [i for i in range(n)]
```

### Prueba de sección

**Pregunta 1**: ¿Qué imprime `hi()` si está definida como:

```python
def hi():
    return
    print("¡Hola!")
hi()
```

**Respuesta**: No imprime nada (la función retorna `None` antes de llegar al `print`).

**Pregunta 2**: Dada la función:

```python
def is_int(data):
    if type(data) == int:
        return True
    elif type(data) == float:
        return False
```

¿Qué devuelve `is_int(5)`, `is_int(5.0)`, `is_int("5")`?

**Respuesta**: `True`, `False`, `None`.

**Pregunta 3**: Con:

```python
def even_num_lst(ran):
    lst = []
    for num in range(ran):
        if num % 2 == 0:
            lst.append(num)
    return lst
print(even_num_lst(11))
```

**Respuesta**: `[0, 2, 4, 6, 8, 10]`.

**Pregunta 4**: Con:

```python
def list_updater(lst):
    upd_list = []
    for elem in lst:
        elem **= 2
        upd_list.append(elem)
    return upd_list
foo = [1, 2, 3, 4, 5]
print(list_updater(foo))
```

**Respuesta**: `[1, 4, 9, 16, 25]`.







---







## Alcances en Python

Esta sección explica el concepto de alcance (scope) de las variables, la diferencia entre variables locales y globales, y cómo utilizar la palabra clave `global` para modificar variables definidas fuera de una función. También se analiza cómo interactúa una función con sus argumentos, especialmente cuando se trata de listas.

### Funciones y alcances

El **alcance** de un nombre (variable, parámetro, etc.) es la parte del código donde ese nombre es reconocido. Por ejemplo, el alcance de un parámetro de función es el cuerpo de la función; fuera de ella no es accesible.

```python
def my_function():
    x = 10  # variable local

# print(x)  # NameError: x no está definida
```

**Variables definidas fuera de una función**: Son visibles dentro del cuerpo de la función, siempre que no se les asigne un nuevo valor dentro de ella (es decir, solo para lectura).

```python
var = 1

def my_function():
    print("¿Conozco a la variable?", var)

my_function()  # imprime: ¿Conozco a la variable? 1
print(var)     # 1
```

**Asignación dentro de la función**: Si se asigna un valor a una variable con el mismo nombre dentro de la función, Python crea una **nueva variable local** que "sombrea" a la global. La variable externa no se modifica.

```python
var = 1

def my_function():
    var = 2
    print("¿Conozco a la variable?", var)

my_function()  # imprime: ¿Conozco a la variable? 2
print(var)     # 1 (la variable global no cambió)
```

### La palabra clave `global`

Para modificar una variable global desde dentro de una función (no solo leerla), se debe declarar explícitamente como `global` dentro de la función.

```python
var = 1

def my_function():
    global var
    var = 2
    print("¿Conozco a aquella variable?", var)

my_function()  # imprime: ¿Conozco a aquella variable? 2
print(var)     # 2 (la variable global fue modificada)
```

Se puede declarar múltiples variables globales separadas por comas: `global a, b, c`.

### Interacción de la función con sus argumentos

Cuando se pasa un argumento a una función, el parámetro recibe una **copia del valor** (para tipos escalares como enteros, flotantes, cadenas). Modificar el parámetro dentro de la función no afecta al argumento original.

```python
def my_function(x):
    x = x + 1
    print("Ahora tengo", x)

y = 1
my_function(y)  # imprime: Ahora tengo 2
print(y)        # 1 (no se modificó)
```

**Con listas** (y otros mutables): el comportamiento es sutil. Si se reasigna el parámetro (ej. `my_list_1 = [0, 1]`), se crea una nueva lista local y la original no cambia. Pero si se **modifica el contenido** de la lista (ej. `del my_list_1[0]` o `my_list_1.append()`), la lista original se ve afectada porque ambas variables (el argumento y el parámetro) apuntan al mismo objeto.

```python
def my_function(my_list_1):
    del my_list_1[0]   # modifica la lista original

my_list_2 = [2, 3]
my_function(my_list_2)
print(my_list_2)       # [3] (el primer elemento fue eliminado)
```

Esto ocurre porque las listas se pasan por referencia (la variable contiene una referencia al objeto, no el objeto en sí). Reasignar el parámetro cambia la referencia local, pero modificar el objeto afecta a todas las referencias.

### Resumen de la sección

- Una variable definida fuera de una función es global y puede ser leída dentro de la función, pero no modificada a menos que se declare `global`.
- Una variable definida dentro de una función es local y no existe fuera de ella.
- Los parámetros de una función son locales y reciben copias de los argumentos para tipos inmutables; para mutables (listas, diccionarios), la función puede modificar el objeto original si opera sobre su contenido, no si reasigna el parámetro.

### Prueba de sección

**Pregunta 1**: ¿Qué imprime este código?

```python
def message():
    alt = 1
    print("¡Hola, mundo!")

print(alt)
```

**Respuesta**: `NameError` – `alt` no está definida fuera de la función.

**Pregunta 2**:

```python
a = 1
def fun():
    a = 2
    print(a)
fun()
print(a)
```

**Respuesta**: `2` (local) y luego `1` (global no modificada).

**Pregunta 3**:

```python
a = 1
def fun():
    global a
    a = 2
    print(a)
fun()
a = 3
print(a)
```

**Respuesta**: `2` (la función cambia a global a 2) y luego `3` (se reasigna fuera).

**Pregunta 4**:

```python
a = 1
def fun():
    global a
    a = 2
    print(a)
a = 3
fun()
print(a)
```

**Respuesta**: `2` (la función cambia a 2) y luego `2` (ya quedó en 2).

---

## Creación de funciones con múltiples parámetros

Esta sección presenta ejemplos prácticos de funciones que reciben varios parámetros, abarcando desde cálculos de índice de masa corporal (IMC), verificación de triángulos y área con fórmula de Herón, hasta factorial, serie de Fibonacci y recursividad. Estos ejemplos consolidan el uso de parámetros, retorno de valores y la capacidad de una función para invocarse a sí misma.

### Cálculo del IMC

La función `bmi(weight, height)` calcula el índice de masa corporal. Se incluyen funciones auxiliares para convertir libras a kilogramos y pies/pulgadas a metros, demostrando cómo combinar múltiples funciones.

```python
def lb_to_kg(lb):
    return lb * 0.45359237

def ft_and_inch_to_m(ft, inch=0.0):
    return ft * 0.3048 + inch * 0.0254

def bmi(weight, height):
    if height < 1.0 or height > 2.5 or weight < 20 or weight > 200:
        return None
    return weight / height ** 2

# Ejemplo: 5'7" y 176 lbs
print(bmi(weight=lb_to_kg(176), height=ft_and_inch_to_m(5, 7)))
```

- Se verifica que los datos sean razonables (de lo contrario, devuelve `None`).
- Se usa `\` para continuar líneas largas (opcional).
- El parámetro `inch` tiene un valor predeterminado `0.0`, permitiendo pasar solo pies.

### Triángulos: verificación y área

**Verificar si tres lados forman un triángulo**  
Condición: la suma de dos lados cualesquiera debe ser mayor que el tercero.

```python
def is_a_triangle(a, b, c):
    return a + b > c and b + c > a and c + a > b
```

**Teorema de Pitágoras** (triángulo rectángulo):  
Se identifica el lado más largo como hipotenusa y se comprueba `c² == a² + b²`.

```python
def is_a_right_triangle(a, b, c):
    if not is_a_triangle(a, b, c):
        return False
    if c > a and c > b:
        return c ** 2 == a ** 2 + b ** 2
    if a > b and a > c:
        return a ** 2 == b ** 2 + c ** 2
    if b > a and b > c:
        return b ** 2 == a ** 2 + c ** 2
    return False
```

**Área de un triángulo con fórmula de Herón**:

```python
def heron(a, b, c):
    p = (a + b + c) / 2
    return (p * (p - a) * (p - b) * (p - c)) ** 0.5

def area_of_triangle(a, b, c):
    if not is_a_triangle(a, b, c):
        return None
    return heron(a, b, c)
```

- El resultado puede tener pequeños errores de redondeo debido a la aritmética de punto flotante (ej. `0.49999999999999983` en lugar de `0.5`).

### Factoriales

El factorial de `n` (denotado `n!`) es el producto de todos los enteros positivos desde 1 hasta `n`. Se define `0! = 1`.

**Versión iterativa**:

```python
def factorial_function(n):
    if n < 0:
        return None
    if n < 2:
        return 1
    product = 1
    for i in range(2, n + 1):
        product *= i
    return product
```

**Versión recursiva** (se explica más adelante).

### Serie de Fibonacci

La secuencia comienza con `Fib₁ = 1`, `Fib₂ = 1`, y cada término siguiente es la suma de los dos anteriores.

**Versión iterativa**:

```python
def fib(n):
    if n < 1:
        return None
    if n < 3:
        return 1
    elem_1 = elem_2 = 1
    the_sum = 0
    for i in range(3, n + 1):
        the_sum = elem_1 + elem_2
        elem_1, elem_2 = elem_2, the_sum
    return the_sum
```

### Recursividad

Una función recursiva se invoca a sí misma. Es fundamental incluir una **condición de terminación** para evitar bucles infinitos.

**Factorial recursivo**:

```python
def factorial_recursive(n):
    if n < 0:
        return None
    if n < 2:
        return 1
    return n * factorial_recursive(n - 1)
```

**Fibonacci recursivo**:

```python
def fib_recursive(n):
    if n < 1:
        return None
    if n < 3:
        return 1
    return fib_recursive(n - 1) + fib_recursive(n - 2)
```

**Ventajas**: código más limpio y cercano a la definición matemática.  
**Desventajas**: mayor consumo de memoria y riesgo de error si no se define bien la condición de parada.

### Resumen de la sección

- Una función puede invocar a otras funciones o a sí misma (recursividad).
- La recursividad requiere una condición de terminación (caso base).
- Ejemplos clásicos: factorial y Fibonacci.
- Se deben considerar tanto las ventajas (claridad) como las desventajas (uso de memoria) al emplear recursividad.

### Prueba de sección

**Pregunta 1**: ¿Qué ocurre al ejecutar este código?

```python
def factorial(n):
    return n * factorial(n - 1)
print(factorial(4))
```

**Respuesta**: Produce `RecursionError` porque no tiene condición de terminación.

**Pregunta 2**: ¿Cuál es la salida del siguiente código?

```python
def fun(a):
    if a > 30:
        return 3
    else:
        return a + fun(a + 3)
print(fun(25))
```

**Respuesta**: 56 (25 + 28 + 3 = 56, ya que 28+3=31, que es >30, retorna 3).







---







## Tuplas y diccionarios

> Este tema lo vimos inicialmente en el segundo trimestre.

Esta sección introduce dos tipos de datos fundamentales en Python: las **tuplas** (secuencias inmutables) y los **diccionarios** (colecciones mutables de pares clave-valor). Se explican sus propiedades, métodos de creación, acceso, modificación y operaciones comunes, así como ejemplos de uso conjunto.

### Tipos de secuencia y mutabilidad

Una **secuencia** es un tipo de dato que puede almacenar múltiples valores y ser recorrida elemento por elemento (por ejemplo, con un bucle `for`). La lista es una secuencia mutable. La **mutabilidad** indica si un dato puede modificarse "in situ" (en el lugar) durante la ejecución del programa.

> "Secuencias", esto es importante.

- **Datos mutables**: pueden cambiarse libremente (listas, diccionarios).
- **Datos inmutables**: no pueden modificarse después de su creación (tuplas, cadenas, números).

### Tuplas

Una **tupla** es una secuencia inmutable. Se define con paréntesis `()` o simplemente separando valores por comas.

```python
    tuple_1 = (1, 2, 4, 8)
    tuple_2 = 1., .5, .25, .125
```

- **Tupla vacía**: `empty = ()`
- **Tupla de un solo elemento**: `one = (1,)` o `one = 1,` (la coma es obligatoria).
- **Acceso a elementos**: igual que en listas, con índices: `tuple_1[0]` → `1`.

> Entonces tiene el mismo sistema de índices.

- **Operaciones**: `len()`, `+` (concatenación), `*` (repetición), `in` / `not in`.
- **Inmutabilidad**: no se puede agregar, eliminar o modificar elementos. Intentarlo produce error.

```python
my_tuple = (1, 10, 100, 1000)
# my_tuple.append(10000)   # AttributeError
# del my_tuple[0]          # TypeError
# my_tuple[1] = -10        # TypeError
```

Las tuplas pueden aparecer en el lado izquierdo de una asignación para desempaquetar valores.

```python
t1 = (1, 2)
t2 = (3, 4)
t1, t2 = t2, t1   # intercambio
```

### Diccionarios

Un **diccionario** es una colección mutable, desordenada (aunque en Python 3.6+ mantienen orden de inserción) de pares **clave:valor**. Se define con llaves `{}`.

```python
    dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
    phone_numbers = {'jefe': 5551234567, 'Suzy': 22657854310}
    empty_dictionary = {}
```

- **Claves**: únicas, pueden ser de cualquier tipo inmutable (cadenas, números, tuplas), pero no listas.
- **Valores**: pueden ser de cualquier tipo.
- **Acceso**: `dictionary[clave]` o `dictionary.get(clave)` (este último no lanza error si no existe).
- **Verificar existencia**: `if clave in dictionary:`.

**Modificación y agregado**:

```python
    dictionary['gato'] = 'minou'          # actualiza valor
    dictionary['cisne'] = 'cygne'         # agrega nueva clave
```

**Eliminación**:

```python
del dictionary['perro']               # elimina par clave-valor
dictionary.popitem()                  # elimina y devuelve el último par (o uno aleatorio en versiones antiguas)
dictionary.clear()                    # vacía el diccionario
```

### Métodos y funciones de los diccionarios

- **`keys()`** → devuelve una vista de todas las claves.
- **`values()`** → devuelve una vista de todos los valores.
- **`items()`** → devuelve una vista de tuplas (clave, valor).
- **`update()`** → agrega pares desde otro diccionario o iterable.
- **`copy()`** → crea una copia superficial.

```python
for key in dictionary.keys():
    print(key, "->", dictionary[key])

for key, value in dictionary.items():
    print(key, "->", value)
```

**Ordenación**:

```python
for key in sorted(dictionary.keys()):
    print(key, "->", dictionary[key])
```

### Las tuplas y los diccionarios pueden trabajar juntos

> Para esto, ¿Qué usos se le puede dar?

Ejemplo: calcular el promedio de calificaciones por estudiante. Se usa un diccionario donde la clave es el nombre y el valor es una tupla con las calificaciones.

```python
school_grades = {}

while True:
    name = input("Ingresa el nombre del estudiante: ")
    if name == "":
        break
    grade = int(input("Ingresa la calificación (0-10): "))
    if grade < 0 or grade > 10:
        break
    if name in school_grades:
        school_grades[name] += (grade,)
    else:
        school_grades[name] = (grade,)

for name in sorted(school_grades.keys()):
    sum_grades = 0
    counter = 0
    for grade in school_grades[name]:
        sum_grades += grade
        counter += 1
    print(name, ":", sum_grades / counter)
```

### Resumen de la sección

**Tuplas**:
- Colección ordenada e inmutable.
- Sintaxis: `(1, 2, 3)` o `1, 2, 3`.
- Acceso por índice, operadores `+`, `*`, `in`, `len()`.
- No se pueden modificar in situ.

**Diccionarios**:
- Colección mutable de pares clave-valor.
- Claves únicas, inmutables.
- Métodos: `keys()`, `values()`, `items()`, `get()`, `update()`, `copy()`, `clear()`.
- Se puede iterar, verificar existencia con `in`, eliminar con `del`.

### Prueba de sección

**Pregunta 1**: ¿Qué imprime `my_tup[2]` si `my_tup = (1, 2, 3)`?  
**Respuesta**: `3`.

**Pregunta 2**:

```python
tup = 1, 2, 3
a, b, c = tup
print(a * b * c)
```

**Respuesta**: `6`.

**Pregunta 3**: Completa para contar cuántos `2` hay en la tupla:

```python
tup = 1, 2, 3, 2, 4, 5, 6, 2, 7, 2, 8, 9
duplicates = tup.count(2)
print(duplicates)  # 4
```

**Pregunta 4**: Unir dos diccionarios:

```python
d1 = {'Adam Smith': 'A', 'Judy Paxton': 'B+'}
d2 = {'Mary Louis': 'A', 'Patrick White': 'C'}
d3 = {}
for item in (d1, d2):
    d3.update(item)
print(d3)
```

**Pregunta 5**: Convertir lista en tupla:

```python
my_list = ["car", "Ford", "flower", "Tulip"]
t = tuple(my_list)
print(t)
```

**Pregunta 6**: Convertir tupla de pares en diccionario:

```python
colors = (("green", "#008000"), ("blue", "#0000FF"))
colors_dictionary = dict(colors)
print(colors_dictionary)
```

> ¿Y bien? Entiendes el código? En algunas preguntas no deje la respuesta para hacer el ejercicio al momento de leerlo.


**Pregunta 7**: ¿Qué imprime?

```python
my_dictionary = {"A": 1, "B": 2}
copy_my_dictionary = my_dictionary.copy()
my_dictionary.clear()
print(copy_my_dictionary)
```

**Respuesta**: `{'A': 1, 'B': 2}`.

**Pregunta 8**: ¿Qué imprime el siguiente código?

```python
colors = {
    "blanco": (255, 255, 255),
    "gris": (128, 128, 128),
    "rojo": (255, 0, 0),
    "verde": (0, 128, 0)
    }
for col, rgb in colors.items():
    print(col, ":", rgb)
```

**Respuesta**: Imprime cada color y su tupla RGB en el orden de inserción.








---









## Excepciones

Esta sección introduce el manejo de errores en Python mediante el mecanismo de excepciones. Se explica cómo usar los bloques `try` y `except` para capturar y gestionar errores en tiempo de ejecución, se describen las excepciones más comunes y se ofrecen estrategias para probar y depurar el código.

### Errores: el pan diario del desarrollador

Los errores en programación son inevitables. Existen dos tipos principales:

- **Errores de datos**: ocurren cuando el código recibe entradas incorrectas (por ejemplo, esperar un número y recibir texto).
- **Errores en el código ("bugs")**: son fallos en la lógica o sintaxis del programa.

Python proporciona herramientas para manejar ambos tipos de manera controlada, evitando que el programa termine abruptamente.

### La rama `try-except`

La forma recomendada en Python para manejar errores es **"pedir perdón en lugar de pedir permiso"**; es decir, ejecutar el código y, si falla, capturar la excepción.

```python
try:
    value = int(input("Ingresa un número natural: "))
    print("El recíproco es", 1/value)
except:
    print("Algo salió mal...")
```

- El bloque `try` contiene el código que puede generar una excepción.
- El bloque `except` se ejecuta solo si ocurre una excepción.
- Si no hay excepción, `except` se omite.

### Manejo de múltiples excepciones

Se pueden especificar distintos `except` para diferentes tipos de excepciones:

```python
try:
    value = int(input("Ingresa un número: "))
    print(10 / value)
except ValueError:
    print("No es un número válido.")
except ZeroDivisionError:
    print("No se puede dividir entre cero.")
except:
    print("Error desconocido.")
```

- Los `except` se evalúan en orden; solo se ejecuta el primero que coincida.
- El `except` sin nombre (genérico) debe ir al final.

### Excepciones comunes

- **`ZeroDivisionError`**: división por cero (con `/`, `//`, `%`).
- **`ValueError`**: valor inapropiado para una operación (ej. `int("hola")`).
- **`TypeError`**: operación no soportada para ese tipo (ej. índice flotante en lista).
- **`AttributeError`**: acceso a un atributo o método inexistente.
- **`SyntaxError`**: error de sintaxis (no debe manejarse con `try`, sino corregirse).

### Por qué no puedes evitar probar tu código

Las pruebas son esenciales para detectar errores. Cada camino de ejecución (determinado por condicionales, bucles, etc.) debe ser probado con diferentes conjuntos de datos. Un error de sintaxis en una ruta que no se ejecuta puede pasar desapercibido hasta que el programa llegue a ella.

**Depuración**:
- **Depurador interactivo**: permite ejecutar línea por línea, inspeccionar variables y pila de llamadas.
- **Depuración por impresión (`print` debugging)**: agregar `print()` para seguir el flujo y valores de variables.
- **Técnica del patito de goma**: explicar el código a alguien (o a un objeto) para encontrar el error.
- **Aislar el problema**: comentar partes, usar valores fijos, reducir el código al mínimo que reproduce el error.
- **Tomar descansos**: regresar con una mente fresca.

> Chevere pensar en esto, el tester o la persona que hace las pruebas es un muy buen amigo. Que el usuario final sea quien encuentre errores seria de lo peor.

### Pruebas unitarias

Las pruebas unitarias son una práctica avanzada que consiste en escribir pruebas automatizadas junto con el código. Python proporciona el módulo `unittest`. Este enfoque garantiza que los cambios no introduzcan nuevos errores.

### Resumen de la sección

- Los errores de sintaxis (`SyntaxError`) deben corregirse, no manejarse.
- Las excepciones se manejan con `try-except`. Se pueden capturar excepciones específicas o genéricas.
- Las excepciones más útiles: `ZeroDivisionError`, `ValueError`, `TypeError`, `AttributeError`, `KeyboardInterrupt`.
- La depuración es una habilidad clave: usa herramientas, impresiones y estrategias lógicas.
- Prueba todos los caminos de ejecución con diferentes entradas.

### Prueba de sección

**Pregunta 1**: ¿Qué imprime el siguiente código si el usuario ingresa `0`?

```python
try:
    value = int(input("Ingresa un número entero: "))
    print(value/value)
except ValueError:
    print("Entrada incorrecta...")
except ZeroDivisionError:
    print("Entrada errónea...")
except:
    print("¡Buuuu!")
```

**Respuesta**: `Entrada errónea...` (se captura `ZeroDivisionError`).

**Pregunta 2**: ¿Qué sucede si el usuario ingresa `0` en este código?

```python
value = input("Ingresa un número entero: ")
print(10/value)
```

**Respuesta**: Se genera un `TypeError` porque `value` es cadena y no se puede dividir un entero por una cadena.

> Gracias por leer y scrollear hasta aqui abajo... ¿Curioso no? ... muy probablemente yo no me daré cuenta...

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm10bG43aXRxcjgwdmNjbGgwdzJmOXlneXU3YjBmNG16MzlyY3B3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wGWFVvwJybDwTlnTSS/giphy.gif">

*Imagen Tomada De: @AllianceDAO - https://giphy.com/gifs/AllianceDAO-alliance-alliancedao-dao-wGWFVvwJybDwTlnTSS







---







> Vamos! A dar un gran paso.

Ahora a continuación tendremos una serie de preguntas, esto va a determinar si realmente se ha entendido el tema o no.

## Pruebas de Modulo

### Pregunta 1 - Definición de función sin parámetros

¿Cuál de las siguientes líneas inicia correctamente una definición de función sin parámetros?

> Hace falta el parentesis

* `def fun:`

> Esta escrito al revez y asi no se crea una función en python

* `fun function():`

> Esta es la correcta:

* `def fun():`

> Asi no se crea tampoco una función en python

* `function fun():`

> Estoy seguro de mi respuesta: def fun(): No hay de otra por la sintaxis.

---


### 2. Invocación con parámetros por defecto

Una función definida de la siguiente manera: (Elegir dos respuestas)

```python
def function(x=0):
    return x

```

* [ ] puede ser invocado con exactamente un argumento.
* [ ] debe ser invocada con exactamente un argumento.
* [ ] puede ser invocada sin ningún argumento.
* [ ] debe invocarse sin ningún argumento.

> Para mi que puede ser invocada sin ningún argumento y debe invocarse asi.
>
> Esto resulto equivocado.
> Pues tambien puede ser invocado con exactamente un argumento y tambien puede ser sin argumento, y no esta obligada a ninguno de los dos casos.




---


### 3. Concepto de función integrada

Una función integrada es una función que:

* [ ] tiene que ser importado antes de su uso
* [ ] viene con Python, y es una parte integral de Python
* [ ] ha sido colocado dentro de tu código por otro programador
* [ ] está oculto a los programadores

> Para mi viene con python, asi como print()
>
> Es tal cual como pensé.




---



### 4. Características de las tuplas como secuencias

El hecho de que las tuplas pertenezcan a tipos de secuencia significa que:

* [ ] en realidad son listas
* [ ] se pueden modificar usando la instrucción `del`
* [ ] se pueden indexar y rebanar como las listas
* [ ] se pueden extender usando el método `.append()`

> Esta ya es una pregunta un poco más compleja, y para mi la respuesta es  se pueden indexar y rebanar como las listas
>
> Y sí.
> Las listas son mutables, una tupla es inmutable, la tupla no usa del ni .append()



---


### 5. Salida de función recursiva suma acumulada

¿Cuál es la salida del siguiente fragmento de código?

```python
def f(x):
    if x == 0:
        return 0
    return x + f(x - 1)

print(f(3))

```

* [ ] `6`
* [ ] `3`
* [ ] `el codigo es erroneo`
* [ ] `1`

> Esta pregunta me corchó... No sé porque en mi cabeza daba 5 y no 6... Aqui hubiera respondido al azar realmente.

Para entender por qué, analicemos:

La función `f(x)` calcula la suma de todos los números enteros desde `x` hasta `0`. El proceso recursivo es:

```python
f(3) = 3 + f(2)
     = 3 + (2 + f(1))
     = 3 + (2 + (1 + f(0)))
     = 3 + (2 + (1 + 0))
     = 3 + 2 + 1 + 0
     = 6
```

> Es bonito mirar este código, es tal cual una ecuación.


---



### 6. Salida de función con incremento de argumento

¿Cuál es la salida del siguiente fragmento de código?

```python
def fun(x):
    x += 1
    return x

x = 2
x = fun(x + 1)
print(x)

```

* [ ] `3`
* [ ] `4`
* [ ] `5`
* [ ] `el código es erroneo`

> Para mi, es 4.
>
> Y sí lo era!

Explicación:

1. Se define la función fun(x), que toma un argumento, le suma 1 y devuelve el resultado.
2. Se asigna x = 2.
3. Se evalúa la llamada fun(x + 1):
4. Primero se calcula el argumento: x + 1 → 2 + 1 → 3.
5. Se ejecuta la función con x = 3 (dentro de la función, esta x es local).
6. Dentro de la función: x += 1 → 3 + 1 → 4.
7. La función retorna 4.
8. Ese valor retornado (4) se asigna a la variable global x.
9. print(x) imprime 4.
10. El código no tiene errores y la respuesta es 4



---




### 7. Indexación de elementos en una tupla de diccionario

¿Qué código insertarías en lugar del comentario para obtener el resultado esperado?

Salida esperada:

```text
a
b
c

```

Código:

```python
dictionary = {}
my_list = ['a', 'b', 'c', 'd']

for i in range(len(my_list) - 1):
    dictionary[my_list[i]] = (my_list[i], )

for i in sorted(dictionary.keys()):
    k = dictionary[i]
    # Inserta tu código aquí.

```

* [ ] `print(k["0"])`
* [ ] `print(k)`
* [ ] `print(k[0])`
* [ ] `print(k['0'])`

> Esta pregunta ya esta compleja! Que interesante... Aunque me corchó.
>
> La respuesta correcta es: print(k[0])

Entonces analicemos:

- El diccionario asigna a cada clave `'a'`, `'b'`, `'c'` una tupla de un solo elemento: `('a',)`, `('b',)`, `('c',)`.
- En el bucle, `k` recibe esa tupla.
- Para imprimir solo la letra sin paréntesis ni coma, se debe acceder al primer elemento de la tupla con `k[0]`.

**Por qué las otras opciones son incorrectas:**
- `print(k)` → imprime `('a',)`, `('b',)`, `('c',)`, no el formato deseado.
- `print(k["0"])` y `print(k['0'])` → intentan acceder a una tupla con un índice de tipo cadena, lo que produce un error (`TypeError`), ya que las tuplas solo aceptan índices enteros.

> Aqui me doy cuenta entonces que me faltó analizar los indices.
>
> Si observamos bien, solo hay una opción de respuesta la cual su indice es un entero y por ende correcto debido a que el resto no.




---



### 8. Error por falta de argumentos obligatorios

El siguiente fragmento de código:

```python
def func(a, b):
    return a ** a

print(func(2))

```

* [ ] es erroneo
* [ ] dará como salida `4`
* [ ] devolverá `None`
* [ ] dará como salida `2`

> Esta es un poco complicada realmente, aunque para mi es erronea porque en el print no hay suficientes argumentos.
>
> Dicho y hecho.




---




### 9. Multiplicación de resultados entre funciones exponenciales

El siguiente fragmento de código:

```python
def func_1(a):
    return a ** a

def func_2(a):
    return func_1(a) * func_1(a)

print(func_2(2))

```

* [ ] es erroneo
* [ ] dará como salida `2`
* [ ] dará como salida `4`
* [ ] dará como salida `16`

> Aqui ya es muy sencillo hacer la operación aritmetica en donde 2 ** 2 es 4, y 4 * 4 es 16.
>
> Este razonamiento es correcto.
>
> Bonito como se juegan con las variables ¿No?




---




### 10. Sintaxis de parámetros por defecto con valor cero

¿Cuál de las siguientes líneas inicia correctamente una función utilizando dos parámetros, ambos con valores predeterminados de cero?

* [ ] `def fun(a=b=0):`
* [ ] `def fun(a=0, b=0):`
* [ ] `fun fun(a, b=0):`
* [ ] `fun fun(a=0, b):`

> Aqui es muy sencillo identificarlo por temas de sintaxis: def fun(a=0, b=0):
>
> Y sí.


---



### 11. Propiedades del valor None

¿Cuáles de las siguientes afirmaciones son verdaderas? (Selecciona dos respuestas)

* [ ] El valor `None` puede ser asignado a variables
* [ ] El valor `None` no puede ser empleado fuera de las funciones
* [ ] El valor `None` puede ser empleado como argumento de operaciones aritméticas
* [ ] El valor `None` puede ser comparado con otras variables

> Esta es interesante, para mi que puede ser asignado a variables y puede ser empleado como argumento.
>
> Me equivoque!
>
> Me falto leer el tema de "Operaciones aritmeticas".

Las dos respuestas correctas son:

> En mi primera opción estuve bien, con la otra no.

- El valor `None` puede ser asignado a variables
- El valor `None` puede ser comparado con otras variables

¿Por qué?

- **"El valor `None` puede ser asignado a variables"** → Verdadero. Es común usar `x = None` para indicar que una variable no tiene valor asignado aún.
- **"El valor `None` puede ser comparado con otras variables"** → Verdadero. Se puede comparar usando `is None` (recomendado) o `== None`, por ejemplo: `if variable is None:`.

Las otras opciones son incorrectas porque:

- *"El valor `None` no puede ser empleado fuera de las funciones"* → Falso. `None` es un objeto global que existe en todo el programa, dentro y fuera de funciones.
- *"El valor `None` puede ser empleado como argumento de operaciones aritméticas"* → Falso. Intentar hacer `None + 5` o `None * 2` produce un error `TypeError`, ya que `None` no es un número.




---


### 12. Salida de funciones anidadas con evaluación de paridad

¿Cuál es la salida del siguiente fragmento de código?

```python
def fun(x):
    if x % 2 == 0:
        return 1
    else:
        return

print(fun(fun(2)) + 1)

```

* [ ] el código provocará un error de tiempo de ejecución
* [ ] `1`
* [ ] `None`
* [ ] `2`

> EL resultado para mi será 2.
>
> Y no, no era verdad.
>
> La respuesta correcta es: el código provocará un error de tiempo de ejecución

Analicemos por qué:

1. Se define la función `fun(x)`:
   - Si `x` es par (`x % 2 == 0`), retorna `1`.
   - Si `x` es impar, entra en el `else` y ejecuta un `return` sin valor, lo que en Python equivale a retornar `None`.

2. Se evalúa la expresión `print(fun(fun(2)) + 1)`:
   - Primero se evalúa la llamada interna: `fun(2)`.
     - `2` es par → retorna `1`.
   - Sustituyendo queda: `fun(1) + 1`.
   - Ahora se evalúa `fun(1)`:
     - `1` es impar → entra al `else` y retorna `None`.
   - Sustituyendo queda: `None + 1`.

3. Python no permite sumar `None` con un entero. Esto lanza una excepción de tipo:
   ```
   TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'
   ```

Por lo tanto, el código produce un error en tiempo de ejecución (no llega a imprimir nada).

> Me faltó analizar más print(fun(fun(2)) + 1) debido a que me salte el uso de la función.




---


### 13. Uso de la instrucción global en una función

¿Cuál es la salida del siguiente fragmento de código?

```python
def fun(x):
    global y
    y = x * x
    return y

fun(2)
print(y)

```

* [ ] `2`
* [ ] `4`
* [ ] el código provocará un error de tiempo de ejecución
* [ ] Ninguno

> Para mi que la respuesta es 4.
>
> Y sí.



---



### 14. Acceso a variable global y parámetro end en print

¿Cuál es la salida del siguiente fragmento de código?

```python
def any():
    print(var + 1, end='')

var = 1
any()
print(var)

```

* [ ] `11`
* [ ] `12`
* [ ] `21`
* [ ] `22`

> Casi se me dificulta entender qué sucedía aqui. Pero pues end agrega el atributo '' a todo y por ende en texto, de esta forma la respuesta es 12. O ese fue mi razonamiento... Porque mi opción estuvo incorrecta.

> La respuesta correcta es: `21`

Analicemos por qué

1. Se define la función `any()` (que oculta la función integrada `any`, pero esto no causa error). Dentro imprime `var + 1` con `end=''`, lo que suprime el salto de línea.
2. Se asigna `var = 1` (variable global).
3. Se llama a `any()`:
   - `var + 1` → `1 + 1 = 2`.
   - `print(2, end='')` imprime `2` sin saltar de línea.
4. Luego se ejecuta `print(var)`:
   - `var` sigue siendo `1` (la función no modifica la variable global, solo la lee).
   - Imprime `1` con salto de línea (por defecto).
5. La salida total es `2` seguido de `1` → `21`.

El código es correcto y no produce errores.




---




### 15. Inmutabilidad de tuplas y asignación de elementos

Asumiendo que `my_tuple` es una tupla creada correctamente, el hecho de que las tuplas son inmutables significa que la siguiente instrucción:

```python
my_tuple[1] = my_tuple[1] + my_tuple[0]
```

* [ ] puede ser ilegal si la tupla contiene cadenas
* [ ] es completamente correcta
* [ ] puede ser ejecutada solo si la tupla contiene al menos dos elementos
* [ ] es ilegal

> Esta pregunta es bastante curiosa. Pero en teoria, por la oración my_tuple ya habia sido creada y por ende estos son indices. Y estoy entre que es ilegal o que puede ser ejecutada solo si la tupla contiene al menos dos caracteres.
>
> Por intuición escojo que puede ser ejecutada.
>
> Recordemos que una tupla es inmutable! Y por ende mi intuición falló.

En consecuencia intenta asignar un nuevo valor a la posición 1 de la tupla, lo cual no está permitido y genera un error de tipo TypeError.




---




### 16. Modificación de lista dentro de una función sin retorno

¿Cuál es la salida del siguiente fragmento de código?

```python
my_list = ['Mary', 'had', 'a', 'little', 'lamb']

def my_list(my_list):
    del my_list[3]
    my_list[3] = 'ram'

print(my_list(my_list))

```

* [ ] `['Mary', 'had', 'a', 'little', 'lamb']`
* [ ] `no hay salida, el fragmento es erroneo`
* [ ] `['Mary', 'had', 'a', 'lamb']`
* [ ] `['Mary', 'had', 'a', 'ram']`

> Para mi que la respuesta es en teoria remplazar little con ram, pero no aparece en las opciones de respuesta. Entonces por descarte le daré a No hay salida, el fragmento es erroneo. Porque algo debe pasar para que no sea asi.
>
> Y sí.

Entendamos por qué:

El código tiene un error debido al **solapamiento de nombres**.

1. Se define la función `my_list` y se asigna al nombre `my_list`.
2. Luego se reasigna `my_list` a una lista con `my_list = ['Mary', 'had', 'a', 'little', 'lamb']`, sobrescribiendo la función.
3. Al intentar ejecutar `print(my_list(my_list))`, el nombre `my_list` ahora hace referencia a la lista, no a la función. Intentar llamar a una lista como si fuera una función produce un error de tipo:

   ```
   TypeError: 'list' object is not callable
   ```

Por lo tanto, el código no produce salida y es erróneo.

> wow.




---


### 17. Invocación combinando argumentos posicionales y de palabra clave

¿Cuál es la salida del siguiente fragmento de código?

```python
def fun(x, y, z):
    return x + 2 * y + 3 * z

print(fun(0, z=1, y=3))

```

* [ ] `3`
* [ ] `el código es erroneo`
* [ ] `0`
* [ ] `9`

> Pues yo haciendo la operación aritmetica en la cabeza, en teoria el resultado es 12... Pero seguramente en los argumentos como en unos agrega el valor con el nombre de la variable, pero en el primer argumento solo agrega el valor... Me imagino que genera un error.
>
> Y no. Me equivoqué.

> La respuesta correcta es: `9`

Analicemos por qué:

La función `fun(x, y, z)` retorna `x + 2*y + 3*z`.

En la llamada `fun(0, z=1, y=3)`:
- `0` se asigna al parámetro posicional `x`.
- `z=1` asigna `1` al parámetro `z`.
- `y=3` asigna `3` al parámetro `y`.

Sustituyendo: `0 + 2*3 + 3*1 = 0 + 6 + 3 = 9`.

> Analizando esto, ahora no sé por qué realice las operaciones mal... El leer rápido y no seguir la jerarquia de operaciones me jugó mal.

La combinación de argumentos posicionales y de palabra clave es válida, y el código no tiene errores.



---


### 18. Modificación de argumento de palabra clave con valor predeterminado

¿Cuál es la salida del siguiente fragmento de código?

```python
def fun(inp=2, out=3):
    return inp * out

print(fun(out=2))

```

* [ ] `6`
* [ ] `2`
* [ ] `4`
* [ ] `el código es erroneo`

> Para mi, la respuesta es 4.
>
> Y sí.




---


### 19. Bucle de acceso iterativo a claves de un diccionario

¿Cuál es la salida del siguiente código?

```python
dictionary = {'one': 'two', 'three': 'one', 'two': 'three'}
v = dictionary['one']

for k in range(len(dictionary)):
    v = dictionary[v]

print(v)

```

* [ ] `three`
* [ ] `('one', 'two', 'three')`
* [ ] `two`
* [ ] `one`

> Haciendo el seguimiento, para mi la respuesta es three. Aunque al inicio casi me confundo, pero pensé "dictionary[v] va a remplazar lo que hay en v = dictionary['one'] y por ende debo seguir las iteraciones no más."
>
> Me equivoqué, aunque mi razonamiento estuvo muy cerca.

> La respuesta correcta es: `two`

Analicemos: 

El diccionario es:
```python
{'one': 'two', 'three': 'one', 'two': 'three'}
```

- `v = dictionary['one']` → `v = 'two'`
- El bucle `for k in range(len(dictionary))` itera 3 veces (0, 1, 2).
- En cada iteración se actualiza `v = dictionary[v]`:

  - Iteración 1: `v = dictionary['two']` → `'three'`
  - Iteración 2: `v = dictionary['three']` → `'one'`
  - Iteración 3: `v = dictionary['one']` → `'two'`

Al final, `v` es `'two'`, que se imprime.

> Me faltó entender que ya iniciaba en el tercer indice.


---



### Pregunta 20

¿Cuál es la salida del siguiente código?

```python
tup = (1, 2, 4, 8)
tup = tup[1:-1]
tup = tup[0]
print(tup)
```

* [ ] `2`
* [ ] `(2, )`
* [ ] `(2)`
* [ ] `el código es erroneo`

> Me corchó esta pregunta. Yo seleccioné el código es erroneo debido a que una tupla es inmutable... Pero solo se rebano la tupla y no se modifico nada.

Analicemos:

> La respuesta correcta es: `2`

Analicemos por qué:

1. `tup = (1, 2, 4, 8)` → la tupla tiene 4 elementos.
2. `tup = tup[1:-1]` → el rebanado (slicing) toma los elementos desde el índice `1` hasta el índice `-1` (excluyendo el último). Es decir, toma los índices `1` y `2` → `(2, 4)`.

> Me faltó entender, asi como me paso con una pregunta en el archivo markdown 10-prueba-modulo.md de esta carpeta
>
> El rebanado va a iniciar desde 1, es decir 2. 
> El rebanado va a descontar el fin, eso quiere decir que -1 ya no se cuenta y por ende 8 ya no existe.

3. `tup = tup[0]` → se accede al primer elemento de la tupla `(2, 4)`, que es el entero `2`. Ahora `tup` ya no es una tupla, sino un entero.
4. `print(tup)` → imprime `2`.

El código es perfectamente válido y no produce errores.


---


### Pregunta 21

Selecciona las sentencia **true** sobre el bloque *try-except* en relación con el siguiente ejemplo. (Selecciona **dos** respuestas).

```python
try:
    # Algo de código...
except:
    # Algo de código...

```

* [ ] El código que sigue a la sentencia `try` será ejecutado si el código dentro de la sentencia `except` se encuentra con un error.
* [ ] Si sospechas que un fragmento de código puede generar una excepción, se debe colocar dentro del bloque `try`.
* [ ] El código que sigue a la sentencia `except` será ejecutado si el código en el bloque `try` se encuentra con un error.
* [ ] Si existe un error de sintaxis en el código ubicado en el bloque `try`, la sentencia `except` **no** lo manejará, y una excepción *SyntaxError* será generada.

> Esta pregunta define qué tanto se entendió de estas dos palabras reservadas.

En la primera opción es al revez, primero es try y si hay un error se ejecutara except.

Por otro lado si se sospecha de una posible excepción, no creo que se deba... Pero si se puede.

Siendo asi, quedan las ultimas dos opciones, el Syntax Error.

> Y una me quedo bien y la otra mal.

Las respuestas correctas eran:

+ Si sospechas que un fragmento de código puede generar una excepción, se debe colocar dentro del bloque `try`.
+ El código que sigue a la sentencia `except` será ejecutado si el código en el bloque `try` se encuentra con un error.

Analicemos por qué

- El bloque `try` envuelve el código que podría lanzar una excepción en tiempo de ejecución.
- Si ocurre una excepción dentro del `try`, el flujo salta al bloque `except`, donde se puede manejar el error.
- Los errores de sintaxis (`SyntaxError`) no son capturables con `try-except` porque ocurren antes de la ejecución del programa (en tiempo de compilación); aunque la afirmación 4 es técnicamente cierta, la pregunta pide solo dos respuestas y las opciones 2 y 3 son las definiciones fundamentales del bloque.



---


### Pregunta 22

¿Cuál es la salida del siguiente código?

```python
try:
    value = input("Ingresa un valor: ")
    print(value/value)
except ValueError:
    print("Entrada incorrecta...")
except ZeroDivisionError:
    print("Entrada errónea...")
except TypeError:
    print("Entrada muy errónea...")
except:
    print("¡Buuu!")

```

* [ ] `Entrada incorrecta...`
* [ ] `Entrada muy errónea...`
* [ ] `¡Buuu!`
* [ ] `Entrada errónea...`

> Pienso que se tratará de ingresar un número entonces 2/2... 1 y ya. Se dividrá por si mismo. De esta forma imprimira buuu porque en teoria no hubo errores.
>
> Esto estuvo mal.

La respuesta correcta es: `Entrada muy errónea...`

Analicemos por qué

- `input()` siempre devuelve una cadena de texto (`str`), sin importar lo que el usuario escriba.

> Si pensé en qué no iba a aceptar un número por la falta de int. Pero no confié en esto.

- La operación `value/value` intenta dividir una cadena entre sí misma. El operador de división (`/`) no está definido para cadenas, por lo que Python lanza una excepción de tipo `TypeError`.
- Esta excepción es capturada por el bloque `except TypeError`, que imprime `"Entrada muy errónea..."`.

Las otras opciones no ocurren porque:
- `ValueError` no se produce, ya que no se intenta convertir el valor a otro tipo.
- `ZeroDivisionError` no se produce, porque no es una operación numérica.
- El bloque genérico `except:` no se alcanza, porque el `TypeError` ya tiene su propio manejador.

> Ahora por otro lado, si llegaste aqui. Realmente impresionante. ¿Fuiste hasta el final del documento?, ¿Por qué?
>
> hmm. Buen día.