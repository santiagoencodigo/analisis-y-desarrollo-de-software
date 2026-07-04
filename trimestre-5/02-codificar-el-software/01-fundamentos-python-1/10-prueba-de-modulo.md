# Prueba de Módulo

> Análisis de preguntas tipo test sobre Python

A continuación, se presentan varias preguntas tipo test acompañadas de sus posibles respuestas. En cada caso, expondré y justificaré detalladamente cuál es la opción correcta y por qué las restantes son incorrectas, aportando argumentos sólidos y ejemplos prácticos. Todo el contenido está orientado al ecosistema de Python.

<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/da9f8649-8d19-4c2b-b05a-d90030b5379a/dgvsjw9-cf0faf00-135d-4ddf-9aae-e804f3a03dff.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9kYTlmODY0OS04ZDE5LTRjMmItYjA1YS1kOTAwMzBiNTM3OWEvZGd2c2p3OS1jZjBmYWYwMC0xMzVkLTRkZGYtOWFhZS1lODA0ZjNhMDNkZmYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6Mxt8I6oaroycEuVyT8rRsQmvYygFKaHX579qI7D_Fw" alt="Animación de carga de Python con Pygame">

*Imagen tomada de: [DeviantArt - KeroDeKroma](https://www.deviantart.com/kerodekroma/art/Python-pygame-loader-animation-released-1020859065)*

> **Le recomiendo encarecidamente leer con calma y atención plena.** El verdadero valor de esta prueba no está en simplemente acertar, sino en interiorizar el razonamiento lógico que distingue una respuesta válida de una incorrecta.









---









## Tabla de Contenido

1. [Operador de igualdad](#1-operador-de-igualdad)

2. [Valor de X](#2-valor-de-x)

3. [Cuantos * en un bucle](#3-cuantos--en-un-bucle)

4. [Cuántos (*) con Mod|%](#4-cuántos--con-mod)

5. [Bucle for con bloque else](#5-bucle-for-con-bloque-else)

6. [Bucle while con sentencia continue](#6-bucle-while-con-sentencia-continue)

7. [Desplazamiento de bits en bucle while](#7-desplazamiento-de-bits-en-bucle-while)

8. [Evaluación de expresiones lógicas complejas](#8-evaluación-de-expresiones-lógicas-complejas)

9. []()

10. []()

12. []()

13. []()

14. []()

15. []()

16. []()

17. []()

18. []()

19. []()

20. []()









---










## 1. Operador de igualdad
 
Un operador que puede verificar si dos valores son iguales se codifica como:

* A) `=`  

* B) `===`  

* C) `!=`  

* D) `==` 

> Lo relaciono mucho con las condicionales porque ha sido donde más he usado estos operadores.

Observe el siguente código:

```python

    # = Es el operador de asignación.
        # Se usa para guardar un valor en una variable
            # Como por ejemplos:

            # x = 10
            # perro = ciruelejo

    print(5 = 5)    # SyntaxError (no se puede asignar a un literal)



    # === No existe en Python. 
    # Es un operador que usan lenguajes como JavaScript para comparar valor *y* tipo de dato a la vez.

    print(5 === 5)  # SyntaxError (no existe en Python)



    # != Es el operador de desigualdad contrario a ==
    # True  → pero esto pregunta si son distintos, no iguales
    
    print(5 != 3)   


    # El operador == se usa efectivamente para verificar si dos valores son iguales:
        # Es como si dijiera ¿el valor de la izquierda es exactamente igual al de la derecha?

    print(5 == 5)   # True  → correcto

```

> Siendo asi, podemos deducir que la respuesta correcta es D.







---







## 2. Valor de X

Observe el siguente código

```python
    x = 1
    x = x == x
```

Ahora, el valor asignado finalmente a x es igual a:

* A) 0

* B) 1

* C) True

* D) False

> Inicialmente para mi, esto es True debido a que == Compara si los valores son iguales.

Ahora pensemos en:

```python
    x = 1

    # En este momento nuestra variable x vale 1

    x = x == x

    # En este momento:
        # Python evalúa primero el lado derecho de la asignación (x == x).
        # En ese momento, x vale 1, así que la comparación es 1 == 1.
        # El resultado de esa comparación es el valor booleano True (verdadero).
        # Luego, ese resultado (True) se asigna a la variable x.
```

> De esta forma mi razonamiento anterior fue verdadero.








---







## 3. Cuantos * en un bucle

¿Cuántos * enviará el siguente fragmento de código en la consola?

```python
    i = 0
    while i <= 3 :
        i += 2
        print("*")
```

Para definir el resultado, hay que analizar la jecución en detalle:

```python
    # Inicio: i = 0
    i = 0

    # Primera iteración:

        # Condición i <= 3 → 0 <= 3 es verdadero.

        # Ejecuta i += 2 → ahora i = 2.

        # Ejecuta print("*") → se imprime el primer *.

    # Segunda iteración:

        # Condición i <= 3 → 2 <= 3 es verdadero.

        # Ejecuta i += 2 → ahora i = 4.

        # Ejecuta print("*") → se imprime el segundo *.

    while i <= 3 :
        # Tercera iteración (no ocurre):

        # Condición i <= 3 → 4 <= 3 es falso, por lo que el bucle termina.
        i += 2
        print("*")

        # Resultado final: Se imprimen exactamente 2 asteriscos en la consola.
```









---






## 4. Cuántos (*) con Mod|%

¿Cuántos (*) enviará el siguiente fragmento de código a la consola?

```python
    i = 0
    while i <= 5 :
        i += 1
        if i % 2 == 0:
            break
        print("*")
```

Opciones de respuesta:

* A) 3

