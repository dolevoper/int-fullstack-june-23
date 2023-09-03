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
		if (!(index in array)) continue;
		else if (!callback(array[index], index, array)) return false;
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

function filter(array: any[], callback: Function) {
	if (!array) return null;

	const newArray = [];
	const arrayLength = array.length;

	for (let index = 0; index < arrayLength; index++) {
		if (!(index in array)) continue;
		else if (callback(array[index], index, array)) {
			newArray[newArray.length] = array[index];
		}
	}

	return newArray;
}

function find(array: any[], callback: Function) {
	if (!array) return null;

	const arrayLength = array.length;

	for (let index = 0; index < arrayLength; index++) {
		if (callback(array[index], index, array)) return array[index];
	}

	return undefined;
}

function findLast(array: any[], callback: Function) {
	if (!array) return null;

	const arrayLength = array.length;

	for (let index = arrayLength - 1; index >= 0; index--) {
		if (callback(array[index], index, array)) return array[index];
	}

	return undefined;
}

function findIndex(array: any[], callback: Function) {
	if (!array) return null;

	const arrayLength = array.length;

	for (let index = 0; index < arrayLength; index++) {
		if (callback(array[index], index, array)) return index;
	}

	return -1;
}

function findLastIndex(array: any[], callback: Function) {
	if (!array) return null;

	const arrayLength = array.length;

	for (let index = arrayLength - 1; index >= 0; index--) {
		if (callback(array[index], index, array)) return index;
	}

	return -1;
}

function isSparseCell(cell: any, index: number, originArray: any[]) {
	return !(index in originArray) || cell === undefined || Number.isNaN(cell);
}

function flatSingleLevel(
	arrayToFlatten: any[],
	callback: Function = undefined
) {
	const flatArray = [];
	let addedCellsOffset = 0;
	let emptyCellsOffset = 0;
	let isDone = true;
	// console.log("=====Starting flat loop, source array:=====");
	// console.log(arrayToFlatten);

	for (let index = 0; index < arrayToFlatten.length; index++) {
		// console.log(`Cell ${index} loop start, array state:`);
		// console.log(flatArray);

		if (!Array.isArray(arrayToFlatten[index])) {
			// console.log("cell not an array, cell before map:");
			// console.log(arrayToFlatten[index]);
			const mappedCell = !callback
				? arrayToFlatten[index]
				: callback(arrayToFlatten[index], index, arrayToFlatten);
			// console.log("cell after map:");
			// console.log(mappedCell);

			if (isSparseCell(mappedCell, index, arrayToFlatten)) {
				addedCellsOffset--;
				continue;
			}

			flatArray[index + addedCellsOffset - emptyCellsOffset] = mappedCell;
		} else {
			for (
				let flatCellIndex = 0;
				flatCellIndex < arrayToFlatten[index].length;
				flatCellIndex++
			) {
				const mappedCell = !callback
					? arrayToFlatten[index][flatCellIndex]
					: callback(
							arrayToFlatten[index][flatCellIndex],
							flatCellIndex,
							arrayToFlatten[index]
					  );

				if (isSparseCell(mappedCell, flatCellIndex, arrayToFlatten[index])) {
					addedCellsOffset--;
					continue;
				}

				flatArray[index + addedCellsOffset - emptyCellsOffset + flatCellIndex] =
					mappedCell;
			}

			addedCellsOffset += arrayToFlatten[index].length - 1;
			isDone = false;
		}
		// console.log("Cell loop end, array state:");
		// console.log(flatArray);
	}
	return { flattenedArray: flatArray, isDone: isDone };
}

function flat(array: any[], depth: number = 1) {
	if (!array) return null;
	if (depth < 1) return array;

	let flatResult = flatSingleLevel(array);
	let flatArray = flatResult.flattenedArray;

	for (
		let currentDepth = 1;
		!flatResult.isDone && currentDepth < depth;
		currentDepth++
	) {
		flatResult = flatSingleLevel(flatArray);
		flatArray = flatResult.flattenedArray;
	}

	return flatArray;
}

/* flat() Tests*/

// /* Test 1 depth array with depth emitted -  defaults to 1 depth*/
// console.log("Testing 1 deep array with depth emitted");
// const array = [1, 2, ["hello", "world"], 5];
// console.log(flat(array)); // [1, 2, 'hello', 'world', 5]

// /* Test array of depth 3 */
// const array2 = [1, 2, [[[1, 2, 3, 4], false], "world"], 5];
// console.log(array2); // [1, 2, Array(2), 5]

// console.log("Testing 3 deep array with depth emitted");
// console.log(flat(array2)); // [1, 2, Array(2), 'world', 5]

// // flatten to depth 2
// console.log("Testing 3 deep array with flatten-depth 2");
// console.log(flat(array2, 2)); // [1, 2, Array(4), false, 'world', 5]

// // flatten to depth 3
// console.log("Testing 3 deep array with flatten-depth 3");
// console.log(flat(array2, 3)); // [1, 2, 1, 2, 3, 4, false, 'world', 5]

// // with negative depth - do nothing
// console.log("Testing 3 deep array with negative depth");
// console.log(flat(array2, -5)); // do nothing [1, 2, Array(2), 5]

