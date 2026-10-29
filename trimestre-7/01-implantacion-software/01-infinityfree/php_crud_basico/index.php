<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Notas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css">

</head>

<body style="background-color: #5dade2">
    <div class="container-fluid d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="row">
            <div class="col">
                <h1 class="text-light">Inicio de Sesión</h1>
                <form method="POST" action="Usuarios/Controladores/Login.php" class="text-light">
                    <div class="form-floating mb-3">
                        <input type="text" name="Usuario" autocomplete="off" placeholder="Usuario" class="form-control" id="floatingInput">
                        <label for="floatingInput">Usuario</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" name="Contrasena" required autocomplete="off" class="form-control" id="floatingPassword" placeholder="Contraseña">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <input type="submit" class="btn btn-success btn-lg" value="Iniciar Sesión">
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>