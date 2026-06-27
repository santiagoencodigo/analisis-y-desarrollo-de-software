# UML | Lenguaje Gráfico Estándar

> Apuntes del 10 de Junio de 2025 - Instructor Andres.

---

## 1. Lineamientos Fundamentales del Proyecto Formativo

> Todos empezaron a pensar en un proyecto de Software. (Esto fue lo que más me gusto de aprender por este medio.)

### Alcance e Identificación del Problema
El diseño de un sistema de software educativo o productivo dentro del marco del SENA requiere una delimitación estricta del alcance para garantizar su viabilidad y éxito técnico.
* **Principio de Simplicidad:** El proyecto debe ser **sencillo** y, por ende, tratar un **sólo tema** o una única línea de negocio centralizada.
* **Ejemplos de módulos base:**
  * Control de personal
  * Control de inventario
  * Gestión de citas
* **Justificación Arquitectónica:** Un buen software se caracteriza por ser **centralizado**. Si se intenta abarcar múltiples problemáticas sin una base sólida, el desarrollo se dispersará, dando como resultado un software ineficiente y estructuralmente débil en cada una de sus áreas.

### Formulación del Objetivo General
Para estructurar correctamente el objetivo general de la investigación y desarrollo, se debe descomponer el enunciado en cuatro elementos gramaticales y técnicos indispensables:

$$\text{Objetivo General} = \text{Verbo en Infinitivo} + \text{Elemento/Objeto} + \text{Empresa} + \text{Ubicación}$$

* **Estructura Desglosada del Proyecto:**
  1. **Verbo en Infinitivo:** Desarrollar (un software para el...)
  2. **Elemento o Propósito:** ...control de personal...
  3. **Empresa o Entidad:** ...en la panadería La Paisa...
  4. **Ubicación Geográfica:** ...en Soacha.

> **Enunciado Integrado:** *Desarrollar un software para el control de personal en la panadería La Paisa en Soacha.*

### Estructuración de Objetivos Específicos
* Los objetivos específicos representan el desglose **fase por fase** de las actividades necesarias para alcanzar el objetivo general.
* Sirven como la hoja de ruta metodológica del proyecto de software (Análisis, Diseño, Desarrollo, Pruebas, Implantación).

---

## 2. Ingeniería de Requisitos y Estándares de Modelado

### Estándar UML (Unified Modeling Language)
El Lenguaje de Modelado Unificado es la norma internacional para la especificación, visualización, construcción y documentación de los artefactos de un sistema de software.

#### Componentes Esenciales de Casos de Uso (UML):
* **Actor:** Representación gráfica de una entidad externa (usualmente un rol de usuario, sistema externo o tiempo) que interactúa con el sistema. *(Representado por un monigote/stick figure)*.
* **Caso de Uso / Proceso:** Bloque atómico de funcionalidad que realiza el sistema y que aporta un valor medible al actor. *(Representado por un óvalo con la etiqueta "Inicio" o el nombre de la acción)*.

> A continuación una imagen de ejemplo:

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjELFQkPqfP1SWQkwBB7uheWlKLzQJSLaDh4CAlCToJJFIQ5pXEWI_OAGyygcUr-LclGf5QXaslnKmh2XSNCGNWo98kKraS-4BvV4JV1soFpMLcy9rXmu4GVzanP0hl7-h4yM-EOZxtcFmW/s16000/relacion-actor-caso-de-uso.png">

*Imagen tomada de: https://www.pmoinformatica.com/2021/02/elementos-diagrama-casos-de-uso.html*

### ¿Para qué sirven los Diagramas de Casos de Uso y DFD?
* Su propósito fundamental es conocer y mapear a nivel técnico el **manejo de cada proceso** interno del negocio.

### Clasificación de Requisitos: F y NF
La correcta definición de los requerimientos es el paso más importante para poder modelar y construir un **DFD (Diagrama de Flujo de Datos)**.

| Tipo de Requerimiento | Enfoque Principal | Descripción Técnica |
| :--- | :--- | :--- |
| **Requerimientos Funcionales (F)** | **Función** | Qué debe hacer el sistema (operaciones, servicios y lógica de negocio). |
| **Requerimientos No Funcionales (NF)**| **Diseño / Calidad** | Cómo debe comportarse el sistema (rendimiento, seguridad, arquitectura, usabilidad). |

### La Columna Vertebral del Proyecto (Flujo Metodológico de Ingeniería)
Existe una distinción radical e inequívoca en el diseño de sistemas: 

$$\text{DFD} \neq \text{Diagrama de Casos de Uso}$$

El flujo de trabajo técnico para construir la arquitectura lógica sigue una secuencia numerada estricta, donde los requerimientos alimentan la información del sistema:

```
+------------------------+      +-------------------+
|  1. Historias de User  | ---> |  2. Requerimientos|
+------------------------+      +-------------------+
                                          |
                                          | (Provee Info a)
                                          v
                                +-------------------+
                                |     3. DFD        |
                                +-------------------+
```

* **Cronograma:** Es el eje transversal que temporaliza la ejecución de estas tres fases lógicas del desarrollo.

---

## 3. Arquitectura Tecnológica y Despliegue de Aplicaciones

