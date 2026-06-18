class SolicitudEmpleado:
    def __init__(self, tipo_solicitud, fecha_subida, id_empleado, id_solicitud=None):
        # Completa con los atributos correctos
        self.id_solicitud = id_solicitud
        self.tipo_solicitud = tipo_solicitud
        self.fecha_subida = fecha_subida
        self.id_empleado = id_empleado

    def __str__(self):
        return f"{self.id_solicitud} - {self.tipo_solicitud} - {self.fecha_subida} - Empleado: {self.id_empleado}"
