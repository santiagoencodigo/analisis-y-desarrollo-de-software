# models/usuario.py
class Usuario:
    def __init__(self, nombre, apellido, cedula, cargo, id=None):
        self.id = id
        self.nombre = nombre
        self.apellido = apellido
        self.cedula = cedula
        self.cargo = cargo

    def __str__(self):
        return f"{self.id} - {self.nombre} {self.apellido} - {self.cedula} - {self.cargo}"
