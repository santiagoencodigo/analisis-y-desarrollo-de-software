 <?php
 /*name tiene las variables*/
 require_once("../Modelo/Usuarios.php");

 /*Verificar que se hace un petición post */
 if($_POST){
    #echo "POST";
    /*Recibir los datos por POST tal cual como se escribio en el name*/
    #echo $Usuario=$_POST["Usuario"];
    #echo $Password=$_POST["Contrasena"];
    $Usuario=$_POST["Usuario"];
    $Password=$_POST["Contrasena"];
    /*crear un objeto del modelo de usuarios*/ 
    $Modelo=new Usuarios();
    /*Llamar al metodo login del modelo de usuarios*/
    /*crear una condicional que retornar el verdadero o falso segun login*/
    if($Modelo->login($Usuario,$Password)){
        header("Location:../../Estudiantes/Pages/index.php");
    }else{
        /*si el inicio fue erroneo vuelve al index*/
        header("Location:../../index.php");
    }
}else{
    #echo "NO POST";
    header("Location:../../Pages/index.php");
}
 ?>
 