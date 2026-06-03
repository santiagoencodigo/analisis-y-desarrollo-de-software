# Proyecto Formativo

> **Clase del 2 de junio de 2026**

> A continuación mis apuntes respecto a la formación del día de hoy. Es una lista de los entregables que debemos desarrollar y revisar respecto a nuestro proyecto formativo.

## Actividades Pendientes

Actualizar y definir los siguientes elementos del proyecto:

### 1. Objetivos, Alcance y Restricciones

* Revisar y actualizar los objetivos del proyecto.
* Definir claramente el alcance.
* Identificar y documentar las restricciones existentes.

> **Importante:** El objetivo puede ajustarse durante el desarrollo del proyecto, pero no debe modificarse de manera drástica ni perder su enfoque principal.

---

### 2. Gestiones o Módulos Principales

Identificar y documentar las gestiones o módulos principales que conforman la aplicación.

---

### 3. Requisitos Funcionales o Historias de Usuario

Definir los requisitos funcionales o historias de usuario para cada uno de los módulos del sistema.

---

### 4. Relación entre Requisitos Funcionales y Requisitos de Información

Por cada requisito funcional, se deben identificar y asociar los requisitos de información correspondientes (datos que serán almacenados o gestionados en la base de datos).

#### Ejemplo

| Módulo    | No. | Requisito Funcional                                                                 | No. (RI) | Requisito de Información                                                                                 |
| --------- | --- | ----------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| Usuarios  | RF1 | El sistema debe permitir al administrador asignar roles a los usuarios registrados. | RI1      | Nombre de usuario, tipo de rol                                                                           |
| Usuarios  | RF2 | El sistema debe permitir a los usuarios iniciar sesión.                             | RI2      | Nombre de usuario, contraseña                                                                            |
| Ventas    | RF3 | El sistema debe permitir a los usuarios consultar las ventas generadas.             | RI3      | ID de venta, valor de venta, usuario que registró la venta                                               |
| Ventas    | RF4 | El sistema debe permitir al administrador generar reportes mensuales de ventas.     | RI4      | Fecha inicial, fecha final, ID de venta, valor de venta, descripción, autor de la venta, total de ventas |
| Productos | RF5 | Pendiente de definir                                                                | RI5      | Pendiente de definir                                                                                     |

---

## Prototipos y Navegación

Se requiere actualizar la documentación relacionada con los prototipos de la aplicación.

Actualmente se solicita la elaboración de:

* Un prototipo funcional.
* Un mapa de navegación de la aplicación.

### Flujo de Diseño

```text
Wireframe → Mockup → Prototipo
```

Anteriormente se trabajaba directamente sobre el prototipo, pero ahora se espera seguir una secuencia más estructurada.

### Relación con los Casos de Uso

La información utilizada para construir prototipos y mapas de navegación proviene principalmente de los diagramas de casos de uso.

Toda esta información será necesaria para la documentación final del proyecto.

### Ingeniería Inversa

Es posible aplicar ingeniería inversa sobre sistemas existentes.

Por ejemplo, al analizar una pantalla de inicio de sesión, se pueden plantear preguntas como:

* ¿Cuáles son los requisitos funcionales involucrados?
* ¿Cuáles son los requisitos de información asociados?
* ¿Qué datos deben almacenarse o validarse?

> **Nota:** El formulario de inicio de sesión es uno de los formularios más básicos y representa un buen punto de partida para realizar este tipo de análisis.

### Trazabilidad de Datos

Debe existir una trazabilidad clara de todos los datos que serán manipulados por el sistema.

Cada dato utilizado en formularios, procesos o reportes debe estar relacionado con los requisitos funcionales y de información correspondientes.

---

## Formularios y Base de Datos

Durante el desarrollo con Python y Django puede surgir la idea de que el ORM elimina la necesidad de preocuparse por el diseño de la base de datos.

> "Como estamos viendo Python y Django, podemos hacer la migración mediante el ORM y no tendríamos que preocuparnos por la base de datos."

Esta afirmación es incorrecta.

Aunque el ORM facilita la gestión de la base de datos, en muchos proyectos es necesario trabajar con bases de datos externas o adaptarse a requerimientos específicos. Por esta razón, el diseño de la base de datos debe mantenerse actualizado durante todo el desarrollo.

> **Importante:** Los requisitos funcionales, formularios, modelos y base de datos deben mantenerse completamente alineados.

### Consideraciones para Formularios

Los formularios deben:

* Tener títulos claros y descriptivos.
* Permitir identificar fácilmente el contexto de la información mostrada.
* Facilitar la comprensión del perfil o información del usuario.

Ejemplo:

* Saber quién es el usuario.
* Conocer el nombre del usuario.
* Identificar claramente el perfil asociado.

### Buenas Prácticas

* Cada campo debe contar con su respectiva etiqueta (*label*).
* Todo *label* debe estar asociado a un *input*.
* Es recomendable revisar el código para verificar el cumplimiento de esta práctica.

> **Consejo:** Los formularios representan uno de los puntos fuertes del proyecto, por lo que deben analizarse cuidadosamente dentro del equipo de trabajo.

---

## Propiedades Tipográficas

Se recomienda evitar el uso de tipografías genéricas o predeterminadas.

### Recomendación

Utilizar fuentes disponibles en Google Fonts para fortalecer la identidad visual de la aplicación.

### Objetivo

* Aportar personalidad al sistema.
* Mejorar la experiencia visual.
* Evitar una apariencia genérica o poco diferenciada.

> **Importante:** La tipografía forma parte de la identidad visual y contribuye significativamente a la percepción de calidad del producto.

---

## Actividad de la Sesión

Actualmente el proyecto cuenta con:

* Página principal (*Home Page*).
* Pantalla de inicio de sesión (*Login*).
* Tres pantallas adicionales.

### Aspectos a Revisar

#### 1. Identidad Visual

Evaluar la coherencia visual de la aplicación y fortalecer los elementos de diseño.

#### 2. Formularios y Tablas

Ya se cuenta con formularios implementados.

Ahora es necesario establecer una relación clara entre:

* Formularios.
* Datos almacenados.
* Estructura de la base de datos.

### Preparación de la Presentación

Preparar una presentación que permita explicar la relación existente entre:

* Formularios.
* Requisitos funcionales.
* Base de datos.

### Retroalimentación con el Instructor

* Tiempo máximo por grupo: **20 minutos**.

---

## Test de Usabilidad

Se realizará una evaluación relacionada con la usabilidad del sistema.

### Aspectos Relevantes

* Analizar elementos que mejoren la experiencia del usuario.
* Evaluar la facilidad de uso de la interfaz.
* Aplicar principios básicos de usabilidad.

Posteriormente se realizará una sesión de retroalimentación para revisar los resultados obtenidos.

> **Nota:** Esta actividad se desarrollará el martes siguiente al lunes festivo de la próxima semana.

---

## Actividades para el Día de Mañana

### Trabajo en Equipo

Realizar una sesión grupal para analizar aspectos relacionados con la aplicación y continuar fortaleciendo el desarrollo del proyecto.

* La aplicación corresponde a cada uno de los archivos que encuentra en esta carpeta. Esta consiste en un sistema de inventario y productos siendo dos aplicaciones para un proyecto llamado config.