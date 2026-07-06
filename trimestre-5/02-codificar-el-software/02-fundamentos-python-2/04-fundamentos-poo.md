# Programación Orientada a Objetos en Python

Este documento intenta ser guía completa y estructurada sobre los fundamentos de la Programación Orientada a Objetos (POO) en Python. Está diseñado tanto para el estudio como para la consulta rápida, cubriendo desde los conceptos básicos hasta temas avanzados como herencia múltiple, excepciones personalizadas y reflexión.

> Son mis apuntes refinados.

---

## Introducción a la POO

### Paradigmas de programación

Existen dos enfoques principales para el desarrollo de software:

- **Programación procedimental**: el código y los datos viven en mundos separados. Las funciones operan sobre los datos, pero los datos no tienen control sobre las funciones. Este enfoque es efectivo para proyectos pequeños y lineales.
- **Programación orientada a objetos (POO)**: el código y los datos se encapsulan en una misma entidad llamada **objeto**. Los objetos contienen **propiedades** (datos) y **métodos** (comportamientos), lo que facilita la organización, reutilización y mantenimiento del código, especialmente en proyectos grandes y complejos.

Python es un lenguaje que soporta ambos paradigmas, lo que lo hace versátil para distintos tipos de aplicaciones.

### Conceptos fundamentales

- **Clase**: es un modelo o plantilla a partir de la cual se crean objetos. Define un conjunto de propiedades y métodos que caracterizan a sus instancias.
- **Objeto**: es una instancia concreta de una clase. Cada objeto tiene su propio estado y comportamiento.
- **Herencia**: mecanismo que permite crear una nueva clase a partir de una existente, heredando sus atributos y métodos.
- **Encapsulamiento**: ocultamiento de los detalles internos de un objeto, exponiendo solo lo necesario a través de una interfaz controlada.
- **Polimorfismo**: capacidad de un objeto de comportarse de manera diferente según el contexto, generalmente a través de la redefinición de métodos en subclases.

---

## Clases y Objetos

### Definición de una clase

Para definir una clase en Python se utiliza la palabra clave `class`:

```python
class MiClase:
    pass
```

La clase puede contener métodos y atributos. El bloque `pass` indica que la clase está vacía, pero es válida.

### Creación de objetos (instanciación)

Un objeto se crea llamando a la clase como si fuera una función:

```python
objeto = MiClase()
```

Cada objeto es una instancia independiente con su propio espacio de nombres.

### El constructor `__init__`

El método `__init__` es el constructor de la clase. Se ejecuta automáticamente al instanciar un objeto y permite inicializar sus atributos.

```python
class Ejemplo:
    def __init__(self, valor):
        self.atributo = valor

obj = Ejemplo(10)
```

- El primer parámetro de `__init__` es siempre `self`, que hace referencia al objeto que se está creando.
- `self` se utiliza para acceder y modificar los atributos del objeto.

### Métodos de instancia

Los métodos son funciones definidas dentro de una clase y operan sobre los objetos. Todos los métodos reciben `self` como primer parámetro.

```python
class Perro:
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print(f"{self.nombre} dice: ¡Guau!")
```

### Representación textual con `__str__`

El método `__str__` permite definir cómo se representa un objeto como cadena, útil para depuración y visualización.

```python
class Gato:
    def __init__(self, nombre):
        self.nombre = nombre

    def __str__(self):
        return f"Gato: {self.nombre}"

g = Gato("Michi")
print(g)  # Gato: Michi
```

---

## Variables de Instancia y de Clase

### Variables de instancia

Son atributos propios de cada objeto. Se crean generalmente dentro del constructor usando `self`.

```python
class Punto:
    def __init__(self, x, y):
        self.x = x
        self.y = y
```

Cada objeto tiene su propia copia de `x` e `y`.

### Variables de clase

Son atributos compartidos por todas las instancias de una clase. Se definen directamente en el cuerpo de la clase, fuera de cualquier método.

```python
class Contador:
    total = 0

    def __init__(self):
        Contador.total += 1
```

El valor de `total` es común a todos los objetos.

### Atributos privados

Para ocultar un atributo y evitar su acceso directo desde fuera, se antepone doble guion bajo `__` a su nombre. Esto provoca un _name mangling_ que renombra el atributo internamente.

```python
class Seguro:
    def __init__(self):
        self.__secreto = 42

    def obtener_secreto(self):
        return self.__secreto
```

Aunque el atributo es privado, aún se puede acceder mediante `_Seguro__secreto`, pero no se recomienda.

### Diccionario `__dict__`

Cada objeto y cada clase contienen un diccionario `__dict__` que almacena sus atributos. Es útil para inspeccionar dinámicamente el contenido.

```python
class Demo:
    def __init__(self):
        self.a = 1
        self.b = 2

d = Demo()
print(d.__dict__)  # {'a': 1, 'b': 2}
```

### Verificación de existencia de atributos

La función `hasattr()` permite comprobar si un objeto o clase posee un atributo determinado.

```python
if hasattr(obj, 'nombre'):
    print(obj.nombre)
```

---

## Herencia

### Definición y propósito

La herencia permite crear una nueva clase (subclase) a partir de una clase existente (superclase). La subclase hereda todos los atributos y métodos de la superclase, pudiendo agregar o modificar los suyos propios.

```python
class Vehiculo:
    def moverse(self):
        print("El vehículo se mueve")

class Coche(Vehiculo):
    def moverse(self):
        print("El coche rueda")
```

### Uso de `super()`

La función `super()` permite acceder a los métodos de la superclase, especialmente útil para invocar el constructor de la clase padre.

