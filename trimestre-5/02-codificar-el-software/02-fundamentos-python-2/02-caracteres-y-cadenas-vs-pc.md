# Cadenas, Caracteres y Excepciones

Mis apuntes completos de estudio sobre manejo de cadenas, codificación de caracteres y gestión de excepciones en Python.

---

## 1. Codificación de Caracteres

### 1.1. ASCII

Las computadoras almacenan caracteres como números. El estándar **ASCII** (*American Standard Code for Information Interchange*) asigna un número único (0–127) a cada carácter latino básico, dígitos y símbolos de control.

- Los códigos 0–31 son caracteres de control (no imprimibles).
- El espacio tiene el código 32.
- Los dígitos `0`–`9` ocupan los códigos 48–57.
- Las mayúsculas `A`–`Z` ocupan 65–90.
- Las minúsculas `a`–`z` ocupan 97–122.
- La diferencia entre mayúscula y minúscula es siempre 32 (ej. `'a'` – `'A'` = 32).

ASCII utiliza 7 bits (128 caracteres). Su extensión de 8 bits (256 caracteres) se llama ASCII extendido, pero presenta ambigüedades según la página de códigos.

### 1.2. Unicode y UTF-8

Unicode es un estándar que asigna un punto de código único a cada carácter de todos los sistemas de escritura del mundo, incluyendo emojis y símbolos. Los primeros 128 puntos de código coinciden con ASCII.

**UTF-8** (Unicode Transformation Format, 8 bits) es la codificación más utilizada para Unicode. Es de ancho variable:

- Caracteres ASCII (0–127) se codifican con 1 byte.
- Caracteres latinos con tilde y otros alfabetos (hasta 0x7FF) con 2 bytes.
- El resto (incluyendo emojis) con 3 o 4 bytes.

Ventajas: compatible con ASCII, eficiente en espacio, sin necesidad de BOM (aunque algunos editores lo añaden).

**UCS-4** usa 4 bytes por carácter, desperdicia espacio pero es simple.

### 1.3. BOM (Byte Order Mark)

Es una marca opcional al inicio de un archivo que indica el orden de bytes y la codificación (UTF-8, UTF-16, etc.). En UTF-8, el BOM es opcional y suele ser `EF BB BF`.

---

## 2. Cadenas en Python

### 2.1. Definición y características

- **Inmutables**: no se pueden modificar después de creadas.
- **Secuencias**: soportan indexación, rebanado e iteración.
- Pueden ser de una línea (`'texto'` o `"texto"`) o multilínea (con triples comillas `'''...'''` o `"""..."""`).
- Las cadenas multilínea incluyen el salto de línea (`\n`) como carácter.

**Longitud**: `len(cadena)` devuelve el número de caracteres (incluyendo escapes como `\n`).

### 2.2. Operadores básicos

- **Concatenación**: `+` une dos cadenas.
- **Repetición**: `*` repite una cadena un número entero de veces.
- **Atajos**: `+=` y `*=` son válidos.

Ejemplo:

```python
print(3 * 'abc' + 'xyz')   # abcabcabcxyz
```

### 2.3. Indexación y rebanado

- Índices positivos desde 0, negativos desde el final.
- Rebanadas: `cadena[inicio:fin:paso]` devuelve una nueva cadena.

Ejemplo:

```python
s = "abcdefg"
print(s[1:4])   # bcd
print(s[::-1])  # gfedcba
```

### 2.4. Iteración y operadores `in`/`not in`

- Se puede iterar sobre cada carácter con `for ch in cadena:`.
- `subcadena in cadena` devuelve `True` si la subcadena está contenida.
- `not in` es la negación.

### 2.5. Inmutabilidad y consecuencias

- No se puede eliminar un carácter con `del`.
- No hay métodos `append()` ni `insert()`.
- Para modificar una cadena se crea una nueva copia.

Ejemplo de construcción por concatenación:

```python
alphabet = ""
for i in range(26):
    alphabet += chr(ord('a') + i)
print(alphabet)  # abcdefghijklmnopqrstuvwxyz
```

---

## 3. Funciones y métodos útiles para cadenas

### 3.1. Funciones integradas

- `len(cadena)`: longitud.
- `ord(caracter)`: devuelve el punto de código Unicode del carácter (debe ser una cadena de un carácter).
- `chr(codigo)`: devuelve el carácter correspondiente al punto de código.
- `min(cadena)`: devuelve el carácter con el menor punto de código.
- `max(cadena)`: devuelve el carácter con el mayor punto de código.
- `list(cadena)`: convierte la cadena en una lista de caracteres.

### 3.2. Métodos de transformación

