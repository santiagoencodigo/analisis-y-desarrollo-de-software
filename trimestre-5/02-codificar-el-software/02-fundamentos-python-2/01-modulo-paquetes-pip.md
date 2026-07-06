# Módulos, Paquetes y Pip en Python

## Introducción

A medida que un proyecto de software crece, se vuelve necesario dividirlo en partes más pequeñas y manejables. Python ofrece **módulos** y **paquetes** como mecanismos para organizar y reutilizar el código. Además, el ecosistema Python cuenta con **PyPI** (Python Package Index) y la herramienta **pip** para distribuir e instalar paquetes de terceros.

Este documento recopila los conceptos fundamentales sobre módulos, paquetes y pip, incluyendo ejemplos prácticos y un conjunto de preguntas de repaso.

---

## Módulos

### ¿Qué es un módulo?

Un **módulo** es un archivo que contiene definiciones y sentencias de Python. Su propósito es agrupar código relacionado (funciones, clases, variables, constantes) para facilitar su reutilización y mantenimiento. Los módulos permiten:

- Dividir el código en partes lógicas.
- Reutilizar funcionalidades en distintos proyectos.
- Mantener un espacio de nombres ordenado.

La **Biblioteca Estándar de Python** incluye una amplia colección de módulos (como `math`, `random`, `platform`, `sys`, etc.) que cubren desde operaciones matemáticas hasta acceso al sistema operativo.

### Importación de módulos

Para utilizar un módulo, primero debe ser importado. Existen varias formas de hacerlo, cada una con implicaciones sobre el espacio de nombres.

#### 1. Importación completa

```python
import math
```

Esta forma importa todo el módulo. Para acceder a sus entidades, se debe usar el nombre del módulo como prefijo:

```python
import math
print(math.pi)          # 3.141592653589793
print(math.sin(math.pi/2))  # 1.0
```

#### 2. Importación selectiva

```python
from math import pi, sin
```

Solo se importan las entidades especificadas. Se pueden usar directamente sin el prefijo del módulo:

```python
from math import pi, sin
print(pi)          # 3.141592653589793
print(sin(pi/2))   # 1.0
```

#### 3. Importación con alias

Se puede renombrar el módulo o la entidad para acortar nombres o evitar colisiones:

```python
import math as m
print(m.pi)

from math import sin as seno
print(seno(0))
```

#### 4. Importación de todas las entidades (`*`)

```python
from math import *
```

Esta forma importa todos los nombres públicos del módulo. **No se recomienda** porque puede causar conflictos de nombres y dificulta la legibilidad del código.

### El espacio de nombres (namespace)

Un **namespace** es un contenedor de nombres donde cada nombre es único. Cuando se importa un módulo con `import modulo`, sus nombres residen en el namespace del módulo, no en el global. Esto evita colisiones con nombres definidos en el código principal.

### La variable `__name__`

Cada módulo tiene una variable especial llamada `__name__` que almacena el nombre del módulo. Cuando un archivo se ejecuta directamente (como script principal), su `__name__` se establece a `"__main__"`. Esto permite distinguir entre ejecución directa e importación:

```python
if __name__ == "__main__":
    print("Este código se ejecuta solo cuando el archivo se corre directamente.")
else:
    print("Este archivo ha sido importado como módulo.")
```

### Creación de módulos propios

Cualquier archivo con extensión `.py` puede ser un módulo. Basta con colocarlo en un directorio accesible (por ejemplo, el mismo directorio del script principal) e importarlo.

Cuando un módulo se importa por primera vez, Python lo compila a **bytecode** (archivo `.pyc`) y lo guarda en la carpeta `__pycache__` para acelerar futuras importaciones. Este proceso es automático y transparente.

#### Buenas prácticas al escribir módulos

- Incluir un **docstring** al inicio del archivo para describir su propósito.
- Usar la variable `__name__` para incluir pruebas que solo se ejecuten al correr el módulo directamente.
- Si se desea indicar que una variable o función es "privada", se puede anteponer un guion bajo (`_`) o dos (`__`), aunque esto es solo una convención.

