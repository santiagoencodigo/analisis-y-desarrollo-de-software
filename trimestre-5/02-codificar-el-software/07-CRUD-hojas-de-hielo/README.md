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

---

Ahorita me salieron unos errores al intentar hacer correr el servidor, la solución era activar XAMPP. Pues el proyecto ya utiliza pymysql y tenia que crear hojash como Bases de Datos en XAMPP. Y ejecutar migraciones

# Solución de Problemas de Compatibilidad entre Django, PyMySQL y MariaDB

## Introducción

Durante la configuración del proyecto Django utilizando `PyMySQL` y `MariaDB`, aparecieron varios errores relacionados con:

* Bases de datos inexistentes.
* Compatibilidad entre versiones de Django y MariaDB.
* Configuración del entorno virtual.
* Conexión entre Django y MySQL/MariaDB.

A continuación se documentan los errores encontrados y las soluciones aplicadas.

---

# Error 1: Base de datos inexistente

## Error encontrado

```txt
django.db.utils.OperationalError:
(1049, "Unknown database 'hojash'")
```

## ¿Qué significa?

Django intentó conectarse a una base de datos llamada:

```txt
hojash
```

pero dicha base de datos no existía en MariaDB/MySQL.

---

## Solución

Crear la base de datos manualmente desde:

* phpMyAdmin
* HeidiSQL
* Consola MySQL/MariaDB

Ejemplo desde consola:

```sql
CREATE DATABASE hojash;
```

Luego volver a ejecutar:

```bash
python manage.py migrate
```

---

# Error 2: Incompatibilidad entre Django y MariaDB

## Error encontrado

```txt
django.db.utils.NotSupportedError:
MariaDB 10.6 or later is required (found 10.4.32)
```

Posteriormente:

```txt
MariaDB 10.5 or later is required (found 10.4.32)
```

---

# ¿Qué estaba sucediendo?

El proyecto estaba utilizando:

| Tecnología | Versión |
| ---------- | ------- |
| Django     | 6.0.5   |
| MariaDB    | 10.4.32 |

Django 6 requiere versiones más recientes de MariaDB.

Incluso Django 5.2 sigue requiriendo MariaDB 10.5+.

Sin embargo, el entorno local tenía instalada la versión:

```txt
MariaDB 10.4.32
```

Por esa razón Django bloqueaba la conexión y lanzaba el error de compatibilidad.

---

# Solución Aplicada

## 1. Desinstalar Django 6

```bash
pip uninstall django
```

---

## 2. Instalar una versión compatible

Se instaló Django 4.x:

```bash
pip install "django<5"
```

Esto normalmente instala una versión como:

```txt
Django 4.2.x
```

La cual sí es compatible con MariaDB 10.4.

---

## 3. Actualizar requirements.txt

```bash
pip freeze > requirements.txt
```

---

## 4. Ejecutar migraciones

```bash
python manage.py migrate
```

---

## 5. Iniciar el servidor

```bash
python manage.py runserver
```

---

# Relación con PyMySQL

El proyecto utiliza:

```python
import pymysql
pymysql.install_as_MySQLdb()
```

Esto permite que Django utilice PyMySQL como reemplazo del paquete:

```txt
mysqlclient
```

PyMySQL funciona correctamente, pero la compatibilidad real depende también de:

* La versión de Django.
* La versión de MariaDB/MySQL.

---

# Recomendaciones

## Opción recomendada

Actualizar MariaDB a versiones modernas:

* MariaDB 10.6+
* MariaDB 11+

Esto permite utilizar:

* Django 5
* Django 6

sin problemas de compatibilidad.

---

## Opción práctica para proyectos académicos

Si se trabaja con:

* XAMPP antiguos
* MariaDB 10.4
* Entornos institucionales

es más práctico utilizar:

```txt
Django 4.2
```

ya que mantiene compatibilidad con versiones antiguas de MariaDB.

---

# Resumen General

| Problema                  | Solución                              |
| ------------------------- | ------------------------------------- |
| Unknown database          | Crear la base de datos                |
| Django 6 incompatible     | Instalar Django 4                     |
| MariaDB demasiado antigua | Actualizar MariaDB o bajar Django     |
| Problemas con migraciones | Verificar compatibilidad de versiones |

---

# Comandos Finales Utilizados

## Instalar Django compatible

```bash
pip uninstall django
pip install "django<5"
```

---

## Guardar dependencias

```bash
pip freeze > requirements.txt
```

---

## Ejecutar migraciones

```bash
python manage.py migrate
```

---

## Iniciar servidor

```bash
python manage.py runserver
```

---



Login SuperUser

● Username: santiagoencodigo
● Email: *
● Password: crud 



---