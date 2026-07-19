# Especificación de requisitos de software

> **Contexto:** Este documento explica el proceso de especificación de requisitos de software, su importancia, la norma IEEE 830-1998, y cómo se aplicó en el primer trimestre del programa ADSO para definir los requisitos del proyecto formativo.

---

## Tabla de contenido

- [1. Introducción a la especificación de requisitos](#1-introducción-a-la-especificación-de-requisitos)
- [2. Ingeniería de requisitos](#2-ingeniería-de-requisitos)
- [3. Relación con otros documentos del proyecto](#3-relación-con-otros-documentos-del-proyecto)
- [4. IEEE y la norma 830-1998](#4-ieee-y-la-norma-830-1998)
- [5. Estructura de la plantilla IEEE 830](#5-estructura-de-la-plantilla-ieee-830)
  - [5.1 Introducción](#51-introducción)
  - [5.2 Descripción general](#52-descripción-general)
  - [5.3 Requisitos específicos](#53-requisitos-específicos)
  - [5.4 Apéndices](#54-apéndices)
- [6. Ejemplo práctico: Especificación de requisitos de OperPan](#6-ejemplo-práctico-especificación-de-requisitos-de-operpan)
- [7. Flujo de trabajo documental en el primer trimestre](#7-flujo-de-trabajo-documental-en-el-primer-trimestre)
- [8. Conclusión](#8-conclusión)

---

## 1. Introducción a la especificación de requisitos

La **especificación de requisitos de software** (ERS) es un documento formal que describe de manera completa y detallada todas las funcionalidades, restricciones y atributos de calidad que debe cumplir un sistema de software. Su propósito es establecer un **contrato técnico** entre los stakeholders (clientes, usuarios, desarrolladores) que sirva como base para el diseño, desarrollo, pruebas y validación del producto.

### Importancia de la especificación de requisitos

- **Base para el diseño y desarrollo:** Define qué debe hacer el sistema, no cómo hacerlo, lo que permite a los desarrolladores enfocarse en la solución técnica.
- **Comunicación efectiva:** Alinea las expectativas de los clientes y los equipos de desarrollo, reduciendo malentendidos.
- **Gestión del alcance:** Evita la corrupción del alcance (scope creep) al establecer límites claros.
- **Trazabilidad:** Permite rastrear cada requisito desde su origen hasta su implementación y pruebas.
- **Base para la validación:** Sirve como criterio para verificar que el sistema cumple con lo solicitado.

---

## 2. Ingeniería de requisitos

La **ingeniería de requisitos** es la disciplina que abarca todas las actividades relacionadas con la identificación, análisis, documentación y gestión de los requisitos de un sistema. Incluye las siguientes fases:

| Fase | Descripción |
|------|-------------|
| **Elicitación** | Recopilación de necesidades de los stakeholders mediante entrevistas, encuestas, observación, talleres, etc. (ver [01-elicitacion-requisitos.md](./01-elicitacion-requisitos.md)). |
| **Análisis** | Evaluación de los requisitos para determinar su viabilidad, consistencia, completitud y prioridad. |
| **Especificación** | Documentación formal de los requisitos en un documento estructurado (la ERS). |
| **Validación** | Verificación de que los requisitos reflejan realmente las necesidades del cliente y son comprensibles. |
| **Gestión de cambios** | Control de modificaciones en los requisitos a lo largo del ciclo de vida del proyecto. |

La **especificación** es el corazón de este proceso, ya que convierte las necesidades difusas en requisitos concretos, medibles y verificables.

---

## 3. Relación con otros documentos del proyecto

La especificación de requisitos no es un documento aislado; se conecta con otros artefactos del proyecto en un flujo lógico:

| Documento | Relación con la ERS |
|-----------|----------------------|
| **[01-elicitacion-requisitos.md](./01-elicitacion-requisitos.md)** | Proporciona las técnicas y métodos utilizados para recolectar la información que alimenta la ERS. |
| **Propuesta técnica** | Describe cómo se va a construir el sistema (metodología, cronograma, recursos). La ERS define el qué; la propuesta técnica define el cómo. |
| **Propuesta económica** | Establece los costos y condiciones de pago. Se basa en la ERS para estimar el esfuerzo y los recursos necesarios. |
| **Pitch del proyecto** | Resumen ejecutivo del proyecto para presentación. La ERS es la versión detallada de las ideas presentadas en el pitch. |
| **Plan de pruebas** | Se deriva de la ERS, ya que cada requisito funcional y no funcional debe ser verificado mediante casos de prueba. |

En el primer trimestre de ADSO, los grupos de trabajo elaboraron la ERS después de haber definido el proyecto (pitch) y haber realizado el levantamiento de información, y antes de iniciar el desarrollo.

---

## 4. IEEE y la norma 830-1998

### ¿Qué es IEEE?

El **Institute of Electrical and Electronics Engineers** (IEEE) es una organización profesional internacional dedicada al avance de la tecnología en áreas como electrónica, telecomunicaciones, informática e ingeniería. Es una de las principales entidades que desarrollan estándares técnicos a nivel mundial.

[**Sitio web oficial de IEEE**](https://www.ieee.org/)

### Norma IEEE 830-1998

La **IEEE Std 830-1998** es una guía para la elaboración de especificaciones de requisitos de software. Fue publicada en 1998 y ha sido ampliamente utilizada como referencia en la industria del software. Aunque ha sido reemplazada por versiones más recientes (como la IEEE 29148), el estándar 830 sigue siendo una base fundamental para la estructura y contenido de una ERS.

#### Propósitos de la norma

- Proporcionar un formato estandarizado para documentar requisitos.
- Establecer un lenguaje común entre clientes y desarrolladores.
- Asegurar que los requisitos sean completos, consistentes, verificables y trazables.
- Servir como referencia para la validación y aceptación del sistema.

#### Características de una buena ERS según IEEE 830

1. **Correcta:** Cada requisito debe reflejar fielmente una necesidad del cliente.
2. **Completa:** Debe incluir todos los requisitos funcionales y no funcionales.
3. **Consistente:** No debe haber contradicciones entre requisitos.
4. **Verificable:** Cada requisito debe ser comprobable mediante pruebas.
5. **Trazable:** Debe ser posible rastrear cada requisito a su origen y a su implementación.
6. **Modificable:** Debe permitir cambios sin afectar la estructura global.

---

## 5. Estructura de la plantilla IEEE 830

Durante el primer trimestre, se utilizó una plantilla basada en la IEEE 830-1998 para elaborar la ERS de cada proyecto. A continuación, se explica cada sección y su propósito.

### 5.1 Introducción

| Sección | Propósito |
|---------|-----------|
| **Propósito** | Explica el objetivo del documento y la audiencia a la que va dirigido (clientes, desarrolladores, testers, etc.). |
| **Alcance** | Define los límites del sistema, identificando el producto a desarrollar y su relación con otros sistemas. |
| **Personal involucrado** | Lista las personas que participan en el proyecto, con sus roles, responsabilidades y datos de contacto. |
| **Definiciones, acrónimos y abreviaturas** | Glosario de términos técnicos y siglas utilizadas en el documento. |
| **Referencias** | Lista de documentos relacionados (propuesta técnica, manuales, estándares, etc.). |
| **Resumen** | Descripción breve del contenido del documento y su organización. |

### 5.2 Descripción general

| Sección | Propósito |
|---------|-----------|
| **Perspectiva del producto** | Indica si el sistema es independiente o parte de un sistema mayor. Diagrama de contexto si es necesario. |
| **Funcionalidad del producto** | Resumen de alto nivel de las principales funcionalidades que el sistema debe ofrecer. |
| **Características de los usuarios** | Perfil de los usuarios del sistema (formación, habilidades, actividades que realizan). |
| **Restricciones** | Limitaciones en el diseño y desarrollo (lenguajes, hardware, normativas, presupuesto). |
| **Suposiciones y dependencias** | Factores que se dan por sentados (ej. disponibilidad de un sistema operativo) y que podrían afectar los requisitos si cambian. |
| **Evolución previsible del sistema** | Mejoras futuras que se prevén implementar más adelante. |

### 5.3 Requisitos específicos

Esta es la sección más extensa y crítica. Contiene la lista detallada de todos los requisitos.

#### 5.3.1 Requisitos comunes de los interfaces

- **Interfaces de usuario:** Definición de la interacción con el usuario (pantallas, navegación, estilos).
- **Interfaces de hardware:** Características lógicas para la comunicación con hardware externo.
- **Interfaces de software:** Integración con otros productos de software (APIs, sistemas externos).
- **Interfaces de comunicación:** Protocolos de comunicación con otros sistemas.

#### 5.3.2 Requisitos funcionales

Cada requisito funcional describe una acción o proceso que el sistema debe realizar. Se documenta mediante una tabla con los siguientes campos:

- **Número de requisito:** Identificador único (ej. RF.1).
- **Nombre de requisito:** Título descriptivo.
- **Tipo:** Requisito o restricción.
- **Fuente del requisito:** Origen de la necesidad (cliente, entrevista, observación).
- **Prioridad del requisito:** Alta/Esencial, Media/Deseado, Baja/Opcional.

Luego se describe el requisito en texto claro, detallando entradas, procesamiento, salidas y condiciones.

#### 5.3.3 Requisitos no funcionales

- **Rendimiento:** Carga esperada, tiempos de respuesta, número de usuarios concurrentes.
- **Seguridad:** Mecanismos de autenticación, cifrado, control de acceso, logs.
- **Fiabilidad:** Tiempo entre fallos, porcentaje de disponibilidad.
- **Disponibilidad:** Tiempo en que el sistema debe estar operativo (ej. 99.9%).
- **Mantenibilidad:** Facilidad para realizar cambios, actualizaciones, correcciones.
- **Portabilidad:** Capacidad de trasladarse a otras plataformas u entornos.

#### 5.3.4 Otros requisitos

Aquí se incluyen requisitos que no encajan en las categorías anteriores, como legales, culturales o políticos.

### 5.4 Apéndices

Sección opcional para información complementaria que no forma parte del cuerpo principal de la ERS (ej. diagramas adicionales, cuestionarios, actas de reuniones).

---

## 6. Ejemplo de aplicación de la plantilla IEEE 830

Para ilustrar cómo se aplica la plantilla IEEE 830 en un contexto formativo, se presenta un ejemplo genérico basado en un sistema de gestión de personal para una pequeña empresa.

### Contexto del ejemplo

Un grupo de trabajo definió como proyecto formativo un sistema para optimizar la gestión de horarios, asistencia y tareas de empleados en un comercio local. Tras el proceso de pitch y selección, se procedió a elaborar la ERS siguiendo la plantilla IEEE 830.

### Estructura aplicada

El documento de ERS siguió fielmente la plantilla IEEE 830, con las siguientes secciones:

| Sección | Contenido del ejemplo |
|---------|------------------------|
| **Introducción** | Propósito (optimizar gestión de personal), alcance (módulos de usuarios, horarios, tareas, reportes), personal involucrado, definiciones (SGP, KPI, ERS), referencias (propuesta técnica, IEEE). |
| **Descripción general** | Perspectiva: sistema independiente. Funcionalidades: automatización de turnos, control de asistencia, asignación de tareas, reportes. Usuarios: gerencia, administración, personal operativo. Restricciones: idioma español, límite de usuarios simultáneos. Suposiciones: infraestructura en la nube, navegador compatible. Evolución: futura integración con nómina e inventario. |
| **Requisitos específicos** | Se definieron requisitos funcionales (ej. planificación de turnos, registro de asistencia, asignación de tareas y reportes automáticos), cada uno con su tabla de prioridad y fuente. Requisitos no funcionales (rendimiento, seguridad, fiabilidad, disponibilidad, mantenibilidad, portabilidad). |
| **Apéndices** | Documentos internos como levantamiento de información, resumen de propuesta técnica, etc. |

### Propósito de la ERS en el proyecto formativo

La ERS permite a los desarrolladores:

1. **Establecer un contrato claro** con el cliente sobre lo que se va a desarrollar.
2. **Priorizar funcionalidades** (esenciales vs. deseables).
3. **Identificar riesgos** y restricciones desde el inicio.
4. **Servir de base** para el diseño, la codificación y las pruebas.

Este documento es un entregable clave antes de iniciar la fase de desarrollo, asegurando que todos los involucrados compartan la misma visión del sistema.

---

## 7. Flujo de trabajo documental en el primer trimestre

El primer trimestre del programa ADSO incluye una secuencia documental que guía a los grupos desde la idea inicial hasta la definición detallada de su proyecto formativo. A continuación, se muestra el flujo típico en pasos secuenciales:

1. **Pitch y selección de proyecto** – Cada grupo presenta dos propuestas de proyecto y elige una como proyecto definitivo.

2. **Levantamiento de información** – Se aplican técnicas de elicitación (entrevistas, observación, encuestas) para recolectar las necesidades del cliente. Los conceptos y técnicas se documentan en el archivo [`01-elicitacion-requisitos.md`](./01-elicitacion-requisitos.md).

3. **Propuesta técnica y económica** – Con la información recopilada, se define cómo se va a desarrollar el proyecto, con qué recursos, en qué plazo y a qué costo. Estos conceptos se consolidan en el archivo [`06-propuestas-y-presupuestos.md`](./06-propuestas-y-presupuestos.md).

4. **Especificación de requisitos** – Con base en el levantamiento de información y la propuesta, se documentan todos los requisitos funcionales y no funcionales siguiendo la norma IEEE 830-1998, dando como resultado el archivo [`07-especificacion-requisitos.md`](./07-especificacion-requisitos.md).

5. **Desarrollo y pruebas** – El equipo implementa el sistema según la especificación, realizando pruebas de verificación y validación.

6. **Entrega final** – Se entrega el software funcional, junto con la documentación técnica, manuales de usuario y soporte post-implementación.

> **Nota:** Los documentos mencionados (01, 06 y 07) son **guías conceptuales y metodológicas**. Explican los conceptos, técnicas y estructuras que se deben aplicar en el proyecto formativo.

---

## 8. Conclusión

La **especificación de requisitos de software** es un documento fundamental en el ciclo de vida del software. Siguiendo estándares como la **IEEE 830-1998**, se garantiza que los requisitos sean completos, consistentes, verificables y trazables. En el primer trimestre de ADSO, los grupos de trabajo aprenden a aplicar esta metodología para definir sus proyectos, estableciendo una base sólida para el desarrollo posterior.

La relación entre la ERS, el levantamiento de información, las propuestas técnicas/económicas y el pitch muestra cómo la documentación no es un fin en sí mismo, sino una herramienta para asegurar que el producto final cumpla con las expectativas del cliente y los objetivos del proyecto.

---

*Este documento forma parte del material de apoyo del primer trimestre de ADSO y está diseñado para servir como referencia sobre especificación de requisitos y su aplicación práctica.*

> Gracias por leer.