# Python: Conceptos Avanzados y Módulos Estándar

Este documento reúne conceptos fundamentales de Python para el manejo de iteradores, generadores, funciones lambda, cierres, archivos, interacción con el sistema operativo, manejo de fechas y calendarios. Sirve como material de estudio y guía de consulta rápida.

> Son mis apuntes refinados.

---

## Generadores e Iteradores

### Protocolo de iteración

Un **iterador** es un objeto que implementa el protocolo de iteración, el cual consta de dos métodos:

- `__iter__()`: devuelve el propio objeto iterador. Se invoca una vez al inicio.
- `__next__()`: devuelve el siguiente valor de la secuencia. Cuando no hay más elementos, lanza la excepción `StopIteration`.

Ejemplo: clase que genera los primeros `n` números de Fibonacci.

```python
class Fib:
    def __init__(self, n):
        self.__n = n
        self.__i = 0
        self.__p1 = self.__p2 = 1

    def __iter__(self):
        return self

    def __next__(self):
        self.__i += 1
        if self.__i > self.__n:
            raise StopIteration
        if self.__i in [1, 2]:
            return 1
        ret = self.__p1 + self.__p2
        self.__p1, self.__p2 = self.__p2, ret
        return ret

for x in Fib(10):
    print(x)
```

La función `range()` es un generador (y por tanto un iterador) que produce valores de forma perezosa.

### La sentencia `yield`

La palabra clave `yield` permite crear generadores de forma mucho más elegante que implementando manualmente el protocolo. Una función que contiene `yield` se convierte en un generador: no se ejecuta de una vez, sino que va devolviendo valores y pausando su estado.

```python
def fun(n):
    for i in range(n):
        yield i

for v in fun(5):
    print(v)   # 0 1 2 3 4
```

Cuando se invoca, la función devuelve un objeto generador, no el valor inmediato. Cada `yield` entrega el valor y congela el estado de la función hasta la siguiente iteración.

#### Potencias de 2

```python
def powers_of_2(n):
    power = 1
    for i in range(n):
        yield power
        power *= 2

for v in powers_of_2(8):
    print(v)
```

#### Generador de Fibonacci

```python
def fibonacci(n):
    p = pp = 1
    for i in range(n):
        if i in [0, 1]:
            yield 1
        else:
            n = p + pp
            pp, p = p, n
            yield n

fibs = list(fibonacci(10))
print(fibs)
```

### Comprensiones de listas vs generadores

Una comprensión de lista se escribe entre corchetes `[]` y produce una lista completa. Si se usan paréntesis `()`, se obtiene un generador.

```python
the_list = [1 if x % 2 == 0 else 0 for x in range(10)]
the_generator = (1 if x % 2 == 0 else 0 for x in range(10))

print(len(the_list))        # 10
# print(len(the_generator)) # TypeError: object of type 'generator' has no len()
```

Los generadores son más eficientes en memoria porque no almacenan todos los elementos, sino que los producen bajo demanda.

---

## Funciones Lambda y Cierres

### Función lambda

Una **función lambda** es anónima y se define con la sintaxis:

```python
lambda parameters: expression
```

Devuelve el resultado de evaluar `expression` con los parámetros dados. Puede asignarse a una variable, aunque se recomienda usar `def` para funciones con nombre.

```python
two = lambda: 2
sqr = lambda x: x * x
pwr = lambda x, y: x ** y

for a in range(-2, 3):
    print(sqr(a), end=" ")
    print(pwr(a, two()))
```

### `map()`

`map(function, iterable)` aplica `function` a cada elemento del iterable y devuelve un iterador con los resultados.

```python
list_1 = [x for x in range(5)]
list_2 = list(map(lambda x: 2 ** x, list_1))
print(list_2)

for x in map(lambda x: x * x, list_2):
    print(x, end=' ')
```

### `filter()`

`filter(function, iterable)` devuelve un iterador con los elementos para los cuales `function` devuelve `True`.

```python
import random
random.seed(0)
data = [random.randint(-10, 10) for _ in range(5)]
filtered = list(filter(lambda x: x > 0 and x % 2 == 0, data))
print(data)
print(filtered)
```

### Cierres (closures)

Un **cierre** es una función interna que recuerda el entorno en el que fue creada, incluso después de que la función externa haya terminado.

```python
def outer(par):
    loc = par
    def inner():
        return loc
    return inner

var = 1
fun = outer(var)
print(fun())   # 1
```

Se pueden parametrizar:

```python
def make_closure(exp):
    def power(base):
        return base ** exp
    return power

square = make_closure(2)
cube = make_closure(3)

for i in range(5):
    print(i, square(i), cube(i))
```

