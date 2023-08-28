// function isEven(number) {
// const evenNumber = Number.isInteger(number / 2)
// return (evenNumber)
// }

// const number = Number(prompt("Choose a number!"))
// if (isEven(number)) {
//     alert("Number is even!")
// }

function isOdd(number) {
  if (Number.isInteger(number / 2)) {
    const oddNumber = "false";
    return oddNumber;
  } else {
    const oddNumber = "true";
    return oddNumber;
  }
}

let number = Number(prompt("Choose a number!"));
while (!number || number < 0) {
  number = Number(prompt("Choose a valid number!"));
}
alert("Is the number " + number + " an odd number?\n" + isOdd(number));