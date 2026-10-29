<?php
/*se agregan etiquetas de php*/
/*requerimos de usuario para usar los metodos de validación y no se ingrese por url*/
require_once("../../Usuarios/Modelo/Usuarios.php");
/*ahora requerimos a los estudiantes para que se muestren en la tabla*/
require_once("../Modelo/Estudiantes.php");
#declaramos el objeto
$ModeloUsuario = new Usuarios();
#usar el metodo de validarSesion
$ModeloUsuario->validateSession();
#creamos el objeto de estudiantes
$Modelo = new Estudiantes();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css">
    <style>
        th,
        td {
            white-space: nowrap;
            font-size: 14px;
        }
    </style>
</head>

<body>

    <div class="container-fluid mt-4">
        <div class="row">
            <!-- Columna izquierda: Menú -->
            <div class="col-md-3 bg-light p-3">
                <?php
                if ($ModeloUsuario->getPerfil() == 'Docente') {
                ?>
                    <h1 class="h4">Menú Docente</h1>
                    <a href="#">Estudiantes</a><br>
                    <a href="../../Usuarios/Controladores/Salir.php">Salir</a>
                <?php
                } else {
                ?>
                    <h1 class="h4">Menú Administrador</h1>
                    <a href="../../Administradores/Pages/index.php">Administradores</a><br>
                    <a href="../../Docentes/Pages/index.php">Docentes</a><br>
                    <a href="../../Materias/Pages/index.php">Materias</a><br>
                    <a href="#">Estudiantes</a><br>
                    <a href="../../Usuarios/Controladores/Salir.php">Salir</a>
                <?php
                }
                ?>
                <h3 class="h6 mt-3">Bienvenido: <?php echo $ModeloUsuario->getNombre(); ?><br>
                    Perfil: <?php echo $ModeloUsuario->getPerfil(); ?></h3>

                <a href="add.php" target="_blank" class="btn btn-sm btn-success mt-3">Registrar Estudiantes</a>
            </div>

            <!-- Columna derecha: Tabla -->
            <div class="col-md-9">
                <h1>Estudiantes</h1>
                <!-- Barra de búsqueda
                <div class="mb-3">
                    <input type="text" id="buscarEstudiante" class="form-control" placeholder="Buscar por ID o Nombre...">
                </div> -->
                <form method="GET" class="mb-3">
                    <input type="text" name="busqueda" class="form-control" placeholder="Buscar por ID, Nombre, Apellido o Documento" value="<?php echo isset($_GET['busqueda']) ? $_GET['busqueda'] : ''; ?>">
                    <button type="submit" class="btn btn-primary mt-2">Buscar</button>
                </form>
                
                <div class="table-responsive">
                    <table class="table table-primary table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Documento</th>
                                <th>Correo</th>
                                <th>Materia</th>
                                <th>Docente</th>
                                <th>Promedio</th>
                                <th>Fecha de Registro</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            #$Estudiantes = $Modelo->get();
                            if (isset($_GET['busqueda']) && !empty($_GET['busqueda'])) {
                                $Estudiantes = $Modelo->buscar($_GET['busqueda']);
                            } else {
                                $Estudiantes = $Modelo->get();
                            }

                            if ($Estudiantes !== null) {
                                foreach ($Estudiantes as $Estudiante) {
                            ?>
                                    <tr>
                                        <td><?php echo $Estudiante['ID_ESTUDIANTE']; ?></td>
                                        <td><?php echo $Estudiante['NOMBRE']; ?></td>
                                        <td><?php echo $Estudiante['APELLIDO']; ?></td>
                                        <td><?php echo $Estudiante['DOCUMENTO']; ?></td>
                                        <td><?php echo $Estudiante['CORREO']; ?></td>
                                        <td><?php echo $Estudiante['MATERIA']; ?></td>
                                        <td><?php echo $Estudiante['DOCENTE']; ?></td>
                                        <td><?php echo $Estudiante['PROMEDIO']; ?>%</td>
                                        <td><?php echo $Estudiante['FECHA_REGISTRO']; ?></td>
                                        <td>
                                            <a href="edit.php?Id=<?php echo $Estudiante['ID_ESTUDIANTE']; ?>" class="btn btn-sm btn-primary" target="_blank">Editar</a>
                                            <a href="delete.php?Id=<?php echo $Estudiante['ID_ESTUDIANTE']; ?>" class="btn btn-sm btn-danger" target="_blank">Eliminar</a>
                                        </td>
                                    </tr>
                            <?php
                                }
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
    <!--
    <script>
        document.getElementById('buscarEstudiante').addEventListener('keyup', function() {
            const filtro = this.value.toLowerCase();
            const filas = document.querySelectorAll('tbody tr');

            filas.forEach(fila => {
                const id = fila.children[0].textContent.toLowerCase();
                const nombre = fila.children[1].textContent.toLowerCase();

                if (id.includes(filtro) || nombre.includes(filtro)) {
                    fila.style.display = '';
                } else {
                    fila.style.display = 'none';
                }
            });
        });
    </script>-->

</body>

</html>