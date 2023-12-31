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

## `join()`

<details>
<summary> Show </summary>

```ts
/* join() Tests */

console.log("\nSimple array joins");
const elements = ["Fire", "Air", "Water"];
console.log("source array: ");
console.log(elements);

console.log(join(elements)); // Expected output: "Fire,Air,Water"

console.log(join(elements, "")); // Expected output: "FireAirWater"

console.log(join(elements, "-")); // Expected output: "Fire-Air-Water"

/* Nested arrays */
console.log("\nNested arrays");

const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log("source array: ");
console.log(matrix);

console.log(join(matrix)); // 1,2,3,4,5,6,7,8,9
console.log(join(matrix, ";")); // 1,2,3;4,5,6;7,8,9

/* Self occurrences and sparse  arrays */
console.log("\nArrays with self occurrences");

let arr = [];
arr.push(1, [3, arr, 4], 2);

console.log("source array: ");
console.log(arr);

console.log("Original join: ");
console.log(arr.join(";"));
console.log("My join: ");
console.log(join(arr, ";")); // 1;3,,4;2

const arr2 = [];
arr2.push(1, [3, [arr2, arr2, 22], 4], 2);
console.log("source array: ");
console.log(arr2);
console.log("Original join: ");
console.log(arr2.join(";"));
console.log("My join: ");
console.log(join(arr2, ";"));

console.log("\nSparse arrays");

console.log(join([1, , 3])); // '1,,3'

console.log(join([1, undefined, 3])); // '1,,3'
```

</details>

## `toString()`

<details>
<summary> Show </summary>

```ts
/* toString() Test */

/* no available join method */
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(toString(arr)); // [object Array]
/* Sparse array */
console.log(toString([1, , 3])); // '1,,3'
```

</details>

## `of()`

<details>
<summary> Show </summary>

```ts
/* of() Tests */
console.log(of(1)); // [1]
console.log(of(1, 2, 3)); // [1, 2, 3]
console.log(of(undefined)); // [undefined]
console.log(of(Object)); // [Number: 0] { length: 0 }
console.log(of("foo", 2, "bar", true)); // ["foo", 2, "bar", true]
console.log(of()); // []
```

</details>

## `map()`

<details>
<summary> Show </summary>

```ts
/* map() Test */

/* Test source array modification */
console.log("\nTest source array modification");
const numbers = [1, 4, 9];
console.log("source array");
console.log(numbers);
console.log("source array after mapping");
console.log(numbers);
console.log("modified array");
const roots = map(numbers, (num) => Math.sqrt(num));
console.log(roots); // root [1, 2, 3], numbers is still [1, 4, 9]

/* Reformatting objects in an array */
console.log("\nReformatting objects in an array");

const kvArray = [
	{ key: 1, value: 10 },
	{ key: 2, value: 20 },
	{ key: 3, value: 30 },
];
console.log("source array");
console.log(kvArray);
const reformattedArray = map(kvArray, ({ key, value }) => ({ [key]: value }));
console.log("source array after mapping");
console.log(kvArray);
console.log("modified array");
console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
/*
[
{ key: 1, value: 10 },
{ key: 2, value: 20 },
{ key: 3, value: 30 }
]
 */

/* Sparse arrays Test*/
console.log("\nSparse array test");

console.log(
	map([1, , 3], (x, index) => {
		console.log(`Visit ${index}`);
		return x * 2;
	})
);
/*
 Visit 0
 Visit 2
 [2, empty, 6]
*/

/* parseInt test */
console.log("\nparseInt test");
const strings = ["10", "10", "10"];
console.log("source array");
console.log(strings);
console.log(map(strings, parseInt)); // [10, NaN, 2]= (base10 of 10, 10 in base1, 10 in base2)

/* undefined test */
console.log("\nundefined test");

const numbers2 = [1, 2, 3, 4];
console.log("source array");
console.log(numbers2);

const filteredNumbers = map(numbers2, (num, index) => {
	if (index < 3) {
		return num;
	}
});
console.log("source array after mapping");
console.log(numbers2);
console.log("modified array");
console.log(filteredNumbers);

/*
 index goes from 0, so the filterNumbers are 1,2,3 and undefined.
 filteredNumbers is [1, 2, 3, undefined]
 numbers is still [1, 2, 3, 4]
*/
```

</details>

## `pop()`

<details>
<summary> Show </summary>

