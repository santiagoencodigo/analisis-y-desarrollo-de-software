# Elicitación de Requisitos

**Análisis y desarrollo de software**  

**Actividad:** Técnicas de elicitación de requisitos   

**Fechas:** 21 de mayo de 2025, 1 de julio de 2025

---

## Tabla de contenido

1. [Introducción a la especificación de requisitos](#introducción-a-la-especificación-de-requisitos)
2. [Fuentes de la información](#fuentes-de-la-información)
3. [Técnicas de recolección de datos](#técnicas-de-recolección-de-datos)
   - [Preguntas cerradas y abiertas](#preguntas-cerradas-y-abiertas)
   - [Entrevista](#entrevista)
   - [Encuesta y cuestionario](#encuesta-y-cuestionario)
   - [Taller de trabajo (Workshop)](#taller-de-trabajo-workshop)
   - [Observación](#observación)
   - [Prototipos](#prototipos)
   - [Historias de usuario](#historias-de-usuario)
4. [Requerimientos funcionales y no funcionales](#requerimientos-funcionales-y-no-funcionales)
5. [Roles en el desarrollo de software](#roles-en-el-desarrollo-de-software)
6. [Diagramas de flujo de datos (DFD)](#diagramas-de-flujo-de-datos-dfd)
   - [Notación Yourdon‑Coad](#notación-yourdoncoad)
   - [Notación Gane‑Sarson](#notación-ganesarson)
   - [Ejercicios de DFD](#ejercicios-de-dfd)
7. [Ejemplo de proyecto sencillo: Panadería Estación Paisa](#ejemplo-de-proyecto-sencillo-panadería-estación-paisa)
8. [UML (Unified Modeling Language)](#uml-unified-modeling-language)

---

## Introducción a la especificación de requisitos

La **especificación de requisitos del software** es la base fundamental de todo proyecto de desarrollo. El mundo empresarial se basa en la resolución de problemas, por lo que en el desarrollo de software es necesario definir un **objeto de estudio** para plantear qué se va a hacer y delimitar los tiempos estimados y costos.

Para resolver un problema, se debe buscar realmente qué es lo que se espera que solucione. Por ende, se debe hacer un **levantamiento de información** por medio de técnicas de recolección de datos.

---

## Fuentes de la información

Es importante saber de dónde proviene la información:

- **Fuente primaria:** Información obtenida directamente de la persona involucrada.  
  *Ejemplo: Cuando alguien da su opinión de lo que observa.*

- **Fuente secundaria:** Información que llega por medio de otra persona.  
  *Ejemplo: Cuando se presenta una situación y la información llega a través de una anécdota.*

- **Fuente terciaria:** Información que se conoce a partir de dos o más personas.  
  *Ejemplo: Cuando se requieren varias opiniones o puntos de vista de diferentes personas.*

---

## Técnicas de recolección de datos

Las técnicas de recolección de datos son la base principal del proyecto. Existen múltiples técnicas que permiten obtener información desde las fuentes primarias —siendo el cliente quien ofrece la información más confiable y real—. Si se obtiene una buena recolección de datos, el proyecto tendrá una base sólida para su construcción.

### Preguntas cerradas y abiertas

- **Preguntas cerradas:** Son aquellas que ofrecen opciones de respuesta limitadas y predefinidas (por ejemplo, sí/no, opción múltiple, escala de valoración). Facilitan el análisis cuantitativo y la tabulación de datos.  
  *Ejemplo: ¿Cuál nivel de impacto en el mercado tiene su empresa? A. 20% B. 30% C. 40% D. +50%*

- **Preguntas abiertas:** Permiten al encuestado responder con sus propias palabras, sin restricciones. Son útiles para explorar opiniones, experiencias y razones de fondo, pero su análisis es más complejo.

---

### Entrevista

Es una conversación dirigida entre dos o más personas donde una (el entrevistador) formula preguntas para obtener información o opiniones del otro (el entrevistado) sobre un tema específico. Las entrevistas suelen tener lugar cara a cara y en persona, pero las partes pueden estar separadas geográficamente como en las videoconferencias o entrevistas telefónicas. Las entrevistas casi siempre involucran conversaciones habladas entre dos o más partes.

#### Requisitos

El formato tradicional de entrevista de dos personas, llamado entrevista individual, permite preguntas directas y seguimientos, lo que permite al entrevistador medir mejor la precisión y relevancia de las respuestas.

La entrevista cara a cara ayuda a ambas partes a interactuar, formar una conexión y comprender al otro, haciendo que este método sea el más agradable para extraer información.

Las entrevistas pueden ser:

- **Conversaciones no estructuradas**: libres y abiertas sin un plan determinado o preguntas preestablecidas.
- **Entrevista no estructurada**: entrevista focalizada donde el entrevistador guía consciente y consistentemente la conversación para que las respuestas del entrevistado no se desvíen del tema principal.
- **Conversaciones estructuradas**: surgen preguntas específicas en un orden específico.
- **Entrevistas en escalera**: las respuestas de un encuestado suelen guiar las entrevistas posteriores con el objetivo de explorar los motivos subconscientes del encuestado.

Por lo general, el entrevistador tiene alguna forma de registrar la información que se obtiene del entrevistado, a menudo tomando lápiz y papel, o con una grabadora de video o audio. Las entrevistas suelen tener una duración limitada con un principio y un final.

#### Ventajas

- **Interpersonales**: se puede desarrollar una idea entre dos o más personas.
- **Flexibles**: el entrevistador puede adaptar las preguntas según las respuestas del entrevistado y explorar temas inesperados o aclarar dudas en el momento.
- **Permiten activar diferentes canales**: el entrevistador puede escuchar u observar las problemáticas en el momento.
- **Observación directa**: posibilitan observar el lenguaje corporal, expresiones faciales y otros aspectos no verbales.
- **Alto nivel de participación**: generalmente, los entrevistados se sienten escuchados y se involucran más, lo que puede enriquecer la información.
- **Clarificación inmediata**: si una respuesta no es clara, el entrevistador puede pedir aclaraciones o ejemplos en el momento.

#### Desventajas

- **Tiempo y recursos**: son costosas en términos de tiempo y personal. Preparar, realizar, transcribir y analizar entrevistas puede llevar mucho tiempo.
- **Subjetividad**: las respuestas pueden estar influenciadas por la relación entrevistador-entrevistado o por sesgos personales.
- **Posible falta de sinceridad**: algunas personas pueden no responder con honestidad por vergüenza, miedo o deseo de complacer.
- **Difícil generalización**: los resultados suelen basarse en muestras pequeñas, lo que limita la posibilidad de generalizar a una población más amplia.

#### ¿En qué situaciones es más efectiva?

Una entrevista es más efectiva cuando se utiliza donde se necesita recopilar información de forma flexible, dinámica y en profundidad. Es especialmente útil en investigaciones cualitativas, procesos de selección de personal, diagnósticos organizacionales o cuando se requiere conocer el impacto de una política o programa. La entrevista es ideal para interpretar matices y significados.

#### Ejemplos

**Ejemplo 1: Situación cotidiana**  
Entrevista individual, cara a cara, realizada a un estudiante sobre el uso de redes sociales.

> **Entrevistador:** ¿Con qué frecuencia usas redes sociales?  
> **Entrevistado:** Todos los días, al menos tres horas.  
> **Entrevistador:** ¿Crees que te afecta en tus estudios?  
> **Entrevistado:** Sí, a veces me distraigo mucho y dejo de hacer tareas.  
> **Entrevistador:** ¿Has intentado reducir el uso?  
> **Entrevistado:** Sí, pero no me ha funcionado por ahora.  
> **Entrevistador:** ¿Cómo te hace sentir compararte con otros en redes?  
> **Entrevistado:** A veces mal, porque uno ve solo lo bueno de los demás.

**Ejemplo 2: Desarrollo de software**  
Un equipo de desarrolladores quiere crear una aplicación de gestión de tareas enfocada en profesionales freelance. Antes de diseñar la app, realizan entrevistas en profundidad con distintos freelancers (diseñadores, programadores, redactores, etc.) para entender cómo organizan su trabajo, qué herramientas usan actualmente, qué problemas enfrentan y qué funciones valoran más.

Durante las entrevistas, descubren que muchos freelancers se sienten abrumados por las herramientas existentes porque son muy complejas o están pensadas para equipos grandes. También mencionan que valoran mucho la posibilidad de visualizar tareas por proyecto y recibir recordatorios simples sin notificaciones invasivas.

Gracias a esta información, el equipo decide enfocar la aplicación en la simplicidad, con una interfaz clara, gestión por proyectos y recordatorios configurables, lo que hace que la app se ajuste mejor a las necesidades reales de los usuarios.

---

### Encuesta y cuestionario

Una **encuesta** es una técnica de recolección de datos que consiste en formular preguntas a personas para obtener información. Se utiliza generalmente cuando se necesita recopilar datos de muchas personas de forma estructurada y rápida. Existen dos tipos de encuestas:

- **Encuestas descriptivas**: documentan las actitudes o condiciones presentes. Intentan describir en qué situación se encuentra una determinada población en el momento que se realiza la encuesta.
- **Encuestas analíticas**: buscan, además de describir, explicar los porqués de una determinada situación. En este tipo de encuestas, las hipótesis respaldan la idea.

Un **cuestionario** es una herramienta de investigación que consiste en una serie de preguntas e indicaciones con el propósito de obtener información de los consultados. Aunque a menudo están diseñados para poder realizar análisis estadísticos, normalmente se utiliza como un instrumento físico o digital que contiene las preguntas de la encuesta, bien redactadas de forma coherente, organizadas y estructuradas con el fin de ofrecer toda la información necesaria.

#### ¿En qué situaciones es más efectiva?

- **Encuesta**: es más efectiva cuando se busca recolectar datos cuantitativos de un gran número de personas, con el fin de obtener resultados estadísticos que puedan generalizarse a una población. Es ideal para estudios de opinión pública, investigaciones de mercado, censos o cualquier situación donde se requiera medir tendencias, porcentajes o frecuencias de forma rápida y estandarizada.

- **Cuestionario**: es más efectivo cuando se desea profundizar en el conocimiento, actitudes o percepciones de los participantes. Puede contener tanto preguntas abiertas como cerradas y se utiliza comúnmente en investigaciones educativas, diagnósticos psicológicos, evaluaciones personales o estudios cualitativos. Es útil cuando el objetivo es comprender con mayor detalle los procesos internos, las opiniones o las experiencias de un grupo específico.

#### Requisitos de la encuesta

- **Objetivo definido**: ¿Qué quieres saber o investigar? Debe haber una pregunta principal que guíe la encuesta.
- **Población y muestra**: define a quién va dirigida (edad, sexo, ocupación, ubicación, etc.). Si no puedes encuestar a toda la población, define una muestra representativa.
- **Confidencialidad y consentimiento**: informar a los encuestados si sus respuestas serán anónimas o confidenciales. Incluir un consentimiento informado (especialmente si es investigación académica o institucional).
- **Diseño del instrumento (cuestionario)**: redacción clara, sin ambigüedades. Orden lógico de las preguntas (de lo general a lo específico).

#### Requisitos del cuestionario

- **Preguntas claras y concisas**: evitar tecnicismos o lenguaje ambiguo. Redactar preguntas de forma directa.
- **Tipos de preguntas**: 
  - *Cerradas*: opciones definidas (sí/no, múltiple opción, escala Likert).
  - *Abiertas*: permiten respuestas libres. Es importante equilibrar ambos tipos según el objetivo.
- **Estructura ordenada**: iniciar con preguntas demográficas (edad, género, etc.). Luego pasar a temas centrales del estudio.
- **Extensión adecuada**: no debe ser demasiado largo; mantener la atención del encuestado. Ideal: 10-20 preguntas dependiendo del tema.

#### Ventajas

- **Encuesta**: herramienta eficaz para recopilar información de un gran número de personas en poco tiempo. Permiten estandarizar las preguntas, lo que facilita la comparación de respuestas entre diferentes grupos. Además, suelen ser más económicas que otros métodos (entrevistas o grupos focales). Los datos obtenidos pueden analizarse fácilmente mediante herramientas estadísticas, lo que permite identificar patrones y tendencias de forma clara.

- **Cuestionario**: técnica muy útil para recolectar información de manera estructurada. Permite llegar a un gran número de personas con facilidad y a bajo costo, especialmente en formato digital. Al estar compuesto por preguntas cerradas o específicas, facilita la organización y el análisis de los datos. Los cuestionarios reducen el sesgo del investigador, ya que todos los participantes responden las mismas preguntas en las mismas condiciones.

#### Desventajas

- **Encuesta**: las respuestas pueden ser superficiales, ya que no permiten profundizar en las razones detrás de las opiniones. Existe el riesgo de que los participantes no respondan con sinceridad, especialmente si las preguntas son sensibles o mal formuladas. Además, si el diseño de la encuesta no es claro, puede llevar a confusiones o interpretaciones erróneas. En el caso de las encuestas autoadministradas, es común que se obtenga una baja tasa de respuesta, lo que puede afectar la representatividad de los resultados.

- **Cuestionario**: las respuestas suelen ser limitadas y pueden no reflejar en profundidad la opinión o experiencia del encuestado. Si las preguntas no están bien redactadas o son confusas, pueden generar respuestas inexactas o incompletas. Además, al no haber interacción directa con el investigador, no es posible aclarar dudas en el momento, lo que puede afectar la calidad de los datos. También existe el riesgo de una baja tasa de respuesta, especialmente en cuestionarios voluntarios o extensos.

#### Ejemplos

**Ejemplo de cuestionario**  
*Contexto*: El equipo de desarrollo quiere conocer los hábitos y preferencias de los usuarios antes de diseñar la aplicación.  
*Aplicación*: Crean un cuestionario online con preguntas cerradas que distribuyen a través de redes sociales y foros de freelancers. Preguntas incluidas:

1. ¿Con qué frecuencia usas una app de gestión de tareas?  
   - A diario  
   - Varias veces por semana  
   - Rara vez  
   - Nunca  

2. ¿Qué tipo de tareas gestionas principalmente?  
   - Personales  
   - Profesionales  
   - Ambas  

3. ¿Qué funciones consideras más importantes? (Selecciona hasta 3)  
   - Recordatorios  
   - Subtareas  
   - Sincronización con calendario  
   - Compartir tareas con otros  
   - Seguimiento del progreso  

**Ejemplo de encuesta**  
*Contexto*: Después de lanzar un prototipo de la app, el equipo quiere recibir retroalimentación sobre la experiencia de uso.  
*Aplicación*: Se envía una encuesta por correo a los primeros usuarios del prototipo con una combinación de preguntas cerradas y abiertas:

1. En una escala del 1 al 5, ¿qué tan fácil te pareció usar la aplicación?  
2. ¿Qué función te resultó más útil?  
3. ¿Qué aspectos mejorarías en la interfaz o funcionamiento?  
4. ¿Te gustaría seguir usando esta app para gestionar tus tareas diarias?  
   - Sí  
   - No  
   - No estoy seguro/a  

---

### Talleres de trabajo (Workshops)

Un taller de trabajo o "workshop" se define como un taller organizado donde los participantes reciben información, conocimiento o habilidades en un corto lapso de tiempo pero de forma intensiva, a menudo en una duración de entre 2 y 4 horas. Los participantes pueden compartir ideas, experiencias y conocimientos, y suelen incluir actividades dinámicas como juegos de rol, resolución de problemas y lluvia de ideas.

#### Requisitos

- **Público objetivo**: ¿A quién va dirigido? (estudiantes, empleados, docentes, comunidad, etc.). Conocer su nivel de conocimiento previo es clave para adaptar el contenido.
- **Contenido temático**: relevante, actualizado y enfocado en el objetivo del taller. Dividido en bloques o sesiones con tiempos estimados para cada parte. Puede incluir teoría, ejercicios prácticos, dinámicas grupales, estudios de caso, etc.
- **Facilitador o trabajo en equipo**: persona(s) que lideren el taller, preferiblemente con experiencia y dominio del tema. Capacidad para guiar actividades participativas y mantener la dinámica del grupo.
- **Registro y seguimiento**: lista de asistencia. Seguimiento posterior (por ejemplo, enviar materiales, hacer una segunda sesión, o evaluar la aplicación práctica de lo aprendido).
- **Evaluación del detalle**: puede ser una encuesta de satisfacción, una dinámica de retroalimentación o un breve test de conocimientos. Permite mejorar talleres futuros y verificar el cumplimiento del objetivo.

#### ¿En qué situaciones es más efectiva?

Los talleres de trabajo son más efectivos en situaciones donde se busca un aprendizaje práctico, colaborativo y activo. Son ideales cuando se necesita desarrollar habilidades específicas, fomentar la creatividad, resolver problemas en grupo o generar ideas innovadoras. También son útiles cuando se desea que los participantes interactúen entre sí, compartan experiencias y aprendan haciendo, en lugar de solo recibir información de forma pasiva.

#### Ventajas

- Son una herramienta participativa que permite la colaboración activa entre los participantes.
- Fomentan el intercambio de ideas, experiencias y conocimientos en un entorno dinámico y práctico.
- Facilitan la creatividad y la resolución conjunta de problemas, lo que puede generar soluciones más completas y aplicables.
- Promueven la interacción directa, el trabajo en equipo y el aprendizaje activo, muy efectivo en contextos educativos, empresariales o comunitarios.

#### Desventajas

- Requieren una planificación cuidadosa, recursos adecuados y facilitadores capacitados para ser efectivos.
- Pueden ser costosos en términos de tiempo y logística, especialmente si involucran a muchas personas o requieren desplazamientos.
- Los resultados pueden ser difíciles de sistematizar si no se documentan adecuadamente.
- Existe el riesgo de que algunos participantes dominen la discusión, limitando la participación equitativa del grupo.

#### Ejemplo

**Contexto**: El equipo de diseño y desarrollo quiere asegurarse de que la app responda a las verdaderas necesidades de los usuarios. Para ello, organiza un taller colaborativo con freelancers y profesionales que gestionan tareas a diario.

**Objetivo del taller**: Recoger ideas, identificar problemas comunes y co-crear posibles soluciones junto con los futuros usuarios.

**Desarrollo del workshop (duración: 3 horas)**  

| Actividad | Duración |
|-----------|----------|
| Introducción: se presenta brevemente el proyecto, sus objetivos y la dinámica del taller. | 15 min |
| Mapa de empatía: los participantes trabajan en grupos y crean perfiles de usuario respondiendo: ¿Qué ve, siente, piensa y necesita una persona que organiza muchas tareas a diario? | 30 min |
| Lluvia de ideas (brainstorming): cada grupo propone funcionalidades ideales que debería tener una app de gestión de tareas. No hay malas ideas. | 30 min |
| Priorización: usan matrices de valor vs. esfuerzo para clasificar las ideas más importantes y factibles de implementar. | 30 min |
| Prototipado rápido: los participantes dibujan en papel cómo se imaginan una pantalla clave de la app (por ejemplo, la vista principal de tareas). | 45 min |
| Puesta en común y feedback: cada grupo expone sus prototipos y se recoge retroalimentación general. | 30 min |

---

### Observación

La observación es una técnica de recolección de requisitos que consiste en ver directamente cómo los usuarios interactúan con el sistema, proceso o entorno de trabajo, con el fin de comprender sus tareas y necesidades de manera real y objetiva.

#### Requisitos

- **Observación**: ¿Qué se quiere observar y para qué? Debe existir una pregunta o propósito de observación claro (por ejemplo: observar la conducta de los estudiantes en clase, identificar patrones de comportamiento, registrar interacciones sociales, etc.).
- **Contexto y entorno claro**: selección del lugar, momento y condiciones donde se hará la observación. Asegurar que el ambiente sea propicio y permita ver lo que se desea registrar.
- **Instrumento de registro**: puede ser una guía de observación, lista de verificación, diario de campo, grilla de observación o notas descriptivas. El instrumento debe contener categorías o variables a observar.
- **Duración y frecuencia**: establecer cuánto tiempo durará cada sesión de observación y cuántas veces se repetirá. Ejemplo: 30 minutos por sesión, 3 veces por semana durante un mes.
- **Registro preciso y ético**: anotar lo que se ve, no lo que se interpreta (evitar juicios de valor). Si hay personas involucradas, considerar aspectos éticos: consentimiento informado, confidencialidad y autorización si se graba.
- **Análisis posterior**: contrastar lo observado con otras fuentes (entrevistas, encuestas, documentos). Puede ser útil para la triangulación en una investigación.

#### Ventajas

- Permite recopilar información directa sobre comportamientos, procesos o situaciones en su contexto natural.
- Permite registrar fenómenos tal como ocurren, sin depender de lo que las personas dicen, lo que reduce el sesgo de respuesta.
- Es útil para estudiar interacciones, dinámicas grupales y detalles no verbales que otros métodos pueden pasar por alto.
- Puede complementar otros instrumentos de recolección de datos, proporcionando una visión más completa del fenómeno estudiado.

#### Desventajas

- Puede ser subjetiva, ya que la interpretación de lo que se observa depende del criterio del investigador.
- Requiere tiempo y, en algunos casos, entrenamiento especializado para observar de forma sistemática y objetiva.
- La presencia del observador puede influir en el comportamiento de los participantes (efecto observador), alterando la naturalidad de la situación.
- Es posible que no se logre captar toda la información relevante si no se planifica adecuadamente o si los eventos observados son poco frecuentes.

#### ¿En qué situaciones es más efectiva?

La observación es más efectiva en situaciones donde se desea obtener información directa sobre el comportamiento, las acciones o las interacciones de las personas en su entorno natural. Es especialmente útil cuando los datos no pueden obtenerse fácilmente mediante entrevistas, encuestas o cuestionarios, ya sea porque los participantes no son conscientes de su conducta o porque podrían modificar su comportamiento si saben que están siendo evaluados.

#### Ejemplo

**Contexto**: El equipo de desarrollo quiere entender cómo los usuarios organizan sus tareas en la vida real para diseñar una app que se ajuste a sus hábitos.

Un investigador del equipo visita a varios profesionales freelance en sus espacios de trabajo (también puede ser por videollamada) y los observa durante una jornada laboral o durante un bloque específico de planificación de tareas.

Durante la observación, toma nota de:

- Qué herramientas usan (apps, agendas físicas, post-its, etc.).
- Cómo priorizan sus tareas.
- Qué interrupciones o dificultades enfrentan.
- Qué patrones de organización se repiten (ej. agrupar tareas por tipo, anotar ideas en el celular, etc.).

El observador no interfiere ni hace preguntas en ese momento. Solo registra comportamientos y hábitos de forma natural.

**Resultado práctico**: Se detecta, por ejemplo, que muchos usuarios usan simultáneamente una app digital y una libreta física para recordar tareas, lo que genera confusión. También se observa que anotan ideas o recordatorios mientras trabajan, pero luego olvidan organizarlas.

Gracias a esto, el equipo decide incluir una función rápida de captura de tareas tipo "nota rápida" que se puede ordenar más tarde, y una integración opcional con calendarios físicos mediante códigos QR.

---

### Prototipos

La técnica de prototipo consiste en crear una versión preliminar, visual o funcional de un sistema o aplicación. Se utiliza para mostrar a los usuarios cómo podría lucir y funcionar el producto final, permitiendo que den su opinión, propongan cambios y aclaren sus necesidades. Se puede hacer mediante bocetos en papel, maquetas digitales o prototipos interactivos.

#### ¿Cómo se utiliza en la recolección de datos?

Se muestra una versión preliminar del sistema (dibujo, maqueta o modelo interactivo) para que los usuarios opinen, den retroalimentación y aclaren sus necesidades. Se realiza un prototipo básico del sistema con las funciones más importantes, se muestra al cliente o usuario para que interactúe con el prototipo y comente qué entiende, qué cambiaría, qué le gusta y qué no le gusta, registrando esas opiniones para definir los requisitos del sistema.

#### Ventajas

- Permite a los clientes ver el sistema antes de desarrollarlo, dando su opinión.
- Se definen mejor los requisitos.
- Se detectan confusiones y problemas antes de invertir tiempo en el desarrollo final.
- Se aclaran necesidades.
- Facilita el entendimiento entre clientes y desarrolladores.

#### Desventajas

- El cliente podría confundir el prototipo con el sistema final y esperar resultados inmediatos.
- Crear y modificar prototipos requiere tiempo.
- Si se realizan demasiados cambios, puede generar una inversión de tiempo mayor a la prevista.

#### ¿En qué situaciones es más efectiva?

El prototipado destaca cuando:

- Los requisitos no están claros.
- Los clientes no saben exactamente lo que quieren.
- Se necesita validar ideas rápidamente antes de programar.
- Se buscan errores y mejoras en el proceso de desarrollo.

#### Ejemplo práctico

1. Se realiza el diseño inicial del prototipo: pantalla principal con una lista de tareas, un botón para agregar nuevas tareas, un formulario para ingresar título, descripción, fecha límite y prioridad, y una opción para marcar tareas como completadas o eliminarlas.
2. Se muestra esta maqueta a los usuarios (puede ser en papel o una presentación digital) para que interactúen y expresen sus opiniones.
3. Se recopilan las opiniones para ver si falta alguna función, cómo prefieren organizar las tareas o si les gustaría recibir notificaciones.
4. Con base en la retroalimentación, se realizan cambios al diseño (agregar categorías, mejorar botones, incluir recordatorios o filtros).
5. Finalmente, se presenta la versión mejorada para confirmar que cumple con las expectativas antes de iniciar el desarrollo real.

---

### Historias de usuario

Se describen y descubren los requisitos de un sistema desde el punto de vista del usuario final conversando con él, centrándose en las necesidades del usuario para identificar lo que espera del programa y así diseñar y desarrollar el programa paso a paso. Permiten entender lo que los usuarios necesitan de forma práctica, clara y centrada en el valor que obtendrán.

#### ¿Cómo se utiliza en la recolección de datos?

Para esta técnica se debe conversar directamente con los usuarios para identificar sus necesidades, problemas o deseos respecto al sistema. Estas historias sirven como requisitos funcionales para el equipo de desarrollo y luego se pueden priorizar, modificar o dividir según el avance del proyecto.

Generalmente se busca responder:

- ¿Qué acciones necesita realizar el usuario?
- ¿Cuáles son los objetivos o razones detrás de esas acciones?
- ¿Cuáles son los roles o perfiles de usuarios y las necesidades específicas en su contexto?

#### Ventajas

- Se recolecta información por medio de una conversación con el usuario.
- Se escribe en lenguaje simple y comprensible tanto para el usuario como para el desarrollador.
- Ayuda a mantener un enfoque en las necesidades del usuario, permitiendo organizarlas por importancia o urgencia.
- Mejora el diálogo entre el equipo de desarrollo y los usuarios.

#### Desventajas

- Al ser información recolectada de una conversación, no tendrá detalles técnicos, por lo que habrá que complementarla.
- Si no se complementa, la información podría quedar poco clara e incluso superficial, dejando fuera aspectos importantes si no se analizan bien.

#### ¿En qué situaciones es más efectiva?

Las historias de usuario son muy efectivas cuando:

- Se hacen proyectos con metodologías ágiles como Scrum o Kanban, donde los requisitos pueden cambiar con el tiempo. Con esta técnica es fácil desarrollar el sistema en etapas o por prioridades.
- Los usuarios no son técnicos, ya que permite expresar sus necesidades en lenguaje sencillo, y el desarrollador complementa la información para entender mejor las metas del usuario, no solo lo que quieren, sino para qué lo quieren.

#### Ejemplo práctico

Se recolectan los requisitos conversando con los usuarios. A partir de esas necesidades, se escriben las historias:

1. Como usuario, quiero crear nuevas tareas con título, fecha y prioridad, para organizar mejor mis actividades.
2. Como usuario, quiero editar una tarea existente, para actualizar la información cuando cambie algo.
3. Como usuario, quiero marcar una tarea como completada, para tener control de lo que ya hice.
4. Como usuario, quiero ver una lista de todas mis tareas pendientes y completadas, para tener una visión general de mi trabajo.
5. Como usuario, quiero recibir recordatorios antes de la fecha límite, para no olvidar tareas importantes.
6. Como administrador, quiero gestionar múltiples usuarios, para supervisar el uso de la app en un equipo de trabajo.

---

## Requerimientos funcionales y no funcionales

Una vez recolectada la información y haber hallado las necesidades que hay, se debe definir qué es lo que se necesita para que el software funcione. Se debe saber qué funciones se necesitan, qué requisitos funcionales y no funcionales se esperan del sistema de información.

- **Requerimientos funcionales:** Son declaraciones de los servicios que el sistema debe proporcionar al usuario. Detallan las acciones específicas que el sistema debe realizar, como procesar datos, generar informes o manejar la autenticación de usuarios.

- **Requerimientos no funcionales:** Son restricciones o cualidades que limitan la funcionalidad del sistema. Definen cómo el sistema debe funcionar, incluyendo aspectos como rendimiento, seguridad, usabilidad, escalabilidad, etc.

---

## Roles en el desarrollo de software

En un proyecto de software intervienen diferentes perfiles, cada uno con responsabilidades específicas:

- **Cliente:** Quien solicita el producto y define las necesidades generales.
- **Usuario:** Quien interactuará directamente con el sistema.
- **Líder de proyecto:** Coordina el equipo, gestiona recursos y plazos.
- **Analista:** Se encarga del levantamiento de requisitos y del análisis funcional.
- **Programador / Desarrollador:** Construye el software siguiendo el diseño.
- **Asegurador de calidad (QA):** Prueba el software para garantizar que cumple con los requisitos.
- **Arquitecto de software:** Define la estructura y tecnologías del sistema (por ejemplo, Bill Gates es reconocido como arquitecto de software en Microsoft).

---

## Diagramas de flujo de datos (DFD)

Los DFD son una herramienta gráfica que representa el flujo de información en un sistema. Muestran cómo los datos entran, salen y se transforman dentro del sistema, identificando procesos, fuentes, destinos y almacenes de datos.

### Notación Yourdon‑Coad

Esta notación utiliza los siguientes símbolos:

| Símbolo | Representación | Significado |
|---------|----------------------|-------------|
| Entidad externa | `[   ]` | Rectángulo con los bordes abiertos, representa una fuente o destino de datos fuera del sistema. |
| Proceso | `(   )` | Círculo u óvalo, transforma los datos de entrada en salida. |
| Almacén de datos | `||`  o `══`  | Dos líneas paralelas, representa un depósito de datos (archivo, base de datos). |
| Flujo de datos | `→`  | Flecha que indica la dirección del movimiento de los datos. |

**Simulación visual con caracteres:**

```
Entidad externa:  [ Cliente ]
Proceso:          ( Calcular total )
Almacén:          || Pedidos ||
Flujo:            Datos → Proceso
```

### Notación Gane‑Sarson

Esta notación es similar pero con una representación ligeramente distinta:

| Símbolo | Representación | Significado |
|---------|----------------------|-------------|
| Entidad externa |  (cuadrado con sombra) | Representa una entidad externa. |
| Proceso |  (rectángulo con esquinas redondeadas) | Proceso que transforma datos. |
| Almacén de datos |  (rectángulo abierto por la derecha) | Almacén de datos. |
| Flujo de datos | `→`  | Flecha que indica el movimiento de los datos. |

**Simulación visual con caracteres:**

```
Entidad externa:  ┌────────────┐
                  │  Cliente    │
                  └────────────┘

Proceso:          ┌────────────┐
                  │ Procesar    │
                  └────────────┘

Almacén:          ┌────────────┐
                  │ Pedidos     │
                  └────────────┘

Flujo:            Datos → Proceso
```

### Ejercicios de DFD

Practica la elaboración de DFD con los siguientes ejercicios:

1. Hallar el número mayor.
2. Hallar el área de un círculo.
3. Hallar el área de un rombo.
4. Hallar el área de un paralelepípedo.

---

## Ejemplo de proyecto sencillo: Panadería Estación Paisa

> La razón de esto, es nuestro proyecto formativo... A medida de los trimestres se iran pasando por todos los ciclos del software y entonces esta propuesta es una de las iniciales que eventualmente con el tiempo fue con la que empezamos el desarrollo de nuestro proyecto formativo. 

> Siendo asi, el instructor lo que hace es guiar a los grupos de aprendices por proyecto. Cada uno con un desarrollo individual, pero a medida de las clases las metodologias de desarrollo y documentación son las mismas.

A continuación se muestra un ejemplo práctico de aplicación de las técnicas de elicitación y modelado para un proyecto de software real.

### Usar una sola área

El proyecto se enfoca en un área específica: el control de personal en la panadería.

### Objetivo

Desarrollar un software para el control del personal en la panadería **Estación Paisa en Terreros**.

### Objetivos específicos

- **Levantamiento de información:**
  - Observación directa de los procesos actuales.
  - Entrevistas con el personal y administradores.
  - Historias de usuario para capturar necesidades desde la perspectiva de los empleados.

- **DFD:** Representar el manejo de la información en el software, ilustrando las situaciones de la vida real mediante diagramas de flujo de datos.

- **UML:** Utilizar el Lenguaje Unificado de Modelado para describir la estructura y comportamiento del sistema.

- **Requerimientos:** Definir tanto los requisitos funcionales como los no funcionales del sistema.

> Estos son algunos nombres de los indices en la documentación que se realizo eventualmente para nuestro proyecto formativo. 

---

## UML (Unified Modeling Language)

UML es un lenguaje de modelado estandarizado que permite visualizar, especificar, construir y documentar los artefactos de un sistema software. Se utilizan diferentes tipos de diagramas (casos de uso, clases, secuencia, actividades, etc.) para representar distintas perspectivas del sistema.

Este tema lo miramos a fondo en el documento [02-unified-modeling-language.md](02-unified-modeling-language.md) en la misma carpeta en la que esta este documento actual que estas leyendo.

---

> Gracias por leer.