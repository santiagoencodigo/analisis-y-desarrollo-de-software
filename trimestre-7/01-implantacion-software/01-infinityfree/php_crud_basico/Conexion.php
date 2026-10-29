<?php
/*Clase para manejar la conexion a la base de datos*/
/*
*Ventajas de esta versión:
*Evita múltiples conexiones innecesarias.
*Mejor separación de responsabilidades.
*Sigue el patrón Singleton.
*No retorna dentro del constructor (lo cual es una mala práctica).
*Es más escalable y mantenible.
*/
class Conexion {
    private static $instancia = null;
    private $db;

    private $driver = "mysql";
    private $host = "localhost:3306";
    private $bd = "pruebanotas";
    private $usuario = "root";
    private $contrasena = "";

    // Constructor privado para evitar instanciación directa
    private function __construct() {
        try {
            $this->db = new PDO(
                "{$this->driver}:host={$this->host};dbname={$this->bd}",
                $this->usuario,
                $this->contrasena
            );
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }

    // Método estático para obtener la instancia
    public static function getInstancia() {
        if (self::$instancia === null) {
            self::$instancia = new self();
        }
        return self::$instancia;
    }

    // Método para obtener el objeto PDO
    public function getConexion() {
        return $this->db;
    }
}
?>
