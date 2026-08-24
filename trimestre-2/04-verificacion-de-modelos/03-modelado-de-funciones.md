# Modelado de funciones

> Este documento explica los fundamentos del modelado de funciones, la importancia de los requisitos verificables, las reglas de negocio, el uso de herramientas como DRAW.IO y conceptos clave como SMART y refineria de requisitos con inteligencia artificial.

---

## Tabla de contenido

- [Introducción al modelado de funciones](#introducción-al-modelado-de-funciones)
- [Requisitos necesarios y verificables](#requisitos-necesarios-y-verificables)
- [Reglas de negocio](#reglas-de-negocio)
- [Refineria de requisitos con IA](#refineria-de-requisitos-con-ia)
- [Importancia de la documentación como soporte legal](#importancia-de-la-documentación-como-soporte-legal)
- [Criterios SMART: medible y testeable](#criterios-smart-medible-y-testeable)
- [Herramienta DRAW.IO para DFD](#herramienta-drawio-para-dfd)
- [Adaptabilidad y plataforma amigable](#adaptabilidad-y-plataforma-amigable)

---

## Introducción al modelado de funciones

El **modelado de funciones** es el proceso de definir, estructurar y documentar las funciones que un sistema de software debe realizar para cumplir con los requisitos del negocio. Su propósito es establecer un **lenguaje común** entre los stakeholders (clientes, usuarios, analistas y desarrolladores) y garantizar que el sistema entregue el valor esperado.

**¿Por qué es importante limitar el modelado?**

Limitar el alcance del modelado es fundamental para evitar el *scope creep* (expansión no controlada del alcance). Al establecer límites claros, se protege tanto al equipo de desarrollo como al cliente, asegurando que los esfuerzos se concentren en lo esencial y que los recursos (tiempo, dinero, personal) se utilicen de manera eficiente. Un modelado sin límites puede llevar a:

- Incremento de costos no planificados.
- Retrasos en la entrega.
- Insatisfacción del cliente.
- Pérdida de control sobre el proyecto.

---

## Requisitos necesarios y verificables

Un **requisito** es una condición o capacidad que debe poseer un sistema para satisfacer una necesidad del negocio. Para que un requisito sea útil, debe cumplir con dos características fundamentales:

1. **Necesario:** El requisito debe estar alineado con los objetivos del proyecto y aportar valor real al negocio. Si un requisito no es necesario, debe eliminarse o postergarse.

2. **Verificable:** El requisito debe poder ser comprobado mediante pruebas objetivas. Es decir, debe existir una manera de determinar si el sistema cumple o no con el requisito.

**Ejemplo:**

| **Tipo** | **Descripción** | **Verificable** |
|----------|-----------------|-----------------|
| Buen requisito | "El sistema debe permitir al usuario iniciar sesión con correo electrónico y contraseña." | Sí, se puede probar que el formulario de inicio de sesión funcione correctamente. |
| Mal requisito | "El sistema debe ser rápido." | No, "rápido" es subjetivo y no se puede medir objetivamente. |

---

## Reglas de negocio

Una **regla de negocio** es una declaración que define o restringe algún aspecto del funcionamiento de una organización. En el contexto de un sistema de software, las reglas de negocio son lineamientos que describen cómo deben comportarse los datos y las operaciones para asegurar que el sistema respete la lógica del negocio.

**Características de una regla de negocio:**

- Son específicas y claras.
- Son integradas en la estructura del sistema (validaciones, restricciones, flujos).
- Ayudan a mantener la integridad y consistencia de los datos.

**Ejemplo:**

> *"Un camión no puede salir con carga si no ocupa por lo menos el 80 por ciento de su capacidad."*

Esta regla implica que, al momento de registrar una salida, el sistema debe verificar que el nivel de carga sea mayor o igual al 80% antes de permitir el envío.

---

## Refineria de requisitos con IA

La **refinería** es el proceso de ajustar, mejorar y especificar con mayor precisión los requisitos de un sistema. Actúa como un **ingeniero de requisitos**, tomando una declaración vaga o imprecisa y transformándola en un requisito claro, medible y verificable.

**Ejemplo:**

**Requerimiento inicial:**
> *"El sistema debe mejorar la comunicación interna."*

**Refinamiento con IA (o con un analista):**
> *"El sistema debe proporcionar un módulo de mensajería instantánea que permita a los empleados enviar y recibir mensajes en tiempo real, con historial de conversaciones y notificaciones push."*

La refinería ayuda a eliminar ambigüedades y a asegurar que los requisitos sean comprensibles y accionables.

---

## Importancia de la documentación como soporte legal

La documentación en un proyecto de software no es solo una herramienta técnica, sino también un **soporte legal** que protege a ambas partes: al proveedor del servicio y al cliente.

**¿Por qué es importante?**

- **Define el alcance:** La documentación establece qué se va a entregar y qué no, evitando malentendidos.
- **Sirve como contrato:** Si el cliente solicita funcionalidades adicionales no documentadas, el proveedor puede argumentar que no están incluidas en el presupuesto inicial.
- **Protege contra reclamaciones:** Si se entrega exactamente lo documentado, el proveedor tiene un respaldo para demostrar que cumplió con lo acordado.

**Consecuencia de no documentar correctamente:**

- El cliente puede exigir más trabajo sin pago adicional.
- El proveedor puede perder dinero y tiempo.
- Ambas partes pueden tener expectativas diferentes que generen conflictos.

Por lo tanto, es fundamental documentar cada requisito, cada función y cada límite del proyecto.

---

## Criterios SMART: medible y testeable

El acrónimo **SMART** es una guía para definir requisitos y objetivos de manera efectiva:

| **Letra** | **Significado** | **Descripción** |
|-----------|-----------------|-----------------|
| **S** | Specific (Específico) | El requisito debe ser claro y concreto. |
| **M** | Measurable (Medible) | Debe poder cuantificarse o evaluarse objetivamente. |
| **A** | Achievable (Alcanzable) | Debe ser realista y posible de implementar. |
| **R** | Relevant (Relevante) | Debe estar alineado con los objetivos del negocio. |
| **T** | Time-bound (Con límite de tiempo) | Debe tener un plazo definido para su cumplimiento. |

**Ejemplo SMART:**

| **Requisito** | **Cumple SMART** |
|---------------|------------------|
| "El sistema debe generar un informe de ventas mensual en formato PDF con un tiempo de generación menor a 3 segundos." | Sí: específico, medible (3 segundos), alcanzable, relevante y con límite temporal (mensual). |

---

## Herramienta DRAW.IO para DFD

**DRAW.IO** (ahora conocido como **diagrams.net**) es una herramienta gratuita y en línea para la creación de diagramas, incluyendo **Diagramas de Flujo de Datos (DFD)**.

**¿Por qué usar DRAW.IO para DFD?**

- **Gratuita:** No requiere licencia ni instalación.
- **Colaborativa:** Permite trabajar en equipo en tiempo real.
- **Versátil:** Soporta múltiples tipos de diagramas UML, DFD, organigramas, etc.
- **Exportación:** Permite guardar en formatos PNG, SVG, PDF y otros.
- **Integración:** Se puede usar con Google Drive, OneDrive y otros servicios en la nube.

**Uso de DFD con DRAW.IO:**

1. Identificar las entidades externas (fuentes y destinos de datos).
2. Definir los procesos que transforman los datos.
3. Establecer los flujos de datos entre entidades, procesos y almacenes.
4. Documentar los almacenes de datos donde se guarda la información.

---

## Adaptabilidad y plataforma amigable

El modelado de funciones no solo se trata de definir procesos, sino también de considerar la **experiencia del usuario final**. Dos conceptos clave en este aspecto son:

- **Adaptabilidad:** El sistema debe ser capaz de ajustarse a diferentes contextos y necesidades de los usuarios. Por ejemplo, una interfaz que se adapta a diferentes dispositivos (responsive design) o que permite personalizar configuraciones.
- **Plataforma amigable:** El sistema debe ser intuitivo, fácil de usar y accesible para usuarios con diferentes niveles de conocimiento técnico. Una plataforma amigable reduce la curva de aprendizaje y mejora la productividad.

**¿Cómo se relaciona con el modelado de funciones?**

Durante el modelado, se deben considerar los siguientes aspectos:

- **Usabilidad:** ¿El flujo de trabajo es claro para el usuario?
- **Accesibilidad:** ¿El sistema es utilizable por personas con discapacidades?
- **Feedback:** ¿El sistema proporciona retroalimentación clara sobre las acciones del usuario?
- **Consistencia:** ¿Los elementos de la interfaz son coherentes en todo el sistema?

---

> Gracias por leer.