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

9. [Operaciones a nivel de bits (Bitwise)](#9-operaciones-a-nivel-de-bits-bitwise)

10. [Indexación negativa en listas](#10-indexación-negativa-en-listas)

11. [Slicing de listas con paso negativo](#11-slicing-de-listas-con-paso-negativo)

12. [Asignación múltiple e intercambio en listas](#12-asignación-múltiple-e-intercambio-en-listas)

13. [Operaciones de inserción y eliminación en listas](#13-operaciones-de-inserción-y-eliminación-en-listas)

14. [Referencias y slicing en asignación de listas](#14-referencias-y-slicing-en-asignación-de-listas)

15. [Slicing y asignación de listas independientes](#15-slicing-y-asignación-de-listas-independientes)

16. [Inserción dinámica con bucle for en listas](#16-inserción-dinámica-con-bucle-for-en-listas)

17. [Modificación de listas en bucle con inserción fija](#17-modificación-de-listas-en-bucle-con-inserción-fija)

18. [List comprehension con función range](#18-list-comprehension-con-función-range)

19. [Matrices y suma de diagonal con list comprehension](#19-matrices-y-suma-de-diagonal-con-list-comprehension)

20. [Indexación fuera de rango en listas anidadas](#20-indexación-fuera-de-rango-en-listas-anidadas)









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






## 9. Operaciones a nivel de bits (Bitwise)

¿Cuál es la output del siguiente fragmento de código?

```python
    a = 1
    b = 0
    c = a & b
    d = a | b
    e = a ^ b

    print(c + d + e)
```

Opciones de respuesta:

* A) 2
* B) 3
* C) 0
* D) 1

> Esta pregunta realmente me corchó... No me habia puesto a pensar hasta ahora, ¿Qué sucede con esos & | respecto a enteros?
>
> ¿Qué es ^? No lo recordaba.

Esto podemos pensarlo como:

```python

    # N

    a = 1
    b = 0

    c = a & b   # AND bit a bit
    # 1 & 0 = 0 (porque 1 AND 0 = 0). Así que c = 0.

    d = a | b   # OR bit a bit
    # 1 | 0 = 1 (porque 1 OR 0 = 1). Así que d = 1.

    e = a ^ b   # XOR bit a bit
    # 1 ^ 0 = 1 (porque XOR devuelve 1 si los bits son diferentes; aquí 1 y 0 son diferentes). Así que e = 1.

    print(c + d + e)
    # c + d + e = 0 + 1 + 1 = 2.
```











---






## 10. Indexación negativa en listas

¿Cuál es la output del siguiente fragmento de código?

```python
    my_list = [3, 1, -2]
    print(my_list[my_list[-1]])
```

Opciones de respuesta:

* A) 1
* B) -2
* C) -1
* D) 3

> Pienso que imprime -2.
>
> Me equivoque debido a mi razonamiento... Pues me confundí desde qué punto se empieza a contar cuando el indice es negativo.

* my_list[-1] accede al último elemento de la lista. 
* En Python, índices negativos cuentan desde el final. -1 es el último elemento, -2 es el penúltimo, etc.

* my_list[-2] es el penúltimo elemento (índice -2). La lista es [3, 1, -2]. Índice -1 es -2, índice -2 es 1.

Por lo tanto, la salida es 1.







---






## 11. Slicing de listas con paso negativo

¿Cuál es la output del siguiente fragmento de código?

```python
    my_list = [1, 2, 3, 4]
    print(my_list[-3:-2])
```

Opciones de respuesta:

* A) [2]
* B) [2, 3, 4]
* C) [2, 3]
* D) []

> Según mis calculos de donde inicia la lista en -3 y hasta el -2... Pienso que es la C.
>
> Y... fue una respuesta equivocada... Porque si en teoria inicia en 1 y finaliza en 3... Pues efectivamente sólo va a imprimir 2.

Recordemos que:

1. my_list[start:stop].

