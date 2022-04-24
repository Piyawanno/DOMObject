# DOMObject

DOMObject is a small JS library for developing Web-UI component based
single page application. It uses [Mustache](https://github.com/janl/mustache.js/)
as a template-engine.

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

Unlike popular Web-UI frameworks nowaday (2022), STEP is data centric
way of thinking with separation of duty so called cohision and not
UI centric and everything at one place. It is like, we move from PHP
spaghetti code (PHP volk, I am sorry for that.) to MVC framework.