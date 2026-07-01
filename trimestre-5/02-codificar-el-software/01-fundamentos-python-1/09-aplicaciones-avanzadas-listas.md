
# Aplicaciones Avanzadas con Listas

> Esto ya suena más "complejo"...

Aprenderemos sobre arreglos, listas anidadas y listas por comprensión en Python.

---

## Tabla de contenido

1. [Listas por comprensión](#1-listas-por-comprensión)
2. [Listas anidadas (arreglos bidimensionales)](#2-listas-anidadas-arreglos-bidimensionales)
   - [Creación de un tablero de ajedrez](#creación-de-un-tablero-de-ajedrez)
   - [Acceso a elementos](#acceso-a-elementos)
3. [Aplicaciones prácticas](#3-aplicaciones-prácticas)
   - [Registro de temperaturas](#registro-de-temperaturas)
   - [Hotel: arreglo tridimensional](#hotel-arreglo-tridimensional)
4. [Resumen de la sección](#4-resumen-de-la-sección)
5. [Ejercicios propuestos](#5-ejercicios-propuestos)

---

## 1. Listas por comprensión

Las listas por comprensión (list comprehensions) permiten crear nuevas listas a partir de existentes de forma concisa y elegante. La sintaxis general es:

```python
[expresion for elemento in lista if condicion]
```

Equivale a:

```python
for elemento in lista:
    if condicion:
        expresion
```

### Ejemplo 1: Cuadrados de los primeros 10 números

```python
squares = [x ** 2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### Ejemplo 2: Potencias de 2

```python
twos = [2 ** i for i in range(8)]
print(twos)  # [1, 2, 4, 8, 16, 32, 64, 128]
```

### Ejemplo 3: Filtrado de elementos impares

```python
odds = [x for x in squares if x % 2 != 0]
print(odds)  # [1, 9, 25, 49, 81]
```

### Ejemplo 4: Creación de una fila de peones

```python
WHITE_PAWN = "♙"
row = [WHITE_PAWN for i in range(8)]
print(row)  # ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙']
```

---

## 2. Listas anidadas (arreglos bidimensionales)

Una lista puede contener otras listas como elementos, creando estructuras multidimensionales. Esto es útil para representar tablas, matrices o tableros.

### Creación de un tablero de ajedrez

Un tablero de ajedrez tiene 8 filas y 8 columnas. Podemos representarlo como una lista de listas.

**Método tradicional con bucles:**

```python
EMPTY = "·"
board = []

for i in range(8):
    row = [EMPTY for i in range(8)]
    board.append(row)
```

**Con comprensión de listas anidadas (más compacto):**

```python
board = [[EMPTY for i in range(8)] for j in range(8)]
```

El resultado es una matriz de 8x8 llena de `EMPTY`.

### Acceso a elementos

Se utilizan dos índices: el primero para la fila, el segundo para la columna.

```python
# Colocar torres en las esquinas
ROOK = "♖"
board[0][0] = ROOK
board[0][7] = ROOK
board[7][0] = ROOK
board[7][7] = ROOK

# Caballo en C4 (fila 4, columna 2)
KNIGHT = "♘"
board[4][2] = KNIGHT

# Peón en E5 (fila 3, columna 4)
PAWN = "♙"
board[3][4] = PAWN
```

---

## 3. Aplicaciones prácticas

### Registro de temperaturas

Imaginemos que una estación meteorológica registra la temperatura cada hora durante un mes (31 días). Necesitamos una matriz de 31 filas (días) por 24 columnas (horas).

```python
# Crear la matriz llena de ceros
temps = [[0.0 for h in range(24)] for d in range(31)]

# (Aquí se actualizaría la matriz con datos reales)

# Temperatura promedio al mediodía (hora 11)
total = 0.0
for day in temps:
    total += day[11]
average = total / 31
print("Temperatura promedio al mediodía:", average)

# Temperatura más alta del mes
highest = -100.0
for day in temps:
    for temp in day:
        if temp > highest:
            highest = temp
print("La temperatura más alta fue:", highest)

# Días con temperatura al mediodía > 20°C
hot_days = 0
for day in temps:
    if day[11] > 20.0:
        hot_days += 1
print(hot_days, "fueron los días calurosos.")
```

### Hotel: arreglo tridimensional

Un hotel tiene 3 edificios, 15 pisos cada uno y 20 habitaciones por piso. Usamos una lista tridimensional para representar el estado de ocupación.

```python
# Crear la matriz 3D con todas las habitaciones libres (False)
rooms = [[[False for r in range(20)] for f in range(15)] for t in range(3)]

# Reservar habitación: edificio 2 (índice 1), piso 10 (índice 9), habitación 14 (índice 13)
rooms[1][9][13] = True

# Desocupar habitación: edificio 1 (índice 0), piso 5 (índice 4), habitación 2 (índice 1)
rooms[0][4][1] = False

# Contar habitaciones libres en el piso 15 del tercer edificio
vacancy = 0
for room_number in range(20):
    if not rooms[2][14][room_number]:
        vacancy += 1
print("Habitaciones disponibles en el piso 15 del edificio 3:", vacancy)
```

---

## 4. Resumen de la sección

- **Comprensión de listas:** sintaxis compacta para crear listas a partir de iterables con o sin filtros.
- **Listas anidadas:** permiten representar matrices y estructuras multidimensionales.
- **Acceso:** usar índices separados para cada dimensión.
- **Aplicaciones:** adecuadas para datos tabulares (temperaturas, tableros, inventarios, etc.).

---

> Si vuelvo a leer este documento, un recordatorio de habilidades puede ser:

## 5. Propuestas

1. Crea una lista de los primeros 20 números pares usando comprensión de listas.
2. Dada una lista de palabras, crea una nueva lista que contenga solo las palabras con más de 5 letras.
3. Genera una matriz de 5x5 con números aleatorios entre 1 y 100.
4. Escribe un programa que cuente cuántas veces aparece un valor específico en una matriz bidimensional.
5. Modela un cine con 10 filas y 15 butacas por fila (usando `True` para ocupada y `False` para libre). Implementa funciones para reservar, cancelar y mostrar el estado de la sala.

---