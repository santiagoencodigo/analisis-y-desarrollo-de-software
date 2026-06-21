# OperPan — Sistema de Gestión de Personal

> **Estación Paisa** · Proyecto de Análisis y Desarrollo de Software (ADSO)  
> Versión `1.0.0-frontend` · 2026

<img src="./OperPan-logo.png">

---

```
╔══════════════════════════════════════════════════════════╗
║                      O P E R P A N                       ║
║         Sistema Administrativo de Gestión de Personal    ║
║                    Estación Paisa — 2026                  ║
╚══════════════════════════════════════════════════════════╝
```

---

## Tabla de Contenidos

1. [Descripción General del Sistema](#1-descripción-general-del-sistema)
2. [Objetivos del Proyecto](#2-objetivos-del-proyecto)
3. [Tecnologías Utilizadas](#3-tecnologías-utilizadas)
4. [Arquitectura del Proyecto](#4-arquitectura-del-proyecto)
5. [Identidad Visual y Diseño UI/UX](#5-identidad-visual-y-diseño-uiux)
6. [Módulos del Sistema](#6-módulos-del-sistema)
7. [Flujo de Navegación y Roles](#7-flujo-de-navegación-y-roles)
8. [Simulación de Frontend (Fase Actual)](#8-simulación-de-frontend-fase-actual)
9. [Seguridad y Control de Accesos](#9-seguridad-y-control-de-accesos)
10. [Diseño Responsive](#10-diseño-responsive)
11. [Proceso de Desarrollo](#11-proceso-de-desarrollo)
12. [Retos del Desarrollo](#12-retos-del-desarrollo)
13. [Mejoras y Hoja de Ruta Futura](#13-mejoras-y-hoja-de-ruta-futura)
14. [Requerimientos Funcionales por Módulo](#14-requerimientos-funcionales-por-módulo)
15. [Credenciales de Prueba](#15-credenciales-de-prueba)
16. [Estructura de Archivos](#16-estructura-de-archivos)
17. [Conclusión Ejecutiva](#17-conclusión-ejecutiva)

---

## 1. Descripción General del Sistema

**OperPan** es un sistema web administrativo diseñado específicamente para **Estación Paisa**, empresa del sector panadero con operaciones que requieren una gestión eficiente, organizada y trazable de su talento humano.

El sistema digitaliza y centraliza todos los procesos de Recursos Humanos y administración operativa de personal: desde el control diario de asistencia y la gestión de horarios hasta la emisión de certificados laborales, la administración de permisos e incapacidades, y el seguimiento detallado de tareas por empleado.

### Problema que resuelve

Antes de OperPan, Estación Paisa gestionaba sus procesos de personal de manera manual o con herramientas dispersas: registros físicos, hojas de cálculo independientes, comunicaciones informales y sin trazabilidad. Este escenario generaba:

- **Inconsistencias** en los datos de asistencia y permisos.
- **Ausencia de historial** trazable de las operaciones del personal.
- **Procesos lentos** de aprobación y seguimiento.
- **Dificultad para obtener reportes** precisos y consolidados.
- **Riesgo operativo** por falta de documentación formal.

OperPan resuelve todos estos problemas consolidando la gestión de personal en una única plataforma institucional, segura, organizada y de fácil acceso para todos los niveles de la organización.

### Alcance actual del proyecto

El presente documento describe la **versión 1.0 del frontend completo** de OperPan. Incluye todas las interfaces de usuario, módulos administrativos, experiencia de navegación, validaciones visuales y componentes de diseño del sistema. El desarrollo del backend y la integración con base de datos corresponden a una fase posterior del proyecto.

---

## 2. Objetivos del Proyecto

### Objetivo General

Diseñar y desarrollar el frontend completo de **OperPan**, un sistema web de gestión de personal y recursos humanos para Estación Paisa, que centralice, digitalice y optimice los procesos administrativos del personal mediante una interfaz profesional, intuitiva y coherente con la identidad corporativa de la empresa.

### Objetivos Específicos

| # | Objetivo |
|---|----------|
| OE-01 | Construir una homepage institucional que funcione como portal de bienvenida y punto de acceso al sistema. |
| OE-02 | Desarrollar un módulo de autenticación con login seguro, diferenciación de roles y validación visual. |
| OE-03 | Diseñar dashboards administrativos diferenciados para los perfiles de Administrador/Gerente y Empleado. |
| OE-04 | Implementar el módulo de Gestión de Horarios con formularios de asignación, tablas de consulta y acciones CRUD. |
| OE-05 | Desarrollar el módulo de Control de Asistencia con registro de entradas/salidas e historial por empleado. |
| OE-06 | Construir el módulo de Gestión de Cuentas para el alta, modificación y baja de empleados. |
| OE-07 | Implementar el módulo de Permisos e Incapacidades con flujo de solicitud y estados de aprobación. |
| OE-08 | Desarrollar el módulo de Tareas con asignación, seguimiento y estados de cumplimiento. |
| OE-09 | Crear el módulo de Reportes con paneles de exportación y visualización de indicadores. |
| OE-10 | Implementar el módulo de Certificados Laborales con tipos predefinidos e historial. |
| OE-11 | Garantizar coherencia visual total entre todas las vistas del sistema bajo una identidad corporativa unificada. |
| OE-12 | Asegurar diseño completamente responsive para escritorio, tablet y dispositivos móviles. |

---

## 3. Tecnologías Utilizadas

OperPan fue desarrollado usando exclusivamente tecnologías estándar del frontend web, sin dependencia de frameworks de JavaScript, librerías externas pesadas ni servicios de backend en esta fase.

### Stack tecnológico

| Tecnología | Versión | Rol en el proyecto |
|---|---|---|
| **HTML5** | 5 | Estructura semántica de todas las vistas y módulos |
| **CSS3** | 3 | Estilos, variables, layout, animaciones y responsive |
| **JavaScript Vanilla** | ES6+ | Interactividad, simulaciones, navegación y lógica de UI |
| **Bootstrap** | 5.3 | Sistema de grillas, componentes responsive y utilidades |
| **Bootstrap Icons** | 1.11 | Iconografía institucional en toda la interfaz |
| **Google Fonts** | — | Tipografía corporativa `Poppins` |

### Justificación de las decisiones tecnológicas

**HTML5 semántico** fue utilizado con rigor estructural, aprovechando etiquetas como `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>` y `<footer>` para garantizar accesibilidad, SEO técnico y claridad en el código.

**CSS3 con variables personalizadas** (`custom properties`) permitió construir un sistema de diseño escalable y fácil de mantener. La paleta, los espaciados, las sombras y los radios de borde están definidos como variables globales, facilitando cualquier ajuste futuro de identidad visual.

**JavaScript Vanilla** fue elegido deliberadamente para mantener el proyecto ligero, sin dependencias de compiladores, gestores de paquetes ni configuraciones complejas. La lógica de simulación, navegación y validación visual se implementó de manera nativa.

**Bootstrap 5** complementó el sistema de grillas y proporcionó componentes responsive de alta calidad, sin interferir con el sistema de diseño personalizado de OperPan.

---

## 4. Arquitectura del Proyecto

### Estructura de directorios

```
OPERPAN/
│
├── index.html                          ← Homepage / Portal corporativo
│
├── Assets/
│   └── styles.css                      ← Estilos globales del homepage
│
├── Pages/
│   ├── login.html                      ← Pantalla de autenticación
│   │
│   ├── admin/
│   │   ├── landingAdmin.html           ← Dashboard principal (Admin/Gerente)
│   │   │
│   │   ├── Assets/
│   │   │   └── style.css               ← Sistema de diseño interno del panel
│   │   │
│   │   └── sub-pages-admin/
│   │       ├── 1-cuentas.html          ← Módulo: Gestión de cuentas/empleados
│   │       ├── 2-tareas.html           ← Módulo: Gestión de tareas
│   │       ├── 3-permisos.html         ← Módulo: Permisos laborales
│   │       ├── 4-reportes.html         ← Módulo: Reportes y estadísticas
│   │       ├── 5-incapacidad.html      ← Módulo: Incapacidades médicas
│   │       └── 6-certificados.html     ← Módulo: Certificados laborales
│   │
│   └── Empleado/
│       ├── landingEmpleado.html        ← Dashboard principal del empleado
│       │
│       └── sub-pages-empleado/
│           ├── 1-asistencia.html       ← Módulo: Registro de asistencia
│           ├── 2-solicitudes.html      ← Módulo: Gestión de solicitudes
│           ├── 3-tareas.html           ← Módulo: Tareas asignadas
│           └── 4-personal.html         ← Módulo: Información personal
│
├── Scripts/
│   └── script.js                       ← Lógica JavaScript compartida
│
├── img/
│   ├── img-login/
│   │   └── LOGO OPERPAN.png            ← Logotipo oficial del sistema
│   ├── img.readme/                     ← Recursos gráficos de documentación
│   └── docs/                           ← Capturas de pantalla y evidencias
│
├── bd/
│   └── operpan.sql                     ← Esquema de base de datos (referencia)
│
└── docs/
    └── README.md                       ← Documentación técnica del proyecto
```

### Principios de arquitectura aplicados

**Separación por roles:** Las rutas del sistema están organizadas por perfil de usuario. Los módulos de administración viven bajo `/Pages/admin/` y los del empleado bajo `/Pages/Empleado/`, reflejando en la estructura de archivos la misma separación funcional que tiene el sistema.

**CSS modular:** El sistema de estilos está dividido en dos capas: `Assets/styles.css` para la homepage pública, y `Pages/admin/Assets/style.css` para el panel administrativo interno. Esto evita contaminación de estilos entre el portal público y el sistema privado.

**Variables CSS globales:** Todo el sistema de diseño (colores, espaciados, radios, sombras, tipografías) está centralizado en variables CSS, lo que garantiza coherencia visual y facilita futuras actualizaciones de marca.

**Routing relativo:** Todas las rutas de navegación utilizan rutas relativas correctamente referenciadas desde cada ubicación en el árbol de directorios, garantizando portabilidad del proyecto.

---

## 5. Identidad Visual y Diseño UI/UX

### Filosofía de diseño

OperPan fue diseñado siguiendo una filosofía de **software empresarial institucional moderno**: limpio, serio, funcional y profesional. La interfaz no busca llamar la atención con efectos visuales llamativos; busca comunicar organización, confianza y control.

La estética se inspira en los mejores sistemas de RRHH y ERP empresariales del mercado: plataformas donde la claridad visual es más importante que la decoración, y donde cada elemento tiene un propósito funcional.

### Paleta de colores institucional

| Token | Color | Código HEX | Uso principal |
|---|---|---|---|
| `--rojo` | 🔴 Rojo institucional | `#A40706` | Botones primarios, indicadores, estados críticos, énfasis |
| `--negro` | ⚫ Negro corporativo | `#000000` | Header, navbar, títulos, estructuras principales |
| `--blanco` | ⚪ Blanco | `#FFFFFF` | Fondos, tarjetas, formularios, tablas |
| `--gris-fondo` | Gris muy claro | `#F5F5F5` | Fondo general del panel administrativo |
| `--gris-borde` | Gris borde | `#EAEAEA` | Separadores, bordes de tarjetas |
| `--gris-oscuro` | Gris oscuro | `#2B2B2B` | Texto cuerpo, contenido secundario |
| `--gris-medio` | Gris medio | `#6B7280` | Labels, descripciones, texto terciario |

**Principio cromático clave:** El rojo institucional `#A40706` se usa con moderación estratégica, reservado para los elementos de mayor jerarquía o importancia. No se usa como fondo general ni de manera decorativa excesiva. Esta disciplina cromática es lo que hace que los elementos rojos resalten cuando aparecen.

### Tipografía

| Uso | Fuente | Peso | Tamaño |
|---|---|---|---|
| Títulos H1 | Poppins / Playfair Display | 700 | `2.5rem` |
| Títulos H2 | Poppins | 700 | `2rem` |
| Títulos H3 | Poppins | 600 | `1.5rem` |
| Texto cuerpo | Poppins | 400 | `1rem` |
| Labels | Poppins | 600 | `0.85rem` |
| Badges / Meta | Poppins | 500 | `0.72–0.78rem` |

**Poppins** fue seleccionada como tipografía principal por su carácter corporativo, su excelente legibilidad en pantalla a todos los tamaños y su versatilidad para uso en interfaces administrativas. **Playfair Display** se usa puntualmente en la homepage para los títulos de hero, añadiendo un toque de elegancia editorial sin romper la coherencia del sistema.

### Sistema de componentes

El sistema de diseño de OperPan define componentes reutilizables con comportamiento visual consistente:

**Tarjetas (Cards)**
- Fondo blanco `#FFFFFF`
- `border-radius: 16px`
- `border: 1px solid #EAEAEA`
- `box-shadow: 0 4px 16px rgba(0,0,0,0.09)`
- Padding interior amplio (`1.75rem`)

**Botones**
- Primario: fondo rojo `#A40706`, texto blanco, hover con elevación sutil
- Secundario: fondo blanco, borde gris, hover con borde y texto rojos
- Peligro: fondo rojo suave, texto rojo, hover relleno rojo total
- Transición `transform: translateY(-1px)` en hover para feedback táctil

**Inputs y Formularios**
- `border: 1.5px solid #D1D5DB`, `border-radius: 10px`
- Focus con `border-color: #A40706` y `box-shadow` rojo suave
- Labels siempre visibles encima del campo
- Selects con ícono personalizado en SVG

**Tablas administrativas**
- Header negro con texto blanco
- Hover en filas con fondo gris suave
- Badges de estado con colores semánticos
- Botones de acción pequeños e iconográficos

**Badges de estado**

| Estado | Fondo | Texto | Uso |
|---|---|---|---|
| ✅ Activo / Aprobado | Verde suave `#ECFDF5` | `#059669` | Registros confirmados |
| ⏳ Pendiente | Amarillo suave `#FFFBEB` | `#D97706` | Solicitudes en espera |
| ❌ Rechazado / Ausente | Rojo suave `#FEF2F2` | `#A40706` | Estados negativos |
| 🔵 Próximo / Info | Azul suave `#EFF6FF` | `#2563EB` | Información neutra |

---

## 6. Módulos del Sistema

### 6.1 · Homepage — Portal Corporativo

**Propósito:** Funciona como la pantalla institucional pública del sistema, visible antes del login. No es un ecommerce ni una landing page de ventas; es un portal corporativo de presentación.

**Contenido:**
- Hero principal con propuesta de valor de OperPan
- Sección "¿Qué es OperPan?" con tarjetas descriptivas
- Módulo de funcionalidades principales (9 tarjetas)
- Sección de perfiles de usuario (Administrador, Gerente, Empleado)
- Sección de seguridad y trazabilidad
- Presentación de Estación Paisa
- CTA final con acceso al login
- Footer corporativo institucional

**Experiencia:** Fade-in progresivo en scroll con `IntersectionObserver`, navbar con efecto de cambio de color al desplazar, diseño de dos columnas en hero, diseño completamente responsive.

---

### 6.2 · Login — Pantalla de Autenticación

**Propósito:** Punto de entrada seguro al sistema. Diferencia visualmente el entorno de producción del sistema público.

**Funcionalidades:**
- Formulario con campos de usuario y contraseña
- Iconografía de seguridad en los inputs
- Nota visual de "conexión segura"
- Enlace de recuperación de contraseña
- Redirección al dashboard correspondiente

**Diseño:** Panel central blanco sobre fondo negro con viñeta roja sutil. Estética sobria que comunica seguridad y seriedad institucional.

---

### 6.3 · Dashboard Administrativo — Landing Admin

**Propósito:** Panel de control principal para perfiles de Administrador y Gerente. Primera pantalla tras el login para estos roles.

**Funcionalidades:**
- KPIs rápidos: empleados activos, asistencia del día, permisos pendientes, incapacidades activas
- Módulo de Gestión de Horarios integrado en la vista principal
- Buscador de empleados con acciones CRUD rápidas
- Formulario de asignación de horarios con selector de turnos
- Tabla de horarios asignados recientemente con estados
- Selector de cambio de vista (Admin / Empleado)
- Indicador de rol activo

---

### 6.4 · Dashboard Empleado — Landing Empleado

**Propósito:** Panel personal del empleado. Presenta su información de perfil y acceso a sus módulos disponibles.

**Funcionalidades:**
- Tarjeta de perfil con nombre, ID, cargo y turno asignado
- Acceso directo a los 4 módulos del empleado
- Mensaje de bienvenida personalizado

---

### 6.5 · Módulo: Gestión de Cuentas (Admin)

**Propósito:** Administración completa del ciclo de vida del empleado en el sistema: creación, modificación, consulta y baja.

**Funcionalidades:**
- KPIs: total de empleados, activos, en proceso
- Buscador por ID, nombre, documento o correo
- Acciones CRUD con botones diferenciados (Crear / Modificar / Eliminar)
- Formulario completo de empleado con campos: nombres, apellidos, tipo y número de documento, correo, celular, dirección, RH, cargo, ID empleado, EPS, ARL
- Sección desplegable de contacto de emergencia
- Opción de creación automática de cuenta de acceso
- Tabla de empleados activos con acciones rápidas

**Reglas de negocio aplicadas:** Validaciones de formato en ID empleado (`EMP-YYYY-NNN`), campo de celular con patrón numérico, correo con validación de formato.

---

### 6.6 · Módulo: Gestión de Tareas (Admin)

**Propósito:** Asignación, distribución y seguimiento de tareas operativas al personal.

**Funcionalidades:**
- Buscador de empleado para asignación
- Formulario de creación de tarea con: título, descripción, prioridad, fecha de vencimiento, hora, área asignada
- Timeline de tareas activas con estados: Pendiente, En progreso, Completada
- Acciones por tarea: marcar completada, editar, eliminar
- Resumen estadístico: pendientes, en progreso, completadas hoy

---

### 6.7 · Módulo: Permisos (Admin)

**Propósito:** Gestión y aprobación de solicitudes de permisos laborales del personal.

**Funcionalidades:**
- Vista de solicitudes recibidas con estado actual
- Acciones de aprobación / rechazo con justificación
- Historial de permisos por empleado
- Filtros por estado, tipo y fecha

---

### 6.8 · Módulo: Reportes (Admin)

**Propósito:** Generación y consulta de reportes administrativos del sistema para toma de decisiones.

**Funcionalidades:**
- Panel de tipos de reporte disponibles
- Filtros por período, área y tipo
- Reportes de: asistencia, permisos, incapacidades, tareas, certificados
- Vista previa tabular de datos

---

### 6.9 · Módulo: Incapacidades (Admin)

**Propósito:** Registro, seguimiento y control de incapacidades médicas del personal.

**Funcionalidades:**
- Formulario de registro con: empleado, tipo de incapacidad, fechas, diagnóstico, soporte adjunto
- Timeline de incapacidades activas e históricas
- Estados: Activa, En revisión, Cerrada
- Resumen de días de incapacidad por empleado

---

### 6.10 · Módulo: Certificados (Admin)

**Propósito:** Generación y administración de certificados laborales para el personal.

**Funcionalidades:**
- Selección de empleado y tipo de certificado
- Tipos disponibles: certificado laboral, constancia de trabajo, certificado de salario
- Historial de certificados emitidos con fechas
- Botón de descarga simulada

---

### 6.11 · Módulo: Registro de Asistencia (Empleado)

**Propósito:** Permite al empleado registrar su entrada y salida diaria, y consultar su historial de asistencia.

**Funcionalidades:**
- Botón de "Registrar entrada" y "Registrar salida"
- Tarjeta de información del empleado activo
- Tabla de asistencia reciente con: fecha, hora entrada, hora salida, horas trabajadas, horas extra, estado
- Estados: Completo, Incompleto, Ausente
- Acceso al historial mensual completo

---

### 6.12 · Módulo: Gestión de Solicitudes (Empleado)

**Propósito:** Canal formal del empleado para enviar solicitudes laborales al área administrativa.

**Funcionalidades:**
- Formulario de solicitud con: tipo, fechas, motivo y adjunto opcional
- Tipos: cambio de turno, ausencia, vacaciones, incapacidad, novedad laboral
- Lista de solicitudes recientes con estado actual
- Badge de estado: Pendiente, Aprobada, Rechazada

---

### 6.13 · Módulo: Tareas del Empleado

**Propósito:** Vista personal del empleado para consultar y actualizar el estado de sus tareas asignadas.

**Funcionalidades:**
- Resumen de tareas: pendientes, en progreso, completadas
- Lista de tareas con detalle: nombre, descripción, fecha, hora, estado
- Acción "Marcar como completada" por tarea
- Historial de tareas cumplidas

---

### 6.14 · Módulo: Información Personal (Empleado)

**Propósito:** Perfil laboral completo del empleado con acceso a su historial, turnos y documentos.

**Funcionalidades:**
- Tarjeta de perfil con datos básicos del empleado
- Tabs de navegación interna: Historial de asistencia, Turnos asignados, Desempeño, Documentos
- Indicadores de desempeño: puntualidad, tareas completadas, llamados de atención
- Historial de asistencia mensual
- Acceso y descarga de documentos laborales

---

## 7. Flujo de Navegación y Roles

### Mapa de navegación general

```
[index.html]  ──────────────────────────────┐
    │                                         │
    │  "Acceder al sistema"                   │
    ▼                                         │
[login.html]                                  │
    │                                         │
    ├─── Administrador / Gerente ──► [landingAdmin.html]
    │                                    │
    │                         ┌──────────┴────────────┐
    │                         ▼                        ▼
    │                  [1-cuentas.html]        [2-tareas.html]
    │                  [3-permisos.html]       [4-reportes.html]
    │                  [5-incapacidad.html]    [6-certificados.html]
    │
    └─── Empleado ──────────► [landingEmpleado.html]
                                    │
                         ┌──────────┴────────────┐
                         ▼                        ▼
                  [1-asistencia.html]    [2-solicitudes.html]
                  [3-tareas.html]        [4-personal.html]
```

### Descripción del flujo

| Paso | Acción | Destino |
|---|---|---|
| 1 | Usuario accede a `index.html` | Portal corporativo de bienvenida |
| 2 | Hace clic en "Acceder al sistema" o "Iniciar sesión" | `login.html` |
| 3a | Credenciales de Admin/Gerente | `landingAdmin.html` |
| 3b | Credenciales de Empleado | `landingEmpleado.html` |
| 4 | Navegación por módulos vía barra de navegación secundaria | Sub-páginas correspondientes al rol |
| 5 | "Cerrar sesión" | Retorno a `login.html` |

### Control de roles

| Rol | Acceso |
|---|---|
| **Administrador** | Acceso total: todos los módulos, CRUD completo, reportes, configuración de cuentas |
| **Gerente** | Acceso de supervisión: consulta de módulos, no puede crear/eliminar cuentas |
| **Empleado** | Acceso restringido: solo sus propios datos, asistencia, solicitudes y tareas |

---

## 8. Simulación de Frontend (Fase Actual)

El sistema se encuentra actualmente en su **Fase 1: Diseño e Implementación del Frontend**. En esta etapa, toda la lógica de negocio, la persistencia de datos y la autenticación son simuladas mediante JavaScript del lado del cliente.

### Naturaleza de las simulaciones

Esta decisión de arquitectura es deliberada y responde a las buenas prácticas de desarrollo iterativo: primero se define y valida la experiencia de usuario completa, y luego se conecta con el backend correspondiente.

| Funcionalidad | Estado actual | Implementación futura |
|---|---|---|
| Autenticación | Simulada con objetos JS | JWT + API REST |
| Persistencia de datos | Objetos en memoria | Base de datos MySQL |
| Validaciones | Visual / Frontend | Validación doble (client + server) |
| Carga de registros | Datos estáticos en HTML | Fetch a endpoints REST |
| Descarga de documentos | Botón simulado | Generación PDF en backend |
| Notificaciones | Alertas JS | Sistema de notificaciones en tiempo real |

### Cuentas de prueba definidas

Las siguientes credenciales están definidas para la simulación del sistema:

```javascript
// Cuentas administrativas
adminAccounts = {
  "admin":   { username: "admin",   password: "Admin123!"   },
  "gerente": { username: "gerente", password: "Gerente123!" }
}

// Empleados de prueba
empleadosDB = {
  "EMP001": { codigo: "EMP001", nombre: "Carlos Méndez",  activo: true  },
  "EMP002": { codigo: "EMP002", nombre: "—",              suspended: true },
  "EMP003": { codigo: "EMP003", nombre: "—",              activo: true  }
}
```

### Preparación para integración con backend

El frontend fue diseñado conscientemente con una arquitectura preparada para ser conectada con un backend. Los formularios utilizan IDs y `name` attributes estándar. Las rutas siguen convenciones REST. La estructura modular permite reemplazar los datos estáticos por llamadas `fetch()` a una API sin modificar la estructura visual.

---

## 9. Seguridad y Control de Accesos

Aunque el backend completo aún está en desarrollo, el sistema ha sido diseñado con una arquitectura de seguridad clara y bien definida.

### Modelo de roles y permisos

```
ADMINISTRADOR
├── Gestión de cuentas (CRUD completo)
├── Gestión de horarios (CRUD completo)
├── Aprobación de permisos e incapacidades
├── Generación de certificados
├── Acceso a todos los reportes
└── Auditoría del sistema

GERENTE
├── Visualización de todos los módulos
├── Consulta de reportes
├── Seguimiento de personal
└── Sin acceso a configuración de cuentas

EMPLEADO
├── Registro de asistencia propia
├── Solicitud de permisos
├── Consulta de tareas asignadas
└── Acceso solo a sus propios datos
```

### Características de seguridad planeadas

| Característica | Descripción |
|---|---|
| **Autenticación por credenciales** | Usuario y contraseña con hash bcrypt en backend |
| **Control de sesiones** | Tokens JWT con expiración configurable |
| **Registro de auditoría** | Toda acción queda registrada con usuario, fecha, hora y tipo |
| **Historial de accesos** | Log de sesiones iniciadas por usuario |
| **Cuentas suspendidas** | Posibilidad de bloquear acceso sin eliminar el historial |
| **Trazabilidad operativa** | Cada modificación de datos registra al responsable |
| **Validación de entradas** | Sanitización de inputs en client y server side |
| **Rutas protegidas** | Redirección automática si no hay sesión activa |

### Criterios de validación actuales (Frontend)

- Formato de ID empleado: `EMP-YYYY-NNN`
- Formato de correo electrónico con regex de validación
- Campos requeridos marcados con asterisco y validación HTML5 `required`
- Confirmación antes de acciones destructivas (eliminar)
- Estados visuales claros para datos inválidos

---

## 10. Diseño Responsive

OperPan está diseñado para funcionar correctamente en todos los tamaños de pantalla del contexto empresarial.

### Breakpoints implementados

| Dispositivo | Ancho | Adaptaciones |
|---|---|---|
| **Desktop** | `> 1024px` | Layout completo de dos columnas, dashboard con 4 KPIs en fila |
| **Laptop** | `768px – 1024px` | Padding reducido, ajuste de grillas |
| **Tablet** | `480px – 768px` | Formularios en columna única, KPIs en 2x2 |
| **Móvil** | `< 480px` | KPIs en columna, tabs en columna, navbar horizontal con scroll |

### Técnicas responsive aplicadas

- **CSS Grid** con `repeat(auto-fit, minmax(...))` para tarjetas y grillas adaptativas
- **Flexbox** con `flex-wrap: wrap` para contenedores de badges, botones y nav items
- **Bootstrap Grid** para layouts de dos columnas en hero y secciones de contenido
- **overflow-x: auto** en navbar y tablas para scroll horizontal en móvil
- Variables de layout (`--header-h`, `--nav-h`) centralizadas para cálculos de `padding-top`
- Media queries en tres niveles: `max-width: 1024px`, `768px` y `480px`

---

## 11. Proceso de Desarrollo

### Metodología aplicada

El desarrollo de OperPan siguió un proceso iterativo basado en diseño primero:

```
1. Análisis de requerimientos
      ↓
2. Definición de módulos y flujos
      ↓
3. Definición del sistema de diseño (paleta, tipografía, componentes)
      ↓
4. Construcción del homepage (portal institucional)
      ↓
5. Construcción del login
      ↓
6. Construcción del dashboard administrativo
      ↓
7. Desarrollo módulo a módulo (Admin)
      ↓
8. Construcción del dashboard empleado
      ↓
9. Desarrollo módulo a módulo (Empleado)
      ↓
10. Revisión de coherencia visual global
      ↓
11. Documentación técnica
```

### Decisiones de diseño relevantes

**La homepage como portal institucional, no ecommerce.** La decisión de diseñar `index.html` como un portal corporativo de presentación, y no como una tienda o landing page comercial, fue deliberada. Responde a la naturaleza del sistema (software interno de RRHH) y a las directrices de la instructora del proyecto: la homepage debe funcionar como bienvenida institucional y punto de acceso, no como escaparate comercial.

**Navbar de módulos separada del header.** El panel administrativo usa dos capas de navegación: un `<header>` fijo con información de sesión y rol, y una `<nav>` secundaria con los módulos del sistema. Esta separación mejora la claridad visual y facilita la navegación entre módulos sin perder el contexto de sesión.

**Un solo archivo CSS para todo el panel.** En lugar de un CSS por módulo, se optó por un único `style.css` global para todo el panel administrativo. Esto garantiza coherencia de componentes (tarjetas, botones, tablas, badges) y facilita el mantenimiento.

**Datos de prueba representativos.** Los datos mock utilizados (nombres, IDs, horarios, estados) fueron seleccionados para representar fielmente el contexto de una panadería, haciendo las demos y presentaciones más convincentes.

---

## 12. Retos del Desarrollo

| Reto | Solución aplicada |
|---|---|
| **Coherencia visual entre 14+ archivos HTML** | Sistema de diseño centralizado en variables CSS y componentes reutilizables |
| **Navegación entre sub-páginas con rutas relativas** | Definición precisa del árbol de directorios y uso consistente de rutas relativas desde cada nivel |
| **Formularios complejos con múltiples campos** | Organización en grillas de 2 columnas, `<details>` para secciones opcionales, hints contextuales |
| **Tablas responsivas con muchas columnas** | `overflow-x: auto` en contenedores, reducción de padding en mobile |
| **Distinción visual clara entre roles** | Dashboards diferenciados, badges de rol en el header, restricción de menú de navegación por perfil |
| **Login con apariencia de sistema seguro** | Diseño oscuro, iconografía de seguridad, nota informativa de "acceso restringido" |
| **Navbar fija sin desplazar el contenido** | Variables CSS para alturas exactas, `padding-top` dinámico en `body.admin` |

---

## 13. Mejoras y Hoja de Ruta Futura

### Fase 2 — Integración Backend

| Mejora | Descripción |
|---|---|
| **Backend en PHP / Node.js** | API REST para todos los módulos del sistema |
| **Base de datos MySQL** | Implementación del esquema ya definido en `operpan.sql` |
| **Autenticación real** | JWT, bcrypt, sesiones seguras, expiración automática |
| **Persistencia de datos** | Todos los formularios guardarán en base de datos real |
| **Validaciones server-side** | Complemento a las validaciones frontend ya implementadas |

### Fase 3 — Funcionalidades avanzadas

| Mejora | Descripción |
|---|---|
| **Generación de PDFs** | Certificados laborales, reportes y constancias en PDF descargable |
| **Notificaciones** | Alertas de permisos pendientes, vencimiento de incapacidades |
| **Exportación de reportes** | Exportar a Excel y PDF desde el módulo de reportes |
| **Módulo de nómina** | Cálculo de liquidaciones, horas extra y deducciones |
| **Llamados de atención** | Módulo completo de registro y seguimiento de sanciones |
| **Firma digital** | Aprobación de documentos con firma electrónica |

### Fase 4 — Escalabilidad y despliegue

| Mejora | Descripción |
|---|---|
| **Despliegue en nube** | Hosting en AWS, Google Cloud o servidor propio |
| **Módulo multi-sede** | Soporte para múltiples puntos de venta de Estación Paisa |
| **App móvil** | Versión PWA o nativa para registro de asistencia desde celular |
| **Panel de auditoría** | Trazabilidad completa de todas las operaciones del sistema |
| **Integración PILA** | Conexión con plataforma de aportes de seguridad social |

---

## 14. Requerimientos Funcionales por Módulo

### Módulo de Horarios

| ID | Tipo | Descripción |
|---|---|---|
| RF-HR-01 | Funcional | El sistema permite a los empleados visualizar sus horarios asignados |
| RF-HR-02 | Funcional | El sistema permite al empleado registrar su hora de entrada |
| RF-HR-03 | Funcional | El sistema permite al empleado registrar su hora de salida |
| RF-HR-04 | Funcional | El sistema permite visualizar el historial de entradas |
| RF-HR-05 | Funcional | El sistema permite visualizar el historial de salidas |
| RF-HR-06 | Funcional | El administrador puede generar nuevos horarios |
| RF-HR-07 | Funcional | El administrador puede modificar horarios existentes |
| RF-HR-08 | Funcional | El administrador puede eliminar horarios |
| RF-HR-09 | Funcional | El administrador puede visualizar todos los horarios activos |
| RF-HR-10 | Funcional | El administrador visualiza la hora de llegada de los empleados |
| RF-HR-11 | Funcional | El administrador visualiza la hora de salida de los empleados |
| RNF-HR-01 | No funcional | El sistema registra en tiempo real las horas de entrada y salida |
| RNF-HR-02 | No funcional | Los horarios se presentan en una interfaz clara y accesible |
| RNF-HR-03 | No funcional | Se almacena un historial seguro de todos los registros |
| RNF-HR-04 | No funcional | El sistema garantiza trazabilidad en la gestión de horarios |

### Reglas de Negocio — Horarios

| ID | Regla | Propósito |
|---|---|---|
| RN-HR-01 | Los empleados solo pueden registrar su propia asistencia | Evitar fraudes en el registro |
| RN-HR-03 | El administrador puede generar, modificar y eliminar horarios | Mantener la planificación actualizada |
| RN-HR-04 | Cada registro incluye fecha y hora exacta | Garantizar trazabilidad |
| RN-HR-05 | El administrador puede ver llegadas y salidas de todos los empleados | Control de puntualidad |

---

## 15. Credenciales de Prueba

> ⚠️ **Aviso:** Estas credenciales son únicamente para demostración del sistema en ambiente de desarrollo. No representan contraseñas de producción.

| Perfil | Usuario | Contraseña | Acceso |
|---|---|---|---|
| Administrador | `admin` | `Admin123!` | Dashboard Admin + todos los módulos |
| Gerente | `gerente` | `Gerente123!` | Dashboard Admin (vista supervisión) |
| Empleado activo | `EMP001` | — | Dashboard Empleado — Carlos Méndez |
| Empleado suspendido | `EMP002` | — | Acceso bloqueado (cuenta suspendida) |
| Empleado activo 2 | `EMP003` | — | Dashboard Empleado |

---

## 16. Estructura de Archivos

### Descripción de archivos principales

| Archivo | Ubicación | Descripción |
|---|---|---|
| `index.html` | `/` | Homepage — Portal corporativo institucional |
| `styles.css` | `/Assets/` | Estilos del homepage público |
| `login.html` | `/Pages/` | Pantalla de autenticación del sistema |
| `landingAdmin.html` | `/Pages/admin/` | Dashboard y horarios — perfil Admin/Gerente |
| `style.css` | `/Pages/admin/Assets/` | Sistema de diseño del panel administrativo |
| `1-cuentas.html` | `/Pages/admin/sub-pages-admin/` | Módulo gestión de empleados |
| `2-tareas.html` | `/Pages/admin/sub-pages-admin/` | Módulo asignación de tareas |
| `3-permisos.html` | `/Pages/admin/sub-pages-admin/` | Módulo permisos laborales |
| `4-reportes.html` | `/Pages/admin/sub-pages-admin/` | Módulo reportes y estadísticas |
| `5-incapacidad.html` | `/Pages/admin/sub-pages-admin/` | Módulo incapacidades médicas |
| `6-certificados.html` | `/Pages/admin/sub-pages-admin/` | Módulo certificados laborales |
| `landingEmpleado.html` | `/Pages/Empleado/` | Dashboard — perfil Empleado |
| `1-asistencia.html` | `/Pages/Empleado/sub-pages-empleado/` | Registro de asistencia personal |
| `2-solicitudes.html` | `/Pages/Empleado/sub-pages-empleado/` | Solicitudes al área administrativa |
| `3-tareas.html` | `/Pages/Empleado/sub-pages-empleado/` | Tareas asignadas al empleado |
| `4-personal.html` | `/Pages/Empleado/sub-pages-empleado/` | Perfil e información laboral |
| `script.js` | `/Scripts/` | Lógica JavaScript compartida del sistema |
| `operpan.sql` | `/bd/` | Esquema de base de datos de referencia |

---

## 17. Conclusión Ejecutiva

**OperPan** representa una propuesta de software empresarial seria, bien estructurada y técnicamente sólida para la gestión de personal de **Estación Paisa**. El frontend desarrollado en esta primera fase no es simplemente un conjunto de páginas web: es una arquitectura visual completa, un sistema de diseño institucional coherente y una experiencia de usuario pensada para el entorno operativo real de una empresa del sector alimentario.

El proyecto demuestra:

- **Capacidad de análisis funcional**: los módulos fueron diseñados a partir de requerimientos funcionales reales, historias de usuario y reglas de negocio documentadas.
- **Madurez en diseño UX/UI**: la interfaz sigue principios de diseño empresarial profesional, con consistencia visual total, jerarquía clara y componentes reutilizables.
- **Organización técnica**: la arquitectura de archivos, el sistema de variables CSS y la modularización del código demuestran criterio técnico en la organización del proyecto.
- **Visión de producto**: el sistema fue diseñado pensando en su evolución futura, con estructura preparada para integración de backend, autenticación real y escalabilidad.

OperPan está preparado para crecer. La base frontend construida en esta fase proporciona todo lo necesario para que la integración del backend sea directa, ordenada y sin necesidad de rediseñar la experiencia de usuario. El camino hacia un sistema de RRHH completamente funcional para Estación Paisa ya tiene su arquitectura definida.

---

<div align="center">

**OperPan** · Sistema de Gestión de Personal  
**Estación Paisa** · 2026  
Proyecto ADSO — Desarrollo Frontend v1.0

</div>