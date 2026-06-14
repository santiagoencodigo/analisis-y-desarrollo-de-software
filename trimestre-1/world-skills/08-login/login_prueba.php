<?php

    //conectar la base de datos
    $conn = new mysqli('localhost','root','','login_prueba');

    if($conn->connect_error){
        die("conexion fallida" . $conn->connect_error);
        echo "conexion fallida";
    } else {
        echo "conexion exitosa";
    }
    //Captura datos del formulario

    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    $conn->close();

?>