| Método | Descripción |
|--------|-------------|
| `capitalize()` | Primera letra mayúscula, resto minúsculas. |
| `lower()` | Todas las letras minúsculas. |
| `upper()` | Todas las letras mayúsculas. |
| `swapcase()` | Invierte mayúsculas/minúsculas. |
| `title()` | Primera letra de cada palabra mayúscula. |
| `center(ancho[, relleno])` | Centra la cadena en un campo de `ancho` caracteres (relleno opcional). |
| `strip()` | Elimina espacios en blanco al inicio y final. |
| `lstrip()` | Elimina espacios en blanco al inicio. |
| `rstrip()` | Elimina espacios en blanco al final. |
| `replace(old, new[, count])` | Reemplaza todas las ocurrencias de `old` por `new` (opcional `count`). |

### 3.3. Métodos de búsqueda y comprobación

| Método | Descripción |
|--------|-------------|
| `find(sub[, inicio[, fin]])` | Devuelve el índice de la primera aparición de `sub`, o -1 si no existe. |
| `rfind(sub[, inicio[, fin]])` | Índice de la última aparición. |
| `index(sub)` | Como `find()`, pero lanza `ValueError` si no encuentra. |
| `count(sub)` | Número de ocurrencias de `sub`. |
| `startswith(prefijo)` | ¿Empieza con `prefijo`? |
| `endswith(sufijo)` | ¿Termina con `sufijo`? |
| `isalnum()` | ¿Solo caracteres alfanuméricos? |
| `isalpha()` | ¿Solo letras? |
| `isdigit()` | ¿Solo dígitos? |
| `islower()` | ¿Todas las letras son minúsculas? |
| `isupper()` | ¿Todas las letras son mayúsculas? |
| `isspace()` | ¿Solo espacios en blanco? |

### 3.4. Métodos de división y unión

| Método | Descripción |
|--------|-------------|
| `split([sep])` | Divide la cadena en una lista usando `sep` como separador (por defecto espacios en blanco). |
| `join(lista)` | Une los elementos de `lista` usando la cadena como separador. |

Ejemplo:

```python
palabras = ["Hola", "mundo"]
print(" ".join(palabras))   # Hola mundo
```

---

## 4. Comparación y ordenamiento de cadenas

### 4.1. Comparación lexicográfica

Python compara cadenas carácter por carácter según sus puntos de código Unicode.

- `==` y `!=` verifican igualdad.
- `<`, `>`, `<=`, `>=` comparan lexicográficamente.
- Si una cadena es prefijo de otra, la más corta es menor.

Ejemplos:

```python
'alpha' < 'alphabet'   # True (porque 'alpha' es prefijo)
'beta' > 'Beta'        # True (las mayúsculas tienen códigos menores)
'Mike' > 'Mikey'       # False (la cadena más corta es menor si es prefijo)
```

### 4.2. Comparación con números

Comparar una cadena con un número:

- `cadena == número` siempre `False`.
- `cadena != número` siempre `True`.
- Cualquier otro operador (`<`, `>`, etc.) lanza `TypeError`.

### 4.3. Ordenamiento de listas de cadenas

- `sorted(lista)` devuelve una nueva lista ordenada.
- `lista.sort()` ordena la lista in-place.

Orden por defecto es lexicográfico (según puntos de código).

---

## 5. Conversiones entre cadenas y números

- `str(objeto)` convierte a cadena.
- `int(cadena)` convierte a entero (lanza `ValueError` si no es válido).
- `float(cadena)` convierte a flotante (lanza `ValueError` si no es válido).

El formato debe ser válido: sin comas, sin espacios, usando punto decimal.

Ejemplo incorrecto:

```python
float("1, 3")  # ValueError
```

---

## 6. Manejo de excepciones

### 6.1. Concepto de excepción

Una excepción es un evento que interrumpe el flujo normal del programa cuando ocurre un error. Python genera excepciones para situaciones como división entre cero, índice fuera de rango, conversión de tipo inválida, etc.

### 6.2. Bloque `try` / `except`

La estructura básica:

```python
try:
    # Código que puede lanzar una excepción
except TipoExcepcion:
    # Manejo de esa excepción
```

- Si ocurre una excepción en el bloque `try`, el flujo salta al `except` correspondiente.
- Si no ocurre excepción, se omite el `except`.
- Puede haber múltiples bloques `except` para distintos tipos.
- El bloque `except:` sin especificar tipo captura todas las excepciones (debe ir el último).

### 6.3. Jerarquía de excepciones

- `BaseException` → raíz de todas.
- `Exception` → base de la mayoría de excepciones comunes (hereda de `BaseException`).
- Excepciones concretas: `ZeroDivisionError`, `IndexError`, `KeyError`, `ImportError`, etc.

