let maxGuesses = 3;
let remainingGuesses = maxGuesses;
let maxLevel = 0;
let difficulty = ""
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
            difficulty = "Easy"
            playGame(easyRandomNumber, maxGuesses);
            break;
        case "hard":
            maxLevel = 100;
            difficulty = "Hard"
            playGame(hardRandomNumber, maxGuesses);
            break;
        case "impossible":
            maxLevel = 1000;
            difficulty = "Impossible"
            playGame(impossibleRandomNumber, maxGuesses);
            break;
        default:
            alert("Invalid difficulty choice. Please choose Easy, Hard, or Impossible.");
    }
}

function playGame(targetNumber, maxGuesses) {
    alert(`You are playing in ${difficulty} mode. Try to guess the number between ${minStartNumber} and ${maxLevel}. You have ${maxGuesses} guesses.`);
    
    while (remainingGuesses > 0) {
        const guess = Number(prompt(`Enter your guess between ${minStartNumber} and ${maxLevel}:`));
        
        if (isNaN(guess) || guess < minStartNumber || guess > maxLevel) {
            alert(`Invalid guess. Please enter a number between ${minStartNumber} and ${maxLevel}`);
            continue;
        }
        
        remainingGuesses--;
        
        if (guess === targetNumber) {
            alert(`Congratulations! You guessed the correct number ${targetNumber}.`);
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
