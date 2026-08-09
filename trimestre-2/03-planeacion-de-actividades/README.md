# Planeación de Actividades de Análisis

Este directorio contiene los materiales, apuntes y ejercicios relacionados con la planeación de actividades de análisis de software, de acuerdo con la metodología seleccionada. El objetivo es comprender los fundamentos de la ingeniería de software, los modelos de ciclo de vida, las metodologías tradicionales y ágiles, y los roles involucrados en un proyecto de desarrollo.

---

## Tabla de contenido

- [Introducción](#introducción)
- [Metodologías de desarrollo de software](#metodologías-de-desarrollo-de-software)
  - [Metodologías tradicionales](#metodologías-tradicionales)
  - [Metodologías ágiles](#metodologías-ágiles)
- [Modelos de ciclo de vida](#modelos-de-ciclo-de-vida)
  - [Modelo en cascada (Waterfall)](#modelo-en-cascada-waterfall)
  - [Modelo en V](#modelo-en-v)
  - [Modelo iterativo](#modelo-iterativo)
  - [Modelo de desarrollo incremental](#modelo-de-desarrollo-incremental)
  - [Modelo en espiral](#modelo-en-espiral)
  - [Modelo de prototipos](#modelo-de-prototipos)
- [Fases del desarrollo de software](#fases-del-desarrollo-de-software)
- [Roles en proyectos de software](#roles-en-proyectos-de-software)
- [Herramientas y técnicas](#herramientas-y-técnicas)
- [Actividad práctica: Aplicación de metodología Scrum](#actividad-práctica-aplicación-de-metodología-scrum)
- [Referencias y recursos](#referencias-y-recursos)

---

## Introducción

La planeación de actividades de análisis es un paso fundamental en el desarrollo de proyectos de software. Garantiza que cada tarea se ejecute de manera organizada y coherente con los objetivos planteados. Al seguir una metodología específica, se establecen fases claras, responsables definidos y tiempos adecuados, lo que facilita la detección temprana de riesgos y la optimización de recursos.

Un buen análisis permite comprender a profundidad las necesidades del usuario y los requerimientos del sistema antes de pasar a etapas posteriores. Además, contribuye a mejorar la comunicación entre los miembros del equipo, evitando retrabajos y malentendidos. Al tener un plan estructurado, se asegura que el análisis sea integral y enfocado en los resultados esperados, aumentando la calidad del producto final y la satisfacción del cliente.

---

## Metodologías de desarrollo de software

Una **metodología de desarrollo de software** hace referencia a un conjunto de procedimientos genéricos y lógicos que se utilizan para alcanzar un objetivo particular, usando un conjunto de habilidades y conocimientos. Las metodologías siempre parten de un componente teórico y, cuando son usadas por los equipos de trabajo, conllevan a la utilización de un conjunto de técnicas y métodos que determinan las tareas generales y específicas que se deberían realizar.

### Metodologías tradicionales

Se caracterizan por centrar la mayor parte de su esfuerzo en la planeación y control del proceso. Son óptimas en proyectos donde los requisitos están plenamente identificados y delimitados, y donde no se producirán cambios durante el desarrollo.

### Metodologías ágiles

Nacen como otra opción para abordar proyectos donde no es posible tener un detalle completo de los requerimientos en la primera fase, o donde es necesario hacer procesos de adaptabilidad a lo largo del desarrollo. Priorizan la entrega de producto sobre procesos de documentación exhaustiva, e involucran al cliente desde las primeras etapas.

---

## Modelos de ciclo de vida

Un **modelo de ciclo de vida** describe las fases principales del desarrollo de software, define las actividades primarias esperadas durante esas fases, y ayuda a administrar el progreso del desarrollo. A continuación, se describen los principales modelos:

### Modelo en cascada (Waterfall)

Es uno de los modelos genéricos más ampliamente conocidos. Plantea un proceso lineal donde las actividades de desarrollo se agrupan en fases sucesivas. Ninguna fase puede iniciar si la fase anterior no ha sido finalizada.

**Ventajas:**
- Definición clara de fases.
- Genera buena documentación.
- Fácil elaboración de cronogramas.

**Desventajas:**
- No se acopla bien a proyectos complejos.
- Difícil introducir cambios en el transcurso del proyecto.
- Los usuarios finales son integrados al final del proceso.
- Los fallos se detectan cuando el sistema ya está en funcionamiento.

### Modelo en V

Es una variante del modelo en cascada que enfatiza la verificación y validación en cada fase. Por cada etapa de desarrollo existe una etapa de pruebas correspondiente.

**Ventajas:**
- Mayor control de calidad.
- Detección temprana de errores.

**Desventajas:**
- Sigue siendo poco flexible ante cambios.
- Puede ser más costoso y lento.

### Modelo iterativo

Consiste en repetir el ciclo completo de desarrollo (análisis, diseño, implementación, pruebas) varias veces, refinando el producto en cada iteración. Es un enfoque que permite mejorar progresivamente el sistema.

**Ventajas:**
- Permite incorporar retroalimentación del usuario.
- Reduce riesgos al entregar versiones parciales funcionales.

**Desventajas:**
- Puede ser desgastante realizar el ciclo completo muchas veces.
- Requiere una buena gestión de cambios.

### Modelo de desarrollo incremental

Similar al iterativo, pero en lugar de repetir todo el ciclo, se añaden nuevas funcionalidades en cada incremento. El producto se construye por partes, entregando versiones que agregan valor progresivamente.

**Ventajas:**
- Entrega temprana de funcionalidades básicas.
- Permite ajustes en cada incremento.

**Desventajas:**
- Requiere una arquitectura bien definida desde el inicio.
- Puede generar deuda técnica si no se planifica adecuadamente.

### Modelo en espiral

Combina el modelo en cascada con el enfoque iterativo, incorporando un análisis de riesgos en cada ciclo. Es ideal para proyectos grandes y complejos.

**Ventajas:**
- Gestión explícita de riesgos.
- Permite cambios y mejoras continuas.

**Desventajas:**
- Es costoso y requiere experiencia en análisis de riesgos.
- Puede ser demasiado complejo para proyectos pequeños.

### Modelo de prototipos

Consiste en construir versiones preliminares (prototipos) del sistema para validar requisitos con el usuario antes del desarrollo final. Permite obtener retroalimentación temprana y reducir malentendidos.

**Ventajas:**
- Alta participación del usuario.
- Mejora la comprensión de los requisitos.

**Desventajas:**
- Puede generar expectativas de que el prototipo es el producto final.
- Puede retrasar el desarrollo si se hacen muchos cambios.

---

## Fases del desarrollo de software

Las fases del desarrollo de software representan las etapas que se siguen para construir un producto de calidad. Aunque varían según la metodología, en general incluyen:

1. **Análisis de requisitos:** Se extraen y documentan las necesidades del cliente y los usuarios. Es la fase más crítica, ya que define el alcance y las funcionalidades del sistema.

2. **Especificación de requisitos:** Se plasma formalmente lo que se va a construir, incluyendo requisitos funcionales y no funcionales. Sirve como contrato entre el cliente y el equipo de desarrollo.

3. **Diseño y arquitectura:** Se define la estructura del software: componentes, bases de datos, servidores, interfaces de usuario, etc. Se establecen los planos para la construcción.

4. **Programación (Implementación):** Se escribe el código fuente, tanto para el backend como para el frontend. Es la fase donde el diseño se convierte en software funcional.

5. **Pruebas:** Se verifica que el software funcione correctamente, cumpla con los requisitos y no tenga errores. Incluye pruebas unitarias, de integración, de sistema y de aceptación.

6. **Mantenimiento:** Una vez desplegado el software, se corrigen errores, se realizan mejoras y se adapta a nuevos requisitos. Es una fase continua que puede durar toda la vida del producto.

---

## Roles en proyectos de software

En un proyecto de software intervienen diferentes perfiles, cada uno con responsabilidades específicas. En equipos pequeños, una persona puede asumir múltiples roles.

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Cliente** | Define las necesidades generales y valida el producto final. |
| **Gerente de proyecto** | Planifica, coordina y supervisa el proyecto. Gestiona recursos y plazos. |
| **Líder de proyecto** | Coordina al equipo técnico y asegura el cumplimiento de los objetivos. |
| **Analista de sistemas** | Realiza el levantamiento de requisitos y el análisis funcional. |
| **Diseñador** | Diseña la interfaz de usuario y la experiencia de uso. |
| **Ingeniero de software (Desarrollador)** | Construye el software según el diseño y las especificaciones. |
| **Responsable de pruebas (QA)** | Prueba el software para garantizar que cumple con los requisitos. |
| **Administrador de configuración** | Gestiona las versiones del software y los artefactos del proyecto. |

En equipos pequeños, es común que cada miembro asuma varios de estos roles, lo que requiere flexibilidad y habilidades multidisciplinarias.

---

## Herramientas y técnicas

Para la planeación de actividades de análisis, se utilizan diversas herramientas y técnicas que facilitan la organización y el seguimiento del proyecto:

- **Acta de inicio:** Documento donde se establecen los principales lineamientos académicos y comportamentales para el desarrollo de la formación.
- **Plan de trabajo:** Cronograma detallado con las actividades, responsables y fechas de entrega.
- **Cronograma:** Herramienta que permite visualizar las tareas y su secuencia en el tiempo.
- **Matriz de requisitos:** Técnica para organizar y priorizar los requisitos del sistema.
- **Casos de uso:** Modelo funcional que describe las interacciones entre actores y el sistema.
- **DFD (Diagramas de Flujo de Datos):** Representación gráfica del flujo de información en el sistema.
- **Mockups:** Prototipos de baja fidelidad para visualizar la interfaz y validar el diseño con el usuario.

---

## Actividad práctica: Aplicación de metodología Scrum

Como parte de la planeación de actividades de análisis, se realiza una simulación de la metodología **Scrum** para desarrollar un proyecto de software.

**Objetivos:**
- Comprender los roles, eventos y artefactos de Scrum.
- Aplicar la metodología en un caso práctico.
- Priorizar requisitos y planificar sprints.

**Desarrollo:**
1. **Definición del Product Backlog:** Lista priorizada de funcionalidades del sistema.
2. **Sprint Planning:** Selección de historias de usuario para el sprint.
3. **Ejecución del sprint:** Desarrollo de las tareas asignadas.
4. **Daily Scrum:** Reunión diaria de sincronización.
5. **Sprint Review:** Presentación del incremento al cliente.
6. **Sprint Retrospective:** Reflexión y mejora del proceso.

**Herramientas sugeridas:**
- Trello o Jira para la gestión del tablero Scrum.
- PSeInt para la codificación de algoritmos en pseudocódigo.
- Python para la implementación de los ejercicios.

---

## Referencias y recursos

- [Scrum Guide](https://scrumguides.org/)
- [UML - Unified Modeling Language](https://www.uml.org/)

---

> Gracias por leer.