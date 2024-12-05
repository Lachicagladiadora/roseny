---
layout: ../../layouts/MarkdownPostLayout.astro
title: "HTML"
pubDate: 2024-11-29
description: "HTML is a Markup language not programming language"
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

Divide the page into blocks

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Headers</h3>

```html
<header></header>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Navigation Bar</h3>

```html
<nav></nav>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Content</h3>

**Article tag**: Single content item (blog post, tutorial)

```html
<article>
  <h1>Title</h1>
  <section>
    Page divisions (e.g. a tutorial has its sections, i.e. steps)
    <h2>Caption</h2>
  </section>
</article>
```

Content you post that is not related to the main content (e.g. advertising)

```html
<aside></aside>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Footer</h3>

To put **footnotes** and **credits**

```html
<footer></footer>
```

<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>Content grouping labels</h2>

Group information into blocks

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Nested lists</h3>

```html
<ul>
	<li>List item 1</li>
	<li>List item 2</li>
		<ol>
			<li>List subitem 1</li>
			<li>List subitem 2</li>
		</ol>
	</li>
	<li>List item 3</li>
</ul>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Definition lists</h3>

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

  <h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Figure & Figcaption</h3>

Related content, but which breaks the flow (e.g.; image, video, quote, code, ...)

```html
<figure>
  Piece of content (image, etc.) that is related but breaks the flow
  <pre>
		<code>
      function getGreets(){
				return "Hi there!"
			}
		</code>
	</pre>
  <figcaption>Declaring a JavaScript function</figcaption>
  Figure legend (description), it is **optional**
</figure>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Other elements</h3>

```html
<main>
  Main is the most important element of a web page is placed (most important
  content)
  <p>This is a paragraph, that is, a block of text</p>
  <!-- hr tag: Change of section, chapter, a change of meaning in the text -->
  <hr />
  <pre>
       preformatted (the browser takes the text exactly as it is entered, with spaces)
    This text
                    will be displayed the same
        in the browser
	</pre
  >
  <blockquote>
    Highlight part of the content Use a Blockquote to highlight quotes
  </blockquote>
</main>
```

  <h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Divisions</h3>

```html
<div class="user">
	<div class="user__name">
		<p>J.R. Tolkien</p>
	</div>
	<div class="user__image">
		<image src="https://www.pexels.com/es-es/foto/libro-luz-de-vela-iluminado-candelero-6958119/" alt='Photo from "The Lord of the Rings"'>
	</div>
</div>
```

<h2 class='pt-6 pb-2 text-2xl font-bold text-first-dark dark:text-second'>Element of texts and links</h2>

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Line element</h3>

Makes elements sit next to each other (linearly)

```html
<span>This is a line element</span>
```

<h3 class='pt-6 pb-2 text-2xl text-first-dark dark:text-second'>Block element</h3>

Visually occupies (reserves) all available space on the screen

```html
<p>This is a block element</p>
```

**Line** elements are **inside** **block** elements

```html
<div>
  <small></small> <strong></strong> important text, text is bolded <em></em> you
  emphasize the tempo, the text looks tilted <i></i> italic <b></b> bold
  <u></u> underline <wbr /> word break <mark></mark> highlights
</div>

<p>
  <q></q> quotes <cite></cite> to quote <br />line breaks
  <span></span>container, means nothing
</p>

<main>
  <code></code> to put code snippets <dfn></dfn> to define <data></data> to put
  data (program,etc.) <abbr></abbr> abbreviation <del></del> a text has been
  deleted (discounts, offers)
</main>

<aside>
  <sup></sup> superscript, fine print above <sub></sub> subscript, small print
  below
</aside>

<nav>
  <time></time> When you want to set the time or date <a href=""></a> links
</nav>
```

<hr class='mt-20 mb-4'/>

**For more information**

- 🖇️[HTML mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- 🖇️[HTML basics mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
