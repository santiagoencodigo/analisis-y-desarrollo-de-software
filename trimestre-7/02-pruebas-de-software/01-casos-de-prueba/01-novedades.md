# Pruebas de software: Módulo de Novedades (OperPan)

Documentación del proceso de testing y pruebas unitarias correspondientes al módulo de Novedades del proyecto OperPan. Este documento detalla la metodología, los hallazgos y la ejecución de los casos de prueba.

## Tabla de contenido

1. [Contexto y metodología](#contexto-y-metodología)
2. [Enfoque de las pruebas](#enfoque-de-las-pruebas)
3. [Plantilla de casos de prueba](#plantilla-de-casos-de-prueba)
4. [Resultados de la ejecución](#resultados-de-la-ejecución)
   - [Pruebas de Caja Blanca (Flujos Principales)](#pruebas-de-caja-blanca-flujos-principales)
   - [Pruebas de Caja Negra (Reglas de Negocio y Límites)](#pruebas-de-caja-negra-reglas-de-negocio-y-límites)
   - [Pruebas de Seguridad y Automatización](#pruebas-de-seguridad-y-automatización)
5. [Hallazgos y Observaciones Técnicas](#hallazgos-y-observaciones-técnicas)
6. [Próximos pasos](#próximos-pasos)

## Contexto y metodología

De acuerdo con la planificación del equipo, la distribución de tareas se gestionó inicialmente utilizando JIRA bajo las metodologías ágiles SCRUM y KANBAN. Para la fase de aseguramiento de la calidad (QA), el equipo ha migrado la gestión de pruebas a una hoja de cálculo estructurada.

El objetivo de esta transición es verificar que se cubran todos los casos y recorridos lógicos que un usuario podría realizar dentro del sistema. Esta documentación es un paso previo fundamental antes del despliegue final del aplicativo.

## Enfoque de las pruebas

El proceso de testing para este módulo requiere un nivel de rigor alto. Un aspecto clave es la creación de registros de prueba directamente en la base de datos, replicando la estructura real del sistema. 

Esto permite comprobar la funcionalidad del software en escenarios controlados, evaluando cómo responde la aplicación ante diferentes volúmenes de información, restricciones de negocio y validaciones de formularios, sin comprometer la integridad de los datos de producción.

## Plantilla de casos de prueba

Para garantizar la uniformidad en la documentación, se está utilizando una plantilla estandarizada de casos de prueba. Esta estructura permite detallar de forma precisa cada escenario evaluado. Los campos documentados incluyen:

- **Identificador:** Código único del caso de prueba (ej. NOVE-001).
- **Área Funcional:** Módulo o subproceso evaluado.
- **Datos de Entrada:** Acciones específicas o registros necesarios para ejecutar la prueba.
- **Resultado Esperado:** Comportamiento ideal del sistema.
- **Requerimientos de Ambiente:** Condiciones previas necesarias (ej. cantidad de permisos pendientes, roles de usuario).
- **Resultado Obtenido y Estado:** Registro del comportamiento real y la validación del éxito o fallo de la prueba.

---

## Resultados de la ejecución

A continuación, se detalla el informe de los 10 casos de prueba ejecutados en el módulo de Novedades. Todas las pruebas se realizaron en un entorno local con una base de datos poblada con datos sintéticos (Julio a Septiembre de 2026). El estado final de todos los casos evaluados es **Aprobado**.

### Pruebas de Caja Blanca (Flujos Principales)

**NOVE-001: Acceso al panel de Novedades (Empleado)**
- **Resultado:** El sistema carga correctamente el panel del empleado. Se validó que los indicadores cuantitativos (solicitudes enviadas, pendientes y contestadas) coinciden matemáticamente con los registros mostrados en las listas inferiores. Las agrupaciones por tipo (Permisos, Incapacidades, Certificados) funcionan de manera adecuada.

**NOVE-002: Creación de una solicitud de permiso**
- **Resultado:** Al enviar el formulario, el sistema despliega una notificación de éxito. Los contadores globales se actualizan en tiempo real y la nueva solicitud aparece inmediatamente en la lista de pendientes del empleado con el estado correcto.

**NOVE-003: Creación de una incapacidad médica**
- **Resultado:** Se validaron dos escenarios. Primero, el sistema bloquea el envío si no se adjunta el archivo obligatorio, mostrando una alerta clara. Segundo, al adjuntar el soporte y enviar, la solicitud se crea exitosamente, se actualiza el contador y el registro aparece en el panel.

**NOVE-004: Aprobación de una solicitud (Administrador)**
- **Resultado:** Desde el panel administrativo, al abrir el detalle de una solicitud y presionar "Aprobar", el sistema muestra el mensaje de confirmación y el estado del registro cambia a "Aprobado". Se verificó que la tarjeta de la solicitud en la lista refleja el cambio de estado visualmente.

### Pruebas de Caja Negra (Reglas de Negocio y Límites)

**NOVE-005: Validación de días de anticipación**
- **Resultado:** El sistema implementa validaciones a nivel de interfaz (frontend). El componente de calendario inhabilita automáticamente las fechas que no cumplen con los días mínimos de anticipación requeridos por la regla de negocio, previniendo el error antes del envío.

**NOVE-006: Límite de solicitudes pendientes**
- **Resultado:** Al intentar crear una tercera solicitud del mismo tipo (permiso) teniendo ya dos pendientes, el sistema bloquea la acción. El mensaje de error es específico ("Ya tienes 2 permisos pendientes..."), confirmando que la regla de negocio se evalúa de forma independiente por cada categoría.

**NOVE-007: Rechazo de una solicitud con motivo**
- **Resultado:** El administrador ejecutó el rechazo de una solicitud. El sistema registró el cambio de estado a "Rechazado" y, en la vista del empleado, se hizo visible el motivo ingresado por el administrador, cumpliendo con el flujo de comunicación requerido.

### Pruebas de Seguridad y Automatización

**NOVE-008: Rechazo automático por vencimiento**
- **Resultado:** La ejecución del comando de gestión (`rechazar_solicitudes_vencidas`) se completó exitosamente sin arrojar excepciones. El script procesó correctamente los datos y retornó un estado seguro (0 registros afectados) para el escenario evaluado, demostrando estabilidad en su ejecución.

**NOVE-009: Descarga de certificado en PDF**
- **Resultado:** Tras la aprobación del certificado, el empleado pudo generar y descargar el archivo PDF. Se verificó que la nomenclatura del archivo es correcta y que el flujo de generación de documentos funciona sin errores.

**NOVE-010: Control de acceso al módulo administrativo (Seguridad)**
- **Resultado:** Se intentó acceder a la URL del panel administrativo (`/novedades/`) utilizando una sesión activa con rol de empleado. El sistema interceptó la petición, denegó el acceso y mostró el mensaje "No tienes permisos para acceder a esta sección", garantizando la protección contra escalada de privilegios.

---

## Hallazgos y Observaciones Técnicas

1. **Implementación de validaciones Frontend:** Se observó que múltiples reglas de negocio (como el límite de anticipación y el límite de solicitudes pendientes) se ejecutan a nivel de interfaz de usuario. Se recomienda asegurar que el backend (las vistas en Django) replique estas mismas validaciones mediante el uso de formularios y `middleware` para evitar vulnerabilidades por manipulación de peticiones HTTP (bypass de frontend).
2. **Manejo de fechas y zonas horarias:** Durante la ejecución de comandos de automatización, se destaca la importancia de mantener `TIME_ZONE = 'America/Bogota'` y `USE_TZ = True` en la configuración de Django, para que los scripts de validación de vencimiento evalúen correctamente el paso de los días.
3. **Consistencia en los estados:** El sistema maneja de forma coherente los estados de las solicitudes (`pendiente`, `aprobado`, `rechazado`), reflejando los cambios dinámicamente entre el panel del administrador y el del empleado.

## Próximos pasos

Con el módulo de Novedades validado y aprobado, el equipo procederá a ejecutar la misma metodología de pruebas (Caja blanca, Caja negra y Seguridad) sobre el módulo de **Memorandos**. Se continuará documentando el proceso y registrando los resultados en el archivo `02-memorandos.md`.

---

> Gracias por leer.