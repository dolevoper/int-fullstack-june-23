# Array Methods Implementation

## Target

Choose any array method (use MDN to find) that we did not cover during class. Implement it on your own using for/while loops. This must be submitted as a function, not as free code.

# Implemented Array Methods

## `at()`

[at() MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

## `concat()`

[concat() MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## `copyWithin()`

[copyWithin() MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

## `entries()`

[entries() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

## `every()`

[every() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## `fill()`

[fill() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

## `filter()`

[filter() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## `find()`

[find() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## `findIndex()`

[findIndex() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## `findLast()`

[findLast() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

## `findLastIndex()`

[findLastIndex() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

## `flat()`

[flat() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

## `flatMap()`

[flatMap() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

## `forEach()`

[forEach() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## `isArray()`

This implementation is fun!
Appearantly, we can't use the type check `instanceof` because of javascript's security measures.
Each `window` (or environment) has it's own unique `context` for prototype constructors, meaning that `Array.prototype` in one `window` global has different `context` than `Array.prototype` of the other.

Therfore, `instanceof` check returns `false` when checking an object's type of another `window` due to a different `context`.

Other possible options:

- `Duck Typing` - check the object's prototype to determines whether it "looks like" an array - this option might work on non-array objects that have the similiar checked prototype methods (like push or concat).

```js
Boolean(obj) && obj.length != null && typeof obj.push === "function";
```

- `toString output` This method checks whether the toString of an object returns the typical printed string for array-objects. If an object is manipulated and prints the same toString() value `[object array]` it will return a false truth.

```js
`Object.prototype.toString.call(checked_object) == "[object array]"`;
```

- `Constructor check` This methods checks whether the checked object has the same constructor as `Array`.

```js
checked_object.constructor === Array;
```

The `Array.isArray` checks whether the checked object is an [`Exotic Array Object`](https://262.ecma-international.org/12.0/#array-exotic-object) and there are parts that aren't accessible by JS, but only to JS-Engines.
