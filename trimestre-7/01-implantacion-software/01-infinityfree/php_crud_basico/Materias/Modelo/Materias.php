<?php
require_once("../../Conexion.php");
class Materias extends Conexion{

    private $db;

    public function __construct() {
        // Aquí obtenemos la conexión usando la clase Singleton
        $this->db = Conexion::getInstancia()->getConexion();
    }
    /*public function __construct(){
        $this->db=parent::__construct();
    }*/

    /**Metodo para agregar un administrador */
    public function add($Materia){
        $statement = $this->db->prepare("INSERT INTO Materias(Materia) VALUES(:Materia)");
        $statement->bindParam(":Materia", $Materia);
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/add.php");
        }
    }

    /*listar la información de todos los admin*/
    public function get(){  
        $rows=null;
        $statement = $this->db->prepare("SELECT * FROM Materias");
        $statement->execute();
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }
    
     /*listar la información de un admin*/
    public function getById($Id){ 
        $rows=null;
        $statement = $this->db->prepare("SELECT * FROM Materias WHERE ID_MATERIA=:Id");
        $statement->bindParam(":Id", $Id);
        $statement->execute();
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;

    }

    public function update($Id,$Materia){
        $statement = $this->db->prepare("UPDATE Materias SET MATERIA=:Materia WHERE ID_MATERIA=:Id");
        $statement->bindParam(":Id", $Id);
        $statement->bindParam(":Materia", $Materia);
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/edit.php");
        }
    }

    public function delete($Id){       
        $statement = $this->db->prepare("DELETE FROM Materias WHERE ID_MATERIA=:Id");
        $statement->bindParam(":Id", $Id);
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/delete.php");
        }
    }
}
?>