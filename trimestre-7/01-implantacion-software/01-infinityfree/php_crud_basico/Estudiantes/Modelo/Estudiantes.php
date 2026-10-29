<?php
require_once("../../Conexion.php");
class Estudiantes extends Conexion
{
    private $db;

    public function __construct()
    {
        // Aquí obtenemos la conexión usando la clase Singleton
        $this->db = Conexion::getInstancia()->getConexion();
    }
    /*public function __construct()
    {
        $this->db = parent::__construct();
    }*/

    /**Metodo para agregar un estudiante */
    /*Se pasara la info menos perfil y estado porque implicitamente esta definida!*/
    /*Toda esa info se pasa por los controladores*/

    public function add($Nombre, $Apellido, $Documento, $Correo, $Materia, $Docente, $Promedio, $Fecha)
    {
        /*un statement es una sentencia sql*/
        /*El id es auto_increment*/

        $statement = $this->db->prepare("INSERT INTO estudiantes(NOMBRE,APELLIDO,DOCUMENTO,CORREO,MATERIA,DOCENTE,PROMEDIO,FECHA_REGISTRO) 
        VALUES(:Nombre,:Apellido,:Documento,:Correo,:Materia,:Docente,:Promedio,:Fecha)");
        $statement->bindParam(":Nombre", $Nombre);
        $statement->bindParam(":Apellido", $Apellido);
        $statement->bindParam(":Documento", $Documento);
        $statement->bindParam(":Correo", $Correo);
        $statement->bindParam(":Materia", $Materia);
        $statement->bindParam(":Docente", $Docente);
        $statement->bindParam(":Promedio", $Promedio);
        $statement->bindParam(":Fecha", $Fecha);
        /*si se inserta correctamente se redirija a la pagina principal del estudiante*/
        if ($statement->execute()) {
            #revisar dirección con cuidado o sino Forbidden
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
        $statement = $this->db->prepare("SELECT * FROM estudiantes");
        $statement->execute();
        /*Un ciclo while para que recorra cada uno de los resultados obtenidos de la bd
        * usamos el while porque no conocemos la cantidad de registros*/
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }

    public function buscar($filtro)
    {
        $conexion = $this->db;
        $sql = "SELECT * FROM estudiantes 
            WHERE ID_ESTUDIANTE LIKE :filtro 
            OR NOMBRE LIKE :filtro 
            OR APELLIDO LIKE :filtro 
            OR DOCUMENTO LIKE :filtro";

        $consulta = $conexion->prepare($sql);
        $valor = "%" . $filtro . "%";
        $consulta->bindParam(':filtro', $valor, PDO::PARAM_STR);
        $consulta->execute();

        if ($consulta->rowCount() > 0) {
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return null;
        }
    }
    /*siguiente paso: Mejorar busqueda filtro con ajax si son más de 100 filas*/


    /*listar la información de un docente*/
    public function getById($Id)
    {
        /*se crea row para un arreglo de los resultados obtenidos de la bd*/
        $rows = null;
        $statement = $this->db->prepare("SELECT * FROM Estudiantes WHERE ID_ESTUDIANTE=:Id");
        $statement->bindParam(":Id", $Id);
        $statement->execute();
        /*Un ciclo while para que recorra cada uno de los resultados obtenidos de la bd*/
        while ($result = $statement->fetch()) {
            $rows[] = $result;
        }
        return $rows;
    }

    public function update($Id, $Nombre, $Apellido, $Documento, $Correo, $Materia, $Docente, $Promedio, $Fecha)
    {
        $statement = $this->db->prepare("UPDATE Estudiantes SET NOMBRE=:Nombre, APELLIDO=:Apellido, 
        DOCUMENTO=:Documento, CORREO=:Correo, MATERIA=:Materia, DOCENTE=:Docente, PROMEDIO=:Promedio, 
        FECHA_REGISTRO=:Fecha WHERE ID_ESTUDIANTE=:Id");
        /*el orden de lo bindParam no influye-solo que esten presentes*/
        /*revisar que el update tenga los mismo parametros que se coloquen en el bindParam*/
        $statement->bindParam(":Id", $Id);
        $statement->bindParam(":Nombre", $Nombre);
        $statement->bindParam(":Apellido", $Apellido);
        $statement->bindParam(":Documento", $Documento);
        $statement->bindParam(":Correo", $Correo);
        $statement->bindParam(":Materia", $Materia);
        $statement->bindParam(":Docente", $Docente);
        $statement->bindParam(":Promedio", $Promedio);
        $statement->bindParam(":Fecha", $Fecha);

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
        $statement = $this->db->prepare("DELETE FROM Estudiantes WHERE ID_ESTUDIANTE=:Id");
        $statement->bindParam(":Id", $Id);
        if ($statement->execute()) {
            header("Location:../Pages/index.php");
        } else {
            header("Location:../Pages/delete.php");
        }
    }
}
