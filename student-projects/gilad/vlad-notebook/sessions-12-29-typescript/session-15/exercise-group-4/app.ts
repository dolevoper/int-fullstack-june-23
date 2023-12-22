// Global variables
const lowerBoundary = 999;
const upperBoundary = 9999;
const rawSecretCode = Math.floor(Math.random() * (upperBoundary - lowerBoundary)) + lowerBoundary;

const secretCode = rawSecretCode === 999 ? "0000" : rawSecretCode.toString();
console.log(secretCode);
main();

function main() {

    const totalGuess = 3;

    for ( let guesses = totalGuess; guesses > 0; guesses--) {

        console.log("guesses left: " + guesses);
        const guess = guessAnigma(secretCode);
    
        if (guess === "EXIT" || guess === "WIN") {
            break;
        }
    }
}

function guessAnigma( secretCode: string) {

    const guess = prompt("Please enter your guess:")?.trim();
    
    if (guess === undefined) {
        return "EXIT";

    }  else if (guess === secretCode) {
        alert("Congratulations! You won!");
        return "WIN";

    } else {

        printHits(guess, secretCode);
        
        return "MISS";
    }
}


function printHits(guess: string, secretCode: string) {

    let hits = "";

    // TODO - continue loop to detect manually 
    for ( let currentChar = 0; currentChar < secretCode.length ; currentChar++ ) {
        // const currentHint = guess.charAt(currentChar) === secretCode.charAt(currentChar) ? "🟢" : "🔴";

        if (guess.charAt(currentChar) === secretCode.charAt(currentChar)) {
            hits += "🟢";
            
        } else if (secretCode.includes(guess.charAt(currentChar))) {
            hits += "🟡";

        } else {
            hits += "🔴";
        }
    }

    alert("This was not the secret code, here are your hits:\n\n" + hits);
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