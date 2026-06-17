# Aprendiz: Santiago Muñeton Hernandez
# Instructor: William Herreño
# Programa: Análisis y Desarrollo de Software
# Fecha: 24/10/2025




# Menú de Ejercicios
print("Ejercicios Operadores PYTHON")
print()
print("Menú")

print("Seleccione Número 1 Para: Las 4 Operadores (/, *, +, -, //, **)")
print("Seleccione Número 2 Para: Condicionales IF, ELIF y ELSE - Genero, Mayor de Edad")
print("Seleccione Número 3 Para: Operaciones Aplicadas a Calculo del Monto Total por Días Trabajados")
print("Seleccione Número 4 Para: Correción de Código (Condicionales) ")
print("Seleccione Número 5 Para: Tablas de Multiplicar")




print()


# Condicional para Selección de Ejercicios
seleccion_ejercicios = int(input("Ingrese el número de acuerdo al ejercicio que desea ver: "))




# Se va a realizar las 4 operaciones aritméticas básicas (suma, resta, multiplicación y división)
if seleccion_ejercicios == 1:


    # Solicita al usuario que ingrese el primer número y lo convierte a float
    print()
    numero1 = float(input("Ingresa el primer número: "))

    # Solicita al usuario que ingrese el segundo número y lo convierte a float
    print()
    numero2 = float(input("Ingresa el segundo número: "))



    # Suma de los dos números
    print()
    suma = numero1 + numero2
    print(f"La suma de {numero1} y {numero2} es: {suma}")



    # Resta de los dos números
    print()
    resta = numero1 - numero2
    print(f"La resta de {numero1} menos {numero2} es: {resta}")



    # Multiplicación de los dos números
    print()
    multiplicacion = numero1 * numero2
    print(f"La multiplicación de {numero1} por {numero2} es: {multiplicacion}")



    # División de los dos números (se verifica que el divisor no sea cero)
    print()
    if numero2 != 0:
        division = numero1 / numero2
        print(f"La división de {numero1} entre {numero2} es: {division}")
    else:
        print("No se puede dividir entre cero.")



    # Negación de Números
    print()
    numero1_negativo = -numero1 # Transforma el INT de la variable en el negativo.
    numero2_negativo = -numero2
    print(f"La negación de {numero1} es {numero1_negativo}") # Los imprime
    print(f"La negación de {numero2} es {numero2_negativo}")
    print()



    # Operador // (división entera)
    print()
    # Este operador divide dos números y devuelve la parte entera del resultado, descartando el residuo.
    a = 17
    b = 4

    resultado_div_entera = a // b  # El resultado será 4, porque 17 dividido entre 4 es 4.25, y solo se toma la parte entera.

    print("División entera (//):", resultado_div_entera)  # Muestra: 4



    # Operador ** (potencia)
    print()
    # Este operador eleva el primer operando a la potencia del segundo.
    base = 3
    exponente = 4
    resultado_potencia = base ** exponente  # El resultado será 81, porque 3 elevado a la 4 es 81.

    print("Potencia (**):", resultado_potencia)  # Muestra: 81




elif seleccion_ejercicios == 2:

    print()
    print("Condicionales IF, ELIF y ELSE - Genero, Mayor de Edad")



    # Input el nombre de la persona
    nombre = input("Introduce tu nombre: ")

    # Input de la edad de la persona y convertirla a entero
    edad = int(input("Introduce tu edad: "))

    # Pedir el sexo de la persona (femenino o masculino)
    sexo = input("Introduce tu sexo (femenino/masculino): ").lower() # Para ponerlo en minusculas



    # Verificamos si la persona es mayor de edad
    if edad >= 18:
        mayor_edad = "mayor de edad"
    else:
        mayor_edad = "menor de edad"


    # Seleccionamos mensaje según el sexo
    if sexo == "femenino":
        sexo_str = "Femenina"
    elif sexo == "masculino":
        sexo_str = "Masculino"
    else:
        sexo_str = "No especificado"


    # Imprimimos toda la información
    print()
    print()
    print("----- Información de la persona -----")
    print("Nombre: ", nombre)
    print("Edad: ", edad)
    print("Sexo: ", sexo_str)
    print("Esta persona es ", mayor_edad)





elif seleccion_ejercicios == 3:
    print()
    print("Operaciones Aplicadas a Calculo del Monto Total por Días Trabajados")

    # Solicita al usuario la cantidad de días trabajados
    dias_trabajados = int(input("Ingrese la cantidad de días trabajados: "))

    # Define el valor del día en pesos colombianos (COPS)
    valor_dia = 47450

    # Calcula el pago total multiplicando los días trabajados por el valor de cada día
    pago_total = dias_trabajados * valor_dia

    # Imprime el pago final
    print()
    print("El pago total por", dias_trabajados, "días trabajados es:", pago_total, "COPS")



elif seleccion_ejercicios == 4:
    print()
    print("Correción - Error encontrado en el código propuesto por el instructor")

    X = 5
    if X > 9:
        print("Verdadero!")
    else:
        print("Falso!")

    print()



elif seleccion_ejercicios == 5:
    print()
    print("Tablas de Multiplicar")
    
    # Solicita al usuario el número del cual desea ver la tabla de multiplicar
    numero = int(input("¿De qué número quieres ver la tabla de multiplicar?: "))

    # Usa range para multiplicar desde el 1 hasta el 10
    for i in range(1, 11):
        resultado = numero * i
        print(f"{numero} x {i} = {resultado}")




else:

    print("No existe este ejercicio")
