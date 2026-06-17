class Usuario:
    def __init__(self, nombre, apellido, usuario, contraseña, correo):
        self.nombre = nombre
        self.apellido = apellido
        self.usuario = usuario
        self.contraseña = contraseña
        self.correo = correo
        self.sesion_iniciada = False  # Control de acceso
    
    def iniciar_sesion(self):
        print("==== INICIO DE SESIÓN ====")
        nombre = input("Ingrese nombre de usuario: ")
        contraseña = input("Ingrese la clave de su cuenta: ")

        if nombre == self.usuario and contraseña == self.contraseña:
            print("Inicio de sesión exitoso\n")
            self.sesion_iniciada = True
        else:
            print("Datos incorrectos. No puedes continuar.\n")
            self.sesion_iniciada = False

    def cerrar_sesion(self):
        if not self.sesion_iniciada:
            print("No se puede cerrar sesión porque no has iniciado sesión.\n")
            return
        
        opcion = int(input("¿Desea cerrar sesión? (1 = Sí / 2 = No): "))

        if opcion == 1:
            print("Cerraste sesión correctamente.\n")
            self.sesion_iniciada = False
        else:
            print("La sesión permanece abierta.\n")

    def publicar_comentarios(self):
        if not self.sesion_iniciada:
            print("No puedes publicar comentarios sin iniciar sesión.\n")
            return

        opcion = int(input("¿Desea agregar un comentario? (1 = Sí / 2 = No): "))

        if opcion == 1:
            comentario = input("Escriba su comentario: ")
            print(f"Comentario Publicado: {comentario}\n")
        else:
            print("No se publicará ningún comentario.\n")


