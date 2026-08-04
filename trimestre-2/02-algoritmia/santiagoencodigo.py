# santiagoencodigo
# Menú principal para ejecutar todos los ejercicios de Python.
# Los módulos se importan directamente (ahora con nombres válidos: 01_basicos, etc.)

import importlib

# Mapeo de opciones del menú a nombres de módulos
MODULOS = {
    1: "01_basicos",
    2: "02_listas",
    3: "03_diccionarios",
    4: "04_tuplas",
    5: "05_conjuntos",
    6: "06_clases",
    7: "07_objetos",
}

NOMBRES_CATEGORIAS = {
    1: "Básicos",
    2: "Listas",
    3: "Diccionarios",
    4: "Tuplas",
    5: "Conjuntos",
    6: "Clases",
    7: "Objetos",
}

def mostrar_menu_principal():
    """Muestra el menú principal con las categorías disponibles."""
    print("\n" * 5)
    print("=== EJERCICIOS DE PYTHON - ALGORITMIA ===")
    print("0. Salir")
    for key, nombre in NOMBRES_CATEGORIAS.items():
        print(f"{key}. {nombre}")
    print()

def ejecutar_ejercicios(modulo, nombre_categoria):
    """
    Ejecuta los ejercicios de un módulo específico.
    Muestra un submenú con cada ejercicio y ejecuta el seleccionado.
    """
    # Verificar que el módulo tenga la lista EJERCICIOS
    if not hasattr(modulo, "EJERCICIOS"):
        print(f"El módulo {nombre_categoria} no tiene una lista 'EJERCICIOS'.")
        return

    ejercicios = modulo.EJERCICIOS

    while True:
        print(f"\n--- {nombre_categoria.upper()} ---")
        print("0. Volver al menú principal")

        # Mostrar lista de ejercicios con nombres descriptivos
        for i, func in enumerate(ejercicios, start=1):
            # Obtener nombre legible a partir del nombre de la función
            nombre_func = func.__name__.replace("ejercicio_", "").replace("_", " ").title()
            print(f"{i}. {nombre_func}")

        try:
            opcion = int(input("Seleccione un ejercicio: "))
            if opcion == 0:
                break
            elif 1 <= opcion <= len(ejercicios):
                ejercicios[opcion - 1]()  # Ejecutar la función seleccionada
                input("\nPresione Enter para continuar...")  # Pausa para ver el resultado
            else:
                print("Opción no válida.")
        except ValueError:
            print("Por favor, ingrese un número válido.")

def main():
    """Función principal que controla el flujo del programa."""
    while True:
        mostrar_menu_principal()
        try:
            opcion = int(input("Seleccione una categoría: "))
            if opcion == 0:
                print("\n¡Hasta luego! Gracias por experimentar con los ejercicios de Python.")
                break
            elif opcion in MODULOS:
                nombre_modulo = MODULOS[opcion]
                try:
                    # Importar el módulo dinámicamente
                    modulo = importlib.import_module(nombre_modulo)
                    categoria = NOMBRES_CATEGORIAS[opcion]
                    ejecutar_ejercicios(modulo, categoria)
                except ModuleNotFoundError:
                    print(f"Error: No se encontró el módulo '{nombre_modulo}'. Verifica que el archivo exista.")
                    print("Asegúrate de que los archivos tengan nombres como: 01_basicos.py, 02_listas.py, etc.")
            else:
                print("Categoría no válida. Elija un número del 0 al 7.")
        except ValueError:
            print("Por favor, ingrese un número válido.")

# Punto de entrada del programa
if __name__ == "__main__":
    main()