# Modelado de Artefactos de Software

Esta es una competencia del tercer trimestre que consiste en elaborar loas artefactos del diseño del software siguendo las prácticas de la metodologia seleccionada, por lo que:

>Competencia: Es la capacidad de realizar algo, generalmente en las instituciones se les nombran asi, en otros lugares se les distingue como materias. Pero como es formación para el trabajo son competencias ya que estamos estudiando para realizar determinado trabajo.

1. se va a estructurar el modelo de datos del software de acuerdo con las esspecificaciones del analisis

2. Se va a elaborar los artefactos del diseño de software siguendo las práticas de la metodolo´gia seleccionada

3. Estructurar el modelo de datos del software de acuerdo con las especiifcaciones del análisis

4. Por ultimo con esta competencia se busca (Con la instructora angelica triana) verificar los entregables de la fase de diseño del software de acuerdo con lo establecido en el informe de naalisis

---

<!-- TALBA DE CONTENIDO -->

## Tabla de Contenido

1. [](#bases-de-datos)
2. [](##tipos)

# Bases de datos

### ¿Qué es una base de datos?

Es una colección organizada y estructurada de información que se almacena electrónicamente para facilitar su acceso, gestión y actualización. (Permiten almacenar grandes volúmenes de datos)

Su desarrollo es de forma lineal (waterfall) se realizan los siguentes procesos:

1. Requerimientos Funcionales
2. Casos de Uso
3. Modelo Entidad Relación (MER) = DFD

<img src = "https://imgs.search.brave.com/1mJ17W7EwQcYGb7OMSnHDzEKooUD8cpd_iAawSWSkZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDUwMjY3/LzIzMjgvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yMzI4NzQ4OC1z/dG9jay1waG90by1k/YXRhYmFzZS1jb25j/ZXB0LXdpdGgtbGFw/dG9wLXRhYmxldC5q/cGc">

*Imagen Tomada de: https://depositphotos.com/es/photos/base-de-datos.html*

## Tipos de Datos

Existen tipos de datos y entonces encontramos subtipos en estos tipos de datos

### Tipo Númerico

Cuando en unos datos no queremos que se ingresen caracteres como por ejemplo, en una cedula. No esperamos que se ingrese información con letras sino solamente números.

#### Tipo Númerico - INT

Los numeros enteros son aquellos que terminan en un numero positivo o negativo y son exactos como por ejemplo: 1, 2, 3, 4, 5, 6, 7, 9 -1, -2, -3, -4, -5, -6...

#### Tipo Númerico - SMALLINT

Es un entero pequeño, ocupa menos espacio por lo que podemos pensarlo como datos que son menores que el número 100, como un ejemplo preciso de este tipo de cosas podemos pensarlo como cuando en las variables de las tablas vamos a integrar una edad por lo que va en un rango de 1 - 100.

#### Tipo Númerico - BIGINT

Es un entero grande (más rango) por lo que puede ser facilmente 94596859685

#### Tipo Númerico - DECIMAL/NUMERICO

Son números con decimales exactos, eso quiere decir que cuentan con p = precision y s = escala como por ejemplo 12.50, 13.30, 16.70 ...

#### Tipo Númerico - FLOAT/REAL

## Ejemplo Aplicado

Tenemos una tabla que se llama **Estudiante**

  En la tabla con tenemos entonces:
  Cedula 
  Nombre
  Telefono
  Tipo de documento

---


### Datos tipo texto o cadenas de caracteres

#### CHAR(n)

es una cadena de longitud fija (rellena con espacios) 'ABC' como por ejemplo un nombre.

#### VARCHAR(n) 

Cadena de longitud variable (Más eficiente) 'Colombia' por lo que una dirección puede ser un VARCHAR(50) es decir una cantidad de 

#### TEXT

es un texto largo con parrafos, descripciones



---


### Variable Tipos de Fecha y Hora

Permiten registrar momentos en eltiempo

#### Date 

#### TIME

#### DATETIME/TIMESTAMP

#### YEAR




---


### Variable de tipo BOOLEANO

Binario

Bit

---


### Variable tipos de identificación Binario

UUID
BLOB
VARBINARY


---

### Tipos espaciales y JSON (avanzados)

Usados en bases modernas como postgreSQL

JSON

GEOMETRY, POINT, POLYGON


---




#### Motor de Bases de Datos

#### Los 6 Motores de Bases de Datos más reconocidos en el mercado

Oracle: Es el motor relacional más antiguo, comenzó el negocio de las bases de datos. En ese entonces no era un negocio sino un proyecto cientifico, fue entonces que [Larry Ellison](https://www.forbes.com/profile/larry-ellison/) vio potencial y fundo la empresa. (Hoy en día es de los 10 hombres más ricos en el mundo)
  
Microsoft SQL Server: Es la respuesta de Microsoft hacia Oracle, paso muchos años sólo funcionando para windows, fue desde 2017 que ha sido multiplataforma. (Son lideres en Business Intelligence)

My SQL: Es el motor más usado por los desarrolladores

SQlite: Es una base de datos pequeña, es muy usada para hacer persistencia local en aplicaciones móviles

PostgreSQL: Inicio como un proyecto universitario llamado INGRES, inspirado en Oracle e incluyó funciones avanzadas y tiggers que MySQL no tuvo por años.

MariaBD:


---



### Gestor de bases de datos




### Un objeto en BD


---



## Tipos de Bases de Datos

Hay dos tipos de bases de datos (relacionales y no relacionales) 


### BD Relacional

Relacional SQL: Son datos estructurados con relaciones entre tablas y se usa en ERP, ventas, RRHH y generalmente utiliza los motores MySQL, SQL, PostgreSQL, Oracle

Los objetos estan relacionados entre sí


### BD No Relacional

No Relacional NoSQL

Datos no estruturados o semiestructurados (documentos, grafos, etc..) un ejemplo claro con las redes sociales, loT, big data y generalmente tiene los motores MongoDB, Cassandra, Redis

Se necesitan los documentos entidad, relación y los casos de uso para determinar que tablas y atributos se necesitan.

Se plantea utilizar XAMPP (mysql)

primero fue SQL (Structured Query Language), que en español significa **Lenguaje de Consulta Estructurada** 


### BD Orientada a objetos

Almacena datos como objetos del lenguaje de programación, generalmente se ve en aplicaciones java, C#, y utiliza los motores db4o, objetctDB


### BD Distribuida

bases de datos replicada en varios servidores o ubicaciones, se ve en sistemas de alta disponibilida y tiene los motores cockroachDB y Cassandra

arquitectura modelo servidor


### BD en Memoria

Datos almacenados en RAM para alta velocidad, 

---

### Tenemos:

* SQL que cuesta dinero y generalmente es usado por las empresas
* MySQL es FREE y pertenece a oracle y sirve para un proyecto pequeño y local.

  Los dos funcionan de una forma muy similar

>https://www.w3schools.com/sql/sql_select.asp

>https://sqliteonline.com/
 

### Herramientas:

* [Xampp](https://www.apachefriends.org/ "apachefriends.org")
  
* [Visual Studio Code](https://code.visualstudio.com/ "Visual Studio")
  
* [SQL Sever Mangement Studio](https://www.microsoft.com/es-es/sql-server/sql-server-downloads "Microsoft - SQL")


Una tabla se representa como una cuadricula (Entonces usaremos c# o draw.io) 


### Ejemplo de aplicación

Como buenas Prácticas Los nombres deben ser estilo entidad y especificación, debe ser corto y simple, es decir:

* Entidad_Tabla_Atributo
  
* usuario_Crear

En un requerimiento funcional donde su caso de uso es "CREAR USUARIO" 

Por lo que la fila en esta tabla puede ser: Cedula, Cod_Usuario, Nom_Usuario, Ape_Usuario, Correo_Usuario, Tipo_Usuario



---



## Modelo Entidad Relación (MER)

Entidades: Un objeto en la base de datos = Tabla






# Casos de Uso

## ¿Qué es un Caso de Uso?

Salen de los requerimientos y son los casos de uso

Se inicia con la pregunta ¿Quien va a usar el sistema?

Generalmente en el sistema el usuario pide información, por lo que... ¿Cómo accede a esta información?


---


## Llave Foranea FK - Primary Key

Llave priamria (PK) su funcion es identificar de forma unia cada registro dentro de una tabla

por loo que se caracterisa por ser unica, no puede repetirse y no puede contener valores nulos (aunque hay excepciones)

Y un ejemplo claro de este tipo de cosas es cuando en una identificación personal (DNI) de un empleado o la matricula de un carro


---


Llave Primaria PK

Suu funcion es establecer relacion


---

MDOELO E R MER

Un CAMPO es toda la columna de cualquier dato
Una tabla es todo el cuadro como tal
Y toda la fila es un registro
Y si solamente tomo un dato es un campo.

<img src = "https://imgs.search.brave.com/wJghNrpxhcmeXbmav0fPeoeKIGGgp1w90Mawn9Fe10Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zbGlkZXNoYXJl/Y2RuLmNvbS9zcy0y/MDA4MjUyMjE3NDEv/NzUvQ2xhc2UtMi1N/b2RlbG8tRW50aWRh/ZC1SZWxhY2lvbi1N/RVItMjMtMjA0OC5q/cGc">


---

Diseño de Entidades : 

Este proceso en donde se definen las tablas que representaran los objetos principales del sistema dentro de una base de datos.

Pasos para Diseñar una Entidad:

1. Nombre de entidad - tabla:
   El nombre debe ser claro, representativo y estar directamente relacionado con el objeto que almacena.
   
2. Fila del nombre del Campo - Tipo de Dato - Tamaño (Caracteres)
   Se debe especificar cada uno de estos campos
    * Nombre del campo: 
    * Tipo de Dato: Si es texto, entero, decimal, fecha
    * Tamaño: Por ejemplo en una cedula - INT(15), Telefono - INT(13)
      
3. Definir si es PK o FK
4. Definir si es NULL o NOTNULL (SI es obligado llenar el campo / Si se puede dejar vacio el campo en el registro)



---

## Carnalidad

## Nomenclatura PascalCase y camelCase

Para las entidades PascalCase = FechaCompra
Para los atributos se usa camelCase = fechaCompra

## Modelo Físico
