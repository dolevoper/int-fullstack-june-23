# Class 15 Project TODO list

## `Important note!`

Branches order should be:

```
|
* merge class-15-homeproject to main
|\
| * merge swiss-tool to class-15-homeproject
| |\
| | |
| | * added function commit
| | |
| | * swiss-tool `<-- we're here`
| |/
| * class-15-homeproject
|/
* main
```

## TODO Functions:

Write the following function:

- [x] printTo  
      **Input** - a number  
      **Output** - print all the whole numbers from 1 to the input number

- [x] isOdd  
      **Input** - a number  
      **Output** - return true if the number is odd, false otherwise

- [x] isEven  
      **Input** - a number  
      **Output** - return true if the number is even, false otherwise

- [x] isPalindrome  
      **Input** - a string  
      **Output** - return true if the string is a palindrome, false otherwise

- [x] improved isPalindrome  
      **Input** - a string or a number  
      **Output** - return true if the input is a palindrome, false otherwise

- [] safeDiv  
  **Input** - 2 numbers  
  **Output** - return `null` if the second number is 0, the ratio between the numbers otherwise

- [] improved safeDiv  
  **Input** - 2 numbers  
  **Output** - the ratio between the numbers  
  If the second number is 0, the program should not compile

- [] fizzBuzz  
  **Input** - a number  
  **Output** - print all the whole numbers from 1 to the input.  
  If the number has a 5 or is divisible by 5, print "fizz" instead.  
  If the number has a 7 or is divisible by 7, print "buzz" instead.  
  If it's both, print "fizzbuzz"

## TODO Improved guess my number

1. Make sure you have all the required input validations
2. User should have infinite guesses
3. Separate to functions - some functions are used to avoid repeating code (like validation), and some are used for organization.
4. Add a main menu

- Options: Play, Choose difficulty, Quit
- When player looses/wins/quits - go back to main menu
- Don't ask for the difficulty in the beginning. Default is normal, player can change the difficulty from the main menu

## TODO Anigma game

- [] continue the anigma game started at session 15
