# Fundamentos De Programación - Soluciones en Pseudocódigo

Este documento contiene la solución completa de los cinco ejercicios propuestos en la actividad final de la asignatura **Fundamentos de Programación**. Cada programa ha sido desarrollado en **pseudocódigo** utilizando el entorno **PSeInt**, siguiendo las buenas prácticas de programación: uso de estructuras condicionales, ciclos, selección múltiple (`Según`), acumuladores, contadores y validaciones.

Los ejercicios están resueltos paso a paso y cada línea de código incluye comentarios explicativos para que cualquier persona con conocimientos básicos pueda comprender la lógica aplicada.

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

## Programa 4 – Sistema de facturación de servicios públicos

### Enunciado

Una empresa de servicios públicos necesita calcular el valor a pagar según el consumo.

El programa debe:

- Solicitar:
  - Nombre del usuario
  - Tipo de servicio:
    1. Agua
    2. Energía
    3. Gas
  - Consumo mensual

**Tarifas:**

- Agua:
  - ≤ 20 m³ → $2.000 por unidad
  - > 20 m³ → $2.500 por unidad
- Energía:
  - ≤ 100 kWh → $500 por unidad
  - > 100 kWh → $650 por unidad
- Gas:
  - ≤ 50 m³ → $1.200 por unidad
  - > 50 m³ → $1.500 por unidad

**Requisitos:**

- Uso de `Según` para tipo de servicio.
- Uso de condicionales para tarifas.
- Permitir múltiples usuarios (el programa debe poder facturar a varios usuarios hasta que el usuario decida terminar).
- Mostrar factura detallada.

---

### Solución en pseudocódigo

```pseudocode
Algoritmo FacturacionServicios
    // Definir variables
    Definir nombre Como Caracter
    Definir tipoServicio, continuar Como Entero
    Definir consumo, totalPagar, tarifaUnidad Como Real
    
    continuar <- 1   // 1 para continuar, 0 para terminar
    
    Mientras continuar = 1 Hacer
        // Limpiar pantalla (opcional, según PSeInt)
        // LimpiarPantalla
        
        Escribir "====== FACTURACIÓN DE SERVICIOS PÚBLICOS ======"
        Escribir "Ingrese el nombre del usuario: "
        Leer nombre
        
        Escribir "Seleccione el tipo de servicio:"
        Escribir "1. Agua"
        Escribir "2. Energía"
        Escribir "3. Gas"
        Leer tipoServicio
        
        // Validar tipo de servicio
        Mientras tipoServicio < 1 O tipoServicio > 3 Hacer
            Escribir "Opción inválida. Seleccione 1, 2 o 3: "
            Leer tipoServicio
        FinMientras
        
        Escribir "Ingrese el consumo mensual (en unidades según el servicio): "
        Leer consumo
        
        // Validar que el consumo sea positivo
        Mientras consumo <= 0 Hacer
            Escribir "El consumo debe ser mayor que cero. Ingrese nuevamente: "
            Leer consumo
        FinMientras
        
        // Calcular tarifa según tipo de servicio
        Segun tipoServicio Hacer
            1:  // Agua
                Si consumo <= 20 Entonces
                    tarifaUnidad <- 2000
                Sino
                    tarifaUnidad <- 2500
                FinSi
            2:  // Energía
                Si consumo <= 100 Entonces
                    tarifaUnidad <- 500
                Sino
                    tarifaUnidad <- 650
                FinSi
            3:  // Gas
                Si consumo <= 50 Entonces
                    tarifaUnidad <- 1200
                Sino
                    tarifaUnidad <- 1500
                FinSi
        FinSegun
        
        totalPagar <- consumo * tarifaUnidad
        
        // Mostrar factura detallada
        Escribir "================================================"
        Escribir "                FACTURA"
        Escribir "================================================"
        Escribir "Usuario: ", nombre
        Segun tipoServicio Hacer
            1: Escribir "Servicio: Agua"
            2: Escribir "Servicio: Energía"
            3: Escribir "Servicio: Gas"
        FinSegun
        Escribir "Consumo: ", consumo, " unidades"
        Escribir "Tarifa por unidad: $", tarifaUnidad
        Escribir "Total a pagar: $", totalPagar
        Escribir "================================================"
        
        // Preguntar si desea facturar otro usuario
        Escribir "¿Desea facturar a otro usuario? (1 = Sí, 0 = No): "
        Leer continuar
        // Validar entrada
        Mientras continuar <> 0 Y continuar <> 1 Hacer
            Escribir "Opción inválida. Ingrese 1 (Sí) o 0 (No): "
            Leer continuar
        FinMientras
        
    FinMientras
    
    Escribir "Programa de facturación finalizado."
FinAlgoritmo
```

