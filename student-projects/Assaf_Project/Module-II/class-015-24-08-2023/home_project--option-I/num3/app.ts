let number = Number(prompt("Choose a number!"));
while (isNaN(number)) {
  number = Number(prompt("Choose a number!"));
}

const isEven =
  Number.isInteger(halved(number)) && halved(number) != 0 ? true : false;

alert("Is the number " + number + " even?\n" + isEven);

function halved(number) {
  return number / 2;
}