#### Ejemplo de módulo

```python
# module.py
"""Módulo de ejemplo con funciones de suma y producto."""

__contador = 0

def sumar(lista):
    global __contador
    __contador += 1
    return sum(lista)

def producto(lista):
    global __contador
    __contador += 1
    prod = 1
    for x in lista:
        prod *= x
    return prod

if __name__ == "__main__":
    # Pruebas
    datos = [1, 2, 3, 4, 5]
    print(sumar(datos))       # 15
    print(producto(datos))    # 120
```

### Ruta de búsqueda de módulos (sys.path)

Python busca los módulos en los directorios listados en `sys.path`. Esta lista incluye:

- El directorio del script principal.
- Variables de entorno como `PYTHONPATH`.
- Directorios de instalación de la biblioteca estándar y paquetes de terceros.

Se puede modificar `sys.path` en tiempo de ejecución para agregar directorios personalizados:

```python
import sys
sys.path.append('/ruta/a/mis/modulos')
```

---

## Paquetes

### ¿Qué es un paquete?

Un **paquete** es una forma de organizar módulos relacionados en una jerarquía de directorios. Un paquete es simplemente un directorio que contiene un archivo especial llamado `__init__.py` (puede estar vacío) y uno o más módulos o subpaquetes.

La estructura típica de un paquete:

```
mi_paquete/
    __init__.py
    modulo1.py
    modulo2.py
    subpaquete/
        __init__.py
        modulo3.py
```

### Importación desde paquetes

Para importar un módulo dentro de un paquete, se usa la notación con puntos:

```python
import mi_paquete.modulo1
from mi_paquete.subpaquete import modulo3
```

### El archivo `__init__.py`

El archivo `__init__.py` se ejecuta cuando se importa el paquete por primera vez. Sirve para inicializar el paquete, definir variables globales o importar subpaquetes de forma conveniente. Puede estar vacío, pero debe existir para que Python reconozca el directorio como un paquete.

### Paquetes comprimidos (archivos ZIP)

Python puede importar módulos directamente desde un archivo `.zip` que contenga la estructura de paquetes, siempre que el archivo esté incluido en `sys.path`.

```python
import sys
sys.path.append('ruta/mi_paquete.zip')
import mi_paquete.modulo1
```

---

## Módulos estándar importantes

### Módulo `math`

Proporciona funciones matemáticas y constantes. Algunas de las más utilizadas:

| Función / Constante | Descripción |
|---------------------|-------------|
| `pi`                | Aproximación de π |
| `e`                 | Constante de Euler |
| `sin(x)`, `cos(x)`, `tan(x)` | Funciones trigonométricas (x en radianes) |
| `asin(x)`, `acos(x)`, `atan(x)` | Funciones trigonométricas inversas |
| `sinh(x)`, `cosh(x)`, `tanh(x)` | Funciones hiperbólicas |
| `exp(x)`            | e^x |
| `log(x)`, `log10(x)`, `log2(x)` | Logaritmos natural, decimal y binario |
| `pow(x, y)`         | x^y (también existe como función integrada) |
| `sqrt(x)`           | Raíz cuadrada |
| `ceil(x)`           | Redondeo hacia arriba al entero más cercano |
| `floor(x)`          | Redondeo hacia abajo |
| `trunc(x)`          | Truncamiento (descarta la parte decimal) |
| `factorial(x)`      | Factorial de x (entero no negativo) |
| `hypot(x, y)`       | Longitud de la hipotenusa (sqrt(x² + y²)) |

**Ejemplo:**

```python
import math
print(math.e == math.exp(1))   # True
print(math.sin(math.pi / 2))   # 1.0
```

### Módulo `random`

Permite generar números pseudoaleatorios. La aleatoriedad real en computadoras no existe; los números se generan mediante algoritmos deterministas a partir de una **semilla**. Si se fija la semilla con `seed()`, la secuencia será reproducible.

