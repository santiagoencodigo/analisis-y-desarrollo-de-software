# Séptimo Trimestre – ADSO

> Este directorio corresponde al **séptimo trimestre** del programa de formación en Análisis y Desarrollo de Software (ADSO). El contenido aquí documentado se desarrolla durante el período comprendido entre el **29 de septiembre de 2026** y el **12 de diciembre de 2026**.

---

## Tabla de contenido

- [Descripción general](#descripción-general)
- [Competencias del trimestre](#competencias-del-trimestre)
- [Estructura del directorio](#estructura-del-directorio)
- [Trabajo desarrollado](#trabajo-desarrollado)
  - [1. Migración de Bases de Datos](#1-migración-de-bases-de-datos)
  - [2. Aseguramiento de la Calidad (QA) y Pruebas](#2-aseguramiento-de-la-calidad-qa-y-pruebas)
  - [3. Documentación Técnica](#3-documentación-técnica)

---

## Descripción general

Este trimestre marca la etapa final de la formación lectiva del tecnólogo, enfocándose en la **implantación, construcción y aseguramiento de la calidad del software**, así como en el fortalecimiento de competencias transversales como el **inglés** y la **cultura emprendedora y empresarial**.

El trabajo se desarrolla de forma integrada, aplicando los conocimientos adquiridos en los trimestres anteriores al proyecto formativo **OperPan** (sistema de gestión para Estación Paisa), con énfasis en las buenas prácticas del desarrollo de software, la documentación técnica y la validación de datos.

---

## Competencias del trimestre

| **Competencia** | **Descripción** |
|-----------------|-----------------|
| **Inglés** | Fortalecimiento de la comunicación oral y escrita en contextos laborales y cotidianos, aplicada al entorno profesional del desarrollo de software. |
| **Cultura Emprendedora y Empresarial** | Desarrollo de la idea de negocio, caracterización del sector productivo, estructuración del plan de negocio y valoración de la propuesta emprendedora. |
| **Implantación del Software** | Planificación de actividades de implantación, despliegue del software conforme a la arquitectura y políticas establecidas, y documentación del proceso de implantación siguiendo estándares de calidad. (Aplicado a la migración de bases de datos de Access a XAMPP). |
| **Construcción del Software** | Realización de pruebas al software para verificar su funcionalidad. (Aplicado a pruebas funcionales en el módulo de asistencia y usuarios). |
| **Adopción de Buenas Prácticas en el Proceso de Desarrollo de Software** | Incorporación de actividades de aseguramiento de la calidad, verificación de la calidad del software conforme a las prácticas asociadas a los procesos de desarrollo, y realización de actividades de mejora a partir de los resultados de la verificación. (Aplicado a pruebas de caja blanca y análisis de complejidad ciclomática). |

---

## Estructura del directorio

```text
trimestre-7/
├── README.md                               # Este archivo
├── index.html                              # Contenedor web de los proyectos y temas vistos
├── migracion-de-un-millon-de-datos.pdf     # Documentación de la estrategia de migración masiva
└── migrate-access-to-xampp.pdf             # Guía técnica de migración de Access a MySQL/XAMPP
```

---

## Trabajo desarrollado

Durante este trimestre, se llevaron a cabo dos ejes fundamentales: la **migración de datos** y el **aseguramiento de la calidad (QA)** del sistema.

### 1. Migración de Bases de Datos

Se realizó un proceso de migración de datos desde **Microsoft Access** hacia **XAMPP (MySQL/MariaDB)**, aplicando las siguientes estrategias y técnicas:

*   **Estrategia:** Migración **Big Bang** (directa). Se trasladaron todos los datos en un solo proceso, sin dejar los sistemas funcionando en paralelo.
*   **Técnica:** Carga manual mediante archivos planos (`.txt`, `.csv`) y comandos SQL (`LOAD DATA INFILE`).
*   **Orden de migración:** Se respetó la jerarquía de las tablas. Primero las tablas maestras (`Cliente`, `Producto`) y al final la tabla dependiente (`Pedidos`), para evitar errores de integridad referencial (Foreign Key).
*   **Mapeo de Datos:** Se realizó una conversión de tipos de datos (ej. `Autonumeración` de Access a `AUTO_INCREMENT` de MySQL, `Texto corto` a `VARCHAR`).
*   **Juego de Caracteres:** Se garantizó el uso de `utf8mb4` para preservar tildes, eñes y caracteres especiales.
*   **Scripts SQL:** Creación de bases de datos, tablas, llaves foráneas, procedimientos almacenados (ej. `listar_por_region`) y consultas de verificación (`SELECT COUNT(*)`).

### 2. Aseguramiento de la Calidad (QA) y Pruebas

Se aplicaron técnicas de **pruebas estáticas y dinámicas** para validar la funcionalidad del sistema OperPan:

*   **Pruebas de Caja Blanca:**
    *   Análisis de **Complejidad Ciclomática** (\(V(G)\)) en funciones críticas de `views.py` (ej. `registrar_asistencia`, `cambiar_estado_asistencia`).
    *   Identificación de **Caminos Básicos** y diseño de casos de prueba mínimos para cubrir todos los flujos lógicos (éxito, error de método, error de datos, error de horario).
*   **Pruebas Funcionales:**
    *   Diseño de tablas de prueba con entradas, estado inicial de la base de datos y resultados esperados.
    *   Detección de defectos de integración (ej. desincronización de contadores en el Dashboard tras registrar asistencia).
*   **Verificación de Datos:**
    *   Validación de registros migrados mediante consultas de conteo y revisión visual de datos truncados o corruptos.

### 3. Documentación Técnica

Se generaron documentos PDF que sirven como evidencia y guía del proceso:

*   **`migrate-access-to-xampp.pdf`**: Guía paso a paso sobre la migración de estructuras y datos desde Access a MySQL.
*   **`migracion-de-un-millon-de-datos.pdf`**: Estrategia para la carga de grandes volúmenes de datos mediante la división de archivos y uso de la terminal (XAMPP Shell).

---

> **Nota:** El contenido de este directorio se irá organizando progresivamente a medida que avance el trimestre.

---

> Gracias por leer.
