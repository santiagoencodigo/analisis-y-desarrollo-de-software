# Importamos la dependencia de MYSQL
import mysql.connector

class Database:
    # Creamos nuestro constructor sin parametros
    def __init__(self):
        # Atributo con el valor none porque inicialmente no tiene nada.
        self.connection = None
    
    # Ahora creamos entonces nuestro metodo (Contexto de Clases)/funcion (Contexto General) connect de la clase Database
    # No tiene otros parametros más que si mismo.        
    # ¿Cual será la misión de este metodo? - Conectar la base de datos.
    def connect(self):
        # Conectamos esta función con nuestra importación de la dependencia
        self.connection = mysql.connector.connect(
            host="localhost", # Estamos en el equipo asi que sí, localhost.
            user="root", # user por defecto
            password="", # Comillas vacias porque no tenemos contraseña.
            # En nuestro contexto el nombre de nuestra base de datos es: operpan_crud_python_practice
            database="operpan_crud_python_practice"
        )
        print("Conectado") # Si las cosas bien, vamos a imprimirlo!

    def get_cursor(self):
        return self.connection.cursor()

    # Para guardar.
    def commit(self):
        self.connection.commit()
            
    # Si ya terminé de hacer lo que tenia que hacer, esta función quitará la conexión con la BD.
    def close(self):
        self.connection.close