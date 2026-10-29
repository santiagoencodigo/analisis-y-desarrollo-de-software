<?php
/*se agregan etiquetas de php*/
/*requerimos de usuario para usar los metodos de validación y no se ingrese por url*/
require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../Modelo/Materias.php");

#declaramos el objeto
$ModeloUsuario = new Usuarios();
#usar el metodo de validarSesion
#$ModeloUsuario->validateSession();
$ModeloUsuario->validateSessionAdministrador();

#creamos el objeto de materias
$Modelo = new Materias();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>
</head>

<body>
    <h1>
        <a href="../../Administradores/Pages/index.php">Administradores</a> -
        <a href="../../Docentes/Pages/index.php">Docentes</a> -
        <a href="#">Materias</a> -
        <a href="../../Estudiantes/Pages/index.php">Estudiantes</a> -
        <a href="../../Usuarios/Controladores/Salir.php">Salir</a>
    </h1>
    <h3>
        Bienvenido: <?php echo $ModeloUsuario->getNombre(); ?> -
        Perfil: <?php echo $ModeloUsuario->getPerfil(); ?>

    </h3>
     <!--agregar target para abrir en nueva pestaña-->
    <a href="add.php" target="_blank">Registrar Materia</a><br><br>
    <table border="1">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Acciones</th>
        </tr>
        <?php
        $Materias = $Modelo->get();
        if ($Materias !== null) {
            foreach ($Materias as $Materia) {
        ?>
                <tr>
                    <td><?php echo $Materia['ID_MATERIA']; ?></td>
                    <td><?php echo $Materia['MATERIA']; ?></td>
                    <td>
                        <!--concatenamos de una vez el id-->
                        <a href="edit.php?Id=<?php echo $Materia['ID_MATERIA']; ?>" target="_blank">Editar</a>
                        <a href="delete.php?Id=<?php echo $Materia['ID_MATERIA']; ?>" target="_blank">Eliminar</a>
                    </td>
                </tr>
        <?php
            }
        }
        ?>
    </table>
</body>

</html>