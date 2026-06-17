#import 3_Algoritmia_POO

# Calculadora
# Santiago Muñeton Hernandez

def suma(num1, num2):
    return num1 + num2 
    
def resta(num1, num2):
    return num1 - num2 
    
def multiplicacion(num1,num2):
    return num1 * num2 

def division(num1,num2):
    return num1 / num2 


print()
print("Menú Principal")

num1=int(input("Inserte el numero 1 para su operación: "))
num2=int(input("Inserte el numero 2 para su operación: "))  
seleccion_operacion=int(input("Inserte 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir: "))  

if seleccion_operacion != 1|2|3|4:
    # Proceso

    if seleccion_operacion == 1:
        print(f"el numero {num1} sumado con el numero {num2} da igual a {suma(num1,num2)}")

    elif seleccion_operacion == 2:
        print(f"el numero {num1} restando con el numero {num2} da igual a {resta(num1,num2)}")

    elif seleccion_operacion == 3:
        print(f"el numero {num1} multiplicador por el numero {num2} da igual a {multiplicacion(num1,num2)}")

    elif seleccion_operacion == 4:
        print(f"el numero {num1} dividido por el numero {num2} da igual a {division(num1,num2)}")
    else:
        print("Operación Invalida, Vuelva a intentarlo.")   

else:
    print("Operación Invalida, Vuelva a Intentarlo")



    
