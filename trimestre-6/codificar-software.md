# Codificar el software


## Arquitetura

La arquitectura debe tener un plan.

Los sistemas complejos, los cambios estructurales tardios son casi imposibles.

Por eso no podemos simplemente comenzar a programar para terminar lo antes posible.

La arquitectura son todos los componentes como:

+ subsistenas
+ interfaces
+ reglas

La arquitectura no tiene mucho que ver con la metodologia del software sino mas bien con su implementación.

A uno le dan un presupuesto y uno tiene que empezar a tomar decisiones como:

Tenemos una balanza dependiendo de los requerimientos pues esto depende demasiado:

+ alto performance
+ alto mantenimiento

Entre estos dos hay una alta tensión y conflicto porque los requerimientos son los que frecuentemente entran en conflicto.

trade-off: "Sacrificar algo para potenciar algo."

+ Como desarrollador yo no puedo prometer todo.

Por esto mismo hay que tener mucho cuidado con el alcance del proyecto, a medida de los trimestres.

---

+ El arquitecto de software:

---

Estilos arquitectónicos: Soluciones de organización a nivel de sistema entero 

A veces se toman como inspiración, o motivación para algo nuevo, estos describen los compoenentes como modulos,  bases de datos, aplicaciones.

> A continuación las ideas de programación
> Se pueden mezclar arquitecturas

Arquitectura centrada en datos: Hay un almacenamiento interno, en donde los clientes seran las fuentes de conocimiento. Un ejemplo es netflix, porque a partir de lo que consumimos, netflix recopila información para poder organizar su algoritmo y recomendar contenido. Asi mismo tiene un almacenamiento interno que son las peliculas.

Arquitecturas de flujo de datos
Arquiteturas en capas: Capas de presentacion, de servicios, de negocios, de bases de datos y demás en donde por carpetas se estructura la información. Como cuidado hay que tener un orden del como se comunican estos archivos.

Arquitectura de llamada y retorno: Control centralizado MVC. Este puede funcionar en la misma maquina, es local. Por lo que es la que hemos estado utilizando si o si. En algún punto se conecta con otros servidores para ofrecer el servicio.
Ha tenido una madurez muy grande porque funciona para multiples plataformas, tiene menos probabilidades de que ocurran errores.

Arquitectura orientada a objetos: Tambien lo hemos estado trabajando.

Arquitecturas de sistmas distribuidos: Tubos y filtros en donde hay un envio de informacion y se filtra y dependiendo de las decisiones se puede seguir con la tuberia para poder contrlar

---

Modelos de contrl

Hay control centralizado

Control basado en eventos: Lo que le pase a uno se publica para todos como el bitcoin, IA en robots y demás.

---

- Patrones de Diseño:
- Idioms: Soluciones de bajo nivel altamente especificos de una caracteristica deun unico lenguaje de programación

---

Hay arquitecturas distribuidas y middleware

s procesamiento de infiromacion distrubuido en varias computadoras por ejemplo SOA, peer to peer, objetos distruibuidos.

En donde sistemas con distintos lenguajes, procesadores y protocolos de comunicacio.

Middleware es un software de proposito general que situa entre los componentes distribuidos

---

El modelo cliente servidor en N niveles

> Capas

el diseño de sistema debe reflejar su estrutura lógica

> 3 capas

La capa de presentacion va en una maquina aparte
La capa de procesamiento va en otra maquina otro servidor
Capa de gestion de datos tambien en otra maquina

Uno puede tener varios niveles de capas

Entonces tambien podemos hacer distribucion en 2 niveles: Cliente fino vs cliente grueso

Cliente fino (thin)
Cliente grueso 

---

## SOA - Service Oriented Arhictecture

Es para sistemas empresariales grandes, como una empresa nacional o internacional. No es para empresas pequeñas.

Actua como sistemas propios, en donde dentro de él tiene muchas adaptaciones para la comunicacion entre servicios porque maneja demasiada informacion

Siempre va a haber una autenticacion 

Las bases de datos son grandes, ya no son filas y columnas sino que puede ser un cubo de rubik por la profundidad.

A partir de todo esto, tenemos una version lite

## Microservicios

Cada servicio que ofrezco estan separados uno por uno, pero la aplicacion es un portal de esto.

Como entre mobile y system son clientes en donde por ejemplo amazon api gateway y entonces de acuerdo a la peticion, se realizara el servicio.

Cada servicio es aparte

Como tal se consume un servicio y este sera a partir de una api y no necesariamente uno lo programa.

Las empresas que no son tan grandes, utilizan estos microservicios.

---

## Matriz de decisión arquitectonica

Esto es a partir de los requerimientos no funcionales

Lo importante es poder hacer cambios, que sean faciles de de hacer... Que el mantenimiento sea facil

Entonces nosotros debemos tener cuidado con

Pipes y filters
Layers o Capas

---