```python
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)
        self.raza = raza
```

### Jerarquía de clases

La herencia puede ser de varios niveles. Python permite la herencia múltiple, aunque se recomienda usarla con precaución.

```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass
```

### `issubclass()` e `isinstance()`

- `issubclass(ClaseHija, ClasePadre)` devuelve `True` si existe una relación de herencia directa o indirecta.
- `isinstance(objeto, Clase)` devuelve `True` si el objeto es instancia de la clase o de alguna de sus subclases.

```python
class Animal: pass
class Perro(Animal): pass

p = Perro()
print(isinstance(p, Animal))  # True
print(issubclass(Perro, Animal))  # True
```

### Orden de Resolución de Métodos (MRO)

Python determina el orden en que se buscan los métodos y atributos en las clases base. Se puede consultar mediante el atributo `__mro__` o el método `mro()`.

```python
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.__mro__)
```

En herencia múltiple, Python sigue un orden de izquierda a derecha y de abajo hacia arriba, garantizando que se respete el MRO sin ambigüedades.

### Polimorfismo

El polimorfismo permite que un método definido en una superclase sea redefinido en subclases, de modo que el comportamiento varíe según el objeto concreto.

```python
class Animal:
    def sonido(self):
        pass

class Perro(Animal):
    def sonido(self):
        return "Guau"

class Gato(Animal):
    def sonido(self):
        return "Miau"

animales = [Perro(), Gato()]
for a in animales:
    print(a.sonido())
```

### Composición como alternativa

La composición consiste en incluir otros objetos dentro de una clase para delegar responsabilidades. Es preferible a la herencia múltiple en muchos casos.

```python
class Motor:
    def encender(self):
        print("Motor encendido")

class Coche:
    def __init__(self):
        self.motor = Motor()

    def arrancar(self):
        self.motor.encender()
```

---

## Excepciones Orientadas a Objetos

### Jerarquía de excepciones

Todas las excepciones en Python son clases que heredan de `BaseException`. La clase `Exception` es la base para la mayoría de las excepciones comunes.

Puedes construir tu propia jerarquía definiendo subclases de `Exception`.

```python
class MiError(Exception):
    pass
```

### Bloques `try-except-else-finally`

- `try`: bloque donde puede ocurrir una excepción.
- `except`: captura y maneja la excepción.
- `else`: se ejecuta si no ocurre ninguna excepción.
- `finally`: siempre se ejecuta, ocurra o no una excepción.

```python
try:
    x = 1 / 0
except ZeroDivisionError as e:
    print("Error:", e)
else:
    print("Todo bien")
finally:
    print("Esto siempre se ejecuta")
```

### Captura de objetos de excepción

La cláusula `except` puede incluir `as variable` para obtener el objeto de excepción, el cual contiene información útil en el atributo `args`.

```python
try:
    raise ValueError("Mensaje personalizado")
except ValueError as e:
    print(e.args)  # ('Mensaje personalizado',)
```

### Creación de excepciones personalizadas

Es común derivar excepciones propias de `Exception` o de una clase más específica. Puedes agregar atributos adicionales para transportar información contextual.

```python
class PizzaError(Exception):
    def __init__(self, pizza, mensaje):
        super().__init__(mensaje)
        self.pizza = pizza

class DemasiadoQuesoError(PizzaError):
    def __init__(self, pizza, queso, mensaje):
        super().__init__(pizza, mensaje)
        self.queso = queso

def hacer_pizza(tipo, queso):
    if tipo not in ["margarita", "napolitana"]:
        raise PizzaError(tipo, "Tipo de pizza no válido")
    if queso > 100:
        raise DemasiadoQuesoError(tipo, queso, "Demasiado queso")
    print("Pizza lista")
```

---

## Laboratorios y Ejercicios Prácticos

A continuación se presentan ejercicios que refuerzan los conceptos de POO. Se incluyen soluciones de referencia.

### Laboratorio: Pila contadora

Extiende la clase `Stack` para que cuente cuántos elementos han sido añadidos y eliminados.

```python
class Stack:
    def __init__(self):
        self.__stack_list = []

    def push(self, val):
        self.__stack_list.append(val)

    def pop(self):
        val = self.__stack_list[-1]
        del self.__stack_list[-1]
        return val

class CountingStack(Stack):
    def __init__(self):
        super().__init__()
        self.__counter = 0

    def push(self, val):
        super().push(val)
        self.__counter += 1

    def pop(self):
        self.__counter += 1
        return super().pop()

    def get_counter(self):
        return self.__counter

# Prueba
st = CountingStack()
for i in range(100):
    st.push(i)
    st.pop()
print(st.get_counter())  # 200
```

### Laboratorio: Cola FIFO

Implementa una cola con operaciones `put` y `get`, y una excepción personalizada para cuando la cola está vacía.

```python
class QueueError(Exception):
    pass

class Queue:
    def __init__(self):
        self.__items = []

    def put(self, item):
        self.__items.insert(0, item)

    def get(self):
        if not self.__items:
            raise QueueError("Cola vacía")
        return self.__items.pop()

    def is_empty(self):
        return len(self.__items) == 0

# Prueba
q = Queue()
q.put(1)
q.put("perro")
q.put(False)
print(q.get())  # 1
print(q.get())  # perro
print(q.is_empty())  # False
try:
    q.get()
    q.get()
except QueueError as e:
    print("Error:", e)  # Cola vacía
```

### Laboratorio: Timer

Implementa un temporizador que maneje horas, minutos y segundos, con métodos para avanzar y retroceder un segundo.

