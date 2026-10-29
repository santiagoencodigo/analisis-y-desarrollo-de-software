<?php
require_once("../Modelo/Materias.php");
#si se hizo la peticion post
if($_POST){    
    $Modelo=new Materias();
    $Nombre = $_POST["Nombre"];
    $Modelo->add($Nombre);    
}else{
    header("Location:../../index.php"); 
}
?>