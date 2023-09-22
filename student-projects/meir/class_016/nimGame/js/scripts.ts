/*
## Nim

Nim is a 2 player game.  
There are 13 matches on the table at the beginning of the game.  
Each player in his turn **must** take 1, 2 or 3 matches from the pile.  
The player to take the last match, loses.

1. Implement a 2 player version of this game (validate inputs etc)
2. Implement a single player version, with 3 levels of difficulty:
   - Easy - the computer goes first and just takes a random number of matches on each turn
   - Medium - the computer goes first, on the first turn it will take a random number of matches. Starting from his next turn, the computer will try to win if giver the chance.
   - Impossible - the computer goes second and wins every time.
3. Build a main menu
4. Make the number of matches configurable
*/


let numOfBalls = 0;
let netoBalls = 0;

initGame();

function initGame() {

    numOfBalls = Number(prompt("Enter the num of balls you want to create", ""));

    const status = validate(numOfBalls);

    if (status === "exit") {
        alert("Exit now the game");
        return;
    }

    if (status) {
        netoBalls = numOfBalls;
        createBalls(netoBalls);
    } else {
        alert("Not valid number, try again");
        initGame();
    }

}

function createBalls(netoBalls: number) {

    let objNum = "";
    for (let i = 1; i <= netoBalls; i++) {
        objNum = objNum + " 0 "
    }
    
    alert("You create " + numOfBalls + " Objects:\n" + objNum);
    chooseHowStart();
}

function chooseHowStart() {

    const whoStartsPlayFirst = Number(prompt("Choose who starts playing first, you or computer?\n1 - Player\n2 - Computer", ""));

    const statusWhoStarts = validate(whoStartsPlayFirst);

    if (statusWhoStarts === "exit") {
        alert("Exit now the game");
        return;
    }

    if (statusWhoStarts) {

        switch (whoStartsPlayFirst) {
            case 1:
                player(netoBalls);
                break;
            case 2:
                Comp(netoBalls);
                break;
            default:
                alert("Invalid number, Please enter\n1 - player\n2 - computer");
                chooseHowStart();
                break;
        }

    } else {
        alert("Not valid number, try again");
        chooseHowStart();
    }

}

function player(netoBalls: number) {
    //alert("player now: " + netoBalls);

    const playerRnd = Math.floor(Math.random() * 3) + 1;
    console.log("random number of player is: " + playerRnd);

    netoBalls = netoBalls - playerRnd;

    let myBalls = "";
    for (let i = 1; i <= netoBalls; i++) {
        myBalls = myBalls + " 0 ";
    }

    alert("The objects of player now:\n" + myBalls);

    if (netoBalls <= 1) {
        alert("Player won !!!");
        return;
    } else {
        Comp(netoBalls);
    }

}

function Comp(netoBalls: number) {
    //alert("comp now: " + netoBalls);

    const compRnd = Math.floor(Math.random() * 3) + 1;
    console.log("random number of comp is: " + compRnd);

    netoBalls = netoBalls - compRnd;

    let myBalls = "";
    for (let i = 1; i <= netoBalls; i++) {
        myBalls = myBalls + " 0 ";
    }

    alert("The objects of computer now:\n" + myBalls);


    if (netoBalls <= 1) {
        alert("Computer won !!!");
        return;
    } else {
        player(netoBalls);
    }
}

function validate(numOfBalls: number) {
    if (numOfBalls === 0) {
        //alert("Exit now the game");
        return "exit";
    } else if (isNaN(numOfBalls)) {
        //alert("הוזן קלט שאינו מספר");
        return false;
    } else if (numOfBalls < 0) {
        //alert("הוזן מספר שלילי");
        return false;
    } else {
        //alert("הוזן מספר חיובי");
        return true;
    }
}