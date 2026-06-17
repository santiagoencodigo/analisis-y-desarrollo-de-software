# Fecha: 14/11/2025

# Instructor: William Herreño
# Aprendiz: Santiago Muñeton Hernandez
# Programa: Análisis y Desarollo de Software




#-------------------------------------------------------------------------------------------------------------



# Función Datos Para Importar

def datos():

        print()
        print("A continuación debe registrar sus datos personales.")
        print()

        nombre = input("Digite su nombre: ")
        ficha = int(input("Digite la ficha a la que pertenece (ej: 3171608): "))
        nota1 = float(input("Digite la primera nota: "))
        nota2 = float(input("Digite la segunda nota: "))

        return nombre, ficha, nota1, nota2




# -------------------------------------------------------------------------------------------------------------



# Funcion tablas de multiplicar

def multiplicar():
    numero = int(input("¿Qué numero deseas mirar sus tablas de multiplicar?"))

    for i in range(1,11):
        resultado = numero * i
        print(f"El numero {numero} multiplicado por {i} da = {resultado}")

    



# -------------------------------------------------------------------------------------------------------------




if __name__ == "__main__": # Esto lo utilizo para ejecutar los ejercicios solamente en este archivo y no en los otros porque se importa

    # Función Ejercicios de lo que se practico en clase

    def ejercicios():

        # Menú
        print("A continuación ejercicios de PYTHON del día 14/11/2025")
        print()
        print("Seleccione 1 para mirar ejercicio: Estructura de control FOR")
        print("Seleccione 2 para mirar ejercicio: Estructura de control FOR IN RANGE")
        print("Seleccione 3 para mirar ejercicio: Dos Ciclos FOR anidados")
        print("Seleccione 4 para mirar ejercicio: PASS")
        print("Seleccione 5 para mirar MODULO DATOS")
        print("Seleccione 6 para mirar MODULO TABLAS DE MULTIPLICAR")





        # Selección de Ejercicios / Condicionales
        seleccion_ejercicios = int(input("Escriba el número de acuerdo al ejercicio que desee ver: "))



        # ---



        if seleccion_ejercicios == 1:
            # Estructuras de control - for

            fruits = ["apple", "banana", "cherry"]

            for x in fruits:
                if x == "banana":
                    break
                print(x)




        # ---




        elif seleccion_ejercicios == 2:
            # Estructura de control for in range
            for x in range(31):
                print(x)
            else:
                print("Finally Finished")




        # ---



        elif seleccion_ejercicios == 3:
            # Estructura de control for 
            colores = ["red", "big", "tasty"] # Lista colores
            fruits = ["apple", "banana", "cherry"] # Lista Fruits

            # En este ejercicio se ve lo que se llama dos ciclos FOR anidados.

            for x in colores: # Este FOR: recorre cada uno de los elementos en la lista colores ("red", "big", "tasty")

                for y in fruits: # Este for toma cada elemento guardandolo en "y" tomandolo desde la lista FRUITS.
                    print(x ,y) # Por cada color, pasara por cada fruta e imprimira los dos.




        # ---



        elif seleccion_ejercicios == 4:
            for x in [0,1,2,3,4]:
                pass





        elif seleccion_ejercicios == 5:
        # Modulo de calculo de notas
            datos()

        elif seleccion_ejercicios == 6:
        # Modulo de tablas de multiplicar
            multiplicar()            

        else:
            print("El ejercicio no existe")

    ejercicios() # Para ejecutar mi código
