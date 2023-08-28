function checkIfOdd(number) {
  if (Number.isInteger(number / 2)) {
    const oddNumber = "false";
    return oddNumber;
  } else {
    const oddNumber = "true";
    return oddNumber;
  }
}

let number = Number(prompt("Choose a number!"));
while (!number || number === 0) {
  number = Number(prompt("Choose a valid number!"));
}
alert("Is the number " + number + " an odd number?\n" + checkIfOdd(number));
