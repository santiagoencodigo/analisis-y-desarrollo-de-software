
# Bitácora de Desarrollo: Módulo de Asistencia (OperPan)

## 1. Contexto del Proyecto y del Ticket
**Proyecto:** OperPan - Sistema web interno de gestión de personal para la panadería y cafetería "La Estación Paisa" (Soacha, Colombia).
**Stack:** Python, Django, MySQL/SQLite, Bootstrap.
**Despliegue:** PythonAnywhere.

### Ticket de JIRA Resuelto:
**`admin/asistencia - ausencia automatica despues de 60 minutos de tardia`**

**Problemática Inicial:** Anteriormente, el sistema permitía a los administradores registrar la asistencia de un empleado en cualquier momento del día, sin importar cuánto tiempo hubiera pasado desde su hora de entrada programada. Esto generaba inconsistencias en los reportes, permitía registrar a personas que llegaron horas después como "Presentes" y no aplicaba bloqueos operativos.

---

## 2. Reglas de Negocio Implementadas
Para resolver el ticket, se establecieron las siguientes reglas estrictas en el código, alineadas con la operación real de la panadería:

*   **Turnos Base:** Mañana (04:00 - 14:00), Tarde (13:30 - 22:00), Fijo (08:00 - 17:00). *(Nota: Las horas exactas dependen de la configuración del registro en el modelo `Horario`).*
*   **Tolerancia (15 minutos):** Si el empleado marca su asistencia dentro de los primeros 15 minutos posteriores a su hora de entrada, el sistema registra el estado como `PRESENTE`.
*   **Tardanza (16 a 60 minutos):** Si marca después de los 15 minutos, pero antes del minuto 60, el estado es `TARDE`.
*   **Límite Estricto (60 minutos):** Si transcurren 60 minutos exactos desde la hora de entrada sin que se registre asistencia (`hora_marcada` nula), el sistema bloquea la acción en la interfaz y el empleado debe ser procesado como `AUSENTE`.

---

## 3. Bitácora de Desarrollo (Paso a Paso)

### Paso 1: Cálculo del límite de tiempo y Bandera de Control en Backend
Se modificó la función `_contexto_base()` en `apps/asistencia/views.py` para calcular en tiempo real si un turno ya expiró. Esta función alimenta el contexto de la vista principal del administrador.

**Desafío Técnico Superado:** Inicialmente, todos los turnos aparecían como "vencidos" debido a un desfase horario. Django estaba calculando la hora usando UTC (5 horas adelante de Colombia), lo que alteraba la comparación.
**Solución:** Se implementó una comparación de horas puras (usando `time()` y una fecha "dummy" `date(2000, 1, 1)`) y se forzó el uso de la hora local con `timezone.localtime().time()`.

```python
# Extracto de _contexto_base en apps/asistencia/views.py
hora_actual = timezone.localtime().time()

if horario.hora_entrada:
    # Fecha dummy para operar matemáticamente con las horas sin alterar el día
    dummy_date = date(2000, 1, 1)
    entrada_dt = datetime.combine(dummy_date, horario.hora_entrada)
    
    # Calculamos la hora límite sumando exactamente 60 minutos
    limite_hora = (entrada_dt + timedelta(minutes=60)).time()
    
    # Evaluamos si la hora actual superó el límite
    if hora_actual > limite_hora:
        horario.puede_registrar = False # Bandera que apagará el botón
    else:
        horario.puede_registrar = True  # Bandera que permite el registro
```

### Paso 2: Modificación de la Interfaz Gráfica (UI/UX)
Para reflejar el resultado del cálculo del backend, se modificó el template `templates/admin/asistencia/resumen_hoy.html`. 
Se evaluó la variable `horario.puede_registrar` y se rediseñó el botón para mantener la coherencia visual con la UI de OperPan (usando clases de Bootstrap como `rounded-pill` y `px-3`).

**Comportamiento:**
*   Si ya pasaron 60 minutos, el botón se deshabilita, cambia a color gris y muestra el texto **"Tiempo vencido"**.
*   Si está dentro del límite de 60 minutos, se muestra el botón normal para **"Registrar"**.

```html
<!-- Extracto de templates/admin/asistencia/resumen_hoy.html -->
<td>
  {% if horario.asistencia %}
    <span class="badge badge-active"><i class="bi bi-check2"></i> Registrado</span>
  {% elif not horario.puede_registrar %}
    <!-- Botón bloqueado si pasaron los 60 min -->
    <button class="btn btn-sm btn-outline-secondary rounded-pill px-3" disabled title="El plazo de 60 minutos ha vencido.">
      <i class="bi bi-slash-circle me-1"></i> Tiempo vencido
    </button>
  {% else %}
    <!-- Botón activo -->
    <button class="btn btn-sm btn-outline-corporate btn-registrar-asistencia rounded-pill px-3" data-horario-id="{{ horario.id }}">
      <i class="bi bi-fingerprint me-1"></i> Registrar
    </button>
  {% endif %}
</td>
```

### Paso 3: Blindaje del Backend (Validación de Tolerancia)
Para evitar que un administrador registre asistencias a la fuerza recargando la página o interceptando peticiones (AJAX/Postman), se modificó la función `registrar_asistencia()` en `views.py`. 

Se agregó la validación estricta de los 60 minutos y se implementó el cálculo de la tolerancia de 15 minutos exigida en el prompt maestro.

```python
# Extracto de registrar_asistencia en apps/asistencia/views.py
hora_actual = timezone.localtime().time()

# 1. Validación de Límite (60 minutos)
if horario.hora_entrada:
    dummy_date = date(2000, 1, 1)
    entrada_dt = datetime.combine(dummy_date, horario.hora_entrada)
    limite_hora = (entrada_dt + timedelta(minutes=60)).time()

    if hora_actual > limite_hora:
        # Se rechaza la petición en el servidor
        return JsonResponse({'error': 'El plazo de 60 minutos ha vencido. El empleado se considera Ausente automático.'}, status=400)

# 2. Validación de Tolerancia (15 minutos)
if horario.hora_entrada:
    limite_tolerancia_hora = (entrada_dt + timedelta(minutes=15)).time()
    
    if hora_actual <= limite_tolerancia_hora:
        estado = "PRESENTE" # A tiempo
    else:
        estado = "TARDE"    # Tardanza justificada dentro de los 60 min
```

---

## 4. Control de Versiones (Commit Realizado)
Los cambios descritos en esta bitácora fueron consolidados y subidos al repositorio bajo el siguiente commit:

*   **Versión:** `1.2.12`
*   **Mensaje:** `docs: asistencia(admin)/ Modificación en boton 'Registrar' --> 'Tiempo Vencido'`
*   **Fecha:** 10/11/2026

---

## 5. Estado Actual y Próximos Pasos
Actualmente, la interfaz gráfica bloquea al administrador y el backend rechaza peticiones fraudulentas si el tiempo ha expirado. 

**Pendiente Técnico (Para la siguiente iteración):** 
Implementar el *Management Command* (`marcar_ausencias_automaticas.py`) que se ejecutará vía Cronjob en PythonAnywhere. Este script será el encargado de escribir en la base de datos el estado `AUSENTE` para todos aquellos registros que quedaron "Sin marcar" tras superar la hora límite, garantizando así que los reportes mensuales se generen correctamente sin intervención humana.

**Pendiente Documental:**
*   Finalizar el Manual de Uso (Módulo de Horarios y Asistencia).
*   Consolidar el Informe Final del proyecto.