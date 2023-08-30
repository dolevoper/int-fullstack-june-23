// Problem definition
// Write a function that accepts a string and returns true if it is a palindrome and false otherwise.
// Do not use reverse function.
// Hint: strings has a length property and a charAt function

// Pseudo code
// 1. Prompt the user for a string
// 2. Store the result in a variable called userInput
// 3. Create a boolean that would determain that the number is ok (validated) called isInputValid set
// to false by default
// 4. Create a boolean that would determain if the user input is a palindrome set to false by default
// 5. Create a function that would check that it is not null called validateUserInput
// 6. The above function should set the IsInputValid variable to true if succeeded
// 7. Create a function that would check if the user input is a palindrome called validateInputForPalidrome
// 7.1.
// 8. The above function should set the isPalindrome variable to true if succeeded

// Code

const userInput = prompt('Please enter a string')
let IsInputValid = false
let isPalindrome = false

function validateUserInput(foo = userInput) {
	if (foo != null) {
		IsInputValid = true
	}
}

// function validateInputForPalidrome() {
// 	if (userInput?.charAt(0) == ) {
// 		isPalindrome = true
// 	} else {
// 		isPalindrome = false
// 	}
// }
