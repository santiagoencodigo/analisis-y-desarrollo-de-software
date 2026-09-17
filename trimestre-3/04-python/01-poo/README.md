# Programación Orientada a Objetos (POO)

> La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el software en torno a **objetos**, los cuales encapsulan datos (atributos) y comportamientos (métodos). Este paradigma busca aproximar la forma en que se procesa la información en un programa a la forma en que se representa en la vida cotidiana, facilitando el diseño, la reutilización y el mantenimiento del código.

[Wikipedia – Programación orientada a objetos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos)

---

## Tabla de contenido

- [1. Introducción a la POO](#1-introducción-a-la-poo)
- [2. Paradigma orientado a objetos](#2-paradigma-orientado-a-objetos)
  - [2.1 Abstracción](#21-abstracción)
  - [2.2 Encapsulamiento](#22-encapsulamiento)
  - [2.3 Modularidad](#23-modularidad)
  - [2.4 Jerarquía](#24-jerarquía)
  - [2.5 Polimorfismo](#25-polimorfismo)
- [3. Clases y objetos](#3-clases-y-objetos)
  - [3.1 Estructura de un objeto](#31-estructura-de-un-objeto)
  - [3.2 Atributos y métodos](#32-atributos-y-métodos)
- [4. Estructura del directorio](#4-estructura-del-directorio)
- [5. Ejemplos prácticos](#5-ejemplos-prácticos)
- [6. Actividad didáctica](#6-actividad-didáctica)

---

## 1. Introducción a la POO

En los inicios de la programación, los datos se manejaban mediante **identificadores** (variables y constantes), cada uno con un tipo de dato asociado. Sin embargo, cuando el problema a resolver requiere grandes cantidades de información con diversos tipos de datos, este mecanismo se vuelve obsoleto: la gestión se complejiza y la memoria se llena de estructuras dispersas.

> **Ejemplo:** Para gestionar una agenda de contactos, con el modelo tradicional se necesitaría una variable por cada dato (nombre, apellido, alias, teléfono, correo, dirección, notas). Si la agenda tuviera 5.000 contactos, la gestión sería inmanejable.

Es en este escenario donde surge la **Programación Orientada a Objetos**, como un paradigma que agrupa datos y comportamientos en unidades lógicas llamadas **objetos**, reflejando la forma en que las cosas se representan en el mundo real.

---

## 2. Paradigma orientado a objetos

El paradigma orientado a objetos inició en los años 70, pero se estandarizó alrededor de 1997 con la aparición del **Lenguaje Unificado de Modelado (UML)**. Según Booch et al. (2007), para que un sistema o modelo sea orientado a objetos debe tener los siguientes elementos:

```
+----------------------------------------------------------+
|          ELEMENTOS DEL PARADIGMA ORIENTADO A OBJETOS     |
+----------------------------------------------------------+
|  1. Abstracción                                          |
|  2. Encapsulamiento                                      |
|  3. Modularidad                                          |
|  4. Jerarquía                                            |
|  5. Polimorfismo                                         |
+----------------------------------------------------------+
```

### 2.1 Abstracción

La **abstracción** es un proceso natural del ser humano que consiste en identificar las características clave de algo según el contexto. En POO, permite extraer las características esenciales de un problema y representarlas en objetos, **separando el comportamiento esencial de su implementación** e ignorando los detalles internos.

> **Enfoque:** Se enfoca en el **qué es** y **qué hace** algo, no en el **cómo** se implementa.

### 2.2 Encapsulamiento

El **encapsulamiento** es el proceso que permite agrupar **datos y operaciones** bajo una misma unidad lógica. Además, trae consigo el **ocultamiento de datos**, que consiste en separar los elementos esenciales (interfaz externa y pública) de los detalles de implementación (interna y privada).

> **Ejemplo:** Un control remoto de televisor. Como usuarios interactuamos con sus botones (interfaz pública), pero no necesitamos saber cómo funcionan internamente las señales de luz o la decodificación.

**Representación del encapsulamiento:**

```
+--------------------------------------------------+
|              CONTROL REMOTO (Objeto)             |
+--------------------------------------------------+
|  INTERFAZ PÚBLICA (Botones visibles)             |
|  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         |
|  │ ON  │ │ CH+ │ │ CH- │ │ VOL+│ │ VOL-│         |
|  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘         |
+--------------------------------------------------+
|  IMPLEMENTACIÓN PRIVADA (Oculta al usuario)      |
|  - Ondas de luz de baja frecuencia               |
|  - Señales decodificadas por el televisor        |
|  - Circuitos internos                            |
+--------------------------------------------------+
```

### 2.3 Modularidad

La **modularidad** es la propiedad que permite **dividir una aplicación o sistema en partes más pequeñas**, idealmente con:
- **Bajo acoplamiento:** Poca dependencia entre módulos.
- **Alta cohesión:** Cada módulo tiene una responsabilidad clara y única.

### 2.4 Jerarquía

Las **jerarquías** son clasificaciones y ordenaciones de las abstracciones de un problema. Permiten comprender de forma general la estructura de un sistema y favorecen la reutilización de características y comportamientos.

| **Tipo de jerarquía** | **Descripción** |
|-----------------------|-----------------|
| **Agregación / Composición** | Jerarquías desde la estructura de objetos. Varias abstracciones conforman una nueva abstracción más completa. |
| **Generalización / Especialización** | Jerarquías desde la estructura de clases. Una clase hereda características de otra más general. |

**Ejemplo de jerarquía de clases:**

```
                    ┌─────────────┐
                    │   ANIMAL    │
                    └──────┬──────┘
               ┌───────────┼───────────┐
               │           │           │
        ┌──────┴──────┐ ┌──┴──┐ ┌──────┴──────┐
        │  HERBÍVORO  │ │CARNÍVORO│ │  OMNÍVORO  │
        └─────────────┘ └─────┘ └─────────────┘
```

### 2.5 Polimorfismo

El **polimorfismo** es la característica que permite que una abstracción tome **diferentes formas o comportamientos según el contexto**. Se potencia en compañía de las jerarquías.

**Ejemplo:** Todas las figuras planas pueden calcular su área, pero cada una lo hace de forma diferente.

| **Figura** | **Cálculo del área** |
|------------|----------------------|
| **Rectángulo** | base × altura |
| **Círculo** | π × radio² |
| **Triángulo** | (base × altura) / 2 |

**Representación de la jerarquía:**

```
                    ┌─────────────┐
                    │ FIGURA PLANA│
                    │  + Calcular │
                    │    Área()   │
                    └──────┬──────┘
               ┌───────────┼───────────┐
               │           │           │
        ┌──────┴──────┐ ┌──┴──────┐ ┌──┴──────┐
        │ RECTÁNGULO  │ │ CÍRCULO │ │TRIÁNGULO│
        │  Área = b*h │ │ Área=πr²│ │Área=b*h/2│
        └─────────────┘ └─────────┘ └─────────┘
```

---

## 3. Clases y objetos

Las **clases** y **objetos** son el corazón de la POO.

| **Concepto** | **Definición** |
|--------------|----------------|
| **Clase** | Es una abstracción o visión generalizada de un conjunto de objetos que tienen características (atributos) y métodos similares. Es una plantilla o molde. |
| **Objeto** | Es una instancia concreta de una clase. Representa algo que existe en el mundo real (un usuario, un producto, una cuenta bancaria). |

> **Analogía:** La clase es el molde de un pastel; los objetos son los pasteles individuales creados a partir de ese molde.

**Un objeto puede ser:**
- Cosas tangibles: un avión, un auto, un televisor.
- Roles: un gerente, un cliente, un vendedor.
- Organizaciones: una empresa, un departamento.
- Interacciones: transacciones, contratos.
- Incidentes: vuelos, sucesos, accidentes.
- Lugares: muelles, carreteras.

### 3.1 Estructura de un objeto

| **Elemento** | **Descripción** |
|--------------|-----------------|
| **Identidad (nombre)** | Permite distinguir un objeto de otro. |
| **Atributos y propiedades (estado)** | Representan las características del objeto. Son los parámetros que lo definen y diferencian de otros objetos del mismo tipo. |
| **Métodos** | Representan el comportamiento del objeto. Acciones que realizan o manejan los datos. Cada método consta de un nombre y un cuerpo donde se implementan las acciones. |

**Representación de un objeto:**

```
+--------------------------------------------------+
|                   USUARIO                        |
+--------------------------------------------------+
|  ATRIBUTOS (Estado)                              |
|  - nombre: "Santiago"                            |
|  - apellido: "Muñeton"                           |
|  - usuario: "santiagoencodigo"                   |
|  - correo: "santiago@gmail.com"                  |
|  - sesion_iniciada: False                        |
+--------------------------------------------------+
|  MÉTODOS (Comportamiento)                        |
|  + iniciar_sesion()                              |
|  + cerrar_sesion()                               |
|  + publicar_comentarios()                        |
+--------------------------------------------------+
```

### 3.2 Atributos y métodos

Tanto los atributos como los métodos tienen una **especificación de acceso**:

| **Modificador** | **Descripción** |
|-----------------|-----------------|
| **Público (+)** | Interfaz visible; puede ser accedido desde fuera de la clase. |
| **Privado (-)** | Implementación interna; solo accesible desde dentro de la clase. |
| **Protegido (#)** | Accesible desde la clase y sus subclases. |

> Esto representa una aplicación de la propiedad del **encapsulamiento**.

**Ejemplo de clase en Python:**

```python
class Usuario:
    def __init__(self, nombre, apellido, usuario, contraseña, correo):
        self.nombre = nombre
        self.apellido = apellido
        self.usuario = usuario
        self.contraseña = contraseña
        self.correo = correo
        self.sesion_iniciada = False

    def iniciar_sesion(self):
        # Lógica de inicio de sesión
        pass

    def cerrar_sesion(self):
        # Lógica de cierre de sesión
        pass
```

---

## 4. Estructura del directorio

```
01-poo/
├── README.md          # Este archivo
├── modulo.py          # Ejemplo de uso de la clase Usuario
├── usuario.py         # Definición de la clase Usuario
├── poo-1.py           # Ejercicios iniciales de POO (funciones, clases, objetos)
└── poo-2.py           # Ejercicios avanzados (clases, herencia, métodos)
```

| **Archivo** | **Descripción** |
|-------------|-----------------|
| **`usuario.py`** | Define la clase `Usuario` con atributos y métodos para iniciar sesión, cerrar sesión y publicar comentarios. |
| **`modulo.py`** | Importa la clase `Usuario` y demuestra su uso: crear un usuario, iniciar sesión, publicar un comentario y cerrar sesión. |
| **`poo-1.py`** | Ejercicios introductorios: funciones, alcance de variables, decoradores, `match-case`, y primeras clases (`Coche`, `Planeta`, `Usuario`). |
| **`poo-2.py`** | Ejercicios avanzados: clases `Estudiante`, `Persona`, `Calculadora`, y menú interactivo con clases `Triangulo`, `Empleado`, `Circulo`, `Producto`, `CuentaBancaria`. |

---

## 5. Ejemplos prácticos

### Ejemplo 1: Clase `Usuario`

```python
class Usuario:
    def __init__(self, nombre, apellido, usuario, contraseña, correo):
        self.nombre = nombre
        self.apellido = apellido
        self.usuario = usuario
        self.contraseña = contraseña
        self.correo = correo
        self.sesion_iniciada = False

    def iniciar_sesion(self):
        nombre = input("Ingrese nombre de usuario: ")
        contraseña = input("Ingrese la clave de su cuenta: ")
        if nombre == self.usuario and contraseña == self.contraseña:
            print("Inicio de sesión exitoso")
            self.sesion_iniciada = True
        else:
            print("Datos incorrectos.")
            self.sesion_iniciada = False

    def publicar_comentarios(self):
        if not self.sesion_iniciada:
            print("No puedes publicar sin iniciar sesión.")
            return
        opcion = int(input("¿Desea agregar un comentario? (1 = Sí / 2 = No): "))
        if opcion == 1:
            comentario = input("Escriba su comentario: ")
            print(f"Comentario publicado: {comentario}")

    def cerrar_sesion(self):
        if not self.sesion_iniciada:
            print("No has iniciado sesión.")
            return
        opcion = int(input("¿Desea cerrar sesión? (1 = Sí / 2 = No): "))
        if opcion == 1:
            print("Cerraste sesión correctamente.")
            self.sesion_iniciada = False
```

### Ejemplo 2: Uso de la clase `Usuario`

```python
from usuario import Usuario

usuario1 = Usuario(
    nombre="Santiago",
    apellido="Muñeton",
    usuario="santiagoencodigo",
    contraseña="4321",
    correo="santiago@gmail.com"
)

usuario1.iniciar_sesion()

if not usuario1.sesion_iniciada:
    exit()

usuario1.publicar_comentarios()
usuario1.cerrar_sesion()
```

### Ejemplo 3: Clase `Coche`

```python
class Coche:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self.arrancado = False

    def arrancar(self):
        self.arrancado = True
        print(f'{self.marca} {self.modelo} ha arrancado.')

    def parar(self):
        self.arrancado = False
        print(f'{self.marca} {self.modelo} ha parado.')

c1 = Coche("Carro Electrico", "Tesla")
print(c1.arrancado, c1.marca, c1.modelo)
```

### Ejemplo 4: Clase `Persona` con método `cumpleaños`

```python
class Persona:
    def __init__(self, nombre, apellido, edad, ficha, telefono):
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad
        self.ficha = ficha
        self.telefono = telefono

    def cumpleaños(self):
        self.edad += 1
        print(f'Feliz Cumpleaños {self.nombre} {self.apellido}, ahora tienes {self.edad} años.')

p = Persona('Santiago', 'Muñeton', 18, 11111111, 0000000000)
p.cumpleaños()
```

---

## 6. Actividad didáctica

Como parte de la formación, se realizaron una serie de ejercicios prácticos para afianzar los conceptos de la POO:

1. **Funciones y alcance:** Ejercicios sobre variables locales, globales y enclosing.
2. **Decoradores:** Ejemplo de `changecase` para modificar el retorno de una función.
3. **`match-case`:** Uso de coincidencia de patrones para días de la semana y meses.
4. **Clases y objetos:** Creación de clases `Coche`, `Planeta`, `Usuario`, `Estudiante`, `Persona`, `Calculadora`, `Triangulo`, `Empleado`, `Circulo`, `Producto`, `CuentaBancaria`.
5. **Métodos y atributos:** Implementación de métodos como `arrancar()`, `parar()`, `cumpleaños()`, `suma()`, `resta()`, `multiplicacion()`, `division()`.

**Herramientas utilizadas:**
- Python 3
- Visual Studio Code
- Entornos online como [runjs.app](https://runjs.app/)

---

> Gracias por leer.