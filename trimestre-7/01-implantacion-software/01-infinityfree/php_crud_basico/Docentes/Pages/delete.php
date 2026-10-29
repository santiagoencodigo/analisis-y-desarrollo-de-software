<?php
require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../Modelo/Docentes.php");

$ModeloUsuarios = new Usuarios();
$ModeloUsuarios->validateSession();

$Modelo = new Docentes();
#se traer el id por el get-url
$Id = $_GET['Id'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>
</head>
<body>
    <h1>Eliminar Docente</h1>
    <form method="POST" action="../Controladores/delete.php">
        <input type="hidden" name="Id" value="<?php echo $Id ?>">
        <p>¿Estas seguro que deseas eliminar este docente?</p>
        <input type="submit" value="Eliminar Docente">
    </form>
</body>
</html>