# Creación de Base de Datos

A continuación se va a encontrar un repaso de diferentes temas respecto a una base de datos, esto lo hago para reforzar mis conocimientos en bases de datos por lo que es un seguimiento de la clase dada por el instructor william herreño el día primero del mes de diciembre del año 2025.

Por lo que la metodología será una explicación de lo que se esta realizando.

Se pide ingresar diferentes registros en la tabla creada log_empleados

    INSERT INTO log_empleados (empleado_id, accion, fecha)
    VALUES
    (1, "Registrar"),
    (2, "Crear Cuenta"),
    (3, "Borrar Cuenta"),
    (4, "Crear Hoja de Calculo"),
    (5, "Crear Documento Word"),


A partir de esto se debe crear un trigger:

    CREATE TRIGGER tr_empleado_insert
    AFTER INSERT ON empleados
    FOR EACH ROW 
    BEGIN
        INSERT INTO log_empleado (empleado_id, accion, fecha)
    VALUES (NEW.id, 'INSERT', NOW());
    END$$
    GO

---

Vamos a crear una tabla

    CREATE TABLE HistoriaEliminacion(
    codigo int identity(1,1) primary key,
    fecha date,
    accion varchar(100),
    usuario varchar(100)
    );


Vamos a crear un trigger

    Create Trigger Tr_insert_cliente
    on empleados for Delete
    as
    Begin
    Insert Into HistoriaEliminacion(fecha, accion, usuario)
    values(getdate(), 'Se elimino un cliente', user)
    end





---





## Notas - Sección nueva en la BD


1. Tabla1: Notas (ADSO, Nota1, Nota2)
2. Tabla2: LogNotas(id, accion, ficha)
3. Trigger: BorreNotas (getdate())

Por lo que entonces: Primer Paso, **primera tabla:**

    create table Notas 
    (ADSO_Materias varchar(50),  
    Nota1 int, 
    Nota2 int);

Segundo Paso, **Segunda Tabla:**

    create table LogNotas (
    id_logNotas int,
    accion_logNotas varchar(50),
    ficha_logNotas int);

Tercer paso, **Tercera Tabla: Para Guardar Información Eliminada**

    create table HistoriaEliminacion_Notas (
        ADSO_Materias varchar(50),  
        Nota1 int, 
        Nota2 int
    );

Cuarto Paso, **Crear Triger**

    CREATE TRIGGER Tr_LogNotas
    ON LogNotas
    FOR DELETE
    AS
    BEGIN
        INSERT INTO HistoriaEliminacion_Notas (ADSO_Materias, Nota1, Nota2)
        SELECT 'Registro Eliminado', 'Se eliminó una nota', SUSER_SNAME()
    END;

Quinto Paso, **Realizar Registros**





---



## Ejemplo con Trigger SQL

A continuación vamos con el segundo ejercicio del taller despues de una exposiicón de Trigger SQL

Crearemos dos tablas en una base de datos

    CREATE TABLE empleados (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre VARCHAR(80),
        salario DECIMAL(10,2)
    );
    GO

    CREATE TABLE historial (
        id INT IDENTITY(1,1) PRIMARY KEY,
        empleado_id INT,
        nombre VARCHAR(80),
        salario DECIMAL(10,2),
        fecha DATETIME
    );
    GO

Vamos el a crear el Trigger

    create trigger trg_insert_trabajadores
    ON trabajadores
    AFTER INSERT
    AS
    BEGIN
        INSERT INTO historial (empleado_id, nombre, salario, fecha)
        SELECT id, nombre, salario, GETDATE()
        FROM inserted;
    END;
    GO

Y agregaremos unos empleados, unos valores

    INSERT INTO trabajadores (nombre,salario)
    VALUES
    ('Carlos Lopez', 1500000),
    ('Santiago Hernandez', 1500000),
    ('Cristian Motta', 1500000);

    GO
