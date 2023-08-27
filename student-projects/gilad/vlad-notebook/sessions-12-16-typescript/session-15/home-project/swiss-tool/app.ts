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
