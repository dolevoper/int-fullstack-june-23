let rangeStr = prompt("Choose your difficulty: Easy (1-10): 1, Hard (1-100): 2, Impossible (1-1000): 3");
let range = 0;

if (rangeStr !== null) {
    range = parseInt(rangeStr);

    if (range === 1) {
        range = 10;
    } else if (range === 2) {
        range = 100;
    } else if (range === 3) {
        range = 1000;
    } else {
        alert("Your choice is invalid");
    }
}

const correctNum = Math.floor(Math.random() * range) + 1;

let guessesLeft = 3;

while (guessesLeft > 0) {
    const userGuessStr = prompt(`Guess the number (1-${range}):`);
    if (null === userGuessStr) {
        break; 
    }
    
    const userGuess = parseInt(userGuessStr);

    if (userGuess.toString() !== userGuessStr) {
        alert("Your guess is not a valid integer! You've lost one guess");
    } else if (userGuess < 1 || userGuess > range) {
        alert("Number out of range! You've lost one guess");
    } else if (userGuess === correctNum) {
        alert(`Congratulations! You guessed the correct number ${correctNum}`);
        break;
    } else if (userGuess < correctNum) {
        alert("That was too low.");
    } else {
        alert("That was too high.");
    }
    

    --guessesLeft;

    if (0 === guessesLeft) {
        alert(`Sorry, you've run out of guesses. The correct number was ${correctNum}`);
    }
}


