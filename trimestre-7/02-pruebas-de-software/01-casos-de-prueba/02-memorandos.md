# Pruebas de software: Módulo de Memorandos (OperPan)

Documentación del proceso de testing y pruebas unitarias correspondientes al módulo de Memorandos del proyecto OperPan. Este documento detalla la ejecución de los casos de prueba orientados a la creación manual, generación automática, formato de documentos y restricciones de seguridad.

## Tabla de contenido

1. [Contexto y metodología](#contexto-y-metodología)
2. [Enfoque de las pruebas](#enfoque-de-las-pruebas)
3. [Plantilla de casos de prueba](#plantilla-de-casos-de-prueba)
4. [Resultados de la ejecución](#resultados-de-la-ejecución)
   - [Pruebas de Caja Blanca (Flujos Principales)](#pruebas-de-caja-blanca-flujos-principales)
   - [Pruebas de Caja Negra (Validaciones y Automatización)](#pruebas-de-caja-negra-validaciones-y-automatización)
   - [Pruebas de Seguridad y Formato](#pruebas-de-seguridad-y-formato)
5. [Hallazgos y Observaciones Técnicas](#hallazgos-y-observaciones-técnicas)
6. [Próximos pasos](#próximos-pasos)

## Contexto y metodología

Continuando con el plan de aseguramiento de la calidad (QA) para OperPan, se abordó el módulo de Memorandos. Este módulo representa un componente crítico del sistema, ya que gestiona comunicaciones formales (llamados de atención, reconocimientos, amonestaciones) que pueden originarse de forma manual por los administradores o de forma automatizada por las reglas de negocio del sistema (acumulación de ausencias o tardanzas).

La metodología de prueba se mantiene alineada con el uso de una hoja de cálculo estructurada, evaluando la lógica del backend mediante comandos de gestión y validando la interfaz de usuario en los entornos de administrador y empleado.

## Enfoque de las pruebas

El testing de este módulo se centró en tres pilares fundamentales:
1. **Integridad de la generación de documentos:** Validar que los archivos PDF generados contengan el diseño institucional, los datos correctos y las firmas correspondientes.
2. **Lógica de automatización:** Comprobar que los scripts del backend detecten correctamente el umbral de inasistencias o tardanzas y generen los memorandos sin duplicar registros.
3. **Seguridad y control de acceso:** Asegurar que los empleados no puedan acceder a los memorandos de otros ni al panel administrativo de gestión.

## Plantilla de casos de prueba

Se utilizó la misma plantilla estandarizada de casos de prueba implementada en módulos anteriores, garantizando la uniformidad en la documentación de los identificadores (MEMO-XXX), áreas funcionales, datos de entrada, resultados esperados y estados de ejecución.

---

## Resultados de la ejecución

A continuación, se detalla el informe de los 9 casos de prueba ejecutados en el módulo de Memorandos. El estado final de todos los casos evaluados es **Aprobado**.

### Pruebas de Caja Blanca (Flujos Principales)

**MEMO-001: Carga del panel de Memorandos (Administrador)**
- **Resultado:** El panel administrativo carga correctamente. Se validó la consistencia de los indicadores globales (Total emitidos, Emitidos este mes, Emitidos hoy) contrastándolos con los registros de la base de datos. La tabla de historial muestra correctamente los metadatos y las opciones de descarga.

**MEMO-002: Generación manual de un memorando**
- **Resultado:** El formulario de creación (modal) funciona adecuadamente. Al confirmar el envío, el sistema genera un consecutivo automático, muestra el mensaje de éxito y actualiza la tabla. El archivo PDF se genera respetando el encabezado de la empresa y la información ingresada.

**MEMO-003: Consulta del memorando por el Empleado**
- **Resultado:** La vista del empleado despliega únicamente los memorandos asociados a su perfil, garantizando la privacidad. La interfaz permite visualizar el detalle del documento y acceder a la descarga del PDF correspondiente.

### Pruebas de Caja Negra (Validaciones y Automatización)

**MEMO-004: Validación de campos obligatorios**
- **Resultado:** El frontend bloquea correctamente el envío del formulario si faltan campos requeridos (empleado, tipo, asunto o contenido). Se despliegan tooltips de error (borde rojo y mensajes específicos) que impiden que la petición llegue a la base de datos.

**MEMO-005: Consecutivo incremental**
- **Resultado:** El sistema aplica correctamente el formato `MEM-AAAA-NNN`. Se comprobó que el número secuencial incrementa sin saltos ni duplicados. A nivel de código, el método `save()` del modelo evalúa el año en curso para reiniciar la secuencia automáticamente cuando cambie el calendario.

**MEMO-006: Memorando automático por tardanzas**
- **Resultado:** Al acumular 3 registros de asistencia con estado `TARDE` en el mes, el motor de automatización (ejecutado por el sistema) genera el memorando correspondiente. El documento registra el origen como "Sistema" y asocia el motivo correcto.

**MEMO-007: Memorando automático por ausencias**
- **Resultado:** El sistema detecta la acumulación de 3 ausencias reales (`AUSENTE`). Durante la prueba, se confirmó que el script del backend excluye correctamente las fechas que cuentan con un permiso o incapacidad aprobada, evitando generar falsos positivos o sanciones injustificadas.

### Pruebas de Seguridad y Formato

**MEMO-008: Descarga y formato del PDF**
- **Resultado:** El archivo PDF descargado cumple con todos los estándares institucionales. Incluye el logotipo, la marca de agua, los metadatos correctos (consecutivo, destinatario, tipo, fecha), el cuerpo del texto y el bloque de firma y sello. La información visualizada coincide en su totalidad con los registros de la base de datos.

**MEMO-009: Control de acceso al módulo administrativo (Seguridad)**
- **Resultado:** Se intentó acceder directamente a la URL del panel administrativo (`/novedades/`, donde reside la gestión de memorandos) estando autenticado con un rol de empleado. El sistema denegó el acceso de forma exitosa, mostrando la alerta de permisos y protegiendo la integridad del módulo.

---

## Hallazgos y Observaciones Técnicas

1. **Automatización Basada en Eventos:** La generación automática de memorandos (casos 006 y 007) depende de scripts de backend (management commands). Se recomienda programar su ejecución periódica (ej. mediante `cron` o `Celery`) en un entorno de producción para garantizar que las sanciones se emitan en tiempo real.
2. **Generación de PDFs:** El uso de librerías como `reportlab` o `weasyprint` para renderizar el HTML hacia PDF está funcionando correctamente, manteniendo la fidelidad del diseño institucional. Se debe vigilar el tamaño máximo de los archivos si en el futuro se añaden imágenes de alta resolución.
3. **Seguridad por Roles:** Las validaciones de acceso (middleware o mixins de Django) están correctamente implementadas, impidiendo que usuarios con rol de empleado accedan a las vistas de administración mediante la manipulación directa de las URLs.

## Próximos pasos

Con los módulos de Novedades y Memorandos validados, se continuará con la fase de pruebas de los módulos restantes (Usuarios/Perfiles y Tareas Operativas). Los resultados se consolidarán en los respectivos archivos de documentación técnica.

---

> Gracias por leer.