# Documentación de pruebas de software

Este directorio contiene la documentación técnica correspondiente a las pruebas (testing) y refactorización de código del proyecto OperPan, desarrollado durante el séptimo trimestre de formación.

El objetivo de esta sección es registrar los casos de prueba ejecutados, documentar los hallazgos, las mejoras implementadas en el código y evidenciar el aseguramiento de la calidad (QA) del sistema.

## Tabla de contenido

1. [Alcance y responsabilidades del equipo](#alcance-y-responsabilidades-del-equipo)
2. [Estructura de los casos de prueba](#estructura-de-los-casos-de-prueba)
3. [Módulos documentados](#módulos-documentados)
    - [Módulo de Novedades](#módulo-de-novedades)
    - [Módulo de Memorandos](#módulo-de-memorandos)

## Alcance y responsabilidades del equipo

La estrategia de pruebas se ha dividido de acuerdo con la asignación de módulos entre los integrantes del equipo de desarrollo:

- **Eddier:** Ha desarrollado los módulos de Login, Dashboard y Horario. Actualmente tiene pendiente la implementación y pruebas del módulo de Asistencia.
- **Paula:** Ha desarrollado los módulos de Información personal y Tareas. Tiene pendiente el módulo de Cuentas.
- **Autor de este documento:** Encargado de los módulos de Novedades y Memorandos. Los archivos Markdown de este directorio (por ejemplo, `01-novedades.md`) detallan los casos de prueba diseñados para estos componentes.

## Estructura de los casos de prueba

Para garantizar la uniformidad en la documentación, todos los casos de prueba registrados en los archivos Markdown siguen una plantilla estandarizada que contiene los siguientes campos:

| Campo | Descripción |
| :--- | :--- |
| Id | Identificador único del caso de prueba (ej. NOVE-001, MEMO-001). |
| Caso de Prueba | Título descriptivo (Caja blanca o caja negra). |
| Descripción | Elementos, funcionalidades y acciones a ejercitar. |
| Fecha | Fecha de creación del caso. |
| Área Funcional | Módulo o subproceso asociado. |
| Funcionalidad | Característica específica que se está probando. |
| Datos / Acciones de Entrada | Datos requeridos, archivos y acciones del usuario (ej. clics). |
| Resultado Esperado | Salida o comportamiento esperado del sistema. |
| Requerimientos de Ambiente | Condiciones previas necesarias (ej. usuario con 2 permisos pendientes). |
| Procedimientos Especiales | Restricciones o condiciones específicas para la ejecución. |
| Dependencias | Casos de prueba que deben ejecutarse previamente. |
| Resultado Obtenido | Comportamiento real del sistema tras la ejecución. |
| Estado | Situación actual de la prueba (En espera, Aprobado, Fallido). |
| Observaciones | Notas adicionales sobre la ejecución. |

## Módulos documentados

A partir de las pruebas planificadas, se han diseñado escenarios que cubren tanto el flujo ideal de la aplicación como los casos límite y las restricciones del negocio.

### Módulo de Novedades

Las pruebas para el módulo de Novedades (identificadas con el prefijo `NOVE-`) abarcan los siguientes escenarios clave:

- **Carga y acceso:** Verificación del panel principal para empleados y administradores (`NOVE-001`).
- **Creación de solicitudes:** Flujos para permisos (`NOVE-002`) e incapacidades médicas (`NOVE-003`), validando la obligatoriedad de los archivos adjuntos en estas últimas.
- **Aprobación y rechazo:** Flujo del administrador para aprobar (`NOVE-004`) o rechazar solicitudes con motivo obligatorio (`NOVE-007`).
- **Validaciones de negocio (Caja negra):**
    - Validación de días de anticipación mínimos (`NOVE-005`).
    - Límite de solicitudes pendientes del mismo tipo (máximo 2) (`NOVE-006`).
- **Automatización y seguridad:**
    - Rechazo automático de solicitudes vencidas (`NOVE-008`).
    - Generación y descarga de certificados en PDF (`NOVE-009`).
    - Restricción de acceso a URLs administrativas para empleados (`NOVE-010`).

### Módulo de Memorandos

Las pruebas para el módulo de Memorandos (identificadas con el prefijo `MEMO-`) se centran en la generación, visualización y reglas de negocio:

- **Generación manual:** Creación desde el panel administrativo (`MEMO-002`) y validación de campos vacíos en el formulario (`MEMO-004`).
- **Consultas:** Visualización de memorandos por parte del empleado, garantizando que solo acceda a los suyos (`MEMO-003`).
- **Consecutivos:** Verificación del incremento correcto en el formato `MEMO-AÑO-NNN` (`MEMO-005`).
- **Automatización (Integración con Asistencia):**
    - Generación automática al acumular 3 tardanzas en el mes (`MEMO-006`).
    - Generación automática al acumular 3 ausencias en el mes (`MEMO-007`). *Nota: Estos casos dependen del módulo de Asistencia (`ASIS-002`).*
- **Salida de documentos:** Validación del formato institucional del PDF generado, incluyendo encabezado, firma y marca de agua (`MEMO-008`).

---

> Estos fueron algunos de los tantos casos que hay que verificar.
>
> Gracias por leer.