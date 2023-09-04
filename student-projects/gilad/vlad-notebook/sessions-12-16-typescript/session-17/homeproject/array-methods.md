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

## `includes()`

[includes() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

`includes` compares a searched value with all elements of an array until it finds an equal value.
It uses [Same-value-zero equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
`Same Value Zero Equality` is the same as `strict equality` that is considering `NaN` as equal, and `-0` and `0` as equals too.

1. Check if compared values are type of `number`
2. Check if both `numbers` are equal OR:
   - Check if any of the values are NOT `NaN`: both double and triple equals consider `NaN` is not equal to itself. `NaN === NaN` or `NaN == NaN` are both false.
3. if not numbers, check equality with triple equal

## `isArray()`

[isArray() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

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

The `Array.isArray` checks whether the checked object is an [`Exotic Array Object`](https://262.ecma-international.org/12.0/#array-exotic-object). waiting for implementation

## `indexOf()`

[indexOf() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## `lastIndexOf()`

[lastIndexOf() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

## `join()`

Interesting part of `join()` is it avoid infinit loop by ignoring occurrences of itself.
To implement this behavior, I've created a `removeOccurrences()` function that replaces all occurrences of a specified value (including object refferences) in an array (and the nesting arrays within) .

[join() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## `toString()`

[toString() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

## `of()`

[of() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

## `map()`

[map() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## `pop()`

Learned that I can manipulate array's length property.
If the array contains an element that has a property descriptor specifing that it's not writable or configurable, the length of the array will always be element's index + 1.
This means we can't pop those elements!

[pop() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## `push()`

[push() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## `reduce()`

If reduce() is called with a single-value array (no matter where that value is positioned at) and without an initialValue specified - it returns that solo value.
For this behavior I've implemented the function `isArraySingleValue()` which returns false if the array is `empty` or has several values. If there's only one cell with a value, it returns it's value.

Must note that my `reduce()` version does not handle object, for some reason, typescript or js unable to detect passed data types.

[reduce() MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
