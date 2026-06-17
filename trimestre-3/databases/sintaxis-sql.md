# Sintaxis SQL

Este documento reúne mis apuntes personales sobre SQL, organizados y explicados para facilitar mi comprensión con este fascinante tema.

Aquí encontrarás desde la sintaxis fundamental hasta conceptos más avanzados utilizados en el desarrollo de software dentro del programa ADSO.

El objetivo es desmenuzar cada comando, explicar su propósito, mostrar ejemplos prácticos y conectar cada tema con situaciones reales que se presentan al trabajar con bases de datos.

Este archivo funciona como una guía de estudio, un resumen técnico y un repositorio de conocimiento que iré ampliando a medida que avance en mi proceso de formación.




---




## Tabla de Contenido

1. [Cómo Crear Una BD](#cómo-crear-una-bd)
2. [Creación una Tabla](#creación-una-tabla)
3. [Cómo Realizar Registros](#cómo-realizar-registros)
4. [Cómo Editar Registros](#cómo-editar-registros)
5. [Procedimiento Almacenado](#procedimiento-almacenado)
6. []()
7. []()
8. []()
9. []()
10. []()




---




## Cómo Crear Una BD

Para crear una base de datos en MySQL, lo más común es hacerlo mediante el comando CREATE DATABASE.
Este comando le indica al motor que reserve un espacio donde luego podrás crear tablas, registros, vistas, procedimientos, etc.

Se puede hacer por medio de:

    CREATE DATABASE nombre_de_la_base;

Como por ejemplo:

    CREATE DATABASE tienda;

>Este comando crea una base llamada tienda, lista para empezar a trabajar.

Después de crearla, es importante indicarle a MySQL que deseas trabajar dentro de ella.
Para eso se utiliza:

    USE tienda;

Esto activa la base de datos y permite ejecutar comandos como CREATE TABLE, INSERT, SELECT, etc., directamente dentro de ella.




---




## Creación una Tabla

Para crear una tabla en MySQL se utiliza el comando CREATE TABLE, donde se especifica el nombre de la tabla y los campos que la componen.

Cada campo debe tener un tipo de dato que indique qué clase de información almacenará.

Como por ejemplo:

    CREATE TABLE productos (
        id INT,
        nombre VARCHAR(50),
        precio DECIMAL(10,2),
        stock INT,
        Fecha Datetime
    );

>Esta instrucción crea la tabla productos, con columnas para código (id), nombre, precio, cantidad y fecha.

A veces, especialmente en ejemplos rápidos o documentación, se usa una versión compacta:

    CREATE TABLE productos ( id INT, nombre VARCHAR(50), precio DECIMAL(10,2), stock INT, Fecha Datetime );

>El funcionamiento es exactamente el mismo pues la diferencia es solo estética.


---




## Cómo Realizar Registros

Para agregar datos utilizamos el comando INSERT INTO.
Podemos insertar varios registros en un solo bloque:

    INSERT INTO productos (nombre, precio, stock, Fecha)
    VALUES
        ('Arroz', 3500.00, 50, NOW()),
        ('Huevos', 15000.00, 20, NOW()),
        ('Leche', 4500.00, 35, NOW());

Para el registro, si deseo ingresar la fecha actual puedo usar: 
    
    NOW()

Si deseas registrar una fecha personalizada se puede en formato MySQL: **YYYY-MM-DD HH:MM:SS**

    INSERT INTO productos (id, nombre, precio, stock, Fecha)

    VALUES

    ('02', 'mousepad', '20.000', '30', '2025-01-10 08:00:00')

>Los valores numéricos no necesitan comillas pues 20000 es preferible a '20000'.




---




## Cómo Editar Registros

**Edición de Fechas**

Para actualizar la fecha de un registro en tu tabla productos, simplemente usas el comando UPDATE, indicando:   

* Qué campo quieres cambiar (Fecha)

* Qué valor nuevo quieres poner

* Qué registro quieres afectar (WHERE id = ...)

Ejemplo: 

    UPDATE productos
    SET Fecha = '2025-12-01 10:30:00'
    WHERE id = 2;

Otro Ejemplo Podría Ser:

    UPDATE productos
    SET Fecha = '2025-02-10 09:00:00'
    WHERE nombre = 'Audifonos';





---



## Procedimiento Almacenado

Un procedimiento almacenado (Stored Procedure) es un bloque de código SQL que queda guardado dentro de la base de datos y que se puede ejecutar cuando lo necesites.

Sirve para automatizar consultas, evitar repetir código y mantener la lógica organizada.

    DELIMITER $$

    CREATE PROCEDURE ListarProductos()
    BEGIN
        SELECT id, nombre, precio, stock
        FROM productos;
    END $$

    DELIMITER ;

Algunos Usos:

* Automatizar consultas frecuentes

* Evitar repetir instrucciones SQL

* Mantener el código más limpio

* Agrupar lógica dentro de la base de datos

* Mejorar la organización de un proyecto ADSO

* Para llamarlo

Para correrlo, simplemente usamos:

    CALL ListarProductos();

Esto sirve para automatizar algunas consultas.

**Entrada Filtrada por ID**

    DELIMITER $$

    CREATE PROCEDURE ObtenerProductoPorID(IN p_id INT)

    BEGIN
        SELECT id, nombre, precio, stock
        FROM productos
        Where id = p_id;
    END $$

    DELIMITER ;

Otra forma de presentación:

    CREATE PROCEDURE ObtenerProductoPorID(IN p_id INT) BEGIN SELECT id, nombre, precio, stock FROM productos Where id = p_id; END;

Para llamarlo se requiere de un parametro

    CALL ObtenerProductoPorID('el numero');

Por ejemplo:

    CALL ObtenerProductoPorID(1);




**Ejercicios de Procedimiento Almacenado Para Obtener un Producto por ID**

    DELIMITER $$
    CREATE PROCEDURE InsertarProducto (
        IN p_nombre VARCHAR(100),
        IN p_precio DECIMAL(10,2),
        IN p_stock INT
    )

    BEGIN
    INSERT INTO productos(nombre, precio, stock)
    VALUES (p_nombre, p_precio, p_stock);
    END $$

    DELIMITER ;

Otra Forma de Presentación:

    CREATE PROCEDURE InsertarProducto ( IN p_nombre VARCHAR(100), IN p_precio DECIMAL(10,2), IN p_stock INT ) BEGIN INSERT INTO productos(nombre, precio, stock) VALUES (p_nombre, p_precio, p_stock); END;

Para Llamarlo:

    CALL InsertarProducto('Audifonos', 20.000, 5);

Como tal se nota que se debe ingresar dentro de los parametros los elementos que se van a llenar.

---


## MySQL Triggers

>Presentado por FENIX

3Los triggers son disparadores, es decir bloques de codigo que se ejcutan automaticamente de acuerdo a lo que suceda... (evento) de acuerdo si se elimina, modifica, crea algo.

Sirven para automaitzar proceosos.

Existen diferentes tipos de triggers

After Update
After Insert
After Delete

Before Update
Before Insert
Before Delete

Ejemplo:

    DELIMITER $$

        CREATE TRIGGER productos_before_insert
        BEFORE INSERT ON productos
        
        FOR EACH ROW

        BEGIN
            IF NEW.fecha IS NULL THEN
                SET NEW.FECHA = NOW();
            END IF;
        END $$

    DELIMITER ;


Trigger After Insert

    DELIMITER $$

        CREATE TRIGGER productos_after_insert
        AFTER INSERT ON productos
        FOR EACH ROW
        BEGIN
            INSERT INTO log_productos(mensaje, fecha)
            VALUES (CONCAT('Producto agregado: ', NEW.nombre), NOW());
        END$$
        
    DELIMITER ;


