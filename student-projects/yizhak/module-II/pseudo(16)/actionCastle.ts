let hasLamp = true;
let hasFishingPole = false;
let hasFish = false;
let hasRose = false;
let hasKey = false;
let hasCandle = false;
let hasCrown = false;
let hasBranch = false;
let lightLamb = false;
let lightCnadle = false;

// לקחת מפה את הפונקציות לשימוש


function tower() {}


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
        case "take rose":
            if (!hasRose) {
                hasRose = true;
                alert("rose added to inventory.");
                gardenPath();
                break;
            }
        default:
            announceUnknownInput(userInput);
            gardenPath();
    }
}

function windingPath() { 
    const userInput = simplePrompt(`You are walking along a winding path
that leads south and east. 
There is a tall tree here.
There is a gardenpath to the south. 
There is a drawbridge to the east.`);

    switch (userInput) {
        case undefined:
            break;
        case "south":
            gardenPath();
            break;
        case "east":
            drawBridge();
            break;
        case "up":
            topOfTallTree();
            break;
        default:
            announceUnknownInput(userInput);
            windingPath();
    }
}

function topOfTallTree() {
    const userInput = simplePrompt(`You climb up the tree—it takes a long time.
    You are at the top of a tall tree. There is a stout dead 
    branch here. From your perch you can see the tower 
    of Action Castle.`)

    switch (userInput) {
        case undefined:
            return;
        case "take the dead branch":
            if (!hasBranch) {
                hasBranch = true;
                alert("dead branch added to inventory.");
                topOfTallTree();
                break; 
            }
        case "down":
            windingPath();
            break;
        default:
            announceUnknownInput(userInput);
            topOfTallTree();
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

function drawBridge() {
    const userInput = simplePrompt(`You come to the drawbridge of Action Castle.
There is a mean troll guarding the bridge.
There is a winding path to the west.
There is a court yard to the east.`)

    switch (userInput){
        case undefined:
            return;
        case "west":
            windingPath();
            break;
        case "east":
            if (hasFish){
                alert("You gave the troll the fish in exchange for passage")
                courtYard();
                break
            } else {
                alert("The troll is blocking your passage, you needs something to distract him.")
                drawBridge();
                break;
            }
        default:
            announceUnknownInput(userInput);
            drawBridge();

    }
 }

 function courtYard() {
    const userInput = simplePrompt(`You are in the courtyard of Action Castle.
A castle guard stands watch to the east.
Stairs lead up into the tower and 
down into darkness.
There is a greatFeastingHall to the east.
There is a drawBridge to the weat
There is a towerStairs to the up
There is a dungeonStairs to the down.`)

    switch(userInput) {
        case undefined:
            return;
            //להוסיף פה פונקצונליות של כתר
        case "east":
            greatFeastingHall();
            //השחקן לא יכול להיכנס לפה כל עוד השומר לא חסר הכרה
            break;
        case "west":
            drawBridge();
            break;
        case "up":
            towerStairs();
            break;
        case "down":
            dungeonStairs();
            break;
        default:
            announceUnknownInput(userInput);
            courtYard();
    }
 }

 function towerStairs() {
    const userInput = simplePrompt(`You climb the tower stairs until you come to a door.
The door is locked.`)

    switch(userInput){
        case undefined:
            return;
        case "up":
            if(hasKey){
                tower();
            } else {
                alert(`you need the guard’s key to unlock the door.`)
                towerStairs();
                break;
            }
        case "down":
            courtYard();
            break;
        default:
            announceUnknownInput(userInput);
            towerStairs();
    }
 }


 function dungeonStairs() {
    const userInput = simplePrompt(`You are on the dungeon stairs. It’s very dark here.`)

    switch(userInput){
        case undefined:
            return;
        case "down":
            alert("It’s too dark to see! Hint: Look for an object that makes light")
        case "light lamb":
            //להוסיף פה פונקציה שהנר לא מספיק טוב והוא לא עובד.
            lightLamb = true;
            alert(`now you You can see well enough to continue down the stairs.`)
            dungeon();
            break;
        case "up":
            courtYard();
            break;
        default:
            announceUnknownInput(userInput);
            dungeonStairs();
    }
 }

 function greatFeastingHall() {
    const userInput = simplePrompt(`You stand inside the great feasting hall. There is a strange 
candle here. Exits are to the east and west.
You see that the strange candle is 
covered in mysterious runes.`)
    // אם השחקן לובש את הכתר החדר מלא באנשים שמרימים לכבודו כוסית.

    switch(userInput) {
        case undefined:
            return;
        case "take candle":
            hasCandle = true;
            greatFeastingHall();
            break;
        case "wast":
            courtYard();
            break;
        case "east":
            throneRoom();
            break;
        default:
            announceUnknownInput(userInput);
            greatFeastingHall();
    }
 }

 function dungeon() {
    const userInput = simplePrompt(`You are in the dungeon. There is a spooky ghost here. 
    Stairs lead up. The ghost has bony, claw-like fingers 
    and wears a gold crown.`)

    switch (userInput){
        case undefined:
            return;
        case "light the candel":
            if(hasCandle){
                alert(`The strange candle gives off a strange, 
                acrid smoke, causing the ghost to flee the dungeon. It 
                leaves behind a gold crown`)
                hasCrown = true;
                dungeon();
            } else {
                alert(`RUN! the spooky ghost will kill you. Hint: Find something to scare the ghost`)
            }
            break;
        case "up":
            dungeonStairs();
            break;
        default:
            announceUnknownInput(userInput);
            dungeon();
    }
 }

 function throneRoom() {
    const userInput = simplePrompt(`This is the throne room of Action Castle. There is an 
    ornate gold throne here.`)

    if (hasCrown){
        alert(`the room is 
        full of people. 
        The people gathered here cheer and applaud as you`)
    } else {
        throneRoom()
    }

    switch (userInput){
        case undefined:
            return;
        case "sit on throne":
            if(hasCrown){
                alert("You are now the new ruler of Action Castle!")
            } else {
                throneRoom()
            }
            break;
        case "west":
            greatFeastingHall();
            break;
        default:
            announceUnknownInput(userInput);
            throneRoom();
    }

 }


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