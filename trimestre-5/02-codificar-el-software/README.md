# Codificar El Software

> A continuación mis apuntes de cada una de las sesiones















---















## Tabla de Contenido

[1. Fundamentos de Python 1.](#1-fundamentos-de-python-1)

[2. Fundamentos de Python 2.](#2-fundamentos-de-python-2)

[3. Programación Orientada a Objetos y Creación de CRUD](#3-programación-orientada-a-objetos-y-creación-de-crud)













---













## 1. Fundamentos de Python 1

a















---















## 2. Fundamentos de Python 2

a















---













## 3. Programación Orientada a Objetos y Creación de CRUD



A lo largo del trimestre se debe desarrollar una aplicación completa que incluya:

- Conexión a base de datos (usando XAMPP + Python).
- CRUD completo (Crear, Leer, Actualizar, Eliminar).
- Sistema de inicio de sesión.
- Backend con interfaz de usuario (frontend básico).
- Descarga de archivos.


---

Actividad de Sesión

* Se pide escribir python en la terminal de VSCODE para instalar el entorno de python en el visual, además de que termina abriendo la tienda de microsoft para instalarlo.

> Se comenta que se debe adjuntar el certificado python 

* Se pide tambien abrir XAMPP

La idea de esta ocasión sera aprender conceptos de POO y la creación de CRUD básico.

El primer paso de todo es conocer el código.

> Vamos a entender a hacer una conexión con la base de datos con python.

Eventualmente estaremos aprendiendo a usar un framework de python.

Tenemos que hacer propuesta con este proyecto.

---

**POO - Programación Orientada a Objetos**

Se le conoce como el paradigma o forma de programar, la forma en la que se resuelve un problema.

Todo lo que existe en la vida real, son objetos. En otras palabras podemos pensar de nuestras tablas como objetos.

---

¿Qué seria una clase?

Algo que agrupa objetos, podemos pensarlo como un conjunto de cosas en común, podemos pensarlo como un fabricante de objetos.

    El objeto es una instancia de una clase.

    Una instancia es una creación

    Esto significa que el objeto representa a una clase o que fue creado con una clase.

    Es como pensarlo como clase vehiculo con atributos de modelo, placa, color, metodos como acelerar, frenar.

Entonces los objetos se crean a partir de una plantilla llamada clase.

> A la final somos usuarios tambien.

Por lo que tenemos una clase, hacemos una instanciación y de ahí sale un objeto que contiene atributos (datos) y metodos (funciones)

---

POO tiene 4 pilares para dar solución a problemas.

1. Abstracción: Proceso de definir atributos y metodos de una clase

2. Encapsulamiento: Protege la información de manipulaciones no autorizadas.

3. Polimorfismo: Da la misma orden a varios objetos para que respondan de diferentes formas

4. Herencia: Las instancias heredan los atributos y metodos de la clase

```python
    #nombre/identificador de la clase
    #class es palabra reservada
    class Coche:
        """Docstring: Esta clase define el estado y el 
    comportamiento de un coche"""
        #atributos de clase
        ruedas=4
        #constructor
        def __init__(self, color, aceleracion):
            #atributos de instancia
            self.color= color
            self.acceleracion=aceleracion
            self.velocidad=0
        #métodos
        def acelera(self):
            self.velocidad=self.velocidad+self.aceleracion
        def frena(self):
            v=self.velocidad - self.aceleracion
            if v<0:
                v=0
            self.velocidad=v
```

Hay una función que se llama constructor que es __init que cuando se necesite un objeto coche tenga (por eso self debido a una referencia a si mismo.) los parametros como color, aceleracion, velocidad.

Los atributos de la clase con los "propios" de la clase y existen atributos de clase y atributos de instancia.

```python
    c1 = Coche('rojo', 20)
    c2 = Coche('azul', 20)

    print(c1.color) #rojo
    print(c2.color) #azul

    print(c1.ruedas) # Atributo de clase, resultado 4
    print(c2.ruedas) # Atributo de clase, resultado 4

    Coche.ruedas = 6 # Atributo de clase, resultado 6

    print(c1.ruedas) # Atributo de clase, resultado 6
    print(c2.ruedas) # Atributo de clase, resultado 6
```

O en otro caso:

```python
    c1 = Coche('rojo', 20)
    c2 = Coche('azul', 20)

    print(c1.color) #rojo
    print(c2.color) #azul

    print(c1.ruedas) # Atributo de clase, resultado 4
    print(c2.ruedas) # Atributo de clase, resultado 4

    c1.ruedas = 6

    print(c1.ruedas) # Atributo de clase, resultado 6
    print(c2.ruedas) # Atributo de clase, resultado 6
```

---

La herencia es reutilizar código en lo posible.

Observe el código a continuación

```python
#la clase CocheVolador hereda de la clase Coche
class CocheVolador(Coche):
    ruedas = 6
    def __init__(self, color, aceleracion, esta_volando=False):
        # la función super(). Esta función devuelve un objeto 
        # temporal de la superclase que permite invocar a los métodos 
        # definidos en la misma.
        super().__init__(color, aceleracion)
        #se crea el atributo de instancia esta_volando solo para 
        # objetos de la clase CocheVolador.
        self.esta_volando = esta_volando

    def vuela(self):
        self.esta_volando = True

    def aterriza(self):
        self.esta_volando = False

c = Coche('azul', 10)
cv1 = CocheVolador('rojo', 60)

print(cv1.color) #resultado rojo
print(cv1.esta_volando) #resultado False

cv1.acelera()

print(cv1.velocidad) #resultado 60
print(CocheVolador.ruedas) #resultado 6
print(c.esta_volando) #resultado Traceback (most recent call last)...        
```

Funciones para tener en cuenta en donde a veces

Esta la función type() para saber que tipo de dato, entonces tenemos las funciones isinstance() e issubclass() para saber de qué clase viene.

```python
    print(isinstance(c, Coche))               # True
    print(isinstance(cv, Coche))              # True
    print(isinstance(c, CocheVolador))        # False
    print(isinstance(cv, CocheVolador))       # True
    print(issubclass(CocheVolador, Coche))    # True
    print(issubclass(Coche, CocheVolador))    # False
```

Existe la herencia multiple en donde tengo a varios hijos que les puedo dar varias cosas a la vez. Entonces basicamente, esto significa que puedo tener 2 padres en una instancia.

```python
    class A:
        def print_a(self):
            print(a)
    class B:
        def print_b(self):
            print(b)

    # Clase 3 hereda entonces A y B
    class C(A,B):
        def print_c(self):
            print(c)
```

---

Encapsulación: Atributos privados.

Por defecto python tiene los atributos publicos y hay una forma de tenerlos privados, en donde entornos de desarrollo como JAVA pide encapsular 

> Encapsular es uno por uno.

Python puede ser flexible, pero como todo hay cosas buenas y cosas malas.

```python
    class A:
        def __init__(self):
            self._contador = 0  # Este atributo es privado
        def incrementa(self):
            self._contador += 1
        def cuenta(self):
            return self._contador

    class B(object):
        def __init__(self):
            self.__contador = 0  # Este atributo es privado
        def incrementa(self):
            self.__contador += 1
        def cuenta(self):
            return self.__contador

    # Pruebas con la clase A
    a = A()
    a.incrementa()
    a.incrementa()
    a.incrementa()
    print(a.cuenta()) # #3
    print(a._contador) # #3

    # Pruebas con la clase B
    b = B()
    b.incrementa()
    b.incrementa()
    print(b.cuenta()) # #2
    # print(b.__contador) # Traceback...AttributeError: 'B' object has no attribute '__contador'. Did you mean: '_B__contador'?
    print(b._B__contador) # #2
```

* La forma de darle entender al lenguaje es el guion bajo que contenemos al momento de crear la función como self._contador += 1

* Cuando usamos el doble guion bajo no vamos a tener ningún acceso a la función.

---

**Polimorfismo**

Es cuando yo puedo hacer varios objetos o cuando puedo instanciar a diferentes clases para que podamos hacer una misma acción.

En donde entonces obsere el siguente objeto:

```python
# Definición de clases.

    class Perro:
        def sonido(self):
            print("wofff wofff")

    class Gato:
    def sonido(self):
        print("Miauuuuuuuuuuu")

    class Vaca:
    def sonido(self):
        print("Muuuuuuuuuuu")

    # Función que recibe una lista de objetos
    # y llama al método "sonido" de cada uno
    def a_cantar(animales):
        for animal in animales:
            animal.sonido()  # aquí ocurre el polimorfismo

    # Punto de entrada del programa
    if __name__ == '__main__':
        perro = Perro()
        gato = Gato()
        gato_2 = Gato()
        vaca = Vaca()
        perro_2 = Perro()

        # Lista con diferentes tipos de objetos
        granja = [perro, gato, vaca, gato_2, perro_2]

        # Ejecuta la función
        a_cantar(granja)
```

Esto tiene como función ahorrarnos bastante código.










---










Luego de un tiempo, se empezo a hacer backend con django y esto trajo problemas a mi repositorio respecto al build frontend de github pages.

En donde:

GitHub Pages estaba funcionando pero:
* luego agregaste Django
* GitHub Actions/Jekyll empezó a intentar “procesar” el repo completo
* y el deploy se rompió

Por lo que hay que configurar GitHub Pages para: “Ignorar Django y publicar SOLO los archivos estáticos” y por ende: Usar “Deploy static files”

---