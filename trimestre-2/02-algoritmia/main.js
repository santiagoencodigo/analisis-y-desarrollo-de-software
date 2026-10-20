// ============================================================
// 1. IMPORTACIÓN DE MOTION
// ============================================================
let animateFn = () => {};
let staggerFn = () => {};

async function loadMotion() {
    try {
        const motion = await import("https://cdn.jsdelivr.net/npm/motion@12/+esm");
        animateFn = motion.animate;
        staggerFn = motion.stagger;
    } catch (e) {
        console.warn("Motion no disponible.");
    }
}

// ============================================================
// 2. DATOS REALES CON SIMULACIONES CONGRUENTES
// ============================================================
const modules = [
    { id: '01', title: '01_basicos.py', desc: 'Condicionales, ciclos y operaciones aritméticas.', tag: '8 Ejercicios', icon: 'fa-gears' },
    { id: '02', title: '02_listas.py', desc: 'Métodos de listas, slicing, iteración y comprensión.', tag: '23 Ejercicios', icon: 'fa-list' },
    { id: '03', title: '03_diccionario.py', desc: 'Estructuras clave-valor, diccionarios anidados y fusión.', tag: '20 Ejercicios', icon: 'fa-book' },
    { id: '04', title: '04_tuplas.py', desc: 'Inmutabilidad, desempaquetado y conversiones.', tag: '19 Ejercicios', icon: 'fa-box' },
    { id: '05', title: '05_conjuntos.py', desc: 'Teoría de conjuntos, uniones, intersecciones y frozenset.', tag: '16 Ejercicios', icon: 'fa-venn-diagram' },
    { id: '06', title: '06_clases.py', desc: 'POO básica, constructores, herencia y polimorfismo.', tag: '13 Ejercicios', icon: 'fa-cubes' },
    { id: '07', title: '07_objetos.py', desc: 'Objetos avanzados, herencia múltiple y encapsulación.', tag: '7 Ejercicios', icon: 'fa-cube' },
];

