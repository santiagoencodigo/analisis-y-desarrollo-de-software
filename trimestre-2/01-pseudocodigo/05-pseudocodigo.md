# Fundamentos De Programación - Soluciones en Pseudocódigo (Parte 5)

Este documento contiene la solución de los ejercicios **4 y 5** de la actividad final de la asignatura **Fundamentos de Programación**. Cada programa ha sido desarrollado en **pseudocódigo** utilizando el entorno **PSeInt**, siguiendo las buenas prácticas de programación: uso de estructuras condicionales, ciclos, selección múltiple (`Según`), acumuladores, contadores y validaciones.

Los ejercicios están resueltos paso a paso y cada línea de código incluye comentarios explicativos para que cualquier persona con conocimientos básicos pueda comprender la lógica aplicada.

---

## Tabla de contenido

- [Programa 4 – Sistema de facturación de servicios públicos](#programa-4--sistema-de-facturación-de-servicios-públicos)
- [Programa 5 – Sistema de gestión de ventas de una tienda](#programa-5--sistema-de-gestión-de-ventas-de-una-tienda)

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

> Gracias por leer.