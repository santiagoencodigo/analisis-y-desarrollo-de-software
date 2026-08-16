# Planear actividades de análisis de acuerdo con la metodología seleccionada

> **Competencia:** Evaluar requisitos de la solución de software de acuerdo con metodologías de análisis y estándares.  
> **Resultado de aprendizaje:** Planear actividades de análisis de acuerdo con la metodología seleccionada.

---

## Tabla de contenido

- [1. Conceptos fundamentales](#1-conceptos-fundamentales)
  - [1.1 ¿Qué es un proceso?](#11-qué-es-un-proceso)
  - [1.2 ¿Qué es una metodología?](#12-qué-es-una-metodología)
  - [1.3 El software y sus componentes](#13-el-software-y-sus-componentes)
- [2. Ingeniería de software](#2-ingeniería-de-software)
  - [2.1 Definición y propósito](#21-definición-y-propósito)
  - [2.2 Etapas de la ingeniería de software](#22-etapas-de-la-ingeniería-de-software)
- [3. Ciclo de vida del software](#3-ciclo-de-vida-del-software)
  - [3.1 Concepto y funciones](#31-concepto-y-funciones)
  - [3.2 Fases y entregables](#32-fases-y-entregables)
  - [3.3 Modelos de ciclo de vida](#33-modelos-de-ciclo-de-vida)
- [4. La crisis del software (1968)](#4-la-crisis-del-software-1968)
- [5. Perfiles y roles en proyectos de TI](#5-perfiles-y-roles-en-proyectos-de-ti)
- [6. Referencias](#6-referencias)

---

## 1. Conceptos fundamentales

### 1.1 ¿Qué es un proceso?

Un **proceso** es una secuencia de pasos o actividades organizadas que transforman un conjunto de entradas en salidas con valor agregado. En el contexto del desarrollo de software, el proceso representa el flujo de trabajo que convierte las necesidades del cliente en un producto funcional.

```
+----------------+      +----------------+      +----------------+
|                |      |                |      |                |
|   PROVEEDOR    |----->|     PROCESO    |----->|    CLIENTE     |
|                |      |                |      |                |
+----------------+      +----------------+      +----------------+
      ^     Entradas          Transformar             Salidas
      |                                                   |
      +---------------------------------------------------+
                       Retroalimentación
```

### 1.2 ¿Qué es una metodología?

Una **metodología de desarrollo de software** es un conjunto de procedimientos, técnicas y herramientas que guían el proceso de construcción de software. Proporciona un marco para planificar, organizar y controlar las actividades, asegurando que el producto final cumpla con los requisitos de calidad, tiempo y costo.

### 1.3 El software y sus componentes

El software se define como el conjunto de tres componentes interrelacionados:

| **Componente** | **Descripción** |
|----------------|-----------------|
| **Programas (instrucciones)** | Conjunto de instrucciones que el computador ejecuta para proporcionar la funcionalidad deseada. |
| **Datos** | Información que los programas procesan, manipulan y almacenan. |
| **Documentos** | Descripciones, manuales y especificaciones que explican el uso y operación del software. |

---

## 2. Ingeniería de software

### 2.1 Definición y propósito

La **ingeniería de software** es un proceso formal que incorpora métodos bien definidos para el análisis, diseño, implementación y pruebas del software. Su objetivo es construir productos de alta calidad dentro de los plazos y presupuestos establecidos.

Para lograrlo, se emplean prácticas como:
- **Entender el problema** que se va a resolver.
- **Diseñar una solución** viable y eficiente.
- **Implementar la solución** mediante código.
- **Probar la solución** para verificar su correcto funcionamiento.
- **Gestionar las actividades** para asegurar la calidad.

### 2.2 Etapas de la ingeniería de software

| **Etapa** | **Descripción** |
|-----------|-----------------|
| **Análisis de requisitos** | Extraer y validar los requisitos del software, detectando posibles fallos o ambigüedades. |
| **Especificación** | Describir detalladamente el software a desarrollar de forma rigurosa y estable. |
| **Diseño y arquitectura** | Determinar el funcionamiento general del sistema y definir un modelo orientado a objetos. |
| **Programación** | Traducir el diseño a código, cuya duración depende del lenguaje y del diseño previo. |
| **Prueba** | Comprobar que el software cumpla correctamente con lo especificado, idealmente realizado por un tercero. |
| **Mantenimiento** | Corregir errores y adaptar el software a nuevos requisitos (perfectivo, evolutivo, adaptativo y correctivo). |

---

## 3. Ciclo de vida del software

### 3.1 Concepto y funciones

El **ciclo de vida del software** es el conjunto de fases por las que pasa un sistema desde su concepción hasta su retiro. Sus funciones principales son:
- Determinar el orden de las fases.
- Establecer criterios de transición entre fases.
- Definir entradas y salidas de cada fase.
- Describir las actividades necesarias para transformar el producto.
- Servir como base para planificar, organizar y coordinar el proyecto.

### 3.2 Fases y entregables

- **Fases:** Conjunto de actividades relacionadas con un objetivo específico. Se construyen agrupando tareas que comparten un tramo de tiempo y recursos.
- **Entregables:** Productos intermedios generados por las fases (documentos, software, etc.). Permiten evaluar el avance del proyecto y verificar su adecuación a los requisitos.

### 3.3 Modelos de ciclo de vida

Los modelos de ciclo de vida describen las fases principales y ayudan a administrar el progreso. Los más utilizados son:

| **Modelo** | **Descripción** |
|------------|-----------------|
| **Cascada** | Proceso lineal y secuencial. |
| **En V** | Verificación y validación en cada fase. |
| **Iterativo** | Ciclos repetitivos de mejora. |
| **Incremental** | Entregas parciales y funcionales. |
| **Espiral** | Combina cascada e iterativo con análisis de riesgos. |
| **Prototipos** | Validación temprana con usuarios. |

> Para una descripción detallada de cada modelo, consulta el archivo [03-modelos-ciclo-de-vida-software.md](./03-modelos-ciclo-de-vida-software.md).

---

## 4. La crisis del software (1968)

La **crisis del software** fue un período en la década de 1960 en el que la industria del software enfrentó graves problemas debido a la complejidad creciente de los sistemas y la incapacidad de los métodos tradicionales para gestionarlos. Los principales problemas fueron:

- **Inconcluso:** Muchos proyectos nunca se terminaban.
- **Sobrecostos y retrasos:** Excedían los presupuestos y plazos estimados.
- **Insatisfacción:** El producto final no cumplía con las expectativas del cliente.
- **Imposible de mantener:** El software era difícil de corregir o modificar.

Esta crisis llevó al nacimiento de la **ingeniería de software**, que introdujo enfoques estructurados y metodologías para controlar el desarrollo y garantizar la calidad.

---

## 5. Perfiles y roles en proyectos de TI

En un proyecto de software intervienen diversos perfiles, cada uno con responsabilidades específicas. A continuación se describen los principales:

| **Rol** | **Responsabilidades** |
|---------|------------------------|
| **Cliente** | Disponer de tiempo para entrevistas, revisar reglas de negocio, validar el producto y aceptar formalmente el proyecto. |
| **Gerente de proyecto** | Asignar recursos, definir actividades, revisar y aprobar planes. |
| **Líder de proyecto** | Atender necesidades del equipo, controlar avances, dirigir juntas y mantener satisfecho al cliente. |
| **Responsable de calidad** | Garantizar el cumplimiento de los compromisos y el uso de metodologías adecuadas. |
| **Responsable de pruebas** | Planificar y ejecutar pruebas para verificar que el software cumpla con los requisitos y esté libre de fallas. |
| **Ingeniero de software** | Definir y mantener el código fuente, asegurando la funcionalidad correcta de los componentes. |
| **Analista de sistemas** | Realizar el análisis detallado, diseñar la base de datos, documentar flujos y proponer mejoras. |
| **Diseñador** | Asegurar accesibilidad, navegabilidad, interactividad y usabilidad de la interfaz. |
| **Administrador de configuración** | Gestionar versiones y ubicación de los artefactos del proyecto mediante repositorios (ej. GitHub). |

---

## 6. Referencias

- [AWS - ¿Qué es SDLC?](https://aws.amazon.com/es/what-is/sdlc/)
- [Microsoft - Fases del ciclo de vida del desarrollo de software](https://www.microsoft.com/es-co/power-platform/topics/phases-of-the-software-development-lifecycle)
- [IBM - SDLC](https://www.ibm.com/mx-es/think/topics/sdlc)
- [Globant - Ciclo de vida del desarrollo de software](https://www.globant.com/es/tech-terms/ciclo-vida-desarrollo-software)
- [Freelancermap - Perfiles IT freelance](https://www.freelancermap.com/blog/es/perfiles-it-freelance/)

---

> Gracias por leer.