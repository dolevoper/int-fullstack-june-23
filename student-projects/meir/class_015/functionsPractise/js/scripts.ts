/*
Option I
Write the following function:

printTo
Input - a number
Output - print all the whole numbers from 1 to the input number

isOdd
Input - a number
Output - return true if the number is odd, false otherwise

isEven
Input - a number
Output - return true if the number is even, false otherwise

isPalindrome
Input - a string
Output - return true if the string is a palindrome, false otherwise

improved isPalindrome
Input - a string or a number
Output - return true if the input is a palindrome, false otherwise

safeDiv
Input - 2 numbers
Output - return null if the second number is 0, the ratio between the numbers otherwise

improved safeDiv
Input - 2 numbers
Output - the ratio between the numbers
If the second number is 0, the program should not compile

fizzBuzz
Input - a number
Output - print all the whole numbers from 1 to the input.
If the number has a 5 or is divisible by 5, print "fizz" instead.
If the number has a 7 or is divisible by 7, print "buzz" instead.
If it's both, print "fizzbuzz"

*/

initMyChoosen()

function initMyChoosen() {

    const mySelected = Number(prompt("Select the function you want:\n1 - printTo\n2 - isOdd\n3 - isEven\n4 - isPalindrome\n5 - improved isPalindrome\n6 - safeDiv\n7 - improved safeDiv\n8 - fizzBuzz", ""));

    switch (mySelected) {
        case 1:
            printTo();
            break;
        case 2:
            isOdd();
            break;
        case 3:
            isEven();
            break;
        case 4:
            isPalindrome();
            break;
        case 5:
            improvedIsPalindrome();
            break;
        case 6:
            safeDiv();
            break;
        case 7:
            improvedSafeDiv();
            break;
        case 8:
            fizzBuzz();
            break;
        default:
            break;
    }
}

function printTo() {
    const myNumberPrintTo = Number(prompt("Enter number between 1 and ... ", ""));
    printNumbers(myNumberPrintTo);
}

function printNumbers(myNumber: number) {
    for (let i = 1; i <= myNumber; i++) {
        alert(i);
    }
}

/**********************************************************/

function isOdd() {
    const myIsOdd = Number(prompt("Enter number between 1 and check if odd ", ""));
    printMyOdd(myIsOdd);
}

function printMyOdd(myIsOdd: number) {
    const myNumberIsOdd = (myIsOdd % 2) ? true : false;
    alert(myNumberIsOdd);
}

/**********************************************************/

function isEven() {
    const myIsEven = Number(prompt("Enter number between 1 and check if even ", ""));
    printMyEven(myIsEven);
}

function printMyEven(myIsEven: number) {
    const myNumberIsEven = (myIsEven % 2) ? false : true;
    alert(myNumberIsEven);
}

/**********************************************************/

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

/**********************************************************/

function improvedIsPalindrome() {
    const myImproveDisPalindrome = prompt("Eneter string and check if palindrome", "");
    checkImprovedIsPalindrome(myImproveDisPalindrome);
}

function checkImprovedIsPalindrome(myImproveDisPalindrome) {

    let yesOrNo = false;
    const palindromeLength = Number(myImproveDisPalindrome?.length);

    for (let i = 1; i <= palindromeLength; i++) {

        const fromStart = myImproveDisPalindrome?.charAt(i - 1);
        const fromEnd = myImproveDisPalindrome?.charAt(palindromeLength - i)

        if (fromStart === fromEnd) {
            yesOrNo = true;
        } else {
            yesOrNo = false;
            break;
        }

    }

    if (yesOrNo) {
        alert(yesOrNo);
    } else {
        alert(yesOrNo);
    }

}

/**********************************************************/

function safeDiv() {
    const firstNumber = Number(prompt("Enter the first number", ""));
    const secondNumber = Number(prompt("Enter the second number", ""));

    if (secondNumber <= 0) {
        alert("The second number less or equal 0");
        return null;
    } else {
        clacNumbers(firstNumber, secondNumber);
    }
}

function clacNumbers(firstNumber: number, secondNumber: number) {
    const myRatio = firstNumber / secondNumber;
    alert("The ratio between the numbers is: " + firstNumber + ":" + secondNumber + "\nand after it's: " + myRatio.toFixed(3));
}

/**********************************************************/

function improvedSafeDiv() {
    const firstNumberSafe = Number(prompt("Enter the first number", ""));
    const secondNumberSafe = Number(prompt("Enter the second number", ""));

    if (secondNumberSafe <= 0) {
        alert("The second number less or equal 0, so EXIT");
        return false;
    } else {
        clacNumbersSafe(firstNumberSafe, secondNumberSafe);
    }

}

function clacNumbersSafe(firstNumberSafe: number, secondNumberSafe: number) {
    const myRatio = firstNumberSafe / secondNumberSafe;
    alert("The ratio between the numbers is: " + firstNumberSafe + ":" + secondNumberSafe + "\nand after it's: " + myRatio.toFixed(3));
}

/**********************************************************/

function fizzBuzz() {

    const myFizzBuzzNumber = Number(prompt("Enter number from 1 to ..."));

    if (myFizzBuzzNumber <= 0) {
        alert("The number must start from 1, try again");
        fizzBuzz();
    } else {
        printTheNumbers(myFizzBuzzNumber);
    }
}

function printTheNumbers(myFizzBuzzNumber: number) {

    const myArray: any = [];
    const myFizzBuzz = "fizzbuzz";
    const myFizz = "fizz";
    const myBuzz = "buzz";

    for (let i = 1; i <= myFizzBuzzNumber; i++) {

        if (i % 5 === 0 && i % 7 === 0) {
            myArray.push(myFizzBuzz);
        } else if (i % 5 === 0) {
            myArray.push(myFizz);
        } else if (i % 7 === 0) {
            myArray.push(myBuzz);
        } else {
            myArray.push(i);
        }

    }

    alert(myArray.join(", "));

}