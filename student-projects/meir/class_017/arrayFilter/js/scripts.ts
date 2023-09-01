/*
Room 1 - slice

Room 2 - forEach

Room 3 - map

Room 4 - filter

Room 5 - concat

1. Read about the function and understand it (MDN, W3School, W/E)

2. Write 2 or 3 examples of how to use the function

3. Implement the function yourself

```typescript
function slice(arr: number[], n: number) {
  // Implement without calling arr.slice
  // (Use for loops etc)
}
```

4. Present the function to the team
*/

/********************************************************************************************** */

/*
    filter array explaine:
    filter method is a method that creates a new array with applies condition to an existing array.
*/

/************* first example *************/

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrFiltered = arr1.filter(evenNum);

function evenNum(arr1: number) {
    return arr1 % 2 === 0;
}

alert("First example:\n" + arrFiltered);

/************* second example *************/

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age: number) {
    return age >= 18;
}

alert("Second example:\n" + result);

/************* third example *************/
//implemant to even numbers without filter

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr2: any = [];
let j = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        evenArr2[j] = arr2[i];
        j++;
    }
}

alert("Third example:\n" + evenArr2);