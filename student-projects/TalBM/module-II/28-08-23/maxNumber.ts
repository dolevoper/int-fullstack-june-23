// Problem definition
// Read N numbers from the user and print the highest number.

// Pseudo code
// 1.   read from the user how many numbers he would like to enter
//      store this in a variable "numbersToRead"
// 2.   init "maxNumber" with -Infinity
// 3.   repeat "numbersToRead" times:
//      3.1.    read a number from the user, store it in a variable "currentNumber"
//      3.2.    store the maximum between "currentNumber" and "maxNumber" in "maxNumber"
// 4. print the value in "maxNumber"

// Code
const numberToRead = Number(prompt("How many number would you like to input?"));
let maxNumber = -Infinity;

for (let iteration = 0; iteration < numberToRead; iteration++) {
    // const currentNumber = Number(prompt("Enter number #" + (iteration + 1)));
    const currentNumber = Number(prompt(`Enter number #${iteration + 1}`));

    // maxNumber = currentNumber > maxNumber ? currentNumber : maxNumber;
    // if (currentNumber > maxNumber) maxNumber = currentNumber;
    // maxNumber = Math.max(maxNumber, currentNumber);
    if (currentNumber > maxNumber) {
        maxNumber = currentNumber;
    }
}

alert(`The maximum number you entered was: ${maxNumber}`);
