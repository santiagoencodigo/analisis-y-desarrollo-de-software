# XAMPP - Bases de Datos

<a href="https://www.apachefriends.org/es/index.html">Sitio Oficial de XAMPP</a>

Estos son mis apuntes personales sobre XAMPP, enfocados en comprender su uso dentro del entorno de desarrollo de **bases de datos**.
El objetivo de esta sección es documentar, de forma clara y progresiva, todo el proceso de instalación, configuración y manejo de XAMPP, así como su relación con MySQL/MariaDB para crear, gestionar y probar bases de datos localmente.

> Este documento se encuentra en desarrollo: A medida que avance mi aprendizaje, iré ampliando los apartados con ejemplos, comandos y prácticas aplicadas dentro de mi formación en Análisis y Desarrollo de Software (ADSO).



---



## Tabla de Contenido

1. [Bases de Datos](#bases-de-datos)
2. [Introducción a XAMPP ]()
3. [Entorno de Desarrollo de Bases de Datos](#entorno-de-desarrollo-de-bases-de-datos)
4. [MariaDB](#mariadb)
5. [Workbench](#workbench)
6. [Normalización de Bases de Datos](#normalización-de-bases-de-datos)
7. [SQL](#sql)
8. [Consola SQL](#consola-sql)
9. [Sintaxis SQL](#sintaxis-sql)
10. [Procedimientos SQL](#procedimientos-sql)


---


## Introducción a XAMPP 

XAMPP es un paquete de software que permite crear un servidor local en tu propio computador. Su principal función es ofrecer un entorno completo para desarrollar, probar y ejecutar sitios web o aplicaciones sin necesidad de tener una conexión a un servidor real en Internet.

El nombre XAMPP proviene de sus componentes principales:

X → Significa que funciona en varios sistemas operativos (Windows, Linux, Mac).

A → Apache, el servidor web que muestra tus páginas.

M → MySQL (ahora MariaDB), el sistema de bases de datos.

P → PHP, el lenguaje de programación que se ejecuta en el servidor.

P → Perl, otro lenguaje que se incluye para ciertos proyectos.

XAMPP convierte tu computadora en un **laboratorio de desarrollo web**, donde puedes crear y probar proyectos con PHP y bases de datos MySQL de manera segura, rápida y sin necesidad de estar en línea.





---



## Bases de Datos

Una BD es una sistema que almacena, organiza y gestiona información de forma estructurada para que pueda ser consultada, modificada o eliminada por una aplicación o por un usuario.

>En un restaurante una base de datos puede guardar información de los clientes, platos del menú, proveedores, empleados.

>En un sistema escolar puede ser los profesores, sus horarios, sus estudiantes, y sus notas.

Por lo que en lugar de guardar la información en muchos archivos separados, una base de datos los centraliza y la mantiene ordenada, (normalmente en tablas como en Excel, pero mucho más potentes)



---



**¿Por qué se usa de forma local con XAMPP?**

Cuando se instala XAMPP en un computador, se crea un entorno local, es decir un pequeño servidor dentro del computador. Esto permite probar y desarrollar sitios web o sistemas con bases de datos **Sin necesidad de internet** de forma privada y segura.

    Local: Quiere decir que solamente el PC el cual contiene este entorno/servidor puede acceder a este sistema, pues los datos y el servidor no se encuentran en la nube ni en internet por lo que todo funciona dentro del dispositivo.

<img src="https://wpmudev.com/blog/wp-content/uploads/2019/03/The_XAMPP_Control_Panel.png">

*Imagen Tomada de:* https://wpmudev.com/blog/setting-up-xampp/

    Bases de Datos no Locale son aquellas que están alojadas en servidores remotos, es decir en internet o en la nube. Por lo que esto permite que varias personas o aplicaciones puedan conectarse desde cualquier lugar un ejemplo claro de esto es: Un sistema en linea como una plataforma ecommerce o una red social.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4DxpmEmSYrBpgJm2V_HDXyPS5phUQouo8w&s">

*Imagen Tomada de:* https://www.manageengine.com/latam/analytics-plus/importacion-de-bases-de-datos-locales-y-en-la-nube.html

Resumen:

* Local: Sólo la PC que contiene el sistema puede correrlo, generalmente para desarrollo y tests.

* Remoto (no local): Accesible para varios usuarios o sistemas en linea [Se le reconoce como producción]

**¿Por qué es necesario el servidor remoto?**

Un servidor remoto es necesario porque permite que una aplicación o base de datos sea accedida desde cualquier lugar del mundo, sin depender del computador local donde se desarrolló.

Mientras que un servidor local (como XAMPP) se usa para practicar y probar en tu propio equipo, el servidor remoto representa el entorno real donde viven las aplicaciones que usamos en Internet.

**Servidor Local = Entorno de Desarrollo = Localhost**

+ Tu aplicación solo funcionaría en tu propio computador.

+ Nadie más podría acceder a tus páginas, APIs o bases de datos.

+ No podrías implementar funciones reales como autenticación, backups, escalabilidad o conexión entre varios usuarios.


**Servidor Remoto = Entorno de Producción = Tusitio.com**

* Hacer que usuarios reales interactúen con tu aplicación.

* Tener bases de datos activas y disponibles 24/7.

* Conectarte desde cualquier parte del mundo.

* Simular el entorno profesional de despliegue que usan las empresas.

>¿MySQL es dueño de algún data center? MySQL no es dueño de data centers; es una tecnología de base de datos. Sin embargo, <a href="https://www.oracle.com/latam/">Oracle Corporation</a> es el dueño actual de MySQL y Oracle sí opera sus propios data centers para ofrecer servicios en la nube que incluyen la base de datos MySQL


---



## Entorno de Desarrollo de Bases de Datos

Un entorno de desarrollo de BD es el conjunto de herramientas y configuraciones para crear, probar, y mejorar las bases de datos **antes de ponerlas en producción**.

Con XAMPP, tienes ese entorno completo porque incluye:

>Super recomendable realizar un vistazo o lectura a cada uno de los siguentes links:

* <a href="https://httpd.apache.org/">Apache</a>
* <a href="https://www.mysql.com/">MySQL/MariaDB</a>
* <a href="https://www.php.net/">PHP</a>
* <a href="https://www.phpmyadmin.net/">phpMyAdmin</a>



---



## MariaDB

<a href="https://mariadb.org/">MariaDB</a> es un sistema de gestión de bases de datos relacional (RDBMS), igual que MySQL, y de hecho nació como una alternativa libre y abierta a MySQL. Fue creada por los mismos desarrolladores originales de MySQL (liderados por Michael “Monty” Widenius) después de que Oracle Corporation comprara MySQL en 2010.

Muchos temían que Oracle cerrara o limitara el proyecto, así que los creadores decidieron hacer un fork (una copia independiente del código original) y continuar desarrollándolo como software libre.
**Ese nuevo proyecto fue MariaDB.**

MySQL es "libre", pero con condiciones. Al inicio si era software libre distribuyendose bajo la licensia GPL, pero todo cambio cuando Oracle lo compró en 2010 y ahora MySQL maneja una licensia Dual. Entonces es gratuito, pero mariaDB ofrece la misma compatibilidad sin el riesgo que la empresa cierre o limite su uso.

Por eso herramientas como XAMPP, WordPress, Wikipedia y Google Cloud SQL adoptaron MariaDB como su gestor predeterminado.



---



## Workbench:

MySQL Workbench es una herramienta visual oficial desarrollada por Oracle para administrar, diseñar y desarrollar bases de datos MySQL.
Funciona como un entorno integral (IDE) que te permite trabajar con tus bases de datos sin usar la terminal.

**¿Para qué sirve MySQL Workbench?**

MySQL Workbench se utiliza principalmente para:

* Diseñar bases de datos

* Puedes crear diagramas EER (Enhanced Entity Relationship) visuales.

* Arrastras entidades, defines claves primarias, relaciones y generas el SQL automáticamente.

Administrar servidores MySQL

* Iniciar o detener el servidor.

* Revisar usuarios, permisos, logs, variables del sistema, etc.

* Ejecutar consultas SQL

* Puedes escribir sentencias SELECT, INSERT, UPDATE, DELETE, CREATE, etc.

* Ver los resultados en tablas interactivas.

* Modelar y documentar bases de datos

* Importa o exporta modelos visuales.

* Sincroniza tu modelo con una base de datos real.

* Migrar y respaldar bases de datos

* Permite crear backups, restaurar, importar o exportar bases de datos completas en formato .sql.



---



## Normalización de Bases de Datos

La normalización es el proceso de organizar los datos en tablas de manera que se reduzca la redundancia (datos repetidos) y se garantice la integridad de la información.
Su objetivo es hacer que la base de datos sea más eficiente, coherente y fácil de mantener.

**Primera Forma Normal (1NF)**

    Una tabla está en 1NF cuando:

    Cada campo contiene valores atómicos (únicos, no listas o conjuntos).

    No existen grupos repetidos de columnas.

    Cada tabla tiene una clave primaria (PK) que identifica de forma única cada registro.

    En resumen: cada celda contiene un solo valor y cada fila es única.

**Segunda Forma Normal (2NF)**

    Una tabla cumple con la 2NF cuando:

    Ya está en 1NF.

    Todos los atributos no clave dependen completamente de la clave primaria (y no solo de una parte de ella).

    En resumen: elimina dependencias parciales entre columnas.

**Tercera Forma Normal (3NF)**

    Una tabla cumple con la 3NF cuando:

    Ya cumple con la 2NF.

    No existen dependencias transitivas entre atributos no clave.
    Es decir, un campo no debe depender de otro campo que no sea clave.
    Si ocurre, ese campo debe moverse a otra tabla.

    En resumen: cada campo depende solo de la clave primaria.

**¿Para qué sirven estas tres formas normales?**

Aplicar la normalización permite:

* Reducir la redundancia de datos.

* Mejorar la integridad y coherencia de la información.

* Facilitar el mantenimiento y actualización de la base de datos.

Sin embargo, una normalización excesiva puede generar muchas tablas relacionadas (JOINs), lo que vuelve las consultas más complejas y puede afectar el rendimiento en sistemas muy grandes.




---


## SQL

El archivo .sql no es una Base de Datos en si, sino una copia o instrucción para crearla. Pues contiene sentencias SQL como CREATE DATABASE, CREATE TABLE, INSERT INTO, etc... por lo que dentro del archivo .sql se encuentran las ordenes necesarias para construir la base de datos por ende: Toda la **Estructura y Datos**

La base de datos real existe dentro del servior MYSQL/MariaDB guardada en los archivos internos del sistema *(normalmente guardada en una carpeta llamada data/)*

Entonces en el archivo SQL se encuentran las instrucciones para crear la base de datos (Fuera del Servidor) mientras que la base de datos real se encuentran las tablas, registros, índices, etc... Dentro del servidor MySQL (Carpeta Xampp/MySQL/Data).

Cuando importas una base de datos en PHPMYADMIN lo que haces es ejecutar todas las instrucciones que contiene, y MySQL crea la base real en su sistema.

Lectura Recomendada: https://www.w3schools.com/sql/



---



## Consola SQL

Usar la consola SQL de phpMyAdmin es útil para cuando quieres:

* Hacer Consultas Rápidas
* Probar Comandos SQL

como por ejemplo:

    SELECT * FROM empleados WHERE cargo = 'Gerente';

phpMyAdmin las traduce y envía al motor MySQL, que devuelve los resultados.

>Aqui escribo ejemplos con PhpMyAdmin porque se esta utilizando en las clases, pero tambien se puede con MySQL Workbench. Muy buena alternativa: Es una herramienta profesional creada por ORACLE, donde permite mirar esquemas, ejecutar consultas y diseñas tablas visualmente.

>phpMyAdmin es sólo una interfaz web para MySQL, pero el motor puede ser manejado desde cualquier cliente SQL.


### ¿Qué puedo hacer en la consola SQL?

Ya sea en phpMyAdmin, Workbench o terminal, se puede hacer todo tipo de operaciones sobre la base de datos dividas en categorias:

**DDL (Data Definition Language)**: Sirve para crear, modificar o eliminar estructuras como tablas, columnas, índices. Todo esto es por medio de sintaxis como CREATE TABLE, ALTER TABLE, DROP DATABASE.

**DML (Data Manipulation Language)**: Es funcional para manipular los datos dentro de las tablas y es por medio de: INSERT, UPDATE, DELETE.

**DQL (Data Query Language)**: Es para consultar información y se usa por medio de SELECT

**DCL (Data Control Language)**: Es para asignar o quitar permisos a usuarios y es por medio de GRANT o REVOKE.

**TCL (Transaction Control Language)**: Es para controlar transacciones, muy usado en entornos empresariales y es por medio de COMMIT, ROLLBACK

Entonces al crear tablas o modificar información por medio de phpMyAdmin no guarda automaticamente esa información dentro del archivo SQL, pero si lo guarda dentro de la base de datos dentro de MySQL

    CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    cargo VARCHAR(50)
    );

* MySQL crea físicamente la tabla dentro del motor (en sus propios archivos .frm, .ibd, etc. en la carpeta data).

Por lo que si se quiere salvar esos archivos en un respaldo, se deberá exportar la base de datos en phpMyAdmin. Creando asi un archivo SQL con las instrucciones y datos que sirven como copia de esa Base de Datos

* Archivos .frm: describe cómo es la tabla,

* Archivos .ibd: guarda lo que hay dentro de la tabla

<img src="https://kbase.pt/wp-content/uploads/2018/04/phpMyAdmin_exportar-1024x348.png">

*Imagen Sacada De: https://kbase.pt/exportar-importar-uma-base-de-dados-usando-o-phpmyadmin/*


---





## Sintaxis SQL

A continuación es un ejemplo de Código SQL (Structured Query Language), utilizado para consultar y manipular bases de datos relacionales como MySQL, MariaDB, PostSQL, Oracle, entre otros...

    SELECT * FROM customers 
    WHERE Country = 'Germany';

Por ende lo que hará este código en consola es: **Mostrar** en todos los **Registros** de la **Tabla Customers** 

---

### LIKE - Uso de Comodin

Es para filtrar la información y encontrar la inicial de lo que se escoja al lado del comodín % es decir, en el ejercicio se busca en la tabla customers en el registro de ContactName los datos que inicien por la letra A

    SELECT * FROM `customers`
    WHERE ContactName LIKE 'a%'

---

### Función IN

    SELECT * FROM `customers`
    WHERE Country IN ('Germany', 'France', 'UK');

---

### IF anidados
    
    SELECT * FROM `customers` 
    WHERE Country IN (SELECT Country FROM suppliers);



---



## Procedimientos almacenados en MySQL  

>Presentado por HebraTec

Un procedimiento almacenado es una función definida por el usuario dentro del servidor MySQL, diseñada para recibir parámetros, ejecutar instrucciones SQL y devolver resultados.  

En otras palabras, es un **bloque de código SQL predefinido** que se guarda en el servidor y puede ejecutarse múltiples veces sin necesidad de volver a escribirlo.  
Esto permite automatizar tareas, mejorar la eficiencia y optimizar el rendimiento de las operaciones en la base de datos.  

### Ejemplos de uso

Los procedimientos almacenados se pueden utilizar para:  
- Enviar notificaciones automáticas (como correos o alertas).  
- Generar documentos o reportes.  
- Actualizar registros masivamente.  
- Realizar cálculos o validaciones repetitivas.  

---

## Tipos de parámetros

Los procedimientos almacenados pueden recibir distintos tipos de parámetros:

| Tipo | Descripción |
|------|--------------|
| **IN** | Recibe un valor de entrada (solo lectura). |
| **OUT** | Devuelve un valor de salida (solo escritura). |
| **INOUT** | Permite tanto recibir como devolver un valor (lectura y escritura). |


