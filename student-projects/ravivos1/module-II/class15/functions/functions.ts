const functionNumber1 = prompt("Function number 1\nPlease enter a positive number and the function will show the numbers before your number")?.trim();
const userNumber = Number (functionNumber1)
if (userNumber === null || userNumber <= 0 || isNaN (userNumber)) {
    alert("You didn't entered a valid positive number, please refresh the page and enter a valid number");
}
else if (userNumber === 1) {
    alert ("You chose the number " + userNumber + "\nThere are no numbers before the number 1");
}
else {
    numbersBefore (functionNumber1);
}


const oddNumber = Number (prompt ("Function number 2\nPlease enter a valid positive number, I will check if the number is odd"))
if (oddNumber === null || oddNumber <= 0 || isNaN (oddNumber)) {
    alert("You didn't entered a valid positive number, please refresh the page and enter a valid number");
}
else {
    isOdd (functionBoolean1)
}



function numbersBefore (functionNumber1 : string) {
    for (let numbers = 0; numbers < userNumber; numbers++) {
        let currentNumbers = numbers + 1;
        if (currentNumbers === 1) {
            functionNumber1 = "1";
        }
        else if (currentNumbers === userNumber) {
            alert ("You chose the number " + userNumber + "\nThe numbers before the number you chose are:\n" + functionNumber1);
        }
        else {
            functionNumber1 = functionNumber1 + ", " + currentNumbers;
        }
    }
}

function isOdd (functionBoolean1 : Number) {
    let dividedNumber = oddNumber / 2 ;
    if (!Number.isInteger(dividedNumber)) {
        return true
    }
    else {
        return false
    }
}