# Modelos de negocio y soluciones tecnológicas – Trimestre 1 ADSO

Este documento consolida los modelos de negocio, ideas de proyecto y soluciones tecnológicas planteadas por mis compañeros durante el primer trimestre del tecnólogo en Análisis y Desarrollo de Software (ADSO). Cada entrada describe un sector económico, una problemática real y una propuesta de software que aborda dicha necesidad, junto con las tecnologías y entregables sugeridos.

> **Fecha de referencia:** 19 de mayo de 2025 – Sesión de socialización de proyectos y conceptos clave.  
> Este proceso fue importante para generar ideas, antes de realmente iniciar con un proyecto formativo.  
> Esta información hace parte de los apuntes que tomé sobre las exposiciones que llegué a presenciar.

Adicionalmente, se incluyen los proyectos finales presentados por grupos de **ultimo trimestre** (sustentación del 26 de junio de 2025), como referencia de lo que se puede lograr al finalizar la etapa lectiva.

---

## Tabla de contenido

- [Conceptos clave](#conceptos-clave)
- [Sector agropecuario](#sector-agropecuario)
- [Sector salud](#sector-salud)
- [Sector textil y moda](#sector-textil-y-moda)
- [Sector logística y transporte](#sector-logística-y-transporte)
- [Sector comercio y retail](#sector-comercio-y-retail)
- [Sector servicios financieros](#sector-servicios-financieros)
- [Sector educación](#sector-educación)
- [Sector automotriz](#sector-automotriz)
- [Sector ganadero](#sector-ganadero)
- [Sector mascotas](#sector-mascotas)
- [Sector ambiental y energético](#sector-ambiental-y-energético)
- [Proyectos finales – Sustentación de otras fichas](#proyectos-finales--sustentación-de-otras-fichas)
- [Metodologías y herramientas de negocio](#metodologías-y-herramientas-de-negocio)

---

## Conceptos clave

Durante la sesión del 19 de mayo de 2025 se enfatizaron varios principios fundamentales para el desarrollo de software y la construcción de modelos de negocio:

| **Concepto** | **Descripción** |
|--------------|-----------------|
| **Software para tontos** | La usabilidad y simplicidad son cruciales para la adopción. Un programa debe ser estructurado, evidente y específico en cada función. |
| **Innovación vs. invención** | No se busca crear algo completamente nuevo, sino **innovar a partir de productos y empresas existentes**. Es obligatorio tener una empresa de referencia para el software. |
| **Análisis del entorno** | Observar el software cotidiano (ej. personalización de tarjetas, sistemas TICS, sensores de pago) ayuda a identificar oportunidades. |
| **Visión artificial** | Técnica para identificar situaciones mediante imágenes capturadas por dispositivos. Ejemplo: reconocimiento de enfermedades en plantas. |
| **Lenguaje técnico** | Uso de términos como *microservicios*, *bases de datos*, *plataforma*, *machine learning*, *IoT*, entre otros, para comunicarse profesionalmente. |
| **Problemas de atención** | En la era digital, es vital mantener la concentración y prepararse adecuadamente para exposiciones y reuniones. |
| **Preparación y estructura** | No improvisar; todo debe estar escrito y estructurado. La indagación es la tarea principal. |
| **Presentación personal** | La imagen, el lenguaje corporal y la claridad al hablar son tan importantes como el contenido técnico. |
| **Perfil del egresado** | Un tecnólogo ADSO puede ganar alrededor de 4.000.000 COP al inicio, dependiendo de sus conocimientos y experiencia. |

> **Dato:** En Colombia, el 90% de la población tiene un celular con conectividad (fuente: Colombia Digital).

> Aun presento resistencia respecto a siempre tener que tomar de referencia a una empresa, pero es un hecho de que los problemas siempre han existido y es muy poco probable que alguien no haya intentado solucionarlo... Por ende este análisis sigue siendo fundamental.

---

## Sector agropecuario

### 1. Agro TIC – Asesoría inteligente para cultivos

| **Problema** | Falta de acceso a tecnología y asesoría técnica para agricultores, lo que dificulta la detección temprana de enfermedades y plagas en los cultivos. Además, el uso inadecuado de productos químicos (como fumigantes) ha generado problemas de salud (ej. cáncer de páncreas). |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación móvil que utiliza **machine learning** para identificar enfermedades a través de fotografías de las plantas. El sistema se entrena con miles de imágenes de plantas sanas y enfermas. Ofrece recomendaciones personalizadas sobre fumigación, abonos y vitaminas. Incluye un chat en tiempo real para conectar a agricultores con agrónomos y una comunidad de intercambio de conocimientos. Escalable a drones que capturen imágenes y generen estadísticas. |
| **Tecnologías sugeridas** | Ionic Framework, Python (para el modelo de ML), bases de datos SQL, integración con cámaras y servicios de geolocalización. |
| **Productos / Entregables** | App móvil, modelo de reconocimiento de imágenes, sistema de chat, panel de administración, integración con drones (opcional). |
| **Actores / Usuarios** | Agricultores, agrónomos, ingenieros agrícolas. |

---

### 2. Agro TIC 2.0 – Comunidad y formación agrícola

| **Problema** | Además de la detección de enfermedades, los agricultores necesitan formación continua y un espacio para compartir experiencias. |
|--------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma que añade funcionalidades de **red social** entre campesinos, con chat en tiempo real, foros, y acceso a contenido formativo (cursos, guías) para optimizar procesos de siembra y recolección. También incluye recomendaciones sobre qué sembrar según el tipo de suelo (integración con estudios de fertilidad). |
| **Tecnologías sugeridas** | Las mismas de Agro TIC, más sistemas de mensajería y gestión de contenidos. |
| **Productos / Entregables** | Red social agrícola, módulo de formación, integración con ICA (Instituto Colombiano Agropecuario). |
| **Actores / Usuarios** | Agricultores, comunidades rurales, entidades gubernamentales. |

---

### 3. Estudio de campos y suelos fértiles

| **Problema** | Desconocimiento de la composición y fertilidad de los suelos, lo que lleva a malas decisiones de siembra y pérdida de cosechas. |
|--------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Base de datos y plataforma web que recopila información de senderos, terrenos y análisis de suelos, permitiendo a agrónomos e ingenieros consultar y compartir datos para optimizar la producción. |
| **Tecnologías sugeridas** | Python, Java, bases de datos espaciales (PostGIS), frontend con HTML/CSS/JS. |
| **Productos / Entregables** | Aplicación web, sistema de gestión de datos de suelos, informes de fertilidad, mapas interactivos. |
| **Actores / Usuarios** | Ingenieros agrónomos, agricultores técnicos, entidades gubernamentales. |

---

## Sector salud

### 4. Sistema de gestión de medicamentos e historial clínico

| **Problema** | Dificultad de los pacientes (especialmente adultos mayores) para recordar horarios y dosis de medicamentos, así como la falta de integración entre la receta médica y el seguimiento. |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que integra el historial clínico del paciente con un sistema de recordatorios de medicación. Al finalizar una cita, el médico genera una receta digital que se sincroniza con el sistema, el cual notifica al paciente cuándo y qué medicamento tomar. Se inspira en sistemas como los de Colsubsidio o La Cruz Verde. |
| **Tecnologías sugeridas** | Python, CSS, SQL, notificaciones push, integración con APIs de farmacias. |
| **Productos / Entregables** | Aplicación web, base de datos de pacientes y recetas, sistema de alertas, panel para médicos, informes de adherencia. |
| **Actores / Usuarios** | Pacientes, médicos, farmacéuticas, centros de salud. |

---

### 5. Sistema de gestión de turnos y citas

| **Problema** | Largas esperas y desorganización en la asignación de citas médicas o administrativas. |
|--------------|---------------------------------------------------------------------------------------|
| **Solución** | Plataforma que permite a los usuarios solicitar turnos desde su celular, gestionar horarios y recibir recordatorios. Optimiza la distribución de citas y reduce tiempos de espera. |
| **Tecnologías sugeridas** | Desarrollo web/móvil, bases de datos, integración con calendarios. |
| **Productos / Entregables** | Aplicación web/móvil, sistema de gestión de turnos, notificaciones, panel de administración. |
| **Actores / Usuarios** | Pacientes, personal administrativo, centros de salud. |

---

## Sector textil y moda

### 6. Logística verde – Plataforma de textiles ecológicos

| **Problema** | Exceso de residuos textiles y falta de trazabilidad en la cadena de suministro de prendas ecológicas. |
|--------------|------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que permite a diseñadores y fabricantes medir los sobrantes de tela, calcular el impacto ambiental y gestionar pedidos de prendas elaboradas con fibras sostenibles (ej. fibra de caña de azúcar). Inspirado en el movimiento "Logística Verde" y en empresas de Pasto, Colombia. Incluye catálogo, cotización y seguimiento de pedidos. |
| **Tecnologías sugeridas** | HTML/CSS/JS, bases de datos, integración con sistemas de medición y cotización. |
| **Productos / Entregables** | Tienda virtual, módulo de cotización, panel de inventario de materiales ecológicos, dashboard de sostenibilidad. |
| **Actores / Usuarios** | Diseñadores de moda, marcas de ropa sostenible, proveedores de materiales ecológicos. |

---

### 7. Proyecto textil – Gestión de inventario y producción

| **Problema** | Desorganización en el control de productos, tallas, colores y stock en empresas textiles. |
|--------------|------------------------------------------------------------------------------------------|
| **Solución** | Sistema de inventario en línea que centraliza la información de todos los productos, actualizando automáticamente las existencias tras cada venta o producción. |
| **Tecnologías sugeridas** | React, Node.js, MongoDB o SQL, diseño responsive. |
| **Productos / Entregables** | Aplicación web de inventario, módulo de ventas, reportes de stock, integración con puntos de venta. |
| **Actores / Usuarios** | Dueños de fábricas textiles, almacenes de ropa, comercializadoras. |

---

## Sector logística y transporte

### 8. Aplicación de domicilios (modelo tipo Rappi)

| **Problema** | Pequeños restaurantes y comercios locales carecen de una plataforma digital para ofrecer servicios de entrega a domicilio de manera eficiente. |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación móvil que conecta a comercios (restaurantes, panaderías, graneros) con repartidores independientes, permitiendo gestionar pedidos, rutas y seguimiento en tiempo real mediante GPS. |
| **Tecnologías sugeridas** | Swift, Kotlin, Firebase, integración con Google Maps, sistema de pagos. |
| **Productos / Entregables** | App para repartidores, app para comercios, panel de administración, sistema de calificaciones y reseñas. |
| **Actores / Usuarios** | Comercios pequeños, repartidores, clientes finales. |

---

## Sector comercio y retail

### 9. Sistema de autoservicio (self-checkout)

| **Problema** | Filas largas en supermercados y tiendas, dependencia de cajeros humanos, errores en el registro de ventas e inventario. |
|--------------|--------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Estación de autoservicio (hardware + software) que permite al cliente escanear, revisar y pagar sus productos sin intervención de un cajero. Incluye una app móvil opcional para escanear y pagar desde el celular, integración con inventario y facturación, y un panel administrativo para monitoreo. |
| **Tecnologías sugeridas** | Pantallas táctiles, lectores de código de barras, impresoras de tickets, sistemas de pago (PSE, tarjetas), bases de datos en tiempo real. |
| **Productos / Entregables** | Estación física de autoservicio, aplicación móvil, módulo de integración con inventario, panel de análisis de datos, manuales técnicos y de usuario. |
| **Actores / Usuarios** | Supermercados, tiendas de retail, grandes almacenes. |

---

### 10. Tableta con IA para gestión de cupos en restaurantes

| **Problema** | Falta de eficiencia en la asignación de mesas y gestión de reservas en restaurantes, similar a la problemática de los cines. |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Sistema basado en una tableta con inteligencia artificial que optimiza la asignación de cupos y mejora la experiencia del cliente, reduciendo tiempos de espera y maximizando la ocupación. |
| **Tecnologías sugeridas** | Linux (sistema operativo base), IA para predicción de demanda, bases de datos. |
| **Productos / Entregables** | Aplicación en tableta, panel de control para el personal, integración con sistemas de reserva. |
| **Actores / Usuarios** | Restaurantes, clientes, personal de sala. |

---

## Sector servicios financieros

### 11. Plataforma de ahorro y gestión de fondos

| **Problema** | Necesidad de guardar fondos de manera segura y disponer de ellos en cualquier momento sin recurrir a efectivo o tarjetas físicas. Problemas de pérdida de dinero o robos. |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación que permite a los usuarios depositar, retirar y transferir dinero de forma instantánea desde su celular, con altos estándares de ciberseguridad. Inspirado en modelos como Nequi, Daviplata o PayPal. |
| **Tecnologías sugeridas** | Backend robusto (Java, Python), bases de datos con encriptación, autenticación biométrica, integración con entidades financieras. |
| **Productos / Entregables** | App móvil, sistema de gestión de transacciones, panel de administración, informes de movimientos, sistema de notificaciones. |
| **Actores / Usuarios** | Público general, personas no bancarizadas, microempresarios. |

> **Reflexión técnica:** ¿Cómo funciona el proceso de enviar dinero por Nequi? Incluye descuento al transmisor, acreditación al receptor, y notificaciones automáticas, todo gestionado por microservicios y bases de datos transaccionales.

---

## Sector educación

### 12. Plataforma educativa en tiempos de pandemia

| **Problema** | Falta de herramientas efectivas para la educación a distancia, con dificultades en la interacción, retroalimentación y seguimiento de estudiantes. |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que integra videollamadas (tipo Google Meet), envío de trabajos, pizarra interactiva y sistema de retroalimentación para evaluar la compatibilidad con la educación remota. |
| **Tecnologías sugeridas** | HTML5, CSS, JS, React, WebRTC para videollamadas, bases de datos para gestión de tareas. |
| **Productos / Entregables** | Aula virtual, sistema de asignación de tareas, calificaciones, foros de discusión, informes de desempeño. |
| **Actores / Usuarios** | Instituciones educativas, docentes, estudiantes. |

---

## Sector automotriz

### 13. Prevención de fallas vehiculares en tiempo real

| **Problema** | Fallas mecánicas imprevistas que generan costos elevados y riesgos de accidentes. |
|--------------|-----------------------------------------------------------------------------------|
| **Solución** | Sistema que monitoriza el estado del vehículo a través de sensores y envía alertas al conductor sobre posibles fallas, con recomendaciones de mantenimiento. Integración con talleres para agendar citas. |
| **Tecnologías sugeridas** | Flutter, React, IoT (sensores), bases de datos, notificaciones push. |
| **Productos / Entregables** | App móvil, dashboard para talleres, historial de mantenimiento, alertas predictivas. |
| **Actores / Usuarios** | Conductores particulares, flotas de empresas de transporte, talleres mecánicos. |

---

## Sector ganadero

### 14. Taurus Web – Gestión ganadera

| **Problema** | Administración ineficiente de fincas ganaderas en zonas con baja conectividad a internet, dificultando el control de vacunas, linaje, alimentación y enfermedades. |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que funciona con sincronización offline (base de datos local) y se actualiza cuando hay conexión. Permite registrar y consultar toda la información de cada animal. Inspirada en la empresa real **Taurus Web** (https://tauruswebswp.com/), que ofrece análisis bromatológico digital, aforo de potreros, huella de carbono, monitoreo de estrés calórico, integración con GPS, básculas y lectores de microchip, y un ecosistema colaborativo entre ganaderos. |
| **Tecnologías sugeridas** | HTML, CSS, JS, SQLite (local), sincronización con nube (cuando hay internet). |
| **Productos / Entregables** | Aplicación web, base de datos local, panel de gestión, informes de salud y productividad, integración con dispositivos IoT. |
| **Actores / Usuarios** | Ganaderos, veterinarios, administradores de fincas, ingenieros agrónomos. |

---

## Sector mascotas

### 15. Puppis – Servicios integrales para mascotas

| **Problema** | Falta de un ecosistema digital que conecte a dueños de mascotas con servicios de veterinaria, estética, entrenamiento, adopción y venta de alimentos y accesorios. |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma que integra múltiples servicios: tienda de productos, sistema de citas para veterinarios y barberos, directorio de entrenadores, y un módulo de adopción que conecta fundaciones con posibles adoptantes. |
| **Tecnologías sugeridas** | Desarrollo web full-stack, bases de datos, pasarelas de pago, geolocalización. |
| **Productos / Entregables** | Sitio web / app, sistema de reservas, tienda en línea, panel de administración para fundaciones, sistema de reseñas. |
| **Actores / Usuarios** | Dueños de mascotas, veterinarias, tiendas de mascotas, fundaciones de rescate. |

---

## Sector ambiental y energético

### 16. Monitoreo de material flotante en embalses

| **Problema** | Acumulación de material flotante en embalses que afecta la generación de energía y el ecosistema, sin un control eficiente. |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación que utiliza imágenes satelitales y clasificación automática para identificar zonas con material flotante, enviando alertas a los funcionarios para su gestión. |
| **Tecnologías sugeridas** | Procesamiento de imágenes, machine learning, integración con datos satelitales, panel de control. |
| **Productos / Entregables** | Módulo de clasificación de imágenes, sistema de alertas, dashboards para funcionarios. |
| **Actores / Usuarios** | Entidades ambientales, empresas de energía, autoridades locales. |

---

## Proyectos finales – Sustentación de otras fichas

> **Fecha:** 26 de junio de 2025  
> **Modalidad:** Sustentación de proyecto de cinco grupos que estaban en el último trimestre del tecnólogo, con un máximo de 30 minutos (20 minutos de exposición + 10 minutos de demostración funcional).

### 1. World Food

| **Problema** | Dificultad para encontrar recetas de cocina adaptadas a necesidades específicas (alergias, nivel de habilidad culinaria, presupuesto). |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web de recetas con buscador inteligente, categorización por alergias, y listado de salud según IMS. Incluye login con validación y panel de administrador con CRUD. |
| **Tecnologías** | HTML, CSS, JS, Bootstrap (frontend), PHP (backend), MySQL (base de datos). |
| **Despliegue** | Hostinger. |
| **Inversión estimada** | 38.000.000 COP, retorno esperado del 100% en 4 meses. |
| **Actores / Usuarios** | Universitarios, personas con alergias, usuarios sin habilidades culinarias. |

---

### 2. CVA – Canadian Visa Advise

| **Problema** | Dificultad para obtener visa canadiense debido a la complejidad del proceso migratorio. |
|--------------|-----------------------------------------------------------------------------------------|
| **Solución** | Plataforma que conecta a usuarios con asesores migratorios certificados. Permite solicitar asesoría, agendar citas y gestionar documentos. |
| **Tecnologías** | Tailwind CSS, AWS (MySQL), Python (Flask, Stripe), HTML con Jinja2. |
| **Despliegue** | Render (2 GB RAM, 1 CPU, 25 USD/mes). |
| **Costos totales** | 28.000.000 COP. |
| **Actores / Usuarios** | Usuario (solicita asesoría), Asesor (agenda citas), Administrador (supervisión). |

---

### 3. Eco Green

| **Problema** | Pereza o desconocimiento para reciclar, falta de incentivos para hacerlo. |
|--------------|---------------------------------------------------------------------------|
| **Solución** | Plataforma que crea interacción entre usuario y reciclador mediante incentivos (recompensas). Empresa asociada en Fontibón. |
| **Tecnologías** | HTML, CSS, JS con AJAX, PHP, MySQL. |
| **Control de versiones** | Git y GitHub. |
| **Despliegue** | Hostinger (40.000 COP/mes). |
| **Costos totales** | 23.000.000 COP (6 meses). |
| **Actores / Usuarios** | Usuarios, recicladores, empresa asociada. |

---

### 4. Carbono Cero

| **Problema** | Falta de conciencia y herramientas para medir y reducir la huella de carbono en empresas. |
|--------------|-------------------------------------------------------------------------------------------|
| **Solución** | Plataforma para la medición y registro de huella de carbono, con ideas diarias para reducirla y cálculos automáticos. |
| **Tecnologías** | Desarrollo web, herramientas de diseño: Draw.io, Balsamiq. |
| **Costos estimados** | 17.000.000 COP. |
| **Actores / Usuarios** | Empresas, responsables de sostenibilidad, empleados. |

---

### 5. Pantry Amigo

| **Problema** | Falta de visibilidad de las fundaciones y desconocimiento de los donantes sobre cómo y dónde donar. |
|--------------|------------------------------------------------------------------------------------------------------|
| **Solución** | Página web de donaciones que conecta fundaciones con posibles donantes, facilitando el proceso de donación y mejorando la transparencia. |
| **Actores / Usuarios** | Fundaciones, donantes, personas interesadas en causas sociales. |

---

*Este documento recopila ideas en el marco de la formación ADSO. Cada modelo de negocio puede ser utilizado como punto de partida para proyectos más profundos, sustentaciones o emprendimientos tecnológicos.*

> *La creatividad es poderosa. Gracias por leer.*