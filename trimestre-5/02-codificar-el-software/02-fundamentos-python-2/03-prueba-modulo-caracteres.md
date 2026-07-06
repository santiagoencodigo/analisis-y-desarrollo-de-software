# Prueba Modulo - Modulo, Paquetes y Pip

A continuación se presentan las 15 preguntas planteadas durante la conversación, cada una con su enunciado, opciones, respuesta correcta y una explicación detallada. Este documento está diseñado para servir como material de estudio sobre los temas tratados: manejo de excepciones, codificación de caracteres y operaciones con cadenas en Python.

---

## 1. Ejecución de un bloque `try`

### Pregunta

El entrar al bloque `try` implica que:

- [ ] algunas de las instrucciones de este bloque no se ejecuten  
- [ ] todas las instrucciones de este bloque se ejecuten  
- [ ] ninguna de las instrucciones de este bloque se ejecuten  
- [ ] el bloque será omitido

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** todas las instrucciones de este bloque se ejecuten.

### Explicación

Al entrar en un bloque `try`, el flujo de ejecución comienza a ejecutar las instrucciones en orden secuencial. Si no ocurre ninguna excepción, se ejecutan todas. Si ocurre una excepción en medio, las restantes se saltan, pero el hecho de *entrar* implica que al menos se inicia la ejecución de las instrucciones contenidas en él.

### Conclusión

El bloque `try` siempre inicia su ejecución; su finalización completa depende de que no se produzca una excepción durante su recorrido.

---

## 2. Posición del bloque `except:` sin nombre

### Pregunta

El bloque `except:` sin nombre:

- [ ] debe ser el primero
- [ ] debe ser el último
- [ ] no se puede utilizar si se ha utilizado algún bloque con nombre
- [ ] se puede colocar en cualquier lugar

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** debe ser el último.

### Explicación

En Python, el bloque `except:` sin nombre (que captura **todas** las excepciones) debe colocarse al final de todos los bloques `except` específicos. Si se coloca antes, los bloques con nombre que le sigan nunca se ejecutarían, y el propio intérprete lanza un error de sintaxis (`default 'except:' must be last`).

### Conclusión

El orden de los bloques `except` es crucial: primero los más específicos y al final el genérico.

---

## 3. Jerarquía de excepciones en Python

### Pregunta

La excepción base en Python se llama:

- [ ] BaseException
- [ ] Exception
- [ ] PythonException
- [ ] TopException

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** BaseException.

### Explicación

En Python, `BaseException` es la clase base de todas las excepciones integradas. Aunque `Exception` es la clase base de la mayoría de las excepciones que se manejan normalmente (y de la que suelen heredar las excepciones definidas por el usuario), la jerarquía raíz es `BaseException` (de la cual heredan también `SystemExit`, `KeyboardInterrupt` y `Exception`).

### Conclusión

La clase raíz de todas las excepciones es `BaseException`, mientras que `Exception` es la base para las excepciones convencionales.

---

## 4. Funcionamiento de la sentencia `assert`

### Pregunta

La siguiente sentencia:

```python
assert var == 0
```

- [ ] es erronea
- [ ] detendrá el programa cuando `var == 0`
- [ ] no tiene efecto
- [ ] detendrá el programa cuando `var != 0`

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** detendrá el programa cuando `var != 0`.

### Explicación

La sentencia `assert var == 0` evalúa la condición. Si es **verdadera** (`var == 0`), no ocurre nada y el programa continúa. Si es **falsa** (`var != 0`), lanza una excepción `AssertionError` que detiene la ejecución del programa (a menos que se capture con un `try/except`).

### Conclusión

`assert` es una herramienta de depuración que lanza una excepción cuando la condición es falsa.

---

## 5. Orden de captura y herencia de excepciones

### Pregunta

¿Cuál es el resultado esperado del siguiente código?

```python
try:
    print("5/0)
except ArithmeticError:
    print("arit")
except ZeroDivisionError:
    print("cero")
except:
    print("algo")
```

- [ ] cero
- [ ] algo
- [ ] 0
- [ ] arit

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** arit.

### Explicación

El código (corrigiendo el error tipográfico `print("5/0)` por `print(5/0)`) lanza una excepción `ZeroDivisionError`.  
Como `ZeroDivisionError` es una subclase de `ArithmeticError`, el primer bloque `except ArithmeticError:` la captura, por lo que se imprime `"arit"`.  
Los bloques `except` posteriores no se evalúan porque ya se manejó la excepción.

