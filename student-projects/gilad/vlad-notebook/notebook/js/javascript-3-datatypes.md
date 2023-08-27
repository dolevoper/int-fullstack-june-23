
# Data Types

## Data Types building blocks
* JS has 7 `primitive` data types:

    * `null` - A special keyword representing `null` (no value). note: js is case sensitive, therefore `null` is not the same as Null, NULL or other variants.

    * `Boolean` - true and false.

    * `undefined` - a top-level property whose value is not defined.

    * `Number` - an integer or floating point number. For example 42 or 3.14159 .

    * `BigInt` - And integer with arbitrary precision. For example 9007199254740992n

    * `String` - A sequence of characters that represent a text value. For example: "Howdy".

    * `Symbol` - A data type whose instances are unique and immutable 

* the `Object`- A collective of properties and methods(functions) with shared meaning that represents an entity.
    * `Function` is an object.
### `📝 TODO - have a page explaining each datatype explicitly`


## Data type conversion

Javascript is `dynamically typed` lagnuage. This means that you don't have to specify the data type of a variable when you declare it - the interperter is designed to understand what type of data is needed to store the new assigned value! 

This also means that variables are automatically converted "as needed" during the code execution.

```js
    
    let answer = 42;

    answer = "Thanks for all the fish!"

    /* answer initialized with a `Number` primitive data type, and is later converted to `String` as we assign it with a text sentence.*/
```

### `Numbers` and `+` operator

In expressions invloving `Numbers` and `Strings` with the `+` operator, JS converts numeric values to strings. 

**`With all other operators, JS does NOT convert numeric values to strings`**

```js 
    // the `+` operator
    x = "The answer is " + 42; // "The answer is 42"
    y = 42 + " is the answer"; // "42 is the answer"
    z = "37" + 7; // "377"

    // All other operators
    a = "37" - 7; // 30
    b = "37" * 7; // 259
```

### Converting `String` to `Number`

If we want to convert a string value that represents a numeric value to a `Number` datatype, we use the following methods:

* `parseInt()`
* `parseFloat()`

> **`NOTE:`** The `parseInt()` method only returns whole numbers, so it will get rid of numbers after decimal point.

> **`NOTE:`** When using the `parseInt()` It's a best practice to specify the `radix` parameter - The `radix` parameter specifies the numerical system to be used (for example: base 2, base 10, base 16)
```js 
    parseInt("101", 2); // `101` in base2 is `5` in base10
```

A second method to convert string represting numeric values is using the `+` operator 
As we seen, this operator will convert `String` to `Number` only when both are present, but if you can add `unary operator` `+` infront of a string to do the same convertion.

```js
    "1.1" + "1.1"; // "1.11.1"

    (+"1.1") + (+"1.1"); // 2.2 
    
    +"2" + +"2"; // 4
    //parentheses are not required, but adds readability.
```

# Literals

Literals represent values is JS. These are fixed values, that you *literally* hard code in your script.
Each Data Type has it's own `literal` way of creating and writing data.

