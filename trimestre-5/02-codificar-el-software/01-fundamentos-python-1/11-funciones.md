# Funciones

Este documento cubre los fundamentos para crear, usar y llamar funciones propias en Python, abordando su necesidad para evitar código repetitivo, gestionar la complejidad de los algoritmos y facilitar el trabajo en equipo.

También se detalla cómo las funciones se comunican con su entorno a través de parámetros y argumentos, la devolución de resultados con la instrucción `return`, y el manejo de alcances (variables locales y globales) mediante la palabra clave `global`. Se exploran el valor `None`, el paso de listas como argumentos, la devolución de listas como resultados y se incluyen laboratorios prácticos sobre años bisiestos, días por mes, día del año, números primos y conversión de consumo de combustible.

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


> Gracias por leer.