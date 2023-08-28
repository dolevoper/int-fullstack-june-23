//ispalidrome.ts

// Problem definition
// Write a function that accepts a string and returns true if it is a palindrome and false otherwise.
// Do not use reverse function.
// Hint: strings has a length property and a charAt function

// Pseudo code
/*
1. enter string to prompt
2. call function to check
3. declair variable for true or false "yesOrNo"
4. run in loop in the characters of the string from left to right
5. run in loop in the characters of the string from right to left
6. set alert if true or false

*/

// Code

isPalindrome();

function isPalindrome() {
    const myPalindrome = prompt("Eneter string and check if palindrome", "");
    checkmyPalindrome(myPalindrome);
}

function checkmyPalindrome(myPalindrome: string | null) {

    let yesOrNo = false;
    const palindromeLength = Number(myPalindrome?.length);

    for (let i = 1; i <= palindromeLength; i++) {

        const fromStart = myPalindrome?.charAt(i - 1);
        const fromEnd = myPalindrome?.charAt(palindromeLength - i)

        if (fromStart === fromEnd) {
            yesOrNo = true;
        } else {
            yesOrNo = false;
            break;
        }

    }

    if (yesOrNo) {
        alert("The string is pilandrom");
    } else {
        alert("The string is NOT pilandrom");
    }

}