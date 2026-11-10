# Guía y Reporte Técnico: Documentación y Aseguramiento de Calidad en OperPan

**Proyecto:** OperPan - Sistema de Gestión de Personal
**Rol Asumido:** Ingeniero de Software Senior / QA / DevOps
**Objetivo:** Documentar la estructura metodológica, los índices y las secciones redactadas para el ciclo de vida del software, así como el proceso de auditoría aplicado.

## 1. Introducción

Para que un proyecto de software sea exitoso y mantenible a lo largo del tiempo, no basta solo con escribir código; es fundamental generar una documentación técnica y funcional robusta. Durante el desarrollo de OperPan, estructuramos tres documentos vitales: el **Plan de Pruebas**, el **Manual de Usuario** y el **Plan de Mantenimiento**. 

Este documento explica qué es cada sección, cuál fue el índice que utilizamos y ofrece ejemplos aplicados a la realidad de la panadería "La Estación Paisa".

---

## 2. Índices y Secciones Redactadas (Explicación y Ejemplos)

### 2.1. El Plan de Pruebas de Software (QA)
**¿Qué es?** Es la hoja de ruta que garantiza que el sistema haga lo que debe hacer. No se trata de probar al azar, sino de ejecutar escenarios controlados para validar la lógica del negocio y la seguridad.

**Índice / Estructura de la tabla:**
Se manejó una matriz estructurada con los siguientes campos:
*   `Id`: Identificador único (ej. NOVE-001).
*   `Caso de Prueba`: Nombre del escenario (Caja blanca, Caja negra, etc.).
*   `Datos/Acciones de Entrada`: Qué debe hacer el tester.
*   `Resultado Esperado`: Qué debería pasar si todo está bien.
*   `Estado`: Aprobado, Fallido o En Espera.
*   `Evidencia`: Captura de pantalla del resultado real.

**Ejemplo OperPan (Caso NOVE-001):**
*   **Caso:** Carga del panel de solicitudes (Empleado).
*   **Acción:** Iniciar sesión como Empleado y acceder a Novedades.
*   **Esperado:** Ver indicadores (enviadas, pendientes) y listas de solicitudes.
*   **Estado:** Aprobado.

### 2.2. El Manual de Usuario
**¿Qué es?** El documento que permite al usuario final (administrador o empleado) operar el sistema sin necesitar asistencia técnica constante. Debe usar un lenguaje claro, directo y estar dividido por módulos.

**Índice / Estructura del Manual:**
1.  Introducción y contexto.
2.  Primeros pasos y acceso.
3.  Navegación de la interfaz.
4.  **Guía de Funcionalidades (Módulos):** Novedades, Memorandos, Horarios, Asistencia, etc.
5.  Solución de problemas (FAQ).

**Ejemplo OperPan (Módulo de Horarios - Vista Administrador):**
*   **Sección:** Creación de un nuevo horario.
*   **Redacción:** *"Haga clic en el botón rojo 'Agregar horario', seleccione al empleado en el modal, elija la jornada y marque el día de descanso en el calendario. Finalmente presione 'Guardar horario'."*
*   **Inclusión visual:** Referencia a la figura correspondiente.

### 2.3. El Plan de Mantenimiento de Software (ISO 14764)
**¿Qué es?** El documento estratégico que rige cómo se corregirán los errores, se harán mejoras y se garantizará que el sistema siga operando tras salir a producción.

**Índice / Estructura del Plan de Mantenimiento:**
1.  **Introducción y Objetivos:** Qué se mantiene y qué no.
2.  **Inventario de Activos:** Módulos y tecnologías utilizadas.
3.  **Tipos de Mantenimiento:** Correctivo, Preventivo, Adaptativo y Perfectivo.
4.  **Prioridades y SLAs:** Niveles de urgencia para atender bugs.
5.  **Roles y Responsabilidades:** Quién hace qué.
6.  **Cronograma Preventivo:** Frecuencia de respaldos y actualizaciones.
7.  **Control de Cambios y Despliegue:** Flujo de trabajo en Git y Rollback.
8.  **Métricas (KPIs):** Disponibilidad, MTTR, etc.
9.  **Mejoras y Exclusiones:** Lo que queda fuera del alcance.

**Ejemplo OperPan (Sección de Mantenimiento Preventivo):**
*   **Sección:** Gestión de Respaldos.
*   **Redacción:** *"Actualmente se realizan de forma manual. El responsable asignado debe generar una copia semanal del archivo `db.sqlite3` y la carpeta `media`. Se advierte no copiar mientras la app esté en uso para evitar corrupción de la base de datos SQLite."*

---

## 3. ¿Cómo elaborar un Plan de Mantenimiento a nivel general?

Si tuvieras que hacer este plan para cualquier otro proyecto, debes seguir estos pasos universales:

1.  **Analiza la Realidad:** No prometas mantenimiento 24/7 si tu equipo son 3 personas que estudian/trabajan. Ajusta los SLAs a tus capacidades.
2.  **Clasifica los Problemas:** Todo debe entrar en las 4 categorías de la ISO (Correctivo, Preventivo, Adaptativo, Perfectivo).
3.  **Define el Flujo de Despliegue:** ¿Cómo pasa el código de tu computadora (Local) al servidor (Producción)? Debe incluir pruebas y un plan de reversión (Rollback) claro.
4.  **Establece Rutinas:** Fija fechas para revisar logs, actualizar dependencias y hacer respaldos.
5.  **Mide para Mejorar:** Define indicadores (Uptime, tasa de fallos) para saber si el mantenimiento está funcionando.

---

## 4. El Proceso de Auditoría y Veredicto (QA)

Para garantizar la excelencia del Plan de Mantenimiento, sometimos el documento al escrutinio de un "Ingeniero Senior QA / DevOps".

### Primera Auditoría: El Choque con la Realidad (7.5/10)
El primer borrador fue muy teórico y presentaba incongruencias:
*   Se documentaban "respaldos automatizados" cuando en OperPan son manuales.
*   Se inventaba un entorno de "Staging" (preproducción) que no existe.
*   Se prometían respuestas a incidentes críticos en 30 minutos, algo insostenible para el equipo.

### Correcciones Aplicadas (El Valor del QA)
*   **Honestidad Documental:** Se reescribió el plan separando el **Estado Actual** (lo que hacemos hoy) del **Plan a Futuro** (metas de mejora).
*   **Seguridad en SQLite:** Se advirtió que copiar el archivo `db.sqlite3` "en caliente" puede corromper la base de datos, estableciendo la necesidad de hacerlo en horarios sin tráfico.
*   **Rollback Realista:** Se aclaró un concepto técnico vital: hacer `git revert` en el código **no** deshace las migraciones en la base de datos. Por ende, se estableció que, ante un fallo, se debe restaurar el respaldo previo de la BD.

### Veredicto Final (9.0/10 - Apto para entrega)
Tras los ajustes, el documento fue calificado como *"técnicamente sólido, honesto y alineado con la realidad de OperPan"*. El auditor concluyó:
> *"No necesitas rehacer el documento. La estructura actual es suficientemente buena. El Plan de Mantenimiento tiene un nivel apropiado para incorporarse al informe final del proyecto ADSO."*

## 5. Conclusión

El mayor aprendizaje de este proceso de documentación es que **la honestidad técnica vale más que la perfección teórica**. Documentar que el equipo tiene limitaciones (como no tener un entorno de pruebas intermedio o no tener respaldos automáticos) y proponer un plan de acción para mejorar, demuestra mucha más madurez de ingeniería que presentar un documento lleno de promesas teóricas que no se pueden cumplir.