```python
def formatear(horas, minutos, segundos):
    return f"{horas:02d}:{minutos:02d}:{segundos:02d}"

class Timer:
    def __init__(self, horas=0, minutos=0, segundos=0):
        self.__horas = horas
        self.__minutos = minutos
        self.__segundos = segundos

    def __str__(self):
        return formatear(self.__horas, self.__minutos, self.__segundos)

    def next_second(self):
        self.__segundos += 1
        if self.__segundos == 60:
            self.__segundos = 0
            self.__minutos += 1
            if self.__minutos == 60:
                self.__minutos = 0
                self.__horas += 1
                if self.__horas == 24:
                    self.__horas = 0

    def prev_second(self):
        self.__segundos -= 1
        if self.__segundos < 0:
            self.__segundos = 59
            self.__minutos -= 1
            if self.__minutos < 0:
                self.__minutos = 59
                self.__horas -= 1
                if self.__horas < 0:
                    self.__horas = 23

# Prueba
timer = Timer(23, 59, 59)
print(timer)  # 23:59:59
timer.next_second()
print(timer)  # 00:00:00
timer.prev_second()
print(timer)  # 23:59:59
```

### Laboratorio: Días de la semana

Crea una clase que maneje los días de la semana con operaciones de suma y resta de días, lanzando una excepción si el día es inválido.

```python
class WeekDayError(Exception):
    pass

class Weeker:
    __dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]

    def __init__(self, dia):
        if dia not in self.__dias:
            raise WeekDayError("Día inválido")
        self.__indice = self.__dias.index(dia)

    def __str__(self):
        return self.__dias[self.__indice]

    def add_days(self, n):
        self.__indice = (self.__indice + n) % 7

    def subtract_days(self, n):
        self.__indice = (self.__indice - n) % 7

# Prueba
try:
    dia = Weeker("Lun")
    print(dia)  # Lun
    dia.add_days(1)
    print(dia)  # Mar
    dia.subtract_days(2)
    print(dia)  # Dom
    dia = Weeker("Error")
except WeekDayError as e:
    print("Lo siento, no puedo atender tu solicitud.")
```

### Laboratorio: Puntos en un plano

Define una clase `Point` que almacene coordenadas privadas y calcule distancias entre puntos.

```python
import math

class Point:
    def __init__(self, x=0.0, y=0.0):
        self.__x = x
        self.__y = y

    def getx(self):
        return self.__x

    def gety(self):
        return self.__y

    def distance_from_xy(self, x, y):
        return math.hypot(self.__x - x, self.__y - y)

    def distance_from_point(self, point):
        return math.hypot(self.__x - point.getx(), self.__y - point.gety())

# Prueba
p1 = Point(0, 0)
p2 = Point(1, 1)
print(p1.distance_from_point(p2))  # 1.4142135623730951
print(p2.distance_from_xy(2, 0))   # 1.4142135623730951
```

### Laboratorio: Triángulo

Usa la clase `Point` para construir un triángulo y calcular su perímetro.

```python
class Triangle:
    def __init__(self, p1, p2, p3):
        self.__points = [p1, p2, p3]

    def perimeter(self):
        p1, p2, p3 = self.__points
        lado1 = p1.distance_from_point(p2)
        lado2 = p2.distance_from_point(p3)
        lado3 = p3.distance_from_point(p1)
        return lado1 + lado2 + lado3

# Prueba
tri = Triangle(Point(0,0), Point(1,0), Point(0,1))
print(tri.perimeter())  # 3.414213562373095
```

---

## Reflexión e Introspección

Python permite inspeccionar objetos en tiempo de ejecución mediante atributos especiales como `__dict__`, `__name__`, `__module__` y `__bases__`. También se pueden usar funciones como `type()`, `isinstance()` y `hasattr()`.

Ejemplo de modificación dinámica de atributos:

```python
def incrementar_i(obj):
    for attr in obj.__dict__:
        if attr.startswith('i') and isinstance(getattr(obj, attr), int):
            setattr(obj, attr, getattr(obj, attr) + 1)

class Muestra:
    def __init__(self):
        self.ia = 1
        self.ib = 2
        self.c = 3

o = Muestra()
incrementar_i(o)
print(o.ia, o.ib, o.c)  # 2 3 3
```

---

## Buenas Prácticas y Recomendaciones

- Prefiere la herencia simple sobre la múltiple siempre que sea posible.
- Usa la composición para reutilizar comportamiento cuando la herencia no sea la opción más natural.
- Encapsula los atributos que no deban modificarse directamente desde fuera.
- Documenta las clases y métodos con docstrings.
- Emplea nombres descriptivos para clases y métodos.
- Aprovecha el polimorfismo para escribir código más genérico y mantenible.

---

## Cuestionario de Repaso

### 1. Estructura de datos LIFO

**Pregunta:** Una estructura de datos descrita como LIFO es en realidad:

- [ ] una lista
- [ ] un árbol
- [ ] una pila
- [ ] un montón

**Razonamiento:**  
> La respuesta correcta es **una pila**. LIFO significa *Last In, First Out* (último en entrar, primero en salir), que es el principio de funcionamiento de una **pila** (*stack*).

**Respuesta correcta:** una pila.

**Explicación:**  
LIFO es el acrónimo de *Last In, First Out*, un principio de operación donde el último elemento que se añade a la estructura es el primero en ser extraído. Este comportamiento es característico de las **pilas** (stacks), una estructura de datos fundamental en programación.

