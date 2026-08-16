# Proceso Unificado Racional (RUP)

> **RUP** (Rational Unified Process) es un proceso de desarrollo de software tradicional, iterativo e incremental, basado en el modelo en cascada y guiado por casos de uso. Fue desarrollado por [Rational Software](https://es.wikipedia.org/wiki/Rational_Software) (actualmente IBM) y se centra en la arquitectura del sistema.

---

## Tabla de contenido

- [1. Introducción a RUP](#1-introducción-a-rup)
- [2. Características principales](#2-características-principales)
- [3. Fases de RUP](#3-fases-de-rup)
  - [3.1 Incepción](#31-incepción)
  - [3.2 Elaboración](#32-elaboración)
  - [3.3 Construcción](#33-construcción)
  - [3.4 Transición](#34-transición)
- [4. Disciplinas de RUP](#4-disciplinas-de-rup)
- [5. Roles en RUP](#5-roles-en-rup)
- [6. Ventajas y desventajas](#6-ventajas-y-desventajas)
- [7. Referencias](#7-referencias)

---

## 1. Introducción a RUP

El **Proceso Racional Unificado** (RUP) es un marco de trabajo de desarrollo de software que proporciona un enfoque disciplinado para asignar tareas y responsabilidades dentro de una organización de desarrollo. Su objetivo es garantizar la producción de software de alta calidad que cumpla con las necesidades de los usuarios finales dentro de un presupuesto y cronograma predecibles.

RUP se basa en **tres pilares fundamentales**:

- **Dirigido por casos de uso:** Los casos de uso guían todo el proceso, desde la captura de requisitos hasta las pruebas.
- **Centrado en la arquitectura:** La arquitectura del sistema es el eje sobre el que se construye el software.
- **Iterativo e incremental:** El desarrollo se divide en ciclos (iteraciones) que producen incrementos funcionales del sistema.

> *Imagen: Flujo de trabajo de RUP (tomada de Wikipedia)*
>
> <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Rup_espanol.gif" width="600px">

---

## 2. Características principales

RUP se considera una **metodología tradicional o "pesada"** debido a su énfasis en la documentación exhaustiva y la planificación detallada desde el inicio del proyecto. Sus características más destacadas son:

| **Característica** | **Descripción** |
|-------------------|-----------------|
| **Documentación extensiva** | Cada fase genera artefactos documentados que sirven como base para las siguientes etapas. |
| **Planificación rigurosa** | El plan de proyecto se define en las fases iniciales y se refina iterativamente. |
| **Flexibilidad limitada** | Los cambios son costosos, especialmente en etapas avanzadas. |
| **Roles definidos** | Asigna responsabilidades claras a cada perfil dentro del equipo. |

---

## 3. Fases de RUP

RUP divide el ciclo de vida del software en **cuatro fases** principales. Cada fase se compone de una o más iteraciones, y su duración e intensidad varían según el proyecto.

### 3.1 Incepción

**Objetivo:** Establecer la viabilidad del producto y delimitar el alcance del proyecto.

**Actividades clave:**
- Definir el ámbito y los objetivos del proyecto.
- Identificar las principales funcionalidades del sistema (casos de uso críticos).
- Evaluar la arquitectura inicial y los riesgos.
- Estimar el plan del proyecto y el costo aproximado.

**Artefactos resultantes:**
- Enunciado de requerimientos (casos de uso iniciales).
- Boceto de la arquitectura.
- Descripción de los objetivos del proyecto.
- Plan preliminar del proyecto.
- Modelo del negocio (si aplica).

> **Analogía:** Es como la fase de "análisis y documentación" donde se define el qué y el porqué del proyecto.

---

### 3.2 Elaboración

**Objetivo:** Establecer una comprensión firme del problema y sentar las bases arquitectónicas.

**Actividades clave:**
- Refinar y completar la mayoría de los casos de uso (≈80%).
- Construir un prototipo arquitectural ejecutable.
- Definir un plan detallado para las siguientes iteraciones.
- Mitigar los riesgos más significativos.

**Artefactos resultantes:**
- Prototipo arquitectural.
- Casos de prueba iniciales.
- La mayoría de los casos de uso.
- Plan detallado para las fases posteriores.

> **Analogía:** Se construye una versión temprana y simple del sistema (prototipo) para validar conceptos y refinar la arquitectura.

---

### 3.3 Construcción

**Objetivo:** Refinar el diseño y desarrollar el código fuente completo.

**Actividades clave:**
- Desarrollar el sistema mediante iteraciones que incluyen análisis, diseño, implementación y pruebas.
- Permitir cambios en la estructura si es necesario.
- Documentar el sistema y su manejo.
- Producir el software junto con su documentación.

**Artefactos resultantes:**
- El sistema software completo.
- Casos de prueba actualizados.
- Manuales de usuario.

> **Analogía:** Es la fase de desarrollo intensivo donde se escribe la mayor parte del código y se realizan pruebas.

---

### 3.4 Transición

**Objetivo:** Entregar el producto a los usuarios finales y asegurar su aceptación.

**Actividades clave:**
- Liberar el producto y ponerlo en producción.
- Realizar tareas de marketing, instalación, configuración, entrenamiento y soporte.
- Completar y refinar los manuales de usuario.
- Realizar iteraciones para ajustes finales.

**Criterios de finalización:**
- Se han alcanzado los objetivos de la fase de Incepción.
- El usuario está satisfecho con el producto.

> **Analogía:** Es la fase de entrega, donde se recogen lecciones aprendidas para futuros ciclos.

---

## 4. Disciplinas de RUP

RUP organiza las actividades en **disciplinas o flujos de trabajo** que se aplican a lo largo de todas las fases, aunque con distinta intensidad. La siguiente tabla muestra la relación entre disciplinas y fases:

```
                                        FASES
+-----------------------+------------+------------+--------------+------------+
| Flujos de Trabajo     | Incepción  | Elaboración| Construcción | Transición |
+-----------------------+------------+------------+--------------+------------+
| Modelado de Negocios  |   ______   |   ____     |              |            |
| Requerimientos        |  ________  |  ______    |    ____      |            |
| Análisis y Diseño     |     ____   | ________   |  ________    |   ____     |
| Implementación        |            | ________   | __________   |  ______    |
| Prueba                |            | ________   | __________   |  ______    |
| Desarrollo            |            |            |  ________    |    __      |
| Configuración/Cambio  |    ____    |  ________  | __________   | _________  |
| Admin. del Proyecto   |  __    __  | __    __ __| __    __ __  | __    __ __|
| Ambiente              | __      __ |      __    |      __      |      __    |
+-----------------------+------------+------------+--------------+------------+
Iteraciones:             Preliminar   #1    #2    #3    #4    #N     #N+M
```

### Descripción de las disciplinas principales

| **Disciplina** | **Propósito** |
|----------------|---------------|
| **Modelado de negocio** | Comprender la estructura y funcionamiento de la organización, identificar oportunidades de mejora y obtener requisitos. |
| **Requisitos** | Consensuar las capacidades del sistema con los stakeholders, delimitar el alcance y servir como base para la planificación. |
| **Análisis y diseño** | Traducir los requisitos en un diseño detallado, definir la arquitectura y garantizar la consistencia con el entorno de implementación. |
| **Implementación** | Construir el sistema a partir del diseño, mediante componentes, scripts y código fuente. |
| **Pruebas** | Verificar que el sistema cumpla con los requisitos y esté libre de defectos. |
| **Gestión de configuración y cambios** | Controlar las versiones y los cambios en los artefactos del proyecto. |
| **Gestión de proyectos** | Planificar, coordinar y supervisar el progreso, los recursos y los riesgos. |
| **Entorno** | Proporcionar la infraestructura y las herramientas necesarias para el desarrollo. |

---

## 5. Roles en RUP

RUP categoriza los roles en función de las disciplinas y actividades. Cada rol tiene responsabilidades específicas:

| **Categoría** | **Roles** |
|---------------|-----------|
| **Analistas** | Analistas de procesos de negocio, diseñadores del negocio, analistas del sistema, especificador de requisitos, diseñadores de interfaces de usuario. |
| **Desarrolladores** | Arquitectos de software, diseñadores de bases de datos, desarrolladores backend y frontend, integradores. |
| **Probadores** | Diseñadores de pruebas, implementadores de pruebas. |
| **Otros** | Artistas gráficos, administradores de sistemas, especialistas en herramientas, stakeholders, gestores de configuración. |

---

## 6. Ventajas y desventajas

| **Ventajas** | **Desventajas** |
|--------------|-----------------|
| Proporciona un marco estructurado y disciplinado. | Puede ser demasiado pesado y burocrático para proyectos pequeños. |
| Genera documentación completa que facilita el mantenimiento. | La rigidez dificulta la adaptación a cambios frecuentes. |
| Permite una planificación detallada y control de costos. | Requiere una inversión inicial significativa en análisis y diseño. |
| Es escalable y adecuado para proyectos grandes y complejos. | La curva de aprendizaje es alta para equipos sin experiencia. |

---

## 7. Referencias

- [GeeksforGeeks - RUP and its Phases](https://www.geeksforgeeks.org/software-engineering/rup-and-its-phases/)
- [ActiveCollab - RUP Methodology](https://activecollab.com/learn/project-management-methodologies/rup)
- [Wikipedia - Proceso Unificado de Rational](https://es.wikipedia.org/wiki/Proceso_Unificado_de_Rational)
- [IBM - Rational Unified Process](https://www.ibm.com/cloud/learn/rational-unified-process)

---

> Gracias por leer.