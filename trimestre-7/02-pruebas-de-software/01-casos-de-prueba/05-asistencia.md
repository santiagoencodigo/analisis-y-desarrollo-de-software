# Bitácora de Desarrollo - OperPan

## Tabla de Contenido
1. [Fecha de la Sesión](#fecha-de-la-sesión)
2. [Objetivo del Ticket](#objetivo-del-ticket)
3. [Lógica de Negocio Implementada](#lógica-de-negocio-implementada)
4. [Modificación en el Backend](#modificación-en-el-backend)
5. [Modificación en el Frontend](#modificación-en-el-frontend)
6. [Justificación de las Decisiones Técnicas](#justificación-de-las-decisiones-técnicas)

---

## Fecha de la Sesión
**17/11/2026**

### Contexto Inicial
Se requería resolver la incongruencia visual y lógica en el módulo de asistencia para el rol de administrador. Anteriormente, si un empleado no marcaba su entrada, el sistema mantenía el estado **"Sin registrar"** y permitía al administrador hacer clic en el botón de registrar tiempo después de la hora de entrada, lo cual generaba fallos en los reportes de nómina.

---

## Objetivo del Ticket
Implementar la **ausencia automática** tras 60 minutos de tardanza. Si un empleado tiene un turno asignado (ej. 05:00 AM) y no registra su asistencia, el sistema debe:
1. Bloquear la acción de registro en la interfaz.
2. Cambiar el estado visual a **"Ausente"**.
3. Crear el registro en la base de datos de forma automática para que los reportes (KPIs) reflejen la realidad.

---

## Lógica de Negocio Implementada
Para que el sistema determine que un empleado está ausente, deben cumplirse **4 condiciones simultáneas** evaluadas en el servidor:
1. **El tiempo expiró:** La hora actual es mayor a la `hora_entrada` + 60 minutos.
2. **No hay marcas previas:** El empleado no tiene un registro de `Asistencia` para el día de hoy.
3. **No es día de descanso:** No existe un registro en `DescansoEmpleado` para la fecha actual.
4. **No hay novedades:** El empleado no tiene un Permiso o Incapacidad aprobada que cubra el día.

---

## Modificación en el Backend
**Archivo modificado:** `apps/asistencia/views.py`
**Función modificada:** `_contexto_base()`

### Código Implementado
Se modificó la función para que, al momento de cargar el panel, evalúe las condiciones y guarde en la base de datos la ausencia si corresponde.

```python
# =============================================================================
# ACTUALIZACIÓN (17/11/2026): Automatización de ausencias por límite de tiempo.
#
# Esta función ahora procesa los horarios y aplica la regla de los 60 minutos:
# 1. Calcula la hora límite sumando 60 min a la hora de entrada del turno.
# 2. Si la hora actual supera el límite y el empleado no ha marcado, verifica 
#    que no sea día de descanso ni tenga una novedad aprobada (Permiso/Incapacidad).
# 3. Si pasa las validaciones, crea automáticamente el registro en la base de 
#    datos con estado "AUSENTE".
# =============================================================================
def _contexto_base():
    # ... (código anterior de carga de horarios y empleados) ...

    hora_actual = timezone.localtime().time()

    # Importamos la función que ya tienes para buscar novedades
    from .services.novedades_calendario import obtener_novedades_por_fecha

    for horario in horarios:
        # ... (validación de día de descanso) ...

        asistencia = Asistencia.objects.filter(horario=horario, fecha=hoy).first()

        # --- LÓGICA DE 60 MINUTOS Y CREACIÓN AUTOMÁTICA EN BD ---
        if horario.hora_entrada:
            # Usamos una fecha dummy para calcular la hora límite sin alterar el día
            dummy_date = date(2000, 1, 1)
            entrada_dt = datetime.combine(dummy_date, horario.hora_entrada)
            limite_hora = (entrada_dt + timedelta(minutes=60)).time()
            
            if hora_actual > limite_hora:
                horario.puede_registrar = False
                horario.estado_tiempo = "AUSENTE_AUTOMATICO"
                
                # SI NO HAY ASISTENCIA Y EL TIEMPO VENCIÓ, CREAMOS LA AUSENCIA EN LA BD
                if not asistencia:
                    # Buscamos si tiene alguna novedad aprobada para hoy (Permiso, Incapacidad)
                    novedades_hoy = obtener_novedades_por_fecha(horario.empleado, hoy, hoy)
                    
                    # Si 'hoy' no está en las novedades, procedemos a crear la ausencia
                    if hoy not in novedades_hoy:
                        asistencia = Asistencia.objects.create(
                            horario=horario,
                            fecha=hoy,
                            estado='AUSENTE',
                            hora_marcada=None
                        )
            else:
                horario.puede_registrar = True
                horario.estado_tiempo = "A_TIEMPO"
        else:
            horario.puede_registrar = False
            horario.estado_tiempo = "SIN_HORA"

        # ... (asignación al contexto y cálculo de KPIs) ...
```

---

## Modificación en el Frontend
**Archivo modificado:** `templates/admin/asistencia/resumen_hoy.html`
**Sección modificada:** El `<tbody>` de la tabla de turnos.

### Código Implementado
Se actualizaron las columnas para reflejar el formato de 12 horas (AM/PM), mostrar el texto **"No registrada"** cuando el tiempo expiró, pintar el badge rojo de **"Ausente"** y deshabilitar el botón.

```html
<!-- =====================================================================
     ACTUALIZACIÓN (17/11/2026): Control visual de tiempos y estados.
     
     - Formato de hora: Se usa el filtro |time:"h:i A" para mostrar AM/PM.
     - Hora Marcada: Si el tiempo expiró y no hay registro, muestra 
       "No registrada" en tono atenuado para evitar confusiones.
     - Estado: Evalúa la existencia de la asistencia. Si el sistema ya 
       bloqueó el tiempo, muestra la etiqueta roja "Ausente".
     - Acción: El botón muta a "Tiempo vencido" (deshabilitado) si se 
       superó el límite, bloqueando la marcación tardía en la UI.
====================================================================== -->
<tbody>
  {% for horario in lista_horarios %}
  <tr>
    <td>{{ horario.empleado.nombre_completo }}</td>
    <td>{{ horario.empleado.get_cargo_display }}</td>
    
    <!-- Formato AM / PM aplicado con |time:"h:i A" -->
    <td>{{ horario.hora_entrada|time:"h:i A" }}</td>
    
    <td>
      {% if horario.asistencia and horario.asistencia.hora_marcada %}
        {{ horario.asistencia.hora_marcada|time:"h:i A" }}
      {% elif not horario.puede_registrar %}
        <!-- Texto para tiempo vencido -->
        <span class="text-muted fw-semibold">No registrada</span>
      {% else %}
        <span class="text-muted">Sin marcar</span>
      {% endif %}
    </td>
    
    <td>
      {% if horario.asistencia %}
        {% if horario.asistencia.estado == "PRESENTE" %}
          <span class="badge badge-active">Presente</span>
        {% elif horario.asistencia.estado == "TARDE" %}
          <span class="badge badge-pendiente">Tarde</span>
        {% elif horario.asistencia.estado == "AUSENTE" %}
          <!-- Usamos la clase que ya tienes definida en tu CSS para ausente -->
          <span class="badge badge-ausente">Ausente</span>
        {% endif %}
      {% elif not horario.puede_registrar %}
        <!-- Respaldo visual por si la BD tarda milisegundos en actualizar -->
        <span class="badge badge-ausente">Ausente</span>
      {% else %}
        <span class="badge bg-secondary">Sin registrar</span>
      {% endif %}
    </td>
    
    <td>
      {% if horario.asistencia and horario.asistencia.estado != 'AUSENTE' %}
        <span class="badge badge-active"><i class="bi bi-check2"></i> Registrado</span>
      {% elif not horario.puede_registrar %}
        <button class="btn btn-sm btn-outline-secondary rounded-pill px-3" disabled title="El plazo de 60 minutos ha vencido.">
          <i class="bi bi-slash-circle me-1"></i> Tiempo vencido
        </button>
      {% else %}
        <button class="btn btn-sm btn-outline-corporate btn-registrar-asistencia rounded-pill px-3"
          data-horario-id="{{ horario.id }}">
          <i class="bi bi-fingerprint me-1"></i> Registrar
        </button>
      {% endif %}
    </td>
  </tr>
  {% endfor %}
</tbody>
```

---

## Justificación de las Decisiones Técnicas

### 1. ¿Por qué la creación en la base de datos se hace en `_contexto_base()` y no con un Cronjob?
**Explicación:** PythonAnywhere, en su capa gratuita, no permite tareas programadas frecuentes (Cronjobs). Al implementar la lógica **On-Demand** (bajo demanda), garantizamos que cada vez que un administrador abre el panel, el sistema se autolimpie y actualice la base de datos. Es una solución elegante, sin costos y sin dependencias externas. La desventaja (que no corra si nadie entra al sistema) no aplica, ya que los administradores revisan el panel a diario.

### 2. ¿Por qué la lógica de tiempo usa una `dummy_date`?
**Explicación:** Para evitar el clásico error de desfase horario (Timezone) en Django donde se suman horas y el sistema cree que es otro día. Al crear una fecha falsa (`date(2000, 1, 1)`), podemos sumar los 60 minutos matemáticamente y extraer solo la hora (`time()`), garantizando que la validación sea exacta sin importar la configuración del servidor.

### 3. ¿Por qué se agregó el formato AM/PM y el texto "No registrada"?
**Explicación:** En la operación real de la panadería, el formato de 24 horas (14:00) puede ser confuso para el personal administrativo. El formato de 12 horas (02:00 PM) es más natural. Asimismo, dejar el texto "Sin marcar" cuando el tiempo ya expiró era contradictorio; **"No registrada"** comunica de forma implícita que el plazo se cerró y que, aunque quiso, ya no quedó registrado en el sistema.