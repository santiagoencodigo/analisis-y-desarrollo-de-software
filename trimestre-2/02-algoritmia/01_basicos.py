# santiagoencodigo
# Módulo con ejercicios de lógica básica: condicionales, ciclos, operaciones aritméticas.
# Cada ejercicio es una función que se ejecuta al ser llamada.

# --- Ejercicio 1: Año bisiesto ---
def ejercicio_bisiesto():
    """
    Determina si un año ingresado es bisiesto.
    Un año es bisiesto si es divisible por 400, o si es divisible por 4 pero no por 100.
    """
    anio = int(input("Ingrese el año: "))
    if (anio % 400 == 0) or (anio % 4 == 0 and anio % 100 != 0):
        print("El año es bisiesto.")
    else:
        print("El año no es bisiesto.")

# --- Ejercicio 2: Precio de venta con descuentos ---
def ejercicio_precio_venta():
    """
    Calcula el precio final de un artículo según su costo y marca.
    - Si costo >= 2000 y marca == "NOSY": 10% descuento y luego 5% adicional.
    - Si costo >= 2000 y marca != "NOSY": 10% descuento directo.
    - Si costo < 2000 y marca == "NOSY": 5% descuento pero se añade 20% de impuesto.
    - Si costo < 2000 y marca != "NOSY": 20% de impuesto.
    """
    costo = float(input("Digite el costo del artículo: "))
    marca = input("Digite la marca del artículo: ").strip()
    if costo >= 2000 and marca == "NOSY":
        precio = costo * 0.90
        total = precio * 0.95
    elif costo >= 2000 and marca != "NOSY":
        total = costo * 0.90
    elif costo < 2000 and marca == "NOSY":
        precio = costo * 0.95
        total = precio * 1.20
    else:
        total = costo * 1.20
    print(f"El total a pagar es: {total:.2f}")

# --- Ejercicio 3: Distancia entre dos puntos ---
def ejercicio_distancia():
    """
    Calcula la distancia euclidiana entre dos puntos (Ax, Ay) y (Bx, By).
    Fórmula: D = sqrt((Ax-Bx)^2 + (Ay-By)^2)
    """
    print("Coordenadas del punto A:")
    Ax = float(input("Ax: "))
    Ay = float(input("Ay: "))
    print("Coordenadas del punto B:")
    Bx = float(input("Bx: "))
    By = float(input("By: "))
    D = ((Ax - Bx)**2 + (Ay - By)**2)**0.5
    print(f"La distancia entre A y B es: {D:.2f}")

# --- Ejercicio 4: Puntaje de examen ---
def ejercicio_puntaje():
    """
    Calcula el puntaje total de un examen con respuestas correctas, incorrectas y en blanco.
    - Correcta: +3 puntos
    - Incorrecta: -1 punto
    - En blanco: 0 puntos
    """
    RC = int(input("Número de respuestas correctas: "))
    RI = int(input("Número de respuestas incorrectas: "))
    RB = int(input("Número de respuestas en blanco: "))
    puntaje = RC * 3 + RI * (-1) + RB * 0
    print(f"El puntaje total es: {puntaje}")

# --- Ejercicio 5: Diccionario de operaciones ---
def ejercicio_diccionario_operaciones():
    """
    Simula una calculadora usando un diccionario para mapear opciones a operaciones.
    El usuario elige una operación (1: multiplicar, 2: potencia, 3: división).
    """
    num = int(input("Digite el número de la operación (1: multiplicar, 2: potencia, 3: división): "))
    valor = int(input("Digite el valor: "))
    operaciones = {
        1: 100 * valor,
        2: 100 ** valor,
        3: 100 / valor
    }
    resultado = operaciones.get(num, 0)
    print(f"Resultado: {resultado}")

# --- Ejercicio 6: Capital con interés compuesto ---
def ejercicio_capital():
    """
    Calcula el capital final después de un número de años con interés compuesto.
    Valida que los datos ingresados sean correctos (capital >=0, interés entre 0 y 100, tiempo >0).
    """
    while True:
        capital = float(input("Digite el capital inicial: "))
        intereses = float(input("Digite el interés anual (%): "))
        tiempo = int(input("Digite los años a calcular: "))
        if capital >= 0 and 0 < intereses < 100 and tiempo > 0:
            break
        print("Datos inválidos. Intente de nuevo.")
    for i in range(tiempo):
        capital *= (1 + intereses / 100)
    print(f"El capital después de {tiempo} años es: {capital:.2f}")

# --- Ejercicio 7: Nota y calificación ---
def ejercicio_nota():
    """
    Convierte una nota numérica (0-20) en una letra (A, B, C, D, E) según rangos.
    """
    while True:
        nota = int(input("Ingrese la nota (1-20): "))
        if 1 <= nota <= 20:
            break
        print("Nota fuera de rango. Debe estar entre 1 y 20.")
    if nota >= 19:
        print("A")
    elif nota >= 16:
        print("B")
    elif nota >= 13:
        print("C")
    elif nota >= 10:
        print("D")
    else:
        print("E")

# --- Ejercicio 8: Parqueadero ---
def ejercicio_parqueadero():
    """
    Calcula el costo de estacionamiento basado en horas y minutos.
    Tarifa: primera hora $1000, horas adicionales $600 cada una (se cobra fracción como hora completa).
    """
    HE = int(input("Hora de entrada: "))
    ME = int(input("Minutos de entrada: "))
    HS = int(input("Hora de salida: "))
    MS = int(input("Minutos de salida: "))
    entrada_min = HE * 60 + ME
    salida_min = HS * 60 + MS
    estadia = salida_min - entrada_min
    horas = estadia // 60
    if estadia % 60 > 0:
        horas += 1
    if horas > 1:
        pago = 1000 + 600 * (horas - 1)
    else:
        pago = 1000
    print(f"El valor a pagar por {horas} horas es: {pago}")

# Lista de todos los ejercicios para el menú principal
EJERCICIOS = [
    ejercicio_bisiesto,
    ejercicio_precio_venta,
    ejercicio_distancia,
    ejercicio_puntaje,
    ejercicio_diccionario_operaciones,
    ejercicio_capital,
    ejercicio_nota,
    ejercicio_parqueadero
]