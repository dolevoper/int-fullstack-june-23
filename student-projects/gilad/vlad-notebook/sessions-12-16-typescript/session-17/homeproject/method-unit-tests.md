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
console.log(every(null, (currentValue) => currentValue % 2 === 0));

/*Empty array test - vacuously truth */
console.log(every([], (currentValue) => currentValue % 2 === 0));

/* Simple Test */
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
