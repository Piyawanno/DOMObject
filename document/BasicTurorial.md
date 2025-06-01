# Basic Tutorial

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

