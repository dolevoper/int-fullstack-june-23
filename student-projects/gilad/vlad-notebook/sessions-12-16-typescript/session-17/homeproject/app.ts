function at(array: any[], index: number) {
	if (!array) return undefined;

	if (index >= 0) return array[index];
	else return array[array.length + index];
}

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

function normalizeNegativeIndex(index: number, arrayLength: number) {
	return index < 0 ? (index < -arrayLength ? 0 : arrayLength + index) : index;
}

function entries(array: any[]) {
	if (!array) return undefined;
	if (array.length === 0) return array[Symbol.iterator]();

	const newArray = [];

	for (let index = 0; index < array.length; index++) {
		newArray[index] = [index, array[index]];
	}

	return newArray[Symbol.iterator]();
}

function every(array: any[], callback: Function) {
	if (!array) return undefined;

	const arrayLength = array.length;
	for (let index = 0; index < arrayLength; index++) {
		if (array[index]) {
			if (!callback(array[index], index, array)) return false;
		}
	}

	return true;
}