### Conclusión

El orden de los bloques `except` importa: los más generales deben ir después de los más específicos; de lo contrario, los específicos nunca serán alcanzados.

---

## 6. Excepciones integradas concretas

### Pregunta

¿Cuáles de las siguientes son ejemplos de excepciones integradas **concretas** de Python? (Selecciona dos respuestas)

- [ ] ArithmeticError  
- [ ] IndexError  
- [ ] BaseException  
- [ ] ImportError

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** IndexError e ImportError.

### Explicación

- **IndexError** es una excepción concreta que se lanza cuando un índice está fuera de rango en una secuencia.  
- **ImportError** es una excepción concreta que se lanza cuando falla una sentencia `import`.  

Las otras opciones son clases base (no concretas):  
- **ArithmeticError** es la clase base para errores aritméticos (no suele lanzarse directamente).  
- **BaseException** es la clase raíz de todas las excepciones, pero no es una excepción concreta que se lance directamente en situaciones típicas.

### Conclusión

Las excepciones concretas son aquellas que se lanzan directamente en casos específicos, a diferencia de las clases base que sirven para agrupar.

---

## 7. Definición de ASCII

### Pregunta

**ASCII es:**

- [ ] la abreviatura de *American Standard Code for Information Interchange*
- [ ] el nombre de un Módulo Estándar de Python
- [ ] el nombre de una variable predefinida de Python
- [ ] el nombre de un carácter

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** la abreviatura de *American Standard Code for Information Interchange*.

### Explicación

ASCII es el acrónimo de *American Standard Code for Information Interchange*, un estándar de codificación de caracteres que asigna números a letras, dígitos y símbolos.  

Las otras opciones son incorrectas:  
- No es el nombre de un módulo estándar de Python (aunque existe la función `ascii()`).  
- No es una variable predefinida.  
- No es el nombre de un carácter en sí mismo, sino un sistema de codificación.

### Conclusión

ASCII es un estándar de codificación de caracteres, fundamental en la historia de la informática.

---

## 8. Propósito de UTF-8

### Pregunta

UTF-8 es:

- [ ] la novena versión del estándar UTF
- [ ] una forma de codificar puntos de código Unicode
- [ ] un sinónimo para la palabra `byte`
- [ ] el nombre de una versión de Python

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** una forma de codificar puntos de código Unicode.

### Explicación

UTF-8 (Unicode Transformation Format - 8 bits) es un sistema de codificación de caracteres que representa cada punto de código Unicode mediante una secuencia de 1 a 4 bytes. Es el estándar más utilizado en la web y en sistemas modernos.

Las otras opciones son incorrectas:  
- No es la "novena versión" (el "8" indica que usa unidades de 8 bits, no una versión).  
- No es sinónimo de `byte` (es un *método* de codificación, no una unidad de medida).  
- No es el nombre de una versión de Python.

### Conclusión

UTF-8 es una codificación de ancho variable para Unicode, muy extendida por su compatibilidad con ASCII.

---

## 9. Estándar Unicode

### Pregunta

UNICODE es un estándar:

- [ ] para codificar números punto flotante
- [ ] como ASCII, pero mucho más expansivo
- [ ] empleado por programadores en universidades
- [ ] honrado por todo el universo

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** como ASCII, pero mucho más expansivo.

### Explicación

Unicode es un estándar de codificación de caracteres que abarca prácticamente todos los sistemas de escritura del mundo, emojis, símbolos matemáticos, etc. Es mucho más amplio que ASCII (que solo tiene 128 caracteres) y, de hecho, ASCII es un subconjunto de Unicode.

Las otras opciones son incorrectas:  
- No es para codificar números de punto flotante (ese es IEEE 754).  
- No está limitado a programadores universitarios ni es un concepto de "honor" universal (es un estándar técnico).

### Conclusión

Unicode es el estándar moderno para la representación de texto en todos los idiomas y símbolos.

---

## 10. Longitud de una cadena con `len()`

### Pregunta

El siguiente código:

```python
x = 'l'
print(len(x))
```

imprime:

1
2
3
20

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** 1.

### Explicación