2. start = -3. En una lista de 4 elementos, el índice -3 se refiere al elemento en la posición len(list) - 3 = 4 - 3 = 1, que es 2.

3. stop = -2. El índice -2 se refiere a la posición 4 - 2 = 2, que es 3.

Ahora... En mi razonamiento... Lo equivocado fue:

En Python, el slicing [start:stop] incluye el índice start y excluye el índice stop. Así que incluye el elemento en el índice 1 (2) y excluye el elemento en el índice 2 (3)

Por lo tanto, el resultado es [2].







---






## 12. Asignación múltiple e intercambio en listas

La segunda asignación:

```python
    vals = [0, 1, 2]
    vals[0], vals[2] = vals[2], vals[0]
```

Opciones de respuesta:

* A) acorta la lista
* B) invierte la lista
* C) mantiene la lista igual
* D) extiende la lista

> Pues... Al cambiar el valor de los indices de la lista vals, considero que solo cambia valores y por ende no acorta ni extiende... Pero tampoco la mantiene igual... Sino que la invierte. (Me alegra mucho estar confiado de mi razonamiento.)

Para confirmar esto entendamos lo que sucede en el código:

1. Lado derecho: vals[2] es 2, vals[0] es 0, entonces la tupla es (2, 0).

2. Asignación: vals[0] = 2, vals[2] = 0.

3. La lista resultante es [2, 1, 0].

> Chistoso... Al inicio dude un poco con 1 en el indice [1]... Por su posición, pero este se mantiene igual ya que no hay ningún cambio en su indice.






---






## 13. Operaciones de inserción y eliminación en listas

Después de la ejecución del siguiente fragmento de código, la suma de todos los elementos vals será igual a:

```python
    vals = [0, 1, 2]
    vals.insert(0, 1)
    del vals[1]
```

Opciones de respuesta:

* A) 2
* B) 4
* C) 3
* D) 5

> ¿Qué hacia especificamente .insert? ... Recuerdo que agregaba el valor en la lista, pero no recuerdo en qué ubicación (Tal vez al final... O tal vez el 0 sea su ubicación.) En consecuencia esta pregunta la tenia que responder a ciegas. 

Ahora entonces para recordar y entender cual fue el flujo de trabajo:

```python
    vals = [0, 1, 2]
    vals.insert(0, 1) # Inserta el valor 1 en la posición 0. La lista se convierte en [1, 0, 1, 2].
    del vals[1] # Elimina el elemento en la posición 1. La lista se convierte en [1, 1, 2].
```

> Siendo asi, debí haber confiado en mi intuición de que la ubicación era en el indice 0.







---






## 14. Referencias y slicing en asignación de listas

Observa el código, y selecciona las sentencias verdaderas: (Selecciona dos respuestas)

```python
    nums = [1, 2, 3]
    vals = nums
    del vals[1:2]
```

Opciones de respuesta:

* A) nums es replicada y asignada a vals

> Sí.

* B) nums y vals se refieren a la misma lista

> Sí... ¿No? Pero creo que es trampa porque nums es la lista, y no se refiere a una lista en si.

* C) nums y vals son de la misma longitud

> No. Debido a que luego vals se elimina del indice 1 al 2.

* D) nums es más larga que vals

> Sí, despues del código en teoria.

> Asi que yo... Selecciono A y D.
>
> De forma chistosa... Justo las dos que seleccione con las dos sentencias falsas.

Hay que reflexionar entonces el código:

1. `nums = [1, 2, 3]` → se crea una lista.
2. `vals = nums` → **no crea una copia**, solo asigna una referencia al mismo objeto. Ambas variables apuntan a la misma lista.

> No lo habia pensado de esa forma. "**Apuntan a la misma lista.**"

3. `del vals[1:2]` → elimina el elemento en la posición 1 (el `2`) de la lista compartida.
4. La lista queda `[1, 3]`.
5. Como `nums` y `vals` son la misma lista, **tienen la misma longitud** (2) y cualquier modificación se refleja en ambas.

