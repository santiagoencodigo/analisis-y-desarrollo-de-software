<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Cronometro WordSkills 2026</title>
</head>
<body>

    <div class="layout_cronometro">
        <div class="layout_cronometro__logo">
            <img src=./assets/img/logo.png alt="logo Word Skills">
        </div>
    
        <div class="habilidad">
            <?php echo htmlspecialchars($_POST["habilidad"])?>
            <!-- <h4>habilidad</h4> -->
        </div>

        <div class="modulo">
            <?php echo htmlspecialchars($_POST["modulo"])?>
            <!-- <h4>modulo</h4> -->
        </div>

        <div class="tiempo">

            <div class="hora">
                <span id="horas"><?php echo htmlspecialchars($_POST["horas"])?></span>
                <h4>horas</h4>
            </div>

            <div class="minuto">
                <span id="minutos"><?php echo htmlspecialchars($_POST["minutos"])?></span>
                <h4>minutos</h4>
            </div>

            <div class="segundo">
                <span id="segundos"><?php echo htmlspecialchars($_POST["segundos"])?></span>
                <h4>segundos</h4>
            </div>

            <div class="temporizador"></div>
        </div>
    </div>

    <script src="main.js"></script>

    <!-- <div class="container">
        <div class="header">
            <img src="./assets/img/logo.png">
            <h1 id="h1-tecnologia-web">Tecnologías Web</h1>
            <p id="h2-frontend">Front End</p>
        </div>
        
        <div class="main">
            <div class="cronometro">
                <div class="Tiempo">
                    <span>02</span>
                </div>
                <div class="nombreTiempo">
                    <p>HORAS</span>
                </div>
            </div>

            <div class="cronometro">
                <div class="Tiempo">
                    <span>59</span>
                </div>
                <div class="nombreTiempo">
                    <p>MINUTOS</span>
                </div>
            </div>

            <div class="cronometro">
                <div class="Tiempo">
                    <span>59</span>
                </div>
                <div class="nombreTiempo">
                    <p>SEGUNDOS</span>
                </div>
            </div>
        </div>
    </div> -->
    
</body>
</html>
    