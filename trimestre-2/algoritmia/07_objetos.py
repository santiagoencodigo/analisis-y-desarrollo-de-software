# santiagoencodigo
# Módulo con 7 ejercicios más avanzados de objetos: herencia múltiple, polimorfismo.
# Estos ejercicios son los que estaban en "Objetos 30 septiembre.py".

def ejercicio_1():
    """Clase Estudiante con nombre y nota. Método para saber si aprobó."""
    class Estudiante:
        def __init__(self, nombre, nota):
            self.nombre = nombre
            self.nota = nota
        def aprobo(self):
            return self.nota >= 6
    alumno = Estudiante("Santiago", 5)
    print(f"Nombre: {alumno.nombre}, Nota: {alumno.nota}, ¿Aprobó? {alumno.aprobo()}")

def ejercicio_2():
    """Clase Persona con cumpleaños. Aumenta edad."""
    class Persona:
        def __init__(self, nombre, edad):
            self.nombre = nombre
            self.edad = edad
        def cumpleanos(self, veces):
            for _ in range(veces):
                self.edad += 1
                print(f"Feliz cumpleaños {self.nombre}, ahora tienes {self.edad}")
    p = Persona("Ana", 24)
    p.cumpleanos(2)

def ejercicio_3():
    """Clase Calculadora con suma, resta, multiplicación, división."""
    class Calculadora:
        def __init__(self, a, b):
            self.a = a
            self.b = b
        def suma(self):
            return self.a + self.b
        def resta(self):
            return self.a - self.b
        def multiplicacion(self):
            return self.a * self.b
        def division(self):
            return self.a / self.b
    num1 = int(input("Número 1: "))
    num2 = int(input("Número 2: "))
    calc = Calculadora(num1, num2)
    print(f"Suma: {calc.suma()}, Resta: {calc.resta()}, Multiplicación: {calc.multiplicacion()}, División: {calc.division()}")

def ejercicio_4():
    """Herencia: Persona → Estudiante."""
    class Persona:
        def __init__(self, nombre, apellido, edad, carrera):
            self.nombre = nombre
            self.apellido = apellido
            self.edad = edad
            self.carrera = carrera
        def nombre_completo(self):
            return f"{self.nombre} {self.apellido}"
    class Estudiante(Persona):
        pass
    est = Estudiante("Mario", "Dominguez", 20, "Sistemas")
    print(est.nombre_completo(), est.edad, est.carrera)

def ejercicio_5():
    """Herencia: Fabrica → Carro, Moto."""
    class Fabrica:
        def __init__(self, llantas, color, precio):
            self.llantas = llantas
            self.color = color
            self.precio = precio
    class Carro(Fabrica):
        pass
    class Moto(Fabrica):
        pass
    mi_auto = Carro(4, "Gris", 5200000)
    mi_moto = Moto(2, "Negro", 1200000)
    print(f"Auto: {mi_auto.llantas} llantas, {mi_auto.color}, ${mi_auto.precio}")
    print(f"Moto: {mi_moto.llantas} llantas, {mi_moto.color}, ${mi_moto.precio}")

def ejercicio_6():
    """Herencia: Marino → Pulpo, Foca. Sobrescritura de método."""
    class Marino:
        def hablar(self):
            print("Hola, soy un animal marino!")
    class Pulpo(Marino):
        def hablar(self):
            print("Hola, soy un Pulpo!")
    class Foca(Marino):
        def __init__(self, mensaje):
            self.mensaje = mensaje
        def hablar(self):
            print(self.mensaje)
    m = Marino()
    p = Pulpo()
    f = Foca("Hola, soy una Foca")
    m.hablar()
    p.hablar()
    f.hablar()

def ejercicio_7():
    """Herencia múltiple: Universidad + Carrera → Estudiante."""
    class Universidad:
        def __init__(self, nombre_univ):
            self.nombre_univ = nombre_univ
    class Carrera:
        def __init__(self, especialidad):
            self.especialidad = especialidad
    class Estudiante(Universidad, Carrera):
        def __init__(self, nombre_univ, especialidad, nombre, apellido):
            Universidad.__init__(self, nombre_univ)
            Carrera.__init__(self, especialidad)
            self.nombre = nombre
            self.apellido = apellido
    persona = Estudiante("Universidad Central", "Ingeniería", "David", "Gonzales")
    print(f"Nombre: {persona.nombre} {persona.apellido}, Universidad: {persona.nombre_univ}, Carrera: {persona.especialidad}")

EJERCICIOS = [ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, ejercicio_5,
              ejercicio_6, ejercicio_7]