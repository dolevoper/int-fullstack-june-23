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

# Variables

You can use variables as a symbolic names for values in your application.
The names of variables are called `identifires`.

* A javascript indentifier usually starts with a letter, underscode `_` or a dollar sign `$`. As long as the first character of a variable name is correct, a variable name can also contain digits (0-9).
for example: `$name_1` or `_firstName` are valid variable names.

* Javascript variables are `case-sensitive`, meaning there's a difference between lowercase and uppercase characters. for example, "`HelloWorld`" and "`helloWorld`" are different.

* Because javascript uses `Unicode Set`, you can use any character in the unicode set in identifiers. `שלום` and `Früh` are valid identifier names, and you can even use Unicode escape sequences.

Javascript has three kinds of variable declarations:
* `var` -   Declares a variable, optionally initializing it to a value.
            Used to declare both local and global variables, depending on the execution context.
    ```javascript
        var x = 42;
    ```
* `let` - Declares a block-scoped, local variable, optionally initializing it to a value.
* `const` - Declares a block-scoped, **read-only** named constant, which must be initialized with a value.
    ```javascript
        let jimCarrey = 24;
        const life = 42;
    ```

### Destructuring Assignment

You can use variables to unpack values using the [`destructuring assignment`](/subtopics/javascript-desctructuring-assignment.md) syntax.
For example, `const { bar } = foo `, will create a variable named `bar` and assign to it the value of the corresponding named `key` of the object `foo`.

> **`IMPORTANT:`** Variables should always be declared before they are used. Javascript used to allow assigning to undeclared variables, which creates `undeclared global` variable. This is an error in `strict mode` and **MUST** be avoided.

<br>
<br>
<br>

## Declaration and Initialization

In a `statement` like:
```js
    let x = 42;
```
* The `let x` is called **`decleration`**
* The `= 42` is called **`initializer`**

`Decleration`: The variable decleration allocates a specific space in memory and assigns it an address, which is reffered by the program/mer by the variable's name. In our example it will be `x`.

* If a variable is accessed later in code without declaring it first, it will throw a `ReferenceError`.

`Initializer`: The initialization assigns a first value to the variable, which will be stored in sayed allocated memory the moment it is declared.

* In `var` and `let` declerations, the initializer is optional.

* If a variable is declared without initializer, it is assigned with the default value `undefined`.

```js
    let x;
    console.log(x); // logs "undefined"
```


`const` declerations, always need an initializer, because they forbid any kind of `assignment` after decleration, and implicitly initializing it with `undefined` is likely a programmer mistake and will throw a `SyntaxError`.

```js
    const x; // SyntaxError: Missing initializer in const declerations
```

`Assignment`: The action of setting a new value to a variable is called `assignment`.

<br>
<br>
<br>

## Constants 

You can create read-only, named constants with the `const` keyword.
The syntax of a constant identifier is the same as any other `variable identifier`.
```js
    const PI = 3.14;
```

* Scope rules for constants are same as for `let`
* A `const` cannot change value through `assignment`
* A `const` cannot be `re-declared` while the script is running.
Meaning you can not declare a constant with the same name as a function or variable in the same scope.

### `const` mutations

`const` only prevents `re-assignments`, but **DOES NOT** prevent `mutations`.
The properties of `objects` assigned to constants **ARE NOT** protected, so you can re-assign new values to those properties. 
```js
    const CAR = { key: "value" };
    CAR.key = "other value"; // Totally valid statemnet :)
```

Also, contents of `arrays` assigned to constants are also not protected.
```js
    const MY_ARRAY = ["HTML", "CSS"];
    MY_ARRAY.push("JAVASCRIPT");

    console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

*why, js, why?*

<br>
<br>
<br>

## Variable Scope

A variable may belong to one of the following `scopes`:

* `Global Scope`:   The default scope for all code running in script mode. 
                    It's the highest scope in the hirarchy.
                    Every `variable`, `function`, `object` declared in the global scope can be accessed from anywhere in the current document.

* `Module Scope`:   The scope for code running in module mode.

* `Function Scope`: The scope created with a `function`.

In addition, variables declared with `let` or `const` can belong to an additional scope:

* `Block Scope`:    The scope created with a pair of curly braces `{...}` ( a `block` ).
                    > **`NOTE:`** Functions are not blocks.

When you declare a variable outside of any function, it is called `global variable`, because it is available to any other code in the current document. When you declare a variable withing a function, it is called a `local variable`, because it is available only within that function.

* `let` and `const` declerations can also be scopped to the `block statement` that they are declared in.
This means they will be available only within the block inside the curly braces (`{...}`), and will be dismissed the moment the `block` ends.

```js
    if (Math.random() > 0.5) {
        const y = 5;
    }

    console.log(y); // throws ReferenceError: y is not defined.
