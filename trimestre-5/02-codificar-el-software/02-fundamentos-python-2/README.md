# Python Essentials 2

Apuntes, ejercicios y pruebas del curso **Python Essentials 2** de Cisco Networking Academy® y Python Institute, desarrollados durante mi formación como Tecnólogo en Análisis y Desarrollo de Software.

> Estos son apuntes refinados.

---

## Introducción

**Python Essentials 2** es el segundo nivel del programa de certificación oficial de Python ofrecido por **Cisco Networking Academy** en colaboración con el **Python Institute**. Este curso profundiza en los fundamentos del lenguaje y prepara al estudiante para afrontar el examen de certificación **PCAP – Certified Associate in Python Programming**.

Este repositorio contiene mis apuntes personales de estudio, organizados por módulos, con:

- Teoría y explicaciones conceptuales.
- Fragmentos de código comentados.
- Ejercicios prácticos y laboratorios.
- Pruebas de módulo resueltas (40 preguntas).
- Notas adicionales sobre herramientas y buenas prácticas.

El material está pensado para servir como guía de repaso y consulta rápida, tanto para estudiantes del curso como para cualquier persona que desee afianzar sus conocimientos en Python intermedio.

---

## Tabla de contenido

- [Introducción](#introducción)
- [Herramientas recomendadas](#herramientas-recomendadas)
- [Plataforma y certificación](#plataforma-y-certificación)
- [Objetivos del curso](#objetivos-del-curso)
- [Competencias adquiridas](#competencias-adquiridas)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Cómo utilizar estos apuntes](#cómo-utilizar-estos-apuntes)
- [Temas desarrollados](#temas-desarrollados)
- [Prueba de módulo](#prueba-de-módulo)
- [Referencias externas](#referencias-externas)
- [Licencia](#licencia)

---

## Herramientas recomendadas

Para seguir el curso y reproducir los ejemplos se recomienda:

- **Python 3.x** (versión 3.6 o superior).
- **Visual Studio Code** con la extensión oficial de Python.
- **Terminal / Símbolo del sistema** para ejecutar scripts y comandos `pip`.
- **Git** (opcional) para clonar y gestionar el repositorio.
- **Pip** para instalar y administrar paquetes externos.

---

## Plataforma y certificación

- **Cisco Networking Academy** proporciona la plataforma de aprendizaje, los materiales oficiales y los exámenes.
- **Python Institute** es la entidad certificadora que otorga las credenciales **PCAP** y **PCPP**.
- Este curso (**Python Essentials 2**) equivale a la preparación para el examen **PCAP-31-03**.

Al finalizar con éxito, el estudiante estará capacitado para escribir programas modulares, manejar excepciones, procesar archivos, trabajar con módulos y paquetes, y aplicar los fundamentos de la programación orientada a objetos en Python.

---

## Objetivos del curso

Python Essentials 2 amplía los conocimientos adquiridos en el nivel anterior y se centra en:

- Comprender el modelo de módulos y paquetes en Python.
- Gestionar el espacio de nombres y las importaciones.
- Manejar excepciones y utilizar aserciones.
- Procesar archivos de texto y binarios.
- Utilizar los módulos estándar más importantes (`os`, `sys`, `datetime`, `calendar`, `random`, `math`, etc.).
- Introducir los fundamentos de la programación orientada a objetos (clases, objetos, herencia, métodos especiales).
- Usar herramientas como `pip` para la gestión de paquetes.

---

## Competencias adquiridas

Al completar este curso, el estudiante habrá desarrollado las siguientes habilidades:

- Creación y uso de **módulos** y **paquetes**.
- Comprensión del código **bytecode** y los archivos `.pyc`.
- Uso de **excepciones** y bloques `try-except`.
- Implementación de **asesiones** (`assert`).
- Manejo de **archivos** con métodos como `read()`, `readinto()`, iteración línea por línea.
- Uso de **flujos** de entrada/salida estándar (`sys.stdin`, `sys.stdout`).
- Conocimiento de los módulos `os`, `datetime`, `calendar`, `random`, `math`.
- Programación orientada a objetos: clases, herencia, métodos especiales (`__init__`, `__str__`, `__iter__`, `__next__`).
- Trabajo con **generadores** y **iteradores**.
- Uso de funciones de orden superior: `map()`, `filter()`.
- Gestión de paquetes con `pip`.

---

## Estructura del repositorio

El repositorio está organizado de la siguiente manera:

```
02-fundamentos-python-2/
├── 0-python-essentials-2-certificate.md
├── 01-modulo-paquetes-pip.md
├── 02-caracteres-y-cadenas-vs-pc.md
├── 03-prueba-modulo-caracteres.md
├── 04-fundamentos-poo.md
├── 05-miscelaneos.md
├── README.md
```

| Archivo | Descripción |
|---------|-------------|
| `0-python-essentials-2-certificate.md` | Información sobre la certificación y el temario oficial. |
| `01-modulo-paquetes-pip.md` | Apuntes sobre módulos, paquetes, importación y uso de `pip`. |
| `02-caracteres-y-cadenas-vs-pc.md` | Trabajo con cadenas, caracteres, codificación y operaciones. |
| `03-prueba-modulo-caracteres.md` | Ejercicios y pruebas relacionadas con cadenas y caracteres. |
| `04-fundamentos-poo.md` | Principios de la programación orientada a objetos en Python. |
| `05-miscelaneos.md` | Temas diversos: excepciones, archivos, módulos estándar, etc. |
| `README.md` | Este archivo, portada del repositorio. |

---

## Cómo utilizar estos apuntes

1. **Lee los archivos en orden numérico** para seguir la progresión lógica del curso.
2. **Ejecuta los ejemplos** en tu entorno local para comprobar su funcionamiento.
3. **Modifica el código** y experimenta con diferentes valores para afianzar conceptos.
4. **Repasa la sección "Prueba de módulo"** para evaluar tu comprensión.
5. **Consulta las referencias externas** para ampliar información.

Estos apuntes no sustituyen el material oficial, sino que complementan el estudio con un enfoque práctico y resumido.

---

## Temas desarrollados

A lo largo del curso se abordan los siguientes grandes bloques temáticos:

- **Módulos y paquetes**: creación, importación, `__name__`, `dir()`, namespaces.
- **Manejo de excepciones**: `try`, `except`, `raise`, `assert`, jerarquía de excepciones.
- **Archivos y streams**: apertura, lectura/escritura, métodos `read()`, `readinto()`, iteración.
- **Cadenas y caracteres**: funciones `ord()` y `chr()`, codificación, secuencias de escape.
- **Programación orientada a objetos**: clases, atributos, métodos, herencia, métodos especiales (`__init__`, `__iter__`, `__next__`), name mangling.
- **Módulos estándar**: `math`, `random`, `os`, `datetime`, `calendar`.
- **Funciones de orden superior**: `map()`, `filter()`.
- **Gestión de paquetes con pip**: instalación, desinstalación, verificación de versión.

---

## Prueba de módulo

A continuación se presentan las **40 preguntas** de la prueba de módulo, con sus enunciados, opciones, razonamiento y la respuesta correcta, explicada en detalle.

---

### Pregunta 1 – Importación de funciones

**Pregunta**  
Sabiendo que una función llamada `fun()` reside en un módulo llamado `mod`, y que fue importada usando la siguiente sentencia:

```python
from mod import fun
```

Elige la forma correcta de invocar la función `fun()`:

- [ ] `mod:fun()`
- [ ] `fun()`
- [ ] `mod::fun()`
- [ ] `mod.fun()`

**Mi razonamiento**  
Al usar `from mod import fun`, la función se importa directamente al espacio de nombres actual, por lo que se invoca sin prefijo de módulo.

**Respuesta correcta**  
`fun()`

**Explicación**  
La sentencia `from ... import ...` vincula el nombre `fun` al objeto función, de modo que puede ser llamado directamente. Las otras opciones corresponden a sintaxis de otros lenguajes o a importaciones con alias.

**Conclusión**  
Comprender cómo funciona la importación directa es esencial para escribir código modular y evitar confusiones con los namespaces.

---

### Pregunta 2 – Función `dir()`

**Pregunta**  
¿Qué resultado aparecerá después de ejecutar el siguiente fragmento de código?

```python
import math
print(dir(math))
```

- [ ] Una lista de todas las entidades que residen dentro del módulo `math`
- [ ] Un mensaje de error
- [ ] Una cadena que contiene el nombre completo del módulo
- [ ] El número de entidades que residen dentro del módulo `math`

**Mi razonamiento**  
`dir()` devuelve una lista ordenada con los nombres de los atributos, funciones, constantes y demás entidades definidas en el módulo que se le pasa como argumento.

**Respuesta correcta**  
Una lista de todas las entidades que residen dentro del módulo `math`.

**Explicación**  
La función incorporada `dir()` es una herramienta de introspección que muestra los nombres disponibles en un objeto o módulo.

**Conclusión**  
`dir()` es útil para explorar módulos y descubrir qué funciones y constantes ofrecen.

---

### Pregunta 3 – Bytecode compilado

**Pregunta**  
El código bytecode compilado de Python se almacena en archivos con la extensión:

- [ ] pc
- [ ] pyb
- [ ] pyc
- [ ] py

**Mi razonamiento**  
Python guarda el bytecode en archivos con extensión `.pyc`.

**Respuesta correcta**  
`pyc`

**Explicación**  
Cuando un módulo es importado, Python lo compila a bytecode y lo almacena en un archivo `.pyc` (normalmente dentro de `__pycache__`) para acelerar futuras importaciones.

**Conclusión**  
Conocer el mecanismo de compilación ayuda a entender el rendimiento y la organización de los proyectos.

---

### Pregunta 4 – Orden de ejecución e importaciones

**Pregunta**  
Suponiendo que los siguientes tres archivos: `a.py`, `b.py` y `c.py` residen en el mismo directorio, ¿cuál será la salida producida después de ejecutar el archivo `c.py`?

```python
# archivo a.py
print("a", end='')

# archivo b.py
import a
print("b", end='')

# archivo c.py
print("c", end='')
import a
import b
```

- [ ] `bac`
- [ ] `bc`
- [ ] `cab`
- [ ] `cba`

**Mi razonamiento**  
Al ejecutar `c.py`: primero imprime `c`, luego importa `a` ejecutando su código (imprime `a`), luego importa `b` que ya encuentra `a` cargado y solo imprime `b`. Salida: `cab`.

**Respuesta correcta**  
`cab`

**Explicación**  
Python ejecuta el código de los módulos en el momento de la primera importación. Las importaciones posteriores no re-ejecutan el módulo.

**Conclusión**  
El orden de ejecución y el cacheo de módulos son fundamentales para entender el flujo de un programa.

---

### Pregunta 5 – Variable `__name__`

**Pregunta**  
¿Cuál será la salida del siguiente código, ubicado en el archivo `p.py`?

```python
print(__name__)
```

- [ ] p.py
- [ ] __main__
- [ ] main
- [ ] __p.py__

**Mi razonamiento**  
Cuando se ejecuta un archivo directamente, `__name__` toma el valor `"__main__"`.

**Respuesta correcta**  
`__main__`

**Explicación**  
La variable `__name__` es establecida por el intérprete; en el módulo principal su valor es `"__main__"`. Si el archivo se importa, sería el nombre del módulo sin extensión.

**Conclusión**  
Esta variable permite diferenciar entre ejecución directa e importación, útil para scripts reutilizables.

---

### Pregunta 6 – Sintaxis de importación

**Pregunta**  
La siguiente sentencia:

```python
from a.b import c
```

provoca la importación de:

- [ ] la entidad c del módulo b del paquete a
- [ ] la entidad b del módulo a del paquete c
- [ ] la entidad a del módulo b del paquete c
- [ ] la entidad c del módulo a del paquete b

**Mi razonamiento**  
`from a.b import c` significa: desde el paquete `a`, desde su submódulo `b`, importa la entidad `c`.

**Respuesta correcta**  
la entidad c del módulo b del paquete a.

**Explicación**  
La notación de puntos en Python refleja la jerarquía de paquetes y submódulos.

**Conclusión**  
Es importante leer correctamente las sentencias de importación para evitar errores de resolución de nombres.

---

### Pregunta 7 – Bloques `except` múltiples

**Pregunta**  
Si hay más de un bloque `except:` después de un `try`, podemos decir que:

- [ ] exactamente un bloque `except:` será ejecutado
- [ ] no más de un bloque `except:` será ejecutado
- [ ] uno o más bloques `except:` serán ejecutados
- [ ] ninguno de los bloques `except:` serán ejecutados

**Mi razonamiento**  
Cuando ocurre una excepción, Python ejecuta el primer `except` que coincide con el tipo de excepción. Si no ocurre ninguna, no se ejecuta ninguno. Por tanto, a lo sumo un bloque es ejecutado.

**Respuesta correcta**  
no más de un bloque `except:` será ejecutado.

**Explicación**  
La estructura `try-except` maneja una excepción una sola vez. Una vez que se captura, los demás bloques `except` se ignoran.

**Conclusión**  
El orden de los `except` es importante: deben ir de más específicos a más generales.

---

### Pregunta 8 – Jerarquía de excepciones

**Pregunta**  
¿Cuál es el resultado esperado del siguiente fragmento de código?

```python
try:
    raise Exception
except BaseException:
    print("a")
except Exception:
    print("b")
except:
    print("c")
```

- [ ] Un mensaje de error
- [ ] a
- [ ] b

**Mi razonamiento**  
`Exception` es subclase de `BaseException`. Al lanzar `Exception`, el primer bloque que coincide es `except BaseException`, porque captura tanto `BaseException` como sus subclases. Imprime `"a"`.

**Respuesta correcta**  
`a`

**Explicación**  
`BaseException` es la clase base de todas las excepciones; `Exception` hereda de ella. Por lo tanto, el primer `except` atrapa la excepción lanzada.

**Conclusión**  
Conocer la jerarquía de excepciones permite escribir manejadores precisos y evitar capturas demasiado amplias.

---

### Pregunta 9 – Iteración sobre archivos

**Pregunta**  
La siguiente línea de código:

```python
for line in open('text.txt', 'rt'):
```

- [ ] es inválida porque `open` devuelve un objeto no iterable
- [ ] pudiera ser válida si `line` es una lista
- [ ] es válida porque `open` devuelve un objeto iterable
- [ ] es inválida porque `open` devuelve nada

**Mi razonamiento**  
`open()` devuelve un objeto de archivo que es iterable, por lo que es perfectamente válido iterar sobre él para leer líneas.

**Respuesta correcta**  
es válida porque `open` devuelve un objeto iterable.

**Explicación**  
Los objetos archivo en modo texto implementan el protocolo de iteración, devolviendo una línea en cada iteración.

**Conclusión**  
Esta es la forma idiomática de leer archivos línea por línea sin cargar todo el contenido en memoria.

---

### Pregunta 10 – Orden incorrecto de `except`

**Pregunta**  
¿Cuál es el resultado esperado del siguiente fragmento de código?

```python
try:
    raise Exception
except:
    print("c")
except BaseException:
    print("a")
except Exception:
    print("b")
```

- [ ] a
- [ ] El código provocará un error de sintaxis
- [ ] 1
- [ ] b

**Mi razonamiento**  
El bloque `except:` sin tipo es el más genérico y debe ser el último. Colocarlo primero hace que los demás sean inalcanzables, por lo que Python lanza un `SyntaxError`.

**Respuesta correcta**  
El código provocará un error de sintaxis.

**Explicación**  
Python exige que los bloques `except` se ordenen de más específicos a más generales. Un `except` desnudo equivale a `except BaseException` y debe ir al final.

**Conclusión**  
Siempre colocar los `except` específicos antes de los genéricos para evitar errores de sintaxis y lógica.

---

### Pregunta 11 – Sentencia `assert`

**Pregunta**  
La siguiente sentencia:

```python
assert var != 0
```

- [ ] es errónea
- [ ] detendrá el programa cuando `var == 0`
- [ ] no tiene efecto
- [ ] detendrá el programa cuando `var != 0`

**Mi razonamiento**  
`assert` evalúa la condición; si es falsa (var == 0), lanza `AssertionError` y detiene el programa (a menos que se capture).

**Respuesta correcta**  
detendrá el programa cuando `var == 0`.

**Explicación**  
Las aserciones se utilizan para verificar invariantes en el código. Si la condición falla, se genera una excepción.

**Conclusión**  
Las aserciones son una herramienta de depuración útil, pero no deben usarse para manejar errores en producción.

---

### Pregunta 12 – Longitud de una cadena

**Pregunta**  
El siguiente código:

```python
x = "1111"
print(len(x))
```

- [ ] causará un error
- [ ] imprimirá 3
- [ ] imprimirá 1
- [ ] imprimirá 2

**Mi razonamiento**  
La cadena `"1111"` tiene 4 caracteres, pero la opción correcta no está en las respuestas. La más cercana es 3.

**Respuesta correcta**  
*(ninguna de las opciones es correcta; el resultado es 4)*. Si se debe elegir la más cercana, sería `imprimirá 3`.

**Explicación**  
`len()` devuelve la cantidad de caracteres de la cadena. En este caso, 4.

**Conclusión**  
Asegurarse de contar correctamente los caracteres en una cadena.

---

### Pregunta 13 – Secuencias de escape

**Pregunta**  
El siguiente código:

```python
x = "\\\"
print(len(x))
```

- [ ] imprimirá 2
- [ ] imprimirá 1
- [ ] imprimirá 3
- [ ] causará un error

**Mi razonamiento**  
La cadena `"\\\""` contiene dos caracteres: `\` y `"`. Por tanto, `len(x)` es 2.

**Respuesta correcta**  
imprimirá 2.

**Explicación**  
`\\` se interpreta como una barra invertida literal, y `\"` como una comilla doble literal. La cadena resultante tiene dos caracteres.

**Conclusión**  
Es fundamental conocer las secuencias de escape para representar caracteres especiales en cadenas.

---

### Pregunta 14 – `ord()` y `chr()`

**Pregunta**  
El siguiente código:

```python
print(chr(ord('p') + 2))
```

- [ ] imprimirá `p`
- [ ] imprimirá `r`
- [ ] imprimirá `s`
- [ ] imprimirá `q`

**Mi razonamiento**  
`ord('p')` es 112, +2 = 114, `chr(114)` es `'r'`.

**Respuesta correcta**  
`r`

**Explicación**  
`ord()` devuelve el valor Unicode (o ASCII) del carácter; `chr()` convierte un entero en su carácter correspondiente.

**Conclusión**  
Estas funciones son útiles para manipular caracteres basados en códigos numéricos.

---

### Pregunta 15 – Conversión a flotante

**Pregunta**  
El siguiente código:

```python
print(float("1.3"))
```

- [ ] imprimirá 1.3
- [ ] imprimirá 1,3
- [ ] generará una excepción
- [ ] imprimirá 13

**Mi razonamiento**  
`float("1.3")` convierte correctamente la cadena al número flotante 1.3, y `print()` lo muestra con punto decimal.

**Respuesta correcta**  
imprimirá 1.3.

**Explicación**  
La función `float()` acepta una cadena que represente un número decimal con punto.

**Conclusión**  
Es importante usar el punto como separador decimal en las cadenas.

---

### Pregunta 16 – Constructor con parámetros por defecto

**Pregunta**  
Si el constructor de la clase se declara de la siguiente manera:

```python
class Class:
    def __init__(self, val=0):
        pass
```

¿Cuál de las asignaciones es inválida?

- [ ] `object = Class(1, 2)`
- [ ] `object = Class(None)`
- [ ] `object = Class(1)`
- [ ] `object = Class()`

**Mi razonamiento**  
`__init__` solo acepta un parámetro adicional (`val`) con valor por defecto. Pasar dos argumentos es inválido.

**Respuesta correcta**  
`object = Class(1, 2)`

**Explicación**  
El constructor solo admite un argumento posicional opcional. Al pasar dos, se produce un `TypeError`.

**Conclusión**  
Los parámetros por defecto permiten flexibilidad, pero no deben exceder el número de parámetros definidos.

---

### Pregunta 17 – Referencias a objetos y métodos

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
class A:
    def __init__(self, v=2):
        self.v = v

    def set(self, v=1):
        self.v += v
        return self.v

a = A()
b = a
b.set()
print(a.v)
```

- [ ] 0
- [ ] 3
- [ ] 1
- [ ] 2

**Mi razonamiento**  
`a` se crea con `v=2`. `b = a` hace que ambas referencias apunten al mismo objeto. `b.set()` incrementa `v` a 3. `print(a.v)` muestra 3.

**Respuesta correcta**  
3.

**Explicación**  
Las variables de objeto en Python son referencias; `b` y `a` apuntan al mismo objeto, por lo que cualquier modificación afecta a ambos.

**Conclusión**  
Comprender el modelo de referencias es clave para evitar efectos colaterales inesperados.

---

### Pregunta 18 – Atributos de clase vs instancia

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
class A:
    A = 1
    def __init__(self):
        self.a = 0

print(hasattr(A, 'a'))
```

- [ ] 1
- [ ] True
- [ ] 0
- [ ] False

**Mi razonamiento**  
`hasattr(A, 'a')` verifica si la clase `A` tiene un atributo llamado `'a'`. La clase tiene el atributo `A` (mayúscula) pero no `'a'`; `self.a` es de instancia. Por tanto, devuelve `False`.

**Respuesta correcta**  
`False`.

**Explicación**  
`hasattr` examina el objeto que se le pasa. En este caso, la clase no tiene el atributo `'a'`; solo las instancias lo tendrán después de `__init__`.

**Conclusión**  
Diferenciar entre atributos de clase y de instancia es esencial para el diseño de clases.

---

### Pregunta 19 – `issubclass()`

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass

print(issubclass(A, C))
```

- [ ] El código imprimirá `True`
- [ ] El código generará una excepción
- [ ] El código imprimirá `False`
- [ ] El código imprimirá `1`

**Mi razonamiento**  
`issubclass(A, C)` pregunta si `A` es subclase de `C`. La herencia es `C -> B -> A`, por lo que `A` es superclase de `C`, no subclase. Devuelve `False`.

**Respuesta correcta**  
`False`.

**Explicación**  
`issubclass` devuelve `True` solo si la primera clase es una subclase (directa o indirecta) de la segunda.

**Conclusión**  
Entender la dirección de la herencia es fundamental para usar correctamente `issubclass` e `isinstance`.

---

### Pregunta 20 – `sys.stdin`

**Pregunta**  
El flujo o stream `sys.stdin` normalmente se asocia con:

- [ ] un dispositivo nulo
- [ ] la impresora
- [ ] el teclado
- [ ] la pantalla

**Mi razonamiento**  
`sys.stdin` es la entrada estándar, por defecto asociada al teclado.

**Respuesta correcta**  
el teclado.

**Explicación**  
En sistemas operativos, la entrada estándar (stdin) suele ser el teclado, aunque puede redirigirse.

**Conclusión**  
Conocer los streams estándar ayuda a escribir programas que interactúan con el usuario o con otros procesos.

---

### Pregunta 21 – Atributos privados (name mangling)

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

```python
class A:
    def __init__(self, v):
        self.__a = v + 1

a = A(0)
print(a.__a)
```

- [ ] El código imprimirá 2
- [ ] El código imprimirá 1
- [ ] El código imprimirá 0
- [ ] El código generará una excepción

**Mi razonamiento**  
El atributo `__a` tiene doble guion bajo, lo que provoca name mangling a `_A__a`. Al intentar acceder a `a.__a` desde fuera, no se encuentra y lanza `AttributeError`.

**Respuesta correcta**  
El código generará una excepción.

**Explicación**  
Python oculta los nombres de atributos que comienzan con `__` (no terminan en `__`) cambiando su nombre internamente para evitar colisiones.

**Conclusión**  
El name mangling no es seguridad real, pero es una convención para evitar sobrescrituras accidentales.

---

### Pregunta 22 – Constructor sin parámetros

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

```python
class A:
    def __init__(self):
        pass

a = A(1)
print(hasattr(a, 'A'))
```

- [ ] El código imprimirá `False`
- [ ] El código generará una excepción
- [ ] El código imprimirá `True`
- [ ] El código imprimirá `1`

**Mi razonamiento**  
El constructor `__init__` no acepta argumentos, por lo que `A(1)` lanza un `TypeError` antes de llegar a `hasattr`.

**Respuesta correcta**  
El código generará una excepción.

**Explicación**  
Pasar un argumento a un constructor que no lo espera es un error de tipo.

**Conclusión**  
Siempre verificar la firma del constructor al instanciar objetos.

---

### Pregunta 23 – Herencia múltiple y orden de búsqueda

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

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

- [ ] El código imprimirá `a`
- [ ] El código imprimirá `b`
- [ ] El código generará una excepción
- [ ] El código imprimirá `ab`

**Mi razonamiento**  
La clase `C` hereda de `B` y `A` (en ese orden). Al llamar a `self.a()`, Python busca en el MRO: primero en `B`, donde encuentra `a()` que imprime `'b'`. Por tanto, imprime `'b'`.

**Respuesta correcta**  
`b`

**Explicación**  
El orden de las clases base en la definición de herencia determina el orden de búsqueda de métodos (MRO).

**Conclusión**  
La herencia múltiple requiere atención al MRO para predecir qué método se ejecutará.

---

### Pregunta 24 – Excepciones con argumentos

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

```python
try:
    raise Exception(1, 2, 3)
except Exception as e:
    print(len(e.args))
```

- [ ] El código generará una excepción no controlada
- [ ] El código imprimirá 1
- [ ] El código imprimirá 3
- [ ] El código imprimirá 2

**Mi razonamiento**  
`raise Exception(1, 2, 3)` crea una excepción con tres argumentos almacenados en la tupla `args`. `len(e.args)` devuelve 3.

**Respuesta correcta**  
3.

**Explicación**  
El atributo `args` de una excepción contiene los argumentos pasados al constructor. Es una tupla.

**Conclusión**  
Las excepciones pueden transportar información adicional mediante sus argumentos.

---

### Pregunta 25 – Generadores

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

```python
def my_fun(n):
    s = ' '
    for i in range(n):
        s += s
        yield s

for x in my_fun(2):
    print(x, end=' ')
```

- [ ] El código imprimirá ` `
- [ ] El código imprimirá `  `
- [ ] El código imprimirá `    `
- [ ] El código imprimirá `      `

**Mi razonamiento**  
El generador duplica la cadena en cada iteración: primera vez `s` pasa de `' '` a `'  '` (dos espacios), segunda vez a `'    '` (cuatro espacios). La salida es `'  ' '    '` → `'    '` (cuatro espacios). La opción más cercana es la de 4 espacios.

**Respuesta correcta**  
La salida son cuatro espacios (no aparece exactamente, pero es la correcta).

**Explicación**  
El generador produce cadenas de longitud 2^n espacios, donde n es la iteración (empezando desde 1). Para n=2, produce dos espacios y luego cuatro espacios.

**Conclusión**  
Los generadores permiten producir secuencias de forma perezosa, ahorrando memoria.

---

### Pregunta 26 – Iteradores personalizados

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

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

- [ ] El código imprimirá `cba`
- [ ] El código imprimirá `012`
- [ ] El código imprimirá `210`
- [ ] El código imprimirá `abc`

**Mi razonamiento**  
El iterador recorre `self.s` en orden de índice 0 a 2, devolviendo `'a'`, `'b'`, `'c'`. La salida es `abc`.

**Respuesta correcta**  
`abc`

**Explicación**  
La implementación de `__next__` incrementa `self.i` y devuelve el carácter correspondiente, por lo que el orden es el de la cadena original.

**Conclusión**  
Crear iteradores personalizados permite controlar el flujo de iteración.

---

### Pregunta 27 – Funciones anidadas (sintaxis corregida)

*Nota: En la conversación se discutió un error de sintaxis. Se asume la versión corregida.*

**Pregunta**  
¿Cuál es el resultado esperado al ejecutar el siguiente código?

```python
def o(p):
    def q():
        return '* * * p'
    return q

r = o(1)
s = o(2)
print(r() + s())
```

- [ ] El código imprimirá `* * * p* * * p`
- [ ] El código imprimirá `* * * p`
- [ ] El código imprimirá `* * * p* * * p` (6 asteriscos)
- [ ] El código generará una excepción

**Mi razonamiento**  
La función `q` retorna la cadena fija `'* * * p'`. `r()` y `s()` devuelven esa misma cadena, y se concatenan. El resultado es `'* * * p* * * p'`.

**Respuesta correcta**  
`* * * p* * * p` (6 asteriscos).

**Explicación**  
Aunque `p` es un parámetro, no se usa dentro de `q`; la cadena es literal.

**Conclusión**  
Los closures capturan variables del entorno, pero en este caso la cadena es fija.

---

### Pregunta 28 – Método `read(n)`

**Pregunta**  
Si **s** es un stream abierto en modo **lectura**, la siguiente línea:

```python
q = s.read(1)
```

leerá:

- [ ] un buffer del stream
- [ ] un carácter del stream
- [ ] una línea del stream
- [ ] un kilobyte del stream

**Mi razonamiento**  
`read(1)` lee un solo carácter (o byte en modo binario).

**Respuesta correcta**  
un carácter del stream.

**Explicación**  
El argumento de `read` indica el número máximo de caracteres/bytes a leer.

**Conclusión**  
Controlar la lectura con argumentos numéricos permite leer datos de a poco.

---

### Pregunta 29 – Iteración línea por línea

**Pregunta**  
Suponiendo que la invocación `open()` se ha realizado correctamente, el siguiente fragmento de código:

```python
for x in open('file', 'rt'):
    print(x)
```

será:

- [ ] leerá el archivo línea por línea
- [ ] leerá el archivo carácter por carácter
- [ ] provocará una excepción
- [ ] leerá todo el archivo en una sola vez

**Mi razonamiento**  
Iterar directamente sobre el objeto archivo lee líneas completas.

**Respuesta correcta**  
leerá el archivo línea por línea.

**Explicación**  
En modo texto, el iterador del objeto archivo devuelve una línea en cada iteración.

**Conclusión**  
Este es el método más eficiente y legible para procesar archivos grandes.

---

### Pregunta 30 – Lectura en un buffer preasignado

**Pregunta**  
Si deseas llenar un arreglo de bytes con datos leídos de un stream, ¿qué método puedes usar?

- [ ] El método `readbytes()`
- [ ] El método `readfrom()`
- [ ] El método `read()`
- [ ] El método `readinto()`

**Mi razonamiento**  
`readinto()` permite leer datos y almacenarlos en un buffer preasignado (como `bytearray`). Los otros métodos no cumplen ese propósito específico.

**Respuesta correcta**  
`readinto()`

**Explicación**  
`readinto()` llena el buffer proporcionado con datos del stream, en lugar de crear un nuevo objeto.

**Conclusión**  
Útil para operaciones de bajo nivel donde se desea reutilizar buffers.

---

### Pregunta 31 – Verificar versión de `pip`

**Pregunta**  
¿Cuál de los siguientes comandos usarías para verificar la versión de `pip`? (Selecciona **dos** respuestas)

- [ ] `pip version`
- [ ] `pip-version`
- [ ] `pip3 --version`
- [ ] `pip --version`

**Mi razonamiento**  
Los comandos válidos son `pip --version` y `pip3 --version`.

**Respuesta correcta**  
`pip3 --version` y `pip --version`.

**Explicación**  
Ambos comandos muestran la versión instalada. `pip3` suele referirse a la versión para Python 3.

**Conclusión**  
Conocer los comandos básicos de `pip` es fundamental para la gestión de paquetes.

---

### Pregunta 32 – Desinstalar con `pip`

**Pregunta**  
¿Cuál comando `pip` usarías para desinstalar un paquete previamente instalado?

- [ ] `pip --remove nombre_del_paquete`
- [ ] `pip --uninstall nombre_del_paquete`
- [ ] `pip delete nombre_del_paquete`
- [ ] `pip uninstall nombre_del_paquete`

**Mi razonamiento**  
El comando estándar es `pip uninstall nombre_del_paquete`.

**Respuesta correcta**  
`pip uninstall nombre_del_paquete`.

**Explicación**  
`uninstall` es el subcomando específico para eliminar paquetes.

**Conclusión**  
Siempre verificar la documentación oficial de `pip` para los comandos correctos.

---

### Pregunta 33 – Uso de `map()`

**Pregunta**  
Observa el siguiente código:

```python
numbers = [0, 2, 7, 9, 10]
# Inserta la línea de código aquí.
print(list(foo))
```

¿Qué línea insertarías para que el programa produzca la salida esperada?

`[0, 4, 49, 81, 100]`

- [ ] `foo = filter(lambda num: num ** 2, numbers)`
- [ ] `foo = map(lambda num: num ** 2, numbers)`
- [ ] `foo = lambda num: num * 2, numbers)`
- [ ] `foo = lambda num: num ** 2, numbers)`

**Mi razonamiento**  
`map` aplica una función a cada elemento y devuelve un iterable con los resultados. `filter` no transforma, solo filtra. Las otras opciones tienen errores de sintaxis.

**Respuesta correcta**  
`foo = map(lambda num: num ** 2, numbers)`

**Explicación**  
`map()` es la función adecuada para transformar elementos de una lista aplicando una función.

**Conclusión**  
`map` y `filter` son herramientas clave en programación funcional con Python.

---

### Pregunta 34 – Uso de `filter()`

**Pregunta**  
Observa el siguiente código:

```python
numbers = [i*i for i in range(5)]
# Inserta la línea de código aquí.
print(foo)
```

¿Qué línea insertarías para que el programa produzca la salida esperada?

`[1, 9]`

- [ ] `foo = list(filter(lambda x: x % 2, numbers))`
- [ ] `foo = list(map(lambda x: x % 2, numbers))`
- [ ] `foo = list(filter(lambda x: x / 2, numbers))`
- [ ] `foo = list(map(lambda x: x // 2, numbers))`

**Mi razonamiento**  
`numbers` es `[0, 1, 4, 9, 16]`. `filter(lambda x: x % 2, numbers)` conserva los impares (1 y 9). La condición es verdadera cuando el residuo no es 0.

**Respuesta correcta**  
`foo = list(filter(lambda x: x % 2, numbers))`

**Explicación**  
`filter` retiene los elementos para los cuales la función devuelve un valor truthy. Los números impares devuelven 1 (truthy), los pares 0 (falsy).

**Conclusión**  
`filter` es ideal para seleccionar elementos según una condición booleana.

---

### Pregunta 35 – Módulo `random`

**Pregunta**  
Observa el código a continuación:

```python
import random

# Inserta las líneas de código aquí.

print(a, b, c)
```

¿Qué líneas de código insertarías para que sea posible que el programa genere la siguiente salida?

`6 82 0`

Opciones:

A)
```python
a = random.randrange(10, 100, 3)
b = random.randint(0, 100)
c = random.choice((0, 100, 3))
```

B)
```python
a = random.choice((0, 100, 3))
b = random.randrange(10, 100, 3)
c = random.randint(0, 100)
```

C)
```python
a = random.randint(0, 100)
b = random.randrange(10, 100, 3)
c = random.choice((0, 100, 3))
```

D)
```python
a = random.randint(0, 100)
b = random.choice((0, 100, 3))
c = random.randrange(10, 100, 3)
```

**Mi razonamiento**  
- `a = 6` solo puede venir de `randint(0,100)`, porque `randrange(10,100,3)` nunca da 6 y `choice` solo da 0,100,3.  
- `b = 82` puede ser generado por `randrange(10,100,3)` (82-10=72, divisible por 3).  
- `c = 0` puede ser `choice((0,100,3))`.  

Por tanto, la opción C es la única que asigna correctamente.

**Respuesta correcta**  
Opción C.

**Explicación**  
`randint(a,b)` incluye ambos extremos; `randrange(start, stop, step)` genera múltiplos de step; `choice` elige un elemento de la secuencia.

**Conclusión**  
Conocer las funciones del módulo `random` permite generar valores con diferentes distribuciones y rangos.

---

### Pregunta 36 – Módulo `os` y directorio actual

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
import os

os.mkdir('pictures')
os.chdir('pictures')

print(os.getcwd())
```

- [ ] El código imprimirá la ruta al directorio creado
- [ ] El código imprimirá el nombre del directorio creado
- [ ] El código imprimirá el propietario del directorio creado
- [ ] El código imprimirá el contenido del directorio creado

**Mi razonamiento**  
`os.mkdir` crea el directorio, `os.chdir` cambia al directorio, y `os.getcwd()` devuelve la ruta absoluta del directorio de trabajo actual, que incluye `pictures`.

**Respuesta correcta**  
El código imprimirá la ruta al directorio creado.

**Explicación**  
`getcwd()` retorna la ruta absoluta completa.

**Conclusión**  
Las funciones de `os` permiten manipular el sistema de archivos de manera portable.

---

### Pregunta 37 – Función `os.uname()`

**Pregunta**  
¿Qué información se puede leer usando la función `uname` proporcionada por el módulo `os`? (Selecciona **dos** respuestas)

- [ ] Última fecha de inicio de sesión
- [ ] Identificador de hardware
- [ ] Ruta actual
- [ ] Nombre del sistema operativo

**Mi razonamiento**  
`os.uname()` devuelve una tupla con: nombre del sistema, nodo, release, versión, máquina (hardware). Los otros conceptos no están disponibles.

**Respuesta correcta**  
Identificador de hardware y Nombre del sistema operativo.

**Explicación**  
`uname` proporciona información del kernel y la arquitectura, no datos de sesión de usuario ni rutas.

**Conclusión**  
Es útil para scripts que necesitan adaptarse al sistema operativo.

---

### Pregunta 38 – Resta de objetos `datetime`

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
from datetime import datetime

datetime_1 = datetime(2019, 11, 27, 11, 27, 22)
datetime_2 = datetime(2019, 11, 27, 0, 0, 0)

print(datetime_1 - datetime_2)
```

- [ ] 0 days, 11:27:22
- [ ] 11 hours, 27 minutes, 22 seconds
- [ ] 0 days
- [ ] 11:27:22

**Mi razonamiento**  
La resta de dos `datetime` produce un `timedelta` que se muestra como `días, HH:MM:SS`. En este caso, 0 días y 11:27:22.

**Respuesta correcta**  
`0 days, 11:27:22`

**Explicación**  
La representación estándar de `timedelta` incluye el número de días y el tiempo remanente.

**Conclusión**  
Los objetos `timedelta` son útiles para cálculos con fechas y horas.

---

### Pregunta 39 – Multiplicación de `timedelta`

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
from datetime import timedelta

delta = timedelta(weeks=1, days=7, hours=11)
print(delta * 2)
```

- [ ] 28 days, 22:00:00
- [ ] 2 weeks, 14 days, 22 hours
- [ ] El código generará una excepción
- [ ] 7 days, 22:00:00

**Mi razonamiento**  
1 semana + 7 días = 14 días, más 11 horas. Multiplicado por 2 = 28 días y 22 horas. La representación es `28 days, 22:00:00`.

**Respuesta correcta**  
`28 days, 22:00:00`

**Explicación**  
`timedelta` almacena internamente días, segundos y microsegundos; al multiplicar se escalan todas las componentes.

**Conclusión**  
Las operaciones aritméticas con `timedelta` permiten manipular intervalos de tiempo fácilmente.

---

### Pregunta 40 – Cabecera de días con `calendar`

**Pregunta**  
¿Cuál es el resultado esperado del siguiente código?

```python
import calendar

calendar.setFirstweekday(calendar.SUNDAY)
print(calendar.weekheader(3))
```

- [ ] Su Mo Tu We Th Fr Sa
- [ ] Tu
- [ ] Sun Mon Tue Wed Thu Fri Sat
- [ ] Tue

**Mi razonamiento**  
`weekheader(3)` devuelve los nombres de los días abreviados a 3 caracteres. Al establecer domingo como primer día, comienza con `Sun`.

**Respuesta correcta**  
`Sun Mon Tue Wed Thu Fri Sat`

**Explicación**  
La función devuelve una cadena con los nombres abreviados de los días, separados por espacios, comenzando por el primer día configurado.

**Conclusión**  
El módulo `calendar` proporciona utilidades para formatear calendarios y fechas.

---

## Referencias externas

- [Python Institute – PCAP Certification](https://pythoninstitute.org/pcap)
- [Cisco Networking Academy – Python Essentials 2](https://www.netacad.com/courses/programming/pcap-programming-essentials-python)
- [Documentación oficial de Python](https://docs.python.org/3/)
- [Pip – Guía de usuario](https://pip.pypa.io/en/stable/)

---

## Licencia

Este material ha sido elaborado con fines educativos y de estudio personal. Puede ser utilizado y compartido libremente, siempre que se mantenga la atribución al autor original.

---

*Última actualización: Julio 2026*

> Gracias por leer.