* B) 2

* C) 1

* D) 0

    Operador Módulo (Resto) Calcula el sobrante de una división entera. 
    Es útil para comprobar si un número es par o impar, o si un número es múltiplo de otro.


Analice el siguente código

```python
    # Inicio: i = 0.
    i = 0
    while i <= 5 :
    
    # Primera iteración del bucle:

        # Condición i <= 5 → 0 <= 5 es verdadero.

        # i += 1 → ahora i = 1.

            # if i % 2 == 0: → 1 % 2 es 1, que no es igual a 0.
            # La condición es falsa, así que no ejecuta el break.

        # print("*") → se imprime el primer *.

        i += 1
        if i % 2 == 0:

            # Segunda iteración del bucle:

                # Condición i <= 5 → 1 <= 5 es verdadero.

                # i += 1 → ahora i = 2.

                # if i % 2 == 0: → 2 % 2 es 0. La condición es verdadera, así que ejecuta break.

                # El break sale del bucle inmediatamente, sin llegar a ejecutar el print("*") de esta iteración.

                # Resultado final: Solo se imprimió 1 asterisco.
            break
        print("*")
```

> Siendo asi, la respuesta correcta es C











---







## 5. Bucle for con bloque else

¿Cuántos (#) enviará el siguiente fragmento de código a la consola?

```python
    for i in range(1):
        print("#")
    else:
        print("#")
```

> Inicialmente me confundé, pero en teoria... En rango 1 imprimirá #, ya luego como no hay números... Imprimirá un segundo #.

Opciones de respuesta:

* A) 2
* B) 3
* C) 1
* D) 0

Para confirmar esta respuesta observemos:

```python
    # El bucle for:
        # range(1) genera una secuencia con un solo elemento: [0].
        
        # El bucle se ejecutará 1 vez (una iteración).

        # Primera (y única) iteración:

        # Se ejecuta print("#") dentro del bucle → se imprime el primer #.
    for i in range(1):
        print("#")

        # Finalización del bucle:

        # El bucle termina normalmente (sin encontrar ningún break).
    else:

        # El bloque else:

        # En Python, el bloque else asociado a un bucle (for o while) se ejecuta siempre que el bucle no se haya interrumpido con un break.

        # Como no hay break, se ejecuta print("#") dentro del else → se imprime el segundo #.

        # Resultado final: Se imprimen exactamente 2 símbolos # en la consola.
        print("#")
```

> Siendo asi, mi razonamiento fue efectivo. Aunque no tan técnico y especifico como esta confirmación.












---







## 6. Bucle while con sentencia continue

¿Cuántos (#) enviará el siguiente fragmento de código a la consola?

```python
    var = 0
    while var < 6:
        var += 1
        if var % 2 == 0:
            continue
        print("#")
```

> Tomando de referencia una de las preguntas anteriores, inicialmente pienso que 0.

Opciones de respuesta:

* A) 1
* B) 0
* C) 3
* D) 2

Vamos a analizar el código paso a paso:

```python
var = 0
while var < 6:
    var += 1
    if var % 2 == 0:
        continue
    print("#")
```

