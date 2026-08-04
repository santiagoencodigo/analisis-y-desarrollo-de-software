# Ejercicios de pseudocódigo en PSeInt - Parte 2 (Ejercicios 13-24)

> Este documento reúne los ejercicios 13 al 24 de lógica de programación resueltos en **PSeInt**, incluyendo ciclos, números primos y cálculos diversos.

---

## Tabla de contenido

- [Ejercicios de condicionales y ciclos](#ejercicios-de-condicionales-y-ciclos)
  - [Ejercicio 13: Número primo](#ejercicio-13-número-primo)
  - [Ejercicio 14: Múltiplos de 2](#ejercicio-14-múltiplos-de-2)
  - [Ejercicio 15: Convertir horas a minutos](#ejercicio-15-convertir-horas-a-minutos)
  - [Ejercicio 16: Cálculo de estacionamiento (versión 1)](#ejercicio-16-cálculo-de-estacionamiento-versión-1)
  - [Ejercicio 17: Descuento en entradas](#ejercicio-17-descuento-en-entradas)
  - [Ejercicio 18: Convertir km/h a m/s](#ejercicio-18-convertir-kmh-a-ms)
  - [Ejercicio 19: Cálculo de nómina (50 obreros)](#ejercicio-19-cálculo-de-nómina-50-obreros)
  - [Ejercicio 20: Factura con IVA](#ejercicio-20-factura-con-iva)
  - [Ejercicio 21: Mostrar números pares del 2 al 100](#ejercicio-21-mostrar-números-pares-del-2-al-100)
  - [Ejercicio 22: Mostrar los primeros 100 números](#ejercicio-22-mostrar-los-primeros-100-números)
  - [Ejercicio 23: Múltiplos de 2 del 1 al 20](#ejercicio-23-múltiplos-de-2-del-1-al-20)
  - [Ejercicio 24: Suma y media de N números](#ejercicio-24-suma-y-media-de-n-números)
- [Referencias](#referencias)

---

### Ejercicio 13: Número primo

**Propósito:** Determinar si un número es primo o no.

```pseudocodigo
Algoritmo Ejercicio_9
	J = 1
	S = 0
	Leer N
	Mientras J <= N / 2 Hacer
		si N MOD J = 0 Entonces
			S <- S + 1
		FinSi
		J <- J + 1
	FinMientras
	Si S >= 2 Entonces
		Escribir N " no es primo"
	SiNo
		Escribir N " es primo"
	FinSi
FinAlgoritmo
```

---

### Ejercicio 14: Múltiplos de 2

**Propósito:** Mostrar los números del 1 al 20 que son múltiplos de 2.

```pseudocodigo
Algoritmo sin_titulo
	div <- 0
	para num <- 1 Hasta 20 Con Paso 1 Hacer
		si num % 2 == 0 Entonces
			Escribir num, " es multiplo de 2" 
		FinSi
	FinPara
FinAlgoritmo
```

---

### Ejercicio 15: Convertir horas a minutos

**Propósito:** Convertir 5 horas a minutos.

```pseudocodigo
Algoritmo sin_titulo
	suma <- 0
	num <- 5
	suma = num * 60
	Escribir "los minutos de 5 horas son: " suma
FinAlgoritmo
```

---

### Ejercicio 16: Cálculo de estacionamiento (versión 1)

**Propósito:** Calcular el costo de estacionamiento con tarifa simple (primera hora $1000, horas adicionales $600). Versión con errores de lógica (no usar).

```pseudocodigo
Algoritmo Ejercio_10
    Definir HE, ME, HS, MS, Horas, Pago Como Real
	Escribir "Ingrese hora de entrada (formato 24h):"
    Leer HE
	Escribir "Ingrese minutos de entrada (formato de 60m):"
	Leer ME 
	minuto_hora_E <- ME/60
	suma1 <- HE + minuto_hora_E 
	Mostrar "La cantidad de horas de entrada son " , suma1 
	Mostrar " "
    Escribir "Ingrese hora de salida (formato 24h, solo la hora):"
    Leer HS
	Escribir "Ingrese minutos de salida (formato de 60m, solo los minutos):"
	Leer MS
	minuto_hora_S <- MS/60 
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

### Ejercicio 17: Descuento en entradas

**Propósito:** Calcular el descuento en la compra de entradas según la cantidad (2:10%, 3:15%, 4:20%).

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

### Ejercicio 18: Convertir km/h a m/s

**Propósito:** Convertir una velocidad en km/h a m/s.

```pseudocodigo
Algoritmo Ejercicio_11
	Escribir "escriba la velocidad expresada en KM/H de un automovil"
	Leer KM
	convertir <- KM * 1000 / 3600
	Mostrar "La velocidad expresada en metros es la siguiente: ", convertir, " Metros "
FinAlgoritmo
```

---

### Ejercicio 19: Cálculo de nómina (50 obreros)

**Propósito:** Calcular el pago de 50 obreros a razón de $30,000 por hora, mostrando el total de la nómina.

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

### Ejercicio 20: Factura con IVA

**Propósito:** Calcular el subtotal, IVA (15%) y total de una factura.

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

### Ejercicio 21: Mostrar números pares del 2 al 100

**Propósito:** Mostrar los números pares del 2 al 100 y calcular su sumatoria.

```pseudocodigo
Algoritmo Mostrar_Numeros_2_en_2
    suma <- 0
    PARA numero DESDE 2 HASTA 100 CON PASO 2 HACER
        IMPRIMIR numero
        suma <- suma + numero
    FIN PARA
    IMPRIMIR "La sumatoria total es: ", suma
FinAlgoritmo
```

---

### Ejercicio 22: Mostrar los primeros 100 números

**Propósito:** Mostrar los números del 1 al 100 usando un ciclo Mientras.

```pseudocodigo
Algoritmo MostrarPrimeros100Numeros
	Definir numero Como Entero
	numero <- 1
	Mientras numero <= 100 Hacer
		Escribir numero
		numero <- numero + 1
	FinMientras
FinAlgoritmo
```

---

### Ejercicio 23: Múltiplos de 2 del 1 al 20

**Propósito:** Mostrar los números del 1 al 20 que son múltiplos de 2.

```pseudocodigo
Algoritmo sin_titulo
	div <- 0
	para num <- 1 Hasta 20 Con Paso 1 Hacer
		si num % 2 == 0 Entonces
			Escribir num, " es multiplo de 2" 
		FinSi
	FinPara
FinAlgoritmo
```

---

### Ejercicio 24: Suma y media de N números

**Propósito:** Leer N números y calcular su suma y media aritmética.

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

## Referencias

- [PSeInt - Sitio oficial](http://pseint.sourceforge.net/)
- [Ejemplos de pseudocódigo en PSeInt](http://pseint.sourceforge.net/index.php?page=ejemplos.php)

---

> Gracias por leer.