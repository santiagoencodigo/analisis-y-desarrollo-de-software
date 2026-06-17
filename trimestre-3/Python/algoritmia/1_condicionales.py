# Taller Python 
# Servicio Nacional de Aprendizaje - SENA

# Aprendiz: Santiago Muñeton Hernandez
# Programa: Analisis y Desarrollo de software

# Instructor: William Herreño


# Selecciones de ejercicio

Seleccion_Ejercicio = int(input("Ingrese un numero de acuerdo al ejercicio que quiera ver. (1-12): "))

if Seleccion_Ejercicio == 1:
    # Ejercicio 1. Los nombre de las variables 

    #	Imprimir: A. Lunes 17, B. Martes 18, C. Miercoles 19, D. Jueves 20

    print("Lunes 17") # Mi solución es por medio de "PRINT("")" agregar los elementos a imprimir
    print("Martes 18")
    print("Miercoles 19")
    print("Jueves 20")



if Seleccion_Ejercicio == 2:
    # Ejercicio 2. Suma de dos números ingresados por pantalla

    print("Vamos a sumar dos numeros por lo que ingresa dos numeros:") # Introducción al ejercicio

    num1 = float(input("Ingresa el primer número: ")) 	# Input numero 1
    num2 = float(input("Ingresa el segundo número: ")) 	# Input numero 2

    suma = num1 + num2 # Suma entre numero 1 y 2
    
    print(f"La suma es entre {num1} y  {num2} da como resultado: {suma}") # Imprime resultados



if Seleccion_Ejercicio == 3:
    # Ejercicio 3: Número mayor

    print("Vamos a comparar dos numeros viendo cual es el mayor por lo que ingresa los siguentes dos numeros:") # Inicio de ejercicio

    num1 = float(input("Ingresa el primer número: ")) 	# Input numero 1
    num2 = float(input("Ingresa el segundo número: ")) 	# Input numero 2

    if num1 > num2: # Inicio de condicional
        print(f"El numero {num1} es mayor que el numero {num2}") # Primera Condición: numero 1 mayor que numero 2
    else:
        print(f"El numero {num2} es mayor que el numero {num1}") # Condición ELSE: donde numero 2 es mayor que el numero 1



if Seleccion_Ejercicio == 4:

    # Ejercicio 4: Número menor
    print("Vamos a comparar dos numeros viendo cual es el menor por lo que ingresa los siguentes dos numeros:") # Inicio de ejercicio

    num1 = float(input("Ingresa el primer número: ")) 	# Input numero 1
    num2 = float(input("Ingresa el segundo número: ")) 	# Input numero 2

    if num1 < num2: # Inicio de condicional
        print(f"El numero {num1} es menor que el numero {num2}") # Primera Condición: numero 1 mayor que numero 2
    else:
        print(f"El numero {num2} es menor que el numero {num1}") # Condición ELSE: donde numero 2 es mayor que el numero 1    



if Seleccion_Ejercicio == 5:

    # Ejercicio 5: Conversión de Celsius a Fahrenheit
    print("Conversión de Celsius a Fahreheint") # Para dar introducción al ejercicio

    Celsius = int(input("Ingrese el numero en Celsisu para convertirlo a Fahreheint")) # input para numero en Celsius

    Convercion = Celsius * 32 # Converción / Proceso

    print(f"Resultado: {Celsius} Celsius dan un total de {Convercion} Fahreheint") # imprime resultados



if Seleccion_Ejercicio == 6:

	# Ejercicio 6: Determinar si un número es par o impar

    print("Vamos a determinar si un número es par o no") # Inicio de ejercicio

    numero = float(input("Ingresa el primer número: ")) 	# Input numero


    if numero % 2 == 0: # Inicio de condicional
        print(f"El número {numero} es un número par")

    else:
        print(f"El número {numero} NO es un número par")



if Seleccion_Ejercicio == 7:

    # Ejercicio 7: Ingrese el nombre del proyecto del software letra por letra  e imprima 

    Nombre_Proyecto = "Analisis y Desarrollo de Software" # Variable con nombre del programa
    print("El nombre del proyecto es" + Nombre_Proyecto) # Imprime nombre del programa

    Letras_Nombre_Proyecto = list(Nombre_Proyecto) # Variable con el valor de las letras separadas del nombre del programa

    print()

    print ("Las letras del nombre del proyecto es" + Letras_Nombre_Proyecto)



if Seleccion_Ejercicio == 8:

    # Ejercicio 8: Corriga el siguiente código

    # Print(“Ficha 3171608”); Print(“Ficha2 3171608”); Print(“Ficha3 3171608”); Print(“Ficha2 3171608”)

    print("Las fichas de ADSO son:")
    
    print() # Espacio de interlinea

    # Fichas - Código Corregido
    print("Ficha 0000001") 
    print("Ficha2 000002")
    print("Ficha3 000003")
    print("Ficha2 000004")

                                                                                           
                                                                                        
if Seleccion_Ejercicio == 9:

    # Ejercicio 9:	Digite y corriga:

        #numero_secreto = 7

        #   adivinanza = int(input("Adivina el número: "))

        #   if adivinanza == numero_secreto:

        #   print("¡Acertaste!")

        #   else:
        #   print("Inténtalo de nuevo.")

    
    numero_secreto = 7

    adivinanza = int(input("Adivina el número: "))

    if adivinanza == numero_secreto:

        print("¡Acertaste!") # El problema era la identación con este print

    else:
        print("Inténtalo de nuevo.")




if Seleccion_Ejercicio == 11:

    # Ejercicio igual al 11 peros con letra secreta

    print ("Vamos a jugar un juego de adivinanzas por lo que trata de adivinar la vocal")

    vocal_secreta = "A"

    adivinanza_vocal = input("Adivina la vocal (A-U)")

    if adivinanza_vocal == vocal_secreta:
        print ("Adivinaste la vocal!")

    else:
        print ("Inténtalo de nuevo.")