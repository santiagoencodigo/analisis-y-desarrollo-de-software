# santiagoencodigo
# Módulo con 23 ejercicios de listas en Python.
# Cada ejercicio demuestra una operación común con listas.

# Nota: Los ejercicios están numerados del 1 al 23.
# Se ha creado una función por cada ejercicio.

def ejercicio_1():
    """Crear lista, acceder a elemento, longitud y verificar vacía."""
    my_list = [10, 20, 30, 40, 50]
    print("Lista:", my_list)
    print("Tercer elemento:", my_list[2])
    print("Longitud:", len(my_list))
    print("¿Está vacía?", len(my_list) == 0)

def ejercicio_2():
    """Manipulación básica: cambiar, agregar, insertar, eliminar por valor e índice."""
    my_list = [10, 20, 30, 40, 50]
    print("Original:", my_list)
    my_list[1] = 200
    print("Cambiado índice 1:", my_list)
    my_list.append(600)
    print("Append 600:", my_list)
    my_list.insert(2, 300)
    print("Insert 300 en índice 2:", my_list)
    my_list.remove(600)
    print("Remove 600:", my_list)
    del my_list[0]
    print("Eliminado índice 0:", my_list)

def ejercicio_3():
    """Recorrer lista con for."""
    my_list = [10, 20, 30, 40, 50]
    for item in my_list:
        print(item)

def ejercicio_4():
    """Suma de elementos con sum()."""
    my_list = [10, 20, 30, 40, 50]
    print("Suma:", sum(my_list))

def ejercicio_5():
    """Promedio de elementos."""
    my_list = [10, 20, 30, 40, 50]
    print("Promedio:", sum(my_list) / len(my_list))

def ejercicio_6():
    """Máximo y mínimo con max() y min()."""
    my_list = [10, 20, 30, 40, 50]
    print("Máximo:", max(my_list))
    print("Mínimo:", min(my_list))

def ejercicio_7():
    """Invertir lista con slicing [::-1]."""
    my_list = [10, 20, 30, 40, 50]
    print("Invertida:", my_list[::-1])

def ejercicio_8():
    """Concatenar listas con +."""
    list1 = [10, 20, 30]
    list2 = [40, 50, 60]
    print("Concatenada:", list1 + list2)

def ejercicio_9():
    """Verificar existencia de un elemento con 'in'."""
    my_list = [10, 20, 30, 40, 50]
    print("¿Está 30?", 30 in my_list)

def ejercicio_10():
    """Contar ocurrencias con count()."""
    my_list = [10, 20, 30, 40, 50, 30]
    print("Ocurrencias de 30:", my_list.count(30))

def ejercicio_11():
    """Eliminar duplicados usando set()."""
    my_list = [10, 20, 30, 20, 40, 30]
    print("Sin duplicados:", list(set(my_list)))

def ejercicio_12():
    """Obtener sublista con slicing."""
    my_list = [10, 20, 30, 40, 50]
    print("Sublista [1:4]:", my_list[1:4])

def ejercicio_13():
    """Extraer cada segundo elemento con [::2]."""
    my_list = [10, 20, 30, 40, 50]
    print("Cada segundo:", my_list[::2])

def ejercicio_14():
    """Convertir elementos a string y unirlos."""
    my_list = [10, 20, 30, 40, 50]
    print("Unidos:", " ".join(map(str, my_list)))

def ejercicio_15():
    """Vaciar lista con clear()."""
    my_list = [10, 20, 30, 40, 50]
    my_list.clear()
    print("Lista vacía:", my_list)

def ejercicio_16():
    """Copiar lista con copy()."""
    my_list = [10, 20, 30, 40, 50]
    copia = my_list.copy()
    print("Copia:", copia)

def ejercicio_17():
    """Ordenar ascendente con sort()."""
    my_list = [10, 50, 20, 40, 30]
    my_list.sort()
    print("Ordenada ascendente:", my_list)

def ejercicio_18():
    """Ordenar descendente con sort(reverse=True)."""
    my_list = [10, 20, 30, 40, 50]
    my_list.sort(reverse=True)
    print("Ordenada descendente:", my_list)

def ejercicio_19():
    """Obtener índice de un elemento con index()."""
    my_list = [10, 20, 30, 40, 50]
    print("Índice de 30:", my_list.index(30))

def ejercicio_20():
    """Copiar sublista con slicing."""
    my_list = [10, 20, 30, 40, 50]
    print("Sublista copiada [1:4]:", my_list[1:4])

def ejercicio_21():
    """Recorrer con enumerate() para obtener índice y valor."""
    my_list = [10, 20, 30, 40, 50]
    for idx, val in enumerate(my_list):
        print(f"Índice {idx}: {val}")

def ejercicio_22():
    """Combinar listas con zip() (empareja elementos)."""
    list1 = [10, 20, 30]
    list2 = [40, 50, 60]
    print("Zip:", list(zip(list1, list2)))

def ejercicio_23():
    """Convertir lista en tupla."""
    my_list = [10, 20, 30, 40, 50]
    print("Tupla:", tuple(my_list))

# Lista de todos los ejercicios para el menú
EJERCICIOS = [
    ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, ejercicio_5,
    ejercicio_6, ejercicio_7, ejercicio_8, ejercicio_9, ejercicio_10,
    ejercicio_11, ejercicio_12, ejercicio_13, ejercicio_14, ejercicio_15,
    ejercicio_16, ejercicio_17, ejercicio_18, ejercicio_19, ejercicio_20,
    ejercicio_21, ejercicio_22, ejercicio_23
]