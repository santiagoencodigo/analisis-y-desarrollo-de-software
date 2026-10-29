<?php
/*para no redundar metodos por ejemplo en el registro de estudiantes con materias y docentes*/
require_once("Conexion.php");
class Metodos extends Conexion{

    private $db;

    public function __construct() {
        // Aquí obtenemos la conexión usando la clase Singleton
        $this->db = Conexion::getInstancia()->getConexion();
    }
    /*public function __construct(){
        $this->db=parent::__construct();
    }*/
    /*listar la información de todos los admin*/
    public function getMaterias(){  
        $rows=null;
        $statement = $this->db->prepare("SELECT * FROM Materias");
        $statement->execute();
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }

    public function getDocentes(){  
        $rows=null;
        $statement = $this->db->prepare("SELECT * FROM Usuarios WHERE PERFIL='Docente'");
        $statement->execute();
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }
}
?>