- **Pila (stack)**: Sigue el principio LIFO. Operaciones principales: `push` (apilar) y `pop` (desapilar).
- **Lista**: En Python puede simular una pila usando `append()` y `pop()`, pero en esencia es una secuencia ordenada con acceso por índice.
- **Árbol**: Estructura jerárquica con nodos y relaciones padre-hijo, no sigue LIFO.
- **Montón (heap)**: Estructura basada en prioridades, no en orden de llegada.

**Conclusión:** Una pila es la estructura de datos que implementa el comportamiento LIFO. Es ampliamente utilizada en algoritmos de recursión, evaluación de expresiones y gestión de llamadas a funciones.

---

### 2. Instanciación de clases con `__init__`

**Pregunta:** Si el constructor de la clase se declara de la siguiente manera, ¿cuál de las asignaciones es válida?

```python
class Class:
    def __init__(self):
        pass
```

- [ ] `object = Class`
- [ ] `object = Class()`
- [ ] `object = Class(self)`
- [ ] `object = Class(object)`

**Razonamiento:**  
> La respuesta correcta es `object = Class()`. En Python, para crear una instancia (objeto) de una clase, se llama al constructor de la clase utilizando el nombre de la clase seguido de paréntesis: `Class()`. El método `__init__` se ejecuta automáticamente al crear la instancia, y Python se encarga de pasar implícitamente el argumento `self` (no se debe pasar manualmente).

**Respuesta correcta:** `object = Class()`

**Explicación:**  
En Python, la creación de una instancia de una clase se realiza invocando el nombre de la clase como si fuera una función:

- `Class()` crea un nuevo objeto y automáticamente ejecuta `__init__` pasando `self` implícitamente.
- `object = Class` solo asigna la clase en sí (no una instancia) a la variable.
- `object = Class(self)` es incorrecto porque `self` no está definido en ese contexto y no se pasa manualmente al crear una instancia.
- `object = Class(object)` intenta pasar un argumento adicional, pero el `__init__` no lo acepta, por lo que se produce un `TypeError`.

**Conclusión:** La forma correcta de instanciar una clase en Python es usando el nombre de la clase seguido de paréntesis, con o sin argumentos según lo definido en `__init__`. Python maneja automáticamente el paso del argumento `self`.

---

### 3. Llamada al constructor de la superclase

**Pregunta:** Si hay una superclase llamada `A` y una subclase llamada `B`, ¿cuál de las invocaciones presentadas debería poner en lugar del comentario?

```python
class A:
    def __init__(self):
        self.a = 1

class B(A):
    def __init__(self):
        # Colocar la línea seleccionada aquí.
        self.b = 2
```

- [ ] `A.__init__(self)`
- [ ] `__init__()`
- [ ] `A.__init__(1)`
- [ ] `A.__init__()`

**Razonamiento:**  
> La respuesta correcta es `A.__init__(self)`. En Python, para llamar explícitamente al constructor de la superclase desde la subclase, debes referenciar el método `__init__` de la clase padre y pasarle explícitamente el argumento `self` (que representa la instancia actual de la subclase). Esto asegura que la inicialización de la clase `A` se ejecute correctamente sobre el objeto que está siendo creado.

**Respuesta correcta:** `A.__init__(self)`

**Explicación:**  
Cuando una subclase define su propio `__init__`, este **sobrescribe** al de la superclase. Para asegurar que la superclase también inicialice sus atributos, es necesario llamar explícitamente a su constructor.

- `A.__init__(self)`: llamada correcta. Se pasa `self` para que el constructor de `A` actúe sobre la misma instancia.
- `__init__()`: incorrecta porque no especifica qué clase y falta `self`.
- `A.__init__(1)`: incorrecta porque `1` no es una referencia a la instancia, causará errores de asignación.
- `A.__init__()`: incorrecta porque falta el argumento `self`, lanzando `TypeError`.

**Nota:** En Python moderno también se usa `super().__init__()` para el mismo propósito, pero esa opción no está en el listado. Entre las opciones dadas, `A.__init__(self)` es la única válida.

**Conclusión:** Para invocar el constructor de la superclase desde una subclase, se debe usar `NombreSuperclase.__init__(self)` o `super().__init__()`. Esto garantiza que todos los atributos heredados se inicialicen correctamente.

---

### 4. Name mangling con doble guion bajo

**Pregunta:** ¿Cuál será el efecto de ejecutar el siguiente código?

```python
class A:
    def __init__(self, v):
        self.__a = v + 1

a = A(0)
print(a.__a)
```

- [ ] `2`
- [ ] `0`
- [ ] El código generará una excepción `AttributeError`

**Razonamiento:**  
> La respuesta correcta es que el código generará una excepción `AttributeError`. En Python, los nombres de atributos que comienzan con **doble guion bajo** (`__a`) sufren un proceso llamado **name mangling** (ofuscación de nombre). El intérprete cambia automáticamente el nombre del atributo a `_Clase__a` para evitar colisiones con nombres en subclases.

**Respuesta correcta:** El código generará una excepción `AttributeError`

**Explicación:**  
En Python, los atributos que comienzan con doble guion bajo (pero no terminan con doble guion bajo) sufren **name mangling**. El intérprete transforma el nombre interno para evitar colisiones accidentales con subclases.

- `self.__a` dentro de la clase `A` se convierte internamente en `self._A__a`.
- Al hacer `a.__a`, se busca literalmente un atributo llamado `__a`, el cual no existe en el objeto.
- Como el atributo real es `_A__a`, Python lanza `AttributeError`.

Si se quisiera acceder al valor, sería necesario usar `print(a._A__a)`, que imprimiría `1`.

**Conclusión:** El doble guion bajo al inicio de un nombre de atributo activa el *name mangling* en Python, ocultando el atributo y dificultando su acceso directo desde fuera de la clase. Esto no es seguridad, sino una convención para evitar conflictos de nombres.

