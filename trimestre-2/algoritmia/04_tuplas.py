# santiagoencodigo
# Módulo con 19 ejercicios de tuplas en Python.
# Cada ejercicio demuestra operaciones con tuplas (inmutables, empaquetado, etc.)

def ejercicio_1():
    """Crear tuplas vacías."""
    x = ()
    y = tuple()
    print(x, y)

def ejercicio_2():
    """Tupla con diferentes tipos de datos."""
    tuplex = ("tuple", False, 3.2, 1)
    print(tuplex)

def ejercicio_3():
    """Crear tupla sin paréntesis y tupla de un solo elemento."""
    tuplex = 5, 10, 15, 20, 25
    print(tuplex)
    single = (5,)
    print(single)

def ejercicio_4():
    """Acceder a elemento por índice."""
    tuplex = (1, 2, 3, 4, 5)
    print(tuplex[2])

def ejercicio_5():
    """Comprobar si un valor está en la tupla."""
    tuplex = (1, 3, 5, 7, 9)
    print(7 in tuplex)

def ejercicio_6():
    """Slicing en tuplas."""
    tuplex = (0, 1, 2, 3, 4, 5)
    print(tuplex[2:5])

def ejercicio_7():
    """Longitud de la tupla."""
    tuplex = (10, 20, 30, 40, 50)
    print(len(tuplex))

def ejercicio_8():
    """Repetir tupla con *."""
    original = (1, 2, 3)
    print(original * 3)

def ejercicio_9():
    """Convertir lista a tupla."""
    my_list = [1, 2, 3]
    print(tuple(my_list))

def ejercicio_10():
    """Mínimo y máximo de una tupla."""
    tuplex = (5, 12, 3, 8, 15)
    print("Mínimo:", min(tuplex), "Máximo:", max(tuplex))

def ejercicio_11():
    """Concatenar tuplas (agregar elemento)."""
    tuplex = (4, 6, 2, 8, 3, 1)
    tuplex = tuplex + (9,)
    print(tuplex)

def ejercicio_12():
    """Unir caracteres de una tupla en cadena."""
    tup = ('e','x','e','r','c','i','s','e','s')
    print(''.join(tup))

def ejercicio_13():
    """Acceder con índice negativo."""
    tuplex = ("w", 3, "r", "e", "s", "o", "u", "r", "c", "e")
    print(tuplex[-4])

def ejercicio_14():
    """Copiar tupla (referencia)."""
    tuplex = (1, 2, 3, 4)
    copied = tuplex
    print(copied)

def ejercicio_15():
    """Eliminar elemento convirtiendo a lista."""
    tuplex = ("w", 3, "r", "s", "o", "u", "r", "c", "e")
    lst = list(tuplex)
    lst.pop(2)
    tuplex = tuple(lst)
    print(tuplex)

def ejercicio_16():
    """Slicing avanzado en tuplas."""
    tuplex = (2, 4, 3, 5, 4, 6, 7, 8, 6, 1)
    print(tuplex[3:5])
    print(tuplex[:6])
    print(tuplex[5:])
    print(tuplex[-8:-4])

def ejercicio_17():
    """Buscar índice de un elemento."""
    tuplex = tuple("index tuple")
    print(tuplex.index("p"))

def ejercicio_18():
    """Convertir tupla de pares a diccionario."""
    tuplex = ((2, "w"), (3, "r"))
    result = dict((y, x) for x, y in tuplex)
    print(result)

def ejercicio_19():
    """Desempaquetar (unzip) lista de tuplas."""
    l = [(1, 2), (3, 4), (8, 9)]
    unzipped = list(zip(*l))
    print(unzipped)

EJERCICIOS = [ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, ejercicio_5,
              ejercicio_6, ejercicio_7, ejercicio_8, ejercicio_9, ejercicio_10,
              ejercicio_11, ejercicio_12, ejercicio_13, ejercicio_14, ejercicio_15,
              ejercicio_16, ejercicio_17, ejercicio_18, ejercicio_19]