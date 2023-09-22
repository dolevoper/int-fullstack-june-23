/*
## Guess my numbers

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


const myLevel10 = 10;
const myLevel100 = 100;
const myLevel1000 = 1000;

initchoice();


function initchoice(){

    const ChooseLevel:any = prompt("Enter the game level:\n----------------------- \n1 or Easy \n2 or Hard\n3 or Impossible\n Press cancel to exit the game");

    switch (ChooseLevel?.toLowerCase()?.trim()){
        case "easy":
        case "1":
            alert("You have selected a level 1");
            gameLevel(myLevel10);
            break;

        case "hard":
        case "2":
            alert("You have selected a level 2");
            gameLevel(myLevel100);
            break;

        case "impossible":
        case "3":
            alert("You have selected a level 3");
            gameLevel(myLevel1000);
            break;

        default:
            if(ChooseLevel === null || ChooseLevel === 0){
                alert("You are out of the game now");
                break;
            }else if(ChooseLevel < 1 || ChooseLevel > 3 || ChooseLevel != "easy" || ChooseLevel != "hard" || ChooseLevel != "impossible"){
                alert("Enter correct level, Try again");
                initchoice();
            }
            
    }
    
}

function gameLevel(myLevel:number){

    const iterable = [1, 2, 3];
    for (const counter of iterable) {


        alert("Start count: " + counter + "\nEnter Number from 1 until " + myLevel);
        
        const myRandomNum = Math.floor(Math.random() * myLevel) + 1;
        console.log("Random number is: " + myRandomNum);

        const Guess = Number(prompt("Guess the random number"));

        //alert(Guess);
        const Status = valiadte(Guess, myLevel);

        if(Status === "exit"){
            alert("Exit now the game")
            return;
        }else{
            enterGuessRandom(Status, Guess, myRandomNum);
        }

    }

}

function enterGuessRandom(Status:boolean, Guess:number, myRandomNum:number){

    if(Status){
        //alert("true");

        if(myRandomNum === Guess){
            alert("WELL DONE - You guessed the number correctly");
        }else{
            if(Guess > myRandomNum){
                alert("Sorry - Your guess was higher from random number");    
            }else if(Guess < myRandomNum){
                alert("Sorry - Your guess was lower from random number");    
            }
        }

    }else{
        alert("The number range you entered is too large");
    }

}

function valiadte(Guess:number, maxNum:number){

    if(Guess === 0){
        //alert("Exit now the game");
        return "exit";
    }else if(isNaN(Guess)){
        alert("הוזן קלט שאינו מספר");
        return false;
    }else if(Guess < 0){
        alert("הוזן מספר שלילי");
        return false;
    }else if(Guess > maxNum){
        alert("הוזן מספר גדול מ 10");
        return false;
    } else {
        //alert("הוזן מספר חיובי");
        return true;
    }
    
}