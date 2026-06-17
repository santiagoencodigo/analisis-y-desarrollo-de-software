# Aprendiz: Santiago Muñeton Hernandez

# Fecha: 21/11/2025

# Instructor: William Herreño

# Temario: Programación Orientada a Objetos (POO)



# --------------------------------------------------------------------------------------




# Funciones

# Son bloques de código que realizan una tarea en especifico que se puede llamar cuando se necesita.




# Ejercicio 1

x = 300

def myfunc():
    x = 200
    print(x)




# Ejercicio 2

def myfunc2():
    global x
    x = 100

y = "global"




# Ejercicio 3

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print("Inner;", x)
    inner()
    print("Outer:", x)




# Ejercicio 4

def changecase(func): # Define una función llamada changecase que recibe como parametro func
                      # Un parametro es una variable que se puede recibir información desde afuera

    def myinner(): # Se define otra función myinner en donde modifica el parametro de la función func por otro texto

        return func().upper() # Entonces retorna el valor de func, pero en UPPER = Mayusculas
    return myinner # Devuelve el valor de myinner

    # el parametro func, recibe el valor del retorno del siguente bloque changecase

@changecase # Indica que la siguente función será decorada por changecase por lo que:
            # Python Literalmente Entiende changecase = myfunction

def myfunction(): # Esta función simplemente retorna el string "Hello Santiagoencodigo"
    return "Hello Santiagoencodigo"




# Ejercicio 5
def mathwithdaysweek():
    day = int(input("Escriba un número del 1-7: "))

    match day:
        case 1:
            print("Monday")
        case 2:
            print("Tuesday")
        case 3:
            print("Wednesday")
        case 4:
            print("Thursday")
        case 5:
            print("Friday")
        case 6:
            print("Saturday")
        case 7:
            print("Sunday")   
        case _:
            print("Looking Forward to te weekend")                     




# Ejercicio 6
def mathwithmonth():
    month = int(input("Escriba un número del mes: "))
    day = int(input("Escriba un número del día de la semana 1-7: "))
    match day:
        case 1 | 2 | 3 | 4 | 5 if month == 4:
            print("A weekday in April")
        case 1 | 2 | 3 | 4 | 5 if month == 5:
            print("A weekday in May")
        case _:
            print("No Match")




# Ejercicio 7 - Clases y Objetos: Programación Orientada a Objetos (POO)
class Coche: # La palabra class define que va a ser una clase y el nombre será Coche
             # Esto sirve como plantilla para crear carros.
             # Def - Define una función
    def __init__(self, marca, modelo): # Definir __init__ es un método constructor que se ejecuta automaticamente al crear un objeto.
             # Self referencia al propio objeto por lo que permite acceder a sus atributos

             # 
        self.marca = marca
        self.modelo = modelo
        self.arrancado = False

    def arrancar(self):
        self.arrancado = True
        print(f'{self.marca}{self.modelo} ha arrancado.')

    def parar(self):
        self.arrancado = False
        print(f'{self.marca}{self.modelo} ha parado.')

c1 = Coche("Carro Electronico", "Tesla")




# Ejercicio 8 - Clase Planetas
class Planeta:
    def __init__(self, redonda, agua, dia, noche):
        self.redonda = redonda
        self.agua = agua
        self.dia = dia
        self.noche = noche

planeta_tierra = Planeta("Redondo", "Mucha Agua", "12 horas de día", "12 horas de noche")
        



# Ejercicio 9 - Clase Usuario

class Usuario:
    def __init__(self, nombre, apellido, usuario, contraseña, correo):
        # Inicialización de atributos
        self.nombre = nombre
        self.apellido = apellido
        self.usuario = usuario
        self.contraseña = contraseña
        self.correo = correo
    
    def iniciar_sesion(self):
        #Implementación Función Inicio Sesión
        nombre = input("Ingrese nombre de usuario: ")
        nombre_base_de_datos = "santiagoencodigo"

        contraseña = input("Ingrese la clave de su cuenta: ")
        contraseña_base_de_datos = "tumama@unaclaveefectiva."

        if nombre == nombre_base_de_datos and contraseña == contraseña_base_de_datos:
            print("Bienvenido al sistema")
        else:
            print("Datos Ingresados Incorrectos, Intentalo nuevamente.")


    def cerrar_sesion(self):
        # Implementacion Función Cierre Sesión

        cierre_sesion = int(input("¿Desea cerrar sesión? - Ingrese 1 para Si - Ingrese 2 para No"))
        if cierre_sesion == 1:
            print("Cerraste Sesión")
        else:
            print("La sesión se mantiene abierta")

    def publicar_comentarios(post_id, comentario):
        # Implementación Función Publicación Comentario
        comentario = input("¿Desea agregar un comentario?: 1 para si, 2 para no")

        if comentario == 1:
            comentario_usuario = input("Redacte su comentario:")
        elif comentario == 2:
            print("Ok.")

        print(f'Comentario Publicado: {comentario_usuario}')




# --------------------------------------------------------------------------------------




# Menú de Temarios/Ejercicios

print("A continuación diferentes ejercicios")

print()

print("Seleccione 1 para: Primera Función")
print("Seleccione 2 para: Segunda Función ")
print("Seleccione 3 para: Tercera Función Función")
print("Seleccione 4 para: uso de changecase")
print("Seleccione 5 para: CASE - Days Weeks")
print("Seleccione 6 para: CASE and IF - Days Month")
print("Seleccione 7 para: Impresión CLASE Carro- Objeto 1")
print("Seleccione 8 para: Impresión CLASE Planeta- Objeto 1")
print("Seleccione 9 para: Clase Usuario- Objeto 1")
print()



seleccion_temario = int(input("Escriba el numero: "))




# --------------------------------------------------------------------------------------



# Condicionales - Ejercicios/Temario

if seleccion_temario == 1:
    myfunc()

elif seleccion_temario == 2:
    myfunc2()

elif seleccion_temario == 3:
    outer()

elif seleccion_temario == 4:
    print(myfunction())

elif seleccion_temario == 5:
    mathwithdaysweek()

elif seleccion_temario == 6:
    mathwithmonth()

elif seleccion_temario == 7:
    print(c1.arrancado, c1.marca, c1.modelo)

elif seleccion_temario == 8:
    print(planeta_tierra.agua)


else:
    print("Este ejercicio no existe.")