// // flatten to Infinity depth - stops when nothing left to flatten
// console.log("Testing 3 deep array with Infinity depth");
// console.log(flat(array2, Infinity)); // [1, 2, 1, 2, 3, 4, false, 'world', 5]

// /* MDN flat() Tests - Flattening nested arrays */
// console.log("MDN flat() Tests");

// const arr1 = [1, 2, [3, 4]];
// console.log(flat(arr1)); // [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(flat(arr2)); // [1, 2, 3, 4, [5, 6]]

// const arr3 = [1, 2, [3, 4, [5, 6]]];
// console.log(flat(arr3, 2)); // [1, 2, 3, 4, 5, 6]

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(flat(arr4, Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// /* Test sparse arrays */
// console.log("Sparse array tests");

// const arr5 = [1, 2, , 4, 5];
// console.log(flat(arr5)); // [1, 2, 4, 5]

// const arr6 = [1, , 3, ["a", , "c"]];
// console.log(flat(arr6)); // [ 1, 3, "a", "c" ]

// const arr7 = [1, , 3, ["a", , ["d", , "e"]]];
// console.log(flat(arr7)); // [ 1, 3, "a", ["d", empty, "e"] ]
// console.log(flat(arr7, 2)); // [ 1, 3, "a", "d", "e"]

function flatMap(array: any[], callback: Function) {
	if (!array) return null;

	// console.log("=====first flatten: =====");
	let flatArray = flatSingleLevel(array, callback).flattenedArray;
	// console.log(flatArray);
	// console.log("=====second flatten: =====");
	flatArray = flatSingleLevel(flatArray).flattenedArray;
	// console.log(flatArray);
	return flatArray;
}

/* flatMap test */

// /* Simple 1-depth array with mapping*/

// console.log("\n1-depth array test:");
// const arr1 = [1, 2, 1];
// console.log("source array: ");
// console.log(arr1);

// // flatten and map 2 to [2,2] array
// console.log("map 2 to [2,2] and flatten");
// const arr1Result = flatMap(arr1, (num) => (num === 2 ? [2, 2] : 1));
// console.log(arr1Result); // Expected output: Array [1, 2, 2, 1]

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

// /* Comparison with original flatMap funciton */
// console.log("\nComparison with original map() function");
// const arr2 = [1, 2, 3, 4];
// console.log("source array: ");
// console.log(arr2);

// // original flatMap
// console.log("Original flatMap() result");
// console.log(arr2.flatMap((x) => [x * 2])); // [[2], [4], [6], [8]]

// // my map and flatten
// console.log("My flatMap() result");
// console.log(flatMap(arr2, (x) => [x * 2])); // [2, 4, 6, 8]

// // 2-depth array test - only one level is flattened
// console.log("\n2-depth array test - Only one level flattened");
// console.log(flatMap(arr2, (x) => [[x * 2]])); // [[2], [4], [6], [8]]

// /* Generate a list of words from a sentence*/
// console.log("\nGenerate a list of words from a sentence");
// const arr3 = ["it's Sunny in", "", "California"];
// console.log("source array:");
// console.log(arr3);

// console.log("using original map() only");
// console.log(arr3.map((x) => x.split(" "))); // [["it's","Sunny","in"],[""],["California"]]

// console.log("using original flatMap()");
// console.log(arr3.flatMap((x) => x.split(" "))); // ["it's","Sunny","in", "", "California"]
// console.log("using my flatMap()");
// console.log(flatMap(arr3, (x) => x.split(" "))); // ["it's","Sunny","in", "", "California"]

// /* Pre-allocate and explicitly iterate */
// console.log("\nPre-allocate and explicitly iterate");

// const arr4 = [1, 2, 3, 4];
// console.log("source array");
// console.log(arr4);

// console.log("Original flatMap:");
// console.log(arr4.flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]
// console.log("Using my flatMap:");
// console.log(flatMap(arr4, (x) => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]

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

// /* Adding and removing items during map() */
// console.log("\nAdding and removing items during map()");

// // Let's say we want to remove all the negative numbers
// // and split the odd numbers into an even number and a 1
// const a = [5, 4, -3, 20, 17, -33, -4, 18];
// //         |\  \  x   |  | \   x   x   |
// //        [4,1, 4,   20, 16, 1,       18]

// console.log("source array: ");
// console.log(a);

// const result2 = flatMap(a, (n) => {
// 	if (n < 0) {
// 		return [];
// 	}
// 	return n % 2 === 0 ? [n] : [n - 1, 1];
// });

// console.log(
// 	"remove all negatives and split the odd numbers into an even number + 1"
// );
// console.log(result2); // [4, 1, 4, 20, 16, 1, 18]

// /* Test sparse arrays */
// console.log("\nTest sparse arrays ");
// const sparse1 = [1, 2, , 4, 5];
// console.log("source array:");
// console.log(sparse1);
// console.log(flatMap(sparse1, (x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]

// const sparse2 = [1, 2, 3, 4];
// console.log("source array:");
// console.log(sparse2);
// console.log(flatMap(sparse2, (x) => [, x * 2])); // [2, 4, 6, 8]
