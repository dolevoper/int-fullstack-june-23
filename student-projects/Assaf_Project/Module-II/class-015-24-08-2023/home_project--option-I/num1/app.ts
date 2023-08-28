// #1 in array
function printTo(inputNumber) {
  let numbers = [];
  for (let i = 0; i < inputNumber; i++) {
    numbers.push(i + 1);
  }
  return numbers;
}

let inputNumber = Number(prompt("Choose a NUM to see whole numbers to it"));
while (!inputNumber || inputNumber < 1 || !Number.isInteger(inputNumber)) {
  inputNumber = Number(prompt("Choose a positive whole number above 1"));
}
const numbersArray = printTo(inputNumber);
alert(numbersArray);

// // #1 in alerts
// function printTo(inputNumber) {
//   for (let i = 0; i < inputNumber; i++) {
//     alert(i+1);
//   }
// }

// const inputNumber = Number(prompt("Choose a NUM to see whole numbers to it!"));
// printTo(inputNumber);