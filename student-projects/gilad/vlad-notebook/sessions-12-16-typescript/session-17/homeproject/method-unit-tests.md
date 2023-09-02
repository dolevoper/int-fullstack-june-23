# Methods Unit Tests

for your utmost convenience ♥

## `at()`

```ts
/* at() Tests: */
console.log("at() funciton");
console.log(at([], 0));
console.log(at([], 0));
console.log(at([1, 2, 3, 4], 0));
console.log(at([1, 2, 3, 4], 1));
console.log(at([1, 2, 3, 4], -1));
```

## `concat()`

```ts
/* concat() Tests: */

console.log(concat(null));
console.log(concat([1, 2, 3]));
console.log(concat([1, 2, 3], "hi"));
console.log(concat([1, 2, 3], 5, ["hello", "world"], [4, 5, 6]));
```

## `copyWithin()`

```ts
/* copyWithin() Tests: */

/* literal array usage: */
console.log(copyWithin([1, 2, 3, 4, 5], 0, 3));
console.log(copyWithin([1, 2, 3, 4, 5], 0, 3, 4));

/* Demonstarting mutability */
const array = [1, 2, 3, 4, 5];
console.log(array);
copyWithin(array, -2, -3, -1);
console.log(array);

/*  
    Sparse Array example - 
    empty slots are converted to undefined during shallow copy
*/
const array = [1, , 3];
console.log(array);
copyWithin(array, 2, 1, 2);
console.log(array);

/* MDN tests: */
const array1 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
console.log(copyWithin(array1, 0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
```

## `entries()`

```ts
/* entries() Tests: */

/* null array example */
console.log(entries(null));

/* empty array example */
console.log(entries([]));

/* Return Iterable with index example */
const array1 = ["a", "b", "c"];

const iterator1 = entries(array1);
console.log(iterator1);

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```

## `every()`

```ts
/* every() Tests: */

/* Null array test */
console.log(every(null, (currentValue) => currentValue % 2 === 0));

/* Empty array test - vacuously truth */
console.log(every([], (currentValue) => currentValue % 2 === 0));

/* Simple Test*/
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(every(array1, isBelowThreshold));
// Expected output: true

/* Testing size of all array elements */
function isBigEnough(element, index, array) {
	return element >= 10;
}
console.log(every([12, 5, 8, 130, 44], isBigEnough)); // false
console.log(every([12, 54, 18, 130, 44], isBigEnough)); // true

/* Test if array is subset of another array */
const isSubset = (array1, array2) =>
	every(array2, (element) => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

/* Test sparse arrays */
console.log(every([1, , 3], (x) => x !== undefined)); // true
console.log(every([2, , 2], (x) => x === 2)); // true

/* 
    Testing Modifying items 

    Loop runs for 3 iterations, but would
    have run 2 iterations without any modification

    1st iteration: [1,1,3,4][0] -> 1
    2nd iteration: [1,1,2,4][1] -> 1
    3rd iteration: [1,1,2,3][2] -> 2
*/
console.log("Testing changes in length of array");

const arr = [1, 2, 3, 4];
every(arr, (elem, index, arr) => {
	arr[index + 1]--;
	console.log(`[${arr}][${index}] -> ${elem}`);
	return elem < 2;
});

/* 
    Test appending items 

    Loop runs for 3 iterations, even after appending new items

    1st iteration: [1, 2, 3, new][0] -> 1
    2nd iteration: [1, 2, 3, new, new][1] -> 2
    3rd iteration: [1, 2, 3, new, new, new][2] -> 3
*/
console.log("Testing addition of items");

const arr = [1, 2, 3];
every(arr, (elem, index, arr) => {
	arr.push("new");
	console.log(`[${arr}][${index}] -> ${elem}`);
	return elem < 4;
});

/* 
    Test of deleting items
    Loop runs for 2 iterations only, as the remaining
    items are `pop()`ed off

    1st iteration: [1,2,3][0] -> 1
    2nd iteration: [1,2][1] -> 2
*/

const arr = [1, 2, 3, 4];
every(arr, (elem, index, arr) => {
	arr.pop();
	console.log(`[${arr}][${index}] -> ${elem}`);
	return elem < 4;
});
```