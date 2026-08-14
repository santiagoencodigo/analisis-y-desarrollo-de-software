# Modelos de ciclo de vida del software

> Este documento describe los principales modelos de ciclo de vida del software utilizados en la industria para la planificación, desarrollo y gestión de proyectos. Cada modelo ofrece un enfoque particular para organizar las fases del desarrollo, gestionar riesgos y adaptarse a los cambios.

---

## Tabla de contenido

- [Introducción](#introducción)
- [Modelo en cascada (Waterfall)](#modelo-en-cascada-waterfall)
- [Modelo en V](#modelo-en-v)
- [Modelo iterativo](#modelo-iterativo)
- [Modelo de desarrollo incremental](#modelo-de-desarrollo-incremental)
- [Modelo en espiral](#modelo-en-espiral)
- [Modelo de prototipos](#modelo-de-prototipos)
- [Modelo de desarrollo rápido de aplicaciones (RAD)](#modelo-de-desarrollo-rápido-de-aplicaciones-rad)
- [Comparativa de modelos](#comparativa-de-modelos)

---

## Introducción

Un **modelo de ciclo de vida del software** es una representación estructurada de las fases que sigue un proyecto de desarrollo, desde la concepción de la idea hasta la entrega y mantenimiento del producto. Cada modelo establece un orden, una secuencia y unos criterios de transición entre las etapas, lo que permite planificar, organizar y controlar el proceso de desarrollo.

La elección del modelo adecuado depende de factores como el tamaño del proyecto, la estabilidad de los requisitos, el nivel de riesgo, el presupuesto disponible y la relación con el cliente.

---

## Modelo en cascada (Waterfall)

El modelo en cascada es una metodología de gestión de proyectos de manera secuencial y lineal. Se refiere al flujo del proyecto en el que cada fase desciende en cascada, implicando que cada fase se cumpla antes de seguir a la otra, y que la planificación de cada una debe ser detallada.

**Características principales:**

- Proceso lineal y secuencial.
- Cada fase debe completarse antes de iniciar la siguiente.
- Documentación exhaustiva en cada etapa.
- Poca flexibilidad para realizar cambios durante el proyecto.

**Ventajas:**

- Permite planificar con precisión.
- Fácil de entender y gestionar.
- Ideal para proyectos con requisitos estables y bien definidos.

**Desventajas:**

- Poca flexibilidad y falta de adaptabilidad a cambios.
- Los errores se detectan tarde en el ciclo.
- No es adecuado para proyectos complejos o con requisitos cambiantes.

**Empresas que lo utilizan:** Proyectos gubernamentales, sistemas críticos donde los requisitos son fijos.

[Modelo en cascada - Wikipedia](https://es.wikipedia.org/wiki/Modelo_en_cascada)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Modelo_de_desarrollo_en_cascada_-es.svg/960px-Modelo_de_desarrollo_en_cascada_-es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Desarrollo_en_cascada*

---

## Modelo en V

El modelo en V es una metodología de desarrollo de software donde se divide el ciclo de vida del desarrollo en fases, cada una de las cuales está asociada a una fase de prueba correspondiente. Su nombre proviene de la forma en que se representan gráficamente las etapas de desarrollo y verificación.

**Características principales:**

- Cada fase de desarrollo tiene una fase de prueba paralela.
- Énfasis en la verificación y validación continua.
- Relación directa entre desarrollo y pruebas.

**Ventajas:**

- Detección temprana de errores.
- Mayor control de calidad.
- Claridad en los criterios de aceptación.

**Desventajas:**

- Poca flexibilidad ante cambios.
- Puede ser más costoso que otros modelos.

**Empresas que lo utilizan:** Siemens AG, proyectos de ingeniería y sistemas críticos.

---

## Modelo iterativo

El modelo iterativo está enfocado en mejorar continuamente el producto. Lo que se usa aquí es producir un prototipo, probarlo, modificarlo y repetir el ciclo, todo con el objetivo de acercarse a una solución. Cada iteración se convierte en el punto de partida de otra.

**Características principales:**

- Ciclos repetitivos de desarrollo y mejora.
- Retroalimentación continua del cliente.
- Progreso gradual hacia el resultado deseado.

**Ventajas:**

- Mejora gradual del producto en cada ciclo.
- Permite incorporar cambios y ajustes.
- Reduce riesgos al entregar versiones parciales funcionales.

**Desventajas:**

- Puede ser desgastante realizar el ciclo completo muchas veces.
- Requiere una buena gestión de cambios.

**Empresas que lo utilizan:** Microsoft, Apple (actualizaciones continuas con nuevas funciones, menos problemas de edición).

[Método iterativo - Wikipedia](https://es.wikipedia.org/wiki/Desarrollo_iterativo)

---

## Modelo de desarrollo incremental

El modelo de desarrollo incremental se enfoca en entregar software operativo de forma rápida pero válida. Cada requisito del proyecto tiene una prioridad asignada, en la cual se entrega según el orden de incremento correspondiente.

**Características principales:**

- Entregas parciales y funcionales del producto.
- Priorización de requisitos.
- El cliente recibe funcionalidades precisas incluso si el software está en una versión incompleta.

**Ventajas:**

- Entrega temprana de funcionalidades básicas.
- Permite ajustes en cada incremento.
- Reduce el tiempo de salida al mercado.

**Desventajas:**

- Requiere una arquitectura bien definida desde el inicio.
- Puede generar deuda técnica si no se planifica adecuadamente.

**Empresas que lo utilizan:** WhatsApp, Microsoft Office (actualizaciones incrementales).

---

## Modelo en espiral

El modelo en espiral une cascada e iterativo. Este modelo se entiende como tareas iterativas donde las fases no se realizan de una forma única paso a paso, sino varias veces en forma de espiral. Es una repetición cíclica donde el proyecto se va acercando al objetivo y se minimizan los riesgos de fracaso gracias a los controles regulares.

**Fases del modelo en espiral:**

1. **Definir objetivos y alternativas:** Se valoran los objetivos a vincular (ej. mejora de rendimiento) y se definen alternativas (diseño A vs diseño B).
2. **Evaluar alternativas y riesgos:** Se identifican los posibles riesgos del proyecto y se eligen estrategias que presenten menos riesgo y sean rentables.
3. **Desarrollo y revisión:** Se ofrece una estrategia evolutiva con más precisión. El código real se escribe y se prueba varias veces hasta alcanzar el resultado deseado.
4. **Planificación:** Al concluir el ciclo, se planifica el siguiente. Si un objetivo no se cumple, se define el siguiente objetivo y se encuentran soluciones.

**Ventajas:**

- Reducción de riesgos al identificarlos y mitigarlos en cada iteración.
- Mayor flexibilidad para adaptarse a cambios en los requisitos.
- Entrega temprana de software funcional.
- Mayor participación del cliente a través de la retroalimentación continua.

**Desventajas:**

- Requiere experiencia en gestión de riesgos y en la metodología espiral.
- Puede ser más costoso que otros modelos, especialmente para proyectos pequeños.
- La gestión del tiempo puede ser compleja, ya que la duración del proyecto puede variar.
- No es adecuado para proyectos con requisitos muy bien definidos desde el principio.

---

## Modelo de prototipos

El modelo de prototipos utiliza una versión reducida del modelo final, con un conjunto de datos más pequeño y menos características. Se utiliza para probar rápidamente la funcionalidad y el rendimiento fundamentales del modelo y detectar problemas que deben resolverse antes de completar el diseño.

**Características principales:**

- Construcción de versiones preliminares (prototipos).
- Validación temprana con el usuario.
- Iteración hasta alcanzar los requisitos deseados.

**Ventajas:**

- Alta participación del usuario.
- Mejora la comprensión de los requisitos.
- Reduce malentendidos y errores de diseño.

**Desventajas:**

- Puede generar expectativas de que el prototipo es el producto final.
- Puede retrasar el desarrollo si se hacen muchos cambios.

**Empresas que lo utilizan:** Rappi, Nubank, Facebook (pruebas A/B y prototipos de nuevas funcionalidades).

---

## Modelo de desarrollo rápido de aplicaciones (RAD)

El modelo de desarrollo rápido de aplicaciones (RAD) es una metodología de desarrollo de software ágil que se centra en la realización de iteraciones frecuentes y realimentación constante, inventado por James Martin en 1991.

**Características principales:**

- Mayor flexibilidad y adaptabilidad.
- Iteraciones rápidas que reducen el tiempo de desarrollo.
- Se fomenta la reutilización de código.
- Mejor gestión del riesgo.

**Fases de RAD:**

| **Fase** | **Descripción** |
|----------|-----------------|
| **Definición de requisitos** | Las partes interesadas definen objetivos, expectativas, plazos y presupuesto. |
| **Construcción de prototipos** | Se construyen, validan y mejoran prototipos con los usuarios. |
| **Transformación** | Los prototipos son transformados en modelos funcionales. |
| **Pruebas** | Pruebas exhaustivas para garantizar el funcionamiento. |
| **Lanzamiento** | Actividades de lanzamiento, carga de datos y entrenamiento. |

**Ventajas:**

- Reduce significativamente los tiempos de desarrollo.
- Alta participación del usuario.
- Permite ajustes rápidos.

**Desventajas:**

- Requiere equipos altamente capacitados.
- No es adecuado para proyectos con requisitos muy estrictos o de alta complejidad técnica.

---

## Comparativa de modelos

| **Modelo** | **Enfoque** | **Flexibilidad** | **Riesgo** | **Participación del cliente** | **Mejor para** |
|------------|-------------|------------------|------------|-------------------------------|----------------|
| **Cascada** | Secuencial | Baja | Bajo | Baja | Requisitos fijos y estables |
| **V** | Verificación | Baja | Bajo | Baja | Sistemas críticos |
| **Iterativo** | Repetición | Media | Medio | Media | Proyectos con cambios graduales |
| **Incremental** | Entregas parciales | Alta | Medio | Alta | Productos con entregas tempranas |
| **Espiral** | Riesgo | Alta | Muy bajo | Alta | Proyectos grandes y complejos |
| **Prototipos** | Validación temprana | Alta | Bajo | Muy alta | Requisitos poco claros |
| **RAD** | Rapidez | Muy alta | Medio | Muy alta | Proyectos con plazos ajustados |

---

> Gracias por leer.