# Methods Unit Tests

for your utmost convenience ❤️

# TODO - Add expected results

## `at()`

<details>
<summary>Show</summary>

```ts
/* at() Tests: */

console.log("at() funciton");
console.log(at([], 0));
console.log(at([], 0));
console.log(at([1, 2, 3, 4], 0));
console.log(at([1, 2, 3, 4], 1));
console.log(at([1, 2, 3, 4], -1));
```

</details>

## `concat()`

<details>
<summary>Show</summary>

```ts
/* concat() Tests: */

console.log(concat(null));
console.log(concat([1, 2, 3]));
console.log(concat([1, 2, 3], "hi"));
console.log(concat([1, 2, 3], 5, ["hello", "world"], [4, 5, 6]));
```

</details>

## `copyWithin()`

<details>
<summary>Show</summary>

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

/*  Sparse Array example */
const array = [1, , 3];
console.log(array); // [1, empty, 3]
copyWithin(array, 2, 1, 2);
console.log(array); // [1, empty, undefined]

/* MDN tests: */
const array1 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
console.log(copyWithin(array1, 0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
```

</details>

## `entries()`

<details>
<summary>Show</summary>

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

</details>

## `every()`

<details>
<summary>Show</summary>

```ts
/* every() Tests: */

/* Null array test */
console.log(every(null, (currentValue) => currentValue % 2 === 0)); // null

/*Empty array test - vacuously truth */
console.log(every([], (currentValue) => currentValue % 2 === 0)); // true

/* Simple Test */
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(every(array1, isBelowThreshold)); // Expected output: true

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

const arr1 = [1, 2, 3, 4];
every(arr1, (elem, index, arr) => {
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

const arr2 = [1, 2, 3];
every(arr2, (elem, index, arr) => {
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

const arr3 = [1, 2, 3, 4];
every(arr3, (elem, index, arr) => {
	arr.pop();
	console.log(`[${arr}][${index}] -> ${elem}`);
	return elem < 4;
});
```

</details>

## `fill()`

<details>
<summary>Show</summary>

```ts
/* fill() tests */

/* Mutability tests */
const array = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(fill(array, 0, 2, 4)); // [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(fill(array, 5, 1)); // [1, 5, 5, 5]

// Fill everything with 6
console.log(fill(array, 6)); // [6, 6, 6, 6]

// Check original array
console.log(array);

/* Different usecases tests */
console.log(fill([1, 2, 3], 4)); // [4, 4, 4]
console.log(fill([1, 2, 3], 4, 1)); // [1, 4, 4]
console.log(fill([1, 2, 3], 4, 1, 2)); // [1, 4, 3]
console.log(fill([1, 2, 3], 4, 1, 1)); // [1, 2, 3]
console.log(fill([1, 2, 3], 4, 3, 3)); // [1, 2, 3]
console.log(fill([1, 2, 3], 4, -3, -2)); // [4, 2, 3]
console.log(fill([1, 2, 3], 4, NaN, NaN)); // [1, 2, 3]
console.log(fill([1, 2, 3], 4, 3, 5)); // [1, 2, 3]
console.log(fill(Array(3), 4)); // [4, 4, 4]

/* Fill with objects test */
// A single object, referenced by each slot of the array:
const arr1 = fill(Array(3), {}); // [{}, {}, {}]
arr1[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr1);

/* Create a matrix full of 1 */
const arr2 = new Array(3);
for (let i = 0; i < arr2.length; i++) {
	arr2[i] = fill(new Array(4), 1); // Creating an array of size 4 and filled of 1
}
arr2[0][0] = 10;
console.log(arr2[0][0]); // 10
console.log(arr2[1][0]); // 1
console.log(arr2[2][0]); // 1
console.log(arr2);

/* Populate an empty array */
const tempMicrowaves = fill(Array(5), "microwave", 0);
console.log(tempMicrowaves);
```

</details>

## `filter()`

<details>
<summary>Show</summary>

```ts
/* filter() Tests */

/* Simple test - is big enough */
function isBigEnough(value) {
	return value >= 10;
}

console.log(filter([12, 5, 8, 130, 44], isBigEnough)); // filtered is [12, 130, 44]

/* find all prime numbers in an array */
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
	for (let i = 2; num > i; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num > 1;
}

console.log(filter(array, isPrime)); // [2, 3, 5, 7, 11, 13]

/* Filtering invalid entries from JSON */
const arr = [
	{ id: 15 },
	{ id: -1 },
	{ id: 0 },
	{ id: 3 },
	{ id: 12.2 },
	{},
	{ id: null },
	{ id: NaN },
	{ id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
	if (Number.isFinite(item.id) && item.id !== 0) {
		return true;
	}
	invalidEntries++;
	return false;
}

const arrByID = filter(arr, filterByID);

console.log("Filtered Array\n", arrByID);

// Filtered Array
[{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }];

console.log("Number of Invalid Entries =", invalidEntries);
// Number of Invalid Entries = 5

/* Searching in array */

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

//Filter array items based on search criteria (query)
function filterItems(arr, query) {
	return filter(arr, (el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']

/* Skipping sparse elements*/
console.log(filter([1, , undefined], (x) => x === undefined)); // [undefined]
console.log(filter([1, , undefined], (x) => x !== 2)); // [1, undefined]

/* Modifying initial array - appending, deleting */
// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = filter(words, (word, index, arr) => {
	arr[index + 1] += " extra";
	return word.length < 6;
});

console.log(modifiedWords); // ["spray"]
// Notice there are three words below length 6, but since they've been modified one is returned

/* Appending new words */
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = filter(words, (word, index, arr) => {
	arr.push("new");
	return word.length < 6;
});

console.log(appendedWords); // ["spray" ,"limit" ,"elite"]
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6

/* Deleting words */
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = filter(words, (word, index, arr) => {
	arr.pop();
	return word.length < 6;
});

console.log(deleteWords); // ["spray" ,"limit"]
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
```

</details>

## `find()`

<details>
<summary>Show</summary>

```ts
/* find() Tests: */

/* Find the first number that's greater than 10 */
const array1 = [5, 12, 8, 130, 44];

const found = find(array1, (element) => element > 10);

console.log(found); // Expected output: 12

/* Find an object in array by one of its properties */
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "bananas", quantity: 0 },
	{ name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
	return fruit.name === "cherries";
}

console.log(find(inventory, isCherries)); // { name: 'cherries', quantity: 5 }

/* Using arrow function and destructuring */

const result = find(inventory, ({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

/* Find a prime number in array */
function isPrime(element, index, array) {
	let start = 2;
	while (start <= Math.sqrt(element)) {
		if (element % start++ < 1) {
			return false;
		}
	}
	return element > 1;
}

console.log(find([4, 6, 8, 12], isPrime)); // undefined, not found
console.log(find([4, 5, 8, 12], isPrime)); // 5

/* Testing sparse arrays */
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

/* Shows all indexes, not just those with assigned values */
find(array, (value, index) => {
	console.log("Visited index", index, "with value", value);
});
/* 
Visited index 0 with value 0
Visited index 1 with value 1
Visited index 2 with value undefined
Visited index 3 with value undefined
Visited index 4 with value undefined
Visited index 5 with value 5
Visited index 6 with value 6
*/

/* Shows all indexes, including deleted */
find(array, (value, index) => {
	// Delete element 5 on first iteration
	if (index === 0) {
		console.log("Deleting array[5] with value", array[5]);
		delete array[5];
	}
	// Element 5 is still visited even though deleted
	console.log("Visited index", index, "with value", value);
});
/*
 Deleting array[5] with value 5
 Visited index 0 with value 0
 Visited index 1 with value 1
 Visited index 2 with value undefined
 Visited index 3 with value undefined
 Visited index 4 with value undefined
 Visited index 5 with value undefined
 Visited index 6 with value 6 
 */
```

</details>

## `findLast()`

<details>
<summary> Show </summary>

```ts
/* findLast() Tests */

/* find last item that is low in quantity */
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "bananas", quantity: 0 },
	{ name: "fish", quantity: 1 },
	{ name: "cherries", quantity: 5 },
];

// return true inventory stock is low
function isNotEnough(item) {
	return item.quantity < 2;
}

/* Test sparse arrays */

console.log(findLast(inventory, isNotEnough)); // { name: "fish", quantity: 1 }
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
findLast(array, (value, index) => {
	console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0

// Shows all indexes, including deleted
findLast(array, (value, index) => {
	// Delete element 5 on first iteration
	if (index === 6) {
		console.log(`Deleting array[5] with value ${array[5]}`);
		delete array[5];
	}
	// Element 5 is still visited even though deleted
	console.log(`Visited index ${index} with value ${value}`);
});
// Deleting array[5] with value 5
// Visited index 6 with value 6
// Visited index 5 with value undefined
// Visited index 4 with value undefined
// Visited index 3 with value undefined
// Visited index 2 with value undefined
// Visited index 1 with value 1
// Visited index 0 with value 0
```

</details>

## `findIndex()`

<details>
<summary> Show </summary>

```ts
/* findIndex() Tests */

/* Simple test - get index of first number larger than 13 */
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;
console.log(findIndex(array1, isLargeNumber)); // Expected output: 3

/* Getting index of first prime number */

function isPrime(element) {
	if (element % 2 === 0 || element < 2) {
		return false;
	}
	for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
		if (element % factor === 0) {
			return false;
		}
	}
	return true;
}

console.log(findIndex([4, 6, 8, 9, 12], isPrime)); // -1, not found
console.log(findIndex([4, 6, 7, 9, 12], isPrime)); // 2 (array[2] is 7)

/* Test sparse arrays */
console.log(findIndex([1, , 3], (x) => x === undefined)); // 1
```

</details>

## `findLastIndex()`

<details>
<summary> Show </summary>

```ts
/* findLastIndex() Tests */

/* Simple test - find last element larger than 45 */
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;
console.log(findLastIndex(array1, isLargeNumber)); // Expected output: 3 Index of element with value: 130

/* Find last prime number */
function isPrime(element) {
	if (element % 2 === 0 || element < 2) {
		return false;
	}
	for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
		if (element % factor === 0) {
			return false;
		}
	}
	return true;
}

console.log(findLastIndex([4, 6, 8, 12], isPrime)); // -1, not found
console.log(findLastIndex([4, 5, 7, 8, 9, 11, 12], isPrime)); // 5

/* Test sparse arrays */

console.log(findLastIndex([1, , 3], (x) => x === undefined)); // 1
```

</details>

## `flat()`

<details>
<summary> Show </summary>

```ts
/* flat() Tests*/

/* Test 1 depth array with depth emitted -  defaults to 1 depth*/
console.log("Testing 1 deep array with depth emitted");
const array = [1, 2, ["hello", "world"], 5];
console.log("Original flat()");
console.log(array.flat());
console.log("Myflat()");
console.log(flat(array)); // [1, 2, 'hello', 'world', 5]

/* Test array of depth 3 */
console.log("\nTesting 3 deep array");
const array2 = [1, 2, [[[1, 2, 3, 4], false], "world"], 5];
console.log("source array:");
console.log(array2); // [1, 2, Array(2), 5]

console.log("\nwith depth omitted");
console.log("Original flat()");
console.log(array2.flat());
console.log("Myflat()");
console.log(flat(array2)); // [1, 2, Array(2), 'world', 5]

// flatten to depth 2
console.log("\nwith flatten-depth 2");
console.log("Original flat()");
console.log(array2.flat(2));
console.log("Myflat()");
console.log(flat(array2, 2)); // [1, 2, Array(4), false, 'world', 5]

// flatten to depth 3
console.log("\nwith flatten-depth 3");
console.log("Original flat()");
console.log(array2.flat(3));
console.log("Myflat()");
console.log(flat(array2, 3)); // [1, 2, 1, 2, 3, 4, false, 'world', 5]

// with negative depth - do nothing
console.log("\nwith negative depth");
console.log("Original flat()");
console.log(array2.flat(-5));
console.log("Myflat()");
console.log(flat(array2, -5)); // do nothing [1, 2, Array(2), 5]

// flatten to Infinity depth - stops when nothing left to flatten
console.log("\nwith Infinity depth");
console.log("Original flat()");
console.log(array2.flat(Infinity));
console.log("Myflat()");
console.log(flat(array2, Infinity)); // [1, 2, 1, 2, 3, 4, false, 'world', 5]

/* MDN flat() Tests - Flattening nested arrays */
console.log("\nMDN flat() Tests");

const arr1 = [1, 2, [3, 4]];
console.log(flat(arr1)); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(flat(arr2)); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(flat(arr3, 2)); // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat(arr4, Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* Test sparse arrays */
console.log("\nSparse array tests");

const arr5 = [1, 2, , 4, 5];
console.log(flat(arr5)); // [1, 2, 4, 5]

const arr6 = [1, , 3, ["a", , "c"]];
console.log(flat(arr6)); // [ 1, 3, "a", "c" ]

const arr7 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(flat(arr7)); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(flat(arr7, 2)); // [ 1, 3, "a", "d", "e"]
```

</details>

## `flatMap()`

<details>
<summary> Show </summary>

```ts
/* flatMap() Tests */

console.log("\nflatMap() Tests");

/* Simple 1-depth array with mapping*/

console.log("\n1-depth array test:");
const arr1 = [1, 2, 1];
console.log("source array: ");
console.log(arr1);

// flatten and map 2 to [2,2] array
console.log("map 2 to [2,2] and flatten");
console.log("Original flatMap()");
const arr1Result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(arr1Result); // Expected output: Array [1, 2, 2, 1]

console.log("My flatMap()");
const arr1Result2 = flatMap(arr1, (num) => (num === 2 ? [2, 2] : 1));
console.log(arr1Result2); // Expected output: Array [1, 2, 2, 1]

/* 3-depth array with mapping */
console.log("\n3-depth array test:");

const depth3Array = [1, [1, [2, 2]], 1];
console.log("source array: ");
console.log(depth3Array);

console.log("map 2 to [2,2] and flatten one level");
console.log("Original flatMap():");
const depth3Arrayresult = depth3Array.flatMap((num) =>
	num === 2 ? [2, 2] : 1
);
console.log(depth3Arrayresult); // Expected output:

console.log("My flatMap():");
const depth3Arrayresult2 = flatMap(depth3Array, (num) =>
	num === 2 ? [2, 2] : 1
);
console.log(depth3Arrayresult2); // Expected output:

/* Comparison with original flatMap funciton */
console.log("\nComparison with original map() function");
const arr2 = [1, 2, 3, 4];
console.log("source array: ");
console.log(arr2);

// original flatMap
console.log("Original flatMap() result");
console.log(arr2.flatMap((x) => [x * 2])); // [[2], [4], [6], [8]]

// my map and flatten
console.log("My flatMap() result");
console.log(flatMap(arr2, (x) => [x * 2])); // [2, 4, 6, 8]

// 2-depth array test - only one level is flattened
console.log("\n2-depth array test - Only one level flattened");
console.log(flatMap(arr2, (x) => [[x * 2]])); // [[2], [4], [6], [8]]

/* Generate a list of words from a sentence*/
console.log("\nGenerate a list of words from a sentence");
const arr3 = ["it's Sunny in", "", "California"];
console.log("source array:");
console.log(arr3);

console.log("using original map() only");
console.log(arr3.map((x) => x.split(" "))); // [["it's","Sunny","in"],[""],["California"]]

console.log("using original flatMap()");
console.log(arr3.flatMap((x) => x.split(" "))); // ["it's","Sunny","in", "", "California"]
console.log("using my flatMap()");
console.log(flatMap(arr3, (x) => x.split(" "))); // ["it's","Sunny","in", "", "California"]

/* Pre-allocate and explicitly iterate */
console.log("\nPre-allocate and explicitly iterate");

const arr4 = [1, 2, 3, 4];
console.log("source array");
console.log(arr4);

console.log("Original flatMap:");
console.log(arr4.flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]
console.log("Using my flatMap:");
console.log(flatMap(arr4, (x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]

// is equivalent to
/*
const n = arr4.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
	const x = arr4[i];
	acc[i * 2] = x;
	acc[i * 2 + 1] = x * 2;
}
*/

/* Adding and removing items during map() */
console.log("\nAdding and removing items during map()");
console.log(
	"remove all negatives and split the odd numbers into an even number + 1"
);

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

console.log("source array: ");
console.log(a);

console.log("Original flatMap()");
const aresult1 = a.flatMap((n) => {
	if (n < 0) {
		return [];
	}
	return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(aresult1);

console.log("My flatMap()");
const aresult2 = flatMap(a, (n) => {
	if (n < 0) {
		return [];
	}
	return n % 2 === 0 ? [n] : [n - 1, 1];
});

console.log(aresult2); // [4, 1, 4, 20, 16, 1, 18]

/* Test sparse arrays */
console.log("\nTest sparse arrays ");
const sparse1 = [1, 2, , 4, 5];
console.log("source array:");
console.log(sparse1);
console.log("Original flatMap()");
console.log(sparse1.flatMap((x) => [x, x * 2]));
console.log("My flatMap()");
console.log(flatMap(sparse1, (x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]

const sparse2 = [1, 2, 3, 4];
console.log("source array:");
console.log(sparse2);

console.log("Original flatMap()");
console.log(sparse2.flatMap((x) => [, x * 2])); // [2, 4, 6, 8]

console.log("My flatMap()");
console.log(flatMap(sparse2, (x) => [, x * 2])); // [2, 4, 6, 8]
```

</details>

## `forEach()`

<details>
<summary> Show </summary>

```ts
/* forEach() Test */

/* Testing sparse arrays */
console.log("\nTesting sparse arrays");

const arraySparse = [1, 3 /* empty */, , 7];
console.log("source sparse array:");
console.log(arraySparse);

let numCallbackRuns = 0;

forEach(arraySparse, (element) => {
	console.log({ element });
	numCallbackRuns++;
});

console.log({ numCallbackRuns });
/* Expected:
 { element: 1 }
 { element: 3 }
 { element: 7 }
 { numCallbackRuns: 3 }
*/

/* Converting a for loop to forEach */
console.log("\nMimic for loop (it IS a for loop...) ");
const items = ["item1", "item2", "item3"];
const copyItems = [];

forEach(items, (item) => {
	copyItems.push(item);
});
console.log(copyItems);

/* Printing contents of array  */
console.log("\nPrinting contents of array");
const arrayWithSparse = [2, 5 /* EMPTY*/, , 9];
console.log("source array:");
console.log(arrayWithSparse);

const logArrayElements = (element, index /*, array */) => {
	console.log(`a[${index}] = ${element}`);
};

// index 2 is skipped, since there is no item at
// that position in the array.
forEach(arrayWithSparse, logArrayElements);
/* Expected:
 Logs:
 a[0] = 2
 a[1] = 5
 a[3] = 9
*/

/* Copying an object */
console.log("\nCopying an object");

const copy = (obj) => {
	const copy = Object.create(Object.getPrototypeOf(obj));
	const propNames = Object.getOwnPropertyNames(obj);
	forEach(propNames, (name) => {
		const desc = Object.getOwnPropertyDescriptor(obj, name);
		Object.defineProperty(copy, name, desc);
	});
	return copy;
};

const obj1 = { a: 1, b: 2, c: { name: "gilad", last: "pinker" } };
console.log("Original object 1");
console.log(obj1);
const obj2 = copy(obj1); // obj2 looks like obj1 now
console.log("Copied object 2");
console.log(obj2);

/* Modifying array during itteration */
console.log("\nModifying array during itteration");

const words = ["one", "two", "three", "four"];
console.log("source array:");
console.log(words);

console.log("Shift array when value is 'two'");
forEach(words, (word) => {
	console.log(word);
	if (word === "two") {
		words.shift(); //'one' will delete from array
	}
}); // one // two // four

console.log(words); // ['two', 'three', 'four']

/* flatten array 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️*/
console.log("\nFlatten an array");

const flatten = (arr) => {
	const result = [];
	forEach(arr, (item) => {
		if (Array.isArray(item)) {
			result.push(...flatten(item));
		} else {
			result.push(item);
		}
	});
	return result;
};

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log("source array");
console.log(nested);

console.log("flattened result");
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

</details>

## `includes()`

<details>
<summary> Show </summary>

```ts
/* includes() Test: */
console.log("\nTest includes()");

console.log([1, 2, 3] + " includes 2?");
console.log("Original: " + [1, 2, 3].includes(2));
console.log("My: " + includes([1, 2, 3], 2));

console.log([1, 2, 3] + " includes 4?");
console.log("Original: " + [1, 2, 3].includes(4));
console.log("My: " + includes([1, 2, 3], 4));

console.log([1, 2, 3] + " includes 3 at index 3?");
console.log("Original: " + [1, 2, 3].includes(3, 3));
console.log("My: " + includes([1, 2, 3], 3, 3));

console.log([1, 2, 3] + " includes 3 at index -1?");
console.log("Original: " + [1, 2, 3].includes(3, -1));
console.log("My: " + includes([1, 2, 3], 3, -1));

console.log([1, 2, NaN] + " includes NaN?");
console.log("Original: " + [1, 2, 3].includes(NaN));
console.log("My: " + includes([1, 2, 3], NaN));

console.log(["1", "2", "3"]);
console.log(" includes 3?");
console.log("Original: " + ["1", "2", "3"].includes(3));
console.log("My: " + includes(["1", "2", "3"], 3));

/* fromIndex is greater than or equal to the array length*/
console.log("\nTest fromIndex");
const includesArray1 = ["a", "b", "c"];

console.log("source array:");
console.log(includesArray1);
console.log("fromIndex 3"); // false
console.log("Original: " + includesArray1.includes("c", 3));
console.log("My: " + includes(includesArray1, "c", 3));

console.log("fromIndex 100");
console.log("Original: " + includesArray1.includes("c", 100)); // false
console.log("My: " + includes(includesArray1, "c", 100));

/* fromIndex negative test*/
console.log("\nTest Negative fromIndex");

console.log("search a fromIndex -100");
console.log("Original: " + includesArray1.includes("a", -100)); // true
console.log("My: " + includes(includesArray1, "a", -100));
console.log("search b fromIndex -100");
console.log("Original: " + includesArray1.includes("b", -100)); // true
console.log("My: " + includes(includesArray1, "b", -100));
console.log("search c fromIndex -100");
console.log("Original: " + includesArray1.includes("c", -100)); // true
console.log("My: " + includes(includesArray1, "c", -100));
console.log("search a fromIndex -2");
console.log("Original: " + includesArray1.includes("a", -2)); // false
console.log("My: " + includes(includesArray1, "a", -2));

/* Sparse arrays test */
console.log("source array:");
console.log([1, , 3]);
console.log("Original: " + [1, , 3].includes(undefined)); // true
console.log("My: " + includes([1, , 3], undefined));
```

</details>

## `indexOf()`

<details>
<summary> Show </summary>

```ts
/* indexOf() Tests */

console.log("\nSimple tests");
let indexOfArray = [2, 9, 9];
console.log(indexOf(indexOfArray, 2)); // 0
console.log(indexOf(indexOfArray, 7)); // -1
console.log(indexOf(indexOfArray, 9, 2)); // 2
console.log(indexOf(indexOfArray, 2, -1)); // -1
console.log(indexOf(indexOfArray, 2, -3)); // 0

/* Can't use indexOf to search NaN */
console.log("\nCan't use NaN");

indexOfArray = [NaN];
console.log(indexOf(indexOfArray, NaN)); // -1
console.log(indexOf([1, 2, 3], NaN)); // -1

/* Find all occurrences of an element */
console.log("\nSearch all occurrences of an element");

const indices = [];
const indexOfArray2 = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = indexOf(indexOfArray2, element);
while (idx !== -1) {
	indices.push(idx);
	idx = indexOf(indexOfArray2, element, idx + 1);
}
console.log(indices); // [0, 2, 4]

/* Test sparse arrays */
console.log("\nTest sparse arrays");

console.log(indexOf([1, , 3], undefined)); // -1

/* Find an element in array, if not, add it */

function updateVegetablesCollection(veggies, veggie) {
	if (indexOf(veggies, veggie) === -1) {
		veggies.push(veggie);
		console.log(`New veggies collection is: ${veggies}`);
	} else {
		console.log(`${veggie} already exists in the veggies collection.`);
	}
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];
console.log(veggies);

updateVegetablesCollection(veggies, "spinach");
console.log(veggies);
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
console.log(veggies);
// spinach already exists in the veggies collection.
```

</details>

## `lastIndexOf()`

<details>
<summary> Show </summary>

```ts
/* lastIndexOf() Tests */

console.log("\nSimple Tests");
const numbers = [2, 5, 9, 2];
console.log(lastIndexOf(numbers, 2)); // 3
console.log(lastIndexOf(numbers, 7)); // -1
console.log(lastIndexOf(numbers, 2, 3)); // 3
console.log(lastIndexOf(numbers, 2, 2)); // 0
console.log(lastIndexOf(numbers, 2, -2)); // 0
console.log(lastIndexOf(numbers, 2, -1)); // 3

/* NaN Tests */
console.log("\nNaN Tests");
const arrayNaN = [NaN];
console.log(lastIndexOf(arrayNaN, NaN)); // -1

/* find all occurrences of an element*/
console.log("\nfind all occurrences of an element backwards");

const indices = [];
const lastIndexOfArray = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = lastIndexOf(lastIndexOfArray, element);
while (idx !== -1) {
	indices.push(idx);
	idx = idx > 0 ? lastIndexOf(lastIndexOfArray, element, idx - 1) : -1;
}
console.log(indices); // [4, 2, 0]

/* Sparse arrays test */
console.log("\nSparse arrays test");

console.log(lastIndexOf([1, , 3], undefined)); // -1
```

</details>
