<?php
require_once("../../Conexion.php");
class Docentes extends Conexion
{
    private $db;

    public function __construct() {
        // Aquí obtenemos la conexión usando la clase Singleton
        $this->db = Conexion::getInstancia()->getConexion();
    }
    /*public function __construct()
    {
        $this->db = parent::__construct();
    }*/

    /**Metodo para agregar un docente */
    /*Se pasara la info menos perfil y estado porque implicitamente esta definida!*/
    /*Toda esa info se pasa por los controladores*/
    public function add($Nombre, $Apellido, $Usuario, $Password)
    {
        /*un statement es una sentencia sql*/
        $statement = $this->db->prepare("INSERT INTO Usuarios(Nombre,Apellido,Usuario,Password,Perfil,Estado) 
        VALUES(:Nombre,:Apellido,:Usuario,:Password,'Docente','Activo')");
        #$statement->execute(array($Nombre, $Apellido, $Usuario, $Password));
        $statement->bindParam(":Nombre", $Nombre);
        $statement->bindParam(":Apellido", $Apellido);
        $statement->bindParam(":Usuario", $Usuario);
        $statement->bindParam(":Password", $Password);
        /*si se inserta correctamente se redirija a la pagina principal del docente*/
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/add.php");
        }
    }

    /*listar la información de todos los admin*/
    public function get()
    {
        /*se crea row para un arreglo de los resultados obtenidos de la bd*/
        $rows = null;
        $statement = $this->db->prepare("SELECT * FROM Usuarios WHERE PERFIL='Docente'");
        $statement->execute();
        /*Un ciclo while para que recorra cada uno de los resultados obtenidos de la bd
        * usamos el while porque no conocemos la cantidad de registros*/
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }

    /*listar la información de un docente*/
    public function getById($Id)
    {
        /*se crea row para un arreglo de los resultados obtenidos de la bd*/
        $rows = null;
        $statement = $this->db->prepare("SELECT * FROM Usuarios WHERE PERFIL='Docente'
        AND ID_USUARIO=:Id");
        $statement->bindParam(":Id", $Id);
        $statement->execute();
        /*Un ciclo while para que recorra cada uno de los resultados obtenidos de la bd*/
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }
    /*Como estamos en el docente no vamos a cambiar perfil por eso no lo pasamos*/
    public function update($Id, $Nombre, $Apellido, $Usuario, $Password, $Estado)
    {
        $statement = $this->db->prepare("UPDATE Usuarios SET NOMBRE=:Nombre, APELLIDO=:Apellido, 
        USUARIO=:Usuario, PASSWORD=:Password, ESTADO=:Estado WHERE ID_USUARIO=:Id");
        /*el orden de lo bindParam no influye-solo que esten presentes*/
        $statement->bindParam(":Id", $Id);
        $statement->bindParam(":Nombre", $Nombre);
        $statement->bindParam(":Apellido", $Apellido);
        $statement->bindParam(":Usuario", $Usuario);
        $statement->bindParam(":Password", $Password);
        $statement->bindParam(":Estado", $Estado);
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/edit.php");
        }
    }

    /**
     * Deletes a user from the database
     * @param int $Id The user's Id
     * @return void
     */
    public function delete($Id)
    {
        $statement = $this->db->prepare("DELETE FROM Usuarios WHERE ID_USUARIO=:Id");
        $statement->bindParam(":Id", $Id);
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/delete.php");
        }
    }
}