---

## Manejo de Archivos

### Apertura y cierre

Para trabajar con archivos se utiliza la función `open()`, que devuelve un objeto stream. Es obligatorio cerrar el archivo con `close()`.

```python
stream = open("file.txt", "rt")
# operaciones
stream.close()
```

Se recomienda usar `try...except` para manejar errores.

### Modos de apertura

| Modo | Significado |
|------|-------------|
| `r`  | lectura (el archivo debe existir) |
| `w`  | escritura (se crea o trunca) |
| `a`  | añadir al final (se crea si no existe) |
| `r+` | lectura y escritura (debe existir) |
| `w+` | escritura y lectura (se crea o trunca) |
| `x`  | creación exclusiva (falla si existe) |

Añadir `t` para modo texto (predeterminado) o `b` para modo binario.

### Archivos de texto

#### Lectura

- `read(n)`: lee `n` caracteres (o todo si no se especifica).
- `readline()`: lee una línea.
- `readlines()`: lee todas las líneas y devuelve una lista.
- El objeto stream es iterable: `for line in open('file', 'rt'):`.

Ejemplo: contar caracteres leyendo uno a uno.

```python
try:
    stream = open('text.txt', 'rt')
    char = stream.read(1)
    counter = 0
    while char != '':
        print(char, end='')
        counter += 1
        char = stream.read(1)
    stream.close()
    print("\nCaracteres:", counter)
except Exception as e:
    print("Error:", e)
```

Lectura completa:

```python
try:
    stream = open('text.txt', 'rt')
    content = stream.read()
    counter = len(content)
    print(content)
    print("Caracteres:", counter)
    stream.close()
except Exception as e:
    print("Error:", e)
```

Lectura por líneas:

```python
try:
    stream = open('text.txt', 'rt')
    line = stream.readline()
    counter = 0
    while line != '':
        print(line, end='')
        counter += len(line)
        line = stream.readline()
    stream.close()
    print("\nCaracteres:", counter)
except Exception as e:
    print("Error:", e)
```

Uso de `readlines()` con búfer:

```python
try:
    stream = open('text.txt', 'rt')
    lines = stream.readlines(15)
    while lines:
        for line in lines:
            for char in line:
                print(char, end='')
        lines = stream.readlines(15)
    stream.close()
except Exception as e:
    print("Error:", e)
```

Iteración directa:

```python
try:
    for line in open('text.txt', 'rt'):
        print(line, end='')
except Exception as e:
    print("Error:", e)
```

#### Escritura

El método `write()` escribe una cadena en el archivo. No añade salto de línea automáticamente.

```python
try:
    stream = open('newtext.txt', 'wt')
    for i in range(10):
        stream.write("línea #" + str(i + 1) + "\n")
    stream.close()
except Exception as e:
    print("Error:", e)
```

### Archivos binarios

#### `bytearray`

Es un arreglo mutable de bytes (valores 0-255).

```python
data = bytearray(10)
for i in range(len(data)):
    data[i] = 10 + i

for b in data:
    print(hex(b))
```

#### Escritura

```python
data = bytearray([10, 20, 30, 40, 50])
try:
    stream = open('binfile.bin', 'wb')
    stream.write(data)
    stream.close()
except Exception as e:
    print("Error:", e)
```

#### Lectura

- `readinto(bytearray)`: llena el arreglo con bytes del archivo.
- `read()`: devuelve un objeto `bytes` (inmutable).

```python
data = bytearray(10)
try:
    stream = open('binfile.bin', 'rb')
    stream.readinto(data)
    stream.close()
    print(data)
except Exception as e:
    print("Error:", e)
```

Lectura con `read()`:

```python
try:
    stream = open('binfile.bin', 'rb')
    content = stream.read()
    stream.close()
    print(content)
except Exception as e:
    print("Error:", e)
```

### Diagnóstico de errores

El módulo `errno` proporciona constantes para identificar errores. El objeto de excepción `IOError` (o `OSError`) tiene el atributo `errno`.

```python
import errno

try:
    stream = open("file.txt", "rt")
    stream.close()
except IOError as e:
    if e.errno == errno.ENOENT:
        print("Archivo no encontrado")
    elif e.errno == errno.EACCES:
        print("Permiso denegado")
    else:
        print("Error desconocido")
```

La función `os.strerror(errno)` devuelve el mensaje asociado al código.

```python
import os, errno

try:
    stream = open("file.txt", "rt")
    stream.close()
except IOError as e:
    print(os.strerror(e.errno))
```

### Copia de archivos (ejemplo práctico)

