# Sintaxis SQL

> Este documento reúne mis apuntes personales sobre SQL, organizados y explicados para facilitar la comprensión de este tema. Aquí encontrarás desde la sintaxis fundamental hasta conceptos más avanzados utilizados en el desarrollo de software dentro del programa ADSO. El objetivo es desmenuzar cada comando, explicar su propósito, mostrar ejemplos prácticos y conectar cada tema con situaciones reales al trabajar con bases de datos.

---

## Tabla de contenido

- [1. Crear una base de datos](#1-crear-una-base-de-datos)
- [2. Crear una tabla](#2-crear-una-tabla)
- [3. Insertar registros](#3-insertar-registros)
- [4. Editar registros](#4-editar-registros)
- [5. Procedimientos almacenados](#5-procedimientos-almacenados)
  - [5.1 Procedimiento básico](#51-procedimiento-básico)
  - [5.2 Procedimiento con parámetros de entrada](#52-procedimiento-con-parámetros-de-entrada)
  - [5.3 Procedimiento para insertar datos](#53-procedimiento-para-insertar-datos)
- [6. Triggers (disparadores)](#6-triggers-disparadores)
  - [6.1 Trigger Before Insert](#61-trigger-before-insert)
  - [6.2 Trigger After Insert](#62-trigger-after-insert)

---

## 1. Crear una base de datos

Para crear una base de datos en MySQL, lo más común es hacerlo mediante el comando `CREATE DATABASE`. Este comando le indica al motor que reserve un espacio donde luego se podrán crear tablas, registros, vistas, procedimientos, etc.

**Sintaxis básica:**

```sql
CREATE DATABASE nombre_de_la_base;
```

**Ejemplo práctico:**

```sql
CREATE DATABASE tienda;
```

> Este comando crea una base de datos llamada `tienda`, lista para empezar a trabajar.

Después de crearla, es importante indicarle a MySQL que se desea trabajar dentro de ella. Para eso se utiliza el comando `USE`.

```sql
USE tienda;
```

> Esto activa la base de datos y permite ejecutar comandos como `CREATE TABLE`, `INSERT`, `SELECT`, etc., directamente dentro de ella.

---

## 2. Crear una tabla

Para crear una tabla en MySQL se utiliza el comando `CREATE TABLE`, donde se especifica el nombre de la tabla y los campos que la componen. Cada campo debe tener un tipo de dato que indique qué clase de información almacenará.

**Sintaxis básica:**

```sql
CREATE TABLE nombre_tabla (
    columna1 tipo_dato,
    columna2 tipo_dato,
    ...
);
```

**Ejemplo práctico:**

```sql
CREATE TABLE productos (
    id INT,
    nombre VARCHAR(50),
    precio DECIMAL(10,2),
    stock INT,
    fecha DATETIME
);
```

> Esta instrucción crea la tabla `productos`, con columnas para el código (`id`), el nombre, el precio, la cantidad en inventario (`stock`) y la fecha.

**Versión compacta:**

A veces, especialmente en ejemplos rápidos o documentación, se usa una versión en una sola línea:

```sql
CREATE TABLE productos ( id INT, nombre VARCHAR(50), precio DECIMAL(10,2), stock INT, fecha DATETIME );
```

> El funcionamiento es exactamente el mismo; la diferencia es solo estética.

---

## 3. Insertar registros

Para agregar datos se utiliza el comando `INSERT INTO`. Se pueden insertar varios registros en un solo bloque.

**Sintaxis básica:**

```sql
INSERT INTO nombre_tabla (columna1, columna2, ...)
VALUES (valor1, valor2, ...);
```

**Ejemplo práctico (múltiples registros):**

```sql
INSERT INTO productos (nombre, precio, stock, fecha)
VALUES
    ('Arroz', 3500.00, 50, NOW()),
    ('Huevos', 15000.00, 20, NOW()),
    ('Leche', 4500.00, 35, NOW());
```

> `NOW()` es una función de MySQL que devuelve la fecha y hora actual del sistema. Es útil cuando se desea registrar automáticamente el momento en que se inserta el dato.

**Insertar con fecha personalizada:**

Si se desea registrar una fecha específica, se puede hacer en el formato MySQL: `YYYY-MM-DD HH:MM:SS`.

```sql
INSERT INTO productos (id, nombre, precio, stock, fecha)
VALUES (2, 'mousepad', 20000, 30, '2025-01-10 08:00:00');
```

> Los valores numéricos no necesitan comillas; por ejemplo, es preferible escribir `20000` en lugar de `'20000'`.

---

## 4. Editar registros

Para actualizar datos existentes se utiliza el comando `UPDATE`, indicando:

- Qué campo(s) se quiere(n) cambiar.
- Qué valor(es) nuevo(s) se asignará(n).
- Qué registro(s) se verá(n) afectado(s) mediante la cláusula `WHERE`.

**Sintaxis básica:**

```sql
UPDATE nombre_tabla
SET columna = nuevo_valor
WHERE condición;
```

**Ejemplo práctico (editar fecha por ID):**

```sql
UPDATE productos
SET fecha = '2025-12-01 10:30:00'
WHERE id = 2;
```

> Este comando actualiza la fecha del producto cuyo `id` es `2`.

**Ejemplo práctico (editar por nombre):**

```sql
UPDATE productos
SET fecha = '2025-02-10 09:00:00'
WHERE nombre = 'Audifonos';
```

> Cuando se usa `WHERE`, es importante asegurarse de que el filtro sea preciso; de lo contrario, se podrían modificar múltiples registros por error.

---

## 5. Procedimientos almacenados

Un **procedimiento almacenado** (Stored Procedure) es un bloque de código SQL que queda guardado dentro de la base de datos y que se puede ejecutar cuando se necesite. Sirve para automatizar consultas, evitar repetir código y mantener la lógica organizada.

**Usos comunes:**

- Automatizar consultas frecuentes.
- Evitar repetir instrucciones SQL.
- Mantener el código más limpio.
- Agrupar lógica dentro de la base de datos.
- Mejorar la organización de un proyecto.

### 5.1 Procedimiento básico

**Sintaxis básica:**

```sql
DELIMITER $$

CREATE PROCEDURE nombre_procedimiento()
BEGIN
    -- Instrucciones SQL
END $$

DELIMITER ;
```

**Ejemplo práctico (listar todos los productos):**

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

> `DELIMITER $$` cambia temporalmente el delimitador de sentencias (que por defecto es `;`) para que MySQL no interprete los `;` internos del procedimiento como el final del comando. Al terminar, se restaura con `DELIMITER ;`.

### 5.2 Procedimiento con parámetros de entrada

Los parámetros permiten que el procedimiento reciba valores al momento de ser llamado, lo que lo hace más flexible y reutilizable.

**Sintaxis básica:**

```sql
DELIMITER $$

CREATE PROCEDURE nombre_procedimiento(IN parametro tipo_dato)
BEGIN
    -- Instrucciones SQL usando el parámetro
END $$

DELIMITER ;
```

**Ejemplo práctico (obtener un producto por ID):**

```sql
DELIMITER $$

CREATE PROCEDURE ObtenerProductoPorID(IN p_id INT)
BEGIN
    SELECT id, nombre, precio, stock
    FROM productos
    WHERE id = p_id;
END $$

DELIMITER ;
```

**Cómo ejecutarlo (con parámetro):**

```sql
CALL ObtenerProductoPorID(1);
```

> El valor `1` se pasa al parámetro `p_id`, y el procedimiento devuelve el producto cuyo `id` coincide con ese valor.

**Versión compacta:**

```sql
CREATE PROCEDURE ObtenerProductoPorID(IN p_id INT) BEGIN SELECT id, nombre, precio, stock FROM productos WHERE id = p_id; END;
```

> La versión compacta es funcional, pero menos legible. Se recomienda usar la versión con indentación para mantener el código claro.

### 5.3 Procedimiento para insertar datos

Los procedimientos también pueden recibir múltiples parámetros para ejecutar operaciones de escritura (INSERT, UPDATE, DELETE).

**Ejemplo práctico (insertar un producto):**

```sql
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
```

**Cómo ejecutarlo:**

```sql
CALL InsertarProducto('Audifonos', 20000, 5);
```

> Al llamar al procedimiento, se deben ingresar los valores en el mismo orden en que fueron definidos los parámetros: nombre, precio y stock.

---

## 6. Triggers (disparadores)

Los **triggers** son bloques de código SQL que se ejecutan automáticamente cuando ocurre un evento específico en una tabla: inserción (`INSERT`), actualización (`UPDATE`) o eliminación (`DELETE`). Sirven para automatizar procesos, mantener la integridad de los datos y registrar auditorías.

**Tipos de triggers según el momento de ejecución:**

| **Momento** | **Evento** | **Nombre** |
|-------------|------------|------------|
| Antes del evento | INSERT | BEFORE INSERT |
| Antes del evento | UPDATE | BEFORE UPDATE |
| Antes del evento | DELETE | BEFORE DELETE |
| Después del evento | INSERT | AFTER INSERT |
| Después del evento | UPDATE | AFTER UPDATE |
| Después del evento | DELETE | AFTER DELETE |

### 6.1 Trigger Before Insert

Se ejecuta **antes** de que se inserte un registro. Es útil para validar o modificar los datos antes de que se guarden.

**Ejemplo práctico (asignar fecha automática si no se proporciona):**

```sql
DELIMITER $$

CREATE TRIGGER productos_before_insert
BEFORE INSERT ON productos
FOR EACH ROW
BEGIN
    IF NEW.fecha IS NULL THEN
        SET NEW.fecha = NOW();
    END IF;
END $$

DELIMITER ;
```

> Este trigger verifica si el campo `fecha` está vacío antes de insertar. Si es así, asigna automáticamente la fecha y hora actual usando `NOW()`. La palabra clave `NEW` hace referencia al registro que se va a insertar.

### 6.2 Trigger After Insert

Se ejecuta **después** de que se inserta un registro. Es útil para registrar acciones en tablas de auditoría o log.

**Ejemplo práctico (registrar en un log cada producto agregado):**

```sql
DELIMITER $$

CREATE TRIGGER productos_after_insert
AFTER INSERT ON productos
FOR EACH ROW
BEGIN
    INSERT INTO log_productos(mensaje, fecha)
    VALUES (CONCAT('Producto agregado: ', NEW.nombre), NOW());
END $$

DELIMITER ;
```

> Cada vez que se inserta un producto, este trigger escribe un mensaje en la tabla `log_productos` con el nombre del producto agregado y la fecha actual. La función `CONCAT` une el texto fijo con el valor del campo `nombre` del nuevo registro.

---

> Gracias por leer.