---

### 5. Método que retorna y modifica atributos

**Pregunta:** ¿Cuál será la salida del siguiente código?

```python
class A:
    def __init__(self, v=1):
        self.v = v

    def set(self, v):
        self.v = v
        return v

a = A()
print(a.set(a.v + 1))
```

**Razonamiento:**  
> La salida del código será **2**. Se define la clase `A` con `__init__(self, v=1)`: inicializa `self.v` con el valor de `v` (por defecto 1). `set(self, v)`: asigna `self.v = v` y retorna `v`. Se crea una instancia `a = A()` sin argumentos, por lo que `self.v` se establece en **1**. Se evalúa `a.set(a.v + 1)`: `a.v` es 1, entonces `a.v + 1` es **2**. Se llama a `set(2)`, que asigna `self.v = 2` y retorna **2**. `print(2)` imprime **2**.

**Respuesta correcta:** `2`

**Explicación:**  
El código se ejecuta de la siguiente manera:

1. `a = A()` → `__init__` se ejecuta con `v=1`, estableciendo `self.v = 1`.
2. `a.set(a.v + 1)` → `a.v` es `1`, por lo que el argumento es `2`.
3. Dentro de `set(2)`: `self.v = 2` y retorna `2`.
4. `print(2)` → imprime `2`.

El método `set` modifica el atributo de la instancia y retorna el valor recibido, que en este caso es `2`.

**Conclusión:** Los métodos de una clase pueden modificar el estado del objeto y retornar valores. Es importante entender el orden de evaluación de las expresiones: el argumento se evalúa antes de llamar al método.

---

### 6. Atributos de clase acumulativos

**Pregunta:** ¿Cuál será la salida del siguiente código?

```python
class A:
    X = 0
    def __init__(self, v=0):
        self.Y = v
        A.X += v

a = A()
b = A(1)
c = A(2)
print(c.X)
```

- [ ] `0`
- [ ] `2`
- [ ] `3`
- [ ] `1`

**Razonamiento:**  
> La salida del código será **3**. La clase `A` tiene un atributo de clase `X = 0`. En el método `__init__`, se actualiza `A.X += v` cada vez que se crea una nueva instancia, acumulando el valor de `v` en el atributo de clase. Creación de objetos: `a = A()` → `v = 0`, `A.X` sigue siendo **0**. `b = A(1)` → `v = 1`, `A.X` pasa a **1**. `c = A(2)` → `v = 2`, `A.X` pasa a **3**. `print(c.X)` → `c` no tiene un atributo de instancia `X`, por lo que Python busca en la clase y encuentra `A.X = 3`. Se imprime **3**.

**Respuesta correcta:** `3`

**Explicación:**  
El código utiliza un **atributo de clase** `X` que se comparte entre todas las instancias. Cada vez que se crea un objeto, el constructor suma el valor de `v` a `A.X`.

- `a = A()` → `v=0`, `A.X = 0`
- `b = A(1)` → `v=1`, `A.X = 1`
- `c = A(2)` → `v=2`, `A.X = 3`

Cuando se accede a `c.X`, Python primero busca en la instancia `c`; al no encontrar `X`, sube a la clase `A` y encuentra el atributo de clase cuyo valor es `3`.

**Conclusión:** Los atributos de clase son compartidos por todas las instancias. Se accede a ellos a través de `Clase.atributo` y se pueden modificar dentro de los métodos de instancia para llevar un conteo o estado global.

---

### 7. Verificación de atributos con `hasattr()`

**Pregunta:** ¿Cuál será la salida del siguiente código?

```python
class A:
    A = 1

print(hasattr(A, 'A'))
```

- [ ] `1`
- [ ] `True`
- [ ] `0`
- [ ] `False`

**Razonamiento:**  
> La salida del código será **True**. `hasattr(A, 'A')` verifica si el objeto `A` (la clase) tiene un atributo con el nombre `'A'`. La clase `A` define un atributo de clase llamado `A = 1`, por lo que sí existe. `hasattr` devuelve `True` si el atributo existe, `False` en caso contrario.

**Respuesta correcta:** `True`

**Explicación:**  
La función `hasattr(objeto, nombre_atributo)` devuelve `True` si el objeto posee un atributo con el nombre especificado, y `False` en caso contrario.

- La clase `A` tiene definido el atributo de clase `A = 1`.
- `hasattr(A, 'A')` busca en la clase `A` un atributo llamado `'A'` y lo encuentra, por lo que retorna `True`.
- El valor del atributo (`1`) no es lo que retorna `hasattr`, sino un booleano.

**Conclusión:** `hasattr()` es una función útil para verificar la existencia de atributos en objetos, clases o instancias antes de intentar accederlos, evitando así excepciones `AttributeError`.

---

### 8. Argumentos incorrectos en el constructor

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class A:
    def __init__(self):
        pass

a = A(1)
print(hasattr(a, 'A'))
```

- `1`
- `True`
- `False`
- generará una excepción

**Razonamiento:**  
> La respuesta correcta es que generará una excepción. El código tiene un error en la creación de la instancia. El método `__init__` solo espera el argumento `self` (que Python pasa automáticamente), pero al hacer `A(1)` se está intentando pasar un argumento posicional adicional. Esto provoca un **`TypeError`** indicando que `__init__()` toma 1 argumento posicional pero se recibieron 2. Por lo tanto, la excepción ocurre **antes** de llegar a la línea `print(hasattr(a, 'A'))`, y el programa falla.

**Respuesta correcta:** generará una excepción

**Explicación:**  
El método `__init__` está definido sin parámetros adicionales a `self`:

```python
def __init__(self):
    pass
