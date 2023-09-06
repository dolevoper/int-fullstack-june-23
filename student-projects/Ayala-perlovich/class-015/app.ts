
// 1)printTo
// const userInput = parseInt(prompt("Enter a number"));

// if (!isNaN(userInput) && userInput > 0) {
//     for (let index = 1; index <= userInput; index++) {
//         alert(index);
//     }
// } else {
//     alert("Please enter a valid positive number greater than zero.");
// }

// *******************************************************************//
// 2)isOdd 

// const number = prompt("Enter a number: ");
// function isOdd(number){    

// if(number % 2 == 0) {

//     alert("The number is even.");

// }
// else {
//     alert("The number is odd.");
// }
// }

// ********************************************* */
//3)isEven

// const number = prompt("Enter a number: ");
// function isEven(n) {
//     n = Number(n);
//     return n === 0 || !!(n && !(n%2));
//   }

//***************************************************** */ 

// //4) isPalindrome 
// const string = prompt('Enter a string: ');

// function isPalindrome(string) {

//   // find the length of a string
//   const len = string.length;

//   // loop through half of the string
//   for (let i = 0; i < len / 2; i++) {

//     // check if first and last string are same
//     if (string[i] !== string[len - 1 - i]) {
//       return 'It is not a palindrome';
//     }
//   }
//   return 'It is a palindrome';
// }

// // call the function
// const value = isPalindrome(string);

// alert(value);

//******************************************************************* */
//(5 improved isPalindrome


// const string = prompt('Enter a string or number to check for Palindrome: ');

// function improvedIsPalindrome(str) {
//   // get the total length of the words  
//   const length = str.length;

//   // Use for loop to divide the words into 2 half  
//   for (let i = 0; i < length / 2; i++) {
//     // validate the first and last characters are the same  
//     if (str[i] !== str[length - 1 - i]) {
//       alert('It is not palindrome');
//       return;
//     }
//   }
//   // If they are not the same, then it is not a palindrome
//   alert('It is a palindrome');
// }
// const value = improvedIsPalindrome(string);
// alert(value);

//********************************************************************* */
//(6 safeDiv 

// function safeDiv() {
//   const number1 = parseFloat(prompt("Enter the first number:"));
//   const number2 = parseFloat(prompt("Enter the second number:"));

//   if (number2 === 0) {
//     return null;
//     alert("The second number is invalid or 0.");
//   } else {
//     return number1 / number2;
//     alert("The result is:");
//   }
// }
// const result = safeDiv();

// if (result !== null) {
//   alert("The result is: " + result);
// }



//********************************************************************* */
//(7  improved safeDiv 
// function improvedSafeDiv() {
//   const number1 = parseFloat(prompt("Enter the first number:"));
//   const number2 = parseFloat(prompt("Enter the second number:"));

//   if (isNaN(number1) || isNaN(number2)) {
//     alert("Please enter valid numbers.");
//     return null;
//   } else if (number2 === 0) {
//     alert("The second number cannot be 0.");
//     return null;
//   } else {
//     return number1 / number2;
//   }
// }

// const result = improvedSafeDiv();

// if (result !== null) {
//   alert("The result is: " + result);
// }

//*************************************************** */
//(8 fizzBuzz
// const number = prompt("enter a number");
// function fizzBuzz() {
//   for (let i = 1; i < 20; i++) {

//     if (i % 5 == 0)
//       alert("Fizz");
//     else if (i % 7 == 0)
//       alert("Buzz");

//     else if ((i % 5 == 0) && (i % 7 == 0))
//       alert("FizzBuzz");
//     else alert(i);
//   }
// }
// const result = fizzBuzz();
// alert("fizzBuzz");









