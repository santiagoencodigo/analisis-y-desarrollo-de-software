> 28/06/2026

# Operaciones con listas

> ¿Qué seran las operaciones con listas?

Se va a aprender a cómo procesar listas utilizando rebanadas y los operadores in y not in.

> ¿Qué seran las rebanadas?

> ¿Qué son los Operadores in y not in?

También analizarás algunos programas simples que utilizan el concepto de listas para aprender a aplicarlas en proyectos más desafiantes.

> ¿Cuales serian unos más desafiantes?





--- 





## Tabla de Contenido

1. [¿Qué son?](#qué-son)

2. [Indices negativos](#índices-negativos)

3. [Los operadores in y not in](#los-operadores-in-y-not-in)

4. [Algunos programas simples](#algunos-programas-simples)

5. [Conclusiones](#conclusiones)





---





## ¿Qué son?

Ahora analice el siguente código para identificar una caracteristica de las listas:

```python
    list_1 = [1]
    list_2 = list_1
    list_1[0] = 2
    print(list_2)
```

El programa:
* crea una lista de un elemento llamada list_1;
* la asigna a una nueva lista llamada list_2;
* cambia el único elemento de list_1;
* imprime la list_2;

La parte sorprendente es el hecho de que el programa mostrará como resultado: [2], no [1], que parece ser la solución obvia.

Se podría decir que:
* el nombre de una variable ordinaria es el nombre de su contenido;
* el nombre de una lista es el nombre de una ubicación de memoria donde se almacena la lista.

La asignación: list_2 = list_1 copia el nombre del arreglo no su contenido. En efecto, los dos nombres (list_1 y list_2) identifican la misma ubicación en la memoria de la computadora. Modificar uno de ellos afecta al otro, y viceversa.

¿Cómo te las arreglas con eso?

Para esto la mejor solución es hacer uso de las rebanadas.

* Una rebanada es un elemento de la sintaxis de Python que permite hacer una copia nueva de una lista, o partes de una lista.

> En realidad, copia el contenido de la lista, no el nombre de la lista.

Analice el siguente código:

```python
    list_1 = [1]
    list_2 = list_1[:]

    # Esta parte no visible del código descrito como [:] puede producir una lista completamente nueva.

    list_1[0] = 2
    print(list_2)

    # Su output es [1].
```

Una de las formas más generales de la rebanada es la siguiente:

```python
    my_list[inicio:fin]
```

Como puedes ver, se asemeja a la indexación.

Una rebanada de este tipo crea una nueva lista (de destino), tomando elementos de la lista de origen

* los elementos de los índices desde el start hasta el fin fin - 1.

Siendo asi, analice el siguente código:

```python
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[1:3]
    print(new_list)    

    # La output del fragmento es: [8, 6]
```

Ahora analice el siguente pedazo de código:

```python
    # Copiando la lista completa.
    list_1 = [1]
    list_2 = list_1[:]
    list_1[0] = 2
    print(list_2)

    # Copiando parte de la lista.
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[1:3]
    print(new_list)
```







---







## índices negativos

Teniendo en cuenta que:

```python
    my_list[start:end]

    #     Para confirmar:

        # start es el índice del primer elemento incluido en la rebanada.
        # end es el índice del primer elemento no incluido en la rebanada.

```

Así es como los índices negativos funcionan en las rebanadas:

```python
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[1:-1]
    print(new_list)   

    # [8, 6, 4]
```

Si start especifica un elemento que se encuentra más allá del descrito por end (desde el punto de vista inicial de la lista), la rebanada estará vacía:

```python
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[-1:1]
    print(new_list)
    
    # La output del fragmento es: []

```

Si omites el start en tu rebanada, se supone que deseas obtener un segmento que comienza en el elemento con índice 0.

En otras palabras, la rebanada sería de esta forma:

```python
    my_list[:end]

    # es un equivalente más compacto de:
        # my_list[0:end]
```

Analice el código a continuación:

```python
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[:3]

    # Es por esto que su output es: [10, 8, 6].

    print(new_list)
```

Del mismo modo, si omites el end en tu rebanada, se supone que deseas que el segmento termine en el elemento con el índice len(my_list).

la rebanada sería de esta forma:

```python
    my_list[start:]
```

es un equivalente más compacto de:

```python
    my_list[start:len(my_list)]
```

Ahora analice el siguente bloque de código:

```python
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[3:]
    print(new_list)   

    # output es: [4, 2].
```

el omitir el inicio y fin crea una copia de toda la lista:

```python
    my_list = [10, 8, 6, 4, 2]
    new_list = my_list[:]
    print(new_list)    
```

---

**Más instrucciones de del que puede eliminar más de un elemento a la vez, tambien puede eliminar rebanadas.

Como por ejemplo:

```python
    my_list = [10, 8, 6, 4, 2]
    del my_list[1:3]
    print(my_list)

    # [10, 4, 2].
```

También es posible eliminar todos los elementos a la vez:

```python
    my_list = [10, 8, 6, 4, 2]
    del my_list[:]
    print(my_list)   

    # [].
```

Al eliminar la rebanada del código, su significado cambia dramáticamente.

Como por ejemplo:

```python
    my_list = [10, 8, 6, 4, 2]
    del my_list
    print(my_list)
    
    # La instrucción del eliminará la lista, no su contenido.

    # La función print() de la última línea del código provocará un error de ejecución.
```






---






## Los operadores in y not in

> Los relaciono mucho con cierto tipo de bucles.

Python ofrece dos operadores muy poderosos, capaces de revisar la lista para verificar si un valor específico está almacenado dentro de la lista o no.

Estos operadores son:

```python

    # El primero de ellos (in) verifica si un elemento dado (el argumento izquierdo).
    # Está actualmente almacenado en algún lugar dentro de la lista (el argumento derecho) .

    elem in my_list

    # El segundo (not in) comprueba si un elemento dado (el argumento izquierdo) está ausente en una lista.
    # El operador devuelve True en este caso.

    elem not in my_list

    # Entonces podemos pensarlo como un identificador por cada elemento de la lista

    # El operador devuelve True en este caso.
```

A continuación un ejemplo de código:

```python
    # El fragmento muestra ambos operadores en acción.
    my_list = [0, 3, 12, 8, 2]

    print(5 in my_list)
    print(5 not in my_list)
    print(12 in my_list)
```






---







## Algunos programas simples

Analice el siguente código:

```python

    # Se intenta encontrar el valor mayor en la lista.

    mi_lista = [17, 3, 11, 5, 1, 9, 7, 15, 13]
    largest = mi_lista[0]

    for i in range(1, len(mi_lista)):
        if mi_lista[i] > largest:
            largest = mi_lista[i]

    print(largest)

    # Asumimos temporalmente que el primer elemento es el más grande y comparamos la hipótesis con todos los elementos restantes de la lista.

```

El código da como resultado el 17 también (nada inusual).

Si necesitas ahorrar energía de la computadora, puedes usar una rebanada:

> Cómo será este tema de ahorrar la energia de una computadora?

```python
    my_list = [17, 3, 11, 5, 1, 9, 7, 15, 13]
    largest = my_list[0]
    
    for i in my_list[1:]:
        if i > largest:
            largest = i
    
    print(largest)

```

¿Cuál de estas dos acciones consume más recursos informáticos 
* ¿Solo una comparación? o ¿Rebanar casi todos los elementos de una lista?

Ahora encontremos la ubicación de un elemento dado dentro de una lista:

```python
    # Entonces, vemos la lista
    my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    # Queremos buscar el 5
    to_find = 5

    # Dejamos como predeterminado found en false
    found = False
    
    # Un bucle de cada elemento en rango del numero de elementos.
    # Este dato se guarda en la variable my_list siendo esta nuestra lista.
    for i in range(len(my_list)):

        # Pero entonces, aqui lo que va a buscar es el 5?
        found = my_list[i] == to_find

        # Y entonces si found se vuelve true entonces se rompe el bucle:
        if found:
            break
    
    if found:
        print("Elemento encontrado en el índice", i)
    else:
        print("ausente")   
```

Analice el siguente código:

```python
    # la lista drawn almacena todos los números sorteados:
    drawn = [5, 11, 9, 42, 3, 49]
    
    # La lista bets almacena los números con que se juega:
    bets = [3, 7, 11, 42, 34, 49]

    # la variable hits cuenta tus aciertos.
    hits = 0
    
    for number in bets:
        if number in drawn:
            hits += 1
    
    print(hits)
    # la output del programa es: 4.
```

A continuación un ejemplo de un problema con listas:

Imagina una lista

> No muy larga ni muy complicada, solo una lista simple que contiene algunos números enteros.

Algunos de estos números pueden estar repetidos, y esta es la clave. 
* No queremos ninguna repetición.
* Queremos que sean eliminados.

Para ejecutar el ejemplo es escribir un programa que elimine todas las repeticiones de números de la lista. 

> El objetivo es tener una lista en la que todos los números aparezcan no más de una vez.

```python
# Nota: Asume que la lista original está ya dentro del código
    
    # no tienes que ingresarla desde el teclado.

# No hemos proporcionado datos de prueba, ya que sería demasiado fácil. Puedes usar nuestro esqueleto en su lugar.

    my_list = [1, 2, 4, 4, 1, 4, 2, 6, 2, 9]
    
    # Escribe tu código aquí.
    
    print("La lista con elementos únicos:")
    print(my_list)

    # Interesante que a partir de esta estructura empiece a pensar en una solución.

        for element in my_list:
        if element not in unique_list:
            unique_list.append(element)

    print("La lista con elementos únicos:")
    print(unique_list)

    # [1, 2, 4, 6, 9]

    
    # U otra solución podría ser
    unique_list = list(set(my_list))

    print("La lista con elementos únicos:")
    print(unique_list)

```






---






## Conclusiones


```python
    # Si tienes una lista list_1, y la siguiente asignación: list_2 = list_1 esto no hace una copia de la lista list_1
    # Hace que las variables list_1 y list_2 apunten a la misma lista en la memoria. 
    
    # Por ejemplo:

    vehicles_one = ['coche', 'bicicleta', 'motor']
    print(vehicles_one) # output: ['coche', 'bicicleta', 'motor']
    
    vehicles_two = vehicles_one
    del vehicles_one[0] # elimina 'coche'
    print(vehicles_two) # output: ['bicicleta', 'motor']
```


```python
    # Si deseas copiar una lista o parte de la lista, puedes hacerlo haciendo uso de rebanadas:

    colors = ['rojo', 'verde', 'naranja']
    
    copy_whole_colors = colors[:]  # copia la lista entera
    copy_part_colors = colors[0:2]  # copia parte de la lista
```
 
```python
    # También puede utilizar índices negativos para hacer uso de rebanadas. Por ejemplo:

    sample_list = ["A", "B", "C", "D", "E"]
    new_list = sample_list[2:-1]
    print(new_list)  # output: ['C', 'D']
```


```python
    # Los parámetros start y end son opcionales al partir en rebanadas una lista: list[start:end], por ejemplo:

    my_list = [1, 2, 3, 4, 5]
    slice_one = my_list[2: ]
    slice_two = my_list[ :2]
    slice_three = my_list[-2: ]
    
    print(slice_one)  # output: [3, 4, 5]
    print(slice_two)  # output: [1, 2]
    print(slice_three)  # output: [4, 5]
```


```python
    # Puedes eliminar rebanadas utilizando la instrucción del:


    my_list = [1, 2, 3, 4, 5]
    del my_list[0:2]
    print(my_list)  # output: [3, 4, 5]
    
    del my_list[:]
    print(my_list)  # elimina el contenido de la lista, genera: []
```


``` python
    # Puedes probar si algunos elementos existen en una lista o no utilizando las palabras clave in y not in, por ejemplo:


    my_list = ["A", "B", 1, 2]
    
    print("A" in my_list)  # output: True
    print("C" not in my_list)  # output: True
    print(2 not in my_list)  # output: False
```
 

A continuación algunas preguntas:

> Me gustaria analizarlas cada vez que lea este documento, por ende no dejaré las respuestas.

**Pregunta 1: ¿Cuál es el resultado del siguiente fragmento de código?**

```python
    list_1 = ["A", "B", "C"]
    list_2 = list_1
    list_3 = list_2
    
    del list_1[0]
    del list_2[0]
    
    print(list_3)
``` 

**Pregunta 2: ¿Cuál es el resultado del siguiente fragmento de código?**

```python
    list_1 = ["A", "B", "C"]
    list_2 = list_1
    list_3 = list_2
    
    del list_1[0]
    del list_2
    
    print(list_3)
``` 

**Pregunta 3: ¿Cuál es el resultado del siguiente fragmento de código?**

```python
    list_1 = ["A", "B", "C"]
    list_2 = list_1
    list_3 = list_2
    
    del list_1[0]
    del list_2[:]
    
    print(list_3)
``` 


**Pregunta 4: ¿Cuál es el resultado del siguiente fragmento de código?**

```python
    list_1 = ["A", "B", "C"]
    list_2 = list_1[:]
    list_3 = list_2[:]
    
    del list_1[0]
    del list_2[0]
    
    print(list_3)
``` 

**Pregunta 5: Inserta in o not in en lugar de ??? para que el código genere el resultado esperado.**

```python
    my_list = [1, 2, "in", True, "ABC"]
    
    print(1 ??? my_list)  # output True
    print("A" ??? my_list)  # output True
    print(3 ??? my_list)  # output True
    print(False ??? my_list)  # output False
``` 








 




