// Problem definition
// Write a function that accepts a string and returns true if it is a palindrome and false otherwise.
// Do not use reverse function.
// Hint: strings has a length property and a charAt function

// Pseudo code

// get a string from the user
// loop needs to run string length / 2 times (whole number)
// need to switch charAt (loop number) with charAt (length - loop number)
// put the new string into reversedString
// check if strings are even

// Code

const regularString = prompt("Please insert a string");
if (regularString = null) {
  alert("Bye bye");
  throw "";
}

const numberOfLoops = regularString.length;
