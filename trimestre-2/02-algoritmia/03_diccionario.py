# santiagoencodigo
# Módulo con 20 ejercicios de diccionarios en Python.
# Cada ejercicio demuestra una operación común con diccionarios.

def ejercicio_1():
    """Crear, agregar, modificar y acceder a valores."""
    my_dict = {'name': 'Alice', 'age': 35, 'city': 'New York'}
    print("Original:", my_dict)
    my_dict['profession'] = 'Doctor'
    print("Agregado profession:", my_dict)
    my_dict['age'] = 40
    print("Modificado age:", my_dict)
    print("City:", my_dict['city'])

def ejercicio_2():
    """Eliminar claves y recorrer el diccionario."""
    my_dict = {'name': 'Alice', 'age': 35, 'city': 'New York', 'profession': 'Doctor'}
    del my_dict['profession']
    print("Sin profession:", my_dict)
    for key, value in my_dict.items():
        print(f"{key}: {value}")
    print("¿Existe 'age'?", 'age' in my_dict)

def ejercicio_3():
    """Crear diccionario desde dos listas con zip()."""
    keys = ['name', 'age', 'city']
    values = ['Bob', 30, 'Paris']
    new_dict = dict(zip(keys, values))
    print("Desde listas:", new_dict)

def ejercicio_4():
    """Vaciar diccionario con clear()."""
    my_dict = {'a': 1, 'b': 2, 'c': 3}
    print("Original:", my_dict)
    my_dict.clear()
    print("Después de clear:", my_dict)

def ejercicio_5():
    """Fusionar diccionarios con update()."""
    dict1 = {'a': 100, 'b': 200}
    dict2 = {'c': 300, 'd': 400}
    dict1.update(dict2)
    print("Fusionado:", dict1)

def ejercicio_6():
    """Contar frecuencia de caracteres en un string."""
    texto = "banana"
    frecuencia = {}
    for char in texto:
        frecuencia[char] = frecuencia.get(char, 0) + 1
    print("Frecuencias:", frecuencia)

def ejercicio_7():
    """Acceder a diccionario anidado."""
    data = {'person': {'name': 'Alice', 'age': 30}}
    print("Edad de Alice:", data['person']['age'])

def ejercicio_8():
    """Acceso profundo en diccionarios anidados."""
    data = {'student': {'name': 'John', 'marks': {'history': 90, 'math': 95}}}
    print("Nota historia:", data['student']['marks']['history'])

def ejercicio_9():
    """Modificar valor en diccionario anidado."""
    data = {'student': {'name': 'John', 'marks': {'history': 90, 'math': 95}}}
    data['student']['marks']['history'] = 98
    print("Modificado:", data)

def ejercicio_10():
    """Crear diccionario con fromkeys() (todas las claves con mismo valor)."""
    keys = ['a', 'b', 'c']
    default_value = 0
    new_dict = dict.fromkeys(keys, default_value)
    print("Inicializado:", new_dict)

def ejercicio_11():
    """Extraer claves específicas mediante comprensión."""
    original = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
    keys_to_extract = ['a', 'c']
    extracted = {k: original[k] for k in keys_to_extract}
    print("Extraído:", extracted)

def ejercicio_12():
    """Eliminar varias claves."""
    original = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
    keys_to_remove = ['b', 'd']
    for key in keys_to_remove:
        if key in original:
            del original[key]
    print("Después de eliminar:", original)

def ejercicio_13():
    """Verificar si un valor existe."""
    my_dict = {'a': 1, 'b': 2, 'c': 3}
    value_to_check = 2
    if value_to_check in my_dict.values():
        print("El valor existe")
    else:
        print("El valor no existe")

def ejercicio_14():
    """Renombrar una clave."""
    my_dict = {'name': 'Alice', 'age': 25}
    if 'name' in my_dict:
        my_dict['first_name'] = my_dict.pop('name')
    print("Renombrado:", my_dict)

def ejercicio_15():
    """Clave con valor mínimo."""
    my_dict = {'a': 100, 'b': 50, 'c': 150}
    key_min = min(my_dict, key=my_dict.get)
    print("Clave con valor mínimo:", key_min)

def ejercicio_16():
    """Modificar valor en diccionario anidado (cambio de math)."""
    data = {'student': {'marks': {'math': 95}}}
    data['student']['marks']['math'] = 99
    print("Math actualizado:", data)

def ejercicio_17():
    """Invertir claves y valores."""
    my_dict = {'a': 1, 'b': 2, 'c': 3}
    inverted = {v: k for k, v in my_dict.items()}
    print("Invertido:", inverted)

def ejercicio_18():
    """Ordenar por claves (sorted)."""
    my_dict = {'c': 3, 'a': 1, 'b': 2}
    for key in sorted(my_dict):
        print(f"{key}: {my_dict[key]}")

def ejercicio_19():
    """Ordenar por valores (sorted con key)."""
    my_dict = {'a': 3, 'b': 1, 'c': 2}
    sorted_by_value = sorted(my_dict.items(), key=lambda x: x[1])
    print("Ordenado por valor:", sorted_by_value)

def ejercicio_20():
    """Verificar si todos los valores son únicos."""
    my_dict = {'a': 1, 'b': 2, 'c': 1}
    values = list(my_dict.values())
    all_unique = len(values) == len(set(values))
    print("¿Todos los valores son únicos?", all_unique)

EJERCICIOS = [ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, ejercicio_5,
              ejercicio_6, ejercicio_7, ejercicio_8, ejercicio_9, ejercicio_10,
              ejercicio_11, ejercicio_12, ejercicio_13, ejercicio_14, ejercicio_15,
              ejercicio_16, ejercicio_17, ejercicio_18, ejercicio_19, ejercicio_20]