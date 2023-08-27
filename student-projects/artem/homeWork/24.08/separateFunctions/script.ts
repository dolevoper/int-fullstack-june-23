// function isPalindrome() {
//     const stringToInput = prompt("Please enter a string");
//     let reversedString = stringToInput?.split("").reverse().join("");
//     alert(
//       reversedString === stringToInput
//         ? "This string is palindrome."
//         : "This string is not palindrome."
//     );
//   }
//   isPalindrome();

//   function ratio() {
//     const a: number = Number(prompt("Please input first number."));
//     const b: number = Number(prompt("Please input second number."));
//     alert(b === 0 ? null : a / b);
//     return b === 0 ? null : a / b;
//   }
//   ratio();

// function imrovedSaveDiv() {
//   const a: number = Number(prompt("Please input first number."));
//   const b = prompt("Please input second number.");
//   if (b === "0") {
//     console.log('exit');
//     return;
//   } else {
//     alert(a / b);
//     return a / b;
//   }
// }
// imrovedSaveDiv();

function fizzBuzz() {
  const inputedNumber = Number(prompt("Please enter a number:"));
  let counter = 1;
  while (counter <= inputedNumber) {
    if (
      (`${counter}`.includes("5") || counter % 5 === 0) &&
      (`${counter}`.includes("7") || counter % 7 === 0)
    ) {
      console.log("fizzBuzz");
      break;
    }
    if (`${counter}`.includes("5") || counter % 5 === 0) {
      console.log("fizz");
    }
    if (`${counter}`.includes("7") || counter % 7 === 0) {
      console.log("buzz");
    }
    console.log(counter);
    counter += 1;
  }
}
fizzBuzz();
