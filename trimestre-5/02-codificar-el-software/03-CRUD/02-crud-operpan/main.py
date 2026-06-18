# main.py
from config.db import Database
from services.usuario_service import UsuarioService
from services.solicitud_empleado_service import SolicitudEmpleadoService
from models.usuario import Usuario
from models.solicitud_empleado import SolicitudEmpleado

def main():
    # Crear objeto de conexión a la base de datos
    db = Database()
    db.connect()

    # Crear los servicios pasando la conexión (inyección de dependencias)
    usuario_service = UsuarioService(db)
    solicitud_service = SolicitudEmpleadoService(db)

    while True:
        # Menú principal: elegir qué entidad gestionar
        print("\n=== MENÚ PRINCIPAL ===")
        print("1. Gestionar Usuarios")
        print("2. Gestionar Solicitudes")
        print("3. Salir")
        opcion_principal = input("Opción: ")

        if opcion_principal == "1":
            # Submenú para usuarios
            while True:
                print("\n--- USUARIOS ---")
                print("1. Crear usuario")
                print("2. Listar usuarios")
                print("3. Actualizar usuario")
                print("4. Eliminar usuario")
                print("5. Volver al menú principal")
                op = input("Opción: ")

                if op == "1":
                    nombre = input("Nombre: ")
                    apellido = input("Apellido: ")
                    cedula = input("Cédula: ")
                    cargo = input("Cargo: ")
                    # Se crea un objeto Usuario (sin id, se generará en la BD)
                    usuario = Usuario(nombre, apellido, cedula, cargo)
                    usuario_service.crear(usuario)
                    print("Usuario creado correctamente.")

                elif op == "2":
                    usuarios = usuario_service.listar()
                    if not usuarios:
                        print("No hay usuarios registrados.")
                    else:
                        for u in usuarios:
                            print(u)  # Usa el método __str__ definido en el modelo

                elif op == "3":
                    id_usuario = int(input("ID del usuario a actualizar: "))
                    # Primero obtenemos el usuario actual (opcional, pero pedimos todos los datos)
                    nombre = input("Nuevo nombre: ")
                    apellido = input("Nuevo apellido: ")
                    cedula = input("Nueva cédula: ")
                    cargo = input("Nuevo cargo: ")
                    usuario = Usuario(nombre, apellido, cedula, cargo, id_usuario)
                    usuario_service.actualizar(usuario)
                    print("Usuario actualizado.")

                elif op == "4":
                    id_usuario = int(input("ID del usuario a eliminar: "))
                    usuario_service.eliminar(id_usuario)
                    print("Usuario eliminado (si existía).")

                elif op == "5":
                    break  # Vuelve al menú principal

                else:
                    print("Opción no válida.")

        elif opcion_principal == "2":
            # Submenú para solicitudes
            while True:
                print("\n--- SOLICITUDES ---")
                print("1. Crear solicitud")
                print("2. Listar todas las solicitudes")
                print("3. Listar solicitudes por empleado")
                print("4. Eliminar solicitud")
                print("5. Volver al menú principal")
                op = input("Opción: ")

                if op == "1":
                    # Mostrar tipos de solicitud posibles (según el ENUM)
                    print("Tipos permitidos: permiso, incapacidad médica, cambio de turno, vacaciones, certificado")
                    tipo = input("Tipo de solicitud: ")
                    id_empleado = int(input("ID del empleado: "))
                    solicitud = SolicitudEmpleado(tipo, None, id_empleado)  # fecha_subida se genera en la BD
                    solicitud_service.crear(solicitud)
                    print("Solicitud creada. Fecha asignada: ", solicitud.fecha_subida)

                elif op == "2":
                    solicitudes = solicitud_service.listar()
                    if not solicitudes:
                        print("No hay solicitudes.")
                    else:
                        for s in solicitudes:
                            print(s)

                elif op == "3":
                    id_empleado = int(input("ID del empleado: "))
                    solicitudes = solicitud_service.listar_por_empleado(id_empleado)
                    if not solicitudes:
                        print("El empleado no tiene solicitudes.")
                    else:
                        for s in solicitudes:
                            print(s)

                elif op == "4":
                    id_solicitud = int(input("ID de la solicitud a eliminar: "))
                    solicitud_service.eliminar(id_solicitud)
                    print("Solicitud eliminada (si existía).")

                elif op == "5":
                    break  # Vuelve al menú principal

                else:
                    print("Opción no válida.")

        elif opcion_principal == "3":
            db.close()
            print("Conexión cerrada. ¡Hasta luego!")
            break

        else:
            print("Opción no válida.")

# Punto de entrada estándar
if __name__ == "__main__":
    main()