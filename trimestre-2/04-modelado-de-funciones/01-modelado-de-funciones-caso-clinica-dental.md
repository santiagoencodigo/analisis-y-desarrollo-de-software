# Modelado de funciones – Introducción y caso práctico

> El modelado de funciones es una actividad clave en el análisis de software que consiste en representar gráficamente las funciones que un sistema debe realizar, así como las interacciones entre los actores y el sistema. A través de diagramas como los casos de uso, se logra una comprensión compartida entre el equipo de desarrollo y los stakeholders.

---

## Tabla de contenido

- [1. Introducción al modelado de funciones](#1-introducción-al-modelado-de-funciones)
- [2. Caso práctico: Clínica Dental Sonrisa Perfecta](#2-caso-práctico-clínica-dental-sonrisa-perfecta)
  - [2.1 Problema identificado](#21-problema-identificado)
  - [2.2 Requerimientos funcionales](#22-requerimientos-funcionales)
  - [2.3 Requerimientos no funcionales](#23-requerimientos-no-funcionales)
  - [2.4 Reglas de negocio](#24-reglas-de-negocio)
  - [2.5 Diagramas de casos de uso](#25-diagramas-de-casos-de-uso)
  - [2.6 Modelo de diseño](#26-modelo-de-diseño)
  - [2.7 Anexo técnico: usabilidad e intuición](#27-anexo-técnico-usabilidad-e-intuición)
- [3. Reflexión sobre el taller](#3-reflexión-sobre-el-taller)

---

## 1. Introducción al modelado de funciones

El **modelado de funciones** es el proceso de identificar, documentar y representar las funciones que un sistema de software debe ofrecer para satisfacer las necesidades de los usuarios y del negocio. Su objetivo es transformar los requisitos (funcionales y no funcionales) en una representación visual que facilite:

- La comunicación entre analistas, desarrolladores y clientes.
- La validación temprana de los requisitos.
- La identificación de actores, procesos y flujos de información.
- La base para el diseño detallado y la implementación.

Uno de los artefactos más utilizados en el modelado de funciones es el **diagrama de casos de uso**, que muestra los actores (usuarios o sistemas externos) y los casos de uso (funcionalidades) que el sistema debe proporcionar. A continuación, se presenta un caso práctico que ilustra la aplicación de estos conceptos.

---

## 2. Caso práctico: Clínica Dental Sonrisa Perfecta

### 2.1 Problema identificado

La clínica dental **Sonrisa Perfecta** es una pequeña empresa que actualmente maneja su gestión mediante una **agenda manual en papel**. Esto ha generado múltiples problemas:

- **Pérdida de información** y registros importantes.
- **Confusiones en los horarios**, lo que ocasiona:
  - Pérdida de citas.
  - Largos tiempos de espera para los pacientes.
- **Dificultad para hacer seguimiento** de los historiales clínicos de los pacientes.
- **Ineficiencia operativa** que afecta la experiencia del paciente y la productividad del personal.

Por esta razón, se ha propuesto desarrollar un sistema de información que automatice la gestión de citas y el historial clínico de los pacientes, mejorando la eficiencia y la calidad del servicio.

**Precondición fundamental:** Para utilizar el sistema, el paciente debe estar previamente registrado en la plataforma. El registro incluye datos personales básicos (nombre, identificación, contacto) y la aceptación de las normas de confidencialidad.

---

### 2.2 Requerimientos funcionales

Los requerimientos funcionales (RF) definen **qué** debe hacer el sistema. Para este caso, se han identificado los siguientes:

#### RF-001: Agendamiento de citas por roles autorizados

**Descripción:** El sistema debe permitir a los usuarios con roles de Administrador o Recepción agendar una cita médica, para lo cual deberán:
1. Seleccionar un paciente registrado en el sistema (búsqueda por nombre, ID o filtros).
2. Seleccionar un odontólogo disponible (basado en horario laboral y especialidad si aplica).
3. Seleccionar fecha y hora desde el calendario de disponibilidad, mostrando solo slots válidos (no conflictivos con citas existentes, ausencias o feriados).
4. Confirmar la cita, generando un comprobante (opcional) y notificando al paciente y odontólogo.

**Validaciones:**
- Impedir agendamiento en horarios no laborales o sin disponibilidad.
- Alertar si el paciente tiene citas pendientes o recurrentes en un rango cercano.

**Criterios de Aceptación:**
- El sistema debe validar disponibilidad en tiempo real.
- La cita solo se confirma si el horario está libre.
- Se debe notificar al paciente y al odontólogo del agendamiento.

**Prioridad:** Alta  
**Dependencias:** Módulo de gestión de usuarios (roles), calendario de odontólogos y base de pacientes.

---

#### RF-002: Validación de disponibilidad de horarios para citas

**Descripción:** El sistema debe verificar en tiempo real la disponibilidad de horarios en la agenda del profesional o recurso correspondiente antes de confirmar una cita.

**Criterios de Aceptación:**
1. El sistema debe consultar la base de datos o servicio de agenda para determinar si el horario solicitado está disponible.
2. Si el horario está ocupado, debe notificar al usuario y sugerir alternativas disponibles (opcional).
3. Solo se permitirá la confirmación de la cita si el horario está libre y cumple con las reglas de negocio (ej.: duración mínima/máxima).
4. En caso de conflictos (ej.: doble asignación), el sistema debe registrar un error y evitar la confirmación.

**Prioridad:** Alta  
**Dependencias:** Acceso a la base de datos de agendas o integración con sistema de calendario.

---

#### RF-003: Gestión de historiales médicos digitales

**Descripción:** El sistema debe almacenar y organizar de manera segura el historial médico completo de cada paciente, incluyendo tratamientos, diagnósticos, medicamentos recetados y observaciones clínicas, garantizando su integridad y accesibilidad para profesionales autorizados.

**Criterios de Aceptación:**
1. **Estructura de datos:**
   - Cada registro debe incluir como mínimo: fecha y hora de creación/modificación, identificación única del paciente (ID/N° documento), diagnósticos (con códigos CIE-10 u otro estándar aplicable), tratamientos (descripción, duración y responsable), medicamentos (nombre, dosis, frecuencia y fecha de prescripción), observaciones clínicas (texto libre con opción a adjuntar archivos/imágenes).
2. **Seguridad y permisos:**
   - Solo personal médico autorizado podrá crear, editar o visualizar historiales.
   - El sistema debe registrar logs de acceso y cambios (auditoría).
3. **Funcionalidades adicionales:**
   - Búsqueda filtrada por fechas, diagnósticos o medicamentos.
   - Exportación de historial en formatos estándar (PDF, HL7 FHIR opcional).
4. **Restricciones:**
   - Los datos deben encriptarse en reposo y en tránsito.
   - Cumplir con normativas locales (ej.: Ley 1581 de 2012 en Colombia).

**Prioridad:** Crítica  
**Dependencias:** Módulo de gestión de pacientes, sistema de autenticación y roles.

---

#### RF-004: Gestión de cuentas de usuario con control de acceso basado en roles (RBAC)

**Descripción:** El sistema debe permitir la creación, modificación y desactivación de cuentas de usuario, asignando roles predefinidos (Recepción, Administrador, Odontólogo) con permisos específicos para garantizar acceso únicamente a las funcionalidades correspondientes a su perfil.

**Criterios de Aceptación:**
1. **Creación y gestión de cuentas:**
   - Registro con campos obligatorios: nombre completo, correo electrónico, rol, identificación única y contraseña encriptada.
   - Solo el Administrador puede crear/modificar cuentas.
   - Edición de datos básicos y reasignación de roles (sujeto a validación de permisos).
   - Desactivación: opción para bloquear cuentas temporalmente o eliminarlas (lógica, no física), conservando logs.
2. **Roles y permisos:**
   - **Administrador:** Acceso total (gestión de usuarios, configuración del sistema, reportes). Puede asignar/revocar roles.
   - **Odontólogo:** Acceso a historiales médicos, agenda de citas, módulo clínico (diagnósticos/tratamientos). No puede modificar configuraciones del sistema.
   - **Recepción:** Gestión de citas (agendar/cancelar), registro de pacientes, consulta básica de historiales (sin edición). Sin acceso a módulos clínicos o administrativos.
   - Validación en tiempo real: el sistema restringe automáticamente funcionalidades no autorizadas.
3. **Seguridad:** Autenticación obligatoria con usuario y contraseña (mínimo 8 caracteres, incluyendo números y símbolos). Registro de logs para auditoría. Cumplimiento de normativas de protección de datos (encriptación de contraseñas).
4. **Flujo de excepciones:** Notificar al usuario si intenta acceder a una función restringida. Bloquear intentos repetidos de inicio de sesión fallidos (máximo 3 intentos).

**Prioridad:** Alta  
**Dependencias:** Módulo de autenticación y autorización, base de datos de usuarios.

---

#### RF-005: Notificación automatizada de cambios en citas médicas

**Descripción:** El sistema debe enviar notificaciones automáticas a los pacientes ante cualquier modificación (reprogramación o cancelación) en sus citas médicas, utilizando al menos un canal de comunicación (SMS, email o WhatsApp), con un mínimo de 24 horas de antelación respecto a la fecha/hora original de la cita.

**Criterios de Aceptación:**
1. **Disparadores de notificación:** La notificación se activa cuando se reprograma, cancela o queda menos de 24 horas para la cita original (si el cambio es de último momento).
2. **Contenido:** Incluye nombre del paciente y profesional, fecha/hora original y nueva (si aplica), motivo del cambio (opcional), instrucciones para reprogramar.
3. **Canales:** Mínimo 1 canal obligatorio (elegido por el paciente durante el registro): Email, SMS o WhatsApp. Opcional: notificación push en app móvil.
4. **Gestión de errores:** Reintentar envío si falla el primer intento (máximo 2 reintentos en 1 hora). Registrar logs del estado del envío. Alertar al personal si la notificación no se envía.
5. **Configuración y cumplimiento:** Permitir al administrador desactivar notificaciones temporales. Cumplir con regulaciones de protección de datos (no compartir información médica en mensajes).

**Prioridad:** Media-Alta  
**Dependencias:** Módulo de gestión de citas, integración con APIs de notificación (SMS/WhatsApp/Email), base de datos de pacientes.

---

#### RF-006: Notificación interna de cambios en horarios para odontólogos

**Descripción:** El sistema debe generar y mostrar notificaciones automáticas en la bandeja de notificaciones del odontólogo dentro del sistema, informando cualquier cambio (reprogramación, cancelación o nueva cita) en su horario asignado. Estas notificaciones se deben enviar antes del inicio de su turno laboral.

**Criterios de Aceptación:**
1. **Disparadores:** Reprogramación, cancelación o asignación de una nueva cita. Cambios de último momento (menos de 1 hora antes del turno).
2. **Contenido:** Tipo de cambio, nombre del paciente, fecha/hora original y nueva (si aplica), motivo del cambio (opcional).
3. **Bandeja de notificaciones:** Icono visible en el menú principal con contador de no leídas. Funcionalidades: marcar como leída/no leída, filtros por tipo, opción para redirigir a la agenda al hacer clic. Persistencia de notificaciones hasta que sean leídas o por 24 horas.
4. **Tiempo de envío:** Inmediatamente después del cambio. Recordatorio 30 minutos antes del inicio del turno si hay cambios no leídos.
5. **Gestión de errores:** Almacenar notificaciones si el odontólogo no ha iniciado sesión, mostrarlas al ingresar. Registrar logs de notificaciones fallidas.
6. **Configuración adicional:** Permitir al odontólogo desactivar notificaciones no críticas. Cumplir con políticas de privacidad.

**Prioridad:** Alta  
**Dependencias:** Módulo de gestión de horarios y citas, base de datos de usuarios, sistema de autenticación.

---

### 2.3 Requerimientos no funcionales

Los requerimientos no funcionales definen **cómo** debe comportarse el sistema:

#### RNF-001: Autenticación segura mediante credenciales

**Descripción:** El sistema debe garantizar que el acceso a todas las funcionalidades críticas se realice exclusivamente mediante autenticación con usuario y contraseña segura, cumpliendo con estándares de protección de datos y buenas prácticas de ciberseguridad.

**Criterios de Cumplimiento:**
- **Fortaleza de Credenciales:** Contraseñas con mínimo 8 caracteres, requiriendo mayúscula, minúscula, número y carácter especial. No permitir contraseñas comunes.
- **Gestión de Accesos:** Almacenar contraseñas con hash (bcrypt o PBKDF2). Transmisión mediante HTTPS/TLS. Bloqueo temporal tras 5 intentos fallidos (30 minutos). Forzar cambio de contraseña cada 90 días (opcional).
- **Experiencia de Usuario:** Recuperación de cuenta vía email/celular con token de un solo uso. Cerrar sesión por inactividad > 15 minutos.
- **Auditoría:** Registrar logs de intentos de inicio de sesión y cambios de contraseña. Cumplir con normativas aplicables (ej.: HIPAA, GDPR, Ley 1581 de 2012).

**Prioridad:** Crítica

---

#### RNF-002: Compatibilidad responsiva en dispositivos móviles y escritorio

**Descripción:** El sistema debe garantizar una experiencia de usuario óptima y funcional en todos los tipos de dispositivos (computadores de escritorio, laptops, tablets y smartphones), adaptándose dinámicamente a diferentes tamaños de pantalla y métodos de interacción.

**Criterios de Cumplimiento:**
- **Diseño Responsivo:** Uso de grids flexibles y media queries con puntos de quiebre para móvil (<768px), tablet (768px–1024px) y desktop (>1024px). Contenido priorizado en móviles.
- **Compatibilidad con Navegadores y SO:** Chrome, Edge, Firefox y Safari en últimas 2 versiones. Windows 10+, macOS 10.15+, Android 10+, iOS 14+.
- **Interacción Multi-dispositivo:** Botones con área táctil mínima de 48x48px (WCAG). Sin dependencia de hover. Soporte para atajos de teclado.
- **Rendimiento:** Carga <3 segundos en móviles (4G). Imágenes optimizadas y lazy loading. Cachear recursos estáticos para acceso sin conexión a funcionalidades críticas.
- **Validación:** Pruebas en emuladores y dispositivos reales. Cumplimiento de WCAG 2.1 AA.

**Prioridad:** Alta

---

#### RNF-003: Configuración de horario laboral del sistema

**Descripción:** El sistema debe restringir operaciones relacionadas con la gestión de citas al horario laboral configurado (7:00 AM - 7:00 PM, de Lunes a Sábado), garantizando disponibilidad ininterrumpida en este periodo y bloqueando funcionalidades críticas fuera de este horario, excepto para roles administrativos.

**Criterios de Cumplimiento:**
- **Gestión de Horario:** Permitir al administrador ajustar horarios laborales por sede y días especiales. Zona horaria ajustable (UTC-5 para Colombia).
- **Comportamiento del Sistema:** Dentro del horario, todas las funcionalidades activas. Fuera de horario, bloqueo de agendamiento/modificación con mensaje claro. Acceso de solo lectura a historiales médicos. Excepciones para roles Administrador y Emergencias.
- **Funcionalidades Autónomas:** Activación/desactivación automática según horario. Registro de accesos no permitidos.
- **Notificaciones Proactivas:** Alertas al personal 30 minutos antes del cierre. Mensaje informativo a pacientes en el portal.

**Prioridad:** Media-Alta

---

#### RNF-004: Cifrado de historiales médicos

**Descripción:** El sistema debe garantizar el cifrado de todos los datos sensibles asociados a historiales médicos (diagnósticos, tratamientos, medicamentos, documentos adjuntos) tanto en reposo (almacenamiento) como en tránsito (transmisión), cumpliendo con estándares de seguridad y regulaciones médicas aplicables.

**Criterios de Cumplimiento:**
- **Cifrado en Reposo:** Usar AES-256 para bases de datos y archivos. Transparent Data Encryption (TDE) o cifrado a nivel de campo. Gestión de claves con rotación cada 90 días.
- **Cifrado en Tránsito:** TLS 1.2+ para comunicaciones web/app. SFTP/SSH para transferencia de archivos médicos. Autenticación mutua (mTLS) para integraciones con terceros.
- **Datos Sensibles Definidos:** Diagnósticos, prescripciones, documentos adjuntos, metadatos críticos.
- **Control de Acceso + Cifrado:** Doble capa de seguridad: cifrado + RBAC. Registro de accesos en logs encriptados.
- **Cumplimiento Normativo:** Alinear con HIPAA, GDPR, Ley 1581 de 2012. Certificaciones opcionales: ISO 27001, SOC 2.

**Prioridad:** Crítica

---

### 2.4 Reglas de negocio

Las reglas de negocio establecen restricciones y condiciones específicas del negocio. A continuación se presentan las reglas formalizadas:

#### RN-001: Control de creación de cuentas y asignación de roles

**Descripción:** La creación de cuentas de usuario y la asignación/modificación de roles dentro del sistema estará estrictamente limitada a usuarios con el rol de **"Administrador"**, garantizando el principio de mínimo privilegio y evitando escalamientos no autorizados de permisos.

**Criterios de Aplicación:**
- Solo las cuentas con rol *"Administrador"* pueden crear, editar o desactivar cuentas de otros usuarios, así como asignar/remover roles.
- El sistema debe validar el rol del usuario antes de mostrar opciones relacionadas con gestión de cuentas.
- Log detallado de todas las acciones realizadas por administradores.

**Prioridad:** Alta

---

#### RN-002: Control de gestión de citas por roles autorizados

**Descripción:** Las acciones de **agendar, reprogramar y cancelar citas** estarán restringidas exclusivamente a usuarios con los roles **"Administrador"** o **"Recepción"**, garantizando que solo el personal autorizado pueda modificar la agenda médica.

**Criterios de Aplicación:**
- Recepción solo puede gestionar citas en su sede asignada y no modificar citas pasadas ni de otros recepcionistas.
- Administrador tiene acceso sin restricciones.
- Validación en interfaz y backend. Log obligatorio de cada acción. Notificación al paciente de cualquier cambio.

**Prioridad:** Alta

---

#### RN-003: Agendamiento único por slot horario

**Descripción:** El sistema garantizará que cada slot de tiempo dentro de la disponibilidad de un odontólogo solo pueda ser asignado a **una única cita**, evitando doble reserva o conflictos de horario.

**Criterios de Aplicación:**
- Al intentar agendar, el sistema verifica que el slot esté libre y dentro del horario laboral.
- Si está ocupado, mostrar mensaje claro y sugerir alternativas.
- Solo Administrador puede forzar agendamiento en slots ocupados con justificación.
- Log de intentos fallidos y notificación al odontólogo.

**Prioridad:** Crítica

---

#### RN-004: Notificación automática de modificaciones de citas

**Descripción:** Cualquier cambio (agendamiento, reprogramación o cancelación) en una cita médica **debe** generar una notificación automática e inmediata al paciente, utilizando al menos un canal de comunicación predefinido (email, SMS o WhatsApp).

**Criterios de Aplicación:**
- Disparadores: nueva cita, reprogramación, cancelación, cambios de último momento.
- Contenido mínimo: nombre del paciente y profesional, tipo de modificación, fechas/horas, enlace o instrucciones.
- Canal según preferencia del paciente; backup si falla el primario.
- Logs de entrega. Reporte diario de fallos.

**Prioridad:** Alta

---

#### RN-005: Restricción de múltiples roles por usuario

**Descripción:** Ningún usuario del sistema podrá tener asignados **más de dos roles simultáneamente**, con el fin de garantizar la segregación de funciones y evitar conflictos de permisos o responsabilidades.

**Criterios de Aplicación:**
- Máximo 2 roles por usuario. Ejemplos permitidos: "Recepcionista + Auditor", "Odontólogo + Instructor". No permitido: 3 roles.
- Validación automática al asignar un nuevo rol. Mostrar error si se excede el límite.
- Excepción: Superadministrador (1 rol exclusivo) no cuenta para el límite.
- Reporte mensual de usuarios con >1 rol. Alerta en tiempo real si se intenta violar la regla.

**Prioridad:** Media-Alta

---

### 2.5 Diagramas de casos de uso

A continuación se presentan los diagramas de casos de uso que representan las funcionalidades del sistema, organizados en dos grandes áreas: **Gestión de agenda** e **Historial del paciente**. Los actores identificados son:

- **Paciente:** Usuario registrado que interactúa con el sistema para gestionar sus citas y consultar su historial.
- **Odontólogo:** Profesional de la salud que registra observaciones y consulta historiales.
- **Personal autorizado (Administrador / Recepción):** Gestiona cuentas, agenda y configuraciones.
- **Sistema:** Entidad que ejecuta procesos automáticos como notificaciones y validaciones.

> **Precondición general:** El paciente debe estar registrado en la plataforma para poder acceder a los casos de uso relacionados con su perfil.

#### Gestión de agenda (Requerimientos de agenda)

Este diagrama muestra los casos de uso relacionados con la gestión de citas:

- Registrarse en el sistema.
- Iniciar sesión (login).
- Agendar una cita (Administrador / Recepción).
- Consultar citas disponibles (Paciente, Administrador, Recepción).
- Reprogramar una cita (Administrador / Recepción).
- Cancelar una cita (Administrador / Recepción; odontólogo solo en emergencias).
- Modificar una cita (Administrador / Recepción).
- Visualizar notificaciones de cambios (Paciente, Odontólogo).

> **Imagen:** `./assets/sonrisa-01-caso-de-uso.png`  
> *Descripción: Diagrama de casos de uso para la gestión de agenda de la clínica dental.*

![Gestión de agenda - Casos de uso](./assets/sonrisa-01-caso-de-uso.png)

#### Historial del paciente

Este diagrama muestra los casos de uso relacionados con el historial clínico:

- Consultar historial clínico (Paciente, Odontólogo, Personal autorizado).
- Registrar observaciones odontológicas (Odontólogo).
- Almacenar historial médico (Sistema).
- Adjuntar documentos médicos (Odontólogo).
- Acceder a logs de auditoría (Administrador).

> **Imagen:** `./assets/sonrisa-02-caso-de-uso.png`  
> *Descripción: Diagrama de casos de uso para la gestión del historial del paciente.*

![Historial del paciente - Casos de uso](./assets/sonrisa-02-caso-de-uso.png)

---

### 2.6 Modelo de diseño

El modelo de diseño del sistema se basa en principios de **usabilidad y eficiencia**. Para garantizar una experiencia ágil y satisfactoria, se establece la siguiente regla de navegación:

> **Ninguna funcionalidad del sistema debe requerir más de 3 o 4 clics para ser alcanzada desde la pantalla principal.**

Esta regla aplica a todas las acciones críticas, como agendar una cita, consultar el historial o modificar una cita. Para cumplirla, el diseño debe incluir:

- Menús y accesos directos claros.
- Flujos de trabajo optimizados (ej.: agendamiento en pantalla única o con pasos mínimos).
- Búsquedas inteligentes y filtros para reducir la navegación.
- Botones de acción principal visibles en todas las pantallas relevantes.

El objetivo es minimizar la fricción para los usuarios, especialmente para el personal de recepción que gestiona múltiples citas diariamente, y para los pacientes que acceden desde dispositivos móviles.

---

### 2.7 Anexo técnico: usabilidad e intuición

El sistema debe ser **amigable e intuitivo** para todos los perfiles de usuario. Para lograr esto, se consideran los siguientes aspectos técnicos y de diseño:

- **Interfaz limpia y minimalista:** Uso de colores suaves, tipografía legible y espacios adecuados. Evitar saturación de información.
- **Consistencia visual:** Botones, iconos y elementos de navegación deben ser uniformes en todas las pantallas.
- **Feedback inmediato:** Confirmaciones visuales y mensajes claros tras cada acción (ej.: "Cita agendada con éxito", "Error: horario no disponible").
- **Ayuda contextual:** Tooltips, mensajes de ayuda y tutoriales breves para funcionalidades complejas.
- **Accesibilidad:** Cumplimiento de estándares WCAG 2.1 AA (contraste, tamaño de fuente, navegación por teclado).
- **Adaptabilidad:** El sistema debe ajustarse a diferentes dispositivos y tamaños de pantalla sin perder funcionalidad.
- **Privacidad y transparencia:** Mostrar claramente las políticas de confidencialidad y obtener consentimiento del paciente antes de almacenar datos sensibles.

Estos principios aseguran que el sistema sea adoptado fácilmente por el personal de la clínica y los pacientes, reduciendo la curva de aprendizaje y minimizando errores operativos.

---

## 3. Reflexión sobre el taller

Este ejercicio fue desarrollado como un **taller inicial** para comprender el concepto de **modelado de funciones**. A través del caso de la clínica dental, pudimos:

- **Identificar los actores:** Paciente, odontólogo, personal administrativo (recepción y administrador) y sistema.
- **Extraer requerimientos funcionales y no funcionales** a partir de un problema real, detallando criterios de aceptación y prioridades.
- **Definir reglas de negocio formalizadas** que condicionan el comportamiento del sistema y reflejan las políticas de la clínica.
- **Establecer un modelo de diseño** con restricciones de navegación (3-4 clics) y principios de usabilidad.
- **Representar gráficamente** las funcionalidades mediante diagramas de casos de uso, mostrando las interacciones entre actores y el sistema.

El modelado de funciones no solo ayuda a visualizar el sistema, sino que también permite:

- Validar que los requisitos sean completos y coherentes.
- Establecer una base sólida para el diseño detallado y la implementación.
- Facilitar la comunicación entre el equipo de desarrollo y los stakeholders.
- Identificar posibles conflictos o ambigüedades antes de comenzar la codificación.

Este taller demuestra que antes de escribir una línea de código, es fundamental comprender el problema, los actores y las funciones que el sistema debe cumplir. La documentación adecuada y el modelado visual son herramientas clave para garantizar el éxito del proyecto.

---

> Gracias por leer.