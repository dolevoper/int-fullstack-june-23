function isPalindrome() {
  const stringToInput = prompt("Please enter a string");
  let reversedString = stringToInput?.split("").reverse().join("");
  alert(
    reversedString === stringToInput
      ? "This string is palindrome."
      : "This string is not palindrome."
  );
}
isPalindrome();


function ratio() {
  const a: number = Number(prompt("Please input first number."));
  const b: number = Number(prompt("Please input second number."));
  alert(b === 0 ? null : a / b);
  return b === 0 ? null : a / b;
}
ratio();