```python
import os

src = input("Archivo origen: ")
try:
    src_stream = open(src, 'rb')
except IOError as e:
    print("No se puede abrir el origen:", os.strerror(e.errno))
    exit(e.errno)

dst = input("Archivo destino: ")
try:
    dst_stream = open(dst, 'wb')
except IOError as e:
    src_stream.close()
    print("No se puede abrir el destino:", os.strerror(e.errno))
    exit(e.errno)

buffer_size = 64 * 1024  # 64 KB
buffer = bytearray(buffer_size)
total = 0

try:
    read_bytes = src_stream.readinto(buffer)
    while read_bytes > 0:
        dst_stream.write(buffer[:read_bytes])
        total += read_bytes
        read_bytes = src_stream.readinto(buffer)
except IOError as e:
    print("Error de copia:", os.strerror(e.errno))
finally:
    src_stream.close()
    dst_stream.close()

print(total, "bytes copiados.")
```

---

## Módulo `os`

Proporciona funciones para interactuar con el sistema operativo.

### Información del sistema

- `os.name`: `'posix'` (Unix), `'nt'` (Windows) o `'java'`.
- `os.uname()`: devuelve información detallada (disponible en Unix).

```python
import os
print(os.name)
print(os.uname())  # solo Unix
```

### Directorios

- `os.getcwd()`: devuelve el directorio de trabajo actual.
- `os.chdir(path)`: cambia el directorio actual.
- `os.listdir(path='.')`: lista el contenido de un directorio.

#### Crear directorios

- `os.mkdir(path)`: crea un directorio (falla si ya existe).
- `os.makedirs(path)`: crea directorios de forma recursiva.

```python
import os

os.makedirs("mi_dir/sub_dir")
os.chdir("mi_dir")
print(os.getcwd())          # .../mi_dir
os.chdir("sub_dir")
print(os.getcwd())          # .../mi_dir/sub_dir
```

#### Eliminar directorios

- `os.rmdir(path)`: elimina un directorio vacío.
- `os.removedirs(path)`: elimina recursivamente directorios vacíos.

```python
os.rmdir("mi_dir")  # solo si está vacío
os.removedirs("mi_dir/sub_dir")  # elimina ambos si están vacíos
```

### `os.system()`

Ejecuta un comando del sistema.

```python
os.system("mkdir nuevo_dir")  # en Unix/Windows
```

---

## Módulo `datetime`

Proporciona clases para manejar fechas y horas.

### Clase `date`

```python
from datetime import date

d = date(2020, 9, 29)
print(d.year, d.month, d.day)   # 2020 9 29
print(d)                         # 2020-09-29
```

- `date.today()`: fecha actual.
- `date.fromtimestamp(timestamp)`: crea una fecha a partir de una marca de tiempo (segundos desde la época Unix).

```python
import time
from datetime import date

timestamp = time.time()
d = date.fromtimestamp(timestamp)
print(d)
```

- `date.fromisoformat('YYYY-MM-DD')`: desde cadena ISO.

```python
d = date.fromisoformat('2020-09-29')
```

- `date.replace(year, month, day)`: devuelve una nueva fecha con cambios.

```python
d = date(2020, 9, 29)
d2 = d.replace(month=1, day=16)
print(d2)  # 2020-01-16
```

- `date.weekday()`: lunes=0, domingo=6.
- `date.isoweekday()`: lunes=1, domingo=7.

### Clase `time`

```python
from datetime import time

t = time(14, 53, 20, 1)
print(t.hour, t.minute, t.second, t.microsecond)
print(t)  # 14:53:20.000001
```

### Clase `datetime`

Combina fecha y hora.

```python
from datetime import datetime

dt = datetime(2020, 9, 29, 14, 53, 0)
print(dt)                 # 2020-09-29 14:53:00
print(dt.date())          # 2020-09-29
print(dt.time())          # 14:53:00
```

Métodos para obtener la fecha/hora actual:

- `datetime.today()`
- `datetime.now()`
- `datetime.utcnow()`

```python
from datetime import datetime

print(datetime.today())
print(datetime.now())
print(datetime.utcnow())
```

### Timestamp

```python
dt = datetime(2020, 10, 4, 14, 55)
print(dt.timestamp())   # segundos desde la época
```

### Formateo con `strftime`

El método `strftime` acepta un formato con directivas como `%Y`, `%m`, `%d`, `%H`, `%M`, `%S`, etc.

```python
from datetime import datetime

dt = datetime(2020, 9, 29, 14, 53, 0)
print(dt.strftime("%Y/%m/%d %H:%M:%S"))         # 2020/09/29 14:53:00
print(dt.strftime("%y/%B/%d %H:%M:%S %p"))      # 20/September/29 14:53:00 PM
```

