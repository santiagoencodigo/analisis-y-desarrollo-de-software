<?php
/*se agregan etiquetas de php*/
/*requerimos de usuario para usar los metodos de validación y no se ingrese por url*/
require_once("../../Usuarios/Modelo/Usuarios.php");
require_once("../Modelo/Docentes.php");

#declaramos el objeto
$ModeloUsuario = new Usuarios();
#usar el metodo de validarSesion
#$ModeloUsuario->validateSession();
$ModeloUsuario->validateSessionAdministrador();

$Modelo = new Docentes();
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
        <a href="#">Docentes</a> -
        <a href="../../Materias/Pages/index.php">Materias</a> -
        <a href="../../Estudiantes/Pages/index.php">Estudiantes</a> -
        <a href="../../Usuarios/Controladores/Salir.php">Salir</a>
    </h1>
    <h3>
        Bienvenido: <?php echo $ModeloUsuario->getNombre(); ?> -
        Perfil: <?php echo $ModeloUsuario->getPerfil(); ?>

    </h3>
    <a href="add.php" target="_blank">Registrar Docente</a><br><br>

    <!-- Barra de búsqueda por ID o Nombre -->
    <input type="text" id="busqueda" placeholder="Buscar por ID o Nombre" style="margin-bottom: 10px;">

    <table border="1">
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Usuario</th>
            <th>Perfil</th>
            <th>Estado</th>
            <th>Acciones</th>
        </tr>
        <?php
        $Docentes = $Modelo->get();
        if ($Docentes !== null) {
            foreach ($Docentes as $Docente) {
        ?>
                <tr>
                    <td><?php echo $Docente['ID_USUARIO']; ?></td>
                    <td><?php echo $Docente['NOMBRE']; ?></td>
                    <td><?php echo $Docente['APELLIDO']; ?></td>
                    <td><?php echo $Docente['USUARIO']; ?></td>
                    <td><?php echo $Docente['PERFIL']; ?></td>
                    <td><?php echo $Docente['ESTADO']; ?></td>
                    <td>
                        <a href="edit.php?Id=<?php echo $Docente['ID_USUARIO']; ?>" target="_blank">Editar</a>
                        <a href="delete.php?Id=<?php echo $Docente['ID_USUARIO']; ?>" target="_blank">Eliminar</a>
                    </td>
                </tr>
        <?php
            }
        }
        ?>
    </table>

    <script>
         // Filtrar tabla
        document.getElementById("busqueda").addEventListener("keyup", function() {
            const filtro = this.value.toLowerCase();
            const filas = document.querySelectorAll("table tr");

            filas.forEach((fila, index) => {
                // Saltar la primera fila que es el encabezado
                if (index === 0) return;

                const id = fila.cells[0].textContent.toLowerCase();
                const nombre = fila.cells[1].textContent.toLowerCase();

                const coincide = id.includes(filtro) || nombre.includes(filtro);
                fila.style.display = coincide ? "" : "none";
            });
        });
    </script>

</body>

</html>