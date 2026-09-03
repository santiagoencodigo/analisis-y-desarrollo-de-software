
// Santiago Muñeton Hernandez
// Fecha de Inicio de Documento: 04/11/2025

// Ficha: 3171608
// Programa: Análisis y Desarrollo de Software 
// Instructora Angelica Triana

// Servicio Nacional de Aprendizaje




// ---------------------------------------------------------------------------------




// Aprender Javascript es fundamental para el desarrollo web moderno, además es importante para entender
// la lógica del lado del cliente (FRONTEND) y cómo los navegadores interpretan y ejecutan instrucciones
// para crear experiencias dinámicas e interactivas.

// Este lenguaje es versátil y universal ya que se puede usar para el FRONTEND y para el BACKEND

// El backend con JS se realiza mediante NODE.JS




// ---------------------------------------------------------------------------------




// Se propone realizar 7 ejercicios - propuestos por la Ingeniera Angelica Triana.

alert("A continuación ejercicios Javascript");
alert("Menú de Ejercicios:\n\n" +
    "Inserte el número 1 para: "+
    "Inserte el número 2 para: "+
    "Inserte el número 3 para: "+
    "Inserte el número 4 para: Ejercicio 4: Calificación en Letras [SWITCH]"+
    "Inserte el número 5 para: Ejercicio 5: Suma de uno a diez - Números del 1 al 10" +
    "Inserte el número 6 para: "+
    "Inserte el número 7 para: " +
    "Inserte el número 8 para: Ejercicio 8: Wayground - Simulación Factura - Venta Hielo Seco"
)

let seleccion = parseInt(prompt("Ingrese el número de acuerdo al ejercicio que desea ver")); // Prompt para selección de Ejercicios

if (seleccion == 1) {
    alert("Ejercicio 1")
}




else if (seleccion == 2) {
    alert("Ejercicio 2")
    alert(`${a}`)
}




else if (seleccion == 3) {
    alert("Ejercicio 3")
}




else if (seleccion == 4) {
    // Proceso Calificación en Letras
    // Se debe determinar la calificación  cualitativa según la nota númerica de 1 a 5
    alert("Ejercicio 4: Calificación en Letras [SWITCH]")

    let nota = 4; // Es un dato fijo que defini con let

    // switch es una estructura de control en javascript y muchos lenguajes que permite ejecutar
    // bloques de código según el valor de una expresión. Por lo que según el caso de uso puede ser efectiva
    // y es una alternativa más ordenada al uso de muchos if...else if.. else

    // case es una condición/caso especifico y ejecuta el código si la condición coincide

    // break interrumpe la ejecución del código por lo que evita que siga con los demas casos

    switch (nota) {
        case 1: // En caso de tal número realizar cierta acción
            console.log("Deficiente");
            break;
        case 2: 
            console.log("Insuficiente");
            break;
        case 3:
            console.log("Aceptable");
            break;
        case 4:
            console.log("Sobresaliente");
            break;
        case 5:
            console.log("Excelente")  ;
            break;              
        default: // Default quiere decir que si ningún caso coincide pues va a realizar la actividad:
            console.log("Nota no valida, debe estar entre el 1-5");
            break;
    }
}




else if (seleccion == 5) {
    // Suma de uno a diez - Se debe mostrar los números del 1 al 10
    alert("Ejercicio 5: Suma de uno a diez - Números del 1 al 10")
    numero = 0
    suma = 1 

    while (numero <= 10) {
        console.log (suma = suma + numero); // Acumula Suma
        console.log (numero = numero + 1); // Incrementa el contador
    }



}




else if (seleccion == 6) {
    // Suma de uno a diez - Se debe mostrar los números del 1 al 10
    alert("Ejercicio 5: Suma de uno a diez - Números del 1 al 10")



}




else if (seleccion == 7) {
    // Suma de uno a diez - Se debe mostrar los números del 1 al 10
    alert("Ejercicio 5: Suma de uno a diez - Números del 1 al 10")



}




else if (seleccion == 8) {

    // Empresa que vende hojas de hielo seco - Santiago Muñeton Hernandez - ADSO - 3171608

    // Tipos de clientes

    cliente_1 = 0.05
    cliente_2 = 0.08
    cliente_3 = 0.12
    cliente_4 = 0.15

    // cliente

    nombre_cliente = prompt("Ingrese el nombre del cliente") // prompt para solicitar nombre
    tipo_cliente = parseInt(prompt("Ingrese el tipo de cliente en un numero entero (1-4)"));

    // hojas

    cantidad_hojas_compradas = parseInt(prompt("Ingrese la cantidad de hojas de hielo seco compradas por el cliente")); // Cantidad
    valor_hojas_compradas = parseInt(prompt("Ingrese el valor de las hojas de hielo seco compradas por el cliente")); // Precio

    // PROGRAMA/PROCESO

    subtotal = cantidad_hojas_compradas * valor_hojas_compradas

    alert("El nombre del cliente es: " + nombre_cliente);
    alert(`Subtotal por pagar: ${cantidad_hojas_compradas} hojas por ${valor_hojas_compradas} cada una da un total de: ` + subtotal + "unidades monetarias.")

    // Condicionales para separar descuentos
    let tipo_cliente_descuento = 0

    if (tipo_cliente == 1) {
        tipo_cliente_descuento  = subtotal * cliente_1
    }
    else if (tipo_cliente == 2) {
        tipo_cliente_descuento = subtotal * cliente_2
    }
    else if (tipo_cliente == 3) {
        tipo_cliente_descuento = subtotal * cliente_3
    }
    else if (tipo_cliente == 4) {
        tipo_cliente_descuento = subtotal * cliente_4
    }
    else {
        tipo_cliente_descuento = subtotal
    }

    valor_neto = subtotal - tipo_cliente_descuento

    alert(`neto por pagar: ${valor_neto} unidades monetarias`)
}
