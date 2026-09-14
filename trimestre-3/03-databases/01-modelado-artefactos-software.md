# Modelado de Artefactos de Software

Esta es una competencia del tercer trimestre (carpeta 03-databases) que consiste en elaborar los artefactos del diseño del software siguiendo las prácticas de la metodología seleccionada, por lo que:

> **Competencia:** es la capacidad de realizar algo; generalmente en las instituciones se les nombra así, mientras que en otros lugares se les distingue como materias. Pero como es formación para el trabajo, se llaman competencias, ya que estamos formándonos para realizar un determinado trabajo.

1. Estructurar el modelo de datos del software de acuerdo con las especificaciones del análisis.
2. Elaborar los artefactos del diseño de software siguiendo las prácticas de la metodología seleccionada.
3. Estructurar el modelo de datos del software de acuerdo con las especificaciones del análisis.
4. Verificar, junto con la instructora Angélica Triana, los entregables de la fase de diseño del software de acuerdo con lo establecido en el informe de análisis.

---

## Tabla de Contenido

1. [Bases de Datos](#bases-de-datos)
   - [¿Qué es una base de datos?](#qué-es-una-base-de-datos)
   - [Motores de Bases de Datos](#motores-de-bases-de-datos)
   - [Gestor de Bases de Datos (DBMS)](#gestor-de-bases-de-datos-dbms)
   - [Objeto en una Base de Datos](#objeto-en-una-base-de-datos)
   - [Tipos de Bases de Datos](#tipos-de-bases-de-datos)
   - [SQL vs. MySQL y Herramientas](#sql-vs-mysql-y-herramientas)
2. [Tipos de Datos](#tipos-de-datos)
   - [Tipo Numérico](#tipo-numérico)
   - [Tipo Texto o Cadenas de Caracteres](#tipo-texto-o-cadenas-de-caracteres)
   - [Tipo Fecha y Hora](#tipo-fecha-y-hora)
   - [Tipo Booleano](#tipo-booleano)
   - [Tipos de Identificación y Binarios](#tipos-de-identificación-y-binarios)
   - [Tipos Espaciales y JSON (avanzados)](#tipos-espaciales-y-json-avanzados)
3. [Modelo Entidad-Relación (MER)](#modelo-entidad-relación-mer)
   - [Conceptos básicos: entidad, campo, tabla y registro](#conceptos-básicos-entidad-campo-tabla-y-registro)
   - [Diseño de Entidades](#diseño-de-entidades)
   - [Llave Primaria (PK) y Llave Foránea (FK)](#llave-primaria-pk-y-llave-foránea-fk)
   - [Cardinalidad](#cardinalidad)
   - [Nomenclatura](#nomenclatura)
4. [Casos de Uso](#casos-de-uso)
   - [¿Qué es un caso de uso?](#qué-es-un-caso-de-uso)
5. [Modelo Físico](#modelo-físico)

---

## Bases de Datos

### ¿Qué es una base de datos?

Es una colección organizada y estructurada de información que se almacena electrónicamente para facilitar su acceso, gestión y actualización. Permite almacenar grandes volúmenes de datos.

Su desarrollo sigue un enfoque lineal (waterfall), con los siguientes procesos:

1. Requerimientos funcionales
2. Casos de uso
3. Modelo Entidad-Relación (MER)

<img src="https://imgs.search.brave.com/1mJ17W7EwQcYGb7OMSnHDzEKooUD8cpd_iAawSWSkZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDUwMjY3/LzIzMjgvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yMzI4NzQ4OC1z/dG9jay1waG90by1k/YXRhYmFzZS1jb25j/ZXB0LXdpdGgtbGFw/dG9wLXRhYmxldC5q/cGc" alt="Concepto de base de datos representado con un laptop y una tablet">

*Imagen tomada de: <https://depositphotos.com/es/photos/base-de-datos.html>*

### Motores de Bases de Datos

Los 6 motores de bases de datos más reconocidos en el mercado:

- **Oracle:** es el motor relacional más antiguo; abrió el negocio de las bases de datos. En ese entonces no era un negocio sino un proyecto científico, hasta que [Larry Ellison](https://www.forbes.com/profile/larry-ellison/) vio su potencial y fundó la empresa (hoy en día es uno de los diez hombres más ricos del mundo).
- **Microsoft SQL Server:** es la respuesta de Microsoft frente a Oracle. Durante muchos años funcionó solo para Windows; desde 2017 es multiplataforma. Son líderes en Business Intelligence.
- **MySQL:** es el motor más usado por los desarrolladores.
- **SQLite:** es una base de datos pequeña, muy usada para persistencia local en aplicaciones móviles.
- **PostgreSQL:** inició como un proyecto universitario llamado INGRES, inspirado en Oracle. Incluyó funciones avanzadas y *triggers* que MySQL no tuvo durante años.
- **MariaDB:** es un *fork* de MySQL creado por sus desarrolladores originales tras la adquisición de MySQL por parte de Oracle. Es completamente libre y de código abierto, mantenido por la MariaDB Foundation, y funciona como reemplazo directo (*drop-in replacement*) de MySQL.

### Gestor de Bases de Datos (DBMS)

Un **gestor de bases de datos** (DBMS, *Database Management System*, o SGBD en español) es el software que permite crear, administrar y consultar una base de datos. No debe confundirse con el **motor**: el motor es quien almacena y procesa los datos (MySQL, PostgreSQL, SQL Server...), mientras que el gestor es la herramienta que se usa para interactuar con ese motor, como MySQL Workbench, phpMyAdmin o pgAdmin.

### Objeto en una Base de Datos

Un **objeto** es cualquier elemento estructural que la base de datos contiene y administra: tablas, vistas, índices, procedimientos almacenados, funciones y *triggers* son ejemplos de objetos de base de datos.

### Tipos de Bases de Datos

Hay dos grandes tipos de bases de datos: relacionales y no relacionales.

#### BD Relacional

**Relacional (SQL):** datos estructurados con relaciones entre tablas. Se usa en ERP, ventas y RRHH, y generalmente funciona sobre motores como MySQL, SQL Server, PostgreSQL u Oracle. Los objetos están relacionados entre sí.

#### BD No Relacional

**No relacional (NoSQL):** datos no estructurados o semiestructurados (documentos, grafos, etc.). Un ejemplo claro son las redes sociales, el IoT y el *big data*, que generalmente usan motores como MongoDB, Cassandra o Redis.

Para determinar qué tablas y atributos se necesitan, se parte de los documentos de entidad-relación y de los casos de uso.

Se plantea utilizar XAMPP (MySQL) para el desarrollo del proyecto.

> Primero surgió **SQL** (*Structured Query Language*), que en español significa **Lenguaje de Consulta Estructurada**.

#### BD Orientada a Objetos

Almacena los datos como objetos del lenguaje de programación. Generalmente se ve en aplicaciones Java o C#, y utiliza motores como db4o u ObjectDB.

#### BD Distribuida

Es una base de datos replicada en varios servidores o ubicaciones. Se usa en sistemas de alta disponibilidad, sobre una arquitectura modelo-servidor, con motores como CockroachDB y Cassandra.

#### BD en Memoria

Almacena los datos en RAM para lograr alta velocidad de lectura y escritura.

### SQL vs. MySQL y Herramientas

- **SQL** es un estándar que puede tener costo, y generalmente lo usan las empresas grandes.
- **MySQL** es gratuito, pertenece a Oracle y sirve para proyectos pequeños y locales.

Ambos funcionan de una forma muy similar.

> - <https://www.w3schools.com/sql/sql_select.asp>
> - <https://sqliteonline.com/>

**Herramientas:**

- [XAMPP](https://www.apachefriends.org/ "apachefriends.org")
- [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio")
- [SQL Server Management Studio](https://www.microsoft.com/es-es/sql-server/sql-server-downloads "Microsoft - SQL")

Una tabla se puede representar como una cuadrícula (para eso se puede usar C# o draw.io).

---

## Tipos de Datos

Existen distintos tipos de datos, y dentro de ellos hay a su vez varios subtipos.

### Tipo Numérico

Se usa cuando no queremos que se ingresen caracteres no numéricos, por ejemplo, en una cédula: no esperamos que se ingrese información con letras, solo números.

#### INT

Los números enteros son aquellos positivos o negativos y exactos, sin parte decimal, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 9, -1, -2, -3, -4, -5, -6...

#### SMALLINT

Es un entero pequeño que ocupa menos espacio en memoria. Se puede pensar como un dato menor a 100; un ejemplo claro es la edad de una persona, que generalmente va en un rango de 1 a 100.

#### BIGINT

Es un entero grande (de mayor rango), por ejemplo: 94596859685.

#### DECIMAL / NUMERIC

Son números con decimales exactos. Cuentan con **p** (precisión, cantidad total de dígitos) y **s** (escala, cantidad de dígitos decimales), por ejemplo: 12.50, 13.30, 16.70...

#### FLOAT / REAL

Son números decimales de **precisión aproximada** (a diferencia de DECIMAL, que es exacto). Ocupan menos espacio y se procesan más rápido, pero pueden perder precisión en operaciones muy exactas, por lo que se usan para datos como medidas físicas o cálculos científicos, y no para valores monetarios.

**Ejemplo aplicado:** tenemos una tabla llamada **Estudiante**, con los siguientes campos:

| Campo             | Tipo de dato | Tamaño       |
| ----------------- | ------------ | ------------ |
| Cédula (PK)        | BIGINT       | —            |
| Nombre             | VARCHAR      | 50           |
| Teléfono           | INT          | 13           |
| Tipo de documento  | VARCHAR      | 20           |

---

### Tipo Texto o Cadenas de Caracteres

#### CHAR(n)

Es una cadena de longitud fija, rellenada con espacios hasta completar `n` caracteres, por ejemplo `'ABC'`. Se usa para datos de longitud siempre igual, como un código de país.

#### VARCHAR(n)

Es una cadena de longitud variable (más eficiente en espacio), por ejemplo `'Colombia'`. Una dirección, por ejemplo, puede definirse como `VARCHAR(50)`, es decir, hasta 50 caracteres.

#### TEXT

Es un texto largo, pensado para párrafos y descripciones extensas.

---

### Tipo Fecha y Hora

Permiten registrar momentos en el tiempo.

#### DATE

Almacena solo la fecha (año, mes y día), por ejemplo `2025-11-04`.

#### TIME

Almacena solo la hora del día (horas, minutos y segundos), por ejemplo `14:30:00`.

#### DATETIME / TIMESTAMP

Ambos almacenan fecha y hora juntas. `DATETIME` guarda el valor tal cual se ingresa, sin relacionarlo con una zona horaria. `TIMESTAMP` suele almacenarse en UTC y convertirse según la zona horaria del servidor, y en varios motores puede autoactualizarse cuando el registro se modifica.

#### YEAR

Almacena únicamente el año, por ejemplo `2025`. Es un tipo específico de MySQL, poco usado en otros motores.

---

### Tipo Booleano

Representa valores binarios: verdadero o falso.

- **Boolean:** almacena `true` / `false`.
- **Bit:** en varios motores (como MySQL), el tipo booleano se implementa internamente como `TINYINT(1)` o `BIT`, donde `1` equivale a verdadero y `0` a falso.

---

### Tipos de Identificación y Binarios

- **UUID:** identificador único universal de 128 bits. Se usa como llave primaria cuando no se quiere depender del orden de inserción (por ejemplo, en sistemas distribuidos), ya que se genera de forma prácticamente irrepetible sin necesidad de consultar la base de datos.
- **BLOB** (*Binary Large OBject*): almacena datos binarios grandes, como imágenes, audios o archivos.
- **VARBINARY:** es el equivalente binario de `VARCHAR`: una cadena binaria de longitud variable.

---

### Tipos Espaciales y JSON (avanzados)

Se usan en bases de datos modernas como PostgreSQL.

- **JSON:** permite almacenar datos semiestructurados directamente en una columna, en formato clave-valor.
- **GEOMETRY, POINT, POLYGON:** tipos espaciales usados en aplicaciones geográficas (GIS). `POINT` almacena una coordenada, `POLYGON` una figura cerrada (por ejemplo, el área de un barrio), y `GEOMETRY` es el tipo genérico que puede contener cualquier figura espacial.

---

## Modelo Entidad-Relación (MER)

### Conceptos básicos: entidad, campo, tabla y registro

- **Entidad:** un objeto de la base de datos, representado como una tabla.
- **Campo:** toda columna de la tabla; si se toma solamente un dato dentro de una fila, ese dato individual es un campo.
- **Tabla:** el cuadro completo, formado por columnas (campos) y filas (registros).
- **Registro:** cada fila de la tabla, es decir, una instancia completa de datos de la entidad.

<img src="https://imgs.search.brave.com/wJghNrpxhcmeXbmav0fPeoeKIGGgp1w90Mawn9Fe10Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zbGlkZXNoYXJl/Y2RuLmNvbS9zcy0y/MDA4MjUyMjE3NDEv/NzUvQ2xhc2UtMi1N/b2RlbG8tRW50aWRh/ZC1SZWxhY2lvbi1N/RVItMjMtMjA0OC5q/cGc" alt="Ejemplo de un modelo entidad-relación (MER)">

### Diseño de Entidades

Es el proceso en el que se definen las tablas que representarán los objetos principales del sistema dentro de la base de datos.

Pasos para diseñar una entidad:

1. **Nombre de la entidad/tabla:** debe ser claro, representativo y estar directamente relacionado con el objeto que almacena.
2. **Fila de cada campo:** para cada campo se debe especificar:
   - **Nombre del campo**
   - **Tipo de dato:** si es texto, entero, decimal, fecha, etc.
   - **Tamaño:** por ejemplo, una cédula puede definirse como `INT(15)` y un teléfono como `INT(13)`.
3. **Definir si es PK o FK** (ver la siguiente sección).
4. **Definir si es NULL o NOT NULL:** si el campo es obligatorio de llenar, o si se puede dejar vacío en el registro.

### Llave Primaria (PK) y Llave Foránea (FK)

- **Llave primaria (PK — *Primary Key*):** su función es identificar de forma única cada registro dentro de una tabla. Se caracteriza por ser única (no puede repetirse) y no puede contener valores nulos, aunque existen excepciones según el motor. Un ejemplo claro es la identificación personal (cédula) de un empleado, o la matrícula de un vehículo.
- **Llave foránea (FK — *Foreign Key*):** su función es establecer la relación entre dos tablas. Es un campo que hace referencia a la llave primaria de otra tabla, y es lo que permite conectar la información entre entidades relacionadas.

### Cardinalidad

La cardinalidad define cuántas instancias de una entidad se pueden relacionar con instancias de otra entidad. Los tres tipos principales son:

- **Uno a uno (1:1):** un registro de la Tabla A se relaciona con, como máximo, un registro de la Tabla B. Por ejemplo, una persona y su pasaporte.
- **Uno a muchos (1:N):** un registro de la Tabla A se puede relacionar con varios registros de la Tabla B, pero cada uno de estos últimos se relaciona solo con uno de la Tabla A. Por ejemplo, un cliente puede tener muchas facturas, pero cada factura pertenece a un solo cliente.
- **Muchos a muchos (N:M):** varios registros de la Tabla A se relacionan con varios registros de la Tabla B. Por ejemplo, un estudiante puede inscribirse en varias materias, y cada materia puede tener varios estudiantes. Este tipo de relación normalmente se resuelve con una tabla intermedia.

### Nomenclatura

#### Entidades y atributos: PascalCase y camelCase

- Para las **entidades** se usa `PascalCase`, por ejemplo: `FechaCompra`.
- Para los **atributos** se usa `camelCase`, por ejemplo: `fechaCompra`.

#### Procedimientos y operaciones

Como buena práctica, los nombres deben seguir el patrón `entidad_Operación`: deben ser cortos y simples, por ejemplo:

- `Entidad_Tabla_Atributo`
- `usuario_Crear`

En un requerimiento funcional cuyo caso de uso es "Crear usuario", la fila de esta tabla podría tener los campos: `Cedula`, `Cod_Usuario`, `Nom_Usuario`, `Ape_Usuario`, `Correo_Usuario`, `Tipo_Usuario`.

---

## Casos de Uso

### ¿Qué es un caso de uso?

Los casos de uso surgen de los requerimientos del sistema. Se inicia respondiendo la pregunta: **¿quién va a usar el sistema?**

Generalmente, dentro del sistema el usuario solicita información, por lo que la siguiente pregunta natural es: **¿cómo accede a esa información?** A partir de esas respuestas se identifican los actores y las acciones que definen cada caso de uso.

---

## Modelo Físico

El **modelo físico** es la traducción del modelo lógico/entidad-relación a una implementación real dentro de un motor de base de datos específico. En esta etapa se definen, para cada tabla y cada campo:

- Los tipos de datos concretos que soporta el motor elegido (por ejemplo, `VARCHAR(50)` en lugar de simplemente "texto").
- Las restricciones (`PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, valores por defecto).
- Los índices necesarios para optimizar las consultas más frecuentes.
- Los nombres definitivos de tablas y columnas, siguiendo la nomenclatura acordada.

El modelo físico es el que finalmente se ejecuta como sentencias `CREATE TABLE` dentro del motor de base de datos seleccionado para el proyecto.

> Gracias por leer.