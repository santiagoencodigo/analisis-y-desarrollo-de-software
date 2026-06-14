# World Skills - Primer Trimestre ADSO

## Introducción

Este repositorio documenta mi proceso de aprendizaje durante el primer trimestre del programa ADSO (Análisis y Desarrollo de Software), en paralelo a mi participación en las actividades de WorldSkills Colombia.  
La página principal funciona como un archivo académico personal que reúne 20 proyectos, cada uno reflejando un concepto o técnica aprendida por primera vez.

## Contexto

En junio de 2025, mientras cursaba mi primer trimestre, compartí espacios de codificación con compañeros de cuarto trimestre que ya tenían un manejo fluido del desarrollo web. WorldSkills fue el catalizador: un entorno de retos colaborativos, con el instructor Washington Nieto guiándonos.  
Allí escribí mis primeras líneas de HTML, descubrí el poder de CSS para diseñar layouts y empecé a entender cómo JavaScript da vida a una interfaz. Más adelante, incursioné en PHP y finalmente en Laravel, construyendo una API REST completa.

Esta sección es un homenaje a ese punto de partida: la curiosidad, el vértigo inicial y la alegría cuando un botón finalmente respondía.

## Objetivo

- Registrar mis primeros pasos en programación web.
- Mostrar la evolución desde ejercicios simples (tarjetas HTML) hasta interacciones complejas (Drag & Drop, Simon Say) y un backend funcional (Laravel).
- Servir como memoria visual y técnica de los fundamentos: lógica, eventos, DOM, animaciones, peticiones asíncronas y MVC.
- Inspirar a otros estudiantes que empiezan su camino en ADSO.

## Experiencia WorldSkills

Fui seleccionado junto a otras 12 personas en Bogotá (de todos los centros de formación SENA los cuales tenian programas formativos relacionados con Desarrollo de Software) para representar a mi centro en la disciplina de desarrollo de software especificamente en **tecnologias web**. Aunque no logré pasar a la fase regional, fue una experiencia transformadora. Cada uno de los 20 proyectos aquí presentes fue un peldaño en esa preparación. Algunos aparecieron directamente en la competencia (palíndromo, almacén de cajas, rompecabezas, órbita celestial). Otros fueron ejercicios de clase o desafíos personales (Frontend Mentor, ClessLab).

