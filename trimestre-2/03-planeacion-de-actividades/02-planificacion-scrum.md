# Planeación de metodologías para proyectos de software

> Este documento consolida la estructura y los elementos clave para la planeación de un proyecto de software, utilizando como referencia la metodología ágil **Scrum**. Se describen los componentes esenciales de un plan de proyecto: desde la definición del problema y los objetivos, hasta la organización del equipo, la estimación de costos y el cronograma de trabajo.

---

## Tabla de contenido

- [1. Descripción del proyecto](#1-descripción-del-proyecto)
- [2. Objetivos](#2-objetivos)
- [3. Alcances y restricciones](#3-alcances-y-restricciones)
- [4. Organización del proyecto](#4-organización-del-proyecto)
  - [4.1 Estructura orgánica](#41-estructura-orgánica)
  - [4.2 Roles y responsabilidades](#42-roles-y-responsabilidades)
- [5. Metodología de desarrollo](#5-metodología-de-desarrollo)
  - [5.1 Justificación de la metodología](#51-justificación-de-la-metodología)
  - [5.2 Etapas de Scrum](#52-etapas-de-scrum)
- [6. Productos entregables](#6-productos-entregables)
- [7. Calendario del proyecto](#7-calendario-del-proyecto)
- [8. Estimación de costos](#8-estimación-de-costos)
  - [8.1 Gastos del producto](#81-gastos-del-producto)
  - [8.2 Gastos de mano de obra](#82-gastos-de-mano-de-obra)
  - [8.3 Gastos imprevistos](#83-gastos-imprevistos)
- [9. Diagrama de Gantt](#9-diagrama-de-gantt)
- [10. Referencias](#10-referencias)

---

## 1. Descripción del proyecto

La descripción del proyecto debe responder a las preguntas fundamentales: **¿qué problema se va a resolver?**, **¿para quién?** y **¿por qué es importante resolverlo?**

En un documento de planeación, esta sección establece el contexto del negocio, identifica las dificultades actuales y justifica la necesidad de una solución tecnológica. Es importante que la descripción sea clara y concisa, de modo que cualquier persona que lea el documento pueda entender el propósito del proyecto sin necesidad de conocimientos técnicos avanzados.

**Elementos clave:**

- **Contexto del negocio:** Sector, tamaño de la empresa, ubicación, tipo de productos o servicios.
- **Problema identificado:** Limitaciones en los procesos actuales (ej. retrasos, pérdida de información, errores humanos, falta de integración).
- **Necesidad de cambio:** Por qué el sistema actual es insuficiente y cómo un nuevo software puede solucionar los problemas.
- **Objetivo general:** La solución propuesta y su impacto esperado.

---

## 2. Objetivos

Los objetivos guían todo el desarrollo del proyecto y deben ser claros, medibles y alcanzables.

### Objetivo general

Describe de manera amplia el propósito del proyecto. Responde a la pregunta: **¿qué se va a lograr con este proyecto?**

### Objetivos específicos

Son metas concretas que contribuyen al cumplimiento del objetivo general. Se recomienda que cada objetivo específico esté asociado a una fase o módulo del proyecto.

---

## 3. Alcances y restricciones

### Alcance

Define los límites del proyecto: **qué se va a hacer** y **qué no se va a hacer**. Incluye las funcionalidades, módulos, integraciones y entregables previstos.

### Restricciones

Son las limitaciones que afectan el proyecto, como presupuesto, tiempo, recursos tecnológicos, personal, normativas, etc. Identificarlas desde el inicio permite anticipar riesgos y planificar contingencias.

---

## 4. Organización del proyecto

### 4.1 Estructura orgánica

La estructura orgánica define cómo se organiza el equipo de trabajo. En proyectos de software, las estructuras más comunes son:

- **Estructura funcional:** Los equipos se organizan por áreas de especialización (desarrollo, pruebas, análisis). El líder de proyecto tiene autoridad limitada y los miembros reportan a sus jefes funcionales.
- **Estructura matricial:** Combina la organización funcional con la orientación a proyectos. Los miembros del equipo reportan tanto al líder de proyecto como a su jefe funcional.
- **Estructura proyectada:** El equipo está dedicado exclusivamente al proyecto. El líder de proyecto tiene autoridad total y los miembros reportan directamente a él.

Para equipos pequeños, es común adoptar una estructura proyectada o matricial, ya que permite una comunicación más directa y una mayor cohesión.

### 4.2 Roles y responsabilidades

Cada miembro del equipo asume un rol específico con responsabilidades claras. En un proyecto ágil con Scrum, los roles principales son:

| **Rol** | **Responsabilidades** |
|---------|------------------------|
| **Líder de proyecto (Scrum Master)** | Planificar, coordinar y supervisar todas las fases del proyecto. Gestionar el cronograma, recursos y presupuesto. Ser el enlace entre el equipo y los stakeholders. Identificar riesgos y tomar decisiones clave. |
| **Product Owner** | Analizar las necesidades del negocio, traducir procesos en requerimientos técnicos, priorizar funcionalidades según impacto, validar con usuarios y asegurar la alineación con los objetivos del negocio. |
| **Analista de sistemas** | Levantar requerimientos funcionales y no funcionales, diseñar casos de uso y diagramas de procesos, colaborar con el equipo técnico para la correcta interpretación de los requerimientos, apoyar en pruebas funcionales y elaborar documentación técnica. |
| **Desarrollador Backend** | Diseñar y desarrollar la lógica de negocio (servidor, APIs, base de datos), implementar módulos, asegurar seguridad y eficiencia, gestionar integraciones con sistemas existentes, colaborar en pruebas y resolución de errores técnicos. |
| **Desarrollador Frontend** | Diseñar e implementar la interfaz de usuario, asegurar una experiencia intuitiva y accesible, trabajar junto a los analistas para reflejar los flujos del sistema, conectar el frontend con el backend y realizar pruebas de interfaz. |
| **Responsable de pruebas (QA)** | Diseñar y ejecutar casos de prueba, validar que el software cumpla con los requisitos, reportar errores y colaborar en la corrección. |

---

## 5. Metodología de desarrollo

### 5.1 Justificación de la metodología

La selección de la metodología debe estar alineada con las características del proyecto y el equipo. En este caso, se eligió **Scrum** porque:

- Permite **flexibilidad** y **adaptación** a cambios, lo cual es fundamental cuando los requisitos pueden evolucionar durante el desarrollo.
- Facilita la **retroalimentación continua** con los stakeholders, asegurando que el producto entregue el valor esperado.
- Promueve la **entrega incremental**, lo que permite que el cliente pueda empezar a usar partes del sistema antes de que esté completamente terminado.
- Fomenta el **trabajo en equipo autoorganizado** y la **mejora continua** a través de retrospectivas periódicas.

### 5.2 Etapas de Scrum

| **Etapa** | **Descripción** |
|-----------|-----------------|
| **Creación del Product Backlog** | Se define y prioriza la lista de funcionalidades (historias de usuario) según el valor que aportan al negocio. |
| **Planificación del Sprint** | Se seleccionan las historias que se van a desarrollar en el sprint, se establece un objetivo claro y se estima el esfuerzo. |
| **Ejecución del Sprint** | El equipo desarrolla las funcionalidades acordadas. Se realizan reuniones diarias (Daily Scrum) para coordinar avances, identificar obstáculos y mantener la transparencia. |
| **Revisión del Sprint** | Al final del sprint, se presenta al cliente el incremento desarrollado, se revisa si cumple con los objetivos y se recibe retroalimentación. |
| **Retrospectiva del Sprint** | El equipo analiza cómo trabajó, identifica problemas o dificultades y acuerda mejoras para el próximo sprint. |
| **Entrega Incremental** | Cada sprint entrega una parte funcional del sistema, lo que permite obtener resultados rápidos y ajustar el rumbo según sea necesario. |

---

## 6. Productos entregables

Los entregables son los resultados concretos que se generan durante el proyecto. Deben estar asociados a una fase o sprint, tener un responsable y una fecha estimada de entrega.

| **Nombre del producto** | **Responsable** | **Fecha de entrega** |
|-------------------------|-----------------|----------------------|
| Análisis y Diseño | Analista, Product Owner | Fecha estimada |
| Desarrollo Modular | Equipo de desarrollo | Fecha estimada |
| Integración y Reportes | Analista, Product Owner | Fecha estimada |
| Pruebas y Ajustes Finales | Todo el equipo | Fecha estimada |
| Capacitación y Puesta en Producción | Todo el equipo | Fecha estimada |

---

## 7. Calendario del proyecto

El calendario organiza las actividades en el tiempo, asignando fechas de inicio y fin para cada fase o sprint. Permite visualizar el avance del proyecto y hacer seguimiento al cumplimiento de los plazos.

| **Periodo** | **Actividad** |
|-------------|---------------|
| Mes 1 | Inicio del Proyecto |
| Meses 2 - 3 | Sprint 1 |
| Meses 4 - 5 | Sprint 2 |
| Meses 6 - 7 | Sprint 3 |
| Meses 8 - 9 | Sprint 4 |
| Meses 10 - 11 | Sprint 5 |
| Mes 12 | Cierre del Proyecto |

---

## 8. Estimación de costos

La estimación de costos es fundamental para justificar la viabilidad del proyecto y gestionar el presupuesto. Se divide en tres categorías principales:

- **Gastos del producto:** Costos directos asociados a los recursos necesarios para el desarrollo (hardware, software, servicios, etc.).
- **Gastos de mano de obra:** Costos del personal que participa en el proyecto (desarrolladores, analistas, etc.).
- **Gastos imprevistos:** Un porcentaje adicional (usualmente 5-15%) para cubrir gastos no planeados.

### 8.1 Gastos del producto

| **Nombre del artículo** | **Descripción** | **Unidades** | **$/Unidad** | **Total** |
|--------------------------|-----------------|--------------|--------------|-----------|
| Editor de código | Software de desarrollo | 1 | $0 | $0 |
| Internet | Servicio de internet | 1 | $10.000 | $10.000 |
| Ofimática | Software de documentación | 1 | $0 | $0 |
| Repositorio | Servicios en la nube | 1 | $12.000 | $12.000 |
| Servidor local | Licencia de servidor | 1 | $0 | $0 |
| Energía | Servicio de energía | 1 | $10.000 | $10.000 |
| Diseño | Herramienta de diseño | 1 | $0 | $0 |
| Servidores en la nube | Firebase, hosting | 1 | $0 | $0 |
| Dominio web | Hostinger | 1 | $12.000 | $12.000 |
| Lugar de trabajo | Arriendo de espacio | 1 | $10.000 | $10.000 |
| Base de datos | MySQL | 1 | $0 | $0 |
| Visitas a la empresa | Transporte | 8 | $6.000 | $48.000 |
| **Gastos totales del producto** | | | | **$102.000** |

> Esta estimación puede ser bastante básica, considero que se puede mejorar.

### 8.2 Gastos de mano de obra

| **Nombre de la tarea** | **Descripción** | **Horas** | **$/Hora** | **Total** |
|------------------------|-----------------|-----------|------------|-----------|
| Desarrollo de software | Programación | 100 | $7.000 | $700.000 |

### 8.3 Gastos imprevistos

| **Concepto** | **Valor** |
|--------------|-----------|
| Gastos imprevistos (5-15%) | $1.500.000 |

---

## 9. Diagrama de Gantt

El **diagrama de Gantt** es una herramienta gráfica que permite planificar y visualizar el cronograma de un proyecto. Consiste en un gráfico de barras donde el eje horizontal representa el tiempo y el eje vertical las actividades o tareas.

### ¿Para qué sirve?

- **Visualizar la secuencia y duración de las tareas.**
- **Identificar dependencias entre actividades.**
- **Realizar seguimiento del avance del proyecto.**
- **Detectar posibles retrasos y tomar acciones correctivas.**

### Elementos de un diagrama de Gantt

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/GanttChartAnatomyES.svg/1920px-GanttChartAnatomyES.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo:GanttChartAnatomyES.svg*

- **Tareas:** Listado de actividades a realizar.
- **Duración:** Tiempo estimado para completar cada tarea (en días, semanas o meses).
- **Fechas de inicio y fin:** Marcadores temporales para cada tarea.
- **Hitos:** Puntos clave de avance (ej. finalización de una fase, entrega de un módulo).

### Ejemplo simplificado

| **Actividad** | **Duración (días)** | **Inicio estimado** | **Fin estimado** |
|---------------|---------------------|---------------------|------------------|
| Recolección de requerimientos | 30 | 25/08/2025 | 24/09/2025 |
| Diseño de flujos y casos de uso | 30 | 25/09/2025 | 24/10/2025 |
| Definición de arquitectura y módulos | 31 | 25/10/2025 | 24/11/2025 |
| Desarrollo módulo de pedidos | 30 | 25/11/2025 | 24/12/2025 |
| Desarrollo módulo de facturación | 31 | 25/12/2025 | 24/01/2026 |
| Desarrollo módulo de cuentas por cobrar | 30 | 25/01/2026 | 24/02/2026 |
| Desarrollo módulo de usuarios y seguridad | 27 | 25/02/2026 | 24/03/2026 |
| Desarrollo de módulo de reportes | 31 | 25/03/2026 | 24/04/2026 |
| Interfaz de usuario (Frontend) | 15 | 25/04/2026 | 09/05/2026 |
| Backend y lógica de negocio | 30 | 25/04/2026 | 24/05/2026 |
| Integración con sistemas existentes | 15 | 25/05/2026 | 09/06/2026 |
| Migración de datos clave | 15 | 10/06/2026 | 24/06/2026 |
| Pruebas funcionales e integración | 15 | 25/06/2026 | 09/07/2026 |
| Correcciones y ajustes finales | 15 | 10/07/2026 | 24/07/2026 |
| Capacitación a usuarios | 15 | 25/07/2026 | 09/08/2026 |
| Despliegue en entorno productivo | 15 | 10/08/2026 | 24/08/2026 |

---

## 10. Referencias

- [Scrum Guide](https://scrumguides.org/)
- [Diagrama de Gantt - Wikipedia](https://es.wikipedia.org/wiki/Diagrama_de_Gantt)

---

> Gracias por leer.