// opening message
alert("Hello and welcome to the guessing game!");
alert("In this game you will have to guess the magic number")

// choosing difficulty
let difficulty = prompt("Please choose the difficulty:\n 1. Easy \n 2. Hard \n 3. Impossible");

// choosing difficulty (loop until right choice is chosen or cancel)
while (
    Number(difficulty) !== 1 &&
    Number(difficulty) !== 2 &&
    Number(difficulty) !== 3 &&
    difficulty.trim().toLowerCase() !== "easy" &&
    difficulty.trim().toLowerCase() !== "hard" &&
    difficulty.trim().toLowerCase() !== "impossible") {
    if (!difficulty) {
        break;
    }
    difficulty = prompt("Please choose the difficulty:\n 1. Easy \n 2. Hard \n 3. Impossible");
}

// difficulty preffrences
switch (difficulty.trim().toLowerCase()) {
    case "easy":
    case "1":
        alert("Easy it is");
        let topRange = 10
        let magicNumber = Math.floor(Math.random() * topRange) + 1;
        let guesses = 3
        break;
    case "hard":
    case "2":
        alert("Hard it is");
        topRange = 100
        magicNumber = Math.floor(Math.random() * topRange) + 1;
        guesses = 5
        break;
    case "impossible":
    case "3":
        alert("Impossible it is");
        topRange = 1000
        magicNumber = Math.floor(Math.random() * topRange) + 1;
        guesses = 10
        break;
}

// answer for testing
console.log(magicNumber);

// guessing
for (let i = 1; i <= guesses; i++) {
    let userGuess = Number(prompt("Guess the number between 1-" + topRange))
    let guessesLeft = (guesses - i)
    let inRange = (1 <= userGuess && userGuess <= topRange)
    if (userGuess === magicNumber) {
        alert("You won on guess #" + i + "!")
        break;
    } else if (isNaN(userGuess)) {
        i -= 1
        alert("Only NUMBERS allowed! \nYou have " + (guessesLeft + 1) + " more guesses")
    } else if (!userGuess) {
        break;
    } else if (!inRange) {
        i -= 1
        alert("You are out of range! \nYou have " + (guessesLeft + 1) + " more guesses")
    } else if (!Number.isInteger(userGuess)) {
        i -= 1
        alert("Only integers allowed! \nYou have " + (guessesLeft + 1) + " more guesses")
    } else if (inRange && userGuess > magicNumber) {
        alert("your number was higher! \nYou have " + guessesLeft + " more guesses")
    } else if (inRange && userGuess < magicNumber) {
        alert("your number was lower! \nYou have " + guessesLeft + " more guesses")
    }
}

if (guessesLeft === 0 && userGuess !== magicNumber) {
    alert("Game Over!")
} else if (userGuess === magicNumber && guessesLeft === 9) {
    alert("You are a godlike!!!")
} else if (userGuess === magicNumber && guessesLeft >= 4) {
    alert("You are a unbelievable!!!")
} else if (userGuess === magicNumber && guessesLeft >= 2) {
    alert("You are a good!")
} 