/*
## Action castle

1. Finish the adventure
2. Read the general rules and implement them as well
   http://www.memento-mori.com/pdf/parsely-preview-n-play-edition

## Custom adventure

Build your own adventure a la Action Castle (with/without using parsley system)

## Nim

Nim is a 2 player game.  
There are 13 matches on the table at the beginning of the game.  
Each player in his turn **must** take 1, 2 or 3 matches from the pile.  
The player to take the last match, loses.

1. Implement a 2 player version of this game (validate inputs etc)
2. Implement a single player version, with 3 levels of difficulty:
   - Easy -   the computer goes first and just takes a random number of matches on each turn
   - Medium - the computer goes first, on the first turn it will take a random number of matches. Starting from his next turn, the computer will try to win if giver the chance.
   - Impossible - the computer goes second and wins every time.
3. Build a main menu
4. Make the number of matches configurable
*/

let hasLamp = true;
let hasFishingPole = false;
let hasFish = false;
let hasRose = false;

cottage();

function cottage() {
    const userInput = simplePrompt(`You are standing in a small cottage. ${!hasFishingPole ? "There is a *fishing pole* here. " : ""}A door leads outside.`);

    switch (userInput) {
        case undefined:
            return;
        case "out":
            gardenPath();
            break;
        case "examine fishing pole":
            alert("You see a simple fishing pole.");
            cottage();
            break;
        case "take fishing pole":
            if (!hasFishingPole) {
                hasFishingPole = true;
                alert("Fishing pole added to inventory.");
                cottage();
                break;
            }
        default:
            announceUnknownInput(userInput);
            cottage();
    }
}

function gardenPath() {
    const userInput = simplePrompt(`You’re on a lush garden path that leads north and south.
There is a rosebush here.
There is a cottage here.
There is a winding path to the north.
There is a fish pond to the south.`);

    switch (userInput) {
        case undefined:
            return;
        case "enter":
            cottage();
            break;
        case "north":
            windingPath();
            break;
        case "south":
            fishPond();
            break;
        default:
            announceUnknownInput(userInput);
            gardenPath();
    }
}

function windingPath() { }

function fishPond() {
    const userInput = simplePrompt("You are at the edge of a fish pond. A path leads north.");

    switch (userInput) {
        case undefined:
            return;
        case "north":
            gardenPath();
            break;
        case "use fishing pole":
            if (hasFishingPole) {
                if (hasFish) {
                    alert("You catch nothing...");
                    fishPond();
                } else {
                    hasFish = true;
                    alert("You catch a wriggling *fish*!");
                    fishPond();
                }
                break;
            }
        default:
            announceUnknownInput(userInput);
            fishPond();
    }
}

function drawBridge() { }

function simplePrompt(message: string) {
    let userInput = prompt(message)?.trim()?.toLowerCase();

    while (hasFish && userInput === "eat fish") {
        alert("You can't eat the fish! It's raw!");
        userInput = prompt(message)?.trim()?.toLowerCase();
    }

    return userInput;
}

function announceUnknownInput(input: string) {
    alert(`Sorry, you can't "${input}"`);
}

// stub (API - application programmable interface)
// features/incremental implementation