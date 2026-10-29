<?php
require_once("../Modelo/Estudiantes.php");

if($_POST){
    $ModeloEstudiantes=new Estudiantes();
    #para editar tenemos que enviar el id
    $Id = $_POST["Id"];
    $Nombre = $_POST["Nombre"];
    $Apellido = $_POST["Apellido"]; 
    $Documento = $_POST["Documento"];
    $Correo = $_POST["Correo"];
    $Materia = $_POST["Materia"];
    $Docente = $_POST["Docente"];
    $Promedio = $_POST["Promedio"];
    #la fecha de cuando la infomación fue actualizada.
    $Fecha = date('Y-m-d');
    #hacemos un llamado al metodo update y pasando las variables capturadas por el post
    $ModeloEstudiantes->update($Id,$Nombre, $Apellido, $Documento,$Correo,$Materia,$Docente,$Promedio,$Fecha);
}else{
    header("Location:../../index.php");
}
?>