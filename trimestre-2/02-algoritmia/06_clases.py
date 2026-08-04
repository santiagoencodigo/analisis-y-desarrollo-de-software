# santiagoencodigo
# Módulo con 13 ejercicios de clases en Python (POO básica).
# Cada ejercicio demuestra conceptos de clases, herencia, encapsulación.

def ejercicio_1():
    """Crear clase Vehicle con atributos max_speed y mileage."""
    class Vehicle:
        def __init__(self, max_speed, mileage):
            self.max_speed = max_speed
            self.mileage = mileage
    carro = Vehicle(240, 18)
    print(carro.max_speed, carro.mileage)

def ejercicio_2():
    """Herencia simple: Bus hereda de Vehicle."""
    class Vehicle:
        def __init__(self, name, max_speed, mileage):
            self.name = name
            self.max_speed = max_speed
            self.mileage = mileage
    class Bus(Vehicle):
        pass
    bus = Bus("School Volvo", 180, 12)
    print(bus.name, bus.max_speed, bus.mileage)

def ejercicio_3():
    """Herencia: Bus sin añadir nada."""
    class Vehicle:
        def __init__(self, name, max_speed, mileage):
            self.name = name
            self.max_speed = max_speed
            self.mileage = mileage
    class Bus(Vehicle):
        pass
    bus = Bus("School Volvo", 180, 12)
    print(bus.name, bus.max_speed, bus.mileage)

def ejercicio_4():
    """Sobrescritura de métodos."""
    class Vehicle:
        def __init__(self, name, max_speed, mileage):
            self.name = name
            self.max_speed = max_speed
            self.mileage = mileage
        def seating_capacity(self, capacity):
            return f"Capacidad de {self.name} es {capacity} pasajeros"
    class Bus(Vehicle):
        def seating_capacity(self, capacity=50):
            return super().seating_capacity(capacity)
    bus = Bus("School Volvo", 180, 12)
    print(bus.seating_capacity())

def ejercicio_5():
    """Uso de atributos de clase (compartidos)."""
    class Vehicle:
        color = "White"
        def __init__(self, name, max_speed, mileage):
            self.name = name
            self.max_speed = max_speed
            self.mileage = mileage
    class Bus(Vehicle):
        pass
    class Car(Vehicle):
        pass
    bus = Bus("School Volvo", 180, 12)
    car = Car("Audi Q5", 240, 18)
    print(bus.color, bus.name)
    print(car.color, car.name)

def ejercicio_6():
    """Redefinición de método y uso de super().fare() con recargo."""
    class Vehicle:
        def __init__(self, name, mileage, capacity):
            self.name = name
            self.mileage = mileage
            self.capacity = capacity
        def fare(self):
            return self.capacity * 100
    class Bus(Vehicle):
        def fare(self):
            base = super().fare()
            return base + base * 0.10
    bus = Bus("School Volvo", 12, 50)
    print("Tarifa total:", bus.fare())

def ejercicio_7():
    """Identificar tipo con type()."""
    class Vehicle:
        def __init__(self, name, mileage, capacity):
            self.name = name
            self.mileage = mileage
            self.capacity = capacity
    class Bus(Vehicle):
        pass
    bus = Bus("School Volvo", 12, 50)
    print(type(bus))

def ejercicio_8():
    """Verificar instancia con isinstance()."""
    class Vehicle:
        def __init__(self, name, mileage, capacity):
            self.name = name
            self.mileage = mileage
            self.capacity = capacity
    class Bus(Vehicle):
        pass
    bus = Bus("School Volvo", 12, 50)
    print(isinstance(bus, Vehicle))

def ejercicio_9():
    """Relación entre clases con issubclass()."""
    class Animal:
        pass
    class Dog(Animal):
        pass
    class Puppy(Dog):
        pass
    class Cat:
        pass
    print(issubclass(Dog, Animal))
    print(issubclass(Animal, Dog))
    print(issubclass(Cat, Animal))
    print(issubclass(Puppy, Animal))

def ejercicio_10():
    """Polimorfismo con clases geométricas."""
    class Shape:
        def area(self):
            raise NotImplementedError
    class Circle(Shape):
        def __init__(self, radius):
            self.radius = radius
        def area(self):
            return 3.14159 * self.radius**2
    class Square(Shape):
        def __init__(self, side):
            self.side = side
        def area(self):
            return self.side * self.side
    figuras = [Circle(5), Square(7), Circle(3)]
    for f in figuras:
        print(f.area())

def ejercicio_11():
    """Constructor __init__."""
    class Student:
        def __init__(self, name):
            print("Constructor ejecutado")
            self.name = name
        def show(self):
            print("Hola, mi nombre es", self.name)
    s1 = Student("Emma")
    s1.show()

def ejercicio_12():
    """Destructor __del__."""
    class Student:
        def __init__(self, name):
            print("Objeto creado")
            self.name = name
        def show(self):
            print("Soy", self.name)
        def __del__(self):
            print("Objeto eliminado")
    s1 = Student("Emma")
    s1.show()
    del s1

def ejercicio_13():
    """Encapsulación básica."""
    class Employee:
        def __init__(self, name, salary, project):
            self.name = name
            self.salary = salary
            self.project = project
        def show(self):
            print(f"Empleado: {self.name} - Salario: {self.salary}")
        def work(self):
            print(f"{self.name} está trabajando en {self.project}")
    empleado = Employee("Jessa", 8000, "NLP")
    empleado.show()
    empleado.work()

EJERCICIOS = [ejercicio_1, ejercicio_2, ejercicio_3, ejercicio_4, ejercicio_5,
              ejercicio_6, ejercicio_7, ejercicio_8, ejercicio_9, ejercicio_10,
              ejercicio_11, ejercicio_12, ejercicio_13]