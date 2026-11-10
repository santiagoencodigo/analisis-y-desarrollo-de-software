# Reporte de Actividades: Refinamiento del Plan de Mantenimiento

**Fecha:** 10 de Noviembre de 2026
**Proyecto:** OperPan - Sistema de Gestión de Personal
**Módulo:** Documentación Técnica y Aseguramiento de Calidad (QA)

## 1. Objetivo de la Jornada

El objetivo principal del día fue la estructuración, redacción y refinamiento técnico del **Plan de Mantenimiento de Software** para OperPan, asegurando su alineación con la norma **ISO/IEC/IEEE 14764:2022** y garantizando que los procedimientos documentados reflejen fielmente la realidad operativa del equipo, la infraestructura actual (PythonAnywhere, SQLite) y las limitaciones del proyecto.

## 2. Actividades Realizadas

### 2.1. Redacción Inicial del Documento
Se redactó la primera versión del plan de mantenimiento estructurada en 9 secciones, cubriendo:
- Introducción y alcance del sistema.
- Inventario de activos y módulos (Horarios, Tareas, Asistencia, Novedades, Memorandos).
- Clasificación del mantenimiento (Correctivo, Preventivo, Adaptativo, Perfectivo).
- Propuesta de Acuerdos de Nivel de Servicio (SLA) y roles del equipo.
- Flujos de control de cambios y métricas (KPIs).

### 2.2. Proceso de Auditoría y QA (Quality Assurance)
El documento inicial fue sometido a una auditoría externa simulando el rol de un *Ingeniero DevOps Senior*. El resultado de esta primera evaluación arrojó un **7.5/10**, identificando incongruencias críticas:
- Se presentaban los respaldos automatizados como una realidad, cuando en la práctica son manuales.
- Los tiempos de SLA prometían respuestas en 30 minutos, algo inviable para un equipo de 3 desarrolladores sin disponibilidad 24/7.
- Se asumía la existencia de un entorno de Staging (preproducción) que no está implementado.
- No se detallaba el manejo de la base de datos durante los despliegues.

### 2.3. Aplicación de Correcciones y Segunda Auditoría
Con base en la retroalimentación, se reescribió el documento aplicando los siguientes ajustes:
- **Estado Real vs. Futuro:** Se separó claramente lo que está implementado (respaldos manuales, pruebas locales) de las propuestas de mejora (automatización, entorno Staging).
- **Gestión de Respaldos:** Se definió la frecuencia semanal de respaldo para `db.sqlite3` y la carpeta `media`, advirtiendo sobre el riesgo de copiar el archivo mientras la aplicación está en uso.
- **Rollback Seguro:** Se documentó que un `git revert` revierte el código, pero **no** revierte las migraciones de la base de datos, estableciendo la restauración del backup como paso obligatorio ante fallos críticos.
- **Versionado:** Se aclaró que los números (ej. `1.3.1`) son identificadores en los mensajes de commit por módulo, no etiquetas (*tags*) globales ni SemVer estricto.

Tras estas correcciones, el documento fue reevaluado obteniendo una calificación de **9.0/10**, siendo aprobado técnicamente para su integración en el informe final.

## 3. Entregables

- **`Plan_de_Mantenimiento.md`:** Documento final corregido, ajustado a la realidad técnica de OperPan y listo para la sustentación del ciclo de vida del software (SENA).

## 4. Observaciones y Aprendizajes Clave

- **Riesgo con SQLite en Producción:** Se documentó que copiar un archivo `db.sqlite3` "en caliente" puede generar corrupción. Es vital coordinarlo con ventanas de mantenimiento o usar comandos de consola seguros.
- **Tiempos de Respuesta Realistas:** Es mejor prometer objetivos alcanzables (ej. 8 horas) que fallar intentando cumplir SLAs corporativos sin la infraestructura adecuada.
- **Valor de la Auditoría:** La revisión externa (incluso simulada con IA) permitió detectar "puntos ciegos" en la documentación técnica, evitando que se presentaran propuestas teóricas como realidades operativas.

## 5. Próximos Pasos

1. Integrar el Plan de Mantenimiento finalizado al documento consolidado del informe del ciclo de vida.
2. Validar con el equipo (Santiago, Paula, Eddier) la adopción de las políticas propuestas (frecuencia de respaldos, horarios de despliegue).
