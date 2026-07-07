# Scrum en el Proyecto Formativo

Este documento recoge la aplicación del marco de trabajo **Scrum** durante el quinto trimestre, específicamente en el desarrollo del proyecto **OperPan** y la integración de los conocimientos adquiridos en Python, Django y ORM.

---

## Contexto y Cronología

El equipo de desarrollo (ClessLab) ha trabajado siguiendo los principios de Scrum, con sesiones semanales de seguimiento y entregas iterativas. A continuación se detallan los hitos principales:

| Fecha | Evento |
|-------|--------|
| **11 de junio** | Introducción a Scrum: explicación de roles, eventos y artefactos. Se establece la dinámica de trabajo y el tablero de tareas. |
| **18 de junio** | Primera integración de frontend y backend de OperPan. Se realiza un refinamiento del código y se verifican ajustes necesarios. |
| **25 de junio** | Revisión de módulos clave de OperPan: tareas, horarios, usuarios y otros componentes. La instructora (Scrum Master) evalúa el avance y se planifican mejoras. |
| **2 de julio** | Sustentación final del proyecto OperPan: exposición del análisis, la maquetación inicial y la implementación del backend funcional. |

---

## Roles Scrum

- **Scrum Master**: La instructora, encargada de facilitar el proceso, eliminar impedimentos y asegurar que se sigan las ceremonias.
- **Product Owner**: Nuestra interacción de proyecto formativo con una PYME.
- **Equipo de Desarrollo**: ClessLab (y los demás grupos), responsables de la implementación técnica y la auto-organización.

---

## Eventos Scrum Aplicados

1. **Sprint Planning**: Al inicio de cada iteración (aproximadamente cada semana) se definen los objetivos y tareas a realizar.
2. **Daily Scrum**: Reuniones breves para sincronizar el trabajo (en formato presencial o virtual).
3. **Sprint Review**: Presentación de los avances al Product Owner (instructora) para obtener retroalimentación.
4. **Sprint Retrospective**: Autoevaluación del equipo para identificar mejoras en la dinámica de trabajo.

---

## Artefactos y Herramientas

- **Product Backlog**: Lista completa de funcionalidades, tareas de documentación y análisis necesarias para el proyecto.
- **Sprint Backlog**: Selección de tareas priorizadas para cada sprint.
- **Incremento**: Entregable funcional al final de cada sprint, que suma valor al producto final.
- **Herramientas**: Jira (para el tablero de tareas y logs), GitHub (control de versiones) y Google Drive (documentación compartida).

---

## Tablero de Tareas (Taskboard)

El equipo utiliza un tablero con las columnas: **To Do**, **In Progress**, **Testing** y **Done**. A continuación se muestra un ejemplo de las historias de usuario gestionadas:

| Stories | To Do | In Progress | Testing | Done |
| :--- | :--- | :--- | :--- | :--- |
| **US-01: Autenticación**<br>Como usuario, quiero iniciar sesión de forma segura para acceder a mi cuenta privada. | | | | Crear base de datos de usuarios<br>Diseñar pantalla de Login<br>Configurar JWT |
| **US-02: Notificaciones**<br>Como usuario, quiero recibir alertas por email para no perderme actualizaciones clave. | | | Pruebas de integración con API de correo<br>Validar plantillas en diferentes clientes web | |
| **US-03: Panel de Control**<br>Como administrador, quiero ver métricas en un dashboard para analizar el uso del sistema. | | Desarrollar gráficos de barras (Frontend)<br>Crear endpoints de métricas (Backend) | | |
| **US-04: Recuperación de Clave**<br>Como usuario, quiero poder restablecer mi contraseña si la olvido para recuperar el acceso. | Diseñar flujo de UX para olvido de contraseña<br>Configurar token de recuperación de un solo uso | | | |
| **US-05: Modo Oscuro**<br>Como usuario, quiero tener un interruptor de tema oscuro para reducir la fatiga visual. | Definir paleta de colores oscuros | Implementar variables CSS | | |

---

*Nota: Las tareas marcadas como completadas en la columna "Done" es un ejemplo de las que se consideran finalizadas y listas para su integración en el incremento del sprint.*

### Ejemplo de Tareas de OperPan

- **Empleado - Asistencia** (EP-13)
- **Administrador - Subtítulos** (EP-4)
- **Administrador - Tareas** (EP-5)
- **Administrador - Reportes** (EP-6)
- **Administrador - Cuentas** (EP-8)

Estas tareas son un ejemplo de algunas que se organizaron en el tablero según su estado (Por hacer, En curso, En revisión, Listo) y se fueron completando a lo largo de los sprints.

---

## Relación con la Estructura de Archivos y el Aprendizaje

La organización del repositorio (`trimestre-5/`) refleja la evolución del conocimiento y su aplicación práctica:

- **`01-crear-componentes-frontend/`** y **`02-aprendizaje-bootstrap/`**: Maquetación inicial de interfaces (incluyendo las primera interfaz de OperPan v1 unicamente Frontend en donde hay un HTML por modulo.).
- **`02-codificar-el-software/`**: Desarrollo del backend con Python, POO, CRUD y Django.
- **`03-CRUD/`**: Implementación de operaciones CRUD (ejemplo básico y aplicado a OperPan y Python).
- **`04-POO/`**: Ejercicios de POO que luego se usaron para modelar las entidades de OperPan (Ejemplos con Objetos).
- **`05-Django/`** y **`06-ORM/`**: Adopción del framework y del mapeo objeto-relacional, aplicados directamente al proyecto.
- **`07-CRUD-hojas-de-hielo/`**: Proyecto de práctica que sirvió como ensayo para la integración final.
- **`08-dos-apps/`**: Ejercicio de modularidad que se replicó en la estructura respecto a la entidad Solicitud de OperPan.

El flujo fue claro: primero se aprendieron los conceptos teóricos (Python, POO, Django), luego se practicó con ejercicios guiados (CRUD básico, Hojas de Hielo) y finalmente se aplicó todo al proyecto formativo **OperPan**, siguiendo la metodología Scrum para gestionar el trabajo en equipo.

---

## Principios Scrum en Acción

- **Transparencia**: Se comunicaron abiertamente los avances y dificultades, tanto al equipo como a la instructora.
- **Inspección**: Las revisiones semanales permitieron detectar desviaciones y corregir rumbo a tiempo.
- **Adaptación**: Los sprints se ajustaron en función de la retroalimentación recibida, priorizando las funcionalidades más críticas.

---

## Conclusión

La combinación de Scrum con el aprendizaje técnico permitió un desarrollo organizado y eficiente de OperPan. El equipo adquirió no solo habilidades de programación, sino también competencias en gestión ágil, comunicación y trabajo colaborativo. Este enfoque será la base para los próximos trimestres y para la vida profesional.

---

*Documento actualizado: julio de 2026*