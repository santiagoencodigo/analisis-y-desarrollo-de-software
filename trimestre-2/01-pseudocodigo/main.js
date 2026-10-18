// ============================================================
// 1. IMPORTACIÓN DINÁMICA Y SEGURA DE MOTION
// ============================================================
let animateFn = () => {};
let staggerFn = () => {};

async function loadMotion() {
    try {
        const motion = await import("https://cdn.jsdelivr.net/npm/motion@12/+esm");
        animateFn = motion.animate;
        staggerFn = motion.stagger;
    } catch (e) {
        console.warn("Motion library no pudo cargarse. Las animaciones se omitirán, pero los ejercicios funcionarán.");
    }
}

// ============================================================
// 2. DATOS DE LOS 41 EJERCICIOS (01-pseudocodigo a 05-pseudocodigo)
// ============================================================
const exercises = [
    // --- PARTE 1 (01-pseudocodigo.md) ---
    {
        id: 1,
        title: "Comparar dos números (mayor)",
        category: "condicionales",
        description: "Determinar cuál de dos números ingresados es el mayor. Si son iguales, mostrar un mensaje de error.",
        code: `Algoritmo Ejercicio_1\n\tEscribir "Ingrese el numero 1 "\n\tLeer numero1 \n\tEscribir "Ingrese el numero 2 "\n\tLeer numero2\n\tSi numero1 = numero2 Entonces\n\t\tEscribir "Los numeros no pueden ser iguales"\n\tSiNo\n\t\tsi numero1 > numero2 Entonces\n\t\t\tEscribir "El numero mayor es: " numero1\n\t\tSiNo\n\t\t\tEscribir "El numero mayor es: " numero2\n\t\tFinSi\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio del algoritmo" },
            { line: 2, vars: { numero1: "?" }, msg: "Solicitando número 1" },
            { line: 3, vars: { numero1: 10 }, msg: "numero1 = 10" },
            { line: 4, vars: { numero1: 10, numero2: "?" }, msg: "Solicitando número 2" },
            { line: 5, vars: { numero1: 10, numero2: 15 }, msg: "numero2 = 15" },
            { line: 6, vars: { numero1: 10, numero2: 15 }, msg: "¿numero1 = numero2? 10 = 15 → Falso" },
            { line: 9, vars: { numero1: 10, numero2: 15 }, msg: "¿numero1 > numero2? 10 > 15 → Falso" },
            { line: 12, vars: { numero1: 10, numero2: 15, mayor: 15 }, msg: "El número mayor es: 15" },
            { line: 15, vars: { numero1: 10, numero2: 15, mayor: 15 }, msg: "Fin del algoritmo" }
        ]
    },
    {
        id: 2,
        title: "Comparar dos números (menor)",
        category: "condicionales",
        description: "Determinar cuál de dos números ingresados es el menor. Si son iguales, mostrar un mensaje de error.",
        code: `Algoritmo Ejercicio_1\n\tEscribir "Ingrese el numero 1 "\n\tLeer numero1 \n\tEscribir "Ingrese el numero 2 "\n\tLeer numero2\n\tSi numero1 = numero2 Entonces\n\t\tEscribir "Los numeros no pueden ser iguales"\n\tSiNo\n\t\tsi numero1 < numero2 Entonces\n\t\t\tEscribir "El numero menor es: " numero1\n\t\tSiNo\n\t\t\tEscribir "El numero menor es: " numero2\n\t\tFinSi\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { numero1: "?" }, msg: "Solicitando número 1" },
            { line: 3, vars: { numero1: 25 }, msg: "numero1 = 25" },
            { line: 4, vars: { numero1: 25, numero2: "?" }, msg: "Solicitando número 2" },
            { line: 5, vars: { numero1: 25, numero2: 8 }, msg: "numero2 = 8" },
            { line: 6, vars: { numero1: 25, numero2: 8 }, msg: "¿numero1 = numero2? 25 = 8 → Falso" },
            { line: 9, vars: { numero1: 25, numero2: 8 }, msg: "¿numero1 < numero2? 25 < 8 → Falso" },
            { line: 12, vars: { numero1: 25, numero2: 8, menor: 8 }, msg: "El número menor es: 8" },
            { line: 15, vars: { numero1: 25, numero2: 8, menor: 8 }, msg: "Fin" }
        ]
    },
    {
        id: 3,
        title: "Suma de dos números",
        category: "operaciones",
        description: "Leer dos números y mostrar su suma.",
        code: `Algoritmo Ejercicio_1_b\n\tDefinir A, B, suma Como Real\n\tEscribir "ingrese el primer numero: " \n\tLeer A \n\tEscribir "Ingrese el segundo numero: "\n\tLeer B \n\tsuma <- A + B \n\tEscribir "La suma es: ",suma\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { A: "?", B: "?", suma: "?" }, msg: "Definiendo variables" },
            { line: 3, vars: { A: "?" }, msg: "Solicitando A" },
            { line: 4, vars: { A: 5 }, msg: "A = 5" },
            { line: 5, vars: { A: 5, B: "?" }, msg: "Solicitando B" },
            { line: 6, vars: { A: 5, B: 7 }, msg: "B = 7" },
            { line: 7, vars: { A: 5, B: 7, suma: 12 }, msg: "suma = 5 + 7 = 12" },
            { line: 8, vars: { A: 5, B: 7, suma: 12 }, msg: "La suma es: 12" },
            { line: 9, vars: { A: 5, B: 7, suma: 12 }, msg: "Fin" }
        ]
    },
    {
        id: 4,
        title: "Menor de tres números",
        category: "condicionales",
        description: "Determinar el número menor entre tres valores ingresados. Validar que no sean iguales.",
        code: `Algoritmo numeros_3\n\tEscribir "escriba el numero 1: "\n\tleer numero1\n\tescribir "escriba el numeron 2:"\n\tleer numero2\n\tescribir "escriba el numero 3"\n\tleer numero3\n\tsi (numero1 = numero2) o (numero1 = numero3) Entonces\n\t\tescribir "el numero debe ser diferentes"\n\tfin si\n\tsi numero2 = numero3 Entonces\n\t\tEscribir "los numeros no puden ser iguales"\n\tSiNo\n\t\tsi (numero1 < numero2) y (numero1 < numero3) Entonces\n\t\t\tescribir "El numero menor es: " numero1\n\t\tsino \n\t\t\tsi numero2 < numero3 Entonces\n\t\t\t\tEscribir "El numero menor es: " numero2\n\t\t\tSiNo\n\t\t\t\tEscribir "El numero menor es : " numero1\n\t\t\tfin si\n\t\tFinSi\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { numero1: "?" }, msg: "Solicitando número 1" },
            { line: 3, vars: { numero1: 9 }, msg: "numero1 = 9" },
            { line: 4, vars: { numero1: 9, numero2: "?" }, msg: "Solicitando número 2" },
            { line: 5, vars: { numero1: 9, numero2: 4 }, msg: "numero2 = 4" },
            { line: 6, vars: { numero1: 9, numero2: 4, numero3: "?" }, msg: "Solicitando número 3" },
            { line: 7, vars: { numero1: 9, numero2: 4, numero3: 6 }, msg: "numero3 = 6" },
            { line: 8, vars: { numero1: 9, numero2: 4, numero3: 6 }, msg: "¿numero1 = numero2? 9=4 Falso; ¿numero1 = numero3? 9=6 Falso" },
            { line: 11, vars: { numero1: 9, numero2: 4, numero3: 6 }, msg: "¿numero2 = numero3? 4=6 Falso" },
            { line: 14, vars: { numero1: 9, numero2: 4, numero3: 6 }, msg: "¿numero1 < numero2? 9<4 Falso" },
            { line: 17, vars: { numero1: 9, numero2: 4, numero3: 6 }, msg: "¿numero2 < numero3? 4<6 Verdadero" },
            { line: 18, vars: { numero1: 9, numero2: 4, numero3: 6, menor: 4 }, msg: "El número menor es: 4" },
            { line: 24, vars: { numero1: 9, numero2: 4, numero3: 6, menor: 4 }, msg: "Fin" }
        ]
    },
    {
        id: 5,
        title: "Hipotenusa de un triángulo",
        category: "operaciones",
        description: "Calcular la hipotenusa de un triángulo rectángulo dados los catetos, usando el teorema de Pitágoras.",
        code: `Algoritmo Ejercicio_4\n\tEscribir "Ingrese valor CatA: "\n\tLeer CatA\n\tEscribir "Ingrese Valor CatB: "\n\tLeer CatB\n\tCatA2 = CatA * CatA\n\tCatB2 = CatB * CatB\n\tHipotenusa = RC (CatA2 + CatB2)\n\tEscribir "El valor de la hipotenusa del triangulo rectangulo es: " Hipotenusa\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { CatA: "?" }, msg: "Solicitando CatA" },
            { line: 3, vars: { CatA: 3 }, msg: "CatA = 3" },
            { line: 4, vars: { CatA: 3, CatB: "?" }, msg: "Solicitando CatB" },
            { line: 5, vars: { CatA: 3, CatB: 4 }, msg: "CatB = 4" },
            { line: 6, vars: { CatA: 3, CatB: 4, CatA2: 9 }, msg: "CatA2 = 3*3 = 9" },
            { line: 7, vars: { CatA: 3, CatB: 4, CatA2: 9, CatB2: 16 }, msg: "CatB2 = 4*4 = 16" },
            { line: 8, vars: { CatA: 3, CatB: 4, CatA2: 9, CatB2: 16, Hipotenusa: 5 }, msg: "Hipotenusa = RC(9+16) = 5" },
            { line: 9, vars: { CatA: 3, CatB: 4, CatA2: 9, CatB2: 16, Hipotenusa: 5 }, msg: "El valor de la hipotenusa es: 5" },
            { line: 10, vars: { CatA: 3, CatB: 4, CatA2: 9, CatB2: 16, Hipotenusa: 5 }, msg: "Fin" }
        ]
    },
    {
        id: 6,
        title: "Área de un cuadrado",
        category: "operaciones",
        description: "Calcular el área de un cuadrado dado su lado.",
        code: `Algoritmo Ejercicio_4_b\n\tEscribir "Cuanto mide el lado del cuadrado: "\n\tLeer lado\n\tArea = lado * lado\n\tMostrar "El area del cuadrado es: " Area\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { lado: "?" }, msg: "Solicitando lado" },
            { line: 3, vars: { lado: 5 }, msg: "lado = 5" },
            { line: 4, vars: { lado: 5, Area: 25 }, msg: "Area = 5*5 = 25" },
            { line: 5, vars: { lado: 5, Area: 25 }, msg: "El área del cuadrado es: 25" },
            { line: 6, vars: { lado: 5, Area: 25 }, msg: "Fin" }
        ]
    },
    {
        id: 7,
        title: "Área y volumen de un cilindro",
        category: "operaciones",
        description: "Calcular el área superficial y el volumen de un cilindro dado su radio y altura.",
        code: `Algoritmo Ejercicio_5\n\tEscribir "Escribe el Radio del cilindro" \n\tLEER R  \n\tEscribir "Escribe la altura del cilindro"\n\tLEER H  \n\tArea = 2 * 3.1416 * R * (R + H)\n\tVolumen = 3.1416 * R^2 * H\n\tESCRIBIR "Área del cilindro: ", Area\n\tESCRIBIR "Volumen del cilindro: ", Volumen\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { R: "?" }, msg: "Solicitando radio" },
            { line: 3, vars: { R: 2 }, msg: "R = 2" },
            { line: 4, vars: { R: 2, H: "?" }, msg: "Solicitando altura" },
            { line: 5, vars: { R: 2, H: 5 }, msg: "H = 5" },
            { line: 6, vars: { R: 2, H: 5, Area: 87.96 }, msg: "Area = 2*3.1416*2*(2+5) ≈ 87.96" },
            { line: 7, vars: { R: 2, H: 5, Area: 87.96, Volumen: 62.83 }, msg: "Volumen = 3.1416*2^2*5 ≈ 62.83" },
            { line: 8, vars: { R: 2, H: 5, Area: 87.96, Volumen: 62.83 }, msg: "Área del cilindro: 87.96" },
            { line: 9, vars: { R: 2, H: 5, Area: 87.96, Volumen: 62.83 }, msg: "Volumen del cilindro: 62.83" },
            { line: 10, vars: { R: 2, H: 5, Area: 87.96, Volumen: 62.83 }, msg: "Fin" }
        ]
    },
    {
        id: 8,
        title: "Área de un rectángulo",
        category: "operaciones",
        description: "Calcular el área de un rectángulo dados su ancho y largo.",
        code: `Algoritmo Ejercio_5_a\n\tEscribir "Digita el ancho del rectangulo" \n\tLeer ancho\n\tEscribir "Digita el largo del rectangulo" \n\tLeer largo \n\tArea = ancho * largo \n\tEscribir "area del rectangulo ", Area\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { ancho: "?" }, msg: "Solicitando ancho" },
            { line: 3, vars: { ancho: 4 }, msg: "ancho = 4" },
            { line: 4, vars: { ancho: 4, largo: "?" }, msg: "Solicitando largo" },
            { line: 5, vars: { ancho: 4, largo: 6 }, msg: "largo = 6" },
            { line: 6, vars: { ancho: 4, largo: 6, Area: 24 }, msg: "Area = 4*6 = 24" },
            { line: 7, vars: { ancho: 4, largo: 6, Area: 24 }, msg: "Área del rectángulo: 24" },
            { line: 8, vars: { ancho: 4, largo: 6, Area: 24 }, msg: "Fin" }
        ]
    },
    {
        id: 9,
        title: "Par o impar",
        category: "condicionales",
        description: "Determinar si un número ingresado es par o impar.",
        code: `Algoritmo Ejercicio_6_a\n\tEscribir "ingresa N"\n\tLeer N\n\tSi N % 2 = 0 Entonces\n\t\tEscribir "El numero es par"\n\tSiNo\n\t\tEscribir "El numero es impar"\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { N: "?" }, msg: "Solicitando N" },
            { line: 3, vars: { N: 7 }, msg: "N = 7" },
            { line: 4, vars: { N: 7 }, msg: "¿7 % 2 = 0? → 1 = 0 → Falso" },
            { line: 6, vars: { N: 7 }, msg: "El número es impar" },
            { line: 7, vars: { N: 7 }, msg: "Fin" }
        ]
    },
    {
        id: 10,
        title: "Contar números en rangos",
        category: "ciclos",
        description: "Leer N números y contar cuántos están entre 50 y 75, cuántos son mayores de 80 y cuántos menores de 30.",
        code: `Algoritmo Ejercicio_6_b\n\tDefinir n, i, numero Como Entero\n\tDefinir entre50y75, mayores80, menores30 Como Entero\n\tentre50y75 <- 0\n\tmayores80 <- 0\n\tmenores30 <- 0\n\tEscribir 'Ingresa la cantidad de numeros de la lista (0 para terminar)'\n\tLeer n\n\tSi n <> 0 Entonces\n\t\tPara i <- 1 Hasta n Con Paso 1 Hacer\n\t\t\tEscribir 'Ingrese el numero ', i, ':'\n\t\t\tLeer numero\n\t\t\tSi numero >= 50 Y numero <= 75 Entonces\n\t\t\t\tentre50y75 <- entre50y75 + 1\n\t\t\tFinSi\n\t\t\tSi numero > 80 Entonces\n\t\t\t\tmayores80 <- mayores80 + 1\n\t\t\tFinSi\n\t\t\tSi numero < 30 Entonces\n\t\t\t\tmenores30 <- menores30 + 1\n\t\t\tFinSi\n\t\tFinPara\n\t\tEscribir 'Cantidad de numeros entre 50 y 75: ', entre50y75\n\t\tEscribir 'Cantidad de numeros mayores de 80: ', mayores80\n\t\tEscribir 'Cantidad de numeros menores 30: ', menores30\n\tSiNo\n\t\tEscribir 'No hay numeros para procesar, finalizando.'\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { n: "?", i: "?", numero: "?" }, msg: "Definiendo variables" },
            { line: 3, vars: { entre50y75: "?", mayores80: "?", menores30: "?" }, msg: "Definiendo contadores" },
            { line: 4, vars: { entre50y75: 0 }, msg: "entre50y75 = 0" },
            { line: 5, vars: { mayores80: 0 }, msg: "mayores80 = 0" },
            { line: 6, vars: { menores30: 0 }, msg: "menores30 = 0" },
            { line: 7, vars: { n: "?" }, msg: "Solicitando cantidad de números" },
            { line: 8, vars: { n: 3 }, msg: "n = 3" },
            { line: 9, vars: { n: 3 }, msg: "n ≠ 0 → Entrar al ciclo" },
            { line: 10, vars: { n: 3, i: 1 }, msg: "i = 1" },
            { line: 11, vars: { n: 3, i: 1, numero: "?" }, msg: "Solicitando número 1" },
            { line: 12, vars: { n: 3, i: 1, numero: 60 }, msg: "numero = 60" },
            { line: 13, vars: { n: 3, i: 1, numero: 60 }, msg: "¿60 >= 50 Y 60 <= 75? → Verdadero" },
            { line: 14, vars: { entre50y75: 1, n: 3, i: 1, numero: 60 }, msg: "entre50y75 = 1" },
            { line: 18, vars: { entre50y75: 1, n: 3, i: 2 }, msg: "i = 2" },
            { line: 11, vars: { entre50y75: 1, n: 3, i: 2, numero: "?" }, msg: "Solicitando número 2" },
            { line: 12, vars: { entre50y75: 1, n: 3, i: 2, numero: 85 }, msg: "numero = 85" },
            { line: 13, vars: { entre50y75: 1, n: 3, i: 2, numero: 85 }, msg: "¿85 >= 50 Y 85 <= 75? → Falso" },
            { line: 16, vars: { entre50y75: 1, n: 3, i: 2, numero: 85 }, msg: "¿85 > 80? → Verdadero" },
            { line: 17, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 2, numero: 85 }, msg: "mayores80 = 1" },
            { line: 18, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 3 }, msg: "i = 3" },
            { line: 11, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 3, numero: "?" }, msg: "Solicitando número 3" },
            { line: 12, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 3, numero: 25 }, msg: "numero = 25" },
            { line: 13, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 3, numero: 25 }, msg: "¿25 >= 50 Y 25 <= 75? → Falso" },
            { line: 16, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 3, numero: 25 }, msg: "¿25 > 80? → Falso" },
            { line: 19, vars: { entre50y75: 1, mayores80: 1, n: 3, i: 3, numero: 25 }, msg: "¿25 < 30? → Verdadero" },
            { line: 20, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3, i: 3, numero: 25 }, msg: "menores30 = 1" },
            { line: 22, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3, i: 4 }, msg: "i = 4, ciclo termina" },
            { line: 24, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Cantidad entre 50 y 75: 1" },
            { line: 25, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Cantidad mayores de 80: 1" },
            { line: 26, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Cantidad menores de 30: 1" },
            { line: 30, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 11,
        title: "Clasificación de notas",
        category: "ciclos",
        description: "Clasificar una nota entre 1 y 20 en letras (A, B, C, D, E) según rangos.",
        code: `Algoritmo Contador_de_notas\n\tDefinir nota Como Entero\n\tEscribir "Ingrese una calificación entre 1 y 20 (0 para salir): "\n\tLeer nota\n\tMientras nota >= 1 Y nota <= 20 Hacer\n\t\tSi nota >= 19 Y nota <= 20 Entonces\n\t\t\tEscribir "Calificación: A"\n\t\tSino\n\t\t\tSi nota >= 16 Y nota <= 18 Entonces\n\t\t\t\tEscribir "Calificación: B"\n\t\t\tSino\n\t\t\t\tSi nota >= 13 Y nota <= 15 Entonces\n\t\t\t\t\tEscribir "Calificación: C"\n\t\t\t\tSino\n\t\t\t\t\tSi nota >= 10 Y nota <= 12 Entonces\n\t\t\t\t\t\tEscribir "Calificación: D"\n\t\t\t\t\tSino\n\t\t\t\t\t\tEscribir "Calificación: E"\n\t\t\t\t\tFinSi\n\t\t\t\tFinSi\n\t\t\tFinSi\n\t\tFinSi\n\t\tEscribir "Ingrese otra calificación (0 para salir): "\n\t\tLeer nota\n\tFinMientras\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { nota: "?" }, msg: "Definiendo nota" },
            { line: 3, vars: { nota: "?" }, msg: "Solicitando calificación" },
            { line: 4, vars: { nota: 17 }, msg: "nota = 17" },
            { line: 5, vars: { nota: 17 }, msg: "¿17 >= 1 Y 17 <= 20? → Verdadero" },
            { line: 6, vars: { nota: 17 }, msg: "¿17 >= 19 Y 17 <= 20? → Falso" },
            { line: 9, vars: { nota: 17 }, msg: "¿17 >= 16 Y 17 <= 18? → Verdadero" },
            { line: 10, vars: { nota: 17 }, msg: "Calificación: B" },
            { line: 25, vars: { nota: 17 }, msg: "Solicitando otra calificación" },
            { line: 26, vars: { nota: 0 }, msg: "nota = 0" },
            { line: 5, vars: { nota: 0 }, msg: "¿0 >= 1 Y 0 <= 20? → Falso" },
            { line: 27, vars: { nota: 0 }, msg: "Fin del ciclo" },
            { line: 28, vars: { nota: 0 }, msg: "Fin" }
        ]
    },
    {
        id: 12,
        title: "Ordenar dos números",
        category: "condicionales",
        description: "Ordenar dos números de menor a mayor.",
        code: `Algoritmo Ejercicio_8\n\tEscribir "Ingrese el primer numero"\n\tLeer A \n\tEscribir "Ingrese el segundo numero"\n\tLeer B\n\tSi A > B Entonces\n\t\tTemporal = A\n\t\tA = B\n\t\tB = Temporal\n\tFinSi\n\tEscribir "Orden de menor a mayor: ", A, " , ", B\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { A: "?" }, msg: "Solicitando A" },
            { line: 3, vars: { A: 10 }, msg: "A = 10" },
            { line: 4, vars: { A: 10, B: "?" }, msg: "Solicitando B" },
            { line: 5, vars: { A: 10, B: 3 }, msg: "B = 3" },
            { line: 6, vars: { A: 10, B: 3 }, msg: "¿10 > 3? → Verdadero" },
            { line: 7, vars: { A: 10, B: 3, Temporal: 10 }, msg: "Temporal = 10" },
            { line: 8, vars: { A: 3, B: 3, Temporal: 10 }, msg: "A = 3" },
            { line: 9, vars: { A: 3, B: 10, Temporal: 10 }, msg: "B = 10" },
            { line: 11, vars: { A: 3, B: 10 }, msg: "Orden de menor a mayor: 3 , 10" },
            { line: 12, vars: { A: 3, B: 10 }, msg: "Fin" }
        ]
    },
    // --- PARTE 2 (02-pseudocodigo.md) ---
    {
        id: 13,
        title: "Número primo",
        category: "ciclos",
        description: "Determinar si un número es primo o no.",
        code: `Algoritmo Ejercicio_9\n\tJ = 1\n\tS = 0\n\tLeer N\n\tMientras J <= N / 2 Hacer\n\t\tsi N MOD J = 0 Entonces\n\t\t\tS <- S + 1\n\t\tFinSi\n\t\tJ <- J + 1\n\tFinMientras\n\tSi S >= 2 Entonces\n\t\tEscribir N " no es primo"\n\tSiNo\n\t\tEscribir N " es primo"\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { J: 1 }, msg: "J = 1" },
            { line: 3, vars: { J: 1, S: 0 }, msg: "S = 0" },
            { line: 4, vars: { J: 1, S: 0, N: "?" }, msg: "Solicitando N" },
            { line: 5, vars: { J: 1, S: 0, N: 7 }, msg: "N = 7" },
            { line: 6, vars: { J: 1, S: 0, N: 7 }, msg: "¿1 <= 7/2 (3.5)? → Verdadero" },
            { line: 7, vars: { J: 1, S: 0, N: 7 }, msg: "¿7 MOD 1 = 0? → Verdadero" },
            { line: 8, vars: { J: 1, S: 1, N: 7 }, msg: "S = 1" },
            { line: 10, vars: { J: 2, S: 1, N: 7 }, msg: "J = 2" },
            { line: 6, vars: { J: 2, S: 1, N: 7 }, msg: "¿2 <= 3.5? → Verdadero" },
            { line: 7, vars: { J: 2, S: 1, N: 7 }, msg: "¿7 MOD 2 = 0? → Falso" },
            { line: 10, vars: { J: 3, S: 1, N: 7 }, msg: "J = 3" },
            { line: 6, vars: { J: 3, S: 1, N: 7 }, msg: "¿3 <= 3.5? → Verdadero" },
            { line: 7, vars: { J: 3, S: 1, N: 7 }, msg: "¿7 MOD 3 = 0? → Falso" },
            { line: 10, vars: { J: 4, S: 1, N: 7 }, msg: "J = 4" },
            { line: 6, vars: { J: 4, S: 1, N: 7 }, msg: "¿4 <= 3.5? → Falso, fin del ciclo" },
            { line: 12, vars: { J: 4, S: 1, N: 7 }, msg: "¿S >= 2? → 1 >= 2 → Falso" },
            { line: 15, vars: { J: 4, S: 1, N: 7 }, msg: "7 es primo" },
            { line: 16, vars: { J: 4, S: 1, N: 7 }, msg: "Fin" }
        ]
    },
    {
        id: 14,
        title: "Múltiplos de 2",
        category: "ciclos",
        description: "Mostrar los números del 1 al 20 que son múltiplos de 2.",
        code: `Algoritmo sin_titulo\n\tdiv <- 0\n\tpara num <- 1 Hasta 20 Con Paso 1 Hacer\n\t\tsi num % 2 == 0 Entonces\n\t\t\tEscribir num, " es multiplo de 2" \n\t\tFinSi\n\tFinPara\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { div: 0 }, msg: "div = 0" },
            { line: 3, vars: { div: 0, num: 1 }, msg: "num = 1" },
            { line: 4, vars: { div: 0, num: 1 }, msg: "¿1 % 2 == 0? → Falso" },
            { line: 3, vars: { div: 0, num: 2 }, msg: "num = 2" },
            { line: 4, vars: { div: 0, num: 2 }, msg: "¿2 % 2 == 0? → Verdadero" },
            { line: 5, vars: { div: 0, num: 2 }, msg: "2 es múltiplo de 2" },
            { line: 3, vars: { div: 0, num: 3 }, msg: "num = 3" },
            { line: 4, vars: { div: 0, num: 3 }, msg: "¿3 % 2 == 0? → Falso" },
            { line: 3, vars: { div: 0, num: 4 }, msg: "num = 4" },
            { line: 4, vars: { div: 0, num: 4 }, msg: "¿4 % 2 == 0? → Verdadero" },
            { line: 5, vars: { div: 0, num: 4 }, msg: "4 es múltiplo de 2" },
            { line: 8, vars: { div: 0, num: 20 }, msg: "num = 20, fin del ciclo" },
            { line: 9, vars: { div: 0, num: 20 }, msg: "Fin" }
        ]
    },
    {
        id: 15,
        title: "Convertir horas a minutos",
        category: "operaciones",
        description: "Convertir 5 horas a minutos.",
        code: `Algoritmo sin_titulo\n\tsuma <- 0\n\tnum <- 5\n\tsuma = num * 60\n\tEscribir "los minutos de 5 horas son: " suma\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { suma: 0 }, msg: "suma = 0" },
            { line: 3, vars: { suma: 0, num: 5 }, msg: "num = 5" },
            { line: 4, vars: { suma: 300, num: 5 }, msg: "suma = 5 * 60 = 300" },
            { line: 5, vars: { suma: 300, num: 5 }, msg: "los minutos de 5 horas son: 300" },
            { line: 6, vars: { suma: 300, num: 5 }, msg: "Fin" }
        ]
    },
    {
        id: 16,
        title: "Cálculo de estacionamiento (v1)",
        category: "condicionales",
        description: "Calcular el costo de estacionamiento con tarifa simple (primera hora $1000, adicionales $600).",
        code: `Algoritmo Ejercio_10\n\tDefinir HE, ME, HS, MS, Horas, Pago Como Real\n\tEscribir "Ingrese hora de entrada (formato 24h):"\n\tLeer HE\n\tEscribir "Ingrese minutos de entrada (formato de 60m):"\n\tLeer ME \n\tminuto_hora_E <- ME/60\n\tsuma1 <- HE + minuto_hora_E \n\tEscribir "Ingrese hora de salida (formato 24h, solo la hora):"\n\tLeer HS\n\tEscribir "Ingrese minutos de salida (formato de 60m, solo los minutos):"\n\tLeer MS\n\tminuto_hora_S <- MS/60 \n\tsuma2 <- HS + minuto_hora_S\n\thoras_totales <- suma2 - suma1\n\tSi suma2 < suma1 Entonces\n\t\tEscribir "Error: la hora de salida no puede ser menor que la hora de entrada"\n\tSino\n\t\tHoras <- suma2 - suma1\n\t\tSi Horas <= 0 O Horas <= 1 Entonces\n\t\t\tHoras <- 1\n\t\tFinSi\n\t\tSi Horas = 1 Entonces\n\t\t\tPago <- 1000\n\t\tSino\n\t\t\tPago <- 1000 + (Horas - 1) * 600\n\t\tFinSi\n\t\tEscribir "El total de horas es: ", horas_totales\n\t\tEscribir "El monto a pagar es: ", Pago, " pesos."\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 3, vars: { HE: "?" }, msg: "Solicitando hora entrada" },
            { line: 4, vars: { HE: 8 }, msg: "HE = 8" },
            { line: 5, vars: { HE: 8, ME: "?" }, msg: "Solicitando minutos" },
            { line: 6, vars: { HE: 8, ME: 30 }, msg: "ME = 30" },
            { line: 7, vars: { HE: 8, ME: 30, minuto_hora_E: 0.5 }, msg: "minuto_hora_E = 0.5" },
            { line: 8, vars: { suma1: 8.5 }, msg: "suma1 = 8 + 0.5 = 8.5" },
            { line: 9, vars: { HS: "?" }, msg: "Solicitando hora salida" },
            { line: 10, vars: { HS: 11 }, msg: "HS = 11" },
            { line: 11, vars: { MS: "?" }, msg: "Solicitando min salida" },
            { line: 12, vars: { MS: 15 }, msg: "MS = 15" },
            { line: 13, vars: { minuto_hora_S: 0.25 }, msg: "minuto_hora_S = 0.25" },
            { line: 14, vars: { suma2: 11.25 }, msg: "suma2 = 11 + 0.25 = 11.25" },
            { line: 15, vars: { horas_totales: 2.75 }, msg: "horas_totales = 2.75" },
            { line: 16, vars: {}, msg: "¿11.25 < 8.5? → Falso" },
            { line: 19, vars: { Horas: 2.75 }, msg: "Horas = 2.75" },
            { line: 20, vars: { Horas: 2.75 }, msg: "¿Horas <= 1? → Falso" },
            { line: 23, vars: { Horas: 2.75 }, msg: "¿Horas = 1? → Falso" },
            { line: 26, vars: { Pago: 2050 }, msg: "Pago = 1000 + 1.75*600 = 2050" },
            { line: 28, vars: {}, msg: "El total de horas es: 2.75" },
            { line: 29, vars: {}, msg: "El monto a pagar es: 2050 pesos." },
            { line: 31, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 17,
        title: "Descuento en entradas",
        category: "condicionales",
        description: "Calcular el descuento en la compra de entradas según la cantidad (2:10%, 3:15%, 4:20%).",
        code: `Algoritmo sin_titulo\n\tDefinir numEntradas Como Entero\n\tDefinir precioUnitario, total, descuento, totalPagar Como Real\n\tEscribir "Ingrese el precio unitario de la entrada: "\n\tLeer precioUnitario\n\tEscribir "Ingrese la cantidad de entradas a comprar (1 a 4): "\n\tLeer numEntradas\n\tSi numEntradas < 1 O numEntradas > 4 Entonces\n\t\tEscribir "Cantidad inválida. Solo puede comprar entre 1 y 4 entradas."\n\tSino\n\t\ttotal <- precioUnitario * numEntradas\n\t\tdescuento <- 0\n\t\tSegun numEntradas Hacer\n\t\t\t2:\n\t\t\t\tdescuento <- total * 0.10\n\t\t\t3:\n\t\t\t\tdescuento <- total * 0.15\n\t\t\t4:\n\t\t\t\tdescuento <- total * 0.20\n\t\tFinSegun\n\t\ttotalPagar <- total - descuento\n\t\tEscribir "Total sin descuento: $", total\n\t\tEscribir "Descuento aplicado: $", descuento\n\t\tEscribir "Total a pagar: $", totalPagar\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { precioUnitario: "?" }, msg: "Solicitando precio" },
            { line: 5, vars: { precioUnitario: 10000 }, msg: "precioUnitario = 10000" },
            { line: 6, vars: { numEntradas: "?" }, msg: "Solicitando cantidad" },
            { line: 7, vars: { numEntradas: 3 }, msg: "numEntradas = 3" },
            { line: 8, vars: {}, msg: "¿3 < 1 O 3 > 4? → Falso" },
            { line: 11, vars: { total: 30000 }, msg: "total = 30000" },
            { line: 12, vars: { descuento: 0 }, msg: "descuento = 0" },
            { line: 13, vars: {}, msg: "Según numEntradas (3)" },
            { line: 17, vars: { descuento: 4500 }, msg: "descuento = 30000 * 0.15 = 4500" },
            { line: 20, vars: { totalPagar: 25500 }, msg: "totalPagar = 25500" },
            { line: 21, vars: {}, msg: "Total sin descuento: $30000" },
            { line: 22, vars: {}, msg: "Descuento aplicado: $4500" },
            { line: 23, vars: {}, msg: "Total a pagar: $25500" },
            { line: 25, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 18,
        title: "Convertir km/h a m/s",
        category: "operaciones",
        description: "Convertir una velocidad en km/h a m/s.",
        code: `Algoritmo Ejercicio_11\n\tEscribir "escriba la velocidad expresada en KM/H de un automovil"\n\tLeer KM\n\tconvertir <- KM * 1000 / 3600\n\tMostrar "La velocidad expresada en metros es la siguiente: ", convertir, " Metros "\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { KM: "?" }, msg: "Solicitando KM" },
            { line: 3, vars: { KM: 72 }, msg: "KM = 72" },
            { line: 4, vars: { convertir: 20 }, msg: "convertir = 72 * 1000 / 3600 = 20" },
            { line: 5, vars: {}, msg: "La velocidad en metros es: 20" },
            { line: 6, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 19,
        title: "Cálculo de nómina",
        category: "ciclos",
        description: "Calcular el pago de 50 obreros a razón de $30,000 por hora.",
        code: `Algoritmo TreceC \n\tDefinir i Como Entero\n\tDefinir horasTrabajadas, pagoObrero, totalNomina Como Real\n\ttotalNomina <- 0\n\ti <- 1\n\tRepetir\n\t\tEscribir "Ingrese las horas trabajadas por el obrero ", i, ":"\n\t\tLeer horasTrabajadas\n\t\tpagoObrero <- horasTrabajadas * 30000\n\t\ttotalNomina <- totalNomina + pagoObrero\n\t\tEscribir "Pago del obrero ", i, ": ", pagoObrero, " Bolívares"\n\t\tEscribir "-------------------------------"\t\n\t\ti <- i + 1\n\tHasta Que i > 50\n\tEscribir "Total de la nómina: ", totalNomina, " Bolívares"\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { totalNomina: 0 }, msg: "totalNomina = 0" },
            { line: 5, vars: { i: 1 }, msg: "i = 1" },
            { line: 6, vars: {}, msg: "Inicio ciclo Repetir" },
            { line: 7, vars: { horasTrabajadas: "?" }, msg: "Solicitando horas obrero 1" },
            { line: 8, vars: { horasTrabajadas: 8 }, msg: "horasTrabajadas = 8" },
            { line: 9, vars: { pagoObrero: 240000 }, msg: "pagoObrero = 240000" },
            { line: 10, vars: { totalNomina: 240000 }, msg: "totalNomina = 240000" },
            { line: 11, vars: {}, msg: "Pago obrero 1: 240000" },
            { line: 13, vars: { i: 2 }, msg: "i = 2" },
            { line: 14, vars: {}, msg: "¿2 > 50? → Falso" },
            { line: 7, vars: { horasTrabajadas: "?" }, msg: "Solicitando horas obrero 2" },
            { line: 8, vars: { horasTrabajadas: 10 }, msg: "horasTrabajadas = 10" },
            { line: 9, vars: { pagoObrero: 300000 }, msg: "pagoObrero = 300000" },
            { line: 10, vars: { totalNomina: 540000 }, msg: "totalNomina = 540000" },
            { line: 13, vars: { i: 51 }, msg: "i = 51" },
            { line: 14, vars: {}, msg: "¿51 > 50? → Verdadero" },
            { line: 15, vars: {}, msg: "Total nómina: 540000" },
            { line: 16, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 20,
        title: "Factura con IVA",
        category: "operaciones",
        description: "Calcular el subtotal, IVA (15%) y total de una factura.",
        code: `Algoritmo Catorce\n\tDefinir codigoProducto Como Cadena\n\tDefinir precio, cantidad, sub_total, IVA, total Como Real\n\tEscribir "Ingrese el código del producto:"\n\tLeer codigoProducto\n\tEscribir "Ingrese el precio del producto:"\n\tLeer precio\n\tEscribir "Ingrese la cantidad:"\n\tLeer cantidad\n\tsub_total <- precio * cantidad\n\tIVA <- sub_total * 0.15\n\ttotal <- sub_total + IVA\n\tEscribir "-----------------------------"\n\tEscribir "Código del producto: ", codigoProducto\n\tEscribir "Subtotal: ", sub_total\n\tEscribir "IVA (15%): ", IVA\n\tEscribir "Total a pagar: ", total\n\tEscribir "-----------------------------"\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { codigoProducto: "?" }, msg: "Solicitando código" },
            { line: 5, vars: { codigoProducto: "A001" }, msg: "codigoProducto = A001" },
            { line: 6, vars: { precio: "?" }, msg: "Solicitando precio" },
            { line: 7, vars: { precio: 5000 }, msg: "precio = 5000" },
            { line: 8, vars: { cantidad: "?" }, msg: "Solicitando cantidad" },
            { line: 9, vars: { cantidad: 3 }, msg: "cantidad = 3" },
            { line: 10, vars: { sub_total: 15000 }, msg: "sub_total = 15000" },
            { line: 11, vars: { IVA: 2250 }, msg: "IVA = 2250" },
            { line: 12, vars: { total: 17250 }, msg: "total = 17250" },
            { line: 14, vars: {}, msg: "Código del producto: A001" },
            { line: 15, vars: {}, msg: "Subtotal: 15000" },
            { line: 16, vars: {}, msg: "IVA: 2250" },
            { line: 17, vars: {}, msg: "Total a pagar: 17250" },
            { line: 19, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 21,
        title: "Mostrar pares del 2 al 100",
        category: "ciclos",
        description: "Mostrar los números pares del 2 al 100 y calcular su sumatoria.",
        code: `Algoritmo Mostrar_Numeros_2_en_2\n\tsuma <- 0\n\tPARA numero DESDE 2 HASTA 100 CON PASO 2 HACER\n\t\tIMPRIMIR numero\n\t\tsuma <- suma + numero\n\tFIN PARA\n\tIMPRIMIR "La sumatoria total es: ", suma\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { suma: 0 }, msg: "suma = 0" },
            { line: 3, vars: { numero: 2 }, msg: "numero = 2" },
            { line: 4, vars: {}, msg: "Imprimir 2" },
            { line: 5, vars: { suma: 2 }, msg: "suma = 2" },
            { line: 3, vars: { numero: 4 }, msg: "numero = 4" },
            { line: 4, vars: {}, msg: "Imprimir 4" },
            { line: 5, vars: { suma: 6 }, msg: "suma = 6" },
            { line: 3, vars: { numero: 100 }, msg: "numero = 100" },
            { line: 4, vars: {}, msg: "Imprimir 100" },
            { line: 5, vars: { suma: 2550 }, msg: "suma = 2550" },
            { line: 7, vars: {}, msg: "La sumatoria total es: 2550" },
            { line: 8, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 22,
        title: "Mostrar los primeros 100 números",
        category: "ciclos",
        description: "Mostrar los números del 1 al 100 usando un ciclo Mientras.",
        code: `Algoritmo MostrarPrimeros100Numeros\n\tDefinir numero Como Entero\n\tnumero <- 1\n\tMientras numero <= 100 Hacer\n\t\tEscribir numero\n\t\tnumero <- numero + 1\n\tFinMientras\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { numero: "?" }, msg: "Definiendo numero" },
            { line: 3, vars: { numero: 1 }, msg: "numero = 1" },
            { line: 4, vars: {}, msg: "¿1 <= 100? → Verdadero" },
            { line: 5, vars: {}, msg: "Imprimir 1" },
            { line: 6, vars: { numero: 2 }, msg: "numero = 2" },
            { line: 4, vars: {}, msg: "¿2 <= 100? → Verdadero" },
            { line: 5, vars: {}, msg: "Imprimir 2" },
            { line: 6, vars: { numero: 3 }, msg: "numero = 3" },
            { line: 4, vars: { numero: 100 }, msg: "¿100 <= 100? → Verdadero" },
            { line: 5, vars: {}, msg: "Imprimir 100" },
            { line: 6, vars: { numero: 101 }, msg: "numero = 101" },
            { line: 4, vars: {}, msg: "¿101 <= 100? → Falso" },
            { line: 7, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 23,
        title: "Múltiplos de 2 (1 al 20)",
        category: "ciclos",
        description: "Mostrar los números del 1 al 20 que son múltiplos de 2.",
        code: `Algoritmo sin_titulo\n\tdiv <- 0\n\tpara num <- 1 Hasta 20 Con Paso 1 Hacer\n\t\tsi num % 2 == 0 Entonces\n\t\t\tEscribir num, " es multiplo de 2" \n\t\tFinSi\n\tFinPara\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { div: 0 }, msg: "div = 0" },
            { line: 3, vars: { num: 1 }, msg: "num = 1" },
            { line: 4, vars: {}, msg: "¿1 % 2 == 0? → Falso" },
            { line: 3, vars: { num: 2 }, msg: "num = 2" },
            { line: 4, vars: {}, msg: "¿2 % 2 == 0? → Verdadero" },
            { line: 5, vars: {}, msg: "2 es múltiplo de 2" },
            { line: 3, vars: { num: 3 }, msg: "num = 3" },
            { line: 4, vars: {}, msg: "¿3 % 2 == 0? → Falso" },
            { line: 3, vars: { num: 4 }, msg: "num = 4" },
            { line: 4, vars: {}, msg: "¿4 % 2 == 0? → Verdadero" },
            { line: 5, vars: {}, msg: "4 es múltiplo de 2" },
            { line: 8, vars: { num: 20 }, msg: "num = 20" },
            { line: 9, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 24,
        title: "Suma y media de N números",
        category: "ciclos",
        description: "Leer N números y calcular su suma y media aritmética.",
        code: `Algoritmo sin_titulo\n\tnum <- 0\n\tsuma <- 0\n\tEscribir "Digite la cantidad de numeros: "\n\tLeer cantidad\n\tpara i <- 1 Hasta cantidad Hacer\n\t\tEscribir "escribe un numero"\n\t\tLeer num\n\t\tsuma <- suma + num\n\tFinPara\n\tEscribir "la suma aritmetica es " suma \n\tmedia = suma / cantidad\n\tEscribir "La media aritmetica es: " media\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { num: 0 }, msg: "num = 0" },
            { line: 3, vars: { suma: 0 }, msg: "suma = 0" },
            { line: 4, vars: { cantidad: "?" }, msg: "Solicitando cantidad" },
            { line: 5, vars: { cantidad: 3 }, msg: "cantidad = 3" },
            { line: 6, vars: { i: 1 }, msg: "i = 1" },
            { line: 7, vars: { num: "?" }, msg: "Solicitando número 1" },
            { line: 8, vars: { num: 5 }, msg: "num = 5" },
            { line: 9, vars: { suma: 5 }, msg: "suma = 5" },
            { line: 6, vars: { i: 2 }, msg: "i = 2" },
            { line: 7, vars: { num: "?" }, msg: "Solicitando número 2" },
            { line: 8, vars: { num: 10 }, msg: "num = 10" },
            { line: 9, vars: { suma: 15 }, msg: "suma = 15" },
            { line: 6, vars: { i: 3 }, msg: "i = 3" },
            { line: 7, vars: { num: "?" }, msg: "Solicitando número 3" },
            { line: 8, vars: { num: 20 }, msg: "num = 20" },
            { line: 9, vars: { suma: 35 }, msg: "suma = 35" },
            { line: 10, vars: {}, msg: "Fin ciclo" },
            { line: 11, vars: {}, msg: "la suma aritmetica es 35" },
            { line: 12, vars: { media: 11.67 }, msg: "media = 35 / 3 ≈ 11.67" },
            { line: 13, vars: {}, msg: "La media aritmetica es: 11.67" },
            { line: 14, vars: {}, msg: "Fin" }
        ]
    },
    // --- PARTE 3 (03-pseudocodigo.md) ---
    {
        id: 25,
        title: "Nómina de 50 obreros (Repetir)",
        category: "ciclos",
        description: "Calcular el pago de 50 obreros usando la estructura Repetir.",
        code: `Algoritmo TreceC \n\tDefinir i Como Entero\n\tDefinir horasTrabajadas, pagoObrero, totalNomina Como Real\n\ttotalNomina <- 0\n\ti <- 1\n\tRepetir\n\t\tEscribir "Ingrese las horas trabajadas por el obrero ", i, ":"\n\t\tLeer horasTrabajadas\n\t\tpagoObrero <- horasTrabajadas * 30000\n\t\ttotalNomina <- totalNomina + pagoObrero\n\t\tEscribir "Pago del obrero ", i, ": ", pagoObrero, " Bolívares"\n\t\tEscribir "-------------------------------"\t\n\t\ti <- i + 1\n\tHasta Que i > 50\n\tEscribir "Total de la nómina: ", totalNomina, " Bolívares"\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { totalNomina: 0 }, msg: "totalNomina = 0" },
            { line: 5, vars: { i: 1 }, msg: "i = 1" },
            { line: 6, vars: {}, msg: "Inicio Repetir" },
            { line: 7, vars: { horasTrabajadas: "?" }, msg: "Solicitando horas obrero 1" },
            { line: 8, vars: { horasTrabajadas: 8 }, msg: "horasTrabajadas = 8" },
            { line: 9, vars: { pagoObrero: 240000 }, msg: "pagoObrero = 240000" },
            { line: 10, vars: { totalNomina: 240000 }, msg: "totalNomina = 240000" },
            { line: 11, vars: {}, msg: "Pago obrero 1: 240000" },
            { line: 13, vars: { i: 2 }, msg: "i = 2" },
            { line: 14, vars: {}, msg: "¿2 > 50? → Falso" },
            { line: 7, vars: { horasTrabajadas: "?" }, msg: "Solicitando horas obrero 2" },
            { line: 8, vars: { horasTrabajadas: 10 }, msg: "horasTrabajadas = 10" },
            { line: 9, vars: { pagoObrero: 300000 }, msg: "pagoObrero = 300000" },
            { line: 10, vars: { totalNomina: 540000 }, msg: "totalNomina = 540000" },
            { line: 13, vars: { i: 51 }, msg: "i = 51" },
            { line: 14, vars: {}, msg: "¿51 > 50? → Verdadero" },
            { line: 15, vars: {}, msg: "Total nómina: 540000" },
            { line: 16, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 26,
        title: "Clasificación de notas (Mientras)",
        category: "ciclos",
        description: "Clasificar notas repetidamente hasta que el usuario ingrese 0.",
        code: `Algoritmo Contador_de_notas\n\tDefinir nota Como Entero\n\tEscribir "Ingrese una calificación entre 1 y 20 (0 para salir): "\n\tLeer nota\n\tMientras nota >= 1 Y nota <= 20 Hacer\n\t\tSi nota >= 19 Y nota <= 20 Entonces\n\t\t\tEscribir "Calificación: A"\n\t\tSino\n\t\t\tSi nota >= 16 Y nota <= 18 Entonces\n\t\t\t\tEscribir "Calificación: B"\n\t\t\tSino\n\t\t\t\tSi nota >= 13 Y nota <= 15 Entonces\n\t\t\t\t\tEscribir "Calificación: C"\n\t\t\t\tSino\n\t\t\t\t\tSi nota >= 10 Y nota <= 12 Entonces\n\t\t\t\t\t\tEscribir "Calificación: D"\n\t\t\t\t\tSino\n\t\t\t\t\t\tEscribir "Calificación: E"\n\t\t\t\t\tFinSi\n\t\t\t\tFinSi\n\t\t\tFinSi\n\t\tFinSi\n\t\tEscribir "Ingrese otra calificación (0 para salir): "\n\t\tLeer nota\n\tFinMientras\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 3, vars: { nota: "?" }, msg: "Solicitando calificación" },
            { line: 4, vars: { nota: 17 }, msg: "nota = 17" },
            { line: 5, vars: {}, msg: "¿17 en rango 1-20? → Verdadero" },
            { line: 6, vars: {}, msg: "¿17 >= 19? → Falso" },
            { line: 9, vars: {}, msg: "¿17 >= 16? → Verdadero" },
            { line: 10, vars: {}, msg: "Calificación: B" },
            { line: 25, vars: { nota: "?" }, msg: "Solicitando otra calificación" },
            { line: 26, vars: { nota: 0 }, msg: "nota = 0" },
            { line: 5, vars: {}, msg: "¿0 en rango 1-20? → Falso" },
            { line: 28, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 27,
        title: "Conversión de días (Mientras)",
        category: "ciclos",
        description: "Convertir un número de días en años, meses y semanas usando ciclos Mientras.",
        code: `Algoritmo sin_titulo\n\taños <- 0 \n\tmeses <- 0\n\tsemanas <- 0 \n\tdias <- 0\n\tEscribir "escriba un numero de dias"\n\tLeer num_dias\n\tdias = num_dias\n\tMientras dias > 365 Hacer\n\t\taños = años + 1\n\t\tdias = dias - 365\n\tFinMientras\n\tMientras dias > 30 Hacer\n\t\tmeses = meses + 1\n\t\tdias = dias - 30\n\tFinMientras\n\tMientras dias > 7 Hacer\n\t\tmeses = meses + 1\n\t\tdias = dias - 7\n\tFinMientras\n\tEscribir "En " num_dias " Dias Hay " años " años " meses " meses y dias " dias\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 6, vars: { num_dias: "?" }, msg: "Solicitando días" },
            { line: 7, vars: { num_dias: 400 }, msg: "num_dias = 400" },
            { line: 8, vars: { dias: 400 }, msg: "dias = 400" },
            { line: 9, vars: {}, msg: "¿400 > 365? → Verdadero" },
            { line: 10, vars: { años: 1 }, msg: "años = 1" },
            { line: 11, vars: { dias: 35 }, msg: "dias = 35" },
            { line: 9, vars: {}, msg: "¿35 > 365? → Falso" },
            { line: 12, vars: {}, msg: "¿35 > 30? → Verdadero" },
            { line: 13, vars: { meses: 1 }, msg: "meses = 1" },
            { line: 14, vars: { dias: 5 }, msg: "dias = 5" },
            { line: 12, vars: {}, msg: "¿5 > 30? → Falso" },
            { line: 15, vars: {}, msg: "¿5 > 7? → Falso" },
            { line: 19, vars: {}, msg: "En 400 Dias Hay 1 años 1 meses y dias 5" },
            { line: 20, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 28,
        title: "Conversión de días (Repetir)",
        category: "ciclos",
        description: "Convertir días usando la estructura Repetir.",
        code: `Algoritmo sin_titulo\n\taños <- 0\n\tmeses <- 0\n\tsemanas <- 0\n\tdias <- 0\n\tEscribir "Escribe los dias"\n\tleer num_dias\n\tdias = num_dias\n\tRepetir\n\t\tSi dias >= 365 Entonces\n\t\t\tdias <- dias - 365\n\t\t\taños <- años + 1\n\t\tFinSi\n\tHasta Que dias < 365\n\tRepetir\n\t\tSi dias >= 30 Entonces\n\t\t\tdias <- dias - 30\n\t\t\tmeses <- meses + 1\n\t\tFinSi\n\tHasta Que dias < 30\n\tRepetir\n\t\tSi dias >= 7 Entonces\n\t\t\tdias = dias - 7\n\t\t\tsemanas = semanas + 1\n\t\tFinSi\n\tHasta Que dias < 7\n\tEscribir "En " num_dias " Dias Hay " años " Años " meses " Meses y Dias " dias\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 6, vars: { num_dias: "?" }, msg: "Solicitando días" },
            { line: 7, vars: { num_dias: 400 }, msg: "num_dias = 400" },
            { line: 8, vars: { dias: 400 }, msg: "dias = 400" },
            { line: 9, vars: {}, msg: "Inicio Repetir años" },
            { line: 10, vars: {}, msg: "¿400 >= 365? → Verdadero" },
            { line: 11, vars: { dias: 35 }, msg: "dias = 35" },
            { line: 12, vars: { años: 1 }, msg: "años = 1" },
            { line: 14, vars: {}, msg: "¿35 < 365? → Verdadero" },
            { line: 15, vars: {}, msg: "Inicio Repetir meses" },
            { line: 16, vars: {}, msg: "¿35 >= 30? → Verdadero" },
            { line: 17, vars: { dias: 5 }, msg: "dias = 5" },
            { line: 18, vars: { meses: 1 }, msg: "meses = 1" },
            { line: 20, vars: {}, msg: "¿5 < 30? → Verdadero" },
            { line: 21, vars: {}, msg: "Inicio Repetir semanas" },
            { line: 22, vars: {}, msg: "¿5 >= 7? → Falso" },
            { line: 25, vars: {}, msg: "¿5 < 7? → Verdadero" },
            { line: 26, vars: {}, msg: "En 400 Dias Hay 1 Años 1 Meses y Dias 5" },
            { line: 27, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 29,
        title: "Conversión de días (Condicionales)",
        category: "condicionales",
        description: "Convertir días usando solo condicionales.",
        code: `Algoritmo sin_titulo\n\taños <- 0\n\tmeses <- 0\n\tsemanas <- 0\n\tdias <- 0\n\tEscribir "Escribe los dias"\n\tleer num_dias\n\tdias = num_dias\n\tSi dias >= 365 Entonces\n\t\tdias <- dias - 365\n\t\taños <- años + 1\n\tSiNo\n\t\tSi dias >= 30 Entonces\n\t\t\tdias <- dias - 30\n\t\t\tmeses <- meses + 1\n\t\tSiNo\n\t\t\tSi dias >= 7 Entonces\n\t\t\t\tdias = dias - 7\n\t\t\t\tsemanas = semanas + 1\n\t\t\tFinSi\n\t\tFinSi\n\tFinSi\n\tEscribir "En " num_dias " Dias Hay " años " Años " meses " Meses y Dias " dias\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 6, vars: { num_dias: "?" }, msg: "Solicitando días" },
            { line: 7, vars: { num_dias: 400 }, msg: "num_dias = 400" },
            { line: 8, vars: { dias: 400 }, msg: "dias = 400" },
            { line: 9, vars: {}, msg: "¿400 >= 365? → Verdadero" },
            { line: 10, vars: { dias: 35 }, msg: "dias = 35" },
            { line: 11, vars: { años: 1 }, msg: "años = 1" },
            { line: 21, vars: {}, msg: "En 400 Dias Hay 1 Años 0 Meses y Dias 35" },
            { line: 22, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 30,
        title: "Estacionamiento (completa)",
        category: "condicionales",
        description: "Calcular el costo de estacionamiento con horas y minutos.",
        code: `Algoritmo Ejercio_10\n\tDefinir HE, ME, HS, MS, Horas, Pago Como Real\n\tEscribir "Ingrese hora de entrada:"\n\tLeer HE\n\tEscribir "Ingrese minutos de entrada:"\n\tLeer ME \n\tminuto_hora_E <- ME / 60\n\tsuma1 <- HE + minuto_hora_E \n\tEscribir "Ingrese hora de salida:"\n\tLeer HS\n\tEscribir "Ingrese minutos de salida:"\n\tLeer MS\n\tminuto_hora_S <- MS / 60 \n\tsuma2 <- HS + minuto_hora_S\n\thoras_totales <- suma2 - suma1\n\tSi suma2 < suma1 Entonces\n\t\tEscribir "Error"\n\tSino\n\t\tHoras <- suma2 - suma1\n\t\tSi Horas <= 0 O Horas <= 1 Entonces\n\t\t\tHoras <- 1\n\t\tFinSi\n\t\tSi Horas = 1 Entonces\n\t\t\tPago <- 1000\n\t\tSino\n\t\t\tPago <- 1000 + (Horas - 1) * 600\n\t\tFinSi\n\t\tEscribir "Total horas: ", horas_totales\n\t\tEscribir "Monto a pagar: ", Pago\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { HE: 8 }, msg: "HE = 8" },
            { line: 6, vars: { ME: 30 }, msg: "ME = 30" },
            { line: 7, vars: { minuto_hora_E: 0.5 }, msg: "minuto_hora_E = 0.5" },
            { line: 8, vars: { suma1: 8.5 }, msg: "suma1 = 8.5" },
            { line: 10, vars: { HS: 11 }, msg: "HS = 11" },
            { line: 12, vars: { MS: 15 }, msg: "MS = 15" },
            { line: 13, vars: { minuto_hora_S: 0.25 }, msg: "minuto_hora_S = 0.25" },
            { line: 14, vars: { suma2: 11.25 }, msg: "suma2 = 11.25" },
            { line: 15, vars: { horas_totales: 2.75 }, msg: "horas_totales = 2.75" },
            { line: 16, vars: {}, msg: "¿11.25 < 8.5? → Falso" },
            { line: 19, vars: { Horas: 2.75 }, msg: "Horas = 2.75" },
            { line: 20, vars: {}, msg: "¿Horas <= 1? → Falso" },
            { line: 23, vars: {}, msg: "¿Horas = 1? → Falso" },
            { line: 26, vars: { Pago: 2050 }, msg: "Pago = 1000 + 1.75*600 = 2050" },
            { line: 28, vars: {}, msg: "Total horas: 2.75" },
            { line: 29, vars: {}, msg: "Monto a pagar: 2050" },
            { line: 31, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 31,
        title: "Estacionamiento (simple)",
        category: "condicionales",
        description: "Calcular el costo de estacionamiento con tarifa fija.",
        code: `Algoritmo sin_titulo\n\tHE = int(input("Horas entrada: "))\n\tME = int(input("Minutos entrada: "))\n\tHS = int(input("Horas salida: "))\n\tMS = int(input("Minutos salida: "))\n\tEM = HE * 60 + ME\n\tSM = HS * 60 + MS\n\testadia = SM - EM\n\tfraccion = estadia % 60 \n\tsi fraccion > 0:\n\t\tH = (estadia - fraccion) / 60 + 1\n\tsino:\n\t\tH = (estadia - fraccion) / 60\n\tsi H > 1:\n\t\tpago = 1000 + 600 * (H - 1)\n\tsino:\n\t\tpago = 1000\n\tEscribir "Valor a pagar por ", H, " horas es: ", pago\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { HE: 8 }, msg: "HE = 8" },
            { line: 3, vars: { ME: 30 }, msg: "ME = 30" },
            { line: 4, vars: { HS: 11 }, msg: "HS = 11" },
            { line: 5, vars: { MS: 15 }, msg: "MS = 15" },
            { line: 6, vars: { EM: 510 }, msg: "EM = 510" },
            { line: 7, vars: { SM: 675 }, msg: "SM = 675" },
            { line: 8, vars: { estadia: 165 }, msg: "estadia = 165" },
            { line: 9, vars: { fraccion: 45 }, msg: "fraccion = 45" },
            { line: 10, vars: {}, msg: "¿45 > 0? → Verdadero" },
            { line: 11, vars: { H: 3 }, msg: "H = 3" },
            { line: 14, vars: {}, msg: "¿3 > 1? → Verdadero" },
            { line: 15, vars: { pago: 2200 }, msg: "pago = 2200" },
            { line: 18, vars: {}, msg: "Valor a pagar por 3 horas es: 2200" },
            { line: 19, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 32,
        title: "Estacionamiento (fracción)",
        category: "condicionales",
        description: "Calcular el costo de estacionamiento considerando fracciones.",
        code: `Algoritmo sin_titulo\n\tHE = int(input("Horas entrada: "))\n\tME = int(input("Minutos entrada: "))\n\tHS = int(input("Horas salida: "))\n\tMS = int(input("Minutos salida: "))\n\tEM = HE * 60 + ME\n\tSM = HS * 60 + MS\n\testadia = SM - EM\n\tfraccion = estadia % 60 \n\tsi fraccion > 0:\n\t\tH = (estadia - fraccion) / 60 + 1\n\tsino:\n\t\tH = (estadia - fraccion) / 60\n\tsi H > 1:\n\t\tpago = 1000 + 600 * (H - 1)\n\tsino:\n\t\tpago = 1000\n\tEscribir "Valor a pagar por ", H, " horas es: ", pago\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { HE: 8 }, msg: "HE = 8" },
            { line: 3, vars: { ME: 30 }, msg: "ME = 30" },
            { line: 4, vars: { HS: 11 }, msg: "HS = 11" },
            { line: 5, vars: { MS: 15 }, msg: "MS = 15" },
            { line: 6, vars: { EM: 510 }, msg: "EM = 510" },
            { line: 7, vars: { SM: 675 }, msg: "SM = 675" },
            { line: 8, vars: { estadia: 165 }, msg: "estadia = 165" },
            { line: 9, vars: { fraccion: 45 }, msg: "fraccion = 45" },
            { line: 10, vars: {}, msg: "¿45 > 0? → Verdadero" },
            { line: 11, vars: { H: 3 }, msg: "H = 3" },
            { line: 14, vars: {}, msg: "¿3 > 1? → Verdadero" },
            { line: 15, vars: { pago: 2200 }, msg: "pago = 2200" },
            { line: 18, vars: {}, msg: "Valor a pagar por 3 horas es: 2200" },
            { line: 19, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 33,
        title: "Descuento en entradas (Según)",
        category: "condicionales",
        description: "Calcular el descuento usando la estructura Según.",
        code: `Algoritmo sin_titulo\n\tDefinir numEntradas Como Entero\n\tDefinir precioUnitario, total, descuento, totalPagar Como Real\n\tEscribir "Precio unitario: "\n\tLeer precioUnitario\n\tEscribir "Cantidad (1 a 4): "\n\tLeer numEntradas\n\tSi numEntradas < 1 O numEntradas > 4 Entonces\n\t\tEscribir "Inválido"\n\tSino\n\t\ttotal <- precioUnitario * numEntradas\n\t\tdescuento <- 0\n\t\tSegun numEntradas Hacer\n\t\t\t2: descuento <- total * 0.10\n\t\t\t3: descuento <- total * 0.15\n\t\t\t4: descuento <- total * 0.20\n\t\tFinSegun\n\t\ttotalPagar <- total - descuento\n\t\tEscribir "Total: ", total\n\t\tEscribir "Descuento: ", descuento\n\t\tEscribir "Pagar: ", totalPagar\n\tFinSi\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { precioUnitario: "?" }, msg: "Solicitando precio" },
            { line: 5, vars: { precioUnitario: 10000 }, msg: "precioUnitario = 10000" },
            { line: 6, vars: { numEntradas: "?" }, msg: "Solicitando cantidad" },
            { line: 7, vars: { numEntradas: 3 }, msg: "numEntradas = 3" },
            { line: 8, vars: {}, msg: "¿3 fuera de rango? → Falso" },
            { line: 11, vars: { total: 30000 }, msg: "total = 30000" },
            { line: 13, vars: {}, msg: "Según numEntradas (3)" },
            { line: 15, vars: { descuento: 4500 }, msg: "descuento = 4500" },
            { line: 18, vars: { totalPagar: 25500 }, msg: "totalPagar = 25500" },
            { line: 19, vars: {}, msg: "Total: 30000" },
            { line: 20, vars: {}, msg: "Descuento: 4500" },
            { line: 21, vars: {}, msg: "Pagar: 25500" },
            { line: 23, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 34,
        title: "Conversión km/h a m/s (v2)",
        category: "operaciones",
        description: "Convertir km/h a m/s con un cálculo correcto.",
        code: `Algoritmo Ejercicio_11\n\tEscribir "Velocidad en KM/H: "\n\tLeer KM\n\tconvertir <- KM * 1000 / 3600\n\tMostrar "En m/s es: ", convertir\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { KM: "?" }, msg: "Solicitando KM" },
            { line: 3, vars: { KM: 72 }, msg: "KM = 72" },
            { line: 4, vars: { convertir: 20 }, msg: "convertir = 20" },
            { line: 5, vars: {}, msg: "En m/s es: 20" },
            { line: 6, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 35,
        title: "Suma y media (ciclo Para)",
        category: "ciclos",
        description: "Calcular la suma y media de N números usando ciclo Para.",
        code: `Algoritmo sin_titulo\n\tnum <- 0\n\tsuma <- 0\n\tEscribir "Cantidad de numeros: "\n\tLeer cantidad\n\tpara i <- 1 Hasta cantidad Hacer\n\t\tEscribir "Numero: "\n\t\tLeer num\n\t\tsuma <- suma + num\n\tFinPara\n\tEscribir "Suma: " suma \n\tmedia = suma / cantidad\n\tEscribir "Media: " media\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { num: 0 }, msg: "num = 0" },
            { line: 3, vars: { suma: 0 }, msg: "suma = 0" },
            { line: 4, vars: { cantidad: "?" }, msg: "Solicitando cantidad" },
            { line: 5, vars: { cantidad: 3 }, msg: "cantidad = 3" },
            { line: 6, vars: { i: 1 }, msg: "i = 1" },
            { line: 7, vars: { num: "?" }, msg: "Solicitando num 1" },
            { line: 8, vars: { num: 5 }, msg: "num = 5" },
            { line: 9, vars: { suma: 5 }, msg: "suma = 5" },
            { line: 6, vars: { i: 2 }, msg: "i = 2" },
            { line: 7, vars: { num: "?" }, msg: "Solicitando num 2" },
            { line: 8, vars: { num: 10 }, msg: "num = 10" },
            { line: 9, vars: { suma: 15 }, msg: "suma = 15" },
            { line: 6, vars: { i: 3 }, msg: "i = 3" },
            { line: 7, vars: { num: "?" }, msg: "Solicitando num 3" },
            { line: 8, vars: { num: 20 }, msg: "num = 20" },
            { line: 9, vars: { suma: 35 }, msg: "suma = 35" },
            { line: 10, vars: {}, msg: "Fin ciclo" },
            { line: 11, vars: {}, msg: "Suma: 35" },
            { line: 12, vars: { media: 11.67 }, msg: "media = 11.67" },
            { line: 13, vars: {}, msg: "Media: 11.67" },
            { line: 14, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 36,
        title: "Factura con IVA (extendida)",
        category: "operaciones",
        description: "Generar una factura con código de producto, precio, cantidad, subtotal, IVA y total.",
        code: `Algoritmo Catorce\n\tDefinir codigoProducto Como Cadena\n\tDefinir precio, cantidad, sub_total, IVA, total Como Real\n\tEscribir "Código del producto:"\n\tLeer codigoProducto\n\tEscribir "Precio:"\n\tLeer precio\n\tEscribir "Cantidad:"\n\tLeer cantidad\n\tsub_total <- precio * cantidad\n\tIVA <- sub_total * 0.15\n\ttotal <- sub_total + IVA\n\tEscribir "-------------------"\n\tEscribir "Código: ", codigoProducto\n\tEscribir "Subtotal: ", sub_total\n\tEscribir "IVA: ", IVA\n\tEscribir "Total: ", total\n\tEscribir "-------------------"\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { codigoProducto: "?" }, msg: "Solicitando código" },
            { line: 5, vars: { codigoProducto: "A001" }, msg: "codigoProducto = A001" },
            { line: 6, vars: { precio: "?" }, msg: "Solicitando precio" },
            { line: 7, vars: { precio: 5000 }, msg: "precio = 5000" },
            { line: 8, vars: { cantidad: "?" }, msg: "Solicitando cantidad" },
            { line: 9, vars: { cantidad: 3 }, msg: "cantidad = 3" },
            { line: 10, vars: { sub_total: 15000 }, msg: "sub_total = 15000" },
            { line: 11, vars: { IVA: 2250 }, msg: "IVA = 2250" },
            { line: 12, vars: { total: 17250 }, msg: "total = 17250" },
            { line: 14, vars: {}, msg: "Código: A001" },
            { line: 15, vars: {}, msg: "Subtotal: 15000" },
            { line: 16, vars: {}, msg: "IVA: 2250" },
            { line: 17, vars: {}, msg: "Total: 17250" },
            { line: 19, vars: {}, msg: "Fin" }
        ]
    },
    // --- PARTE 4 (04-pseudocodigo.md) ---
    {
        id: 37,
        title: "Análisis de temperaturas",
        category: "integradores",
        description: "Registrar temperaturas: mayor, menor, promedio y clasificación.",
        code: `Algoritmo AnalisisTemperaturas\n\tDefinir numDias, i Como Entero\n\tDefinir temp, suma, mayor, menor, promedio Como Real\n\tsuma <- 0; mayor <- -9999; menor <- 9999\n\tEscribir "Días: "\n\tLeer numDias\n\tMientras numDias <= 0 Hacer\n\t\tEscribir "Error. Días: "\n\t\tLeer numDias\n\tFinMientras\n\tPara i <- 1 Hasta numDias Hacer\n\t\tEscribir "Temp día ", i, ": "\n\t\tLeer temp\n\t\tsuma <- suma + temp\n\t\tSi temp > mayor Entonces\n\t\t\tmayor <- temp\n\t\tFinSi\n\t\tSi temp < menor Entonces\n\t\t\tmenor <- temp\n\t\tFinSi\n\t\tSi temp < 18 Entonces\n\t\t\tEscribir "Fría"\n\t\tSino\n\t\t\tSi temp <= 25 Entonces\n\t\t\t\tEscribir "Templada"\n\t\t\tSino\n\t\t\t\tEscribir "Caliente"\n\t\t\tFinSi\n\t\tFinSi\n\tFinPara\n\tpromedio <- suma / numDias\n\tEscribir "Mayor: ", mayor\n\tEscribir "Menor: ", menor\n\tEscribir "Promedio: ", promedio\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { suma: 0, mayor: -9999, menor: 9999 }, msg: "Inicializando variables" },
            { line: 5, vars: { numDias: "?" }, msg: "Solicitando días" },
            { line: 6, vars: { numDias: 3 }, msg: "numDias = 3" },
            { line: 10, vars: { i: 1 }, msg: "i = 1" },
            { line: 11, vars: { temp: "?" }, msg: "Solicitando temp 1" },
            { line: 12, vars: { temp: 15 }, msg: "temp = 15" },
            { line: 13, vars: { suma: 15 }, msg: "suma = 15" },
            { line: 14, vars: {}, msg: "¿15 > -9999? → Verdadero" },
            { line: 15, vars: { mayor: 15 }, msg: "mayor = 15" },
            { line: 17, vars: {}, msg: "¿15 < 9999? → Verdadero" },
            { line: 18, vars: { menor: 15 }, msg: "menor = 15" },
            { line: 20, vars: {}, msg: "¿15 < 18? → Verdadero" },
            { line: 21, vars: {}, msg: "Fría" },
            { line: 10, vars: { i: 2 }, msg: "i = 2" },
            { line: 11, vars: { temp: "?" }, msg: "Solicitando temp 2" },
            { line: 12, vars: { temp: 30 }, msg: "temp = 30" },
            { line: 13, vars: { suma: 45 }, msg: "suma = 45" },
            { line: 14, vars: {}, msg: "¿30 > 15? → Verdadero" },
            { line: 15, vars: { mayor: 30 }, msg: "mayor = 30" },
            { line: 20, vars: {}, msg: "¿30 < 18? → Falso" },
            { line: 23, vars: {}, msg: "¿30 <= 25? → Falso" },
            { line: 26, vars: {}, msg: "Caliente" },
            { line: 10, vars: { i: 3 }, msg: "i = 3" },
            { line: 11, vars: { temp: "?" }, msg: "Solicitando temp 3" },
            { line: 12, vars: { temp: 22 }, msg: "temp = 22" },
            { line: 13, vars: { suma: 67 }, msg: "suma = 67" },
            { line: 23, vars: {}, msg: "¿22 <= 25? → Verdadero" },
            { line: 24, vars: {}, msg: "Templada" },
            { line: 32, vars: { promedio: 22.33 }, msg: "promedio = 67 / 3 = 22.33" },
            { line: 33, vars: {}, msg: "Mayor: 30" },
            { line: 34, vars: {}, msg: "Menor: 15" },
            { line: 35, vars: {}, msg: "Promedio: 22.33" },
            { line: 36, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 38,
        title: "Simulador de cajero automático",
        category: "integradores",
        description: "Simular un cajero automático con menú.",
        code: `Algoritmo CajeroAutomatico\n\tDefinir saldo, monto Como Real\n\tDefinir opcion Como Entero\n\tsaldo <- 1000000\n\tRepetir\n\t\tEscribir "1. Consultar; 2. Retirar; 3. Depositar; 4. Salir"\n\t\tLeer opcion\n\t\tSegun opcion Hacer\n\t\t\t1: Escribir "Saldo: $", saldo\n\t\t\t2: \n\t\t\t\tEscribir "Monto a retirar: "\n\t\t\t\tLeer monto\n\t\t\t\tSi monto <= 0 Entonces\n\t\t\t\t\tEscribir "Error: monto > 0"\n\t\t\t\tSino\n\t\t\t\t\tSi monto > saldo Entonces\n\t\t\t\t\t\tEscribir "Error: saldo insuficiente"\n\t\t\t\t\tSino\n\t\t\t\t\t\tsaldo <- saldo - monto\n\t\t\t\t\t\tEscribir "Retiro exitoso. Saldo: $", saldo\n\t\t\t\t\tFinSi\n\t\t\t\tFinSi\n\t\t\t3:\n\t\t\t\tEscribir "Monto a depositar: "\n\t\t\t\tLeer monto\n\t\t\t\tSi monto <= 0 Entonces\n\t\t\t\t\tEscribir "Error: monto > 0"\n\t\t\t\tSino\n\t\t\t\t\tsaldo <- saldo + monto\n\t\t\t\t\tEscribir "Depósito exitoso. Saldo: $", saldo\n\t\t\t\tFinSi\n\t\t\t4: Escribir "Saliendo..."\n\t\t\tDe Otro Modo: Escribir "Opción inválida"\n\t\tFinSegun\n\tHasta Que opcion = 4\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: { saldo: 1000000 }, msg: "saldo = 1000000" },
            { line: 5, vars: {}, msg: "Menú principal" },
            { line: 7, vars: { opcion: "?" }, msg: "Solicitando opción" },
            { line: 8, vars: { opcion: 2 }, msg: "opcion = 2" },
            { line: 11, vars: { monto: "?" }, msg: "Solicitando monto a retirar" },
            { line: 12, vars: { monto: 200000 }, msg: "monto = 200000" },
            { line: 13, vars: {}, msg: "¿200000 <= 0? → Falso" },
            { line: 16, vars: {}, msg: "¿200000 > 1000000? → Falso" },
            { line: 19, vars: { saldo: 800000 }, msg: "saldo = 800000" },
            { line: 20, vars: {}, msg: "Retiro exitoso. Saldo: 800000" },
            { line: 33, vars: {}, msg: "¿opcion = 4? → Falso" },
            { line: 5, vars: {}, msg: "Menú principal" },
            { line: 7, vars: { opcion: "?" }, msg: "Solicitando opción" },
            { line: 8, vars: { opcion: 4 }, msg: "opcion = 4" },
            { line: 31, vars: {}, msg: "Saliendo..." },
            { line: 33, vars: {}, msg: "¿opcion = 4? → Verdadero" },
            { line: 34, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 39,
        title: "Conversor de unidades (menú)",
        category: "integradores",
        description: "Convertir unidades (metros, km, °C, kg) con menú.",
        code: `Algoritmo ConversorUnidades\n\tDefinir opcion Como Entero\n\tDefinir valor, resultado Como Real\n\tRepetir\n\t\tEscribir "1. m a cm; 2. km a m; 3. °C a °F; 4. kg a lb; 5. Salir"\n\t\tLeer opcion\n\t\tSegun opcion Hacer\n\t\t\t1:\n\t\t\t\tEscribir "Metros: "\n\t\t\t\tLeer valor\n\t\t\t\tresultado <- valor * 100\n\t\t\t\tEscribir valor, " m = ", resultado, " cm"\n\t\t\t2:\n\t\t\t\tEscribir "Kilómetros: "\n\t\t\t\tLeer valor\n\t\t\t\tresultado <- valor * 1000\n\t\t\t\tEscribir valor, " km = ", resultado, " m"\n\t\t\t3:\n\t\t\t\tEscribir "Celsius: "\n\t\t\t\tLeer valor\n\t\t\t\tresultado <- (valor * 9/5) + 32\n\t\t\t\tEscribir valor, " °C = ", resultado, " °F"\n\t\t\t4:\n\t\t\t\tEscribir "Kilogramos: "\n\t\t\t\tLeer valor\n\t\t\t\tresultado <- valor * 2.20462\n\t\t\t\tEscribir valor, " kg = ", resultado, " lb"\n\t\t\t5: Escribir "Saliendo..."\n\t\t\tDe Otro Modo: Escribir "Inválido"\n\t\tFinSegun\n\tHasta Que opcion = 5\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 4, vars: {}, msg: "Menú principal" },
            { line: 6, vars: { opcion: "?" }, msg: "Solicitando opción" },
            { line: 7, vars: { opcion: 1 }, msg: "opcion = 1" },
            { line: 9, vars: { valor: "?" }, msg: "Solicitando metros" },
            { line: 10, vars: { valor: 5 }, msg: "valor = 5" },
            { line: 11, vars: { resultado: 500 }, msg: "resultado = 500" },
            { line: 12, vars: {}, msg: "5 m = 500 cm" },
            { line: 33, vars: {}, msg: "¿opcion = 5? → Falso" },
            { line: 4, vars: {}, msg: "Menú principal" },
            { line: 6, vars: { opcion: "?" }, msg: "Solicitando opción" },
            { line: 7, vars: { opcion: 5 }, msg: "opcion = 5" },
            { line: 31, vars: {}, msg: "Saliendo..." },
            { line: 33, vars: {}, msg: "¿opcion = 5? → Verdadero" },
            { line: 34, vars: {}, msg: "Fin" }
        ]
    },
    // --- PARTE 5 (05-pseudocodigo.md) ---
    {
        id: 40,
        title: "Facturación de servicios",
        category: "integradores",
        description: "Calcular facturas de agua, energía y gas con tarifas escalonadas.",
        code: `Algoritmo FacturacionServicios\n\tDefinir nombre Como Caracter\n\tDefinir tipoServicio, continuar Como Entero\n\tDefinir consumo, totalPagar, tarifaUnidad Como Real\n\tcontinuar <- 1\n\tMientras continuar = 1 Hacer\n\t\tEscribir "Nombre: "\n\t\tLeer nombre\n\t\tEscribir "Servicio (1.Agua, 2.Energía, 3.Gas): "\n\t\tLeer tipoServicio\n\t\tEscribir "Consumo: "\n\t\tLeer consumo\n\t\tSegun tipoServicio Hacer\n\t\t\t1: Si consumo <= 20 Entonces tarifaUnidad <- 2000 Sino tarifaUnidad <- 2500 FinSi\n\t\t\t2: Si consumo <= 100 Entonces tarifaUnidad <- 500 Sino tarifaUnidad <- 650 FinSi\n\t\t\t3: Si consumo <= 50 Entonces tarifaUnidad <- 1200 Sino tarifaUnidad <- 1500 FinSi\n\t\tFinSegun\n\t\ttotalPagar <- consumo * tarifaUnidad\n\t\tEscribir "Factura: ", nombre, " - Total: $", totalPagar\n\t\tEscribir "¿Otro usuario? (1=Sí, 0=No): "\n\t\tLeer continuar\n\tFinMientras\n\tEscribir "Programa finalizado."\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 5, vars: { continuar: 1 }, msg: "continuar = 1" },
            { line: 6, vars: {}, msg: "¿continuar = 1? → Verdadero" },
            { line: 7, vars: { nombre: "?" }, msg: "Solicitando nombre" },
            { line: 8, vars: { nombre: "Ana" }, msg: "nombre = Ana" },
            { line: 9, vars: { tipoServicio: "?" }, msg: "Solicitando servicio" },
            { line: 10, vars: { tipoServicio: 1 }, msg: "tipoServicio = 1" },
            { line: 11, vars: { consumo: "?" }, msg: "Solicitando consumo" },
            { line: 12, vars: { consumo: 25 }, msg: "consumo = 25" },
            { line: 14, vars: {}, msg: "¿25 <= 20? → Falso" },
            { line: 14, vars: { tarifaUnidad: 2500 }, msg: "tarifaUnidad = 2500" },
            { line: 18, vars: { totalPagar: 62500 }, msg: "totalPagar = 62500" },
            { line: 19, vars: {}, msg: "Factura: Ana - Total: $62500" },
            { line: 20, vars: { continuar: "?" }, msg: "¿Otro usuario?" },
            { line: 21, vars: { continuar: 0 }, msg: "continuar = 0" },
            { line: 6, vars: {}, msg: "¿continuar = 1? → Falso" },
            { line: 23, vars: {}, msg: "Programa finalizado." },
            { line: 24, vars: {}, msg: "Fin" }
        ]
    },
    {
        id: 41,
        title: "Gestión de ventas de tienda",
        category: "integradores",
        description: "Registrar ventas, calcular total, promedio, y clasificar.",
        code: `Algoritmo GestionVentas\n\tDefinir opcion Como Entero\n\tDefinir valorVenta, totalVentas, ventaMayor, ventaMenor, promedio Como Real\n\tDefinir cantidadVentas, contBajas, contMedias, contAltas Como Entero\n\ttotalVentas <- 0; cantidadVentas <- 0; ventaMayor <- 0; ventaMenor <- 999999999\n\tcontBajas <- 0; contMedias <- 0; contAltas <- 0\n\tRepetir\n\t\tEscribir "1.Registrar; 2.Total; 3.Promedio; 4.Mayor/Menor; 5.Conteo; 6.Salir"\n\t\tLeer opcion\n\t\tSegun opcion Hacer\n\t\t\t1:\n\t\t\t\tEscribir "Valor venta: "\n\t\t\t\tLeer valorVenta\n\t\t\t\ttotalVentas <- totalVentas + valorVenta\n\t\t\t\tcantidadVentas <- cantidadVentas + 1\n\t\t\t\tSi cantidadVentas = 1 Entonces\n\t\t\t\t\tventaMayor <- valorVenta; ventaMenor <- valorVenta\n\t\t\t\tSino\n\t\t\t\t\tSi valorVenta > ventaMayor Entonces ventaMayor <- valorVenta FinSi\n\t\t\t\t\tSi valorVenta < ventaMenor Entonces ventaMenor <- valorVenta FinSi\n\t\t\t\tFinSi\n\t\t\t\tSi valorVenta < 50000 Entonces contBajas <- contBajas + 1\n\t\t\t\tSino Si valorVenta <= 100000 Entonces contMedias <- contMedias + 1\n\t\t\t\tSino contAltas <- contAltas + 1 FinSi FinSi\n\t\t\t2: Escribir "Total: $", totalVentas\n\t\t\t3: \n\t\t\t\tSi cantidadVentas > 0 Entonces\n\t\t\t\t\tpromedio <- totalVentas / cantidadVentas\n\t\t\t\t\tEscribir "Promedio: $", promedio\n\t\t\t\tFinSi\n\t\t\t4: Escribir "Mayor: $", ventaMayor, " - Menor: $", ventaMenor\n\t\t\t5: Escribir "Bajas: ", contBajas, " Medias: ", contMedias, " Altas: ", contAltas\n\t\t\t6: Escribir "Saliendo..."\n\t\tFinSegun\n\tHasta Que opcion = 6\nFinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 5, vars: { totalVentas: 0, cantidadVentas: 0, ventaMayor: 0, ventaMenor: 999999999 }, msg: "Inicializando variables" },
            { line: 7, vars: {}, msg: "Menú principal" },
            { line: 9, vars: { opcion: "?" }, msg: "Solicitando opción" },
            { line: 10, vars: { opcion: 1 }, msg: "opcion = 1" },
            { line: 12, vars: { valorVenta: "?" }, msg: "Solicitando venta" },
            { line: 13, vars: { valorVenta: 80000 }, msg: "valorVenta = 80000" },
            { line: 14, vars: { totalVentas: 80000 }, msg: "totalVentas = 80000" },
            { line: 15, vars: { cantidadVentas: 1 }, msg: "cantidadVentas = 1" },
            { line: 16, vars: {}, msg: "¿cantidadVentas = 1? → Verdadero" },
            { line: 17, vars: { ventaMayor: 80000, ventaMenor: 80000 }, msg: "ventaMayor = 80000, ventaMenor = 80000" },
            { line: 22, vars: {}, msg: "¿80000 < 50000? → Falso" },
            { line: 23, vars: {}, msg: "¿80000 <= 100000? → Verdadero" },
            { line: 24, vars: { contMedias: 1 }, msg: "contMedias = 1" },
            { line: 33, vars: {}, msg: "¿opcion = 6? → Falso" },
            { line: 7, vars: {}, msg: "Menú principal" },
            { line: 9, vars: { opcion: "?" }, msg: "Solicitando opción" },
            { line: 10, vars: { opcion: 6 }, msg: "opcion = 6" },
            { line: 31, vars: {}, msg: "Saliendo..." },
            { line: 33, vars: {}, msg: "¿opcion = 6? → Verdadero" },
            { line: 34, vars: {}, msg: "Fin" }
        ]
    }
];

// ============================================================
// 3. LÓGICA DE LA INTERFAZ
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    
    await loadMotion();

    const grid = document.getElementById('exerciseGrid');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    const modalElement = document.getElementById('exerciseModal');
    const modal = new bootstrap.Modal(modalElement);
    const modalTitle = document.getElementById('exerciseModalLabel');
    const modalDescription = document.getElementById('modalDescription');
    const modalCode = document.getElementById('modalCode');
    const simTerminal = document.getElementById('simTerminal');
    const simStartBtn = document.getElementById('simStartBtn');
    const simPauseBtn = document.getElementById('simPauseBtn');
    const simResetBtn = document.getElementById('simResetBtn');
    const simSpeed = document.getElementById('simSpeed');

    let currentExercise = null;
    let simInterval = null;
    let simStep = 0;
    let simPaused = false;

    // Estado de los filtros
    let currentCategory = 'todos';
    let currentSearch = '';

    // Renderizar tarjetas
    function renderCards() {
        // Ocultar spinner la primera vez
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }

        // Filtrar los datos
        const filteredExercises = exercises.filter(ex => {
            const matchesCategory = currentCategory === 'todos' || ex.category === currentCategory;
            const matchesSearch = ex.title.toLowerCase().includes(currentSearch.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Si hay tarjetas previas y tenemos Motion, animar salida
        const existingCards = grid.querySelectorAll('.exercise-card');
        
        const updateDOM = () => {
            // Limpiar grid (excepto el spinner)
            const cardsToRemove = grid.querySelectorAll('.exercise-card');
            cardsToRemove.forEach(c => c.remove());

            if (filteredExercises.length === 0) {
                grid.innerHTML += `<div class="col-12 text-center py-5 text-muted w-100"><i class="fa-solid fa-face-frown fs-1 mb-3"></i><h3>No se encontraron ejercicios</h3><p>Intenta con otra búsqueda o categoría.</p></div>`;
                return;
            }

            // Inyectar nuevas tarjetas
            filteredExercises.forEach((ex) => {
                const card = document.createElement('div');
                card.className = 'exercise-card';
                // Prevenir XSS con los textos
                const safeTitle = ex.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                const safeDesc = ex.description.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                
                card.innerHTML = `
                    <span class="exercise-card__badge">${ex.category}</span>
                    <h3 class="exercise-card__title">${safeTitle}</h3>
                    <p class="exercise-card__desc">${safeDesc}</p>
                    <div class="exercise-card__code-preview">${ex.code.substring(0, 100).replace(/</g, "&lt;")}...</div>
                    <div class="exercise-card__meta">
                        <span>Ejercicio ${ex.id}</span>
                        <span class="exercise-card__action"><i class="fa-solid fa-arrow-right"></i> Abrir</span>
                    </div>
                `;
                card.addEventListener('click', () => openModal(ex));
                grid.appendChild(card);
            });

            // Animar entrada
            if (animateFn) {
                animateFn('.exercise-card', {
                    opacity: [0, 1],
                    y: [20, 0],
                    scale: [0.95, 1]
                }, {
                    delay: staggerFn(0.05),
                    duration: 0.4,
                    ease: 'easeOut'
                });
            }
        };

        if (existingCards.length > 0 && animateFn) {
            // Animación de salida
            animateFn(existingCards, {
                opacity: [1, 0],
                scale: [1, 0.95]
            }, {
                duration: 0.2,
                ease: 'easeIn'
            }).finished.then(updateDOM);
        } else {
            updateDOM();
        }
    }

    // Lógica de Filtros
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remover active de todos
            filterBtns.forEach(b => b.classList.remove('active'));
            // Añadir active al clickeado
            e.currentTarget.classList.add('active');
            
            currentCategory = e.currentTarget.dataset.filter;
            renderCards();
        });
    });

    // Lógica de Búsqueda
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value;
            renderCards();
        }, 300); // Debounce para no animar en cada tecla
    });

    // Abrir modal
    function openModal(ex) {
        currentExercise = ex;
        modalTitle.textContent = ex.title;
        modalDescription.textContent = ex.description;

        modalCode.innerHTML = highlightCode(ex.code);
        resetSimulation();
        modal.show();

        if (animateFn) {
            animateFn('.modal-content', {
                scale: [0.95, 1],
                opacity: [0, 1]
            }, { duration: 0.3, ease: 'easeOut' });
        }
    }

    // Resaltado de sintaxis
    function highlightCode(code) {
        const keywords = ['Algoritmo', 'FinAlgoritmo', 'Definir', 'Escribir', 'Leer', 'Si', 'SiNo', 'FinSi', 'Mientras', 'FinMientras', 'Para', 'FinPara', 'Repetir', 'Hasta', 'Que', 'Segun', 'FinSegun', 'Como', 'Real', 'Entero', 'Cadena', 'Caracter'];
        
        let html = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        html = html.replace(/(\/\/.*)/g, '<span class="tk-comment">$1</span>');

        keywords.forEach(kw => {
            const regex = new RegExp(`\\b${kw}\\b`, 'g');
            html = html.replace(regex, `<span class="tk-keyword">${kw}</span>`);
        });

        html = html.replace(/"([^"]*)"/g, '<span class="tk-string">"$1"</span>');
        html = html.replace(/'([^']*)'/g, '<span class="tk-string">\'$1\'</span>');
        html = html.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="tk-number">$1</span>');

        const lines = html.split('\n');
        return lines.map(line => `<span class="code-line">${line}</span>`).join('');
    }

    // ============================================================
    // SIMULACIÓN
    // ============================================================
    function resetSimulation() {
        clearInterval(simInterval);
        simInterval = null;
        simStep = 0;
        simPaused = false;
        simStartBtn.disabled = false;
        simPauseBtn.disabled = true;
        simPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar';
        simTerminal.innerHTML = '<div class="sim-line">Presiona "Iniciar simulación" para comenzar.</div>';
        document.querySelectorAll('.code-line.active').forEach(el => el.classList.remove('active'));
    }

    function runSimulation() {
        if (!currentExercise || !currentExercise.steps) return;

        const steps = currentExercise.steps;
        const speed = parseInt(simSpeed.value);

        simInterval = setInterval(() => {
            if (simPaused) return;

            if (simStep >= steps.length) {
                clearInterval(simInterval);
                simStartBtn.disabled = false;
                simPauseBtn.disabled = true;
                return;
            }

            const step = steps[simStep];

            document.querySelectorAll('.code-line.active').forEach(el => el.classList.remove('active'));

            const codeLines = document.querySelectorAll('.code-line');
            if (codeLines[step.line - 1]) {
                codeLines[step.line - 1].classList.add('active');
                // Auto-scroll en el código si es muy largo
                codeLines[step.line - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            const simLine = document.createElement('div');
            simLine.className = 'sim-line active';
            
            const varsStr = Object.keys(step.vars).length > 0
                ? ' | ' + Object.entries(step.vars).map(([k, v]) => `<strong>${k}</strong>=${v}`).join(', ')
                : '';
                
            simLine.innerHTML = `<i class="fa-solid fa-angle-right me-2"></i>Línea ${step.line}: ${step.msg}${varsStr}`;
            simTerminal.appendChild(simLine);
            simTerminal.scrollTop = simTerminal.scrollHeight;

            simStep++;
        }, speed);
    }

    simStartBtn.addEventListener('click', () => {
        if (simInterval) return;
        runSimulation();
        simStartBtn.disabled = true;
        simPauseBtn.disabled = false;
    });

    simPauseBtn.addEventListener('click', () => {
        simPaused = !simPaused;
        simPauseBtn.innerHTML = simPaused
            ? '<i class="fa-solid fa-play"></i> Reanudar'
            : '<i class="fa-solid fa-pause"></i> Pausar';
    });

    simResetBtn.addEventListener('click', resetSimulation);
    simSpeed.addEventListener('input', () => {
        if (simInterval) {
            clearInterval(simInterval);
            simInterval = null;
            runSimulation();
        }
    });

    modalElement.addEventListener('hidden.bs.modal', resetSimulation);

    // Arrancar la app renderizando todo por primera vez
    renderCards();
});