> No lo habia pensado, es cierto que si modifico la lista en nums, pues claro que vals que es igual a nums se modificará tambien.

Por lo tanto la respuesta correcta es la B) nums y vals se refieren a la misma lista y C) nums y vals son de la misma longitud







---






## 15. Slicing y asignación de listas independientes

¿Cuáles de los siguientes enunciados son verdaderos? (Selecciona dos respuestas)

```python
    nums = [1, 2, 3]
    vals = nums[-1:-2]
```

Opciones de respuesta:

* A) vals es más larga que nums
* B) nums y vals son de la misma longitud
* C) nums es más larga que vals
* D) nums y vals son dos listas diferentes

    Mi razonamiento

        Esta es muy similar a la anterior pregunta, a diferencia de que esta no elimina sino que hace que sea una lista con ciertos indices iniciando desde -1 hasta el -2.
        La A es obvio que es falsa.
        La B tampoco es debido a que no contienen la misma longitud debido a que vals contiene cierta sección de nums.
        La C puede ser probable.
        La D puede ser... Pero me confunde porque realmente no son diferentes sino que vals hace referencia a cierta sección.

    Entonces por descarte seleccióno C y D.

Confirmemos:

* nums[-1:-2].

* Recordemos que en Python, el slicing [inicio:fin] selecciona elementos desde inicio hasta fin.

Si inicio está a la derecha de fin (es decir, si inicio >= fin), el resultado es una lista vacía, a menos que se use un paso negativo.
Aquí no hay paso, por defecto es 1 (positivo). Entonces, -1 es el último elemento (índice 2), y -2 es el penúltimo (índice 1).

Como -1 > -2 (porque -1 es mayor que -2, es decir, el índice de inicio es mayor que el de fin), el slicing con paso positivo no devuelve nada, devuelve una lista vacía [].

Entonces vals es una lista vacía []. nums sigue siendo [1, 2, 3].

Ya una vez pensado esto, nosotros podemos decir que

A) "vals es más larga que nums" → Falso, porque vals tiene longitud 0 y nums longitud 3.

B) "nums y vals son de la misma longitud" → Falso, longitudes 3 y 0.

C) "nums es más larga que vals" → Verdadero, 3 > 0.

D) "nums y vals son dos listas diferentes" → Verdadero, porque la asignación mediante slicing crea una nueva lista (aunque sea vacía). vals es una nueva lista independiente de nums.

Para una proxima vez, podemos reflexionar que:

* Cuando iniciamos con 0 o positivos... Es del primer numero al ultimo. 0 será entonces el primer número.

* Cuando iniciemos con -1 o negativos sera del ultimo número al primero. Por ende -1 es el ultimo número.

Y recordemos que:

Cuando el paso es positivo (el caso por defecto), Python siempre avanza hacia la derecha (de izquierda a derecha).
Para que te devuelva elementos, se debe cumplir que la posición de inicio esté más a la izquierda que la posición de fin.

En otras palabras:

Si conviertes ambos índices a su posición lineal (positiva), debe ser inicio < fin.

Si inicio >= fin, el slicing está "pidiendo" ir hacia atrás, pero el paso es positivo, así que no encuentra nada y devuelve una lista vacía [].








---











## 16. Inserción dinámica con bucle for en listas

¿Cuál es la output del siguiente fragmento de código?

```python
    my_list_1 = [1, 2, 3]
    my_list_2 = []
    for v in my_list_1:
        my_list_2.insert(0, v)
    print(my_list_2)
```

Opciones de respuesta:

* A) [3, 2, 1]
* B) [1, 2, 3]
* C) [1, 1, 1]
* D) [3, 3, 3]

> Pues... Siempre va a insertar cada elemento en la ubicación 0... Fue chevere entender este ejercicio a la primera vez.
>
> El truco aqui, es que cada valor remplazara el indice 0 y el resto se moverá hacia la derecha. Por ende [3, 2, 1]