### `strptime`

Crea un objeto `datetime` a partir de una cadena y un formato.

```python
dt = datetime.strptime("2019/11/04 14:53:00", "%Y/%m/%d %H:%M:%S")
print(dt)
```

### Módulo `time`

Además de `datetime`, existe el módulo `time` con funciones:

- `time.sleep(segundos)`
- `time.time()`: timestamp actual.
- `time.ctime([segundos])`: convierte timestamp a cadena legible.
- `time.gmtime([segundos])`: devuelve `struct_time` en UTC.
- `time.localtime([segundos])`: devuelve `struct_time` en hora local.
- `time.asctime([struct_time])`: convierte `struct_time` a cadena.
- `time.mktime(struct_time)`: convierte `struct_time` a timestamp.

```python
import time

print(time.ctime())
print(time.gmtime())
print(time.localtime())
```

### `timedelta`

Representa una diferencia de tiempo.

```python
from datetime import datetime, timedelta

dt1 = datetime(2020, 11, 4, 14, 53, 0)
dt2 = datetime(2019, 11, 4, 14, 53, 0)
delta = dt1 - dt2
print(delta)          # 366 days, 0:00:00

# Creación directa
delta = timedelta(days=2, hours=3, weeks=2)
print(delta.days)     # 16 (2 días + 14 días)
print(delta.seconds)  # 10800 (3 horas)

# Operaciones
delta2 = delta * 2
print(delta2)
fecha_futura = dt1 + delta2
print(fecha_futura)
```

---

## Módulo `calendar`

### Mostrar calendarios

- `calendar.calendar(year)`: devuelve el calendario anual.
- `calendar.prcal(year)`: imprime el calendario anual.
- `calendar.month(year, month)`: devuelve el calendario mensual.
- `calendar.prmonth(year, month)`: imprime el calendario mensual.

```python
import calendar
print(calendar.calendar(2020))
calendar.prcal(2020)
print(calendar.month(2020, 9))
```

### Configuración del primer día de la semana

- `calendar.setfirstweekday(weekday)`: donde 0=lunes, 6=domingo (constantes `calendar.MONDAY`, `calendar.SUNDAY`).

```python
calendar.setfirstweekday(calendar.SUNDAY)
calendar.prmonth(2020, 12)
```

### Funciones útiles

- `calendar.weekday(year, month, day)`: devuelve el día de la semana (0=lunes, ...).
- `calendar.weekheader(width)`: devuelve los nombres abreviados de los días de la semana.
- `calendar.isleap(year)`: `True` si es bisiesto.
- `calendar.leapdays(y1, y2)`: número de años bisiestos en `range(y1, y2)`.

```python
print(calendar.weekday(2020, 12, 24))   # 3 (jueves)
print(calendar.weekheader(2))           # Mo Tu We Th Fr Sa Su
print(calendar.isleap(2020))            # True
print(calendar.leapdays(2010, 2021))    # 3
```

### Clase `Calendar`

Permite un control más fino.

```python
c = calendar.Calendar(firstweekday=0)  # 0=lunes
for day in c.iterweekdays():
    print(day, end=' ')                # 0 1 2 3 4 5 6
```

- `itermonthdates(year, month)`: iterador de `datetime.date` para el mes, incluyendo días de semanas completas.
- `itermonthdays(year, month)`: iterador con números de día (0 para días fuera del mes).
- `itermonthdays2(year, month)`: tuplas `(día, weekday)`.
- `itermonthdays3(year, month)`: tuplas `(año, mes, día)` (Python 3.7+).
- `itermonthdays4(year, month)`: tuplas `(año, mes, día, weekday)` (Python 3.7+).
- `monthdays2calendar(year, month)`: lista de semanas, cada semana es lista de tuplas `(día, weekday)`.

```python
for date in c.itermonthdates(2019, 11):
    print(date)
```

---

## Laboratorios

### 1. Histograma de frecuencia de caracteres

Escribe un programa que pida el nombre de un archivo, lea su contenido y cuente la frecuencia de cada letra latina (sin distinguir mayúsculas/minúsculas). Imprime un histograma en orden alfabético solo para letras con frecuencia > 0.

```python
from os import strerror

filename = input("Nombre del archivo: ")
try:
    with open(filename, 'rt') as f:
        content = f.read()
except IOError as e:
    print("Error:", strerror(e.errno))
    exit()

hist = {}
for ch in content:
    if ch.isalpha():
        ch = ch.lower()
        hist[ch] = hist.get(ch, 0) + 1

for ch in sorted(hist):
    print(f"{ch} -> {hist[ch]}")
```