| Función | Descripción |
|---------|-------------|
| `random()` | Devuelve un float en [0.0, 1.0) |
| `seed(a=None)` | Inicializa la semilla (por defecto usa la hora actual) |
| `randrange(start, stop, step)` | Entero aleatorio de un rango |
| `randint(a, b)` | Entero aleatorio en [a, b] (ambos incluidos) |
| `choice(seq)` | Elige un elemento aleatorio de una secuencia |
| `sample(población, k)` | Devuelve una lista de k elementos únicos elegidos de la población |

**Ejemplos:**

```python
import random
random.seed(42)          # Fija la semilla para reproducibilidad
print(random.random())   # 0.6394267984578837
print(random.randint(1, 10))   # 7
print(random.choice(['a', 'b', 'c']))   # 'b'
print(random.sample(range(10), 3))   # [6, 2, 1]
```

### Módulo `platform`

Permite obtener información sobre la plataforma (sistema operativo, hardware, versión de Python). Funciones clave:

| Función | Descripción |
|---------|-------------|
| `platform()` | Cadena descriptiva del entorno |
| `machine()` | Nombre del procesador (ej. 'x86_64') |
| `processor()` | Nombre real del procesador (si es posible) |
| `system()` | Nombre del sistema operativo (ej. 'Linux', 'Windows') |
| `version()` | Versión del sistema operativo |
| `python_implementation()` | Implementación de Python (ej. 'CPython') |
| `python_version_tuple()` | Tupla (major, minor, patch) de la versión de Python |

**Ejemplo:**

```python
import platform
print(platform.system())              # 'Linux'
print(platform.python_version_tuple())  # ('3', '10', '0')
```

---

## Pip y PyPI

### El ecosistema de paquetes Python

**PyPI** (Python Package Index) es el repositorio oficial de paquetes de Python. También se le conoce como "The Cheese Shop" en referencia a un sketch de Monty Python. PyPI alberga miles de proyectos de código abierto que se pueden instalar fácilmente.

**pip** es la herramienta de línea de comandos para instalar y gestionar paquetes desde PyPI. Viene incluida en la mayoría de las instalaciones modernas de Python.

### Verificación de pip

```bash
pip --version
# o
pip3 --version
```

### Comandos básicos de pip

| Comando | Descripción |
|---------|-------------|
| `pip help` | Muestra ayuda general |
| `pip help comando` | Muestra ayuda sobre un comando específico |
| `pip list` | Lista todos los paquetes instalados en el entorno actual |
| `pip show paquete` | Muestra información detallada de un paquete instalado (incluyendo dependencias) |
| `pip search término` | Busca paquetes en PyPI por nombre o resumen (obsoleto, ya no funciona en versiones recientes) |
| `pip install paquete` | Instala la última versión del paquete |
| `pip install paquete==versión` | Instala una versión específica |
| `pip install --user paquete` | Instala el paquete solo para el usuario actual (sin privilegios de administrador) |
| `pip install -U paquete` | Actualiza un paquete a la última versión |
| `pip uninstall paquete` | Desinstala el paquete |

### Gestión de dependencias

Cuando se instala un paquete, pip resuelve y descarga automáticamente sus dependencias. Esto evita el denominado **infierno de dependencias**.

### Instalación con `--user`

Si no se tienen permisos de administrador, se puede instalar un paquete localmente con `--user`. Los paquetes se instalan en un directorio del usuario (por ejemplo, `~/.local/lib/python3.x/site-packages`).

### Actualización de pip

```bash
pip install --upgrade pip
```

### Ejemplo de instalación de un paquete

```bash
pip install pygame
```

---

## Preguntas de repaso

Las siguientes preguntas cubren los conceptos clave de módulos, paquetes y pip. Se incluyen las respuestas correctas y una explicación.

---

### 1. Importación de funciones

**Pregunta:** Sabiendo que una función llamada `fun()` reside dentro de un módulo llamado `mod`, selecciona la forma correcta de importarlo.

