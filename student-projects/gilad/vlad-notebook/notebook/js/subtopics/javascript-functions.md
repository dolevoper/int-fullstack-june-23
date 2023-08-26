
## First-Class Function

First-class functions are functions that are treated as objects.

That means a function is an object by itself, and can be stored as as a value of a variable, passed as an argument to other functions and be returned by other functions.

### Assigning a function to a variable
Here we assign an `Anonymous Function` in a variable, the we used the variable to invoke the function by adding parentheses `()`. 

```javascript
const foo = () => {
    console.log("foobar");
};

foo(); // Invoke the function using the variable
```

### Passing a function as an argument
We are passing our `sayHello` function as an argument of `greeting` function.

Then, we use the variable `HelloMessage` to invoke `sayHello` using `()` and concatenate it's return value with the `name` variable.

> **`NOTE:`** that we didn't used `()` when we passed `sayHello` as an argument to `greeting`. Doing so will invoke `sayHello` as a function before we passed it as an argument and it's return value will be passed instead.


```javascript
funciton sayHello() {
    return "Hello, ";
}
function greeting(HelloMessage, name) {
    console.log(HelloMessage() + name)
}
// Pass the `sayHello` as an argument to `greeting` function.
greeting(sayHello, "Vlad!");
// "Hello, Vlad!"
```

A function that we pass as an argument to another function is called [`Callback Function`](#callback-function).

### Returning a function
In this example we return a function from another function. 
The function `sayHello` returns a newly created `Anonymous Funciton` 

```javascript
function sayHello() {
    return () => {
        console.log("Hello!");
    }
}
```

A function that recieves a function as an argument or returns a function as a return value is called a `High-Order Function` . 

<br>
<br>
<br>

## Callback Function 

A `Callback Function` is a function that is passed as an argument to another function, which will be "called back" at some point of the recieving function to complete a routine / action.

A `Callback Function` can be called: `Synchronous` and `Asynchronous`.
> `TODO` - Complete callback function explanation using the following link: [MDN - Callback Function]("https://developer.mozilla.org/en-US/docs/Glossary/Callback_function")

## Function Source Code via `toString()`

Javascript's functions store their `source code` as a text that can be accessed using `toString()` method. 
the `toString()` is a method of `Function` object isntance.

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// Expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// Expected output: "function abs() { [native code] }"
```