### 2. Histograma ordenado por frecuencia

Modifica el programa anterior para que la salida se ordene por frecuencia (de mayor a menor) y se guarde en un archivo con extensión `.hist`.

```python
# ... lectura y conteo igual ...
sorted_hist = sorted(hist.items(), key=lambda item: item[1], reverse=True)
out_filename = filename + '.hist'
try:
    with open(out_filename, 'wt') as f:
        for ch, count in sorted_hist:
            f.write(f"{ch} -> {count}\n")
except IOError as e:
    print("Error al guardar:", strerror(e.errno))
```

### 3. Evaluación de resultados de estudiantes

El archivo contiene líneas con: nombre, apellido, puntuación. Suma los puntos por estudiante y muestra un informe ordenado alfabéticamente.

```python
class FileError(Exception):
    pass

class LineError(Exception):
    pass

class EmptyFileError(Exception):
    pass

filename = input("Nombre del archivo: ")
data = {}
try:
    with open(filename, 'rt') as f:
        lines = f.readlines()
        if not lines:
            raise EmptyFileError("El archivo está vacío.")
        for line in lines:
            parts = line.strip().split()
            if len(parts) != 3:
                raise LineError("Línea inválida: " + line)
            name = parts[0] + ' ' + parts[1]
            try:
                score = float(parts[2])
            except ValueError:
                raise LineError("Puntuación no numérica: " + line)
            data[name] = data.get(name, 0.0) + score
except IOError as e:
    print("Error de archivo:", e)
    exit()
except (LineError, EmptyFileError) as e:
    print("Error en datos:", e)
    exit()

for name in sorted(data.keys()):
    print(f"{name:<12} {data[name]:.1f}")
```

### 4. Búsqueda recursiva de directorios con `os`

Escribe una función `find(path, dir)` que busque recursivamente un directorio con el nombre `dir` a partir de `path` y muestre las rutas absolutas de todas las ocurrencias.

```python
import os

def find(path, target):
    for entry in os.listdir(path):
        full = os.path.join(path, entry)
        if os.path.isdir(full):
            if entry == target:
                print(os.path.abspath(full))
            find(full, target)

find("./tree", "python")
```

### 5. Formateo de fecha y hora

Crea un objeto `datetime` para el 4 de noviembre de 2020 a las 14:53:00 y muéstralo en varios formatos usando `strftime`.

```python
from datetime import datetime

dt = datetime(2020, 11, 4, 14, 53, 0)

print(dt.strftime("%Y/%m/%d %H:%M:%S"))
print(dt.strftime("%y/%B/%d %H:%M:%S %p"))
print(dt.strftime("%a, %Y %b %d"))
print(dt.strftime("%A, %Y %B %d"))
print("Día de la semana:", dt.strftime("%w"))         # 3 = miércoles
print("Día del año:", dt.strftime("%j"))              # 309
print("Número de semana:", dt.strftime("%W"))         # 44
```

### 6. Conteo de días de semana en un año

Extiende `calendar.Calendar` con un método que cuente cuántas veces aparece un día de la semana dado en un año.

```python
import calendar

class MyCalendar(calendar.Calendar):
    def count_weekday_in_year(self, year, weekday):
        count = 0
        for month in range(1, 13):
            for week in self.monthdays2calendar(year, month):
                for day, wd in week:
                    if day != 0 and wd == weekday:
                        count += 1
        return count

cal = MyCalendar()
print(cal.count_weekday_in_year(2019, 0))  # lunes -> 52
print(cal.count_weekday_in_year(2000, 6))  # domingo -> 53
```

---

## Notas finales

- Los generadores y las comprensiones son herramientas fundamentales para trabajar con secuencias de manera eficiente.
- El manejo de archivos requiere siempre considerar las excepciones y cerrar los recursos adecuadamente.
- Los módulos `os`, `datetime`, `time` y `calendar` proporcionan una amplia gama de funcionalidades para interactuar con el sistema operativo y manejar fechas.
- Los laboratorios incluidos refuerzan los conceptos clave y son ideales para práctica autónoma.

---

## Prueba de Módulos, Paquetes y Pip

A continuación se presentan 16 ejercicios resueltos sobre módulos, paquetes, funciones lambda, generadores, manejo de archivos, fechas y el módulo `calendar`. Cada ejercicio incluye la pregunta, las opciones, el razonamiento, la respuesta correcta y una explicación detallada para consolidar el aprendizaje.

---

### Ejercicio 1: Palabra clave para función anónima

**Pregunta:** ¿Qué palabra clave reservada usarías para definir una función anónima?

