# Javascript

Javascript is an interperted (just-in-time compiled) programming language with [`First-Class Functions`](/javascript-functions.md#first-class-function).

While it is most known for as the scripting language for web browsers, it's also used by non-browser environments like Node.js Apache CouchDB and Adobe Acrobat.

Javascript is a `prototype-based`, [`multi-paradigm`](subtopics/javascript-paradigms.md)
, `single-threaded` language that supports `Object Oriented`, [`Imperative` and `Declarative` paradigms](subtopics/javascript-paradigms.md).


Javascript has dynamic capabilities including `runtime object construction`, `variable parameter lists`, `function variables` (first-class functions), `dynamic script creation`, `object introspection` and [`source-code recovery`](subtopics/javascript-functions.md#function-source-code-via-tostring) (javascript functions store their source text and can be retrieved through 'toString'). 

> **`TODO`** - Explain each topic above.
 
Javascript's specific parts for Web pages development are `Web API` and [`DOM` (Document Object Model)](subtopics/javascript-dom.md) manipulation.

JavaScript documentation of core language features (pure ECMAScript, for the most part) includes the following:

* [`MDN Javascript Guide`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

* [`MDN Javascript Reference`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

**Client-side** JavaScript extends the core language by supplying objects to control a browser and its [Document Object Model (DOM)](subtopics/javascript-dom.md). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.

**Server-side** JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.

This means that in the browser, JavaScript can change the way the webpage (DOM) looks. And, likewise, Node.js JavaScript on the server can respond to custom requests sent by code executed in the browser.

<br>
<br>
<br>

## Javascript's difference from other languages

* **Interperted:** Javascript supports a runtime system based on a small number of `data types` representing numeric, Boolean, and string values. 

* **Type Safety:** Javascript is `dynamic, loosely typed` and has no `static typing` and `strong type checking`. 

* **Function Declerations:** JS supports functions without any special declerative requirements. Functions can be properties of objects, executing as loosely typed methods.


* **Object Orienting:** JS has a prototype based objectt model instead of the more common class-based object model. The `prototype-based` model provides `dynamic inhertiance`, means that what is inherited can vary for individual objects. Properties and methods can be added to any object dynamically. 

* **Access Modifiers:** You do not have to declare `access modifiers` and be concerned whether methods are public, private or protected, and do not have to implement interfaces.

<br>
<br>
<br>


















