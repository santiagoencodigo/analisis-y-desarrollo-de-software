# services/solicitud_empleado_service.py
from models.solicitud_empleado import SolicitudEmpleado

class SolicitudEmpleadoService:
    def __init__(self, db):
        self.db = db

    def crear(self, solicitud):
        # solicitud es una instancia sin id_solicitud, y probablemente sin fecha (se genera en BD)
        cursor = self.db.get_cursor()
        query = "INSERT INTO solicitudes (tipo_solicitud, id_empleado) VALUES (%s, %s)"
        valores = (solicitud.tipo_solicitud, solicitud.id_empleado)
        cursor.execute(query, valores)
        self.db.commit()
        solicitud.id_solicitud = cursor.lastrowid
        # Para obtener la fecha generada, podemos hacer una consulta adicional o usar NOW() en la inserción y luego leerla.
        # Opción: después del commit, consultar la fecha:
        cursor.execute("SELECT fecha_subida FROM solicitudes WHERE id_solicitud = %s", (solicitud.id_solicitud,))
        fecha = cursor.fetchone()[0]
        solicitud.fecha_subida = fecha
        return solicitud

    def listar(self):
        cursor = self.db.get_cursor()
        cursor.execute("SELECT id_solicitud, tipo_solicitud, fecha_subida, id_empleado FROM solicitudes")
        datos = cursor.fetchall()
        solicitudes = []
        for fila in datos:
            solicitud = SolicitudEmpleado(fila[1], fila[2], fila[3], fila[0])
            solicitudes.append(solicitud)
        return solicitudes

    def obtener_por_id(self, id_solicitud):
        cursor = self.db.get_cursor()
        cursor.execute("SELECT id_solicitud, tipo_solicitud, fecha_subida, id_empleado FROM solicitudes WHERE id_solicitud = %s", (id_solicitud,))
        fila = cursor.fetchone()
        if fila:
            return SolicitudEmpleado(fila[1], fila[2], fila[3], fila[0])
        return None

    def listar_por_empleado(self, id_empleado):
        cursor = self.db.get_cursor()
        cursor.execute("SELECT id_solicitud, tipo_solicitud, fecha_subida, id_empleado FROM solicitudes WHERE id_empleado = %s", (id_empleado,))
        datos = cursor.fetchall()
        solicitudes = []
        for fila in datos:
            solicitud = SolicitudEmpleado(fila[1], fila[2], fila[3], fila[0])
            solicitudes.append(solicitud)
        return solicitudes

    def eliminar(self, id_solicitud):
        cursor = self.db.get_cursor()
        cursor.execute("DELETE FROM solicitudes WHERE id_solicitud=%s", (id_solicitud,))
        self.db.commit()

    # Opcional: actualizar (si se permite cambiar tipo_solicitud, por ejemplo)
    def actualizar(self, solicitud):
        cursor = self.db.get_cursor()
        query = "UPDATE solicitudes SET tipo_solicitud=%s WHERE id_solicitud=%s"
        valores = (solicitud.tipo_solicitud, solicitud.id_solicitud)
        cursor.execute(query, valores)
        self.db.commit()