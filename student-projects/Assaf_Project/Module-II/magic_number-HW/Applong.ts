alert("Hello and welcome to the guessing game!");
alert("In this game you will have to guess the magic number")
const difficulty = prompt("Please choose the difficulty:\n 1. Easy \n 2. Hard \n 3. Impossible");
const trimedDifficulty = (difficulty.trim());
const easyDifficulty = ("easy");
const hardDifficulty = ("hard");
const impossibleDifficulty = ("impossible");
const imposibleDifficulty = ("imposible");


// easy
if (trimedDifficulty.toLowerCase() === easyDifficulty || trimedDifficulty === "1" || trimedDifficulty === "1.") {
    alert("Easy it is!")
    const magicNumber = Math.floor(Math.random() * 10) + 1;
    console.log(magicNumber);
    const userGuess1 = Number(prompt("Choose a number between 1-10"));
    const isWhole1 = Number.isInteger(userGuess1)
    const inRange1 = (1 <= userGuess1 && userGuess1 <= 10)
    const isNumber1 = (!isNaN(userGuess1))

    // easy 1st try
    if (userGuess1 > magicNumber && isWhole1 && inRange1) {
        alert("Your guess was higher then the magic number! \nTry again");
    } else if (userGuess1 < magicNumber && isWhole1 && inRange1) {
        alert("Your guess was lower then the magic number! \nTry again");
    } else if (!isNumber1) {
        alert("Only numeric answers allowed")
    } else if (!isWhole1) {
        alert("Only whole numbers allowed")
    } else if (!inRange1) {
        alert("Your number was out of range")
    } if (userGuess1 === magicNumber) {
        alert("Amazing!!! \n Are you psychic?!");
        alert("You Won!")
    } else {

        // easy 2nd try
        const userGuess2 = Number(prompt("Choose a number between 1-10"));
        const isWhole2 = Number.isInteger(userGuess2)
        const inRange2 = (1 <= userGuess2 && userGuess2 <= 10)
        const isNumber2 = (!isNaN(userGuess2))

        if (userGuess2 > magicNumber && isWhole2 && inRange2) {
            alert("Your guess was higher then the magic number! \nTry again");
        } else if (userGuess2 < magicNumber && isWhole2 && inRange2) {
            alert("Your guess was lower then the magic number! \nTry again");
        } else if (!isNumber2) {
            alert("Only numeric answers allowed")
        } else if (!isWhole2) {
            alert("Only whole numbers allowed")
        } else if (!inRange2) {
            alert("Your number was out of range")
        } if (userGuess2 === magicNumber) {
            alert("Amazing!!! \n Are you psychic?!");
            alert("You Won!")
        } else {


            // easy 3rd try
            const userGuess3 = Number(prompt("Choose a number between 1-10"));
            const isWhole3 = Number.isInteger(userGuess3)
            const inRange3 = (1 <= userGuess3 && userGuess3 <= 10)
            const isNumber3 = (!isNaN(userGuess3))
            if (!isNumber3) {
                alert("Only numeric answers allowed")
            } else if (!isWhole3) {
                alert("Only whole numbers allowed")
            } else if (!inRange3) {
                alert("Your number was out of range")
            } if (userGuess3 === magicNumber) {
                alert("Congradulations! \n 3rd try!");
                alert("You Won!")
            } else alert("You lose! \nThe magic number was - " + magicNumber);
        }
    }

    // hard
} else if (trimedDifficulty.toLowerCase() === hardDifficulty || trimedDifficulty === "2" || trimedDifficulty === "2.") {
    alert("It's a Hard knock life!");
    const magicNumber = Math.floor(Math.random() * 100) + 1;
    console.log(magicNumber);

    // hard 1st try
    const userGuess1 = Number(prompt("Choose a number between 1-100"));
    const isWhole1 = Number.isInteger(userGuess1)
    const inRange1 = (1 <= userGuess1 && userGuess1 <= 100)
    const isNumber1 = (!isNaN(userGuess1))
    if (userGuess1 > magicNumber && isWhole1 && inRange1) {
        alert("Your guess was higher then the magic number! \nTry again");
    } else if (userGuess1 < magicNumber && isWhole1 && inRange1) {
        alert("Your guess was lower then the magic number! \nTry again");
    } else if (!isNumber1) {
        alert("Only numeric answers allowed")
    } else if (!isWhole1) {
        alert("Only whole numbers allowed")
    } else if (!inRange1) {
        alert("Your number was out of range")
    } if (userGuess1 === magicNumber) {
        alert("Incredible!!! \n You are some kind of a wizard!");
        alert("You Won!")
    } else {

        // hard 2nd try
        const userGuess2 = Number(prompt("Choose a number between 1-100"));
        const isWhole2 = Number.isInteger(userGuess2)
        const inRange2 = (1 <= userGuess2 && userGuess2 <= 100)
        const isNumber2 = (!isNaN(userGuess2))

        if (userGuess2 > magicNumber && isWhole2 && inRange2) {
            alert("Your guess was higher then the magic number! \nTry again");
        } else if (userGuess2 < magicNumber && isWhole2 && inRange2) {
            alert("Your guess was lower then the magic number! \nTry again");
        } else if (!isNumber2) {
            alert("Only numeric answers allowed")
        } else if (!isWhole2) {
            alert("Only whole numbers allowed")
        } else if (!inRange2) {
            alert("Your number was out of range")
        } if (userGuess2 === magicNumber) {
            alert("Amazing!!! \n 2nd try!");
            alert("You Won!")
        } else {

            // hard 3rd try
            const userGuess3 = Number(prompt("Choose a number between 1-100"));
            const isWhole3 = Number.isInteger(userGuess3)
            const inRange3 = (1 <= userGuess3 && userGuess3 <= 100)
            const isNumber3 = (!isNaN(userGuess3))
            if (!isNumber3) {
                alert("Only numeric answers allowed")
            } else if (!isWhole3) {
                alert("Only whole numbers allowed")
            } else if (!inRange3) {
                alert("Your number was out of range")
            } if (userGuess3 === magicNumber) {
                alert("Congradulations! \n You guessed correctly on the 3rd try!");
                alert("You Won!")
            } else alert("You lose! \nThe magic number was - " + magicNumber);
        }
    }


    // impossible
} else if (trimedDifficulty.toLowerCase() === impossibleDifficulty || trimedDifficulty.toLowerCase() === imposibleDifficulty || trimedDifficulty === "3" || trimedDifficulty === "3.") {
    alert("Alright, you asked for it...");
    const magicNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(magicNumber);

    // impossible 1st try
    const userGuess1 = Number(prompt("Choose a number between 1-1000"));
    const isWhole1 = Number.isInteger(userGuess1)
    const inRange1 = (1 <= userGuess1 && userGuess1 <= 1000)
    const isNumber1 = (!isNaN(userGuess1))

    if (userGuess1 > magicNumber && isWhole1 && inRange1) {
        alert("Your guess was higher then the magic number! \nTry again");
    } else if (userGuess1 < magicNumber && isWhole1 && inRange1) {
        alert("Your guess was lower then the magic number! \nTry again");
    } else if (!isNumber1) {
        alert("Only numeric answers allowed")
    } else if (!isWhole1) {
        alert("Only whole numbers allowed")
    } else if (!inRange1) {
        alert("Your number was out of range")
    } if (userGuess1 === magicNumber) {
        alert("Incredible!!! \n You are some kind of a wizard!");
        alert("You Won!")
    } else {

        // Impossible 2nd try
        const userGuess2 = Number(prompt("Choose a number between 1-1000"));
        const isWhole2 = Number.isInteger(userGuess2)
        const inRange2 = (1 <= userGuess2 && userGuess2 <= 1000)
        const isNumber2 = (!isNaN(userGuess2))
        if (userGuess2 > magicNumber && isWhole2 && inRange2) {
            alert("Your guess was higher then the magic number! \nTry again");
        } else if (userGuess2 < magicNumber && isWhole2 && inRange2) {
            alert("Your guess was lower then the magic number! \nTry again");
        } else if (!isNumber2) {
            alert("Only numeric answers allowed")
        } else if (!isWhole2) {
            alert("Only whole numbers allowed")
        } else if (!inRange2) {
            alert("Your number was out of range")
        } if (userGuess2 === magicNumber) {
            alert("Amazing!!! \n 2nd try!");
            alert("You Won!")
        } else {

            // Impossible 3rd try
            const userGuess3 = Number(prompt("Choose a number between 1-1000"));
            const isWhole3 = Number.isInteger(userGuess3)
            const inRange3 = (1 <= userGuess3 && userGuess3 <= 1000)
            const isNumber3 = (!isNaN(userGuess3))
            if (!isNumber3) {
                alert("Only numeric answers allowed")
            } else if (!isWhole3) {
                alert("Only whole numbers allowed")
            } else if (!inRange3) {
                alert("Your number was out of range")
            } if (userGuess3 === magicNumber) {
                alert("Congradulations! \n 3rd try is still impressive for this range!");
                alert("You Won!")
            } else alert("You lose! \nThe magic number was - " + magicNumber);
        }
    }

    //wrong difficulty selection
} else {
    alert("Sorry, your input wasn't one of the options...\n Please try again");
}

