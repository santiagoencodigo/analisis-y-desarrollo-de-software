<h1 align="center">Aprendizaje - Python</h1> 

[Python](https://www.python.org/ "Pagina de Python") es un lenguaje de programación de alto nivel, interpretado y de propósito general, conocido por su sintaxis sencilla y legible que facilita el aprendizaje y la escritura de código. Es multiplataforma, gratuito y cuenta con una amplia comunidad que desarrolla librerías y frameworks para diversas áreas como desarrollo web, análisis de datos, inteligencia artificial, automatización y más. Su enfoque en la claridad y la productividad lo convierte en uno de los lenguajes más utilizados en el mundo.

---

> Lenguaje de programación de alto nivel: Esta diseñado para que se parezca al lenguaje humano, por lo que no se tiene que saber detalles complicados como maquina, memoria, procesador. Por lo que es muy facil de entender comparado contra un lenguaje de bajo nivel como ensamblador.

> Lenguaje Interpretado: **No convierte todo el codigo en machine code** directamente como pasaria con [Java](https://www.java.com/es/ "Pagina de java") o [C](https://www.freecodecamp.org/espanol/news/el-libro-para-principiantes-c-aprende-las-bases-del-lenguaje-de-programacion-c-en-solo-unas-horas/ "Pagina freecodecamp - Manual de C"), un intérprete lee el código línea por línea y lo ejecuta directamente.

> Lenguaje de propósito general: Python no esta limitado a un sólo nicho, se puede utilizar para Desarrollo web (con Django, Flask), Ciencia de datos e Inteligencia Artificial, Automatización de tareas, Programas de escritorio, Juegos y muchas más cosas.

<div align="center">
    <img src="https://visionyvalor.es/wp-content/uploads/2024/03/Python-Symbol_0-4.png" width="400px" height="200px"/>
</div>

imagen tomada de: https://visionyvalor.es/producto/python-avanzado-para-proyectos-de-seguridad/

---

## Introducción

Este repositorio reúne diferentes ejercicios y ejemplos prácticos en Python tomados de [pynative.com](https://pynative-com.translate.goog/python-data-structure-exercise-for-beginners/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc "Pagina de PYNATIVE.COM"), orientados al aprendizaje de conceptos fundamentales de programación. Aquí se exploran desde los tipos de datos básicos hasta estructuras más complejas como listas, diccionarios y tuplas, junto con el uso de métodos útiles (append, lower, upper, entre otros).

Además, se incluyen prácticas con estructuras de control como condicionales, ciclos for y while, así como el manejo de arreglos y la aplicación de lógica para resolver problemas.

El objetivo es servir como una guía de estudio y práctica continua para fortalecer habilidades en Python y sentar bases sólidas en la programación.

<!-- Indice de contenido -->

## Contenido

* Lista

* 

### Se explica más a fondo:

+ Condicionales
+ Estructura For
+ Estructura While (Ciclos)
+ Arrays - Arreglo

#

### Tipos de datos

### int - entero

> Representa un número entero

## float - flotante

## bool - booleano - true or false

## str - string - cadena de texto


## List - Listas

Las listas de Python **son la estructura de datos más utilizada**, por lo que es necesario comprenderlas bien. En este repositorio se encuentran los diferentes métodos para crear una lista, añadir, modificar, eliminar elementos, iterarla y a acceder a sus elementos en detalle. listas anidadas y la comprensión de [listas](https://pynative-com.translate.goog/wp-content/uploads/2021/03/python-list.jpg?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc "Pagina PY Native - Imagen explicativa de Listas en Python") con ejemplos.

**Una list en Python se utiliza porque es una estructura de datos muy flexible que permite almacenar y manejar varios valores dentro de una sola variable.** por lo que en vez de utilizar muchos caracteres, se puede utilizar una lista pues se pueden utilizar metodos (Agregar, Editar, Eliminar)

### Las siguientes son las propiedades de una lista

* Mutable: Los elementos de la lista se pueden modificar. Podemos añadir o eliminar elementos de la lista una vez creada.

* Ordenado: Los elementos de las listas están ordenados. Cada elemento tiene un valor de índice único. Los nuevos elementos se añadirán al final de la lista.

* Heterogéneo : la lista puede contener diferentes tipos de elementos, es decir, puede contener elementos de cadena, enteros, booleanos o de cualquier tipo.

* Duplicados: la lista puede contener duplicados, es decir, las listas pueden tener dos elementos con los mismos valores. 

### Temario

* operaciones y manipulaciones de listas
* funciones de lista
* segmentación de listas
* comprensión de listas


## tuple - tupla

## set - conjunto

---

## Diccionario - Dict

Un diccionario es una estructura de datos en Python que permite almacenar información en pares de clave → valor.

```diccionario = { "clave1": "valor1", "clave2:"valor2" }```

Los valores pueden ser de cualquier tipo de dato: números, cadenas, listas, otros diccionarios, etc. Se pueden agregar, eliminar, modificar elementos despues de crearlo.

Estos se definen con llaves: { } , separando clave con valor por medio de : , y los pares con comas ,.

```
diccionario = {
    "clave1" : "valor1",
    "clave2" : "valor2",
    "clave3" : "valor3"
}

persona = {
    "nombre" : "santiago",
    "edad" : "17",
    "lenguajes" : "HTML, CSS, JS, PYTHON",
    "activo": True
}
```

### complex - numeros complejos


<!-- TEMA MATRIZ -->
#### Matriz en Python con lista de listas

Son filas y columnas


### Funciones en Python

para este apartado, en los ejercicios escriba el numero 700

la sintaxis básica para crear una función:
__def nombre_de_la_funcion(parametro1, parametro2)__
```
    def sumar(a,b):
        resultado = a+b
        return resultado
    # LLamar a la funcion
    suma = sumar(3,5)
    print(f"la suma es: {suma}")
```

hay que realizar el codigo de unas historias de usuario 


