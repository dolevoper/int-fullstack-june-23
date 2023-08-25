const difficulty = prompt("Welcome to Guess The Number game!\nPlease choose difficulty\n1. Easy (1-10)\n2. Hard (1-100)\n3. Impossible (1-1000)");
if (difficulty === null || difficulty === "") {
    alert("You didn't select a difficulty, please refresh the page and choose difficulty.");
}
else {
    const lowAndTrimDifficulty = difficulty.replace(/\s+/g, '').toLowerCase();
    if (lowAndTrimDifficulty === "easy" || lowAndTrimDifficulty === "1" || lowAndTrimDifficulty === "1.easy" || lowAndTrimDifficulty === "1easy")
    {
        let usernum = Number( prompt("You chose the easy difficulty\nPlease select a number between 1-10"));
        if (usernum === null) {
            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
        }
        else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                alert("You entered an invalid text, please enter a valid number between 1-10");
            }
        else {
            const comnum = Number (Math.floor(Math.random() *10 + 1));
                let guessesCount = 1;
                while (usernum !== comnum) {
                    guessesCount ++;
                    if (usernum > comnum) {
                        usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again.\nEnter a number between 1-10"));
                    }
                    else if (usernum < comnum) {
                        usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again.\nEnter a number between 1-10"));
                    }
                    else if (usernum===null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else if (usernum > 10 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-10");
                    }
            }
            if (guessesCount !== 1) {
                alert ("Congratulations! You won the game!\nYou needed " + guessesCount + " chances to win\nThe number was " + comnum);
            }
            else {
                alert ("Congratulations! You won the game at your first try!\nThe number was " + comnum);
            }
        }
    }
    
    else if (lowAndTrimDifficulty === "hard" || lowAndTrimDifficulty === "2" || lowAndTrimDifficulty === "2.hard" || lowAndTrimDifficulty === "2hard")
    {
        let usernum = Number( prompt("You chose the hard difficulty\nPlease select a number between 1-100"));
        if (usernum === null) {
            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
        }
        else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                alert("You entered an invalid text, please enter a valid number between 1-100");
            }
        else {
            const comnum = Number (Math.floor(Math.random() *100 + 1));
                let guessesCount = 1;
                while (usernum !== comnum) {
                    guessesCount ++;
                    if (usernum > comnum) {
                        usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again.\nEnter a number between 1-100"));
                    }
                    else if (usernum < comnum) {
                        usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again.\nEnter a number between 1-100"));
                    }
                    else if (usernum===null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else if (usernum > 100 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-100");
                    }
            }
            if (guessesCount !== 1) {
                alert ("Congratulations! You won the game!\nYou needed " + guessesCount + " chances to win\nThe number was " + comnum);
            }
            else {
                alert ("Congratulations! You won the game at your first try!\nThe number was " + comnum);
            }
        }
    }
    
    else if (lowAndTrimDifficulty === "impossible" || lowAndTrimDifficulty === "3" || lowAndTrimDifficulty === "3.impossible" || lowAndTrimDifficulty === "3impossible")
    {
        let usernum = Number( prompt("You chose the impossible difficulty\nPlease select a number between 1-1000"));
        if (usernum === null) {
            alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
        }
        else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                alert("You entered an invalid text, please enter a valid number between 1-1000");
            }
        else {
            const comnum = Number (Math.floor(Math.random() *1000 + 1));
                let guessesCount = 1;
                while (usernum !== comnum) {
                    guessesCount ++;
                    if (usernum > comnum) {
                        usernum = Number( prompt("Your guess was higher than the number the computer chose.\n Please try again.\nEnter a number between 1-1000"));
                    }
                    else if (usernum < comnum) {
                        usernum = Number( prompt("Your guess was lower than the number the computer chose.\n Please try again.\nEnter a number between 1-1000"));
                    }
                    else if (usernum===null) {
                        alert("You decided to quit the game. Please refresh the page and choose difficulty to play again")
                    }
                    else if (usernum > 1000 || usernum < 1 || isNaN(usernum)) {
                        alert("You entered an invalid text, please enter a valid number between 1-1000");
                    }
            }
            if (guessesCount !== 1) {
                alert ("Congratulations! You won the game!\nYou needed " + guessesCount + " chances to win\nThe number was " + comnum);
            }
            else {
                alert ("Congratulations! You won the game at your first try!\nThe number was " + comnum);
            }
        }
    }
    else {
        alert ("You didn't selected a valid Difficulty, please refresh the page and select a valid difficulty.");
    }
}