- lambda
- afun
- yield
- def

**Respuesta correcta:** `lambda`

**Explicación:**

En Python, una función anónima (también llamada función lambda) se define con la palabra clave `lambda`. Su sintaxis es:

```python
lambda argumentos: expresión
```

A diferencia de `def`, que crea una función con un nombre, `lambda` crea una función sin nombre que puede ser utilizada en línea, por ejemplo, como argumento de `map`, `filter` o `sorted`. Las funciones `lambda` están limitadas a una única expresión, cuyo resultado es devuelto implícitamente.

---

### Ejercicio 2: Características de la función `lambda`

**Pregunta:** Selecciona las sentencias verdaderas. (Selecciona dos respuestas)

- [ ] La función `lambda` puede aceptar cualquier número de argumentos
- [ ] La función `lambda` puede aceptar un máximo de dos argumentos
- [ ] La función `lambda` puede evaluar sólo una expresión
- [ ] La función `lambda` puede evaluar múltiples expresiones

**Respuesta correcta:**
- [x] La función `lambda` puede aceptar cualquier número de argumentos
- [x] La función `lambda` puede evaluar sólo una expresión

**Explicación:**

- **Número de argumentos:** `lambda` puede recibir cero, uno o más argumentos, e incluso parámetros variables (`*args`, `**kwargs`). No hay un límite máximo.
- **Cuerpo:** Solo puede contener una expresión, no sentencias (como `if-else` en bloque, bucles o asignaciones). El resultado de la expresión es el valor de retorno.

Ejemplo válido:

```python
f = lambda x, y, *args: x + y + sum(args)
```

---

### Ejercicio 3: Uso de `map` y `lambda` para transformar una lista en tupla

**Pregunta:** Observa el código a continuación:

```python
my_list = [1, 2, 3]
# Insertar línea de código aquí.
print(foo)
```

¿Qué fragmento insertarías para que el programa genere el siguiente resultado (tupla)?

`(1, 4, 27)`

- [ ] `foo = list(map(lambda x: x**x, my_list))`
- [ ] `foo = tuple(map(lambda x: x**x, my_list))`
- [ ] `foo = tuple(map(lambda: x: x**x, my_list))`
- [ ] `foo = list(map(lambda x: x**x, my_list))`

**Respuesta correcta:** `foo = tuple(map(lambda x: x**x, my_list))`

**Explicación:**

La función `map` aplica una función a cada elemento de un iterable y devuelve un iterador. Para obtener una tupla, se usa `tuple()` alrededor de `map`. La función lambda debe tomar un argumento `x` y devolver `x**x`. Las otras opciones: la primera y la última generan una lista (no tupla), y la tercera tiene un error de sintaxis (`lambda: x:`).

---

### Ejercicio 4: Filtrado con `filter` y `lambda` para obtener una lista

**Pregunta:** Observa el código a continuación:

```python
my_tuple = (0, 1, 2, 3, 4, 5, 6)
# Insertar línea de código aquí.
print(foo)
```

¿Qué fragmento insertarías para que el programa genere el siguiente resultado (lista)?

`[2, 3, 4, 5, 6]`

- [ ] `foo = list(filter(lambda x: x-0 and x-1, my_tuple))`
- [ ] `foo = tuple(filter(lambda x: x>1, my_tuple))`
- [ ] `foo = list(filter(lambda x: x==0 and x==1, my_tuple))`
- [ ] `foo = tuple(filter(lambda x: x-0 and x-1, my_tuple))`

**Respuesta correcta:** `foo = list(filter(lambda x: x-0 and x-1, my_tuple))`

**Explicación:**

- `filter` evalúa la función lambda para cada elemento; si el resultado es truthy, el elemento se incluye.
- La expresión `x-0` es equivalente a `x`, y `x-1` es `x-1`. Para `x=0`, `0 and -1` da `0` (falso); para `x=1`, `1 and 0` da `0` (falso); para valores mayores, el `and` devuelve el segundo operando (distinto de 0), que es truthy. Así se filtran 0 y 1.
- La conversión a `list` produce exactamente la salida deseada.

---

### Ejercicio 5: Generador y slicing inverso

**Pregunta:** ¿Cuál es el resultado esperado de ejecutar el siguiente código?

```python
def I():
    s = 'abcdef'
    for c in s[::-2]:
        yield c

for x in I():
    print(x, end='')
```

- [ ] Imprimirá `bdf`
- [ ] Imprimirá `ace`
- [ ] Imprimirá `abcdef`
- [ ] Imprimirá una línea vacía.

