alert("hello world!");

function concatenate(...arrays: any) {
  if (arrays.length <= 1) return arrays;

  let cellsCounter = 0;
  const resutlArray: any[] = [];
  for (let currentArray = 0; currentArray < arrays.length; currentArray++) {
    for (let cell = 0; cell < arrays[currentArray].length; cell++) {
      resutlArray[cellsCounter + cell] = arrays[currentArray][cell];
    }
    cellsCounter += arrays[currentArray].length;
  }
  return resutlArray;
}

// console.log(concatenate());
// console.log(concatenate([1, 2, 3], [1, 2, 3], ["hello", "world"]));

const cities = ["Dimona", "Be'er Sheva", "Haifa"];
const states = ["Arizona", "California", "New York"];

const shagrirutList = concatenate(cities, states);

alert(shagrirutList);
