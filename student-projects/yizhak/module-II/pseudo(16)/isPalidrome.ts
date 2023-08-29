// Problem definition
// Write a function that accepts a string and returns true if it is a palindrome and false otherwise.
// Do not use reverse function.
// Hint: strings has a length property and a charAt function

// Pseudo code
//read a string from the user
//check if is palindrom(can't use revers)

// Code
const userInput = String(prompt("enter a string"));
let rev_str = "";
function isPalindrome(userInput: string){
    
    for (let i = userInput.length - 1; i >= 0; i--) {
        rev_str += userInput[i]

    }if (rev_str === userInput) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string is not palindrome")
    } 
}

// הפונקציה עובדת בלי שימוש ברוורסינג.