const exercises = [
    // --- BÁSICOS (01) ---
    { 
        module: 'basicos', title: 'Año bisiesto', desc: 'Determina si un año ingresado es bisiesto.',
        code: `def ejercicio_bisiesto():\n    anio = int(input("Ingrese el año: "))\n    if (anio % 400 == 0) or (anio % 4 == 0 and anio % 100 != 0):\n        print("El año es bisiesto.")\n    else:\n        print("El año no es bisiesto.")`,
        simulation: [
            { type: 'output', text: '[Ejecutando función...]' },
            { type: 'input', text: 'Ingrese el año:', val: '2024' },
            { type: 'output', text: '2024 es divisible por 4 y no por 100 -> Bisiesto' },
            { type: 'output', text: 'El año es bisiesto.' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Precio de venta con descuentos', desc: 'Calcula el precio final según costo y marca.',
        code: `def ejercicio_precio_venta():\n    costo = float(input("Costo: "))\n    marca = input("Marca: ")\n    if costo >= 2000 and marca == "NOSY":\n        precio = costo * 0.90\n        total = precio * 0.95\n    # ...`,
        simulation: [
            { type: 'output', text: '[Ejecutando función...]' },
            { type: 'input', text: 'Costo:', val: '2500' },
            { type: 'input', text: 'Marca:', val: 'NOSY' },
            { type: 'output', text: 'Costo >= 2000 y Marca == NOSY -> Aplica 10% y 5%' },
            { type: 'output', text: 'El total a pagar es: 2137.50' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Distancia entre dos puntos', desc: 'Calcula la distancia euclidiana.',
        code: `def ejercicio_distancia():\n    Ax = float(input("Ax: "))\n    Ay = float(input("Ay: "))\n    Bx = float(input("Bx: "))\n    By = float(input("By: "))\n    D = ((Ax - Bx)**2 + (Ay - By)**2)**0.5\n    print(f"La distancia es: {D:.2f}")`,
        simulation: [
            { type: 'output', text: '[Calculando distancia euclidiana]' },
            { type: 'input', text: 'Ax:', val: '0' },
            { type: 'input', text: 'Ay:', val: '0' },
            { type: 'input', text: 'Bx:', val: '3' },
            { type: 'input', text: 'By:', val: '4' },
            { type: 'output', text: 'D = sqrt((0-3)^2 + (0-4)^2) = sqrt(9+16) = 5' },
            { type: 'output', text: 'La distancia es: 5.00' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Puntaje de examen', desc: 'Calcula el puntaje (Correctas: +3, Incorrectas: -1).',
        code: `def ejercicio_puntaje():\n    RC = int(input("Correctas: "))\n    RI = int(input("Incorrectas: "))\n    RB = int(input("En blanco: "))\n    puntaje = RC * 3 + RI * (-1) + RB * 0\n    print(f"Puntaje: {puntaje}")`,
        simulation: [
            { type: 'output', text: '[Evaluando respuestas]' },
            { type: 'input', text: 'Correctas:', val: '10' },
            { type: 'input', text: 'Incorrectas:', val: '2' },
            { type: 'input', text: 'En blanco:', val: '1' },
            { type: 'output', text: 'Puntaje = (10*3) + (2*-1) + (1*0)' },
            { type: 'output', text: 'Puntaje = 30 - 2 + 0 = 28' },
            { type: 'output', text: 'El puntaje total es: 28' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Diccionario de operaciones', desc: 'Calculadora usando diccionario.',
        code: `def ejercicio_diccionario_operaciones():\n    num = int(input("Opción (1: mult, 2: pot, 3: div): "))\n    valor = int(input("Valor: "))\n    operaciones = {1: 100 * valor, 2: 100 ** valor, 3: 100 / valor}\n    print(f"Resultado: {operaciones.get(num, 0)}")`,
        simulation: [
            { type: 'output', text: '[Iniciando calculadora]' },
            { type: 'input', text: 'Opción (1: mult, 2: pot, 3: div):', val: '2' },
            { type: 'input', text: 'Valor:', val: '3' },
            { type: 'output', text: 'Buscando opción 2 (potencia)...' },
            { type: 'output', text: 'Resultado: 1000000' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Capital con interés compuesto', desc: 'Calcula capital final.',
        code: `def ejercicio_capital():\n    capital = float(input("Capital: "))\n    intereses = float(input("Interés: "))\n    tiempo = int(input("Años: "))\n    # ... \n    print(f"Capital final: {capital:.2f}")`,
        simulation: [
            { type: 'output', text: '[Simulando interés compuesto]' },
            { type: 'input', text: 'Capital inicial:', val: '1000' },
            { type: 'input', text: 'Interés anual (%):', val: '10' },
            { type: 'input', text: 'Años a calcular:', val: '2' },
            { type: 'output', text: 'Año 1: $1100.00' },
            { type: 'output', text: 'Año 2: $1210.00' },
            { type: 'output', text: 'El capital después de 2 años es: 1210.00' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Nota y calificación', desc: 'Convierte nota (1-20) en letra.',
        code: `def ejercicio_nota():\n    nota = int(input("Ingrese nota: "))\n    if nota >= 19: print("A")\n    elif nota >= 16: print("B")\n    # ...`,
        simulation: [
            { type: 'output', text: '[Evaluando nota]' },
            { type: 'input', text: 'Ingrese la nota (1-20):', val: '17' },
            { type: 'output', text: 'Evaluando: nota >= 19 -> Falso' },
            { type: 'output', text: 'Evaluando: nota >= 16 -> Verdadero' },
            { type: 'output', text: 'B' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'basicos', title: 'Parqueadero', desc: 'Calcula costo de estacionamiento.',
        code: `def ejercicio_parqueadero():\n    HE = int(input("Hora entrada: "))\n    # ... \n    print(f"Total: {pago}")`,
        simulation: [
            { type: 'output', text: '[Calculando tarifa de parqueadero]' },
            { type: 'input', text: 'Hora de entrada:', val: '8' },
            { type: 'input', text: 'Minutos de entrada:', val: '30' },
            { type: 'input', text: 'Hora de salida:', val: '10' },
            { type: 'input', text: 'Minutos de salida:', val: '45' },
            { type: 'output', text: 'Tiempo total: 2 horas y 15 mins -> Se cobran 3 horas' },
            { type: 'output', text: 'Pago: 1000 (1ra hora) + 600 * 2' },
            { type: 'output', text: 'El valor a pagar es: 2200' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },

    // --- LISTAS (02) ---
    { 
        module: 'listas', title: 'Crear lista y acceder', desc: 'Crear lista, acceder a elemento y longitud.',
        code: `def ejercicio_1():\n    my_list = [10, 20, 30, 40, 50]\n    print("Lista:", my_list)\n    print("Tercer elemento:", my_list[2])\n    print("Longitud:", len(my_list))`,
        simulation: [
            { type: 'output', text: '>>> my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Lista: [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Tercer elemento: 30' },
            { type: 'output', text: 'Longitud: 5' },
            { type: 'output', text: '¿Está vacía? False' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Manipulación básica', desc: 'Cambiar, agregar, insertar, eliminar.',
        code: `def ejercicio_2():\n    my_list = [10, 20, 30, 40, 50]\n    my_list[1] = 200\n    my_list.append(600)\n    # ...`,
        simulation: [
            { type: 'output', text: 'Original: [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Cambiado índice 1: [10, 200, 30, 40, 50]' },
            { type: 'output', text: 'Append 600: [10, 200, 30, 40, 50, 600]' },
            { type: 'output', text: 'Insert 300 en índice 2: [10, 200, 300, 30, 40, 50, 600]' },
            { type: 'output', text: 'Remove 600: [10, 200, 300, 30, 40, 50]' },
            { type: 'output', text: 'Eliminado índice 0: [200, 300, 30, 40, 50]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Recorrer lista', desc: 'Recorrer lista con for.',
        code: `def ejercicio_3():\n    my_list = [10, 20, 30, 40, 50]\n    for item in my_list:\n        print(item)`,
        simulation: [
            { type: 'output', text: 'Iniciando ciclo for...' },
            { type: 'output', text: '10' },
            { type: 'output', text: '20' },
            { type: 'output', text: '30' },
            { type: 'output', text: '40' },
            { type: 'output', text: '50' },
            { type: 'success', text: '[Ciclo completado]' }
        ]
    },
    { 
        module: 'listas', title: 'Suma de elementos', desc: 'Suma usando sum().',
        code: `def ejercicio_4():\n    my_list = [10, 20, 30, 40, 50]\n    print("Suma:", sum(my_list))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'sum([10, 20, 30, 40, 50])' },
            { type: 'output', text: 'Suma: 150' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Promedio de elementos', desc: 'Calcula promedio.',
        code: `def ejercicio_5():\n    my_list = [10, 20, 30, 40, 50]\n    print("Promedio:", sum(my_list) / len(my_list))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'suma = 150, longitud = 5' },
            { type: 'output', text: 'Promedio: 30.0' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Máximo y mínimo', desc: 'Encuentra el máximo y mínimo.',
        code: `def ejercicio_6():\n    my_list = [10, 20, 30, 40, 50]\n    print("Máximo:", max(my_list))\n    print("Mínimo:", min(my_list))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Máximo: 50' },
            { type: 'output', text: 'Mínimo: 10' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Invertir lista', desc: 'Invertir usando slicing.',
        code: `def ejercicio_7():\n    my_list = [10, 20, 30, 40, 50]\n    print("Invertida:", my_list[::-1])`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Aplicando slicing [::-1]' },
            { type: 'output', text: 'Invertida: [50, 40, 30, 20, 10]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Concatenar listas', desc: 'Concatenar con operador +.',
        code: `def ejercicio_8():\n    list1 = [10, 20, 30]\n    list2 = [40, 50, 60]\n    print("Concatenada:", list1 + list2)`,
        simulation: [
            { type: 'output', text: 'list1 = [10, 20, 30]' },
            { type: 'output', text: 'list2 = [40, 50, 60]' },
            { type: 'output', text: 'Concatenada: [10, 20, 30, 40, 50, 60]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Verificar existencia', desc: 'Verificar con operador in.',
        code: `def ejercicio_9():\n    my_list = [10, 20, 30, 40, 50]\n    print("¿Está 30?", 30 in my_list)`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Evaluando 30 in [10, 20, 30, 40, 50]' },
            { type: 'output', text: '¿Está 30? True' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Contar ocurrencias', desc: 'Contar ocurrencias con count().',
        code: `def ejercicio_10():\n    my_list = [10, 20, 30, 40, 50, 30]\n    print("Ocurrencias de 30:", my_list.count(30))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50, 30]' },
            { type: 'output', text: 'Buscando ocurrencias del número 30...' },
            { type: 'output', text: 'Ocurrencias de 30: 2' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Eliminar duplicados', desc: 'Eliminar duplicados con set().',
        code: `def ejercicio_11():\n    my_list = [10, 20, 30, 20, 40, 30]\n    print("Sin duplicados:", list(set(my_list)))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 20, 40, 30]' },
            { type: 'output', text: 'Convirtiendo a set (elimina duplicados)...' },
            { type: 'output', text: 'Convirtiendo de nuevo a lista...' },
            { type: 'output', text: 'Sin duplicados: [10, 20, 30, 40]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Obtener sublista', desc: 'Obtener sublista con slicing.',
        code: `def ejercicio_12():\n    my_list = [10, 20, 30, 40, 50]\n    print("Sublista [1:4]:", my_list[1:4])`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Aplicando slicing [1:4] (desde índice 1 hasta el 3)' },
            { type: 'output', text: 'Sublista [1:4]: [20, 30, 40]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Extraer cada segundo', desc: 'Extraer cada segundo elemento.',
        code: `def ejercicio_13():\n    my_list = [10, 20, 30, 40, 50]\n    print("Cada segundo:", my_list[::2])`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Aplicando slicing [::2]' },
            { type: 'output', text: 'Cada segundo: [10, 30, 50]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Convertir a string', desc: 'Convertir elementos a string y unirlos.',
        code: `def ejercicio_14():\n    my_list = [10, 20, 30, 40, 50]\n    print("Unidos:", " ".join(map(str, my_list)))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Mapeando a string y uniendo con espacio...' },
            { type: 'output', text: 'Unidos: 10 20 30 40 50' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Vaciar lista', desc: 'Vaciar una lista con clear().',
        code: `def ejercicio_15():\n    my_list = [10, 20, 30, 40, 50]\n    my_list.clear()\n    print("Lista vacía:", my_list)`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Ejecutando my_list.clear()...' },
            { type: 'output', text: 'Lista vacía: []' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Copiar lista', desc: 'Copiar una lista con copy().',
        code: `def ejercicio_16():\n    my_list = [10, 20, 30, 40, 50]\n    copia = my_list.copy()\n    print("Copia:", copia)`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'copia = my_list.copy()' },
            { type: 'output', text: 'Copia: [10, 20, 30, 40, 50]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Ordenar ascendente', desc: 'Ordenar con sort().',
        code: `def ejercicio_17():\n    my_list = [10, 50, 20, 40, 30]\n    my_list.sort()\n    print("Ordenada ascendente:", my_list)`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 50, 20, 40, 30]' },
            { type: 'output', text: 'Ejecutando my_list.sort()...' },
            { type: 'output', text: 'Ordenada ascendente: [10, 20, 30, 40, 50]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Ordenar descendente', desc: 'Ordenar con sort(reverse=True).',
        code: `def ejercicio_18():\n    my_list = [10, 20, 30, 40, 50]\n    my_list.sort(reverse=True)\n    print("Ordenada descendente:", my_list)`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Ejecutando my_list.sort(reverse=True)...' },
            { type: 'output', text: 'Ordenada descendente: [50, 40, 30, 20, 10]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Obtener índice', desc: 'Obtener el índice de un elemento.',
        code: `def ejercicio_19():\n    my_list = [10, 20, 30, 40, 50]\n    print("Índice de 30:", my_list.index(30))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Buscando índice de 30...' },
            { type: 'output', text: 'Índice de 30: 2' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Copiar sublista', desc: 'Copiar una sublista con slicing.',
        code: `def ejercicio_20():\n    my_list = [10, 20, 30, 40, 50]\n    print("Sublista copiada [1:4]:", my_list[1:4])`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Aplicando slicing [1:4]' },
            { type: 'output', text: 'Sublista copiada [1:4]: [20, 30, 40]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Recorrer con enumerate', desc: 'Recorrer con enumerate.',
        code: `def ejercicio_21():\n    my_list = [10, 20, 30, 40, 50]\n    for idx, val in enumerate(my_list):\n        print(f"Índice {idx}: {val}")`,
        simulation: [
            { type: 'output', text: 'Iniciando enumerate...' },
            { type: 'output', text: 'Índice 0: 10' },
            { type: 'output', text: 'Índice 1: 20' },
            { type: 'output', text: 'Índice 2: 30' },
            { type: 'output', text: 'Índice 3: 40' },
            { type: 'output', text: 'Índice 4: 50' },
            { type: 'success', text: '[Ciclo completado]' }
        ]
    },
    { 
        module: 'listas', title: 'Combinar con zip', desc: 'Combinar listas con zip.',
        code: `def ejercicio_22():\n    list1 = [10, 20, 30]\n    list2 = [40, 50, 60]\n    print("Zip:", list(zip(list1, list2)))`,
        simulation: [
            { type: 'output', text: 'list1 = [10, 20, 30]' },
            { type: 'output', text: 'list2 = [40, 50, 60]' },
            { type: 'output', text: 'Aplicando zip...' },
            { type: 'output', text: 'Zip: [(10, 40), (20, 50), (30, 60)]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'listas', title: 'Convertir a tupla', desc: 'Convertir una lista en tupla.',
        code: `def ejercicio_23():\n    my_list = [10, 20, 30, 40, 50]\n    print("Tupla:", tuple(my_list))`,
        simulation: [
            { type: 'output', text: 'my_list = [10, 20, 30, 40, 50]' },
            { type: 'output', text: 'Aplicando tuple(...)' },
            { type: 'output', text: 'Tupla: (10, 20, 30, 40, 50)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },

    // --- DICCIONARIOS (03) ---
    { 
        module: 'diccionarios', title: 'Crear y modificar', desc: 'Crear, agregar, modificar y acceder a valores.',
        code: `def ejercicio_1():\n    my_dict = {'name': 'Alice', 'age': 35, 'city': 'New York'}\n    my_dict['profession'] = 'Doctor'\n    my_dict['age'] = 40\n    print("City:", my_dict['city'])`,
        simulation: [
            { type: 'output', text: "my_dict = {'name': 'Alice', 'age': 35, 'city': 'New York'}" },
            { type: 'output', text: "Agregando clave 'profession'..." },
            { type: 'output', text: "Modificando clave 'age' a 40..." },
            { type: 'output', text: 'City: New York' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Eliminar y recorrer', desc: 'Eliminar claves y recorrer.',
        code: `def ejercicio_2():\n    my_dict = {'name': 'Alice', 'age': 35, 'city': 'New York', 'profession': 'Doctor'}\n    del my_dict['profession']\n    for key, value in my_dict.items():\n        print(f"{key}: {value}")`,
        simulation: [
            { type: 'output', text: "Eliminando clave 'profession'..." },
            { type: 'output', text: 'Iniciando recorrido con .items()...' },
            { type: 'output', text: 'name: Alice' },
            { type: 'output', text: 'age: 35' },
            { type: 'output', text: 'city: New York' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Crear desde listas', desc: 'Crear diccionario desde dos listas.',
        code: `def ejercicio_3():\n    keys = ['name', 'age', 'city']\n    values = ['Bob', 30, 'Paris']\n    new_dict = dict(zip(keys, values))\n    print("Desde listas:", new_dict)`,
        simulation: [
            { type: 'output', text: "keys = ['name', 'age', 'city']" },
            { type: 'output', text: "values = ['Bob', 30, 'Paris']" },
            { type: 'output', text: 'Aplicando zip y dict()...' },
            { type: 'output', text: "Desde listas: {'name': 'Bob', 'age': 30, 'city': 'Paris'}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Vaciar diccionario', desc: 'Vaciar diccionario.',
        code: `def ejercicio_4():\n    my_dict = {'a': 1, 'b': 2, 'c': 3}\n    my_dict.clear()\n    print("Después de clear:", my_dict)`,
        simulation: [
            { type: 'output', text: "my_dict = {'a': 1, 'b': 2, 'c': 3}" },
            { type: 'output', text: 'Ejecutando my_dict.clear()...' },
            { type: 'output', text: 'Después de clear: {}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Fusionar', desc: 'Fusionar diccionarios.',
        code: `def ejercicio_5():\n    dict1 = {'a': 100, 'b': 200}\n    dict2 = {'c': 300, 'd': 400}\n    dict1.update(dict2)\n    print("Fusionado:", dict1)`,
        simulation: [
            { type: 'output', text: "dict1 = {'a': 100, 'b': 200}" },
            { type: 'output', text: "dict2 = {'c': 300, 'd': 400}" },
            { type: 'output', text: 'Ejecutando dict1.update(dict2)...' },
            { type: 'output', text: "Fusionado: {'a': 100, 'b': 200, 'c': 300, 'd': 400}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Frecuencia de caracteres', desc: 'Contar frecuencia de caracteres.',
        code: `def ejercicio_6():\n    texto = "banana"\n    frecuencia = {}\n    for char in texto:\n        frecuencia[char] = frecuencia.get(char, 0) + 1\n    print("Frecuencias:", frecuencia)`,
        simulation: [
            { type: 'output', text: 'texto = "banana"' },
            { type: 'output', text: "Procesando 'b'..." },
            { type: 'output', text: "Procesando 'a'..." },
            { type: 'output', text: "Procesando 'n'..." },
            { type: 'output', text: "Frecuencias: {'b': 1, 'a': 3, 'n': 2}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Acceder a anidado', desc: 'Acceder a diccionario anidado.',
        code: `def ejercicio_7():\n    data = {'person': {'name': 'Alice', 'age': 30}}\n    print("Edad de Alice:", data['person']['age'])`,
        simulation: [
            { type: 'output', text: "data = {'person': {'name': 'Alice', 'age': 30}}" },
            { type: 'output', text: "Accediendo a data['person']['age']..." },
            { type: 'output', text: 'Edad de Alice: 30' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Acceso profundo', desc: 'Acceso profundo en diccionarios.',
        code: `def ejercicio_8():\n    data = {'student': {'name': 'John', 'marks': {'history': 90, 'math': 95}}}\n    print("Nota historia:", data['student']['marks']['history'])`,
        simulation: [
            { type: 'output', text: "Accediendo a data['student']['marks']['history']..." },
            { type: 'output', text: 'Nota historia: 90' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Modificar anidado', desc: 'Modificar valor en diccionario anidado.',
        code: `def ejercicio_9():\n    data = {'student': {'name': 'John', 'marks': {'history': 90, 'math': 95}}}\n    data['student']['marks']['history'] = 98\n    print("Modificado:", data['student']['marks'])`,
        simulation: [
            { type: 'output', text: "Modificando 'history' a 98..." },
            { type: 'output', text: "Modificado: {'history': 98, 'math': 95}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Crear con fromkeys', desc: 'Crear diccionario con fromkeys().',
        code: `def ejercicio_10():\n    keys = ['a', 'b', 'c']\n    default_value = 0\n    new_dict = dict.fromkeys(keys, default_value)\n    print("Inicializado:", new_dict)`,
        simulation: [
            { type: 'output', text: "keys = ['a', 'b', 'c'], default_value = 0" },
            { type: 'output', text: 'Aplicando dict.fromkeys()...' },
            { type: 'output', text: "Inicializado: {'a': 0, 'b': 0, 'c': 0}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Extraer claves', desc: 'Extraer claves específicas.',
        code: `def ejercicio_11():\n    original = {'a': 1, 'b': 2, 'c': 3, 'd': 4}\n    keys_to_extract = ['a', 'c']\n    extracted = {k: original[k] for k in keys_to_extract}\n    print("Extraído:", extracted)`,
        simulation: [
            { type: 'output', text: 'Usando comprensión de diccionarios...' },
            { type: 'output', text: "Extraído: {'a': 1, 'c': 3}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Eliminar varias claves', desc: 'Eliminar varias claves.',
        code: `def ejercicio_12():\n    original = {'a': 1, 'b': 2, 'c': 3, 'd': 4}\n    keys_to_remove = ['b', 'd']\n    for key in keys_to_remove:\n        if key in original:\n            del original[key]\n    print("Después de eliminar:", original)`,
        simulation: [
            { type: 'output', text: "Eliminando 'b' y 'd'..." },
            { type: 'output', text: "Después de eliminar: {'a': 1, 'c': 3}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Verificar valor', desc: 'Verificar si un valor existe.',
        code: `def ejercicio_13():\n    my_dict = {'a': 1, 'b': 2, 'c': 3}\n    value_to_check = 2\n    if value_to_check in my_dict.values():\n        print("El valor existe")\n    else:\n        print("El valor no existe")`,
        simulation: [
            { type: 'output', text: 'Evaluando 2 in my_dict.values()...' },
            { type: 'output', text: 'El valor existe' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Renombrar clave', desc: 'Renombrar una clave.',
        code: `def ejercicio_14():\n    my_dict = {'name': 'Alice', 'age': 25}\n    if 'name' in my_dict:\n        my_dict['first_name'] = my_dict.pop('name')\n    print("Renombrado:", my_dict)`,
        simulation: [
            { type: 'output', text: "Sacando 'name' y creando 'first_name'..." },
            { type: 'output', text: "Renombrado: {'age': 25, 'first_name': 'Alice'}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Clave con valor mínimo', desc: 'Encontrar la clave con valor mínimo.',
        code: `def ejercicio_15():\n    my_dict = {'a': 100, 'b': 50, 'c': 150}\n    key_min = min(my_dict, key=my_dict.get)\n    print("Clave con valor mínimo:", key_min)`,
        simulation: [
            { type: 'output', text: "my_dict = {'a': 100, 'b': 50, 'c': 150}" },
            { type: 'output', text: 'Buscando el valor mínimo...' },
            { type: 'output', text: 'Clave con valor mínimo: b' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Modificar anidado 2', desc: 'Modificar valor en diccionario anidado.',
        code: `def ejercicio_16():\n    data = {'student': {'marks': {'math': 95}}}\n    data['student']['marks']['math'] = 99\n    print("Math actualizado:", data['student']['marks']['math'])`,
        simulation: [
            { type: 'output', text: "Modificando 'math' a 99..." },
            { type: 'output', text: 'Math actualizado: 99' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Invertir claves y valores', desc: 'Invertir claves y valores.',
        code: `def ejercicio_17():\n    my_dict = {'a': 1, 'b': 2, 'c': 3}\n    inverted = {v: k for k, v in my_dict.items()}\n    print("Invertido:", inverted)`,
        simulation: [
            { type: 'output', text: 'Invirtiendo diccionario...' },
            { type: 'output', text: "Invertido: {1: 'a', 2: 'b', 3: 'c'}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Ordenar por claves', desc: 'Ordenar por claves.',
        code: `def ejercicio_18():\n    my_dict = {'c': 3, 'a': 1, 'b': 2}\n    for key in sorted(my_dict):\n        print(f"{key}: {my_dict[key]}")`,
        simulation: [
            { type: 'output', text: 'Ordenando claves con sorted()...' },
            { type: 'output', text: 'a: 1' },
            { type: 'output', text: 'b: 2' },
            { type: 'output', text: 'c: 3' },
            { type: 'success', text: '[Ciclo completado]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Ordenar por valores', desc: 'Ordenar por valores.',
        code: `def ejercicio_19():\n    my_dict = {'a': 3, 'b': 1, 'c': 2}\n    sorted_by_value = sorted(my_dict.items(), key=lambda x: x[1])\n    print("Ordenado por valor:", sorted_by_value)`,
        simulation: [
            { type: 'output', text: 'Ordenando items por el segundo elemento (valor)...' },
            { type: 'output', text: "Ordenado por valor: [('b', 1), ('c', 2), ('a', 3)]" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'diccionarios', title: 'Valores únicos', desc: 'Verificar si todos los valores son únicos.',
        code: `def ejercicio_20():\n    my_dict = {'a': 1, 'b': 2, 'c': 1}\n    values = list(my_dict.values())\n    all_unique = len(values) == len(set(values))\n    print("¿Todos los valores son únicos?", all_unique)`,
        simulation: [
            { type: 'output', text: "values = [1, 2, 1]" },
            { type: 'output', text: 'Convertimos a set: {1, 2}' },
            { type: 'output', text: 'len(values) = 3, len(set) = 2' },
            { type: 'output', text: '¿Todos los valores son únicos? False' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },

    // --- TUPLAS (04) ---
    { 
        module: 'tuplas', title: 'Tuplas vacías', desc: 'Crear tuplas vacías.',
        code: `def ejercicio_1():\n    x = ()\n    y = tuple()\n    print("Tuplas:", x, y)`,
        simulation: [
            { type: 'output', text: 'x = ()' },
            { type: 'output', text: 'y = tuple()' },
            { type: 'output', text: 'Tuplas: () ()' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Diferentes tipos', desc: 'Tupla con diferentes tipos de datos.',
        code: `def ejercicio_2():\n    tuplex = ("tuple", False, 3.2, 1)\n    print(tuplex)`,
        simulation: [
            { type: 'output', text: "tuplex = ('tuple', False, 3.2, 1)" },
            { type: 'output', text: "('tuple', False, 3.2, 1)" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Sin paréntesis', desc: 'Crear tupla sin paréntesis.',
        code: `def ejercicio_3():\n    tuplex = 5, 10, 15, 20, 25\n    single = (5,)\n    print(tuplex, single)`,
        simulation: [
            { type: 'output', text: 'tuplex = 5, 10, 15, 20, 25 (empaquetamiento)' },
            { type: 'output', text: 'single = (5,) (coma final obligatoria)' },
            { type: 'output', text: '(5, 10, 15, 20, 25) (5,)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Acceder por índice', desc: 'Acceder a elemento por índice.',
        code: `def ejercicio_4():\n    tuplex = (1, 2, 3, 4, 5)\n    print(tuplex[2])`,
        simulation: [
            { type: 'output', text: 'tuplex = (1, 2, 3, 4, 5)' },
            { type: 'output', text: 'Accediendo al índice 2...' },
            { type: 'output', text: '3' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Comprobar valor', desc: 'Comprobar si un valor está en la tupla.',
        code: `def ejercicio_5():\n    tuplex = (1, 3, 5, 7, 9)\n    print(7 in tuplex)`,
        simulation: [
            { type: 'output', text: 'tuplex = (1, 3, 5, 7, 9)' },
            { type: 'output', text: 'Evaluando 7 in tuplex...' },
            { type: 'output', text: 'True' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Slicing', desc: 'Slicing en tuplas.',
        code: `def ejercicio_6():\n    tuplex = (0, 1, 2, 3, 4, 5)\n    print(tuplex[2:5])`,
        simulation: [
            { type: 'output', text: 'tuplex = (0, 1, 2, 3, 4, 5)' },
            { type: 'output', text: 'Aplicando slicing [2:5]...' },
            { type: 'output', text: '(2, 3, 4)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Longitud', desc: 'Longitud de la tupla.',
        code: `def ejercicio_7():\n    tuplex = (10, 20, 30, 40, 50)\n    print(len(tuplex))`,
        simulation: [
            { type: 'output', text: 'tuplex = (10, 20, 30, 40, 50)' },
            { type: 'output', text: 'len(tuplex)' },
            { type: 'output', text: '5' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Repetir', desc: 'Repetir tupla.',
        code: `def ejercicio_8():\n    original = (1, 2, 3)\n    print(original * 3)`,
        simulation: [
            { type: 'output', text: 'original = (1, 2, 3)' },
            { type: 'output', text: 'Multiplicando por 3...' },
            { type: 'output', text: '(1, 2, 3, 1, 2, 3, 1, 2, 3)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Convertir a tupla', desc: 'Convertir lista a tupla.',
        code: `def ejercicio_9():\n    my_list = [1, 2, 3]\n    print(tuple(my_list))`,
        simulation: [
            { type: 'output', text: 'my_list = [1, 2, 3]' },
            { type: 'output', text: 'Aplicando tuple()...' },
            { type: 'output', text: '(1, 2, 3)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Mínimo y máximo', desc: 'Mínimo y máximo de una tupla.',
        code: `def ejercicio_10():\n    tuplex = (5, 12, 3, 8, 15)\n    print("Mínimo:", min(tuplex), "Máximo:", max(tuplex))`,
        simulation: [
            { type: 'output', text: 'tuplex = (5, 12, 3, 8, 15)' },
            { type: 'output', text: 'Buscando min y max...' },
            { type: 'output', text: 'Mínimo: 3 Máximo: 15' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Concatenar', desc: 'Concatenar tuplas.',
        code: `def ejercicio_11():\n    tuplex = (4, 6, 2, 8, 3, 1)\n    tuplex = tuplex + (9,)\n    print(tuplex)`,
        simulation: [
            { type: 'output', text: 'tuplex = (4, 6, 2, 8, 3, 1)' },
            { type: 'output', text: 'Concatenando con (9,)' },
            { type: 'output', text: '(4, 6, 2, 8, 3, 1, 9)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Unir caracteres', desc: 'Unir caracteres de una tupla.',
        code: `def ejercicio_12():\n    tup = ('e','x','e','r','c','i','s','e','s')\n    print(''.join(tup))`,
        simulation: [
            { type: 'output', text: "tup = ('e','x','e','r','c','i','s','e','s')" },
            { type: 'output', text: "Aplicando ''.join(tup)..." },
            { type: 'output', text: 'exercises' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Índice negativo', desc: 'Acceder con índice negativo.',
        code: `def ejercicio_13():\n    tuplex = ("w", 3, "r", "e", "s", "o", "u", "r", "c", "e")\n    print(tuplex[-4])`,
        simulation: [
            { type: 'output', text: 'tuplex = ("w", 3, "r", "e", "s", "o", "u", "r", "c", "e")' },
            { type: 'output', text: 'Accediendo al índice -4...' },
            { type: 'output', text: 'u' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Copiar tupla', desc: 'Copiar tupla.',
        code: `def ejercicio_14():\n    tuplex = (1, 2, 3, 4)\n    copied = tuplex\n    print(copied)`,
        simulation: [
            { type: 'output', text: 'tuplex = (1, 2, 3, 4)' },
            { type: 'output', text: 'Asignación por referencia: copied = tuplex' },
            { type: 'output', text: '(1, 2, 3, 4)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Eliminar elemento', desc: 'Eliminar elemento convirtiendo a lista.',
        code: `def ejercicio_15():\n    tuplex = ("w", 3, "r", "s", "o", "u", "r", "c", "e")\n    lst = list(tuplex)\n    lst.pop(2)\n    tuplex = tuple(lst)\n    print(tuplex)`,
        simulation: [
            { type: 'output', text: 'Convirtiendo tupla a lista...' },
            { type: 'output', text: 'Eliminando elemento en índice 2...' },
            { type: 'output', text: 'Convirtiendo de vuelta a tupla...' },
            { type: 'output', text: "('w', 3, 's', 'o', 'u', 'r', 'c', 'e')" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Slicing avanzado', desc: 'Slicing avanzado en tuplas.',
        code: `def ejercicio_16():\n    tuplex = (2, 4, 3, 5, 4, 6, 7, 8, 6, 1)\n    print(tuplex[3:5])\n    print(tuplex[:6])\n    print(tuplex[5:])`,
        simulation: [
            { type: 'output', text: 'tuplex[3:5] -> (5, 4)' },
            { type: 'output', text: 'tuplex[:6] -> (2, 4, 3, 5, 4, 6)' },
            { type: 'output', text: 'tuplex[5:] -> (6, 7, 8, 6, 1)' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Buscar índice', desc: 'Buscar índice de un elemento.',
        code: `def ejercicio_17():\n    tuplex = tuple("index tuple")\n    print(tuplex.index("p"))`,
        simulation: [
            { type: 'output', text: 'tuplex = tuple("index tuple")' },
            { type: 'output', text: "Buscando índice de 'p'..." },
            { type: 'output', text: '7' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Tupla a diccionario', desc: 'Convertir tupla de pares a diccionario.',
        code: `def ejercicio_18():\n    tuplex = ((2, "w"), (3, "r"))\n    result = dict((y, x) for x, y in tuplex)\n    print(result)`,
        simulation: [
            { type: 'output', text: 'tuplex = ((2, "w"), (3, "r"))' },
            { type: 'output', text: 'Invirtiendo pares y convirtiendo a dict()...' },
            { type: 'output', text: "{'w': 2, 'r': 3}" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'tuplas', title: 'Desempaquetar', desc: 'Desempaquetar lista de tuplas.',
        code: `def ejercicio_19():\n    l = [(1, 2), (3, 4), (8, 9)]\n    unzipped = list(zip(*l))\n    print(unzipped)`,
        simulation: [
            { type: 'output', text: 'l = [(1, 2), (3, 4), (8, 9)]' },
            { type: 'output', text: 'Aplicando zip(*l)...' },
            { type: 'output', text: '[(1, 3, 8), (2, 4, 9)]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },

    // --- CONJUNTOS (05) ---
    { 
        module: 'conjuntos', title: 'Operaciones básicas', desc: 'Operaciones básicas: add, remove.',
        code: `def ejercicio_1():\n    s = {1, 2, 3}\n    s.add(4)\n    s.remove(2)\n    s.discard(5)\n    print(s)`,
        simulation: [
            { type: 'output', text: 's = {1, 2, 3}' },
            { type: 'output', text: 'add(4) -> {1, 2, 3, 4}' },
            { type: 'output', text: 'remove(2) -> {1, 3, 4}' },
            { type: 'output', text: 'discard(5) -> {1, 3, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Unión', desc: 'Unión de conjuntos.',
        code: `def ejercicio_2():\n    s1 = {1, 2, 3}\n    s2 = {3, 4, 5}\n    print(s1.union(s2))`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3}, s2 = {3, 4, 5}' },
            { type: 'output', text: 's1.union(s2)' },
            { type: 'output', text: '{1, 2, 3, 4, 5}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Intersección', desc: 'Intersección de conjuntos.',
        code: `def ejercicio_3():\n    s1 = {1, 2, 3}\n    s2 = {2, 3, 4}\n    print(s1.intersection(s2))`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3}, s2 = {2, 3, 4}' },
            { type: 'output', text: 's1.intersection(s2)' },
            { type: 'output', text: '{2, 3}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Diferencia', desc: 'Diferencia de conjuntos.',
        code: `def ejercicio_4():\n    s1 = {1, 2, 3, 4}\n    s2 = {3, 4, 5}\n    print(s1.difference(s2))`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3, 4}, s2 = {3, 4, 5}' },
            { type: 'output', text: 's1.difference(s2)' },
            { type: 'output', text: '{1, 2}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Diferencia simétrica', desc: 'Diferencia simétrica.',
        code: `def ejercicio_5():\n    s1 = {1, 2, 3}\n    s2 = {2, 3, 4}\n    print(s1.symmetric_difference(s2))`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3}, s2 = {2, 3, 4}' },
            { type: 'output', text: 's1.symmetric_difference(s2)' },
            { type: 'output', text: '{1, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Actualizar', desc: 'Agregar varios elementos.',
        code: `def ejercicio_6():\n    s = {1, 2}\n    s.update([2, 3, 4])\n    print(s)`,
        simulation: [
            { type: 'output', text: 's = {1, 2}' },
            { type: 'output', text: 's.update([2, 3, 4])' },
            { type: 'output', text: '{1, 2, 3, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Diferencia in-place', desc: 'Diferencia in-place.',
        code: `def ejercicio_7():\n    s1 = {1, 2, 3, 4}\n    s2 = {2, 3}\n    s1.difference_update(s2)\n    print(s1)`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3, 4}, s2 = {2, 3}' },
            { type: 'output', text: 's1.difference_update(s2)' },
            { type: 'output', text: '{1, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Eliminar varios', desc: 'Eliminar varios elementos.',
        code: `def ejercicio_8():\n    s = {1, 2, 3, 4, 5}\n    to_remove = [2, 5, 8]\n    for x in to_remove:\n        s.discard(x)\n    print(s)`,
        simulation: [
            { type: 'output', text: 's = {1, 2, 3, 4, 5}' },
            { type: 'output', text: 'discard(2), discard(5), discard(8)...' },
            { type: 'output', text: '{1, 3, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Subconjunto', desc: 'Verificar si es subconjunto.',
        code: `def ejercicio_9():\n    s1 = {1, 2}\n    s2 = {1, 2, 3, 4}\n    print(s1.issubset(s2))`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2}, s2 = {1, 2, 3, 4}' },
            { type: 'output', text: 's1.issubset(s2)' },
            { type: 'output', text: 'True' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Superconjunto', desc: 'Verificar si es superconjunto.',
        code: `def ejercicio_10():\n    s1 = {1, 2, 3, 4}\n    s2 = {2, 3}\n    print(s1.issuperset(s2))`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3, 4}, s2 = {2, 3}' },
            { type: 'output', text: 's1.issuperset(s2)' },
            { type: 'output', text: 'True' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Elementos en común', desc: 'Comprobar elementos en común.',
        code: `def ejercicio_11():\n    s1 = {1, 2, 3}\n    s2 = {4, 5, 3}\n    if s1.intersection(s2):\n        print("Tienen elementos en común")\n    else:\n        print("No tienen elementos en común")`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3}, s2 = {4, 5, 3}' },
            { type: 'output', text: 's1.intersection(s2) -> {3} (Verdadero)' },
            { type: 'output', text: 'Tienen elementos en común' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Simétrica in-place', desc: 'Diferencia simétrica in-place.',
        code: `def ejercicio_12():\n    s1 = {1, 2, 3}\n    s2 = {2, 3, 4}\n    s1.symmetric_difference_update(s2)\n    print(s1)`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3}, s2 = {2, 3, 4}' },
            { type: 'output', text: 's1.symmetric_difference_update(s2)' },
            { type: 'output', text: '{1, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Intersección in-place', desc: 'Intersección in-place.',
        code: `def ejercicio_13():\n    s1 = {1, 2, 3, 4}\n    s2 = {3, 4, 5}\n    s1.intersection_update(s2)\n    print(s1)`,
        simulation: [
            { type: 'output', text: 's1 = {1, 2, 3, 4}, s2 = {3, 4, 5}' },
            { type: 'output', text: 's1.intersection_update(s2)' },
            { type: 'output', text: '{3, 4}' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Comunes en listas', desc: 'Elementos comunes entre listas.',
        code: `def ejercicio_14():\n    list1 = [1, 2, 2, 3]\n    list2 = [2, 3, 4]\n    common = list(set(list1) & set(list2))\n    print(common)`,
        simulation: [
            { type: 'output', text: 'list1 = [1, 2, 2, 3]' },
            { type: 'output', text: 'list2 = [2, 3, 4]' },
            { type: 'output', text: 'set(list1) & set(list2)' },
            { type: 'output', text: '[2, 3]' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Frozenset', desc: 'Conjunto inmutable.',
        code: `def ejercicio_15():\n    s = frozenset([1, 2, 3])\n    print(s)`,
        simulation: [
            { type: 'output', text: 's = frozenset([1, 2, 3])' },
            { type: 'output', text: 'frozenset({1, 2, 3})' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'conjuntos', title: 'Palabras únicas', desc: 'Contar palabras únicas.',
        code: `def ejercicio_16():\n    text = "hola hola mundo mundo"\n    unique = set(text.split())\n    print("Número de palabras únicas:", len(unique))`,
        simulation: [
            { type: 'output', text: 'text = "hola hola mundo mundo"' },
            { type: 'output', text: 'split() -> ["hola", "hola", "mundo", "mundo"]' },
            { type: 'output', text: 'set() elimina duplicados -> {"hola", "mundo"}' },
            { type: 'output', text: 'Número de palabras únicas: 2' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },

    // --- CLASES (06) ---
    { 
        module: 'clases', title: 'Clase Vehicle', desc: 'Crear clase Vehicle.',
        code: `class Vehicle:\n    def __init__(self, max_speed, mileage):\n        self.max_speed = max_speed\n        self.mileage = mileage\n\ncarro = Vehicle(240, 18)\nprint(carro.max_speed, carro.mileage)`,
        simulation: [
            { type: 'output', text: 'Definiendo clase Vehicle...' },
            { type: 'output', text: 'Instanciando carro = Vehicle(240, 18)' },
            { type: 'output', text: '240 18' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Herencia simple', desc: 'Herencia simple: Bus.',
        code: `class Vehicle:\n    def __init__(self, name, max_speed, mileage):\n        self.name = name\n        self.max_speed = max_speed\n        self.mileage = mileage\n\nclass Bus(Vehicle):\n    pass\n\nbus = Bus("School Volvo", 180, 12)\nprint(bus.name, bus.max_speed, bus.mileage)`,
        simulation: [
            { type: 'output', text: 'Definiendo clase Vehicle...' },
            { type: 'output', text: 'Definiendo clase Bus(Vehicle)...' },
            { type: 'output', text: 'Instanciando bus = Bus("School Volvo", 180, 12)' },
            { type: 'output', text: 'School Volvo 180 12' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Herencia vacía', desc: 'Herencia: Bus sin añadir nada.',
        code: `class Vehicle:\n    def __init__(self, name, max_speed, mileage):\n        self.name = name\n        self.max_speed = max_speed\n        self.mileage = mileage\n\nclass Bus(Vehicle):\n    pass\n\nbus = Bus("School Volvo", 180, 12)\nprint(bus.name)`,
        simulation: [
            { type: 'output', text: 'Instanciando bus...' },
            { type: 'output', text: 'School Volvo' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Sobrescritura', desc: 'Sobrescritura de métodos.',
        code: `class Vehicle:\n    def seating_capacity(self, capacity):\n        return f"Capacidad es {capacity} pasajeros"\n\nclass Bus(Vehicle):\n    def seating_capacity(self, capacity=50):\n        return super().seating_capacity(capacity)\n\nbus = Bus()\nprint(bus.seating_capacity())`,
        simulation: [
            { type: 'output', text: 'Instanciando bus = Bus()...' },
            { type: 'output', text: 'Llamando a seating_capacity()...' },
            { type: 'output', text: 'Capacidad es 50 pasajeros' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Atributos de clase', desc: 'Uso de atributos de clase.',
        code: `class Vehicle:\n    color = "White"\n\nclass Bus(Vehicle):\n    pass\n\nbus = Bus()\nprint(bus.color)`,
        simulation: [
            { type: 'output', text: 'Instanciando bus = Bus()...' },
            { type: 'output', text: 'Accediendo a atributo de clase...' },
            { type: 'output', text: 'White' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Super()', desc: 'Redefinición de método.',
        code: `class Vehicle:\n    def fare(self):\n        return 100\n\nclass Bus(Vehicle):\n    def fare(self):\n        base = super().fare()\n        return base + base * 0.10\n\nbus = Bus()\nprint("Tarifa total:", bus.fare())`,
        simulation: [
            { type: 'output', text: 'Instanciando bus = Bus()...' },
            { type: 'output', text: 'Llamando a fare()...' },
            { type: 'output', text: 'super().fare() devuelve 100' },
            { type: 'output', text: '100 + (100 * 0.10) = 110' },
            { type: 'output', text: 'Tarifa total: 110.0' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Type()', desc: 'Identificar tipo.',
        code: `class Vehicle: pass\nclass Bus(Vehicle): pass\nbus = Bus()\nprint(type(bus))`,
        simulation: [
            { type: 'output', text: 'Instanciando bus = Bus()...' },
            { type: 'output', text: "<class '__main__.Bus'>" },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Isinstance()', desc: 'Verificar instancia.',
        code: `class Vehicle: pass\nclass Bus(Vehicle): pass\nbus = Bus()\nprint(isinstance(bus, Vehicle))`,
        simulation: [
            { type: 'output', text: 'Instanciando bus = Bus()...' },
            { type: 'output', text: 'Evaluando isinstance(bus, Vehicle)...' },
            { type: 'output', text: 'True' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Issubclass()', desc: 'Relación entre clases.',
        code: `class Animal: pass\nclass Dog(Animal): pass\nprint(issubclass(Dog, Animal))`,
        simulation: [
            { type: 'output', text: 'Definiendo clases...' },
            { type: 'output', text: 'Evaluando issubclass(Dog, Animal)...' },
            { type: 'output', text: 'True' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Polimorfismo', desc: 'Polimorfismo con geometría.',
        code: `class Circle:\n    def area(self): return 3.14 * 2**2\nclass Square:\n    def area(self): return 4 * 4\n\nfor shape in [Circle(), Square()]:\n    print(shape.area())`,
        simulation: [
            { type: 'output', text: 'Instanciando Circle y Square...' },
            { type: 'output', text: 'Iterando y llamando a area()...' },
            { type: 'output', text: '12.56' },
            { type: 'output', text: '16' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Constructor', desc: 'Constructor __init__.',
        code: `class Student:\n    def __init__(self, name):\n        print("Constructor ejecutado")\n        self.name = name\n\ns1 = Student("Emma")`,
        simulation: [
            { type: 'output', text: 'Instanciando s1 = Student("Emma")...' },
            { type: 'output', text: 'Constructor ejecutado' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Destructor', desc: 'Destructor __del__.',
        code: `class Student:\n    def __init__(self, name):\n        self.name = name\n    def __del__(self):\n        print("Objeto eliminado")\n\ns1 = Student("Emma")\ndel s1`,
        simulation: [
            { type: 'output', text: 'Instanciando s1 = Student("Emma")...' },
            { type: 'output', text: 'Eliminando objeto con del s1...' },
            { type: 'output', text: 'Objeto eliminado' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'clases', title: 'Encapsulación', desc: 'Encapsulación básica.',
        code: `class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    def show(self):\n        print(f"Empleado: {self.name} - Salario: {self.salary}")\n\nemp = Employee("Jessa", 8000)\nemp.show()`,
        simulation: [
            { type: 'output', text: 'Instanciando emp = Employee("Jessa", 8000)...' },
            { type: 'output', text: 'Llamando a show()...' },
            { type: 'output', text: 'Empleado: Jessa - Salario: 8000' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },

    // --- OBJETOS (07) ---
    { 
        module: 'objetos', title: 'Clase Estudiante', desc: 'Clase Estudiante con nota.',
        code: `class Estudiante:\n    def __init__(self, nombre, nota):\n        self.nombre = nombre\n        self.nota = nota\n    def aprobo(self):\n        return self.nota >= 6\n\nalumno = Estudiante("Santiago", 5)\nprint(f"¿Aprobó? {alumno.aprobo()}")`,
        simulation: [
            { type: 'output', text: 'Instanciando alumno = Estudiante("Santiago", 5)...' },
            { type: 'output', text: 'Llamando a aprobo()...' },
            { type: 'output', text: 'nota 5 >= 6 -> False' },
            { type: 'output', text: '¿Aprobó? False' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'objetos', title: 'Clase Persona', desc: 'Clase Persona cumpleaños.',
        code: `class Persona:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n    def cumpleanos(self, veces):\n        for _ in range(veces):\n            self.edad += 1\n            print(f"Feliz cumpleaños {self.nombre}, ahora tienes {self.edad}")\n\np = Persona("Ana", 24)\np.cumpleanos(2)`,
        simulation: [
            { type: 'output', text: 'Instanciando p = Persona("Ana", 24)...' },
            { type: 'output', text: 'Llamando a cumpleanos(2)...' },
            { type: 'output', text: 'Feliz cumpleaños Ana, ahora tienes 25' },
            { type: 'output', text: 'Feliz cumpleaños Ana, ahora tienes 26' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'objetos', title: 'Clase Calculadora', desc: 'Clase Calculadora.',
        code: `class Calculadora:\n    def __init__(self, a, b):\n        self.a = a\n        self.b = b\n    def suma(self): return self.a + self.b\n    def resta(self): return self.a - self.b\n\ncalc = Calculadora(10, 5)\nprint(f"Suma: {calc.suma()}, Resta: {calc.resta()}")`,
        simulation: [
            { type: 'output', text: 'Instanciando calc = Calculadora(10, 5)...' },
            { type: 'output', text: 'Suma: 15, Resta: 5' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'objetos', title: 'Herencia Persona', desc: 'Herencia: Persona → Estudiante.',
        code: `class Persona:\n    def __init__(self, nombre, apellido):\n        self.nombre = nombre\n        self.apellido = apellido\n\nclass Estudiante(Persona):\n    pass\n\nest = Estudiante("Mario", "Dominguez")\nprint(est.nombre, est.apellido)`,
        simulation: [
            { type: 'output', text: 'Instanciando est = Estudiante("Mario", "Dominguez")...' },
            { type: 'output', text: 'Mario Dominguez' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'objetos', title: 'Herencia Fabrica', desc: 'Herencia: Fabrica → Carro.',
        code: `class Fabrica:\n    def __init__(self, llantas, color):\n        self.llantas = llantas\n        self.color = color\n\nclass Carro(Fabrica):\n    pass\n\nmi_auto = Carro(4, "Gris")\nprint(f"Auto: {mi_auto.llantas} llantas, {mi_auto.color}")`,
        simulation: [
            { type: 'output', text: 'Instanciando mi_auto = Carro(4, "Gris")...' },
            { type: 'output', text: 'Auto: 4 llantas, Gris' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'objetos', title: 'Herencia Marino', desc: 'Herencia: Marino → Pulpo.',
        code: `class Marino:\n    def hablar(self):\n        print("Hola, soy un animal marino!")\n\nclass Pulpo(Marino):\n    def hablar(self):\n        print("Hola, soy un Pulpo!")\n\np = Pulpo()\np.hablar()`,
        simulation: [
            { type: 'output', text: 'Instanciando p = Pulpo()...' },
            { type: 'output', text: 'Llamando a hablar()...' },
            { type: 'output', text: 'Hola, soy un Pulpo!' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    },
    { 
        module: 'objetos', title: 'Herencia múltiple', desc: 'Herencia múltiple: Universidad.',
        code: `class Universidad:\n    def __init__(self, nombre_univ):\n        self.nombre_univ = nombre_univ\n\nclass Carrera:\n    def __init__(self, especialidad):\n        self.especialidad = especialidad\n\nclass Estudiante(Universidad, Carrera):\n    def __init__(self, nombre_univ, especialidad, nombre):\n        Universidad.__init__(self, nombre_univ)\n        Carrera.__init__(self, especialidad)\n        self.nombre = nombre\n\npersona = Estudiante("Central", "Ingeniería", "David")\nprint(persona.nombre, persona.nombre_univ, persona.especialidad)`,
        simulation: [
            { type: 'output', text: 'Instanciando persona = Estudiante(...)...' },
            { type: 'output', text: 'David Central Ingeniería' },
            { type: 'success', text: '[Programa finalizado con éxito]' }
        ]
    }
];

// ============================================================
// 5. LÓGICA DE LA INTERFAZ Y TERMINAL
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    await loadMotion();

    const timelineContainer = document.getElementById('timelineContainer');
    const grid = document.getElementById('exercisesGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.py-filter-btn');
    
    const modalElement = document.getElementById('codeModal');
    const modal = new bootstrap.Modal(modalElement);
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const modalCode = document.getElementById('modalCode');
    
    const tabCodeBtn = document.getElementById('tabCodeBtn');
    const tabSimBtn = document.getElementById('tabSimBtn');
    const tabCodeContent = document.getElementById('tabCodeContent');
    const tabSimContent = document.getElementById('tabSimContent');
    const terminalOutput = document.getElementById('terminalOutput');
    const runSimBtn = document.getElementById('runSimBtn');
    const clearSimBtn = document.getElementById('clearSimBtn');

    let currentSimulation = [];
    let simTimeout;

    // --- 1. Renderizar Timeline ---
    modules.forEach((mod) => {
        const item = document.createElement('div');
        item.className = 'py-timeline-item';
        item.innerHTML = `
            <div class="py-timeline-node"></div>
            <div class="py-module-card">
                <div class="py-module-title"><i class="fa-solid ${mod.icon}" style="color: var(--color-accent-2)"></i> ${mod.title}</div>
                <p class="py-module-desc">${mod.desc}</p>
                <span class="py-module-tag">${mod.tag}</span>
            </div>
        `;
        timelineContainer.appendChild(item);
    });

    // --- 2. Renderizar Ejercicios ---
    function renderExercises(filter = 'todos', search = '') {
        grid.innerHTML = '';
        
        const filtered = exercises.filter(ex => {
            const matchFilter = filter === 'todos' || ex.module === filter;
            const matchSearch = ex.title.toLowerCase().includes(search.toLowerCase());
            return matchFilter && matchSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div class="text-center w-100 py-5 text-muted"><h4>No se encontraron ejercicios.</h4></div>`;
            return;
        }

        filtered.forEach((ex, i) => {
            const card = document.createElement('div');
            card.className = 'py-card';
            const num = String(i + 1).padStart(2, '0');
            
            card.innerHTML = `
                <div class="py-card__header">
                    <h3 class="py-card__title"><span class="text-warning">${num}.</span> ${ex.title}</h3>
                    <span class="py-card__module">${ex.module}</span>
                </div>
                <p class="py-card__desc">${ex.desc}</p>
            `;
            
            card.addEventListener('click', () => openExerciseModal(ex, num));
            grid.appendChild(card);
        });

        if (animateFn) {
            animateFn('.py-card', { opacity: [0, 1], y: [20, 0] }, { delay: staggerFn(0.03), duration: 0.4 });
        }
    }

    // --- 3. Lógica de Filtros ---
    let currentFilter = 'todos';
    let currentSearch = '';

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentFilter = e.currentTarget.dataset.filter;
            renderExercises(currentFilter, currentSearch);
        });
    });

    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value;
            renderExercises(currentFilter, currentSearch);
        }, 300);
    });

    // --- 4. Modal y Terminal ---
    function openExerciseModal(ex, num) {
        modalTitle.innerHTML = `<span class="text-warning">${num} /</span> ${ex.title}`;
        modalDesc.textContent = ex.desc;
        modalCode.textContent = ex.code;
        currentSimulation = ex.simulation;
        
        switchTab('code');
        clearTerminal();
        runSimBtn.disabled = false;
        runSimBtn.innerHTML = '<i class="fa-solid fa-play me-2"></i>Ejecutar Simulación';

        modal.show();
    }

    function switchTab(tab) {
        if (tab === 'code') {
            tabCodeBtn.classList.add('active');
            tabSimBtn.classList.remove('active');
            tabCodeContent.classList.add('active');
            tabSimContent.classList.remove('active');
        } else {
            tabSimBtn.classList.add('active');
            tabCodeBtn.classList.remove('active');
            tabSimContent.classList.add('active');
            tabCodeContent.classList.remove('active');
        }
    }

    tabCodeBtn.addEventListener('click', () => switchTab('code'));
    tabSimBtn.addEventListener('click', () => switchTab('sim'));

    // Motor de la Terminal
    function clearTerminal() {
        clearTimeout(simTimeout);
        terminalOutput.innerHTML = '<div class="py-term-line text-muted">> Esperando ejecución...</div>';
    }

    clearSimBtn.addEventListener('click', () => {
        clearTerminal();
        runSimBtn.disabled = false;
        runSimBtn.innerHTML = '<i class="fa-solid fa-play me-2"></i>Ejecutar Simulación';
    });

    runSimBtn.addEventListener('click', () => {
        clearTerminal();
        terminalOutput.innerHTML = ''; 
        runSimBtn.disabled = true;
        runSimBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Ejecutando...';
        
        let stepIndex = 0;

        function processNextStep() {
            if (stepIndex >= currentSimulation.length) {
                const endLine = document.createElement('div');
                endLine.className = 'py-term-line text-muted mt-2';
                endLine.innerHTML = `[Proceso finalizado] <span class="py-cursor"></span>`;
                terminalOutput.appendChild(endLine);
                
                runSimBtn.disabled = false;
                runSimBtn.innerHTML = '<i class="fa-solid fa-play me-2"></i>Ejecutar Simulación';
                return;
            }

            const step = currentSimulation[stepIndex];
            const line = document.createElement('div');
            line.className = 'py-term-line';

            if (step.type === 'input') {
                line.className += ' py-term-input';
                // Simulamos que el usuario escribe
                line.innerHTML = `> ${step.text} <span class="text-white">${step.val}</span>`;
            } else if (step.type === 'output') {
                line.className += ' py-term-output';
                line.textContent = step.text;
            } else if (step.type === 'success') {
                line.className += ' py-term-success';
                line.textContent = step.text;
            }

            terminalOutput.appendChild(line);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;

            stepIndex++;
            // Pausa dinámica: más tiempo para inputs, menos para outputs
            const delay = step.type === 'input' ? 700 : 400;
            simTimeout = setTimeout(processNextStep, delay); 
        }

        processNextStep();
    });

    // Inicializar
    renderExercises();
});