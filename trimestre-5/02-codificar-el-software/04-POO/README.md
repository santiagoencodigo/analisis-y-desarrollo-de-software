# Programación Orientada a Objetos en Python

Este directorio contiene tres ejemplos prácticos que ilustran los fundamentos de la Programación Orientada a Objetos (POO) en Python. Los ejercicios cubren los pilares esenciales: **abstracción**, **encapsulamiento**, **herencia** y **polimorfismo**.

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `POO-1.py` | Introducción a clases, atributos de clase e instancia, métodos y herencia simple. Incluye la clase `Coche` y su subclase `CocheVolador`. |
| `POO-2.py` | Demostración de encapsulamiento mediante atributos privados (convención `_` y `__`). Muestra la diferencia entre `_contador` y `__contador`. |
| `POO-3-granja.py` | Ejemplo de polimorfismo: una función que itera sobre una lista de objetos de distintas clases (`Perro`, `Gato`, `Vaca`) y llama a su método `sonido()`. |

---

## Conceptos Clave

### 1. Clases y Objetos
- Una **clase** es una plantilla que define atributos y métodos comunes a un conjunto de objetos.
- Un **objeto** es una instancia concreta de una clase.

En `POO-1.py`, la clase `Coche` define atributos como `ruedas` (de clase) y `color`, `aceleracion`, `velocidad` (de instancia). Los objetos `c1` y `c2` son instancias con sus propios valores.

### 2. Herencia
Permite crear una nueva clase a partir de una existente, reutilizando y extendiendo su funcionalidad.

En `POO-1.py`, `CocheVolador` hereda de `Coche` y añade el atributo `esta_volando` y los métodos `vuela()` y `aterriza()`. El uso de `super()` invoca al constructor de la clase padre.

### 3. Encapsulamiento
Protege los datos internos de una clase mediante el control de acceso. En Python:
- Un guion bajo `_` indica que un atributo es "protegido" (convención).
- Dos guiones bajos `__` hacen que el atributo sea "privado" (name mangling).

En `POO-2.py`, la clase `A` usa `_contador` (accesible directamente), mientras que `B` usa `__contador`, que solo puede ser leído mediante el método `cuenta()` o mediante el nombre alterado `_B__contador`.

### 4. Polimorfismo
Permite que objetos de diferentes clases respondan al mismo mensaje (método) de formas distintas.

En `POO-3-granja.py`, la función `a_cantar()` recibe una lista de animales y llama a `sonido()` sin importar la clase concreta. Cada clase implementa su propio `sonido()`, logrando comportamientos diferentes.

---

## Ejecución

Para ejecutar cualquiera de los scripts, asegúrate de tener Python 3 instalado y ejecuta en la terminal:

```bash
python POO-1.py
python POO-2.py
python POO-3-granja.py
```

Cada script imprimirá en consola los resultados de las pruebas realizadas.