**Regla de orden**: los bloques `except` más específicos deben ir antes que los más generales. Si pones `ArithmeticError` antes de `ZeroDivisionError`, capturará la división entre cero y el segundo bloque nunca se ejecutará.

### 6.4. Cláusula `else` y `finally`

- `else`: se ejecuta si no ocurrió ninguna excepción.
- `finally`: se ejecuta siempre, haya o no excepción (útil para liberar recursos).

### 6.5. Sentencia `raise`

Permite lanzar una excepción explícitamente:

```python
raise ValueError("Mensaje de error")
```

- También se puede usar `raise` sin argumentos dentro de un bloque `except` para relanzar la excepción actual.

### 6.6. Sentencia `assert`

```python
assert condicion, "mensaje opcional"
```

- Si `condicion` es falsa, lanza `AssertionError` con el mensaje.
- Útil para verificaciones de depuración (no debe usarse para validación de datos de entrada en producción).

---

## 7. Excepciones comunes en Python

| Excepción | Jerarquía | Descripción |
|-----------|-----------|-------------|
| `BaseException` | raíz | Clase base de todas. |
| `Exception` | BaseException ← Exception | Base de excepciones comunes. |
| `ArithmeticError` | Exception ← ArithmeticError | Errores aritméticos (abstracta). |
| `ZeroDivisionError` | ArithmeticError ← ZeroDivisionError | División o módulo por cero. |
| `OverflowError` | ArithmeticError ← OverflowError | Resultado demasiado grande para representar. |
| `LookupError` | Exception ← LookupError | Error en búsqueda en colecciones (abstracta). |
| `IndexError` | LookupError ← IndexError | Índice fuera de rango (listas, tuplas). |
| `KeyError` | LookupError ← KeyError | Clave inexistente en diccionario. |
| `ImportError` | Exception ← ImportError | Fallo en importación de módulo. |
| `AssertionError` | Exception ← AssertionError | Fallo de `assert`. |
| `KeyboardInterrupt` | BaseException ← KeyboardInterrupt | Interrupción por teclado (Ctrl+C). |
| `MemoryError` | Exception ← MemoryError | Sin memoria disponible. |

---

## 8. Proyectos y ejercicios prácticos

### 8.1. Cifrado César

El cifrado César desplaza cada letra un número fijo de posiciones en el alfabeto (solo letras, conservando mayúsculas/minúsculas y caracteres no alfabéticos).

**Requisitos**:
- Solicitar al usuario una línea de texto y un desplazamiento (1–25).
- Validar que el desplazamiento sea correcto.
- Mostrar el texto cifrado.

Ejemplo:

```python
texto = input("Texto: ")
desplazamiento = int(input("Desplazamiento: "))
cifrado = ""
for ch in texto:
    if ch.isalpha():
        base = ord('A') if ch.isupper() else ord('a')
        cifrado += chr((ord(ch) - base + desplazamiento) % 26 + base)
    else:
        cifrado += ch
print(cifrado)
```

### 8.2. Validador IBAN

Simplificado: verificar que un número IBAN (sin espacios) sea válido:

1. Mover los 4 primeros caracteres al final.
2. Reemplazar letras por dígitos (A=10, B=11, ..., Z=35).
3. Interpretar como entero y comprobar que el resto al dividir por 97 sea 1.

### 8.3. Palíndromos

Verificar si una frase es palíndroma (ignorando espacios y mayúsculas/minúsculas).

### 8.4. Análisis de anagramas

Dos palabras son anagramas si tienen las mismas letras en distinto orden (ignorando espacios y mayúsculas).

### 8.5. Lectura segura de enteros

Implementar una función que solicite un número dentro de un rango, validando entradas no numéricas y valores fuera de rango.

---

## 9. Resumen de conceptos clave

- **ASCII**: estándar de 128 caracteres (7 bits).
- **Unicode**: estándar universal de puntos de código.
- **UTF-8**: codificación variable de Unicode, compatible con ASCII.
- **Cadenas**: inmutables, secuencias, indexables.
- **Operaciones**: concatenación (`+`), repetición (`*`), comparación lexicográfica.
- **Métodos**: transformación, búsqueda, comprobación, división/unión.
- **Excepciones**: manejo con `try`/`except`, jerarquía, `raise`, `assert`.
- **Conversiones**: `str()`, `int()`, `float()` (con cuidado con el formato).

---

*Este documento ha sido condensado y reorganizado a partir de múltiples fuentes de estudio para ofrecer un material de consulta claro y completo.*

> Muchas gracias por leer