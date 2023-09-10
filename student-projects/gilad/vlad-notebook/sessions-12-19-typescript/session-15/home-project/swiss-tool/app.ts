function print(message: string) {
  console.log(message);
}

function printTo(targetNumber: number) {
  print(`Target number: ${targetNumber}`);

  if (targetNumber === 0) return;

  const sign = targetNumber / Math.abs(targetNumber);

  for (
    let currentNumer = sign;
    currentNumer != targetNumber + sign;
    currentNumer += sign
  ) {
    console.log(`${currentNumer}`);
  }
}

function isEven(targetNumber: number) {
  return targetNumber % 2 == 0 ? true : false;
}

function isOdd(targetNumber: number) {
  return !isEven(targetNumber);
}

function isPalindrome(text: string) {
  const loweredText = text.toLowerCase();

  for (let currentChar = 0; currentChar < loweredText.length; currentChar++) {
    if (loweredText[currentChar] !== loweredText[text.length - 1 - currentChar])
      return false;
  }
  return true;
}

function isImprovedPalindrome(target: string | number) {
  target = typeof target !== "number" ? target : Math.abs(target).toString();

  return isPalindrome(target);
}

function safeDiv(numberA: number, numberB: number) {
  return numberB === 0 ? null : numberA / numberB;
}

function fizzBuzz(target: number) {
  let fizzbuzz = "";

  if (target.toString().includes("5") || target % 5 === 0) fizzbuzz += "fizz";
  if (target.toString().includes("7") || target % 7 === 0) fizzbuzz += "buzz";
  if (fizzbuzz === "") printTo(target);
  else return fizzbuzz;
}
