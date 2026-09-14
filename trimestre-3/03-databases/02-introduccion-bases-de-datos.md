# Introducción a las bases de datos

> Una base de datos es un conjunto de datos organizados de tal manera que permite obtener información de forma rápida y eficiente. En el contexto del desarrollo de software, las bases de datos son fundamentales porque permiten almacenar, organizar y recuperar grandes cantidades de información de manera estructurada. Este documento presenta los conceptos generales de bases de datos, los tipos de datos, las clasificaciones, el modelo entidad-relación, la normalización y los sistemas gestores de bases de datos.

> Este tema puede ser facilmente un enfoque de carrera. Es muy interesante!

---

## Tabla de contenido

- [1. Conceptos generales de bases de datos](#1-conceptos-generales-de-bases-de-datos)
  - [1.1 ¿Qué es una base de datos?](#11-qué-es-una-base-de-datos)
  - [1.2 Metadatos y diccionario de datos](#12-metadatos-y-diccionario-de-datos)
  - [1.3 Tipos de datos y restricción de no nulidad](#13-tipos-de-datos-y-restricción-de-no-nulidad)
  - [1.4 Tipos de bases de datos según su estructura](#14-tipos-de-bases-de-datos-según-su-estructura)
  - [1.5 Clasificación de bases de datos según la naturaleza de los datos](#15-clasificación-de-bases-de-datos-según-la-naturaleza-de-los-datos)
  - [1.6 Sistemas de gestión de bases de datos (SGBD)](#16-sistemas-de-gestión-de-bases-de-datos-sgbd)
- [2. Modelo entidad-relación](#2-modelo-entidad-relación)
  - [2.1 Entidad, atributos y relaciones](#21-entidad-atributos-y-relaciones)
  - [2.2 Tuplas y claves](#22-tuplas-y-claves)
  - [2.3 Relaciones entre entidades](#23-relaciones-entre-entidades)
  - [2.4 Relaciones de uno a muchos (1:N)](#24-relaciones-de-uno-a-muchos-1n)
  - [2.5 Relaciones de muchos a muchos (N:N)](#25-relaciones-de-muchos-a-muchos-nn)
  - [2.6 Relaciones de uno a uno (1:1)](#26-relaciones-de-uno-a-uno-11)
- [3. Normalización](#3-normalización)
  - [3.1 Formas normales](#31-formas-normales)
  - [3.2 Dependencias funcionales](#32-dependencias-funcionales)
  - [3.3 Diseño relacional](#33-diseño-relacional)
  - [3.4 Reglas de integridad](#34-reglas-de-integridad)
  - [3.5 Lenguajes de los sistemas administradores de bases de datos](#35-lenguajes-de-los-sistemas-administradores-de-bases-de-datos)
- [4. Sistemas gestores de bases de datos](#4-sistemas-gestores-de-bases-de-datos)

---

## 1. Conceptos generales de bases de datos

En la sociedad de la información es imprescindible el empleo de tecnología, técnicas y procedimientos que, a lo largo de las últimas décadas, han consolidado un marco conceptual importante y necesario en todo proceso de administración de datos.

### 1.1 ¿Qué es una base de datos?

Una base de datos se puede percibir como un **"almacén"** de información que se define y se crea una sola vez para guardar grandes cantidades de datos de forma organizada (o estructurada), con el fin de poder encontrarla y utilizarla fácilmente.

Según la RAE (2001), una base de datos es el *"conjunto de datos organizado de tal modo que permita obtener con rapidez diversos tipos de información"*.

De acuerdo con esta definición, una hoja de cálculo de Excel puede considerarse una base de datos, o un conjunto de archivos debidamente organizados, o la lista de nombres y teléfonos en un smartphone. Sin embargo, en el contexto del desarrollo de software, se refiere a ese conjunto de información que puede ser almacenada en grandes cantidades de forma organizada y es gestionada a través de un **Sistema de Gestión de Bases de Datos (SGBD)**.

> Cada base de datos es diseñada para cumplir con los requisitos de información de una organización o empresa. Estos diseños están concebidos para emplear Sistemas de Gestión de Bases de Datos (SGBD), que permiten definir, crear, dar soporte y mantenimiento a las bases de datos, controlando el acceso de forma segura.

### 1.2 Metadatos y diccionario de datos

Para organizar y definir la información de forma sistemática, las bases de datos deben almacenar una descripción precisa de los datos que contienen, conocida como **metadatos**. A los metadatos se les relaciona el tipo de información que es conceptualmente guardada (es decir, si se agrega una explicación de la naturaleza del dato en la empresa), dando origen a lo que se conoce como **diccionario de datos** o **catálogo de datos**.

#### Ejemplo 1: Determinar los metadatos

**Problema:** Una empresa tiene una base de datos de llamadas telefónicas que entran y salen de su planta telefónica. Se relacionan los números de teléfono del llamante y la extensión telefónica que recibe o hace la llamada, la fecha y hora de la llamada, si fue o no atendida, y la duración de la misma.

**Tabla de datos de llamadas telefónicas:**

| calldate | src | dst | duration | disposition |
|----------|-----|-----|----------|-------------|
| 2021-02-27 10:15:32.5 | 57+3155008002 | 101 | 00:02:15 | ANSWER |
| 2021-02-27 10:20:45.0 | 102 | 57+3155008003 | 00:00:00 | NO ANSWER |
| 2021-02-27 10:25:10.2 | 57+3155008004 | 103 | 00:05:30 | ANSWER |

La figura muestra una tabla de datos que tiene las características de que en cada columna se agrupa un tipo de dato particular, y cada fila es el conjunto de datos que se llama **registro** y comparten una relación (cada fila corresponde a una única llamada telefónica). A esta estructura se le llama **bidimensional** (filas y columnas).

**Metadatos de la tabla anterior:**

| **Campo** | **Tipo de dato** | **Descripción** |
|-----------|------------------|-----------------|
| calldate | TIMESTAMP(1) | Estructura YYYY-MM-DD HH:MI:SS.Z |
| src | VARCHAR(25) | Fuente (source) de la llamada |
| dst | VARCHAR(25) | Destino de la llamada |
| duration | TIME | Duración de la llamada |
| disposition | VARCHAR(10) | Estado final de la llamada (ANSWER, NO ANSWER, FAIL) |

#### Ejemplo 2: Diccionario de datos

| **Nombre** | Base de datos de llamadas telefónicas |
|------------|---------------------------------------|
| **Creación** | 27/02/2021 |
| **Descripción** | Registro de las llamadas telefónicas de la PBX de la empresa |

| **Campo** | **Tipo dato** | **Tamaño** | **Descripción** |
|-----------|---------------|------------|-----------------|
| calldate | TIMESTAMP | 1 | Momento exacto en que entra o sale la llamada |
| src | VARCHAR | 25 | Fuente de la llamada |
| dst | VARCHAR | 25 | Número del destino de la llamada |
| duration | TIME | 0 | Duración de la llamada |
| disposition | VARCHAR | 10 | Estado final de la llamada |

> Un diccionario de datos aporta información de la estructura de los datos y el uso que se da a cada dato en la empresa, organización o sistema de información. Se puede identificar la independencia entre la lógica de los datos (descripción) y el almacenamiento físico (tipo de dato y tamaño).

### 1.3 Tipos de datos y restricción de no nulidad

Existen muchos tipos de datos y varían según el SGBD. Cada sistema gestor define sus propios tipos de datos, aunque existen equivalencias notables.

| **Tipo de dato** | **ORACLE** | **PostgreSQL** | **MySQL** | **SQLServer** |
|------------------|------------|----------------|-----------|---------------|
| Cadena caracteres | VARCHAR2 | CHARACTER VARYING | VARCHAR | VARCHAR |
| Cadena texto | TEXT | TEXT | TEXT | NTEXT |
| Entero pequeño | SMALLINT | SMALLINT | SMALLINT | SMALLINT |
| Entero | INTEGER | INTEGER | INT | INT |
| Fecha | DATE | DATE | DATE | DATE |
| Fecha y hora | DATE | TIMESTAMP WITH TIME ZONE | DATETIME | DATETIME2 |
| Hora | DATE | TIME | TIME | TIME |
| Entero con decimales | FLOAT | REAL | FLOAT | FLOAT |

**Restricción de no nulidad:** Al definir una columna, se puede especificar que es obligatorio registrar un dato en ella usando la palabra clave `NOT NULL`. Esto significa que ninguna fila puede tener valor nulo en esa columna.

**Ejemplo:**

```sql
calldate TIMESTAMP(1) NOT NULL,
src VARCHAR(25) NOT NULL,
dst VARCHAR(25) NOT NULL,
duration TIME NOT NULL,
disposition VARCHAR(10) NOT NULL
```

### 1.4 Tipos de bases de datos según su estructura

Las bases de datos han evolucionado a lo largo del tiempo, usando diferentes tipos de modelos o enfoques:

| **Tipo de estructura** | **Descripción** |
|------------------------|-----------------|
| **Jerárquica** | Las relaciones entre registros forman una estructura en árbol. Ejemplo: LDAP. |
| **En red** | Los registros se relacionan mediante punteros, formando una red. |
| **Relacional** | Los datos se organizan en tablas con filas y columnas. Es el modelo más utilizado. |
| **Multidimensional** | Los datos se almacenan en cubos para análisis estadístico (OLAP). |
| **Orientada a objetos** | Los datos se almacenan como objetos, con atributos y métodos. |

**Representación de una base de datos jerárquica:**

```
                        ┌─────────────┐
                        │   Raíz      │
                        └──────┬──────┘
               ┌───────────────┼───────────────┐
               │               │               │
        ┌──────┴──────┐ ┌──────┴──────┐ ┌──────┴──────┐
        │  Nivel 1-A  │ │  Nivel 1-B  │ │  Nivel 1-C  │
        └──────┬──────┘ └─────────────┘ └──────┬──────┘
               │                               │
        ┌──────┴──────┐                 ┌──────┴──────┐
        │  Nivel 2-A  │                 │  Nivel 2-B  │
        └─────────────┘                 └─────────────┘
```

### 1.5 Clasificación de bases de datos según la naturaleza de los datos

| **Criterio** | **Clasificación** | **Descripción** |
|--------------|-------------------|-----------------|
| **Variabilidad de los datos** | Estáticas | Datos históricos que no se modifican. Se usan para estudiar comportamiento en el tiempo. Se denominan bodegas de datos (OLAP). |
| | Dinámicas | Datos que se almacenan, modifican, agregan, borran y consultan en cualquier momento. Se denominan transaccionales (OLTP). |
| **Contenido** | Documentales | Permiten indexación a texto completo y búsquedas potentes. |
| | Deductivas | Permiten hacer deducciones a través de inferencias. Basadas en reglas y hechos (bases de datos lógicas). |

> Las bases de datos relacionales son de obligatorio dominio en cualquier caso, ya que sus conceptos son reutilizables en casi todos los otros tipos.

### 1.6 Sistemas de gestión de bases de datos (SGBD)

Un **Sistema de Gestión de Base de Datos (SGBD)** es un programa de computador que permite definir, crear y mantener los datos de una base de datos, controlando el acceso.

**Servicios que ofrece un SGBD:**

- Permiten la definición de la base de datos usando un **lenguaje de definición de datos (DDL)**.
- Permiten la inserción, actualización, eliminación y consulta de datos usando un **lenguaje de manejo de datos (DML)**.
- Proporcionan un **acceso controlado** a la base de datos (autenticación, roles, niveles de acceso).
- Ofrecen **concurrencia** (varios usuarios accediendo o manipulando los datos a la vez) y **multitarea**.
- Algunos SGBD permiten administrar el **catálogo de datos**.

---

## 2. Modelo entidad-relación

Las bases de datos relacionales requieren cierto nivel de abstracción para su diseño. Se analiza primero el requerimiento desde un punto de vista conceptual (necesidades de la empresa), luego desde el punto de vista lógico de los datos, y finalmente desde el punto de vista físico (cómo se almacenan los datos).

### 2.1 Entidad, atributos y relaciones

| **Concepto** | **Definición** | **Representación** |
|--------------|----------------|---------------------|
| **Entidad** | "Cosa" u "objeto" del mundo real que es distinguible de otros objetos. | Rectángulo |
| **Atributo** | Característica o propiedad de una entidad. | Elipse |
| **Relación** | Asociación entre varias entidades. | Rombo |
| **Línea** | Une atributos con entidades y entidades con relaciones. | Línea |

**Representación de un diagrama entidad-relación:**

```
       ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
       │   PERSONA   │         │   TITULAR   │         │   CUENTA    │
       └──────┬──────┘         └──────┬──────┘         └──────┬──────┘
              │                       │                       │
       ┌──────┴──────┐               │                ┌──────┴──────┐
       │ identificación │              │                │ numero_cuenta│
       │ nombres     │               │                │ saldo       │
       │ apellidos   │               │                │ fecha_creación│
       │ edad        │               │                └─────────────┘
       └─────────────┘               │
                                     │
                              ┌──────┴──────┐
                              │   TITULAR   │
                              └─────────────┘
```

### 2.2 Tuplas y claves

**Tupla:** Es el conjunto de todos los atributos (columnas) de una fila. Cada registro en una tabla es una tupla.

**Principio de unicidad:** En una tabla nunca deben existir tuplas repetidas. Cada fila debe diferir al menos en un elemento (columna) en relación con las demás.

**Claves:** Son los atributos que sirven para identificar un registro de forma inequívoca.

| **Tipo de clave** | **Descripción** |
|-------------------|-----------------|
| **Superclave** | Conjunto de uno o más atributos que, tomados juntos, permiten identificar de forma única una entidad. |
| **Clave candidata** | Clave que cumple con el principio de unicidad y puede ser elegida como clave primaria. |
| **Clave primaria** | Clave candidata elegida por el diseñador para identificar las tuplas dentro de una entidad. |
| **Clave compuesta** | Clave formada por más de un atributo. |
| **Clave foránea** | Atributo que referencia la clave primaria de otra tabla. |

**Ejemplo:**

| **Persona** | | | |
|-------------|---|---|---|
| **id_persona** | **nombres** | **apellidos** | **correo** |
| 1 | Ana Lis | Méndez | ana@email.com |
| 2 | Luis Darío | Gómez | luis@email.com |

| **Cuenta** | | | |
|------------|---|---|---|
| **numero_cuenta** | **saldo** | **fecha_creación** | **id_persona** |
| 67.789.901 | 1500000 | 2021-01-15 | 1 |
| 32.443.171 | 800000 | 2021-02-20 | 1 |
| 45.678.912 | 2500000 | 2021-03-10 | 2 |

> En este ejemplo, `id_persona` es la clave primaria de la tabla Persona, y `id_persona` en la tabla Cuenta es una clave foránea que referencia a la tabla Persona.

### 2.3 Relaciones entre entidades

Las relaciones permiten evitar datos redundantes. Existen tres tipos principales:

| **Tipo de relación** | **Descripción** | **Representación** |
|----------------------|-----------------|---------------------|
| **1:N (uno a muchos)** | Una fila de la tabla A puede tener muchas filas en la tabla B, pero una fila de B solo tiene una en A. | Multiplicidad 1:N |
| **N:N (muchos a muchos)** | Una fila de A puede relacionarse con muchas de B, y viceversa. | Multiplicidad N:N |
| **1:1 (uno a uno)** | Una fila de A solo puede tener una fila en B, y viceversa. | Multiplicidad 1:1 |

### 2.4 Relaciones de uno a muchos (1:N)

Una relación de uno a varios es el tipo de relación más empleada. En este tipo, una fila de la tabla A puede tener muchas filas coincidentes en la tabla B, pero una fila de la tabla B solo puede tener una fila coincidente en la tabla A.

**Ejemplo:** Una persona puede tener varias cuentas bancarias, pero cada cuenta bancaria tiene un solo titular.

**Representación:**

```
┌─────────────┐         ┌─────────────┐
│   PERSONA   │ 1     N │    CUENTA   │
│             │─────────│             │
│ id_persona  │         │ numero_cuenta│
│ nombres     │         │ saldo       │
│ apellidos   │         │ id_persona (FK)│
└─────────────┘         └─────────────┘
```

**Regla de mapeo 1:N:** Una relación de uno a muchos se transforma en una columna en la tabla que tiene la multiplicidad de los muchos (Cuenta). Esta columna es la clave foránea que referencia a la tabla que tiene la multiplicidad uno (Persona).

| **Cuenta** | | | | |
|------------|---|---|---|---|
| **numero_cuenta** | **saldo** | **fecha_creación** | **id_persona (FK)** | |
| 67.789.901 | 1500000 | 2021-01-15 | 1 | |
| 32.443.171 | 800000 | 2021-02-20 | 1 | |
| 45.678.912 | 2500000 | 2021-03-10 | 2 | |

### 2.5 Relaciones de muchos a muchos (N:N)

En una relación de muchos a muchos, una fila de la tabla A puede tener relación con muchas filas en la tabla B, y también en sentido contrario. Esta relación se crea definiendo una **tercera tabla** denominada **tabla de relación**.

**Ejemplo:** Una publicación (libro, tesis, artículo) puede ser elaborada por más de una persona, y una persona puede tener más de una publicación de su autoría.

**Representación:**

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   PERSONA   │ N     N │    AUTOR    │ N     N │ PUBLICACIÓN │
│             │─────────│             │─────────│             │
│ id_persona  │         │ id_persona  │         │ id_publicación│
│ nombres     │         │ id_publicación│       │ título      │
│ apellidos   │         │             │         │ ISBN        │
└─────────────┘         └─────────────┘         └─────────────┘
```

**Regla de mapeo N:N:** Una relación de muchos a muchos se transforma en una tabla cuya clave primaria está compuesta por las claves primarias de las otras dos tablas.

| **Autor** | |
|-----------|---|
| **id_persona (FK)** | **id_publicación (FK)** |
| 1 | 101 |
| 1 | 102 |
| 2 | 102 |
| 3 | 102 |

### 2.6 Relaciones de uno a uno (1:1)

En una relación uno a uno, una fila de la tabla A solo puede tener una fila coincidente en la tabla B, y viceversa. Este tipo de relación no es común porque la mayoría de la información relacionada estaría en una tabla.

**Motivos para usar una relación 1:1:**
- Dividir una tabla con muchas columnas.
- Aislar parte de una tabla por motivos de seguridad.
- Almacenar datos de corta duración.
- Almacenar información que solo se aplique a un subconjunto de la tabla principal.

**Regla de mapeo 1:1:** La relación uno a uno se convierte en una columna de una de las tablas con restricción de unicidad (Unique Key o Primary Key).

| **Empleado** | | | |
|--------------|---|---|---|
| **id_persona (PK, FK)** | **cargo** | **salario** | **fecha_ingreso** |
| 1 | Gerente | 5000000 | 2020-01-15 |
| 3 | Analista | 3500000 | 2021-03-01 |

---

## 3. Normalización

La **normalización** es el procedimiento mediante el cual se aplican las reglas de mapeo o conversión de un modelo entidad-relación a un modelo relacional (tablas y relaciones). Los principios rectores de este proceso son:

- **No redundancia de datos:** Que no se repitan los datos.
- **Dependencia coherente:** Separación lógica de datos en tablas.

Los datos redundantes desperdician espacio en disco y crean problemas de mantenimiento.

**¿Qué es una dependencia incoherente?** Es cuando un atributo depende de una tabla que no le corresponde. Por ejemplo, el salario de un empleado no tiene sentido en la tabla Persona, sino en la tabla Empleado.

### 3.1 Formas normales

| **Forma normal** | **Principios** |
|------------------|----------------|
| **Primera forma normal (1FN)** | Eliminar grupos de repetición en tablas individuales. Crear una tabla independiente para cada conjunto de datos relacionados. Identificar cada conjunto con una clave primaria. |
| **Segunda forma normal (2FN)** | Crear tablas independientes para conjuntos de valores que se aplican a varios registros. Relacionar estas tablas con una clave foránea. |
| **Tercera forma normal (3FN)** | Eliminar los campos que no dependen de la clave. |

> Existen también la forma normal de Boyce-Codd (BCNF) y la quinta forma normal, pero rara vez se consideran en un diseño práctico.

### 3.2 Dependencias funcionales

Una **dependencia funcional** es un tipo de restricción que construye una generalización del concepto de clave. Se dice que un atributo X depende funcionalmente de otro atributo o conjunto de atributos Y si a todo valor de Y le corresponde siempre el mismo valor de X.

**Ejemplo:** En una tabla de proveedores, productos y precios:

| **Tabla original** | | | | |
|--------------------|---|---|---|---|
| **nit_proveedor** | **correo** | **nombres** | **teléfono** | **codigo_producto** | **producto** | **precio** |
| 900123456 | prov1@email.com | Proveedor 1 | 555-1234 | P001 | Producto A | 15000 |
| 900123456 | prov1@email.com | Proveedor 1 | 555-1234 | P002 | Producto B | 25000 |
| 900789012 | prov2@email.com | Proveedor 2 | 555-5678 | P001 | Producto A | 18000 |

**Dependencias detectadas:**

| **Atributo** | **Es dependencia funcional de:** |
|--------------|----------------------------------|
| nit_proveedor | correo, nombres, teléfono |
| codigo_producto | producto |
| nit_proveedor, codigo_producto | precio |

### 3.3 Diseño relacional

El diseño de bases de datos se puede realizar de varias formas:

1. Convirtiendo un diagrama entidad-relación a un diagrama relacional.
2. Teniendo una tabla con todos los datos e identificando las dependencias funcionales.
3. Haciendo un diseño ad hoc y comprobando que satisface la forma normal deseada.

> En el mundo práctico, las opciones 2 y 3 son las más empleadas cuando se tiene experiencia.

### 3.4 Reglas de integridad

La **integridad de datos** garantiza que los datos almacenados cumplan con los estándares y requisitos de la organización.

| **Tipo de integridad** | **Descripción** |
|------------------------|-----------------|
| **Criterio de nulidad** | Un atributo es nulo cuando su valor es desconocido. No es lo mismo que cero o cadena vacía. Significa ausencia de información. |
| **Integridad de entidad** | La clave primaria no puede ser nula. |
| **Integridad referencial** | Una clave foránea debe referenciar una clave primaria existente. |

**Reglas de borrado y edición:**

| **Regla** | **Descripción** |
|-----------|-----------------|
| **Restringir** | No se permite borrar o editar la fila referenciada. |
| **Cascada** | Se borra o actualiza la fila referenciada y también las filas que la referencian. |
| **Poner null** | Se borra o actualiza la fila referenciada y las filas que la referencian ponen en nulo la clave foránea. |
| **Valor por defecto** | Se borra o actualiza la fila referenciada y las filas que la referencian ponen el valor por defecto. |

### 3.5 Lenguajes de los sistemas administradores de bases de datos

Los SGBD emplean **SQL** (Structured Query Language). Dentro de SQL hay varios tipos de sentencias agrupadas en cuatro conjuntos:

| **Conjunto** | **Descripción** | **Sentencias** |
|--------------|-----------------|----------------|
| **DDL (Data Definition Language)** | Permiten crear, alterar y eliminar tablas y otros objetos. | CREATE, ALTER, DROP |
| **DML (Data Manipulation Language)** | Permiten insertar, consultar, editar y borrar datos. | INSERT, SELECT, UPDATE, DELETE |
| **DCL (Data Control Language)** | Permiten crear usuarios y conceder o revocar privilegios. | GRANT, REVOKE |
| **TCL (Transaction Control Language)** | Permiten procesar en bloque operaciones DML. | COMMIT, ROLLBACK |

**Ejemplo DDL:**

```sql
CREATE TABLE persona (
    id_persona INT NOT NULL,
    nombres VARCHAR(250) NOT NULL,
    apellidos VARCHAR(250) NOT NULL,
    correo VARCHAR(250) NOT NULL,
    PRIMARY KEY (id_persona)
);
```

**Ejemplo DML:**

```sql
INSERT INTO persona (id_persona, nombres, apellidos, correo)
VALUES (1, 'Ana Lis', 'Mendez', 'ana@email.com');

UPDATE persona SET nombres = 'Ana Lis' WHERE id_persona = 1;

DELETE FROM persona WHERE id_persona = 1;
```

**Ejemplo DCL:**

```sql
GRANT INSERT, UPDATE, DELETE, SELECT ON biblioteca_db.persona TO userdb@'localhost';
```

---

## 4. Sistemas gestores de bases de datos

En el mercado existen muchos sistemas gestores de bases de datos. **MySQL** es uno de los más usados para aplicaciones web, de pequeña, mediana y, en algunos casos, gran complejidad. Es un buen punto de partida y todos los conceptos vistos en MySQL son reutilizables en PostgreSQL, Oracle u otro motor de bases de datos relacional.

**Herramientas comunes:**

| **Herramienta** | **Descripción** |
|-----------------|-----------------|
| **MySQL Workbench** | Entorno visual para diseñar, administrar y consultar bases de datos MySQL. |
| **XAMPP** | Paquete que incluye Apache, MySQL, PHP y Perl. Permite ejecutar un servidor local para desarrollo web. |

---

> Gracias por leer.