Confirmemos:

- `my_list_1 = [1, 2, 3]`
- `my_list_2 = []` (vacía)
- El bucle `for v in my_list_1:` recorre los elementos en orden: `1`, `2`, `3`.
- En cada iteración, `my_list_2.insert(0, v)` inserta el valor actual **al principio** (posición 0).

**Seguimiento:**

| Iteración | `v` | `my_list_2` después de insertar |
|-----------|-----|----------------------------------|
| 1         | 1   | `[1]`                            |
| 2         | 2   | `[2, 1]`                         |
| 3         | 3   | `[3, 2, 1]`                      |

Por lo tanto, al final se imprime `[3, 2, 1]`.







---







## 17. Modificación de listas en bucle con inserción fija

¿Cuál es la output del siguiente fragmento de código?

```python
    my_list = [1, 2, 3]
    for v in range(len(my_list)):
        my_list.insert(1, my_list[v])
    print(my_list)
```

Opciones de respuesta:

* A) [3, 2, 1, 1, 2, 3]
* B) [1, 1, 1, 1, 2, 3]
* C) [1, 2, 3, 1, 2, 3]
* D) [1, 2, 3, 3, 2, 1]

> Esto sigue la misma estrategia que la anterior, pero en indice 1.
> Por ende 1, 2, 3, 3, 2, 1. Es mi creencia, aunque en este momento no me encuentro tan seguró. Por ende seleccióno la D.
>
> Y entonces... Me fue mal. No entendí esta vez, ¿Por qué habrá sido?

Analicemos:

```python

    # Se evalúa al inicio del bucle.

    my_list = [1, 2, 3]

    # En ese momento, len(my_list) es 3.
    # Por lo que range(3) produce v = 0, 1, 2.

    for v in range(len(my_list)):

        # El bucle se ejecutará tres veces.
        # Pero ojo: la lista se modifica en cada iteración, y el acceso my_list[v] se hace con el valor actual de v y la lista actual.

        my_list.insert(1, my_list[v])
    print(my_list)
```

Por ende:

El bucle `for v in range(len(my_list))` se ejecuta **3 veces** (pues `len(my_list)` al inicio es 3).  
Cada vez se inserta en la posición `1` el elemento que está en la posición `v` **en ese momento** (la lista va creciendo).

> Me faltó entender que era en ese momento, es decir que siempre iba a insertar 1.

my_list[v] siempre va a tomar los valores originales 1, 2, 3, pero la lista está cambiando mientras el bucle se ejecuta.

1. range(len(my_list)) se calcula UNA SOLA VEZ al inicio (cuando la lista mide 3). Por lo tanto, el bucle solo va a dar 3 vueltas (v = 0, 1, 2).

2. la lista crece con cada insert. Al insertar en la posición 1, todos los elementos que están a la derecha se corren una posición hacia la derecha.


| Iteración | `v` | Valor de `my_list[v]` (antes de insertar) | Lista antes | Operación `insert(1, ...)` | Lista después |
|-----------|-----|-------------------------------------------|-------------|----------------------------|---------------|
| 1         | 0   | `my_list[0] = 1`                          | `[1, 2, 3]` | inserta `1` en posición 1  | `[1, 1, 2, 3]` |
| 2         | 1   | `my_list[1] = 1`                          | `[1, 1, 2, 3]` | inserta `1` en posición 1  | `[1, 1, 1, 2, 3]` |
| 3         | 2   | `my_list[2] = 1`                          | `[1, 1, 1, 2, 3]` | inserta `1` en posición 1  | `[1, 1, 1, 1, 2, 3]` |

Al final, la lista queda `[1, 1, 1, 1, 2, 3]`, que corresponde a la opción B.








---






## 18. List comprehension con función range

¿Cuántos elementos contiene la lista my_list?

```python
    my_list = [i for i in range(-1, 2)]
```

