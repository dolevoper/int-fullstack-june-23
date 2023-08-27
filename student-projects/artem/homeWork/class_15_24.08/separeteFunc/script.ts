function isPalindrome(input: string) {
    const stringToInput = prompt("Please enter a string");
    let reversedString = stringToInput?.split("").reverse().join("");
    alert(
      reversedString === stringToInput
        ? "This string is palindrome."
        : "This string is not palindrome."
    );
  }