El código asigna a `x` la cadena `'l'`, que contiene **un solo carácter**. La función `len(x)` devuelve la longitud de esa cadena, que es `1`.

### Conclusión

`len()` devuelve el número de caracteres de una cadena.

---

## 11. Diferencia de códigos con `ord()`

### Pregunta

El siguiente código:

```python
print(ord('c') - ord('a'))
```

imprime:

- [ ] 3
- [ ] 2
- [ ] 0
- [ ] 1

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** 2.

### Explicación

La función `ord()` devuelve el valor numérico (código Unicode/ASCII) del carácter:  
- `ord('c')` → 99  
- `ord('a')` → 97  

La resta `99 - 97` da como resultado `2`.

### Conclusión

`ord()` permite obtener el número de código de un carácter, y restar los códigos de letras da la distancia en el alfabeto.

---

## 12. Conversión de código a carácter con `chr()`

### Pregunta

El siguiente código:

```python
print(chr(ord('z') - 2))
```

imprime:

- [ ] z
- [ ] a
- [ ] x
- [ ] y

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** x.

### Explicación

- `ord('z')` devuelve 122 (código ASCII/Unicode de 'z').  
- `122 - 2 = 120`  
- `chr(120)` devuelve el carácter correspondiente al código 120, que es **'x'**.

### Conclusión

`chr()` convierte un código numérico en su carácter equivalente, y `ord()` hace la operación inversa.

---

## 13. Operadores de repetición y concatenación en cadenas

### Pregunta

El siguiente código:

```python
print(3 * 'abc' + 'xyz')
```

imprime:

- [ ] abcabcabcxyz  
- [ ] abcabcxyzxyz  
- [ ] xyzxyzxyzxyz  
- [ ] abcxyzxyzxyz

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** abcabcabcxyz.

### Explicación

- `3 * 'abc'` repite la cadena `'abc'` tres veces → `'abcabcabc'`.  
- Luego se concatena `'xyz'` → `'abcabcabcxyz'`.

### Conclusión

El operador `*` con un entero repite la cadena, y `+` concatena cadenas.

---

## 14. Comparación lexicográfica de cadenas

### Pregunta

El siguiente código:

```python
print('Mike' > "Mikey")
```

imprime:

- [ ] 1
- [ ] True
- [ ] False
- [ ] 0

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** False.

### Explicación

La comparación de cadenas en Python es **lexicográfica** (orden de diccionario), comparando carácter por carácter según sus códigos Unicode.

- `'Mike'` vs `'Mikey'`:  
  - Primeros 4 caracteres son iguales (`M`, `i`, `k`, `e`).  
  - En la quinta posición, `'Mike'` **no tiene más caracteres**, mientras que `'Mikey'` tiene `'y'`.  
  - Cuando una cadena es prefijo de la otra, la más corta se considera **menor**.  
  - Por lo tanto, `'Mike' > 'Mikey'` es `False`, y `print()` muestra exactamente la palabra `False`.

### Conclusión

La comparación de cadenas sigue el orden lexicográfico; una cadena más corta es menor si es prefijo de otra más larga.

---

## 15. Conversión a `float` con formato inválido

### Pregunta

El siguiente código:

```python
print(float("1, 3"))
```

- [ ] imprime 1,3
- [ ] imprime 1,3 (duplicado en las opciones, pero es incorrecto)
- [ ] (tercera opción duplicada)
- [ ] genera una excepción `ValueError`

> El usuario no proporcionó un razonamiento explícito para esta pregunta.

**Respuesta correcta:** genera una excepción `ValueError`.

### Explicación

La función `float()` solo acepta cadenas que representen un número válido en formato decimal, usando el punto (`.`) como separador decimal y sin comas ni espacios adicionales. La cadena `"1, 3"` contiene una coma y un espacio, lo cual no es un formato numérico válido en Python (sin configuración regional especial). Por lo tanto, se lanza una excepción `ValueError`.

Las opciones que dicen "imprime 1,3" son incorrectas.

### Conclusión

`float()` es estricto con el formato de la cadena; solo acepta números en notación decimal con punto, y lanza `ValueError` si el formato no es válido.

---

*Este documento recoge todas las preguntas y respuestas de la conversación, ofreciendo un material de estudio completo y estructurado.*

> Gracias por leer.