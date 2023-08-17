# Destructuring Assignment

The destructuring assignment syntax is a javascript `expression` that makes it possible to unpack values from `arrays`, or properties from `objects`, into distinct variables.

The destrucuring assignment syntax uses similiar syntax as of the destructured target's `literal expression`.

<br>
<br>
<br>

## Destructuring Arrays

Using the same syntax as of an Array's `literal expression`, we can extract values from the array's cells in an orderly manner:

```js
    const x = [1,2,3,4,5]; // Array literal expression

    const [y,z] = x; // Destructuring assignment
    
    console.log(y); // 1
    console.log(z); // 2 
```

<br>

## Destructuring Objects

We can declare variables with Object's `literal expression` to extract specific properties of the destructed object.
With object destructuring, the declared variables use the property's names to choose what property to destruct.
```js
    const obj = { firstname: "vlad", lastname: "pinker" };
    const { firstname, lastname } = obj;

    console.log(firstname); // "vlad"
    console.log(lastname); // "pinker"
``` 

<br>
<br>
<br>

## Binding and assignment

For both objects & array destructing, there are two kinds of `destructuring patterns`:
* Binding pattern
* Assignment pattern

<br>

### Binding destructuring pattern

In binding patterns, the apttern starts with a `declaration keyword` (`var`, `let`, `const`).
Then, each individual property must either be bound to a variable or further destructed.
```js
    /* object:
        - a : 1
        - b : 
            --c : 2
    */
    const obj = { a: 1, b: { c: 2 } } 

    const {
        a,
        b: { c: d},
    } = obj;
    // Two variables are bound: `a` and `d`
```

In this example, all variables share the same `decleration` (`const`).
If you want to use different `decleration types` for different variables, you may have to destructure the object twice - one for each `decleration type`:
```js
    const obj = { a: 1, b: { c: 2 } } 

    const { a } = obj; // a binded as constant
    let {
        b: { c: d },
    } = obj; // d is re-assignable, `let` variable.

```

<br>

### Assignment destructuring pattern

In assignment patterns, we use already-declared variables, or properties of another object.
That means we do not specify `decleration keywords` at the beginning of the assignment pattern destructuring, and the assigned variables might have any `decleration type` (`var`, `let`, `const`).
```js

    const numbers = [];
    const obj = { a: 1, b: 2 };

    ({ a: numbers[0], b: numbers[1] } = obj);
    // The properties `a` and `b` of `obj` are assigned to properties of `numbers`.
```

**`IMPORTANT:`** The parentheses `( )` around the `assignment statement` are required when using object literals destructuring assignment without a declaration.
`{ a, b} = { a: 1, b: 2 }` is not a valid stand-alone syntax, as the `{a, b}` on the left are considered a block and not an object literal.
However `({ a, b} = { a: 1, b: 2})` is valid as is `const { a, b } = { a: 1, b: 2 }`.
Remember to end this expression with a semicolon `;`.

<br>
<br>
<br>

## Default Value

We can set `default values` when destructuring. The default is used when the property does not exist, or has a value of `undefined`. 
**`NOTE:`** Default value will **NOT** be used if the property value is `null`.
```js
    const [ a = 1 ] = []; // Array destructuring, a is 1
    const { b = 2 } = { b: undefined }; // Object destructuring, b is 2
    const { c = 2 } = { b: null }; // c is null. (why would you do this, js???)
```
The default value can by any `expression`. It will only be evaluated when needed, as mentioned above.
```js
    // Won't log anything, because `b` is a defined and valid value and there's no need for default value.
    const { b = console.log("b did not destructure!") } = { b: 2 };

    // print an alert message about failed destructuring, and return a default value.
    function alertDestructionFailed(variable_name) { 
        console.log( variable_name + " failed to destruct, default value assigned" );
        return 0; // return default value
    }

    const { a = alertDestructionFailed("a") } = { a: undefined };
    /* Because destructured object property `a` is undefined, the default value will be assigned.Default value assignment will trigger the `alertDestructionFailed` function which will print " a failed to destruct, default value assigned " and return a value of `0`, which will be assigned to `a`, the recieving variable.
    */
    console.log(a); // a is equal to '0'.
```

<br>
<br>
<br>

## Rest property `...`

We can end a destructuring pattern with a `rest property`: `...rest` to destruct all other remaining properties we do not want to specificaly specify. 
This pattern will store all remaining properties of the object or array into a new object or array.
```js
    const { a, ...others } = { a: 1, b: 2, c: 3 };
    console.log(others); // { b: 2, c: 3 }

    const { first, ...lasts } = [1, 2, 3];
    console.log(lasts); // [2, 3]
```

**`NOTE:`** The `...rest` property MUST be the last in the destructuring pattern, and must not have a trailing comma `,`

<br>
<br>
<br>

## Destructuring with other syntaxes

Every scenario in which a variable gets bind, we can use destructuring pattern! This includes:

* The index/looping variable when `for...in` and `for...of` loops.
* Function parameters.
* The `catch` binding variable.

<br>
<br>
<br>

# `TODO` - CONTINUE EDITING THIS FILE WITH EXAMPLES FROM: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment