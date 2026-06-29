> 28/06/2026

# Algoritmo Burbuja

> ¿Qué será?, tambien se habla sobre Ordenamiento de Listas... ¿A qué hace referencia ese tema?

> Existen los algoritmos de clasificación, ¿Qué es esto?

Digamos que una lista se puede ordenar de dos maneras:
* ascendente (o más precisamente - no descendente) - si en cada par de elementos adyacentes, el primer  elemento no es mayor que el segundo;
* descendente (o más precisamente - no ascendente) - si en cada par de elementos adyacentes, el primer elemento no es menor que el segundo*.

Se habla entonces un nuevo problema a solucionar:

```
    introducimos otra variable, su tarea es observar si se ha realizado algún intercambio durante el pase o no. Si no hay intercambio, entonces la lista ya está ordenada, y no hay que hacer nada más. Creamos una variable llamada swapped, y le asignamos un valor de False para indicar que no hay intercambios. De lo contrario, se le asignará True.
```

Su solución entonces es:

```python
    my_list = [8, 10, 6, 2, 4]  # lista a ordenar
    
    for i in range(len(my_list) - 1):  # necesitamos (5 - 1) comparaciones

    # Me parece curioso el uso de len(my_list) - 1 |  -> Muy inteligente.

        if my_list[i] > my_list[i + 1]:  # compara elementos adyacentes
            my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]  # Si terminamos aquí, tenemos que intercambiar elementos.    
```

Y este código de aqui:

```python
    my_list = [8, 10, 6, 2, 4]  # lista a ordenar
    swapped = True  # Lo necesitamos verdadero (True) para ingresar al bucle while.
    
    while swapped:
        swapped = False  # no hay intercambios hasta ahora
        for i in range(len(my_list) - 1):
            if my_list[i] > my_list[i + 1]:
                swapped = True  # ¡ocurrió el intercambio!
                my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]
    
    print(my_list)
```

Ahora a continuación un programa completo, enriquecido por una conversación con el usuario, y que permite ingresar e imprimir elementos de la lista: El ordenamiento burbuja - versión final interactiva.

```python
    my_list = []
    swapped = True
    num = int(input("¿Cuántos elementos deseas ordenar?: "))

    for i in range(num):
        val = float(input("Ingresa un elemento de la lista: "))
        my_list.append(val)

    while swapped:
        swapped = False
        for i in range(len(my_list) - 1):
            if my_list[i] > my_list[i + 1]:
                swapped = True
                my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]

    print("\nOrdenada:")
    print(my_list)
```

Python, sin embargo, tiene sus propios mecanismos de clasificación. 

Nadie necesita escribir sus propias clases, ya que hay un número suficiente de herramientas listas-para-usar.

> ¿Qué quiere decir esto? Tener clases ya escritas para hacer uso de esas listas para usar?

Un ejemplo de esto puede ser:

```python
    my_list = [8, 10, 6, 2, 4]
    my_list.sort()
    print(my_list)   

    # Siendo asi .sort() una función estilo palabra reservada la cual ejecuta cierto bloque de código con esto.

    # output: [2, 4, 6, 8, 10]
```

Existe otra palabra reservada que es:

```python
    lst = [5, 3, 1, 2, 4]
    print(lst)
    
    lst.reverse()
    print(lst)  # output: [4, 2, 1, 3, 5]
```

Ahora a continuación cómo repaso, evalue y determine los siguentes ejercicios y responda las preguntas.

```python
    # Pregunta 1: ¿Cuál es el resultado del siguiente fragmento de código?

    lst = ["D", "F", "A", "Z"]
    lst.sort()
    
    print(lst)    
```

```python
    # Pregunta 2: ¿Cuál es el resultado del siguiente fragmento de código?

    a = 3
    b = 1
    c = 2
    
    lst = [a, c, b]
    lst.sort()
    
    print(lst) 
```

```python
    # Pregunta 3: ¿Cuál es el resultado del siguiente fragmento de código?

    a = "A"
    b = "B"
    c = "C"
    d = " "
    
    lst = [a, b, c, d]
    lst.reverse()
    
    print(lst) 
```

> Interesante, no pondré las soluciones de estos ejercicios debido a que cada vez que lo lea quiero leerlo y que sea una costumbre entenderlos.