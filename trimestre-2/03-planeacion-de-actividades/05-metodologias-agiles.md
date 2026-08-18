# Metodologías ágiles

> Las metodologías ágiles son un conjunto de enfoques para el desarrollo de software que priorizan la entrega rápida de valor, la colaboración con el cliente y la adaptabilidad al cambio, en contraste con los procesos rígidos y documentación extensiva de las metodologías tradicionales.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ilustracion-tabla-kanban-gestion-agil-scrum.jpg/500px-Ilustracion-tabla-kanban-gestion-agil-scrum.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Manifiesto_%C3%A1gil*

---

## Tabla de contenido

- [1. Introducción a las metodologías ágiles](#1-introducción-a-las-metodologías-ágiles)
- [2. Manifiesto Ágil y sus principios](#2-manifiesto-ágil-y-sus-principios)
  - [2.1 Los cuatro valores del Manifiesto Ágil](#21-los-cuatro-valores-del-manifiesto-ágil)
  - [2.2 Los 12 principios ágiles](#22-los-12-principios-ágiles)
- [3. Programación Extrema (XP)](#3-programación-extrema-xp)
  - [3.1 Valores de XP](#31-valores-de-xp)
  - [3.2 Prácticas de XP](#32-prácticas-de-xp)
  - [3.3 Roles de XP](#33-roles-de-xp)
- [4. Desarrollo Rápido de Aplicaciones (RAD)](#4-desarrollo-rápido-de-aplicaciones-rad)
  - [4.1 Características de RAD](#41-características-de-rad)
  - [4.2 Fases de RAD](#42-fases-de-rad)
  - [4.3 Roles de RAD](#43-roles-de-rad)
- [5. Scrum](#5-scrum)
  - [5.1 Pilares de Scrum](#51-pilares-de-scrum)
  - [5.2 Roles de Scrum](#52-roles-de-scrum)
  - [5.3 Eventos de Scrum](#53-eventos-de-scrum)
  - [5.4 Artefactos de Scrum](#54-artefactos-de-scrum)
  - [5.5 Flujo de trabajo Scrum](#55-flujo-de-trabajo-scrum)
- [6. Design Thinking](#6-design-thinking)
- [7. Comparativa y selección de metodología](#7-comparativa-y-selección-de-metodología)
- [8. Referencias](#8-referencias)

---

## 1. Introducción a las metodologías ágiles

Las metodologías ágiles surgen como una alternativa a los enfoques tradicionales (como la cascada o RUP) para abordar proyectos donde los requisitos no son completamente conocidos desde el inicio o donde el entorno es volátil y requiere adaptación constante. Se basan en la premisa de que el cambio es inevitable y debe ser abrazado, no combatido.

El **Manifiesto Ágil** (2001) sentó las bases de estos enfoques, estableciendo que la interacción con el cliente, el software funcional y la respuesta al cambio son más valiosos que la documentación exhaustiva y los planes rígidos.

> Recomiendo la lectura: https://www.atlassian.com/es/agile/manifesto



---

## 2. Manifiesto Ágil y sus principios

### 2.1 Los cuatro valores del Manifiesto Ágil

1. **Individuos e interacciones** sobre procesos y herramientas.
2. **Software funcionando** sobre documentación extensiva.
3. **Colaboración con el cliente** sobre negociación contractual.
4. **Respuesta ante el cambio** sobre seguir un plan.

### 2.2 Los 12 principios ágiles

1. Satisfacer al cliente mediante la entrega temprana y continua de software valioso.
2. Aceptar requisitos cambiantes, incluso en etapas tardías del desarrollo.
3. Entregar software funcional con frecuencia (semanas o meses).
4. Personas de negocio y desarrolladores deben trabajar juntos diariamente.
5. Construir proyectos en torno a individuos motivados y darles el entorno y apoyo necesario.
6. La conversación cara a cara es el método más eficiente de comunicación.
7. El software funcional es la principal medida de progreso.
8. Promover un ritmo de trabajo sostenible.
9. La atención continua a la excelencia técnica y al buen diseño mejora la agilidad.
10. La simplicidad es esencial.
11. Las mejores arquitecturas, requisitos y diseños emergen de equipos autoorganizados.
12. El equipo reflexiona periódicamente sobre cómo ser más efectivo y ajusta su comportamiento.

---

## 3. Programación Extrema (XP)

**XP** (eXtreme Programming) es un marco de desarrollo ágil enfocado en producir software de alta calidad en entornos con requisitos cambiantes, equipos pequeños y riesgos asociados a tecnologías nuevas o plazos fijos.

* Recomiendo la lectura: https://www.godaddy.com/resources/latam/tecnologia/metodologia-xp-extreme-programming-que-es

### 3.1 Valores de XP

| **Valor** | **Descripción** |
|-----------|-----------------|
| **Comunicación** | Fomentar la comunicación constante entre todos los miembros del equipo. |
| **Simplicidad** | Hacer lo más simple que funcione, evitando complejidades innecesarias. |
| **Retroalimentación** | Obtener retroalimentación continua del cliente y del equipo para corregir el rumbo. |
| **Coraje** | Tomar decisiones difíciles y enfrentar los problemas de frente. |
| **Respeto** | Respetar a los miembros del equipo y sus contribuciones. |

### 3.2 Prácticas de XP

- **Programación en parejas (Pair Programming):** Dos desarrolladores trabajan juntos en la misma estación de trabajo.
- **Desarrollo guiado por pruebas (TDD):** Escribir las pruebas antes del código.
- **Integración continua:** Integrar y probar el código varias veces al día.
- **Refactorización:** Mejorar el diseño del código sin cambiar su comportamiento.
- **Propiedad colectiva del código:** Cualquier miembro puede modificar cualquier parte del código.
- **Cliente integrado:** El cliente forma parte del equipo y define prioridades.
- **Estándares de codificación:** Reglas de estilo y formato compartidas.

### 3.3 Roles de XP

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Cliente** | Define prioridades y necesidades del negocio. |
| **Programador** | Transforma requisitos en código funcional. |
| **Tester** | Realiza pruebas para garantizar la calidad. |
| **Coach** | Asesora al equipo y guía el proceso. |
| **Manager** | Coordina recursos, planifica y gestiona la comunicación externa. |

---

## 4. Desarrollo Rápido de Aplicaciones (RAD)

RAD es una metodología ágil creada por James Martin en 1991, centrada en iteraciones frecuentes, retroalimentación constante y reducción de tiempos de desarrollo.

* Recomiendo la lectura: https://www.ibm.com/mx-es/think/topics/rapid-application-development

### 4.1 Características de RAD

- Alta flexibilidad y adaptabilidad a cambios.
- Iteraciones rápidas que aceleran la entrega.
- Fomento de la reutilización de código.
- Mejor gestión de riesgos mediante la participación activa de los stakeholders.

### 4.2 Fases de RAD

| **Fase** | **Descripción** |
|----------|-----------------|
| **Definición de requisitos** | Los stakeholders definen objetivos, expectativas, plazos y presupuesto. |
| **Construcción de prototipos** | Se construyen, validan y mejoran prototipos con los usuarios. |
| **Transformación** | Los prototipos aprobados se convierten en modelos funcionales. |
| **Pruebas** | Se realizan pruebas exhaustivas para garantizar el funcionamiento. |
| **Lanzamiento** | Actividades de puesta en producción, carga de datos y entrenamiento. |

### 4.3 Roles de RAD

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Facilitador** | Asegura los objetivos, organiza workshops y resuelve conflictos. |
| **Escriba** | Documenta todas las salidas de los workshops. |
| **Equipo SWAT** | Diseña y construye el sistema. |
| **Administrador del modelo** | Coordina las arquitecturas y modelos. |
| **Administrador de bases de datos** | Gestiona rendimiento, integridad y seguridad de datos. |
| **Equipo de planificación** | Define requerimientos y alcance. |
| **Equipo de diseño de usuario** | Describe funciones de negocio y procesos afectados. |
| **Equipo de soporte de construcción** | Asegura que las necesidades del usuario sean cumplidas. |
| **Equipo de transición** | Prepara y despliega el sistema en producción. |

---

## 5. Scrum

Scrum es uno de los marcos ágiles más utilizados en la industria. Se fundamenta en los valores y principios ágiles, y se organiza en torno a tres pilares, roles, eventos y artefactos.

Recomiendo las lecturas:
- https://www.atlassian.com/es/agile/scrum
- https://aws.amazon.com/es/what-is/scrum/

### 5.1 Pilares de Scrum

| **Pilar** | **Descripción** |
|-----------|-----------------|
| **Transparencia** | Todos los aspectos del proceso son visibles para quienes participan. |
| **Inspección** | Los avances y artefactos se inspeccionan frecuentemente. |
| **Adaptación** | Si se detectan desviaciones, el proceso se ajusta rápidamente. |

### 5.2 Roles de Scrum

| **Rol** | **Responsabilidad** |
|---------|---------------------|
| **Product Owner** | Representa al cliente, prioriza el Product Backlog y maximiza el valor entregado. |
| **Scrum Master** | Facilita el proceso, elimina impedimentos y asegura la correcta aplicación de Scrum. |
| **Equipo de desarrollo** | Transforma los requisitos en software funcional; es autoorganizado y multidisciplinario. |
| **Stakeholders** | Personas interesadas en el proyecto (directivos, marketing, etc.). |

### 5.3 Eventos de Scrum

| **Evento** | **Descripción** |
|------------|-----------------|
| **Sprint** | Contenedor de un mes o menos donde se crea un incremento "Terminado". |
| **Sprint Planning** | Reunión para acordar el alcance del Sprint y el plan para alcanzarlo. |
| **Daily Scrum** | Reunión diaria de 15 minutos para sincronizar actividades y detectar impedimentos. |
| **Sprint Review** | Revisión del incremento con los stakeholders para obtener retroalimentación. |
| **Sprint Retrospective** | Reflexión del equipo sobre el proceso para identificar mejoras. |

### 5.4 Artefactos de Scrum

| **Artefacto** | **Descripción** |
|---------------|-----------------|
| **Product Backlog** | Lista priorizada de todo el trabajo por hacer (requerimientos, casos de uso, tareas). |
| **Sprint Backlog** | Conjunto de elementos del Product Backlog seleccionados para el Sprint, más el plan para entregarlos. |
| **Incremento** | Suma de todos los elementos terminados en el Sprint y los anteriores; es un producto potencialmente desplegable. |
| **Burndown Chart** | Gráfico que muestra el trabajo pendiente vs. el tiempo disponible durante un Sprint. |
| **Scrumboard** | Tablero visual con columnas (To Do, In Progress, Testing, Done) que muestra el estado de las tareas. |

### 5.5 Flujo de trabajo Scrum

1. **Planificación del Sprint:** El equipo selecciona los elementos del Product Backlog para el Sprint.
2. **Ejecución del Sprint:** Los miembros desarrollan las tareas según el plan.
3. **Daily Scrum:** Sincronización diaria.
4. **Sprint Review:** Demostración del incremento.
5. **Sprint Retrospective:** Mejora continua.

---

## 6. Design Thinking

**Design Thinking** es una metodología centrada en el ser humano que se utiliza para resolver problemas complejos y fomentar la innovación. Aunque no es una metodología de desarrollo de software per se, se aplica en la fase de definición de requisitos y diseño de experiencias.

Recomiendo la lectura: https://asana.com/es/resources/design-thinking-process

**Fases del Design Thinking:**

| **Fase** | **Descripción** |
|----------|-----------------|
| **Empatizar** | Comprender las necesidades del usuario a través de observación e inmersión. |
| **Definir** | Sintetizar la información para definir el problema central. |
| **Idear** | Generar múltiples soluciones creativas. |
| **Prototipar** | Construir prototipos rápidos y económicos para probar ideas. |
| **Testear** | Probar los prototipos con usuarios y obtener retroalimentación para iterar. |

Design Thinking es complementario a los marcos ágiles, ya que ayuda a asegurar que el producto realmente resuelve las necesidades del usuario.

Buscando sobre el tema me sorprendio la verdad encontrar dominios con ese nombre el cual comercializan al estilo saas... Como una IA para esta metodología: https://designthinking.es/

> Interesante mirar esta página.

<img src="https://www.fundacionaquae.org/wp-content/uploads/2017/01/DESIGNTHINKING.jpg.webp">

*Imagen Tomada De: https://www.fundacionaquae.org/wiki/que-es-el-design-thinking/*

---

## 7. Comparativa y selección de metodología

La elección de una metodología depende de las características del proyecto. La siguiente tabla resume los criterios clave:

| **Factor** | **Agile** | **Waterfall** |
|------------|-----------|---------------|
| Tamaño y complejidad | Pequeño, poco complejo | Grande o complejo |
| Disponibilidad del cliente | Muy disponible | Poco disponible |
| Integración con otros sistemas | Simple o no necesario | Varios y complejos |
| Tolerancia al cambio | Flexible | Fijo o difícil de modificar |
| Velocidad de salida al mercado | Rápida aunque tenga límites de alcance | Lenta pero controlada |

En el contexto de proyectos de software actuales, las metodologías ágiles (especialmente Scrum y XP) son las más recomendadas por su capacidad de adaptación, entrega temprana de valor y participación activa del cliente.

---

> Gracias por leer.