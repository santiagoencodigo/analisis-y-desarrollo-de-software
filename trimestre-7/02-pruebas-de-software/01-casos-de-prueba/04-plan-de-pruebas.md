# Manual de Referencia: Plan de Pruebas de Software

**Proyecto:** OperPan - Sistema de Gestión de Personal
**Fecha:** 11 de Noviembre de 2026
**Rol:** Ingeniero de Software Senior / QA / DevOps

---

## PARTE 1: Guía Metodológica del Plan de Pruebas

### 1. ¿Qué es un Plan de Pruebas de Software?
Un Plan de Pruebas es un documento formal y estratégico que describe el alcance, el enfoque, los recursos y el cronograma de las actividades de testing (QA) previstas para un proyecto de software. 

No es un documento para "romper el software", sino una guía estructurada que garantiza que el producto final cumple con los requisitos funcionales y no funcionales. Su propósito principal es:
*   Definir qué se va a probar y qué no.
*   Establecer quién es el responsable de cada tarea.
*   Determinar los criterios bajo los cuales el software se considera "Apto" o "Rechazado".
*   Proporcionar una línea base para medir el progreso y gestionar los riesgos.

### 2. Índice Sugerido (Basado en IEEE 829 y PMOInformatica)
Para el proyecto OperPan, se estableció el siguiente índice de 17 secciones:

1. Historial de versiones
2. Información del proyecto
3. Aprobaciones
4. Resumen ejecutivo
5. Alcance de las pruebas
6. Enfoque de pruebas (Estrategia)
7. Criterios de Aceptación o Rechazo
8. Criterios de Suspensión y Reanudación
9. Plantilla de casos de prueba
10. Entregables
11. Recursos y Herramientas de pruebas
12. Personal y Matriz de Responsabilidades (RACI)
13. Cronograma
14. Premisas
15. Dependencias y Riesgos
16. Referencias
17. Glosario

### 3. ¿Cómo se redacta cada sección?

*   **1. Historial de versiones:** Tabla que registra la evolución del documento (fecha, versión, autor, descripción del cambio). Sirve para saber quién modificó el plan y por qué.
*   **2. Información del proyecto:** Datos de contexto: nombre del proyecto, cliente, líder del proyecto y líder de QA.
*   **3. Aprobaciones:** Tabla con los nombres y firmas de las personas que autorizan formalmente el inicio de las pruebas (Líder del proyecto y Representante del Cliente).
*   **4. Resumen ejecutivo:** Un párrafo de alto nivel dirigido a los directivos. Explica el propósito del plan, el alcance general y las herramientas clave que se usarán.
*   **5. Alcance de las pruebas:** 
    *   *Elementos:* Qué módulos se van a probar (ej. Login, Horarios).
    *   *Funcionalidades nuevas:* Qué se está evaluando por primera vez.
    *   *Regresión:* Qué módulos antiguos se deben volver a probar porque podrían verse afectados.
    *   *Fuera de alcance:* Qué NO se va a probar (ej. pruebas de estrés) y por qué.
*   **6. Enfoque de pruebas (Estrategia):** La metodología técnica. Se divide en **Técnicas** (Caja Blanca, Caja Negra) y **Niveles** (Unitarias, Integración, Sistema).
*   **7. Criterios de Aceptación o Rechazo:** Las reglas matemáticas para decir "el software está listo". Ejemplo: "El 100% de los casos críticos deben ser aprobados y 0 bugs bloqueantes abiertos".
*   **8. Criterios de Suspensión y Reanudación:** Las condiciones bajo las cuales se detienen las pruebas (ej. un bug crítico impide continuar) y bajo qué condiciones se vuelven a iniciar.
*   **9. Plantilla de casos de prueba:** La estructura que se usará para documentar cada prueba individual (Id, Descripción, Datos de entrada, Resultado esperado, Estado).
*   **10. Entregables:** Lista de los documentos y artefactos que el equipo de QA entregará al finalizar (Matrices, capturas de pantalla, reportes de bugs).
*   **11. Recursos y Herramientas:** Hardware necesario (computadores), Software (Django, MySQL, PythonAnywhere) y herramientas de testing (Jira, Pytest, Selenium).
*   **12. Personal y Matriz de Responsabilidades (RACI):** Tabla que asigna roles (Responsable, Aprobador, Consultado, Informado) a cada miembro del equipo para cada tarea.
*   **13. Cronograma:** Fechas de inicio y fin de cada fase del testing (planificación, ejecución, cierre).
*   **14. Premisas:** Supuestos asumidos como verdaderos (ej. "El equipo cuenta con disponibilidad de tiempo compartida").
*   **15. Dependencias y Riesgos:** Tabla que identifica qué podría salir mal (ej. caída del servidor), su probabilidad, impacto y el plan de mitigación.
*   **16. Referencias:** Bibliografía técnica (Django, ISO 29119, ISTQB).
*   **17. Glosario:** Definición de términos técnicos usados en el documento (Bug, Caja Negra, Rollback) para que cualquier lector pueda entenderlo.

---

## PARTE 2: Bitácora de la Sesión (11/11/2026)

### 1. Actividades Realizadas
- **Análisis de Requerimientos:** Se procesó la plantilla base del Plan de Pruebas y se extrajo la información de **78 casos de prueba** (LOGIN, DASH, CUEN, HOR, TARE, NOVE, MEMO, INFO, ASIS) a partir de capturas de pantalla de las matrices del proyecto.
- **Redacción del Borrador:** Se elaboró el primer documento cubriendo las 17 secciones exigidas.
- **Auditoría QA:** El documento inicial fue sometido a un riguroso proceso de auditoría técnica (Quality Assurance). El auditor detectó falencias críticas: confusión de entornos (local vs producción), promesas de herramientas no implementadas (Pytest/Selenium) y riesgos de probar en producción.
- **Refactorización:** Se reescribió el documento aplicando las correcciones. Se separó el entorno local (XAMPP/MySQL) del de producción (PythonAnywhere/SQLite). Se ajustó la Matriz RACI a la realidad de los 3 desarrolladores y se aplicó el formato de Normas APA a todas las tablas.

### 2. Decisiones Técnicas y Hallazgos
- **Protección de Datos:** Se determinó por consenso que las pruebas destructivas NO se ejecutarán en PythonAnywhere para evitar corromper los datos de la panadería. Todo se probará en local con datos sintéticos.
- **Transparencia en la Cobertura:** En lugar de afirmar falsamente un 100% de cobertura, se documentó el total real de 78 pruebas ejecutadas, resaltando los bugs encontrados y corregidos (ej. validaciones de teléfonos, bloqueos de horarios vencidos).
- **Diferenciación de Entornos:** Quedó documentado que producción usa SQLite (por restricciones del hosting) y desarrollo usa MySQL.

### 3. Próximos Pasos
- **Pendientes:**
  1. Integrar el Plan de Pruebas al documento consolidado final.
  2. Finalizar el Manual de Uso (Asistencia y Horarios).
  3. Ejecutar la migración de archivos pesados (PDFs) a la nube para liberar espacio en el servidor de PythonAnywhere.
  4. Resolver el ticket de Jira pendiente: `admin/asistencia - ausencia automatica despues de 60 minutos de tardia`.