> Esta intuición inicial de `0` no es correcta porque el `continue` solo afecta a los valores pares; los impares sí ejecutan el `print`.

**Ejecución detallada:**

| Iteración | `var` al inicio | `var += 1` → nuevo `var` | `var % 2 == 0` | Acción |
|-----------|----------------|--------------------------|----------------|--------|
| 1         | 0              | 1                        | `1 % 2 = 1` → Falso | `print("#")` → **1er #** |
| 2         | 1              | 2                        | `2 % 2 = 0` → Verdadero | `continue` (salta el `print`) |
| 3         | 2              | 3                        | `3 % 2 = 1` → Falso | `print("#")` → **2do #** |
| 4         | 3              | 4                        | `4 % 2 = 0` → Verdadero | `continue` |
| 5         | 4              | 5                        | `5 % 2 = 1` → Falso | `print("#")` → **3er #** |
| 6         | 5              | 6                        | `6 % 2 = 0` → Verdadero | `continue` |
| 7         | 6              | (condición `6 < 6` es falsa, termina) | - | - |

**Resultado:** Se imprimen `#` exactamente **3 veces** (cuando `var` toma los valores impares: 1, 3 y 5).

> Respuesta correcta: C) 3










---







## 7. Desplazamiento de bits en bucle while

¿Cuántos (#) enviará el siguiente fragmento de código a la consola?

```python
    var = 1
    while var < 10:
        print("#")
        var = var << 1
```

> Curioso el uso de: << ... La verdad me corchó.
>
> Recordemos que esto es desplazamiento hacia la izquierda (bits.)

Opciones de respuesta:

* A) 4
* B) 2
* C) 8
* D) 1

Para confirmar la respuesta podemos analizar las iteraciones:

> El desplazamiento de bits a la izquierda (<<) mueve todos los bits de un número hacia la izquierda y rellena con ceros a la derecha.

> En la práctica, desplazar n posiciones a la izquierda equivale a multiplicar el número por 2^n.

1. var=1 <10: imprime #, var = 1<<1 = 2

2. var=2 <10: imprime #, var = 2<<1 = 4

3. var=4 <10: imprime #, var = 4<<1 = 8

4. var=8 <10: imprime #, var = 8<<1 = 16

5. var=16 <10: falso, termina.

> Al final, la respuesta correcta son 4 impresiones de #







---






## 8. Evaluación de expresiones lógicas complejas

¿Qué valor será asignado a la variable x?

```python
    z = 10
    y = 0
    x = y < z and z > y or y > z and z < y
```

> Esta pregunta, la verdad... Me corchó.

Opciones de respuesta:

* A) 1
* B) False
* C) True
* D) 0

Para encontrar la respuesta de esta pregunta.

Recordemos que 

* Las comparaciones (<, >) tienen mayor prioridad que and y or.

* and tiene mayor prioridad que or.

Y en consecuencia el orden termina siendo:

```python
    x = (y < z and z > y) or (y > z and z < y)
```

De esta forma nosotros podemos remplazar valores:

Lado izquierdo del or: (y < z and z > y)

1. 0 < 10 → True

2. 10 > 0 → True

3. True and True → True

Lado derecho del or: (y > z and z < y)

1. 0 > 10 → False

2. 10 < 0 → False

3. False and False → False

Combinación final:

True or False → True

El valor booleano True se asigna directamente a la variable x.

Por lo que para hallar la respuesta de esta pregunta habia que comparar los numeros, determinar si eran diferentes sus valores y por ende true or false y determinar que las dos condiciones... Una sea false y la otra True, porque de que ambas tengan el mismo booleano... El resultado final será false.

> Muy interesante! Por ver varios > < >... Más el juego de las variables x, y ... La verdad si me confundió un poco.







---






## 9


a

```python
    print(a)
```







---






## 10


a

```python
    print(a)
```







---






## 11


a

```python
    print(a)
```







---






## 12


a

```python
    print(a)
```







---






## 13


a

```python
    print(a)
```







---






## 14


a

```python
    print(a)
```







---






## 15


a

```python
    print(a)
```







---






## 16


a

```python
    print(a)
```







---






## 17


a

```python
    print(a)
```







---






## 18


a

```python
    print(a)
```







---






## 19


a

```python
    print(a)
```







---






## 20


a

```python
    print(a)
```


a