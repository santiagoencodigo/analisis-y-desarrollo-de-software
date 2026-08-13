# Planear actividades de análisis de acuerdo con la metodología seleccionada

> **Resultado de Aprendizaje (RA01):** Planear actividades de análisis de acuerdo con la metodología seleccionada.  
> **Competencia:** Evaluar requisitos de la solución de software de acuerdo con metodologías de análisis y estándares.

---

## Tabla de contenido

- [1. Introducción a la ingeniería de software](#1-introducción-a-la-ingeniería-de-software)
- [2. Ciclo de vida del software](#2-ciclo-de-vida-del-software)
  - [2.1 Modelos de ciclo de vida](#21-modelos-de-ciclo-de-vida)
- [3. Metodologías tradicionales](#3-metodologías-tradicionales)
  - [3.1 Modelo en cascada (Waterfall)](#31-modelo-en-cascada-waterfall)
  - [3.2 Proceso Racional Unificado (RUP)](#32-proceso-racional-unificado-rup)
- [4. Metodologías ágiles](#4-metodologías-ágiles)
  - [4.1 Manifiesto Ágil](#41-manifiesto-ágil)
  - [4.2 Programación Extrema (XP)](#42-programación-extrema-xp)
  - [4.3 Desarrollo Rápido de Aplicaciones (RAD)](#43-desarrollo-rápido-de-aplicaciones-rad)
  - [4.4 Scrum](#44-scrum)
- [5. Planeación de proyectos de software](#5-planeación-de-proyectos-de-software)
  - [5.1 Elementos de definición de un proyecto](#51-elementos-de-definición-de-un-proyecto)
  - [5.2 Estructura orgánica en proyectos de software](#52-estructura-orgánica-en-proyectos-de-software)
  - [5.3 Diagrama de Gantt](#53-diagrama-de-gantt)
- [6. Diagramas de Flujo de Datos (DFD)](#6-diagramas-de-flujo-de-datos-dfd)
  - [6.1 Elementos de los DFD](#61-elementos-de-los-dfd)
  - [6.2 Niveles de descomposición](#62-niveles-de-descomposición)
  - [6.3 Reglas y buenas prácticas](#63-reglas-y-buenas-prácticas)
- [7. Herramientas para la gestión de proyectos](#7-herramientas-para-la-gestión-de-proyectos)
  - [7.1 Jira](#71-jira)
  - [7.2 Trello](#72-trello)
  - [7.3 PSeInt](#73-pseint)
- [8. Actividad práctica: Simulación SCRUM](#8-actividad-práctica-simulación-scrum)
  - [8.1 Historias de usuario](#81-historias-de-usuario)
  - [8.2 Tablero SCRUM (Taskboard)](#82-tablero-scrum-taskboard)
  - [8.3 Checklist de tareas](#83-checklist-de-tareas)
  - [8.4 Ciclo de trabajo](#84-ciclo-de-trabajo)
- [9. Glosario](#9-glosario)
- [10. Referencias](#10-referencias)

---

## 1. Introducción a la ingeniería de software

La **ingeniería de software** representa un proceso formal que incorpora una serie de métodos bien definidos para el análisis, diseño, implementación y pruebas del software y sistemas. Para conseguir el objetivo de construir productos de alta calidad dentro de la planificación, la ingeniería del software emplea una serie de prácticas para:

- Entender el problema.
- Diseñar una solución.
- Implementar la solución correctamente.
- Probar la solución.
- Gestionar las actividades anteriores para conseguir alta calidad.

### Software

El software se puede definir como el conjunto de tres componentes:

| **Componente** | **Descripción** |
|----------------|-----------------|
| **Programas (instrucciones)** | Proporcionan la funcionalidad deseada y el rendimiento cuando se ejecute. |
| **Datos** | Incluye los datos necesarios para manejar y probar los programas y las estructuras requeridas para mantener y manipular estos datos. |
| **Documentos** | Describe la operación y uso del programa. |

**Ejemplo:** SofiaPlus (SENA).

---

## 2. Ciclo de vida del software

El **ciclo de vida** es el conjunto de fases por las que pasa el sistema que se está desarrollando desde que nace la idea inicial hasta que el software es retirado o reemplazado.

### Funciones del ciclo de vida

- Determinar el orden de las fases del proceso de software.
- Establecer los criterios de transición para pasar de una fase a la siguiente.
- Definir las entradas y salidas de cada fase.
- Describir los estados por los que pasa el producto.
- Describir las actividades a realizar para transformar el producto.
- Definir un esquema que sirve como base para planificar, organizar, coordinar, desarrollar.

### Fases típicas del ciclo de vida

| **Fase** | **Descripción** |
|----------|-----------------|
| **Análisis** | Extraer los requisitos de un producto software. Se requiere habilidad para reconocer requisitos incompletos, ambiguos o contradictorios. |
| **Especificación** | Describir detalladamente el software a ser desarrollado, en una forma matemáticamente rigurosa. |
| **Diseño** | Determinar cómo funcionará el software de forma general. Se definen casos de uso y se transforman las entidades en clases de diseño. |
| **Desarrollo / Implementación** | Reducir un diseño a código. La complejidad depende del lenguaje de programación y del diseño previo. |
| **Pruebas** | Comprobar que el software realice correctamente las tareas indicadas en la especificación. Se prueba por separado cada módulo y luego de forma integral. |
| **Mantenimiento** | Mantener y mejorar el software para solventar errores y tratar nuevos requisitos. |

### 2.1 Modelos de ciclo de vida

| **Modelo** | **Descripción** |
|------------|-----------------|
| **Cascada** | Proceso lineal donde las actividades se agrupan en fases sucesivas. |
| **Iterativo** | Desarrollo en ciclos repetitivos que refinan el producto progresivamente. |
| **Prototipos** | Construcción de versiones preliminares para validar requisitos con el usuario. |
| **En V** | Verificación y validación en cada fase del desarrollo. |
| **Espiral** | Combinación de desarrollo iterativo con análisis de riesgos. |
| **Desarrollo incremental** | El producto se construye y entrega en partes funcionales. |

---

## 3. Metodologías tradicionales

Las metodologías tradicionales (a veces llamadas "pesadas") centran su atención en llevar una documentación exhaustiva de todo el proyecto y en cumplir con un plan de proyecto definido en la fase inicial.

### 3.1 Modelo en cascada (Waterfall)

El modelo en cascada es uno de los modelos genéricos más ampliamente conocidos. Plantea un proceso lineal donde las actividades de desarrollo se agrupan en fases sucesivas. Ninguna fase puede iniciar si la fase anterior no ha sido finalizada.

#### Fases de la cascada

| **Fase** | **Descripción** |
|----------|-----------------|
| **Especificación** | Definición detallada del sistema, servicios a construir y restricciones. |
| **Diseño** | Establecimiento de la arquitectura fundamental del software y sus relaciones. |
| **Implementación** | Construcción del software a partir de los diseños del sistema. |
| **Pruebas** | Proceso formal de pruebas. Verificación del correcto funcionamiento de los módulos. |
| **Mantenimiento** | El software es entregado al cliente. Corrección de errores y mejoras del sistema. |

#### Ventajas y desventajas

| **Ventajas** | **Desventajas** |
|--------------|-----------------|
| Definición clara de fases. | No se acopla bien a proyectos complejos. |
| Genera buena documentación. | Difícil introducir cambios en el transcurso del proyecto. |
| Fácil elaborar cronogramas. | Los usuarios finales son integrados al final del proceso. |
| Ideal para proyectos sencillos y cortos. | Fallos detectados cuando el sistema entra en funcionamiento. |

#### Roles en la metodología cascada

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Desarrolladores** | Creación directa de código. |
| **Analista del negocio** | Realización de estrategias de negocio. |
| **Administrador del proyecto** | Responsable de la calidad final del software. Administra el proyecto y subdivide tareas. |
| **Testers** | Encontrar fallas y retornar el software a los desarrolladores. |

### 3.2 Proceso Racional Unificado (RUP)

RUP es un proceso de desarrollo de software tradicional basado en el modelo cascada, desarrollado por Rational Software (IBM). Se centra en la arquitectura y es guiado por casos de uso.

#### Fases de RUP

| **Fase** | **Descripción** |
|----------|-----------------|
| **Incepción** | Establece la viabilidad del producto y delimita el alcance del proyecto. |
| **Elaboración** | Establece una firme comprensión del problema y la fundación arquitectural. |
| **Construcción** | Refina el diseño para llevarlo a código fuente. Se desarrolla el producto. |
| **Transición** | Se libera el producto y se entrega al usuario para uso real. |

#### Disciplinas de RUP

- **Modelado de negocio**
- **Requisitos**
- **Análisis y diseño**
- **Implementación**
- **Pruebas**
- **Despliegue**
- **Gestión de configuración y cambios**
- **Gestión de proyectos**
- **Entorno**

#### Roles de RUP

| **Categoría** | **Roles** |
|---------------|-----------|
| **Analistas** | Analistas de procesos de negocio, diseñadores del negocio, analistas del sistema, especificador de requisitos. |
| **Desarrolladores** | Arquitectos de software, diseñador de bases de datos, desarrollador backend y frontend. |
| **Probadores** | Diseñadores de pruebas, implementadores de pruebas. |
| **Otros** | Artistas gráficos, administradores de sistemas, especialista en herramientas, stakeholders. |

---

## 4. Metodologías ágiles

Las metodologías ágiles nacen como otra opción para abordar proyectos donde no es posible tener un detalle completo de los requerimientos y sus estimaciones en la primera fase. Proveen un conjunto de pautas y principios que buscan facilitar y priorizar la entrega de producto sobre procesos de documentación exhaustiva.

### 4.1 Manifiesto Ágil

El inicio de las metodologías ágiles nació en el año 2001 a partir del **Manifiesto Ágil**, que establece cuatro valores fundamentales:

1. **Individuos e interacciones** sobre procesos y herramientas.
2. **Software funcionando** sobre documentación extensiva.
3. **Colaboración con el cliente** sobre negociación contractual.
4. **Respuesta ante el cambio** sobre seguir un plan.

#### 12 principios ágiles

1. Satisfacer al cliente a través de la entrega temprana y continua de software de valor.
2. Son bienvenidos los requisitos cambiantes, incluso si llegan tarde al desarrollo.
3. Software que funcione, en periodos de un par de semanas hasta un par de meses.
4. Personas del negocio y los desarrolladores deben trabajar juntos de forma cotidiana.
5. Construcción de proyectos en torno a individuos motivados.
6. Comunicar información mediante la conversación cara a cara.
7. El software que funciona es la principal medida del progreso.
8. Desarrollo sostenido, los stakeholders deben mantener un ritmo constante.
9. La atención continua a la excelencia técnica enaltece la agilidad.
10. La simplicidad como arte de maximizar la cantidad de trabajo.
11. Las mejores arquitecturas, requisitos y diseños emergen de equipos que se auto organizan.
12. En intervalos regulares, el equipo reflexiona sobre cómo ser más efectivo.

### 4.2 Programación Extrema (XP)

XP es un marco de desarrollo de software ágil que busca producir software de alta calidad en contextos con requisitos altamente cambiantes, riesgos con tiempos fijos y equipos de trabajo pequeños ubicados en un mismo sitio.

#### Valores de XP

| **Valor** | **Descripción** |
|-----------|-----------------|
| **Comunicación** | Fomentar la comunicación entre todos los miembros del equipo. |
| **Simplicidad** | Hacer lo más simple que funcione. |
| **Retroalimentación** | Obtener retroalimentación constante del cliente y del equipo. |
| **Coraje** | Tomar decisiones difíciles y enfrentar los problemas. |
| **Respeto** | Respetar a los miembros del equipo y sus contribuciones. |

#### Prácticas de XP

- Programación en parejas (Pair Programming).
- Desarrollo guiado por pruebas (TDD).
- Integración continua.
- Refactorización.
- Propiedad colectiva del código.
- Cliente integrado.
- Estándares de codificación.

#### Roles de XP

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Cliente** | Establecimiento de prioridades y necesidades puntuales. |
| **Programador** | Transformar requerimientos en código funcional. |
| **Tester** | Aplicación de pruebas para garantizar la calidad. |
| **Coach** | Brindar asesoría y definir el rumbo del proyecto. |
| **Manager** | Coordinación de actividades y comunicación externa. |

### 4.3 Desarrollo Rápido de Aplicaciones (RAD)

RAD es una metodología ágil que se centra en la realización de iteraciones frecuentes y realimentación constante, inventada por James Martin en 1991.

#### Características de RAD

- Mayor flexibilidad y adaptabilidad.
- Iteraciones rápidas que reducen el tiempo de desarrollo.
- Se fomenta la reutilización de código.
- Mejor gestión del riesgo.

#### Fases de RAD

| **Fase** | **Descripción** |
|----------|-----------------|
| **1. Definición de requisitos** | Las partes interesadas definen objetivos, expectativas, plazos y presupuesto. |
| **2. Construcción de prototipos** | Se construyen, validan y mejoran prototipos con los usuarios. |
| **3. Transformación** | Los prototipos son transformados en modelos funcionales. |
| **4. Pruebas** | Pruebas exhaustivas para garantizar el funcionamiento. |
| **5. Lanzamiento** | Actividades de lanzamiento, carga de datos y entrenamiento. |

#### Roles de RAD

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Facilitador** | Aseguramiento de objetivos y resolución de conflictos. |
| **Escriba** | Documentación de todas las salidas del proceso. |
| **Equipo Swat** | Diseño y construcción del sistema. |
| **Administrador del modelo** | Coordinación de arquitecturas y modelos. |
| **Administrador de bases de datos** | Rendimiento, integridad y seguridad de datos. |
| **Equipo de planificación** | Definición de requerimientos y alcance. |
| **Equipo de diseño de usuario** | Descripción de funciones del negocio. |
| **Equipo de soporte de construcción** | Asegurar que las necesidades del usuario sean alcanzadas. |
| **Equipo de transición** | Preparar y llevar el sistema a producción. |

### 4.4 Scrum

Scrum es un marco de trabajo ágil de muy amplio uso en la industria del software que se fundamenta en los valores y principios ágiles.

#### Pilares de Scrum

| **Pilar** | **Descripción** |
|-----------|-----------------|
| **Transparencia** | Todos los aspectos del proceso deben ser visibles para quienes participan. |
| **Inspección** | Los usuarios deben inspeccionar frecuentemente el progreso y los artefactos. |
| **Adaptación** | Si se detectan desviaciones, el proceso debe ajustarse rápidamente. |

#### Roles de Scrum

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Product Owner** | Responsable del Product Backlog y de maximizar el valor del producto. |
| **Scrum Master** | Facilita el proceso y elimina impedimentos. Vela por la correcta aplicación de Scrum. |
| **Development Team** | Transforma los requerimientos en código ejecutable. Equipo autoorganizado. |
| **Stakeholders** | Personas interesadas en el proyecto (directivos, marketing, etc.). |

#### Eventos de Scrum

| **Evento** | **Descripción** |
|------------|-----------------|
| **Sprint** | Contenedor de un mes o menos donde se crea un incremento de producto "Terminado". |
| **Sprint Planning** | Evento de consenso para acordar el alcance del Sprint y diseñar un plan. |
| **Daily Scrum** | Reunión diaria de 15 minutos para sincronizar actividades. |
| **Sprint Review** | Reunión al final del Sprint donde se presenta el Incremento terminado. |
| **Sprint Retrospective** | Oportunidad para inspeccionarse y crear un plan de mejoras. |

#### Artefactos de Scrum

| **Artefacto** | **Descripción** |
|---------------|-----------------|
| **Product Backlog** | Inventario de todo el trabajo por hacer (requerimientos, casos de uso, tareas). |
| **Sprint Backlog** | Conjunto de elementos del Product Backlog seleccionados para el Sprint. |
| **Incremento** | Suma de todos los elementos terminados en el Sprint y anteriores. |
| **Burndown Chart** | Gráfico que muestra el trabajo pendiente vs. el tiempo disponible. |
| **Scrum Taskboard** | Tablero visual que indica la carga de trabajo y el estado de las tareas. |

#### Ejemplo de Historias de Usuario

Las historias de usuario se expresan con la estructura: **"Como [perfil], quiero [acción] para [beneficio]"**.

| **Historia de Usuario** |
|-------------------------|
| Como usuario del sistema, quiero ingresar dos números para obtener el resultado de su suma de manera automática. |
| Como estudiante de matemáticas, quiero ingresar el radio de un círculo para obtener automáticamente el área calculada. |
| Como cliente de la aplicación de compras, quiero ingresar mi edad para que se me indique si puedo realizar compras con tarjeta de crédito. |
| Como programador, quiero un algoritmo que ejecute un bucle para mostrar una secuencia de pasos repetidamente. |

---

## 5. Planeación de proyectos de software

El principal objetivo de la planificación es ordenar el qué hacer durante el proyecto y asignar adecuadamente los recursos y tareas para cumplir los objetivos propuestos.

### 5.1 Elementos de definición de un proyecto

| **Elemento** | **Descripción** |
|--------------|-----------------|
| **Cliente** | Persona a quien va dirigido el resultado del proyecto. |
| **Usuario** | Persona que utilizará el sistema o parte de él. |
| **Inicio** | Momento en que es expresada la necesidad específica. |
| **Término** | Momento en que se cumple el resultado definido. |
| **Costo** | Recurso o insumo entrante al proyecto, expresado en dinero. |
| **Tiempo** | Recurso que origina una secuencia y luego un programa. |
| **Desempeño técnico** | Característica de los resultados expresados a través de un prototipo. |
| **Jefe de proyecto** | Persona responsable del proyecto. |

### 5.2 Estructura orgánica en proyectos de software

Existen tres tipos principales de estructuras organizacionales para proyectos:

| **Tipo** | **Descripción** | **Ventajas** | **Desventajas** |
|----------|-----------------|--------------|-----------------|
| **Funcional** | El grupo de trabajo está formado por desarrolladores que llevan a cabo el proyecto de principio a fin. | Recursos óptimos, familiaridad, eficiencia operativa. | Perder a las personas adecuadas, prioridades competitivas, silos. |
| **Matricial** | Funciones de Desarrollo, Soporte Técnico, Control de Calidad y Mantenimiento tienen su propia administración. | Optimización de personas, flexibilidad, control del proyecto. | Costos administrativos más altos, falta de comunicación, aumento del conflicto. |
| **Proyectado** | El gerente del proyecto es el propietario de todas las decisiones del proyecto. | Autoridad del PM: Alto, claridad, responsabilidad del rol. | Duplicación de recursos, crecimiento de equipo obstaculizado. |

### 5.3 Diagrama de Gantt

El **Diagrama de Gantt** es una herramienta para planificar y programar tareas a lo largo de un período determinado. Permite realizar el seguimiento y control del progreso.

**Recomendaciones para elaborar un Diagrama de Gantt:**

1. Hacer una lista de todas las actividades del proyecto.
2. Definir tiempos, prioridades y orden de cada tarea.
3. Agrupar actividades por partidas específicas.
4. Diseño esquemático y claro.
5. Mantener actualizada una versión detallada para el ejecutor del proyecto.

El siguiente diagrama de Gantt muestra la planificación temporal de un proyecto, con las actividades organizadas por fases, su duración estimada en días y las fechas de inicio y fin.

| **Actividad** | **Duración (días)** | **Inicio estimado** | **Fin estimado** |
|---------------|---------------------|---------------------|------------------|
| Recolección de requerimientos | 31 | 25/08/2025 | 24/09/2025 |
| Diseño de flujos y casos de uso | 30 | 25/09/2025 | 24/10/2025 |
| Definición de arquitectura y módulos | 31 | 25/10/2025 | 24/11/2025 |
| Desarrollo módulo de pedidos | 30 | 25/11/2025 | 24/12/2025 |
| Desarrollo módulo de facturación | 31 | 25/12/2025 | 24/01/2026 |
| Desarrollo módulo de cuentas por cobrar | 30 | 25/01/2026 | 23/02/2026 |
| Desarrollo módulo de usuarios y seguridad | 27 | 24/02/2026 | 22/03/2026 |
| Desarrollo módulo de reportes | 31 | 23/03/2026 | 22/04/2026 |
| Interfaz de usuario (Frontend) | 15 | 23/04/2026 | 07/05/2026 |
| Backend y lógica de negocio | 30 | 23/04/2026 | 22/05/2026 |
| Integración con sistemas existentes | 15 | 23/05/2026 | 06/06/2026 |
| Migración de datos clave | 15 | 07/06/2026 | 21/06/2026 |
| Pruebas funcionales e integración | 15 | 22/06/2026 | 06/07/2026 |
| Correcciones y ajustes finales | 15 | 07/07/2026 | 21/07/2026 |
| Capacitación a usuarios | 15 | 22/07/2026 | 05/08/2026 |
| Despliegue en entorno productivo | 15 | 06/08/2026 | 20/08/2026 |

---

## 6. Diagramas de Flujo de Datos (DFD)

Los **Diagramas de Flujo de Datos (DFD)** son herramientas gráficas que se utilizan para describir y analizar el movimiento de datos a través de un sistema. Se observa la transformación lógica y física de los datos en las entradas y salidas del sistema.

### 6.1 Elementos de los DFD

| **Elemento** | **Representación** | **Descripción** |
|--------------|-------------------|-----------------|
| **Entidad externa** | `[   ]` | Persona, grupo, departamento o sistema que entrega o recibe información. |
| **Proceso** | `(   )` | Muestra lo que hace el sistema. Transforma entradas en salidas. |
| **Almacén de datos** | `||` o `══` | Representa la información en reposo. |
| **Flujo de datos** | `→` | Tubería a través del cual fluye información. Conecta los componentes. |

### 6.2 Niveles de descomposición

| **Nivel** | **Descripción** |
|-----------|-----------------|
| **Nivel 0** | Diagrama de contexto. Muestra el sistema como un solo proceso y sus entidades externas. |
| **Nivel 1** | Subsistemas. Primera descomposición del sistema en funciones principales. |
| **Nivel 2** | Funciones de cada subsistema. |
| **Nivel 3** | Subfunciones asociadas a cada evento. |
| **Nivel 4** | Procesos necesarios para el tratamiento de cada subfunción. |

### 6.3 Reglas y buenas prácticas

- Identificar las entidades externas para definir los límites del sistema.
- Elegir nombres con significado para procesos y flujos de datos.
- Identificar el papel del proceso, no quien lo realiza.
- Enumerar los procesos de manera consistente.
- Todos los elementos se relacionan entre sí a través de flujos de datos.
- Todos los procesos deben tener al menos una entrada y una salida.
- En el nivel 0 (contexto) no hay almacenes de datos.

### Conexiones permitidas entre componentes de un DFD

| **Destino / Fuente** | **PROCESO** | **ALMACÉN** | **ENTIDAD EXTERNA** |
|----------------------|-------------|-------------|---------------------|
| **PROCESO** | Sí | Sí | Sí |
| **ALMACÉN** | Sí | No | No* |
| **ENTIDAD EXTERNA** | Sí | No* | No |

---

## 7. Herramientas para la gestión de proyectos

### 7.1 Jira

Jira es una herramienta de gestión de proyectos desarrollada por Atlassian, ampliamente utilizada en entornos ágiles (Scrum, Kanban).

**Características principales:**

- Gestión de épicas, historias de usuario y tareas.
- Tableros Scrum y Kanban.
- Seguimiento de sprints y burndown charts.
- Integración con otras herramientas de Atlassian.

**Versión gratuita:** Permite hasta 10 usuarios.

### 7.2 Trello

Trello es una herramienta visual de gestión de proyectos basada en tableros, listas y tarjetas.

**Características principales:**

- Tableros visuales (Taskboard).
- Listas: To Do, In Progress, Testing, Done.
- Tarjetas con checklist, fechas y etiquetas.
- Ideal para equipos pequeños y proyectos sencillos.

### 7.3 PSeInt

PSeInt es una herramienta educativa para aprender lógica de programación mediante pseudocódigo.

**Características principales:**

- Sintaxis en español.
- Editor de pseudocódigo con autocompletado.
- Ejecución paso a paso.
- Generación de diagramas de flujo.

---

## 8. Actividad práctica: Simulación SCRUM

### 8.1 Historias de usuario

Las historias de usuario se crean con la estructura: **"Como [rol], quiero [acción] para [beneficio]"**.

| **Historia de Usuario** | **Prioridad** |
|-------------------------|---------------|
| Como usuario del sistema, quiero ingresar dos números para obtener el resultado de su suma de manera automática. | Alta |
| Como estudiante de matemáticas, quiero ingresar el radio de un círculo para obtener automáticamente el área calculada. | Media |
| Como cliente de la aplicación financiera, quiero ingresar un monto en COP para obtener su equivalente en USD. | Media |
| Como cliente de la aplicación de compras, quiero ingresar mi edad para saber si puedo realizar compras con tarjeta de crédito. | Baja |
| Como programador, quiero un algoritmo que ejecute un bucle para mostrar una secuencia de pasos repetidamente. | Baja |

### 8.2 Tablero SCRUM (Taskboard)

El tablero SCRUM se organiza en las siguientes columnas:

| **To Do** | **In Progress** | **Testing** | **Done** |
|-----------|-----------------|-------------|----------|
| Historias pendientes por iniciar. | Historias en desarrollo activo. | Historias en fase de verificación con el instructor. | Historias completadas y validadas. |

### 8.3 Checklist de tareas

Cada historia debe contener un checklist detallado de las tareas a realizar:

| **Historia** | **Tareas** | **Evidencia** |
|--------------|------------|---------------|
| Suma de dos números | 1. Definir algoritmo en PSeInt<br>2. Probar con diferentes valores<br>3. Documentar resultados | Archivo .psc |
| Área del círculo | 1. Definir algoritmo en PSeInt<br>2. Probar con diferentes radios<br>3. Documentar resultados | Archivo .psc |
| Conversión COP a USD | 1. Definir algoritmo en PSeInt<br>2. Probar con diferentes montos<br>3. Documentar resultados | Archivo .psc |

### 8.4 Ciclo de trabajo

1. **Planificación del Sprint:** El equipo selecciona las historias a desarrollar en el Sprint (30 minutos máximo).
2. **Ejecución:** Cada miembro asume tareas y las mueve a "In Progress".
3. **Testing:** Cuando una tarea está lista, se mueve a "Testing" para revisión con el instructor.
4. **Done:** Se da por finalizada la historia si:
   - Cada tarea está realizada.
   - El archivo .psc (PSeInt) está adjunto y cumple el objetivo.
   - Se tiene el aval de la fase de Testing por parte del instructor.

---

## 9. Glosario

| **Término** | **Definición** |
|-------------|----------------|
| **Back-end** | Parte del software que se ejecuta en el servidor, gestionando la lógica de negocio y la base de datos. |
| **Base de Datos** | Sistema que almacena y organiza información de forma estructurada. |
| **Burndown Chart** | Gráfico que muestra el trabajo pendiente vs. el tiempo disponible en un Sprint. |
| **DFD** | Diagrama de Flujo de Datos. Representación gráfica del movimiento de datos en un sistema. |
| **Framework** | Conjunto de herramientas y bibliotecas que facilitan el desarrollo estructurado de software. |
| **Front-end** | Parte de la aplicación que interactúa directamente con el usuario. |
| **IDE (Integrated Development Environment)** | Entorno que integra herramientas de programación para facilitar el desarrollo. |
| **Incremento** | Suma de todos los elementos terminados en un Sprint y los anteriores. |
| **Product Backlog** | Inventario de todo el trabajo por hacer en un proyecto Scrum. |
| **Scrum** | Marco de trabajo ágil para el desarrollo incremental de software. |
| **Sprint** | Contenedor de un mes o menos donde se crea un incremento de producto "Terminado". |
| **UML (Unified Modeling Language)** | Lenguaje de modelado gráfico para visualizar, diseñar y documentar sistemas de software. |
| **User Story** | Descripción corta de una funcionalidad desde la perspectiva del usuario. |

---

## 10. Referencias

- Manifiesto Ágil. (2001). *Manifiesto por el Desarrollo Ágil de Software*. Recuperado de https://agilemanifesto.org
- Atlassian. *Guía de Scrum con Jira*. Recuperado de https://www.atlassian.com/es/agile/scrum
- Trello. *Gestión de proyectos con tableros*. Recuperado de https://trello.com

---

> Gracias por leer.
