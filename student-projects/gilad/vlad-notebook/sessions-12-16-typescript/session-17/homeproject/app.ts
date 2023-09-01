function at(array: any[], index: number) {
  if (!array.length) {
    return undefined;
  }

  if (index >= 0) {
    return array[index];
  } else {
    return array[array.length - index * -1];
  }
}
console.log("at() funciton");
console.log(at([], 0));
console.log(at([], 0));
console.log(at([1, 2, 3, 4], 0));
console.log(at([1, 2, 3, 4], 1));
console.log(at([1, 2, 3, 4], -1));
