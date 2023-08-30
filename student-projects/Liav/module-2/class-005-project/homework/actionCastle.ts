let hasLamp = true;
let hasFishingPole = false;
let hasFish = false;
let hasRose = false;
let hadDeadBranch = false;

drawBridge();

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
            }
            cottage();
            break;
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

function windingPath() {
    let userInput = simplePrompt("You are walking along a winding path that leads south and east. There is a tall tree here");
    let isOnTop = false;

    switch (userInput) {
        case undefined:
            return;
        case "climb tree up":
            alert("You climb up the tree - it takes a long time");
            userInput = simplePrompt(`You are at the top of a tall tree. There is a stout *dead branch* here. From your perch, you can see the tower of Action Castle`);
            if (userInput === "take dead branch") {
                alert("Dead Branch added to inventory.");
                hadDeadBranch = true;
                userInput = simplePrompt("You are at the top of a tall tree. From your perch, you can see the tower of Action Castle");
                if (userInput === "climb tree down") {
                    isOnTop = false;
                }
            }
            isOnTop = true;
            break;

        case "climb tree down":
            if (isOnTop === false) {
                alert("You need to climb up first!");
            } else {
                alert("You climb down the tree - it takes a long time.");
                isOnTop = false;

                userInput = String(simplePrompt("You can travel to: \n SOUTH Garden Path \n EAST Drawbridge"))

                if (userInput === "south") {
                    gardenPath();
                } else if (userInput === "east") {
                    drawBridge();
                } else {
                    announceUnknownInput(userInput);
                    windingPath();
                }

            }
            break;
        case "jump down":
            if (isOnTop === false) {
                alert("You need to climb up first!");
            } else {
                alert("You didn't survive the jump!");
                cottage();
            }
            break;
        default:
            announceUnknownInput(userInput);
            windingPath();
    }
}

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
                } else {
                    hasFish = true;
                    alert("You catch a wriggling *fish*!");
                }
                fishPond();
            }
            break;
        default:
            announceUnknownInput(userInput);
            fishPond();
    }
}

function drawBridge() {
    let userInput = String(simplePrompt("You come to the drawbridge of Action Castle. There is a mean troll guarding the bridge."));
    let trollPass = 0;

    while (trollPass < 3) {
        switch (userInput) {
            case "cross bridge":
                trollPass++;

                if (trollPass < 3) {
                    alert("The troll blocks your path.");
                    userInput = String(simplePrompt("What should you do next?"));
                } else {
                    alert("The troll killed you!");
                    cottage();
                }
                break;

            case "examine troll":
                alert("The troll has a warty green hide and looks hungry.");
                userInput = String(simplePrompt("What should you do next?"));
                break;

            case "give fish":
                if (hasFish) {
                    alert("The troll runs off to eat its prize and you pass the bridge")
                    userInput = String(simplePrompt("You can travel to \n WEST Winding Path \n EAST Courtyard"))
                    if (userInput === "west") {
                        windingPath();
                    } else if (userInput === "east") {
                        CourtYard();
                    } else {
                        alert("You dont have the fish in the inventory!")
                    }
                }
                break;

            default:
                announceUnknownInput(userInput);
                drawBridge();
        }
    }
}

function CourtYard() {

}

function simplePrompt(message: string) {
    let userInput = prompt(message)?.trim()?.toLowerCase();

    if (userInput === null) {
        return undefined; 
    }

    while (hasFish && userInput === "eat fish") {
        alert("You can't eat the fish! It's raw!");
        userInput = prompt(message)?.trim()?.toLowerCase();
    }

    return userInput;
}

function announceUnknownInput(input: string) {
    alert(`Sorry, you can't "${input}"`);
}
