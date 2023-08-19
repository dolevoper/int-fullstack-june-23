let difficulty = prompt("Hi there! Please choose a difficulty level:\n1-Easy\n2-Hard\n3-Impossible")?.toLowerCase();
difficulty = difficulty?.trim();
switch (difficulty) {
    case "1":
    case "easy":
        const numberToGuess1 = Math.floor(Math.random() * 10 + 1);
        alert(numberToGuess1); // REMOVE THIS LINE AFTER TESTS
        const userGuess1 = prompt("Try to guess the secret number!");
        const userGuessInt1 = Number(userGuess1);
        if (userGuess1 === null) {
            alert("Goodbye 🥺");
            throw "";
        } else if (isNaN(userGuessInt1) || userGuessInt1 % 1 > 0 || userGuessInt1 > 10 || userGuessInt1 < 1) {
            alert("please enter a whole number between 1-10 😐");
        } else if (userGuessInt1 === numberToGuess1) {
            alert("You guessed the secret number! 🤩");
        } else if (userGuessInt1 > numberToGuess1) {
            alert("Your number is HIGHER than the secret number 😉");
        } else {
            alert("Your number is LOWER than the secret number 😉");
        }
        break;
    case "2":
    case "hard":
        const numberToGuess2 = Math.floor(Math.random() * 100 + 1);
        alert(numberToGuess2); // REMOVE THIS LINE AFTER TESTS
        const userGuess2 = prompt("Try to guess the secret number!");
        const userGuessInt2 = Number(userGuess2);
        if (userGuess2 === null) {
            alert("Goodbye 🥺");
            throw "";
        } else if (isNaN(userGuessInt2) || userGuessInt2 % 1 > 0 || userGuessInt2 > 100 || userGuessInt2 < 1) {
            alert("please enter a whole number between 1-100 😐");
        } else if (userGuessInt2 === numberToGuess2) {
            alert("You guessed the secret number! 🤩");
        } else if (userGuessInt2 > numberToGuess2) {
            alert("Your number is HIGHER than the secret number 😉");
        } else {
            alert("Your number is LOWER than the secret number 😉");
        }
        break;
    case "3":
    case "impossible":
        const numberToGuess3 = Math.floor(Math.random() * 1000 + 1);
        alert(numberToGuess3); // REMOVE THIS LINE AFTER TESTS
        const userGuess3 = prompt("Try to guess the secret number!");
        const userGuessInt3 = Number(userGuess3);
        if (userGuess3 === null) {
            alert("Goodbye 🥺");
            throw "";
        } else if (isNaN(userGuessInt3) || userGuessInt3 % 1 > 0 || userGuessInt3 > 1000 || userGuessInt3 < 1) {
            alert("please enter a whole number between 1-1000 😐");
        } else if (userGuessInt3 === numberToGuess3) {
            alert("You guessed the secret number! 🤩");
        } else if (userGuessInt3 > numberToGuess3) {
            alert("Your number is HIGHER than the secret number 😉");
        } else {
            alert("Your number is LOWER than the secret number 😉");
        }
        break;
    case undefined:
        alert("Good Bye!");
        break;
    default:
        alert("Please insert a number between 1-3, or write Easy/Hard/Impossible");
}