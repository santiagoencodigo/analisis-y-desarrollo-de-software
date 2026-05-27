# Crud Hojas de Hielo

> Clase del 27/05/2026

Hemos estado trabajando con DJANGO ya varios proyectos, la instructora nos pidio seguir entonces un componente formativo que ella realizo y hacer le paso a paso hasta construir el proyecto.

> Previamente debe estar instalado Python en el equipo.

Se pide Instalar los siguientes complementos en Visual Studio Code:

    a. Bootstrap 5 Quick Snippets: Extensión que facilita demasiado la escritura en el HTML
    b. Windsurf Plugin (formerly Codeium): AI Coding Autocomplete and Chat for Python

Luego crear el entorno virtual del proyecto o asegurarse de contar con Python 3.12 instalado.

1. Crear el archivo .gitignore antes de subir el proyecto al repositorio en GitHub.
2. Crear una carpeta en el escritorio con el nombre DJANGO_CRUD_BASICO. (Esta es mi carpeta 07-CRUD-hojas-de-hielo)
3. Abrir la carpeta en Visual Studio Code.
5. python -m pip --version (Verifica que halla python.)
6. python -m venv venv (Esto la preparación para instalar las dependencias que se requieren.)
7. Si no esta activo, tiene que escribir venv\Scripts\activate.bat   
8. En la terminal CMD, verificar la instalación de pip ejecutando el siguiente comando: **python -m pip install django**

> Si requerimos de una versión específica: python -m pip install django==4.2

Ahora vamos a proceder a crear la estructura del framework Django ejecutando una de las
siguientes instrucciones en la terminal CMD:

* django-admin startproject project

o también:

* python -m django startproject project

Una vez creada la estructura, dirigirse desde la terminal CMD a la carpeta project, donde se encuentra ubicado el archivo manage.py:

> cd project

Es importante verificar que el servidor funciona correctamente ejecutando en la terminal CMD:

> python manage.py runserver

Debe mostrarse una dirección similar a:

* http://127.0.0.1:8000/

> Para detener el servidor, presione la combinación de teclas: **Ctrl + C**

Ahora se procederá a crear una aplicación dentro del proyecto. En este caso, se desarrollará un CRUD para una tienda que registrará hojas de hielo (icopor).

* La aplicación se llamará hojitas.

---

Ejecute en la terminal CMD el siguiente comando:

* python manage.py startapp hojitas

Empezamos a configurar el archivo project/project/settings.py, en la sección INSTALLED_APPS se encuentran registradas las aplicaciones que Django instala por defecto. Cómo se creó una nueva aplicación llamada hojitas, es necesario registrarla dentro de esta lista.

> Agregue la aplicación hojitas en INSTALLED_APPS, por ejemplo:

```python
    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'hojitas'
    ]
```

Ahora ingrese a la aplicación hojitas y nos dirigimos a views.py, es decir, hojitas/views.py Allí se realizará una prueba de saludo. 

Para ello se importará y agregará: from django.http import HttpResponse

---

ubíquese en la carpeta de la aplicación hojitas y cree un nuevo archivo llamado urls.py.

Con urlpatterns, el usuario podrá acceder a las vistas de la aplicación. Por ejemplo, se utiliza views.inicio porque la vista (la función definida en views.py) se llama inicio.

```python
    from django.urls import path #acceder a las urls
    from . import views #acceder a las vistas

    urlpatterns=[
        path('',views.inicio,name='inicio')
    ]
```

Puede verificar el funcionamiento ejecutando el siguiente comando en la terminal: **python manage.py runserver**

from django.urls import path #acceder a las urls
from . import views #acceder a las vistas
urlpatterns=[
path('',views.inicio,name='inicio'),
path('nosotros',views.nosotros, name='nosotros')
#en la primera parte, nosotros vamos a escribir en la url la palabra
nosotros. Accediendo a views.nosotros para mostrarlo.
]
