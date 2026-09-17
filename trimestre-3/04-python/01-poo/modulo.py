from usuario import Usuario

# Crear usuario de prueba
usuario1 = Usuario(
    nombre="Santiago",
    apellido="Muñeton",
    usuario="santiagoencodigo",
    contraseña="4321",
    correo="santiago@gmail.com"
)

# 1. Primero intenta iniciar sesión
usuario1.iniciar_sesion()

# Si no inició sesión correctamente, termina programa aquí
if not usuario1.sesion_iniciada:
    exit()   # Evita que continúe

# 2. Puede publicar comentario
usuario1.publicar_comentarios()

# 3. Puede cerrar sesión
usuario1.cerrar_sesion()
    