```

Al intentar crear una instancia con `A(1)`, Python intenta pasar `1` como argumento posicional al método `__init__`, pero este solo acepta `self` (que se pasa implícitamente). Esto produce un `TypeError`:

```
TypeError: __init__() takes 1 positional argument but 2 were given
```

La excepción se lanza en el momento de la creación del objeto, antes de que se ejecute la línea `print(hasattr(a, 'A'))`, por lo que el programa nunca llega a esa instrucción.

**Conclusión:** La definición del constructor debe coincidir con la forma en que se instancia la clase. Si se esperan argumentos, deben estar declarados explícitamente en `__init__` (además de `self`). De lo contrario, se producirá un `TypeError`.

---

### 9. Sobrescritura de métodos en herencia

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class A:
    def __str__(self):
        return 'a'

class B(A):
    def __str__(self):
        return 'b'

class C(B):
    pass

o = C()
print(o)
```

- [ ] imprimirá `a`
- [ ] imprimirá `b`
- [ ] generará una excepción

**Razonamiento:**  
> La salida del código será **'b'**. La clase `A` define `__str__` que retorna `'a'`. La clase `B` hereda de `A` y **sobrescribe** `__str__` para retornar `'b'`. La clase `C` hereda de `B` y **no** sobrescribe `__str__`, por lo que hereda el método de `B`. Al crear `o = C()` y ejecutar `print(o)`, Python busca el método `__str__` en la cadena de herencia: primero en `C` (no está), luego en `B` (sí está) y lo usa, retornando `'b'`. No se genera ninguna excepción.

**Respuesta correcta:** imprimirá `b`

**Explicación:**  
La cadena de herencia es: `C` → `B` → `A`.

- `C` no define `__str__`.
- `B` define `__str__` que retorna `'b'`.
- `A` define `__str__` que retorna `'a'`.

Python busca el método en la clase del objeto (`C`), y si no lo encuentra, sube en la jerarquía de herencia. Encuentra el método en `B` y lo utiliza, por lo que imprime `'b'`.

**Conclusión:** Las subclases heredan métodos de sus superclases, pero pueden sobrescribirlos definiendo un método con el mismo nombre. Si una subclase no sobrescribe un método, utiliza el de la clase padre más cercana en la jerarquía.

---

### 10. Verificación de subclases con `issubclass()`

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass

print(issubclass(C, A))
```

- [ ] imprimirá `True`
- [ ] imprimirá `False`
- [ ] generará una excepción
- [ ] imprimirá `1`

**Razonamiento:**  
> La respuesta correcta es que imprimirá `True`. La función `issubclass(C, A)` verifica si la clase `C` es una subclase de la clase `A`. La jerarquía de herencia es: `C` → `B` → `A` (ya que `B` hereda de `A`, y `C` hereda de `B`). Por transitividad, `C` es considerada una subclase de `A` en Python. Por lo tanto, `issubclass(C, A)` devuelve `True`.

**Respuesta correcta:** imprimirá `True`

**Explicación:**  
La función `issubclass(ClaseHija, ClasePadre)` retorna `True` si la primera clase es una subclase de la segunda (directa o indirectamente), y `False` en caso contrario.

- `B` hereda de `A` → `B` es subclase de `A`.
- `C` hereda de `B` → `C` es subclase de `B`.
- Por transitividad, `C` es subclase de `A`.

Por lo tanto, `issubclass(C, A)` retorna `True` y se imprime.

**Conclusión:** `issubclass()` evalúa la relación de herencia entre clases, considerando toda la jerarquía de herencia, no solo las relaciones directas.

---

### 11. Orden de resolución de métodos en herencia múltiple

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class A:
    def a(self):
        print('a')

class B:
    def a(self):
        print('b')

class C(B, A):
    def c(self):
        self.a()

o = C()
o.c()
```

- [ ] generará una excepción
- [ ] imprimirá `a`
- [ ] imprimirá `b`

**Razonamiento:**  
> La respuesta correcta es que imprimirá `'b'`. La clase `C` hereda de `B` y `A` (en ese orden): `class C(B, A):`. El método `c(self)` llama a `self.a()`. Python busca el método `a` siguiendo el **orden de resolución de métodos (MRO)**: `C` → `B` → `A`. Como `B` define `a` (que imprime `'b'`), ese es el método que se ejecuta. No se genera ninguna excepción.

**Respuesta correcta:** imprimirá `b`

**Explicación:**  
En herencia múltiple, Python utiliza el **Orden de Resolución de Métodos (MRO)** para determinar qué método se ejecuta cuando hay múltiples clases que lo definen. El MRO se calcula siguiendo el orden en que las clases base se declaran en la definición de la clase.

Para `class C(B, A):`:
- MRO: `C` → `B` → `A`
- `C` no define `a`.
- `B` define `a` (imprime `'b'`) → se usa este método.

**Conclusión:** El orden de declaración en la herencia múltiple afecta qué método se ejecuta. Python busca en las clases padre en el orden en que se listan, usando el MRO para resolver conflictos.

---

### 12. Método `__str__` en herencia múltiple

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class A:
    def __str__(self):
        return 'a'

class B:
    def __str__(self):
        return 'b'

class C(A, B):
    pass

