/*


## Guess my number

1. Generate a random whole number between 1 and 10. Prompt the user to guess it. Show the appropriate message if the user was able/not able to guess.
2. Validate the numbers (is a number, whole, in the secret's range)
3. If the user guessed wrong, tell him if his guess was higher or lower than the secret number.
4. Ask the user for difficulty level before starting:
   - Easy - secret number between 1 and 10
   - Hard - secret number between 1 and 100
   - Impossible - secret number between 1 and 1000
   - Don't forget to adjust the validation
5. Accept the following answers for difficulty: easy, Easy, 1, EaSy, haRd, harD, 2, 3, IMPOSSIBLE etc...
6. Trailing spaces in difficulty level should be ignored (" eASy ")
7. Give the user 3 guesses (don't use `let`/`var`)
8. If during any guess, the user hits "cancel", stop the game immediately.


*/

const minLevel = 1;
const easyMaxLevel = 10;
const hardMaxLevel = 100;
const impossibleMaxLevel = 1000;
const easyRandomNumber = Math.floor(Math.random() * 10 + 1);
const hardRandomNumber = Math.floor(Math.random() * 100 + 1);
const impossibleRandomNumber = Math.floor(Math.random() * 1000 + 1);
const easyWinner = `You have won the game, the number was ${easyRandomNumber}`;
const hardWinner = `You have won the game, the number was ${hardRandomNumber}`;


function checkGuess (input){

    if(input === null || input === " " || isNaN(input)){
        alert("invalid input try again!");
        return true;
    }
    return false;

}

function checkAnswer (answer){
    if(answer === null || answer === " "){
        alert("invalid input try again!");
        return true;
    }
    return false;

}

function easyCheck (easyMaxCheck){
    if(easyMaxCheck > easyMaxLevel || easyMaxCheck < minLevel){
        alert("You need to guess a number between 1-10!");
        return true;
    }
    return false;
}



function hardCheck (hardMaxCheck){
    if(hardMaxCheck > hardMaxLevel || hardMaxCheck < minLevel){
        alert("you need to guess a number between 1-100!");
        return true;
    }
    return false;
}


const difficulty = prompt("Welcome to guess game chose your diffuclity \n 1.easy \n 2.hard \n 3.impossible")?.toLocaleLowerCase().trim();


if(checkAnswer(difficulty)){

}
else if(difficulty === "easy"){
    const easyFirstGuess = Number(prompt("You choose 'Easy' \n a random number between 1 - 10 has been generate \n you need to guess the number you have 3 guess left!"));

     if(checkGuess(easyFirstGuess) || easyCheck(easyFirstGuess) ){

     }else if (easyFirstGuess === easyRandomNumber){
        alert(easyWinner);
     }else if(easyFirstGuess > easyRandomNumber){
        const easySecondGuess = Number(prompt("Your number is high! you have 2 guess left!"));

        if(checkGuess(easySecondGuess) || easyCheck(easySecondGuess)){

        }else if(easySecondGuess === easyRandomNumber){
            alert(easyWinner);
        }else if(easySecondGuess < easyRandomNumber){
            const easyThirdGuess = Number(prompt("Your Number is low! you have 1 guess left"));

            if(checkGuess(easyThirdGuess) || easyCheck(easyThirdGuess)){

            }else if (easyThirdGuess === easyRandomNumber){
                alert(easyWinner);
            }else if (easyThirdGuess > easyRandomNumber){
                alert("Your number is too high! the number was " + easyRandomNumber)
            }
        }
     } else if(easyFirstGuess < easyRandomNumber){
        const easyFifthGuess = Number(prompt("your number is low! you have 2 guess left!"));

        if(checkGuess(easyFifthGuess) || easyCheck(easyFifthGuess)){

        }else if (easyFifthGuess === easyRandomNumber){
            alert(easyWinner);
        }else if(easyFifthGuess > easyRandomNumber){
            const easySixGuess = Number(prompt("your number is high! you have 1 guess left"));

            if(checkGuess(easySixGuess) || easyCheck (easySixGuess)){

            }else if (easySixGuess === easyRandomNumber){
                alert(easyWinner);
            }else if (easySixGuess < easyRandomNumber){
                alert("your number is low! the number was " + easyRandomNumber);
            }
        }
     }
}else if(difficulty === "hard"){
    const hardFirstGuess = Number(prompt("You choose 'Hard' \n a random number between 1 - 100 has been generate \n you need to guss the number you have 3 guess left!"));
    if(checkGuess(hardFirstGuess) || hardCheck(hardFirstGuess)){

    }else if(hardFirstGuess === hardRandomNumber){
        alert(hardRandomNumber);
    }else if(hardFirstGuess > hardRandomNumber){
        const hardSecounGuess = Number(prompt("Your number is high! you have 2 guess left!"))

        if(checkGuess(hardSecounGuess) || hardCheck(hardSecounGuess)){

        }else if(hardSecounGuess === hardRandomNumber){
            alert(hardRandomNumber)
        }else if(hardSecounGuess < hardRandomNumber){
            const hardThirdGuess = Number(prompt("Your number is low! you have 1 guess left!"))

            if(checkGuess(hardThirdGuess) || hardCheck(hardThirdGuess)){

            }else if(hardThirdGuess === hardRandomNumber){
                alert(hardWinner);
            }else if(hardThirdGuess > hardRandomNumber){
                alert("your number is high! the number was " + hardRandomNumber);
            }
        }
    }else if(hardFirstGuess < hardRandomNumber){
        const hardFourGuess = Number(prompt("Your number is low! you have 2 guess left"));

        if(checkGuess(hardFourGuess) || hardCheck(hardFourGuess)){

        }else if(hardFourGuess === hardRandomNumber){
            alert(hardWinner);
        }else if(hardFourGuess > hardRandomNumber){
            const hardFiveGuess = Number(prompt("Your number is high! you have 1 guess left"));

            if(checkGuess(hardFiveGuess) || hardCheck(hardFiveGuess)){

            }else if(hardFiveGuess === hardRandomNumber){
                alert(hardWinner);
            }else if(hardFirstGuess < hardRandomNumber){
                alert("Your number is low! the number was " + hardRandomNumber);
            }
        }
    }

}else if(difficulty === "impossible"){

}