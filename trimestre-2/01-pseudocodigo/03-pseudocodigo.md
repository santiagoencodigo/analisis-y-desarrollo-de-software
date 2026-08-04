# Ejercicios de pseudocódigo en PSeInt - Parte 3 (Ejercicios 25-36)

> Este documento reúne los ejercicios 25 al 36 de lógica de programación resueltos en **PSeInt**, incluyendo ciclos avanzados, conversión de días y cálculos de estacionamiento.

---

## Tabla de contenido

- [Ejercicios de ciclos y conversiones](#ejercicios-de-ciclos-y-conversiones)
  - [Ejercicio 25: Nómina de 50 obreros (con Repetir)](#ejercicio-25-nómina-de-50-obreros-con-repetir)
  - [Ejercicio 26: Clasificación de notas (con Mientras)](#ejercicio-26-clasificación-de-notas-con-mientras)
  - [Ejercicio 27: Conversión de días a años, meses y semanas (Mientras)](#ejercicio-27-conversión-de-días-a-años-meses-y-semanas-mientras)
  - [Ejercicio 28: Conversión de días a años, meses y semanas (Repetir)](#ejercicio-28-conversión-de-días-a-años-meses-y-semanas-repetir)
  - [Ejercicio 29: Conversión de días a años, meses y semanas (Condicionales)](#ejercicio-29-conversión-de-días-a-años-meses-y-semanas-condicionales)
  - [Ejercicio 30: Cálculo de estacionamiento (versión completa)](#ejercicio-30-cálculo-de-estacionamiento-versión-completa)
  - [Ejercicio 31: Cálculo de estacionamiento (versión simple)](#ejercicio-31-cálculo-de-estacionamiento-versión-simple)
  - [Ejercicio 32: Cálculo de estacionamiento (versión con fracción)](#ejercicio-32-cálculo-de-estacionamiento-versión-con-fracción)
  - [Ejercicio 33: Descuento en entradas (estructura Según)](#ejercicio-33-descuento-en-entradas-estructura-según)
  - [Ejercicio 34: Conversión de km/h a m/s (con variable)](#ejercicio-34-conversión-de-kmh-a-ms-con-variable)
  - [Ejercicio 35: Suma y media de N números (con ciclo Para)](#ejercicio-35-suma-y-media-de-n-números-con-ciclo-para)
  - [Ejercicio 36: Factura con IVA (formato extendido)](#ejercicio-36-factura-con-iva-formato-extendido)
- [Referencias](#referencias)

---

### Ejercicio 25: Nómina de 50 obreros (con Repetir)

**Propósito:** Calcular el pago de 50 obreros usando la estructura Repetir.

```pseudocodigo
Algoritmo TreceC 
	Definir i Como Entero
	Definir horasTrabajadas, pagoObrero, totalNomina Como Real
	totalNomina <- 0
	i <- 1
	Repetir
		Escribir "Ingrese las horas trabajadas por el obrero ", i, ":"
		Leer horasTrabajadas
		pagoObrero <- horasTrabajadas * 30000
		totalNomina <- totalNomina + pagoObrero
		Escribir "Pago del obrero ", i, ": ", pagoObrero, " Bolívares"
		Escribir "-------------------------------"	
		i <- i + 1
	Hasta Que i > 50
	Escribir "Total de la nómina: ", totalNomina, " Bolívares"
FinAlgoritmo
```

---

### Ejercicio 26: Clasificación de notas (con Mientras)

**Propósito:** Clasificar notas repetidamente hasta que el usuario ingrese 0.

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

### Ejercicio 27: Conversión de días a años, meses y semanas (Mientras)

**Propósito:** Convertir un número de días en años, meses y semanas usando ciclos Mientras.

```pseudocodigo
Algoritmo sin_titulo
	años <- 0 
	meses <- 0
	semanas <- 0 
	dias <- 0
	Escribir "escriba un numero de dias"
	Leer num_dias
	dias = num_dias
	Mientras dias > 365 Hacer
		años = años + 1
		dias = dias - 365
	FinMientras
	Mientras dias > 30 Hacer
		meses = meses + 1
		dias = dias - 30
	FinMientras
	Mientras dias > 7 Hacer
		meses = meses + 1   # Error lógico: debería ser semanas
		dias = dias - 7
	FinMientras
	Escribir "En " num_dias " Dias " " Hay " años " años " meses " meses y dias " dias
FinAlgoritmo
```

---

### Ejercicio 28: Conversión de días a años, meses y semanas (Repetir)

**Propósito:** Convertir días usando la estructura Repetir.

```pseudocodigo
Algoritmo sin_titulo
	años <- 0
	meses <- 0
	semanas <- 0
	dias <- 0
	Escribir "Escribe los dias"
	leer num_dias
	dias = num_dias
	Repetir
		Si dias >= 365 Entonces
			dias <- dias - 365
			años <- años + 1
		FinSi
	Hasta Que dias < 365
	Repetir
		Si dias >= 30 Entonces   # Error: debería ser >= 30, no >= 365
			dias <- dias - 30
			meses <- meses + 1
		FinSi
	Hasta Que dias < 30
	Repetir
		Si dias >= 7 Entonces
			dias = dias - 7
			semanas = semanas + 1
		FinSi
	Hasta Que dias < 7
	Escribir "En " num_dias " Dias " " Hay " años " Años " meses " Meses y Dias " dias
FinAlgoritmo
```

---

### Ejercicio 29: Conversión de días a años, meses y semanas (Condicionales)

**Propósito:** Convertir días usando solo condicionales (estructura incorrecta).

```pseudocodigo
Algoritmo sin_titulo
	años <- 0
	meses <- 0
	semanas <- 0
	dias <- 0
	Escribir "Escribe los dias"
	leer num_dias
	dias = num_dias
	Si dias >= 365 Entonces
		dias <- dias - 365
		años <- años + 1
	SiNo
		Si dias >= 30 Entonces   # Error: debería ser >= 30, no >= 365
			dias <- dias - 30
			meses <- meses + 1
		SiNo
			Si dias >= 7 Entonces
				dias = dias - 7
				semanas = semanas + 1
			FinSi
		FinSi
	FinSi
	Escribir "En " num_dias " Dias " " Hay " años " Años " meses " Meses y Dias " dias
FinAlgoritmo
```

---

### Ejercicio 30: Cálculo de estacionamiento (versión completa)

**Propósito:** Calcular el costo de estacionamiento con horas y minutos, usando fracción de hora.

```pseudocodigo
Algoritmo Ejercio_10
    Definir HE, ME, HS, MS, Horas, Pago Como Real
	Escribir "Ingrese hora de entrada (formato 24h):"
    Leer HE
	Escribir "Ingrese minutos de entrada (formato de 60m):"
	Leer ME 
	minuto_hora_E <- ME / 60
	suma1 <- HE + minuto_hora_E 
	Mostrar "La cantidad de horas de entrada son " , suma1 
	Mostrar " "
    Escribir "Ingrese hora de salida (formato 24h, solo la hora):"
    Leer HS
	Escribir "Ingrese minutos de salida (formato de 60m, solo los minutos):"
	Leer MS
	minuto_hora_S <- MS / 60 
	suma2 <- HS + minuto_hora_S
	Mostrar "La cantidad de horas de salida son " ,suma2 
	Mostrar " "
	horas_totales <- suma2 - suma1
	Si suma2 < suma1 Entonces
        Escribir "Error: la hora de salida no puede ser menor que la hora de entrada"
    Sino
        Horas <- suma2 - suma1
        Si Horas <= 0 O Horas <= 1   Entonces
            Horas <- 1
        FinSi
        Si Horas = 1 Entonces
            Pago <- 1000
        Sino
            Pago <- 1000 + (Horas - 1) * 600
        FinSi
		Escribir "El total de horas es: ", horas_totales
		Mostrar " "
        Escribir "El monto a pagar es: ", Pago, " pesos."
    FinSi
FinAlgoritmo
```

---

### Ejercicio 31: Cálculo de estacionamiento (versión simple)

**Propósito:** Calcular el costo de estacionamiento con tarifa fija (primera hora $1000, adicionales $600).

```pseudocodigo
Algoritmo sin_titulo
	HE = int(input("Ingreses horas entradas: "))
	ME = int(input("Ingreses minutos entradas: "))
	HS = int(input("Ingreses horas salida: "))
	MS = int(input("Ingreses minutos salida: "))
	EM = HE * 60 + ME
	SM = HS * 60 + MS
	estadia = SM - EM
	fraccion = estadia % 60 
	si fraccion > 0:
		H = (estadia - fraccion) / 60 + 1
	sino:
		H = (estadia - fraccion) / 60
	si H > 1:
		pago = 1000 + 600 * (H - 1)
	sino:
		pago = 1000
	Escribir "El valor a pagar por", H, "horas es:", pago
FinAlgoritmo
```

---

### Ejercicio 32: Cálculo de estacionamiento (versión con fracción)

**Propósito:** Calcular el costo de estacionamiento considerando fracciones de hora.

```pseudocodigo
Algoritmo sin_titulo
	HE = int(input("Ingreses horas entradas: "))
	ME = int(input("Ingreses minutos entradas: "))
	HS = int(input("Ingreses horas salida: "))
	MS = int(input("Ingreses minutos salida: "))
	EM = HE * 60 + ME
	SM = HS * 60 + MS
	estadia = SM - EM
	fraccion = estadia % 60 
	si fraccion > 0:
		H = (estadia - fraccion) / 60 + 1
	sino:
		H = (estadia - fraccion) / 60
	si H > 1:
		pago = 1000 + 600 * (H - 1)
	sino:
		pago = 1000
	Escribir "El valor a pagar por", H, "horas es:", pago
FinAlgoritmo
```

---

### Ejercicio 33: Descuento en entradas (estructura Según)

**Propósito:** Calcular el descuento en entradas usando la estructura `Según` (switch).

```pseudocodigo
Algoritmo sin_titulo
	Definir numEntradas Como Entero
	Definir precioUnitario, total, descuento, totalPagar Como Real
	Escribir "Ingrese el precio unitario de la entrada: "
	Leer precioUnitario
	Escribir "Ingrese la cantidad de entradas a comprar (1 a 4): "
	Leer numEntradas
	Si numEntradas < 1 O numEntradas > 4 Entonces
		Escribir "Cantidad inválida. Solo puede comprar entre 1 y 4 entradas."
	Sino
		total <- precioUnitario * numEntradas
		descuento <- 0
		Segun numEntradas Hacer
			2:
				descuento <- total * 0.10
			3:
				descuento <- total * 0.15
			4:
				descuento <- total * 0.20
		FinSegun
		totalPagar <- total - descuento
		Escribir "Total sin descuento: $", total
		Escribir "Descuento aplicado: $", descuento
		Escribir "Total a pagar: $", totalPagar
	FinSi
FinAlgoritmo
```

---

### Ejercicio 34: Conversión de km/h a m/s (con variable)

**Propósito:** Convertir km/h a m/s con un cálculo correcto (multiplicar por 1000 y dividir por 3600).

```pseudocodigo
Algoritmo Ejercicio_11
	Escribir "escriba la velocidad expresada en KM/H de un automovil"
	Leer KM
	convertir <- KM * 1000 / 3600
	Mostrar "La velocidad expresada en metros es la siguiente: ", convertir, " Metros "
FinAlgoritmo
```

---

### Ejercicio 35: Suma y media de N números (con ciclo Para)

**Propósito:** Calcular la suma y media de N números usando ciclo Para.

```pseudocodigo
Algoritmo sin_titulo
	num <- 0
	suma <- 0
	Escribir "Digite la cantidad de numeros: "
	Leer cantidad
	para i <- 1 Hasta cantidad Hacer
		Escribir "escribe un numero"
		Leer num
		suma <- suma + num
	FinPara
	Escribir "la suma aritmetica es " suma 
	media = suma / cantidad
	Escribir "La media aritmetica es: " media
FinAlgoritmo
```

---

### Ejercicio 36: Factura con IVA (formato extendido)

**Propósito:** Generar una factura con código de producto, precio, cantidad, subtotal, IVA (15%) y total.

```pseudocodigo
Algoritmo Catorce
	Definir codigoProducto Como Cadena
	Definir precio, cantidad, sub_total, IVA, total Como Real
	Escribir "Ingrese el código del producto:"
	Leer codigoProducto
	Escribir "Ingrese el precio del producto:"
	Leer precio
	Escribir "Ingrese la cantidad:"
	Leer cantidad
	sub_total <- precio * cantidad
	IVA <- sub_total * 0.15
	total <- sub_total + IVA
	Escribir "-----------------------------"
	Escribir "Código del producto: ", codigoProducto
	Escribir "Subtotal: ", sub_total
	Escribir "IVA (15%): ", IVA
	Escribir "Total a pagar: ", total
	Escribir "-----------------------------"
FinAlgoritmo
```

---

## Referencias

- [PSeInt - Sitio oficial](http://pseint.sourceforge.net/)
- [Ejemplos de pseudocódigo en PSeInt](http://pseint.sourceforge.net/index.php?page=ejemplos.php)

---

> Gracias por leer.