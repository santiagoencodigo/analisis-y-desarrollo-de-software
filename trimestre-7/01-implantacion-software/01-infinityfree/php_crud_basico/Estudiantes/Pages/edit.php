<?php
#ver solo el id
#echo $_GET['Id'];

require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../Modelo/Estudiantes.php");
require_once("../../Metodos.php");

$ModeloUsuarios = new Usuarios();
$ModeloUsuarios->validateSession();

$Modelo = new Estudiantes();
#se traer el id por el get-url
$Id = $_GET['Id'];
#ahora se empezara a traer la info-llamamos con el metodo getById
$InformacionEstudiante = $Modelo->getById($Id);

#los métodos genéricos
$ModeloMetodos = new Metodos();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>
</head>

<body>
    <h1>Editar Estudiante</h1>
    <form method="POST" action=" ../Controladores/edit.php">
        <!--un input que oculta el id para luego usarlo con la funcionalidad de editar-->
        <!--se agrega en value el id que se va a editar, es decir la persona que se va a editar-->
        <input type="hidden" name="Id" value="<?php echo $Id; ?>">
        <!--se agrera un foreach para mostrar toda la info qu el metodo getId traiga de la base de datos-->
        <?php
        if ($InformacionEstudiante !== null) {
            foreach ($InformacionEstudiante as $Info) {
        ?>
                Nombre <br>
                <!--usar php para el atributo value hacer un eco que ingrese a cada una de las propiedades.-->
                <input type="text" name="Nombre" required autocomplete="off" placeholder="Nombre"
                    value="<?php echo $Info['NOMBRE']; ?>"><br><br>
                Apellido <br>
                <input type="text" name="Apellido" required autocomplete="off" placeholder="Apellido"
                    value="<?php echo $Info['APELLIDO']; ?>"><br><br>
                Documento <br>
                <input type="text" name="Documento" required autocomplete="off" placeholder="Documento"
                    value="<?php echo $Info['DOCUMENTO']; ?>"><br><br>
                Correo <br>
                <input type="email" name="Correo" required autocomplete="off" placeholder="Correo"
                    value="<?php echo $Info['CORREO']; ?>"><br><br>
                Materia <br>
                <select name="Materia" required>
                    <!--se quita la opción de seleccione para dejar la que tiene actualmente-->
                    <option value="<?php echo $Info['MATERIA']; ?>"><?php echo $Info['MATERIA']; ?></option>
                    <!-- generar de forma dinamico lo antes estaba:<option value="Ingles">Ingles</option>-->
                    <?php
                    $Materias = $ModeloMetodos->getMaterias();
                    if ($Materias !== null && is_iterable($Materias)) {
                        foreach ($Materias as $Materia) {
                    ?>
                            <option value="<?php echo $Materia['MATERIA']; ?>"><?php echo $Materia['MATERIA']; ?></option>
                    <?php
                        }
                    }
                    ?>
                </select><br><br>
                Docente <br>
                <select name="Docente" required>
                    <!--se quita la opción de seleccione para dejar la que tiene actualmente-->
                    <option value="<?php echo $Info['DOCENTE']; ?>"><?php echo $Info['DOCENTE']; ?></option>
                    <?php
                    $Docentes = $ModeloMetodos->getDocentes();
                    if ($Docentes !== null) {
                        foreach ($Docentes as $Docente) {
                    ?>
                    <option value="<?php echo $Docente['NOMBRE'].' '.$Docente['APELLIDO']?>"><?php echo $Docente['NOMBRE'].' '.$Docente['APELLIDO']?></option> 
                    <?php
                        }
                    }
                    ?>
                </select><br><br>
                Promedio <br>
                <input type="number" name="Promedio" required autocomplete="off" placeholder="Promedio"
                value="<?php echo $Info['PROMEDIO']; ?>"><br><br>
        <?php
                #se cierra foreach y condicional
            }
        }
        ?>
        <input type="submit" value="Editar Estudiante">
    </form>
</body>
</html>