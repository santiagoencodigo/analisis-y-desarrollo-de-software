# Operadores lógicos y operaciones bit a bit en Python

> A continuación, mis apuntes sobre esta sección.

---

## Tabla de Contenido

1. [Sesión 5](#sesión-5)
2. [¿Cómo tratar con bits individuales?](#cómo-tratar-con-bits-individuales)
3. [Desplazamiento binario a la izquierda y desplazamiento binario a la derecha](#desplazamiento-binario-a-la-izquierda-y-desplazamiento-binario-a-la-derecha)
4. [Quiz](#quiz)

---

## Sesión 5

> Inicialmente, estos apuntes correspondían al 06/05/2026, pero los retomé el 03/07/2026. Esto representa aproximadamente un mes de retraso. Se me ha dificultado avanzar debido a que el curso es ligeramente extenso.

Como novedad, me pareció curioso observar el comportamiento de algunos compañeros. Hubo una gran cantidad de personas que simplemente hicieron *scroll* por el contenido y posteriormente respondieron el examen utilizando ChatGPT.

Según lo que pude observar, muchos no ven el curso como una certificación demostrable ante una empresa o como una habilidad que puedan mencionar diciendo: *"Lo aprendí por este medio"*. Más bien, el objetivo parecía centrarse únicamente en obtener el enlace del certificado.

Personalmente, no sé exactamente qué pensar respecto a esto, pero fue algo que me llamó la atención durante esta entrega.

> Mi mentalidad era la siguiente: se estaba solicitando entregar rápidamente los certificados de estos dos cursos. Por esta razón, decidí no crear otro documento específico de Python para reforzar los aprendizajes. Prefiero hacerlo en otra ocasión para retroalimentar y consolidar conocimientos. Por ahora, me enfocaré en construir un documento README que me permita tener estructurado todo lo que se vio durante el curso.

---

## ¿Cómo tratar con bits individuales?

### Pregunta importante

¿Para qué puedes utilizar los operadores bit a bit?

Se nos plantea el siguiente escenario:

1. Imagina que eres un desarrollador encargado de escribir una pieza importante de un sistema operativo.
2. Se te informa que puedes utilizar una variable declarada de la siguiente forma:

```python
flag_register = 0x1234
```

Características:

* La variable almacena información relacionada con diversos aspectos de la operación del sistema.
* Cada bit de la variable almacena un valor de tipo sí/no.

Es posible que tengas que enfrentarte a las siguientes tareas.

### Comprobar el estado de un bit

Deseas averiguar el valor de un bit específico.

Comparar toda la variable con cero no resulta útil, ya que los demás bits pueden contener valores impredecibles.

Para ello se puede aprovechar la siguiente propiedad de la conjunción lógica:

```python
x & 1 = x
x & 0 = 0
```

Ejemplo:

```python
the_mask = 8

if flag_register & the_mask:
    # Mi bit se estableció en 1.
else:
    # Mi bit se restableció a 0.
```

### Reiniciar un bit

El objetivo es asignar un valor cero al bit deseado mientras todos los demás permanecen sin cambios.

Máscara utilizada:

```text
11111111111111111111111111110111
```

Esta máscara se obtiene negando todos los bits de la variable `the_mask`.

Ejemplo:

```python
the_mask = 8

flag_register = flag_register & ~the_mask
flag_register &= ~the_mask
```

### Establecer un bit

El objetivo es asignar un valor uno al bit deseado manteniendo intactos los demás bits.

Se utiliza la siguiente propiedad de la disyunción:

```python
x | 1 = 1
x | 0 = x
```

Ejemplo:

```python
flag_register = flag_register | the_mask
flag_register |= the_mask
```

### Negar un bit

Consiste en reemplazar un `1` por un `0` o un `0` por un `1`.

Podemos utilizar una propiedad interesante del operador XOR:

```python
x ^ 1 = ~x
x ^ 0 = x
```

Ejemplo:

```python
flag_register = flag_register ^ the_mask
flag_register ^= the_mask
```

> **Observación personal:** Aunque puedo entender la mecánica de estas operaciones, todavía me cuesta visualizar situaciones reales donde las utilizaría con frecuencia. Probablemente sea más fácil comprenderlas al verlas aplicadas en sistemas operativos, hardware o entornos empresariales específicos.

---

## Desplazamiento binario a la izquierda y desplazamiento binario a la derecha

Python ofrece otra operación relacionada con la manipulación de bits individuales: **shifting**.

Esta operación se aplica únicamente a números enteros; no debe utilizarse con valores flotantes.

### Multiplicar por diez

¿Cómo multiplicarías cualquier número por diez?

Observa el siguiente ejemplo:

```text
12345 × 10 = 123450
```

Multiplicar por diez equivale a desplazar todos los dígitos hacia la izquierda y rellenar el espacio resultante con un cero.

### Dividir entre diez

```text
12340 ÷ 10 = 1234
```

Dividir entre diez equivale a desplazar los dígitos hacia la derecha.

En el contexto binario:

* Desplazar un valor un bit a la izquierda equivale a multiplicarlo por dos.
* Desplazar un valor un bit a la derecha equivale a dividirlo entre dos.

> Al desplazar hacia la derecha, se pierde el bit situado más a la derecha.

### Operadores de desplazamiento

```python
valor << bits
valor >> bits
```

Donde:

* El operando izquierdo es el valor entero cuyos bits serán desplazados.
* El operando derecho indica la cantidad de posiciones a desplazar.

Ejemplo:

```python
var = 17
var_right = var >> 1
var_left = var << 2

print(var, var_left, var_right)

# Resultado: 17 68 8
```

### Interpretación del resultado

* `17 >> 1` → `17 // 2` → `8`

  Desplazar un bit a la derecha equivale a realizar una división entera entre dos.

* `17 << 2` → `17 * 4` → `68`

  Desplazar dos bits a la izquierda equivale a multiplicar por `2²`.

### Prioridad de Operadores

| Prioridad | Operador                                                                     | Tipo    |
| --------- | ---------------------------------------------------------------------------- | ------- |
| 1         | `~`, `+`, `-`                                                                | Unario  |
| 2         | `**`                                                                         |         |
| 3         | `*`, `/`, `//`, `%`                                                          |         |
| 4         | `+`, `-`                                                                     | Binario |
| 5         | `<<`, `>>`                                                                   |         |
| 6         | `<`, `<=`, `>`, `>=`                                                         |         |
| 7         | `==`, `!=`                                                                   |         |
| 8         | `&`                                                                          |         |
| 9         | <code>|</code>                                                               |         |
| 10        | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `&=`, `^=`, <code>|=</code>, `>>=`, `<<=` |         |

### Resumen General

Python es compatible con los siguientes operadores lógicos:

* **and** → `(True and True)` es `True`.
* **or** → `(True or False)` es `True`.
* **not** → `not True` es `False`.

También es posible utilizar operadores bit a bit para manipular información binaria.

Datos de ejemplo:

* `x = 15`, equivalente a `0000 1111` en binario.
* `y = 16`, equivalente a `0001 0000` en binario.

Operaciones:

* `&` realiza una operación AND bit a bit.

  ```text
  x & y = 0
  ```

  Resultado binario:

  ```text
  0000 0000
  ```

* `|` realiza una operación OR bit a bit.

  ```text
  x | y = 31
  ```

  Resultado binario:

  ```text
  0001 1111
  ```

* `~` realiza una operación NOT bit a bit.

  ```text
  ~x = 240*
  ```

  Resultado binario:

  ```text
  1111 0000
  ```

* `^` realiza una operación XOR bit a bit.

  ```text
  x ^ y = 31
  ```

  Resultado binario:

  ```text
  0001 1111
  ```

* `>>` realiza un desplazamiento a la derecha.

  ```text
  y >> 1 = 8
  ```

  Resultado binario:

  ```text
  0000 1000
  ```

* `<<` realiza un desplazamiento a la izquierda.

  ```text
  y << 3 = 128
  ```

  Resultado binario:

  ```text
  1000 0000
  ```

---

## Quiz

### Ejercicio 1

```python
# ¿Cuál es el resultado del siguiente fragmento de código?

x = 1
y = 0

z = ((x == y) and (x == y)) or not(x == y)

print(not(z))

# Resultado:
# False
```

### Ejercicio 2

```python
# ¿Cuál es el resultado del siguiente fragmento de código?

x = 4
y = 1

a = x & y
b = x | y
c = ~x  # ¡Difícil!
d = x ^ 5
e = x >> 2
f = x << 2

print(a, b, c, d, e, f)

# Resultado:
# 0 5 -5 1 1 16
```

> Me pareció un tema algo complejo y, siendo sincero, todavía me cuesta comprenderlo completamente.

> Probablemente necesitaría verlo aplicado a entornos empresariales o a problemas reales para interiorizar mejor su utilidad. Por ahora, simplemente sé que estas operaciones existen dentro de Python y cuál es su propósito general.

> Lo que más me gustó de esta sección fue comprender mejor la jerarquía de operadores y el orden en que el lenguaje evalúa las expresiones.
