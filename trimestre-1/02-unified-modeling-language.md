# UML y Metodologías de Desarrollo de Software

---

## Tabla de contenido

- [1. Lineamientos Fundamentales del Proyecto Formativo](#1-lineamientos-fundamentales-del-proyecto-formativo)
- [2. Ingeniería de Requisitos](#2-ingeniería-de-requisitos)
- [3. Estándar UML (Unified Modeling Language)](#3-estándar-uml-unified-modeling-language)
- [4. Historias de Usuario](#4-historias-de-usuario)
- [5. Metodologías de Desarrollo de Software](#5-metodologías-de-desarrollo-de-software)
  - [5.1 Scrum](#51-scrum)
  - [5.2 XP (eXtreme Programming)](#52-xp-extreme-programming)
  - [5.3 Kanban](#53-kanban)
- [6. Matriz de Metodologías (Estructura de Análisis Comparativo)](#6-matriz-de-metodologías-estructura-de-análisis-comparativo)
- [7. Mapas de Navegación y Prototipado](#7-mapas-de-navegación-y-prototipado)
- [8. Estructura del Proyecto Formativo SENA](#8-estructura-del-proyecto-formativo-sena)
- [9. Requisitos Funcionales y No Funcionales](#9-requisitos-funcionales-y-no-funcionales)
- [10. Flujo Metodológico del Proyecto](#10-flujo-metodológico-del-proyecto)
- [11. Conclusión y Líneas de Investigación](#11-conclusión-y-líneas-de-investigación)

---

## 1. Lineamientos Fundamentales del Proyecto Formativo

> Todos empezaron a pensar en un proyecto de Software. (Esto fue lo que más me gustó de aprender por este medio.)

### Alcance e Identificación del Problema

El diseño de un sistema de software educativo o productivo requiere una delimitación estricta del alcance para garantizar su viabilidad y éxito técnico.

- **Principio de Simplicidad:** El proyecto debe ser **sencillo** y, por ende, tratar un **sólo tema** o una única línea de negocio centralizada.
- **Ejemplos de módulos base:**
  - Control de personal
  - Control de inventario
  - Gestión de citas
- **Justificación Arquitectónica:** Un buen software se caracteriza por ser **centralizado**. Si se intenta abarcar múltiples problemáticas sin una base sólida, el desarrollo se dispersará, dando como resultado un software ineficiente y estructuralmente débil en cada una de sus áreas.

### Formulación del Objetivo General

Para estructurar correctamente el objetivo general de la investigación y desarrollo, se debe descomponer el enunciado en cuatro elementos gramaticales y técnicos indispensables:

```
Objetivo General = Verbo en Infinitivo + Elemento/Objeto + Empresa + Ubicación
```

- **Estructura Desglosada del Proyecto:**
  1. **Verbo en Infinitivo:** Desarrollar (un software para el...)
  2. **Elemento o Propósito:** ...control de personal...
  3. **Empresa o Entidad:** ...en la panadería La Paisa...
  4. **Ubicación Geográfica:** ...en Soacha.

> **Enunciado Integrado:** *Desarrollar un software para el control de personal en la panadería La Paisa en Soacha.*

### Estructuración de Objetivos Específicos

- Los objetivos específicos representan el desglose **fase por fase** de las actividades necesarias para alcanzar el objetivo general.
- Sirven como la hoja de ruta metodológica del proyecto de software (Análisis, Diseño, Desarrollo, Pruebas, Implantación).

---

## 2. Ingeniería de Requisitos

### ¿Qué es la Ingeniería de Requisitos?

La ingeniería de software abarca la obtención de los requerimientos o requisitos del software, el diseño del sistema, la implementación, las pruebas, la instalación, el mantenimiento y la actualización del sistema. La **ingeniería de requisitos** se enfoca en la definición de **lo que se desea producir**.

Es la disciplina que se encarga de:

- **Elicitar** (recolectar) las necesidades de los stakeholders.
- **Analizar** los requisitos para determinar su viabilidad y consistencia.
- **Especificar** los requisitos de forma clara y documentada.
- **Validar** que los requisitos reflejan realmente lo que el cliente necesita.
- **Gestionar** los cambios a lo largo del ciclo de vida del proyecto.

### Importancia de la Ingeniería de Requisitos

- **Base para el diseño y desarrollo:** Define qué debe hacer el sistema.
- **Comunicación efectiva:** Alinea expectativas entre clientes y desarrolladores.
- **Gestión del alcance:** Evita desviaciones y corrupción del alcance.
- **Trazabilidad:** Permite rastrear cada requisito desde su origen hasta su implementación.

---

## 3. Estándar UML (Unified Modeling Language)

El Lenguaje de Modelado Unificado es la norma internacional para la especificación, visualización, construcción y documentación de los artefactos de un sistema de software.

### Componentes Esenciales de Casos de Uso (UML)

- **Actor:** Representación gráfica de una entidad externa (usualmente un rol de usuario, sistema externo o tiempo) que interactúa con el sistema. *(Representado por un monigote/stick figure)*.
- **Caso de Uso / Proceso:** Bloque atómico de funcionalidad que realiza el sistema y que aporta un valor medible al actor. *(Representado por un óvalo con la etiqueta "Inicio" o el nombre de la acción)*.

> **A continuación una imagen de ejemplo:**

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjELFQkPqfP1SWQkwBB7uheWlKLzQJSLaDh4CAlCToJJFIQ5pXEWI_OAGyygcUr-LclGf5QXaslnKmh2XSNCGNWo98kKraS-4BvV4JV1soFpMLcy9rXmu4GVzanP0hl7-h4yM-EOZxtcFmW/s16000/relacion-actor-caso-de-uso.png">

*Imagen tomada de: https://www.pmoinformatica.com/2021/02/elementos-diagrama-casos-de-uso.html*

### ¿Para qué sirven los Diagramas de Casos de Uso y DFD?

- Su propósito fundamental es conocer y mapear a nivel técnico el **manejo de cada proceso** interno del negocio.
- **DFD (Diagrama de Flujo de Datos):** Muestra cómo fluyen los datos a través del sistema, identificando entradas, procesos, almacenamientos y salidas.
- **Caso de Uso:** Muestra la interacción entre los actores y el sistema, describiendo las funcionalidades desde la perspectiva del usuario.

### La Columna Vertebral del Proyecto (Flujo Metodológico de Ingeniería)

Existe una distinción radical e inequívoca en el diseño de sistemas:

```
DFD ≠ Diagrama de Casos de Uso
```

El flujo de trabajo técnico para construir la arquitectura lógica sigue una secuencia numerada estricta, donde los requerimientos alimentan la información del sistema:

```
+------------------------+      +-------------------+
|  1. Historias de Usuario | ---> |  2. Requerimientos |
+------------------------+      +-------------------+
                                          |
                                          | (Provee Info a)
                                          v
                                +-------------------+
                                |     3. DFD        |
                                +-------------------+
```

- **Cronograma:** Es el eje transversal que temporaliza la ejecución de estas tres fases lógicas del desarrollo.

---

## 4. Historias de Usuario

### ¿Qué es una Historia de Usuario?

Una **historia de usuario** es una descripción corta y simple de una funcionalidad del software, escrita desde la perspectiva del usuario final. Su propósito es capturar lo que el usuario necesita y por qué, de una manera que sea comprensible para todo el equipo.

### Sintaxis de una Historia de Usuario

```
Como <rol> quiero <acción/requerimiento> para poder <beneficio, justificación>
```

### Estructura Completa de una Historia de Usuario

Cada historia de usuario incluye:

- **Historia:** El enunciado principal con la sintaxis descrita.
- **Puntos de Historia:** Estimación de la complejidad o esfuerzo (usando técnicas como Planning Poker).
- **Tareas:** Lista de actividades técnicas necesarias para implementar la historia.
- **Pruebas de Aceptación:** Criterios que deben cumplirse para considerar la historia como completada.
- **Responsables:** Persona(s) encargada(s) de la implementación.
- **Sketch:** Boceto o prototipo de la interfaz.

### Ejemplo de Historia de Usuario

| **HISTORIA** | **Ptos Historia** |
|--------------|-------------------|
| Yo como usuario requiero iniciar sesión donde pueda especificar nombre de usuario y la contraseña. | 5 |

| **Tareas** |
|------------|
| 1. Crear la BD que contenga las tablas de usuarios y la tabla de contraseñas. |
| 2. Crear el formulario de ingreso al sistema. |
| 3. Crear la plantilla de inicio de sesión. |
| 4. Generar la apertura de la BD. |
| 5. Generar el código de captura de usuario y contraseña. |
| 6. Generar los mensajes de error. |
| 7. Generar la llamada a la página principal cuando hay un ingreso exitoso. |
| 8. Generar validación de ingreso por primera vez. |
| 9. Generar pantalla de cambio de clave. |
| 10. Generar el procedimiento para guardar la nueva clave en la BD. |

| **Pruebas de Aceptación** |
|---------------------------|
| Que el usuario deje los dos campos en blanco y intente realizar inicio de sesión. |
| Que el usuario ingrese un nombre de usuario y contraseña que no estén en la BD. |
| Que el usuario ingrese un nombre de usuario y contraseña válidos. |
| Que en el primer ingreso del usuario le solicite cambio de contraseña y se verifique que el cambio se hizo. |

### Ejemplo de Historia de Usuario con Rol de Administrador

| **HISTORIA** | **Ptos Historia** |
|--------------|-------------------|
| Como usuario y rol Administrador deseo tener acceso a todos módulos desde la página de inicio. | 4 |

| **Tareas** |
|------------|
| 1. Generar el procedimiento de consulta a la BD. |
| 2. Generar una validación sobre qué tipo de usuario es el que se está logueando. |
| 3. Generar un llamado a la página de inicio. |
| 4. Crear el código para habilitar las opciones según el rol del usuario. |
| 5. Crear el código para dejar habilitados los siguientes botones para este usuario: a. Botón Configuración, b. Botón Reportes, c. Botón Actualizar datos Reales, d. Botones de los Módulos. |
| 6. Generar el código para que al dar clic al botón cargue la página de cada módulo. |

| **Pruebas de Aceptación** |
|---------------------------|
| Que el usuario con rol Administrador ingrese a la vista de Administrador y vea todos los módulos permitidos. |
| Que el administrador pueda ingresar a todos los módulos: productos, proyectos, proyecciones y reportes. |
| Que al dar clic en "otros módulos" muestre el listado de módulos diferentes a ingresos y gastos. |

---

## 5. Metodologías de Desarrollo de Software

### 5.1 Scrum

Scrum es un marco de trabajo ágil que organiza proyectos complejos en ciclos cortos llamados **sprints**. Se basa en la definición de roles, artefactos y ceremonias para lograr una gestión flexible y eficiente del desarrollo de software.

#### Roles en Scrum

| Rol | Responsabilidad |
|-----|-----------------|
| **Product Owner** | Define y prioriza las funcionalidades del producto (Product Backlog). |
| **Scrum Master** | Facilita el proceso, elimina impedimentos y asegura que se sigan las prácticas Scrum. |
| **Equipo de Desarrollo** | Equipo autoorganizado (3-9 personas) que construye el producto. |

#### Artefactos en Scrum

| Artefacto | Descripción |
|-----------|-------------|
| **Product Backlog** | Lista priorizada de todos los requisitos del producto. |
| **Sprint Backlog** | Tareas seleccionadas para el sprint actual. |
| **Incremento** | Resultado del sprint: una versión funcional y probada del producto. |

#### Eventos o Ceremonias

| Evento | Propósito |
|--------|-----------|
| **Sprint Planning** | Planificación del sprint (qué se va a hacer y cómo). |
| **Daily Scrum** | Reunión diaria de 15 minutos para sincronización. |
| **Sprint Review** | Revisión del trabajo completado con stakeholders. |
| **Sprint Retrospective** | Reflexión para mejorar el proceso. |

#### Fases de Scrum

1. **Planificación del Sprint:** Selección de historias del Product Backlog.
2. **Ejecución:** Desarrollo de las tareas del Sprint Backlog.
3. **Revisión:** Demostración de lo construido.
4. **Retrospectiva:** Mejora continua.

### 5.2 XP (eXtreme Programming)

XP es una metodología ágil que enfatiza la **calidad del código** y la **respuesta rápida a cambios**. Se basa en valores como comunicación, simplicidad, retroalimentación y coraje.

#### Prácticas Clave de XP

- **Programación en parejas (Pair Programming):** Dos desarrolladores trabajan juntos en el mismo código.
- **Desarrollo guiado por pruebas (TDD):** Escribir pruebas antes del código.
- **Integración continua:** Integrar y probar el código frecuentemente.
- **Refactorización:** Mejorar el código sin cambiar su comportamiento.
- **Propiedad colectiva del código:** Cualquiera puede modificar cualquier parte del código.

### 5.3 Kanban

Kanban es un método para gestionar el trabajo mediante un flujo visual. Se basa en la visualización del trabajo en un tablero que muestra el estado de cada tarea (ej. "Por hacer", "En progreso", "Hecho").

#### Principios de Kanban

- **Visualizar el flujo de trabajo:** Usar un tablero Kanban.
- **Limitar el trabajo en progreso (WIP):** Controlar cuántas tareas se pueden tener en cada estado.
- **Gestionar el flujo:** Identificar y eliminar cuellos de botella.
- **Mejorar de forma continua:** Optimizar el proceso basándose en datos.

---

## 6. Matriz de Metodologías (Estructura de Análisis Comparativo)

Para analizar comparativamente las metodologías, se utiliza una matriz con la siguiente estructura:

### Tabla de Análisis por Proyecto

| **Título del proyecto desarrollado** | **Metodología Utilizada** | **Tecnología Utilizada** (Ejemplo Web) | **Técnicas de Recolección de datos** | **Roles** | **Entregables** | **Bibliografía** |
|---------------------------------------|---------------------------|----------------------------------------|---------------------------------------|-----------|-----------------|------------------|
|                                       |                           |                                        |                                       |           |                 |                  |

### Tabla de Detalle por Metodología

| **Metodología** | **Estructura** (Gráfica) | **Definición** | **Fases** | **Actividades por Fase** | **Roles** | **Entregables** | **Bibliografía** |
|-----------------|--------------------------|----------------|-----------|--------------------------|-----------|-----------------|------------------|
| **Scrum**       |                          |                |           |                          |           | Ejemplo:        | Explorando Scrum |
| **XP**          |                          |                |           |                          |           |                 | https://...      |
| **Kanban**      |                          |                |           |                          |           |                 |                  |

---

## 7. Mapas de Navegación y Prototipado

### ¿Qué es un Mapa de Navegación?

Un **mapa de navegación** (o diagrama de flujo de navegación) es una representación visual que muestra la estructura y las relaciones entre las diferentes pantallas o vistas de una aplicación. Ayuda a entender cómo los usuarios se mueven a través del sistema.

### Importancia de los Mapas de Navegación

- **Planificación visual:** Permite visualizar la estructura completa de la interfaz.
- **Identificación de flujos:** Ayuda a identificar flujos de usuario complejos o redundantes.
- **Comunicación:** Facilita la comunicación entre diseñadores, desarrolladores y stakeholders.
- **Documentación:** Sirve como base para el diseño de pantallas y la implementación.

### Herramientas de Prototipado

| Herramienta | Descripción |
|-------------|-------------|
| **Balsamiq** | Herramienta de prototipado de baja fidelidad (bocetos). Permite crear wireframes rápidamente. |
| **Figma** | Herramienta de diseño colaborativo para prototipos de alta fidelidad. |
| **Adobe XD** | Herramienta de diseño y prototipado de Adobe. |
| **Sketch** | Herramienta de diseño de interfaces para Mac. |

---

## 8. Estructura del Proyecto Formativo SENA

El proyecto formativo en el SENA sigue una estructura definida en el formulario **GFPI-F-016**, que organiza la información de manera sistemática.

### 1. Información Básica del Proyecto

| **Campo** | **Descripción** |
|-----------|-----------------|
| **1.1 Centro de Formación** | Nombre oficial del Centro SENA. |
| **1.2 Regional** | Regional a la que pertenece el Centro. |
| **1.3 Nombre del proyecto** | Se recomienda redactar como "Construcción de Dispositivos para ...". Evitar verbos en infinitivo. |
| **1.4 Programa de Formación** | Nombre oficial del programa (ej. Análisis y Desarrollo de Software). |
| **1.5 Tiempo estimado (meses)** | Duración estimada del proyecto. |
| **1.6 Empresas participantes** | Entidades que contribuyen en la formulación o financiación. |
| **1.7 Palabras claves** | Términos técnicos para búsqueda y SEO. |

### 2. Estructura del Proyecto

#### 2.1 Planteamiento del problema o necesidad

Describe el problema identificado y la necesidad que se pretende solucionar. Ejemplo:

> *El problema identificado en la Compañía Interamericana de Refrigeración Inc. S.A., es que los asesores comerciales tienen dificultades al momento de realizar las cotizaciones de los productos que ofrecen, debido a que no se ha implementado un sistema que les permita gestionar sus productos.*

#### 2.2 Justificación del proyecto

Responde a **"¿por qué vale el esfuerzo realizar el proyecto?"**. Describe beneficios cuantitativos y cualitativos.

**Ejemplo de beneficios:**
1. Los asesores comerciales tendrán mayor control en los costos de los productos.
2. Aumento de la productividad al tener sistema de cotización.
3. Adecuado manejo de la información de los suministros.
4. Tener una base de datos actualizada de los clientes.
5. Preservación del medio ambiente al minimizar el uso del papel.

#### 2.3 Objetivo general

Redactado con un **verbo en infinitivo** que se pueda verificar y medir.

> **Ejemplo:** *Desarrollar un software de aplicación apoyado en el uso de dispositivos móviles como medio de interacción con el usuario, que permita gestionar las cotizaciones de los aparatos requeridos por los clientes en la Compañía Interamericana de Refrigeración Inc. S.A.*

#### 2.4 Objetivos específicos

Relacionados con cada fase del proyecto:

| **Fase del Proyecto** | **Verbos sugeridos** |
|-----------------------|----------------------|
| Análisis (Diagnóstico) | Analizar, Diagnosticar, Identificar |
| Diseño (Planeación) | Diseñar, Planear, Estructurar |
| Desarrollo (Ejecución) | Desarrollar, Construir, Fabricar |
| Implementación (Montaje) | Implementar, Montar, Poner en funcionamiento |
| Evaluación | Evaluar, Valorar, Verificar |

#### 2.5 Alcance

##### 2.5.1 Beneficiarios del proyecto

Personas, empresas o instituciones que reciben beneficios directos.

##### 2.5.2 Impacto

- **Impacto social:** Efectos sobre la comunidad.
- **Impacto económico:** Efectos en dinero, producción o empleo.
- **Impacto ambiental:** Efectos sobre el medio ambiente.
- **Impacto tecnológico:** Generación de cambios tecnológicos.

##### 2.5.3 Restricciones o riesgos asociados

Limitaciones del proyecto y riesgos potenciales, con alternativas de solución.

##### 2.5.4 Productos o resultados

Descripción del producto final con sus rasgos y atributos.

#### 2.6 Innovación/Gestión Tecnológica

| **Pregunta** | **Sí/No** |
|--------------|-----------|
| ¿El proyecto resuelve una necesidad del sector productivo? | |
| ¿El proyecto mejora el proceso/producto/servicio existente? | |
| ¿El proyecto involucra el uso de nuevas técnicas y tecnologías? | |
| ¿Los productos finales son susceptibles a protección industrial? | |
| ¿Los productos pueden ser posicionados en el mercado? | |

#### 2.7 Valoración Productiva

| **Pregunta** | **Sí/No** |
|--------------|-----------|
| ¿Con el desarrollo del proyecto se puede satisfacer la necesidad de un cliente potencial? | |
| ¿Viabilidad de proyecto para plan de negocio? | |

### 3. Planeación del Proyecto

#### 3.1 Fases del Proyecto

| **Fase** | **Actividades** | **RAP Técnico** | **RAP Social** |
|----------|-----------------|-----------------|----------------|
| Análisis | | | |
| Diseño | | | |
| Desarrollo | | | |
| Implementación | | | |
| Evaluación | | | |

#### 3.5 Organización del Proyecto

- **3.5.1 Número de instructores requeridos**
- **3.5.2 Número de aprendices sugeridos**

#### 3.6 Descripción del ambiente de aprendizaje

Características físicas, medioambientales, de infraestructura técnica y tecnológica.

#### 3.7 Recursos estimados

| **Actividad** | **Duración (Horas)** | **Materiales devolutivos** | **Materiales consumibles** | **Instructor** | **Ambiente** |
|---------------|----------------------|----------------------------|----------------------------|----------------|--------------|
| | | | | | |

#### 3.7.1 Detalle de los recursos estimados

- **Herramientas:** Materiales de formación devolutivos (ej. computadores, multímetros).
- **Equipos:** Equipos especializados.
- **Materiales:** Consumibles (ej. papelería, componentes electrónicos).

### 4. Rubros Presupuestales

| **Rubro Presupuestal** | **Valor** |
|------------------------|-----------|
| Equipos | |
| Herramientas | |
| Talento Humano | |
| Materiales de Formación | |
| **TOTAL** | |

### 5. Equipo que participa en el proyecto

| **Nombre** | **Doc. Identidad** | **Especialidad** | **Centro** | **Regional** |
|------------|--------------------|------------------|------------|--------------|
| | | | | |

---

## 9. Requisitos Funcionales y No Funcionales

### Clasificación de Requisitos

La correcta definición de los requerimientos es el paso más importante para poder modelar y construir un **DFD (Diagrama de Flujo de Datos)**.

| **Tipo de Requerimiento** | **Enfoque Principal** | **Descripción Técnica** | **Analogía** |
|---------------------------|-----------------------|-------------------------|--------------|
| **Requerimientos Funcionales (F)** | **Función** | Qué debe hacer el sistema (operaciones, servicios y lógica de negocio). | *"El sistema debe permitir iniciar sesión con usuario y contraseña."* |
| **Requerimientos No Funcionales (NF)** | **Diseño / Calidad** | Cómo debe comportarse el sistema (rendimiento, seguridad, arquitectura, usabilidad). | *"El inicio de sesión no debe tardar más de 2 segundos."* |

### Analogía Simple

Imagina que estás comprando un auto:

- **Requisito funcional:** *"El auto debe tener frenos."* (Qué hace)
- **Requisito no funcional:** *"Los frenos deben detener el auto en menos de 30 metros a 100 km/h."* (Cómo lo hace, con qué calidad)

### Ejemplos en Desarrollo de Software

| **Requisito Funcional** | **Requisito No Funcional** |
|--------------------------|---------------------------|
| El sistema debe permitir registrar usuarios. | El sistema debe soportar 1,000 usuarios concurrentes. |
| El sistema debe generar reportes en PDF. | Los reportes deben generarse en menos de 5 segundos. |
| El sistema debe enviar notificaciones por correo. | Las notificaciones deben entregarse con un 99.9% de confiabilidad. |

---

## 10. Flujo Metodológico del Proyecto

Para iniciar formalmente con el desarrollo del proyecto formativo, es obligatorio ejecutar de manera secuencial los siguientes procesos de ingeniería de software:

1. **Elicitación de Requisitos:** Fase de descubrimiento y recolección de necesidades. Para que esta etapa sea efectiva, es indispensable recopilar material de soporte real del entorno del negocio: imágenes, fotografías de facturas, documentos internos, videos y cualquier tipo de información técnica pertinente.

2. **Definición de Objetivos (General y Específicos):** Representa el punto de partida estratégico. El objetivo general define el **"qué"** (el alcance macro del sistema), mientras que los objetivos específicos desglosan el **"cómo"** (las fases técnicas y metodológicas para alcanzarlo).

3. **Especificación de Requerimientos:** Considerada legítimamente **"la columna vertebral del proyecto"**, ya que define las reglas, restricciones y funciones exactas que el software debe cumplir antes de escribir la primera línea de código.

4. **Casos de Uso e Historias de Usuario:** Modelado funcional basado estrictamente en el comportamiento observado en el entorno de negocio.

> **Principio de Diseño Modular ("Por clase un módulo"):** Este concepto establece que cada clase o entidad del dominio del problema debe corresponder a un módulo lógico o componente específico dentro del sistema. Esto garantiza la separación de responsabilidades, alta cohesión y bajo acoplamiento, evitando que el software se vuelva inmanejable.

---

## 11. Conclusión y Líneas de Investigación

### Conclusiones

- UML es el estándar para modelar sistemas de software, proporcionando un lenguaje común para todos los involucrados.
- La ingeniería de requisitos es fundamental para garantizar que el software cumpla con las necesidades del cliente.
- Las metodologías ágiles (Scrum, XP, Kanban) ofrecen enfoques flexibles y adaptativos para el desarrollo de software.
- Las historias de usuario y los casos de uso son herramientas clave para capturar requisitos desde la perspectiva del usuario.
- El proyecto formativo en el SENA sigue una estructura estandarizada que organiza el trabajo desde el planteamiento del problema hasta la implementación.

### Líneas de Investigación

- **Análisis Comparativo:** ¿Cómo interactúan y se complementan los **DFD** respecto a los **Diagramas de Casos de Uso**? (Estudiar la transición de la vista orientada a procesos/datos hacia la vista orientada a objetos/interacción).
- **Metodologías Ágiles:** Profundizar en la implementación práctica de Scrum, XP y Kanban en proyectos reales.
- **Herramientas de Prototipado:** Explorar herramientas como Balsamiq, Figma y Adobe XD para crear wireframes y prototipos funcionales.
- **Validación de Campo:** Refinar los instrumentos de recolección de datos antes de la visita de diagnóstico.

---

> *¡Gracias por leer este repositorio de apuntes técnicos hasta el final! Si deseas aportar o corregir algo, los Pull Requests están abiertos.*