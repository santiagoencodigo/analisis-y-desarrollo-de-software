# services/usuario_service.py
from models.usuario import Usuario

class UsuarioService:
    def __init__(self, db):
        self.db = db

    def crear(self, usuario):
        # usuario es una instancia de Usuario sin id (o con id None)
        cursor = self.db.get_cursor()
        query = "INSERT INTO usuarios (nombre, apellido, cedula, cargo) VALUES (%s, %s, %s, %s)"
        valores = (usuario.nombre, usuario.apellido, usuario.cedula, usuario.cargo)
        cursor.execute(query, valores)
        self.db.commit()
        # Obtener el id generado y asignarlo al objeto usuario
        usuario.id = cursor.lastrowid
        return usuario  # opcional

    def listar(self):
        cursor = self.db.get_cursor()
        cursor.execute("SELECT id, nombre, apellido, cedula, cargo FROM usuarios")
        datos = cursor.fetchall()
        usuarios = []
        for fila in datos:
            # fila: (id, nombre, apellido, cedula, cargo)
            usuario = Usuario(fila[1], fila[2], fila[3], fila[4], fila[0])
            usuarios.append(usuario)
        return usuarios

    def obtener_por_id(self, id_usuario):
        cursor = self.db.get_cursor()
        cursor.execute("SELECT id, nombre, apellido, cedula, cargo FROM usuarios WHERE id = %s", (id_usuario,))
        fila = cursor.fetchone()
        if fila:
            return Usuario(fila[1], fila[2], fila[3], fila[4], fila[0])
        return None

    def actualizar(self, usuario):
        # usuario debe tener id, y los campos a actualizar
        cursor = self.db.get_cursor()
        query = "UPDATE usuarios SET nombre=%s, apellido=%s, cedula=%s, cargo=%s WHERE id=%s"
        valores = (usuario.nombre, usuario.apellido, usuario.cedula, usuario.cargo, usuario.id)
        cursor.execute(query, valores)
        self.db.commit()

    def eliminar(self, id_usuario):
        cursor = self.db.get_cursor()
        cursor.execute("DELETE FROM usuarios WHERE id=%s", (id_usuario,))
        self.db.commit()