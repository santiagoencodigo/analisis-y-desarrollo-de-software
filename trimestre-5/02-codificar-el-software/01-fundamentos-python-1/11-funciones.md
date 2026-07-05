
# Funciones

Este documento cubre los fundamentos para crear, usar y llamar funciones propias en Python, abordando su necesidad para evitar código repetitivo, gestionar la complejidad de los algoritmos y facilitar el trabajo en equipo. El material forma parte de mi proceso de formación como tecnólogo en Análisis y Desarrollo de Software (ADSO), documentando el repaso del curso de Cisco sobre fundamentos de programación.

## Tabla de Contenido

- La necesidad de las funciones
- Descomposición y trabajo en equipo
- Procedencia de las funciones
- Definición y primera función
- Mecanismo de invocación y restricciones
- Resumen y tipos de funciones

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

## Resumen y tipos de funciones

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

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenpyaTFjZnVta3AxenkydnFqcmF2bzJyZndtMDZna2lxa2Job3R1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H03PuVdwREB21ANkLX/giphy.gif">

*Imagen Tomada De: @cc0studios - https://giphy.com/gifs/cc0studios-mfer-normal-vibe-coding-H03PuVdwREB21ANkLX*