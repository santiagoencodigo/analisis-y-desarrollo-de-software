# Cuentas

## Introducción y el Problema

Cuando nos sentamos a revisar el módulo de creación de usuarios, nos encontramos con un panorama bastante común en proyectos que crecen rápido: **la interfaz estaba peleando contra el usuario**. El formulario original dejaba que el navegador lanzara sus clásicos tooltips nativos (esos globos de texto feos que aparecen cuando un correo no tiene `@`). 

El verdadero dolor de cabeza era que, si el usuario cometía un error de lógica de negocio (por ejemplo, intentar registrar una cédula que ya existía), el backend devolvía la página con el error, **el modal se cerraba y todos los datos ingresados se perdían en el aire**. Tocar volver a digitar todo. 

Además, teníamos campos como EPS, ARL, Fondo de Pensión y Ciudad como simples textos libres (lo que generaba datos sucios e inconsistentes), permitíamos fechas de nacimiento e ingreso en el futuro, y no teníamos un control estricto sobre la edad del empleado o la unicidad del correo electrónico a nivel de base de datos.

La misión fue clara: blindar el backend, migrar a selectores, validar las reglas de negocio (como la edad) y, sobre todo, darle una experiencia de usuario (UX) premium usando Toasts de Bootstrap para que los datos nunca se pierdan.

---

## Tabla de Contenido

*   **Base de Datos (models.py)**
*   **Validaciones del Formulario (forms.py)**
*   **Manejo de Respuestas y Errores (views.py)**
*   **La Interfaz de Usuario (modal.html)**
*   **El Cerebro del Frontend (cuentas.js)**

---

## Problemas y Soluciones

### Base de Datos (models.py)

El primer tropiezo fue en la base de datos. Queríamos que el correo fuera único, pero al intentar migrar, SQLite nos lanzó un `IntegrityError` porque ya había correos duplicados en los registros de prueba. Tuvimos que limpiar la base de datos y luego aplicar el cambio.