**Respuesta correcta (más cercana):** `bdf` (aunque el resultado real es `fdb`)

**Explicación:**

El slicing `s[::-2]` toma la cadena desde el final (`'f'`) y avanza de 2 en 2 hacia atrás: índices 5 → `'f'`, 3 → `'d'`, 1 → `'b'`. El generador produce `fdb`. Si el ejercicio espera una de las opciones, la que más se aproxima es `bdf` (mismos caracteres, pero orden invertido). Las otras opciones son incorrectas.

---

### Ejercicio 6: Generador con concatenación y error de indentación

**Pregunta:** ¿Cuál es el resultado esperado al ejecutar el siguiente código?

```python
def fun(n):
    s = 't'
    for i in range(n):
    s += s
    yield s

for x in fun(2):
    print(x, end=' ');
```

- [ ] Imprimirá `+++++`
- [ ] Imprimirá `++`
- [ ] Imprimirá `+++`
- [ ] Imprimirá `+`

**Respuesta correcta (asumiendo corrección habitual):** Imprimirá `+++`

**Explicación:**

Tal como está escrito, el código es inválido por indentación. Si se corrige el indentado y se usa `s = '+'` y `s += '+'`, la función genera una cadena que duplica el número de signos `+` en cada iteración. Con `n=2`, el resultado es tres signos. La opción `+++` es la que el examinador espera.

---

### Ejercicio 7: Closures y multiplicación de cadenas

**Pregunta:** ¿Cuál es el resultado esperado de ejecutar el siguiente código?

```python
def o(p):
    def q():
        return '*' * p
    return q

r = o(1)
s = o(2)
print(r() + s())
```

- [ ] Imprimirá `*`
- [ ] Imprimirá `****`
- [ ] Imprimirá `**`
- [ ] Imprimirá `***`

**Respuesta correcta:** Imprimirá `***`

**Explicación:**

- `o(p)` devuelve una función (`q`) que captura el valor de `p` (closure).
- `r = o(1)` → `r()` retorna `'*' * 1 = '*'`.
- `s = o(2)` → `s()` retorna `'*' * 2 = '**'`.
- `print(r() + s())` → `'*' + '**' = '***'`.

---

### Ejercicio 8: Modos de apertura de archivos que permiten lectura

**Pregunta:** ¿Cuáles de los siguientes modos de apertura te permiten realizar operaciones de **lectura**? (Selecciona dos respuestas)

- [ ] r+
- [ ] a
- [ ] r
- [ ] w

**Respuesta correcta:** `r+` y `r`

**Explicación:**

- `r`: modo lectura exclusiva, el archivo debe existir.
- `r+`: lectura y escritura, el archivo debe existir.
- `w`: escritura, crea o sobrescribe, no permite lectura.
- `a`: escritura al final (append), no permite lectura.

---

### Ejercicio 9: Significado de `errno.EEXIST`

**Pregunta:** ¿Cuál es el significado del valor representado por `errno.EEXIST`?

- [ ] Número de archivo incorrecto
- [ ] Archivo existente
- [ ] Archivo inexistente
- [ ] Permiso denegado

**Respuesta correcta:** Archivo existente

**Explicación:**

`errno.EEXIST` es una constante del módulo `errno` que indica que un archivo o directorio ya existe. Es útil para manejar excepciones de forma granular, por ejemplo:

```python
import os, errno
try:
    os.mkdir('directorio')
except OSError as e:
    if e.errno == errno.EEXIST:
        print('El directorio ya existe')
    else:
        raise
```

---

### Ejercicio 10: Creación de `bytearray` con longitud

**Pregunta:** ¿Cuál es el resultado esperado del siguiente código?

```python
b = bytearray(3)
print(b)
```

- [ ] `bytearray(0, 0, 0)`
- [ ] `bytearray(b'\x00\x00\x00')`
- [ ] `bytearray(b'3')`
- [ ] `3`

**Respuesta correcta:** `bytearray(b'\x00\x00\x00')`

**Explicación:**

`bytearray(3)` crea un arreglo de bytes de longitud 3, inicializado con tres bytes nulos (`\x00`). La representación estándar es `bytearray(b'\x00\x00\x00')`.

---

### Ejercicio 11: Cambio de directorio y rutas relativas

**Pregunta:** ¿Cuál es el resultado esperado del siguiente código?

```python
import os

os.mkdir('pictures')
os.chdir('pictures')
os.mkdir('thumbnails')
os.chdir('thumbnails')
os.mkdir('tmp')
os.chdir('../../')

print(os.getcwd())
```