Opciones de respuesta:

* A) 4
* B) 1
* C) 3
* D) 2

> No entiendo la expresión i for i in range(-1, 2). Esta pregunta me corchó :8
> Tal vez... Sea -1, 0, 1, 2... Entonces tal vez 4 y por ende la opción A... pero esto es solo Intuición.

De forma chistosa estuve muy cerca de la respuesta, solo me faltó entender un punto:

* range(-1, 2) genera números desde el inicio (-1) hasta un número antes del final (2), es decir: -1, 0, 1.

Siendo asi, la respuesta correcta era la C) 3.









---






## 19. Matrices y suma de diagonal con list comprehension

¿Cuál es la output del siguiente fragmento de código?

```python   
    t = [[3-i for i in range(3)] for j in range (3)]
    s = 0
    for i in range(3):
        s += t[i][i]
    print(s)
```

Opciones de respuesta:

* A) 2
* B) 6
* C) 7
* D) 4

> Esta es una pregunta que tiene una estetica muy compleja... Y por otro lado me corchó... Realmente no la entiendo, tanto como para tener que responder de forma aleatoria.

**¿Qué es 3-i?**: Es chistoso que este tema me halla confundido... Recordemos que los espacios en programación realmente no es que afecten... Esto termina siendo una resta de 3 menos la variable i.

> Estos temas empiezan a corresponder a matrices.

Esta y muchas cosas de este código no las entiendo aun realmente.

Entonces analicemos.

Tenemos que desglosar esto, inicialmente... Solo en la primera línea:

```python
    t = [[3-i for i in range(3)] for j in range (3)]
```

Vamos a analizar esta línea en dos secciones para determinar el valor de t.

Entonces la primera:

```python
    [3 - i for i in range(3) segunda-sección]
```

* range(3) genera la secuencia de números: 0, 1, 2

* En ese momento i va tomando cada uno de estos valores.

Esto es clave, porque los bucles van a dar exactamente 3 vueltas siendo asi:

Vuelta 1 (`i = 0`)**: `3 - 0 = 3`

Vuelta 2 (`i = 1`)**: `3 - 1 = 2`

Vuelta 3 (`i = 2`)**: `3 - 2 = 1`

Y bien, ahora entendiendo esto... Debemos determinar nuestra segunda sección de esta línea de código.

```python
    [ [primera-sección] for j in range(3) ]
```

Esto significa: Repite el cálculo de [3, 2, 1] tres veces (una por cada j), y mete cada resultado como una fila dentro de la lista grande.

* Cuando `j = 0` → se crea `[3, 2, 1]`
* Cuando `j = 1` → se crea `[3, 2, 1]`
* Cuando `j = 2` → se crea `[3, 2, 1]`

**Importante:** la variable `j` **no se usa** dentro de la fórmula, solo sirve para contar cuántas filas queremos (3 en total).

> De esta forma, aqui en este momento ya tenemos una integración del código.

Ya en este punto, que tenemos desglosados los elementos de la primera línea del código asi que recordemos nuestro algoritmo:

```python   
    t = [[3-i for i in range(3)] for j in range (3)]
    s = 0
    for i in range(3):
        s += t[i][i]
    print(s)
```

**Resultado final de `t` (una matriz de 3x3):**
```python
t = [
    [3, 2, 1],   # Fila 0 (j=0)
    [3, 2, 1],   # Fila 1 (j=1)
    [3, 2, 1]    # Fila 2 (j=2)
]
```
Hay visualizar la matriz con sus índices
Cada elemento tiene dos "coordenadas": **fila** (primer índice) y **columna** (segundo índice).

| Coordenada | Valor |
| :--- | :--- |
| `t[0][0]` (fila 0, columna 0) | **3** |
| `t[0][1]` (fila 0, columna 1) | 2 |
| `t[0][2]` (fila 0, columna 2) | 1 |
| `t[1][0]` (fila 1, columna 0) | 3 |
| `t[1][1]` (fila 1, columna 1) | **2** |
| `t[1][2]` (fila 1, columna 2) | 1 |
| `t[2][0]` (fila 2, columna 0) | 3 |
| `t[2][1]` (fila 2, columna 1) | 2 |
| `t[2][2]` (fila 2, columna 2) | **1** |