- `import fun`
- `import fun from mod`
- `from mod import fun`
- `from fun import mod`

**Respuesta correcta:** `from mod import fun`

**Explicación:** En Python, para importar una función específica se usa `from modulo import funcion`. Las otras opciones tienen sintaxis incorrecta o invierten el orden.

---

### 2. Invocación de funciones

**Pregunta:** Sabiendo que `fun()` reside en `mod`, y se ha importado con `import mod`, ¿cómo se invoca?

- `mod->fun()`
- `fun()`
- `mod::fun()`
- `mod.fun()`

**Respuesta correcta:** `mod.fun()`

**Explicación:** Con `import mod`, se accede a los atributos usando el punto (`.`). Las demás formas son válidas en otros lenguajes, no en Python.

---

### 3. Listado de entidades en un módulo

**Pregunta:** ¿Qué función devuelve una lista de todas las entidades disponibles en un módulo?

- `entities()`
- `dir()`
- `content()`
- `listmodule()`

**Respuesta correcta:** `dir()`

**Explicación:** `dir(modulo)` lista los nombres definidos en el módulo. Las otras opciones no son funciones incorporadas.

---

### 4. Archivos `.pyc`

**Pregunta:** Un archivo `pyc` contiene:

- código fuente de Python
- código compilado de Python
- un compilador de Python
- un intérprete de Python

**Respuesta correcta:** código compilado de Python

**Explicación:** Los `.pyc` contienen bytecode compilado para acelerar futuras importaciones.

---

### 5. Ejecución al importar

**Pregunta:** Cuando se importa un módulo, su contenido:

- es ignorado
- puede ser ejecutado (explícitamente)
- se ejecuta una vez (implícitamente)
- se ejecuta tantas veces como se importe

**Respuesta correcta:** se ejecuta una vez (implícitamente)

**Explicación:** Python ejecuta el código del módulo solo en la primera importación, gracias al sistema de caché en `sys.modules`.

---

### 6. Variable `__name__`

**Pregunta:** Variable predefinida que almacena el nombre del módulo actual:

- `module`
- `mod`
- `modname`
- `name`

**Respuesta correcta:** `__name__` (ninguna opción es exacta; todas carecen de los guiones bajos).

**Explicación:** La variable correcta es `__name__`. Se usa para detectar si el módulo se ejecuta directamente o se importa.

---

### 7. Importación desde paquetes

**Pregunta:** `from a.b import c` causa la importación de:

- la entidad `b` del módulo `a` del paquete `c`
- la entidad `c` del módulo `a` del paquete `b`
- la entidad `c` del módulo `b` del paquete `a`
- la entidad `a` del módulo `b` del paquete `c`

**Respuesta correcta:** la entidad `c` del módulo `b` del paquete `a`

**Explicación:** La notación con puntos indica jerarquía: `a` es paquete, `b` es módulo, `c` es la entidad importada.

---

### 8. `math.e` y conversión booleana

**Pregunta:** ¿Cuál es el valor de `result` después de ejecutar?

```python
import math
result = math.e != math.pow(2, 4)
print(int(result))
```

- `1`
- `False`
- `True`
- `0`

**Respuesta correcta:** `1`

**Explicación:** `math.e` ≈ 2.71828, `math.pow(2,4)` = 16. La comparación da `True`, y `int(True)` es `1`.

---

### 9. Aleatoriedad con `randint`

**Pregunta:** ¿Cuál es el resultado esperado?

```python
from random import randint
for i in range(2):
    print(randint(1, 2), end='')
```

- `12, 0 21`
- Existen millones de combinaciones posibles y no se puede predecir el resultado exacto.
- `11, 12, 21, 0 22`
- `12`

**Respuesta correcta:** Existen millones de combinaciones posibles y no se puede predecir el resultado exacto. (Nota: realmente solo hay 4 combinaciones, pero el código es aleatorio).

