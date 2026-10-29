<?php
require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../Modelo/Administradores.php");
require_once("../../Metodos.php");

$ModeloUsuarios = new Usuarios();
$ModeloUsuarios->validateSession();

$Modelo = new Administradores();
#se traer el id por el get-url
$Id = $_GET['Id'];
#ahora se empezara a traer la info-llamamos con el metodo getById
$InformacionAdministrador = $Modelo->getById($Id);

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
    <h1>Editar Administrador</h1>
    <form method="POST" action="../Controladores/edit.php">
        <input type="hidden" name="Id" value="<?php echo $Id; ?>">
        <?php
        if ($InformacionAdministrador !== null) {
            foreach ($InformacionAdministrador as $Info) {
        ?>
                Nombre <br>
                <input type="text" name="Nombre" required autocomplete="off" placeholder="Nombre"
                    value="<?php echo $Info['NOMBRE']; ?>"><br><br>
                Apellido <br>
                <input type="text" name="Apellido" required autocomplete="off" placeholder="Apellido"
                    value="<?php echo $Info['APELLIDO']; ?>"><br><br>
                Usuario <br>
                <input type="text" name="Usuario" required autocomplete="off" placeholder="Usuario"
                    value="<?php echo $Info['USUARIO']; ?>"><br><br>
                Password <br>
                <input type="password" name="Password" required autocomplete="off" placeholder="Password"
                    value="<?php echo $Info['PASSWORD']; ?>"><br><br>
                Estado <br>
                <select name="Estado" required>
                    <option value="<?php echo $Info['ESTADO']; ?>"><?php echo $Info['ESTADO']; ?></option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select><br><br>
        <?php
            }
        }
        ?>
        <input type="submit" value="Editar Administrador">
    </form>
</body>

</html>