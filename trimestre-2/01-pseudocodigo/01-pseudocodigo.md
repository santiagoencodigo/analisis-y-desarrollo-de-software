# Ejercicios de pseudocódigo en PSeInt - Parte 1 (Ejercicios 1-12)

> Este documento reúne los primeros 12 ejercicios de lógica de programación resueltos en **PSeInt**, una herramienta educativa para aprender pseudocódigo en español. Los ejercicios fueron desarrollados durante el segundo trimestre del tecnólogo en Análisis y Desarrollo de Software (ADSO), como parte del componente de **Pensamiento Lógico y Programación**.

---

## Tabla de contenido

- [Introducción a PSeInt y LLP](#introducción-a-pseint-y-llp)
- [Ejercicios de condicionales y comparaciones](#ejercicios-de-condicionales-y-comparaciones)
  - [Ejercicio 1: Comparar dos números (mayor)](#ejercicio-1-comparar-dos-números-mayor)
  - [Ejercicio 2: Comparar dos números (menor)](#ejercicio-2-comparar-dos-números-menor)
  - [Ejercicio 3: Suma de dos números](#ejercicio-3-suma-de-dos-números)
  - [Ejercicio 4: Menor de tres números](#ejercicio-4-menor-de-tres-números)
  - [Ejercicio 5: Hipotenusa de un triángulo rectángulo](#ejercicio-5-hipotenusa-de-un-triángulo-rectángulo)
  - [Ejercicio 6: Área de un cuadrado](#ejercicio-6-área-de-un-cuadrado)
  - [Ejercicio 7: Área y volumen de un cilindro](#ejercicio-7-área-y-volumen-de-un-cilindro)
  - [Ejercicio 8: Área de un rectángulo](#ejercicio-8-área-de-un-rectángulo)
  - [Ejercicio 9: Par o impar](#ejercicio-9-par-o-impar)
  - [Ejercicio 10: Contar números en rangos](#ejercicio-10-contar-números-en-rangos)
  - [Ejercicio 11: Clasificación de notas](#ejercicio-11-clasificación-de-notas)
  - [Ejercicio 12: Ordenar dos números](#ejercicio-12-ordenar-dos-números)
- [Referencias](#referencias)

---

## Introducción a PSeInt y LLP

**PSeInt** es una herramienta educativa gratuita diseñada para aprender lógica de programación mediante pseudocódigo en español. Fue creada por el argentino Pablo Novara y es ampliamente utilizada en Latinoamérica en cursos introductorios de programación.

**LLP** (Lógica de Programación) es la base del pensamiento computacional. Se enfoca en desarrollar habilidades para resolver problemas mediante algoritmos, utilizando estructuras condicionales, ciclos, variables y operaciones.

### Enlaces útiles

- [Página oficial de PSeInt](http://pseint.sourceforge.net/)
- [Descargar PSeInt](http://pseint.sourceforge.net/index.php?page=descargas.php)
- [Documentación y ejemplos](http://pseint.sourceforge.net/index.php?page=ejemplos.php)

---

## Ejercicios de condicionales y comparaciones

### Ejercicio 1: Comparar dos números (mayor)

**Propósito:** Determinar cuál de dos números ingresados es el mayor. Si son iguales, mostrar un mensaje de error.

```pseudocodigo
Algoritmo Ejercicio_1
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
FinAlgoritmo
```

---

### Ejercicio 2: Comparar dos números (menor)

**Propósito:** Determinar cuál de dos números ingresados es el menor. Si son iguales, mostrar un mensaje de error.

```pseudocodigo
Algoritmo Ejercicio_1
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
FinAlgoritmo
```

---

### Ejercicio 3: Suma de dos números

**Propósito:** Leer dos números y mostrar su suma.

```pseudocodigo
Algoritmo Ejercicio_1_b
	Definir A, B, suma Como Real
	Escribir "ingrese el primer numero: " 
	Leer A 
	Escribir "Ingrese el segundo numero: "
	Leer B 
	suma <- A + B 
	Escribir "La suma es: ",suma
FinAlgoritmo
```

---

### Ejercicio 4: Menor de tres números

**Propósito:** Determinar el número menor entre tres valores ingresados. Validar que no sean iguales.

```pseudocodigo
Algoritmo numeros_3
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
FinAlgoritmo
```

---

### Ejercicio 5: Hipotenusa de un triángulo rectángulo

**Propósito:** Calcular la hipotenusa de un triángulo rectángulo dados los catetos, usando el teorema de Pitágoras.

```pseudocodigo
Algoritmo Ejercicio_4
	Escribir "Ingrese valor CatA: "
	Leer CatA
	Escribir "Ingrese Valor CatB: "
	Leer CatB
	CatA2 = CatA * CatA
	CatB2 = CatB * CatB
	Hipotenusa = RC (CatA2 + CatB2)
	Escribir "El valor de la hipotenusa del triangulo rectangulo es: " Hipotenusa
FinAlgoritmo
```

---

### Ejercicio 6: Área de un cuadrado

**Propósito:** Calcular el área de un cuadrado dado su lado.

```pseudocodigo
Algoritmo Ejercicio_4_b
	Escribir "Cuanto mide el lado del cuadrado: "
	Leer lado
	Area = lado * lado
	Mostrar "El area del cuadrado es: " Area
FinAlgoritmo
```

---

### Ejercicio 7: Área y volumen de un cilindro

**Propósito:** Calcular el área superficial y el volumen de un cilindro dado su radio y altura.

```pseudocodigo
Algoritmo Ejercicio_5
	Escribir "Escribe el Radio del cilindro" 
	LEER R  
	Escribir "Escribe la altura del cilindro"
	LEER H  
	Area = 2 * 3.1416 * R * (R + H)
	Volumen = 3.1416 * R^2 * H
	ESCRIBIR "Área del cilindro: ", Area
	ESCRIBIR "Volumen del cilindro: ", Volumen
FinAlgoritmo
```

---

### Ejercicio 8: Área de un rectángulo

**Propósito:** Calcular el área de un rectángulo dados su ancho y largo.

```pseudocodigo
Algoritmo Ejercio_5_a
	Escribir "Digita el ancho del rectangulo" 
	Leer ancho
	Escribir "Digita el largo del rectangulo" 
	Leer largo 
	Area = ancho * largo 
	Escribir "area del rectangulo ", Area
FinAlgoritmo
```

---

### Ejercicio 9: Par o impar

**Propósito:** Determinar si un número ingresado es par o impar.

```pseudocodigo
Algoritmo Ejercicio_6_a
	Escribir "ingresa N"
	Leer N
	Si N % 2 = 0 Entonces
		Escribir "El numero es par"
	SiNo
		Escribir "El numero es impar"
	FinSi
FinAlgoritmo
```

---

### Ejercicio 10: Contar números en rangos

**Propósito:** Leer N números y contar cuántos están entre 50 y 75, cuántos son mayores de 80 y cuántos menores de 30.

```pseudocodigo
Algoritmo Ejercicio_6_b
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
FinAlgoritmo
```

---

### Ejercicio 11: Clasificación de notas

**Propósito:** Clasificar una nota entre 1 y 20 en letras (A, B, C, D, E) según rangos.

```pseudocodigo
Algoritmo Contador_de_notas
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
FinAlgoritmo
```

---

### Ejercicio 12: Ordenar dos números

**Propósito:** Ordenar dos números de menor a mayor.

```pseudocodigo
Algoritmo Ejercicio_8
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
FinAlgoritmo
```

---

## Referencias

- [PSeInt - Sitio oficial](http://pseint.sourceforge.net/)
- [Ejemplos de pseudocódigo en PSeInt](http://pseint.sourceforge.net/index.php?page=ejemplos.php)
- Ejercicios propuestos por el instructor Julio Galvis durante la formación en ADSO.

---

> Gracias por leer.