const fizzbuzz = prompt ("Wellcome to fizzbuzz game!\nIf the number has a 5 or is divisible by 5, you'll get the message - fizz\nIf the number has a 7 or is divisible by 7, you'll get the message - buzz\nIf both- you'll get the message - fizzbuzz!\n please enter a valid and positive number")
const fizzbuzzNumber = Number (fizzbuzz)
if (fizzbuzzNumber === null || fizzbuzzNumber <= 0 || isNaN (fizzbuzzNumber)) {
    alert("You didn't entered a valid positive number, please refresh the page and enter a valid number");
}
else {
    numbersBefore (fizzbuzz);
    fizzbuzzGame (fizzbuzzNumber);
}


function numbersBefore (fizzbuzz : string) {
    for (let numbers = 0; numbers < fizzbuzzNumber; numbers++) {
        let currentNumbers = numbers + 1;
        if (currentNumbers === 1) {
            fizzbuzz = "1";
        }
        else if (currentNumbers === fizzbuzzNumber) {
            alert ("You chose the number " + fizzbuzzNumber + "\nThe numbers before the number you chose are:\n" + fizzbuzz);
        }
        else {
            fizzbuzz = fizzbuzz + ", " + currentNumbers;
        }
    }
}


function fizzbuzzGame (fizzbuzzNumber : Number) {
    let fizzbuzzWord = fizzbuzzNumber.toString();
    let fizzbuzzLetter = "1";
    let fizz = "";
    let buzz = "";
    let charNumber = 0;
    while (fizzbuzzLetter !== "") {
        fizzbuzzLetter = fizzbuzzWord.charAt(charNumber);
        if (fizzbuzzLetter === "5" || Number.isInteger(fizzbuzzNumber / 5)) {
            fizz = "fizz";
        }
        if (fizzbuzzLetter === "7" || Number.isInteger(fizzbuzzNumber / 7)) {
            buzz = "buzz";
        }
        charNumber++;
    }
if (fizz === "fizz" && buzz === "buzz") {
    alert ("fizzbuzz! " + fizzbuzzNumber)
}
else if (fizz !== "fizz" && buzz === "buzz") {
    alert ("buzz! " + fizzbuzzNumber)
}
else if (fizz === "fizz" && buzz !== "buzz") {
    alert ("fizz! " + fizzbuzzNumber)
}
else {
    alert ("You didn't found a fizz, buzz or fizzbuzz number :(")
}
}