```

* `var` declared variables are **not** block-scoped, but only local to the `function scope` (or `global scope`) that the block is located in.

```js
    function greet() {
        if(true) {
            var x = 5;    
        }

        console.log(x); // will print "5".
    }

    console.log(x); // will throw ReferenceError: x is not defined.
```

### Global Variables

`Global Variables` are in fact properties of the `global object`.

* `Web Pages Global Object:` In web pages, the `global object` is `window`, so you can `set` and `access` global variables using the `window.variable` syntax.
In all environments, you can use the `globalThis` variable (which itself is a global variable) to access global variables.

* **`USEFUL!`** You can access `global variables` declared in one `window` or `frame` from another `window` or `frame`!! By specifying the `window` or `frame` name.
For example, if a global variable `phoneNumber` is declared in a document,
you can refer to this variable from an `iframe` as `parent.phoneNumber`.

<br>
<br>
<br>

## Variable Hoisting

Javascript **`Hoisting`** refers to the process in which the interperter appears to move the `decleration` of functions, variables, classes or imports to the top of their scope, prior to execution of code.

The following behavios are regarded as `hoisting`:

* `Value Hoisting`: Being able to use a variable's value in its scope, before the line it is declared

* `Decleration Hoisting`: Being able to reference a variable in its scope before the line it is declared, without through `ReferenceError`, but the value is always `undefined` (because it is not initialized yet)

* The decleration of the bariables causes behavior changes in its scope, before the line in which it is declared.

* The side effets of a declaration are produced before evaluating the rest of the code that contains it.

### `var` hoisting

`var` declared variables are `Decleration Hoisted`, meaning you can refer to the variable anywhere in its scope, even if its decleration isn't reached yet. 
You can see `var` declarations as being `lifted` to the top of its function or global scope.
As explained above, when accessing a `var` before it's declared due to `hoisting`, its value will be `undefined`.

```js
    console.log(x === undefined); // true
    var x = 3;

    (function () {
        console.log(x); // undefined
        var x = "funciton scoped value";
    })

    // Above code is interperted the same as:

    var x;
    console.log(x == undefined); // true
    x = 3;

    (function () {
        var x;
        console.log(x); // undefined
    })();
```

> **`IMPORTANT:`** Because `var` is `hoisted`, all `var` statements in a function should be placed at the top of the function as possible.

### `let` & `const` hoisting

There's a debate about referring `let` and `const` declared variables as `hoisted`, this is because it's possible to reference those variables before the line they're declared at, but it'll always result with `ReferenceError`. Therfore, `let` and `const` are hoisted, but there's no real useful implication for it.

```js
    console.log(x); // ReferenceError

    const x = 1;
    {
    console.log(x); // ReferenceError
    const x = 2;
    }
```
In the example above, we can see that the second `console.log` should've printed the value of the global `const x` (value of `1`), but because there's another, hoisted, `const` variable declared in a block-scope, we get a `ReferenceError`.


### `function` hoisting

Unlike `var` declerations, which only hoist declerations but not their value (a.k.a `Decleration Hoisting`), function declerations are hoisted entirely! They're both `decleration and value hoisted`.
Because of this, you can safely call the function anywhere in its containing `scope` (not only `block scoped`, which is only for `var` and `let`).

```js
    greet(); // prints "Hello!"

    function greet() {
        console.log("Hello!");
    }

    {
        greet(); // prints "Hello!"
        farewell(); // prints "Bye!"

        function farewell() {
            console.log("Bye!");
        }
    }
    farewell(); 
    // prints "Bye!" because functions are not block-scoped but rather global/module scoped.
```

<br>
<br>
<br>

# Data structures and types
