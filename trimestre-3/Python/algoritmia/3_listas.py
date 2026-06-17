# Santiago Muñeton Hernandez
# Fecha: 07/11/2025
# Python - POO


# Menú Ejercicios
print("")
print("Menú de Ejercicios")
print()

print("Inserte el numero 1 para: Ejercicio de Listas (A-E)")
print("Inserte el numero 2 para: Ejercicio de Listas Inmutables")
print("Inserte el numero 3 para: Ejercicio de Numero Random")
print("Inserte el numero 4 para: Ejercicio de Extracción de valores en una cadena de carácteres")
print("Inserte el numero 5 para: Ejercicio de Concatenar texto con numeros")
print("Inserte el numero 6 para: Modulo 1")


seleccion_ejercicio = int(input("Inserte el numero de acuerdo al ejercicio que desea ver (1-10): " ))




if seleccion_ejercicio == 1:
    # Ejercicio de impresión de indices en una lista
    lista = ["a", "b", "c", "d", "e"]

    print(lista[1]) # Imprime b
    print(lista[2]) # Imprime c
    print(lista[3]) # Imprime d
    print(lista[4]) # Imprime e
    print(lista[-1]) # Imprime e  




elif seleccion_ejercicio == 2: 
    # Listas inmutables, es decir una vez declaradas no se pueden realizar modificaciones sobre ellas.
    
    valores_mixtos = (1, "hola", 2.5, False)
    print(valores_mixtos) 
    print()




elif seleccion_ejercicio == 3:
    # Random números aleatorios
    import random
    print(random.randrange(1, 10))




elif seleccion_ejercicio == 4:
    # Extre valores de una cadena de caracteres en
    txt = "Ficha 3171608 tercer trimestre 2025!"
    print("tercer" in txt)     




elif seleccion_ejercicio == 5:
    a = "ficha"
    b = "3171608"
    c = a + "" + b
    print(c)

    # Mi ejercicio

    s="Santiago"
    a="Muñeton"
    n="Hernandez"
    t="Mi nombre es: "
    i=" y tengo"
    a="12 años"
    
    print()
    print(f"{t}{s} {m} {n}{i} {a}")




elif seleccion_ejercicio == 6:

    # Modulo 1 - Concatenación 

    import datetime
    Fecha = datetime.datetime.now()

    Nombre = "Santiago Muñeton Hernandez"
    Ficha = "3171608"

    print(f"Hola soy {Nombre} estoy en la ficha {Ficha} y hoy es {Fecha}")

    print(Fecha.year)
    print(Fecha.day)



    # Math

    # Lista de números
    numeros = [5, 10, 25, 30, 10, 5, 5]

    # Valor mínimo
    x = min(numeros)
    print("El valor mínimo es:", x)
    print()

    # Valor máximo
    y = max(numeros)
    print("El valor máximo es:", y)
    print()

    # Suma total
    total = sum(numeros)
    print("La suma de todos los números es:", total)
    print()

    # Promedio (media)
    promedio = sum(numeros) / len(numeros)
    print("El promedio es:", promedio)
    print()

    # Contar cuántas veces aparece un número (por ejemplo, el 5)
    cantidad_5 = numeros.count(5)
    print("El número 5 aparece:", cantidad_5, "veces")
    print()


    # ABS

    x = abs(-7.25)
    print(x)


    # Un modulo son de instrucciones en un bloque de código




