
# Aprendiz: Santiago Muñeton Hernandez
# Instructor: William Herreño
# Ficha: Analisis y Desarrollo de Software
# Fecha: 28/11/2025






# -----------------------------------------------------------------------------------------------------------





def taller28noviembredel2025():
    # Primera Función - Estudiante
    class Estudiante():
        def __init__(self, nombre, nota):
            self.nombre = nombre
            self.nota = nota

        def imprimir(self):
            print(f'Nombre: {self.nombre} y la nota es: {self.nota}')

        def resultados(self):
            if self.nota >= 7:
                print("Has Aprobado!")
            else:
                print('No has Aprobado.')

    estudiante1 = Estudiante('Pedro', 5)            
    print(estudiante1)
    print(estudiante1.resultados())




    # Evidencia No 1.
    # Crea una clase "persona" con atributos nombre y edad. Además, hay que crear:
    # Un método "cumpleaños" que aumente 1 la edad de la persona cuando se invoque 
    # sobre un objeto creado con "persona"
    # Tendriamos que lograr ejecutar el siguente código con la case creada:

    class Persona():
        def __init__(self, nombre, apellido, edad, ficha, telefono):
            self.nombre = nombre
            self.apellido = apellido
            self.edad = edad
            self.ficha = ficha
            self.telefono = telefono
            
        def cumpleaños(self):
            self.edad += 1 # Esto hace que se sume cada vez en 1
            print(f'Feliz Cumpleaños {self.nombre} {self.apellido} ahora tienes {self.edad} años.')
            print(f'Su numero celular es: {self.telefono}')
            print(f'Usted pertenece a la ficha: {self.ficha}')


    p = Persona('Santiago', 'Muñeton', 18, 11111111, 0000000000)
    p.cumpleaños() # Ejecuta el metodo




    # Ejercicio 3 - Calculadora
    # Realiza un programa en el cual se declaren:

    # dos valores enteros por teclado utilizando el método __init__
    # calcular después la suma, resta, multiplicación y división
    # Utilizar un método para cada una e imprimir los resultados obtenidos

    class calculadora():
        def __init__(self, num1, num2):
            self.num1 = num1
            self.num2 = num2

        def suma(self):
            resultado = self.num1+self.num2
            print(f'El resultado de la suma es: {self.num1} + {self.num2} = {resultado}')

        def resta(self):
            resultado = self.num1-self.num2
            print(f'El resultado de la resta es: {self.num1} - {self.num2} = {resultado}')

        def multiplicacion(self):
            resultado = self.num1*self.num2
            print(f'El resultado de la multiplicacion es: {self.num1} x {self.num2} = {resultado}')

        def division(self):
            resultado = self.num1/self.num2
            print(f'El resultado de la suma es: {self.num1} / {self.num2} = {resultado}')

    num1operacion = int(input('ingrese el primer numero: '))
    num2operacion = int(input('ingrese el segundo numero: '))

    operacion = calculadora(num1operacion, num2operacion)
    operacion.multiplicacion()
    operacion.division()
    operacion.resta()
    operacion.suma()










# -----------------------------------------------------------------------------------------------------------










while True:
    # Menú de Evidencia

    print("Seleccioné 0 para Salir del Programa")

    print()

    print("Seleccione 1 para - Consola (Qué hemos visto en clase)")
    print("Seleccione 2 para - Clase Triangulo")
    print("Seleccione 3 para - Clase Empleado")
    print("Seleccione 4 para - Clase Circulo")
    print("Seleccione 5 para - Clase Producto")
    print("Seleccione 6 para - Clase Cuenta Bancaria")

    print()

    seleccion_trabajo = int(input("Selecciona tu ejercicio: "))

    if seleccion_trabajo == 0:
        print("Saliendo del programa...")
        break




    elif seleccion_trabajo == 1:
        taller28noviembredel2025()





    elif seleccion_trabajo == 2:
        print('Ejercicio Clase Triángulo')

        # Clase Triángulo

        # Crea una clase llamada Triangulo que tenga los atributos base, altura y 
        # lado. Luego, crea métodos para calcular el área y el perímetro del triángulo.

        class Triangulo():
            def __init__(self, base, altura, lado):
                self.base = base
                self.altura = altura
                self.lado = lado
            
            def calculoArea(self):
                print()
                base = int(input("Ingrese el valor de la base del triángulo: "))
                altura = int(input("Ingrese el valor de la altura del triángulo: "))
                lado = int(input("Ingrese el valor de la lado del triángulo: "))
                print()

                CalcularArea = base * altura / 2
                print(f'El area del Triangulo es: {CalcularArea}')
            
            def calculoPerimetro(self):
                print("a")  





    elif seleccion_trabajo == 3:
        print()

        # Clase Empleado

        # Crea una clase llamada Empleado que tenga los atributos nombre, salario y
        # Departamento. Luego, crea un método para aplicar un aumento del salario del empleado.

        class Empleado():
            def __init__(self, nombre, salario, departamento):
                self.nombre = nombre
                self.salario = salario
                self.departamento = departamento
            
            def aumentoSalario(self):
                print("Aumento Salario")






    elif seleccion_trabajo == 4:
        print("a")

        # Clase Circulo

        # Crea una clase llamada Circulo que tenga el atributo radio y métodos para
        # Calcular esa area y el perimetro del circulo

        class Circulo():
            def __init__(self, radio):
                self.radio

            def areaCirculo(self):
                print("Area Circulo")
            
            def perimetroCirculo(self):
                print("Perimeto Circulo")
                





    elif seleccion_trabajo == 5:
        print()

        # Clase Producto

        # Crea una clase llamada producto que tenga los atributos nombre, precio y cantidad.
        # Luego, crea un metodo para calcular el valor total de todo el inventario

        class producto():
            def __init__(self, nombre, precio, cantidad):
                self.nombre = nombre
                self.precio = precio
                self.cantidad = cantidad

            def calcularInventario(self):
                print("Calcular Inventario")






    elif seleccion_trabajo == 6:
        print()

        # Clase Cuenta Bancaria 
    
        # Crea una clase llamada CuentaBancaria que tenga los atributos titular, saldo y tipo.
        # Luego, crea métodos para depositar y retirar el dinero de la cuenta

        class cuenta_bancaria():
            def __init__(self, titular, saldo, tipoCuenta):
                self.titular = titular
                self.saldo = saldo
                self.tipoCuenta = tipoCuenta

            def depositar(self):
                print("Depositar Dinero a Cuenta Bancaria")

            def retirar(self):
                print("Retirar Dinero de Cuenta Bancaria")





    else:
        print("Este ejercicio no existe")





# -----------------------------------------------------------------------------------------------------------





# A continuaciòn mis apuntes:



# Docker lo vamos a ver en el septimo trimestre, para desplegar

# Las bases de datos esta sieno muy importante

# > No se puede esperar llegar a quinto trimestre para empezar a escribir el código del proyecto
