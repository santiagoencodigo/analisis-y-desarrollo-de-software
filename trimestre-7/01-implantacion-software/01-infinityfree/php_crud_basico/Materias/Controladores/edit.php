<?php
require_once("../Modelo/Materias.php");

if($_POST){
    $ModeloMaterias=new Materias();
    #para editar tenemos que enviar el id
    $Id = $_POST["Id"];
    $Materia = $_POST["Nombre"];
    #hacemos un llamado al metodo update y pasando las variables capturadas por el post
    $ModeloMaterias->update($Id,$Materia);
}else{
    header("Location:../../index.php");
}
?>