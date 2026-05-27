# Desarrollo con DJANGO - Web 3

Para aprender, se tiene que repetir la misma actividad. Por lo que vamos a desarrollar miweb3. Otro proyecto para practicar una CRUD con un Framework.

> Cada vez más cerca de poder finalizar una pagina de inicio a fin haciendole frontend y backend.

1. Se pide crear la carpeta web 3.

2. Pide ir al CMD. 

3. Dirigirse al entorno virtual utilizando asi python -m venv venv y venv\Scripts\activate

4. Ejecutar: py -m pip install django

> Aqui se debe ingresar a la carpeta miweb3

5. Ejecutar: django-admin startproject miweb3

> Aqui se debe ingresar a la carpeta miweb3 (Creada por project)

6. Ejecutar: python manage.py startapp usuarios

---

Iniciemos pensando que estamos en 06-ORM/ y entonces dentro de miweb3 agregamos en settings.py editar:

```python
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'usuarios',
    ]
```

Y luego se pide ir a miweb3/urls.py

```python
    from django.contrib import admin
    from django.urls import path, include

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('usuarios.urls')),
    ]
```










---










## Tabla de Contenido

1. [Desarrollo con DJANGO - Web 3](#desarrollo-con-django---web-3)

2. [Aplicación](#aplicación)









---











## Aplicación

Y ahora nos vamos a enfocar en la aplicación.

En usuarios/ crearemos el archivo urls.py

```python
    from django.urls import path
    from .import views

    urlpatterns = [
        path('', views.home, name='home'),
        path('registro', views.registro, name='registro'),
        path('login', views.login, name='login'),
        path('logout', views.logout, name='logout')
    ]
```

Ahora a continuación vamos con temas de seguridad que ya tiene el framework.

Las tenemos que importar primero.

Entonces vamos a usuarios/views.py

```python
    from django.shortcuts import render, redirect
    from django.contrib.auth.forms import UserCreationForm
    from django.contrib.auth import login, logout, authenticate
    from django.contrib import messages

    # Create your views here.

    # Ahora continuamos entonces con las funciones. Inicialmente por home:

    def home(request):
        return render(request, 'usuarios\home.html')

    # Ahora para temas de registro:

    def registro(request):
        # Como habra un formulario de registro para tener un nuevo usuario.

        # Verifica que sea POST por protocolos de seguridad
        if request.method == 'POST':
            form=UserCreationForm(request.POST)
            if form.is_valid(): 
                form.save()
                messages.success(request, "Usuario creado correctamente")
                return redirect('login')
            else:
                form=UserCreationForm()

            return render(request, 'usuarios\registro.html', {'form':form})
        
    # Ahora vamos con tema de autenticación.

    def login_view(request):
        # Temas de usuario y contraseña
        # Veremos los datos que estaran en el modelo.

        if request.method == 'POST':
            username=request.POST['username']        
            password=request.POST['password']

            # Llamaremos al metodo de autenticación

            # En caso de que sean igual, que se haga la autenticación.
            user=authenticate(request, username=username, password=password)


            # Para definir si entra o no entra.        
            if user is not None:            
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, "Credenciales Incorrectas")

        return render(request, 'usuarios\login.html')


    # Ultima view, para logout

    def logout_view(request):
        logout(request)
        return redirect('login')
        
```

Se pide crear dentro de usuarios/ crearemos templates/ y dentro de esta usuarios/

Dentro de la carpeta usuarios se va a crear:

* home.html

* login.html

* registro.html

A continuación el codigo de home.html en donde estamos usando la programación de django:

```python
    <h1>Bienvenido</h1>

    {% if user is.authenticated %}
    <p>Hola {{user.username}}</p>

    <a href="/logout/">Cerrar Sesion</a>

    { % else % }

    <a href="/login/">login</a>

    <a href="/registro/">registro</a>

    { % endif % }
```

Y entonces se pide escribir en registro.html

```html
    <h1>Registro de Usuario</h1>

    <form method="post">
        <!-- Temas de Seguridad de Consulta -->
        {% csrf_token %}

        <!-- Para cuando hallan datos, esto lo protege. -->
        {{% form.as_p %}}

        <button type="submit">Registro</button>
    </form>

    {% for message in messages %}
    <p>{{message}}</p>

    <!-- Dependiendo de si es exito o error -->
    {%  endfor %}
```

Y para el login.html

```python
    <h1>Login</h1>

    <form method="post">
        <!-- Temas de Seguridad de Consulta -->
        {% csrf_token %}

        <input type="text" name="username" placeholder="Usuario">
        <br>
        <input type="password" name="password" placeholder="Contraseña">
        <br>
        
        <button type="submit">Registro</button>
    </form>

    {% for message in messages %}
    <p>{{message}}</p>

    <!-- Dependiendo de si es exito o error -->
    {%  endfor %}
```

**Se pide entonces ir a la web**

se pide ejecutar: python manage.py migrate

se pide ejecutar: python manage.py runserver

Se pide ingresar: http://127.0.0.1:8000/registro/

Y entonces me lanzo unos errores, por ende la solución a eso será:

1. Cambiar: {% if user is.authenticated %} por {% if user.is_authenticated %}

2. Cambiar:  { % endif % } por {% endif %}

3. Cambiar: { % else % } por {% else %}

Siempre va a ver problemas de compatibilidad con python y django. En temas de hosting tambien pueden haber problemas de compatibilidad.