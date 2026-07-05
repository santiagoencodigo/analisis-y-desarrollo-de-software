# Funciones

Este documento cubre los fundamentos para crear, usar y llamar funciones propias en Python, abordando su necesidad para evitar código repetitivo, gestionar la complejidad de los algoritmos y facilitar el trabajo en equipo.

También se detalla cómo las funciones se comunican con su entorno a través de parámetros, argumentos posicionales, palabras clave y valores predeterminados. El material forma parte de mi proceso de formación como tecnólogo en Análisis y Desarrollo de Software (ADSO), documentando el repaso del curso de Cisco sobre fundamentos de programación.

---

## Tabla de Contenido

1. [La necesidad de las funciones](#la-necesidad-de-las-funciones)
2. [Descomposición y trabajo en equipo](#descomposicion-y-trabajo-en-equipo)
3. [Procedencia de las funciones](#procedencia-de-las-funciones)
4. [Definición y primera función](#definicion-y-primera-funcion)
5. [Mecanismo de invocación y restricciones](#mecanismo-de-invocacion-y-restricciones)
6. [Resumen y tipos de funciones (primera parte)](#resumen-y-tipos-de-funciones-primera-parte)
7. [Cómo se comunican las funciones con su entorno](#como-se-comunican-las-funciones-con-su-entorno)

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

Este documento cubre los fundamentos esenciales de funciones en Python, tanto su creación como su comunicación con el entorno. La práctica y experimentación con estos ejemplos consolidarán el aprendizaje.

> Gracias por leer.