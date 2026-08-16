# Planeación de Actividades de Análisis

Este directorio reúne los materiales y apuntes sobre la planeación de análisis de software, metodologías de desarrollo, modelos de ciclo de vida y herramientas asociadas. El contenido está organizado en tres documentos principales que abordan desde los fundamentos de la ingeniería de software hasta la aplicación práctica de metodologías ágiles y tradicionales.

---

## Estructura del directorio

```
03-planeacion-de-actividades/
├── 01-planear-actividades-analisis.md   # Fundamentos de ingeniería de software, ciclos de vida, metodologías, planeación, DFD y herramientas
├── 02-planificacion-scrum.md           # Gestión de proyectos con Scrum: roles, eventos, artefactos y aplicación práctica
├── 03-modelos-ciclo-de-vida-software.md # Modelos de ciclo de vida: cascada, V, iterativo, incremental, espiral, prototipos
└── README.md                           # Este archivo
```

---

## Resumen de contenidos

### 1. Introducción a la ingeniería de software
La ingeniería de software es un proceso formal que utiliza métodos para analizar, diseñar, implementar y probar software, garantizando calidad y cumplimiento de objetivos. El software se compone de programas, datos y documentación.

### 2. Ciclo de vida del software
El ciclo de vida comprende las fases desde la concepción hasta el retiro del software. Sus funciones principales son ordenar las fases, establecer criterios de transición, definir entradas y salidas, y planificar actividades. Las fases típicas incluyen análisis, especificación, diseño, desarrollo, pruebas y mantenimiento.

### 3. Metodologías tradicionales
- **Cascada (Waterfall):** Proceso lineal y secuencial, con fases rígidas. Ideal para proyectos con requisitos estables. Genera buena documentación pero es inflexible ante cambios.
- **RUP (Rational Unified Process):** Proceso iterativo e incremental, basado en casos de uso y centrado en la arquitectura. Se divide en cuatro fases: incepción, elaboración, construcción y transición.

### 4. Metodologías ágiles
Surgen para adaptarse a cambios y priorizar la entrega de valor sobre la documentación exhaustiva. Se basan en el Manifiesto Ágil (2001) y sus 12 principios.
- **XP (eXtreme Programming):** Enfatiza la comunicación, simplicidad, retroalimentación y coraje. Prácticas como programación en parejas, TDD e integración continua.
- **RAD (Rapid Application Development):** Desarrollo rápido mediante iteraciones frecuentes y prototipos. Fomenta la reutilización de código y la participación del usuario.
- **Scrum:** Marco de trabajo ágil con roles (Product Owner, Scrum Master, Development Team), eventos (Sprint, Planning, Daily, Review, Retrospective) y artefactos (Product Backlog, Sprint Backlog, Incremento). Se detalla en el archivo [`02-planificacion-scrum.md`](./02-planificacion-scrum.md).

### 5. Modelos de ciclo de vida
Los modelos representan diferentes enfoques para organizar el desarrollo. Se describen en el archivo [`03-modelos-ciclo-de-vida-software.md`](./03-modelos-ciclo-de-vida-software.md) e incluyen:
- **Cascada:** Secuencial y rígido.
- **V:** Verificación y validación en cada fase.
- **Iterativo:** Ciclos repetitivos de mejora.
- **Incremental:** Entregas parciales y funcionales.
- **Espiral:** Combina cascada e iterativo con análisis de riesgos.
- **Prototipos:** Validación temprana con usuarios.

### 6. Planeación de proyectos de software
La planificación busca ordenar las tareas, asignar recursos y cumplir objetivos. Los elementos clave de un proyecto son: cliente, usuario, inicio, término, costo, tiempo, desempeño técnico y jefe de proyecto. Las estructuras organizacionales pueden ser funcional, matricial o proyectada. El Diagrama de Gantt es una herramienta visual para programar y dar seguimiento a las actividades.

### 7. Diagramas de Flujo de Datos (DFD)
Los DFD representan gráficamente el movimiento de datos en un sistema. Sus elementos son: entidades externas, procesos, almacenes de datos y flujos de datos. Se descomponen en niveles (0 a 4) y deben seguir reglas como nombrar procesos con verbos, evitar redes desconectadas y asegurar que cada proceso tenga al menos una entrada y una salida.

### 8. Herramientas para la gestión de proyectos
- **Jira:** Gestión ágil con tableros Scrum/Kanban, seguimiento de sprints y burndown charts.
- **Trello:** Tableros visuales con listas y tarjetas, ideal para equipos pequeños.
- **PSeInt:** Herramienta educativa para pseudocódigo en español, con editor, ejecución paso a paso y generación de diagramas de flujo.

### 9. Actividad práctica: Simulación Scrum
Se propone una simulación de Scrum con historias de usuario, tablero de tareas (To Do, In Progress, Testing, Done) y un ciclo de trabajo que incluye planificación, ejecución, testing y validación. Cada historia debe tener un checklist de tareas y evidencias (archivos .psc).

### 10. Glosario
Incluye definiciones de términos clave como Back-end, Base de Datos, Burndown Chart, DFD, Framework, Front-end, IDE, Incremento, Product Backlog, Scrum, Sprint, UML y User Story.

### 11. Referencias
- Manifiesto Ágil (agilemanifesto.org)
- Guía de Scrum con Jira (Atlassian)
- Trello (trello.com)

---

> Gracias por leer.