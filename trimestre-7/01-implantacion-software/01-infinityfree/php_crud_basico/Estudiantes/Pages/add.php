<?php
/*se agregan etiquetas de php*/
/*requerimos de usuario para usar los metodos de validación y no se ingrese por url*/
require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../../Metodos.php");
$ModeloUsuarios=new Usuarios();
$ModeloUsuarios->validateSession();
/*crear objeto cale de la clase Metodos para la seleccion dinamica del materia y docente*/
$ModeloMetodos=new Metodos();
$ModeloMetodos->getMaterias();
$ModeloMetodos->getDocentes();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>
</head>
<body>
    <h1>Registrar Estudiante</h1>
    <!--cuidado con el direccionamiento del accion, los puntos cuentan-->
    <form method="POST" action="../Controladores/add.php">
        Nombre <br>
        <input type="text" name="Nombre" required autocomplete="off" placeholder="Nombre"><br><br>
        Apellido <br>
        <input type="text" name="Apellido" required autocomplete="off" placeholder="Apellido"><br><br>
        Documento <br>
        <input type="text" name="Documento" required autocomplete="off" placeholder="Documento"><br><br>
        Correo <br>
        <input type="email" name="Correo" required autocomplete="off" placeholder="Correo"><br><br>
        Materia <br>
        <select name="Materia" required>
            <option>Seleccione</option>
            <!-- Aqui va la lista de materias dinamicamente----->
            <?php
            #un array de materias que almacena el resultado de la abstracción de la base de datos de materias
            $Materias = $ModeloMetodos->getMaterias();
            #se valida que si se traiga algo de la base de datos
            #asegurarse de que el método getMaterias() devuelva un valor iterable válido.
            $Materias = $ModeloMetodos->getMaterias();
            if ($Materias !== null && is_iterable($Materias)) {
                foreach ($Materias as $Materia) {
                    
                    echo "<option value='".$Materia['MATERIA']."'>".$Materia['MATERIA']."</option>";
                }
            } else {
                echo "<option>No materias found</option>";
            }
            ?>
        </select><br><br>
        Docente <br>
        <select name="Docente" required>
            <option value="">Seleccione</option>
            <!-- Aqui va la lista de materias dinamicamente----->
            <?php
            #un array de materias que almacena el resultado de la abstracción de la base de datos de docentes
            $Docentes = $ModeloMetodos->getDocentes();
            #se valida que si se traiga algo de la base de datos
            if($Docentes != null && is_iterable($Docentes)){
                foreach ($Docentes as $Docente) {
                    #concatenamos el nombre y el apellido
                    ?>
                    <!-- Se guarda el valor en el value de la etiqueta option-->
                    <option value="<?php echo $Docente['NOMBRE'].' '.$Docente['APELLIDO']?>">
                        <?php echo $Docente['NOMBRE'].' '.$Docente['APELLIDO']?>
                    </option>
                    <?php
                }
            }else {
                echo "<option>No docentes found</option>";
            }
            ?>
        </select><br><br>
        Promedio <br>
        <input type="number" name="Promedio" required autocomplete="off" placeholder="Promedio"><br><br>
        <input type="submit" value="Registrar Estudiante">
    </form>
</body>
</html>