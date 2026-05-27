# ORM

Hoy vamos a mirar el panel administrativo siendo el que tiene el propio django.

Se pide crear otra carpeta, que en este caso para mi es 06-ORM. (Carpeta raiz )

Voy a mirar la pagina de DJANGO para ver qué tal: **"Django: The web framework for perfectionists with deadlines"**

Websites Recomendados:

* [https://aws.amazon.com/es/what-is/django/](https://aws.amazon.com/es/what-is/django/ "https://aws.amazon.com/es/what-is/django/")

* [https://github.com/django/django](https://github.com/django/django "https://github.com/django/django")










---










## Tabla de Contenido

1. [Instalación](#instalación)

2. [Creación de proyecto Django](#creación-de-proyecto-django)

3. [Migraciones y Admin Dashboard](#migraciones-y-admin-dashboard)

4. [URLs y Vistas](#urls-y-vistas)










---










# Instalación

Se pide ir al cmd y escribir python -m pip --version

Se pide preparar el entorno virtual: python -m venv venv

* Si no se activa se tiene que: venv\Scripts\activate.bat 

Se nos pide instalar el framework: pip install django.

Vamos a hacer unna aplicacion llamada tareas y en esta vamos a aplicar lo que es el CRUD. 

El orm es mapeo, porque ya tocaremos lo de la base de datos.

En este caso para ver como se aplica en una aplicación y buscaremos aplicar dashboard










---










## Creación de Proyecto Django

> Lo vamos a llamar miweb2

Crearemos el proyecto: django-admin startproject miweb2
 
Se pide ingresar a la carpeta o al proyecto: cd miweb2

Se pide crear la aplicación: python manage.py startapp tareas

> Mi computador personal se demora bastante para esto. 

Se pide escribir en **miweb2/settings.py**

```python
INSTALLED APPS = [
    'tareas',
]
    
```

Se pide ir a **tareas/models.py**

* Una tabla es una entidad

* una entidad es algo de la vida real. 

* Un objeto es la representaicón de la vida real. 

* Tarea como es una clase, tiene campos que en 

```python
    from django.db import models

    # Create your models here.

    # Se esta importando una libreria para hacer esa transición con los modelos
    class Tarea(models.Model):

        # Esto es lo que representaria una tabla apra la base de datos.

        # Cuando alguien lo llame, haga la construcción de la variable/campos
        titulo=models.CharField(max_length=200)
        descripcion=models.TextField(blank=True)
        estado=models.BooleanField(default=True)

        # django tiene demasiados tipos de datos, a medida de que pase el tiempo iremos viendo.

        # Esto hace que se guarde la fecha y hora en la que se creo la tarea
        fecha=models.DateTimeField(auto_now_add=True)         
```

Esa clase va a tener un metodo.

```python
    # Vamos con los metodos.
    def __str__(self):
        # Cada tarea es un objeto.
        return self.titulo
```










---










## Migraciones y Admin Dashboard

Se pide escribir python manage.py makemigrations

Esto creada db.sqlite3

Y luego escribir python manage.py migrate

* A medida de que hallan más cosas se demorará más.

> Usamos sqlite como nuestro gestor.

Vamos a por el tema del administrador.

Tenemos que crear un usuario y eso solo lo veremos nosotros.

Vamos a **tareas/admin.py**

El administrador tiene que administrar cosas, tenemos que importar lo que deseamos administrar.

Cosas a considerar:

* Las clases van con la primera letra en mayuscula.

Vamos a crear nuestro usuario administrativo y hay que configurarlo con una clave y contraseña.

Por ende se escribe **python manage.py createsuperuser**

<img src="./assets/00-superuser.png">

* Es curioso como ya empiezan a haber temas de seguridad como el nombre de usuario y la contraseña.

Esta interesante por como pide la contraseña y no la muestra en la terminal, pero por otro lado si es muy corta tambien avisa que es corta y se pide si se desea mantenerla corta.

Ahora vamos a verificar el admin, por ende vamos a ejecutar el servidor por medio de: **python manage.py runserver**

Hay una ruta que es el admin, en las urls.

Ahora, de acuerdo a la contraseña que hallamos puesto y el nombre de usuario:

<img src="./assets/01-superuserlogin.png">

Y entonces ingresara al puerto, entonces le agregamos /admin y por ende:

<img src="./assets/03-panel-admin.PNG">

Ahora, vamos al apartado de lógica osea tareas/views.py

```python
    from django.shortcuts import render, redirect, get_object_or_404

    # Toca importar la clase
    from .models import Tarea 


    # Create your views here.


    # Consultar listas tareas
    def listar_tareas(request):
        tareas=Tarea.objects.all()
        # Va a renderizar una carpeta en donde tenemos html
        return render(request,'tareas/lista.html',{'tareas':tareas})


    # Crear Tarea
    def crear_tarea(request):
        # Ahora iniciamos con los metodos get y post
        # Post: Oculta la información
        # se verifica que todos los registros hallan sido enviados con post.

        if request.method == "POST":
            titulo=request.POST['titulo']
            descripcion=request.POST['descripcion']

            # Estos dos objetos usaran las dos creaciones de objetos de la clase tareas
            Tarea.objetcs.create(titulo=titulo, descripcion=descripcion)

            # Lo de arriba es una creación, la idea es que se pueda devolver por ende:
                # Importante importar el redirect
            return redirect('lista')

        # Ahora tenemos que poner todo esto en una vista. Por ende las va a mostrar en:
        return render(request,'tareas/crear.html')


    # Ahora continuamos con la edición:
        # Además de la request va a recibir otro parametro. Esto es porque no puedo eliminar todo.
        # Necesitamos un identificador unico: En este caso id

            # El ORM nos ayudara con todo el apartado de la base de datos.
    def editar_tarea(request, id):
            # Debemos controlar en donde si no llega el id correcto, que muestre un mensaje de que no existe.
            # Esto es lo que se conoce como 404
            # Esto es un metodo especial y toca importarlo. (Primera linea de este documento.
        tarea=get_object_or_404(Tarea,id=id)
        if request.method == "POST":
            tarea.titulo=request.POST['titulo']
            tarea.descripcion=request.POST['descripcion']
            tarea.estado = 'estado' in request.POST

            # Cuando tenga toda esta información del post, salve la información
            tarea.save()

            # Que se rediriga a lista, donde la información va a estar.
            return redirect('lista')

        # Como tiene un HTML asociado:
        return render(request, 'tareas/editar.html', {'tarea':tarea})


    # Ahora con eliminar tarea:

    def eliminar_tarea(request, id):
        tarea=get_object_or_404(Tarea,id=id)
        tarea.delete()
        return redirect('lista')

    # Esto es nuestra CRUD de tareas.

    # Podemos agregar un filtro en donde solo nos muestre una consulta en donde solo esten las tareas completadas.




    # Filtro de tareas completadas

    def completadas(request):
        tareas=Tareas.objects.filter(estado = True)
        return render(request, 'tareas/lista.html', {'tareas':tareas})


```

Ahora tenemos que poner todo esto en una vista.

Tenemos cinco funciones.

Vemos que tenemos el ORM, pues nunca editamos por medio de sentencias sql. Sino que la idea es que esto sea sostenible en cualquier gestor entonces hacemos un mapeo rastreando por medio de identificadores.













---













## URLs y Vistas

Se pide crear el documento urls.py en tareas/

```python
    from django.urls import path

    # Importaremos lo que estaba en el view

        # Lo necesitamos porque aqui estan los metodos. Me permite llamar a las funciones.
    from .import views

    urlpatterns = [
        # Aqui viene la lista
            # El nombre de la ruta, la función que se va a ejecutar y el nombre de la ruta.
        path('', views.listar_tareas, name='lista'),
        path('crear/', views.crear_tarea, name='crear'),


        # Las dos rutas de arriba no necesitan ID, pero la de abajo si. 
        # Para decir que lo que va a pasar en esa url es un dato entero que es el id


        # Cuando hacemos trasnferencias de un lugar a otro por medio de una URL, necesitamos un ID.
            # Dice qué dato especifico se va a hacer con la edición.
        path('editar/<int:id>/', views.editar_tarea, name='editar'),
        
        # Lo mismo sucede con eliminación
        path('eliminar/<int:id>/', views.eliminar_tarea, name='eliminar'),
        
        path('completadas/', views.completadas, name='completadas'),
    ]
```

Con las URL ya listas, **ahora pasamos con las vistas**:

Dentro de la carpeta tareas/ se va a crear la carpeta templates/ y dentro de esta carpeta le agregaremos la carpeta tareas/ y dentro de tareas crearemos los HTML:

* lista.html

```html
<h1>Lista de tareas</h1>
<!-- Crearemos unos enlaces para hacer como los filtros -->
<a href="/crear/">Crear tarea</a>
<a href="/completadas/">Tareas completadas</a>

<!-- Como esto es una consulta y tenemos varios registros/objetos, haremos una lista de esos objetos -->

<ul>
    <!-- 
        Hay que hacer un ciclo porque si no solo mostrara una tarea
        Y por ende pasara por cada tarea y por ende va a renderizar una por una.
    -->
    {% for tarea in tareas %}
    <li>
        
        <!-- Solo conozco las variables por ende: -->

        <!-- Variable y campo -->
        <b>{{ tarea.titulo}}</b> - <b>{{ tarea.descripcion}}</b>

        <!-- Dependiendo del estado que me muestre las que estan activas o no -->

            <!-- Esto ya es propio de Django -->
        {% if tarea.estado %}
            ** Completada
        {% else %}
            xx Pendiente
        {% endif %}

        <!-- Recordemos que este requiere un ID entonces: -->
        <a href="/editar/{{ tarea.id }}/">Editar</a>        
        <a href="/Eliminar/{{ tarea.id }}/">Eliminar</a>
    </li>
    {% endfor %}
</ul>
```

Y se pide crear en templates/tareas/ el archivo crear.html

```html
    <h1>Crear tareas</h1>

    <form action="POST">
        {% csrf_token %}
        <!-- Aqui es de acuerdo a los campos de tarea -->
        <input type="text" name="titulo" value="{{tarea.titulo}}">
        <br>
        <!-- Un textField es un text area -->
        <textarea name="descripcion">{{tarea.descripcion}}</textarea>
        <br>
        <button type="submit">Guardar</button>
    </form>
```

y hay empieza a ver una comunicación con tareas/views.py

Ahora en templates/tareas/ vamos a crear editar.html

> Copiamos y pegamos la información de crear.html, pero le agregamos lo de estado.

```html
    <h1>Editar tareas</h1>

    <form action="POST">
        {% csrf_token %}
        <input type="text" name="titulo" value="{{tarea.titulo}}">
        <br>
        <textarea name="descripcion">{{tarea.descripcion}}</textarea>
        <br>

        <!-- Tambien puedo editar el estado y este es un checkbox porque es falso o verdadero -->

        <label for="">
            Completada:
            <!-- Ahora toca preguntar si hay un check para determinar si es true o false. -->
            <input type="checkbox" name="estado" {% if tarea.estado %} checked {% endif %}>
        </label>

        <button type="submit">Actualizar</button>
    </form>
```

Ya no vamos a tener más vistas.

Entonces cerramos el servidor con control + c

Volvemos y ejecutamos **python manage.py makemigrations** y luego **python manage.py migrate** para luego correr el servidor **python manage.py runserver**

* Para corregirle algo, debido a que el momento se ejecuta y muestra el cohete o interfaz inicial de DJANGO entonces vamos al proyecto principal en miweb2/urls.py

```python
    from django.contrib import admin
    from django.urls import path, include

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('tareas.urls'))
    ]
```

Hay una variable especial que usa django para los formularios:

> Siempre se pone despues de un POST en HTML.

```html
    {% csrf_token %}
```

Se nos pide ejecutar el servidor y tratar de crear una tarea.

> Entonces me encontré con varios errores, uno de ellos eran en el HTML:

En lista.html:

```html

        <!-- Recordemos que este requiere un ID entonces:
            eliminar no me funcionaba porque el href estaba con la E en mayuscula. 
        -->
        <a href="/editar/{{ tarea.id }}/">Editar</a>        
        <a href="/eliminar/{{ tarea.id }}/">Eliminar</a>
    </li>
    {% endfor %}
</ul>
```

Por otro lado en tareas/views.py, tenia dos problemas yo:

1. Mal redacción de mi clase

```python
def completadas(request):
    tareas=Tarea.objects.filter(estado = True)
    return render(request, 'tareas/lista.html', {'tareas':tareas})
```

En donde tareas=Tarea, lo tenia como Tareas.

2. Mala redacción de objects

```python
def crear_tarea(request):
    # Ahora iniciamos con los metodos get y post
    # Post: Oculta la información
    # se verifica que todos los registros hallan sido enviados con post.

    if request.method == "POST":
        titulo=request.POST['titulo']
        descripcion=request.POST['descripcion']

        # Estos dos objetos usaran las dos creaciones de objetos de la clase tareas
        Tarea.objetcs.create(titulo=titulo, descripcion=descripcion)

        # Lo de arriba es una creación, la idea es que se pueda devolver por ende:
            # Importante importar el redirect
        return redirect('lista')

    # Ahora tenemos que poner todo esto en una vista. Por ende las va a mostrar en:
    return render(request,'tareas/crear.html')
```

En donde lo tenia escrito como objetcs en vez de objects.

Y listo! Ya la aplicación es totalmente funcional para **Create, Read, Update and Delete.**











---

Gracias por leer.