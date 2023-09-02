function at(array: any[], index: number) {
	if (!array) {
		return undefined;
	}

	if (index >= 0) {
		return array[index];
	} else {
		return array[array.length + index];
	}
}
// console.log("at() funciton");
// console.log(at([], 0));
// console.log(at([], 0));
// console.log(at([1, 2, 3, 4], 0));
// console.log(at([1, 2, 3, 4], 1));
// console.log(at([1, 2, 3, 4], -1));

function concat(array: any[], ...arrays: any[]) {
	if (!array) return undefined;

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

// console.log(concat(null));
// console.log(concat([1, 2, 3]));
// console.log(concat([1, 2, 3], "hi"));
// console.log(concat([1, 2, 3], 5, ["hello", "world"], [4, 5, 6]));

function normalizeNegativeIndex(index: number, arrayLength: number) {
	return index < 0 ? (index < -arrayLength ? 0 : arrayLength + index) : index;
}
function copyWithin(
	array: any[],
	target: number,
	start: number = 0,
	end: number = array.length
) {
	start = normalizeNegativeIndex(start, array.length);
	target = normalizeNegativeIndex(target, array.length);
	end = normalizeNegativeIndex(end, array.length);
	end = end > array.length ? array.length : end;

	if (end < start) return;

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

/* CopyWithin Tests: */

/* literal array usage: */
// console.log(copyWithin([1, 2, 3, 4, 5], 0, 3));
// console.log(copyWithin([1, 2, 3, 4, 5], 0, 3, 4));

/* Demonstarting mutability */
// const array = [1, 2, 3, 4, 5];
// console.log(array);
// copyWithin(array, -2, -3, -1);
// console.log(array);

/*  
    Sparse Array example - 
    empty slots are converted to undefined during shallow copy
*/
// const array = [1, , 3];
// console.log(array);
// copyWithin(array, 2, 1, 2);
// console.log(array);

/* MDN tests: */
// const array1 = ["a", "b", "c", "d", "e"];
// // Copy to index 0 the element at index 3
// console.log(copyWithin(array1, 0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

function entries(array: any[]) {
	if (!array) return undefined;
	if (array.length === 0) return array[Symbol.iterator]();
	const newArray = [];

	for (let index = 0; index < array.length; index++) {
		newArray[index] = [index, array[index]];
	}

	const iterableArray = newArray[Symbol.iterator]();
	return iterableArray;
}

/* null array example */
// console.log(entries(null));

/* empty array example */
// console.log(entries([]));

/* Return Iterable with index example */
// const array1 = ["a", "b", "c"];

// const iterator1 = entries(array1);
// console.log(iterator1);

// console.log(iterator1.next().value);
// // Expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// // Expected output: Array [1, "b"]