El bucle `for` y la suma de la diagonal

El código dice:
```python
for i in range(3):
    s += t[i][i]
```

Esto es un bucle que va a recorrer `i = 0, 1, 2`.  
En cada paso, suma el elemento que está en la **misma fila y columna** (eso es la diagonal principal, de arriba izquierda a abajo derecha).

- **Paso 1 (`i = 0`)**: `s += t[0][0]` → `s = 0 + 3 = 3`
- **Paso 2 (`i = 1`)**: `s += t[1][1]` → `s = 3 + 2 = 5`
- **Paso 3 (`i = 2`)**: `s += t[2][2]` → `s = 5 + 1 = 6`

Recordemos que s += t[2][2] tambien significa s = s + t[2][2].

1. Python mira el valor actual de s → es 0.

2. Python calcula t[0][0] → esto es el elemento en la fila 0, columna 0, que vale 3.

3. Python hace la suma: 0 + 3 = 3.

4. Python guarda ese 3 dentro de s. Ahora s ya no es 0 sino que es 3.

> Bonito ¿No?

| Paso | Valor de `i` | Elemento tocado (`t[i][i]`) | Valor de `s` (antes) | Operación realizada | Nuevo valor de `s` (después) | Explicación visual |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Inicio** | - | - | `0` | - | `0` | La variable acumuladora empieza vacía (cero). |
| **Iteración 1** | `0` | `t[0][0]` = **3** | `0` | `s = 0 + 3` | **`3`** | Sumamos el primer número de la diagonal. |
| **Iteración 2** | `1` | `t[1][1]` = **2** | `3` | `s = 3 + 2` | **`5`** | El `s` ya vale `3`. Le sumamos el segundo número (`2`) → da `5`. |
| **Iteración 3** | `2` | `t[2][2]` = **1** | `5` | `s = 5 + 1` | **`6`** | El `s` ya vale `5`. Le sumamos el tercer número (`1`) → da `6`. |
| **Final** | - | - | - | `print(s)` | **`6`** | El resultado final que se muestra en consola es `6`. |

> El programa imprime el valor de `s`, que es **`6`**.











---






## 20. Indexación fuera de rango en listas anidadas

¿Cuál es la output del siguiente fragmento de código?

```python
    my_list = [[0, 1, 2, 3] for i in range(2)]
    print(my_list[2][0])
```

Opciones de respuesta:

* A) 2
* B) 1
* C) el fragmento generará un error de ejecución
* D) 0

> Entonces, ahora una pregunta similar a la anterior.
>
> Me confunde el print... Aun debo reforzar estos temas.

Entonces miremos:

```python
    # range(2) genera [0, 1]
    # Cada vez, crea una nueva lista [0, 1, 2, 3].
    # Entonces my_list es una lista que contiene dos listas internas (cada una de longitud 4).
    my_list = [[0, 1, 2, 3] for i in range(2)]
```

De esta forma entonces, nosotros podemos pensar en que la lista es:

> Esto era lo que me faltaba entender para estas iteraciones, se generan otras listas y se pueden ubicar mediante 2 indices [n][n]

```python
    my_list = [
        [0, 1, 2, 3],   # índice 0
        [0, 1, 2, 3]    # índice 1
    ]
```

Ahora por otro lado.

my_list[2] intenta acceder al tercer elemento de my_list (índice 2).

```python
    print(my_list[2][0])
```

Pero my_list solo tiene índices 0 y 1 (dos elementos).

Por lo tanto, my_list[2] lanza un IndexError: list index out of range.

> wow.

> Si llegaste hasta aqui, muchas gracias por leer!
