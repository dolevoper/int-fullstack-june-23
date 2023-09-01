function at(array: any[], index: number) {
  if (!array) {
    return undefined;
  }

  if (index >= 0) {
    return array[index];
  } else {
    return array[array.length - index * -1];
  }
}
// console.log("at() funciton");
// console.log(at([], 0));
// console.log(at([], 0));
// console.log(at([1, 2, 3, 4], 0));
// console.log(at([1, 2, 3, 4], 1));
// console.log(at([1, 2, 3, 4], -1));

function concat(targetArray: any[], ...arrays: any[]) {
  if (!targetArray) return undefined;

  const newArray = [...targetArray]; // shallow copy using spread operator

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
