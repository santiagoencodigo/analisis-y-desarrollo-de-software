# Despliegue de software en PythonAnywhere con Django

Documentación del proceso de despliegue de una aplicación web desarrollada con el framework Django y el lenguaje Python, utilizando el servicio de alojamiento PythonAnywhere. Esta guía abarca la investigación de servicios, la configuración del entorno, el despliegue del código y la conexión con bases de datos.

Competencia: Implementar la solución de software de acuerdo con los requisitos de operación y modelos de referencia.
Resultado de Aprendizaje: Desplegar el software de acuerdo con la arquitectura y las políticas establecidas.

## Tabla de contenido

1. [Investigación de servicios de alojamiento](#investigación-de-servicios-de-alojamiento)
2. [Registro y configuración inicial](#registro-y-configuración-inicial)
3. [Despliegue base y configuración WSGI](#despliegue-base-y-configuración-wsgi)
4. [Implementación de base de datos MySQL](#implementación-de-base-de-datos-mysql)
5. [Pruebas finales](#pruebas-finales)

## Investigación de servicios de alojamiento

Para el despliegue de aplicaciones en Python, se investigaron las siguientes plataformas:

- [PythonAnywhere](https://www.pythonanywhere.com/)
- [Render](https://render.com/)
- [Heroku](https://www.heroku.com/)
- [Azure](https://azure.microsoft.com/es-es)
- [Vercel](https://vercel.com/)

**¿Estoy dispuesto a realizar un pago para obtener mejoras en las funcionalidades que brinda el host?**
Respuesta: En esta fase de aprendizaje y para el alcance del proyecto formativo OperPan, no se realizará un pago. Se utilizará el plan gratuito (Beginner) que ofrece recursos suficientes para validar el despliegue y el funcionamiento básico del software. Sin embargo, para un entorno de producción real, sería necesario adquirir un plan de pago para obtener mayor cuota de CPU, bases de datos relacionales y dominios personalizados.

## Registro y configuración inicial

El primer paso consiste en crear una cuenta. Para evitar recibir correos no deseados en la bandeja personal durante las pruebas, se recomienda utilizar un correo temporal.

1. Ingrese a [Temp Mail](https://temp-mail.org/es/) y copie la dirección generada.
2. Diríjase a [PythonAnywhere](https://www.pythonanywhere.com/) y seleccione la opción `Pricing & signup`.
3. Haga clic en `Create a Beginner account`.
4. Complete el formulario con el correo temporal. El nombre de usuario elegido será el dominio de su aplicación (por ejemplo, `santiagooperpan`).
5. Acepte los términos y haga clic en `Register`.
6. Revise la bandeja de entrada del correo temporal, abra el mensaje de PythonAnywhere y haga clic en el enlace de confirmación para activar la cuenta.

> Nota: Es importante hacer clic en el enlace de confirmación; de lo contrario, la cuenta no se activará y no se podrá acceder al panel principal.

**¿Por qué cree que es necesario un correo temporal en este despliegue?**
Respuesta: Utilizar un correo temporal permite mantener la bandeja de entrada personal limpia de posibles correos de spam, promociones o notificaciones del servicio de hosting. Además, facilita la creación de múltiples cuentas para pruebas sin comprometer la identidad principal del desarrollador.

## Despliegue base y configuración WSGI

Para la preparación del código, el repositorio base es:
https://github.com/trianagel/crud_python_django

### Verificación de recursos

En el panel principal (Dashboard), verifique los recursos disponibles en el plan gratuito:

- **CPU Usage:** 0% used – 0.00s of 100s. Resets in 23 hours.
- **File storage:** 0% full – 60.0 KB of your 512.0 MB quota.

**¿Qué quiere decir lo que se muestra allí?**
Respuesta: La plataforma limita el consumo de procesamiento a 100 segundos diarios y el almacenamiento a 512 MB. El contador de CPU se reinicia cada 24 horas. Estas restricciones significan que la aplicación debe ser eficiente y no puede ejecutar procesos pesados o prolongados en segundo plano.

### Configuración de la consola y el entorno virtual

1. Diríjase al menú `Consoles` y seleccione `$ Bash`.
2. Clone el repositorio desde la consola:
```bash
git clone https://github.com/trianagel/crud_python_django
```
3. Cree el entorno virtual especificando la versión de Python (3.13 en este caso):
```bash
mkvirtualenv --python=/usr/bin/python3.13 venv
```
4. Active el entorno virtual e instale Django:
```bash
workon venv
pip install django
```

### Creación de la aplicación web

1. Vaya al menú `Web` y haga clic en `Add a new web app`.
2. En la configuración, seleccione `Manual configuration` para personalizar el proceso.
3. Seleccione la versión `Python 3.13` y haga clic en `Next`.

**¿Qué puede ser el archivo wsgi?**
Respuesta: WSGI (Web Server Gateway Interface) es una especificación estándar que define cómo un servidor web (como el de PythonAnywhere) se comunica con una aplicación web de Python. El archivo `wsgi.py` actúa como un puente o punto de entrada que le dice al servidor cómo cargar y ejecutar el proyecto Django.

### Configuración de rutas y seguridad

Una vez creada la web, es necesario vincular el código y el entorno:

1. En la sección `Code`, configure el `Source code` con la ruta del proyecto: `/home/tu_usuario/crud_python_django`.
2. En `Virtualenv`, ingrese la ruta: `/home/tu_usuario/.virtualenvs/venv`.
3. En `Static files`, agregue la ruta de las imágenes:
   - URL: `/imagenes/`
   - Directory: `/home/tu_usuario/crud_python_django/imagenes`
4. En la sección `Security`, haga clic en `Enabled` en la opción `Force HTTPS`.

**¿Qué hace el HTTPS?**
Respuesta: HTTPS (Hypertext Transfer Protocol Secure) cifra la comunicación entre el navegador del usuario y el servidor mediante certificados SSL/TLS. Esto protege la información sensible (como contraseñas y datos de formularios) de ser interceptada por terceros, garantizando la integridad y privacidad de los datos.

### Edición del archivo WSGI y migraciones (SQLite)

Para que PythonAnywhere reconozca el proyecto Django, edite el archivo WSGI:

1. En la sección `Code`, haga clic en el enlace del archivo `wsgi.py`.
2. Borre todo el contenido y pegue la siguiente configuración (reemplace `NOMBREGITHUB` por `crud_python_django` y `NOMBRE AQUI` por `project`):

```python
import os
import sys

path = os.path.expanduser('~/crud_python_django')
if path not in sys.path:
    sys.path.insert(0, path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'project.settings'

from django.core.wsgi import get_wsgi_application
from django.contrib.staticfiles.handlers import StaticFilesHandler

application = StaticFilesHandler(get_wsgi_application())
```

3. Haga clic en `Save` y regrese al menú `Web` para hacer clic en `Reload`.

**¿Qué se ha hecho hasta ahora?**
Respuesta: Se ha clonado el repositorio, se ha preparado un entorno virtual aislado con Django, y se ha configurado la aplicación web en PythonAnywhere. Además, se ha establecido el puente (WSGI) para que el servidor ejecute el código, se han mapeado los archivos estáticos y se ha asegurado la conexión. La aplicación está lista para inicializar su base de datos.

4. Diríjase a la consola Bash, ingrese a la carpeta del proyecto e instale las dependencias para imágenes y realice las migraciones iniciales (usando SQLite por defecto):

```bash
cd crud_python_django
pip install pymysql
python -m pip install pillow
python manage.py makemigrations
python manage.py migrate
```

## Implementación de base de datos MySQL

PythonAnywhere permite crear una base de datos MySQL en el plan gratuito para proyectos pequeños.

1. Diríjase al menú `Databases` y haga clic en `Initialize MySQL`.
2. Asigne una contraseña segura y guárdela.
3. En la consola Bash, instale el conector de MySQL para Python:
```bash
pip install mysqlclient
pip install pymysql
```
4. Vaya al menú `Files` y abra el archivo `project/settings.py`.
5. Modifique la sección `DATABASES` con las credenciales proporcionadas por la plataforma:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'tu_usuario$default',
        'USER': 'tu_usuario',
        'PASSWORD': 'tu_contraseña_mysql',
        'HOST': 'tu_usuario.mysql.pythonanywhere-services.com',
        'PORT': '3306',
    }
}
```

6. En el mismo archivo, ubique `ALLOWED_HOSTS` y agregue su dominio:
```python
ALLOWED_HOSTS = ['santiagooperpan.pythonanywhere.com']
```

7. Guarde los cambios, vaya al menú `Web` y haga clic en `Reload`.
8. Abra la consola Bash y aplique las migraciones a la nueva base de datos MySQL:
```bash
python manage.py migrate
```
9. Verifique la creación de las tablas. En el menú `Databases`, haga clic en el nombre de su base de datos (`tu_usuario$default`). En la consola MySQL que se abre, ejecute:
```sql
show tables;
```

## Pruebas finales

Acceda a la URL de su aplicación (por ejemplo, `https://santiagooperpan.pythonanywhere.com/`). Navegue por los enlaces del menú y realice las pruebas del CRUD (Crear, Leer, Actualizar, Eliminar) para verificar que la conexión con la base de datos MySQL funciona correctamente.

Enlace del proyecto desplegado:
https://santiagooperpan.pythonanywhere.com/

---

> Gracias por leer.