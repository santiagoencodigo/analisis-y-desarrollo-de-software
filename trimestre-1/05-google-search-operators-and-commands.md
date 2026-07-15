# Operadores de búsqueda y comandos de Google

> **Fecha de referencia:** 11 de junio de 2025  
> **Contexto:** Sesión sobre herramientas de búsqueda, operadores lógicos y conceptos de sistemas operativos y ofimática.

Este documento recopila los **operadores y comandos de búsqueda** de Google, explicando su función y proporcionando ejemplos prácticos. También se abordan conceptos relacionados como la lógica booleana, la diferencia entre comandos y operadores, y una breve referencia a sistemas operativos y lenguajes de programación vistos en la formación.

---

## Tabla de contenido

- [Introducción](#introducción)
- [Operadores de búsqueda (tabla completa)](#operadores-de-búsqueda-tabla-completa)
- [Comandos adicionales (funciones de calculadora y utilidades)](#comandos-adicionales-funciones-de-calculadora-y-utilidades)
- [Comandos vs. Operadores](#comandos-vs-operadores)
- [Tablas de verdad y lógica booleana](#tablas-de-verdad-y-lógica-booleana)
- [Contexto adicional: sistemas operativos y lenguajes de programación](#contexto-adicional-sistemas-operativos-y-lenguajes-de-programación)
- [Ofimática y herramientas de productividad](#ofimática-y-herramientas-de-productividad)
- [Sugerencia de nombre para este archivo](#sugerencia-de-nombre-para-este-archivo)

---

## Introducción

Los **buscadores** (como Google) son herramientas que permiten *descubrir* e *investigar* información en la web. Sin embargo, para obtener resultados precisos y relevantes, es necesario utilizar **operadores de búsqueda** y **comandos** que refinan la consulta.

> **Nota:** Existe una diferencia técnica entre *comando* y *operador*. Los operadores son símbolos o palabras clave que modifican la búsqueda (ej. `AND`, `OR`, `-`), mientras que los comandos son instrucciones directas que ejecutan una acción específica (ej. `define:`, `site:`, `weather:`). En la práctica, ambos se usan para mejorar la eficiencia de la búsqueda.

Durante la sesión del 11 de junio de 2025, se enfatizó la importancia de:
- Pensar como un computador utilizando **conectores lógicos** (AND, OR, NOT) para construir consultas precisas.
- Conocer los operadores que Google pone a disposición para filtrar por tipo de archivo, sitio web, intervalo de fechas, etc.
- Aplicar estos conocimientos en el día a día del desarrollo de software y la investigación técnica.

---

## Operadores de búsqueda (tabla completa)

| **Operador** | **Ejemplo** | **Qué hace** |
|--------------|-------------|---------------|
| `OR` | `Pelota OR palo OR paso` | Muestra resultados que contengan **cualquiera** de las palabras incluidas. |
| `AND` | `Xataka AND Basics` | Busca páginas que incluyan **ambos** términos especificados. |
| `" "` (comillas) | `"Xataka Basics"` o `"Liga de fútbol femenino"` | Muestra resultados donde aparece el **término exacto** entre comillas. |
| `-` (menos) | `Xataka -Basics` | Excluye la palabra que sigue al signo menos. |
| `*` (asterisco) | `"Liga de * femenino"` | Comodín que puede coincidir con cualquier palabra en la búsqueda. |
| `..` (dos puntos) | `Móvil 200..500 euros` | Muestra resultados dentro de un **intervalo numérico** especificado. |
| `{ }` (llaves) | `{redes sociales" OR "plataformas sociales"} -Twitter` | Permite **combinar operadores**. En el ejemplo, busca redes sociales o plataformas sociales, excluyendo Twitter. |
| `AROUND(N)` | `Trucos AROUND(3) Instagram` | Resultados donde aparecen las dos palabras especificadas con un máximo de `N` términos entre ellas. |
| `define:` | `define:tramp...` | Muestra definiciones de la palabra o término. |
| `site:` | `Smartphone site:www.xataka.com` | Limita los resultados a un sitio web específico. |
| `info:` | `info:www.xataka.com` | Muestra información sobre una página web (descripción, enlaces, etc.). |
| `related:` | `related:www.xataka.com` | Encuentra páginas similares a la URL indicada. |
| `link:` | `Teléfonos link:www.xataka.com` | Muestra páginas que contienen enlaces hacia la URL especificada. |
| `cache:` | `cache:www.xataka.com` | Muestra la versión en caché de la página guardada por Google. |
| `filetype:` | `filetype:pdf presupuestos 2019` | Busca archivos con el formato especificado (pdf, doc, xls, etc.). |
| `allintext:` / `intext:` | `allintext:moviles baratos` | Encuentra páginas que incluyan **todos** los términos en el texto (o algunos con `intext`). |
| `allintitle:` / `intitle:` | `allintitle:precio y disponibilidad` | Busca páginas que contengan los términos en el **título** de la página. |
| `inurl:` / `allinurl:` | `inurl:apple iphone` | Busca páginas donde los términos aparezcan en la **URL**. |
| `allinanchor:` / `inanchor:` | `allinanchor:moviles baratos` | Resultados con páginas donde el **texto ancla** de un enlace incluya los términos. |
| `stocks:` | `stocks:Facebook` | Muestra el estado actual de la empresa en bolsa. |
| `weather:` | `weather:Valencia,es` | Muestra el pronóstico del tiempo en la ciudad especificada. |
| `time:` | `time:Nueva York` | Muestra la hora actual en la localidad indicada. |
| `movie:` | `movie:Reservoir Dogs` | Muestra resultados relacionados con una película. |
| `@` | `@Xataka` | Busca etiquetas sociales asociadas con Twitter. |
| `#` | `#Xataka` | Busca términos publicados con hashtags en redes sociales. |
| `$` | `iPhone 500$` | Muestra resultados con precios en **dólares** en el rango especificado. |
| `€` | `iPhone 500€` | Muestra resultados con precios en **euros** en el rango especificado. |

---

## Comandos adicionales (funciones de calculadora y utilidades)

Google también incluye una **calculadora integrada** y conversiones de unidades. Estos son comandos directos que ejecutan cálculos:

| **Comando / Símbolo** | **Ejemplo** | **Qué hace** |
|------------------------|-------------|---------------|
| `+`, `-`, `*`, `/` | `3*4` | Realiza sumas, restas, multiplicaciones o divisiones. |
| `**` | `3**4` | Calcula la potencia (3 elevado a 4). |
| `% de` | `21% de 900` | Calcula el porcentaje de un número. |
| `lg()` | `lg(28)` | Logaritmo en base 2. |
| `log()` | `log(200)` | Logaritmo en base 10. |
| `ln()` | `ln(24)` | Logaritmo neperiano (base e). |
| `!` | `5!` | Factorial de un número. |
| `sqrt()` | `sqrt(16)` | Raíz cuadrada. |
| `nth root of` | `3th root of 27` | Raíz n-ésima de un número. |
| `sin()`, `cos()`, `tan()`, `sec()` | `cos(0)` | Funciones trigonométricas. |
| `convertir` | `300 dólares en euros` | Conversión de unidades (monedas, medidas, etc.). |
| `map:` | `map:Castellón` | Muestra mapas de la ubicación especificada. |

---

## Comandos vs. Operadores

Es importante diferenciar ambos conceptos:

| **Comandos** | **Operadores** |
|--------------|----------------|
| Son instrucciones directas que ejecutan una acción específica (ej. `define:`, `site:`, `weather:`). | Son símbolos o palabras que modifican la consulta para afinar los resultados (ej. `AND`, `OR`, `-`, `" "`). |
| Suelen ir seguidos de dos puntos (`:`) y un valor. | Se colocan entre los términos de búsqueda. |
| Ejemplo: `filetype:pdf` | Ejemplo: `"inteligencia artificial" -chatgpt` |

Ambos se pueden combinar para obtener búsquedas muy precisas:
```
site:edu "machine learning" filetype:pdf -"deep learning"
```

---

## Tablas de verdad y lógica booleana

Los operadores de búsqueda se basan en la **lógica booleana**, que utiliza conectores como:
- **AND** → intersección (ambas condiciones deben cumplirse).
- **OR** → unión (al menos una condición debe cumplirse).
- **NOT** (representado por `-`) → exclusión.

Las tablas de verdad son fundamentales para entender cómo los motores de búsqueda procesan las consultas. Por ejemplo:

| A      | B      | A AND B | A OR B | NOT A |
|--------|--------|---------|--------|-------|
| Verdad | Verdad | Verdad  | Verdad | Falso |
| Verdad | Falso  | Falso   | Verdad | Falso |
| Falso  | Verdad | Falso   | Verdad | Verdad|
| Falso  | Falso  | Falso   | Falso  | Verdad|

Aplicar estos principios permite construir consultas eficientes y evitar resultados irrelevantes.

---

## Contexto adicional: sistemas operativos y lenguajes de programación

Durante la misma sesión se mencionaron varios sistemas operativos y lenguajes de programación, como parte de la formación integral en ADSO. Se recomendó revisar reseñas y comparativas de:

- **macOS Sequoia** (y versiones anteriores como Mac OS X Leopard).
- **Windows** (especialmente Windows XP y versiones recientes).
- **iOS 26** y **Android 16** (últimas versiones móviles).
- **Linux Mint 22** (distribución Linux de escritorio).

Estas revisiones ayudan a comprender las diferencias en arquitectura, interfaz de usuario, seguridad y rendimiento, lo cual es relevante para el desarrollo de software multiplataforma.

También se abordaron diversos **lenguajes de programación** (Python, Java, JavaScript, etc.) y su aplicación en distintos entornos.

---

## Ofimática y herramientas de productividad

Como parte del componente formativo, se trabajó en:
- **Normas APA** para la presentación de documentos técnicos.
- **Excel** (fórmulas, personalización de celdas, tablas dinámicas).
- **PowerPoint** (presentaciones efectivas).
- **Word** (edición de informes y manuales).

Estas herramientas son esenciales para la documentación de proyectos de software y la comunicación profesional.

---

*Este README forma parte del material de apoyo del primer trimestre de ADSO y está diseñado para servir como referencia rápida sobre técnicas de búsqueda avanzada y conceptos relacionados.*

> Gracias por leer.