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
// 2. DATOS DE LOS EJERCICIOS (Documento 01)
// ============================================================
const exercises = [
    {
        id: 1,
        title: "Comparar dos números (mayor)",
        category: "Condicionales",
        description: "Determinar cuál de dos números ingresados es el mayor. Si son iguales, mostrar un mensaje de error.",
        code: `Algoritmo Ejercicio_1
	Escribir "Ingrese el numero 1 "
	Leer numero1 
	Escribir "Ingrese el numero 2 "
	Leer numero2
	Si numero1 = numero2 Entonces
		Escribir "Los numeros no pueden ser iguales"
	SiNo
		si numero1 > numero2 Entonces
			Escribir "El numero mayor es: " numero1
		SiNo
			Escribir "El numero mayor es: " numero2
		FinSi
	FinSi
FinAlgoritmo`,
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
        category: "Condicionales",
        description: "Determinar cuál de dos números ingresados es el menor. Si son iguales, mostrar un mensaje de error.",
        code: `Algoritmo Ejercicio_1
	Escribir "Ingrese el numero 1 "
	Leer numero1 
	Escribir "Ingrese el numero 2 "
	Leer numero2
	Si numero1 = numero2 Entonces
		Escribir "Los numeros no pueden ser iguales"
	SiNo
		si numero1 < numero2 Entonces
			Escribir "El numero menor es: " numero1
		SiNo
			Escribir "El numero menor es: " numero2
		FinSi
	FinSi
FinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio del algoritmo" },
            { line: 2, vars: { numero1: "?" }, msg: "Solicitando número 1" },
            { line: 3, vars: { numero1: 25 }, msg: "numero1 = 25" },
            { line: 4, vars: { numero1: 25, numero2: "?" }, msg: "Solicitando número 2" },
            { line: 5, vars: { numero1: 25, numero2: 8 }, msg: "numero2 = 8" },
            { line: 6, vars: { numero1: 25, numero2: 8 }, msg: "¿numero1 = numero2? 25 = 8 → Falso" },
            { line: 9, vars: { numero1: 25, numero2: 8 }, msg: "¿numero1 < numero2? 25 < 8 → Falso" },
            { line: 12, vars: { numero1: 25, numero2: 8, menor: 8 }, msg: "El número menor es: 8" },
            { line: 15, vars: { numero1: 25, numero2: 8, menor: 8 }, msg: "Fin del algoritmo" }
        ]
    },
    {
        id: 3,
        title: "Suma de dos números",
        category: "Operaciones",
        description: "Leer dos números y mostrar su suma.",
        code: `Algoritmo Ejercicio_1_b
	Definir A, B, suma Como Real
	Escribir "ingrese el primer numero: " 
	Leer A 
	Escribir "Ingrese el segundo numero: "
	Leer B 
	suma <- A + B 
	Escribir "La suma es: ",suma
FinAlgoritmo`,
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
        category: "Condicionales",
        description: "Determinar el número menor entre tres valores ingresados. Validar que no sean iguales.",
        code: `Algoritmo numeros_3
	Escribir "escriba el numero 1: "
	leer numero1
	escribir "escriba el numeron 2:"
	leer numero2
	escribir "escriba el numero 3"
	leer numero3
	si (numero1 = numero2) o (numero1 = numero3) Entonces
		escribir "el numero debe ser diferentes"
	fin si
	si numero2 = numero3 Entonces
		Escribir "los numeros no puden ser iguales"
	SiNo
		si (numero1 < numero2) y (numero1 < numero3) Entonces
			escribir "El numero menor es: " numero1
		sino 
			si numero2 < numero3 Entonces
				Escribir "El numero menor es: " numero2
			SiNo
				Escribir "El numero menor es : " numero1
			fin si
		FinSi
	FinSi
FinAlgoritmo`,
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
        category: "Operaciones",
        description: "Calcular la hipotenusa de un triángulo rectángulo dados los catetos, usando el teorema de Pitágoras.",
        code: `Algoritmo Ejercicio_4
	Escribir "Ingrese valor CatA: "
	Leer CatA
	Escribir "Ingrese Valor CatB: "
	Leer CatB
	CatA2 = CatA * CatA
	CatB2 = CatB * CatB
	Hipotenusa = RC (CatA2 + CatB2)
	Escribir "El valor de la hipotenusa del triangulo rectangulo es: " Hipotenusa
FinAlgoritmo`,
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
        category: "Operaciones",
        description: "Calcular el área de un cuadrado dado su lado.",
        code: `Algoritmo Ejercicio_4_b
	Escribir "Cuanto mide el lado del cuadrado: "
	Leer lado
	Area = lado * lado
	Mostrar "El area del cuadrado es: " Area
FinAlgoritmo`,
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
        category: "Operaciones",
        description: "Calcular el área superficial y el volumen de un cilindro dado su radio y altura.",
        code: `Algoritmo Ejercicio_5
	Escribir "Escribe el Radio del cilindro" 
	LEER R  
	Escribir "Escribe la altura del cilindro"
	LEER H  
	Area = 2 * 3.1416 * R * (R + H)
	Volumen = 3.1416 * R^2 * H
	ESCRIBIR "Área del cilindro: ", Area
	ESCRIBIR "Volumen del cilindro: ", Volumen
FinAlgoritmo`,
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
        category: "Operaciones",
        description: "Calcular el área de un rectángulo dados su ancho y largo.",
        code: `Algoritmo Ejercio_5_a
	Escribir "Digita el ancho del rectangulo" 
	Leer ancho
	Escribir "Digita el largo del rectangulo" 
	Leer largo 
	Area = ancho * largo 
	Escribir "area del rectangulo ", Area
FinAlgoritmo`,
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
        category: "Condicionales",
        description: "Determinar si un número ingresado es par o impar.",
        code: `Algoritmo Ejercicio_6_a
	Escribir "ingresa N"
	Leer N
	Si N % 2 = 0 Entonces
		Escribir "El numero es par"
	SiNo
		Escribir "El numero es impar"
	FinSi
FinAlgoritmo`,
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
        category: "Ciclos",
        description: "Leer N números y contar cuántos están entre 50 y 75, cuántos son mayores de 80 y cuántos menores de 30.",
        code: `Algoritmo Ejercicio_6_b
	Definir n, i, numero Como Entero
	Definir entre50y75, mayores80, menores30 Como Entero
	entre50y75 <- 0
	mayores80 <- 0
	menores30 <- 0
	Escribir 'Ingresa la cantidad de numeros de la lista (0 para terminar)'
	Leer n
	Si n <> 0 Entonces
		Para i <- 1 Hasta n Con Paso 1 Hacer
			Escribir 'Ingrese el numero ', i, ':'
			Leer numero
			Si numero >= 50 Y numero <= 75 Entonces
				entre50y75 <- entre50y75 + 1
			FinSi
			Si numero > 80 Entonces
				mayores80 <- mayores80 + 1
			FinSi
			Si numero < 30 Entonces
				menores30 <- menores30 + 1
			FinSi
		FinPara
		Escribir 'Cantidad de numeros entre 50 y 75: ', entre50y75
		Escribir 'Cantidad de numeros mayores de 80: ', mayores80
		Escribir 'Cantidad de numeros menores 30: ', menores30
	SiNo
		Escribir 'No hay numeros para procesar, finalizando.'
	FinSi
FinAlgoritmo`,
        steps: [
            { line: 1, vars: {}, msg: "Inicio" },
            { line: 2, vars: { n: "?", i: "?", numero: "?" }, msg: "Definiendo variables" },
            { line: 3, vars: { entre50y75: "?", mayores80: "?", menores30: "?" }, msg: "Definiendo contadores" },
            { line: 4, vars: { entre50y75: 0 }, msg: "entre50y75 = 0" },
            { line: 5, vars: { entre50y75: 0, mayores80: 0 }, msg: "mayores80 = 0" },
            { line: 6, vars: { entre50y75: 0, mayores80: 0, menores30: 0 }, msg: "menores30 = 0" },
            { line: 7, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: "?" }, msg: "Solicitando cantidad de números" },
            { line: 8, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: 3 }, msg: "n = 3" },
            { line: 9, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: 3 }, msg: "n ≠ 0 → Entrar al ciclo" },
            { line: 10, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: 3, i: 1 }, msg: "i = 1" },
            { line: 11, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: 3, i: 1, numero: "?" }, msg: "Solicitando número 1" },
            { line: 12, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: 3, i: 1, numero: 60 }, msg: "numero = 60" },
            { line: 13, vars: { entre50y75: 0, mayores80: 0, menores30: 0, n: 3, i: 1, numero: 60 }, msg: "¿60 >= 50 Y 60 <= 75? → Verdadero" },
            { line: 14, vars: { entre50y75: 1, mayores80: 0, menores30: 0, n: 3, i: 1, numero: 60 }, msg: "entre50y75 = 1" },
            { line: 18, vars: { entre50y75: 1, mayores80: 0, menores30: 0, n: 3, i: 2 }, msg: "i = 2" },
            { line: 11, vars: { entre50y75: 1, mayores80: 0, menores30: 0, n: 3, i: 2, numero: "?" }, msg: "Solicitando número 2" },
            { line: 12, vars: { entre50y75: 1, mayores80: 0, menores30: 0, n: 3, i: 2, numero: 85 }, msg: "numero = 85" },
            { line: 13, vars: { entre50y75: 1, mayores80: 0, menores30: 0, n: 3, i: 2, numero: 85 }, msg: "¿85 >= 50 Y 85 <= 75? → Falso" },
            { line: 16, vars: { entre50y75: 1, mayores80: 0, menores30: 0, n: 3, i: 2, numero: 85 }, msg: "¿85 > 80? → Verdadero" },
            { line: 17, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 2, numero: 85 }, msg: "mayores80 = 1" },
            { line: 18, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 3 }, msg: "i = 3" },
            { line: 11, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 3, numero: "?" }, msg: "Solicitando número 3" },
            { line: 12, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 3, numero: 25 }, msg: "numero = 25" },
            { line: 13, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 3, numero: 25 }, msg: "¿25 >= 50 Y 25 <= 75? → Falso" },
            { line: 16, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 3, numero: 25 }, msg: "¿25 > 80? → Falso" },
            { line: 19, vars: { entre50y75: 1, mayores80: 1, menores30: 0, n: 3, i: 3, numero: 25 }, msg: "¿25 < 30? → Verdadero" },
            { line: 20, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3, i: 3, numero: 25 }, msg: "menores30 = 1" },
            { line: 22, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3, i: 4 }, msg: "i = 4, ciclo termina" },
            { line: 24, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Cantidad entre 50 y 75: 1" },
            { line: 25, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Cantidad mayores de 80: 1" },
            { line: 26, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Cantidad menores de 30: 1" },
            { line: 30, vars: { entre50y75: 1, mayores80: 1, menores30: 1, n: 3 }, msg: "Fin" }
        ]
    },
    {
        id: 11,
        title: "Clasificación de notas",
        category: "Ciclos",
        description: "Clasificar una nota entre 1 y 20 en letras (A, B, C, D, E) según rangos.",
        code: `Algoritmo Contador_de_notas
	Definir nota Como Entero
	Escribir "Ingrese una calificación entre 1 y 20 (0 para salir): "
	Leer nota
	Mientras nota >= 1 Y nota <= 20 Hacer
		Si nota >= 19 Y nota <= 20 Entonces
			Escribir "Calificación: A"
		Sino
			Si nota >= 16 Y nota <= 18 Entonces
				Escribir "Calificación: B"
			Sino
				Si nota >= 13 Y nota <= 15 Entonces
					Escribir "Calificación: C"
				Sino
					Si nota >= 10 Y nota <= 12 Entonces
						Escribir "Calificación: D"
					Sino
						Escribir "Calificación: E"
					FinSi
				FinSi
			FinSi
		FinSi
		Escribir "Ingrese otra calificación (0 para salir): "
		Leer nota
	FinMientras
FinAlgoritmo`,
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
        category: "Condicionales",
        description: "Ordenar dos números de menor a mayor.",
        code: `Algoritmo Ejercicio_8
	Escribir "Ingrese el primer numero"
	Leer A 
	Escribir "Ingrese el segundo numero"
	Leer B
	Si A > B Entonces
		Temporal = A
		A = B
		B = Temporal
	FinSi
	Escribir "Orden de menor a mayor: ", A, " , ", B
FinAlgoritmo`,
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
    }
];

// ============================================================
// 3. LÓGICA DE LA INTERFAZ
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    
    // Cargar Motion de forma segura
    await loadMotion();

    const grid = document.getElementById('exerciseGrid');
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

    // Renderizar tarjetas
    function renderCards() {
        grid.innerHTML = ''; // Limpiar spinner

        exercises.forEach((ex) => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            card.innerHTML = `
                <span class="exercise-card__badge">${ex.category}</span>
                <h3 class="exercise-card__title">${ex.title}</h3>
                <p class="exercise-card__desc">${ex.description}</p>
                <div class="exercise-card__code-preview">${ex.code.substring(0, 200)}${ex.code.length > 200 ? '...' : ''}</div>
                <div class="exercise-card__meta">
                    <span>Ejercicio ${ex.id}</span>
                    <span class="exercise-card__action"><i class="fa-solid fa-arrow-right"></i> Abrir</span>
                </div>
            `;
            card.addEventListener('click', () => openModal(ex));
            grid.appendChild(card);
        });

        // Animación de entrada si Motion cargó
        if (exercises.length > 0 && staggerFn && animateFn) {
            animateFn('.exercise-card', {
                opacity: [0, 1],
                y: [30, 0]
            }, {
                delay: staggerFn(0.05),
                duration: 0.6,
                ease: 'easeOut'
            });
        }
    }

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
            }, {
                duration: 0.3,
                ease: 'easeOut'
            });
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
            }

            const simLine = document.createElement('div');
            simLine.className = 'sim-line active';
            const varsStr = Object.keys(step.vars).length > 0
                ? ' | ' + Object.entries(step.vars).map(([k, v]) => `${k}=${v}`).join(', ')
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

    // Arrancar la app
    renderCards();
});