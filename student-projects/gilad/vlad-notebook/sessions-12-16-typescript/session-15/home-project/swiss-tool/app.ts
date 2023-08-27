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
/* Tests:
printTo(10);
printTo(0);
printTo(-5);
 */

function isEven(targetNumber: number) {
  return targetNumber % 2 == 0 ? true : false;
}

function isOdd(targetNumber: number) {
  return !isEven(targetNumber);
}
/* Tests:
print(`number 2 is even: ${isEven(2)}`);
print(`number 7 is even: ${isEven(7)}`);
print(`number -2 is odd: ${isOdd(2)}`);
print(`number -7 is odd: ${isOdd(7)}`);
*/

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
/* Tests:
  // print(`is "Hello" palindrome? ${isPalindrome("Hello")}`);
  // print(`is "Palindrome" palindrome? ${isPalindrome("Palindrome")}`);
  // print(`is "redivider" palindrome? ${isPalindrome("redivider")}`);
  // print(`is "RAcecar" palindrome? ${isPalindrome("RAcecar")}`);
  // print(`is "x" palindrome? ${isPalindrome("x")}`);
  // print(`is "" palindrome? ${isPalindrome("")}`);

  // print(`is "hello" improved palindrome? ${isImprovedPalindrome("hello")}`);
  // print(`is "wow" improved palindrome? ${isImprovedPalindrome("wow")}`);
  // print(`is "" improved palindrome? ${isImprovedPalindrome("")}`);
  // print(`is "123" improved palindrome? ${isImprovedPalindrome(123)}`);
  // print(`is "45654" improved palindrome? ${isImprovedPalindrome(45654)}`);
  // print(`is "-505" improved palindrome? ${isImprovedPalindrome(-505)}`);
  // print(`is "0" improved palindrome? ${isImprovedPalindrome(0)}`);
*/

/*
- [???] improved safeDiv  /// ??? 
  **Input** - 2 numbers  
  **Output** - the ratio between the numbers  
  If the second number is 0, the program should not compile

*/

function safeDiv(numberA: number, numberB: number) {
  return numberB === 0 ? null : numberA / numberB;
}

// function improvedSafeDiv(numberA: number, numberB: number) {}
/* Tests:
print(`safe division of 3 / 2 = ${safeDiv(3, 2)}`);
print(`safe division of 5 / 0 = ${safeDiv(5, 0)}`);
*/

function fizzBuzz(target: number) {
  let fizzbuzz = "";

  if (target.toString().includes("5") || target % 5 === 0) fizzbuzz += "fizz";
  if (target.toString().includes("7") || target % 7 === 0) fizzbuzz += "buzz";
  if (fizzbuzz === "") printTo(target);
  else return fizzbuzz;
}
/* Tests:
print(`fizzbuzz number 5: ${fizzBuzz(5)}`);
print(`fizzbuzz number 7: ${fizzBuzz(7)}`);
print(`fizzbuzz number 21: ${fizzBuzz(21)}`);
print(`fizzbuzz number 52: ${fizzBuzz(52)}`);
print(`fizzbuzz number 75: ${fizzBuzz(75)}`);
print(`fizzbuzz number 174: ${fizzBuzz(174)}`);
print(`fizzbuzz number 175: ${fizzBuzz(175)}`);
print(`fizzbuzz number 8: ${fizzBuzz(8)}`);
*/
