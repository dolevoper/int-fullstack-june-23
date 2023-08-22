let maxGuesses = 3;
let remainingGuesses = maxGuesses;
let maxLevel = 0;
const minStartNumber = 1;
const impossibleRandomNumber = Math.floor(Math.random() * 1000) + 1;
const hardRandomNumber = Math.floor(Math.random() * 100) + 1;
const easyRandomNumber = Math.floor(Math.random() * 10) + 1;

function diffCheck(input) {
    
    if (!isNaN(input) || input === " " || input === null) {
        alert("Invalid input. Please enter difficulty.");
        return true;
    }
    return false;
}
alert(`Welcome to the gussing number game! \n your goal is to find the hidden random number!`);
const diffChoose = prompt("Choose difficulty to play the game: Easy, Hard, or Impossible")?.trim().toLowerCase();

if (diffCheck(diffChoose)) {
    
} else {
    switch (diffChoose) {
        case "easy":
            maxLevel = 10;
            playEasyGame(easyRandomNumber, maxGuesses);
            break;
        case "hard":
            maxLevel = 100;
            playHardGame(hardRandomNumber, maxGuesses);
            break;
        case "impossible":
            maxLevel = 1000;
            playimpossiboleGame(impossibleRandomNumber, maxGuesses);
            break;
        default:
            alert("Invalid difficulty choice. Please choose Easy, Hard, or Impossible.");
    }
}

function playEasyGame(targetNumber, maxGuesses) {
    alert(`You are playing in Easy mode. Try to guess the number between 1 and 10. You have ${maxGuesses} guesses.`);
    
    while (remainingGuesses > 0) {
        const guess = Number(prompt(`Enter your guess (between 1 and 10):`));
        
        if (isNaN(guess) || guess < 1 || guess > 10) {
            alert("Invalid guess. Please enter a number between 1 and 10.");
            continue;
        }
        
        remainingGuesses--;
        
        if (guess === targetNumber) {
            alert(`Congratulations! You guessed the correct number (${targetNumber}).`);
            break;
        } else if (guess < targetNumber) {
            alert(`Wrong guess. The number is higher. You have ${remainingGuesses} guesses left.`);
        } else if (guess > targetNumber) {
            alert(`Wrong guess. The number is lower. You have ${remainingGuesses} guesses left.`);
        }
        
        if (remainingGuesses === 0) {
            alert(`You're out of guesses. The correct number was ${targetNumber}.`);
        }
    }
}

function playHardGame(targetNumber, maxGuesses) {
    alert(`You are playing in Hard mode. Try to guess the number between 1 and 100. You have ${maxGuesses} guesses.`);
    
    while (remainingGuesses > 0) {
        const guess = Number(prompt(`Enter your guess (between 1 and 100):`));
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Invalid guess. Please enter a number between 1 and 100.");
            continue;
        }
        
        remainingGuesses--;
        
        if (guess === targetNumber) {
            alert(`Congratulations! You guessed the correct number (${targetNumber}).`);
            break;
        } else if (guess < targetNumber) {
            alert(`Wrong guess. The number is higher. You have ${remainingGuesses} guesses left.`);
        } else if (guess > targetNumber) {
            alert(`Wrong guess. The number is lower. You have ${remainingGuesses} guesses left.`);
        }
        
        if (remainingGuesses === 0) {
            alert(`You're out of guesses. The correct number was ${targetNumber}.`);
        }
    }
}

function playimpossiboleGame(targetNumber, maxGuesses) {
    alert(`You are playing in Impossibole mode. Try to guess the number between 1 and 1000. You have ${maxGuesses} guesses.`);
    
    while (remainingGuesses > 0) {
        const guess = Number(prompt(`Enter your guess (between 1 and 1000):`));
        
        if (isNaN(guess) || guess < 1 || guess > 1000) {
            alert("Invalid guess. Please enter a number between 1 and 1000.");
            continue;
        }
        
        remainingGuesses--;
        
        if (guess === targetNumber) {
            alert(`Congratulations! You guessed the correct number (${targetNumber}).`);
            break;
        } else if (guess < targetNumber) {
            alert(`Wrong guess. The number is higher. You have ${remainingGuesses} guesses left.`);
        } else if (guess > targetNumber) {
            alert(`Wrong guess. The number is lower. You have ${remainingGuesses} guesses left.`);
        }
        
        if (remainingGuesses === 0) {
            alert(`You're out of guesses. The correct number was ${targetNumber}.`);
        }
    }
}

