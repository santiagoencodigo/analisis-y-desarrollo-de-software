# XAMPP y bases de datos

> Estos son mis apuntes personales sobre XAMPP, enfocados en comprender su uso dentro del entorno de desarrollo de **bases de datos**. El objetivo de esta sección es documentar, de forma clara y progresiva, todo el proceso de instalación, configuración y manejo de XAMPP, así como su relación con MySQL/MariaDB para crear, gestionar y probar bases de datos localmente.

> **Documento en desarrollo:** A medida que avance mi aprendizaje, iré ampliando los apartados con ejemplos, comandos y prácticas aplicadas dentro de mi formación en Análisis y Desarrollo de Software (ADSO).

**Sitio oficial de XAMPP:** [apachefriends.org](https://www.apachefriends.org/es/index.html)

---

## Tabla de contenido

- [1. Introducción a XAMPP](#1-introducción-a-xampp)
- [2. ¿Qué es una base de datos?](#2-qué-es-una-base-de-datos)
  - [2.1 Local vs. remoto](#21-local-vs-remoto)
  - [2.2 ¿Por qué es necesario un servidor remoto?](#22-por-qué-es-necesario-un-servidor-remoto)
- [3. Entorno de desarrollo de bases de datos](#3-entorno-de-desarrollo-de-bases-de-datos)
- [4. MariaDB](#4-mariadb)
- [5. MySQL Workbench](#5-mysql-workbench)
- [6. Normalización de bases de datos](#6-normalización-de-bases-de-datos)
- [7. El archivo .sql](#7-el-archivo-sql)
- [8. Consola SQL](#8-consola-sql)
- [9. Sintaxis SQL](#9-sintaxis-sql)
  - [9.1 Comodín LIKE](#91-comodín-like)
  - [9.2 Función IN](#92-función-in)
  - [9.3 Subconsultas](#93-subconsultas)
- [10. Procedimientos almacenados en MySQL](#10-procedimientos-almacenados-en-mysql)
  - [10.1 Tipos de parámetros](#101-tipos-de-parámetros)
  - [10.2 Ejemplos de uso](#102-ejemplos-de-uso)

---

## 1. Introducción a XAMPP

XAMPP es un paquete de software que permite crear un **servidor local** en tu propio computador. Su principal función es ofrecer un entorno completo para desarrollar, probar y ejecutar sitios web o aplicaciones sin necesidad de tener una conexión a un servidor real en Internet.

El nombre **XAMPP** proviene de sus componentes principales:

| **Letra** | **Componente** | **Descripción** |
|-----------|----------------|-----------------|
| **X** | Cross-platform | Funciona en varios sistemas operativos (Windows, Linux, Mac). |
| **A** | Apache | Servidor web que muestra las páginas. |
| **M** | MySQL / MariaDB | Sistema de gestión de bases de datos. |
| **P** | PHP | Lenguaje de programación que se ejecuta en el servidor. |
| **P** | Perl | Otro lenguaje incluido para ciertos proyectos. |

XAMPP convierte tu computadora en un **laboratorio de desarrollo web**, donde puedes crear y probar proyectos con PHP y bases de datos MySQL de manera segura, rápida y sin necesidad de estar en línea.

---

## 2. ¿Qué es una base de datos?

Una base de datos es un sistema que almacena, organiza y gestiona información de forma estructurada para que pueda ser consultada, modificada o eliminada por una aplicación o por un usuario.

> **Ejemplo en un restaurante:** Una base de datos puede guardar información de los clientes, platos del menú, proveedores y empleados.
>
> **Ejemplo en un sistema escolar:** Puede almacenar los profesores, sus horarios, sus estudiantes y sus notas.

En lugar de guardar la información en muchos archivos separados, una base de datos la centraliza y la mantiene ordenada, normalmente en tablas (como en Excel, pero mucho más potentes).

### 2.1 Local vs. remoto

**¿Por qué se usa de forma local con XAMPP?**

Cuando se instala XAMPP en un computador, se crea un **entorno local**, es decir, un pequeño servidor dentro del computador. Esto permite probar y desarrollar sitios web o sistemas con bases de datos **sin necesidad de internet**, de forma privada y segura.

> **Local:** Significa que solamente el PC que contiene este entorno/servidor puede acceder al sistema. Los datos y el servidor no se encuentran en la nube ni en internet, por lo que todo funciona dentro del dispositivo.

**Representación ASCII del panel de control de XAMPP:**

```
+----------------------------------------------------------+
|                     XAMPP Control Panel                  |
+----------------------------------------------------------+
| Module       | PID   | Port(s) | Actions                  |
+--------------+-------+---------+--------------------------+
| [X] Apache   | 4321  | 80, 443 | [Stop] [Config] [Logs]   |
| [X] MySQL    | 5678  | 3306    | [Stop] [Config] [Logs]   |
| [ ] FileZilla|       | 21      | [Start] [Config] [Logs]  |
| [ ] Mercury  |       | 25      | [Start] [Config] [Logs]  |
| [ ] Tomcat   |       | 8080    | [Start] [Config] [Logs]  |
+--------------+-------+---------+--------------------------+
|                 [Start] [Stop] [Quit]                     |
+----------------------------------------------------------+
```

**Bases de datos no locales:**

Son aquellas que están alojadas en servidores remotos, es decir, en internet o en la nube. Esto permite que varias personas o aplicaciones puedan conectarse desde cualquier lugar.

> **Ejemplo:** Un sistema en línea como una plataforma de comercio electrónico o una red social.

**Resumen:**

| **Tipo** | **Descripción** | **Uso típico** |
|----------|-----------------|----------------|
| **Local** | Solo la PC que contiene el sistema puede correrlo. | Desarrollo y pruebas. |
| **Remoto (no local)** | Accesible para varios usuarios o sistemas en línea. | Producción. |

### 2.2 ¿Por qué es necesario un servidor remoto?

Un servidor remoto es necesario porque permite que una aplicación o base de datos sea accedida desde cualquier lugar del mundo, sin depender del computador local donde se desarrolló.

Mientras que un servidor local (como XAMPP) se usa para practicar y probar en tu propio equipo, el servidor remoto representa el **entorno real** donde viven las aplicaciones que usamos en Internet.

| **Servidor Local** | **Servidor Remoto** |
|--------------------|---------------------|
| = Entorno de Desarrollo = Localhost | = Entorno de Producción = tusitio.com |
| Tu aplicación solo funcionaría en tu propio computador. | Permite que usuarios reales interactúen con la aplicación. |
| Nadie más podría acceder a tus páginas, APIs o bases de datos. | Bases de datos activas y disponibles 24/7. |
| No podrías implementar funciones reales como autenticación, backups, escalabilidad o conexión entre varios usuarios. | Conexión desde cualquier parte del mundo. |
| | Simula el entorno profesional de despliegue que usan las empresas. |

> **¿MySQL es dueño de algún data center?** MySQL no es dueño de data centers; es una tecnología de base de datos. Sin embargo, [Oracle Corporation](https://www.oracle.com/latam/) es el dueño actual de MySQL y Oracle sí opera sus propios data centers para ofrecer servicios en la nube que incluyen la base de datos MySQL.

---

## 3. Entorno de desarrollo de bases de datos

Un entorno de desarrollo de bases de datos es el conjunto de herramientas y configuraciones para crear, probar y mejorar las bases de datos **antes de ponerlas en producción**.

Con XAMPP, tienes ese entorno completo porque incluye:

| **Herramienta** | **Descripción** | **Enlace** |
|-----------------|-----------------|------------|
| **Apache** | Servidor web. | [httpd.apache.org](https://httpd.apache.org/) |
| **MySQL / MariaDB** | Sistema gestor de bases de datos. | [mysql.com](https://www.mysql.com/) |
| **PHP** | Lenguaje de programación del lado del servidor. | [php.net](https://www.php.net/) |
| **phpMyAdmin** | Interfaz web para administrar MySQL/MariaDB. | [phpmyadmin.net](https://www.phpmyadmin.net/) |

---

## 4. MariaDB

[MariaDB](https://mariadb.org/) es un sistema de gestión de bases de datos relacional (RDBMS), igual que MySQL, y de hecho nació como una alternativa libre y abierta a MySQL. Fue creada por los mismos desarrolladores originales de MySQL (liderados por Michael "Monty" Widenius) después de que Oracle Corporation comprara MySQL en 2010.

Muchos temían que Oracle cerrara o limitara el proyecto, así que los creadores decidieron hacer un **fork** (una copia independiente del código original) y continuar desarrollándolo como software libre. **Ese nuevo proyecto fue MariaDB.**

MySQL es "libre", pero con condiciones. Al inicio sí era software libre distribuyéndose bajo la licencia GPL, pero todo cambió cuando Oracle lo compró en 2010 y ahora MySQL maneja una **licencia dual**. Entonces es gratuito, pero MariaDB ofrece la misma compatibilidad sin el riesgo de que la empresa cierre o limite su uso.

Por eso herramientas como **XAMPP, WordPress, Wikipedia y Google Cloud SQL** adoptaron MariaDB como su gestor predeterminado.

---

## 5. MySQL Workbench

MySQL Workbench es una herramienta visual oficial desarrollada por Oracle para administrar, diseñar y desarrollar bases de datos MySQL. Funciona como un entorno integral (IDE) que permite trabajar con las bases de datos sin usar la terminal.

**¿Para qué sirve MySQL Workbench?**

| **Función** | **Descripción** |
|-------------|-----------------|
| **Diseñar bases de datos** | Crear diagramas EER (Enhanced Entity Relationship) visuales. Arrastrar entidades, definir claves primarias, relaciones y generar el SQL automáticamente. |
| **Administrar servidores MySQL** | Iniciar o detener el servidor. Revisar usuarios, permisos, logs, variables del sistema, etc. |
| **Ejecutar consultas SQL** | Escribir sentencias `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, etc. Ver los resultados en tablas interactivas. |
| **Modelar y documentar** | Importar o exportar modelos visuales. Sincronizar el modelo con una base de datos real. |
| **Migrar y respaldar** | Crear backups, restaurar, importar o exportar bases de datos completas en formato `.sql`. |

---

## 6. Normalización de bases de datos

La **normalización** es el proceso de organizar los datos en tablas de manera que se reduzca la redundancia (datos repetidos) y se garantice la integridad de la información. Su objetivo es hacer que la base de datos sea más eficiente, coherente y fácil de mantener.

### Primera Forma Normal (1FN)

Una tabla está en 1FN cuando:

- Cada campo contiene **valores atómicos** (únicos, no listas o conjuntos).
- No existen grupos repetidos de columnas.
- Cada tabla tiene una **clave primaria (PK)** que identifica de forma única cada registro.

> **En resumen:** cada celda contiene un solo valor y cada fila es única.

### Segunda Forma Normal (2FN)

Una tabla cumple con la 2FN cuando:

- Ya está en 1FN.
- Todos los atributos no clave dependen **completamente** de la clave primaria (y no solo de una parte de ella).

> **En resumen:** elimina dependencias parciales entre columnas.

### Tercera Forma Normal (3FN)

Una tabla cumple con la 3FN cuando:

- Ya cumple con la 2FN.
- No existen **dependencias transitivas** entre atributos no clave. Es decir, un campo no debe depender de otro campo que no sea clave. Si ocurre, ese campo debe moverse a otra tabla.

> **En resumen:** cada campo depende solo de la clave primaria.

### ¿Para qué sirven estas tres formas normales?

Aplicar la normalización permite:

- Reducir la redundancia de datos.
- Mejorar la integridad y coherencia de la información.
- Facilitar el mantenimiento y actualización de la base de datos.

> **Nota:** Una normalización excesiva puede generar muchas tablas relacionadas (JOINs), lo que vuelve las consultas más complejas y puede afectar el rendimiento en sistemas muy grandes.

---

## 7. El archivo .sql

El archivo `.sql` **no es una base de datos en sí**, sino una copia o instrucción para crearla. Contiene sentencias SQL como `CREATE DATABASE`, `CREATE TABLE`, `INSERT INTO`, etc. Por lo tanto, dentro del archivo `.sql` se encuentran las órdenes necesarias para construir la base de datos, es decir, **toda la estructura y los datos**.

La base de datos real existe dentro del servidor MySQL/MariaDB, guardada en los archivos internos del sistema (normalmente en una carpeta llamada `data/`).

| **Elemento** | **Ubicación** | **Contenido** |
|--------------|---------------|---------------|
| **Archivo .sql** | Fuera del servidor | Instrucciones para crear la base de datos. |
| **Base de datos real** | Dentro del servidor MySQL (`XAMPP/mysql/data`) | Tablas, registros, índices, etc. |

Cuando se importa una base de datos en phpMyAdmin, lo que se hace es ejecutar todas las instrucciones que contiene el archivo, y MySQL crea la base real en su sistema.

**Lectura recomendada:** [W3Schools - SQL](https://www.w3schools.com/sql/)

---

## 8. Consola SQL

Usar la consola SQL de phpMyAdmin es útil para:

- Hacer consultas rápidas.
- Probar comandos SQL.

**Ejemplo:**

```sql
SELECT * FROM empleados WHERE cargo = 'Gerente';
```

phpMyAdmin la traduce y la envía al motor MySQL, que devuelve los resultados.

> **Nota:** Aquí se escriben ejemplos con phpMyAdmin porque se está utilizando en las clases, pero también se puede hacer con **MySQL Workbench**, una herramienta profesional creada por Oracle que permite mirar esquemas, ejecutar consultas y diseñar tablas visualmente.
>
> phpMyAdmin es solo una interfaz web para MySQL, pero el motor puede ser manejado desde cualquier cliente SQL.

### ¿Qué se puede hacer en la consola SQL?

Ya sea en phpMyAdmin, Workbench o terminal, se pueden hacer todo tipo de operaciones sobre la base de datos, divididas en categorías:

| **Categoría** | **Descripción** | **Sentencias** |
|---------------|-----------------|----------------|
| **DDL (Data Definition Language)** | Crear, modificar o eliminar estructuras como tablas, columnas e índices. | `CREATE TABLE`, `ALTER TABLE`, `DROP DATABASE` |
| **DML (Data Manipulation Language)** | Manipular los datos dentro de las tablas. | `INSERT`, `UPDATE`, `DELETE` |
| **DQL (Data Query Language)** | Consultar información. | `SELECT` |
| **DCL (Data Control Language)** | Asignar o quitar permisos a usuarios. | `GRANT`, `REVOKE` |
| **TCL (Transaction Control Language)** | Controlar transacciones, muy usado en entornos empresariales. | `COMMIT`, `ROLLBACK` |

**Ejemplo de creación de tabla:**

```sql
CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    cargo VARCHAR(50)
);
```

MySQL crea físicamente la tabla dentro del motor (en sus propios archivos `.frm`, `.ibd`, etc. en la carpeta `data`).

| **Archivo** | **Función** |
|-------------|-------------|
| `.frm` | Describe cómo es la tabla. |
| `.ibd` | Guarda lo que hay dentro de la tabla. |

> Al crear tablas o modificar información por medio de phpMyAdmin, **no se guarda automáticamente** esa información dentro del archivo `.sql`, pero sí se guarda dentro de la base de datos en MySQL. Si se quiere salvar esos cambios en un respaldo, se debe **exportar** la base de datos en phpMyAdmin, creando así un archivo `.sql` con las instrucciones y datos que sirven como copia de esa base de datos.

---

## 9. Sintaxis SQL

A continuación se muestra un ejemplo de código SQL (Structured Query Language), utilizado para consultar y manipular bases de datos relacionales como MySQL, MariaDB, PostgreSQL, Oracle, entre otros.

**Sintaxis básica de consulta:**

```sql
SELECT * FROM customers
WHERE Country = 'Germany';
```

> Este código en consola **muestra todos los registros** de la tabla `customers` donde el país sea Alemania.

### 9.1 Comodín LIKE

El comodín `LIKE` sirve para filtrar la información y encontrar patrones. El símbolo `%` representa cualquier cantidad de caracteres.

```sql
SELECT * FROM customers
WHERE ContactName LIKE 'a%';
```

> Busca en la tabla `customers` los registros cuyo `ContactName` inicie con la letra "A".

### 9.2 Función IN

La función `IN` permite filtrar registros que coincidan con cualquiera de los valores especificados en una lista.

```sql
SELECT * FROM customers
WHERE Country IN ('Germany', 'France', 'UK');
```

> Muestra los clientes cuyo país sea Alemania, Francia o Reino Unido.

### 9.3 Subconsultas

Las subconsultas permiten usar el resultado de una consulta como entrada de otra.

```sql
SELECT * FROM customers
WHERE Country IN (SELECT Country FROM suppliers);
```

> Muestra los clientes cuyo país coincida con algún país de la tabla `suppliers`.

---

## 10. Procedimientos almacenados en MySQL

Un **procedimiento almacenado** es una función definida por el usuario dentro del servidor MySQL, diseñada para recibir parámetros, ejecutar instrucciones SQL y devolver resultados.

En otras palabras, es un **bloque de código SQL predefinido** que se guarda en el servidor y puede ejecutarse múltiples veces sin necesidad de volver a escribirlo. Esto permite automatizar tareas, mejorar la eficiencia y optimizar el rendimiento de las operaciones en la base de datos.

### 10.1 Tipos de parámetros

Los procedimientos almacenados pueden recibir distintos tipos de parámetros:

| **Tipo** | **Descripción** |
|----------|-----------------|
| **IN** | Recibe un valor de entrada (solo lectura). |
| **OUT** | Devuelve un valor de salida (solo escritura). |
| **INOUT** | Permite tanto recibir como devolver un valor (lectura y escritura). |

### 10.2 Ejemplos de uso

Los procedimientos almacenados se pueden utilizar para:

- Enviar notificaciones automáticas (como correos o alertas).
- Generar documentos o reportes.
- Actualizar registros masivamente.
- Realizar cálculos o validaciones repetitivas.

**Ejemplo básico:**

```sql
DELIMITER $$

CREATE PROCEDURE ListarProductos()
BEGIN
    SELECT id, nombre, precio, stock
    FROM productos;
END $$

DELIMITER ;
```

**Cómo ejecutarlo:**

```sql
CALL ListarProductos();
```

> El procedimiento `ListarProductos` encapsula una consulta frecuente. Al llamarlo con `CALL`, MySQL ejecuta la consulta y devuelve los resultados.

---

> Gracias por leer.