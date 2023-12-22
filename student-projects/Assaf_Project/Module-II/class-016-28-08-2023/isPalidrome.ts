// Problem definition
// Write a function that accepts a string and returns true if it is a palindrome and false otherwise.
// Do not use reverse function.
// Hint: strings has a length property and a charAt function

// Pseudo code

// 1.   read a string from the user and store it as "chosenWord"
// 2.   check how many characters in the string
//      half that number
// 3.   check if charAt start = char at end
//      and 2nd = 2nd from last...
// 4.   return true or false

// Code

let chosenWord = prompt("please choose a word");

while (Number(chosenWord) || chosenWord === "") {
  chosenWord = prompt("please choose a WORD");
}

function toHalfCharCount(chosenWord) {
  return Math.floor(chosenWord.trim().length / 2);
}

const isPalindrome =
  chosenWord.charAt(toHalfCharCount(chosenWord) - 1) ===
  chosenWord.charAt(chosenWord.length - toHalfCharCount(chosenWord));

alert(isPalindrome);