El instructor [Washington Nieto](https://github.com/WashingtonNieto "https://github.com/WashingtonNieto") nos impulsó a explorar metodologías como BEM, a usar herramientas como Frontend Mentor, y a no tener miedo de equivocarnos.

## Tecnologías utilizadas

- HTML5 (estructura semántica, accesibilidad)
- CSS3 (Flexbox, Grid, variables, keyframes, media queries)
- JavaScript (Vanilla) – manipulación del DOM, eventos, objetos Date, bucles, Drag & Drop nativo, Fetch API
- PHP (formularios, procesamiento básico)
- Laravel 11 (rutas, controladores, migraciones, Eloquent, API REST)
- SQLite (base de datos del proyecto Laravel)

No se utilizan frameworks ni librerías externas en los proyectos frontend, preservando la esencia del aprendizaje puro.

## Estructura del proyecto

```
world-skills/
├── assets/                      # Capturas de pantalla de cada proyecto
├── 01-lorem-cards/
├── 02-social-cards/
├── 03-metodologia-bem/
├── 04-social-cards-washington/
├── 05-granero/
├── 06-css-grid-flex/
├── 07-palindromo/
├── 08-login/
├── 09-pantalla/
├── 10-clesslab/
├── 11-fecha-hora/
├── 12-tablas-de-multiplicar/
├── 13-almacen-de-cajas/
├── 14-menu-cuadricula/
├── 15-cronometro-world-skills/
├── 16-rompecabezas-modulo-a/
├── 17-orbita-celestial/
├── 18-interactive-rating-component/
├── 19-simon-say/
├── 20-laravel/                  # Proyecto Laravel (backend)
├── index.html                   # Homepage principal
├── style.css                    # Estilos globales
└── README.md                    # Este documento
```

Cada subcarpeta contiene su propio `index.html` y sus recursos locales (CSS/JS). El proyecto Laravel incluye su propia estructura (app, routes, database, etc.) y un README específico.

## Proyectos desarrollados

### 01. Lorem Cards
Primer contacto con HTML/CSS. Tarjetas de texto de relleno para practicar modelo de caja y selectores.

### 02. Social Cards
Tarjetas de perfil de usuario. Aprendí a organizar información con divs y aplicar sombras y bordes.

### 03. Metodología BEM
Aplicación de la convención Bloque–Elemento–Modificador para nombrar clases CSS de forma mantenible.

### 04. Social Cards (Washington)
Tarea autónoma: replicar una tarjeta similar a la del instructor. Primer ejercicio sin guía paso a paso.

### 05. Granero
Maquetación básica de un ecommerce: productos, precios, área de login y gestión de pedidos.

### 06. CSS Grid & Flex
Laboratorio de layouts modernos con Grid, Flexbox y animaciones CSS. Primer asombro con keyframes.

### 07. Palíndromo
Validador de palabras o frases palíndromas. Primer algoritmo con JavaScript. Apareció en la competencia.

### 08. Login PHP
Formulario de autenticación básico con PHP. Antesala para entender Laravel.

### 09. Pantalla
JavaScript para obtener dimensiones de la ventana y URL actual. Uso de objetos window, screen, location.

### 10. ClessLab
Mi primera página web completa hecha por mí solo. Me costó bastante, pero fue mi punto de partida real.

### 11. Fecha y Hora
Reloj y calendario dinámico con actualización en tiempo real. Uso de setInterval y objeto Date.

### 12. Tablas de Multiplicar
Generador dinámico de tablas del 1 al 30 usando bucles for. Renderizado con innerHTML.

### 13. Almacén de Cajas
Interfaz Drag & Drop nativo. Apareció en la competencia. Aprendí el ciclo de eventos de arrastre.

### 14. Menú Cuadrícula
Práctica de Grid y Flexbox para organizar secciones. Aunque no me gustó visualmente, fue muy importante para aprender a combinar ambas técnicas.

### 15. Cronómetro WorldSkills
Cronómetro interactivo con PHP y JavaScript. Requiere XAMPP. Integración frontend-backend.

### 16. Rompecabezas Módulo A
Puzzle con imágenes de WorldSkills usando Drag & Drop. Muy satisfactorio de ver funcionando.

### 17. Órbita Celestial
Sistema planetario animado solo con HTML y CSS. Apareció en la competencia. Posicionamiento absoluto y animaciones continuas.

### 18. Interactive Rating Component
Desafío de Frontend Mentor. El instructor Washington nos recomendó la página para practicar con retos reales.

### 19. Simon Say
Juego de memoria basado en un tutorial. Mi versión personal. Manejo de secuencias, temporizadores y lógica de juego.

### 20. Laravel - Gestión de Estudiantes
CRUD completo con Laravel 11, API REST y SQLite. El proyecto más completo de backend. Incluye migraciones, validaciones, controlador y frontend que consume la API.

## Aprendizajes obtenidos

Este primer trimestre fue una inmersión en el pensamiento lógico y la construcción de interfaces. Algunas reflexiones:

- **HTML:** Aprendí que el marcado no es diseño sino arquitectura de contenido.
- **CSS:** Pasé del miedo a las propiedades a disfrutar Grid y Flexbox. Las animaciones me parecieron mágicas.
- **JavaScript:** Entendí que los eventos y el DOM son el puente entre la intención y la acción. Los bucles y el drag & drop me abrieron la cabeza.
- **PHP:** El primer contacto con backend me hizo comprender la diferencia entre cliente y servidor.
- **Laravel:** Aunque fue complicado, logré entender el patrón MVC, las migraciones y la creación de una API REST. Fue el paso final antes de la competencia.

## Conclusión

WorldSkills y el primer trimestre de ADSO marcaron el inicio de un viaje que hoy sigue activo. Este sitio no es solo una galería de proyectos: es el espejo de mis primeras victorias técnicas. Cada carpeta representa una pequeña victoria sobre la incertidumbre. Construir esta cápsula me permite recordar de dónde vengo y reconocer que los grandes aprendizajes empiezan con una línea de código tímida y mucha curiosidad.

*“Cada gran desarrollador tuvo un día su primer console.log.”*  
— Bitácora ADSO, primer trimestre.

---

Proyecto académico sin fines comerciales. Desarrollado con HTML5, CSS3, JavaScript nativo y Laravel como testimonio de formación integral.