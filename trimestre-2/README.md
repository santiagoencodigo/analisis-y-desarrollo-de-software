# Segundo Trimestre

En esta etapa de la formación como Aprendiz en Análisis y Desarrollo de Software (ADSO), el enfoque se amplió hacia habilidades comunicativas en inglés y hacia el entendimiento profundo de los requisitos de un proyecto. A continuación, comparto las experiencias y aprendizajes más representativos del trimestre, junto con la documentación técnica que he organizado.

---

## Tabla de contenido

- [Estructura del directorio](#estructura-del-directorio-trimestre-2)
- [Horario de formación](#horario-de-formación)
- [Documentación técnica del trimestre](#documentación-técnica-del-trimestre)
- [Metodologías y herramientas trabajadas](#metodologías-y-herramientas-trabajadas)
- [Proyectos y casos prácticos](#proyectos-y-casos-prácticos)
- [Experiencias y aprendizajes](#experiencias-y-aprendizajes)
- [Próximos pasos](#próximos-pasos)

---

## Estructura del directorio `trimestre-2/`

```
trimestre-2/
├── 01-pseudocodigo/                      # Ejercicios de pseudocódigo con PSeInt
│   ├── README.md                         # Guía del módulo
│   ├── 01-pseudocodigo.md                # Ejercicios 1 al 12
│   ├── 02-pseudocodigo.md                # Ejercicios 13 al 24
│   ├── 03-pseudocodigo.md                # Ejercicios 25 al 36
│   ├── 04-pseudocodigo.md                # Ejercicios: Temperaturas, Cajero, Conversor
│   └── 05-pseudocodigo.md                # Ejercicios: Facturación, Ventas
├── 02-algoritmia/                        # Fundamentos de programación con Python
│   ├── README.md                         # Guía del módulo
│   ├── santiagoencodigo.py               # Menú principal
│   ├── 01_basicos.py                     # Ejercicios básicos (condicionales, ciclos)
│   ├── 02_listas.py                      # Ejercicios de listas
│   ├── 03_diccionario.py                 # Ejercicios de diccionarios
│   ├── 04_tuplas.py                      # Ejercicios de tuplas
│   ├── 05_conjuntos.py                   # Ejercicios de conjuntos
│   ├── 06_clases.py                      # Ejercicios de clases (POO básica)
│   ├── 07_objetos.py                     # Ejercicios de objetos (herencia, polimorfismo)
│   └── __pycache__/                      # Archivos de caché de Python (ignorados por Git)
├── 03-planeacion-de-actividades/          # Planeación de análisis y metodologías
│   ├── README.md                         # Guía del módulo
│   ├── 01-planear-actividades-analisis.md # Fundamentos de ingeniería de software
│   ├── 02-planificacion-scrum.md         # Gestión de proyectos con Scrum
│   ├── 03-modelos-ciclo-de-vida-software.md # Modelos de ciclo de vida
│   ├── 04-proceso-unificado-racional.md  # Proceso Unificado Racional (RUP)
│   ├── 05-metodologias-agiles.md         # Manifiesto Ágil, XP, RAD, Design Thinking
│   └── 06-planeacion-proyectos-informaticos.md # Administración de proyectos
├── 04-verificacion-de-modelos/           # Verificación y validación de modelos
│   ├── README.md                         # Guía del módulo
│   ├── assets/                           # Imágenes y diagramas
│   │   ├── sonrisa-01-caso-de-uso.png    # Diagrama de casos de uso – Agenda
│   │   └── sonrisa-02-caso-de-uso.png    # Diagrama de casos de uso – Historial
│   ├── 01-verificacion-modelos.md        # Fundamentos de verificación de modelos
│   ├── 02-reglas-de-consistencia.md      # Reglas de consistencia en UML (OCL)
│   ├── 03-modelado-de-funciones.md       # Introducción al modelado de funciones
│   ├── 04-modelado-de-funciones-caso-clinica-dental.md # Caso práctico: Clínica Dental
│   ├── 05-recursos.md                    # Recursos complementarios y enlaces
│   └── 06-plantilla-proyectos.md         # Plantilla para proyectos de software
├── index.html                            # Página de inicio del trimestre
└── README.md                             # Este archivo
```

---

## Horario de formación

El segundo trimestre se desarrolla en jornada matutina, de **6:00 a 12:00**, de lunes a viernes. La distribución de competencias y resultados de aprendizaje es la siguiente:

| **Día** | **Horario** | **Competencia** | **Resultado de Aprendizaje** |
|---------|-------------|-----------------|------------------------------|
| **Lunes** | 6:00 - 12:00 | Análisis de la especificación de requisitos del software. | **01** Planear actividades de análisis de acuerdo con la metodología seleccionada. |
| **Martes** | 6:00 - 12:00 | Análisis de la especificación de requisitos del software. | **03** Desarrollar procesos lógicos a través de la implementación de algoritmos. |
| **Miércoles** | 6:00 - 9:00 | Comunicación | **03** Relacionar los procesos comunicativos teniendo en cuenta criterios de lógica y racionalidad. <br> **01** Analizar los componentes de la comunicación según sus características, intencionalidad y contexto. <br> **04** Establecer procesos de enriquecimiento lexical y acciones de mejoramiento en el desarrollo de procesos comunicativos según requerimientos del contexto. <br> **02** Argumentar en forma oral y escrita atendiendo las exigencias y particularidades de las diversas situaciones comunicativas mediante los distintos sistemas de representación. |
| **Miércoles** | 9:00 - 12:00 | Análisis de la especificación de requisitos del software. | **03** Desarrollar procesos lógicos a través de la implementación de algoritmos. |
| **Jueves** | 6:00 - 9:00 | Inglés | **01** Comprender información sobre situaciones cotidianas y laborales actuales y futuras a través de interacciones sociales de forma oral y escrita. |
| **Jueves** | 9:00 - 12:00 | Análisis de la especificación de requisitos del software. | **04** Verificar los modelos realizados en la fase de análisis de acuerdo con lo establecido en el informe de requisitos. |
| **Viernes** | 6:00 - 12:00 | Análisis de la especificación de requisitos del software. | **02** Modelar las funciones del software de acuerdo con el informe de requisitos. |

### Resultados de aprendizaje por competencia

**Competencia: Análisis de la especificación de requisitos del software**
- **RA01:** Planear actividades de análisis de acuerdo con la metodología seleccionada.
- **RA02:** Modelar las funciones del software de acuerdo con el informe de requisitos.
- **RA03:** Desarrollar procesos lógicos a través de la implementación de algoritmos.
- **RA04:** Verificar los modelos realizados en la fase de análisis de acuerdo con lo establecido en el informe de requisitos.

**Competencia: Comunicación**
- **RA01:** Analizar los componentes de la comunicación según sus características, intencionalidad y contexto.
- **RA02:** Argumentar en forma oral y escrita atendiendo las exigencias y particularidades de las diversas situaciones comunicativas.
- **RA03:** Relacionar los procesos comunicativos teniendo en cuenta criterios de lógica y racionalidad.
- **RA04:** Establecer procesos de enriquecimiento lexical y acciones de mejoramiento en el desarrollo de procesos comunicativos.

**Competencia: Inglés**
- **RA01:** Comprender información sobre situaciones cotidianas y laborales actuales y futuras a través de interacciones sociales de forma oral y escrita.

---

## Documentación técnica del trimestre

El contenido del segundo trimestre está organizado en los siguientes módulos y documentos:

- **[01-pseudocodigo/](./01-pseudocodigo/README.md)** – Módulo de ejercicios de lógica de programación resueltos en pseudocódigo con PSeInt. Contiene 36 ejercicios divididos en 5 archivos, desde condicionales básicos hasta programas completos con menús y validaciones.

- **[02-algoritmia/](./02-algoritmia/README.md)** – Módulo de fundamentos de programación con Python. Contiene un menú principal y 7 módulos con ejercicios organizados por temas: básicos, listas, diccionarios, tuplas, conjuntos, clases y objetos.

- **[03-planeacion-de-actividades/](./03-planeacion-de-actividades/README.md)** – Módulo de planeación de actividades de análisis. Incluye fundamentos de ingeniería de software, planificación con Scrum, modelos de ciclo de vida (cascada, V, iterativo, incremental, espiral, prototipos), Proceso Unificado Racional (RUP), metodologías ágiles (XP, RAD, Design Thinking) y administración de proyectos informáticos.

- **[04-verificacion-de-modelos/](./04-verificacion-de-modelos/README.md)** – Módulo de verificación y validación de modelos. Incluye fundamentos de verificación de modelos, reglas de consistencia en UML (OCL), introducción al modelado de funciones, caso práctico de la Clínica Dental Sonrisa Perfecta, recursos complementarios y una plantilla para proyectos de software.

---

## Metodologías y herramientas trabajadas

Durante el trimestre se abordaron diferentes enfoques metodológicos y herramientas para el desarrollo de software:

### Metodologías de desarrollo

| **Metodología** | **Descripción** |
|-----------------|-----------------|
| **RUP (Rational Unified Process)** | Metodología iterativa e incremental que estructura el desarrollo en cuatro fases: Inicio, Elaboración, Construcción y Transición. Se trabajó en la elaboración de fichas bibliográficas y manuales de uso. |
| **Metodologías ágiles** | Enfoques adaptativos para el desarrollo de software, priorizando la colaboración, la entrega temprana y la respuesta al cambio. |
| **Modelado de funciones** | Proceso de definir y documentar las funciones que el sistema debe realizar, utilizando herramientas como diagramas de casos de uso, DFD y reglas de negocio. |

### Herramientas y técnicas aplicadas

| **Herramienta / Técnica** | **Aplicación** |
|---------------------------|----------------|
| **PSeInt** | Herramienta educativa para aprender lógica de programación mediante pseudocódigo. Se utilizó para resolver algoritmos de estructura secuencial, condicional y cíclica. |
| **Python** | Lenguaje de programación utilizado para implementar los algoritmos previamente diseñados en pseudocódigo. |
| **Historias de usuario** | Técnica de elicitación de requisitos que describe funcionalidades desde la perspectiva del usuario final. Se crearon tantas historias como fueron necesarias para el proyecto. |
| **Casos de uso** | Diagramas UML que describen las interacciones entre actores y el sistema. Se elaboraron para el proyecto OperPan. |
| **DFD (Diagramas de Flujo de Datos)** | Representación gráfica del flujo de información en el sistema. Se realizaron dos DFD como parte de la documentación. |
| **Reglas de negocio** | Condiciones y restricciones que rigen el comportamiento del sistema. Se documentaron a partir de los requerimientos del proyecto. |
| **Mockups y fichas bibliográficas** | Prototipos de baja fidelidad (mockups) para visualizar la interfaz del sistema, complementados con fichas bibliográficas para organizar la información. |
| **Estructura organizacional del proyecto** | Definición de roles, responsabilidades y organigrama del equipo de desarrollo. |

### Conceptos clave abordados

- **Requerimientos funcionales y no funcionales:** Definición de lo que el sistema debe hacer (funcional) y cómo debe comportarse (no funcional).
- **Lógica de programación:** Algoritmos, datos repetitivos, volúmenes de datos y estructuración de soluciones.
- **Modelado de software:** Diagramas de casos de uso, DFD y reglas de negocio como base para la especificación del sistema.
- **Elicitación de requisitos:** Proceso de recolección de necesidades del cliente mediante entrevistas, observación y técnicas de taller.
- **Verificación y validación:** Aseguramiento de que el software cumple con los requisitos establecidos.

---

## Proyectos y casos prácticos

### LILAPP – Plataforma web para vivero y hotel de plantas

Durante el trimestre se trabajó en el análisis y diseño de **LILAPP**, una plataforma web para un vivero y hotel de plantas. Se elaboraron mockups y fichas bibliográficas para documentar la propuesta desde la fase inicial.

### OperPan – Sistema de gestión de personal

El proyecto formativo **OperPan** (sistema de gestión de personal para panaderías) continuó su desarrollo con las siguientes actividades:

| **Actividad** | **Descripción** |
|---------------|-----------------|
| **Historias de usuario** | Creación de historias de usuario para cada funcionalidad del sistema, identificando actores y descripciones. |
| **Casos de uso** | Elaboración de diagramas de casos de uso para todos los procesos del sistema. |
| **Reglas de negocio** | Definición de reglas de negocio a partir de los requerimientos del proyecto. |
| **Matriz de requisitos** | Organización de requerimientos, reglas de negocio e historias de usuario por módulos. |
| **Plantilla de historias** | Estandarización del formato de historias de usuario para todo el proyecto. |
| **Mockups** | Diseño de prototipos de interfaz (mockups) para visualizar las pantallas del sistema. |
| **DFD** | Diagramas de flujo de datos que representan los procesos del sistema. |

### Taller de elicitación – Adivina el objeto

Ejercicio práctico en el que, mediante técnicas de elicitación de requisitos, se debía adivinar un objeto desconocido. La actividad demostró la importancia de hacer las preguntas correctas y de interpretar adecuadamente las respuestas del cliente.

---

## Experiencias y aprendizajes

### Inglés técnico y cotidiano

El manejo del inglés es una competencia esencial en la industria del software, por lo que el programa integra sesiones orientadas a fortalecer la escucha, la comprensión y la expresión oral. Durante una de las clases abordamos dos frentes principales:

- **Comprensión auditiva con números telefónicos**  
  Realizamos ejercicios de *telephone numbers listening*, en los que escuchábamos series de dígitos y debíamos escribirlos con precisión. Esta práctica, además de afinar el oído, resultó especialmente útil para contextos profesionales donde se intercambian datos de contacto en inglés.

- **WH Questions**  
  Repasamos las preguntas de información (what, where, when, who, why, how), esenciales para entrevistas con clientes, levantamiento de requerimientos y comunicación diaria en equipos multiculturales.

Ambas actividades me parecieron muy acertadas y entretenidas, porque conectan directamente con situaciones reales que enfrentaremos como desarrolladores.

### Desarrollo Humano

En paralelo, tuvimos sesiones de Desarrollo Humano donde exploramos las dimensiones que afectan nuestra formación integral: limitaciones sociales, económicas, culturales, tecnológicas y demás factores que influyen en la sociedad. Estos temas, aunque no están directamente documentados en este repositorio (enfocado al desarrollo técnico), aportan una perspectiva valiosa sobre el contexto en el que nos desenvolvemos como profesionales.

### Taller de requisitos

Una de las experiencias más enriquecedoras del trimestre fue una sesión práctica centrada en la interacción con clientes y la definición temprana de proyectos. Allí realizamos dos ejercicios que nos obligaron a pensar, dibujar y comunicar sin depender de la tecnología.

#### 1. Aplicación de suma para niños

El reto consistió en diseñar en papel una aplicación que ayudara a niños que están aprendiendo a sumar. Junto con mi grupo, ideamos un concepto basado en **desplazamiento de bloques** y **representación visual con frutas**: el número 6, por ejemplo, se mostraba como 6 manzanas. Todo el proceso, desde la idea inicial hasta el boceto final, fue realizado a mano.

#### 2. Adivina lo que quiere el cliente

El facilitador nos fue dando indicaciones verbales sobre un producto, con frases como: *“Debe permitirme verme a mí misma”*, *“Debo poder dejar elementos sobre este”*, *“Debo poder guardarlos y que no se vean”*. Nuestra tarea consistía en dibujar el objeto que imaginábamos a partir de esas descripciones, hasta que finalmente se revelaba la imagen real. Fue curioso ver cómo, a pesar de escuchar las mismas palabras, cada interpretación difería en algún detalle; siempre faltaba algo o sobraba una suposición.

Esta actividad me encantó por su crudeza y realismo. Refleja el caos controlado de una entrevista con un cliente: el facilitador tenía una imagen mental clara y trataba de transmitirla, mientras nosotros intentábamos materializarla. De esa experiencia surgió una reflexión valiosa: **un perfil senior probablemente descifra más rápido lo que el cliente realmente necesita**, porque ha aprendido a leer entre líneas, a hacer las preguntas precisas y a detectar los vacíos antes de que se conviertan en malentendidos costosos.

### Metodologías y técnicas de desarrollo

A lo largo del trimestre se exploraron diversas metodologías para desarrollar proyectos de software. Se trabajó con **RUP (Rational Unified Process)** como marco estructurado para la documentación, y se complementó con enfoques ágiles para la gestión de requisitos.

En la práctica, se aplicaron técnicas de **elicitación de requisitos** para definir las necesidades del cliente, y se documentaron **requerimientos funcionales y no funcionales**, **reglas de negocio** e **historias de usuario** como base para el modelado del sistema.

El modelado se realizó mediante **diagramas de casos de uso**, **diagramas de flujo de datos (DFD)** y **mockups**, lo que permitió visualizar el sistema desde diferentes perspectivas antes de la implementación.

---

## Próximos pasos

El contenido técnico del trimestre está en proceso de organización y expansión. Próximamente se agregarán:

- Más ejercicios prácticos en Python y pseudocódigo.
- Documentación detallada sobre verificación de modelos.
- Diagramas y casos de uso completos del proyecto OperPan.
- Plantillas y ejemplos de historias de usuario.
- Material sobre reglas de negocio y su aplicación en proyectos reales.

---

En conjunto, el segundo trimestre me dejó una visión más clara de que el desarrollo de software no es solo escribir código, sino también comprender contextos, comunicarse con precisión y aprender a delimitar ideas desde el primer boceto, incluso cuando este solo existe sobre una hoja de papel.

> Gracias por leer.