```ts
/* pop() Test */
console.log("\nPopping last element in array");

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
console.log("source array");
console.log(myFish);

const popped = myFish.pop();
console.log("source array after pop()");
console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log("popped element:");
console.log(popped); // 'sturgeon'

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log("\nsource array");
console.log(plants);

console.log("popped element:");
console.log(pop(plants)); // "tomato"

console.log("source array after pop()");
console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]
console.log("popped element:");
console.log(pop(plants));

console.log("source array after pop()");
console.log(plants); // ["broccoli", "cauliflower", "cabbage"]

/* Test supporting property descriptor's writiable / configurable settings */
console.log("\nproperty descriptor's writiable / configurable settings");

const names = ["Gilad", "Vlad", "Test", "I'm poppable!"];
Object.defineProperty(names, 2, {
	value: "Pinker",
	writable: false,
	configurable: false,
});
console.log("source array");
console.log(names);
console.log("index 2 is not writable and not configurable: ");
const namesDescriptor = Object.getOwnPropertyDescriptor(names, 2);
console.log("is writable? " + namesDescriptor.writable);
console.log("is configurable? " + namesDescriptor.configurable);

console.log("writable / configurable popped element:");
console.log(pop(names));

console.log("Pop not writable / configurable element:");
console.log(pop(names));

console.log("source array after pop()");
console.log(names);
```

</details>

## `push()`

<details>
<summary> Show </summary>

```ts
/* push() Tests */

console.log("\nPushing elements of array");

const animals = ["pigs", "goats", "sheep"];
console.log("source array");
console.log(animals);
let count = push(animals, "cows");
console.log("source array after pushing 1 element");
console.log(animals); // ["pigs", "goats", "sheep", "cows"]
console.log("array new length: " + count); //4

console.log("source array after pushing 3 elements");
console.log(animals); // ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
count = push(animals, "chickens", "cats", "dogs");
console.log("array new length: " + count);

const sports = ["soccer", "baseball"];
console.log("source array");
console.log(sports);
let total = push(sports, "football", "swimming");
console.log("source array after pushing 2 elements");
console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log("array new length: " + total);

/* Merging two arrays */
console.log("\nMerging two arrays");
const vegetables = ["parsnip", "potato"];
console.log("source array");
console.log(vegetables);

const moreVegs = ["celery", "beetroot"];
console.log("added array");
console.log(moreVegs);

total = push(vegetables, ...moreVegs);
console.log("source array after pushing added array");
console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
console.log("array new length: " + total);
```

</details>

## `reduce()`

<details>
<summary> Show </summary>

```ts
/* reduce() Tests */

// /* Test reduce() edge cases */

console.log("\nTesting reduce() edge cases");
console.log("callback is - get max value");
const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log(
	"\ncallback is invoked for each element in the array starting at index 0"
);
console.log("inital value: 50, array:");
console.log([1, 100]);
console.log("result:");
console.log(reduce([1, 100], getMax, 50)); // 100
console.log("inital value: 10, array:");
console.log([50]);
console.log("result:");
console.log(reduce([50], getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log("\ncallback is invoked once for element at index 1");
console.log("inital value: none, array:");
console.log([1, 100]);
console.log("result:");
console.log(reduce([1, 100], getMax)); // 100

// callback is not invoked - returns single value
console.log("\ncallback is not invoked - returns single value");
console.log("inital value: none, array:");
console.log([50]);
console.log("result:");
console.log(reduce([50], getMax)); // 50
console.log("inital value: 1, array:");
console.log([]);
console.log(reduce([], getMax, 1)); // 1

// empty array with specified inital value - throws TypeError
console.log("\nempty array with specified inital value - throws TypeError");
console.log("inital value: 1, array:");
console.log([]);
console.log("result :");
console.log("uncomment line to see thrown TypeError");
// reduce([], getMax); // TypeError

/* reduce() with or without inital value*/
console.log("\nreduce() with or without inital value");
console.log("callback is - addition of accumulator and currentValue");

const reduceArray = [15, 16, 17, 18, 19];
console.log("source array: ");
console.log(reduceArray);

function reducer(accumulator, currentValue, index) {
	const returns = accumulator + currentValue;
	console.log(
		`accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
	);
	return returns;
}
console.log("\nreduce() without inital value");
reduceArray.reduce(reducer);

/* reduce() with inital value*/
console.log("\nreduce() with inital value 10 ");
console.log(
	reduce(
		reduceArray,
		(accumulator, currentValue) => accumulator + currentValue,
		10
	)
);

/* Function sequential piping */
console.log("\nFunction sequential piping");
console.log(
	"callback is - creating a function contaning ordered sequence of functions"
);

const pipe =
	(...functions) =>
	(initialValue) =>
		reduce(functions, (acc, fn) => fn(acc), initialValue);

// Building blocks to use for composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
console.log(multiply6(6)); // 36
console.log(multiply9(9)); // 81
console.log(multiply16(16)); // 256
console.log(multiply24(10)); // 240

