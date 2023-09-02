function normalizeNegativeIndex(index: number, arrayLength: number) {
	return index < 0 ? (index < -arrayLength ? 0 : arrayLength + index) : index;
}

function normalizeNegativeEndIndex(
	end: number,
	start: number,
	arrayLength: number
) {
	end = normalizeNegativeIndex(end, arrayLength);
	end = end > arrayLength ? arrayLength : end;

	if (end <= start) return null;
	else return end;
}

function at(array: any[], index: number) {
	if (!array) return null;

	if (index >= 0) return array[index];
	else return array[array.length + index];
}

function concat(array: any[], ...arrays: any[]) {
	if (!array) return null;

	const newArray = [...array];

	if (arrays.length === 0) return newArray;

	let addedArray: any;
	let totalCellsAdded = newArray.length;

	for (let currentArray = 0; currentArray < arrays.length; currentArray++) {
		addedArray = arrays[currentArray];
		addedArray = Array.isArray(addedArray) ? addedArray : [addedArray];

		for (let currentCell = 0; currentCell < addedArray.length; currentCell++) {
			newArray[totalCellsAdded + currentCell] = addedArray[currentCell];
		}

		totalCellsAdded += addedArray.length;
	}

	return newArray;
}

function copyWithin(
	array: any[],
	target: number,
	start: number = 0,
	end: number = array.length
) {
	if (!array) return null;

	start = normalizeNegativeIndex(start, array.length);
	target = normalizeNegativeIndex(target, array.length);
	end = normalizeNegativeEndIndex(end, start, array.length);

	if (!end) return array;

	const copyOfArray = [...array];

	for (
		let cell = start;
		cell < end && target < array.length;
		cell++, target++
	) {
		array[target] = copyOfArray[cell];
	}

	return array;
}

function entries(array: any[]) {
	if (!array) return null;

	const newArray = [];

	for (let index = 0; index < array.length; index++) {
		newArray[index] = [index, array[index]];
	}

	return newArray[Symbol.iterator]();
}

function every(array: any[], callback: Function) {
	if (!array) return null;

	const arrayLength = array.length;
	for (let index = 0; index < arrayLength; index++) {
		if (array[index]) {
			if (!callback(array[index], index, array)) return false;
		}
	}

	return true;
}

function fill(
	array: any[],
	value: any,
	start: number = 0,
	end: number = array.length
) {
	if (!array) return null;

	start = normalizeNegativeIndex(start, array.length);
	end = normalizeNegativeEndIndex(end, start, array.length);

	if (!end) return array;

	for (let index = start; index < end; index++) {
		array[index] = value;
	}

	return array;
}

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
