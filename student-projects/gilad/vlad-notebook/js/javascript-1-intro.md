# Javascript Intro

## `Developer Console`

The developer console is a runtime tool, an invornment that lets us test code in runtime.
When you write down `statements` they're sorrounded using `eval()` and it's the same as writing `console.log(eval(your_code));`.

```javascript
console.log(eval("3+5"));
```

### `Multiline input`

You can input multiple lines of code in the dev console, with the following options:
* Enter an uncomplete code like `function foo() {`
* Press `Shift+Enter` (just like any other text editors)
* in Firefox you can activate a multiline input mode.

### `Strict Mode`

Strict mode allows us to:
* Prevent semantics in Javascript that trip up beginners
* Prevent code snippets from interacting with one another (while working on multiple consoles for example).

to use strict mode in developer console, you need to include:
```javascript
(function() {"use strict"; 

    // Your code

})();
```
*you need a pretty broken language to have a special strict mode for it...*

<br>
<br>
<br>

# Grammer and types basics

* Javascript is `case sensitive` and uses `Unicode character set`.
By using `unicode`, we can use all the characters from this set to name variables and functions, for example:
```javascript
const שלום = "hello";
alert(שלום);
```

* Instructions are called `statements` and are seperated by semicolons `;`.
It is not necessary if a statement is in a seperate line, but it's considered as best practice to always end statements with a semicolon.

* The source code of js is scanned from left to right, and is converted (interperted) into a sequence of input elements which are `tokens`, `control characters`, `line terminators`, `comments` or `whitespaces` (spaces, tabs and newlines characters are considered as whitespaces).

## Comments

The syntax of comments is the same as C++ and many other languages.
using `//` for one-line comment and `/* ... */` for multiline comments.
You can not nest comments.
Comments behave like whitespaces and are discarded during script execution.

```javascript
// is a one line comment

/*  This is a
    multiline comment
*/
```

You can have `hashbang comment`, which are special comments to specify the javascript engine path that we want to execute the relevant script.

```javascript
#!/usr/bin/env node
```
<br>
<br>
<br>

> ## GO TO NEXT PAGE: [`Variables`](/javascript-2-variables.md)