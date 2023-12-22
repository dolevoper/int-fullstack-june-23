// Global variables
const lowerBoundary = 999;
const upperBoundary = 9999;
const rawSecretCode = Math.floor(Math.random() * (upperBoundary - lowerBoundary)) + lowerBoundary;
// const rawSecretCode = Math.floor(Math.random() * 9000) + 999;
const secretCode = rawSecretCode === 999 ? "0000" : rawSecretCode.toString();
// ?: - ternary operator
// boolean ? value1 : value2;
// boolean === true => value1
// boolean === false => value2

// if (rawSecretCode === 999) {
//     secretCode = "0000";
// } else {
//     secretCode = rawSecretCode.toString();
// }

const guess = prompt("Please enter your guess:")?.trim();

if (guess === secretCode) {
    alert("Congratulations! You won!");
} else if (guess === null) {
    alert("Bye bye!");
} else if (guess === "0000") {
    announceHits(guess);
} else {
    const guessAsNumber = Number(guess);

    if (isNaN(guessAsNumber) || !Number.isInteger(guessAsNumber) || guessAsNumber < lowerBoundary + 1 || guessAsNumber > upperBoundary) {
        alert("Please enter a valid guess!");
    } else {
        announceHits(guess);
    }
}

function announceHits(guess: string) {
    const firstDigit = secretCode.charAt(0) === guess.charAt(0) ? "🟢" : "🔴";
    const secondDigit = secretCode.charAt(1) === guess.charAt(1) ? "🟢" : "🔴";
    const thirdDigit = secretCode.charAt(2) === guess.charAt(2) ? "🟢" : "🔴";
    const fourthDigit = secretCode.charAt(3) === guess.charAt(3) ? "🟢" : "🔴";

    alert("This was not the secret code, here are your hits:\n\n" +
        firstDigit +
        secondDigit +
        thirdDigit +
        fourthDigit);
}











// ================= function examples ==================== //

// const fiveDoubled = double(5);
// alert(fiveDoubled);
// alert(capitalize("hello world!"));

// printFullName("omer", "dolev");
// alert(repeat("I won't use var\n", 100));

function double(x: number) { // x = 5
    const xDoubled = x * 2;
    alert("double!");

    return xDoubled;
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function printFullName(firstName: string, lastName: string) {
    alert(capitalize(firstName) + " " + capitalize(lastName));
}

function repeat(str: string, times: number) {
    let res = "";

    for (let timesConcatenated = 0; timesConcatenated < times; timesConcatenated++) {
        res += str;
    }

    return res;
}