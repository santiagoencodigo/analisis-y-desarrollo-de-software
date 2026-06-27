# Listas

> A continuación mis apuntes sobre el curso de Fundamentos de Python 1.

> Las listas, personalmente lo relaciono mucho con el tema de Arrays en JavaScript. Siento que las listas son muy importantes para el POO.

* Se pueden hacer operaciones entre listas

* Se pueden indexar, actualizar y eliminar objetos de una lista.

* Existen las rodajas en python, aunque. ¿Qué significa esto? 

* Existen Funciones de Listas

* Existen métodos de lista






---






## Tabla de Contenido

1. [Introducción a las listas](#introducción-a-las-listas)
2. [Funciones vs Métodos](#funciones-vs-métodos)
3. [Conclusiones](#conclusiones)






---






## Introducción a las listas

Esta pregunta se responde de una forma muy sencilla:

    "Puede suceder que tengas que leer, almacenar, procesar y, finalmente, imprimir docenas, quizás cientos, tal vez incluso miles de números. ¿Entonces qué? ¿Necesitas crear una variable separada para cada valor? ¿Tendrás que pasar largas horas escribiendo sentencias como la que se muestra a continuación?"

```python
    numero1 = int(input())
    numero2 = int(input())
    numero3 = int(input())
    numero4 = int(input())
    numero5 = int(input())
    numero6 = int(input())

    # Y eso que estos son 6 números, imaginate con 1000. O incluso más. Hoy en día las empresas más grandes pueden tener millones de usuarios.

```

Para la comprensión de esto, como ejercicio se puede realizar un programa que lea cinco números, los imprima en orden desde el más pequeño hasta el más grande (*Este tipo de procesamiento se denomina **ordenamiento***).

Y entonces aprendí algo nuevo: Las variables con un solo valor se les llama Escalares. Pero es de tenerse en cuenta entonces que un diccionario es una variable que puede contener cien, mil o incluso diez mil valores

Pero siendo asi, surge una nueva pregunta ¿Cómo podemos escojer entre esos diez mil valores?

A continuación observe el siguente diccionario y su sintaxis:

```python
    # numbers es una lista que consta de cinco valores, todos ellos números.

    numbers = [10, 5, 7, 2, 1]

    # También podemos decir que esta sentencia crea una lista de longitud igual a cinco (ya que contiene cinco elementos).

    # Como hay cinco elementos en nuestra lista, al último de ellos se le asigna el número cuatro. Porque recordemos que esta lista inicia su numeración desde 0.
```

* Los elementos dentro de una lista pueden tener diferentes tipos. Algunos de ellos pueden ser enteros, otros son flotantes y otros pueden ser listas.

* Python ha adoptado una convención que indica que los elementos de una lista están siempre numerados desde cero. Esto significa que el elemento almacenado al principio de la lista tendrá el número cero. 

---

**¿Cómo cambias el valor de un elemento elegido en la lista?**

```python
    numbers = [10, 5, 7, 2, 1]
    print("Contenido de la lista:", numbers)  # Imprimiendo contenido de la lista original.


    # Como se observa aqui, lo que se hizo fue declararlo despues por medio de su indice [0]


    numbers[0] = 111
    print("Nuevo contenido de la lista: ", numbers)  # Contenido actual de la lista.
```

Teniendo en cuenta esto observe y analice el siguente código:

```python
    numbers = [10, 5, 7, 2, 1]
    print("Contenido de la lista original:", numbers)  # Imprimiendo el contenido de la lista original.

    numbers[0] = 111
    print("\nContenido de la lista con cambio:", numbers)  # Imprimiendo contenido de la lista con 111.

    numbers[1] = numbers[4]  # Copiando el valor del quinto elemento al segundo elemento.
    print("Contenido de la lista con intercambio:", numbers)  # Imprimiendo contenido de la lista con intercambio.

    print("\nLongitud de la lista:", len(numbers))  # Imprimiendo la longitud de la lista.
```

**La función len()**: Si deseas verificar la longitud actual de la lista, puedes usar una función llamada len() (su nombre proviene de length - longitud). La función toma el nombre de la lista como un argumento y devuelve el número de elementos almacenados actualmente dentro de la lista (en otras palabras - la longitud de la lista).

---

**Eliminando elementos de una lista**

Cualquier elemento de la lista puede ser eliminado en cualquier momento.
Esto se hace con una instrucción llamada del (eliminar).

> Es una instrucción, no una función.

Observe el siguente código y analice:

```python
    del numbers[1]
    print(len(numbers))
    print(numbers)
```

---

**Los índices negativos son legales**

Puede parecer extraño, pero los índices negativos son válidos, y pueden ser muy útiles.

Un elemento con un índice igual a -1 es el último en la lista.

Siendo de esta forma, ¿Cual es el resultado del print?

```python
    numbers = [111, 7, 2, 1]
    print(numbers[-1])
```

Del mismo modo, el elemento con un índice igual a -2 es el anterior al último en la lista.

```python
    numbers = [111, 7, 2, 1]
    print(numbers[-2])
```







---







## Funciones vs Métodos

Un método es un tipo específico de función, se comporta como una función y se parece a una función, pero difiere en la forma en que actúa y en su estilo de invocación.

* Una función obtiene datos, puede crear nuevos datos y (generalmente) produce un resultado.

* Un método hace todas estas cosas, pero también puede cambiar el estado de una entidad seleccionada.

> Un método es propiedad de los datos para los que trabaja, mientras que una función es propiedad de todo el código.

Un ejemplo de invocación de una función es:

```python
    result = function(arg)
```

Una invocación de un método típico usualmente se ve así:

```python
    result = data.method(arg)
```

La razón del por qué hablamos de Métodos y Funciones, es porque para las listas esto se vuelve todavia más importante debido a las funcionalidades que se le puede agregar.

Como por ejemplo:

**Agregando elementos a una lista: append() y insert()**

Un nuevo elemento puede ser añadido al final de la lista existente:

```python
    list.append(value)
```

El método insert() puede agregar un nuevo elemento en cualquier lugar de la lista, no solo al final:

```python
    list.insert(location, value)
    # el segundo es el elemento a insertar.
```

Analice el siguente código:

```python
    numbers = [111, 7, 2, 1]
    print(len(numbers))
    print(numbers)

    numbers.append(4)

    print(len(numbers))
    print(numbers)

    numbers.insert(0, 222)
    print(len(numbers))
    print(numbers)

    # numbers.insert(1, 333)
```

Como ejercicio chistoso e interesante existe esta posibilidad:

```python
    my_list = []  # Creando una lista vacía.

    for i in range(5):
        my_list.append(i + 1)

    print(my_list)
```

Ahora analice esta otra posibilidad:

```python
    my_list = []  # Creando una lista vacía.
    
    for i in range(5):
        my_list.insert(0, i + 1)
    
    print(my_list)

    # Esto hace lo mismo que el anterior ejercicio, pero totalmente inverso.
```

El bucle for tiene una variante muy especial que puede procesar las listas de manera muy efectiva.

```python
    my_list = [10, 1, 8, 3, 5]
    total = 0

    for i in range(len(my_list)):
        total += my_list[i]

    print(total)

    Este ejercicio cumple con el objetivo de: calcular la suma de todos los valores almacenados en la lista my_list.
```

Y ahora por otro lado, existen la posibilidad de cambiar el orden y valor de estas listas:

```python
    my_list = [10, 1, 8, 3, 5]

    my_list[0], my_list[4] = my_list[4], my_list[0]
    my_list[1], my_list[3] = my_list[3], my_list[1]

    print(my_list)
```






---






## Conclusiones

1. La lista es un tipo de dato en Python que se utiliza para almacenar múltiples objetos.

2. Es una colección ordenada y mutable de elementos separados por comas entre corchetes.

3. Las listas se pueden indexar y actualizar.

4. Las listas pueden estar anidadas (Contener diferentes tipos de datos).

5. Las listas pueden ser iteradas mediante el uso del bucle for.

6. La función len() se puede usar para verificar la longitud de la lista.

7. Una invocación típica de función tiene el siguiente aspecto: result = function(arg), mientras que una invocación típica de un método se ve así: result = data.method(arg).

Analice los siguentes códigos y busque responder las preguntas:

> Para mi esto es divertido, me gusta.

```python
    # Pregunta 1: ¿Cuál es el resultado del siguiente fragmento de código?

    lst = [1, 2, 3, 4, 5]
    lst.insert(1, 6)
    del lst[0]
    lst.append(1)
    
    print(lst)
```

```python
    # Pregunta 2: ¿Cuál es el resultado del siguiente fragmento de código?

    lst = [1, 2, 3, 4, 5]
    lst_2 = []
    add = 0
    
    for number in lst:
        add += number
        lst_2.append(add)
    
    print(lst_2)
```

```python
    # Pregunta 3: ¿Cuál es el resultado del siguiente fragmento de código?

    lst = []
    del lst
    print(lst)
```

```python
    # Pregunta 4: ¿Cuál es el resultado del siguiente fragmento de código?

    lst = [1, [2, 3], 4]
    print(lst[1])
    print(len(lst))
```