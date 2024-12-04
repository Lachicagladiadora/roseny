---
layout: ../../layouts/MarkdownPostLayout.astro
title: "HTML"
pubDate: 2024-11-29
description: "Learn HTML syntax and use elements"
author: "Lachicagladiadora"
image:
  url: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt: "Git messages image"
tags: ["html", "dev", "learn", "basic"]
---

<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>HTML Syntax</h2>

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Basic structure</h3>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body></body>
</html>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Usual basic structure</h3>

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale-1.0" />
    Visible part on the device (visible part of the device, fits the size)
    <meta name="description" content="Una genial descripcion de mi pagina" />
    <title>Title of my web page</title>
    <!-- rel=raletioship (what type of ratio is it) href: relative url of the document -->
    <link rel="stylesheet" href="styles.css" />
    <link rel="shortcut icon" href="favicon.png" />
  </head>
  <body>
    <h1>Title of my web page</h1>
    <scrip src="scripts.js"></scrip>
  </body>
</html>
```

  <ol class='list-inside list-disc'>
	  <li>
    Everything inside <strong>“body”</strong> is content.
    </li>
    <li>
    You can put styles inside the body, but it is not recommended.
    </li>
    <li>
    Everything inside <strong>“head”</strong> is metadata (describing data, content, documents or files)
    </li>
	</ol>
  
<!-- - Headers -->
<!-- <h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Headers</h3> -->
<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>Headers</h2>

```html
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
```

<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>Section Labels</h2>

Divide la pagina en bloques

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Headers</h3>

```html
<header></header>
```

<!-- barra de navegacion -->

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Navigation Bar</h3>

```html
<nav></nav>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Content</h3>

**Article tag**: elemento de contenido unico (articulo de un blog, tutorial)

```html
<article>
  <h1>Titulo</h1>
  <section>
    Divisiones de la pagina (ejem: un tutorial. tiene sus secciones, es decir,
    pasos)
    <h2>subtitulo</h2>
  </section>
</article>
```

Contenido que pones y que no esta relacionado con el contenido principal (ejem;
publicidad)

```html
<aside></aside>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Footer</h3>

Para poner **notas** en pie de pagina y **creditos**

```html
<footer></footer>
```

<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>Content grouping labels</h2>

<!-- ## Etiquetas de agrupacion de contenido -->

Agrupar informacion en bloques

- Listas anidadas
  ```html
  <ul>
  	<li>Item de lista 1</li>
  	<li>Item de lista 2</li>
  		<ol>
  			<li>Subitem de lista 1</li>
  			<li>Subitem de lista 2</li>
  		</ol>
  	</li>
  	<li>Item de lista 3</li>
  </ul>
  ```
- Listas de definicion
  ```html
  <dl>
    <dt>Peru</dt>
    <dd>Lima</dd>
    <dt>Colombia</dt>
    <dd>Bogota</dd>
    <dt>Bolivia</dt>
    <dd>La Paz</dd>
  </dl>
  ```
- figure y figcaption → contenido relacionado, pero que rompe el flujo (ejem; imagen, video, cita, codigo, )
  ```html
  <figure>
    Pedazo de contenido(imagen, etc) que esta relacionado pero que rompe el
    flujo
    <pre>
  		<code>
  			funtion hola(){
  				return "hola"
  			}
  		</code>
  	</pre>
    <figcaption>Declaracion de una funcion de JavaScript</figcaption>
    Leyenda del figure (descripcion), es **opcional**
  </figure>
  ```
- Otros elementos
  ```html
  <main>
    Se pone el elemento mas importante de una pagina web (contenido mas
    importante)
    <p>Este es un parrafo, es decir, un bloque de texto</p>
    parrafo
    <hr />
    Cambio de seccion, capitulo, un cambio de significado en el texto
    <pre>
         preformateado (el navegador toma el texto tal y como se ingresa, con espacios)
  		Este texto
  			se representara igual
  	en el navegador
  	</pre
    >
    <blockquote>
      resaltar parte del contenido Use un Blockquote para destacar citas
    </blockquote>
  </main>
  ```
- Divisiones (layout)
  ```html
  <div class="user">
  	<div class="user__name">
  		<p>Alexys Lozada</p>
  	</div>
  	<div class="user__image">
  		<image src="alexis.jpg" alt="Foto de Alexis Lozada">
  	</div>
  </div>
  ```

<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>Element of texts and links</h2>

<!-- ## Elemento de textos y enlaces -->
<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Line element</h3>

- elemento de linea → hace que los elementos se ubique uno al lado del otro (linealmente)
  ```html
  <span>Este es un elemento de linea</span>
  ```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Block element</h3>

- elemento de bloque →visualmete ocupa (reserva) todo el espacio disponible en pantalla
  ```html
  <p>Este es un elemento de bloque</p>
  ```

Los elementos de **linea** estan **dentro** de los elementos de **bloque**

```html
<p>
  <small></small>
  <strong></strong> texto importante, el texto se pone en negrita
  <em></em> enfatizas el tento, el texto se ve inclinado <cite></cite> para
  citar <dfn></dfn> para definir <code></code> para poner fragmentos de codigo
  <data></data> para poner datos (de programa, etc) <br />
  saltos de linea <q></q> citas <abbr></abbr> abreviacion <del></del> un texto
  ha sido eliminado (descuentos, ofertas) <wbr /> word brak, ruptura de palabra
  <span></span> div=contenedor, no significa nada <i></i> italic <b></b> bold
  <u></u> underline <sup></sup> superindice, letra pequena arriba
  <sub></sub> subindice, letra pequena abajo <time></time> cuando quieres poner,
  hora o fecha <mark></mark> resalta <a href=""></a> enlaces
</p>
```

<hr class='mt-20 mb-4'/>

**For more information**

<!--
- 🖇️[Article in English](https://www.conventionalcommits.org/en/v1.0.0/)
- 🖇️[Article in Spanish](https://dev.to/achamorro_dev/conventional-commits-que-es-y-por-que-deberias-empezar-a-utilizarlo-23an) -->

```

```
