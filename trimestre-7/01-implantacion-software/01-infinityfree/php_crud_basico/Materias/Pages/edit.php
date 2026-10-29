<?php
require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../Modelo/Materias.php");
require_once("../../Metodos.php");

$ModeloUsuarios = new Usuarios();
$ModeloUsuarios->validateSession();

$Modelo = new Materias();
#se traer el id por el get-url
$Id = $_GET['Id'];
#ahora se empezara a traer la info-llamamos con el metodo getById
$InformacionMateria = $Modelo->getById($Id);

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
    <h1>Editar Materia</h1>
    <form method="POST" action="../Controladores/edit.php">
        <input type="hidden" name="Id" value="<?php echo $Id; ?>">
        Nombre <br>
        <?php
        $Materias = $ModeloMetodos->getMaterias();
        if ($InformacionMateria !== null) {
            foreach ($InformacionMateria as $Info) {
        ?>
                <input type="text" name="Nombre" required autocomplete="off" placeholder="Nombre Materia"
                    value="<?php echo $Info['MATERIA']; ?>"><br><br>

        <?php
            }
        }
        ?>
        <input type="submit" value="Editar Materia">
    </form>
</body>

</html>