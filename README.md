# DOMObject

DOMObject is a small JavaScript library for developing Web-UI component based
single page application. It uses [Mustache](https://github.com/janl/mustache.js/)
as a template-engine.

## Why DOMObject?

- **Simple:**: DOMObject is a simple library with one class/one JavaScript file and can be
  directly used with any Web-Application by embedding it to HTML document.
  No extra front-end engine/server is needed.
- **Direct**: With DOMObject, all HTML tags and elements in the document can be directly
  accessed, used and manipulated without complicated state management and/or
  element queries.
- **Rich**: With DOMObject, a sophisticated feature rich Web-Application can be developed
  under the concept of [OOAD](https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design)
  and [SOLID](https://en.wikipedia.org/wiki/SOLID).
  Hence, the application developed with DOMObject trends to be modular, extensible and
  easy to maintain.
- **Fast**: DOMObject is based on vanilla JavaScript, hence, the performance of Web-Application
  developed with DOMObject is the highest performance achievable with JavaScript.
  Moreover, with OOAD and SOLID, the component created with DOMObject can be reused
  without rerendering, recreating or reentering the entire tag and its children.
- **Play well with DOM & JavaScript**: DOMObject utilizes the power of
  [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  and JavaScript, which is a power full default engine of all Web-Application.
  Beside the templating syntax, the JavaScript developed with DOMObject doesn't
  need any extra syntax or specialized environment.

## STEP
DOMObject does nothing but simplifies the access of DOM-element, which
can be created with any template-engine, in our case with Mustache.
If you are familiar with other template engine, download the code, edit it,
suite yourself. What we want actually to promote is the STEP concept for
Web-UI development. In the vanilla world of Web-UI development, STEP
is more or less already there. We just apply it in a proper way.
STEP consists of the followed components :

- **S**tyle with CSS
- **T**emplate with a template-engine to create DOM element fused with data
- **E**vent handling with JavaScript
- **P**rotocol by fetching data from server using AJAX and **P**rocess it with JavaScript

STEP is framework independent. You can apply STEP also without DOMObject library.
See example for implementation with STEP in a practical way.

Unlike popular Web-UI frameworks nowadays, STEP is data centric
way of thinking with separation of duty so called cohesion and not
UI centric and everything at one place. It is like, we move from
spaghetti code to MVC framework.

## How to Use It?

DOMObject is a JavaScript library, which can directly embedded to the HTML document.
It should be noted that DOMObject uses Mustache as template engine and hence
Mustache must also be embedded into the HTML document.

```html
<html>
	<head>
		<script src="mustache.min.js"></script>
		<script src="DOMObject.js"></script>
		<link rel="stylesheet" type="text/css" href="Base.css">
	</head>
</html>
```

Like other vanilla JavaScript library, the script should be executed after
all DOM contents are loaded. To do that running script must be registered by the
[DOMContentLoaded event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event).

```html
<script>
	function runDOMObject(){
		/// Write DOMObject code here.
	}

	document.addEventListener("DOMContentLoaded", function(event) {
		runDOMObject();
	}); 
</script>
```

Next, you can define template in the *```<head>```* of HTML document using *```<template>```* tag.
Note that the defined template must have *id* to allow DOMObject accessing content of the template.
Moreover, **the template must have only one root element**.
In our example, the root element is *```<p>```*

```html
<template id="ContentNote">
	<p>
		This is a content of the paragraph, which is defined as template.
	</p>
</template>
```

Afterwards, we can create an object of DOMObject by giving the *id* of the template and
can directly use it.
One of the mostly used attribute of DOMObject is *html*, which is an
[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) object and
can be used for manipulation of the document.
In our example, the created object will be append into the ```<body>```.

```JavaScript
function runDOMObject(){
	let note = new DOMObject("ContentNote");
	let body = document.getElementsByTagName("body")[0];
	body.appendChild(note.html);
}
```

Now, you can add event and manipulate the element as you wish.

```JavaScript
function runDOMObject(){
	let note = new DOMObject("ContentNote");
	let body = document.getElementsByTagName("body")[0];
	note.html.style["cursor"] = "pointer";
	note.html.onclick = (event) => {
		note.html.hide();
	}
	body.appendChild(note.html);
}
```

The full HTML document of the shown code can be found in
[Example](https://github.com/Piyawanno/DOMObject/blob/main/example/Basic.html).
For the further documentation, please check our
[Document](https://github.com/Piyawanno/DOMObject/blob/main/document/README.md).