// Problem definition
// 1. read data from user:
// 2. save data to variable userInput;

// 3. using string.length and for loop make reversed string;
// 4. save reversed string to variable reversedString;
// 5. compare userInput and reversedString;
//  5.1. if it's the same return true;
//  5.2. else return false

function isPalindrome(input: string) {
  const userInput = prompt("Please enter word or phrase:");
  let reversedString = "";

  for (let i = userInput?.length; i >= 0; i -= 1) {
    console.log(userInput?.charAt(i));
    
    reversedString = reversedString + userInput?.charAt(i);
    console.log(reversedString);
    
  }
  alert( userInput === reversedString);
}
isPalindrome();

// Write a function that accepts a string and returns true if it is a palindrome and false otherwise.
// Do not use reverse function.
// Hint: strings has a length property and a charAt function

// Pseudo code

// Code