/* Test sparse arrays */
console.log("\nSparse arrays test");

console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

/* Sum of values in an object array */
/* 
Not working, when calling reduce as a standalone function,
it does not detect the needed type, and therefore accumulator + currentValue.x
behave like... object addition? 


console.log("\nSum of values in an object array");

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
console.log("source array: ");
console.log(objects);

const sum = reduce(
	objects,
	(accumulator, currentValue) => accumulator + currentValue.x,
	0
);
// const sum = objects.reduce(
// 	(accumulator, currentValue) => accumulator + currentValue.x,
// 	0
// );
console.log("result :");
console.log(sum); // 6
*/
```

</details>

## `reduce()`

<details>
<summary> Show </summary>

```ts
/* reduceRight() Test*/
console.log("\nTesting reduceRight() edge cases");

console.log("\nTesting reduce() edge cases");
console.log("callback is - add currentValue to accumulator  ");
const getMax = (a, b) => a + b;

// callback is invoked for each element in the array starting at index 0
console.log(
	"\ncallback is invoked for each element in the array starting at index 0"
);
console.log("inital value: 50, array:");
console.log([1, 100]);
console.log("result:");
console.log(reduceRight([1, 100], getMax, 50)); // 51
console.log("inital value: 10, array:");
console.log([50]);
console.log("result:");
console.log(reduceRight([50], getMax, 10)); // 60

// callback is invoked once for element at index 1
console.log("\ncallback is invoked once for element at index 1");
console.log("inital value: none, array:");
console.log([1, 100]);
console.log("result:");
console.log(reduceRight([1, 100], getMax)); // 101

// callback is not invoked - returns single value
console.log("\ncallback is not invoked - returns single value");
console.log("inital value: none, array:");
console.log([50]);
console.log("result:");
console.log(reduceRight([50], getMax)); // 50
console.log("inital value: 1, array:");
console.log([]);
console.log(reduceRight([], getMax, 1)); // 1

// empty array with specified inital value - throws TypeError
console.log("\nempty array with specified inital value - throws TypeError");
console.log("inital value: 1, array:");
console.log([]);
console.log("result :");
console.log("uncomment line to see thrown TypeError");
// reduceRight([], getMax); // TypeError
```

</details>

## `reverse()`

<details>
<summary> Show </summary>

```ts
/* reverse() Test */

console.log("\nMutability Test:");
const array1 = ["one", "two", "three"];
console.log("array1:", array1); // ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed); // ["three", "two", "one"]

// Careful: reverse is mutable -- it changes the original array.
console.log("array1:", array1); // ["three", "two", "one"]

console.log("\nReverse sparse array - keep empty elements:");
console.log(reverse([1, , 3])); // [3, empty, 1]
console.log(reverse([1, , 3, 4])); // [4, 3, empty, 1]
```

</details>

## `toReversed()`

<details>
<summary> Show </summary>

```ts
/* toReversed() Test */

console.log("\nMutability test:");
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = toReversed(items);
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

console.log("\nSparse arrays test:");

console.log(toReversed([1, , 3])); // [3, undefined, 1]
console.log(toReversed([1, , 3, 4])); // [4, 3, undefined, 1]
```

</details>

## `shift()`

<details>
<summary> Show </summary>

```ts
/* shift() Test */

/* Mutability Test */
console.log("\nMutability test:");
const shiftedArray1 = [1, 2, 3];

const firstElement = shift(shiftedArray1);
console.log(shiftedArray1); //  [2, 3]
console.log(firstElement); //  1

/* Sparse arrays Test */
console.log("\nSparse array test:");
const shiftedArray2 = [1, 2, , , 5];
const firstElement2 = shift(shiftedArray2);
console.log(shiftedArray2); //  [2, undefined, undefined, 5]
console.log(firstElement2); //  1

/* loop Test */
console.log("\nloop test - loop untill all elements removed");

const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];
console.log(names);

let i: any;
while (typeof (i = shift(names)) !== "undefined") {
	console.log(i);
} // Andrew, Tyrone, Paul, Maria, Gayatri
console.log(names);
```

</details>

## `unshift()`

<details>
<summary> Show </summary>

```ts
/* unshift() Test*/
console.log("\nTesting simple unshifts");
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr = [4, 5, 6];
console.log(unshift(arr, 1)); // 4
console.log(unshift(arr, 2)); // 5
console.log(unshift(arr, 3)); // 6
console.log(arr); // [3, 2, 1, 4, 5, 6]

console.log("\nMore unshifting:");
arr = [1, 2];
console.log("source array:");
console.log(arr);