### Paradigma Moderno de Despliegue
* **Despliegue de Infraestructura:** El software debe ser **subido a un servidor** de manera robusta para que puedan existir conexiones simultáneas, remotas y concurrentes.
* **La Evolución del Entorno:** **"Las apps desktop dejaron de existir, ahora viven las apps web"**. Las soluciones locales rígidas han sido desplazadas por arquitecturas distribuidas basadas en la nube y accesibles desde navegadores.
* **Análisis de Tecnologías Heredadas o Limitadas:**
  * Las macros en **VBA (Visual Basic for Applications)** o ecosistemas cerrados de Microsoft de un solo lado quedan relegados por falta de escalabilidad.
  * **¿Motor Ado? (ADO - ActiveX Data Objects):** Componente heredado de acceso a datos que requiere revisión ante los nuevos ORM y controladores modernos.
  * **Licencias de VS Studio (Visual Studio):** Factor crítico a considerar para la conectividad y el desarrollo legal/comercial del proyecto.

---

## 4. Filosofía del Desarrollo, Evolución y Rol Profesional

### El Cambio Tecnológico Constante
* El software es una disciplina viva: **"El instructor inició con Pascal, la era tecnológica cambia"**.
* **Estado del Arte:** **"Hoy es Python, en unos años no sabemos"**. Los lenguajes y frameworks son efímeros; cambian según las demandas de la industria.
* **El Núcleo Inmutable:** **"La lógica es el 100%"**. Todo el mundo tiene su forma particular de codificar (estilo de programación), pero la habilidad algorítmica y de resolución de problemas es lo único que trasciende a los lenguajes.
* **Uso Inteligente de la IA:** **"Hay que entender primero a programar para luego usar Chat GPT"**. La Inteligencia Artificial es un acelerador de la productividad, pero requiere criterio técnico y bases lógicas profundas para auditar y estructurar el código que genera.

### Tipos de Desarrolladores y el Mercado Laboral
* **El Perfil Más Valorado:** **"Al que mejor le va es [al] Full Stack"**.
* **Estrategia Formativa:** Para ser un desarrollador competitivo, **"hay que aprender de todo"** y dominar las tres capas esenciales de la ingeniería de software:
  1. **Backend:** Lógica de servidor, API y reglas de negocio.
  2. **Frontend:** Interfaces de usuario, diseño interactivo y experiencia de usuario.
  3. **Base de Datos:** Modelado relacional/no relacional, optimización de queries y persistencia.

---

## 5. Compromisos, Gestión de Campo y Tareas Pendientes

### Actividades de Campo e Investigación de Requisitos
Para el levantamiento de información y la fase de **Elicitación de Requisitos**, se definen los siguientes compromisos prácticos:

* **Consulta Técnica:** Formular dudas puntuales e ir a *"preguntarle al profesor/instructor"*.
* **Trabajo In Situ:** **"Tengo que ir a Soacha para realizar la entrevista"** (Validación directa con los stakeholders en la panadería La Paisa).
* **Construcción de Artefactos Tecnológicos (TAREA):**
  Desarrollar y recopilar los siguientes elementos basados estrictamente en **"de lo que hemos observado"** en el entorno de negocio:
  * Elicitación de requisitos
  * Requerimientos funcionales y no funcionales
  * Casos de uso
  * Historias de uso / Historias de usuario
  * Recopilación de material probatorio y multimedia: **Imágenes, fotos de Facturas, documentos y videos**.
* **Diseño de Instrumentos:** *Formular preguntas para el personal administrativo y operativo* de la empresa objetivo, segmentando las necesidades según el rol jerárquico y operativo dentro de la organización.

---

## 6. Conclusión y Flujo Metodológico del Proyecto

Para iniciar formalmente con el desarrollo del proyecto formativo, es obligatorio ejecutar de manera secuencial los siguientes procesos de ingeniería de software:

* **Elicitación de Requisitos:**
  Fase de descubrimiento y recolección de necesidades. Para que esta etapa sea efectiva, es indispensable recopilar material de soporte real del entorno del negocio: imágenes, fotografías de **facturas**, documentos internos, videos y cualquier tipo de información técnica pertinente. 
  
  > **Compromiso Técnico:** Queda establecida como evidencia obligatoria la entrega de la matriz de elicitación de requisitos del sistema.

* **Definición de Objetivos (General y Específicos):**
  Representa el punto de partida estratégico. El objetivo general define el **"qué"** (el alcance macro del sistema), mientras que los objetivos específicos desglosan el **"cómo"** (las fases técnicas y metodológicas para alcanzarlo).

* **Especificación de Requerimientos:**
  Considerada legítimamente **"la columna vertebral del proyecto"**, ya que define las reglas, restricciones y funciones exactas que el software debe cumplir antes de escribir la primera línea de código.

* **Casos de Uso e Historias de Uso (Historias de Usuario):**
  Modelado funcional basado estrictamente en el comportamiento observado en el entorno de negocio. 
  
  > **Principio de Diseño Modular ("Por clase un módulo"):** Este concepto establece que cada clase o entidad del dominio del problema debe corresponder a un módulo lógico o componente específico dentro del sistema. Esto garantiza la separación de responsabilidades, alta cohesión y bajo acoplamiento, evitando que el software se vuelva inmanejable.

---

## 7. Líneas de Investigación y Pendientes por Estudiar

Como parte de la mejora continua y el autoaprendizaje dentro del tecnólogo, se establecen los siguientes puntos clave para profundizar e investigar:

* **Análisis Comparativo y Articulación Técnica:** ¿Cómo interactúan y se complementan los **DFD (Diagramas de Flujo de Datos)** respecto a los **Diagramas de Casos de Uso**? (Estudiar la transición de la vista orientada a procesos/datos hacia la vista orientada a objetos/interacción).
* **Validación de Campo:** Refinar los instrumentos de recolección de datos antes de la visita de diagnóstico.

---
> *¡Gracias por leer este repositorio de apuntes técnicos hasta el final! Si deseas aportar o corregir algo, los Pull Requests están abiertos.*