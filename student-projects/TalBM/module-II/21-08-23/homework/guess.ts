alert ("Hey there wanna play a game?");
const level = prompt("choose level:\n" +
"1. easy - 1 to 10\n" +
"2. hard - 1 to 100\n" +
"3. impossible - 1 to 1000");
if ( level.trim().toLowerCase() === ("easy") || level === ("1")){
    alert ("guess a number between 1 to 10\n" +
    "you have three guesses");
    const random = Math.floor(Math.random() * 10) + 1;   
    for (let i=0; i<3; i++) {
        const userGuess = Number (prompt("guess number " + (i+1) + ":"));
        if (userGuess >= 1 && userGuess <= 10 && Number.isInteger(userGuess) === true && Number.isNaN(userGuess) === false) {
            if (random === userGuess) {
                alert("congrats!\n" +
                    "you guessed correctly :)");
                i=3;
            }
            else if (random > userGuess) {
                alert("sorry, your guess was lower than the secret number :(");
            }
            else if (random < userGuess) {
                alert("sorry, your guess was higher than the secret number :(");
            }
        } else {
            alert ("enter a number that is whole and in range!")
            i-=1;
        }
    }    
}
if ( level.trim().toLowerCase() === ("hard") || level === ("2")){
    const guessNumber = Number(prompt("guess a number between 1 to 100\n" +
    "how many guesses would you want?"));
    if (guessNumber >= 1 && guessNumber <= 100 && Number.isInteger(guessNumber) === true && Number.isNaN(guessNumber) === false) {
        const random = Math.floor(Math.random() * 100) + 1;   
        for (let i=0; i<guessNumber; i++) {
        const userGuess = Number (prompt("guess number " + (i+1) + ":"));
        if (userGuess >= 1 && userGuess <= 100 && Number.isInteger(userGuess) === true && Number.isNaN(userGuess) === false) {
            if (random === userGuess) {
                alert("congrats!\n" +
                    "you guessed correctly :)");
                i=guessNumber;
            }
            else if (random > userGuess) {
                alert("sorry, your guess was lower than the secret number :(");
            }
            else if (random < userGuess) {
                alert("sorry, your guess was higher than the secret number :(");
            }
        } else {
            alert ("enter a number that is whole and in range!")
            i-=1;
        }
        }  
    }
      
}
if ( level.trim().toLowerCase() === ("impossible") || level === ("3")){
    alert ("guess a number between 1 to 1000\n" +
    "you have infinite guesses");
    const random = Math.floor(Math.random() * 1000) + 1;   
    for (let i=0; userGuess !== random ; i++) {
        const userGuess = Number (prompt("guess number " + (i+1) + ":"));
        if (userGuess >= 1 && userGuess <= 1000 && Number.isInteger(userGuess) === true && Number.isNaN(userGuess) === false) {
            if (random === userGuess) {
                alert("congrats!\n" +
                    "you guessed correctly :)");
            }
            else if (random > userGuess) {
                alert("sorry, your guess was lower than the secret number :(");
            }
            else if (random < userGuess) {
                alert("sorry, your guess was higher than the secret number :(");
            }
        } else {
            alert ("enter a number that is whole and in range!")
            i-=1;
        }
         
    }
      
}