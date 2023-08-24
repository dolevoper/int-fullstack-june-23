// Global variables
const lowerBoundary = 999;
const upperBoundary = 9999;
const rawSecretCode = Math.floor(Math.random() * (upperBoundary - lowerBoundary)) + lowerBoundary;

const secretCode = rawSecretCode === 999 ? "0000" : rawSecretCode.toString();

const totalGuess = 3;

for ( let guesses = totalGuess; guesses > 0; guesses--) {
    const guess = guessAnigma(secretCode);

    switch (guess) {
        case "EXIT":
            alert("Exiting game.");
            break;
        
        case "WIN":
            alert("You WON!");
            break;

        case "MISS":
            console.log("guesses left: " + guesses);
            break;
    }
}

function guessAnigma( secretCode: string) {

    const guess = prompt("Please enter your guess:")?.trim();
    if (guess === null) {
        return "EXIT";

    }  else if (guess === secretCode) {
        alert("Congratulations! You won!");
        return "WIN";

    } else {
        
        const guessAsNumber = Number(guess);

        printHits(guess);
        
        return "MISS"
    }
}

function printHits(guess: string, secretCode: string) {
    const firstDigit = guess.charAt(0) === ? "🟢" : "🔴";
    const secondDigit = guess.charAt(1) ? "🟢" : "🔴";
    const thirdDigit = guess.charAt(2) ? "🟢" : "🔴";
    const fourthDigit = guess.charAt(3) ? "🟢" : "🔴";

    // TODO - continue loop to detect manually 
    for ( let i = 0; i < secretCode.length - 1; i++ ) {

    }

    alert("This was not the secret code, here are your hits:\n\n" +
    firstDigit +
    secondDigit +
    thirdDigit +
    fourthDigit);
}

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