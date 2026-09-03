# JavaScript – Fundamentos de programación

Este directorio contiene los ejercicios, ejemplos y documentación generada durante el aprendizaje de **JavaScript** en el tercer trimestre del programa Análisis y Desarrollo de Software (ADSO). Aquí se incluyen desde los primeros pasos con variables y condicionales hasta funciones, arreglos y captura de datos por teclado.

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio)
- [Introducción y enfoque de aprendizaje](#introducción-y-enfoque-de-aprendizaje)
- [Conceptos clave vistos](#conceptos-clave-vistos)
  - [Variables y tipos de datos](#variables-y-tipos-de-datos)
  - [Estructuras condicionales](#estructuras-condicionales)
  - [Estructuras de control (bucles)](#estructuras-de-control-bucles)
  - [Funciones](#funciones)
  - [Arreglos (Arrays)](#arreglos-arrays)
  - [Captura de datos por teclado](#captura-de-datos-por-teclado)
- [Ejercicios prácticos](#ejercicios-prácticos)
  - [Ejercicio 1: Condicionales](#ejercicio-1-condicionales)
  - [Ejercicio 2: Bucles y arreglos](#ejercicio-2-bucles-y-arreglos)
  - [Ejercicio 3: Funciones](#ejercicio-3-funciones)
- [Actividades y evidencias](#actividades-y-evidencias)
  - [Actividad 1: Cuestionario inicial](#actividad-1-cuestionario-inicial)
  - [Actividad 2: Taller de trazabilidad](#actividad-2-taller-de-trazabilidad)
  - [Actividad 3: Juego de mesa para aprender arrays](#actividad-3-juego-de-mesa-para-aprender-arrays)
  - [Actividad 4: Desarrollo en grupo](#actividad-4-desarrollo-en-grupo)
- [Herramientas y recursos](#herramientas-y-recursos)

---

## Estructura del directorio

```
trimestre-3/02-javascript/
├── index.html          # Página principal con ejemplos y demostraciones
├── styles.css          # Estilos para la interfaz
├── main.js             # Código JavaScript principal
└── README.md           # Este archivo
```

---

## Introducción y enfoque de aprendizaje

El aprendizaje de JavaScript comenzó con una introducción a la programación mediante **ejemplos visuales y prácticos**, utilizando la plataforma [Code.org](https://studio.code.org/courses/mc/units/1/lessons/1/levels/1) con temática de Minecraft. Esta experiencia permitió familiarizarse con conceptos como secuencias, bucles y condicionales a través de bloques de programación, facilitando la transición a un lenguaje de texto como JavaScript.

---

## Conceptos clave vistos

### Variables y tipos de datos

En JavaScript se pueden declarar variables con `let`, `const` y `var`. Los tipos de datos básicos incluyen:

- `string`: texto.
- `number`: números enteros o decimales.
- `boolean`: `true` o `false`.
- `null`: valor vacío intencional.
- `undefined`: variable declarada sin valor.

```javascript
let nombre = "Santiago";     // string
const edad = 25;             // number
let esActivo = true;         // boolean
let direccion = null;        // null
let telefono;                // undefined
```

**Diferencia entre `let` y `var`:**  
- `let` tiene alcance de bloque, mientras que `var` tiene alcance de función.
- `let` no permite redeclarar variables en el mismo ámbito.

### Estructuras condicionales

**`if` / `else if` / `else`**

```javascript
let edad = 18;
if (edad < 18) {
    console.log("Menor de edad");
} else if (edad >= 18 && edad < 60) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}
```

**`switch`**

```javascript
let nota = 4;
switch (nota) {
    case 1: console.log("Deficiente"); break;
    case 2: console.log("Insuficiente"); break;
    case 3: console.log("Aceptable"); break;
    case 4: console.log("Sobresaliente"); break;
    case 5: console.log("Excelente"); break;
    default: console.log("Nota no válida");
}
```

### Estructuras de control (bucles)

**`while`**

```javascript
let contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}
```

**`for`**

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);
}
```

### Funciones

Las funciones permiten reutilizar código y organizar la lógica. Pueden recibir parámetros y devolver valores.

```javascript
// Sin parámetros
function mostrarMensaje() {
    console.log("Conociendo JavaScript");
}

// Con parámetros y retorno
function sumar(a, b) {
    return a + b;
}

// Función flecha (arrow function)
const promedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
```

### Arreglos (Arrays)

Los arreglos almacenan colecciones de datos. Se pueden recorrer con bucles y utilizar métodos como `push()`, `pop()`, `map()`, `filter()`.

```javascript
let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

### Captura de datos por teclado

Existen diferentes formas de capturar datos del usuario según el entorno:

| **Método** | **Entorno** | **Descripción** |
|------------|-------------|-----------------|
| `prompt()` | Navegador | Muestra una ventana emergente para ingresar datos. |
| `readline` | Node.js | Módulo nativo de Node.js para leer desde la consola. |
| `prompt-sync` | Node.js | Librería externa que simula `prompt()` en Node.js. |

**Ejemplo en el navegador:**

```javascript
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombre);
```

**Ejemplo con readline (Node.js):**

```javascript
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuál es tu nombre? ", (nombre) => {
    console.log("Hola, " + nombre);
    rl.close();
});
```

**Ejemplo con prompt-sync (Node.js):**

```javascript
const prompt = require('prompt-sync')();
let nombre = prompt("¿Cuál es tu nombre? ");
console.log("Hola, " + nombre);
```

---

## Ejercicios prácticos

A continuación se muestran algunos de los ejercicios resueltos durante el trimestre.

### Ejercicio 1: Condicionales

**Pseudocódigo original:**

```
Si dinero >= precio Entonces
    Escribir "Puedes comprar el producto"
Sino
    Escribir "No tienes suficiente dinero"
FinSi
```

**Traducción a JavaScript:**

```javascript
let dinero = 50;
let precio = 30;
if (dinero >= precio) {
    console.log("Tienes $" + dinero + " y el producto cuesta $" + precio);
    console.log("¡Puedes comprar el producto!");
} else {
    console.log("Tienes $" + dinero + " y el producto cuesta $" + precio);
    console.log("No tienes suficiente dinero para comprarlo.");
}
```

### Ejercicio 2: Bucles y arreglos

**Suma de números del 1 al 10:**

```javascript
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("La suma de los números del 1 al 10 es: " + suma);
```

**Contar números pares del 1 al 10:**

```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Número par: " + i);
    }
}
```

### Ejercicio 3: Funciones

**Función `evaluarNota`:**

```javascript
function evaluarNota(nota) {
    if (nota < 3) {
        console.log("Reprobado");
    } else if (nota >= 3 && nota < 4) {
        console.log("Aprobado");
    } else {
        console.log("Excelente");
    }
}
evaluarNota(4.5); // Excelente
```

**Clasificación de funciones:**

| Ejercicio | Sin parámetros | Con parámetros | Retorno de valor |
|-----------|----------------|----------------|------------------|
| mostrarMensaje | X | | |
| sumar | | X | X |
| promedio | | X | X |
| evaluarNota | | X | |

---

## Actividades y evidencias

### Actividad 1: Cuestionario inicial

Se realizó un cuestionario en [wayground.com](https://wayground.com/) para evaluar los conocimientos previos sobre conceptos básicos de programación.

### Actividad 2: Taller de trazabilidad

Los aprendices desarrollaron ejercicios de trazabilidad en un lenguaje de programación, siguiendo la lógica de pseudocódigos y traduciéndolos a JavaScript.

### Actividad 3: Juego de mesa para aprender arrays

En grupos, se diseñó un juego de mesa (no digital) para al menos 3 personas, con el fin de enseñar los conceptos de **arrays** y **estructuras de datos** vistos en el capítulo 7 del material de referencia.

### Actividad 4: Desarrollo en grupo

Cada grupo de proyecto desarrolló un programa en JavaScript que cumplía con los siguientes requisitos:

- Una función por cada integrante (distintas y relacionadas con el propósito del proyecto).
- Uso de **variables**, **if**, **switch**, **while**, **for**, **arreglos**, **funciones** y **lectura por teclado**.

El archivo `.js` fue entregado como evidencia.

---

## Herramientas y recursos

- **[Node.js](https://nodejs.org/)** – Entorno de ejecución para JavaScript en el servidor.
- **[Visual Studio Code](https://code.visualstudio.com/)** – Editor de código con soporte para JavaScript.
- **[runjs.app](https://runjs.app/play)** – Entorno online para probar código JavaScript.
- **[JavaScript Notes](https://lfrestrepo404.github.io/javascript-notes/)** – Material de referencia utilizado durante el trimestre.
- **[Code.org – Minecraft](https://studio.code.org/courses/mc/units/1/lessons/1/levels/1)** – Introducción a la programación con bloques.

**Glosario de términos:**

| **Término** | **Descripción** |
|-------------|-----------------|
| **API** | Interfaz que conecta dos programas. |
| **Back-End** | Procesamiento detrás de escena (servidor, base de datos). |
| **CSS** | Lenguaje de estilo para documentos HTML. |
| **Framework** | Conjunto de herramientas que facilitan el desarrollo. |
| **Front-End** | Parte de la aplicación que el usuario ve e interactúa. |
| **HTML** | Lenguaje para crear páginas web. |
| **Node.js** | Intérprete de JavaScript en el servidor. |
| **Terminal** | Interfaz de línea de comandos. |

---

> Gracias por leer.