- [ ] Imprimirá la ruta al directorio pictures
- [ ] Imprimirá la ruta al directorio tmp
- [ ] Imprimirá la ruta al directorio root
- [ ] Imprimirá la ruta al directorio thumbnails

**Respuesta correcta:** Imprimirá la ruta al directorio root (directorio inicial)

**Explicación:**

Se crean `pictures`, `thumbnails` y `tmp`, y luego `os.chdir('../../')` sube dos niveles, volviendo al directorio inicial. `os.getcwd()` devuelve esa ruta.

---

### Ejercicio 12: `os.listdir()` y contenido del directorio actual

**Pregunta:** ¿Cuál es el resultado esperado del siguiente código?

```python
import os

os.mkdir('thumbnails')
os.chdir('thumbnails')

sizes = ['small', 'medium', 'large']

for size in sizes:
    os.mkdir(size)

print(os.listdir())
```

- `['.', 'large', 'small', 'medium']`
- `['.', '..', 'large', 'small', 'medium']`
- `[ 'large', 'small', 'medium' ]`

**Respuesta correcta:** `[ 'large', 'small', 'medium' ]`

**Explicación:**

`os.listdir()` devuelve los nombres de las entradas del directorio actual sin incluir `'.'` ni `'..'`. El orden no está garantizado, pero el contenido son esos tres nombres.

---

### Ejercicio 13: Resta de fechas y objetos `timedelta`

**Pregunta:** ¿Cuál es el resultado esperado del siguiente código?

```python
from datetime import date
date_1 = date(1992, 1, 16)
date_2 = date(1991, 2, 5)
print(date_1 - date_2)
```

- [ ] `345`
- [ ] `345 days`
- [ ] `345 days, 0:00:00`
- [ ] `345, 0:00:00`

**Respuesta correcta:** `345 days, 0:00:00`

**Explicación:**

Restar dos objetos `date` produce un `timedelta`. La representación por defecto de `timedelta` es `X days, HH:MM:SS`. La diferencia entre el 16 de enero de 1992 y el 5 de febrero de 1991 es de 345 días, por lo que la salida es `345 days, 0:00:00`.

---

### Ejercicio 14: Formateo de fechas con `strftime`

**Pregunta:** ¿Cuál es el resultado esperado del siguiente código?

```python
from datetime import datetime

datetime = datetime(2019, 11, 27, 11, 27, 22)
print(datetime.strftime('%y/%B/%d %H:%M:%S'))
```

- [ ] `2019/Nov/27 11:27:22`
- [ ] `2019/11/27 11:27:22`
- [ ] `19/November/27 11:27:22`
- [ ] `19/11/27 11:27:22`

**Respuesta correcta:** `19/November/27 11:27:22`

**Explicación:**

- `%y` → año con 2 dígitos: `19`
- `%B` → nombre completo del mes: `November`
- `%d` → día con 2 dígitos: `27`
- `%H:%M:%S` → hora, minuto, segundo: `11:27:22`

El resto de caracteres se mantienen literalmente.

---

### Ejercicio 15: Cabecera de días de la semana con `calendar.weekheader`

**Pregunta:** ¿Qué programa producirá la siguiente salida?

`Mo Tu We Th Fr Sa Su`

**A:**
```python
import calendar
print(calendar.weekheader(2))
```

**B:**
```python
import calendar
print(calendar.weekheader())
```

**C:**
```python
import calendar
print(calendar.weekheader(3))
```

**D:**
```python
import calendar
print(calendar.week)
```

- [ ] B
- [ ] A
- [ ] C
- [ ] D

**Respuesta correcta:** A

**Explicación:**

`calendar.weekheader(2)` devuelve los nombres de los días de la semana abreviados con un ancho de **2 caracteres** (Mo, Tu, We, Th, Fr, Sa, Su). Con ancho 3 serían abreviaturas de tres letras. `weekheader()` sin argumento genera error, y `calendar.week` es una constante numérica.

---

### Ejercicio 16: Iteración sobre días de la semana con `iterweekdays`

**Pregunta:** ¿Cuál es el resultado esperado del siguiente código?

```python
import calendar

c = calendar.Calendar()

for weekday in c.iterweekdays():
    print(weekday, end=" ")
```

- `1 2 3 4 5 6 7`
- `Su Mo Tu We Th Fr Sa`
- `0 1 2 3 4 5 6`
- `Mo Tu We Th Fr Sa Su`

**Respuesta correcta:** `0 1 2 3 4 5 6`

**Explicación:**

`Calendar()` por defecto tiene primer día lunes (0). `iterweekdays()` devuelve los números de los días de la semana en orden, comenzando por el primer día. La salida es una secuencia de números, no nombres.

> Gracias por leer.