**Explicación:** `randint(1,2)` genera 1 o 2, y el bucle de 2 iteraciones produce cadenas de dos dígitos aleatorios.

---

### 10. Funciones del módulo `platform`

**Pregunta:** Selecciona dos afirmaciones verdaderas:

- `platform.version()` devuelve la versión de Python.
- `platform.system()` devuelve el nombre del sistema operativo.
- `platform.processor()` devuelve el número de procesos en ejecución.
- `platform.version()` devuelve la versión del sistema operativo.

**Respuesta correcta:** Opciones 2 y 4.

**Explicación:** `system()` da el SO; `version()` da la versión del SO, no la de Python. `processor()` devuelve el nombre del procesador, no el número de procesos.

---

### 11. Directorio `__pycache__`

**Pregunta:** Durante la primera importación, Python despliega los `.pyc` en:

- `pycache`
- `Mymodules`
- `Hashbang`
- `init`

**Respuesta correcta:** `pycache`

**Explicación:** El directorio es `__pycache__` (aunque la opción solo dice `pycache`). Almacena los archivos compilados.

---

### 12. Shebang (`#!`)

**Pregunta:** El conjunto `#!` se emplea para:

- decirle a un sistema Unix cómo ejecutar el archivo Python
- decirle a Windows cómo ejecutarlo
- crear un docstring
- hacer privada una entidad

**Respuesta correcta:** decirle a un sistema Unix cómo ejecutar el archivo Python

**Explicación:** El shebang es usado en sistemas tipo Unix para especificar el intérprete. En Windows se maneja por extensiones de archivo.

---

### 13. Comando para ver dependencias con pip

**Pregunta:** Se puede obtener una lista de las dependencias de un paquete con:

- `deps`
- `dir`
- `show`
- `list`

**Respuesta correcta:** `show`

**Explicación:** `pip show paquete` muestra información detallada, incluyendo dependencias.

---

### 14. `pip list`

**Pregunta:** El comando `pip list` presenta:

- todos los paquetes disponibles en PyPI
- comandos pip disponibles
- paquetes instalados localmente
- paquetes locales obsoletos

**Respuesta correcta:** paquetes instalados localmente

**Explicación:** `pip list` enumera los paquetes instalados en el entorno actual.

---

### 15. `pip search`

**Pregunta:** ¿Cuáles son verdaderas acerca de `pip search`? (Selecciona dos)

- Necesita conexión a Internet.
- Busca en todos los paquetes de PyPI.
- Busca solo por nombres.
- Busca solo paquetes instalados.

**Respuesta correcta:** Necesita conexión a Internet; Busca en todos los paquetes de PyPI.

**Explicación:** `pip search` consulta PyPI online y busca en nombres y resúmenes. Está obsoleto actualmente.

---

### 16. Opciones de `pip install`

**Pregunta:** ¿Cuáles son verdaderas sobre `pip install`? (Selecciona dos)

- Permite instalar una versión específica.
- `--user` instala para el usuario actual.
- Siempre instala la última versión.
- Existe la opción `--system`.

**Respuesta correcta:** Permite instalar versión específica; `--user` instala para el usuario.

**Explicación:** Se puede especificar versión con `==`; `--user` es para instalación local; no existe `--system`.

---

### 17. Actualización de paquetes

**Pregunta:** ¿Cómo se actualiza un paquete?

- Solo desinstalando e instalando de nuevo.
- Con `install -u`.
- Con `reinstall`.
- Es automático.

**Respuesta correcta:** Con `install -u` (aunque es `-U` mayúscula).

**Explicación:** `pip install -U paquete` actualiza a la última versión. No es automático y no existe `reinstall`.

---

### 18. Desinstalación con pip

**Pregunta:** ¿Qué comando elimina un paquete?

- `pip --uninstall package`
- `pip remove package`
- `pip install --uninstall package`
- `pip uninstall package`

**Respuesta correcta:** `pip uninstall package`

**Explicación:** El comando específico es `pip uninstall`.

> Gracias por leer.