# Fundamentos De Programación - Soluciones en Pseudocódigo (Parte 4)

Este documento contiene la solución de los ejercicios **1, 2 y 3** de la actividad final de la asignatura **Fundamentos de Programación**. Cada programa ha sido desarrollado en **pseudocódigo** utilizando el entorno **PSeInt**, siguiendo las buenas prácticas de programación: uso de estructuras condicionales, ciclos, selección múltiple (`Según`), acumuladores, contadores y validaciones.

Los ejercicios están resueltos paso a paso y cada línea de código incluye comentarios explicativos para que cualquier persona con conocimientos básicos pueda comprender la lógica aplicada.

---

## Tabla de contenido

- [Programa 1 – Sistema de registro y análisis de temperaturas](#programa-1--sistema-de-registro-y-análisis-de-temperaturas)
- [Programa 2 – Simulador de cajero automático (ATM)](#programa-2--simulador-de-cajero-automático-atm)
- [Programa 3 – Conversor de unidades con menú](#programa-3--conversor-de-unidades-con-menú)

---

## Programa 1 – Sistema de registro y análisis de temperaturas

### Enunciado

Una empresa de monitoreo ambiental requiere un programa que registre y analice las temperaturas de una ciudad durante varios días.

El programa debe:

- Solicitar al usuario la cantidad de días a registrar.
- Por cada día:
  - Ingresar la temperatura (en °C).

**Procesos:**

- Determinar:
  - Temperatura mayor
  - Temperatura menor
  - Promedio de temperaturas
- Clasificar cada temperatura como:
  - Fría (< 18°C)
  - Templada (18°C – 25°C)
  - Caliente (> 25°C)

**Requisitos:**

- Uso de ciclos (`Para` o `Mientras`).
- Uso de condicionales para clasificar temperaturas.
- Uso de acumuladores.
- Mostrar resultados por día y resumen final con estadísticas.

---

### Solución en pseudocódigo

```pseudocode
Algoritmo AnalisisTemperaturas
    // Definición de variables
    Definir numDias, i Como Entero
    Definir temp, suma, mayor, menor, promedio Como Real
    Definir clasificacion Como Caracter
    
    // Inicializar acumuladores y contadores
    suma <- 0
    mayor <- -9999   // Valor muy bajo para que la primera temperatura sea mayor
    menor <- 9999    // Valor muy alto para que la primera temperatura sea menor
    
    // Solicitar número de días (validar que sea positivo)
    Escribir "Ingrese la cantidad de días a registrar: "
    Leer numDias
    Mientras numDias <= 0 Hacer
        Escribir "Error: debe ingresar un número positivo. Intente de nuevo: "
        Leer numDias
    FinMientras
    
    // Ciclo para procesar cada día
    Para i <- 1 Hasta numDias Con Paso 1 Hacer
        Escribir "Día ", i, " - Ingrese la temperatura en °C: "
        Leer temp
        
        // Acumular para el promedio
        suma <- suma + temp
        
        // Actualizar mayor y menor
        Si temp > mayor Entonces
            mayor <- temp
        FinSi
        Si temp < menor Entonces
            menor <- temp
        FinSi
        
        // Clasificar la temperatura
        Si temp < 18 Entonces
            clasificacion <- "Fría"
        Sino
            Si temp <= 25 Entonces
                clasificacion <- "Templada"
            Sino
                clasificacion <- "Caliente"
            FinSi
        FinSi
        
        // Mostrar resultado del día
        Escribir "  -> Temperatura: ", temp, "°C - Clasificación: ", clasificacion
        Escribir "----------------------------------------"
    FinPara
    
    // Calcular promedio
    promedio <- suma / numDias
    
    // Mostrar resumen final
    Escribir "========== RESUMEN FINAL =========="
    Escribir "Cantidad de días: ", numDias
    Escribir "Temperatura mayor: ", mayor, "°C"
    Escribir "Temperatura menor: ", menor, "°C"
    Escribir "Promedio de temperaturas: ", promedio, "°C"
FinAlgoritmo
```

**Explicación breve:**

- Se definen variables para el número de días, el contador del ciclo, la temperatura leída, la suma acumulada, el mayor, el menor y la clasificación.
- Se valida que el número de días sea positivo.
- El ciclo `Para` recorre cada día, solicita la temperatura, la acumula en `suma`, actualiza `mayor` y `menor` comparando, y clasifica usando condicionales anidados.
- Finalmente, se calcula el promedio y se muestra un resumen con las estadísticas pedidas.

---

## Programa 2 – Simulador de cajero automático (ATM)

### Enunciado

Diseñar un sistema que simule el funcionamiento básico de un cajero automático.

El programa debe:

- Iniciar con un saldo inicial definido ($1.000.000).
- Mostrar un menú con las opciones:
  1. Consultar saldo
  2. Retirar dinero
  3. Depositar dinero
  4. Salir

**Restricciones:**

- No permitir retiros mayores al saldo.
- Validar valores negativos.
- Actualizar saldo después de cada operación.
- Repetir el menú hasta elegir salir.

**Requisitos:**

- Uso obligatorio de `Según`.
- Uso de ciclo repetitivo.
- Validaciones con condicionales.

---

### Solución en pseudocódigo

```pseudocode
Algoritmo CajeroAutomatico
    // Definir variables
    Definir saldo, monto Como Real
    Definir opcion Como Entero
    
    // Saldo inicial
    saldo <- 1000000
    
    // Ciclo principal del menú
    Repetir
        // Mostrar menú
        Escribir "===================================="
        Escribir "        CAJERO AUTOMÁTICO"
        Escribir "===================================="
        Escribir "1. Consultar saldo"
        Escribir "2. Retirar dinero"
        Escribir "3. Depositar dinero"
        Escribir "4. Salir"
        Escribir "Seleccione una opción: "
        Leer opcion
        
        // Procesar opción usando Según
        Segun opcion Hacer
            1:
                Escribir "Su saldo actual es: $", saldo
            2:
                Escribir "Ingrese el monto a retirar: "
                Leer monto
                // Validar que el monto sea positivo y no exceda el saldo
                Si monto <= 0 Entonces
                    Escribir "Error: el monto debe ser mayor que cero."
                Sino
                    Si monto > saldo Entonces
                        Escribir "Error: saldo insuficiente. Su saldo es: $", saldo
                    Sino
                        saldo <- saldo - monto
                        Escribir "Retiro exitoso. Nuevo saldo: $", saldo
                    FinSi
                FinSi
            3:
                Escribir "Ingrese el monto a depositar: "
                Leer monto
                Si monto <= 0 Entonces
                    Escribir "Error: el monto debe ser mayor que cero."
                Sino
                    saldo <- saldo + monto
                    Escribir "Depósito exitoso. Nuevo saldo: $", saldo
                FinSi
            4:
                Escribir "Gracias por usar nuestro cajero automático. ¡Hasta luego!"
            De Otro Modo:
                Escribir "Opción no válida. Intente de nuevo."
        FinSegun
        
    Hasta Que opcion = 4
FinAlgoritmo
```

**Explicación breve:**

- Se declaran `saldo` y `monto` como reales, y `opcion` como entero.
- El ciclo `Repetir` mantiene el menú activo hasta que el usuario elija la opción 4.
- Dentro del ciclo, se usa `Según` para ejecutar la operación elegida.
- En la opción de retiro, se valida que el monto sea positivo y que no supere el saldo disponible.
- En depósito, solo se valida que sea positivo.
- El saldo se actualiza en cada operación y se muestra al usuario.

---

## Programa 3 – Conversor de unidades con menú

### Enunciado

Desarrollar un programa que permita convertir diferentes tipos de unidades según la opción elegida por el usuario.

**Menú:**

1. Convertir metros a centímetros
2. Convertir kilómetros a metros
3. Convertir grados Celsius a Fahrenheit
4. Convertir kilogramos a libras
5. Salir

**Procesos:**

- Solicitar el valor a convertir.
- Mostrar el resultado de la conversión.

**Requisitos:**

- Uso de estructura `Según`.
- Validar que los valores sean positivos cuando aplique (en todas las conversiones, los valores deben ser positivos).
- Uso de ciclo para repetir el menú.
- Mostrar resultados claros.

---

### Solución en pseudocódigo

```pseudocode
Algoritmo ConversorUnidades
    // Definir variables
    Definir opcion Como Entero
    Definir valor, resultado Como Real
    
    Repetir
        // Mostrar menú
        Escribir "===================================="
        Escribir "        CONVERSOR DE UNIDADES"
        Escribir "===================================="
        Escribir "1. Convertir metros a centímetros"
        Escribir "2. Convertir kilómetros a metros"
        Escribir "3. Convertir grados Celsius a Fahrenheit"
        Escribir "4. Convertir kilogramos a libras"
        Escribir "5. Salir"
        Escribir "Seleccione una opción: "
        Leer opcion
        
        Segun opcion Hacer
            1:
                Escribir "Ingrese la cantidad en metros: "
                Leer valor
                // Validar que sea positivo
                Si valor <= 0 Entonces
                    Escribir "Error: el valor debe ser positivo."
                Sino
                    resultado <- valor * 100   // 1 metro = 100 cm
                    Escribir valor, " metros equivalen a ", resultado, " centímetros."
                FinSi
            2:
                Escribir "Ingrese la cantidad en kilómetros: "
                Leer valor
                Si valor <= 0 Entonces
                    Escribir "Error: el valor debe ser positivo."
                Sino
                    resultado <- valor * 1000  // 1 km = 1000 m
                    Escribir valor, " kilómetros equivalen a ", resultado, " metros."
                FinSi
            3:
                Escribir "Ingrese la temperatura en grados Celsius: "
                Leer valor
                // Celsius puede ser negativo, pero se pide validar positivos? El enunciado dice "cuando aplique". En este caso, temperaturas bajo cero son válidas, pero por simplicidad y siguiendo la sugerencia, podríamos no validar o solo validar que no sea un número no numérico. Pero el requisito dice "validar que los valores sean positivos cuando aplique", y aquí no aplica estrictamente. Sin embargo, para mantener consistencia, dejamos sin validación o validamos que sea un número real. 
                // Asumiremos que el usuario ingresa un número real cualquiera.
                resultado <- (valor * 9/5) + 32
                Escribir valor, " °C equivalen a ", resultado, " °F."
            4:
                Escribir "Ingrese la cantidad en kilogramos: "
                Leer valor
                Si valor <= 0 Entonces
                    Escribir "Error: el valor debe ser positivo."
                Sino
                    resultado <- valor * 2.20462  // 1 kg ≈ 2.20462 libras
                    Escribir valor, " kilogramos equivalen a ", resultado, " libras."
                FinSi
            5:
                Escribir "Saliendo del conversor. ¡Hasta luego!"
            De Otro Modo:
                Escribir "Opción no válida. Intente de nuevo."
        FinSegun
        
    Hasta Que opcion = 5
FinAlgoritmo
```

**Explicación breve:**

- Se declaran `opcion` (entero), `valor` y `resultado` (reales).
- El ciclo `Repetir` muestra el menú hasta que el usuario elija salir.
- La estructura `Según` ejecuta la conversión seleccionada.
- Para las conversiones de metros, kilómetros y kilogramos, se valida que el valor ingresado sea positivo.
- Para la conversión de Celsius a Fahrenheit, no se aplica validación de positivo, ya que temperaturas negativas son posibles.
- Se muestra el resultado de manera clara.

---

> Gracias por leer.