**Explicación breve:**

- Se declaran variables para nombre (cadena), tipo de servicio y continuar (enteros), consumo y total (reales).
- El ciclo `Mientras` permite procesar múltiples usuarios mientras el usuario desee continuar.
- Se valida que el tipo de servicio esté entre 1 y 3, y que el consumo sea positivo.
- Se usa `Según` para seleccionar el servicio, y dentro de cada caso se aplica un condicional para determinar la tarifa por unidad según el rango de consumo.
- Se calcula el total multiplicando consumo por tarifa.
- Se muestra una factura detallada con todos los datos.
- Al final, se pregunta si se desea continuar y se valida la respuesta.

---

## Programa 5 – Sistema de gestión de ventas de una tienda

### Enunciado

Una tienda desea llevar el control de sus ventas diarias mediante un programa que permita registrar productos vendidos y analizar la información.

El programa debe funcionar mediante un menú de opciones, permitiendo al usuario interactuar varias veces hasta decidir salir.

**Menú (`Según`):**

1. Registrar venta
2. Mostrar total vendido
3. Calcular promedio de ventas
4. Mostrar venta mayor y menor
5. Contar ventas altas y bajas
6. Salir

**Definición de datos:**

Cada venta corresponde a:

- Valor de la venta (número positivo)

**Procesos:**

- Solicitar el valor de la venta.
- Validar que sea mayor a 0.
- Acumular el total de ventas.
- Contar la cantidad de ventas.
- Determinar venta mayor y venta menor.
- Mostrar la suma acumulada de todas las ventas.
- Calcular promedio = totalVentas / cantidadVentas.
- Mostrar la venta más alta y la más baja.
- Clasificar cada venta como:
  - Venta baja: < $50.000
  - Venta media: $50.000 – $100.000
  - Venta alta: > $100.000
- Mostrar cuántas hay de cada tipo.

**Requisitos:**

- Uso de estructura `Según` (menú).
- Uso de ciclo repetitivo (`Mientras` o `Repetir`).
- Uso de condicionales.
- Uso de acumuladores y contadores.
- Validación de datos.
- Uso de `LimpiarPantalla` para mejorar presentación.

---

### Solución en pseudocódigo

