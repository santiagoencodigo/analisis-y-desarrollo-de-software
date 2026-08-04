# santiagoencodigo
# Módulo con 16 ejercicios de conjuntos en Python.
# Cada ejercicio demuestra operaciones básicas con conjuntos (unión, intersección, etc.)

def ejercicio_1():
    """Operaciones básicas: add, remove, discard."""
    s = {1, 2, 3}
    s.add(4)
    s.remove(2)
    s.discard(5)
    print(s)

def ejercicio_2():
    """Unión de conjuntos."""
    s1 = {1, 2, 3}
    s2 = {3, 4, 5}
    print(s1.union(s2))

def ejercicio_3():
    """Intersección de conjuntos."""
    s1 = {1, 2, 3}
    s2 = {2, 3, 4}
    print(s1.intersection(s2))

def ejercicio_4():
    """Diferencia de conjuntos (s1 - s2)."""
    s1 = {1, 2, 3, 4}
    s2 = {3, 4, 5}
    print(s1.difference(s2))

def ejercicio_5():
    """Diferencia simétrica."""
    s1 = {1, 2, 3}
    s2 = {2, 3, 4}
    print(s1.symmetric_difference(s2))

def ejercicio_6():
    """Agregar varios elementos con update."""
    s = {1, 2}
    s.update([2, 3, 4])
    print(s)

def ejercicio_7():
    """Diferencia in-place con difference_update."""
    s1 = {1, 2, 3, 4}
    s2 = {2, 3}
    s1.difference_update(s2)
    print(s1)

def ejercicio_8():
    """Eliminar varios elementos con discard."""
    s = {1, 2, 3, 4, 5}
    to_remove = [2, 5, 8]
    for x in to_remove:
        s.discard(x)
    print(s)

def ejercicio_9():
    """Verificar si es subconjunto."""
    s1 = {1, 2}
    s2 = {1, 2, 3, 4}
    print(s1.issubset(s2))

def ejercicio_10():
    """Verificar si es superconjunto."""
    s1 = {1, 2, 3, 4}
    s2 = {2, 3}
    print(s1.issuperset(s2))

def ejercicio_11():
    """Comprobar si tienen elementos en común."""
    s1 = {1, 2, 3}
    s2 = {4, 5, 3}
    if s1.intersection(s2):
        print("Tienen elementos en común")
    else:
        print("No tienen elementos en común")

def ejercicio_12():
    """Diferencia simétrica in-place."""
    s1 = {1, 2, 3}
    s2 = {2, 3, 4}
    s1.symmetric_difference_update(s2)
    print(s1)

def ejercicio_13():
    """Intersección in-place."""
    s1 = {1, 2, 3, 4}
    s2 = {3, 4, 5}
    s1.intersection_update(s2)
    print(s1)

def ejercicio_14():
    """Elementos comunes entre listas."""
    list1 = [1, 2, 2, 3]
    list2 = [2, 3, 4]
    common = list(set(list1) & set(list2))
    print(common)

def ejercicio_15():
    """Conjunto inmutable (frozenset)."""
    s = frozenset([1, 2, 3])
    print(s)

def ejercicio_16():
    """Contar palabras únicas en un texto."""
    text = "hola hola mundo mundo"
    unique = set(text.split())
    print("Número de palabras únicas:", len(unique))

EJERCICIOS = [ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, ejercicio_5,
              ejercicio_6, ejercicio_7, ejercicio_8, ejercicio_9, ejercicio_10,
              ejercicio_11, ejercicio_12, ejercicio_13, ejercicio_14, ejercicio_15,
              ejercicio_16]