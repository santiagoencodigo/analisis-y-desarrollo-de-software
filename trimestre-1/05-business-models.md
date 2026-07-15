# Modelos de negocio y soluciones tecnológicas – Trimestre 1 ADSO

Este documento consolida los modelos de negocio, ideas de proyecto y soluciones tecnológicas planteadas por mis compañeros durante el primer trimestre del tecnólogo en Análisis y Desarrollo de Software (ADSO). Cada entrada describe un sector económico, una problemática real y una propuesta de software que aborda dicha necesidad, junto con las tecnologías y entregables sugeridos.

> Este proceso fue importante para generar ideas, antes de realmente iniciar con un proyecto formativo.

> Esta información hace parte de los apuntes que tome sobre las exposiciones que llegue a presenciar.

---

## Tabla de contenido

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
- [Metodologías y herramientas de negocio](#metodologías-y-herramientas-de-negocio)

---

## Sector agropecuario

### 1. Agro TIC – Asesoría inteligente para cultivos

| **Problema** | Falta de acceso a tecnología y asesoría técnica para agricultores, lo que dificulta la detección temprana de enfermedades y plagas en los cultivos. |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación móvil que utiliza **machine learning** para identificar enfermedades a través de fotografías de las plantas. Ofrece recomendaciones personalizadas sobre fumigación, abonos y vitaminas. Incluye un chat en tiempo real para conectar a agricultores con agrónomos y una comunidad de intercambio de conocimientos. |
| **Tecnologías sugeridas** | Ionic Framework, Python (para el modelo de ML), bases de datos SQL, integración con cámaras y servicios de geolocalización. |
| **Productos / Entregables** | App móvil, modelo de reconocimiento de imágenes, sistema de chat, panel de administración, integración con drones para monitoreo aéreo (opcional). |
| **Usuarios objetivo** | Agricultores, agrónomos, ingenieros agrícolas. |

---

### 2. Estudio de campos y suelos fértiles

| **Problema** | Desconocimiento de la composición y fertilidad de los suelos, lo que lleva a malas decisiones de siembra y pérdida de cosechas. |
|--------------|---------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Base de datos y plataforma web que recopila información de senderos, terrenos y análisis de suelos, permitiendo a agrónomos e ingenieros consultar y compartir datos para optimizar la producción. |
| **Tecnologías sugeridas** | Python, Java, bases de datos espaciales (PostGIS), frontend con HTML/CSS/JS. |
| **Productos / Entregables** | Aplicación web, sistema de gestión de datos de suelos, informes de fertilidad, mapas interactivos. |
| **Usuarios objetivo** | Ingenieros agrónomos, agricultores técnicos, entidades gubernamentales. |

---

## Sector salud

### 3. Sistema de gestión de medicamentos e historial clínico

| **Problema** | Dificultad de los pacientes (especialmente adultos mayores) para recordar horarios y dosis de medicamentos, así como la falta de integración entre la receta médica y el seguimiento. |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que integra el historial clínico del paciente con un sistema de recordatorios de medicación. Al finalizar una cita, el médico genera una receta digital que se sincroniza con el sistema, el cual notifica al paciente cuándo y qué medicamento tomar. |
| **Tecnologías sugeridas** | Python, CSS, SQL, notificaciones push, integración con APIs de farmacias. |
| **Productos / Entregables** | Aplicación web, base de datos de pacientes y recetas, sistema de alertas, panel para médicos, informes de adherencia. |
| **Usuarios objetivo** | Pacientes, médicos, farmacéuticas, centros de salud (como Colsubsidio, La Cruz Verde). |

---

## Sector textil y moda

### 4. Logística verde – Plataforma de textiles ecológicos

| **Problema** | Exceso de residuos textiles y falta de trazabilidad en la cadena de suministro de prendas ecológicas. |
|--------------|------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que permite a diseñadores y fabricantes medir los sobrantes de tela, calcular el impacto ambiental y gestionar pedidos de prendas elaboradas con fibras sostenibles (ej. fibra de caña de azúcar). Incluye un catálogo de productos, sistema de cotización y seguimiento de pedidos. |
| **Tecnologías sugeridas** | HTML/CSS/JS, bases de datos, integración con sistemas de medición y cotización. |
| **Productos / Entregables** | Tienda virtual, módulo de cotización, panel de inventario de materiales ecológicos, dashboard de sostenibilidad. |
| **Usuarios objetivo** | Diseñadores de moda, marcas de ropa sostenible, proveedores de materiales ecológicos. |

---

### 5. Proyecto textil – Gestión de inventario y producción

| **Problema** | Desorganización en el control de productos, tallas, colores y stock en empresas textiles. |
|--------------|------------------------------------------------------------------------------------------|
| **Solución** | Sistema de inventario en línea que centraliza la información de todos los productos, actualizando automáticamente las existencias tras cada venta o producción. |
| **Tecnologías sugeridas** | React, Node.js, MongoDB o SQL, diseño responsive. |
| **Productos / Entregables** | Aplicación web de inventario, módulo de ventas, reportes de stock, integración con puntos de venta. |
| **Usuarios objetivo** | Dueños de fábricas textiles, almacenes de ropa, comercializadoras. |

---

## Sector logística y transporte

### 6. Aplicación de domicilios (modelo tipo Rappi)

| **Problema** | Pequeños restaurantes y comercios locales carecen de una plataforma digital para ofrecer servicios de entrega a domicilio de manera eficiente. |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación móvil que conecta a comercios (restaurantes, panaderías, graneros) con repartidores independientes, permitiendo gestionar pedidos, rutas y seguimiento en tiempo real mediante GPS. |
| **Tecnologías sugeridas** | Swift, Kotlin, Firebase, integración con Google Maps, sistema de pagos. |
| **Productos / Entregables** | App para repartidores, app para comercios, panel de administración, sistema de calificaciones y reseñas. |
| **Usuarios objetivo** | Comercios pequeños, repartidores, clientes finales. |

---

## Sector comercio y retail

### 7. Sistema de autoservicio (self-checkout)

| **Problema** | Filas largas en supermercados y tiendas, dependencia de cajeros humanos, errores en el registro de ventas e inventario. |
|--------------|--------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Estación de autoservicio (hardware + software) que permite al cliente escanear, revisar y pagar sus productos sin intervención de un cajero. Incluye una app móvil opcional para escanear y pagar desde el celular, integración con inventario y facturación, y un panel administrativo para monitoreo. |
| **Tecnologías sugeridas** | Pantallas táctiles, lectores de código de barras, impresoras de tickets, sistemas de pago (PSE, tarjetas), bases de datos en tiempo real. |
| **Productos / Entregables** | Estación física de autoservicio, aplicación móvil, módulo de integración con inventario, panel de análisis de datos, manuales técnicos y de usuario. |
| **Usuarios objetivo** | Supermercados, tiendas de retail, grandes almacenes. |

---

## Sector servicios financieros

### 8. Plataforma de ahorro y gestión de fondos

| **Problema** | Necesidad de guardar fondos de manera segura y disponer de ellos en cualquier momento sin recurrir a efectivo o tarjetas físicas. |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación que permite a los usuarios depositar, retirar y transferir dinero de forma instantánea desde su celular, con altos estándares de ciberseguridad. Inspirado en modelos como Nequi, Daviplata o PayPal. |
| **Tecnologías sugeridas** | Backend robusto (Java, Python), bases de datos con encriptación, autenticación biométrica, integración con entidades financieras. |
| **Productos / Entregables** | App móvil, sistema de gestión de transacciones, panel de administración, informes de movimientos, sistema de notificaciones. |
| **Usuarios objetivo** | Público general, personas no bancarizadas, microempresarios. |

---

## Sector educación

### 9. Plataforma educativa en tiempos de pandemia

| **Problema** | Falta de herramientas efectivas para la educación a distancia, con dificultades en la interacción, retroalimentación y seguimiento de estudiantes. |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que integra videollamadas (tipo Google Meet), envío de trabajos, pizarra interactiva y sistema de retroalimentación para evaluar la compatibilidad con la educación remota. |
| **Tecnologías sugeridas** | HTML5, CSS, JS, React, WebRTC para videollamadas, bases de datos para gestión de tareas. |
| **Productos / Entregables** | Aula virtual, sistema de asignación de tareas, calificaciones, foros de discusión, informes de desempeño. |
| **Usuarios objetivo** | Instituciones educativas, docentes, estudiantes. |

---

## Sector automotriz

### 10. Prevención de fallas vehiculares en tiempo real

| **Problema** | Fallas mecánicas imprevistas que generan costos elevados y riesgos de accidentes. |
|--------------|-----------------------------------------------------------------------------------|
| **Solución** | Sistema que monitoriza el estado del vehículo a través de sensores y envía alertas al conductor sobre posibles fallas, con recomendaciones de mantenimiento. Integración con talleres para agendar citas. |
| **Tecnologías sugeridas** | Flutter, React, IoT (sensores), bases de datos, notificaciones push. |
| **Productos / Entregables** | App móvil, dashboard para talleres, historial de mantenimiento, alertas predictivas. |
| **Usuarios objetivo** | Conductores particulares, flotas de empresas de transporte, talleres mecánicos. |

---

## Sector ganadero

### 11. Taurus Web – Gestión ganadera

| **Problema** | Administración ineficiente de fincas ganaderas en zonas con baja conectividad a internet, dificultando el control de vacunas, linaje, alimentación y enfermedades. |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma web que funciona con sincronización offline (base de datos local) y se actualiza cuando hay conexión. Permite registrar y consultar toda la información de cada animal. |
| **Tecnologías sugeridas** | HTML, CSS, JS, SQLite (local), sincronización con nube (cuando hay internet). |
| **Productos / Entregables** | Aplicación web, base de datos local, panel de gestión, informes de salud y productividad. |
| **Usuarios objetivo** | Ganaderos, veterinarios, administradores de fincas. |

---

## Sector mascotas

### 12. Puppis – Servicios integrales para mascotas

| **Problema** | Falta de un ecosistema digital que conecte a dueños de mascotas con servicios de veterinaria, estética, entrenamiento, adopción y venta de alimentos y accesorios. |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Plataforma que integra múltiples servicios: tienda de productos, sistema de citas para veterinarios y barberos, directorio de entrenadores, y un módulo de adopción que conecta fundaciones con posibles adoptantes. |
| **Tecnologías sugeridas** | Desarrollo web full-stack, bases de datos, pasarelas de pago, geolocalización. |
| **Productos / Entregables** | Sitio web / app, sistema de reservas, tienda en línea, panel de administración para fundaciones, sistema de reseñas. |
| **Usuarios objetivo** | Dueños de mascotas, veterinarias, tiendas de mascotas, fundaciones de rescate. |

---

## Sector ambiental y energético

### 13. Monitoreo de material flotante en embalses

| **Problema** | Acumulación de material flotante en embalses que afecta la generación de energía y el ecosistema, sin un control eficiente. |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Solución** | Aplicación que utiliza imágenes satelitales y clasificación automática para identificar zonas con material flotante, enviando alertas a los funcionarios para su gestión. |
| **Tecnologías sugeridas** | Procesamiento de imágenes, machine learning, integración con datos satelitales, panel de control. |
| **Productos / Entregables** | Módulo de clasificación de imágenes, sistema de alertas, dashboards para funcionarios. |
| **Usuarios objetivo** | Entidades ambientales, empresas de energía, autoridades locales. |

---

## Metodologías y herramientas de negocio

Además de las soluciones específicas, durante el trimestre se abordaron conceptos transversales para la construcción de modelos de negocio:

| **Concepto** | **Descripción** |
|--------------|-----------------|
| **Propuesta técnica vs. económica** | La propuesta técnica describe cómo se realizará el proyecto (metodología, cronograma, especificaciones); la económica detalla costos, presupuesto y forma de pago. Ambas son esenciales en licitaciones y contratos. |
| **Canales de venta** | Identificación de canales físicos (tiendas, catálogos) y virtuales (marketplace, redes sociales) para llegar al cliente. |
| **Fidelización de clientes** | Mecanismos como reseñas, estrellas, programas de lealtad, y sistemas de calificación para retener usuarios. |
| **Pasarelas de pago** | Integración con PSE, tarjetas de crédito, billeteras digitales; aspectos legales y de seguridad. |
| **Modelo de negocio** | Estudio de la cadena de valor, proveedores, clientes, flujo de ingresos y costos. |
| **Metodologías ágiles** | Scrum, Canvas y otras herramientas para la gestión de proyectos de software. |

---

*Este documento recopila ideas y ejercicios desarrollados en el marco de la formación ADSO. Cada modelo de negocio puede ser utilizado como punto de partida para proyectos más profundos, sustentaciones o emprendimientos tecnológicos. "Quien quita."*

> La creatividad es poderosa. Gracias por leer!