function printTo(userInput: number) {
    let feedback = "";
    for (let counter = 0; counter < userInput; counter++) {
      if (counter === userInput - 1) {
        feedback += counter + 1;
        alert(feedback);
        return;
      }
      feedback += counter + 1 + ", ";
    }
  }

//   printTo (prompt("enter a whole number"));

function isOdd(userInput: number) {
    let checkIfOdd = userInput % 2 > 0;
    return checkIfOdd;
  }
  
  function isEven(userInput: number) {
    let checkIfEven = userInput % 2 === 0;
    return checkIfEven;
  }
  
  function isPalindrome(userInput: string | number) {
    alert(typeof userInput);
    if (typeof userInput === "number") {
      userInput = userInput.toString();
    }
    const invalidCharacters = /[\W_]/g;
    userInput = userInput.toLowerCase().replace(invalidCharacters, "");
    const reversedUserInput = userInput.split("").reverse().join("");
    const checkIfPalindrome = userInput === reversedUserInput;
    return checkIfPalindrome;
  }
  
  function safeDiv(userInput1: number, userInput2: number) {
    if (userInput2 === 0) {
      return "null";
    } else {
      for (let devider = userInput2; devider > 1; devider--) {
        if (userInput1 % devider === 0 && userInput2 % devider === 0) {
          userInput1 /= devider;
          userInput2 /= devider;
        }
      }
      return userInput1 + " : " + userInput2;
    }
  }
  
  // function improvedSafeDiv(userInput1: number, userInput2: number) {
  //   if (isNotZero(userInput2)) {
  //     for (let devider = userInput2; devider > 1; devider--) {
  //       if ((userInput1 % devider === 0) && (userInput2 % devider === 0)) {
  //         userInput1 /= devider;
  //         userInput2 /= devider;
  //       }
  //     }
  //     return userInput1 + " : " + userInput2;
  //   } else {
  //     console.error('Invalid input: 0 is not allowed.');
  //   }
  // }
  
  // function isNotZero(input: number) {
  //   return input !== 0;
  // }
  
  function fizzBuzz(userInput: number) {
    let feedback = "";
    for (let count = 0; count < userInput; count++) {
      if (
        contains5(count + 1) &&
        contains7(count + 1) &&
        divisibleBy5(count + 1) &&
        divisibleBy7(count + 1)
      ) {
        if (count === userInput - 1) {
          feedback += "FizzBuzz";
          alert(feedback);
          return;
        } else {
          feedback += "FizzBuzz, ";
        }
      } else if (contains5(count + 1) && divisibleBy5(count + 1)) {
        if (count === userInput - 1) {
          feedback += "Fizz";
          alert(feedback);
          return;
        } else {
          feedback += "Fizz, ";
        }
      } else if (contains7(count + 1) && divisibleBy7(count + 1)) {
        if (count === userInput - 1) {
          feedback += "Buzz";
          alert(feedback);
          return;
        } else {
          feedback += "Buzz, ";
        }
      } else {
        if (count === userInput - 1) {
          feedback += count + 1;
          alert(feedback);
          return;
        } else {
          feedback += count + 1 + ", ";
        }
      }
    }
    alert(feedback);
  }
  
  function contains5(userInput: number) {
    return userInput.toString().includes("5");
  }
  
  function contains7(userInput: number) {
    return userInput.toString().includes("7");
  }
  
  function divisibleBy5(userInput: number) {
    return userInput % 5 === 0;
  }
  
  function divisibleBy7(userInput: number) {
    return userInput % 7 === 0;
  }