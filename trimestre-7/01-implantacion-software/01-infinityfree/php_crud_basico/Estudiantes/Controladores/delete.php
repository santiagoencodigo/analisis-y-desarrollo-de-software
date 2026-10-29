<?php
require_once("../Modelo/Estudiantes.php");

#se envió el id por get pero se envia por post
if($_POST){
    $Modelo=new Estudiantes();
    $Id = $_POST["Id"];
    $Modelo->delete($Id);    
}else{
    header("Location:../../index.php"); 
}
?>