/* Teacher Examples */

const arr = [1, 2, 3, 4, 5, 6, 7, "world"];
// const arr: number[] = [];

// alert(arr[5]);

// arr[3] = 11;
// alert(arr[3]);
// alert(arr);

// ++arr[5];
// arr[1] *= 8;
// alert(arr);

// arr[7] = 99;
// alert(arr);

// arr[13] = -1;
// alert(arr);

// alert(arr[20]); // undefined
// arr[-3] = -3; // impossible

// alert(arr.length);
// arr.splice(2, 1);
// alert(arr);
// alert(arr.length);

// alert(arr[arr.length - 1]);
// alert(arr.at(-1));

// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// arr.unshift("hello");

// alert(arr);

let indexOfFive = -1;

for (let i = 0; i < arr.length && indexOfFive === -1; i++) {
    indexOfFive = arr[i] === 5 ? i : -1;
}

// alert(indexOfFive);

const arr2 = [];
arr2.push(1);
arr2.push(2);

const arr3 = [].concat([1]).concat([2]);
// [] + [1] + [2] === [1, 2];

function double(x: number) {
    alert(x * 2);
}

[1, 2, 3].forEach(double);