o = C()
print(o)
```

- [ ] generará una excepción
- [ ] imprimirá `a`
- [ ] imprimirá `c`
- [ ] imprimirá `b`

**Razonamiento:**  
> La respuesta correcta es que imprimirá `'a'`. La clase `C` hereda de `A` y `B` (en ese orden): `class C(A, B):`. `C` no define su propio `__str__`, por lo que Python busca en su cadena de herencia siguiendo el **orden de resolución de métodos (MRO)**: `C` → `A` → `B`. `A` define `__str__` que retorna `'a'`, y como es el primer método encontrado, se usa ese. No hay excepción.

**Respuesta correcta:** imprimirá `a`

**Explicación:**  
La herencia múltiple define el MRO como `C` → `A` → `B` porque `A` aparece antes que `B` en la declaración.

- `C` no define `__str__`.
- `A` define `__str__` → se usa, imprimiendo `'a'`.
- No se considera `B` porque ya se encontró un método en `A`.

**Conclusión:** El MRO en herencia múltiple sigue el orden de declaración de las clases base. El primer método encontrado en el MRO es el que se ejecuta. Esto permite controlar qué implementación prevalece en caso de conflicto.

---

### 13. Sobrescritura de atributos de clase

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class A:
    v = 2

class B(A):
    v = 1

class C(B):
    pass

o = C()
print(o.v)
```

- [ ] imprimirá `1`
- [ ] imprimirá una línea vacía
- [ ] generará una excepción
- [ ] imprimirá `2`

**Razonamiento:**  
> La respuesta correcta es que imprimirá `1`. La clase `A` define un atributo de clase `v = 2`. La clase `B` hereda de `A` y **sobrescribe** `v` con el valor `1`. La clase `C` hereda de `B` y no define `v`, por lo que hereda el atributo de `B`. Al crear `o = C()` y acceder a `o.v`, Python busca el atributo en la instancia (no existe), luego en la clase `C` (no está), luego en `B` (sí existe, `v = 1`), y lo utiliza. Por lo tanto, se imprime **1**.

**Respuesta correcta:** imprimirá `1`

**Explicación:**  
Los atributos de clase se buscan en la jerarquía de herencia:

- `A.v = 2`
- `B.v = 1` (sobrescribe a `A.v`)
- `C` no define `v`, por lo que hereda de `B`.

Al acceder a `o.v`, Python sigue la cadena de herencia: `C` → `B` → `A`. Encuentra `v` en `B` con valor `1`, y lo utiliza.

**Conclusión:** Los atributos de clase pueden ser sobrescritos por las subclases. Al acceder a un atributo desde una instancia, Python busca en la clase de la instancia y luego en las superclases, devolviendo el primer valor encontrado.

---

### 14. Manejo de excepciones con `try-except-else-finally`

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
def f(x):
    try:
        x = x / x
    except:
        print("a", end='')
    else:
        print("b", end='')
    finally:
        print("c", end='')

f(1)
f(0)
```

- [ ] imprimirá `acac`
- [ ] imprimirá `bca`
- [ ] imprimirá `bcbc`
- [ ] generará una excepción no controlada

**Razonamiento:**  
> La salida correcta del código es **`bcac`**. Para `f(1)`: `try` → `1 / 1 = 1` sin excepción; `else` → imprime `'b'`; `finally` → imprime `'c'` (siempre). Resultado: `bc`. Para `f(0)`: `try` → `0 / 0` → `ZeroDivisionError`; `except` → captura e imprime `'a'`; `finally` → imprime `'c'`. Resultado: `ac`. Salida total concatenada: `bc` + `ac` = `bcac`. Las opciones proporcionadas no incluyen `bcac`. La opción más cercana es `bca`, pero le falta la segunda `c`. Por lo tanto, **ninguna de las opciones listadas es correcta**.

**Respuesta correcta:** `bcac` (ninguna de las opciones proporcionadas es correcta)

**Explicación:**  
El bloque `try-except-else-finally` funciona de la siguiente manera:

1. `try`: se ejecuta el código. Si no hay excepción, continúa.
2. `else`: se ejecuta **solo si** el `try` no lanzó excepción.
3. `except`: se ejecuta **si** el `try` lanza una excepción.
4. `finally`: se ejecuta **siempre**, ocurra o no una excepción.

Para `f(1)`:
- `1 / 1` → sin excepción
- `else` → imprime `b`
- `finally` → imprime `c`

Para `f(0)`:
- `0 / 0` → lanza `ZeroDivisionError`
- `except` → imprime `a`
- `finally` → imprime `c`

Salida: `bc` + `ac` = `bcac`

**Conclusión:** El bloque `finally` siempre se ejecuta, independientemente de si ocurre una excepción. El bloque `else` solo se ejecuta si no hubo excepción en el `try`. Es importante entender el flujo de ejecución de estos bloques para escribir código robusto.

---

### 15. Tupla de argumentos en excepciones

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
try:
    raise Exception(1, 2, 3)
except Exception as e:
    print(len(e.args))
```

- [ ] imprimirá `3`
- [ ] generará una excepción no controlada
- [ ] imprimirá `2`
- [ ] imprimirá `1`

**Razonamiento:**  
> La respuesta correcta es que imprimirá `3`. `raise Exception(1, 2, 3)` crea una excepción con tres argumentos. Al capturarla como `e`, el atributo `e.args` es una tupla que contiene todos los argumentos pasados al constructor de la excepción: `(1, 2, 3)`. `len(e.args)` devuelve la longitud de esa tupla, que es **3**. No se genera ninguna excepción no controlada.

**Respuesta correcta:** imprimirá `3`

**Explicación:**  
Las excepciones en Python pueden recibir argumentos al ser lanzadas. Estos argumentos se almacenan en el atributo `args` del objeto excepción, que es una tupla.

- `raise Exception(1, 2, 3)` → `args = (1, 2, 3)`
- `len(e.args)` → `len((1, 2, 3))` → `3`