Aquí forzamos a la base de datos a rechazar correos repetidos utilizando el atributo **`unique=True`**.
*Documentación:* [Django Field Options](https://docs.djangoproject.com/en/5.0/ref/models/fields/#unique)

```python
# apps/usuarios/models.py
# [19/11/2026] Se agrega unique=True para garantizar que el correo electrónico 
# sea único por empleado. Esto evita duplicados a nivel de base de datos.
correo = models.EmailField(unique=True)
```

### Validaciones del Formulario (forms.py)

Aquí es donde vive la verdadera lógica. Queríamos que el backend fuera el guardián final. Usamos **Expresiones Regulares** (Regex) para los nombres y el usuario, y lógica de fechas para la edad.

Para validar campos específicos en Django, se sobrescriben los métodos **`clean_<nombre_del_campo>`**. Si algo falla, lanzamos un **`ValidationError`**.
*Documentación:* [Django Form Validation](https://docs.djangoproject.com/en/5.0/ref/forms/validation/)

```python
# apps/usuarios/forms.py
import re
from datetime import date

# [19/11/2026] Validación de nombres: solo letras (con tildes/ñ), espacios y guiones
def _validar_nombre(self, valor, nombre_campo):
    if not re.match(r'^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-]+$', valor):
        raise forms.ValidationError(f"El {nombre_campo} solo puede contener letras, espacios y guiones.")
    if len(valor) < 2:
        raise forms.ValidationError(f"El {nombre_campo} debe tener al menos 2 caracteres.")
    return valor

# [19/11/2026] Cálculo de edad: Mínimo 16 años, máximo 80 años
def clean_fecha_nacimiento(self):
    fecha_nac = self.cleaned_data.get('fecha_nacimiento')
    if fecha_nac:
        today = date.today()
        edad = today.year - fecha_nac.year - ((today.month, today.day) < (fecha_nac.month, fecha_nac.day))
        if edad < 16:
            raise forms.ValidationError("El empleado debe tener mínimo 16 años de edad.")
        if edad > 80:
            raise forms.ValidationError("La fecha de nacimiento no es válida (excede los 80 años).")
    return fecha_nac
```

### Manejo de Respuestas y Errores (views.py)

Este fue el cambio arquitectónico clave. Antes, la vista redireccionaba con `messages.error`, lo que recargaba todo. Ahora, si la petición viene por AJAX, la vista atrapa los errores del formulario y los devuelve como un objeto **JSON** usando **`JsonResponse`**. También atrapamos el **`IntegrityError`** por si choca la base de datos por doble clic.
*Documentación:* [Django JsonResponse](https://docs.djangoproject.com/en/5.0/ref/request-response/#jsonresponse-objects) | [Django IntegrityError](https://docs.djangoproject.com/en/5.0/ref/exceptions/#django.db.IntegrityError)

```python
# apps/usuarios/views.py
from django.http import JsonResponse
from django.db import IntegrityError

def user_list_create(request):
    # ... (código anterior)
    if request.method == "POST":
        # ... (instanciación de formularios)
        if user_form.is_valid() and perfil_form.is_valid():
            try:
                # ... (guardado de user y perfil)
                return JsonResponse({"status": "success", "message": "Usuario creado correctamente."})
            except IntegrityError:
                return JsonResponse({"status": "error", "errors": ["Error: El usuario o documento ya existen."]}, status=400)

        # [19/11/2026] Recopilamos todos los errores de ambos formularios en una lista
        error_list = []
        for field, errors in user_form.errors.items():
            for error in errors:
                error_list.append(f"Error en {field}: {error}")
        for field, errors in perfil_form.errors.items():
            for error in errors:
                error_list.append(f"Error en {field}: {error}")

        return JsonResponse({"status": "error", "errors": error_list}, status=400)
```

### La Interfaz de Usuario (modal.html)

En el HTML hicimos dos cosas: le dijimos adiós a los tooltips nativos usando el atributo **`novalidate`** en el formulario, y reemplazamos los textos libres por selectores. También usamos la etiqueta de Django `{% now 'Y-m-d' %}` para bloquear fechas futuras directo en el calendario.

*Documentación:* [Atributo novalidate (MDN)](https://developer.mozilla.org/es/docs/Web/HTML/Element/form#attr-novalidate)

```html
<!-- templates/admin/usuarios/modal.html -->
<form method="POST" id="formCrearUsuario" action="{% url 'user_list' %}" novalidate>
    
    <!-- [19/11/2026] El select de Ciudad permite desplegar el input "Otra" -->
    <select class="form-select" name="ciudad" id="c_ciudad" required>
        <option value="Soacha">Soacha</option>
        <option value="Bogotá">Bogotá</option>
        <option value="Otra">Otra</option>
    </select>
    <input type="text" class="form-control mt-2 d-none" name="ciudad_otra" id="c_ciudad_otra" placeholder="Escriba la ciudad">

    <!-- [19/11/2026] Fechas con límites dinámicos -->
    <input type="date" class="form-control" name="fecha_nacimiento" id="c_fecha_nacimiento" max="{% now 'Y-m-d' %}" required>
</form>
```

### El Cerebro del Frontend (cuentas.js)

Aquí construimos el sistema de Toasts y la validación en tiempo real. Interceptamos el evento `submit` con **`e.preventDefault()`** para evitar que la página se recargue. Validamos las fechas con JavaScript (para el límite de 16 a 80 años) y, si todo está bien, usamos la **`Fetch API`** para enviar los datos.

Si el backend responde con errores (los que creamos en `views.py`), el JS los lee y los muestra en los Toasts, dejando el modal abierto.
*Documentación:* [Fetch API (MDN)](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) | [Bootstrap Toasts](https://getbootstrap.com/docs/5.3/components/toasts/)

```javascript
// static/js/admin/cuentas.js
formCrear.addEventListener('submit', function(e) {
    // [19/11/2026] Prevenimos la recarga y la pérdida de datos
    e.preventDefault(); 
    
    let errors = [];
    // ... (Validaciones regex de nombres, correo, etc.)

    // [19/11/2026] Validación de edad en el Frontend
    const fnac = new Date(getVal('c_fecha_nacimiento'));
    const today = new Date();
    let age = today.getFullYear() - fnac.getFullYear();
    if (age < 16) errors.push("El empleado debe tener mínimo 16 años de edad.");
    if (age > 80) errors.push("La fecha de nacimiento excede los 80 años.");

    // Si hay errores en JS, mostramos Toast y detenemos el envío
    if (errors.length > 0) {
        errors.slice(0, 3).forEach(err => showToast(err, 'danger'));
        return; 
    }

    // [19/11/2026] Envío asíncrono con Fetch
    const formData = new FormData(formCrear);
    fetch(formCrear.action, {
        method: 'POST',
        body: formData,
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            showToast(data.message, 'success');
            setTimeout(() => window.location.reload(), 1500); // Recarga para actualizar tabla
        } else {
            // Si Django devuelve error (ej. Usuario duplicado), lo mostramos sin cerrar el modal
            data.errors.forEach(err => showToast(err, 'danger'));
        }
    });
});
```

---

## Conclusión

Este módulo pasó de ser un formulario frágil que hacía perder tiempo al administrador, a un componente robusto con validación "Doble Capa" (Frontend para lo visual/formato, Backend para la integridad/negocio). El uso de `Fetch API` junto con `JsonResponse` fue la dupla perfecta para mantener el estado del formulario vivo, y el sistema de Toasts le dio ese toque moderno y elegante!

---

> Gracias por leer.