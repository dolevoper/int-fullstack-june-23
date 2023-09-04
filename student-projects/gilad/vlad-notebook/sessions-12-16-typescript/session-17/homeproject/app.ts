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

function isSparseCell(index: number, originArray: any[]) {
	return !(index in originArray);
}

function isEmptyValue(cell: any, index: number, originArray: any[]) {
	return (
		isSparseCell(index, originArray) || cell === undefined || Number.isNaN(cell)
	);
}

function flatSingleLevel(
	arrayToFlatten: any[],
	callback: Function = undefined
) {
	const flatArray = [];
	let addedCellsOffset = 0;
	let isDone = true;

	for (let index = 0; index < arrayToFlatten.length; index++) {
		const mappedCell = !callback
			? arrayToFlatten[index]
			: callback(arrayToFlatten[index], index, arrayToFlatten);

		if (isEmptyValue(arrayToFlatten[index], index, arrayToFlatten)) {
			addedCellsOffset--;
			continue;
		}

		if (!Array.isArray(mappedCell)) {
			flatArray[index + addedCellsOffset] = mappedCell;
		} else {
			isDone = false;
			for (
				let flatCellIndex = 0;
				flatCellIndex < mappedCell.length;
				flatCellIndex++
			) {
				const flattenedCell = mappedCell[flatCellIndex];

				if (isEmptyValue(flattenedCell, flatCellIndex, mappedCell)) {
					addedCellsOffset--;
					continue;
				}

				flatArray[index + addedCellsOffset + flatCellIndex] = flattenedCell;
			}
			addedCellsOffset += mappedCell.length - 1;
		}
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

function flatMap(array: any[], callback: Function) {
	if (!array) return null;

	return flatSingleLevel(array, callback).flattenedArray;
}

function forEach(array: any[], callback: Function) {
	if (!array) return undefined;

	const maxIterations = array.length;

	for (let index = 0; index < maxIterations; index++) {
		if (!isSparseCell(index, array)) callback(array[index], index, array);
	}

	return undefined;
}

function sameValueZero(valueA: any, valueB: any) {
	if (typeof valueA === "number" && typeof valueB === "number") {
		return valueA === valueB || (valueA !== valueA && valueB !== valueB);
	}
	return valueA === valueB;
}

function includes(array: any[], searchElement: any, fromIndex: number = 0) {
	if (!array) return null;

	fromIndex = normalizeNegativeIndex(fromIndex, array.length);
	if (fromIndex >= array.length) return false;

	for (let index = fromIndex; index < array.length; index++) {
		if (sameValueZero(array[index], searchElement)) return true;
	}
	return false;
}

function indexOf(array: any[], searchElement: any, fromIndex: number = 0) {
	if (!array) return null;

	fromIndex = normalizeNegativeIndex(fromIndex, array.length);
	if (fromIndex >= array.length || Number.isNaN(searchElement)) return -1;

	for (let index = fromIndex; index < array.length; index++) {
		if (isSparseCell(index, array)) continue;
		if (array[index] === searchElement) return index;
	}

	return -1;
}

function lastIndexOf(
	array: any[],
	searchElement: any,
	fromIndex: number = array.length - 1
) {
	if (!array) return null;

	fromIndex =
		fromIndex < 0
			? array.length + fromIndex
			: fromIndex >= array.length
			? array.length - 1
			: fromIndex;

	if (fromIndex < -array.length || Number.isNaN(searchElement)) return -1;

	for (let index = fromIndex; index >= 0; index--) {
		if (isSparseCell(index, array)) continue;
		if (array[index] === searchElement) return index;
	}

	return -1;
}

function removeOccurrences(array: any[], searchedOccurrence: any) {
	const cleanArray = [...array];

	for (let index = 0; index < cleanArray.length; index++) {
		if (cleanArray[index] === searchedOccurrence) cleanArray[index] = undefined;

		if (Array.isArray(cleanArray[index])) {
			cleanArray[index] = removeOccurrences(
				cleanArray[index],
				searchedOccurrence
			);
		}
	}

	return cleanArray;
}

function join(array: any[], seperator: string = ",") {
	if (!array || array.length[1]) return array;

	let output = "";
	let cell: any;

	const cleanArray = removeOccurrences(array, array);
	const iterations = cleanArray.length;

	for (let index = 0; index < iterations; index++) {
		cell = cleanArray[index];

		cell = isEmptyValue(cell, index, cleanArray) ? "" : cell;

		cell = Array.isArray(cell) ? join(cell) : cell;

		output += cell;
		output += index < iterations - 1 ? seperator : "";
	}

	return output;
}