* [Boolean Literals](#boolean-literals)
* [Numeric Literals](#numeric-literals)
* [String Literals](#string-literals)
* [Array Literals]()
* [Object Literals]()
* [RegExp Literals]()

## Boolean Literals

Boolean has two literal values: `true` and `false`.
Unlike other languages, because js is dynamically typed, the literals `0` (as false) and `1` (as true) are `Number` literals.

## Numeric Literals

JS numeric literals include integer literals in different bases as well as floating-point literals (decimal point).

* JS specification requires numeric literals to be `unsinged`, but you can use `unary operator '-'` to repersent a negative number. 

### `Integer Literals`

Integer and `BigInt` literals can be written in decimal(base10), hexadecimal (base16), octal (base8) and binary (base2).

* **Decimal Integer Literal:** a sequence of digits without a leading `0`.

* **Octal Integer Literal:** A leading `0` on an integer or a leading `0o` (or `0O`). Octal Integer includes only the digits `0` - `7`.

* **Hexcadicmal Integer Literal:** a leading `0x` (or `0X`). Hexadecimal includes `0` - `9` and the letters `a` - `f` (or `A` - `F`) meaning the values `10` - `15` in base10.

* **Binary Integer Literal:** a leading `0b` (or `0B`). Binary Integer literals can contain only the digits `0` - `1`.

* **`BigInt` Literal:** a trailing `n` suffix on an integer literal indicates a `BigInt` DataType value. Can use any of the above literals, **BUT** a leading `0` octal literal must use the `0o` (or `0O`). For example `0o6n`

```js
    0, 177, 123456789123456789n // decimal, base 10
    015, 0001, 0o7777777777n // octal, base 8
    0x1123, 0x00111, 0x123456789ABCDEF // hexadecimal, base 16
    0b11, 0b0011, 0b11101010101110101n // binary, base 2
```

### `Floating-point Literals`

A floating-point literal can have the following parts:

* An unsigned decimal integer
* A decimal point (`.`)
* a fraction (another decimal number)
* An exponent - an `e` (or `E`) followed by an integer, which can be signed.

A floating-point literal must have atleast on digit, and either a decimal point or `e` (or `E`).

```js
    3.1415926
    .12345678
    3.1E+12
    .1e-23
```

## String Literals

A string literal is zero or more characters enclosed in double (`"`) or single (`'`) quotes.
String literal must be wrapped by the same quote type 

```js
    'foo'
    "bar"
    '1234'
    'one line \n another line'
    "Joy's car"
```

You can use any of the `String` object's methods on a string literal value! 
Javascript automatically converts the `string` literal to a temporary `String` object, calls the method, then discards the temporary `String` object. You can also use the property `length` (Which is `String` object property) with a `string` literal:

```js
    console.log("Vlad's cat".length); // 10
```

### `Template Literals`

Template literals are wrapped with the back-tick ( **\`** ). Template literals are similiar to `string interpolation` in python.

```js
    // Basic string literal 
    `In Javascript '\n' is a line-feed.`

    // Multiline strings
    `In Javascript, tempalte string can run
    over mutliple lines, but double and single
    quoted strings cannot.`

    // String Interpolation
    const name = 'Vlad', time = 'today';
    `Hello ${name}, how are you ${time}?` // Hello Vlad, how are you today?
```

### Tagged Templates

Tags allow you to aprese template literals with a function. The first argument of a tag function contains the array of string values, and the remaining arguments are related to the expressions. 

In simple words, you can create a function that recieves a `template literal` with additional arguments. The template literals is mapped to an array, and any any `${variable}` are also passed with `...` ([`rest parameters`](/subtopics/javascript-desctructuring-assignment.md#rest-property)).

This allows us to do heavy string interpolation and add complicated logic (like object serialization) to a simple `template literal`. 
for example:

```js

const person = "Vlad";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Vlad is a youngster.
```

### Special Characters in Strings

We can also include special characters in strings like \n (new line) etc.

```js
"one line \n another line"
//one line 
// another line
```
Table list of special characters you can include in JS strings:

| Character | Meaning |
| :-------- | :------ |
| \0        |   Null Byte  | 
| \b        |   Backspace | 
| \f        |   Form Feed  | 
| \n        |   New Line | 
| \r        |   Carriage return  | 
| \t        |   Tab  | 
| \v        |   Vertical Tab  | 
| \'        |   Apostrophe or single quote  | 
| \"        |   Double quote  | 
| \\        |   Backslash character  | 
|                     |
| \XXX      |   Latin-1 encoding 0-377
| \xXX      |   Latin-1, two hexa digits 00-FF  | 
| \uXXXX    |   Unicode escape sequences, four hexa digits `\u00A9`  | 
| \u{XXXXX} |   Unicode point escapes (same as escape sequence) `\u{00A9}` | 

* To use backslashes inside a string literal you can escape them using backslash char `\"`
```js
    const quote = "The book \"Das Gold von Caxamalca\" is an amazing novel";
    //  The book "Das Gold von Caxamalca" is an amazing novel
```

* You can use `\\` to include backslashes in string literals, for example in a filepath 
```js
    const home = "c:\\temp";
```
* You can escape breakline using `\`, those will be removed from the value of string. It helps us writing the string literal on multiple lines in the IDE while actually avoiding the line break. 

```js
const str = 
" this string \
is broken \
across mutliple \
lines."
console.log(str); // this string is broken accorss 
```

## test