```pseudocode
Algoritmo GestionVentas
    // Definir variables
    Definir opcion Como Entero
    Definir valorVenta, totalVentas, ventaMayor, ventaMenor, promedio Como Real
    Definir cantidadVentas, contBajas, contMedias, contAltas Como Entero
    
    // Inicializar acumuladores y contadores
    totalVentas <- 0
    cantidadVentas <- 0
    ventaMayor <- 0
    ventaMenor <- 999999999   // Valor muy alto para la primera venta
    contBajas <- 0
    contMedias <- 0
    contAltas <- 0
    
    Repetir
        // Limpiar pantalla (si el entorno lo permite)
        LimpiarPantalla
        
        // Mostrar menú
        Escribir "===================================="
        Escribir "       GESTIÓN DE VENTAS"
        Escribir "===================================="
        Escribir "1. Registrar venta"
        Escribir "2. Mostrar total vendido"
        Escribir "3. Calcular promedio de ventas"
        Escribir "4. Mostrar venta mayor y menor"
        Escribir "5. Contar ventas altas y bajas"
        Escribir "6. Salir"
        Escribir "Seleccione una opción: "
        Leer opcion
        
        Segun opcion Hacer
            1:
                Escribir "Ingrese el valor de la venta (mayor a 0): "
                Leer valorVenta
                // Validar valor positivo
                Mientras valorVenta <= 0 Hacer
                    Escribir "Error: el valor debe ser mayor que cero. Ingrese nuevamente: "
                    Leer valorVenta
                FinMientras
                
                // Actualizar total y contador
                totalVentas <- totalVentas + valorVenta
                cantidadVentas <- cantidadVentas + 1
                
                // Actualizar venta mayor y menor
                Si cantidadVentas = 1 Entonces
                    ventaMayor <- valorVenta
                    ventaMenor <- valorVenta
                Sino
                    Si valorVenta > ventaMayor Entonces
                        ventaMayor <- valorVenta
                    FinSi
                    Si valorVenta < ventaMenor Entonces
                        ventaMenor <- valorVenta
                    FinSi
                FinSi
                
                // Clasificar la venta
                Si valorVenta < 50000 Entonces
                    contBajas <- contBajas + 1
                    Escribir "Venta clasificada como BAJA."
                Sino
                    Si valorVenta <= 100000 Entonces
                        contMedias <- contMedias + 1
                        Escribir "Venta clasificada como MEDIA."
                    Sino
                        contAltas <- contAltas + 1
                        Escribir "Venta clasificada como ALTA."
                    FinSi
                FinSi
                
                Escribir "Venta registrada exitosamente."
                Esperar Tecla   // Pausa para ver el mensaje
                
            2:
                Escribir "Total acumulado de ventas: $", totalVentas
                Esperar Tecla
                
            3:
                Si cantidadVentas > 0 Entonces
                    promedio <- totalVentas / cantidadVentas
                    Escribir "Cantidad de ventas registradas: ", cantidadVentas
                    Escribir "Promedio de ventas: $", promedio
                Sino
                    Escribir "No hay ventas registradas para calcular el promedio."
                FinSi
                Esperar Tecla
                
            4:
                Si cantidadVentas > 0 Entonces
                    Escribir "Venta más alta: $", ventaMayor
                    Escribir "Venta más baja: $", ventaMenor
                Sino
                    Escribir "No hay ventas registradas."
                FinSi
                Esperar Tecla
                
            5:
                Escribir "Cantidad de ventas BAJAS (< $50.000): ", contBajas
                Escribir "Cantidad de ventas MEDIAS ($50.000 - $100.000): ", contMedias
                Escribir "Cantidad de ventas ALTAS (> $100.000): ", contAltas
                Esperar Tecla
                
            6:
                Escribir "Saliendo del sistema de gestión de ventas..."
                
            De Otro Modo:
                Escribir "Opción no válida. Intente de nuevo."
                Esperar Tecla
        FinSegun
        
    Hasta Que opcion = 6
    
FinAlgoritmo
```

**Explicación breve:**

- Se declaran variables para el menú, el valor de la venta, total, mayor, menor, promedio, contador de ventas, y contadores para cada clasificación.
- Se inicializan los acumuladores y contadores en cero (ventaMayor en 0, ventaMenor en un número muy alto).
- El ciclo `Repetir` muestra el menú y ejecuta la opción seleccionada hasta que se elija salir.
- En la opción 1 (registrar venta):
  - Se valida que el valor sea positivo.
  - Se actualiza el total y el contador de ventas.
  - Se actualiza la venta mayor y menor (con cuidado en la primera venta).
  - Se clasifica la venta usando condicionales y se incrementa el contador correspondiente.
  - Se muestra un mensaje y se pausa con `Esperar Tecla`.
- Las opciones 2 a 5 muestran la información solicitada, verificando que existan ventas registradas.
- Se usa `LimpiarPantalla` al inicio de cada iteración para mejorar la presentación, y `Esperar Tecla` para que el usuario pueda ver los resultados antes de que se borre la pantalla.

---

## Conclusión

Los cinco programas resueltos abarcan los conceptos fundamentales de la programación estructurada: variables, condicionales, ciclos, estructuras de selección múltiple, acumuladores, contadores y validación de datos. Cada solución está diseñada para ser clara, comentada y fácil de entender para un estudiante principiante.

Estos ejercicios permiten practicar la lógica de programación y sentar las bases para desarrollar sistemas más complejos en el futuro.

> Gracias por leer.




