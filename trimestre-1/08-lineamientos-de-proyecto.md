# Lineamientos para la documentación de proyectos de software

> Este documento consolida los lineamientos para la redacción y presentación de la documentación de un proyecto de software, basado en estándares y buenas prácticas de la industria. Incluye estructura del documento, entregables por fase y guías para cada sección del proyecto.

> Esto se nos presentó en primer trimestre, pero es algo que se va desarrollando desde el inicio de formación hasta finalizar.

> Esta es mi interpretación personal de la documentación de un proyecto de software.

---

## Tabla de contenido

- [1. Estructura del documento de proyecto](#1-estructura-del-documento-de-proyecto)
- [2. Entregables por fase del proyecto](#2-entregables-por-fase-del-proyecto)
- [3. Guía de redacción por sección](#3-guía-de-redacción-por-sección)
  - [3.1 Portada](#31-portada)
  - [3.2 Introducción](#32-introducción)
  - [3.3 Objetivos](#33-objetivos)
  - [3.4 Planteamiento del problema](#34-planteamiento-del-problema)
  - [3.5 Justificación](#35-justificación)
  - [3.6 Alcance](#36-alcance)
  - [3.7 Impactos](#37-impactos)
  - [3.8 Cronograma por fases](#38-cronograma-por-fases)
- [4. Fase 1: Análisis](#4-fase-1-análisis)
  - [4.1 Levantamiento de información](#41-levantamiento-de-información)
  - [4.2 Módulos a desarrollar](#42-módulos-a-desarrollar)
  - [4.3 Requisitos funcionales y no funcionales](#43-requisitos-funcionales-y-no-funcionales)
- [5. Fase 2: Desarrollo](#5-fase-2-desarrollo)
  - [5.1 Diagramas y documentación de casos de uso](#51-diagramas-y-documentación-de-casos-de-uso)
  - [5.2 Diagrama de clases](#52-diagrama-de-clases)
  - [5.3 Diseño de interfaz gráfica](#53-diseño-de-interfaz-gráfica)
  - [5.4 Mapa de navegación](#54-mapa-de-navegación)
- [6. Fase 3: Implementación](#6-fase-3-implementación)
  - [6.1 Modelo entidad-relación (MER)](#61-modelo-entidad-relación-mer)
  - [6.2 Código de base de datos (Script)](#62-código-de-base-de-datos-script)
  - [6.3 Diccionario de datos](#63-diccionario-de-datos)
  - [6.4 Modelo relacional](#64-modelo-relacional)
- [7. Fase 4: Verificación](#7-fase-4-verificación)
  - [7.1 Manual de usuario](#71-manual-de-usuario)
  - [7.2 Planificación y despliegue](#72-planificación-y-despliegue)
  - [7.3 Testing del software](#73-testing-del-software)
- [8. Anexos](#8-anexos)
- [9. Recomendaciones finales](#9-recomendaciones-finales)

---

## 1. Estructura del documento de proyecto

El documento final debe incluir las cuatro fases del proyecto: **Análisis, Desarrollo, Implementación y Verificación**. Las evidencias entregadas en cada revisión deben ser acordes a la fase en la que se encuentre el proyecto.

### Estructura completa del documento

```
- Portada
- Tabla de contenido
- Lista de figuras
- Lista de tablas
- Lista de anexos
- Introducción
- Objetivos
  - Objetivo General
  - Objetivos Específicos
- Planteamiento del Problema
- Justificación
- Alcance
- Impactos
- Cronograma por fases

## 1. FASE 1 ANÁLISIS
1.1 Levantamiento de Información
  1.1.1 Métodos utilizados
  1.1.2 Análisis del levantamiento de información
  1.1.3 Estimación de costos y presupuesto
1.2 Módulos a desarrollar
1.3 Requisitos Funcionales y No funcionales

## 2. FASE 2 DESARROLLO
2.1 Diagramas y Documentación de Casos de Uso de Alto Nivel
2.2 Diagrama de Clases
2.3 Diseño de interfaz gráfica del SI (formularios)
2.4 Mapa de navegación

## 3. FASE 3 IMPLEMENTACIÓN
3.1 Modelo Entidad Relación
3.2 Código BD Script
3.3 Diccionario de Datos
3.4 Modelo relacional generado del gestor de la base de datos

## 4. FASE 4 VERIFICACIÓN
4.1 Manual de usuario
4.2 Planificar y desplegar el software Construido
4.3 Testing del software
```

---

## 2. Entregables por fase del proyecto

| **Fase** | **Entregables** |
|----------|-----------------|
| **ANÁLISIS** | Documento de proyecto que incluya: <br> - Propuesta de proyecto (Introducción, Objetivos, Problema, Justificación, Alcance, Impactos). <br> - Cronograma <br> - Levantamiento de Información (Métodos, análisis y anexos) <br> - Módulos a desarrollar <br> - Requisitos Funcionales y No Funcionales |
| **DESARROLLO** | Documento de proyecto que incluya la fase de análisis completa y con las correcciones aplicadas; adicionalmente: <br> - Diagramas de Casos de Uso de alto nivel con su respectiva Documentación <br> - Diagrama de Clases <br> - Diseño de Interfaz Gráfica (Formularios) <br> - Mapa de Navegación. <br> *Los diagramas deben anexarse como imagen en el documento de proyecto.* |
| **IMPLEMENTACIÓN** | Documento de proyecto que incluya la fase de análisis y desarrollo completa y con las correcciones aplicadas; adicionalmente: <br> - Script de Base de Datos y Diccionario de datos. <br> - Proyecto de aplicación desarrollado en el lenguaje definido para el proyecto: <br>   - Interfaz amigable y acorde con las necesidades del cliente y su imagen corporativa. <br>   - Navegabilidad adecuada y acorde con los privilegios de usuario establecida en los diagramas de caso de uso. <br>   - Diseño de formularios con buen y variado uso de controles, herramientas y propiedades del lenguaje. <br>   - Desarrollo de la matriz CRUD. |
| **VERIFICACIÓN** | Documento de proyecto que incluya la fase de análisis, desarrollo e implementación completa y con las correcciones aplicadas. <br> - Proyecto de aplicación desarrollado (por proyectos): <br>   - Implementación de CRUD con procedimientos almacenados para los módulos 100% funcional. <br>   - Validación de campos, campos calculados, control de errores y excepciones <br>   - Login de usuario y privilegios de usuario mínimo para 2 roles <br>   - Manual de usuario |

---

## 3. Guía de redacción por sección

### 3.1 Portada

La portada debe incluir el **título del proyecto**, que debe describir:

- **QUÉ** se va a hacer
- **PARA QUÉ**
- **EN DÓNDE**

**Ejemplo de título:**
> *Sistema de Información para la Gestión de Facturación e Inventario en la Comercializadora "La Rebaja"*

**Contenido de la portada:**

```
Título del Proyecto

Nombre del Autor
Nombre del Tutor o Supervisor

Centro o Institución (si aplica)
Programa de Formación
Código y Número de Ficha (si aplica)
Ciudad, Fecha
```

### 3.2 Introducción

Presenta el contexto del proyecto, el problema identificado y la solución propuesta. Debe ser clara y concisa, estableciendo el propósito del documento.

### 3.3 Objetivos

#### Objetivo General

Redactado con un **verbo en infinitivo** que se pueda verificar y medir. Debe responder directamente al problema identificado.

**Ejemplo:**
> *Desarrollar un software de aplicación apoyado en el uso de dispositivos móviles como medio de interacción con el usuario, que permita gestionar las cotizaciones de los aparatos requeridos por los clientes en la Compañía Interamericana de Refrigeración Inc. S.A.*

#### Objetivos Específicos

Relacionados con cada fase del proyecto. Deben usar verbos en infinitivo que correspondan a las fases del ciclo de vida del software:

| **Fase del Proyecto** | **Verbos sugeridos** |
|-----------------------|----------------------|
| Análisis | Analizar, Diagnosticar, Identificar, Estudiar |
| Diseño | Diseñar, Planear, Estructurar, Esquematizar |
| Desarrollo | Desarrollar, Construir, Fabricar, Programar |
| Implementación | Implementar, Montar, Poner en funcionamiento, Instalar |
| Evaluación | Evaluar, Valorar, Verificar, Comprobar |

### 3.4 Planteamiento del problema

Describe la situación actual que motiva el proyecto, identificando las dificultades o necesidades que se pretenden solucionar. Debe incluir:

- Contexto del problema.
- Situación actual y sus deficiencias.
- Consecuencias de no resolver el problema.
- Pregunta de investigación que guía el proyecto.

**Estructura sugerida:**
1. Contexto del problema.
2. Descripción detallada de los inconvenientes identificados.
3. Consecuencias derivadas de la situación actual.
4. Pregunta que orienta la solución.

**Ejemplo:**

> *El subgerente es el encargado de coordinar el proceso de importación de las distintas referencias de productos que se venden en la comercializadora, pero deben ser autorizadas por el gerente de la compañía. En este proceso se han presentado múltiples inconvenientes puesto que la información de todas las importaciones se encuentra consignada en un archivo de Excel, el cual solo se encuentra en el computador del subgerente para evitar inconvenientes con las versiones del mismo, pero que representa un problema cuando el computador se infecta con virus o se corta el servicio eléctrico en el local, generando pérdida de información parcial o total.*

**Pregunta de investigación:**
> *¿Será posible que con la implementación del Sistema de Información para la Gestión de Facturación puedan optimizarse los procesos administrativos al interior de la empresa?*

### 3.5 Justificación

Explica **por qué** se desarrollará el proyecto y **cómo** se realizará. Debe incluir razones de peso y coherentes con el problema planteado. Argumentos sólidos y sustentados, con beneficios esperados.

**Ejemplo:**

> *En vista de las graves problemáticas de seguridad y pérdida de información que se han presentado en el proceso de compras a cargo del subgerente, se hace necesario garantizar que la información de las importaciones se maneje en un sistema de información con una base de datos relacional en único servidor accesible vía intranet, sobre la cual se generarían copias de seguridad semanalmente y mensualmente. Por su parte en el proceso de ventas, se necesitaría implementar un módulo de facturación donde los precios de los productos se consulten directamente desde la base de datos, evitando de esta forma problemas de digitación y facilitando a su vez la auditoría por parte del gerente...*

### 3.6 Alcance

Define los **límites del proyecto**:

- Hasta dónde se va a realizar.
- Restricciones existentes.
- Productos o resultados concretos del proyecto.

**Ejemplo:**

> *El siguiente proyecto tiene como finalidad desarrollar un sistema de información para la gestión de facturación e inventario. Donde se tendrán presentes las fases de desarrollo, distribuidas en: Fase de Análisis de la información, el cual se emplean métodos como entrevista, encuestas, método de observación, técnicas audiovisuales, sesión en grupo, con el fin de concluir aquellas falencias encontradas para posterior organización en el desarrollo. En la fase de planeación se estimarán tiempos de trabajo, el cual permitirá al programador y diseñador concertar con el cliente fechas y actividades...*

### 3.7 Impactos

Se desarrollan teniendo en cuenta los siguientes ámbitos:

| **Tipo de Impacto** | **Descripción** |
|---------------------|-----------------|
| **Económico** | Efectos en términos de dinero, producción de bienes o empleo que genera el proyecto. |
| **Tecnológico** | Efectos en la generación de cambios en el área de tecnología asociada. |
| **Social** | Efectos sobre la comunidad asociada al proyecto. |
| **Ambiental** | Efectos que produce la ejecución del proyecto sobre el medio ambiente. |

### 3.8 Cronograma por fases

Debe incluir las fases del proyecto con sus respectivas actividades. Cada actividad debe tener asignado un responsable. Mínimo 4 actividades por fase.

---

## 4. Fase 1: Análisis

### 4.1 Levantamiento de información

#### 4.1.1 Métodos utilizados

- Mínimo 2 métodos de recolección de datos.
- Justificar la elección de cada método.

**Métodos comunes:**
- Entrevista
- Encuesta
- Observación
- Cuestionario
- Talleres (Workshops)
- Historias de usuario

#### 4.1.2 Análisis del levantamiento de información

- Un análisis por cada método utilizado.
- Describir qué se pudo obtener con la aplicación de cada método.
- Hallazgos clave y su relevancia para el proyecto.

#### 4.1.3 Estimación de costos y presupuesto

- Desglose de costos directos e indirectos.
- Recursos necesarios para el desarrollo.
- Presupuesto estimado del proyecto.

### 4.2 Módulos a desarrollar

Describir brevemente cada módulo que conformará el sistema de información.

**Ejemplo de módulos:**
- Módulo de Inicio de Sesión
- Módulo de Gestión de Empleados
- Módulo de Facturación
- Módulo de Inventario
- Módulo de Reportes

### 4.3 Requisitos funcionales y no funcionales

#### Requisitos funcionales

Definen **qué** debe hacer el sistema.

**Formato:**
- Código: `RQF###` (iniciando en 001)
- Nombre del requisito
- Tipo de Usuario
- Prioridad: Alta/Esencial, Media/Deseado, Baja/Opcional
- Descripción detallada

| **Código Requisito** | RQF001 |
|----------------------|--------|
| **Nombre** | Inicio de Sesión |
| **Tipo de Usuario** | --- |
| **Prioridad** | Alta/Esencial |
| **Descripción:** | El sistema de información permitirá el acceso de los usuarios al sistema previa validación de un usuario y contraseña y le mostrará las acciones a efectuar según su rol. |

| **Código Requisito** | RQF002 |
|----------------------|--------|
| **Nombre** | Gestionar Información Empleado |
| **Tipo de Usuario** | Gerente y SubGerente |
| **Prioridad** | Alta/Esencial |
| **Descripción:** | El sistema deberá permitir al Gerente y SubGerente registrar, consultar, modificar o inactivar la información de los empleados como: Número de identificación, apellidos, nombres, dirección, teléfono, cargo. |

#### Requisitos no funcionales

Definen **cómo** debe comportarse el sistema. Se solicitan a nivel de **Hardware, Diseño (Colores y Fuentes)**.

**Formato:**
- Código: `RQNF###` (iniciando en 001)
- Nombre del requisito
- Descripción detallada

| **Código Requisito** | RQNF001 |
|----------------------|--------|
| **Nombre** | Especificaciones Mínimas de Hardware y Software |
| **Descripción:** | Tener acceso a uno o más computadores: Mínimo 2 GB RAM, Sistema Operativo Windows 7 o superior, con las herramientas y programas necesarios para llevar a cabo el aplicativo y la base de datos. |

| **Código Requisito** | RQNF002 |
|----------------------|--------|
| **Nombre** | Conectividad |
| **Descripción:** | La empresa debe contar con una red LAN que le permitirá conectar sus terminales de trabajo al servidor de una forma más adecuada para hacer uso del aplicativo. |

| **Código Requisito** | RQNF003 |
|----------------------|--------|
| **Nombre** | Diseño e Imagen |
| **Descripción:** | El aplicativo debe hacer uso de colores y fuentes que faciliten la adecuada visualización por parte del usuario y sean acordes con la imagen corporativa de la empresa. |

---

## 5. Fase 2: Desarrollo

### 5.1 Diagramas y documentación de casos de uso

**Lineamientos:**
- Trabajar con **UML 2.5**.
- Casos de Uso de **Alto Nivel**.
- Identificar cada caso de uso con `CU###`.
- Exportar la imagen del diagrama (no pantallazo).
- Colocar el diagrama con su respectivo título de figura.
- Adjuntar la **documentación de casos de uso** con su respectivo título de tabla.

#### Ejemplo de formato de documentación de caso de uso

| **1. IDENTIFICACIÓN DE CASO DE USO** | | | | |
|---------------------------------------|-|-|-|-|
| 1.1 Id Caso | CUD 002 | | | |
| 1.2 Nombre | Registrar Empleado | | | |

| **2. HISTÓRICO DE CASO DE USO** | | | | |
|----------------------------------|-|-|-|-|
| 2.1 Autor | | Juan Pérez | | |
| 2.2 Fecha Creación | | 30/03/2017 | | |
| 2.3 Última Actualización | | 30/03/2017 | | |
| 2.4 Actualizado por | | Juan Pérez | | |
| 2.5 Versión | | 1.0 | | |

| **3. DEFINICIÓN DE UN CASO DE USO** | | | | |
|--------------------------------------|-|-|-|-|
| 3.1 DESCRIPCIÓN | Permite el registro de información de un nuevo empleado | | | |
| 3.2 ACTORES | Gerente, Subgerente, Vendedor | | | |
| 3.3 PRECONDICIONES | El usuario debe estar autenticado en el sistema CU 001 | | | |

**Flujo Normal:**

| **Paso** | **Actor** | **Sistema** |
|----------|-----------|-------------|
| 1 | Usuario da clic en el menú principal en Gestión de Empleados | Despliega una ventana con los servicios (Registrar Empleado, Consultar empleado, Actualizar Empleado, Inactivar Empleado) |
| 2 | Selecciona mediante un clic el ítem Registrar Empleados | Muestra un formulario con la casilla activa para búsqueda de empleado por nombre y documento. |
| 3 | Usuario diligencia datos y da clic en buscar. | Muestra formulario lista de coincidencias, si no hay se puede proceder con la creación del empleado. |
| 4 | Selecciona Registrar | Muestra formulario de empleado, con los campos en blanco para registro de información |
| 5 | Diligencia información solicitada del formulario y da clic en registrar | Genera mensaje donde informa la creación exitosa del empleado. |

**Flujo Alternativo:** (si existe otra forma de acceder al caso de uso)

| **Paso** | **Actor** | **Sistema** |
|----------|-----------|-------------|
| | | |

**Flujo Excepcional:**

| **Paso** | **Actor** | **Sistema** |
|----------|-----------|-------------|
| 4.a | | Muestra mensaje "Empleado ya se encuentra registrado" y muestra los datos encontrados. |
| 5.a | Usuario no llena completos los datos del formulario | El sistema muestra mensaje "Faltan campos por diligenciar, por favor completar" |

**Pos condiciones:**
Sistema genera confirmación de empleado registrado con éxito.

**Frecuencia:**
- Alta
- Media
- Baja

### 5.2 Diagrama de clases

**Lineamientos:**
- Usar herramienta de modelado (DIA, Lucidchart, draw.io).
- Exportar la imagen del diagrama (no pantallazo).
- Debe apreciarse **visibilidad** y **multiplicidad**.
- Colocar el título de figura correspondiente.

### 5.3 Diseño de interfaz gráfica del sistema de información

- Pantallazos de formularios.
- Visual acorde con casos de uso planteados.
- Se sugiere el uso de **mockups** para el diseño de interfaces.

**Herramientas de mockups:**
- Balsamiq
- Figma
- Adobe XD

### 5.4 Mapa de navegación

Representación visual de la estructura y navegabilidad del sistema. Debe mostrar:

- Pantallas del sistema.
- Relaciones y flujos de navegación entre pantallas.
- Accesos según roles de usuario.

---

## 6. Fase 3: Implementación

### 6.1 Modelo entidad-relación (MER)

**Lineamientos:**
- Usar herramienta de modelado.
- Exportar la imagen del diagrama (no pantallazo).
- Colocar el título de figura correspondiente.

### 6.2 Código de base de datos (Script)

- Script completo de creación de la base de datos.
- Incluye tablas, relaciones, restricciones y datos iniciales.
- Debe ser generado desde el gestor de base de datos.

### 6.3 Diccionario de datos

Documentación detallada de cada tabla de la base de datos, incluyendo:

| **Nombre Tabla:** | Usuario |
|-------------------|---------|
| **Fecha:** | 25/03/2017 |
| **Descripción:** | Tabla que contiene los datos de un usuario del sistema. |

| **Campo** | **Tipo de Dato** | **Tamaño** | **Restricción** | **Descripción** |
|-----------|------------------|------------|-----------------|-----------------|
| Id_usuario | BigInt | | Primary Key | Número de identificación del usuario. |
| Nombre_usuario | Varchar | 50 | No | Nombre del usuario. |
| Correo_usuario | Varchar | 50 | No | Correo electrónico en que se encuentra el usuario. |
| Fecha_nacimiento | Date | | No | Fecha nacimiento del usuario |
| Edad_usuario | Int | | No | Edad actual usuario |
| Telefono_Usuario | Varchar | 12 | No | Teléfono del usuario |
| Cargo | Varchar | 30 | No | Cargo del usuario en la empresa |
| Nombre_usuario | Varchar | 30 | Unique | Nombre del usuario, único |
| Clave_usuario | Varchar | 20 | No | Clave del usuario |

### 6.4 Modelo relacional

**Lineamientos:**
- Generado desde el gestor de base de datos.
- Exportar la imagen del diagrama (no pantallazo).
- Colocar el título de figura correspondiente.

---

## 7. Fase 4: Verificación

### 7.1 Manual de usuario

Documento que guía al usuario final en el uso del sistema. Debe incluir:

- Introducción al sistema.
- Requisitos de instalación.
- Guía paso a paso de las funcionalidades principales.
- Capturas de pantalla y descripciones.
- Solución de problemas comunes.

### 7.2 Planificación y despliegue

- Plan de despliegue.
- Configuración del entorno de producción.
- Instalación y puesta en funcionamiento.

### 7.3 Testing del software

- Validación de implementación de CRUD con procedimientos almacenados.
- Verificación de módulos 100% funcionales.
- Validación de campos y campos calculados.
- Control de errores y excepciones.
- Login de usuario y privilegios mínimo para 2 roles.

---

## 8. Anexos

Incluye el proceso completo de análisis y recolección de información:

- **Listas de chequeo** utilizadas.
- **Encuestas y entrevistas** aplicadas.
- **Fotos** del proceso de observación.
- **Formatos** (facturas, nóminas, plantillas, etc.).
- **Tabulación** en caso de aplicar encuestas o cuestionarios.

---

## 9. Recomendaciones finales

- **Redacción en tercera persona o forma impersonal:**
  - Evitar: "En nuestro proyecto..."
  - Usar: "En el proyecto..."
  - Evitar: "Nuestros clientes se sentirán satisfechos..."
  - Usar: "Los clientes se sentirán satisfechos..."

- **Revisión:** Leer lo escrito en voz alta ayuda a mejorar la redacción, puntuación y claridad de las ideas.

- **Referencias:** Incluir referencias bibliográficas con formato estandarizado (APA, IEEE, según corresponda).

---

> Gracias por leer.