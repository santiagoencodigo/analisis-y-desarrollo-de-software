<?php
require_once("../../Conexion.php");
/*Para hacer uso de las sesiones se usa session_start */
session_start();

/*Herencia de conexión con extends */
class Usuarios extends Conexion{
    
    private $db;

    public function __construct() {
        // Aquí obtenemos la conexión usando la clase Singleton
        $this->db = Conexion::getInstancia()->getConexion();
    }
    /*public function __construct(){
        /**Llamado a los atributos de la clase padre con parent */
        /*$this->db = parent::__construct();
    /*   
    }*/

    /*Crear metodo inicio de sesión */
    public function login($Usuario,$Password){
        /**Prepare recibe una sentencia SQL, en login ya debe existir el registro */
        $statement=$this->db->prepare("SELECT * FROM usuarios WHERE USUARIO=:Usuario AND PASSWORD=:Password");
        /*binParam permiten hacer la relacion entre el parametro $Usuario y la variable declarada :Usuario*/
        $statement->bindParam(":Usuario",$Usuario);
        $statement->bindParam(":Password",$Password);
        /*execute ejecuta la sentencia */
        $statement->execute();
        /*se le pregunta a mysql 
        * si rowCount devuelve el numero de filas afectadas por la sentencia, igual a 1 porque debe ser un solo registro*/
        if($statement->rowCount()==1){
            /*fetch devuelve un array asociativo(clave-valor) con el resultado de la sentencia */
            /*ejemplo: SELECT * FROM usuarios WHERE Usuario='diegop' AND Password=123;*/
            $result=$statement->fetch();
            /*session me permite crear la variable session,dentro de la sesión queremos guardar el nombre, el perfil y el id*/
            /*$_SESSION["puede ser cualquier nombre"]=;*/
            $_SESSION["NOMBRE"]=$result["NOMBRE"]. " " . $result["APELLIDO"];
            $_SESSION["ID"]=$result["ID_USUARIO"];
            $_SESSION["PERFIL"]=$result["PERFIL"];
            /*retorna true si se ejecuta correctamente*/
            return true;
            /*return "Inicio de Sesión Correcto";*/
        }
            /*si devuelvo 0 o mas de un registro retorna false*/
            return false;
            /*return "Ops! Inicio de Sesión Incorrecto";*/

    }
    /*El método que retornará el nombre de la sesión en caso de que exista*/
    public function getNombre(){
        return $_SESSION["NOMBRE"];
    } 
    /**
     * Obtiene el ID de la sesión actual
     * @return int El ID del usuario
     */
    public function getId(){
        return $_SESSION["ID"];
    }
    public function getPerfil(){
        return $_SESSION["PERFIL"];
    }

    /*validar la sesión*/
    /*Es verdad si no existe, si es null redirijamos al login*/
    public function validateSession(){
        if($_SESSION["ID"] == null){
            /*header redirecciona*/
            header('Location: ../../index.php');
        }
    }

    /*Admin, doc y materias son lo módulos que tienen acceso los admins*/
    public function validateSessionAdministrador(){
        /*si existe una sesión !=*/
        if($_SESSION["ID"] != null){
            if($_SESSION["PERFIL"] == "Docente"){
                /*header redirecciona a estudiantes*/
                header('Location: ../../Estudiantes/Pages/index.php');
            }
        }
        
    }

    #opcion de salir
    public function salir(){
        $_SESSION["ID"] = null;
        $_SESSION["PERFIL"] = null;
        $_SESSION["NOMBRE"] = null;
        session_destroy();
        header('Location: ../../index.php');
    }

    #codigo nuevo
    // Verifica si existe el correo en la base de datos
public function existeCorreo($email) {
    $sql = "SELECT * FROM usuarios WHERE CORREO = ?";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([$email]);
    return $stmt->rowCount() > 0;
}

// Guarda un token de recuperación y su fecha de expiración (1 hora)
public function guardarToken($email, $token) {
    $sql = "UPDATE usuarios 
            SET token_recuperacion = ?, token_expira = DATE_ADD(NOW(), INTERVAL 1 HOUR) 
            WHERE CORREO = ?";
    $stmt = $this->db->prepare($sql);
    return $stmt->execute([$token, $email]);
}

// Verifica si el token es válido y no ha expirado
public function verificarToken($token) {
    $sql = "SELECT * FROM usuarios 
            WHERE token_recuperacion = ? AND token_expira > NOW()";
    $stmt = $this->db->prepare($sql);
    $stmt->execute([$token]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

// Actualiza la contraseña del usuario e invalida el token
public function actualizarContrasena($usuario_id, $nueva_contrasena) {
    $hash = password_hash($nueva_contrasena, PASSWORD_BCRYPT);
    $sql = "UPDATE usuarios 
            SET PASSWORD = ?, token_recuperacion = NULL, token_expira = NULL 
            WHERE ID_USUARIO = ?";
    $stmt = $this->db->prepare($sql);
    return $stmt->execute([$hash, $usuario_id]);
}

}
?>