**Conclusión:** El atributo `args` de una excepción contiene los argumentos con los que fue construida. Es útil para transportar información adicional sobre el error. La función `len()` puede usarse para determinar cuántos argumentos se pasaron.

---

### 16. Excepción personalizada con sobrescritura de `args`

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class Ex(Exception):
    def __init__(self, msg):
        Exception.__init__(self, msg + msg)
        self.args = (msg,)

try:
    raise Ex('ex')
except Ex as e:
    print(e)
except Exception as e:
    print(e)
```

- [ ] generará una excepción no controlada
- [ ] imprimirá `exex`
- [ ] imprimirá `ex`
- [ ] imprimirá una línea vacía

**Razonamiento:**  
> La respuesta correcta es que imprimirá `'ex'`. Se crea una excepción personalizada `Ex` que hereda de `Exception`. En su `__init__`, se llama a `Exception.__init__(self, msg + msg)`, lo que establece inicialmente `self.args = ('exex',)`. Luego, **se sobrescribe** `self.args = (msg,)`, es decir, `('ex',)`. Al hacer `raise Ex('ex')`, se captura en `except Ex as e`. `print(e)` invoca el método `__str__` de `Exception`, que utiliza `self.args[0]` si existe. Como `self.args` es `('ex',)`, imprime `'ex'`. No se genera ninguna excepción no controlada.

**Respuesta correcta:** imprimirá `ex`

**Explicación:**  
El flujo de ejecución es el siguiente:

1. Se define `Ex` que hereda de `Exception`.
2. En `__init__`, se llama a `Exception.__init__(self, msg + msg)`, que establece `self.args = ('exex',)`.
3. Inmediatamente después, se sobrescribe `self.args = (msg,)`, es decir, `('ex',)`.
4. Se lanza `Ex('ex')`.
5. El `except Ex as e` captura la excepción.
6. `print(e)` llama al método `__str__` de `Exception`, que retorna `self.args[0]` si `args` tiene al menos un elemento.
7. `self.args` es `('ex',)`, por lo que imprime `'ex'`.

**Conclusión:** El método `__str__` de `Exception` utiliza el primer elemento de `self.args` para representar la excepción como cadena. Sobrescribir `self.args` permite controlar qué se imprime al mostrar la excepción. Es importante recordar que `Exception.__init__` ya establece `args` con los argumentos pasados, pero puede modificarse después.

---

### 17. Implementación de iterador personalizado

**Pregunta:** ¿Cuál será el resultado de ejecutar el siguiente código?

```python
class I:
    def __init__(self):
        self.s = 'abc'
        self.i = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.i == len(self.s):
            raise StopIteration
        v = self.s[self.i]
        self.i += 1
        return v

for x in I():
    print(x, end='')
```

- [ ] generará una excepción no controlada
- [ ] imprimirá `a`
- [ ] imprimirá `abc`
- [ ] generará una excepción controlada

**Razonamiento:**  
> La respuesta correcta es que imprimirá `'abc'`. La clase `I` implementa un iterador que recorre la cadena `'abc'`. En cada iteración, `__next__` devuelve el siguiente carácter: `'a'`, `'b'`, `'c'`. Cuando se completa la cadena, lanza `StopIteration`, que el bucle `for` maneja internamente para finalizar la iteración. El bucle imprime cada carácter sin salto de línea (`end=''`), por lo que la salida es `abc`. No se genera ninguna excepción no controlada.

**Respuesta correcta:** imprimirá `abc`

**Explicación:**  
La clase `I` implementa el protocolo de iteración en Python:

- `__iter__` retorna el propio objeto (`self`), indicando que es un iterador.
- `__next__` retorna el siguiente elemento de la secuencia.
- Cuando no quedan elementos, lanza `StopIteration`.

El bucle `for x in I():` hace lo siguiente:
1. Llama a `iter(I())` → obtiene el iterador (que es `self`).
2. Llama repetidamente a `next()` sobre el iterador.
3. Cada llamada a `__next__` retorna `'a'`, luego `'b'`, luego `'c'`.
4. En la siguiente llamada, `self.i == len(self.s)` es `True`, se lanza `StopIteration`.
5. El bucle `for` capta esta excepción y termina la iteración.

Los caracteres se imprimen sin espacios ni saltos de línea porque `end=''`.

**Conclusión:** Para hacer que una clase sea iterable, debe implementar `__iter__` (que retorna un iterador) y `__next__` (que retorna el siguiente elemento o lanza `StopIteration`). El bucle `for` maneja automáticamente el protocolo de iteración.

---

## Resumen final

A lo largo de estos 17 ejercicios se han cubierto conceptos fundamentales de Python:

1. **Estructuras de datos**: LIFO y pilas.
2. **Instanciación y constructores**: cómo crear objetos y llamar a `__init__`.
3. **Herencia**: llamada a constructores de superclases, sobrescritura de métodos y atributos.
4. **Name mangling**: atributos privados con doble guion bajo.
5. **Atributos de clase vs. atributos de instancia**: su comportamiento y búsqueda.
6. **Funciones y métodos integrados**: `hasattr()`, `issubclass()`.
7. **Herencia múltiple**: orden de resolución de métodos (MRO).
8. **Manejo de excepciones**: `try-except-else-finally`, `args`, excepciones personalizadas.
9. **Iteradores y protocolo de iteración**: `__iter__`, `__next__` y `StopIteration`.

Estos conceptos son esenciales para dominar el lenguaje Python y escribir código orientado a objetos robusto y eficiente.

> Gracias por leer.