// result of the call is 3, which is the new array length
console.log("\nunshift value: 0 result:");
console.log(unshift(arr, 0)); // 3
console.log("source array after last unshift:");
console.log(arr); // [0, 1, 2]

console.log("\nunshift values: -2,-1 result:");
console.log(unshift(arr, -2, -1)); // 5
console.log("source array after last unshift:");
console.log(arr); // [-2, -1, 0, 1, 2]

console.log("\nunshift value: [-4,-3] result:");
console.log(unshift(arr, [-4, -3])); // 6
console.log("source array after last unshift:");
console.log(arr);
[[-4, -3], -2, -1, 0, 1, 2];

console.log("\nunshift value: [-7, -6], [-5] result:");
console.log(unshift(arr, [-7, -6], [-5])); // 8
console.log("source array after last unshift:");
console.log(arr); // [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]

/* Sparse arrays test - converts empty to undefine*/
console.log("\nSparse array testing - convert empty to undefine");

arr = [1, , 2, , , 3, 4];
console.log("source array:");
console.log(arr);

console.log("\nunshift value: 5 result:");
console.log(unshift(arr, 5)); // 8
console.log("source array after last unshift:");
console.log(arr); // [5, 1, undefined, 2, undefined, undefined, 3, 4]
```

</details>

## `some()`

<details>
<summary> Show </summary>

```ts
/* some() Tests */

console.log("\nSimple Tests");

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(some(array, even)); //  true

console.log("\nTesting value of array elements - if has bigger than 10");
function isBiggerThan10(element, index, array) {
	return element > 10;
}
console.log(some([2, 5, 8, 1, 4], isBiggerThan10)); // false
console.log(some([12, 5, 8, 1, 4], isBiggerThan10)); // true

// Test If value exists in array
console.log("\nTest If value exists in array");
const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
	return some(arr, (arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits, "kela")); // false
console.log(checkAvailability(fruits, "banana")); // true

// Converting any value to boolean
console.log("\nConverting any value to boolean");
const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
	if (typeof value === "string") {
		value = value.toLowerCase().trim();
	}

	return some(TRUTHY_VALUES, (t) => t === value);
}

console.log(getBoolean(false)); // false
console.log(getBoolean("false")); // false
console.log(getBoolean(1)); // true
console.log(getBoolean("true")); // true

// Testing sparse arrays
console.log("\nTesting sparse arrays");
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
```

</details>

## `slice()`

<details>
<summary> Show </summary>

```ts
/* slice() Tests */

console.log("\nSlicing Tests:");
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log("source array:");
console.log(animals);

console.log("slice from:2 to: 1 - end before start, nothing is slices");
console.log(slice(animals, 2, 1));

console.log("\nslice from:2 to: 1");
console.log(slice(animals, 2)); // ["camel", "duck", "elephant"]

console.log("\nslice from:2 to: 4");
console.log(slice(animals, 2, 4)); // ["camel", "duck"]

console.log("\nslice from:1 to: 5");
console.log(slice(animals, 1, 5)); // ["bison", "camel", "duck", "elephant"]

console.log("\nslice from:-2");
console.log(slice(animals, -2)); // ["duck", "elephant"]

console.log("\nslice from:2 to: -1");
console.log(slice(animals, 2, -1)); // ["camel", "duck"]

console.log("\nslice without start/end");
console.log(slice(animals)); // ["ant", "bison", "camel", "duck", "elephant"]

// Using slice, create newCar from myCar.
console.log("\ncreate newCar from myCar");

const myHonda = {
	color: "red",
	wheels: 4,
	engine: { cylinders: 4, size: 2.2 },
};

const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = slice(myCar, 0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
/*
newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
*/

/* Test sparse arrays */
console.log("\nTest sparse arrays");

console.log(slice([1, 2, , 4, 5], 1, 4)); // [2, empty, 4]
```

</details>

## `values()`

<details>
<summary> Show </summary>

```ts
/* values() Tests */

const arr = ["a", "b", "c", "d", "e"];
const iterator = values(arr);
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"

for (const element of values([, "a"])) {
	console.log(element);
}
// undefined
// 'a'
```

</details>

## `keys()`

<details>
<summary> Show </summary>

```ts
/* keys() Tests */
const array1 = ["a", "b", "c"];
const iterator = keys(array1);

for (const key of iterator) {
	console.log(key);
}
/*
 Expected output: 0
 Expected output: 1
 Expected output: 2
*/

/* Testing sparse arrays - not ignoring empty elements*/
const arr = ["a", , "c"];
const denseKeys = [...arr.keys()];
console.log(denseKeys); // [0, 1, 2]
```

</details>
