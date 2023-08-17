# DOM - Document Object Model

The Document Object Model (DOM) is a cross-platform, language-independent convention for representing and interacting with objects in HTML, XHTML and XML documents. Objects in the DOM tree may be addressed and manipulated by using methods on the objects.

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree as an object-oriented representation of the web page. With them, you can change the document's structure, style, or content.

Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

Among the things defined by the DOM, we can find:

* The document structure, a tree model, and the DOM Event architecture in DOM core: Node, Element, DocumentFragment, Document, DOMImplementation, Event, EventTarget, …

* A less rigorous definition of the DOM Event Architecture, as well as specific events in DOM events

* Other things such as DOM Traversal and DOM Range

From the ECMAScript point of view, objects defined in the DOM specification are called "host objects".

## HTML DOM

HTML, the Web's markup language, is specified in terms of the DOM. Layered above the abstract concepts defined in DOM Core, HTML also defines the meaning of elements. The HTML DOM includes such things as the className property on HTML elements, or APIs such as document.body.
